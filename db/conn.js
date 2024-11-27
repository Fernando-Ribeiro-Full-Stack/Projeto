const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('projetosql','root','',{
  host: 'localhost',
  dialect: 'mysql'
})

try{
  sequelize.authenticate()
  console.log('conectado ao banco')
}catch(error){
  console.log(error)
}

module.exports = sequelize