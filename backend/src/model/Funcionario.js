const mongoose = require('mongoose');


// schema do funcionário
const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    sexo: {
        type: String,
        required: true
    },
    
    carteirinha: {
        type: Number,
        required: true
    },

    salario: {
        type: NumberDecimal,
        required: true
    },
    
    cargo: {
        type: String, 
        required: true
    }
});

// exportando o model User
module.exports = mongoose.model('Funcionario',funcionarioSchema);
