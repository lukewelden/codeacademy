/*
The server will handle requests for existing food indices as expected, but it will call next with an error in response to a request for a non-existent food.

Complete the errorHandler function as an Express error handling function. It should set the response status equal to the error object’s status property if it exists, and 500 by default if there is no status on the error object. It should send the message property of the error object as its response.
*/

const express = require('express');
const app = express();

const foods = ['pasta carbonara', 'bánh mì', 'cucumber salad'];

app.get('/foods/:index', (req, res, next) => {
  if (foods[req.params.index]) {
    res.send(req.params.index);
  } else {
    const err = Error('Invalid index!');
    err.status = 404;
    next(err);
  }
});

const errorHandler = (err, req, res, next) => {
  // add code below 
  res.status(err.status || 500);
  res.send(err.message); 
};

app.use(errorHandler);
