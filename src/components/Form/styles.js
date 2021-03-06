import styled from 'styled-components';
import { variables } from 'style';
import { ValidatorForm } from 'react-material-ui-form-validator';

const Form = styled(ValidatorForm)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

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

    @media (min-width: 960px) {
      margin-top: 0;
      margin-bottom: 0;
      width: 46%;
    }
  }

  .terms-and-conditions {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    // Access the div around SwitchValidator
    &> :first-child {
      display: flex;
      flex-direction: row;
      justify-content: start;

      @media (min-width: 960px) {
        flex-direction: column;
      }

      &> div {
        position: relative !important;
        margin-top: 0 !important;
      }
    }

    @media (min-width: 960px) {
      flex-direction: row;
      align-items: start;
    }

    .text {
      font-size: .75rem;
      line-height: 1rem;
      font-weight: 400;
      margin-left: 1rem;
    }
  }

  .message {
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

const SubmitMessage = styled.p`
  color: ${variables.darkGreen};
`;

const ErrorMessage = styled.p`
  color: red;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
    [theme.breakpoints.up('md')]: {
      width: "45%",
    },
  },
  textField: {
    minWidth: 240,
    width: "100%",
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  colorSwitchBase: {
    color: variables.lightGreen,
    '&$colorChecked': {
      color: variables.darkGreen,
      '& + $colorBar': {
        backgroundColor: variables.darkGreen,
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  cssLabel: {
    '&$cssFocused': {
      color: variables.darkGreen,
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: variables.darkGreen,
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: variables.darkGreen,
    },
  },
  notchedOutline: {},
});


export {
  Form,
  SubmitMessage,
  ErrorMessage,
  styles,
};
