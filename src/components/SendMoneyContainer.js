import React from 'react';
import SendMoney from './SendMoney';

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

export default SendMoneyContainer;