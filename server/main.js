import { Meteor } from 'meteor/meteor';
import '../imports/api/Events/server/methods.js';
import { Events } from '../imports/api/Events';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Meteor.methods);
  Events.insert({
    _id: 'remove',
    shortName: 'Test Event',
    fullName: 'Big Time Testing Blowout',
    startTime: '2017-01-01 01:10:54',
    endTime: '2017-01-05 05:15:54',
  });
});
