const Sequlize = require('sequelize');
const db = {}
const sequelize = new Sequlize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'finalbod',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }

});

(async () => {
    await sequelize.authenticate(); 
}
)();
module.exports = sequelize;