import React from 'react';
import { ShoppingBag, Coffee, ArrowUpCircle, DollarSign } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';

const ActivityItem = ({ type, title, date, amount, category }) => {
    const isExpense = type === 'expense';
    const formattedAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);

    return (
        <div className="flex items-center justify-between p-4 hover:bg-slate-800/50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-slate-800">
            <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isExpense ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-green-500/10 border-green-500/20 text-green-500'}`}>
                    {isExpense ? <ShoppingBag size={20} /> : <ArrowUpCircle size={20} />}
                </div>
                <div>
                    <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{title}</h4>
                    <p className="text-xs text-slate-500">{date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`font-bold ${isExpense ? 'text-red-500' : 'text-green-500'}`}>
                    {isExpense ? '-' : '+'} {formattedAmount}
                </p>
                <p className="text-xs text-slate-600 group-hover:text-blue-400 transition-colors">Detalhes</p>
            </div>
        </div>
    );
};

const RecentActivity = () => {
    const { transactions } = useTransactions();

    // Get last 5 transactions
    const recentTransactions = transactions.slice(0, 5);

    return (
        <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-100">Atividades Recentes</h3>
                <button className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors">Ver tudo</button>
            </div>
            <div className="p-2">
                {recentTransactions.length > 0 ? (
                    recentTransactions.map(activity => (
                        <ActivityItem key={activity.id} {...activity} />
                    ))
                ) : (
                    <div className="p-8 text-center text-slate-500">
                        Nenhuma transação recente.
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentActivity;
