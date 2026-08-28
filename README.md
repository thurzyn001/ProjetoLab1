# Projeto LAB III - Sistema de Usuários

Projeto dividido em duas partes: **API** (backend) e **Web** (frontend).

## 📁 Estrutura

```
projetoLab/
├── api/                    # Backend - Servidor Express com API REST
│   ├── app.js
│   ├── package.json
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── services/
│   └── data/
│
└── web/                    # Frontend - Consumidor da API
    ├── server.js
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    └── .gitignore
```

## 🚀 Instalação e Execução

### 1️⃣ Instalar dependências da API

```bash
cd api
npm install
```

### 2️⃣ Instalar dependências do Web

```bash
cd web
npm install
```

### 3️⃣ Rodar a API (Terminal 1)

```bash
cd api
npm start
```

A API estará disponível em: **http://localhost:3000**

### 4️⃣ Rodar o Frontend (Terminal 2)

```bash
cd web
npm start
```

O frontend estará disponível em: **http://localhost:3001**

## 🎯 Endpoints da API

### Exercício 1 - Contar usuários
```
GET /usuarios/total
```
Retorna: `{ "total": 4 }`

### Exercício 2 - Filtrar maiores de idade
```
GET /usuarios/maiores
```
Retorna lista de usuários com idade >= 18

### Exercício 3 - Buscar por cidade
```
GET /usuarios/cidade/:cidade
```
Exemplo: `/usuarios/cidade/Lages`

### Exercício 4 - Calcular média de idade
```
GET /usuarios/media-idade
```
Retorna: `{ "media": 24.5 }`

### Exercício 5 - Encontrar o usuário mais velho
```
GET /usuarios/mais-velho
```
Retorna: `{ "nome": "Carlos", "idade": 30 }`

### Exercício 6 - Agrupar por cidade
```
GET /usuarios/por-cidade
```
Retorna contagem de usuários por cidade

### Exercício 7 - Ordenar por idade
```
GET /usuarios/ordenados
```
Retorna lista ordenada crescente por idade

### Exercício 8 - Estatísticas completas
```
GET /usuarios/estatisticas
```
Retorna `{ total, mediaIdade, maisVelho, maisNovo }`

## 📝 Endpoints Adicionais

### Listar todos os usuários
```
GET /usuarios
```

### Buscar usuário por ID
```
GET /usuarios/:id
```

### Criar novo usuário
```
POST /usuarios
Content-Type: application/json

{
  "nome": "João",
  "idade": 25,
  "cidade": "São Paulo"
}
```

## 💡 Como usar o Frontend

1. Acesse http://localhost:3001
2. Clique nos botões para testar cada endpoint
3. O resultado será exibido no textarea
4. Adicione novos usuários usando o formulário
5. Busque usuários por ID ou cidade

## 🔗 Arquitetura

```
Frontend (web:3001)
      ↓
  server.js (proxy com axios)
      ↓
  Backend API (api:3000)
      ↓
  Controllers → Services → Data
```

O frontend faz requisições HTTP para o servidor `web`, que atua como proxy e encaminha para a API no backend.

## 📦 Dependências

### API
- express: ^5.2.1

### Web
- express: ^5.2.1
- axios: ^1.6.2

## 🛠️ Scripts disponíveis

### API
```bash
npm start    # Inicia o servidor na porta 3000
npm run dev  # Mesmo que start
```

### Web
```bash
npm start    # Inicia o servidor na porta 3001
npm run dev  # Mesmo que start
```

## ✅ Checklist de Testes

- [ ] API iniciada na porta 3000
- [ ] Web iniciada na porta 3001
- [ ] Botão "Total de Usuários" retorna 4
- [ ] Botão "Maiores de 18" mostra 4 usuários
- [ ] Buscar "Lages" mostra Ana e Maria
- [ ] Média de idade é 24.5
- [ ] Usuário mais velho é Carlos (30 anos)
- [ ] Agrupamento por cidade correto
- [ ] Lista ordenada crescente
- [ ] Estatísticas completas aparecem corretamente
- [ ] Adicionar novo usuário funciona

## 📧 Suporte

Este projeto foi desenvolvido para fins educacionais do LAB III.
