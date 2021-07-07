const router = require('express').Router();
const db = require('./recipesDb.js');

router.get('/', async (req, res) => {
  try {
    // const resource = await debug.
    const resource = await db.getRecipes();
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const recipe = req.body;
  try {
    const resource = await db.addRecipe(recipe);
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json(err);    
  }
})

module.exports = router;