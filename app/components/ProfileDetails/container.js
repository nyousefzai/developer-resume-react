import styled from 'styled-components';

const Container = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 0 0 2.5em;

  @media only screen and (max-width: 670px) {
    width: 90%;
  }
`;

export default Container;