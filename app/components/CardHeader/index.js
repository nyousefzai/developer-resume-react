import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import Items from './Item';

const CardHeader = () => (
  <Container>
    <Items>
      <FontAwesomeIcon icon={faCoffee} />
    </Items>
  </Container>
);

export default CardHeader;
