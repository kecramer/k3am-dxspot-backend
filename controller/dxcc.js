const db = require('../model')
const dxccjs = require('dxccjs')
const fetch = require('node-fetch')

let dxcc = new dxccjs('./data/cty.xml')

const show = (req, res) => {
  let dxccEntity = dxcc.checkCall(req.params.call)
  if(dxccEntity.entity[0] === 'UNITED STATES OF AMERICA') {
    fetch(`https://callook.info/${req.params.call}/json`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        dxccEntity.lat[0] = resp.location.latitude
        dxccEntity.long[0] = resp.location.longitude
        res.json(dxccEntity)
      })
  } else {
    res.json(dxccEntity)
  }
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
