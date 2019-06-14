import styled from 'styled-components';

const Card = styled.div`
  height: 400px;
  width: 35%;
  margin: 3em 3em 3em 7em;
  border: 6px double #000;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  @media only screen and (max-width: 670px) {
    width: 90%;
    margin: auto;
  }
`;

export default Card;
