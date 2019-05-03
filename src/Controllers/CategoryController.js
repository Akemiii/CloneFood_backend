const {Categories} = require('../models');

exports.index = async (req,res) => {
    cats = await Categories.findAll({
        attributes:['title']
    });

    res.send(cats);
}

exports.show = async (req,res) => {
    cat = await Categories.findOne({
        where:{
            id:req.params.id
        },
        attributes:['title']
    });

    res.send(cat);
}