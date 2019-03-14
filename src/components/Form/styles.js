import styled from 'styled-components';
import { variables, media } from 'style';
import { ValidatorForm } from 'react-material-ui-form-validator';

const Form = styled(ValidatorForm)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .jss34.jss35 .jss41 {
    border-color: ${variables.darkGreen};
  }

  .jss20.jss21 {
    color: ${variables.darkGreen};
  }
  
  .contact-hint {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding: 5px;
    height: 38px;
    padding: 1rem;
    background-color: #f5f7f9;

    .hint-text {
      font-size: .65rem;
      line-height: 1.2;
    }

    ${media.tablet`
      margin-top: 0;
      margin-bottom: 0;
      width: 46%;
    `}
  }

  .terms-and-conditions {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    ${media.tablet`
      flex-direction: row;
      align-items: start;
    `}

    .text {
      font-size: .75rem;
      line-height: 1rem;
      font-weight: 400;
      margin-left: 1rem;
    }
  }

  .success {
    font-size: .875rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }

  .submit {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .submit-btn {
      background-color: ${variables.darkGreen};
    }
  }
`;

export {
  Form,
};
