const express = require('express');
const rotas = require('./rotas');
const mongoose = require('mongoose');
require('../secrets');

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@apprh-agri2.mongodb.net/test?retryWrites=true&w=majority`;

const api = express();

// permite o uso do json
api.use(express.json());
  
// conexão com o banco mongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('mongoDB conectado');
}).catch((err)=> {
  console.log('erro ao se conectar ao mongoDB', err);
})


api.use(rotas);
api.listen(8080, console.log('server rodando...'));
