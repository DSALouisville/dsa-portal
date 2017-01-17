import React from 'react';

export default class EventCard extends React.Component {
  removeEvent() {
    Meteor.call('Events.remove', this.props.event._id);
  }
  render() {
    return (
      <div className="event card">
        <div className="card-icons">
          <div className="card-icon" onClick={this.removeEvent.bind(this)}>X</div>
          <div className="card-icon">V</div>
        </div>
        <div className="card-text">
          {this.props.event.fullName}
        </div>
        <div className="card-date">
          Starts: {this.props.event.startTime.toString()}
        </div>
        <div className="card-date">
          Ends: {this.props.event.endTime.toString()}
        </div>
     </div>
    );
  }
}
Event.propTypes = {
  event: React.PropTypes.object,
};
