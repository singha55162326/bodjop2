const Sequlize = require('sequelize');
const sequelize = require("../db_instance");

const employee = sequelize.define('employee',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
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
, { sequelize, modelName: 'employee' }
);
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
        type: Sequlize.STRING,
        allowNull: false,
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
    }
}, { sequelize, modelName: 'order' }
);

employee.hasMany(order,{
    foreignKey: 'employeeid',
    sourceKey: 'id',
});


 


(async () => {
    await employee.sync({force: false}); 
}
)();
module.exports = employee;
