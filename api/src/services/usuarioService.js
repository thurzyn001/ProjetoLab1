const usuarios = [
  { id: 1, nome: "Ana", idade: 22, cidade: "Lages" },
  { id: 2, nome: "Carlos", idade: 30, cidade: "Florianopolis" },
  { id: 3, nome: "Maria", idade: 27, cidade: "Lages" },
  { id: 4, nome: "Joao", idade: 19, cidade: "Curitiba" }
];

function listar() {
  return usuarios;
}

function adicionarUsuario({ nome, idade, cidade }) {
  const novoUsuario = {
    id: Date.now(),
    nome,
    idade,
    cidade,
  };

  usuarios.push(novoUsuario);
  return novoUsuario;
}

function buscarPorId(id) {
  return usuarios.find((u) => u.id === id);
}

function contarUsuarios(lista) {
  return lista.length;
}

function filtrarMaiores(lista) {
  return lista.filter((u) => u.idade >= 18);
}

function buscarPorCidade(lista, cidade) {
  const cidadeLower = String(cidade).toLowerCase();
  return lista
    .filter((u) => String(u.cidade).toLowerCase() === cidadeLower)
    .map((u) => ({ nome: u.nome }));
}

function somaIdades(lista) {
  return lista.reduce((total, u) => total + Number(u.idade || 0), 0);
}

function calcularMedia(lista) {
  if (!lista.length) return 0;
  return somaIdades(lista) / lista.length;
}

function encontrarMaisVelho(lista) {
  if (!lista.length) return null;
  const maisVelho = lista.reduce((prev, cur) => (cur.idade > prev.idade ? cur : prev), lista[0]);
  return { nome: maisVelho.nome, idade: maisVelho.idade };
}

function encontrarMaisNovo(lista) {
  if (!lista.length) return null;
  const maisNovo = lista.reduce((prev, cur) => (cur.idade < prev.idade ? cur : prev), lista[0]);
  return { nome: maisNovo.nome, idade: maisNovo.idade };
}

function agruparPorCidade(lista) {
  return lista.reduce((acc, u) => {
    acc[u.cidade] = (acc[u.cidade] || 0) + 1;
    return acc;
  }, {});
}

function ordenarPorIdade(lista) {
  return [...lista].sort((a, b) => a.idade - b.idade);
}

function gerarEstatisticas(lista) {
  const total = contarUsuarios(lista);
  const mediaIdade = calcularMedia(lista);
  const maisVelho = encontrarMaisVelho(lista);
  const maisNovo = encontrarMaisNovo(lista);

  return {
    total,
    mediaIdade,
    maisVelho: maisVelho ? maisVelho.nome : null,
    maisNovo: maisNovo ? maisNovo.nome : null,
  };
}

module.exports = {
  usuarios,
  listar,
  adicionarUsuario,
  buscarPorId,
  contarUsuarios,
  filtrarMaiores,
  buscarPorCidade,
  somaIdades,
  calcularMedia,
  encontrarMaisVelho,
  encontrarMaisNovo,
  agruparPorCidade,
  ordenarPorIdade,
  gerarEstatisticas,
};
