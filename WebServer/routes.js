const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/test', controller.test);
//router.get('/', controller.index);
//router.get('/data', controller.get_data);
router.post('/data', controller.add_entry);

module.exports = router;