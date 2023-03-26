import { SpicyToken } from 'types/SpicyToken';

/**
 * calculates an aggregate value for the day based on the current time.
 * used when querying SpicySwap's API to get accurate prices.
 * @returns number;
 */
export const calculateDayAgg = () => {
  const agg_start = new Date();
  agg_start.setDate(agg_start.getDate() - 7);
  return Math.floor(agg_start.getTime() / 1000);
};

/**
 * calculates an aggregate value for the hour based on the current time.
 * used when querying SpicySwap's API to get accurate prices.
 * @returns number;
 */
export const calculateHourAgg = () => {
  const agg_start = new Date();
  agg_start.setDate(agg_start.getDate() - 1);
  return Math.floor(agg_start.getTime() / 1000);
};

/**
 * finds corresponding token by the token tag
 * tags take the form of CONTRACT:TOKEN_ID, where TOKEN_ID == 'null' (this is a string!!) if FA1.2
 * example FA2 Tag: 'KT19ovJhcsUn4YU8Q5L3BGovKSixfbWcecEA:1'
 * example FA1.2 Tag: 'KT1K9gCRgaLRFKTErYt1wVxA3Frb9FjasjTV:null'
 * @returns SpicyToken;
 */
export const getTokenByTag = (tokens: SpicyToken[], tag: string) => {
  return tokens.find(t => t.tag === tag);
};

// calculate APR for a given pool
export const calculateLPAprXtz = ({ volume, reserve }) => {
  const apr = ((volume * 0.002) / reserve) * 365 * 100;

  console.log('APR LP', { apr });

  return apr;
};

// calculate APR for a given pool
export const calculateFarmAprXtz = ({ volume, staked }) => {
  const apr = ((volume * 0.001) / staked) * 365 * 100;

  console.log('APR Farm', { apr });

  return apr;
};
