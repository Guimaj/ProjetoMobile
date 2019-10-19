const express = require('express');
const FuncionarioController = require('./controllers/FuncionarioController');
const rotas = express.Router();

rotas.post('/funcionarios',FuncionarioController.store);
rotas.get('/funcionarios/',FuncionarioController.index);
rotas.get('/funcionarios/cargos',FuncionarioController.showByOffice);
rotas.get('/funcionarios/sexos',FuncionarioController.showByGender);
rotas.delete('/funcionarios/:carteirinha',FuncionarioController.remove);


module.exports = rotas;