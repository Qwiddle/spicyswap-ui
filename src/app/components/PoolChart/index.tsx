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

export default function PoolChart({
  tokens,
  pools,
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

  const pool = pools?.find(
    pool =>
      (pool.fromToken.tag === pair?.from?.tag ||
        pool.fromToken.tag === pair?.to?.tag) &&
      (pool.toToken.tag === pair?.from?.tag ||
        pool.toToken.tag === pair?.to?.tag),
  );

  console.log(pool);

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
          {renderLineChart(theme)}
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

const data = [
  {
    name: '02/07',
    price: 6.9,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '02/28',
    price: 6.5,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/01',
    price: 6.0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/02',
    price: 1.7,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/03',
    price: 1.6,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/04',
    price: 1.5,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/05',
    price: 1.0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/06',
    price: 4.0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03/07',
    price: 3.0,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '03/08',
    price: 2.0,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '03/09',
    price: 2.78,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '03/10',
    price: 1.89,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '03/11',
    price: 2.39,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '03/12',
    price: 3.49,
    pv: 4300,
    amt: 2100,
  },
];

const renderLineChart = (theme: Theme) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 10,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" dy={10} stroke={theme.textSecondary} />
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
        dataKey="price"
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
