
import React from 'react';
import type { Page } from '../types';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <div className="relative h-[calc(100vh-68px)]">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{backgroundImage: "url('https://picsum.photos/1600/900?image=225')"}}
            ></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center h-full z-20 fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                    Ekonomi Kreatif RPL
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                    Nikmati jastip makan siang dan gorengan setiap pagi!.
                </p>
                <button
                    onClick={() => setCurrentPage('menu')}
                    className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Lihat Menu Kami
                </button>
            </div>
        </div>
    );
};

export default HomePage;
