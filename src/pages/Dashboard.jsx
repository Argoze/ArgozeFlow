import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTransactions } from '../context/TransactionContext'; // Import Hook
import SummaryCard from '../components/dashboard/SummaryCard';
import RecentActivity from '../components/dashboard/RecentActivity';
import TransactionModal from '../components/dashboard/TransactionModal';

const Dashboard = ({ onNavigate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { getSummary } = useTransactions();
    const { income, expense, balance } = getSummary();

    const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-100">Visão Geral</h2>
                    <p className="text-slate-400">Bem-vindo de volta, aqui estão suas finanças.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/30 hover:bg-blue-500 transition-all hover:-translate-y-0.5 active:scale-95 border border-blue-500/50"
                >
                    <Plus size={20} className="mr-2" />
                    Nova Transação
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Saldo Total" value={formatCurrency(balance)} type="balance" />
                <SummaryCard title="Receitas do Mês" value={formatCurrency(income)} type="income" />
                <SummaryCard title="Despesas do Mês" value={formatCurrency(expense)} type="expense" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RecentActivity />
                </div>

                {/* Side Widget / Promo */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-2 text-white">Dica Financeira</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Mantenha suas despesas fixas abaixo de 50% da sua renda. Confira nossa calculadora para otimizar seu orçamento.
                        </p>
                        <button
                            onClick={() => onNavigate('calculators')}
                            className="text-sm font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-block backdrop-blur-sm border border-white/10 text-slate-200"
                        >
                            Ir para Calculadoras &rarr;
                        </button>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                </div>
            </div>

            <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Dashboard;
