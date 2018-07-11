const db = require('../model');

const DXCluster = require('dxcluster')

module.exports = (io) => {
  conn = new DXCluster()

  let opts = {
    host: 'dxusa.net',
    port: 7300,
    loginPrompt: 'login:',
    call: 'K3AM-5'
  }

  conn.connect(opts)
    .then(() => {
      conn.on('spot', (spot) => {
        db.Spot.create(spot, (err, newSpot) => {
          if (err) {
            console.log(err)
            return
          }
          io.emit('spot', newSpot)
        });
      })
      conn.on('message', (msg) => {
        console.log('[MSG]:' + msg)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
