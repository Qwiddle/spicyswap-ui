import { SpicyPool } from 'types/SpicyPool';
import { SpicyToken } from 'types/SpicyToken';
import { SwapPair, SwapDirection } from 'types/Swap';

export enum TimeSelectOption {
  ONEMINUTE = '1m',
  THIRTYMINUTE = '30m',
  ONEHOUR = '1h',
  ONEDAY = '24h',
  SEVENDAY = '7d',
  THIRTYDAY = '30d',
}

export type PriceChartProps = {
  tokens?: SpicyToken[];
  pools?: SpicyPool[];
  pair?: SwapPair;
  setPair: (token: SpicyToken) => void;
  modalView: boolean;
  toggleModal: (dir?: SwapDirection) => void;
  active: boolean;
};
