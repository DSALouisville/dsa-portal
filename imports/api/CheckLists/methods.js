import CheckLists from './';

const addCheckList = (eventObj) => {
  CheckLists.insert(eventObj);
};

const findOneCheckList = (query) => {
  CheckLists.findOne(query);
};


Meteor.methods({
  'CheckLists.add': addCheckList,
  'CheckLists.findOne': findOneCheckList,
});
