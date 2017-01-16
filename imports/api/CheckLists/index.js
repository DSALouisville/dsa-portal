import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { CheckListsSchema } from './schema';

export const CheckLists = new Mongo.Collection('checklists');
export default CheckLists;

CheckLists.name = 'CheckLists';
CheckLists.attachSchema(CheckListsSchema);

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('checklists', function checklistsPublication() {
    return CheckLists.find();
  });
}
