/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import CheckLists from './';
import _ from 'lodash';
import { expect } from 'chai';
import './methods';

if (Meteor.isServer) {
  describe('CheckLists', () => {
    describe('methods', () => {
      beforeEach(() => {
        CheckLists.remove({_id: 'remove'});
        console.log('added');
        const newCheckList = {
          _id: 'remove',
          status: 0,
          tasks: [],
        };
        Meteor.call('CheckLists.add', newCheckList);
      });
      afterEach(() => {
        console.log('removed');
        CheckLists.remove({_id: 'remove'});
      });
      describe('CheckLists.add', () => {
        it('Enforces schema', () => {
          const badCheckList= { _id: 'badServer' };
          try {
            Meteor.call('CheckLists.add', badCheckList);
          } catch (e) {
            CheckLists.remove({_id: 'remove'});
          }
          expect(CheckLists.find({ _id: 'badServer' }).count()).to.equal(0);
        });
        it('Creates a checklist', () => {
          expect(CheckLists.find({ _id: 'remove' }).count()).to.equal(1);
        });
      });
      describe('CheckLists.findOne', () => {
        it('Finds one checklist', () => {
          CheckLists.remove({_id: 'findMe'});
          const newCheckList = {
            status: 0,
            tasks: [],
          };
          Meteor.call('CheckLists.add', newCheckList);
          Meteor.call('CheckLists.findOne', { _id: 'findMe' }, (err, result) => {
            expect(result.shortName).to.equal('Test CheckList');
          });
        });
      });
    });
  });
}

