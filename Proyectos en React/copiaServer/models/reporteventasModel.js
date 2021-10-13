var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reporteventasSchema = new Schema({
	'idFactura' : String,
	'idCliente' : String,
	'fechaFactura' : String,
	'idServicio' : String,
	'precio' : String
});

module.exports = mongoose.model('reporteventas', reporteventasSchema);
								 
