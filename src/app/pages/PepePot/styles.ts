import { ConnectButton } from 'app/components/ConnectButton';
import { HeaderText } from 'app/components/HeaderText';
import styled from 'styled-components';
import { media } from 'styles/media';

export const PotHeader = styled(HeaderText)`
  font-size: 2rem;
  color: ${p => p.theme.text};
  font-weight: 600;
`;

export const PotDescription = styled.div`
  text-align: center;
  padding: 0 1rem;
  color: ${p => p.theme.textSecondary};
  gap: 1rem;
  display: flex;
  flex-direction: column;

  ${media.small} {
    width: 600px;
  }
`;

export const PotStatistics = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 2fr 2fr;
  justify-items: space-around;
  width: 100%;

  ${media.small} {
    grid-template-columns: 2fr 2fr 2fr 2fr;
    gap: 2rem;
    width: initial;
    padding: 0;
  }
`;

export const PotStatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.primary};
  padding: 1rem;
  border-radius: 14px;
  text-align: center;
  font-size: 3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;

  > :first-child {
    color: ${p => p.theme.text};
    font-size: 1.25rem;
  }
`;

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
  height: 40px;
  color: ${p => p.theme.textSecondary};
  width: 200px;
`;

export const PotTableWrapper = styled.div`
  width: 100%;
`;
