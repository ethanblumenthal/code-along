const User = require('../models/User')

module.exports = app => {
  app.get('/api/auth', async (req, res) => {
    try {
      const { userId } = req.body

      const user = await User.findOrCreate({ userId })
      res.json(user)
    } catch (err) {
      next(err)
    }
  })
}