import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import AppWrapper from './AppWrapper';
import MainCard from '../../components/MainCard';
import CardHeader from '../../components/CardHeader';
import Game from '../../components/Game';
import Resume from '../Resume';
import Contact from '../Contact';

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <MainCard>
          <CardHeader />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/game" component={Game} />
        </MainCard>
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
