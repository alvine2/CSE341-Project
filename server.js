const express = require('express');

// Removed destructuring '{ route }' as it was unnecessary and potentially misleading
// We just require the router object exported by index.js
const routes = require('./routes/index');
const db = require('./data/database'); 

const app = express();
const port = process.env.PORT || 3000;

// Use the imported routes object
app.use('/', routes);

db.initDb((err, clientDb) => {
  if (err) {
    console.error('Failed to start server due to DB connection error:', err);
  } else {
    app.listen(port, () => {
      console.log(`Database initialized and server is running on port ${port}`);
    });
  }
});

// If you need to export the application instance (e.g., for testing), export 'app'
// If not needed, you can remove this line entirely.
module.exports = app;