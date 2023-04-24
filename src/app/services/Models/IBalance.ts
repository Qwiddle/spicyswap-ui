import { IContract } from './IContract';
import { IToken } from './IToken';

export interface IBalance {
  addressFull: string;
  address: IContract;
  balance?: number;
  id?: number;
  date?: string;
  token: IToken;
}
