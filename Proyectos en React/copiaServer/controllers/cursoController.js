const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


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
        models.curso.findAll({ 
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

     getCurso: function (req, res) {
        var id1 = req.params.id;
        models.curso.findOne({ 
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
     * 
     */
     crear: function (req, res) {
        let name = req.body.nombre;
        let des = req.body.descripcion;
        let pre = req.body.precio;
        let ima = req.body.imagen;
        
        models.curso.create({
            nombre: name, precio :pre, descripcion:des,linkImagen:ima
        })  
        .then(()=>{          
          res.send("curso guardado")
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: 'Error when create curso.',
            error: err            
          })          
        })
    },



    
};
