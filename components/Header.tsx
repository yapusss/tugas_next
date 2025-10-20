
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => (pathname === href ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-orange-500');
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
            <Link href="/" className="hover:text-orange-500 transition-colors">
                Ekonomi<span className="text-orange-500">Kreatif</span>
            </Link>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <Link href="/" className={`px-3 py-2 transition-colors duration-200 font-medium ${isActive('/')}`}>Beranda</Link>
          <Link href="/menu" className={`px-3 py-2 transition-colors duration-200 font-medium ${isActive('/menu')}`}>Menu</Link>
          <Link href="/profile" className={`px-3 py-2 transition-colors duration-200 font-medium ${isActive('/profile')}`}>Profil</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
