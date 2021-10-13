const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarea', {
    id_tarea: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curso',
        key: 'id'
      }
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    subtitulo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    linkForms: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    linkVideo: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tarea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tarea" },
        ]
      },
      {
        name: "id_curso",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
    ]
  });
};
