import Events from './';

console.log('event methods');

const addEvent = (eventObj) => {
  Events.insert(eventObj);
};

const findOneEvent = (query) => {
  Events.findOne(query);
};


Meteor.methods({
  'Events.add': addEvent,
  'Events.findOne': findOneEvent,
});
