export enum TimeSelectOption {
  ONEMINUTE = '1m',
  THIRTYMINUTE = '30m',
  ONEHOUR = '1h',
  ONEDAY = '24h',
  SEVENDAY = '7d',
  THIRTYDAY = '30d',
}

export type TokenDayData = Array<{
  last_price: number;
  last_price_usd: number;
}>;

export interface TokenDayAgreggate {
  aggregate: {
    sum: {
      dailyvolumextz: number;
      dailyvolumeusd: number;
    };
  };
}

interface SpicyTokenInterface {
  name: string;
  symbol: string;
  decimals: string;
  img: string;
  tag: string;
  derivedxtz: number;
  derivedusd: number;
  totalliquidityxtz: number;
  totalliquidityusd: number;
  tokenDayData_agreggate: TokenDayAgreggate;
  tokenDaydata: TokenDayData;
}

export type SpicyTokenResponseData = Array<SpicyTokenInterface>;
