const express = require('express');
const router = express.Router();

//Rota inicial da api
router.get('/', (req,res) =>{
    res.status(200).send({
        title: 'Clone Food API',
        version: '0.0.1'
    });
});

//Category
const CategoryController = require('./src/Controllers/CategoryController');
const RestaurantController = require('./src/Controllers/RestaurantController');
const OrderController = require('./src/Controllers/OrderController');

//Categorias
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);

//Restaurantes
router.get('/restaurants', RestaurantController.index);
router.get('/restaurants/:id', RestaurantController.show);
router.get('/restaurants/search/:name', RestaurantController.search);

//Orders

router.get('/order/:id', OrderController.show);

module.exports = router;
