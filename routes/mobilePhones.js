var express = require('express');
const mobilePhone_controlers= require('../controllers/mobilePhone');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET Mobile Phones */
router.get('/', mobilePhone_controlers.mobilePhone_view_all_Page );
/* GET detail costume page */
router.get('/detail', mobilePhone_controlers.mobilePhone_view_one_Page);
/* GET create costume page */

router.get('/create', secured, mobilePhone_controlers.mobilePhone_create_Page);
/* GET create update page */
router.get('/update', secured,mobilePhone_controlers.mobilephone_update_Page);
/* GET create delete page */
router.get('/delete',secured, mobilePhone_controlers.mobilePhone_delete_Page);


module.exports = router;
