import { Bold, P } from 'app/components/P';
import pot from './assets/pot.svg';
import pepeInPot from './assets/pepeinpot.png';
import styled from 'styled-components';
import {
  PotCTA,
  PotCTAAction,
  PotCTAButton,
  PotCTACounter,
  PotCTAImage,
  PotCTASize,
  PotCTASpan,
  PotDescription,
  PotHeader,
} from './styles';
import { PotStatistics } from './components/PotStatistics';
import { PotTable } from './components/PotTable';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { usePepePotSlice } from './slice';
import {
  selectBetHistory,
  selectBetInProgress,
  selectStatistics,
} from './slice/selectors';
import { useEffect } from 'react';
import { selectAccount } from 'app/slice/wallet/selectors';
import { useWalletSlice } from 'app/slice/wallet';
import { Toaster } from 'react-hot-toast';
import { PotButtonContent } from './components/PotButtonContent';

export const PepePot = () => {
  const dispatch = useDispatch();
  const { actions: potActions } = usePepePotSlice();
  const { actions: walletActions } = useWalletSlice();

  const stats = useSelector(selectStatistics);
  const userAccount = useSelector(selectAccount);
  const betHistory = useSelector(selectBetHistory);
  const betInProgress = useSelector(selectBetInProgress);

  const handleButtonClick = () => {
    if (userAccount) {
      if (stats && !betInProgress) {
        dispatch(
          potActions.executeBet({
            userAddress: userAccount.address,
          }),
        );
      }
    } else {
      dispatch(walletActions.connectWallet());
    }
  };

  useEffect(() => {
    dispatch(potActions.getParameters());
    dispatch(walletActions.getActiveAccount());
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
        <PotCTA>
          <PotCTAImage>
            <img
              src={pepeInPot}
              alt=""
              loading="lazy"
              style={{ position: 'absolute', width: '90px', height: '60px' }}
            />
            <PotCTACounter>
              <PotCTASpan>$PEPE Pot Size</PotCTASpan>
              <PotCTASize>
                {stats.currentPot.toLocaleString('en-US')}
              </PotCTASize>
              <img loading="lazy" src={pot} alt="" />
            </PotCTACounter>
          </PotCTAImage>
          <PotCTAAction>
            <span>Placing a bet will wager 10,000 $PEPE.</span>
            <PotCTAButton onClick={handleButtonClick}>
              <PotButtonContent />
            </PotCTAButton>
            <span>
              If you lose, 75% of your $PEPE are added to the pot, 12.5% is put
              into the DAO and 12.5% is burned.
            </span>
          </PotCTAAction>
        </PotCTA>
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
