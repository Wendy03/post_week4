const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', usersControllers.getUser);
router.post('/', usersControllers.createUser);

module.exports = router;
