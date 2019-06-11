import React from 'react';
import ImgCard from '../../components/ImgCard';
import ProfileDetails from '../../components/ProfileDetails';
import Container from './Container';

export default function HomePage() {
  return (
    <Container>
      <ImgCard />
      <ProfileDetails />
    </Container>
  );
}
