import Header from '@/components/Header';
import ProfilePage from '@/components/ProfilePage';

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <ProfilePage />
      </main>
    </div>
  );
}
