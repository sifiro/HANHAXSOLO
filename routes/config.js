
var express = require('express');
var router = express.Router();
var path = require("path");

/**
 *  Configs
 */
router.get('/config', require('./backend/config.js').GetterConfiguration);

router.post('/config', require('./backend/config.js').SetterConfiguration);

router.get('/table', require('./backend/config.js').GetterTable);

router.post('/table', require('./backend/config.js').SetterTable);

module.exports = router;