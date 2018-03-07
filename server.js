const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const transporterConfig = require('./transporterConfig.js');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true}))

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.resolve(__dirname, './public')));
app.locals.title = 'My Site';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...transporterConfig
  }
});

const sendMail = message => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      console.log(error, info);
      if(error) {
        reject(error)
        return
      }
      resolve(info)
    });
  })
}

app.get('/', function(request, response) {
  response.sendFile(
    path.resolve(__dirname, './public', 'index.html')
  );
});

app.post('/contact', async (request, response) => {
  try {
    const { first, last, email, message } = request.body;
    const emailToSend = {
      from: `${first}, ${last}, <${email}>`,
      text: message
    }
    await sendMail(emailToSend)
    console.log('success');
  } catch (error) {
    console.log('did not send');
  }
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
