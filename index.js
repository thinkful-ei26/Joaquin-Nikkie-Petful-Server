'use strict';

const express = require('express');
const { Queue, peek, isEmpty } = require('./animal_queue');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

// const {dbConnect} = require('./db-knex');

const app = express();
let dogQ = new Queue();
let catQ = new Queue();

/***************DUMMY DB**************************************** */
dogQ.enqueue({
  imageURL:
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away',
  species: 'dog'
});
dogQ.enqueue({
  imageURL:
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Mr Dog',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away',
  species: 'dog'
});
catQ.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street',
  species: 'cat'
});
catQ.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Stuffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street',
  species: 'cat'
});
/***************************************************************************** */

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// *********ROUTES**************************
//CAT******************
// Retrieve a single cat at index 0
app.get('/api/cat', (req, res) => {
  if (isEmpty(catQ)) {
    return res.json({ message: 'There are no cats today' });
  }
  let oldestPet = peek(catQ);
  return res.json({
    oldestPet
  });
});
//
app.delete('/api/cat', (req, res, next) => {
  // if (!cats.length) {
  //   res.json({ message: 'There are no cats for adoption today' });
  // }
  catQ.dequeue();
  res.status(204).end();
});

//DOG******************
app.get('/api/dog', (req, res) => {
  if (isEmpty(dogQ)) {
    return res.json({ message: 'There are no dogs today' });
  }
  let oldestPet = peek(dogQ);
  return res.json({
    oldestPet
  });
});
app.delete('/api/dog', (req, res, next) => {
  dogQ.dequeue();
  res.status(204).end();
});

/********************************************* */
function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
