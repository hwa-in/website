import styled from 'styled-components';
import { variables } from 'style';

const ContactCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 1rem;
  width: 100%;
  min-height: 75px;
  margin-bottom: 1rem;
  background-color: ${variables.offWhite};
`;

const ContactDetails = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.375rem;

  p {
    margin-bottom: 1rem;
  }

  .title {
    font-weight: 500;
    color: ${variables.darkGreen};
  }

  .address {
    white-space: pre-line;
  }
`;

const MoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

export {
  ContactCardWrapper,
  ContactDetails,
  MoreInfo,
};


