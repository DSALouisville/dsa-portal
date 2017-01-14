import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { EventsSchema } from './schema';

export const Events = new Mongo.Collection('events');
export default Events;

Events.name = 'Events';
Events.attachSchema(EventsSchema);


