import { P } from 'app/components/P';
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

export const PepePot = () => {
  return (
    <Content>
      <PotHeader>Pepe Prize Pot</PotHeader>
      <PotDescription>
        <span>
          The pot starts with 75,000 $PEPE. When you click the “Bet” button, you
          bet 10,000 $PEPE to win the pot. The pot will continue to grow until
          someone wins and then it starts over.
        </span>
      </PotDescription>
      <PotStatistics>
        <PotStatisticsItem>
          <P>Odds to Win Pot</P>
          <P>5%</P>
        </PotStatisticsItem>
        <PotStatisticsItem>
          <P>Total Wagered</P>
          <P>1,123,213</P>
        </PotStatisticsItem>
        <PotStatisticsItem>
          <P>PEPE Burned</P>
          <P>1,123,000</P>
        </PotStatisticsItem>
        <PotStatisticsItem>
          <P>PEPE Sent to DAO</P>
          <P>1,123,213</P>
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
    </Content>
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
