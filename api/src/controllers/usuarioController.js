const usuarioService = require('../services/usuarioService');

exports.listar = (req, res) => {
  res.json(usuarioService.listar());
};

exports.criar = (req, res) => {
  const { nome, idade, cidade } = req.body;

  if (!nome || idade == null || !cidade) {
    return res
      .status(400)
      .json({ error: 'Os campos nome, idade e cidade são obrigatórios' });
  }

  const novoUsuario = usuarioService.adicionarUsuario({ nome, idade, cidade });
  res.status(201).json(novoUsuario);
};

exports.buscar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const usuario = usuarioService.buscarPorId(id);

  if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  res.json(usuario);
};

exports.total = (req, res) => {
  const total = usuarioService.contarUsuarios(usuarioService.listar());
  res.json({ total });
};

exports.maiores = (req, res) => {
  const maiores = usuarioService.filtrarMaiores(usuarioService.listar());
  res.json(maiores);
};

exports.porCidade = (req, res) => {
  const cidade = req.params.cidade;
  const usuarios = usuarioService.buscarPorCidade(usuarioService.listar(), cidade);
  res.json(usuarios);
};

exports.mediaIdade = (req, res) => {
  const media = usuarioService.calcularMedia(usuarioService.listar());
  res.json({ media });
};

exports.maisVelho = (req, res) => {
  const maisVelho = usuarioService.encontrarMaisVelho(usuarioService.listar());
  res.json(maisVelho);
};

exports.porCidadeAgrupada = (req, res) => {
  const agrupamento = usuarioService.agruparPorCidade(usuarioService.listar());
  res.json(agrupamento);
};

exports.ordenados = (req, res) => {
  const ordenados = usuarioService.ordenarPorIdade(usuarioService.listar());
  res.json(ordenados);
};

exports.estatisticas = (req, res) => {
  const estadisticas = usuarioService.gerarEstatisticas(usuarioService.listar());
  res.json(estadisticas);
};

