/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Swap } from './pages/Swap/Loadable';
import { NavBar } from './components/NavBar';
import { PepePot } from './pages/PepePot/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - PepeSwap" defaultTitle="PepeSwap">
        <meta
          name="description"
          content="PepeSwap is a next-generation DEX built on top of Genius Contracts' SpicySwap specifically for token-to-token swaps on Tezos."
        />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<PepePot />} />
        <Route path="/pot" element={<Swap />} />
        <Route path="*" element={<PepePot />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
