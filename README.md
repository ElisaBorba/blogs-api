# Blogs API
Uma aplicação Node.js construída com a biblioteca Sequelize para facilitar a administração e criação de conteúdo em blogs. Este projeto incorpora um mecanismo de autenticação baseado em JWT para assegurar operações sensíveis, em conformidade com os princípios fundamentais do modelo `API REST`. No Blogs API é possível realizar operações CRUD para gerenciar categorias de posts, bem como, a criação de usuários e posts associados a um usuário e categoria.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* JavaScript
* MySQL
* Sequelize
* Docker

### Estrutura do projeto
```
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── seeders/
│   ├── services/
│   ├── app.js
└── └── server.js
```
### Como executar
1️⃣ Instale as dependências:
```
npm install
```
2️⃣ Inicie a aplicação e execute as migrations:
```
npm run prestart
```
