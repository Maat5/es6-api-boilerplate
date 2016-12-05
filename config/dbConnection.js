const mongoose = require('mongoose');
const config = require('./config');

const uri = 'mongodb://' + config.db.host + '/' + config.db.database;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { user: config.db.username, password: config.db.password }, (err, res) => {
  if (err) throw err;

  console.log('connected to db' + uri);
});

module.exports = mongoose;
