# 🧩 Media Pembelajaran Interaktif: Crossword Puzzle "Peninggalan Sejarah Indonesia"

Aplikasi web edukasi interaktif berbasis *Game-Based Learning* untuk siswa **Kelas V SD/MI (Kurikulum Merdeka, Fase C)** dengan topik **"Peninggalan Sejarah Indonesia"**.

Dibangun dengan prinsip *Mobile-First* (390 x 844 px) yang nyaman digunakan di perangkat smartphone, tablet, maupun komputer (tampilan terpusat otomatis di layar desktop).

---

## ✨ Fitur Utama

- 📖 **Struktur Storyboard Lengkap (30 Halaman)**:
  - **Halaman 1–3**: Halaman Awal, Tujuan Pembelajaran, & Petunjuk Penggunaan Media.
  - **Halaman 4**: Apersepsi Interaktif (4 Cagar Budaya & Pertanyaan Pemantik).
  - **Halaman 5–8**: Materi 1–4 (Pengertian, Ciri-ciri, Jenis-jenis, & Bangunan Bersejarah).
  - **Halaman 9–10**: Latihan Singkat & Transisi Materi Bagian 1.
  - **Halaman 11–16**: Materi 5–10 (Benda Bersejarah, Tradisi/Budaya, Naskah Kuno, Masa Hindu-Buddha, Masa Islam-Kolonial, & Manfaat Mempelajari Sejarah).
  - **Halaman 17–18**: Galeri Peninggalan Sejarah (8 Modal Popup Interaktif) & Fakta Menarik.
  - **Halaman 19–20**: Mini Game: Ayo Mencocokkan! (Game Pasang Gambar & Nama) & Transisi Menuju TTS.
  - **Halaman 21–25**: Permainan Teka-Teki Silang (TTS Grid 10 Kata, Petunjuk Mendatar & Menurun, serta Cek Jawaban).
  - **Halaman 26–30**: Hasil Belajar (Kalkulasi Skor & Bintang), Refleksi Diri, Pesan Karakter, Kuis Penutup, & Penutup.
- 🎨 **Desain Duolingo-Inspired**:
  - Warna ramah anak yang hangat & ceria.
  - Tombol tactile 3D dengan efek tekan halus (*micro-animation*).
  - Tipografi Google Font *Nunito* yang mudah dibaca siswa SD.
- 🔊 **Synthesized Web Audio API**:
  - Efek suara audio sintetis langsung dari browser (tanpa perlu file audio eksternal).
  - Tombol kontrol suara On/Off pada bilah atas.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Google Font Nunito

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/rasyidspace/CrosswordPuzzle.git
   cd CrosswordPuzzle
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   ```

4. **Buka di browser**:
   Akses `http://localhost:3000` pada browser kesayanganmu.

5. **Build untuk Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📜 Lisensi & Hak Cipta

Dibuat untuk keperluan media pembelajaran interaktif siswa sekolah dasar Kurikulum Merdeka.
