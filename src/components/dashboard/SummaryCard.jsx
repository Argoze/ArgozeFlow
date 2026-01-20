import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

const SummaryCard = ({ title, value, type }) => {
    const getIcon = () => {
        switch (type) {
            case 'income':
                return <ArrowUpRight className="text-green-500" size={24} />;
            case 'expense':
                return <ArrowDownRight className="text-red-500" size={24} />;
            default:
                return <DollarSign className="text-blue-500" size={24} />;
        }
    };

    const getColorClass = () => {
        switch (type) {
            case 'income': return 'text-green-600';
            case 'expense': return 'text-red-600';
            default: return 'text-slate-900';
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
                <p className={`text-2xl font-bold mt-2 ${getColorClass()}`}>{value}</p>
            </div>
            <div className={`p-3 rounded-xl bg-slate-50 ${type === 'income' ? 'bg-green-50' : type === 'expense' ? 'bg-red-50' : 'bg-blue-50'}`}>
                {getIcon()}
            </div>
        </div>
    );
};

export default SummaryCard;
