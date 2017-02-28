import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { RRNContactSchema } from './schema';

export const RRNContacts = new Mongo.Collection('rrn_contacts');
export default RRNContacts;

RRNContacts.name = 'RRNContacts';
RRNContacts.attachSchema(RRNContactsSchema);

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('rrn_contacts', function rrnContactsPublication() {
    return RRNContacts.find();
  });
}
