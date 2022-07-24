const Sequlize = require('sequelize');
const sequelize = require("../db_instance");
const document = sequelize.define('document',
{
    id:{
        type: Sequlize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    address:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'address'
    },
    orderid:{
        type: Sequlize.INTEGER,
        allowNull: false,
        field:'orderid'
    },
    contact:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'contact'
    },
    traid:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'traid'
    },
    date:{
        type: Sequlize.DATE,
        allowNull: false,
        field:'date'
    },
    companyid:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'companyid'
    },
    dimention:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'dimention'
    },
    companyname:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'companyname'
    },
    phone:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'phone'
    },
    service:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'service'
    },
    price:{
        type: Sequlize.STRING,
        allowNull: false,
        field:'price'
    }
}
, {}
);
(async () => {
    await document.sync({force: false}); 
}
)();
module.exports = document;
