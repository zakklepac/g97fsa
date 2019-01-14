const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knex = require("./server/knex");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/borrow', (req, res) => {
  res.send({ express: 'wired up' });
})

app.get('/lend', (req, res) => {
    res.send({ express: 'lending page'})
});


