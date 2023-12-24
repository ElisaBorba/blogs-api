const express = require('express');

// ...

const app = express();

const { loginRoutes, userRoutes, categoriesRoutes } = require('./routes');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/user/:id', userRoutes);
app.use('/categories', categoriesRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
