/*
Start your server listening on the port defined by the PORT variable.
*/

const express = require('express');

const app = express();

const PORT = process.env.PORT || 4001;

// Add your code below:
app.listen(PORT);