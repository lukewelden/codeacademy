/*
Use the Express middleware resources to find an appropriate middleware package to handle CORS requests.

Import the correct middleware package and use it for all requests. You can use the default settings for this middleware, no need to use any customization!
*/

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

