import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PepePotState } from './types';
import { pepePotSaga } from './saga';

export const initialState: PepePotState = {
  betAmount: 0,
  daoAmount: 0,
  potAmount: 0,
  burnAmount: 0,
  oddsIncrease: 0,
  currentOdds: 0,
  currentPot: 0,
  pending: false,
};

const slice = createSlice({
  name: 'pepePot',
  initialState,
  reducers: {},
});

export const { actions: pepePotActions, reducer } = slice;

export const usePepePotSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: pepePotSaga });
  return { actions: slice.actions };
};
