import { call, put, take, takeLatest } from 'redux-saga/effects';
import { randomBytes } from 'crypto-browserify';
import { pepePotActions as actions } from '.';
import {
  getContributions,
  getPepePot,
  getWagered,
  transformMetrics,
} from '../util/statistics';
import { Tezos } from 'app/services/wallet-service';
import {
  PEPE_CONTRACT,
  PEPE_TOKEN_ID,
  POT_CONTRACT,
  TZKT_API_GHOSTNET_URL,
} from 'app/common/const';
import { getPotBets } from '../util/bets';
import {
  LocalStorageService,
  StorageKeys,
} from 'app/services/local-storage-service';
import { request } from 'utils/request';
import { rawToBalance } from 'utils/spicy';

export function* getParameters() {
  try {
    const getParams = async () => {
      const pepePotParams = await getPepePot();
      const contributions = await getContributions();
      const wagered = await getWagered();

      return transformMetrics({
        ...contributions,
        ...pepePotParams,
        wagered,
      });
    };

    const getBets = async () => {
      const potBets = await getPotBets();
      return potBets;
    };

    const params = yield getParams();
    const potBets = yield getBets();

    if (params) {
      yield put(actions.setParameters(params));
      yield put(actions.setBetHistory(potBets));

      const storageService = new LocalStorageService();

      storageService.setItem(StorageKeys.potStatistics, params);
      storageService.setItem(StorageKeys.betHistory, potBets);
    }
  } catch {
    // do nothing
  }
}

export function* executeBet({
  payload,
}: ReturnType<typeof actions.executeBet>) {
  const { userAddress } = payload;

  try {
    const potContract = yield Tezos.wallet.at(POT_CONTRACT);
    const tokenContract = yield Tezos.wallet.at(PEPE_CONTRACT);

    const seed = randomBytes(32).toString('hex');

    const batch = yield Tezos.wallet
      .batch()
      .withContractCall(
        tokenContract.methods.update_operators([
          {
            add_operator: {
              owner: userAddress,
              operator: POT_CONTRACT,
              token_id: PEPE_TOKEN_ID,
            },
          },
        ]),
      )
      .withContractCall(potContract.methods.bet(seed))
      .withContractCall(
        tokenContract.methods.update_operators([
          {
            remove_operator: {
              owner: userAddress,
              operator: POT_CONTRACT,
              token_id: PEPE_TOKEN_ID,
            },
          },
        ]),
      )
      .send();

    yield batch.confirmation();

    yield put(actions.betExecuted(true));
  } catch (e) {
    yield put(actions.betExecuted(false));
    console.log(e);
  }
}

//todo: just use swap token balance actions and remove this
export function* getTokenBalance({
  payload,
}: ReturnType<typeof actions.getTokenBalance>) {
  try {
    const { token, userAddress } = payload;

    const tokenContract = token.split(':')[0];
    const tokenId = token.split(':')[1] === 'null' ? 0 : token.split(':')[1];

    const requestURL = `${TZKT_API_GHOSTNET_URL}tokens/balances?account=${userAddress}&token.contract=${tokenContract}&token.tokenId=${tokenId}`;

    const balances = yield call(request, requestURL);
    const balance = rawToBalance(Number(balances[0]?.balance), 2) || 0;

    yield put(
      actions.setBalance({
        token,
        balance,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* pepePotSaga() {
  yield takeLatest(actions.getParameters.type, getParameters);
  yield takeLatest(actions.executeBet.type, executeBet);
  yield takeLatest(actions.getTokenBalance.type, getTokenBalance);
}
