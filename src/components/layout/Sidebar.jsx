import React from 'react';
import { LayoutDashboard, ArrowRightLeft, Calculator, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, activePage, onNavigate }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'transactions', label: 'Transações', icon: ArrowRightLeft },
        { id: 'calculators', label: 'Calculadoras', icon: Calculator },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/50 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
        fixed top-0 left-0 z-30 h-full w-64 bg-slate-900 text-slate-50 flex flex-col
        transition-transform duration-300 ease-in-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none
      `}>
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-xl">A</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-wide">
                            ArgozeFlow
                        </h1>
                    </div>
                    <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activePage === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    onNavigate(item.id);
                                    onClose();
                                }}
                                className={`
                            flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group
                            ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                                    }
                        `}
                            >
                                <Icon
                                    size={20}
                                    className={`mr-3 transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}
                                />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        )
                    })}
                </nav>

                {/* Footer User Profile Mock */}
                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center space-x-3 px-2 py-2">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold border-2 border-slate-600">
                            US
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Usuário</p>
                            <p className="text-xs text-slate-500">Free Plan</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
