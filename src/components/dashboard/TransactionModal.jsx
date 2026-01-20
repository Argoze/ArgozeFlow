import React from 'react';
import { X } from 'lucide-react';

const TransactionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Valor</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">R$</span>
                            <input
                                type="text"
                                placeholder="0,00"
                                className="w-full pl-12 pr-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold text-slate-100 transition-all placeholder:text-slate-700"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Descrição</label>
                        <input
                            type="text"
                            placeholder="Ex: Supermercado"
                            className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-200 transition-all placeholder:text-slate-700"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-600 font-medium transition-all focus:ring-2 focus:ring-slate-700">
                            Receita
                        </button>
                        <button type="button" className="py-3 px-4 rounded-xl bg-slate-100 text-slate-900 hover:bg-white shadow-lg shadow-white/5 font-medium transition-all transform active:scale-95 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                            Despesa
                        </button>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all transform active:scale-95 mt-2 border border-blue-500/50">
                        Salvar Transação
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TransactionModal;
