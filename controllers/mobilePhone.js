var MobilePhone = require('../models/mobilePhone');
// List of all MobilePhone
exports.mobilePhone_list = async function (req, res) {
    try{
        theMobilePhones = await MobilePhone.find();
        res.send(theMobilePhones);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
};
// for a specific MobilePhone.
exports.mobilePhone_detail = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone detail: ' + req.params.id);
};
// Handle MobilePhone create on POST.
exports.mobilePhone_create_post = async function (req, res) {
    console.log(req.body)
    let document = new MobilePhone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}

    
    document.brand = req.body.brand;
    document.model= req.body.model;
    document.cost= req.body.cost;
    document.color= req.body.color;

    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
};
// Handle MobilePhone delete form on DELETE.
exports.mobilePhone_delete = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone delete DELETE ' + req.params.id);
};
// Handle MobilePhone update form on PUT.
exports.mobilePhone_update_put = function (req, res) {
res.send('NOT IMPLEMENTED: MobilePhone update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.mobilePhone_view_all_Page = async function(req, res) {
    try{
    themobilephones = await MobilePhone.find();
    res.render('mobilePhones', { title: 'Mobile Phones Search Results', results: themobilephones });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };