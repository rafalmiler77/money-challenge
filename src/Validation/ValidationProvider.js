import React from 'react';

class ValidationProvider extends React.Component {
  state = { };

  isValueValid = (value, rules = []) => {
    return rules.reduce((acc, curr) => {
      const validator = Object.values(curr)[0];
      const isValid = validator(value);
      const errorMessage = Object.keys(curr)[0];
      return !isValid ? errorMessage : acc;
    }, true);
  }

  validate = (name, value) => {
    const rules = this.props.validationRules[name];
    const isValid = this.isValueValid(value, rules);

    this.setState({
      [name]: isValid
    })
  }

  getErrorFor = (fieldName) => {
    return this.state[fieldName];
  }

  render() {
    const config = {
      validate: this.validate,
      errors: this.state,
      getErrorFor: this.getErrorFor,
    }
    return this.props.children(config)
  }
}

export default ValidationProvider;
