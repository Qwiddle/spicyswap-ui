import {
  PEPE_CONTRACT,
  PEPE_DAO,
  POT_BURNER,
  POT_CONTRACT,
  TZKT_API_GHOSTNET_URL,
} from 'app/common/const';
import { rawToBalance } from 'utils/spicy';

export const getPotStatistics = async () => {
  const requestUrl = `${TZKT_API_GHOSTNET_URL}contracts/${POT_CONTRACT}/storage`;

  const res = await fetch(requestUrl);
  const json = await res.json();

  const { curr_odds, pot } = json;

  return {
    curr_odds,
    pot,
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
  const { curr_odds, pot, totalWagered } = metrics;
  const daoAmount = metrics[PEPE_DAO];
  const burnAmount = metrics[POT_BURNER];

  return {
    burnAmount: rawToBalance(burnAmount, 2),
    daoAmount: rawToBalance(daoAmount, 2),
    currentOdds: rawToBalance(Number(curr_odds), 2),
    currentPot: rawToBalance(Number(pot), 2),
    totalWagered: rawToBalance(totalWagered, 2),
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
