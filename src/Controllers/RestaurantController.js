const {restaurant} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Index mostra todos os restaurantes
exports.index = async (req,res) =>{
    rest = await restaurant.findAll({

    });

    res.send(rest);
}

//Search pesquisa restaurantes por palavra chave
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

//Show pesquisa um restaurante especifico por um id
exports.show = async (req,res) =>{
    const {id} = req.params;

    rest = await restaurant.findOne({
        where:{
            id
        }
    });
    
    res.send(rest);
}