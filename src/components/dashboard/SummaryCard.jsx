import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

const SummaryCard = ({ title, value, type }) => {
    const getIcon = () => {
        switch (type) {
            case 'income':
                return <ArrowUpRight className="text-green-400" size={24} />;
            case 'expense':
                return <ArrowDownRight className="text-red-400" size={24} />;
            default:
                return <DollarSign className="text-blue-400" size={24} />;
        }
    };

    const getColorClass = () => {
        switch (type) {
            case 'income': return 'text-green-500';
            case 'expense': return 'text-red-500';
            default: return 'text-slate-100';
        }
    };

    return (
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800 flex items-start justify-between hover:border-slate-700 transition-colors">
            <div>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</p>
                <p className={`text-2xl font-bold mt-2 ${getColorClass()}`}>{value}</p>
            </div>
            <div className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50`}>
                {getIcon()}
            </div>
        </div>
    );
};

export default SummaryCard;
