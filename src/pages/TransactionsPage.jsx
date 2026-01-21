import React from 'react';
import { Trash2, ArrowUpCircle, ArrowDownCircle, Search } from 'lucide-react';
import { useTransactions } from '../context/TransactionContext';

const TransactionsPage = () => {
    const { transactions, deleteTransaction } = useTransactions();

    const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-100">Transações</h2>
                    <p className="text-slate-400">Gerencie histórico de entradas e saídas.</p>
                </div>
                {/* Search mockup - functional in future */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar transação..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                </div>
            </div>

            <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-slate-950/30">
                                <th className="p-4 text-sm font-semibold text-slate-400">Data</th>
                                <th className="p-4 text-sm font-semibold text-slate-400">Descrição</th>
                                <th className="p-4 text-sm font-semibold text-slate-400">Categoria</th>
                                <th className="p-4 text-sm font-semibold text-slate-400 text-right">Valor</th>
                                <th className="p-4 text-sm font-semibold text-slate-400 text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {transactions.length > 0 ? (
                                transactions.map(t => (
                                    <tr key={t.id} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="p-4 text-slate-400 text-sm font-mono">{t.date}</td>
                                        <td className="p-4 text-slate-200 font-medium">
                                            <div className="flex items-center space-x-3">
                                                <div className={`p-2 rounded-lg ${t.type === 'income' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                    {t.type === 'income' ? <ArrowUpCircle size={16} /> : <ArrowDownCircle size={16} />}
                                                </div>
                                                <span>{t.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-400 text-sm capitalize">{t.category}</td>
                                        <td className={`p-4 text-right font-bold ${t.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                                            {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
                                        </td>
                                        <td className="p-4 text-center">
                                            <button
                                                onClick={() => deleteTransaction(t.id)}
                                                className="text-slate-600 hover:text-red-500 p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                                                title="Excluir"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-12 text-center text-slate-500">
                                        Nenhuma transação encontrada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionsPage;
