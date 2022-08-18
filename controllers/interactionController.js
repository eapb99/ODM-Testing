var InteractionModel = require('../models/interactionModel.js');

/**
 * interactionController.js
 *
 * @description :: Server-side logic for managing interactions.
 */
module.exports = {

    /**
     * interactionController.list()
     */
    list: function (req, res) {
        InteractionModel.find(function (err, interactions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting interaction.',
                    error: err
                });
            }

            return res.json(interactions);
        });
    },

    /**
     * interactionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        InteractionModel.findOne({_id: id}, function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting interaction.',
                    error: err
                });
            }

            if (!interaction) {
                return res.status(404).json({
                    message: 'No such interaction'
                });
            }

            return res.json(interaction);
        });
    },


    showbyrobotid: function (req, res) {
        var id = req.params.robotid;

        InteractionModel.find({robotid: id}, function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting interaction.',
                    error: err
                });
            }

            if (!interaction) {
                return res.status(404).json({
                    message: 'No such interaction with robot id'
                });
            }

            return res.json(interaction);
        });
    },

     /**
     * Filter by type of message
     */

    listmessage: function (req, res) {
        var id = req.params.message;

        InteractionModel.find({message: id}, function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting interaction.',
                    error: err
                });
            }

            if (!interaction) {
                return res.status(404).json({
                    message: 'No such interaction with this type of message'
                });
            }

            return res.json(interaction);
        });
    },
    /**
     * interactionController.create()
     */
    create: function (req, res) {
        var interaction = new InteractionModel({
			robotid : req.body.robotid,
			message : req.body.message,
			hour : req.body.hour
        });

        interaction.save(function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating interaction',
                    error: err
                });
            }

            return res.status(201).json(interaction);
        });
    },

    /**
     * interactionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        InteractionModel.findOne({_id: id}, function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting interaction',
                    error: err
                });
            }

            if (!interaction) {
                return res.status(404).json({
                    message: 'No such interaction'
                });
            }

            interaction.robotid = req.body.robotid ? req.body.robotid : interaction.robotid;
			interaction.message = req.body.message ? req.body.message : interaction.message;
			interaction.hour = req.body.hour ? req.body.hour : interaction.hour;
			
            interaction.save(function (err, interaction) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating interaction.',
                        error: err
                    });
                }

                return res.json(interaction);
            });
        });
    },

    /**
     * interactionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        InteractionModel.findByIdAndRemove(id, function (err, interaction) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the interaction.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    },

};
