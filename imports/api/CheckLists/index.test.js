/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import CheckLists from './';
import _ from 'lodash';
import { expect } from 'chai';

if (Meteor.isServer) {
  describe('CheckLists', () => {
    describe('after.update', () => {
      let cl = {};
      beforeEach(() => {
        cl = {};
        cl = {
          name: 'Testing',
          status: 0,
          completionRate: 0,
          tasks: [],
        };
        [false, false, false, false].forEach((f, index) => {
          cl.tasks.push({
            _id: index,
            name: 'name',
            complete: f,
          });
        });
        CheckLists.insert(cl);
      });
      afterEach(() => {
        CheckLists.remove({name: 'Testing'});
      });
      it('zero completion', () => {
        CheckLists.update({name: 'Testing'}, { $set: { status: 1 } });
        const cp = CheckLists.findOne({name: 'Testing'});
        expect(cp.completionRate).to.eq(0);
      });
      it('partial completion', () => {
        const id = CheckLists.findOne({name: 'Testing'})._id;
        CheckLists.update({_id: id}, { $set: { 'tasks.0.complete': true } });
        const cp = CheckLists.findOne({_id: id});
        expect(cp.completionRate).to.eq(0.25);
      });
      it('full completion', () => {
        const id = CheckLists.findOne({name: 'Testing'})._id;
        CheckLists.update({_id: id}, { $set: {
          'tasks.0.complete': true,
          'tasks.1.complete': true,
          'tasks.2.complete': true,
          'tasks.3.complete': true,
        }});
        const cp = CheckLists.findOne({_id: id});
        expect(cp.completionRate).to.eq(1);
      });
    });
  });
}
