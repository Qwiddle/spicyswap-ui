import styled from 'styled-components';
import { media } from 'styles/media';

export const PotModalCard = styled.div`
  display: flex;
  min-width: 90%;
  min-height: 200px;
  padding: 1.5rem;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${p => p.theme.primary};
  border-radius: 1rem;
  gap: 1rem;
  align-items: center;

  ${media.small} {
    min-width: 400px;
  }

  span {
    align-self: flex-start;
    font-size: 1.5rem;
    color: ${p => p.theme.textSecondary};
  }
`;
