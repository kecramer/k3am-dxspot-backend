const db = require('../model');
const dxccjs = require('dxccjs')

let dxcc = new dxccjs('./data/cty.xml')

const show = (req, res) => {
  let dxccEntity = dxcc.checkCall(req.params.call)
  res.json(dxccEntity)
}

module.exports = {
  show,
}
