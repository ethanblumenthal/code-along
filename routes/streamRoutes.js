const Stream = require('../models/Stream')

module.exports = app => {
  app.get('/api/streams', async (req, res) => {
    try {
      const streams = await Stream.findAll({})
      res.json(streams)
    } catch (err) {
      next(err)
    }
  })

  app.get('/api/streams:id', async (req, res) => {
    try {
      const stream = await Stream.findById(req.params.id)
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.post('/api/streams', async (req, res) => {
    try {
      const { title, description, userId } = req.body

      const stream = await Stream.create({ title, description, userId })
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.patch('/api/streams/:id', async (req, res) => {
    try {
      const { title, description, userId } = req.body

      const stream = await Stream.update({ title, description, userId }, {
        where: {
          id: req.params.id
        }
      })
      res.json(stream)
    } catch (err) {
      next(err)
    }
  })

  app.delete('/api/streams/:id', async (req, res) => {
    try {
      await Stream.destroy({
        where: {
          id: req.params.id
        }
      })
      res.sendStatus(204)
    } catch (err) {
      next(err)
    }
  })
}