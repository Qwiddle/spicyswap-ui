import { MutableRefObject } from 'react';
import { SpicyPool } from 'types/SpicyPool';
import { SpicyToken } from 'types/SpicyToken';
import { SwapDirection, SwapPair } from 'types/Swap';

type FindAvailablePairs = {
  pools: SpicyPool[];
};

type FindAvailablePools = {
  pools: SpicyPool[];
  from?: SpicyToken;
  to?: SpicyToken;
};

type FindAvailableTokens = {
  tokens: SpicyToken[];
  pairs: Array<string[]>;
  from?: SpicyToken;
  to?: SpicyToken;
};

type FilterTokenList = {
  tokens: SpicyToken[];
  pair: SwapPair;
  pools: SpicyPool[];
  tokenSearchInput: string;
  activeSwapDir: MutableRefObject<SwapDirection | undefined>;
};

type TrimTokenListByInput = {
  token: SpicyToken;
  tokenSearchInput: string;
};

export const findAvailablePairs = ({ pools }: FindAvailablePairs) => {
  const pairs = pools.map(pool => {
    return [pool.fromToken.tag, pool.toToken.tag];
  });
  return pairs;
};

export const findAvailableTokens = ({
  tokens,
  pairs,
  from,
  to,
}: FindAvailableTokens) => {
  if (from) {
    return tokens.filter(token => {
      return (
        pairs.some(pair => {
          return pair.includes(from.tag) && pair.includes(token.tag);
        }) && token.tag !== from.tag
      );
    });
  } else if (to) {
    return tokens.filter(token => {
      return (
        pairs.some(pair => {
          return pair.includes(to.tag) && pair.includes(token.tag);
        }) && token.tag !== to.tag
      );
    });
  }
};

export const findAvailablePools = ({ pools, from, to }: FindAvailablePools) => {
  return pools.filter(pool => {
    if (from) {
      return pool.fromToken.tag === from?.tag;
    } else {
      return pool.toToken.tag === to?.tag || pool.fromToken.tag === to?.tag;
    }
  });
};

const trimTokenListByInput = ({
  token,
  tokenSearchInput,
}: TrimTokenListByInput) => {
  return (
    token.name.toLowerCase().includes(tokenSearchInput) ||
    token.symbol.toLowerCase().includes(tokenSearchInput)
  );
};

export const filterTokenList = ({
  tokens,
  pair,
  pools,
  tokenSearchInput,
  activeSwapDir,
}: FilterTokenList) => {
  const pairs = findAvailablePairs({ pools });
  const availableTokens = findAvailableTokens({
    tokens,
    pairs,
    ...(activeSwapDir.current === 'to' && { from: pair.from }),
    ...(activeSwapDir.current === 'from' && { to: pair.to }),
  });

  // if we can't filter for some reason, return the original list
  if (!availableTokens) {
    return tokenSearchInput.length
      ? tokens.filter(token =>
          trimTokenListByInput({ token, tokenSearchInput }),
        )
      : tokens;
  }

  if (tokenSearchInput.length) {
    return availableTokens.filter(token =>
      trimTokenListByInput({ token, tokenSearchInput }),
    );
  }

  return availableTokens;
};
