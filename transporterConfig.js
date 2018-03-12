require('dotenv').config();

const type = process.env.SERVICE;
const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

module.exports = {
  type,
  user,
  pass
}
