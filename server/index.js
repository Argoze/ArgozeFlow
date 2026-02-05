const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'ArgozeFlow API running 🚀' });
});

// --- API Routes ---

// Listar todas as transações
app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Erro ao buscar transações' });
    }
});

// Criar nova transação
app.post('/api/transactions', async (req, res) => {
    try {
        const { title, amount, type, category, date } = req.body;

        const transaction = await prisma.transaction.create({
            data: {
                title,
                amount: parseFloat(amount),
                type,
                category,
                date: date || new Date().toLocaleDateString('pt-BR')
            }
        });

        res.status(201).json(transaction);
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Erro ao criar transação' });
    }
});

// Deletar transação
app.delete('/api/transactions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.transaction.delete({
            where: { id }
        });
        res.json({ message: 'Transação removida com sucesso' });
    } catch (error) {
        console.error('Error deleting transaction:', error);
        res.status(500).json({ error: 'Erro ao deletar transação' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
