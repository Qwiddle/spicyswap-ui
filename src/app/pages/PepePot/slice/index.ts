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
  burnTotal: 0,
  oddsIncrease: 0,
  currentOdds: 0,
  currentPot: 0,
  pending: false,
  inProgress: false,
  betHistory: [],
  betFinished: false,
  betStatus: 'win',
  currentBet: null,
  balance: [],
  lastBetHash: '',
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
      const {
        burnAmount,
        daoAmount,
        currentOdds,
        currentPot,
        totalWagered,
        betAmount,
        burnTotal,
      } = action.payload;

      state.burnAmount = burnAmount;
      state.burnTotal = burnTotal;
      state.daoAmount = daoAmount;
      state.currentOdds = currentOdds;
      state.currentPot = currentPot;
      state.totalWagered = totalWagered;
      state.betAmount = betAmount;
    },
    setBetHistory(state, action: PayloadAction<PepePotBetHistory[]>) {
      state.betHistory = action.payload;
    },
    betLost(state, action: PayloadAction<{ opHash: string }>) {
      state.betFinished = true;
      state.betStatus = 'lose';
      state.lastBetHash = action.payload.opHash;
    },
    betWin(state, action: PayloadAction<{ opHash: string }>) {
      state.betFinished = true;
      state.betStatus = 'win';
      state.lastBetHash = action.payload.opHash;
    },
    resetBet(state) {
      state.betFinished = false;
      state.betStatus = '';
    },
    setCurrentBet(state, action: PayloadAction<any>) {
      state.currentBet = action.payload;
    },
    getTokenBalance(
      state,
      action: PayloadAction<{ userAddress: string; token: string }>,
    ) {},
    setBalance(
      state,
      action: PayloadAction<{ token: string; balance: number }>,
    ) {
      const prevBalance = state.balance.findIndex(
        b => b.token === action.payload.token,
      );

      if (prevBalance !== -1) {
        state.balance[prevBalance] = action.payload;
      } else {
        state.balance = [...state.balance, action.payload];
      }
    },
  },
});

export const { actions: pepePotActions, reducer } = slice;

export const usePepePotSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: pepePotSaga });
  return { actions: slice.actions };
};
