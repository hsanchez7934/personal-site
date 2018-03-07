const clientID = require('./client_id.json');


const user = `hsanchez7934@gmail.com`;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const accessToken = process.env.GMAIL_ACCESS_TOKEN;
// console.log(accessToken);

module.exports = {
  user,
  clientId: clientID.web.client_id,
  clientSecret: clientID.web.client_secret,
  refreshToken: `1/ISFHS_cylBFn-2NSEEVCAZaJpZwKFRbp_nQzWGDJMgI`,
  accessToken: `ya29.Glt1Bc2_LluWM3jsN7D4Bw5Eu7vQwxrw-pqw5cMeyW628qmIr14Y9ZiBWH5Boib2w7Yvf0EiA8Dl8en0JTwFIrF8WTtqL8rS-mUEMeTZHQgKxbJRxGw7cuX0mUFk`
}
