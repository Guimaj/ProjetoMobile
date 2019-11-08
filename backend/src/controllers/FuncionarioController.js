const Funcionario = require('../models/Funcionario');

module.exports = {

    // método para criar um novo funcionário
    async store(req, res){
        const {nome, sexo, carteirinha, salario, cargo } = req.body;

        try{
            const funcionarios = await Funcionario.create({nome,sexo,carteirinha,salario,cargo});
            return res.json(funcionarios);
        }catch(error){
            return res.json({erro:error});
        }

    },

    async showByOffice(req, res){

        const {cargo} = req.query;

        try{
            const funcionario = await Funcionario.find({cargo});
            return res.json(funcionario);;
        }catch(error){
            return res.json({erro:error});
        }
    },

    async showByGender(req, res){

        const {sexo} = req.query;

        try{
            const funcionario = await Funcionario.find({sexo});
            return res.json(funcionario);;
        }catch(error){
            return res.json({erro:error});
        }
    },

    async index(req, res){

        try{
            const funcionarios = await Funcionario.find();
            return res.json(funcionarios);;
        }catch(error){
            return res.json({erro:error});
        }
    },

    async update(req, res){
        
        const {carteirinha} = req.params;
        try{
            const funcionario = await Funcionario.findOneAndUpdate({carteirinha},req.body,{new:true});
            return res.json(funcionario);
        }catch(error){
            return res.json({erro:error});
        }
    },

    async remove(req, res){

        const {carteirinha} = req.params;

        try{
            const funcionario = await Funcionario.findOneAndRemove({carteirinha});
            return res.json(funcionario);
        }catch(error){
            return res.json({erro:error});
        }
    },


}
