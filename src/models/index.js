const {Sequelize} = require("sequelize");
const userModel = require('./user.model')

const { DB_SERVER, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env


let sequelize;

if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize('sqlite::memory:', { logging: false })

}else {

    sequelize = new Sequelize(DB_DATABASE,DB_USER, DB_PASSWORD, {
        host: DB_SERVER,
        dialect: 'mysql'
    })
}


const db = {
    sequelize: sequelize,
    User: userModel(sequelize)
}


module.exports = db;
