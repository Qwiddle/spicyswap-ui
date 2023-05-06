export interface PepePotStatistics {
  burnAmount: number;
  daoAmount: number;
  currentOdds: number;
  currentPot: number;
  totalWagered: number;
  betAmount: number;
  burnTotal: number;
}

export interface PepePotBetHistory {
  account: string;
  odds: string;
  pot: number;
  outcome: boolean;
  operation: string;
}

export interface PepePotParameters {
  betAmount: number;
  oddsIncrease: number;
}

export interface BetParameters {
  userAddress: string;
}

export interface PepePotBet extends BetParameters {
  number: string;
}

export interface TokenBalance {
  balance: number;
  token: string;
}
