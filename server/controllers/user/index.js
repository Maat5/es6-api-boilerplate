const UserController = require('./user');
const express = require('express');
const router = express.Router();
// export routes
module.exports = router;

/**
 * Get users Profile
 */
router.get('/', UserController.getUsers);

/**
 * Find single user  profile
 */
router.get('/:userId', UserController.findUser);

/**
 *  Create user profile
 */
router.post('/', UserController.createUser);

/**
 * Update user profile
 */
router.put('/:userId', UserController.updateUser);

/**
 * Delete User profile
 */
router.delete('/:userId', UserController.deleteUser);