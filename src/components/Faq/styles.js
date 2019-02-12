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
  padding: 15px 20px; 
  border-left: 1px solid ${variables.whitesmoke};
  border-right: 1px solid ${variables.whitesmoke};
  height: auto;
  transition: height 0.2s ease-in-out;
`;


export {
  FaqStyleContainer, 
  FaqStyleTitle, 
  FaqStyleContent
};