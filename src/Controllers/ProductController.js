const {product} = require('../models');

exports.create = async (req,res) => {
    prod = await product.create(req.body);

    res.send(prod);
} 

exports.index = async (req,res) => {

    const {id} = req.params;

    prod = await product.findOne({
        where:{
            id
        }
    });

    res.send(prod);
}

exports.show = async ( req, res) => {

}