let connection = require('../scripts/connection');

function busca(cep) {

    if (validarCode(cep)) {
        connection.query("select * from teste_py.dados_dep where cep = " + validar(cep), function (error, rows, fields) {
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
                if (isEmpty(rows)) {
                    return montarJsonNaoEncotrado();
                }
                else {
                    console.log('dentro de busca.js', rows);
                    return montarJson(rows);
                }
            }
        })
    }
    else {
        return montarJsonErro();
    }

}
function validar(cep) {
    return cep.replace("-", "");
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

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function montarJson(rows) {
    const fileJson = {};
    for (var i = 0; i < rows.length; i++) {
        elementJson = "{ 'code' : 200,'message': 'CEP found','result': {'logradouro':" + rows[i].endereco + " ,'bairro': " + rows[i].bairro + ",'localidade': " + rows[i].cidade + ",'uf': " + rows[i].estado + ",'cep': " + rows[i].cep + " }";
        fileJson[i] = elementJson;
    }
    return fileJson;
}

function montarJsonErro() {
    elemento = "{'code': 401,'message': 'Invalid CEP provided','result': {'cep_provided': '','cep_found': ''        }}"
    return elemento;
}
function montarJsonNaoEncotrado() {
    elemento = "{'code': 404,'message': 'CEP not found',','result': []  }}"
    return elemento;
}

function erroBD() {
    elemento = "{'code': 502,'message': 'Error conection database',','result': []  }}"
    return elemento;
}

module.exports = { busca };