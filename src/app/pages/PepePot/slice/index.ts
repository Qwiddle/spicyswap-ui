import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PepePotState } from './types';
import { pepePotSaga } from './saga';
import { BetParameters, PepePotBetHistory, PepePotStatistics } from '../types';
import toast from 'react-hot-toast';
import { toastConfig } from 'app/common/toast';

export const initialState: PepePotState = {
  betAmount: 0,
  totalWagered: 0,
  daoAmount: 0,
  potAmount: 0,
  burnAmount: 0,
  oddsIncrease: 0,
  currentOdds: 0,
  currentPot: 0,
  pending: false,
  inProgress: false,
  betHistory: [],
  betFinished: false,
  betStatus: 'win',
};

const slice = createSlice({
  name: 'pepePot',
  initialState,
  reducers: {
    executeBet(state, action: PayloadAction<BetParameters>) {
      state.pending = true;
    },
    betExecuted(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        toast.success('Bet confirmed!', {
          ...toastConfig,
          icon: '🐸',
          position: 'top-center',
        });
      } else {
        toast.error('Bet failed. (probably)', {
          ...toastConfig,
          icon: '🐸',
          position: 'top-center',
        });
      }

      state.pending = false;
    },
    getBets(state) {},
    getParameters(state) {},
    setParameters(state, action: PayloadAction<PepePotStatistics>) {
      const { burnAmount, daoAmount, currentOdds, currentPot, totalWagered } =
        action.payload;

      state.burnAmount = burnAmount;
      state.daoAmount = daoAmount;
      state.currentOdds = currentOdds;
      state.currentPot = currentPot;
      state.totalWagered = totalWagered;
    },
    setBetHistory(state, action: PayloadAction<PepePotBetHistory[]>) {
      state.betHistory = action.payload;
    },
    betLost(state) {
      state.betFinished = true;
      state.betStatus = 'lose';
    },
    betWin(state) {
      state.betFinished = true;
      state.betStatus = 'win';
    },
    resetBet(state) {
      state.betFinished = false;
      state.betStatus = '';
    },
  },
});

export const { actions: pepePotActions, reducer } = slice;

export const usePepePotSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: pepePotSaga });
  return { actions: slice.actions };
};
