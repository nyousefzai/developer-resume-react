import React from 'react';
import Carousel from 'nuka-carousel';
import ProfolioOne from './imgs/pro1.jpg';
import Rcfe from './imgs/rcfe.png';
import caterhub1 from './imgs/caterhub.png';
import caterhub2 from './imgs/caterhub2.png';
import caterhub3 from './imgs/caterhub3.png';
import caterhub4 from './imgs/caterhub4.png';
import caterhub5 from './imgs/caterhub5.png';
import ins from './imgs/insuranceguru.png';
function PortfolioNew() {
  return (
    <Carousel>
      <img src={caterhub1} />
      <img src={caterhub2} />
      <img src={caterhub3} />
      <img src={caterhub4} />
      <img src={caterhub5} />
      <img src={Rcfe} />
      <img src={ProfolioOne} />
      <img src={ins} />
    </Carousel>
  );
}

export default PortfolioNew;
