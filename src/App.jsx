import { useState } from 'react'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Calculators from './pages/Calculators'

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard onNavigate={setActivePage} />;
      case 'transactions':
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Transações</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
              <p className="text-slate-500 text-lg">Módulo de transações em breve.</p>
            </div>
          </div>
        );
      case 'calculators':
        return <Calculators />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderContent()}
    </Layout>
  )
}

export default App
