'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config_bd = require(__dirname + '/../config/config.json')[env];
const db = {};

const nodbConfig = require("../config/nodb.config.js");
const mongoose = require('mongoose');
const db_path= nodbConfig.dialect + '+srv://' + nodbConfig.USER + ':' + nodbConfig.PASSWORD + nodbConfig.HOST +'/' + nodbConfig.noDB + '?retryWrites=true&w=majority';
//const db_path = 'mongodb+srv://danielon2000:1234@cluster0.4amyl.mongodb.net/webgit_nosql?retryWrites=true&w=majority';
//const db_path = nodbConfig.dialect + '://' + nodbConfig.HOST + '/' + nodbConfig.noDB;
const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    poolSize: 4
}


mongoose.connect(db_path, config)
  .then(() => console.log('DB connnection successful!'))
  .catch(err => {
    console.error.bind(console, 'MongoDB connection error:')
  });


let sequelize;
if (config_bd.use_env_variable) {
  sequelize = new Sequelize(process.env[config_bd.use_env_variable], config_bd);
} else {
  sequelize = new Sequelize(config_bd.database, config_bd.username, config_bd.password, config_bd);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
