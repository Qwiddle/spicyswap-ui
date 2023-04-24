import { IBalance } from './IBalance';
import { IChartData } from './IChartData';

export class HolderModel {
  public id!: number;
  public totalSupply!: number;
  public decimals!: string;
  public holders!: number;
  public totalInContracts!: number;
  public totalInWallets!: number;
  public totalBurned!: number;
  public chartData!: IChartData[];
  public totalBalances!: IBalance[];
}
