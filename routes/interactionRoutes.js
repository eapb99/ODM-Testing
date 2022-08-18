var express = require('express');
var router = express.Router();
var interactionController = require('../controllers/interactionController.js');

/*
 * GET
 */
router.get('/', interactionController.list);

/*
 * GET
 */
router.get('/:id', interactionController.show);


/*
 * GET by robot id
 */
router.get('/robot/:robotid', interactionController.showbyrobotid);

/*
 * GET by type of message
 */
router.get('/message/:message', interactionController.listmessage);

/*
 * POST
 */
router.post('/', interactionController.create);

/*
 * PUT
 */
router.put('/:id', interactionController.update);

/*
 * DELETE
 */
router.delete('/:id', interactionController.remove);



module.exports = router;
