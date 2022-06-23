const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
app.use(express.json()); // do not forget!!!
const cors = require('cors');
app.use(cors()) 


app.get('/', (req, res) => {
	res.status(200).json('Movie List API is up and running...');
});

app.get('/movies', (req, res) => {
	knex('movie_list')
		.select('*')
		.then(data => res.status(200).json(data))
		.catch(() => res.status(404).send('Could not retrieve list of movies...'))
});

app.post('/movies', async (req, res) => {
  console.log('posting new movie')
  console.log(req.body)
  await knex('movie_list')
  .insert(req.body)
  let result = await knex('movie_list')
  .select('*')
  
  res.status(201).send(result);
})

app.delete('/movies/:id', async (req, res) => {
  console.log('deleting mission_equipment at: ',req.params.mission_equipment_id)
  await knex('mission_equipment')
  .del()
  .where({id: req.params.mission_equipment_id})

  await knex('meta')
  .del()
  .where({id: req.params.mission_equipment_id})
  res.status(200).send({message: 'this worked'});
})

module.exports = app;