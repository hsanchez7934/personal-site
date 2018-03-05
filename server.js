const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

import sendMail from 'nodemailer.js';

app.use(bodyParser.urlencoded();)

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.resolve(__dirname, './public')));
app.locals.title = 'My Site';

app.get('/', function(request, response) {
  response.sendFile(
    path.resolve(__dirname, './public', 'index.html')
  );
});

app.post('/contact', async (request, response) => {
  try {
    const { first, last, email, message } = req.body;
    const email = {
      from: `${first}, ${last}, <${email}>`,
      text: message
    }
    await sendMail(email)
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
