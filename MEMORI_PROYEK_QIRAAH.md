# MEMORI PROYEK QIRA'AH (status 2026-11-17)

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

## Batch 2 selesai dipasang pada website (16 November 2026)
- Dari PDF individual Project diproses lima kitab al-Adni: `AD-027` 78p -> 1.813 kata (~10m, 9 tanṣīṣ dan bagian asas); `AD-032` 97p -> 1.786 kata (~10m, 15 judul asli); `AD-030` 118p -> 2.165 kata (~12m, 24 judul pokok asli); `AD-028` 352p -> 2.833 kata (~15m total, 2 seri sumber p10-200/p201-328 dengan 35 pokok **parsial**, PDF TOC ratusan subjudul); `AD-031` 469p -> 3.047 kata (~17m total, 3 seri sumber p10-200/p201-400/p401-448 dengan 40 pokok **parsial**, edisi bertanda `نسخة قيد التعديل والمراجعة`, gangguan OCR).
- Naskah baru langsung mengganti `summaryMd` buku ID tersebut dalam `assets/books.js`, dan lima fallback HTML `kitab/<ID>/index.html` berisi teks baru, dengan cache buku `b2-20261116` pada lima halaman kitab dan entry routes beranda/katalog/ringkasan/rak/tentang.
- **Verifikasi live:** Firecrawl tanpa cache mendapat HTTP 200 pada kelima URL dan teks baru tampil, versi bacaan 10/10/12/15/17 menit; status dua kitab panjang tampak **Seri ringkasan tersedia** bukan lengkap. Workflow Pages run 59 `43869827842` berhasil sukses. Manual HP visual dan audio interaction belum diuji.
- Laporan rinci `QIRAAH_BATCH2_QA_2026-11-16.md` menyimpan peta PDF, cakupan, keterbatasan. Ketiga buku lebih tipis rangkuman semua bagian pokok, **bukan** otomatis lulus takhrij/penelaahan sejarah. Dua kitab besar memerlukan pembuatan ringkasan **per setiap subjudul** yang belum tuntas (ratusan subjudul dalam TOC).
- Hak adaptasi/publikasi dari penerbit/penulis al-Adni tetap `audit`, tidak ada izin tertulis tersendiri; sumber PDF berhak cetak dilindungi, sebagian masih revisi. Tidak ada PDF diunggah dan naskah publik merupakan tulisan Indonesia baru. Uji manusia independen dan hukum hak cipta masih pending.
- Kelanjutan prioritaskan audit rinci subjudul AD-028 dan AD-031 serta pemetaan lebih luas seluruh ZIP sumber jika dapat dibaca dengan cara aman.

## Batch 3 — pemulihan sumber dan seleksi (16 November 2026, sesi lanjutan)
- Pengguna memberi perintah `lanjut`: diperlakukan sebagai **mulai Batch 3**. Status aktual **seleksi sumber/PDF metadata**, belum ada satu pun artikel batch 3 ditulis ulang atau diterbitkan.
- Pemeriksaan situs publik langsung sebelumnya: beranda 85 judul (26 al-Buthi + 59 al-Adni), 70 bacaan; halaman AD-028 dan AD-031 HTTP 200 serta masih **parsial**. Angka arsip lama 95 judul bukan angka katalog live sekarang.
- `assets/books.js` terkini diperiksa: AB-001 2.320 kata; AB-007 602; AB-030 736; AB-031 641; AB-011 653. Tiga judul AB-007/030/031 berlabel `full` walaupun sangat pendek: **butuh audit daftar isi sebelum menyimpulkan lengkap/tidak**, jangan mengubah metadata sembarang.
- PDF mirror `archive.org/download/elbouti` diuji HTTP 200 dan jumlah halaman diperoleh: **AB-007 35 halaman; AB-030 36; AB-031 49; AB-011 63**. Yang terbaca melalui panggilan verifikasi hanya 3 halaman awal, **bukan** seluruh isi. AB-001 27 halaman berdasarkan metadata lama, ada konflik `pdfUrl` dengan `SOURCE_LOCK` pada naskah ringkasan.
- Prioritas lima kandidat kerja batch 3 dalam `QIRAAH_BATCH_QUEUE.json`: AB-001, AB-007, AB-030, AB-031, AB-011; empat judul untuk audit & perbaikan isi, AB-001 untuk cek edisi. Seleksi bersifat **provisional** karena belum dapat membaca seluruh ZIP, dan tidak mengalahkan kewajiban melengkapi AD-028/AD-031 per subjudul.
- `KITAB MD.zip` berhasil dimaterialisasi ke `/mnt/data/files/KITAB MD.zip` (5.424.268 byte), tetapi alat container tiga kali mengembalikan ClientError sehingga isi ZIP belum terbaca. `KITAB PDF.zip` (449.680.907 byte) ditolak pembaca Files karena limit 100MB. Jangan menyatakan seluruh ZIP sudah diinventarisasi.
- Pemeriksaan penuh PDF Archive gagal karena kredit Firecrawl terpakai habis; web PDF open/screenshot gagal; pencarian Shamela juga gagal internal. **Tidak ada sumber primer penuh yang lolos QA untuk memulai naskah baru dengan klaim kelengkapan.**
- File baru: `QIRAAH_BATCH3_SOURCE_AUDIT_2026-11-16.md` berisi bukti empat URL PDF, lima kandidat, keterbatasan dan hak. Antrean diperbarui dengan status `batch_3_source_preflight_documented_not_written_not_deployed`.
- **Tidak ada perubahan halaman bacaan** `assets/books.js` atau HTML kitab pada sesi ini; tidak ada klaim deploy naskah baru. Hak untuk adaptasi al-Adni dan al-Buthi per edisi belum terbukti dokumennya; bahan yang belum aman tetap privat.
- Pengguna telah meminta pemberitahuan di chat dan email pada alamat yang disebutkan di percakapan **setelah selesai**. Alamat pribadi tidak dicatat dalam repo publik. Pengiriman email **belum dilakukan**; konektor Gmail belum terkonfirmasi dan Resend membutuhkan pengirim yang diberikan/diotorisasi pengguna. Jangan menyebut email terkirim.
- Tahap berikutnya: akses sumber PDF/MD orisinal dengan perangkat/alat yang bisa membacanya, lalu `source_audit` dan `chapter_map` asli → ringkasan substansial → QA hak/manusia → website/commit/QA live → pemberitahuan, bukan langsung menaikkan label.

## Batch 4 — audit sumber dan koreksi label cakupan (17 November 2026)
- Pengguna memerintahkan `lanjut batch 4`. **Batch 3 masih terbuka, bukan selesai.** Batch 4 disiapkan sebagai antrean lima ID berbeda `AB-027, AB-036, AB-010, AB-035, KR-016`. Pemilihan **sementara**, berdasarkan judul dalam katalog dan halaman **edisi cetak pembanding** (112, 112, 128, 144, 144); angka **bukan** hasil inventaris ZIP PDF asli pengguna.
- Dokumen baru `QIRAAH_BATCH4_SOURCE_AUDIT_2026-11-17.md` memetakan lima metadata, sumber penerbit, dan daftar isi **AB-027** dari [Shamela kitab 1751](https://shamela.ws/book/1751) (26 halaman **bernomor otomatis**, bukan cetak) beserta muqaddimah penulis dari [Dar al-Fikr](https://fikr.com/products/fikr-3063).
- AB-027 menyimpan **5 kelompok utama** dan subjudul asli lebih terperinci (3 syarat, 3 prinsip+efek, metodologi, 3 problematika, penutup). Ringkasan situs lama **1.992 kata / 11 menit** hanya menampilkan 5 heading kelompok, belum memenuhi instruksi pemilik agar tiap subjudul asli memiliki pembahasan tersendiri.
- **Perubahan publik nyata**: `assets/books.js` pada ID `AB-027` `summaryCoverage:full` diganti menjadi `partial` via commit `be02ad436eb7f7608647f3bf89d67b24be113ec6`. **Tidak ada perubahan pada teks `summaryMd`, judul, sampul, atau `readMinutes`**; 85 judul tetap ada. Ini koreksi status, **bukan** penerbitan naskah baru.
- Versi query pemuatan buku dinaikkan menjadi `b4-20261117` pada `index.html`, `ringkasan/index.html`, `jelajahi/index.html`, `rak/index.html`, `kitab/AB-027/index.html`, `tentang/index.html`. Catatan perubahan ada di laporan Batch 4; tunggu workflow Pages dan lakukan verifikasi halaman publik sebelum klaim live.
- `QIRAAH_BATCH_QUEUE.json` diperbarui dengan `batch_4` dan metadata tanpa mengganti `batch_3` atau `next_batch_ids` Batch 3. Status `batch_4_metadata_QA_change_committed; full_chapter_work_and_batch_3_still_pending`.
- Buku lain di Batch 4 **belum dibaca seluruh PDF-nya**. AB-035 memuat konflik metadata edisi: katalog penerbit memuat ringkasan yang menyebut versi bahasa Prancis; jangan menganggap itu otomatis sama dengan PDF Arab katalog.
- **Belum** ada tulisan ulang lima ringkasan Batch 4 atau editor manusia independen, bukti hak adaptasi per-edisi, visual browser HP, maupun audit audio. ZIP PDF 449 MB tidak terbaca; ZIP MD telah tersedia di pembaca proyek tetapi container tidak berfungsi. Hasil dari Shamela terverifikasi sebagai sumber **teks digital**, belum cocok dengan file PDF pengguna. PDF/MD mentah tetap privat, tidak didorong ke GitHub Pages.
- Pengguna meminta pemberitahuan setelah selesai dan email ke alamat yang diberikan sebelumnya dalam percakapan; **belum email** karena naskah batch belum selesai dan identitas pengirim terotorisasi belum tersedia. Jangan simpan alamat pribadi di repo publik.
- Berikutnya: audit sumber PDF AB-027 dan TOC lengkap, ringkas tiap subjudul dengan argumen spesifik; bandingkan penerbit dan PDF empat judul lain; selesaikan gate hak/manusia dan rilis apabila lolos. Tetap tangani dua pekerjaan parsial Batch 2 (AD-028 dan AD-031).
