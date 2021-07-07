const db = require('../data/dbConfig.js');

const getDishes = () => db('dishes');

const getDish = id => (
  db('dishes')
    .where({ id })
    .first()
);

const addDish = dish => (
  db('dishes')
    .insert(dish)
    .then(ids => getDish(ids[0]))
);

module.exports = {
  getDishes,
  getDish,
  addDish
}
