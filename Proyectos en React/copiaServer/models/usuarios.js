const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    contra: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
