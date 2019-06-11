import styled from 'styled-components';

const items = styled.div`
  font-size: 16px;
  font-family: inherit;
  letter-spacing: -0.5px;
  display: flex;
  flex-direction: column;
  height: 80px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  width: 10%;
  :hover {
    background-color: #ffdc00;
    cursor: pointer;
  }
`;

export default items;
