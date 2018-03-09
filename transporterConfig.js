const clientID = require('./client_id.json');
require('dotenv').config();

const type = 'Gmail';
const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

module.exports = {
  type,
  user,
  pass
}
