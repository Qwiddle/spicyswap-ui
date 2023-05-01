import { put, takeLatest } from 'redux-saga/effects';
import { randomBytes } from 'crypto';
import { pepePotActions as actions } from '.';
import {
  getContributions,
  getPepePot,
  getWagered,
  transformMetrics,
} from '../util/statistics';
import { Tezos } from 'app/services/wallet-service';
import { PEPE_CONTRACT, POT_CONTRACT } from 'app/common/const';
import { getPotStorageHistory } from '../util/bets';

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

    const getHistory = async () => {
      const potHistory = await getPotStorageHistory();
      return potHistory;
    };

    const params = yield getParams();
    const potHistory = yield getHistory();

    if (params) {
      yield put(actions.setParameters(params));
      yield put(actions.setBetHistory(potHistory));
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
              token_id: 0,
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
              token_id: 0,
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

/**
 * Root saga manages watcher lifecycle
 */
export function* pepePotSaga() {
  yield takeLatest(actions.getParameters.type, getParameters);
  yield takeLatest(actions.executeBet.type, executeBet);
}
