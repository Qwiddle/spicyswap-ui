import { AccountInfo } from '@airgap/beacon-types/dist/esm/types/AccountInfo';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { PollingSubscribeProvider, TezosToolkit } from '@taquito/taquito';
import {
  DEFAULT_NETWORK_TYPE,
  DEFAULT_RPCS,
  pepePotDappOptions,
} from '../common/const';

export const Tezos = new TezosToolkit(DEFAULT_RPCS.mainnet as string);
export const beacon = new BeaconWallet(pepePotDappOptions);
Tezos.setWalletProvider(beacon);

Tezos.setStreamProvider(
  Tezos.getFactory(PollingSubscribeProvider)({
    shouldObservableSubscriptionRetry: true,
    pollingIntervalMilliseconds: 1500,
  }),
);

export async function requestPermissions(): Promise<AccountInfo | undefined> {
  await beacon.requestPermissions({
    network: {
      type: DEFAULT_NETWORK_TYPE,
    },
  });

  const account = await beacon.client.getActiveAccount();
  return account;
}

export async function clearActiveAccount(): Promise<void> {
  await beacon.clearActiveAccount();
}

export async function getActiveAccount(): Promise<AccountInfo | undefined> {
  const account = await beacon.client.getActiveAccount();
  return account;
}
