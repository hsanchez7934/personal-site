const clientID = require('./client_id.json');


const user = `hsanchez7934@gmail.com`;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const accessToken = process.env.GMAIL_ACCESS_TOKEN;
// console.log(accessToken);

module.exports = {
  user,
  clientId: clientID.web.client_id,
  clientSecret: clientID.web.client_secret,
  refreshToken,
  accessToken,
}
