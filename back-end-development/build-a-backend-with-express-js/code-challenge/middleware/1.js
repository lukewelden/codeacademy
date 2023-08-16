/*
This server currently sends the same response for /whatis/apple, /whatis/orange, and /whatis/banana. Write a function to send the same response, and DRY the code by using that function as a callback for all three routes.
*/

const express = require('express');
const app = express();

// Finish this function and use it in the routes below

const sendFruitResponse = (req, res, next) => {
  res.send('fruit'); 
};

app.get('/whatis/apple', (req, res, next) => {
  sendFruitResponse();
});

app.get('/whatis/orange', (req, res, next) => {
  sendFruitResponse();
});

app.get('/whatis/banana', (req, res, next) => {
  sendFruitResponse();
});

