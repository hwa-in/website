import styled from 'styled-components';
import { variables, media } from 'style';

const ContactHeader = styled.div`

  h1 {
    color: ${variables.darkGreen};
  }

  h3 {

  }

  p {

  }
`;

const ContactWrapper = styled.div`
  width: 100%

  ${media.tablet`
    display: flex;
  `}
  
  .form {
    width: 100%;
    padding: 0 15px;

    ${media.tablet`
      width: 58%;
    `}

    @media (min-width: 990px) {
      width: 66%;
    }
  }

  .contact {
    width: 100%;
    padding: 0 15px;

    ${media.tablet`
      width: 41%;
    `}

    @media (min-width: 990px) {
      width: 33%;
    }
  }
`;

const DiscoverMore = styled.div`
  h3 {
    color: ${variables.darkGreen};
  }

  p {

  }
`;

export {
  ContactHeader,
  ContactWrapper,
  DiscoverMore,
};
