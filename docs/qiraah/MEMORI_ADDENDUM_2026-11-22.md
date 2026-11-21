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
