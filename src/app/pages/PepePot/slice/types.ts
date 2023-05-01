import { PepePotBetHistory } from '../types';

/* --- STATE --- */
export interface PepePotState {
  totalWagered: number;
  betAmount: number;
  daoAmount: number;
  potAmount: number;
  burnAmount: number;
  oddsIncrease: number;
  currentOdds: number;
  currentPot: number;
  pending: boolean;
  inProgress: boolean;
  betHistory: PepePotBetHistory[];
}