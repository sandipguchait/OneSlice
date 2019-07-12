const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');


const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

const APP_NAME = 'OneSlice';

mailTransport.use("compile", htmlToText());

function sendOrderEmail(order){
  const OrderList = order.order[0].Item;

  const mailOptions ={ 
    from: `${APP_NAME} <noreply@sliceline.com>`,
    to: order.email,
    subject: `Your Order from ${APP_NAME}`,
    html:`
      <table style="width:500px; margin:auto">
        <tr>
          <th>${order.displayName}</th>
          <th>Here is the confirmation of your order</th>
        </tr>
          <tr>
            <td>
            ${OrderList.quantity}
            </td>
            <td>
              ${OrderList.name}
            </td>
            <td>
              ${OrderList.price}
            </td>
          </tr>
      </table>
    `
  };
  mailTransport.sendMail(mailOptions);
}

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
});