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
  NavIcon,
} from './NavBarContent';
import { NavPage } from '../types';

export function NavBarContent<Props>({ toggleModal }) {
  const handleHamburgerClick = () => {
    toggleModal();
  };

  const pages: NavPage[] = [
    {
      url: '#',
      name: 'Dashboard',
      alt: 'Dashboard Page',
      icon: <UilHome />,
    },
    {
      url: '#',
      name: 'Swap',
      alt: 'Swap Page',
      icon: <UilUsdCircle />,
    },
    {
      url: '#',
      name: 'Analytics',
      alt: 'Analytics Page',
      icon: <UilAnalytics />,
    },
  ];

  return (
    <>
      <NavWrapper>
        {pages.map(page => (
          <NavItem
            href={page.url}
            target="_blank"
            title={page.alt}
            rel="noopener noreferrer"
          >
            <NavIcon>{page.icon}</NavIcon>
            {page.name}
          </NavItem>
        ))}
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