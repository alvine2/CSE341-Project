const dotenv = require('dotenv');
dotenv.config();


const { MongoClient } = require('mongodb'); 

let database;

const initDb = (callback) => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }

  MongoClient.connect(process.env.MONGODB_URI) 
    .then(client => {
      database = client.db(); 
      console.log('Database initialized!');
      callback(null, database);
    })
    .catch(err => {
      console.error('Failed to initialize database:', err);
      callback(err);
    });
};

const getDb = () => database;

module.exports = {
  initDb,
  getDb
};