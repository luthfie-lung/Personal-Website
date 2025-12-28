# Luthfie Lung - Personal Blog

Sebuah website blogging profesional yang dibangun dengan teknologi modern, menampilkan desain minimalis yang elegan dengan tema hitam-putih.

## Fitur Utama

**Desain Modern Minimalist** – Website menggunakan filosofi desain Swiss Design dengan palet warna monokromatik (hitam, putih, abu-abu), menciptakan tampilan yang profesional dan timeless.

**Tipografi Premium** – Menggunakan Poppins untuk heading (bold dan impactful) dan Inter untuk body text (readable dan clean), menciptakan hierarki visual yang jelas.

**Blog Dinamis** – Halaman blog dengan daftar artikel, filter kategori, dan metadata lengkap (tanggal publikasi, waktu baca, tags).

**Artikel Lengkap** – Halaman detail artikel dengan konten yang dirender dari Markdown, artikel terkait, dan navigasi intuitif.

**Profil Profesional** – Halaman About yang menampilkan bio, skills, pengalaman, dan kontak langsung.

**Animasi Smooth** – Menggunakan Framer Motion untuk entrance animations, hover effects, dan page transitions yang memberikan pengalaman pengguna yang polished.

**Responsive Design** – Website fully responsive dan optimal di semua ukuran layar (mobile, tablet, desktop).

## Teknologi yang Digunakan

- **React 19** – Library JavaScript untuk membangun UI yang interaktif
- **TypeScript** – Type safety dan development experience yang lebih baik
- **Tailwind CSS 4** – Utility-first CSS framework untuk styling yang konsisten
- **Framer Motion** – Library animasi untuk micro-interactions dan transitions
- **Wouter** – Client-side routing yang lightweight
- **Streamdown** – Rendering Markdown untuk konten artikel
- **Lucide React** – Icon library yang modern dan minimalis

## Struktur Proyek

```
personal-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/           # Halaman utama (Home, BlogPost, About)
│   │   ├── lib/
│   │   │   └── blog-data.ts # Data artikel blog
│   │   ├── App.tsx          # Routing dan layout utama
│   │   └── index.css        # Global styles dan design tokens
│   └── index.html           # HTML entry point
├── ideas.md                 # Design philosophy dan brainstorming
└── README.md               # Dokumentasi ini
```

## Halaman-Halaman

### Home (`/`)
Halaman utama yang menampilkan daftar semua artikel blog dengan fitur filter kategori. Setiap artikel ditampilkan dalam card yang stylish dengan informasi kategori, judul, excerpt, tags, tanggal publikasi, dan waktu baca.

### Blog Post (`/:slug`)
Halaman detail artikel yang menampilkan konten lengkap artikel yang dirender dari Markdown. Termasuk metadata artikel, artikel terkait di kategori yang sama, dan navigasi back ke blog.

### About (`/about`)
Halaman profil yang menampilkan bio penulis, skills dan expertise, pengalaman kerja, dan tombol kontak (email, GitHub, LinkedIn).

## Desain dan Styling

### Palet Warna

| Elemen | Warna | Hex |
| --- | --- | --- |
| Background | Putih Bersih | #FFFFFF |
| Text Primary | Hitam Pekat | #1A1A1A |
| Text Secondary | Abu-abu Gelap | #404040 |
| Border | Abu-abu Terang | #E5E5E5 |
| Card Background | Off-white | #FAFAFA |
| Accent (Button) | Hitam | #1A1A1A |

### Tipografi

- **Display Font**: Poppins (600-800 weight) untuk H1, H2, H3
  - H1: 48px, line-height 1.2
  - H2: 32px, line-height 1.3
  - H3: 24px, line-height 1.4

- **Body Font**: Inter (400-500 weight) untuk paragraf dan konten
  - Body: 16px, line-height 1.6
  - Small: 14px, line-height 1.5

### Animasi

- **Entrance**: Fade-in + slide-up untuk artikel (staggered 50ms)
- **Hover**: Subtle lift dan border highlight pada card
- **Link**: Underline yang tumbuh dari kiri ke kanan (300ms)
- **Page Transition**: Fade-out/fade-in saat navigasi (150ms)

## Cara Menjalankan

### Development

```bash
# Install dependencies
pnpm install

# Jalankan dev server
pnpm dev

# Server akan berjalan di http://localhost:3000
```

### Build untuk Production

```bash
# Build aplikasi
pnpm build

# Preview build
pnpm preview
```

## Menambah Artikel Baru

Artikel disimpan dalam file `client/src/lib/blog-data.ts`. Untuk menambah artikel baru:

1. Buka file `blog-data.ts`
2. Tambahkan object baru ke array `blogPosts` dengan struktur:

```typescript
{
  id: "4",
  slug: "judul-artikel-slug",
  title: "Judul Artikel",
  excerpt: "Ringkasan singkat artikel...",
  content: "# Konten Markdown Lengkap...",
  date: "2025-12-28",
  category: "Kategori",
  readTime: 5,
  tags: ["tag1", "tag2"],
}
```

3. Artikel akan otomatis muncul di halaman blog

## Kustomisasi

### Mengubah Warna

Edit file `client/src/index.css` di bagian `:root` untuk mengubah palet warna global.

### Mengubah Tipografi

Edit file `client/src/index.css` di bagian `@layer base` untuk mengubah font families dan sizes.

### Menambah Halaman Baru

1. Buat file baru di `client/src/pages/`
2. Tambahkan route di `client/src/App.tsx`
3. Update navigation di header

## Fitur Dark Mode

Website mendukung dark mode. Untuk mengaktifkan:

1. Ubah `defaultTheme="light"` menjadi `defaultTheme="dark"` di `client/src/App.tsx`
2. Atau tambahkan `switchable` prop ke `ThemeProvider` untuk toggle button

## Kontribusi

Silakan fork repository ini dan submit pull requests untuk improvements!

## Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

## Kontak

- Email: calungyourbae@gmail.com
- GitHub: https://github.com/luthfie-lung
- Website: https://github.com/luthfie-lung/Personal-Website

---

Dibangun dengan ❤️ menggunakan React, TypeScript, dan Tailwind CSS.
