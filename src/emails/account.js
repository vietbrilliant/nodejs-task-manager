const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Welcome to Task Manager App',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  };

  sgMail.send(msg);
};

const sendCancellationEmail = (email, name) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Sorry to see you go!',
    text: `Good bye, ${name}. I hope to see you back some time soon.`,
  };

  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
