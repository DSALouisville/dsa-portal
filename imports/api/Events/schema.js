// import _ from 'lodash';
// import moment from 'moment-timezone';
//
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const EventsSchema = new SimpleSchema({
  _id: {
    label: 'Event id',
    type: 'String',
  },
  shortName: {
    label: 'Short name for the event',
    type: String,
  },
  fullName: {
    label: 'Full name for the event',
    type: String,
  },
  startTime: {
    label: 'Start time of the event',
    type: Date,
  },
  endTime: {
    label: 'End time of the event',
    type: Date,
  },

});
