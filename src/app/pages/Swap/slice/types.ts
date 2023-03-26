import { SpicyPool } from 'types/SpicyPool';
import { SpicyToken } from 'types/SpicyToken';
import { SwapPair } from 'types/Swap';

/* --- STATE --- */
export interface SpicySwapState {
  loading: boolean;
  error?: SpicySwapErrorType | null;
  tokens: SpicyToken[];
  pools: SpicyPool[];
  fromAmount?: number;
  toAmount?: number;
  fromAmountUsd?: number;
  toAmountUsd?: number;
  pair?: SwapPair;
}

export const enum SpicySwapErrorType {
  RESPONSE_ERROR = 1,
  TOKEN_NOT_FOUND = 2,
  POOL_NOT_FOUND = 3,
}

export type GetTokenProps = {
  transformTokens: (tokens: any[]) => SpicyToken[];
};

export type GetPoolProps = {
  transformPools: (pools: any[]) => SpicyPool[];
};
