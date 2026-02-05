# ArgozeFlow 🌊

**ArgozeFlow** é um ecossistema de finanças pessoais Full Stack, projetado para oferecer controle financeiro robusto com uma interface moderna e responsiva.

Evoluímos de um dashboard estático para uma aplicação completa com **Backend Node.js** e **Banco de Dados SQL** na nuvem.

## 🚀 Tecnologias (Stack)

### Frontend
- **React** (Vite): Interface rápida e reativa.
- **Tailwind CSS** (v4): Design System moderno com tema Dark Premium.
- **Lucide React**: Ícones consistentes.
- **Context API**: Gerenciamento de estado global.

### Backend
- **Node.js + Express**: API RESTful robusta.
- **Prisma ORM**: Gerenciamento de banco de dados e Type Safety.
- **PostgreSQL (Supabase)**: Banco de dados relacional na nuvem.

---

## 🛠️ Funcionalidades

- **Dashboard Conectado**: Saldo, Receitas e Despesas calculados em tempo real via API.
- **Gestão de Transações**: Adicione e remova transações com persistência em banco de dados.
- **Calculadora Financeira**: Ferramenta interativa da Regra 50-30-20.
- **Histórico**: Página dedicada para visualização e gerenciamento de lançamentos.
- **Full Stack**: Dados persistem na nuvem (Supabase), acessíveis de qualquer dispositivo.

---

## 📦 Como Executar Localmente

Este projeto é dividido em `Frontend` (raiz) e `Backend` (pasta `/server`). Você precisará de dois terminais.

### Pré-requisitos
- Node.js instalado.
- Conta no [Supabase](https://supabase.com/).

### 1. Configurando o Backend

1. Entre na pasta do servidor:
   ```bash
   cd server
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na pasta `server` com sua credencial do Supabase:
   ```env
   PORT=3000
   DATABASE_URL="postgresql://usuario:senha@host:port/database"
   ```
4. Sincronize o banco de dados:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Inicie o servidor:
   ```bash
   node index.js
   ```
   > O servidor rodará em `http://localhost:3000`

### 2. Executando o Frontend

Em um **novo terminal** na raiz do projeto:

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o app:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173`.

---

*Desenvolvido por Gustavo Argoze.*
