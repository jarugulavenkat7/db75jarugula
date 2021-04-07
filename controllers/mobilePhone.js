var MobilePhone = require('../models/mobilePhone');
// List of all MobilePhone
exports.mobilePhone_list = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone list');
};
// for a specific MobilePhone.
exports.mobilePhone_detail = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone detail: ' + req.params.id);
};
// Handle MobilePhone create on POST.
exports.mobilePhone_create_post = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone create POST');
};
// Handle MobilePhone delete form on DELETE.
exports.mobilePhone_delete = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone delete DELETE ' + req.params.id);
};
// Handle MobilePhone update form on PUT.
exports.mobilePhone_update_put = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone update PUT' + req.params.id);
};