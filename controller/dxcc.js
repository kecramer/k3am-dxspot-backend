const db = require('../model')
const dxccjs = require('dxccjs')
const fetch = require('node-fetch')

let dxcc = new dxccjs('./data/cty.xml')

const show = (req, res) => {
  let dxccEntity = dxcc.checkCall(req.params.call)
  res.json(dxccEntity)
}

const showUSA = (req, res) => {
  let call = req.params.call
  fetch(`https://callook.info/${call}/json`)
    .then((resp) => resp.json())
    .then((resp) => {
      res.json(resp)
    })
}

module.exports = {
  show,
  showUSA
}
