# Addendum memori Qira’ah — audit 22 November 2026

Status: **PR review, belum merge / belum live**. Rujukan wajib: `.github/skills/qiraah-integrity-operator/references/QIRAAH_RULES.md` (21 November 2026).

## Input dan verifikasi
- Diterima 10 Markdown hasil konversi dan satu `manifest.json`. Manifest: **1.358 halaman total**, **34 halaman gagal konversi**. PDF asli untuk batch ini **tidak diunggah**. OCR/MD bukan PDF yang sudah lolos pemeriksaan visual.
- Ketujuh judul katalog existing: `AD-040`, `AD-041`, `AD-042`, `AD-043`, `AD-032`, `AD-044`, `AD-031`; semua telah memiliki `coverUrl` ke WebP existing tetapi kecocokan dengan edisi PDF **belum diperiksa**.
- Tiga judul **belum ada** di katalog saat ini: `إزاحة المآثم`, `إشكالية تحديد أصول الفقه` (dua penulis; bibliografi lain menyebut `تجديد`), dan `إظهار العلم المكنون`. Jangan buat ID otomatis.
- Sumber baru yang dicocokkan: halaman kitab resmi `/books/aloss/` untuk `AD-031`, `/books/alsaqaf/` untuk `AD-043`. Keduanya **laman kitab, bukan tautan PDF langsung**. PDF asli lain dan edisi belum tervalidasi.
- Draf ringkasan `AD-044` sekitar 10 menit telah dibuat **secara privat**, menelusuri enam bagian utama dari MD. Naskah tidak didorong ke repo publik karena `SOURCE_QC`, `RIGHTS`, dan `OWNER_ACC` belum lulus.
- **Tidak ada perubahan `summaryMd`, status `published`, `summaryCoverage`, identitas buku, atau berkas cover**. Dua perubahan pada `assets/books.js` hanya `sourceUrl` `AD-031` dan `AD-043`. Repo utama tetap tidak berubah sampai PR di-merge.

## Gerbang & langkah berikutnya
`STOP_RELEASE` untuk naskah baru. Audit visual PDF asli `AD-044` secara spesifik, cocokkan edisi dan sampul existing, periksa terjemahan/ayat/hadis serta daftar isi, bukti hak, ACC pemilik, URL unduh PDF resmi dan keterjangkauannya, lalu uji regresi sebelum publikasi. Laporan komprehensif: `docs/qiraah/INTAKE_10_MD_2026-11-22.md`.

## Validasi lanjutan 10 MD — 22 November 2026
- Laporan komprehensif sudah disimpan di `docs/qiraah/VALIDASI_10_MD_2026-11-22.md` pada cabang PR draft #2.
- Berkas aktual: 10 MD diperiksa lokal lengkap, 1.358 halaman PDF menurut manifest, 34 marker halaman gagal konversi; checksum SHA-256 **MD**, bukan PDF, dicatat per judul. Seluruh penanda nomor halaman 1–N ada, tidak menjamin kualitas OCR.
- Detektor kerusakan karakter mengindikasikan 333 dari 469 halaman pada AD-031 memiliki >=30 karakter bermasalah; ini heuristik, bukan pernyataan 333 halaman hilang.
- Katalog: 7 ID lama tetap, tiga judul masih kandidat tanpa ID; AD-040/041/042/043/032/044/031 cover ada, belum verifikasi visual cocok edisi; main tetap tidak berubah.
- AD-044: draf privat memiliki sekitar 1.797 kata narasi (ceil(1797/190)=10 menit), enam bagian utama selaras dengan TOC MD; bukti visual PDF asli belum ada, jangan publikasi draf.
- PDF web eksternal #04 dan #06 dapat dibaca sebagai teks pembanding tetapi screenshot visual gagal. Ada konflik judul dan halaman pada kitab #02 (judul Dar al-Fikr `تجديد` vs OCR `تحديد`; cetakan 328 halaman vs manifest 316); kitab #07 memiliki judul resmi lebih panjang daripada nama lokal.
- Tautan PDF kandidat untuk #01/#07/#10 tercatat dari halaman resmi tetapi unduhan langsung tidak teruji; yang lain perlu diperiksa. URL PDF bukan izin adaptasi/cover.
- **STOP_RELEASE** bagi sepuluh naskah baru: PDF asli pengguna, checksum PDF, perbandingan visual, peta bab definitif, bukti hak, ACC manusia, dan QA UI masih belum lengkap. Jangan mengklaim live atau merge PR #2 sebagai rilis ringkasan.
