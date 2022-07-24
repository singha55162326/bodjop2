const Sequlize = require('sequelize');
const sequelize = require("../db_instance");

const user = sequelize.define('user', 
{
    username:{
        type: Sequlize.STRING,
        allowNull: false,
        primaryKey: true,
    },
  
    password:{
        type: Sequlize.STRING,
        allowNull: false,
    },
    role:{
        type: Sequlize.STRING,
        allowNull: false,
    },
    level:{
        type: Sequlize.STRING,
        defaultValue: "normal",
    }
}
, {}
);

(async () => {
    await user.sync({force: false}); 
})();

module.exports = user;