import React from 'react';
import Card from './Card';
import Img from './Img';
import img from './img.png';

const ImgCard = () => (
  <Card>
    <img src={img} style={{ height: '100%', width: '100%' }} />
  </Card>
);

export default ImgCard;
