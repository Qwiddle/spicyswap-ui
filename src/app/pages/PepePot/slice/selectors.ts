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
