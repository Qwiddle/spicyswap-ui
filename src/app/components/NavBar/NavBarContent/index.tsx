import {
  UilAnalytics,
  UilUsdCircle,
  UilHome,
  UilBars,
} from '@iconscout/react-unicons';
import {
  NavWrapper,
  NavItem,
  NavWalletButton,
  MobileNavWrapper,
  NavHamburgerButton,
} from './NavBarContent';

interface Props {
  toggleModal: void;
}

export function NavBarContent<Props>({ toggleModal }) {
  const handleHamburgerClick = () => {
    toggleModal();
  };

  return (
    <>
      <NavWrapper>
        <NavItem
          href="#"
          target="_blank"
          title="Dashboard Page"
          rel="noopener noreferrer"
        >
          <UilHome size="25" style={{ paddingRight: '5px' }} />
          Dashboard
        </NavItem>
        <NavItem
          href="#"
          target="_blank"
          title="Swap Page"
          rel="noopener noreferrer"
        >
          <UilUsdCircle size="25" style={{ paddingRight: '5px' }} />
          Swap
        </NavItem>
        <NavItem
          href="#"
          target="_blank"
          title="Analytics Page"
          rel="noopener noreferrer"
        >
          <UilAnalytics size="25" style={{ paddingRight: '5px' }} />
          Analytics
        </NavItem>
        <NavWalletButton>Connect Wallet</NavWalletButton>
      </NavWrapper>
      <MobileNavWrapper>
        <NavHamburgerButton onClick={handleHamburgerClick}>
          <UilBars />
        </NavHamburgerButton>
      </MobileNavWrapper>
    </>
  );
}
