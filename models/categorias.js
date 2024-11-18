const {sequelizeDb, sequelizeConfig} = require('./database')

const categorias = sequelizeConfig.define(
    'categorias',
    {
        nome:{type:sequelizeDb.STRING},
    }
)

categorias.sync()
module.exports = categorias