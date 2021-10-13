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
        models.tarea.findAll({ 
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

     getTarea: function (req, res) {
        var id1 = req.params.id;

        models.tarea.findOne({ 
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

    getTareasByCourse: function (req, res) {
      var id1 = req.params.idCurso;

      models.tarea.findAll({ 
          where: {
            id_curso: id1
          },
          attributes: { exclude: ["updatedAt"] }   
        })
        .then(tareas => {
          if (!tareas) {
              res.status(404).json({
                  message: 'Tareas por curso no encontradas'
              });
          }
          else{
              res.send(tareas)
          }
        })
        .catch(err => res.status(500).json({
          message: 'Error when getting tareas.',
          error: err
        }))
  },



    /**
     * 
     */
     crear: function (req, res) {
        let ttle = req.body.titulo;
        let sub = req.body.subt;
        let desc = req.body.descripcion;
        let lf=req.body.linkf;
        let lv=req.body.linkv;
        models.curso.findAll({ 
            attributes: { exclude: ["updatedAt"] }
        })
        .then(cursos => {
            var mayor=0;
            var cur="";
            cursos.forEach(c => {
                if(c.id>mayor) {
                    mayor=c.id;
                    cur=c;
                }
            });
            var idCur= cur.id;
            console.log(idCur);
            models.tarea.create({
                id_curso: idCur, titulo:ttle, subtitulo:sub, descripcion:desc, linkForms:lf, linkVideo:lv
            })  
            .then(()=>{          
                res.send("tarea guardada")
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: 'Error when create curso.',
                    error: err            
                })          
            })
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: 'Error when al obtener los cursos.',
            error: err            
          })          
        })
    },



    
};
