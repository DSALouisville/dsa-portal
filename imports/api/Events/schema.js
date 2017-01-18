// import _ from 'lodash';
// import moment from 'moment-timezone';
//
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Match } from 'meteor/check';
import { CheckListsSchema } from '../CheckLists/schema';
import Enums from '../Enums';

SimpleSchema.extendOptions({
  card: Match.Optional(Boolean),
});
export const EventsConfig = {
  _id: {
    label: 'Event id',
    type: 'String',
  },
  shortName: {
    label: 'Short name for the event',
    type: String,
    card: true,
  },
  fullName: {
    label: 'Full name for the event',
    type: String,
  },
  startTime: {
    label: 'Start time of the event',
    type: Date,
    card: true,
  },
  endTime: {
    label: 'End time of the event',
    type: Date,
    card: true,
  },
  checkList: {
    label: 'Todo list for event',
    type: CheckListsSchema,
    optional: true,
  },
  type: {
    label: 'Type of event',
    type: Enums.Events.types,
  },
};

export const EventsSchema = new SimpleSchema(EventsConfig);
