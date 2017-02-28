import Tasks from './';

const addTask = (taskObj) => {
  Tasks.insert(taskObj);
};

const findOneTask = (query) => {
  Tasks.findOne(query);
};

const removeTask = (id) => {
  Tasks.remove({_id: id});
};


Meteor.methods({
  'Tasks.add': addTask,
  'Tasks.findOne': findOneTask,
  'Tasks.remove': removeTask,
});
