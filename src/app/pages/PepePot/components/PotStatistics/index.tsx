import { Bold } from 'app/components/P';
import { PotStatisticsItem } from './styles';
import { PotStatistics as PotStatisticsContainer } from './styles';
import { PepePotStatistics } from '../../types';

export const PotStatistics = ({ stats }: { stats: PepePotStatistics }) => {
  const { totalWagered, currentOdds, burnTotal, daoAmount } = stats;

  return (
    <PotStatisticsContainer>
      <PotStatisticsItem>
        <Bold>Odds</Bold>
        <Bold>{currentOdds && `${currentOdds.toFixed(2)}%`}</Bold>
      </PotStatisticsItem>
      <PotStatisticsItem>
        <Bold>Wagered</Bold>
        <Bold>{totalWagered && totalWagered.toLocaleString('en-US')}</Bold>
      </PotStatisticsItem>
      <PotStatisticsItem>
        <Bold>Burned</Bold>
        <Bold>{burnTotal ? burnTotal.toLocaleString('en-US') : 0}</Bold>
      </PotStatisticsItem>
    </PotStatisticsContainer>
  );
};
