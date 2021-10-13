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
router.post('/', verificacionController.crear);

/*
 * PUT
 */
//router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
//router.delete('/:id', reporteventasController.remove);

module.exports = router;
