const db = require('../model');
const { DateTime } = require('luxon');

const index = (req, res) => {
  let limit = req.query.limit && parseInt(req.query.limit) || 20,
      oldest = req.query.oldest &&
               DateTime.fromISO(req.query.oldest).isValid &&
               DateTime.fromISO(req.query.oldest)
               || null,
      newest = req.query.newest &&
               DateTime.fromISO(req.query.newest).isValid &&
               DateTime.fromISO(req.query.newest)
               || null,
      spotter = req.query.spotter || null,
      spotted = req.query.spotted || null

  let filter = {}
  if(oldest) {
    if(newest) {
      filter.when = {$gte: oldest.toISO(), $lte: newest.toISO()}
    }
    filter.when = {$gte: oldest.toISO()}
  } else if(newest) {
    filter.when = {$lte: newest.toISO()}
  }

  if(spotter) {
    filter.spotter = spotter
  }

  if(spotted) {
    filter.spotted = spotted
  }

  db.Spot
    .find(filter)
    .sort({'when': -1})
    .limit(limit)
    .exec((err, spots) => {
      res.json(spots);
    })
}

module.exports = {
  index,
}
