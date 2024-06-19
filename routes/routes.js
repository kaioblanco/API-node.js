const express = require('express');
const router = express.Router();
const path = require('path')
const LanceController = require('../controllers/lanceController');
const ProdutoController = require('../controllers/produtoController');

router.get('/', (req, res) => {
    res.status(200).send("Bem Vindo");
})

// rotas de produto
router.get('/produto', ProdutoController.showAll);
router.get('/produto/:id', ProdutoController.show);
router.post('/produto', ProdutoController.create);
router.put('/produto/:id', ProdutoController.update);
router.delete('/produto/:id', ProdutoController.delete);

// rotas de lance
router.get('/lance', LanceController.showAll);
router.get('/lance/:id', LanceController.show);
router.post('/lance', LanceController.create);
router.put('/lance/:id', LanceController.update);
router.delete('/lance/:id', LanceController.delete);

module.exports = router