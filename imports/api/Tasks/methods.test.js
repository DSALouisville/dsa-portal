/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import Tasks from './';
import _ from 'lodash';
import { expect } from 'chai';
import './methods';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      beforeEach(() => {
        Tasks.remove({_id: 'remove'});
        console.log('added');
        const newTask = {
          _id: 'remove',
          name: '0',
        };
        Meteor.call('Tasks.add', newTask);
      });
      afterEach(() => {
        console.log('removed');
        Tasks.remove({_id: 'remove'});
      });
      describe('Tasks.add', () => {
        it('Enforces schema', () => {
          const badTask= { _id: 'badServer' };
          try {
            Meteor.call('Tasks.add', badTask);
          } catch (e) {
            Tasks.remove({_id: 'remove'});
          }
          expect(Tasks.find({ _id: 'badServer' }).count()).to.equal(0);
        });
        it('Creates a checklist', () => {
          expect(Tasks.find({ _id: 'remove' }).count()).to.equal(1);
        });
      });
      describe('Tasks.findOne', () => {
        it('Finds one checklist', () => {
          Tasks.remove({_id: 'findMe'});
          const newTask = {
            _id: 'findMe',
            name: 0,
            completed: true,
          };
          Meteor.call('Tasks.add', newTask);
          Meteor.call('Tasks.findOne', { _id: 'findMe' }, (err, result) => {
            expect(result.completed).to.be.true;
          });
        });
      });
    });
  });
}

