import React from 'react';
import { ShoppingBag, Coffee, ArrowUpCircle } from 'lucide-react';

const ActivityItem = ({ type, title, date, amount, category }) => {
    const isExpense = type === 'expense';

    return (
        <div className="flex items-center justify-between p-4 hover:bg-slate-800/50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-slate-800">
            <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isExpense ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-green-500/10 border-green-500/20 text-green-500'}`}>
                    {category === 'shopping' ? <ShoppingBag size={20} /> :
                        category === 'food' ? <Coffee size={20} /> :
                            <ArrowUpCircle size={20} />}
                </div>
                <div>
                    <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{title}</h4>
                    <p className="text-xs text-slate-500">{date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`font-bold ${isExpense ? 'text-red-500' : 'text-green-500'}`}>
                    {isExpense ? '-' : '+'} {amount}
                </p>
                <p className="text-xs text-slate-600 group-hover:text-blue-400 transition-colors">Detalhes</p>
            </div>
        </div>
    );
};

const RecentActivity = () => {
    const activities = [
        { id: 1, type: 'expense', title: 'Supermercado Mensal', date: 'Hoje, 14:30', amount: 'R$ 450,00', category: 'shopping' },
        { id: 2, type: 'expense', title: 'Café & Lanche', date: 'Ontem, 09:15', amount: 'R$ 32,50', category: 'food' },
        { id: 3, type: 'income', title: 'Freelance Design', date: '18 Jan, 2026', amount: 'R$ 1.200,00', category: 'income' },
        { id: 4, type: 'expense', title: 'Spotify Premium', date: '15 Jan, 2026', amount: 'R$ 21,90', category: 'shopping' },
    ];

    return (
        <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-100">Atividades Recentes</h3>
                <button className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors">Ver tudo</button>
            </div>
            <div className="p-2">
                {activities.map(activity => (
                    <ActivityItem key={activity.id} {...activity} />
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
