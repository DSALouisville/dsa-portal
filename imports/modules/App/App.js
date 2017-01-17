import { Meteor } from 'meteor/meteor';
import React from 'react';
import Reorder from 'react-reorder';
import '../../api/Events/methods';
import EventCard from '../Events/components/EventCard';
import EventForm from '../Events/components/EventForm';
import TaskForm from '../Tasks/components/TaskForm';
import Events from '../../api/Events/';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends React.Component {
  renderEvents() {
    return (
      <Reorder
        itemKey='_id'
        holdTime='250'
        list={ this.props.events }
        template={ React.createClass({
          render: function () {
            return ( React.createElement( EventCard, {
              event: this.props.item,
            }));
          }
        }) }
      />
    );
  }
  render() {
    return (
      <div className="container">
        <h1> Events </h1>
        <div className="row">
          <div className="event-form-containter six columns">
            <EventForm/>
          </div>
          <div className="event-list-container six columns">
            {this.renderEvents()}
          </div>
        </div>
        <hr/>
        <h1> Tasks </h1>
        <div className="row">
          <div className="six columns">
            <TaskForm/>
          </div>
        </div>
        <hr/>
        <h1>Checklists</h1>
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
