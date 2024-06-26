const express = require('express');
const cadastrarInfo = require('./backend/control');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Configurar a view engine para EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Parse do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
