import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MainCard from '../../components/MainCard';
import CardHeader from '../../components/CardHeader';

export default function HomePage() {
  return (
    <MainCard>
      <CardHeader />
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </MainCard>
  );
}
