import styled from 'styled-components';
import { Container, Section } from 'styledComponents';
import { Link } from 'gatsby';
import { variables, media } from 'style';

const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 150px;
  padding: 25px 0;
  background-color: ${variables.midGrey};
  padding: 0;

  h3 { 
    color: ${variables.white};
    font-size: .75rem;
    line-height: 1.375rem;
    text-align: left;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 25px 0;
    display: block;

    ${media.tablet`
      width: 90%;
      padding-bottom: 2.5rem;
    `}
  }
`;


const FooterInfo = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 25px;
  display: block;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 90%;
    padding-top: 3rem;
  `}

`;

const ContactInfo = styled.div` 
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  ${media.tablet`
    width: 90%;
  `}

  h4 {
    color: ${variables.white};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .3rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;

    ${media.tablet`
      flex-direction: row;
    `}

    li {
      padding-left: 0; 
      color: ${variables.white};
      font-size: .75rem;
      line-height: 1.375rem;
      text-align: left;
      width: 100%;
      display: block;

      ${media.tablet`
        display: inline;
        width: auto;
      `}
    }
  }
`;

const RouteSection = styled.div`
  margin-bottom: 1.5rem;
  display: block;
  width: 100%;

  ${media.tablet`
    width: 20%;
    padding: 0 15px;
  `}

  h4 {
    color: ${variables.white};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .3rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;

    li {
      padding-left: 0; 
      color: ${variables.white};
      font-size: .75rem;
      line-height: 1.375rem;
      text-align: left;
      width: 100%;
      display: block;

      a {
        color: ${variables.white};
        font-size: .75rem;
        line-height: 1.375rem;
        text-align: left;
        width: 100%;
        display: block;
      }
    }
  }
`

export {
  FooterContainer,
  FooterInfo,
  RouteSection,
  ContactInfo,
}