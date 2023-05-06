import { PotButtonContent } from '../PotButtonContent';
import {
  PotCTAImage,
  PotCTACounter,
  PotCTASpan,
  PotCTASize,
  PotCTAAction,
  PotCTAButton,
  PotCTA as PotCTAContainer,
} from './styles';
import pot from './assets/pot.svg';
import pepeInPot from './assets/pepeinpot.png';
import { PepePotStatistics, TokenBalance } from '../../types';
import { walletActions } from 'app/slice/wallet';
import { useDispatch, useSelector } from 'react-redux';
import { selectBetInProgress } from '../../slice/selectors';
import { selectAccount } from 'app/slice/wallet/selectors';
import { usePepePotSlice } from '../../slice';

export const PotCTA = ({
  stats,
  balance,
}: {
  stats: PepePotStatistics;
  balance?: number;
}) => {
  const betInProgress = useSelector(selectBetInProgress);
  const userAccount = useSelector(selectAccount);
  const dispatch = useDispatch();

  const { actions: potActions } = usePepePotSlice();

  const { burnAmount, betAmount } = stats;

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

  return (
    <PotCTAContainer>
      <PotCTAImage>
        <img
          src={pepeInPot}
          alt=""
          loading="lazy"
          style={{ position: 'absolute', width: '90px', height: '60px' }}
        />
        <PotCTACounter>
          <PotCTASpan>$PEPE Pot Size</PotCTASpan>
          <PotCTASize>{stats.currentPot.toLocaleString('en-US')}</PotCTASize>
          <img loading="lazy" src={pot} alt="" />
        </PotCTACounter>
      </PotCTAImage>
      <PotCTAAction>
        <span>Placing a bet will wager 10,000 $PEPE.</span>
        <span>{balance && `PEPE balance: ${balance}`}</span>
        <PotCTAButton onClick={handleButtonClick}>
          <PotButtonContent />
        </PotCTAButton>
        <span>
          If you lose, {((betAmount - burnAmount) / betAmount) * 100}% of your
          $PEPE are added to the pot, and {(burnAmount / betAmount) * 100}% is
          burned.
        </span>
      </PotCTAAction>
    </PotCTAContainer>
  );
};
