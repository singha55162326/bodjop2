const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const sale = sequelize.define('sale',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      
    },
    oil_id:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'oil_id',
    },
    qty:{
        type: Sequlize.FLOAT,
        allowNull: false,
        
          field: 'qty'
    },
    price:{
        type: Sequlize.FLOAT,
        allowNull: false,
     
          field: 'price'
    },
    total:{
        type: Sequlize.FLOAT,
        allowNull: false,
       
          field: 'total'
    },
 
   
}
, {}
);
(async () => {
    await sale.sync({force: false}); 
}
)();
module.exports = sale;
