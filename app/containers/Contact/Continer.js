import styled from 'styled-components';

const Continer = styled.div`
  display: flex;
  max-height: 100%;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;
  .ant-input {
    height: 44px;
    font-size: 16px;
    border-radius: 0;
  }
  .ant-input ::placeholder {
    color: #595959;
  }
  > form {
    width: 50%;
    margin: auto;
  }

  .form-bottom {
    display: flex;
    width: 250px;
    justify-content: space-between;
  }

  .form-bottom .ant-btn-primary {
    background-color: #39cccc;
    border: none;
    width: 150px;
  }

  > span {
    font-size: 20px;
    display: flex;
    align-self: flex-start;
  }

  @media only screen and (max-width: 670px) {
    form {
      width: 90%;
      margin-top: 20px;
    }
  }
`;

export default Continer;
