import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100%;
  @media only screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Container;
