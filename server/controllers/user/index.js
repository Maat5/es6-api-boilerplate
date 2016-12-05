const UserController = require('./user');
const express = require('express');
const router = express.Router();
// export routes
module.exports = router;

/**
 * Get users Profile
 */
router.get('/', UserController.getUsers);

