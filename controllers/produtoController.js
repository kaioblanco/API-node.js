const { Produto } = require('../models');

module.exports = class ProdutoController {
    static async showAll(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json({produtos});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const produtos = await Produto.findByPk(req.params.id);
            res.status(200).json({produtos});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const produto = await Produto.create({
                nome: req.body.nome,
                descricao: req.body.descricao,
                lance_minimo: req.body.lance_minimo,
                data_inicio: new Date(req.body.data_inicio),
                data_fim: new Date(req.body.data_fim)
            });
            res.status(201).json({res: 'Produto criado com sucesso!'});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            await produto.update({
                nome: req.body.nome,
                descricao: req.body.descricao,
                lance_minimo: req.body.lance_minimo,
                data_inicio: new Date(req.body.data_inicio),
                data_fim: new Date(req.body.data_fim)
            })
            res.status(200).json({res: 'Produto atualizado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const produto = await Produto.findByPk(req.params.id);
            await produto.destroy();
            res.status(200).json({res: 'Produto deletado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}