const express = require('express');
const cadastrarInfo = require('./backend/control');
const app = express();
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

// Configurar a view engine para EJS
app.set('view engine', 'ejs');

if (process.env.NODE_ENV === 'production') {
  app.set('views', path.join(__dirname, 'public', 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
}else{
  app.use(express.static(path.join(__dirname, 'frontend')));
  app.set('views', path.join(__dirname, 'frontend', 'views'));
  
}

// Parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(helmet());

// Rota para renderizar a página index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para cadastrar informações
app.post('/cadastrar', cadastrarInfo);

// Iniciar o servidor
app.listen(PORT, () => {

  console.log(`Servidor rodando na porta ${PORT}`);
});
