import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/modules/App/App';

Meteor.startup(() => {
  console.log('App started');
  render(<App />, document.getElementById('render-target'));
});
