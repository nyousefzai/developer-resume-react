import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MainCard from '../../components/MainCard';
import CardHeader from '../../components/CardHeader';
import ImgCard from '../../components/ImgCard';

export default function HomePage() {
  return (
    <MainCard>
      <CardHeader />

      <div style={{ display: 'flex' }}>
        <ImgCard />
        <FormattedMessage {...messages.header} />
      </div>
    </MainCard>
  );
}
