const express = require('express');
const FuncionarioController = require('./controllers/FuncionarioController');
const rotas = express.Router();

rotas.post('/funcionarios',FuncionarioController.store);
rotas.put('/funcionarios/:carteirinha',FuncionarioController.update);
rotas.get('/funcionarios',FuncionarioController.index);
rotas.get('/funcionarios/cargos/:cargo',FuncionarioController.showByOffice);
rotas.get('/funcionarios/sexos/:sexo',FuncionarioController.showByGender);
rotas.delete('/funcionarios/:carteirinha',FuncionarioController.remove);


module.exports = rotas;