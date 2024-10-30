const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const pgp = require('pg-promise')();
const router = require('./rotas/main');
require('dotenv').config();

const app = express();
const db = pgp(process.env.DATABASE_URL);

// Configurar a view engine para EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));

app.use(express.static(path.join(__dirname, 'frontend')));

app.use((req, res, next) => {
    req.db = db;
    next();
});

// Parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(helmet());

app.use(router);

module.exports = app;