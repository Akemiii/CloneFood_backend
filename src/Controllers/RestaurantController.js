const {restaurant} = require('../models');


//Index mostra todos os restaurantes
exports.index = async (req,res) =>{
    rest = await restaurant.findAll({

    });

    res.send(rest);
}

//Search pesquisa restaurantes por palavra chave
exports.search = async (req,res) =>{

   const { name } = req.body;

    rest = await restaurant.findOne({
        where:{
            name:{
                $like: '%' + name + '%'
            }
        }
    });

    console.log(rest);

    res.send(rest);
}

//Show pesquisa um restaurante especifico por um id
exports.show = async (req,res) =>{
    
}