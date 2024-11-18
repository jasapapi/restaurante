const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'restaurante_db',
    'root',
    '',

    {
        dialect:'sqlite',
        storage:'./restaurante.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}