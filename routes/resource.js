var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mobilePhone_controller = require('../controllers/mobilePhone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a mobilPhone.
router.post('/mobilePhone', mobilePhone_controller.mobilePhone_create_post);
// DELETE request to delete mobilPhone.
router.delete('/mobilePhone/:id', mobilePhone_controller.mobilePhone_delete);
// PUT request to update mobilPhone.
router.put('/mobilePhone/:id', mobilePhone_controller.mobilePhone_update_put);
// GET request for one mobilPhone.
router.get('/mobilePhone/:id', mobilePhone_controller.mobilePhone_detail);
// GET request for list of all mobilPhone items.
router.get('/mobilePhone', mobilePhone_controller.mobilePhone_list);
module.exports = router;