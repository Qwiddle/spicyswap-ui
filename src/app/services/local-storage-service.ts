export enum StorageKeys {
  tokenMetadata = 'tokenMetadata',
  swapPair = 'swapPair',
  userSettings = 'userSettings',
  betHistory = 'betHistory',
  potStatistics = 'potStatistics',
}

export class LocalStorageService {
  public setItem(key: StorageKeys, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: StorageKeys): T | null {
    const data: string | null = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data);
    }

    return null;
  }
}
