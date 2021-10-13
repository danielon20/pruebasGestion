var express = require('express');
var router = express.Router();
//const mailTransporter = require('../config/mailer');
var nodemailer = require('nodemailer');


router.post('/', function(req, res, next) {
    console.log("Llega al post de mail")
    //let mail_user = req.body.mail;
    let name_user = req.body.name;
    var n_aleatorio = Math.floor(Math.random() * (999999-100000)) + 100000;
var filename = "thecodes.json"
var dict = {"verficacionPIN" : n_aleatorio};
var dictstring = JSON.stringify(dict);
    var fs = require('fs');
     fs.writeFile(`./public/datos/${filename}`, dictstring, function(err, result) {
        if(err) console.log('error', err);
    });
   
    //et mensaje_user = req.body.messa;

    const mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'team.webgit@gmail.com',
            pass: 'mbblggifsakpgvwj'
        }
    });
    //tomdbelt@espol.edu.ec,darinka.townsend@hotmail.com,rjvillao@espol.edu.ec
    let mailDetails = {
        from: 'team.webgit@gmail.com',
        to: 'danielviscarraz@hotmail.com',
        subject: 'Nuevo Contacto Recibido',
        html: 
        `
        <div class="header" style="display:flex;align-items:center;justify-content:center;">
            <img src="cid:logo" alt="logo_pagina" style="display:inline;height:100px;width:auto;">
            <h1 style="display:inline;text-align:center;">Webgit</h1>
        </div>
        <div class="title">
            <h2>Nuevo Contacto Recibido</h2>
        </div>
        <div class="body-msg">
            <p>Estimado Administrador. Se ha receptado un nuevo mensaje del formulario Contactos.</p>
            <h3>Información del mensaje:</h3>
            <ul>
               
                <li>Nombre: ${name_user}</li>
                <li>Verificacion: ${n_aleatorio}</li>
            </ul>
            <h3 style="text-align:center;padding-bottom:2rem;"><a href="http://localhost:4200/">Haga clic aqui para ver el contacto</a></h3>
        </div>
        <div class="footer" style="background-color: #266268; padding:2rem;">
            <img src="cid:logoPagina" alt="logoPagina" style="padding-bottom:1rem;width:120px;height:auto;margin-left:auto;margin-right:auto;display:block;">
            <h3 style="color:white;text-align:center;">Team Webgit S.A.</h3>
            <h4 style="color:white;text-align:center;">Mensaje generado de forma automática. Favor no responder.</h4>
        </div>
        `,
        attachments: [
            {
            filename: 'aula_virtual.png',
            path: __dirname + '/../public/assets/images/aula_virtual.png',
            cid: 'logo' //same cid value as in the html img src
            },
            {
            filename: 'logoPagina.png',
            path: __dirname + '/../public/assets/images/logoPagina.png',
            cid: 'logoPagina' //same cid value as in the html img src
            }
        ]
    };
    
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent: ' + data.response);
        }
    });

});



module.exports = router;