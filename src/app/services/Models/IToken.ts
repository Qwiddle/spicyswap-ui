import { IContract } from './IContract';
import { IMetadata } from './IMetadata';

export interface IToken {
  id: number;
  contract: IContract;
  tokenId: string;
  standard: string;
  metadata: IMetadata;
  totalSupply: string;
}
