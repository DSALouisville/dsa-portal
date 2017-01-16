import Tasks from './';

const addTask = (taskObj) => {
  Tasks.insert(taskObj);
};

const findOneTask = (query) => {
  Tasks.findOne(query);
};


Meteor.methods({
  'Tasks.add': addTask,
  'Tasks.findOne': findOneTask,
});
