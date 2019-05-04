const {Orders} = require('../models');

exports.create = async (req,res) => {
    order = await Orders.create(req.body);

    console.log(order);

    res.send(order);
}

exports.show = async (req,res) => {

    const {id} = req.params;

    order = await Orders.findOne({
        where:{
            id
        },
    });

    res.send(order);
}