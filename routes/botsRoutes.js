var express = require('express');
var router = express.Router();
var botsController = require('../controllers/botsController.js');

/*
 * GET
 */
router.get('/', botsController.list);

/*
 * GET
 */
router.get('/:id', botsController.show);

/*
 * POST
 */
router.post('/', botsController.create);

/*
 * PUT
 */
router.put('/:id', botsController.update);

/*
 * DELETE
 */
router.delete('/:id', botsController.remove);


router.get('bots',botsController.bots);

module.exports = router;
