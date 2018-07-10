const db = require('../model');
const dxccjs = require('dxccjs')

let dxcc = new dxccjs('./data/cty.xml')

const show = (req, res) => {
  console.log(req.params.call)
  let dxccEntity = dxcc.checkCall(req.params.call)
  res.json(dxccEntity)
}

module.exports = {
  show,
}
