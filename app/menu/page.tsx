import Header from '@/components/Header';
import MenuPage from '@/components/MenuPage';

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <MenuPage />
      </main>
    </div>
  );
}


