const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
app.use(express.json()); // do not forget!!!
const cors = require('cors');
app.use(cors()) 


/* CREATE */
app.post('/movies', async (req, res) => {
  console.log('posting new movie')
  console.log(req.body)
  await knex('movie_list')
  .insert(req.body)
  let result = await knex('movie_list')
  .select('*')
  res.status(201).send(result);
})

/* READ */

// home
app.get('/', (req, res) => {
	res.status(200).json('Movie List API is up and running...');
});

// all movies
app.get('/movies', (req, res) => {
	knex('movie_list')
		.select('*')
		.then(data => res.status(200).json(data))
		.catch(() => res.status(404).send('Could not retrieve list of movies...'))
});

// one movie by id number
app.get('/movies/:id', (req, res) => {
	knex('movie_list')
		.select('*')
		.where('id', req.params.id)
		.then(data => res.status(200).json(data))
		.catch(() => res.status(404).send(`Could not retrieve movie at movie id ${req.params.id}`))
});

/* UPDATE */

/* DELETE */

// one movie by id number
app.delete('/movies/:id',  (req, res) => {
	knex('movie_list')
	.select('*')
	.where('id', req.params.id)
	.del()
	.then(() => res.status(200).send({apiMessage: `deleted movie id ${req.params.id}`}))
});

module.exports = app;