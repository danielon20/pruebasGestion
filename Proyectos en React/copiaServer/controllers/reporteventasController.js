var ReporteventasModel = require('../models/reporteventasModel.js');

/**
 * reporteventasController.js
 *
 * @description :: Server-side logic for managing reporteventass.
 */
module.exports = {

    /**
     * reporteventasController.list()
     */
    list: function (req, res) {
        ReporteventasModel.find(function (err, reporteventass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporteventas.',
                    error: err
                });
            }
            //console.log(reporteventass);
            return res.json(reporteventass);
        });
    },

    /**
     * reporteventasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReporteventasModel.findOne({_id: id}, function (err, reporteventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporteventas.',
                    error: err
                });
            }

            if (!reporteventas) {
                return res.status(404).json({
                    message: 'No such reporteventas'
                });
            }

            return res.json(reporteventas);
        });
    },

    /**
     * reporteventasController.show_per_user()
     */
    show_per_user: function (req, res) {
        var id = req.params.id;

        ReporteventasModel.find({idCliente: id}, function (err, reporteventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            if (!reporteventas) {
                return res.status(404).json({
                    message: 'No such reporteventas'
                });
            }

            return res.json(reporteventas);
        });
    },


    /**
     * reporteventasController.create()
     */
    create: function (req, res) {
        var reporteventas = new ReporteventasModel({
			idFactura : req.body.idFactura,
			idCliente : req.body.idCliente,
			fechaFactura : req.body.fechaFactura,
			idServicio : req.body.idServicio,
			precio : req.body.precio
        });

        reporteventas.save(function (err, reporteventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reporteventas',
                    error: err
                });
            }

            return res.status(201).json(reporteventas);
        });
    },

    /**
     * reporteventasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReporteventasModel.findOne({_id: id}, function (err, reporteventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporteventas',
                    error: err
                });
            }

            if (!reporteventas) {
                return res.status(404).json({
                    message: 'No such reporteventas'
                });
            }

            reporteventas.idFactura = req.body.idFactura ? req.body.idFactura : reporteventas.idFactura;
			reporteventas.idCliente = req.body.idCliente ? req.body.idCliente : reporteventas.idCliente;
			reporteventas.fechaFactura = req.body.fechaFactura ? req.body.fechaFactura : reporteventas.fechaFactura;
			reporteventas.idServicio = req.body.idServicio ? req.body.idServicio : reporteventas.idServicio;
			reporteventas.precio = req.body.precio ? req.body.precio : reporteventas.precio;
			
            reporteventas.save(function (err, reporteventas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reporteventas.',
                        error: err
                    });
                }

                return res.json(reporteventas);
            });
        });
    },

    /**
     * reporteventasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReporteventasModel.findByIdAndRemove(id, function (err, reporteventas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reporteventas.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
