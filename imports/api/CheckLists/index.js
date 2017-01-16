import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash';
import { CheckListsSchema } from './schema';

export const CheckLists = new Mongo.Collection('checklists');
export default CheckLists;

CheckLists.name = 'CheckLists';
CheckLists.attachSchema(CheckListsSchema);

CheckLists.after.update((userId, doc) => {
  const complete = _.filter(doc.tasks.map((task) => task.complete), _.identity).length;
  if (doc.tasks.length) {
    const frac = complete / doc.tasks.length;
    CheckLists.direct.update({_id: doc._id}, { $set: { completionRate: frac } });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('checklists', function checklistsPublication() {
    return CheckLists.find();
  });
}
