import { HeaderText } from 'app/components/HeaderText';
import styled from 'styled-components';

export const PotHeader = styled(HeaderText)`
  font-size: 2rem;
  color: ${p => p.theme.text};
  font-weight: 600;
`;
