import styled from 'styled-components';
import { PotStatistics } from './components/PotStatistics';
import { PotTable } from './components/PotTable';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { usePepePotSlice } from './slice';
import { selectBetHistory, selectStatistics } from './slice/selectors';
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

export const PepePot = () => {
  const dispatch = useDispatch();
  const { actions: potActions } = usePepePotSlice();
  const { actions: walletActions } = useWalletSlice();

  const stats = useSelector(selectStatistics);
  const betHistory = useSelector(selectBetHistory);

  const storageService = new LocalStorageService();

  useEffect(() => {
    const localPotParameters = storageService.getItem<PepePotStatistics>(
      StorageKeys.potStatistics,
    );

    const localBetHistory = storageService.getItem<PepePotBetHistory[]>(
      StorageKeys.betHistory,
    );

    console.log({ localPotParameters, localBetHistory });

    if (localBetHistory && localPotParameters) {
      dispatch(potActions.setParameters(localPotParameters));
      dispatch(potActions.setBetHistory(localBetHistory));
    }

    dispatch(potActions.getParameters());
    dispatch(walletActions.getActiveAccount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          content="The pot starts with 75,000 $PEPE. Each bet that goes in increases the pot by 10,000 $PEPE. The pot will continue to grow until someone wins and then it starts over."
        />
      </Helmet>
      <Content>
        <PotHeader>Pepe Prize Pot</PotHeader>
        <PotDescription>
          <span>
            The pot starts with 75,000 $PEPE. When you click the “Bet” button,
            you bet 10,000 $PEPE to win the pot. The pot will continue to grow
            until someone wins and then it starts over.
          </span>
        </PotDescription>
        <PotStatistics stats={stats} />
        <PotCTA stats={stats} />
        <PotTable rows={betHistory} />
      </Content>
      <Toaster />
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
