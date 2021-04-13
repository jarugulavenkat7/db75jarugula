var express = require('express');
const mobilePhone_controlers= require('../controllers/mobilePhone');
var router = express.Router();

/* GET Mobile Phones */
router.get('/', mobilePhone_controlers.mobilePhone_view_all_Page );
/* GET detail costume page */
router.get('/detail', mobilePhone_controlers.mobilePhone_view_one_Page);
/* GET create costume page */
router.get('/create', mobilePhone_controlers.mobilePhone_create_Page);
/* GET create update page */
router.get('/update', mobilePhone_controlers.mobilephone_update_Page);


module.exports = router;
