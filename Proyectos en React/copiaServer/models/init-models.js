var DataTypes = require("sequelize").DataTypes;
var _curso = require("./curso");
var _contactos = require("./contactos");
//var _detalle_servicio = require("./detalle_servicio");
//var _foto = require("./foto");
//var _noticia = require("./noticia");
var _registro_curso = require("./registro_curso");
//var _seccion = require("./seccion");
//var _servicio = require("./servicio");
//var _servicio_contratado = require("./servicio_contratado");
var _tarea = require("./tarea");
//var _tipo_servicio = require("./tipo_servicio");
var _usuarios = require("./usuarios");
//var _video = require("./video");
var _verificacion = require("./verificacion")

function initModels(sequelize) {
  var curso = _curso(sequelize, DataTypes);//2
  //var detalle_servicio = _detalle_servicio(sequelize, DataTypes);
  //var foto = _foto(sequelize, DataTypes);
  //var noticia = _noticia(sequelize, DataTypes);
  var registro_curso = _registro_curso(sequelize, DataTypes);//3
  //var seccion = _seccion(sequelize, DataTypes);
  //var servicio = _servicio(sequelize, DataTypes);
  //var servicio_contratado = _servicio_contratado(sequelize, DataTypes);
  var tarea = _tarea(sequelize, DataTypes);//4
  //var tipo_servicio = _tipo_servicio(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);//5
  //var video = _video(sequelize, DataTypes);
  var contactos=_contactos(sequelize, DataTypes);//1

  var verificacion = _verificacion(sequelize, DataTypes);

  curso.belongsToMany(usuarios, { as: 'id_usuario_usuarios', through: registro_curso, foreignKey: "id_curso", otherKey: "id_usuario" });
  //servicio.belongsToMany(usuarios, { as: 'id_usuario_usuarios_servicio_contratados', through: servicio_contratado, foreignKey: "id_servicio", otherKey: "id_usuario" });
  usuarios.belongsToMany(curso, { as: 'id_curso_cursos', through: registro_curso, foreignKey: "id_usuario", otherKey: "id_curso" });
  //usuarios.belongsToMany(servicio, { as: 'id_servicio_servicios', through: servicio_contratado, foreignKey: "id_usuario", otherKey: "id_servicio" });
  registro_curso.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(registro_curso, { as: "registro_cursos", foreignKey: "id_curso"});
  tarea.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(tarea, { as: "tareas", foreignKey: "id_curso"});
  //noticia.belongsTo(foto, { as: "id_foto_foto", foreignKey: "id_foto"});
  //foto.hasMany(noticia, { as: "noticia", foreignKey: "id_foto"});
  //foto.belongsTo(seccion, { as: "id_seccion_seccion", foreignKey: "id_seccion"});
  //seccion.hasMany(foto, { as: "fotos", foreignKey: "id_seccion"});
  //noticia.belongsTo(seccion, { as: "id_seccion_seccion", foreignKey: "id_seccion"});
  //seccion.hasMany(noticia, { as: "noticia", foreignKey: "id_seccion"});
  //servicio.belongsTo(seccion, { as: "id_seccion_seccion", foreignKey: "id_seccion"});
  //seccion.hasMany(servicio, { as: "servicios", foreignKey: "id_seccion"});
  //video.belongsTo(seccion, { as: "id_seccion_seccion", foreignKey: "id_seccion"});
  //seccion.hasMany(video, { as: "videos", foreignKey: "id_seccion"});
  //detalle_servicio.belongsTo(servicio, { as: "id_servicio_servicio", foreignKey: "id_servicio"});
  //servicio.hasMany(detalle_servicio, { as: "detalle_servicios", foreignKey: "id_servicio"});
  //servicio_contratado.belongsTo(servicio, { as: "id_servicio_servicio", foreignKey: "id_servicio"});
  //servicio.hasMany(servicio_contratado, { as: "servicio_contratados", foreignKey: "id_servicio"});
  //servicio.belongsTo(tipo_servicio, { as: "id_tipo_tipo_servicio", foreignKey: "id_tipo"});
  //tipo_servicio.hasMany(servicio, { as: "servicios", foreignKey: "id_tipo"});
  registro_curso.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(registro_curso, { as: "registro_cursos", foreignKey: "id_usuario"});
  //servicio_contratado.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  //usuarios.hasMany(servicio_contratado, { as: "servicio_contratados", foreignKey: "id_usuario"});

  return {
    verificacion,
    curso,
    //detalle_servicio,
    //foto,
    //noticia,
    registro_curso,
    //seccion,
    //servicio,
    //servicio_contratado,
    tarea,
    //tipo_servicio,
    usuarios,
    //video,
    contactos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
