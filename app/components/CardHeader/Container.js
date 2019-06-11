import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 80px;
  background-color: #fff;
  justify-content: flex-end;

  @media only screen and (max-width: 670px) {
    justify-content: none;
  }
`;

export default Container;
