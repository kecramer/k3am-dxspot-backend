const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const SpotSchema = new Schema({
  spotter: String,
  spotted: String,
  frequency: Number,
  message: String,
  when: Date,
})

const Spot = mongoose.model('Spot', SpotSchema)

module.exports = Spot
