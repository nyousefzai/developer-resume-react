const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
require('dotenv').config();

// middleware to use for all requests
router.use((req, res, next) => {
  next();
});

router.post('/navid', (req, res) => {
  try {
    const output = `
        
        <h3>Contact Details from Resume</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
        <li>Name: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'navidyou043@gmail.com',
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: `My Resume contact < ${process.env.USER}>`, // sender address
      to: process.env.TO, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', { msg: 'Email has been sent' });
    });
  } catch (e) {
    res.json({ message: 'somthing Went Worng plz try again' });
  } finally {
    res.json({
      message: `THANK YOU! ${
        req.body.name
      }  for reaching out I will get back to you As soon As I can feel free to call or text me @ 925-301-3713 `,
    });
  }
});
module.exports = router;
