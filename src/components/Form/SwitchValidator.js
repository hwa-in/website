import React from 'react'
import red from '@material-ui/core/colors/red'
import Switch from '@material-ui/core/Switch'
import { ValidatorComponent } from 'react-material-ui-form-validator'

const red300 = red['500']

const style = {
  right: 0,
  fontSize: '12px',
  color: red300,
  position: 'absolute',
  marginTop: '-25px',
}

class SwitchValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      value,
      ...rest
    } = this.props

    return (
      <div>
        <Switch
          {...rest}
          ref={r => {
            this.input = r
          }}
        />
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state

    if (isValid) {
      return null
    }

    return <div style={style}>{this.getErrorMessage()}</div>
  }
}

export default SwitchValidator
