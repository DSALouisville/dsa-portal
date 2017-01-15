import { Meteor } from 'meteor/meteor';
import React from 'react';
import '../../api/Events/methods';
import EventCard from '../Events/components/EventCard';
import Events from '../../api/Events/';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends React.Component {
  renderEvents() {
    return this.props.events.map((event) => (
      <EventCard event={event} key={event._id}/>
    ));
  }
  render() {
    return (
      <div className="container">
        {this.renderEvents()}
      </div>
    );
  }
}
App.propTypes = {
  events: React.PropTypes.array,
};
export default createContainer(() => {
  Meteor.subscribe('events');
  return {
    events: Events.find({}).fetch(),
  };
}, App);
