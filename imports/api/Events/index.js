import { Meteor } from 'meteor/meteor';
import { EventsSchema } from './schema';

Meteor.events.attachSchema(EventsSchema);

export const Events = Meteor.evemts || {};
export default Events;

Events.name = 'Events';


