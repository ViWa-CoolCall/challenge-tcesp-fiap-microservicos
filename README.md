<h1>
  <img alt="ViWa Cool Call Logo" title="ViWa Cool Call Logo" src=".github/viwa.png" width="100px" />
</h1>

### Challenge TCESP - API - Disciplina de Microserviços

## Rotas do projeto - Heroku

- [Listar municipios](https://viwa-api.herokuapp.com/municipios/listall)

- [Listar temas](https://viwa-api.herokuapp.com/temas/listall)

- [Listar subtemas](https://viwa-api.herokuapp.com/subtemas/listall)

- [Listar arquivos](https://viwa-api.herokuapp.com/arquivos/listall)

## Detalhes de instalação

- Crie um banco de dados PostgreSQL e coloque as credenciais em um arquivo .env, de acordo com o arquivo .env.example (as credenciais do Cloudinary estão no .txt no portal, onde enviamos o projeto).

- As coleções de requisições do Insomnia e Postman se encontram na raíz do projeto.

- Execute: "yarn" para instalar as dependências do projeto (caso não tenha o yarn, para instalá-lo, execute: "npm install --global yarn").

- Execute: "yarn typeorm migration:run" para criar as tabelas no banco.

- Execute: "yarn dev" para iniciar a API.
