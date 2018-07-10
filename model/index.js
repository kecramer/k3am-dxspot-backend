const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/k3am-dxspot';

mongoose.connect(connectionString);

module.exports.Spot = require('./spot.js');
