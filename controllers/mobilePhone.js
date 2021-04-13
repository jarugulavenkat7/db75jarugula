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
exports.mobilePhone_detail = async function (req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await MobilePhone.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

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
exports.mobilePhone_delete = async function (req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await MobilePhone.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};
// Handle MobilePhone update form on PUT.
exports.mobilePhone_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await MobilePhone.findById( req.params.id)
        // Do updates of properties
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.model) toUpdate.model = req.body.model;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.color) toUpdate.color = req.body.color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

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

    // Handle a show one view with id specified by query
exports.mobilePhone_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await MobilePhone.findById( req.query.id)
        res.render('mobilePhoneDetail', 
{ title: 'Mobile Phone Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mobilePhone_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('mobilePhoneCreate', { title: 'Mobile Phone Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.mobilephone_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await MobilePhone.findById(req.query.id)
        res.render('mobilePhoneUpdate', { title: 'Mobile Phone Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.mobilePhone_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await MobilePhone.findById(req.query.id)
        res.render('mobilePhoneDelete', { title: 'Mobile Phone Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
