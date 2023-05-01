import { media } from 'styles/media';
import styled from 'styled-components';

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
