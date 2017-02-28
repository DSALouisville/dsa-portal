import { Meteor } from 'meteor/meteor';
import twilio from 'twilio';

const sendText = (sms) => {
  const client = twilio('AC4dade0f45495e7d3c96d629a62ef023d', 'f0a7011796ade6e97c339cc39ef5f761');
  client.sendMessage({
    to: sms.to,
    from: '5028225523',
    body: sms.msg,
  });
};

Meteor.methods({'SendText': sendText});
