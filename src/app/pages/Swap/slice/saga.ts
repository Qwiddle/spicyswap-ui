import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { spicySwapActions as actions } from '.';
import { SpicySwapErrorType } from './types';
import { SpicyToken } from 'types/SpicyToken';
import { calculateDayAgg } from 'utils/spicy';
import { SpicyPool } from 'types/SpicyPool';

const SPICY_API = 'https://spicyb.sdaotools.xyz/api/rest';

export function* getTokens() {
  const requestURL = `${SPICY_API}/TokenList?day_agg_start=${calculateDayAgg()}`;

  try {
    // Call our request helper (see 'utils/request')
    const { tokens } = yield call(request, requestURL);

    const transformTokens = (tokens): SpicyToken[] => {
      return tokens.map(token => ({
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        img: token.img,
        tag: token.tag,
        derivedXtz: token.derivedxtz,
        derivedUsd: token.derivedusd,
        totalLiquidityXtz: token.totalliquidityxtz,
        totalLiquidityUsd: token.totalliquidityusd,
      }));
    };

    if (tokens?.length > 0) {
      const transformedTokens = transformTokens(tokens);
      yield put(actions.tokensLoaded(transformedTokens));
    } else {
      yield put(actions.tokensError(SpicySwapErrorType.TOKEN_NOT_FOUND));
    }
  } catch (err: any) {
    yield put(actions.tokensError(SpicySwapErrorType.RESPONSE_ERROR));
  }
}

export function* getPools() {
  const requestURL = `${SPICY_API}/PoolListAll?day_agg_start=${calculateDayAgg()}`;

  try {
    // Call our request helper (see 'utils/request')
    const { pair_info: pools } = yield call(request, requestURL);

    const transformPools = (pools): SpicyPool[] => {
      const transformed = pools.map(pool => {
        return {
          pairId: pool.pair_id,
          contract: pool.contract,
          fromToken: {
            reserve: pool.reserve0,
            tag: pool.token0,
            volume: pool.volumetoken0,
            price: {
              xtz: pool.token_a.derivedxtz,
              usd: pool.token_a.derivedusd,
            },
          },
          toToken: {
            reserve: pool.reserve1,
            tag: pool.token1,
            volume: pool.volumetoken1,
            price: {
              xtz: pool.token_b.derivedxtz,
              usd: pool.token_b.derivedusd,
            },
          },
          volume: {
            hourlyVolumeXtz:
              pool.pairHourData_aggregate.aggregate.sum.hourlyvolumextz,
            hourlyVolumeUsd:
              pool.pairHourData_aggregate.aggregate.sum.hourlyvolumeusd,
          },
          totalReserveXtz: pool.reservextz,
          totalReserveUsd: pool.reserveusd,
          txCount: pool.txcount,
        };
      });

      return transformed;
    };

    if (pools?.length > 0) {
      const transformedPools = transformPools(pools);
      yield put(actions.poolsLoaded(transformedPools));
    } else {
      yield put(actions.poolsError(SpicySwapErrorType.POOL_NOT_FOUND));
    }
  } catch (err: any) {
    yield put(actions.poolsError(SpicySwapErrorType.RESPONSE_ERROR));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* spicySwapSaga() {
  // Watches for loadTokens actions and calls getTokens when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadTokens.type, getTokens);
  yield takeLatest(actions.loadPools.type, getPools);
}
