var express = require('express');
var router = express.Router();
var verificacionController = require('../controllers/verificacionController.js');


function getLocalStorage(key) {
    //var exp = 60 * 60 * 24; // segundos en un día
    var exp = 60 * 5; //5 minutos
        if(localStorage.getItem(key)) {
     var vals = localStorage.getItem (key); // Obtener el valor del almacenamiento local 
     var dataObj = JSON.parse (vals); // Convertir cadena en objeto JSON
     // If (hora actual: la hora en que se configuró el elemento almacenado cuando se creó)> hora de vencimiento 
            var isTimed = (new Date().getTime() - dataObj.timer) > exp;
            if(isTimed) {
     console.log ("El almacenamiento ha expirado");
                localStorage.removeItem(key);
                return null;
            } else {
                var newValue = dataObj.val;
            }
            return newValue;
        } else {
            return null;
        }
    }

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
    var vals = localStorage.getItem ('MyFirstKey'); // Obtener el valor del almacenamiento local 
    var dataObj = JSON.parse (vals);
    if (codigoV==dataObj.val){
        var exp = 60000 * 5; //5 minutos
        var vals = localStorage.getItem ('MyFirstKey'); // Obtener el valor del almacenamiento local 
        var dataObj = JSON.parse (vals);
        console.log(new Date().getTime() - dataObj.timer);
        var isTimed = (new Date().getTime() - dataObj.timer) > exp;
        if(isTimed) {
            res.json({verification: 0,message : 'Clave Expirada Genere otra!'});
        }
        else{
            res.json({verification: 1,message : 'Se ha verificado que es usted!', message2 : 'Su contraseña es: xxxxxxxxxxxxxx'});
        }
        
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
