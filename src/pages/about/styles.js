import styled from 'styled-components';
import { Container } from 'styledComponents';
import { variables } from 'style';

const Wrapper = styled(Container)`
  width: 50% !important;
  flex-direction: column !important;
  padding-top: 60px;

  section {
    margin-bottom: 30px;
    &.with-image {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    h2 {
      color: ${variables.darkGreen};
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .side-image {
    float: right;
    margin-left: 20px;
  }

  .circular-image {
    height: 210px;
    min-width: 210px;

    &#developing {
      margin-right: 30px;
    }

    &#training {
      margin-left: 30px;
    }
    &#service {
      margin-right: 30px;
    }
  }
`

export {
  Wrapper,
};

