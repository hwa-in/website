import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  FaqStyleContainer,
  FaqStyleTitle,
  FaqStyleContent,
} from './styles';

const duration = 500;

class FAQ extends React.Component {
  state = {
    clickedOn: false,
  }
  
  handleClick = () => {
    this.setState({
      clickedOn: !this.state.clickedOn,
    });
  }

  showAnswer = () => {
    const { clickedOn } = this.state
    const { answer } = this.props
    return (
      <CSSTransition
        in={clickedOn}
        timeout={duration}
        classNames="answer"
      >
        {(state) => (
          <FaqStyleContent className="answer">
              <p>{answer.answer}</p>
          </FaqStyleContent> 
        )}
      </CSSTransition>
    )
  }

  render() {
    const { title } = this.props;
    return ( 
      <FaqStyleContainer onClick={ () => this.handleClick() }> 
        <FaqStyleTitle> 
          { title }
        </FaqStyleTitle>
        { this.showAnswer() }
      </FaqStyleContainer> 
    )
  }
}

export default FAQ;
