import styled from 'styled-components';
import { variables, media } from 'style';

const Date = styled.div`
  margin-bottom: 1rem;
  
  small {
    font-size: .75rem;
    font-weight: 300;
    padding: .25rem;
    color: ${variables.midGrey};
  }
`;

const Header = styled.div`

  h1 {
    color: ${variables.darkGreen};
    margin-bottom: .5rem;
    font-size: 1.875rem;
    line-height: 2.125rem;

    ${media.tablet`
      font-size: 3rem;
      line-height: 3.375rem;
    `}
  }

  h2 {
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: ${variables.darkGrey};
    
    ${media.tablet`
      font-size: 2rem;
    `}
  }

  p {
    margin: 3rem 0;
    font-size: 1.375rem;
    line-height: 1.75rem;
    color: ${variables.midGrey};

    ${media.tablet`
      font-size: 1.5rem;
    `}
  }
`;

const Body = styled.div`
  padding-top: 4rem;

  h1, h2, h3 {
    margin: 1rem 0 1.5rem;
  }

  h1 {
    color: ${variables.darkGreen};
    font-size: 1.75rem;
    line-height: 2rem;

    ${media.tablet`
      font-size: 1.875rem;
      line-height: 2.125rem;
    `}
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;

    ${media.tablet`
      font-size: 1.75rem;
      line-height: 2rem;
    `}
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.25rem;

    ${media.tablet`
      font-size: 1.5rem;
      line-height: 1.5rem;
    `}
  }

  p {
    margin-bottom: 1rem;
    font-size: 14px;

    ${media.tablet`
      font-size: 1rem;
    `}
  }

  ul, ol {
    padding-left: 1rem;

    li {
      margin-bottom: 1rem;
      font-size: 14px;

      ${media.tablet`
        font-size: 1rem;
      `}
    }
  }
`;


export {
  Date,
  Header,
  Body,
}