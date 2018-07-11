const express = require('express'),
      cors = require('cors'),
      app = express(),
      db = require('./model'),
      controller = require('./controller'),
      http = require('http'),
      server = http.createServer(app),
      io = require('socket.io').listen(server)

server.listen(process.env.PORT || 3000)

const spotWorker = require('./worker')(io)

app.use(cors())

app.get('/spot', controller.spot.index)
app.get('/dxcc/:call', controller.dxcc.show)
app.get('/dxcc/:call/usa', controller.dxcc.showUSA)
