import styled from 'styled-components';

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 0 0 2.5em;

  @media only screen and (max-width: 670px) {
    width: 90%;
    margin-top: 3em;
  }
`;

export default Container;
