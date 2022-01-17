require('dotenv').config();
// const mysql = require('mysql2'); 


const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

// const sequelize = new Sequelize('ecommerce_db', 'newuser', 'Rr!528183', {
//   host: 'localhost',
//   dialect: 'mysql',
//   dialectOptions: {
//     decimalNumbers: true,
//   },
// });




module.exports = sequelize;
