const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listar);
router.post('/', usuarioController.criar);

// 🚀 LAB III - Exercícios de Funções em Endpoints
router.get('/total', usuarioController.total);
router.get('/maiores', usuarioController.maiores);
router.get('/cidade/:cidade', usuarioController.porCidade);
router.get('/media-idade', usuarioController.mediaIdade);
router.get('/mais-velho', usuarioController.maisVelho);
router.get('/por-cidade', usuarioController.porCidadeAgrupada);
router.get('/ordenados', usuarioController.ordenados);
router.get('/estatisticas', usuarioController.estatisticas);

// Rotas dinâmicas devem vir por último para não conflitar com rotas fixas
router.get('/:id', usuarioController.buscar);

module.exports = router;