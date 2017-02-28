import React from 'react';
import _ from 'lodash';

export default class JsonPaste extends React.Component {
  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  onClick(e) {
    e.preventDefault();
    Meteor.call(
      `${_.capitalize(this.props.objType)}s.add`, JSON.parse(this.state.value));
  }
  render() {
    return (
      <div className="json-paste">
        <textarea className="code" onChange={this.onChange.bind(this)}/><br/>
        <small> <a href="#" onClick={this.onClick.bind(this)}>Submit {this.props.objType}</a></small>
      </div>
    );
  }
}
JsonPaste.propTypes = {
  objType: React.PropTypes.string,
};
