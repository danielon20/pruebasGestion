var express = require('express');
var router = express.Router();
var reporteventasController = require('../controllers/reporteventasController.js');

/*
 * GET
 */
router.get('/', reporteventasController.list);

/*
 * GET
 */
router.get('/:id', reporteventasController.show);

/*
 * GET
 */
router.get('/user/:id', reporteventasController.show_per_user);

/*
 * POST
 */
router.post('/', reporteventasController.create);

/*
 * PUT
 */
router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
router.delete('/:id', reporteventasController.remove);

module.exports = router;
