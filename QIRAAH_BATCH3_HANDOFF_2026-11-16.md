# Qira'ah — Serah terima memori & prasyarat Batch 3
Tanggal pemeriksaan: 16 November 2026, Asia/Jakarta.
Status: **PREFLIGHT / belum mengerjakan ringkasan Batch 3**.
Sumber bukti primer: repository main, `MEMORI_PROYEK_QIRAAH.md`, `QIRAAH_EDITORIAL_PIPELINE.md`, `QIRAAH_BATCH_QUEUE.json`, laporan QA batch 1/2, dan pembacaan laman GitHub Pages secara langsung. Ini bukan pengganti audit PDF asli.

## 1. Kondisi yang diperiksa
- Repo: https://github.com/amangkitabb-lab/QIraah ; URL publik: https://amangkitabb-lab.github.io/QIraah/ ; deploy via GitHub Pages.
- Beranda live merespons HTTP 200 dan menyebut 85 judul = 26 al-Buthi + 59 al-Adni; 70 ringkasan terisi dan 15 belum berisi. Angka rilis V2.7 yang berjumlah 95 (50+45) merupakan **arsip historis**, bukan hitungan katalog live saat ini. Perbedaan daftar judul belum diaudit satu per satu.
- Batch 1 telah memperbarui AD-026 (14p, 5m), AD-029 (26p, 11m), AD-034 (31p, 10m), AD-035 (36p, 8m), AD-033 (70p, 13m).
- Batch 2 telah memperbarui AD-027 (78p, 10m), AD-032 (97p, 10m), AD-030 (118p, 12m), AD-028 (352p, 15m), AD-031 (469p, 17m).
- Live scrape dengan cache dinonaktifkan pada beranda, /kitab/AD-028/ dan /kitab/AD-031/ merespons HTTP 200 dan menampilkan bacaan terbaru. Dua kitab besar secara eksplisit berlabel **ringkasan parsial berseri**.
- Dua kitab berat masih kekurangan pemetaan dan ringkasan **setiap subjudul asli**: AD-028 membentuk 35 kelompok tematik dari ratusan bagian; AD-031 memiliki 40 kelompok tematik. Kedua labelnya tidak boleh diubah menjadi `full` sebelum semua bagian benar-benar diproses.
- Uji visual mobile nyata, interaksi audio, pemeriksaan filologis Arab per bait, hak adaptasi, dan reviewer manusia independen masih terbuka.
- ZIP sumber PDF ±449 MB belum berhasil dibaca utuh dalam Project Reader (batas materialisasi sebelumnya 100 MB); 10 PDF individual menjadi dasar batch 1/2. Jangan mengklaim telah menginventarisasi semua PDF dalam ZIP.

## 2. Keputusan editorial terkini (user + pipeline)
1. PDF asli = otoritas; MD hasil OCR hanya bantuan. Ikat judul, pengarang, edisi, `BOOK_ID`, dan halaman yang diperiksa. Jangan membuat klaim dari OCR Arab rusak tanpa pemeriksaan visual.
2. Urutkan kitab belum dikerjakan menurut PDF terpendek, utamakan di bawah 100 halaman. Jika seluruh ZIP belum dapat diinvetarisasi, jangan mengklaim daftar 10 PDF sebagai urutan global.
3. Default satu batch adalah lima kitab; kitab di atas 200 halaman dibagi `ceil(halaman/200)` unit sumber, dengan pemenggalan mengikuti batas bab/argumen asli.
4. Penjelasan motivasi penulisan wajib berasal dari muqaddimah asli atau bukti teks yang dapat ditunjukkan; jika tak ada, nyatakan tidak ditemukan. Bukan pengantar rekaan editor.
5. Daftar isi ringkasan mengikuti **semua judul asli** (bab, fasal, judul nazam, khutbah), bukan 5 tema karangan editor. Bila ada 15 judul asli, ada 15 bagian daftar isi. Pengelompokan buatan editor diberi label terpisah.
6. Setiap bagian berisi ringkasan substantif tentang argumen, cerita, kasus atau rincian **yang benar-benar dibahas pengarang**, meski bagian itu pendek. Jangan berhenti pada prolog, sinopsis, atau epilog.
7. Target durasi prosa 10–15 menit dihitung dari naskah Indonesia aktual (~190 kata/menit); teks singkat dan nazam dapat 5 menit atau kurang jika jelas lengkap, tanpa padding fiktif.
8. Setelah draf, audit keterhubungan antarbagian, salah tulis, bahasa Arab, atribusi, klaim sejarah, kutipan, sumber halaman, lalu revisi. Tinjauan AI bukan tinjauan manusia.
9. Bedakan `source_qc`, `content_qc`, `editorial_approval`, `rights_clearance`, `publication_status`. Publikasi sumber/hasil adaptasi harus memiliki hak yang relevan; ACC pemilik tidak sama dengan izin pemegang hak. Jangan memasukkan PDF/MD sumber, bukti izin privat, atau draf yang belum aman ke repo publik.
10. Saat lolos gate publikasi, backup `assets/books.js` dan fallback `kitab/<ID>/index.html`, lalu update existing ID, tes path yang case-sensitive `/QIraah/`, cek web/mobile, dan verifikasi commit + deployment.
11. Setiap selesai pekerjaan dalam **sesi aktif**, berikan pemberitahuan hasil di chat dan kirim laporan melalui integrasi email **apabila tersedia, pengirim berizin, dan pengiriman terkonfirmasi**. Alamat pribadi penerima tidak disimpan dalam dokumentasi repo publik. Tidak ada proses background di luar sesi.

## 3. Tugas yang sah untuk Batch 3
- **Prioritas tuntas warisan**: granular audit untuk AD-028 (2 unit sumber: hlm. 10–200, 201–328) dan AD-031 (3 unit: 10–200, 201–400, 401–448). Buka TOC asli, buat peta subjudul satu-satu, tambahkan ringkasan yang hilang dengan jejak halaman privat. Hanya ubah status `full` jika seluruh bagian terliput.
- **Seleksi karya baru**: lakukan inventaris PDF belum diproses; pilih tiga atau lima judul paling ringkas berdasarkan ukuran terverifikasi. **Belum ada ID baru Batch 3 yang sah untuk dikunci** tanpa inventaris sumber tambahan.
- **Hak**: fokus izin adaptasi/publikasi karya al-Adni yang belum terdokumentasi; pertahankan penandaan audit.
- **Teknis**: audit mobile/reader/audio, saluran Shopee-only, gambar sampul, logo ق SVG, dan jalur GitHub Pages `/QIraah/`.

## 4. Output & batas klaim
Per buku: `book_record.json`, `source_audit.md`, `chapter_map.md`, `chapters/*`, `reading_edition.md`, `qa_report.md`, `rights_evidence.md`, dan catatan penulis. Hanya metadata/status aman publik di GitHub; naskah atau bahan mentah dengan status hak tidak jelas disimpan privat.
Keluaran laporan: ID; jumlah halaman; daftar isi asli dibanding cakupan ringkasan; kata; menit; status sumber/konten/hak; tautan commit/halaman; pekerjaan tertunda.
**Jangan menyebut Batch 3 selesai, tersimpan ke website, atau email terkirim sebelum ada bukti tindakan itu.**

## 5. Dokumen rujukan aktif
- [Memori repositori](./MEMORI_PROYEK_QIRAAH.md)
- [Protokol editorial](./QIRAAH_EDITORIAL_PIPELINE.md)
- [Antrean kitab](./QIRAAH_BATCH_QUEUE.json)
- [QA batch 1](./QIRAAH_BATCH1_QA_2026-11-16.md)
- [QA batch 2](./QIRAAH_BATCH2_QA_2026-11-16.md)
