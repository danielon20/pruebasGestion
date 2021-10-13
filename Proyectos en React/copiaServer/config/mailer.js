const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'team.webgit@gmail.com',
        pass: 'mbblggifsakpgvwj'
    }
});

mailTransporter.verify().then( () => {
    console.log('Listo para enviar emails')
})
