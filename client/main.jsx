import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/api/Events/methods';
import App from '../imports/modules/App/App';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';

console.log(Meteor.call('Events.findOne', {}));

Meteor.startup(() => {
  momentLocalizer(moment);
  numberLocalizer();
  render(<App />, document.getElementById('render-target'));
});
