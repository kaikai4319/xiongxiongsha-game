const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const validPassword = await User.verifyPassword(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: process.env.JWT_EXPIRATION || '24h',
    });

    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify token
router.get('/verify', authMiddleware, (req, res) => {
  res.json({ valid: true, userId: req.user.id });
});

module.exports = router;
