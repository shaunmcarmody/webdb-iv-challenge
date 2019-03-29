const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const dishes = require('./dishes/dishesRoute.js');
const recipes = require('./recipes/recipesRoute.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/dishes', dishes);
server.use('/api/recipes', recipes);

server.listen(5000, console.log('Listening on port 5000'));