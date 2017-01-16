import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { TasksSchema } from './schema';

export const Tasks = new Mongo.Collection('tasks');
export default Tasks;

Tasks.name = 'Tasks';
Tasks.attachSchema(TasksSchema);

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}
