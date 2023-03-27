import { UilArrowLeft, UilCog } from '@iconscout/react-unicons';
import { SpicyToken } from 'types/SpicyToken';
import { SpicyPool } from 'types/SpicyPool';
import { SwapTokenIcon } from '../SwapTokenIcon';
import {
  ChangeEvent,
  KeyboardEvent,
  MutableRefObject,
  useRef,
  useState,
} from 'react';
import { stopPropagation } from 'utils/helper';
import {
  SwapTokenListBox,
  SwapTokenListAssetBalance,
  SwapTokenListAssetText,
  SwapTokenListContent,
  SwapTokenListHeader,
  SwapTokenListHeaderIcon,
  SwapTokenListItem,
  SwapTokenListSearch,
  SwapTokenListSearchIcon,
  SwapTokenListSearchInput,
} from './SwapTokenList';
import { P, P2 } from 'app/components/P';
import { SwapDirection, SwapPair } from 'types/Swap';
import {
  filterTokenList,
  findAvailablePairs,
  findAvailablePools,
  findAvailableTokens,
} from './util';

interface SwapTokenListProps {
  toggleModal: void;
  tokens: SpicyToken[];
  pools: SpicyPool[];
  setPair: void;
  pair: SwapPair;
  activeSwapDir: MutableRefObject<SwapDirection | undefined>;
}

export function SwapTokenList<SwapTokenListProps>({
  toggleModal,
  tokens,
  pools,
  setPair,
  pair,
  activeSwapDir,
}) {
  const [tokenSearchInput, setTokenSearchInput] = useState<string>('');
  const refTokenSearchInput = useRef<HTMLInputElement>(null);

  const handleListClose = () => {
    toggleModal();
    if (refTokenSearchInput) {
      setTokenSearchInput('');
      refTokenSearchInput.current!.value = '';
    }
  };

  const handleTokenClick = (token: SpicyToken) => {
    setPair(token);
    handleListClose();
  };

  const handleSwapSearchEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') refTokenSearchInput?.current?.blur();
  };

  const handleSwapSearchInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    setTokenSearchInput(inputValue.toLowerCase());
  };

  return (
    <SwapTokenListBox onClick={stopPropagation}>
      <SwapTokenListHeader>
        <SwapTokenListHeaderIcon onClick={handleListClose}>
          <UilArrowLeft size="34" />
        </SwapTokenListHeaderIcon>
        <P style={{ fontSize: '18px' }}>Token Selection</P>
        <SwapTokenListHeaderIcon>
          <UilCog size="24" style={{ margin: '0 5px' }} />
        </SwapTokenListHeaderIcon>
      </SwapTokenListHeader>
      <SwapTokenListSearch>
        <SwapTokenListSearchIcon size="22" />
        <SwapTokenListSearchInput
          placeholder="Search token by name"
          onChange={handleSwapSearchInputChange}
          onKeyDown={handleSwapSearchEnter}
          ref={refTokenSearchInput}
        />
      </SwapTokenListSearch>
      <SwapTokenListContent>
        {pair &&
          filterTokenList({
            tokens,
            pair,
            pools,
            tokenSearchInput,
            activeSwapDir,
          }).map((token, index) => (
            <SwapTokenListItem
              onClick={() => handleTokenClick(token)}
              key={index}
            >
              <SwapTokenIcon url={token.img} />
              <SwapTokenListAssetText>
                <P>{token.name}</P>
                <P2>{token.symbol}</P2>
              </SwapTokenListAssetText>
              <SwapTokenListAssetBalance>
                <P>$ {token.derivedUsd.toFixed(2)}</P>
              </SwapTokenListAssetBalance>
            </SwapTokenListItem>
          ))}
      </SwapTokenListContent>
    </SwapTokenListBox>
  );
}
