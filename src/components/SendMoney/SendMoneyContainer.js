import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SendMoney from './SendMoney';
import { ValidationProvider, validators } from '../../Validation';
import { addTransaction, getTransactions } from '../../store/actions';
import { formatValue } from '../../utils/formatters/formatInput';

class SendMoneyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: '',
      email: '',
      amount: '',
    };
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  sanitizeAmount = (name, value) => {
    if (name !== 'amount') {
      return {name, value};
    }
    if (typeof +value === 'number' && !isNaN(+value)) {
      return {name, value: +value};
    }
    return {name, value: undefined};
  }

  changeInput = (name, value) => {
    const formattedValue = compose(
      formatValue,
      this.sanitizeAmount)(name, value);
      
    this.props.validate(name, formattedValue);

    if (formattedValue !== undefined) {
      this.setState({
        [name]: formattedValue
      });
    }
  }

  onSubmit = () => {
    this.props.sendTransaction(this.state);
  }

  render() {
    const childProps = {
      senderName: this.state.senderName,
      errors: this.props.errors,
      email: this.state.email,
      amount: this.state.amount,
      onHandleChange: this.changeInput,
      onSubmit: this.onSubmit,
    }

    return (
      <SendMoney {...childProps} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    sendTransaction: transaction => dispatch(addTransaction(transaction)),
    getTransactions: () => dispatch(getTransactions())
  })
}

SendMoneyContainer.propTypes = {
  sendTransaction: PropTypes.func.isRequired
};

const SendMoneyContainerWithValidation = props => {
  const validationRules = {
    senderName: [
      {'This field requires minimum 3 characters' : validators.minLength},
      {'This field is required' : validators.isRequired}
    ],
    email: [
      {'Provide the right email' : validators.validateEmail},
      {'This field is required' : validators.isRequired}
    ],
    amount: [
      {'Amount must be greater than zero' : validators.isRequired}
    ]
  };
  return (
    <ValidationProvider validationRules={validationRules}>
      {
        (validation) => {
          return (
            <SendMoneyContainer {...props} {...validation} />
          )
        }
      }
    </ValidationProvider>
  )
}

export default connect(null, mapDispatchToProps)(SendMoneyContainerWithValidation);
