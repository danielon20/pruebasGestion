const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
//var jwt = require('jwt-simple');
//var usuariosApi = models.usuarios

/**
 * facturasantiguasController.js
 *
 * @description :: Server-side logic for managing facturasantiguass.
 */
module.exports = {

    /**
     * usuariosController.list()
     */
    list: function (req, res) {
        models.usuarios.findAll({ 
            attributes: { exclude: ["updatedAt"] }
          })
          .then(usuarios => {
             res.send(usuarios)
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },
    /**
     * usuariosController.getUser()
     */

     getUser: function (req, res) {
        var id1 = req.params.user;

        models.usuarios.findOne({ 
            where: {
              usuario: id1
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuario => {
            if (!usuario) {
                //No es necesario el return alado del res. ...//
                res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            else{
                res.send(usuario)
            }
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },


    /**
     * usuariosController.show()
     */
    show: function (req, res) {
        var id1 = req.params.id;

        models.usuarios.findOne({ 
            where: {
              id: id1
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuario => {
            if (!usuario) {
                //No es necesario el return alado del res. ...//
                res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            else{
                res.send(usuario)
            }
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },

    show_only_users: function (req, res) {
        models.usuarios.findAll({ 
            where: {
              tipo: 'Usuario'
            },
            attributes: { exclude: ["updatedAt"] }   
          })
          .then(usuarios_rol_user => {
            res.send(usuarios_rol_user)
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting usuarios.',
            error: err
          }))
    },

    /**
     * usuariosController.create()
     */
     create: function (req, res) {
        let email = req.body.correo;
        let name = req.body.name;
        let apellido = req.body.apellido;
        let username = req.body.usuario;
        let password = req.body.contrasena;
        console.log(name)
        models.usuarios.create({
            nombres: name, apellidos :apellido, correo: email, usuario:username, contra: password, tipo:'Usuario'
        })  
        //res.json({message : 'Orden guardada'})
        .then(()=>{
            res.json({message : 'Cliente guardado con exito!'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error when create user.',
                error: err
            })
        })
    },

    changePassword: function (req, res) {
        let password = req.body.contrasena;
        var id1 = req.params.id;
        models.usuarios.update({ contra: password }, {
            where: {
              id: id1
            }
          })  
        .then(()=>{
            res.json({message : 'Contrasena cambiada con exito!'});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error when update password.',
                error: err
            })
        })
    }


};
