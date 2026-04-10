import { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Support } from './pages/Support';
import { Donate } from './pages/Donate';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'support':
        return <Support />;
      case 'accompany':
        return <Donate />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
