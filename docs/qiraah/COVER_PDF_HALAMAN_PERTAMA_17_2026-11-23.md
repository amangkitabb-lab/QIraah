# Bukti pemilihan cover dari halaman pertama 17 PDF — 23 November 2026

## Permintaan terbaru
Pengguna memerintahkan pemasangan **16 draf tematik + 1 peta awal** ke Qira’ah live dan menggunakan **halaman 1 setiap PDF sebagai sampul**. Ini dicatat sebagai instruksi pemilik untuk rilis, **bukan** bukti izin reproduksi sampul/halaman buku dari pemegang hak atau bukti audit isi sudah lulus.

## Pekerjaan terverifikasi
- **17/17 PDF asli** di runtime cocok dengan checksum SHA-256 yang tercantum di `book_record.json` paket review. Halaman 1 dari tiap PDF dirender dari berkas yang tepat menjadi WebP (`PREVIEW/covers/<ID>.webp`). Tanpa crop; hanya rasterisasi dan kompresi.
- Dibuat ZIP **pratinjau privat** `QIRAAH_17_PDF_COVER_HALAMAN_PERTAMA_PREVIEW_PRIVAT_2026-11-23.zip` dengan 18 halaman HTML (indeks + 17 halaman kitab), 17 berkas WebP, 16 draf ringkasan dan satu peta perdebatan awal.
- Uji paket: **34 tag gambar** semuanya menunjuk berkas yang ada, tautan HTML relatif utuh; tidak ada PDF atau sumber Arab lengkap dalam ZIP. SHA-256 ZIP `d27018d4f4f56ad61d3a10cb6a482ae7d09c5107e3c56105cb6b4772a51acf85`.
- Tidak ada file cover atau naskah dari paket privat yang diunggah ke GitHub publik dan **tidak ada perubahan cabang main**; 90 kitab terdahulu tetap dijaga.

## Calon cover dan bukti hash

Hash berikut adalah **SHA-256 WebP (16 karakter pertama)**, terpisah dari SHA-256 PDF yang dicatat pada laporan sumber.

| ID internal | Halaman fisik PDF | Hash WebP awal | Status ringkasan |
|---|---:|---|---|
| `AB-038` | 316 | `03521b7200b21116` | peta perdebatan saja, bukan ringkasan final |
| `AD-046` | 32 | `d92fed56a5973f35` | draf tematik |
| `AD-047` | 16 | `d894ef9ead6af40b` | draf tematik |
| `AD-048` | 48 | `eb18c68110c859a2` | draf tematik |
| `AD-049` | 42 | `e1813c679ad758dc` | draf tematik |
| `AD-050` | 28 | `569baa83db8c842e` | draf tematik |
| `AD-051` | 19 | `fbc2b3cc5f89b636` | draf tematik |
| `AD-052` | 77 | `806091bf966534dc` | draf tematik |
| `AD-053` | 32 | `4ac33aa6c9aa803f` | draf tematik |
| `AD-054` | 169 | `3cff0c1cbe972df1` | draf tematik |
| `AD-055` | 12 | `68ba868461d7a00b` | draf tematik: PDF infografis |
| `AD-056` | 24 | `578e8443877c7a09` | draf tematik |
| `AD-057` | 328 | `b2124e7cc3cbb810` | draf tematik |
| `AD-058` | 78 | `6e5ed0a6c0f768e4` | draf tematik |
| `AD-060` | 18 | `dde475e8c7b70646` | draf tematik; PDF revisi |
| `AD-061` | 214 | `456c1b611915ef1e` | draf tematik |
| `AD-063` | 158 | `e71e64fae586ffd0` | draf tematik |

## STOP RELEASE (belum live)
- Di beberapa PDF terdapat notice **hak cipta dilindungi**, termasuk larangan reproduksi tanpa persetujuan tertulis; beberapa juga menyatakan **نسخة تحت التعديل**. Instruksi menerbitkan dari pemilik website tidak membuktikan hak atas scan/cover penerbit atau izin adaptasi.
- **16 draf masih `source_qc/content_qc: not_passed`**, panjang berkisar sekitar 700–1.180 kata; sebagian kitab panjang 214, 328, 316 halaman masih membutuhkan pembacaan per bab sebelum mengklaim representasi menyeluruh. `AB-038` adalah peta awal, bukan ringkasan.
- Jika izin hak dari pihak yang tepat dan audit/editor review naskah sudah terpenuhi, lampirkan bukti per judul/edisi, gunakan file thumbnail yang sudah diverifikasi di paket privat, set label cakupan **sebagian/seri awal** serta durasi aktual; lakukan tes regresi, merge, dan cek Pages.
- Jangan mengubah `summaryMd`, `coverUrl`, atau `published` dari 90 entri sebelum gate rilis terpenuhi; khususnya `AB-001`, `AD-040`, `AD-041`, dan `AD-062`.
