const {sequelizeDb, sequelizeConfig} = require('./database')

const categorias = require('./categorias')

const pratos = sequelizeConfig.define(
    'pratos',
    {
        nome:{type:sequelizeDb.STRING},
        preco:{type:sequelizeDb.FLOAT},
        descricao:{type:sequelizeDb.TEXT},
    }
)


categorias.hasMany(pratos,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
pratos.belongsTo(categorias)

pratos.sync()
module.exports = pratos