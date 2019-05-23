const sequelize  = require('../models')
const Stream = sequelize.models.stream

module.exports = app => {
  app.get('/api/streams', async (req, res, next) => {
    try {
      const streams = await Stream.findAll({})
      res.json(streams)
    } catch (err) {
      next(err)
    }
  })

  app.get('/api/streams:id', async (req, res, next) => {
    try {
      const stream = await Stream.findById(req.params.id)
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.post('/api/streams', async (req, res, next) => {
    try {
      console.log(req.body)
      const { title, description, googleId } = req.body

      const stream = await Stream.create({ title, description, googleId })
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.patch('/api/streams/:id', async (req, res, next) => {
    try {
      const { title, description, googleId } = req.body

      const stream = await Stream.update({ title, description, googleId }, {
        where: { id: req.params.id },
        returning: true
      })
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.delete('/api/streams/:id', async (req, res, next) => {
    try {
      await Stream.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(204).send()
    } catch (err) {
      next(err)
    }
  })
}