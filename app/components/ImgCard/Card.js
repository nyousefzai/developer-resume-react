import styled from 'styled-components';

const Card = styled.div`
  height: 450px;
  width: 29%;
  margin: 3em 3em 1em 7em;
  border: 6px solid #000;

  @media only screen and (max-width: 670px) {
    width: 90%;
    margin: auto;
  }
`;

export default Card;
