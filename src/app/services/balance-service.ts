import axios from 'axios';
import { ITokenDetails } from './Models/ITokenDetails';
import { IBalance } from './Models/IBalance';
import { HolderModel } from './Models/HolderModel';
import { IChartData } from './Models/IChartData';

export class BalanceService {
  static TzKT_URL: string = 'https://api.tzkt.io/v1/';
  static TOKEN_ADDRESS: string = 'KT1MZg99PxMDEENwB4Fi64xkqAVh5d1rv8Z9';
  static BURN_ADDRESSES: string = 'KT1CZMurPAjSfZqcn6LBUNUhG4byE6AJgDT6';
  static DAO_ADDRESSES: string = 'KT1LyPqdRVBFdQvhjyybG5osRCXnGSrk15M5';

  tokenData: ITokenDetails | undefined;

  public async GetHolderDetailsForContractAsync(
    contract: string,
  ): Promise<HolderModel> {
    var result = new HolderModel();
    var chartArray: IChartData[] = [];

    await this.GetTokenDetailsAsync().then(async tokenData => {
      if (tokenData !== undefined) {
        result.id = tokenData.id;
        result.decimals = tokenData.metadata.decimals;
        result.totalSupply = this.TokenToReadableValue(
          +tokenData.totalSupply,
          +result.decimals,
        );
        result.holders = tokenData.holdersCount;
        return await this.GetHoldersAsync(
          result.id,
          result.decimals,
          result.holders,
        ).then(balances => {
          result.totalBalances = balances;
          if (balances !== undefined) {
            balances.forEach(item => {
              if (item.address.address.toLowerCase().startsWith('kt')) {
                if (
                  item.address.address.toLowerCase() ===
                  BalanceService.BURN_ADDRESSES.toLowerCase()
                ) {
                  result.totalBurned += item.balance ?? 0;
                } else if (
                  item.address.address.toLowerCase() ===
                  BalanceService.DAO_ADDRESSES.toLowerCase()
                ) {
                  result.totalInDAO += item.balance ?? 0;
                } else {
                  result.totalInContracts += item.balance ?? 0;
                }
              } else {
                result.totalInWallets += item.balance ?? 0;
              }
              let chartObj: IChartData = {
                address: item.addressFull,
                balance: item.balance,
              };
              chartArray.push(chartObj);
            });
            result.chartData = chartArray;
            result.totalInContractsPercent =
              (result.totalInContracts / 100) * result.totalSupply;
            result.totalInWalletsPercent =
              (result.totalInWallets / 100) * result.totalSupply;
            result.totalInDAOPercent =
              (result.totalInDAO / 100) * result.totalSupply;
            result.totalBurnedPercent =
              (result.totalBurned / 100) * result.totalSupply;
          }
        });
      }
    });
    return Promise.resolve(result);
  }

  // Get Token Data from TzKT
  private async GetTokenDetailsAsync(): Promise<ITokenDetails> {
    const apiURL = `${BalanceService.TzKT_URL}tokens?contract.eq=${BalanceService.TOKEN_ADDRESS}`;
    return await get<ITokenDetails>(apiURL);
  }

  // Get all holder data
  private async GetHoldersAsync(
    tokenId: number,
    decimal: string,
    limit: number,
  ): Promise<IBalance[]> {
    const apiURL = `${BalanceService.TzKT_URL}tokens/balances?select.values=account%2Cbalance%2Cid%2ClastTime%2Ctoken&token.id=${tokenId}&balance.gt=0&sort.desc=balance&limit=${limit}`;
    return await get<any[]>(apiURL).then((data: IBalance[]) => {
      const newDataArray = data.map(item => {
        let balanceObj: IBalance = {
          addressFull:
            item[0].alias !== undefined ? item[0].alias : item[0].address,
          address: item[0],
          balance: this.TokenToReadableValue(item[1], +decimal),
          id: item[2],
          date: item[3],
          token: item[4],
        };
        return balanceObj;
      });
      return newDataArray;
    });
  }

  TokenToReadableValue(tokens: number, decimal: number): number {
    return tokens / Math.pow(10, decimal);
  }
}

export async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get(path);
  return data;
}
