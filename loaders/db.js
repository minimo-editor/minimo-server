const mongoose = require('mongoose');
const dbConfig = require('../configs/db');

mongoose.connect(process.env.MONGO_URL, dbConfig);

function dbInit() {
  const db = mongoose.connection;

  db.on('error', (err) => console.error(`Can't connect to DB due to ${err}`));
  db.once('open', () => console.log('Connected to Database'));
}

module.exports = dbInit;
