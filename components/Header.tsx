
import React from 'react';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
    const isActive = currentPage === page;
    const activeClasses = 'text-orange-500 border-b-2 border-orange-500';
    const inactiveClasses = 'text-gray-600 hover:text-orange-500';

    return (
        <button
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 transition-colors duration-200 font-medium ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="hover:text-orange-500 transition-colors">
                Ekonomi<span className="text-orange-500">Kreatif</span>
            </a>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Beranda</NavLink>
          <NavLink page="menu" currentPage={currentPage} setCurrentPage={setCurrentPage}>Menu</NavLink>
          <NavLink page="profile" currentPage={currentPage} setCurrentPage={setCurrentPage}>Profil</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
