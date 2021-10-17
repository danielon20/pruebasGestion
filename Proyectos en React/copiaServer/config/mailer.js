const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'drvz2258920@gmail.com',
            pass: 'evnphwhiwemqymct'
    }
});

mailTransporter.verify().then( () => {
    console.log('Listo para enviar emails')
})
