import Events from './';

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
