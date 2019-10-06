const express = require('express');
const rotas = require('./rotas');
const api = express();

// permite o uso do json
api.use(express.json());
api.use(rotas);
api.listen(8080, console.log('server running...'));