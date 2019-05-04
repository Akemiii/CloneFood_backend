const {Categories} = require('../models');

exports.index = async (req,res) => {
    cats = await Categories.findAll({
        attributes:['title']
    });

    res.send(cats);
}

exports.show = async (req,res) => {

    const {id} = req.params;

    cat = await Categories.findOne({
        where:{
            id
        },
        attributes:['title']
    });

    res.send(cat);
}