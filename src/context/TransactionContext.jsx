import React, { createContext, useContext, useState, useEffect } from 'react';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('argozeflow_transactions');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('argozeflow_transactions', JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        const newTransaction = {
            id: Date.now(),
            date: new Date().toLocaleDateString('pt-BR'),
            ...transaction
        };
        setTransactions([newTransaction, ...transactions]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    const getSummary = () => {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + parseFloat(t.amount), 0);

        const expense = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + parseFloat(t.amount), 0);

        const balance = income - expense;

        return { income, expense, balance };
    };

    return (
        <TransactionContext.Provider value={{
            transactions,
            addTransaction,
            deleteTransaction,
            getSummary
        }}>
            {children}
        </TransactionContext.Provider>
    );
};
