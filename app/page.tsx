import Header from '@/components/Header';
import HomePage from '@/components/HomePage';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
    </div>
  );
}
