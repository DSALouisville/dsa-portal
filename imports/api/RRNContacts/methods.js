import RRNContacts from './';

const addRRNContact = (taskObj) => {
  RRNContacts.insert(taskObj);
};

const findOneRRNContact = (query) => {
  RRNContacts.findOne(query);
};

const removeRRNContact = (id) => {
  RRNContacts.remove({_id: id});
};


Meteor.methods({
  'RRNContacts.add': addRRNContact,
  'RRNContacts.findOne': findOneRRNContact,
  'RRNContacts.remove': removeRRNContact,
});


