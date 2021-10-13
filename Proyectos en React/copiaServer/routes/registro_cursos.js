var express = require('express');
var router = express.Router();
var registroCursosController = require('../controllers/registroCursosController.js');

/*
 * GET
 */
router.get('/', registroCursosController.list);

/*
 * GET
 */

router.get('/:id', registroCursosController.getUser);

/*
 * GET
 */

router.get('/cursos/:idCurso', registroCursosController.getUsersCurso);

/*
 * GET
 */
//router.get('/user/:id', reporteventasController.show_per_user);

/*
 * POST
 */
router.post('/', registroCursosController.create);

/*
 * PUT
 */
router.put('/user/:userId/course/:courseId', registroCursosController.actualizarNota);

/*
 * DELETE
 */
router.delete('/user/:userId/course/:courseId', registroCursosController.borrar);

module.exports = router;
