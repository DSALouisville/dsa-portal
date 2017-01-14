import React, { Component } from 'react';
import Events from '../../api/Events';
import Event from '../Events/components/Event';

// App component - represents the whole app
export default class App extends Component {
  render() {
    console.log(Event.findOne({}));
    return (
      <div className="container">
        <header>
          <h1>Events</h1>
          <Event
            event={ Events.findOne({}) }
          />
        </header>

      </div>
    );
  }
}
