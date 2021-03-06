const express = require('express');
const router = express.Router();

//Rota inicial da api
router.get('/', (req,res) =>{
    res.status(200).send({
        title: 'Clone Food API',
        version: '0.0.1'
    });
});


//all these routes are use for client app
//Category
const CategoryController = require('./src/Controllers/CategoryController');
const RestaurantController = require('./src/Controllers/RestaurantController');
const OrderController = require('./src/Controllers/OrderController');
const ProductCategoryController  = require('./src/Controllers/ProductCategoryController');

//Categorias
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.post('/categories', CategoryController.create);

//Restaurantes
router.get('/restaurants', RestaurantController.index);
router.post('/restaurants', RestaurantController.create);
router.get('/restaurants/:id', RestaurantController.show);
router.get('/restaurants/search/:name', RestaurantController.search);
router.patch('/restaurants/:id', RestaurantController.openClose);

//Orders
router.post('/order', OrderController.create);
router.get('/order/:id', OrderController.show);

//Product category
router.post('/product_category', ProductCategoryController.create);



//Products

//TODO delete all these routes, just for test. these routes are use for restaurants app


module.exports = router;
