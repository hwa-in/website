import styled from 'styled-components';
import { variables, media } from 'style';

const ContactHeader = styled.div`

  h1 {
    color: ${variables.darkGreen};
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `}
  
  .form {
    width: 100%;
    padding: 0 15px;
    margin: 0;

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

    ${media.desktop`
      width: 25%;
    `}
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
