var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuariosController');

const auth = require("../middleware/auth");
const checkRole = require("../middleware/role")
/* GET home page. */
//Para realizar esta accion necesitas tener un token y que tu role sea uno de los que esta en la lista: ['Administrador','Usuario']
router.get('/', [auth,checkRole(['Administrador','Usuario'])],usuariosController.list);
/* GET by ID home page. */
//Para realizar esta accion solo necesitas tener un token
//router.get('/:id', auth ,usuariosController.show);
router.get('/:id', usuariosController.show);
//Para obtener usuarios solo con el rol 'Usuario'
router.get('/rol/user',usuariosController.show_only_users);
//Busqueda por usuario
router.get('/uname/:user',usuariosController.getUser);
/* POST */
router.post('/',  usuariosController.create);
/* PUT */
router.put('/:id',usuariosController.changePassword);

module.exports = router;
