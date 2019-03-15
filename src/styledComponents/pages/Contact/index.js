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

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  
  .form {
    width: 100%;
    padding: 0 15px;
    margin: 0;

    @media (min-width: 960px) {
      width: 66%;
    }
  }

  .contact {
    width: 100%;
    padding: 0 15px;

    @media (min-width: 960px) {
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
