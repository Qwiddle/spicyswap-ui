import styled from 'styled-components';
import { media } from 'styles/media';

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
