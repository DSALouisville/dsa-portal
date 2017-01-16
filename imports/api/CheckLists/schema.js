import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { TasksSchema } from '../Tasks/schema';
import Enums from '../Enums';

export const CheckListsSchema = new SimpleSchema({
  _id: {
    label: 'CheckList id',
    type: String,
  },
  tasks: {
    label: 'List of Tasks on this checklist',
    type: [TasksSchema]
  },
  status: {
    label: 'Current status of the CheckList',
    type: Enums.CheckLists.statuses,
  },
});
