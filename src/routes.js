const express = require('express');
const routes = express.Router();
const User = require('./controllers/UserController');
const TokenController = require('./controllers/TokenController');



//USUARIOS
routes.get('/user/list', User.list);
routes.post('/user/login', TokenController.login);
routes.post('/user/cadastro',User.cadastro);
routes.get('/user/:id_user/perfil',User.perfilUsuario);



module.exports = routes; 