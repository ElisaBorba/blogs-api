# 👨‍💻 Blogs API
Uma aplicação Node.js construída com a biblioteca Sequelize para facilitar a administração e criação de conteúdo em blogs. Este projeto incorpora um mecanismo de autenticação baseado em JWT para assegurar operações sensíveis, em conformidade com os princípios fundamentais do modelo `API REST`. No Blogs API é possível realizar operações CRUD para gerenciar categorias de posts, bem como, a criação de usuários e posts associados a um usuário e categoria.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* JavaScript
* MySQL
* Sequelize
* Docker

### Estrutura do Projeto
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
### Como Executar
1️⃣ Inicializando com docker:
```
docker-compose up -d --build
docker exec -it blogs_api bash
```
2️⃣ Instale as dependências:
```
npm install
```
3️⃣ Inicie a aplicação e execute as migrations:
```
npm run prestart
```
🎲 Populando o banco de dados:
```
npm run seed
```
