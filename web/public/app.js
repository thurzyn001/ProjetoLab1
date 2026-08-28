const resultadoElement = document.getElementById('resultado');

function exibirResultado(dados) {
  resultadoElement.value = JSON.stringify(dados, null, 2);
}

async function carregarTotal() {
  try {
    const response = await fetch('/api/usuarios/total');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarMaiores() {
  try {
    const response = await fetch('/api/usuarios/maiores');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarMedia() {
  try {
    const response = await fetch('/api/usuarios/media-idade');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarMaisVelho() {
  try {
    const response = await fetch('/api/usuarios/mais-velho');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarAgrupamento() {
  try {
    const response = await fetch('/api/usuarios/por-cidade');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarOrdenados() {
  try {
    const response = await fetch('/api/usuarios/ordenados');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function carregarEstatisticas() {
  try {
    const response = await fetch('/api/usuarios/estatisticas');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function listarTodos() {
  try {
    const response = await fetch('/api/usuarios');
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function buscarPorId() {
  const id = document.getElementById('buscaId').value;
  if (!id) {
    alert('Digite um ID');
    return;
  }
  try {
    const response = await fetch(`/api/usuarios/${id}`);
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function buscarPorCidade() {
  const cidade = document.getElementById('buscaCidade').value;
  if (!cidade) {
    alert('Digite uma cidade');
    return;
  }
  try {
    const response = await fetch(`/api/usuarios/cidade/${cidade}`);
    const dados = await response.json();
    exibirResultado(dados);
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

async function adicionarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cidade = document.getElementById('cidade').value;

  if (!nome || !idade || !cidade) {
    alert('Todos os campos são obrigatórios');
    return;
  }

  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, idade: parseInt(idade), cidade })
    });

    const dados = await response.json();
    exibirResultado({ mensagem: 'Usuário adicionado com sucesso!', usuario: dados });

    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('cidade').value = '';
  } catch (error) {
    exibirResultado({ erro: error.message });
  }
}

// Carregar todos os usuários ao iniciar a página
window.addEventListener('load', () => {
  listarTodos();
});
