import {
  PEPE_CONTRACT,
  PEPE_DAO,
  POT_BURNER,
  POT_CONTRACT,
  TZKT_API_GHOSTNET_URL,
} from 'app/common/const';
import { rawToBalance } from 'utils/spicy';

export const getPotStorage = async () => {
  const requestUrl = `${TZKT_API_GHOSTNET_URL}contracts/${POT_CONTRACT}/storage`;

  const res = await fetch(requestUrl);
  const storage = await res.json();

  return storage;
};

export const getPotStatistics = ({ storage }) => {
  const { curr_odds, pot } = storage;

  return {
    curr_odds,
    pot,
  };
};

export const getPotParameters = ({ storage }) => {
  const {
    settings: { bet_amount, odds_increase, burn_amount },
  } = storage;

  return { bet_amount, odds_increase, burn_amount };
};

export const getPepePot = async () => {
  const storage = await getPotStorage();

  const potParameters = getPotParameters({ storage });
  const potStatistics = getPotStatistics({ storage });

  return {
    ...potParameters,
    ...potStatistics,
  };
};

export const getContributions = async () => {
  const requestUrl = `
    ${TZKT_API_GHOSTNET_URL}tokens/transfers?from=${POT_CONTRACT}&to.in=${PEPE_DAO},${POT_BURNER}&token.contract=${PEPE_CONTRACT}
  `;

  const res = await fetch(requestUrl);
  const json = await res.json();

  return transformContributions(json);
};

export const getWagered = async () => {
  const requestUrl = `
    ${TZKT_API_GHOSTNET_URL}tokens/transfers?to=${POT_CONTRACT}&token.contract=${PEPE_CONTRACT}&limit=1000
  `;

  const res = await fetch(requestUrl);
  const json = await res.json();

  return transformWagered(json);
};

export const transformWagered = (transfers: any) => {
  return transfers.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);
};

export const transformMetrics = (metrics: any) => {
  const { curr_odds, pot, wagered, odds_increase, bet_amount, burn_amount } =
    metrics;
  const daoAmount = metrics[PEPE_DAO];
  const burnAmount = metrics[POT_BURNER];

  return {
    burnTotal: rawToBalance(burnAmount, 2),
    daoTotal: rawToBalance(daoAmount, 2),
    currentOdds: rawToBalance(Number(curr_odds), 1),
    currentPot: rawToBalance(Number(pot), 2),
    totalWagered: rawToBalance(wagered, 2),
    betAmount: rawToBalance(Number(bet_amount), 2),
    burnAmount: rawToBalance(Number(burn_amount), 2),
    oddsIncrease: rawToBalance(Number(odds_increase), 1),
  };
};

export const transformContributions = (transfers: any) => {
  return transfers.reduce((acc, curr) => {
    const {
      to: { address: contract },
      amount,
    } = curr;

    if (!acc[contract]) {
      acc[contract] = Number(amount);
    }

    acc[contract] += Number(amount);

    return acc;
  }, {});
};
