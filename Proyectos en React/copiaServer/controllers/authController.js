const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/**
 * authController.js
 *
 * @description :: Server-side logic for managing facturasantiguass.
 */
module.exports = {

    /**
     * authController.login()
     */
     login: function (req, res) {
        let username = req.body.usuario;
        let password = req.body.contrasena;
        /*if (!(username && password)) {
          return res.status(400).json({ message: ' Username & Password are required!' });
        }*/
        models.usuarios.findOne({ 
          where: {
            usuario: username,
            contra : password
          }, 
        })
        .then(usuario1 => {
            if (!usuario1) {
                //No es necesario el return alado del res. ...//
                res.status(404).json({
                    message: 'Usuario o contrasena incorrecta'
                });
            }
            else{
                var jwt = require('jsonwebtoken');
                var config = require('../config/configword')
                const token = jwt.sign(
                    {user_id: usuario1.id, username, role: usuario1.tipo},
                    config.TOKEN_SECRET,
                    {
                      expiresIn: "2h",
                    }
                  );
                  //const token2 = jwt.verify(token, config.TOKEN_SECRET);
                  res.json({ message: 'OK', token, username: usuario1.usuario, role: usuario1.tipo, id: usuario1.id });
            }
        })
        .catch(err => res.status(500).json({
            message: 'Error when logging usuarios.',
            error: err
          }))

    }
};
