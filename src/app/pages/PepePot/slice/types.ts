import { PepePotBet, PepePotBetHistory, TokenBalance } from '../types';

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
  betFinished: boolean;
  betStatus: 'win' | 'lose' | '';
  currentBet: PepePotBet | null;
  balance: TokenBalance[];
  lastBetHash: string;
}
