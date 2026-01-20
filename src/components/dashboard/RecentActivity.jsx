import React from 'react';
import { ShoppingBag, Coffee, ArrowUpCircle } from 'lucide-react';

const ActivityItem = ({ type, title, date, amount, category }) => {
    const isExpense = type === 'expense';

    return (
        <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
            <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isExpense ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {category === 'shopping' ? <ShoppingBag size={20} /> :
                        category === 'food' ? <Coffee size={20} /> :
                            <ArrowUpCircle size={20} />}
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">{title}</h4>
                    <p className="text-xs text-slate-500">{date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`font-bold ${isExpense ? 'text-red-600' : 'text-green-600'}`}>
                    {isExpense ? '-' : '+'} {amount}
                </p>
                <p className="text-xs text-slate-400 group-hover:text-blue-500 transition-colors">Detalhes</p>
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-800">Atividades Recentes</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Ver tudo</button>
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
