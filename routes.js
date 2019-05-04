const express = require('express');
const router = express.Router();

//Category
const CategoryController = require('./src/Controllers/CategoryController');
const RestaurantController = require('./src/Controllers/RestaurantController');

//Categorias
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);

//Restaurantes
router.get('/restaurants', RestaurantController.index);
router.get('/restaurants/:id', RestaurantController.show);
router.get('/restaurants/search/:name', RestaurantController.search);



module.exports = router;