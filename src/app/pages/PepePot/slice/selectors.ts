import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.pepePot || initialState;

export const selectStatistics = createSelector(
  [selectDomain],
  pepePotState => ({
    burnAmount: pepePotState.burnAmount,
    daoAmount: pepePotState.daoAmount,
    currentOdds: pepePotState.currentOdds,
    currentPot: pepePotState.currentPot,
    totalWagered: pepePotState.totalWagered,
  }),
);

export const selectParameters = createSelector(
  [selectDomain],
  pepePotState => ({
    betAmount: pepePotState.betAmount,
    oddsIncrease: pepePotState.oddsIncrease,
  }),
);

export const selectBetHistory = createSelector(
  [selectDomain],
  pepePotState => pepePotState.betHistory,
);

export const selectIsPending = createSelector(
  [selectDomain],
  pepePotState => pepePotState.pending,
);
