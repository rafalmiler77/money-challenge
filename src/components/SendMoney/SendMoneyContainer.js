import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SendMoney from './SendMoney';
import ValidationProvider from './ValidationProvider';
import validators from './validators';
import { addTransaction, getTransactions } from '../../store/actions';
import { formatValue } from '../../utils/formatters/formatInput';

class SendMoneyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: 'Mark',
      email: 'abc@d.com',
      amount: 10,
    };
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  changeInput = (name, value) => {
    this.props.validate(name, value);
    const formattedValue = formatValue(name, value);
    this.setState({
      [name]: formattedValue
    });
  }
  onSubmit = () => {
    console.log('state', this.state)
    this.props.sendTransaction(this.state);
  }

  render() {
    console.log('SendMoney props', this.props)
    const childProps = {
      senderName: this.state.senderName,
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

const SendMoneyContainerWithValidation = props => {
  const validationRules = {
    senderName: [{
      required : validators.isRequired
    }]
  }
  return (
    <ValidationProvider rules={validationRules}>
      {
        (validation) => {
          console.log('config of ValidationProvider', validation)
          return (
            <SendMoneyContainer {...props} {...validation} />
          )
        }
      }
    </ValidationProvider>
  )
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

export default connect(null, mapDispatchToProps)(SendMoneyContainerWithValidation);
