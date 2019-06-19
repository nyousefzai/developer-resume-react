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
import Portfolio from '../../components/PortfolioNew';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <MainCard>
            <CardHeader />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/portfolio" component={Portfolio} />
          </MainCard>
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
