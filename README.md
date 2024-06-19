# Trabalho de Web: API

## Descrição
Este projeto é uma estrutura base para uma API de leilões online, utilizando Node.js, Express e Sequelize.

## Scripts

- Iniciar o servidor em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

## Dependências

- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [i](https://www.npmjs.com/package/i)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [npm](https://www.npmjs.com/package/npm)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

## Endpoints

### Produto

- **GET /produto**: Retorna todos os produtos.
- **GET /produto/:id**: Retorna um produto específico pelo ID.
- **POST /produto**: Cria um novo produto.
- **PUT /produto/:id**: Atualiza um produto pelo ID.
- **DELETE /produto/:id**: Deleta um produto pelo ID.

### Lance

- **GET /lance**: Retorna todos os lances.
- **GET /lance/:id**: Retorna um lance específico pelo ID.
- **POST /lance**: Cria um novo lance.
- **PUT /lance/:id**: Atualiza um lance pelo ID.
- **DELETE /lance/:id**: Deleta um lance pelo ID.