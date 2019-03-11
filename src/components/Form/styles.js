import styled from 'styled-components';
import { variables, media } from 'style';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .default {
    width: 100%;
    padding-right: 15px;
    padding-bottom: .25rem;

    ${media.tablet`
      width: 50%;
    `}

    .select {
      width: 100%;
      height: 100%;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .input {
      width: 100%;
    }

    .form-group {
      margin-bottom: 1rem;

      label {
        display: inline-block;
        margin-bottom: .5rem;
        font-size: .75rem;
      }

      .contact-hint {
        position: relative;
        box-sizing: border-box;
        height: 38px;
        margin-top: 30px;
        padding: 5px;
        padding-right: 20px;
        background-color: #f5f7f9;

        .hint-text {
          position: absolute;
          top: 50%;
          left: 32px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          box-sizing: border-box;
          display: inline-block;
          font-size: .65rem;
          line-height: 1.2;
        }
      }
    }
  }
`;

export {
  Form,
};
