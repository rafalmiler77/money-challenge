import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SendMoney from './SendMoney';
import { addTransaction } from '../store/actions';

class SendMoneyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderName: 'ss',
      email: 'ccc',
      amount: 10,
    };
  }

  changeInput = (name, value) => {
    this.setState({
      [name]: value
    });
  }
  onSubmit = () => {
    console.log('state', this.state)
    this.props.sendTransaction(this.state);
  }

  render() {
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
const mapDispatchToProps = dispatch => {
  return ({
    sendTransaction: transaction => dispatch(addTransaction(transaction))
  })
}

SendMoneyContainer.propTypes = {
  sendTransaction: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SendMoneyContainer);