const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const customer1 = sequelize.define('customer1',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      
    },
    companyname:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'companyname'
    },
    address:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'address'
    },
    contact:{
        type: Sequlize.STRING,
        allowNull: false,
     
          field: 'contact'
    },
    supplier:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'supplier'
    },
    phone:{
        type: Sequlize.STRING,
        allowNull: false,
       
          field: 'phone'
    },
   
}
, {}
);
const supplier = sequelize.define('supplier', 
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
        
    },
    suppliername:{
        type: Sequlize.STRING,
        allowNull: false,
        field: 'suppliername',
    },
    
   
    
}
, {}
);
customer1.belongsTo(supplier,{
    as:'suppliers',
    foreignKey: 'supplier',
    sourceKey: 'suppliername',
});
(async () => {
    await customer1.sync({force: false}); 
}
)();
module.exports = customer1;
