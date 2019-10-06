const mongoose = require('mongoose');


// schema do funcionário
const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    carteirinha: {
        type: String,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },
    
    cargo: {
        type: String, 
        required: true
    }
});

// exportando o model User
module.exports = mongoose.model('Funcionario',funcionarioSchema);