var express = require('express');
var router = express.Router();
var serverJS = require("../views/server.js");
var buscador = require('../views/scripts/busca');

router.get('/', function (req, res, next) {
  res.render('index', { page: 'Bem Vindo!', menuId: 'home' });
});

router.get('/busca/:cep?', (req, res, next) => {
  res.render('index', `async: true`, {
    page: 'Bem Vindo!', menuId: 'home',
    data: serverJS.buscador(req.params.cep)
  });
});


router.post('/inserir', function (req, res, next) {
  res.render('inserir', { page: 'Inserir', menuId: 'inserir' });
});

module.exports = router;