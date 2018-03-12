const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const transporterConfig = require('./transporterConfig.js');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.resolve(__dirname, './public')));
app.locals.title = 'Hector A. Sanchez';

const transporter = nodemailer.createTransport({
  service: `${process.env.SERVICE}`,
  auth: transporterConfig
});

const send = (mail) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
}

app.get('*', function(request, response) {
  response.sendFile(
    path.resolve(__dirname, './public', 'index.html')
  );
});

app.post('/api/v1/sender', (request, response) => {  
  const { email, first, last, message } = request.body;
  for(let requiredParam of ['first', 'last', 'email', 'message']) {
    if(!request.body[requiredParam]) {
      return response.status(422).json({ error: `Missing ${requiredParam}`});
    }
  }
  const mailToSend = {
    to: `${process.env.EMAIL}`,
    subject: `Personal Website Message From: ${first}, ${last}, @ ${email}`,
    text: `${message}`
  }
  send(mailToSend)
  .then(() => console.log('success'))
  .catch(error => console.log('error: could not send email'))
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
