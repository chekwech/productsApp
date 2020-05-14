const express = require('express');
const router = express.Router();

//Require controllers
const product_controller = 
require('../controllers/product.controller');

//test to check files communication
router.get('/test', product_controller.test);
//router.post('/create', function(req, res){
    //product_controller.product_create
//});
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete',
product_controller.product_delete);

module.exports = router;