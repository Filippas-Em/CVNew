const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');   

const app = express();
const port = 3000;
app.use(cors());

const upload = multer();
app.use(upload.none());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', 
        pass: '' 
    },
    tls: {
        rejectUnauthorized: false 
    }

});

app.post('/send', (req, res) => {
    const { name, email, formMessage } = req.body;

    
    const mailOptions = {
        from: '', 
        to: '', 
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${formMessage}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error); 
            res.status(500).send('Error sending email'); 
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    });
});

    
    
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });