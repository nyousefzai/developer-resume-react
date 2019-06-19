import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 50px 20px 50px 20px;

  @media only screen and (max-width: 670px) {
    button {
      display: none;
    }
  }
`;
export default Container;
