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
        models.verificacion.findAll({ 
            attributes: { exclude: ["updatedAt"] }
          })
          .then(verificador => {
             res.send(verificador)
          })
          .catch(err => res.status(500).json({
            message: 'Error when getting verificador.',
            error: err
          }))
    },
    /**
     * contactosController.crear()
     */

     

    /**
     * 
     */
     crear: function (req, res) {
        let user = req.body.usuario;
        let code = req.body.codigo;
        models.verificacion.create({
            usuario: user, codigo :code
        })  
        .then(()=>{          
          res.json({message : 'Verification save!'});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: 'Error when create verification.',
            error: err            
          })          
        })
    },



    
};
