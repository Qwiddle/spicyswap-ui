import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';
import { HeaderText, SubHeaderText, SubHeaderTextColor } from '../HeaderText';
import {
  PoolChartContainer,
  PoolChartHeader,
  PoolChartHeaderDescription,
  HeaderPriceContainer,
  PoolChartHeaderOptions,
  PoolChartTimeSelection,
  ButtonGroup,
  Button,
  PoolChartFooter,
  QuestionMarkIcon,
  PoolChart as PoolChartBox,
  PoolChartPlaceholder,
  PoolChartStatistic,
  QuestionMarkIconSmall,
} from './styles';
import { TimeSelectOption } from '../../common/types';
import { useState } from 'react';
import ReactPlaceholder from 'react-placeholder/lib';
import 'react-placeholder/lib/reactPlaceholder.css';
import { useTheme } from 'styled-components';
import { Theme } from 'styles/theme/themes';
import { PoolChartProps } from './types';
import { numberToLocaleAndFix } from 'utils/helper';
import { getPoolByTags } from 'utils/spicy';

export default function PoolChart({
  tokens,
  pools,
  metrics,
  pair,
  setPair,
  modalView,
  toggleModal,
  active,
}: PoolChartProps) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const timeSelectOptions = Object.values(TimeSelectOption);

  const isActiveTab = (tab: TimeSelectOption) =>
    timeSelectOptions.indexOf(tab) === activeTab ? 'active' : '';

  const handleTabChange = (tab: TimeSelectOption) =>
    setActiveTab(timeSelectOptions.indexOf(tab));

  let pool;

  if (pools) {
    pool = getPoolByTags(pools, pair?.from?.tag, pair?.to?.tag);
  }

  console.log(metrics);

  if (!active || !pool) {
    return null;
  }

  return (
    <PoolChartContainer>
      <PoolChartHeader>
        <PoolChartHeaderDescription>
          <ReactPlaceholder
            ready={Boolean(pair)}
            customPlaceholder={<PoolChartPlaceholder />}
          >
            <HeaderText>
              {`${pair?.from?.symbol}/${pair?.to?.symbol}`}
            </HeaderText>
            <HeaderPriceContainer>
              <SubHeaderText>{pair?.from?.symbol}</SubHeaderText>
              <SubHeaderTextColor up={true}>+0.00%</SubHeaderTextColor>
            </HeaderPriceContainer>
          </ReactPlaceholder>
        </PoolChartHeaderDescription>
        <PoolChartHeaderOptions>
          <PoolChartTimeSelection>
            <PoolChartStatistic>
              <SubHeaderTextColor up={true}>TVL</SubHeaderTextColor>
              <SubHeaderText>
                {numberToLocaleAndFix(pool?.totalReserveXtz, 2)} ꜩ
              </SubHeaderText>
            </PoolChartStatistic>
            <PoolChartStatistic>
              <SubHeaderTextColor up={true}>APR</SubHeaderTextColor>
              <SubHeaderText>
                {numberToLocaleAndFix(pool.lpApr, 2)}%
              </SubHeaderText>
            </PoolChartStatistic>
            <PoolChartStatistic>
              <SubHeaderTextColor up={true}>spAPR 🌶️</SubHeaderTextColor>
              <SubHeaderText>
                {numberToLocaleAndFix(pool.farmApr, 2)}%
              </SubHeaderText>
            </PoolChartStatistic>
          </PoolChartTimeSelection>
          <ButtonGroup>
            <Button>View</Button>
          </ButtonGroup>
        </PoolChartHeaderOptions>
      </PoolChartHeader>
      <PoolChartBox>
        <ReactPlaceholder
          ready={Boolean(pair)}
          customPlaceholder={<PoolChartPlaceholder />}
        >
          {renderLineChart(theme, metrics)}
        </ReactPlaceholder>
      </PoolChartBox>
      <PoolChartFooter>
        <SubHeaderText style={{ fontSize: '0.85rem' }}>
          Spicyswap liquidity providers earn 0.2% on swap fees, and another 0.1%
          can be gained by fee farming with the SPI utility token.
        </SubHeaderText>
        <QuestionMarkIcon />
      </PoolChartFooter>
    </PoolChartContainer>
  );
}

const renderLineChart = (theme: Theme, metrics) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={metrics}
      margin={{
        top: 5,
        right: 20,
        left: 10,
        bottom: 5,
      }}
    >
      <XAxis dataKey="day" dy={10} stroke={theme.textSecondary} />
      <YAxis
        dx={-5}
        tickFormatter={value => `$${value.toFixed(2)}`}
        allowDecimals={true}
        stroke={theme.textSecondary}
      />
      <Tooltip
        labelStyle={{ color: theme.textSecondary }}
        contentStyle={{
          backgroundColor: theme.background.replace(
            /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
            'rgba$1,0.4)',
          ),
          borderRadius: 3,
        }}
      />
      <Area
        type="monotone"
        dataKey="volumeXtz"
        stroke={theme.backgroundVariant.replace(
          /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
          'rgba$1,1.5)',
        )}
        strokeWidth={3}
        fill={theme.backgroundVariant}
      />
    </AreaChart>
  </ResponsiveContainer>
);
