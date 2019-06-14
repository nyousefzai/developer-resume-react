import styled from 'styled-components';
let cellSize = '70px';
const Games = styled.div`
  align-content: center;
  text-align: center;
  line-height: ${cellSize};
  width: 4 * ${cellSize} + ${cellSize} * 0.1 * 4 + 40px;
  height: 4 * ${cellSize} + ${cellSize} * 0.1 * 4 + 40px;
  margin-top: 100px;
  position: relative;
  margin: 100px 250px;

  @media only screen and (max-width: 670px) {
    margin: 35px;
  }

  .cell {
    width: ${cellSize};
    height: ${cellSize};
    margin-right: width * 0.1;
    border-radius: 4px;
    margin-bottom: height * 0.1;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in;
    position: absolute;
  }
  .empty {
    opacity: 0;
  }
`;

export default Games;
