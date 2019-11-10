const express = require('express');
const rotas = require('./rotas');
const mongoose = require('mongoose');
const cors = require('cors');
//require('../secrets');

//const DB_USERNAME = process.env.DB_USERNAME;
//const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://testeuser:Apprh123@apprh-agri2.mongodb.net/test?retryWrites=true&w=majority`;

const api = express();

// permite o uso do json
api.use(express.json());
api.use(cors());

// conexão com o banco mongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=> {
  console.log('mongoDB conectado');
}).catch((err)=> {
  console.log('erro ao se conectar ao mongoDB', err);
})


api.use(rotas);
api.listen(3333, console.log('server rodando...'));
