import { SpicyToken } from 'types/SpicyToken';

export const transformTokens = (tokens): SpicyToken[] => {
  return tokens.map(token => ({
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
    img: token.img,
    tag: token.tag,
    derivedXtz: token.derivedxtz,
    derivedUsd: token.derivedusd,
    totalLiquidityXtz: token.totalliquidityxtz,
    totalLiquidityUsd: token.totalliquidityusd,
  }));
};

export const transformPools = (pools): SpicyPool[] => {
  return pools.map(pool => ({
    pairId: pool.pair_id,
    contract: pool.contract,
    fromToken: {
      reserve: pool.reserve0,
      tag: pool.token0,
      volume: pool.volumetoken0,
      price: {
        xtz: pool.token_a.derivedxtz,
        usd: pool.token_a.derivedusd,
      },
    },
    toToken: {
      reserve: pool.reserve1,
      tag: pool.token1,
      volume: pool.volumetoken1,
      price: {
        xtz: pool.token_b.derivedxtz,
        usd: pool.token_b.derivedusd,
      },
    },
    volume: {
      hourlyVolumeXtz:
        pool.pairHourData_aggregate.aggregate.sum.hourlyvolumextz,
      hourlyVolumeUsd:
        pool.pairHourData_aggregate.aggregate.sum.hourlyvolumeusd,
    },
    totalReserveXtz: pool.reservextz,
    totalReserveUsd: pool.reserveusd,
    txCount: pool.txcount,
  }));
};
