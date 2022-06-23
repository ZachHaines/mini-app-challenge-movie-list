const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
	res.status(200).json('Movie List API is up and running...');
})
app.listen(port, () => console.log(`Express server listening on port ${port}.`))