const router = require('express').Router()
const db = require('./dishesDb.js');

router.get('/', async (req, res) => {
  try {
    const resource = await db.getDishes()
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const dish = req.body;
  try {
    const resource = await db.addDish(dish)
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resource = await db.getDish(id)
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;