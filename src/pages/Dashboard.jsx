import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SummaryCard from '../components/dashboard/SummaryCard';
import RecentActivity from '../components/dashboard/RecentActivity';
import TransactionModal from '../components/dashboard/TransactionModal';

const Dashboard = ({ onNavigate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Visão Geral</h2>
                    <p className="text-slate-500">Bem-vindo de volta, aqui estão suas finanças.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:-translate-y-0.5 active:scale-95"
                >
                    <Plus size={20} className="mr-2" />
                    Nova Transação
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Saldo Total" value="R$ 12.450,00" type="balance" />
                <SummaryCard title="Receitas do Mês" value="R$ 4.200,00" type="income" />
                <SummaryCard title="Despesas do Mês" value="R$ 1.850,00" type="expense" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RecentActivity />
                </div>

                {/* Side Widget / Promo */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-2">Dica Financeira</h3>
                        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                            Mantenha suas despesas fixas abaixo de 50% da sua renda. Confira nossa calculadora para otimizar seu orçamento.
                        </p>
                        <button
                            onClick={() => onNavigate('calculators')}
                            className="text-sm font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-block backdrop-blur-sm border border-white/10"
                        >
                            Ir para Calculadoras &rarr;
                        </button>
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                </div>
            </div>

            <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Dashboard;
