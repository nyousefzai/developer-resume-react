/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import AppWrapper from './AppWrapper';
import MainCard from '../../components/MainCard';
import CardHeader from '../../components/CardHeader';
import Resume from '../Resume';

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <MainCard>
          <CardHeader />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={Resume} />
        </MainCard>
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
