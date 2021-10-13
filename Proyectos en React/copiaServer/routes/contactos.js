var express = require('express');
var router = express.Router();
var contactosController = require('../controllers/contactosController.js');

/*
 * GET
 */
router.get('/', contactosController.list);

/*
 * GET
 */


/*
 * POST
 */
router.post('/', contactosController.crear);

/*
 * PUT
 */
//router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
//router.delete('/:id', reporteventasController.remove);

module.exports = router;
