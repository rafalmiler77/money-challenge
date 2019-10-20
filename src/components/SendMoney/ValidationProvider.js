import React from 'react';

class ValidationProvider extends React.Component {
  state = {
    isInputValid: true
  }

  validate = (name, value) => {
    console.log('validating...', value, name)
    console.log('ValidationProvider props', this.props)
const w = this.props.rules[name]
console.log('w', w)
    this.setState({
      [name]: this.props.rules[name]
    })
  }
  render() {
    const config = {
      validate: this.validate,
      isInputValid: this.state.isInputValid,
      state: this.state
    }
    return this.props.children(config)
  }
}

export default ValidationProvider;