/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import Events from '../';
import _ from 'lodash';
import { expect } from 'chai';
import './methods';

if (Meteor.isServer) {
  describe('Events', () => {
    describe('methods', () => {
      beforeEach(() => {
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
        Events.remove({_id: 'remove'});
      });
      describe('Events.add', () => {
        it('Enforces schema', () => {
          const before = Events.find({}).count();
          const badEvent= {};
          try {
            Meteor.call('Events.add', badEvent);
          } catch (e) { _.noop; }
          expect(Events.find({}).count()).to.equal(before);
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
