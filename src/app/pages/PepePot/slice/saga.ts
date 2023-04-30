import { put, takeLatest } from 'redux-saga/effects';
import { pepePotActions as actions } from '.';
import {
  getContributions,
  getPotStatistics,
  getWagered,
  transformMetrics,
} from '../util/statistics';

export function* getStatistics() {
  try {
    const getStats = async () => {
      const statistics = await getPotStatistics();
      const contributions = await getContributions();
      const wagered = await getWagered();

      if (statistics) {
        return transformMetrics({
          ...contributions,
          ...statistics,
          totalWagered: wagered,
        });
      }
    };

    const stats = yield getStats();

    if (stats) {
      yield put(actions.setStatistics(stats));
    }
  } catch {
    // do nothing
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* pepePotSaga() {
  yield takeLatest(actions.getStatistics.type, getStatistics);
}
