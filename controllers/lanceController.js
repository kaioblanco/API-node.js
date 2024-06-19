const { Lance } = require('../models');

module.exports = class LanceController {
    static async showAll(req, res) {
        try {
            const lances = await Lance.findAll();
            res.status(200).json({lances});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async show(req, res) {
        try {
            const lance = await Lance.findByPk(req.params.id);
            res.status(200).json({lance});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async create(req, res) {
        try {
            const lance = await Lance.create({
                nome_usuario: req.body.nome_usuario,
                id_produto: req.body.id_produto,
                valor: req.body.valor
            });
            res.status(201).json({response: 'Lance criado com sucesso!'});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async update(req, res) {
        try {
            const lance = await Lance.findByPk(req.params.id);
            await lance.update({
                nome_usuario: req.body.nome_usuario,
                id_produto: req.body.id_produto,
                valor: req.body.valor
            })
            res.status(200).json({response: 'Lance atualizado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }

    static async delete(req, res) {
        try {
            const lance = await Lance.findByPk(req.params.id);
            await lance.destroy();
            res.status(200).json({response: 'Lance deletado com sucesso!'})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}