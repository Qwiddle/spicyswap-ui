import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PepePotState } from './types';
import { pepePotSaga } from './saga';
import { PepePotStatistics } from '../types';

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
};

const slice = createSlice({
  name: 'pepePot',
  initialState,
  reducers: {
    getBets(state) {},
    getStatistics(state) {},
    setStatistics(state, action: PayloadAction<PepePotStatistics>) {
      const { burnAmount, daoAmount, currentOdds, currentPot, totalWagered } =
        action.payload;

      state.burnAmount = burnAmount;
      state.daoAmount = daoAmount;
      state.currentOdds = currentOdds;
      state.currentPot = currentPot;
      state.totalWagered = totalWagered;
    },
  },
});

export const { actions: pepePotActions, reducer } = slice;

export const usePepePotSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: pepePotSaga });
  return { actions: slice.actions };
};
