'use strict';

const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const car = sequelize.define('car',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      
    },
    carname:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'carname'
    },
    dimention:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'dimention'
    },
  
}
, {}
);
(async () => {
    await car.sync({force: false}); 
}
)();
module.exports = car;
