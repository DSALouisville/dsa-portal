/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import Events from './';
import { expect } from 'chai';

if (Meteor.isServer) {
  describe('Events', () => {
    describe('methods', () => {
      it('Add an event', () => {
        const newEvent = {};
        Meteor.call('Events.add', newEvent);
        expect(false).to.be(true);
      });
    });
  });
}
