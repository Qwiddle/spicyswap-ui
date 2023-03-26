import { TokenPrice } from './SpicyToken';

export interface SpicyPool {
  pairId: number;
  contract: string;
  fromToken: SpicyPoolToken;
  toToken: SpicyPoolToken;
  volume: SpicyPoolVolume;
  totalReserveXtz: number;
  totalReserveUsd: number;
  txCount: number;
}

export interface SpicyPoolToken {
  reserve: number;
  tag: string;
  volume: number;
  price: TokenPrice;
}

export interface SpicyPoolVolume {
  hourlyVolumeXtz: number;
  hourlyVolumeUsd: number;
}