var BotsModel = require('../models/botsModel.js');

/**
 * botsController.js
 *
 * @description :: Server-side logic for managing botss.
 */
module.exports = {

    /**
     * botsController.list()
     */
    list: function (req, res) {
        BotsModel.find(function (err, botss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bots.',
                    error: err
                });
            }

            return res.json(botss);
        });
    },

    /**
     * botsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        BotsModel.findOne({_id: id}, function (err, bots) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bots.',
                    error: err
                });
            }

            if (!bots) {
                return res.status(404).json({
                    message: 'No such bots'
                });
            }

            return res.json(bots);
        });
    },

    /**
     * botsController.create()
     */
    create: function (req, res) {
        var bots = new BotsModel({
			robotid : req.body.robotid,
			name : req.body.name
        });

        bots.save(function (err, bots) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bots',
                    error: err
                });
            }

            return res.status(201).json(bots);
        });
    },

    /**
     * botsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        BotsModel.findOne({_id: id}, function (err, bots) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bots',
                    error: err
                });
            }

            if (!bots) {
                return res.status(404).json({
                    message: 'No such bots'
                });
            }

            bots.robotid = req.body.robotid ? req.body.robotid : bots.robotid;
			bots.name = req.body.name ? req.body.name : bots.name;
			
            bots.save(function (err, bots) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bots.',
                        error: err
                    });
                }

                return res.json(bots);
            });
        });
    },

    /**
     * botsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        BotsModel.findByIdAndRemove(id, function (err, bots) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bots.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    },


    bots: function(req,res){
        BotsModel.find({},function(err,logbots){
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            if (!logbots) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }
            return res.json(logbots);
        })
    },
};
