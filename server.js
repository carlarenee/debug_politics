'use strict'
if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));





app.listen(PORT, () => console.log('Heyo!', PORT));
