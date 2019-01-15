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
// app.get('/borrow', (req, res) => {
//   res.send({ express: 'wired up' });
// })

app.get('/lend', (req, res) => {
    res.send({ express: 'lending page'})
});

app.get("/borrow", (req, res, next) => {
    knex("cats")
      .then(cats => {
        res.send({ cats });
      })
      .catch(err => {
        next(err);
      });
  });

app.post("/lend", (req, res, next) => {
    knex('cats')
        .insert({
            name: req.body.name,
            owner: req.body.owner,
            image: req.body.image,
            description: req.body.description
        }, '*')
        .then((cats) => {
            res.send({ cats });
        })
        .catch((err) => {
        next(err);
    });
});

app.delete('/borrow', (req, res) => {
    knex('cats').where('cats.id', req.params.id).del()
    .then((cats) => {
        res.send({ cats });
    })
    .catch((err) => {
    next(err);
    });
});