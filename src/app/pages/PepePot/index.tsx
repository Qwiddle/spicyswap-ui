import styled from 'styled-components';
import { PotStatistics } from './components/PotStatistics';
import { PotTable } from './components/PotTable';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { usePepePotSlice } from './slice';
import {
  selectBalance,
  selectBetHistory,
  selectBetStatus,
  selectIsBetFinished,
  selectIsPending,
  selectStatistics,
} from './slice/selectors';
import { useEffect } from 'react';
import { useWalletSlice } from 'app/slice/wallet';
import { Toaster } from 'react-hot-toast';
import { PotCTA } from './components/PotCTA';
import { PotHeader } from './components/PotHeader/styles';
import { PotDescription } from './components/PotDescription/styles';
import {
  LocalStorageService,
  StorageKeys,
} from 'app/services/local-storage-service';
import { PepePotBetHistory, PepePotStatistics } from './types';
import { PotModal } from './components/PotModal';
import { Tezos } from 'app/services/wallet-service';
import { PEPE_CONTRACT, PEPE_TOKEN_ID, POT_CONTRACT } from 'app/common/const';
import { bytesToPkh } from 'utils/address';
import { selectBetInProgress } from './slice/selectors';
import { selectAccount } from 'app/slice/wallet/selectors';

export const PepePot = () => {
  const dispatch = useDispatch();
  const { actions: potActions } = usePepePotSlice();
  const { actions: walletActions } = useWalletSlice();

  const stats = useSelector(selectStatistics);
  const betHistory = useSelector(selectBetHistory);
  const isBetFinished = useSelector(selectIsBetFinished);
  const betStatus = useSelector(selectBetStatus);
  const betInProgress = useSelector(selectBetInProgress);
  const account = useSelector(selectAccount);
  const balance = useSelector(selectBalance);

  const storageService = new LocalStorageService();

  useEffect(() => {
    if (betInProgress) {
      const sub = Tezos.stream.subscribeEvent({
        address: POT_CONTRACT,
      });

      sub.on('data', (event: any) => {
        if (event.tag === 'win' || event.tag === 'lose') {
          if (betInProgress?.userAddress === account?.address) {
            const action =
              event.tag === 'win' ? potActions.betWin : potActions.betLost;
            dispatch(action({ opHash: event.opHash }));
          }

          dispatch(potActions.setCurrentBet(null));
          sub.close();
        }
      });
    }
  }, [betInProgress]);

  useEffect(() => {
    const sub = Tezos.stream.subscribeEvent({
      address: POT_CONTRACT,
    });

    sub.on('data', event => {
      if (event.tag === 'bet') {
        if (event?.payload) {
          dispatch(
            potActions.setCurrentBet({
              userAddress: bytesToPkh(event?.payload[1].bytes),
              number: event?.payload[0].int,
            }),
          );
        }
      }

      if (event.tag === 'reveal') {
        dispatch(potActions.setCurrentBet(null));
      }
    });
  }, [account]);

  useEffect(() => {
    if (betHistory.length && typeof betHistory[0].outcome === 'undefined') {
      dispatch(
        potActions.setCurrentBet({
          userAddress: betHistory[0].account,
          number: 0,
        }),
      );
    }
  }, [betHistory, dispatch, potActions]);

  useEffect(() => {
    const localPotParameters = storageService.getItem<PepePotStatistics>(
      StorageKeys.potStatistics,
    );

    const localBetHistory = storageService.getItem<PepePotBetHistory[]>(
      StorageKeys.betHistory,
    );

    if (localBetHistory && localPotParameters) {
      dispatch(potActions.setParameters(localPotParameters));
      dispatch(potActions.setBetHistory(localBetHistory));
    }

    dispatch(potActions.getParameters());
    dispatch(walletActions.getActiveAccount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (account) {
      dispatch(
        potActions.getTokenBalance({
          userAddress: account?.address,
          token: `${PEPE_CONTRACT}:${PEPE_TOKEN_ID}`,
        }),
      );
    }
  }, [account]);

  useEffect(() => {
    const refetchStatTimer = setInterval(
      () => dispatch(potActions.getParameters()),
      12500,
    );

    return () => clearInterval(refetchStatTimer);
  }, [dispatch, potActions]);

  return (
    <>
      <Helmet>
        <title>Prize Pot</title>
        <meta
          name="description"
          content="The pot starts with 15,000 $PEPE. Each bet that goes in increases the pot by 25,000 $PEPE. The pot will continue to grow until someone wins and then it starts over."
        />
      </Helmet>
      <Content>
        <PotHeader>Pepe Prize Pot</PotHeader>
        <PotDescription>
          <span>
            The pot starts with 15,000 $PEPE. When you click the “Bet” button,
            you bet 2,500 $PEPE to win the pot. The pot will continue to grow
            until someone wins and then it starts over.
          </span>
        </PotDescription>
        <PotStatistics stats={stats} />
        <PotCTA stats={stats} balance={balance} />
        <PotTable rows={betHistory} />
      </Content>
      <Toaster />
      {isBetFinished && <PotModal show={isBetFinished} betStatus={betStatus} />}
    </>
  );
};

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
  gap: 28px;
  flex-direction: column;
  align-items: center;
`;
