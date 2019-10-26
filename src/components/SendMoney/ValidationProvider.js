import React from 'react';

class ValidationProvider extends React.Component {
  state = { };

  isValueValid = (value, rules) => {
    return rules.reduce((acc, curr) => {
      return acc && curr(value);
    }, true)
  }

  validate = (name, value) => {
    console.log('validating...', value, name)
    const rules = Object.values(this.props.validationRules[name]);
    const isValid = this.isValueValid(value, rules);

    console.log('isValid: ', isValid)
    this.setState({
      [name]: isValid
    })
  }
  render() {
    const config = {
      validate: this.validate,
      validationState: this.state
    }
    return this.props.children(config)
  }
}

export default ValidationProvider;