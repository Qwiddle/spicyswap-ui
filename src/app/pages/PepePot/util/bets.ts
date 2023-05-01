import { POT_CONTRACT, TZKT_API_GHOSTNET_URL } from 'app/common/const';
import { rawToBalance } from 'utils/spicy';

export const getPotStorageHistory = async () => {
  const requestUrl = `${TZKT_API_GHOSTNET_URL}contracts/${POT_CONTRACT}/storage/history?limit=25`;
  const res = await fetch(requestUrl);
  const history = await res.json();

  return transformPotHistory(history);
};

const transformPotHistory = history => {
  return history
    .filter(item => item.operation.parameter.entrypoint === 'bet')
    .map(item => ({
      operation: item.operation.hash,
      pot: rawToBalance(Number(item.value.pot), 2),
      odds: rawToBalance(Number(item.value.curr_odds), 1),
      account: item.value.curr_play.player,
    }));
};
