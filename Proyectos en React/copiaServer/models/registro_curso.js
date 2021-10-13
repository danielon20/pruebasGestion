const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registro_curso', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'id'
      }
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    calificacion: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'registro_curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_curso" },
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
