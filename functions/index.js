const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS 
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('ready to send');
    }
});

app.post('/', bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name = req.body.firstName + " "  + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: 'DLT Website Contact Form Submission',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
            console.log(error);
        } else {
            res.json({ code: 200, status: 'Message Sent' });
        }
    });
});

exports.api = functions.https.onRequest(app);