import { POT_CONTRACT, TZKT_API_GHOSTNET_URL } from 'app/common/const';
import { P } from 'app/components/P';
import { rawToBalance } from 'utils/spicy';

export const getPotBets = async () => {
  const requestUrl = `${TZKT_API_GHOSTNET_URL}contracts/${POT_CONTRACT}/bigmaps/bets/keys?sort.desc=lastLevel&limit=10`;

  const res = await fetch(requestUrl);
  const bets = await res.json();

  const history = await getPotStorageHistory();

  const betsAndStorage = bets.map(bet => {
    const storage = history.find(item => item.level === bet.lastLevel);
    const { level, ...storageWithoutLevel } = storage;

    return {
      ...storageWithoutLevel,
      account: bet.value.player,
      outcome: Object.hasOwnProperty.call(bet.value.outcome, 'win'),
    };
  });

  return betsAndStorage;
};

export const getPotStorageHistory = async () => {
  const requestUrl = `${TZKT_API_GHOSTNET_URL}contracts/${POT_CONTRACT}/storage/history?limit=25`;
  const res = await fetch(requestUrl);
  const history = await res.json();

  return transformPotHistory(history);
};

const transformPotHistory = history => {
  return history.map(item => ({
    operation: item.operation.hash,
    pot: rawToBalance(Number(item.value.pot), 2),
    odds: rawToBalance(Number(item.value.curr_odds), 1),
    level: item.level,
  }));
};
