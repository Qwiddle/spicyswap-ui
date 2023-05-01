import { ConnectButton } from 'app/components/ConnectButton';
import { media } from 'styles/media';
import styled from 'styled-components';

export const PotCTA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  ${media.small} {
    flex-direction: row;
  }
`;

export const PotCTAImage = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
  min-width: 220px;
`;

export const PotCTACounter = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const PotCTASpan = styled.span`
  color: white;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  text-align: center;
  font-weight: 600;
  width: 80px;
`;

export const PotCTASize = styled.span`
  position: absolute;
  padding: 12px;
  top: 70%;
  left: 50%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  font-weight: 600;
  color: ${p => p.theme.textSecondary};
  background-color: ${p => p.theme.text};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
`;

export const PotCTAAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  color: ${p => p.theme.textSecondary};
  font-size: 0.95rem;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 425px;
  font-size: 1.25rem;
  gap: 1.5rem;

  ${media.small} {
    width: 100%;
    background-color: initial;
    height: 275px;
    gap: 0;
    padding: 2rem;
  }

  span:last-of-type {
    font-size: 12px;
  }
`;

export const PotCTAButton = styled(ConnectButton)`
  height: 50px;
  color: ${p => p.theme.textSecondary};
  max-width: 300px;
`;
