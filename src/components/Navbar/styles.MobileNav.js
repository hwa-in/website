import Menu from '@material-ui/core/Menu';
import styled from 'styled-components';

const MobileNavWrapper = styled.div`
  button {
    position: absolute;
    top: 25px;
    right: 20px;
  }
`

const Mobile = styled(Menu)`
  .MuiPopover-paper-31 {
      top: 70px !important;
      left: 0 !important;
      right: 0 !important;
      max-width: 100% !important;
      max-height: 100% !important;
      bottom: 0 !important;
      border-radius: 0 !important;

    li {
      :focus {
        background-color: transparent !important;
      }
    }
  }
`;

export {
  MobileNavWrapper,
  Mobile,
};
