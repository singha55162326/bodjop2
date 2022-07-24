const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const order = sequelize.define('order',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    service:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'service'
    },
    employeeid:{
        type: Sequlize.INTEGER,
        field:'employeeid'
    },
    category:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'category'
    },
    companyid:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'companyid'
    },
   
    date:{
        type: Sequlize.DATE,
        allowNull: false,
        field:'date'
    },
    companyname:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'companyname'
    },
    qty:{
        type: Sequlize.INTEGER,
        allowNull: false,
        field:'qty'
    }
}
, {}
);
const employee = sequelize.define('employee',
{
    id:{
        type: Sequlize.STRING,
     
        primaryKey: true,
        autoIncrement: true,
    },
    employeename:{
        type: Sequlize.STRING,
        allowNull: false,
    },
    address:{
        type: Sequlize.STRING,
        allowNull: false,
    },
    position:{
        type: Sequlize.STRING,
        allowNull: false,
    },
    phone:{
        type: Sequlize.STRING,
        allowNull: false,
    },
}
, {}
);

order.belongsTo(employee,{
    foreignKey: 'employeeid',
    sourceKey: 'id',
});
(async () => {
    await order.sync({force: false}); 
}
)();
module.exports = order;
