import { IContract } from './IContract';
import { IMetadata } from './IMetadata';

export interface ITokenDetails {
  id: number;
  contract: IContract;
  tokenId: string;
  standard: string;
  firstLevel: number;
  firstTime: Date;
  lastLevel: number;
  lastTime: Date;
  transfersCount: number;
  balancesCount: number;
  holdersCount: number;
  totalMinted: string;
  totalBurned: string;
  totalSupply: string;
  metadata: IMetadata;
}
