const express = require('express');
const axios = require('axios');
const app = express();

const API_BASE_URL = 'http://localhost:3000';

app.use(express.static('public'));
app.use(express.json());

// Proxy para a API - Listar usuários
app.get('/api/usuarios', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Proxy para a API - Total de usuários
app.get('/api/usuarios/total', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/total`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao contar usuários' });
  }
});

// Proxy para a API - Maiores de idade
app.get('/api/usuarios/maiores', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/maiores`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao filtrar maiores' });
  }
});

// Proxy para a API - Por cidade
app.get('/api/usuarios/cidade/:cidade', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/cidade/${req.params.cidade}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar por cidade' });
  }
});

// Proxy para a API - Média de idade
app.get('/api/usuarios/media-idade', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/media-idade`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao calcular média' });
  }
});

// Proxy para a API - Mais velho
app.get('/api/usuarios/mais-velho', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/mais-velho`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário mais velho' });
  }
});

// Proxy para a API - Agrupamento por cidade
app.get('/api/usuarios/por-cidade', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/por-cidade`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao agrupar por cidade' });
  }
});

// Proxy para a API - Ordenados por idade
app.get('/api/usuarios/ordenados', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/ordenados`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ordenar usuários' });
  }
});

// Proxy para a API - Estatísticas
app.get('/api/usuarios/estatisticas', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/estatisticas`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar estatísticas' });
  }
});

// Proxy para a API - Buscar por ID
app.get('/api/usuarios/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/usuarios/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Proxy POST - Crear usuário
app.post('/api/usuarios', async (req, res) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuarios`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
});

app.listen(3001, () => {
  console.log('Servidor Web rodando na porta 3001');
  console.log('Acesse: http://localhost:3001');
});
