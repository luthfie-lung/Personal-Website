export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "memulai-perjalanan-blogging",
    title: "Memulai Perjalanan Blogging",
    excerpt: "Panduan lengkap untuk memulai blog pribadi dan berbagi pengetahuan dengan dunia.",
    content: `# Memulai Perjalanan Blogging

Blogging adalah cara yang luar biasa untuk berbagi pengetahuan, pengalaman, dan ide dengan audiens global. Dalam artikel ini, saya akan membagikan panduan lengkap tentang cara memulai perjalanan blogging Anda.

## Mengapa Memulai Blog?

Ada banyak alasan untuk memulai blog. Beberapa di antaranya adalah:

- **Berbagi Pengetahuan**: Bagikan keahlian dan pengalaman Anda dengan orang lain.
- **Membangun Personal Brand**: Tingkatkan visibilitas dan reputasi profesional Anda.
- **Mengasah Keterampilan Menulis**: Praktik menulis secara teratur untuk meningkatkan kemampuan komunikasi.
- **Membangun Komunitas**: Terhubung dengan orang-orang yang memiliki minat yang sama.

## Langkah-Langkah Memulai

### 1. Pilih Niche Anda
Tentukan topik yang ingin Anda tulis. Pilih sesuatu yang Anda kuasai dan passionate tentangnya.

### 2. Pilih Platform
Ada banyak platform blogging tersedia seperti WordPress, Medium, Hashnode, dan lainnya.

### 3. Buat Konten Berkualitas
Fokus pada pembuatan konten yang bermanfaat, informatif, dan menarik bagi audiens Anda.

### 4. Konsistensi adalah Kunci
Posting secara teratur untuk membangun audiens yang loyal.

## Kesimpulan

Memulai blog adalah investasi yang baik untuk masa depan Anda. Dengan konsistensi dan dedikasi, Anda dapat membangun blog yang sukses dan berpengaruh.`,
    date: "2025-12-28",
    category: "Blogging",
    readTime: 5,
    tags: ["blogging", "tips", "pemula"],
  },
  {
    id: "2",
    slug: "desain-web-modern-minimalist",
    title: "Desain Web Modern Minimalist",
    excerpt: "Eksplorasi prinsip-prinsip desain minimalist dan bagaimana menerapkannya dalam web development.",
    content: `# Desain Web Modern Minimalist

Desain minimalist telah menjadi tren dominan dalam web development modern. Filosofi "less is more" menghasilkan antarmuka yang bersih, fokus, dan user-friendly.

## Prinsip-Prinsip Desain Minimalist

### 1. Whitespace (Ruang Kosong)
Ruang kosong bukan hanya "kosong", tetapi elemen desain yang penting. Whitespace membantu mengarahkan perhatian pengguna ke elemen yang penting.

### 2. Tipografi yang Kuat
Gunakan tipografi yang jelas dan hierarki yang baik untuk memandu pembaca melalui konten.

### 3. Palet Warna Terbatas
Batasi palet warna Anda untuk menciptakan kohesi visual. Monokromatik atau dua warna yang komplementer sering bekerja dengan baik.

### 4. Fokus pada Konten
Desain harus mendukung konten, bukan mengganggu. Elemen visual harus memiliki tujuan.

## Manfaat Desain Minimalist

- **Kecepatan Loading**: Desain yang sederhana berarti file yang lebih kecil dan loading yang lebih cepat.
- **Aksesibilitas**: Antarmuka yang bersih lebih mudah dinavigasi untuk semua pengguna.
- **Profesionalisme**: Desain minimalist terlihat modern dan profesional.
- **Fokus Pengguna**: Mengurangi distraksi membantu pengguna mencapai tujuan mereka.

## Kesimpulan

Desain minimalist adalah pendekatan yang kuat untuk menciptakan antarmuka web yang efektif dan menarik. Dengan menerapkan prinsip-prinsip ini, Anda dapat menciptakan pengalaman pengguna yang superior.`,
    date: "2025-12-25",
    category: "Web Design",
    readTime: 6,
    tags: ["design", "minimalist", "web"],
  },
  {
    id: "3",
    slug: "react-hooks-panduan-lengkap",
    title: "React Hooks: Panduan Lengkap",
    excerpt: "Pelajari React Hooks dan bagaimana menggunakannya untuk membuat komponen yang lebih baik.",
    content: `# React Hooks: Panduan Lengkap

React Hooks telah merevolusi cara kita menulis komponen React. Dengan Hooks, Anda dapat menggunakan state dan fitur React lainnya tanpa menulis class components.

## Apa itu Hooks?

Hooks adalah fungsi-fungsi khusus yang memungkinkan Anda "hook into" fitur React. Mereka memungkinkan Anda menggunakan state dan lifecycle methods dalam functional components.

## Hook-Hook Penting

### useState
Hook untuk menambahkan state ke functional components.

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

### useEffect
Hook untuk melakukan side effects dalam functional components.

\`\`\`javascript
useEffect(() => {
  // Kode di sini akan dijalankan setelah render
}, [dependencies]);
\`\`\`

### useContext
Hook untuk mengakses context tanpa nesting yang dalam.

### useReducer
Hook untuk state management yang lebih kompleks.

## Best Practices

1. Hanya gunakan Hooks di level atas dari komponen Anda.
2. Jangan gunakan Hooks dalam loops, conditions, atau nested functions.
3. Gunakan ESLint plugin untuk membantu mendeteksi pelanggaran aturan Hooks.

## Kesimpulan

React Hooks adalah alat yang powerful untuk menulis komponen React yang lebih clean dan maintainable. Dengan memahami dan menggunakan Hooks dengan baik, Anda dapat meningkatkan kualitas kode React Anda.`,
    date: "2025-12-20",
    category: "React",
    readTime: 7,
    tags: ["react", "javascript", "hooks"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
}
