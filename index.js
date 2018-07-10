const express = require('express'),
      cors = require('cors'),
      app = express(),
      db = require('./model'),
      controller = require('./controller')
      spotWorker = require('./worker')

app.use(cors())

app.get('/spot', controller.spot.index)
app.get('/dxcc/:call', controller.dxcc.show)

app.listen(process.env.PORT || 3000, () => {
   console.log('Express started on port ' + (process.env.PORT || '3000'))
})
