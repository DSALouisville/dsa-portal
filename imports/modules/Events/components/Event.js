import React from 'react';

export default class Event extends React.Component {
  render() {
    return (
      <div>
        {this.props.event.fullName}
     </div>
    );
  }
}
Event.propTypes = {
  event: React.PropTypes.object,
};
