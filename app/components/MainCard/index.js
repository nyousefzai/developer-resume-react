import styled from 'styled-components';

const MainCard = styled.div`
  position: relative;
  height: 70vh;
  width: 65%;
  -moz-box-shadow: 0 0 45px -7px #a6daf3;
  -webkit-box-shadow: 0 0 45px -7px #a6daf3;
  box-shadow: 0 0 45px -7px #a6daf3;
  @media only screen and (max-width: 670px) {
    width: 100%;
    height: 100vh;
    box-shadow: none;
  }
`;

export default MainCard;
