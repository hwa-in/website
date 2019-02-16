import styled from 'styled-components';
import { variables } from '../../style';

var FaqStyleContainer = styled.div`
  width: 80%; 
  max-width: 600%;
  margin: 50px auto;
`;

var FaqStyleTitle = styled.div`
&:hover {
  background-color: ${variables.darkWhiteSmoke};
}
  font-weight: bold;
  font-size: 18px;
  background-color: ${variables.whitesmoke};
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.2s linear;
`;

var FaqStyleContent = styled.div`: 
  overflow: hidden;
  color: green;
  border-left: 1px solid ${variables.whitesmoke};
  border-right: 1px solid ${variables.whitesmoke};
  transition: all 0.3s ease-out;
  height: 0;
  opacity: 0;
  padding: 0 0.6rem;
  background: ${variables.whitesmoke};
  font-weight: 200;
  letter-spacing: 1px;

  &.open {
    color: red; 
    opacity: 1;
    height: auto;
    padding: 1rem;
  }
`;

export {
  FaqStyleContainer, 
  FaqStyleTitle, 
  FaqStyleContent
};