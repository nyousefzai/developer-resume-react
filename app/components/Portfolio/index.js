import React from 'react';
import Slider from 'react-slick';
import Section from './Section';
import './style.css';
import ProfolioOne from './pro1.jpg';

export default class Portfolio extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Section>
        <Slider className="slider" {...settings}>
          <div>
            <span>
              <h2> Zoopify.com - PHP - mySQL - CSS - Jquery - GOOGLE MAP</h2>
            </span>
            <img src={ProfolioOne} />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Section>
    );
  }
}
