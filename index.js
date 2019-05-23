const express = require('express')
const path = require('path')
const sequelize  = require('./models')

const app = express()
app.use(express.json())

require('./routes/authRoutes')(app)
require('./routes/streamRoutes')(app)
require('./services/mediaServer')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000)
})