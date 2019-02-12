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
    this.setState({
      clickedOn: !this.state.clickedOn
    });
  }
  render() {
    const {title, answer} = this.props;
    const {clickedOn} = this.state
    let showAnswer;
    if (clickedOn) {
      showAnswer = <div> {answer.answer}</div>
    }
    return ( 
      <div> 
        <FaqStyleTitle onClick={this.handleClick}> 
          {title} 
        </FaqStyleTitle> 
        <FaqStyleContent> 
          { clickedOn && <div>{showAnswer}</div> } 
        </FaqStyleContent> 
      </div> 
    )
    }
  }

  export default FAQ;
