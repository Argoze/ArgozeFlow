import React from 'react';
import { X } from 'lucide-react';

const TransactionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in">
            <div
                className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Nova Transação</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Valor</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                            <input
                                type="text"
                                placeholder="0,00"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold text-slate-900 transition-all placeholder:text-slate-300"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Descrição</label>
                        <input
                            type="text"
                            placeholder="Ex: Supermercado"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-300"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 font-medium transition-all focus:ring-2 focus:ring-slate-200">
                            Receita
                        </button>
                        <button type="button" className="py-3 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 font-medium transition-all transform active:scale-95 focus:ring-2 focus:ring-slate-700 focus:ring-offset-2">
                            Despesa
                        </button>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform active:scale-95 mt-2">
                        Salvar Transação
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TransactionModal;
