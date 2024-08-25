const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const router = require('./rotas/main')
require('dotenv').config();

// Configurar a view engine para EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));

app.use(express.static(path.join(__dirname, 'frontend')));

// Parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(helmet());

app.use(router)
module.exports = app