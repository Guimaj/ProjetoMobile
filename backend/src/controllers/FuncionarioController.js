const Funcionario = require('../models/Funcionario');

module.exports = {

    // método para criar um novo funcionário
    async store(req, res){
        const {nome, sexo, carteirinha, salario, cargo } = req.body;

        const funcionario = await Funcionario.create({nome, sexo, carteirinha, salario, cargo}).catch((err)=>{
            return res.json({erro: err});
        })

        return res.json(funcionario);

    },

    async showByOffice(req, res){

        const {cargo} = req.query;

        const funcionarios = await Funcionario.find({cargo}).catch((err)=>{
            return res.json({erro: err});
        })

        return res.json(funcionarios);
    },

    async showByGender(req, res){

        const {sexo} = req.query;

        const funcionarios = await Funcionario.find({sexo}).catch((err)=>{
            return res.json({erro: err});
        })

        return res.json(funcionarios);
    },

    async index(req, res){

        const funcionarios = await Funcionario.find().catch((err)=>{
            return res.json({erro: err});
        })

        return res.json(funcionarios);
    },

    async update(req, res){
        try{
            const {carteirinha} = req.params;
            const funcionario = await Funcionario.findOneAndUpdate({carteirinha},req.body,{new:true});
            res.json(funcionario);
        }catch(error){
            res.json({erro:error});
        }
    },

    async remove(req, res){
        try{
            const {carteirinha} = req.params;
            const funcionario = await Funcionario.findOneAndRemove({carteirinha});
            res.json(funcionario);
        }catch(error){
            res.json({erro:error});
        }
    },


}
