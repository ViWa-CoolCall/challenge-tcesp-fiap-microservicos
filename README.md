<h1>
  <img alt="ViWa Cool Call Logo" title="ViWa Cool Call Logo" src=".github/viwa.png" width="125px" />
</h1>

### Challenge TCESP - API - Disciplina de Microserviços

## Fluxo da aplicação
A base da nossa aplicação gira em torno do crawler. O crawler irá processar os dados dos arquivos dos portais de transparência e verificar se há informações faltando. Ao completar os processamentos necessários, o Crawler chama a API para fazer upload dos arquivos.

A API também servirá aos clientes web e mobile, que seguirão o seguinte fluxo: O cidadão escolhe a cidade que deseja verificar as informações de transparência, depois escolhe o tema, por exemplo covid. Depois escolhe o subtema, por exemplo despesas. Após selecionar o subtema, o usuário terá acesso aos arquivos em diferentes formatos relacionados ao subtema escolhido.

Esse é o fluxo base da API da nossa aplicação, podendo sofrer alterações no decorrer do desenvolvimento do projeto, no 2º semestre.

## Rotas do projeto - Heroku
###### No primeiro acesso, pode levar vários segundos para carregar, devido à hospedagem gratuita (Dynos do Heroku dormindo 😴).

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
