# Qira’ah — Audit editorial Batch 1 (16 November 2026)

## Cakupan benar-benar diperiksa
Lima PDF **individual** telah tersedia di percakapan Project dan dicocokkan ke existing ID `AD-026, AD-029, AD-034, AD-035, AD-033`. File `KITAB PDF.zip` yang berada di Sources berukuran 449.680.907 byte, **melewati batas 100 MB pembaca Project**; akibatnya urutan ini hanya berdasar 10 PDF individual, bukan inventaris total ZIP.

Katalog lain **tidak dihapus** dan tidak ada teks sumber PDF/MD asli ditambahkan ke repository publik. Ringkasan baru adalah tulisan editorial Indonesia hasil pembacaan sumber; estimasi durasi memakai 190 kata per menit.

| ID | PDF | Kata | Menit | Heading TOC Markdown | Cakupan |
|---|---:|---:|---:|---:|---|
| AD-026 | 14 | 858 | 5 | 8 | Tema utama sumber |
| AD-029 | 26 | 1932 | 11 | 13 | Tema utama sumber |
| AD-034 | 31 | 1788 | 10 | 8 | Tema utama sumber |
| AD-035 | 36 | 1431 | 8 | 14 | Tema utama sumber |
| AD-033 | 70 | 2313 | 13 | 17 | Tema utama sumber |

## Audit jejak bagian dalam PDF
- **AD-026 (14 halaman):** muqaddimah prosa p2; muqaddimah nazam p3–4; jejak kenabian p5–6; nasihat setelah haji p6–8; Madinah p9–10; adab menyambut p11; doa p12–13; daftar isi p14. **Catatan:** beberapa bait ekstraksi karakter Arab rusak; pemeriksaan visual setiap bait belum dapat diselesaikan.
- **AD-029 (26 halaman):** muqaddimah p3; mengapa dakwah p4–5; tanggung jawab p6–7; 20 bekal pribadi p7–12; tujuh tempat dakwah p13–14; media p15; fikh keadaan kontemporer p16–17; contoh kritik sejarah p18–21; jalan keluar p22–23; konsep dan penutup p24–25; daftar isi p26. Riwayat dan atribusi politik penulis dibedakan dari fakta sejarah yang terverifikasi.
- **AD-034 (31 halaman):** edisi kedua dan ketentuan hak pada p3; muqaddimah p9–15; kehilangan akhlak p16–18; tabiat dan pendidikan akhlak p19–23; akibat akhlak p24–27; nasihat Nabi p28–30; daftar isi p31. **Catatan:** kualitas sejumlah riwayat dan ejaan Arab rusak belum ditakhrij secara independen. PDF mencantumkan `حقوق الطبع محفوظة للناشر`.
- **AD-035 (36 halaman):** sampul berlabel `نسخة تحت التعديل`; pengantar pengarang p5; nazam biografi Imam Sahib Mirbat p6–22; syair perjalanan serta kunjungan p23–35; catatan maksud penyusunan pada p36. Pengelompokan biografi adalah **editorial**, tidak dipresentasikan sebagai judul bab asli. **Catatan:** naskah sumber belum edisi final; beberapa bait OCR perlu inspeksi visual.
- **AD-033 (70 halaman):** kumpulan 14 bagian khutbah: p1, p9, p15, p25, p29, p34, p47, p50, p53, p56, p59, p62, p65, p68. Tiap khutbah mempunyai heading tersendiri; tidak ditemukan muqaddimah umum. **Catatan:** p66 memuat keterangan lembaran terserak; urutan seluruh naskah tidak boleh diasumsikan sempurna tanpa pembanding.

## Pemeriksaan rilis
- [x] Lima ID kitab unik tetap sesuai katalog; judul/sampul/tautan lama dipertahankan.
- [x] Lima teks pengantar 1–2 menit diganti dengan bacaan mengikuti bab asli, disertai asal-usul, penulis, dan ajakan ke kitab asli.
- [x] Dua pengecualian nazam **5 dan 8 menit** dipertahankan sesuai instruksi pemilik, tanpa memanjangkan teks secara fiktif.
- [x] Berkas HTML statis lima halaman diberi isi bacaan baru sebagai fallback dan meta deskripsi diperbarui.
- [x] Cache query data katalog pada lima halaman baca dan halaman utama/utama lainnya dinaikkan untuk meminimalkan naskah lama tertahan browser.
- [x] Teks naskah dimasukkan sebagai Markdown ke `assets/books.js`; JSON terurai dan terhitung ulang.
- [ ] **Hak adaptasi/publikasi karya al-Adni:** belum ada dokumen lisensi di sumber yang diperiksa. Persetujuan editorial pemilik proyek tidak sama dengan persetujuan pemegang hak.
- [ ] **Independent reviewer manusia:** tidak dilakukan; perbaikan dilakukan sebagai AI editorial review.
- [ ] **QA visual seluruh bait** nazam dan pemindaian lembaran khutbah yang bermasalah: masih diperlukan apabila ingin klaim audit filologis tuntas.
- [ ] **Uji visual HP/browser nyata:** belum dilakukan dalam proses ini.
- [ ] **GitHub Pages live:** harus dipastikan melalui status workflow dan akses URL setelah deployment, bukan hanya commit.

Semua label `summaryCoverage:full` berarti **semua bagian pokok sumber sudah dibahas secara tematik**, bukan terjemahan lengkap per bait atau per khutbah, dan bukan tanda otomatis `rights=cleared`.
