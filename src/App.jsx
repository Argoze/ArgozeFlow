import { useState } from 'react'
import { TransactionProvider } from './context/TransactionContext'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Calculators from './pages/Calculators'
import TransactionsPage from './pages/TransactionsPage'

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard onNavigate={setActivePage} />;
      case 'transactions':
        return <TransactionsPage />;
      case 'calculators':
        return <Calculators />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <TransactionProvider>
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {renderContent()}
      </Layout>
    </TransactionProvider>
  )
}

export default App
