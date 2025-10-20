import type { ReactNode } from 'react';

export const metadata = {
  title: 'Ekonomi Kreatif RPL',
  description: 'Website profil perusahaan sederhana untuk bisnis kuliner.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="text-gray-800 min-h-screen">{children}</body>
    </html>
  );
}


