import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;

  i {
    margin-bottom: 20px;
    font-size: 30px;
  }

  i .anticon {
    text-align: none;
  }

  .icon-side-content {
    font-size: 16px;
    margin: -10px 0 0 10px;
  }

  .icon-continer {
    display: flex;
    align-items: center;
  }
`;

export default Card;
