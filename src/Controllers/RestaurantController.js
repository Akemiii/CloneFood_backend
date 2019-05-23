const {restaurant} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.create = async (req,res)=>{
    rest = await restaurant.create(req.body);

    res.send(rest);
}

exports.index = async (req,res) =>{
    rest = await restaurant.findAll({

    });

    res.send(rest);
}

exports.search = async (req,res) =>{

   const { name } = req.params;

    rest = await restaurant.findOne({
        where:{
            name:{
                [Op.like]: '%' + name + '%'
            }
        }
    });

    res.send(rest);
}

exports.update = async(req,res)=>{

}

exports.openClose = async (req, res)=>{

    const {status} = req.body;
    const {id} = req.params;

    const rest = await restaurant.update({
        status
    },{
        where:{
            id
        }
    });

    res.send(rest);
}

exports.delete = async(req, res)=>{

}

exports.show = async (req,res) =>{
    const {id} = req.params;

    rest = await restaurant.findOne({
        where:{
            id
        }
    });
    
    res.send(rest);
}