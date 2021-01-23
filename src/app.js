'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/ba_db');
const Product = require('./models/products.model');

const initRoutes = require('./routes/init.routes');
const prodRoutes = require('./routes/products.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', initRoutes);
app.use('/products', prodRoutes);

module.exports = app;