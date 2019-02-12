import React, { Fragment } from 'react';
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
    return ( 
      <Fragment> 
        <FaqStyleTitle onClick={this.handleClick}> 
          {title} 
        </FaqStyleTitle> 
        <FaqStyleContent> 
          { clickedOn && <div>{answer.answer}</div> } 
        </FaqStyleContent> 
      </Fragment> 
    )
  }
}

export default FAQ;
