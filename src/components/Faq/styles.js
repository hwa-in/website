import styled from 'styled-components';
// import { bold } from 'ansi-colors';
// why cant it be style.title? shouldnt it create a tag <title> and I shiuld be able to style it

var FaqStyleContainer = styled.div`
  width: 80%; 
  max-width: 600%;
  margin: 50px auto;
`;

var FaqStyleTitle = styled.div`
&:hover {
  background-color: #ddd;
}
  font-weight: bold;
  font-size: 18px;
  background-color: whitesmoke;
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.2s linear;

`;

var FaqStyleContent = styled.div`: 
  padding: 15px 20px; 
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  height: auto;
  transition: height 0.2s ease-in-out;
`;


export {FaqStyleContainer, FaqStyleTitle, FaqStyleContent};