import styled from 'styled-components';

const Section = styled.div`
  .slider {
    margin: 0 auto;
    width: calc(90% - 1em);
    margin-bottom: 2em;
  }

  div {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }

  img {
    width: 100%;
    margin: 0;
  }
  /* div[tabindex] {
    display: block;
  } */

  span {
    position: absolute;
    margin-right: 20px;
    margin-left: 20px;
    font-family: monospace;
  }
  @media only screen and (max-width: 670px) {
    span h2 {
      color: #fff;
      font-size: 14px;
    }
  }
`;

export default Section;
