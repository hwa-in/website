import React from 'react';
import {FaqStyleTitle, FaqStyleContent} from './styles'

class FAQ extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedOn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    // var content = this.nextElementSibling;
    // console.log("CONTENT STYLE", content.style.maxHeight);
    this.setState({
      clickedOn: !this.state.clickedOn
    });
  }
  render() {
    const {title, answer} = this.props;
    const questionSelected = this.state.clickedOn;
    let showAnswer;
    if (questionSelected) {
      showAnswer = <div> {answer.answer}</div>
    }
    return (
      <div>
        <FaqStyleTitle onClick={this.handleClick}> 
          {title}
        </FaqStyleTitle>
        <FaqStyleContent> 
          {showAnswer}
        {console.log("props", showAnswer)}
        </FaqStyleContent>
      </div>
      )
    }
  }
  
  export default FAQ;
