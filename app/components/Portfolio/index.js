import React from 'react';
import Slider from 'react-slick';
import Section from './Section';
import ProfolioOne from './imgs/pro1.jpg';
import Rcfe from './imgs/rcfe.png';
import caterhub1 from './imgs/caterhub.png';
import caterhub2 from './imgs/caterhub2.png';
import caterhub3 from './imgs/caterhub3.png';
import caterhub4 from './imgs/caterhub4.png';
import caterhub5 from './imgs/caterhub5.png';
import ins from './imgs/insuranceguru.png';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Slider className="slider" {...settings}>
        <div className="img-one">
          <span>
            <h2 style={{ fontSize: 16 }}>
              CaterHubb project Currently in Progress <br /> Node.js - Mongodb -
              react.js - redux.js CSS3, JavaScript - Ant Design
            </h2>
          </span>
          <img src={caterhub1} />
        </div>
        <div>
          <span />
          <img src={caterhub2} />
        </div>
        <div>
          <span />
          <img src={caterhub3} />
        </div>
        <div>
          <span />
          <img src={caterhub4} />
        </div>
        <div>
          <span />
          <img src={caterhub5} />
        </div>
        <div>
          <span>
            <h2> Zoopify.com - PHP - mySQL - CSS - Jquery - GOOGLE MAP</h2>
          </span>
          <img src={ProfolioOne} />
        </div>
        <div>
          <span>
            <h2> rcfeins.com - Node.js - FireBase - CSS - React.js</h2>
          </span>
          <img src={Rcfe} />
        </div>
        <div>
          <span>
            <h2>
              theinsuranceGuru.com/admin PHP - mySQL - CSS - JQuery -
              JavaScript- HTML
            </h2>
          </span>
          <img src={ins} />
        </div>
      </Slider>
    </Section>
  );
};

export default Portfolio;
