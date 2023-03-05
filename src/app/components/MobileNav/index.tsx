import * as React from 'react';
import {
  UilAnalytics,
  UilUsdCircle,
  UilHome,
  UilNotebooks,
} from '@iconscout/react-unicons';
import { OnlineIndicator } from '../OnlineIndicator';
import {
  MobileNavCloseIcon,
  MobileNavItem,
  MobileNavWalletButton,
  MobileNavWrapper,
  P,
  RpcStatus,
} from './MobileNav';

interface Props {
  toggleModal: void;
}

export function MobileNav<Props>({ toggleModal }) {
  const handleMobileNavClose = () => {
    toggleModal();
  };

  return (
    <MobileNavWrapper
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <MobileNavCloseIcon onClick={handleMobileNavClose} />
      <MobileNavItem href="#" target="_blank" rel="noopener noreferrer">
        <UilHome size="20" className="icon" />
        dashboard
      </MobileNavItem>
      <MobileNavItem href="#" target="_blank" rel="noopener noreferrer">
        <UilUsdCircle size="25" className="icon" />
        swap
      </MobileNavItem>
      <MobileNavItem href="#" target="_blank" rel="noopener noreferrer">
        <UilAnalytics size="25" className="icon" />
        analytics
      </MobileNavItem>
      <MobileNavItem href="#" target="_blank" rel="noopener noreferrer">
        <UilNotebooks size="25" className="icon" />
        learn
      </MobileNavItem>
      <MobileNavItem>
        <MobileNavWalletButton>Connect Wallet</MobileNavWalletButton>
      </MobileNavItem>
      <RpcStatus>
        <OnlineIndicator online={true} />
        {/* replace with rpc url from wallet state */}
        <P>https://mainnet.api.tez.ie</P>
      </RpcStatus>
    </MobileNavWrapper>
  );
}
