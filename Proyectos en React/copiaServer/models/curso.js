const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null
    },
    linkImagen: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null
    }

  }, {
    sequelize,
    tableName: 'curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
