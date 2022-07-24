const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const oil = sequelize.define('oil',
{
    id:{
        type: Sequlize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      
    },
    oil_name:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'oil_name'
    },
    category:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'category'
    },
    qty:{
        type: Sequlize.STRING,
        allowNull: false,
     
          field: 'qty'
    },
    price:{
        type: Sequlize.STRING,
        allowNull: false,
     
          field: 'price'
    },
   
  
   
}
, {}
);
(async () => {
    await oil.sync({force: false}); 
}
)();
module.exports = oil;
