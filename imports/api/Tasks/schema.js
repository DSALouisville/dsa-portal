import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Match } from 'meteor/check';

SimpleSchema.extendOptions({
  card: Match.Optional(Boolean),
});
export const TasksConfig = {
  _id: {
    label: 'Task id',
    type: String,
  },
  name: {
    label: 'Name of the task',
    type: String,
    card: true,
  },
  complete: {
    label: 'Has the task been completed?',
    type: Boolean,
    defaultValue: false,
    card: true,
  },
  dueDate: {
    label: 'Due Date of the task',
    type: Date,
    card: true,
    optional: true,
  }
};

export const TasksSchema = new SimpleSchema(TasksConfig);
