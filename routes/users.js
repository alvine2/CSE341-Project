const express = require('express');
const router = express.Router();


const usercontroller = require('../controllers/users'); 


router.get('/', usercontroller.getAllUsers);
router.get('/:id', usercontroller.getUserById);

module.exports = router;
