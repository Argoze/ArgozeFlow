import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const Layout = ({ children, activePage, onNavigate }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                activePage={activePage}
                onNavigate={onNavigate}
            />

            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile Header */}
                <header className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-white text-lg">A</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-100">ArgozeFlow</h1>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-slate-400 p-2 hover:bg-slate-800 rounded-lg active:bg-slate-700 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
