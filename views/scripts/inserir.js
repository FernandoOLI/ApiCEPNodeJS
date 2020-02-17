let connection = require('../scripts/connection');

function inserir(cep) {

    if (validarCode(cep)) {
        connection.query("INSERT INTO teste_py.dados_dep (cep, nome, endereco,bairro,estado,cidade) " +
            "values( " + cep.cep + "," + cep.nome + "," + cep.endereco + "," + cep.bairro + "," +
            cep.estado + "," + cep.cidade + ")", function (error, rows, fields) {
                if (!!error) {
                    console.log(error.message);
                    console.log(error.name);
                    console.log(error.sqlMessage);
                    console.log(error.sqlState);
                    console.log(error.sqlStateMarker);
                    return erroBD();
                }
                else {
                    console.log('Sucess conection');
                }
            })
    }
    else {
        return montarJsonErro();
    }

}

function validarCode(cep) {
    var cepCode = cep.replace("-", "");
    if (cepCode.length == 8 && isNumber(cepCode))
        return true;
    else
        return false;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


module.exports = { inserir };