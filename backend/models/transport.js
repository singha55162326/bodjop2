    const { Sequelize } = require('sequelize');
    const Sequlize = require('sequelize');
    const sequelize = require("../db_instance");
    const transport = sequelize.define('transport',
    {
        id:{
            type: Sequlize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        
        
        },
        date:{
            type: Sequlize.DATE,
            allowNull: false,
            field:'date'
        },
        dimention:{
            type: Sequlize.STRING,
            allowNull: false,
            field: 'dimention'
        },
        orderid:{
            type: Sequlize.INTEGER,
            allowNull: false,
            field:'orderid'
        },
        category:{
            type: Sequlize.STRING,
            allowNull: false,
            field:'category'
        },
        companyname:{
            type: Sequlize.STRING,
            allowNull: false,
            field:'companyname'
        },
        supplier:{
            type: Sequlize.STRING,
            allowNull: false,
            field:'supplier'
        },
    
    }
    , {}
    );
    (async () => {
        await transport.sync({force: false}); 
    }
    )();
    module.exports = transport;
