import React from 'react';
import tempFaqStyle from './styles'
// import { bold } from 'ansi-colors';


// export default tempFaqStyle;
class FAQ extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedOn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var value = this.state.clickedOn;
    if (value) {
      this.setState({
        clickedOn: false
      });
    } else {
      this.setState({
        clickedOn: true
      });
    }
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
    <div style={tempFaqStyle} className='title' onClick={this.handleClick}>{title}</div>
    {showAnswer}
    </div>
    )
  }
}

export default FAQ;
