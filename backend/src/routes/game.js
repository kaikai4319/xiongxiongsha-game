const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get available games
router.get('/', authMiddleware, (req, res) => {
  try {
    res.json({ games: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new game
router.post('/', authMiddleware, (req, res) => {
  try {
    res.status(201).json({ message: 'Game created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get game by ID
router.get('/:id', authMiddleware, (req, res) => {
  try {
    res.json({ game: {} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
