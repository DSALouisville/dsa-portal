import React from 'react';

export default class EventCard extends React.Component {
  render() {
    return (
      <div className="event card">
        <div className="complete-color"></div>
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
