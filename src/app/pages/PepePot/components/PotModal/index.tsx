import { Confetti } from 'app/components/Confetti';
import { Modal } from 'app/components/Modal';
import { PotModalCard } from './styles';
import { ConnectButton } from 'app/components/ConnectButton';
import { usePepePotSlice } from '../../slice';
import { useDispatch } from 'react-redux';

export const PotModal = ({
  show,
  betStatus,
}: {
  show: boolean;
  betStatus: 'win' | 'lose' | '';
}) => {
  const { actions: potActions } = usePepePotSlice();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(potActions.resetBet());
  };

  const imageSource =
    betStatus === 'win'
      ? 'https://media.tenor.com/BJRtqNO-VWAAAAAi/fortnite-pepe-the-frog.gif'
      : 'https://media.discordapp.net/attachments/1100469180756672643/1102423639309164544/pepe-cry.gif';

  return (
    <>
      <Modal show={show}>
        <PotModalCard>
          <span>
            {betStatus === 'win' ? 'Winner!' : 'Better luck next time! :('}
          </span>
          <img
            src={imageSource}
            style={{ width: '100%', padding: '2rem' }}
            alt=""
          />
          <ConnectButton onClick={handleButtonClick}>Return</ConnectButton>
        </PotModalCard>
      </Modal>
      {betStatus === 'win' && <Confetti />}
    </>
  );
};
