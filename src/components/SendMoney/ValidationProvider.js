import React from 'react';

class ValidationProvider extends React.Component {
  state = { };

  isValueValid = (value, rules) => {
    return rules.reduce((acc, curr) => {
      const validator = Object.values(curr)[0];
      const isValid = validator(value);
      const errorMessage = Object.keys(curr)[0];
      return !isValid ? errorMessage : acc;
    }, true);
  }

  validate = (name, value) => {
    console.log('validating...', value, name)
    const rules = this.props.validationRules[name];
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