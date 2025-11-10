const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { createUser, login } = require('../controllers/userController');

const router = express.Router();

// sign up route
router.post('/createUser', createUser);

// sign in route
router.post('/login', login);

// validate JWT token
router.post('/validate-token', requireAuth, (req, res) => {
    res.status(200).json({ isValid: true });
});

module.exports = router;