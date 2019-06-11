import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 80px;
  background-color: #fff;
  justify-content: flex-end;

  > :first-child {
    margin: 25px auto;
    height: 1.5em;
    width: 1.5em;
    cursor: pointer;
  }

  > :first-child i > svg {
    height: 2em;
    width: 2em;
  }
  @media only screen and (max-width: 670px) {
    justify-content: none;
    margin-bottom: 20px;
    > :first-child {
      margin: 25px 50px 0 10px;
    }
  }
`;

export default Container;
