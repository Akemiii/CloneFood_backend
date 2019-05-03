const express = require('express');
const router = express.Router();

//Category
const CategoryController = require('./src/Controllers/CategoryController');
const RestaurantController = require('./src/Controllers/RestaurantController');

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);


module.exports = router;