import React, { useState, useEffect } from 'react';
import { PieChart, TrendingUp, Heart, ShoppingCart } from 'lucide-react';

const Rule503020 = () => {
    const [income, setIncome] = useState('');
    const [needs, setNeeds] = useState(0);
    const [wants, setWants] = useState(0);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        const value = parseFloat(income.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        setNeeds(value * 0.5);
        setWants(value * 0.3);
        setSavings(value * 0.2);
    }, [income]); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    const handleIncomeChange = (e) => {
        setIncome(e.target.value);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <PieChart size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">Regra 50-30-20</h3>
                    <p className="text-slate-500 text-sm">Distribua sua renda de forma inteligente.</p>
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">Qual é a sua Renda Mensal Líquida?</label>
                <div className="relative max-w-md">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                    <input
                        type="number"
                        value={income}
                        onChange={handleIncomeChange}
                        placeholder="0,00"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold text-slate-900 transition-all placeholder:text-slate-300"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Needs (50%) */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShoppingCart size={48} className="text-blue-600" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-blue-600 font-bold mb-2">
                            <span className="bg-blue-100 px-2 py-0.5 rounded text-xs">50%</span>
                            <span>Necessidades</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{formatCurrency(needs)}</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            Aluguel, contas, alimentação básica, transporte. O essencial para viver.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
                </div>

                {/* Wants (30%) */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative overflow-hidden group hover:border-purple-200 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Heart size={48} className="text-purple-600" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-purple-600 font-bold mb-2">
                            <span className="bg-purple-100 px-2 py-0.5 rounded text-xs">30%</span>
                            <span>Desejos</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{formatCurrency(wants)}</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            Lazer, jantar fora, hobbies, assinaturas. O que traz felicidade mas não é vital.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"></div>
                </div>

                {/* Savings (20%) */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 relative overflow-hidden group hover:border-green-200 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={48} className="text-green-600" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-green-600 font-bold mb-2">
                            <span className="bg-green-100 px-2 py-0.5 rounded text-xs">20%</span>
                            <span>Investimentos</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-800">{formatCurrency(savings)}</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            Reserva de emergência, aposentadoria, pagamento de dívidas. O seu futuro.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600"></div>
                </div>
            </div>
        </div>
    );
};

export default Rule503020;
