const { response } = require('express');
const express = require('express');
const { getPairsOfPlayers } = require('./controller');
const router = express.Router();

router.get('/', async (req, resp = response, next) => {
  try {
    const num = req.query;
    await getPairsOfPlayers (req, resp, next, num);
  } catch (error) {
    resp.status(500).json({ error });
  }
});

module.exports = router;
