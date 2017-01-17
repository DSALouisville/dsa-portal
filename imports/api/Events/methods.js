import Events from './';

const addEvent = (eventObj) => {
  Events.insert(eventObj);
};

const findOneEvent = (query) => {
  Events.findOne(query);
};

const removeEvent = (id) => {
  Events.remove({_id: id});
};


Meteor.methods({
  'Events.add': addEvent,
  'Events.findOne': findOneEvent,
  'Events.remove': removeEvent,
});
