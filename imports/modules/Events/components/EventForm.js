import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Combobox, DateTimePicker } from 'react-widgets';

export default class EventForm extends React.Component {
  submit() {
    console.log(this.state);
    Meteor.call('Events.add', this.state);
  }
  render() {
    return (
      <div className="event-form">
        Full Title of Event
        <Combobox
          name="fullName"
          onChange={ value => this.setState({ fullName: value }) }
        />
        Short Title of Event
        <Combobox
          name="shortName"
          onChange={ value => this.setState({ shortName: value }) }
        />
        Start Time
        <DateTimePicker
          defaultValue={ new Date() }
          onChange={ value => this.setState({ startTime: value }) }
          name="startDate"
        />
        End Time
        <DateTimePicker
          defaultValue={ new Date() }
          name={ 'endDate' }
          onChange={ value => this.setState({ endTime: value }) }
        />
        <small>
          <a onClick={ this.submit.bind(this) } href="#">
            Submit Event
          </a>
        </small>
      </div>
    );
  }
}
