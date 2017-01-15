import { Meteor } from 'meteor/meteor';
import { Events } from '../imports/api/Events';
import '../imports/api/Events/methods.js';

Meteor.startup(() => {
  // code to run on server at startup
  if (false) {
    console.log('find one worked', Meteor.call('Events.findOne', {_id: '1'}));
    Meteor.call('Events.add', {
      _id: '123',
      shortName: 'Test Event',
      fullName: 'Big Time Testing Blowout',
      startTime: '2017-01-01 01:10:54',
      endTime: '2017-01-05 05:15:54',
    });
  }
});
