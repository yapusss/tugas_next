# Alur Data dan Arsitektur Aplikasi Next.js

## 📋 Ringkasan Aplikasi
Aplikasi ini adalah website profil perusahaan kuliner yang dibangun dengan **Next.js 14** menggunakan **App Router**. Aplikasi menampilkan informasi tentang bisnis rice bowl dan cemilan dengan navigasi antar halaman.

## 🏗️ Struktur Arsitektur

### 1. **Next.js App Router Structure**
```
app/
├── layout.tsx          # Root layout (HTML structure, metadata)
├── page.tsx           # Homepage (/)
├── menu/
│   └── page.tsx       # Menu page (/menu)
└── profile/
    └── page.tsx       # Profile page (/profile)

components/
├── Header.tsx         # Navigation component
├── HomePage.tsx       # Homepage content
├── MenuPage.tsx       # Menu content
└── ProfilePage.tsx    # Profile content
```

## 🔄 Alur Data dan State Management

### 1. **Tidak Ada Global State Management**
- Aplikasi ini **TIDAK menggunakan** Redux, Zustand, atau Context API
- Setiap halaman adalah **server component** (kecuali yang menggunakan hooks)
- Data bersifat **statis** dan didefinisikan langsung di komponen

### 2. **Props Flow**
```
app/layout.tsx
├── children (ReactNode) → diteruskan ke setiap page
│
app/page.tsx (Homepage)
├── Header (tanpa props)
└── HomePage (tanpa props)

app/menu/page.tsx
├── Header (tanpa props)
└── MenuPage (tanpa props)

app/profile/page.tsx
├── Header (tanpa props)
└── ProfilePage (tanpa props)
```

### 3. **Client vs Server Components**

#### **Server Components** (Default):
- `app/layout.tsx`
- `app/page.tsx`
- `app/menu/page.tsx`
- `app/profile/page.tsx`
- `components/MenuPage.tsx`
- `components/ProfilePage.tsx`

#### **Client Components** (Menggunakan "use client"):
- `components/Header.tsx` - menggunakan `usePathname()` hook
- `components/HomePage.tsx` - menggunakan `Link` component

## 🚀 Alur Eksekusi Program

### 1. **Startup Sequence**
```
1. Next.js server start
2. app/layout.tsx di-render pertama kali
   ├── Set HTML structure
   ├── Load Tailwind CSS dari CDN
   └── Render children
3. Routing berdasarkan URL:
   ├── / → app/page.tsx
   ├── /menu → app/menu/page.tsx
   └── /profile → app/profile/page.tsx
```

### 2. **Halaman Pertama yang Diakses**
**URL: `/` (Homepage)**
```
app/page.tsx
├── Import Header component
├── Import HomePage component
├── Render Header (client component)
│   ├── usePathname() hook aktif
│   ├── Tentukan active navigation
│   └── Render navigation links
└── Render HomePage (client component)
    ├── Hero section dengan background image
    ├── Call-to-action button
    └── Link ke /menu
```

### 3. **Interaksi Pengguna**

#### **A. Navigasi (Header.tsx)**
```typescript
// Client component menggunakan Next.js routing
const pathname = usePathname();
const isActive = (href: string) => 
  pathname === href ? 'active-classes' : 'inactive-classes';

// Link components untuk navigasi
<Link href="/">Beranda</Link>
<Link href="/menu">Menu</Link>
<Link href="/profile">Profil</Link>
```

#### **B. Call-to-Action (HomePage.tsx)**
```typescript
// Button yang mengarah ke halaman menu
<Link href="/menu" className="cta-button">
  Lihat Menu Kami
</Link>
```

## 📊 Penyajian Data kepada User

### 1. **Data Menu (MenuPage.tsx)**
```typescript
// Data statis didefinisikan dalam komponen
const riceBowls = [
  {
    imgSrc: 'https://picsum.photos/400/300?image=660',
    name: 'Chicken Teriyaki Bowl',
    description: 'Ayam panggang dengan saus teriyaki...',
    price: 'Rp 35.000'
  },
  // ... data lainnya
];

// Render menggunakan map
{riceBowls.map(item => <MenuItem key={item.name} {...item} />)}
```

### 2. **Data Profil Perusahaan (ProfilePage.tsx)**
```typescript
// Konten statis untuk visi, misi, dan informasi perusahaan
<div>
  <h3>Visi Kami</h3>
  <p>Menjadi pilihan utama bagi pecinta kuliner...</p>
</div>
```

### 3. **Data Hero Section (HomePage.tsx)**
```typescript
// Background image dan konten hero
<div 
  className="absolute inset-0 bg-cover bg-center z-0" 
  style={{backgroundImage: "url('https://picsum.photos/1600/900?image=225')"}}
></div>
```

## 🔧 Teknologi dan Dependencies

### **Core Dependencies:**
- `next: ^14.2.13` - Framework React
- `react: ^18.2.0` - UI library
- `react-dom: ^18.2.0` - DOM rendering

### **Styling:**
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- Custom CSS animations (fade-in effect)

### **Routing:**
- **Next.js App Router** - File-based routing
- `next/link` - Client-side navigation
- `next/navigation` - Navigation hooks

## 🎯 Keunggulan Arsitektur Ini

### **1. Performance:**
- Server-side rendering untuk SEO
- Client-side navigation yang cepat
- Code splitting otomatis

### **2. Developer Experience:**
- TypeScript support penuh
- Hot reload development
- File-based routing yang intuitif

### **3. Scalability:**
- Mudah menambah halaman baru
- Komponen yang reusable
- Separation of concerns yang jelas

## 🔄 Flow Diagram

```
User Request → Next.js Router → App Layout → Page Component
     ↓
Server/Client Component Rendering
     ↓
Data Static (dalam komponen) → Render ke DOM
     ↓
User Interaction (Link, Navigation)
     ↓
Client-side Routing → New Page Component
```

## 📝 Kesimpulan

Aplikasi ini menggunakan arsitektur **Next.js App Router** yang modern dengan:
- **Statis data management** (tidak ada state management library)
- **Server-first approach** dengan client components untuk interaktivitas
- **File-based routing** yang mudah dipahami
- **Component composition** yang clean dan maintainable

Alur data sederhana: **Data statis → Komponen → DOM → User interaction → Navigation → Repeat**
