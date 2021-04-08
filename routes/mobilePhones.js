var express = require('express');
const mobilePhone_controlers= require('../controllers/mobilePhone');
var router = express.Router();

/* GET Mobile Phones */
router.get('/', mobilePhone_controlers.mobilePhone_view_all_Page );
module.exports = router;
