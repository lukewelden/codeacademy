/*
Create a POST /soups route. It should add a new soup name to the soups array 
from the name property of the req.query object. 
It should also set a status code for ‘Created’
*/
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.post('/soups', (req, res, next) => {
  const soup = req.query.name; 
  soups.push(soup);
  res.status(201).send(soup); 
});
