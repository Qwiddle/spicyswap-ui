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
  PotStatistics,
  PotStatisticsItem,
} from './styles';
import { PotTable } from './components/PotTable';
import { Helmet } from 'react-helmet-async';

export const PepePot = () => {
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
        <PotStatistics>
          <PotStatisticsItem>
            <Bold>Odds</Bold>
            <Bold>5%</Bold>
          </PotStatisticsItem>
          <PotStatisticsItem>
            <Bold>Wagered</Bold>
            <Bold>1,123,213</Bold>
          </PotStatisticsItem>
          <PotStatisticsItem>
            <Bold>Burned</Bold>
            <Bold>1,123,000</Bold>
          </PotStatisticsItem>
          <PotStatisticsItem>
            <Bold>DAO</Bold>
            <Bold>1,123,213</Bold>
          </PotStatisticsItem>
        </PotStatistics>
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
              <PotCTASize>120,000</PotCTASize>
              <img loading="lazy" src={pot} alt="" />
            </PotCTACounter>
          </PotCTAImage>
          <PotCTAAction>
            <span>Placing a bet will wager 10,000 $PEPE.</span>
            <PotCTAButton>Place your bet 🐸</PotCTAButton>
            <span>
              If you lose, 75% of your $PEPE are added to the pot, 12.5% is put
              into the DAO and 12.5% is burned.
            </span>
          </PotCTAAction>
        </PotCTA>
        <PotTable />
      </Content>
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
