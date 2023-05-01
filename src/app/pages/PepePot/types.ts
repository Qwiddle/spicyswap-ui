export interface PepePotStatistics {
  burnAmount: number;
  daoAmount: number;
  currentOdds: number;
  currentPot: number;
  totalWagered: number;
}

export interface PepePotParameters {
  betAmount: number;
  oddsIncrease: number;
}

export interface BetParameters {
  userAddress: string;
}
