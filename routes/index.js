const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

router.use('/users', require('./users'));
module.exports = router;
