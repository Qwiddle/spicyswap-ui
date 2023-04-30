import { put, takeLatest } from 'redux-saga/effects';
import { pepePotActions as actions } from '.';

/**
 * Root saga manages watcher lifecycle
 */
export function* pepePotSaga() {
  // Watches for wallet connection actions and calls connectWallet when one comes in.
}
