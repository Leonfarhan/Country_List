# Country List

Aplikasi **Country List** adalah aplikasi web yang memungkinkan pengguna menampilkan daftar negara, 
melihat detail tiap negara, dan membuat permintaan kemitraan dengan negara-negara tersebut. 
Dibangun dengan teknologi modern seperti **React**, **TypeScript**, dan **Tailwind CSS**, 
aplikasi ini memanfaatkan **REST Countries API** sebagai sumber data. 
Aplikasi ini sudah dideploy dan dapat diakses di [https://country-list-grosirone.vercel.app/](https://country-list-grosirone.vercel.app/).

---

## ✨ Fitur

### 1. **Country List**
- Menampilkan daftar semua negara lengkap dengan bendera dan nama.
- Fitur pencarian negara berdasarkan nama untuk memudahkan pengguna.

### 2. **Country Details**
- Informasi detail mencakup:
  - **Region**
  - **Ibu kota**
  - **Populasi**
  - **Bahasa**
  - **Mata uang**
  - **Status kemerdekaan**
  - Link ke Google Maps untuk lokasi negara.

### 3. **Partnership Requests**
- Pengguna dapat mengajukan permintaan kemitraan dengan negara tertentu.
- Setiap permintaan akan disetujui atau ditolak secara acak (simulasi).

### 4. **Partnership Management**
- Menampilkan daftar negara yang telah menjalin kemitraan dengan pengguna.
- Pengguna dapat menghapus kemitraan yang ada sesuai kebutuhan.

---

## 🚀 Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **React Router**: Mengatur navigasi dan routing halaman.
- **TypeScript**: Superset JavaScript dengan pengetikan statis untuk kode yang lebih aman.
- **Tailwind CSS**: Framework CSS berbasis utility-first untuk styling.
- **Lucide React**: Library ikon yang ringan dan fleksibel.
- **Axios**: HTTP client berbasis promise untuk mengambil data dari REST Countries API.
- **Vite**: Build tool cepat untuk pengembangan aplikasi modern.
- **REST Countries API**: Sumber data negara secara lengkap.
- **Context API**: Untuk manajemen state kemitraan di aplikasi.

---

## ⚙️ Cara Menjalankan Proyek Secara Lokal

1. **Clone repository**
```bash
git clone https://github.com/Leonfarhan/country_list_grosirone.git
```

2. **Masuk ke direktori proyek dan install dependencies**
```bash
cd assignment-grosirone  
npm install  
```

3. **Jalankan server pengembangan**
```bash
npm run dev  
```

4. **Akses aplikasi di browser**  
   Secara default, aplikasi akan berjalan di [http://localhost:5173](http://localhost:5173).

---

## 📁 Struktur Proyek

```plaintext
├── public/             # Aset statis  
├── src/                # Kode sumber aplikasi  
│   ├── App.tsx         # Komponen utama aplikasi  
│   ├── components/     # Komponen yang dapat digunakan kembali  
│   ├── context/        # Context API untuk manajemen state  
│   ├── pages/          # Komponen halaman  
│   └── types/          # Definisi tipe data  
├── .gitignore          # Daftar file yang diabaikan Git  
├── eslint.config.js    # Konfigurasi ESLint  
├── index.html          # HTML utama aplikasi  
├── package-lock.json   # Lock file untuk npm dependencies  
├── package.json        # Konfigurasi proyek  
├── postcss.config.js   # Konfigurasi PostCSS  
├── tailwind.config.js  # Konfigurasi Tailwind CSS  
├── tsconfig.app.json   # Konfigurasi TypeScript untuk aplikasi  
├── tsconfig.json       # Konfigurasi TypeScript utama  
├── tsconfig.node.json  # Konfigurasi TypeScript untuk Node.js  
└── vite.config.ts      # Konfigurasi Vite  
```

---

## 🌐 Demo
Aplikasi ini sudah dapat diakses di [https://country-list-grosirone.vercel.app/](https://country-list-grosirone.vercel.app/).

---
