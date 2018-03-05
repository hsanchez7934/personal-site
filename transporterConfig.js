import clientID from './client_id.json';

const user = process.env.GMAIL_API_KEY;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const accessToken = process.env.GMAIL_ACCESS_TOKEN

export default {
  user,
  clientId: clientID.web.client_id,
  clientSecret: clientID.web.client_secret,
  refreshToken,
  accessToken
}
