# ApiCEPNodeJS
Uma api simples que faz a busca de um cep em um banco de dados e também salva valores.

Ao fazer o download verificar se possue o Node, NPM, Nodemon e ExpressJS instalado.

  Node: https://nodejs.org/

  NPM: https://www.npmjs.com/

  Nodemon: https://nodemon.io/

  Express: https://expressjs.com/

Verificado isso, abrir o terminal no diretório do projeto.
Executar: npm install
depois: nodemon start

Os dados do banco de dados(BD) estão criptografados na pasta file.json.
Para inserir outro BD, colocar os dados em base64 no arquivo.

o link para busca é http://localhost:3000/busca/{inserir valor do cep}

o link para inserir é http://localhost:3000/inserir/{inserir json}

formato json:
    {
        cep: ?,
        nome: ?,
        endereco: ?,
        bairro: ?,
        estado: ?,
        cidade: ?
    }

Em caso de cep em formato inválido, não será inserido.

O meu forte é a parte de Back-End e ainda não consegui entender completamente o funcionamento
do servidor no javascript, visto que funciona de maneira assincrona.

Vou continuar estudando para poder resolver isso.

Sugestões e dicas, fiquem a vontade :)

