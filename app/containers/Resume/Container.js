import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .two-card-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @media only screen and (max-width: 670px) {
    .two-card-wrapper {
      display: flex;
      flex-direction: column;
    }
    .ant-timeline-item-content {
      width: 100%;
    }
  }
  .ant-progress-bg {
    background-color: #39cccc;
  }
  .ant-timeline-item-content {
    width: 300px;
  }
  .anticon-star {
    font-size: 16px !important;
  }
`;

export default Container;
