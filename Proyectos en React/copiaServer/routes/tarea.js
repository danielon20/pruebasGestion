var express = require('express');
var router = express.Router();
var tareaController = require('../controllers/tareaController.js');

/*
 * GET
 */
router.get('/', tareaController.list);

/*
 * GET
 */

router.get('/:id', tareaController.getTarea);

/*
 * GET
 */

router.get('/curso/:idCurso', tareaController.getTareasByCourse);


/*
 * POST
 */
router.post('/', tareaController.crear);

/*
 * PUT
 */
//router.put('/:id', reporteventasController.update);

/*
 * DELETE
 */
//router.delete('/:id', reporteventasController.remove);

module.exports = router;
