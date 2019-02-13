const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.index);
router.get('/data', controller.get_data);
router.post('/data', controller.add_entry);
router.get('/data/:name', controller.get_entry);
router.put('/data/:name', controller.update_entry);
router.delete('/data/:name', controller.delete_entry);

module.exports = router;