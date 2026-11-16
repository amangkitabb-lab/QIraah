# MEMORI PROYEK QIRA'AH (status 2026-11-16)

## Repo dan sumber
- Repository aktif: `amangkitabb-lab/QIraah` (GitHub, `main`), proyek GitHub Pages `https://amangkitabb-lab.github.io/QIraah/`. Pada 16-11-2026 konektor GitHub **berhasil mengakses repo dan memiliki izin push**. Itu bukan bukti deployment terbaru berhasil.
- Sumber pengguna berada di ChatGPT Project Sources: `KITAB PDF.zip` sebagai rujukan utama dan `KITAB MD.zip` hanya sebagai pendukung OCR; 10 PDF individual telah terunggah dalam percakapan proyek. Jangan meminta semua file dikirim ulang jika masih bisa dibaca. Jangan memindahkan raw PDF/MD ke repo publik.
- Protokol aktif: `QIRAAH_EDITORIAL_PIPELINE.md`. Antrean 10 kitab: `QIRAAH_BATCH_QUEUE.json`.

## Bukti kondisi sekarang (bukan janji)
- Pembacaan langsung `assets/books.js` di `main` pada 2026-11-16: 85 buku, 70 berisi summaryMd, 15 tanpa summaryMd, 68/70 berisi kurang dari 10 menit menurut perhitungan JS 190 kata/menit; 63/70 sekitar 1-3 menit, hanya 2/70 mencapai >=10 menit.
- Sepuluh PDF yang baru dipilih sesuai dengan existing ID `AD-026` s.d. `AD-035`. Pada website, semuanya masih memiliki ringkasan **partial** sekitar 158-196 kata; jangan menandai naskah lengkap.
- Dalam percakapan terdahulu sudah ditulis enam naskah panjang untuk `AD-026`, `AD-027`, `AD-029`, `AD-033`, `AD-034`, dan `AD-035`. Itu **draf yang belum lolos source QC, content QC, penghitungan kata, maupun hak publikasi**. Empat lainnya masih belum memiliki draf yang setara.
- V2.8 terdokumentasi sebelumnya menggunakan MD-only dan katalog 85, sedangkan snapshot lama pernah berjumlah 95. Jangan membuang atau menambah judul berdasarkan nama ZIP saja; cocokkan sumber PDF dan keputusan kuratorial terbaru secara eksplisit.

## Keputusan pengguna sekarang
- PDF cukup diunggah satu kali di Project Sources; pengerjaan berikutnya memakai file yang sama.
- PDF asli adalah sumber kebenaran saat MD hasil OCR keliru.
- Keinginan bentuk bacaan: seperti pembacaan mendalam F15 Library, bukan sinopsis/epilog/intro pendek. Target minimum sekitar 10 menit dan ideal 10-15 menit, dari kata naskah nyata. Kitab yang sangat panjang dibagi beberapa seri agar tidak kehilangan cakupan. Nazam dijelaskan menurut bait dan maksud aslinya, tidak dipanjangkan dengan penemuan fiktif.
- Pengerjaan batch default 5 kitab. Batch pertama `AD-026`, `AD-029`, `AD-034`, `AD-035`, `AD-033`; batch kedua `AD-027`, `AD-032`, `AD-030`, `AD-028`, `AD-031`. Buku tebal dapat dikerjakan per seri.
- Sesudah peta sumber, naskah, QA dan persetujuan pemilik serta izin publikasi diverifikasi, perbarui `summaryMd` existing ID pada website. Backup dan tes URL. Tidak boleh sekadar menaikkan label menit tanpa menambah naskah.

## Gate hak dan perubahan publik
- Pengguna terdahulu menyatakan izin untuk al-Buthi, tetapi bukti per edisi belum terdokumentasi. Untuk karya al-Adni izin adaptasi/publikasi belum terverifikasi; tidak boleh menyatakan otomatis cleared.
- GitHub adalah repository publik. Sumber asli dan draf yang belum aman terbit harus tetap privat.
- Commit saat ini hanya menambahkan dokumentasi proses dan queue, **bukan** menerbitkan naskah baru atau mengubah bacaan di website.

## Operasional lintas percakapan
- Trigger singkat: `LANJUT QIRAAH BATCH` dalam proyek yang sama. Baca `QIRAAH_BATCH_QUEUE.json`, cari sumber di Project Sources, jangan meminta unggah ulang semua PDF.
- Pekerjaan tidak berjalan di latar belakang: setiap lanjutan perlu sesi pengguna aktif. Setelah setiap batch, laporkan naskah, jumlah kata, menit, gate, commit/PR/live verification dan perbarui memori ini.

## Koreksi aturan 2026-11-16 (batch 1)
- Sumber ZIP PDF 449 MB saat ini **tidak dapat dimaterialisasi** oleh pembaca Project (batas 100 MB), tetapi 10 PDF individual terunggah dan dapat dibaca.
- Urutan dari 10 file terakses: 14, 26, 31, 36, 70, 78, 97, 118, 352, 469 halaman. Tujuh file <=100 halaman didahulukan. Ini **bukan** klaim inventaris seluruh ZIP.
- Kelipatan 200 halaman: 352=2 unit; 469=3 unit. Ikuti batas bab bila memungkinkan.
- Durasi 5 menit diterima untuk nazam tipis yang penjelasannya lengkap; jangan memaksa 10 menit. Daftar isi mengikuti **setiap judul bagian asli**, termasuk jika 15 judul. Sumber motivasi penulisan dari muqaddimah; isi menjelaskan pembahasan, bukan pengantar generik.
- Aturan terbaru disimpan dalam QIRAAH_EDITORIAL_PIPELINE.md dan QIRAAH_BATCH_QUEUE.json. Naskah situs belum berubah oleh pembaruan metadata ini.

## Implementasi Batch 1 (2026-11-16) — bukti GitHub
Lima ringkasan Qira’ah berhasil **diganti langsung pada `assets/books.js` di branch `main`**, bukan hanya dibuat sebagai draf chat. Data kitab lain tidak dihapus. Lima fallback HTML `kitab/<ID>/index.html` kini memuat bacaan yang sesuai, meta-description baru, serta query cache data versi `b1-20261116`. Entry pages beranda, katalog, Sudah Diringkas, Rak dan Tentang juga memakai query versi tersebut.

| ID | PDF | Kata Indonesia | Durasi rumus 190 kata/menit | Judul isi | Catatan |
|---|---:|---:|---:|---:|---|
| AD-026 | 14p | 858 | 5m | Nazam haji, 6 bagian sumber | OCR bait rusak; cek visual belum tuntas |
| AD-029 | 26p | 1.932 | 11m | Fikih dakwah, 20 bekal dai | Teks PDF ditelusuri; kritik sejarah diatribusi |
| AD-034 | 31p | 1.788 | 10m | 4 bab akhlak pemegang mimbar | PDF menyatakan hak cetak penerbit dilindungi |
| AD-035 | 36p | 1.431 | 8m | Biografi + lampiran syair dipisahkan | Sumber bertanda `نسخة تحت التعديل` |
| AD-033 | 70p | 2.313 | 13m | 14 khutbah diberi heading tersendiri | p66 mencatat lembaran berserakan |

Laporan penelusuran: `QIRAAH_BATCH1_QA_2026-11-16.md` di GitHub. Pemilik meminta final editorial; naskah diproses AI, **bukan human independent QC**. Edisi, OCR/urutan halaman, dan hak adaptasi/publikasi untuk al-Adni belum diverifikasi sebagai cleared. Semua teks publik **parafrase Indonesia baru**, bukan PDF penuh. Hitungan katalog kini 85 buku, 70 mempunyai ringkasan, 65 dari 70 masih di bawah 10 menit; lima naskah batch menjadi 5,11,10,8,13 menit. Berikutnya prioritas `AD-027` (78p), `AD-032` (97p), lalu `AD-030` (118p), `AD-028` (352p/2 unit), `AD-031` (469p/3 unit).

Status Pages: commit Github terverifikasi; verifikasi deployment URL dapat tertunda. Jangan mengklaim live/HP telah diuji bila belum ada bukti.

## Verifikasi website live Batch 1 (16 November 2026)
GitHub Pages workflow run 38 `43862568124` sukses. Firecrawl maxAge:0 pada lima URL `/QIraah/kitab/AD-026/`, `AD-029`, `AD-034`, `AD-035`, `AD-033` berhasil mengembalikan HTTP 200 dan menunjukkan artikel baru, estimasi 5/11/10/8/13 menit, daftar isi, serta tombol audio. Cuplikan ringkasan pengantar lama tidak lagi tampil. QA di perangkat HP nyata dan audio play/pause belum dilakukan. Hak adaptasi al-Adni tetap belum terdokumentasi sebagai cleared dan sumber nazam AD-035 merupakan edisi dalam revisi.
