import styled from 'styled-components';
import { media } from 'style';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  p { 
    font-size: .875rem;
    line-height: 1.125rem;
    padding-top: 1rem;
  }

  ${media.tablet`
    flex-direction: row;
    p {
      padding-left: 8px;
      padding-top: 0;
    }
  `}
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  max-height: 288px
  max-width: 510px;

  iframe {
    height: 100%
    width: 100%
    flex-grow: 1;
  }

  ${media.tablet` 
    width: 50%;
    padding-right: 8px;
  `}
  ${media.desktop` 
    min-height: 1px;
    max-height: 170px;
  `}
`;

export { 
  VideoContainer,
  VideoWrapper,
};
