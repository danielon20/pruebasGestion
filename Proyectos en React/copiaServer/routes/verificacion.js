var express = require('express');
var router = express.Router();
var verificacionController = require('../controllers/verificacionController.js');

/*
 * GET
 */
router.get('/', verificacionController.list);

/*
 * GET
 */


/*
 * POST
 */
//router.post('/', verificacionController.crear);
router.post('/', function(req, res, next) {
    let codigoV = req.body.code;
    //console.log(codigoV);
    //console.log(localStorage.getItem('myFirstKey'));
    if (codigoV==localStorage.getItem('myFirstKey')){
        res.json({verification: 1,message : 'Se ha verificado que es usted!', message2 : 'Su contraseña es: xxxxxxxxxxxxxx'});
    }
    else{
        res.json({verification: 0,message : 'Clave de verificacion incorrecta!'});
    }        
});
    
/*
 * PUT
 */
//router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
//router.delete('/:id', reporteventasController.remove);

module.exports = router;
