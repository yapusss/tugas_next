
import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ProfilePage from './components/ProfilePage';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'profile':
        return <ProfilePage />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
