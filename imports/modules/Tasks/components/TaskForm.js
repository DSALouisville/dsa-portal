import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Combobox, DateTimePicker, DropdownList } from 'react-widgets';

export default class TaskForm extends React.Component {
  submit() {
    console.log(this.state);
    Meteor.call('Tasks.add', this.state);
  }
  render() {
    return (
      <div className="event-form">
        Name of task
        <Combobox
          name="name"
          onChange={ value => this.setState({ name: value }) }
          open={false}
        />
        Description
        <Combobox
          name="description"
          onChange={ value => this.setState({ description: value }) }
          open={false}
        />
        Due Date
        <DateTimePicker
          defaultValue={ new Date() }
          onChange={ value => this.setState({ dueDate: value }) }
          name="dueDate"
        />
        Type
        <DropdownList
          name="type"
          data={[0,1]}
          onChange={ value => this.setState({ type: value }) }
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

