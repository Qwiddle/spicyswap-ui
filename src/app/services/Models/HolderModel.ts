import { IBalance } from './IBalance';
import { IChartData } from './IChartData';

export class HolderModel {
  public id!: number;
  public decimals!: string;
  public holders!: number;
  public totalSupply!: number;
  public totalInContracts!: number;
  public totalInWallets!: number;
  public totalInDAO!: number;
  public totalBurned!: number;
  public totalInContractsPercent!: number;
  public totalInWalletsPercent!: number;
  public totalInDAOPercent!: number;
  public totalBurnedPercent!: number;
  public chartData!: IChartData[];
  public totalBalances!: IBalance[];
}
