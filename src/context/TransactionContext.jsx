import React, { createContext, useContext, useState, useEffect } from 'react';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'http://localhost:3000/api/transactions';

    // Fetch transactions on mount
    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Falha ao buscar transações');
            const data = await response.json();
            // Converter strings de data se necessário ou garantir formato
            setTransactions(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTransaction = async (transaction) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(transaction)
            });

            if (!response.ok) throw new Error('Erro ao salvar transação');

            const newTransaction = await response.json();
            setTransactions(prev => [newTransaction, ...prev]);
            return true;
        } catch (err) {
            console.error(err);
            setError(err.message);
            return false;
        }
    };

    const deleteTransaction = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Erro ao deletar');

            setTransactions(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    const getSummary = () => {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + parseFloat(t.amount || 0), 0);

        const expense = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + parseFloat(t.amount || 0), 0);

        const balance = income - expense;

        return { income, expense, balance };
    };

    return (
        <TransactionContext.Provider value={{
            transactions,
            loading,
            error,
            addTransaction,
            deleteTransaction,
            getSummary
        }}>
            {children}
        </TransactionContext.Provider>
    );
};
