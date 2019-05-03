const {Categories, restaurant} = require('../../models');
 
restaurant.findOne({
    where: {
        id:1
    },
    include: 'category'
}).then( (rest) => {
    console.log(rest.get());
})
