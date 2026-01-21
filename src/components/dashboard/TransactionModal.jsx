import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';

const TransactionModal = ({ isOpen, onClose }) => {
    const { addTransaction } = useTransactions();
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('expense'); // 'income' or 'expense'

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!amount || !description) return;

        const numericAmount = parseFloat(amount.replace(',', '.'));
        if (isNaN(numericAmount)) return;

        addTransaction({
            title: description,
            amount: numericAmount,
            type: type,
            category: type === 'expense' ? 'shopping' : 'income' // Simple category logic for now
        });

        // Reset form and close
        setAmount('');
        setDescription('');
        setType('expense');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-slate-900 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-scale-up border border-slate-800"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-100">Nova Transação</h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-300 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Valor</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">R$</span>
                            <input
                                type="number"
                                step="0.01"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0,00"
                                required
                                className="w-full pl-12 pr-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold text-slate-100 transition-all placeholder:text-slate-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Descrição</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Ex: Supermercado"
                            required
                            className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-200 transition-all placeholder:text-slate-700"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setType('income')}
                            className={`py-3 px-4 rounded-xl font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${type === 'income' ? 'bg-green-600 text-white ring-2 ring-green-500' : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800'}`}
                        >
                            Receita
                        </button>
                        <button
                            type="button"
                            onClick={() => setType('expense')}
                            className={`py-3 px-4 rounded-xl font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${type === 'expense' ? 'bg-red-600 text-white ring-2 ring-red-500' : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800'}`}
                        >
                            Despesa
                        </button>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all transform active:scale-95 mt-2 border border-blue-500/50">
                        Salvar Transação
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TransactionModal;
