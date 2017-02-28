import { Meteor } from 'meteor/meteor';
import React from 'react';
import Reorder from 'react-reorder';
import '../../api/Events/methods';
import { EventsConfig } from '../../api/Events/schema';
import { TasksConfig } from '../../api/Tasks/schema';
import Card from './Card';
// import CheckListCard from '../CheckLists/components/CheckListCard';
// import TaskCard from '../Tasks/components/TaskCard';
import EventForm from '../Events/components/EventForm';
import TaskForm from '../Tasks/components/TaskForm';
import Events from '../../api/Events/';
import CheckLists from '../../api/CheckLists/';
import Tasks from '../../api/Tasks/';
import CardList from './CardList';
import JsonPaste from './JsonPaste';
import TextSend from './TextSend';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TextSend/>
        <h1> Events </h1>
        <div className="row">
          <div className="event-form-containter six columns">
            <EventForm/>
          </div>
          <div className="event-list-container six columns">
            <CardList
              coll={'Events'}
              schema={ EventsConfig }
              list={this.props.events}
            />
          </div>
        </div>
        <hr/>
        <h1> Tasks </h1>
        <div className="row">
          <div className="task-form-container six columns">
            <TaskForm/>
            <JsonPaste objType="task"/>
          </div>
          <div className="event-list-container six columns">
            <CardList
              coll={'Tasks'}
              schema={ TasksConfig }
              list={this.props.tasks}
            />
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
  Meteor.subscribe('checklists');
  Meteor.subscribe('tasks');

  return {
    events: Events.find({}).fetch(),
    checklists: CheckLists.find({}).fetch(),
    tasks: Tasks.find({}).fetch(),
  };
}, App);
