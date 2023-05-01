import { Bold } from 'app/components/P';
import { PotStatisticsItem } from './styles';
import { PotStatistics as PotStatisticsContainer } from './styles';
import { PepePotStatistics } from '../../types';

export const PotStatistics = ({ stats }: { stats: PepePotStatistics }) => {
  return (
    <PotStatisticsContainer>
      <PotStatisticsItem>
        <Bold>Odds</Bold>
        <Bold>{`${stats.currentOdds.toFixed(2)}%`}</Bold>
      </PotStatisticsItem>
      <PotStatisticsItem>
        <Bold>Wagered</Bold>
        <Bold>{stats.totalWagered.toLocaleString('en-US')}</Bold>
      </PotStatisticsItem>
      <PotStatisticsItem>
        <Bold>Burned</Bold>
        <Bold>{stats.burnAmount.toLocaleString('en-US')}</Bold>
      </PotStatisticsItem>
      <PotStatisticsItem>
        <Bold>DAO</Bold>
        <Bold>{stats.daoAmount.toLocaleString('en-US')}</Bold>
      </PotStatisticsItem>
    </PotStatisticsContainer>
  );
};
