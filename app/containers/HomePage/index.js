import React from 'react';
import ImgCard from '../../components/ImgCard';
import ProfileDetails from '../../components/ProfileDetails';

export default function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <ImgCard />
      <ProfileDetails />
    </div>
  );
}
