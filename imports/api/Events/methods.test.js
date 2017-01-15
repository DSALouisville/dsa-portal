/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import Events from './';
import _ from 'lodash';
import { expect } from 'chai';
import './methods';

if (Meteor.isServer) {
  describe('Events', () => {
    describe('methods', () => {
      beforeEach(() => {
        Events.remove({_id: 'remove'});
        console.log('added');
        const newEvent = {
          _id: 'remove',
          shortName: 'Test Event',
          fullName: 'Big Time Testing Blowout',
          startTime: '2017-01-01 01:10:54',
          endTime: '2017-01-05 05:15:54',
        };
        Meteor.call('Events.add', newEvent);
      });
      afterEach(() => {
        console.log('removed');
        Events.remove({_id: 'remove'});
      });
      describe('Events.add', () => {
        it('Enforces schema', () => {
          const badEvent= { _id: 'badServer' };
          try {
            Meteor.call('Events.add', badEvent);
          } catch (e) {
            Events.remove({_id: 'remove'});
          }
          expect(Events.find({ _id: 'badServer' }).count()).to.equal(0);
        });
        it('Creates an event', () => {
          expect(Events.find({ _id: 'remove' }).count()).to.equal(1);
        });
      });
      describe('Events.findOne', () => {
        it('Finds one event', () => {
          expect(Meteor.call('Events.findOne', { _id: 'remove' }).shortName).to.equal('Test Event');
        });
      });
    });
  });
}
