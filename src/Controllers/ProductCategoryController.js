const {product_categories} = require('../models');

exports.create = async (req,res) => {
    pc = await product_categories.create(req.body);

    res.send(pc);
}