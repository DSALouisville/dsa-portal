import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Combobox, DateTimePicker, DropdownList } from 'react-widgets';

export default class RRNContactForm extends React.Component {
  submit() {
    console.log(this.state);
    Meteor.call('RRNContacts.add', this.state);
  }
  render() {
    return (
      <div className="event-form">
        Name
        <Combobox
          name="fullName"
          onChange={ value => this.setState({ fullName: value }) }
        />
        Phone
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
        Type
        <DropdownList
          name="type"
          data={[0,1]}
          onChange={ value => this.setState({ type: value }) }
        />
        <small>
          <a onClick={ this.submit.bind(this) } href="#">
            Submit RRNContact
          </a>
        </small>
      </div>
    );
  }
}
