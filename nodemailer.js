import nodemailer from 'nodemailer';
import transporterConfig from './transporterConfig.js';

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
      if(error) {
        reject(error)
        return
      }
      resolve(info)
    });
  })
}

export default sendMail;
