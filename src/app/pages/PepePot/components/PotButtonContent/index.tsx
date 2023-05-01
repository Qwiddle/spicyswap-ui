import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectBetInProgress, selectIsPending } from '../../slice/selectors';
import { selectAccount } from 'app/slice/wallet/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const PotButtonContent = (): JSX.Element => {
  const isPending = useSelector(selectIsPending);
  const betInProgress = useSelector(selectBetInProgress);
  const account = useSelector(selectAccount);

  if (!account) {
    return <Fragment>{'Connect Wallet'}</Fragment>;
  }

  if (betInProgress) {
    return <Fragment>{'Bet in progress ⛔'}</Fragment>;
  }

  if (!isPending) {
    return <Fragment>{'Place your bet 🐸'}</Fragment>;
  }

  return <LoadingIndicator small={true} stroke={'rgba(255,255,255,1)'} />;
};
