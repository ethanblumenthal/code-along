const sequelize  = require('../models')
const User = sequelize.models.user

module.exports = app => {
  app.post('/auth', async (req, res, next) => {
    try {
      const { googleId } = req.body

      const user = await User.findOrCreate({
        where: { googleId },
        defaults: { googleId }
      })

      res.json(user)
    } catch (err) {
      next(err)
    }
  })
}