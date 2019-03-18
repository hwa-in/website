import styled from 'styled-components';

const Wrapper = styled.article`
  width: 75%;
  max-width: 790px;
  margin: 0 auto;
  padding: 50px 0 70px;

  h2 {
    margin-bottom: 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.75rem;

  h1 {
    margin: 1.5rem 0;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  ul {
    padding-left: 1rem;

    li {
      margin-bottom: .5rem;
    }
  }
`;

const Content = styled.div`

`

const MoreInfo = styled.div`
  margin-top: 1.5rem;
`;

export {
  Wrapper,
  Header,
  Details,
  Content,
  MoreInfo,
};
