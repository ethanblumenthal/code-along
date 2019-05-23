const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/code-along`
)

const models = {
  User: sequelize.import('./User'),
  Stream: sequelize.import('./Stream'),
}

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
})

module.exports = sequelize