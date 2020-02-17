var busca = require('../views/scripts/busca');
var inserir = require('../views/scripts/inserir');

function buscador(cep) {
    var x = busca.busca(cep);
    console.log('dentro de server.js', x);
    return x;
}


var inserir = function (cepJson) {
    var x = busca.busca(cepJson);
    console.log('dentro de server.js', x);
}


module.exports = { buscador, inserir };