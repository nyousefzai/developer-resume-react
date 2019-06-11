import React from 'react';
import MainCard from '../../components/MainCard';
import CardHeader from '../../components/CardHeader';
import ImgCard from '../../components/ImgCard';
import ProfileDetails from '../../components/ProfileDetails';

export default function HomePage() {
  return (
    <MainCard>
      <CardHeader />
      <div style={{ display: 'flex' }}>
        <ImgCard />
        <ProfileDetails />
      </div>
    </MainCard>
  );
}
