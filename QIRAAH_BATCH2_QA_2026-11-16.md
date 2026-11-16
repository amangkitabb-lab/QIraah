# Laporan QC Qira’ah — Batch 2 (16 November 2026)

## Lingkup dan bukti sumber
Lima naskah diganti secara langsung pada `assets/books.js` dan pada fallback HTML setiap `kitab/<ID>/index.html`. Artikel Indonesia ditulis ulang berdasarkan PDF individual yang dapat dibaca dalam Project; teks PDF asli tidak dimasukkan ke repository. Angka estimasi memakai **190 kata per menit**, bukan memaksa durasi minimal 10 menit. `KITAB PDF.zip` sekitar 450 MB belum dapat dibaca utuh melalui Project Reader; urutan pendek bertumpu pada 10 PDF individual yang tersedia.

| ID | Halaman PDF | Unit kerja | Kata Indonesia | Menit baca total | Cakupan editorial |
|---|---:|---:|---:|---:|---|
| AD-027 | 78 | 1 | 1813 | 10 | semua judul pokok |
| AD-032 | 97 | 1 | 1786 | 10 | semua judul pokok |
| AD-030 | 118 | 1 | 2165 | 12 | semua judul pokok |
| AD-028 | 352 | 2 | 2833 | 15 | parsial berseri |
| AD-031 | 469 | 3 | 3047 | 17 | parsial berseri |

## Source trace dan konten
### AD-027
- **Peta:** 9 tanṣīṣ + ‘Asas Manhaj Ahlulbait’ dan muqaddimah
- **Halaman yang dipetakan:** Muq p12-22; tanṣīṣ I p23-36, asas p37-42, tanṣīṣ II-IX p43-76, TOC p78
- **Pemeriksaan tertinggal:** Riwayat historis dan klaim politik polemis belum diperiksa secara independen
- **URL rilis:** https://amangkitabb-lab.github.io/QIraah/kitab/AD-027/

### AD-032
- **Peta:** 15 judul asli
- **Halaman yang dipetakan:** Muq p7-9; 15 judul dari TOC p97, isi p10-95
- **Pemeriksaan tertinggal:** Takhrij hadis dan penerapan riwayat pada kejadian modern belum diverifikasi independen
- **URL rilis:** https://amangkitabb-lab.github.io/QIraah/kitab/AD-032/

### AD-030
- **Peta:** 24 judul asli
- **Halaman yang dipetakan:** Muq dan isi p9-116; 24 judul TOC p117-118
- **Pemeriksaan tertinggal:** Kutipan sejarah Utsmaniyah, kronologi, dan beberapa karakter OCR perlu pemeriksaan ulang
- **URL rilis:** https://amangkitabb-lab.github.io/QIraah/kitab/AD-030/

### AD-028
- **Peta:** 35 kelompok judul dari ratusan subjudul PDF
- **Halaman yang dipetakan:** Seri 1 p10-200; seri 2 p201-328; rujukan p329-332; TOC rinci p333-352
- **Pemeriksaan tertinggal:** Cakupan PARSIAL: ratusan subjudul kecil belum dijelaskan satu per satu. Pemeriksaan per halaman dilakukan selektif dengan TOC rinci
- **URL rilis:** https://amangkitabb-lab.github.io/QIraah/kitab/AD-028/

### AD-031
- **Peta:** 40 kelompok judul dari ratusan subjudul PDF
- **Halaman yang dipetakan:** Seri 1 p10-200; seri 2 p201-400; seri 3 p401-448, TOC p440-469
- **Pemeriksaan tertinggal:** Cakupan PARSIAL: versi sumber «نسخة قيد التعديل والمراجعة», heading glyph rusak, ratusan subjudul tidak satu per satu, takhrij belum dilakukan
- **URL rilis:** https://amangkitabb-lab.github.io/QIraah/kitab/AD-031/


## Ringkasan gate dan keterbatasan
- [x] Semua 5 ID katalog tetap dipakai, tanpa menghapus kitab lain.
- [x] Muqaddimah dan alasan penyusunan dijelaskan, berdasarkan teks sumber yang tersedia; tidak membuat muqaddimah baru bila tidak ada.
- [x] AD-027, AD-032, AD-030 mengikuti seluruh judul bagian pokok (9 tanṣīṣ, 15 bagian, 24 bagian).
- [x] AD-028 dibagi 2 unit sumber, AD-031 dibagi 3 unit; **keduanya hanya ringkasan TEMATIK PARSIAL** karena subjudul kecil berjumlah ratusan belum semua dijelaskan per judul.
- [x] Membedakan isi nash dan pembacaan pengarang, khususnya `rukun keempat` (istilah interpretatif penulis), penerapan hadis kepada sejarah, dan tuduhan kolektif pada kelompok agama/etnis yang tidak dianggap bukti.
- [x] Data dan HTML statis 5 bacaan baru diperbarui dan versi cache katalog utama diganti `b2-20261116`.
- [ ] Uji mobile interaktif dan play/pause audio perangkat nyata.
- [ ] Rights: belum ada izin adaptasi/publikasi tersendiri dari pemegang hak. Edisi sumber mencantumkan hak cetak dilindungi; sebagian masih bertanda peninjauan. Tidak ada salinan PDF diterbitkan pada website.
- [ ] Pemeriksaan manusia independen, takhrij hadis, verifikasi kutipan sejarah dan halaman karakter Arab yang rusak pada OCR.
- [ ] Setiap subjudul kecil AD-028 dan AD-031 harus mendapat catatan isi terpisah agar memenuhi target editorial yang lebih ketat.
- [x] Deployment GitHub Pages workflow run 59 **success**: https://github.com/amangkitabb-lab/QIraah/actions/runs/43869827842. Kelima URL pembaca AD-027, AD-032, AD-030, AD-028, AD-031 berhasil HTTP 200 (Firecrawl maxAge=0), memperlihatkan isi bacaan baru, daftar isi, dan estimasi **10, 10, 12, 15, 17 menit**. Dua buku panjang memiliki label status seri/parsial, cuplikan lama tidak muncul.

**Definisi status:** `summaryCoverage=full` pada tiga buku pendek berarti semua **bagian pokok** telah dibuat ringkasan sesuai judul, bukan penilaian hadis dan teks filologis yang final. `summaryCoverage=partial` pada dua buku panjang menyatakan pekerjaan granular bab belum selesai. `ownerFinal=true` adalah status tampilan website dan **bukan** persetujuan hukum atau lulus reviewer manusia.
