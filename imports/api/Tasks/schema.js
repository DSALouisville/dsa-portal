import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const TasksSchema = new SimpleSchema({
  _id: {
    label: 'Task id',
    type: String,
  },
  name: {
    label: 'Name of the task',
    type: String,
  },
  complete: {
    label: 'Has the task been completed?',
    type: Boolean,
    defaultValue: false,
  },
});
