import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/api/Events/methods';
import App from '../imports/modules/App/App';

console.log(Meteor.call('Events.findOne', {}));

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
