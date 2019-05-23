const {Categories} = require('../models');

exports.create = async (req, res)=>{
    cat = await Categories.create(req.body);

    res.send(cat);
}

exports.index = async (req,res) => {
    cats = await Categories.findAll({
        attributes:['title']
    });

    res.send(cats);
}

exports.update = async (req,res) =>{

}

exports.delete = async (req,res)=>{

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