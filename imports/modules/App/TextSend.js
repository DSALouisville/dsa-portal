import React from 'react';

export default class TextSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      message: '',
    };
  }
  getNumber(e) {
    this.setState({
      number: e.target.value,
    });
  }
  getMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }
  sendText(e) {
    e.preventDefault();
    console.log(this.state);
    Meteor.call('SendText', {
      to: this.state.number,
      msg: this.state.message,
    });
  }
  render() {
    return (
      <div>
        Number
        <input type="text" onChange={ this.getNumber.bind(this) }></input>
        Message
        <input type="text" onChange={ this.getMessage.bind(this) }></input>
        <button onClick={ this.sendText.bind(this) }>Text</button>
      </div>
    );
  }
}
