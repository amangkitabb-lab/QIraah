# MEMORI PROYEK QIRA'AH (status 2026-11-17; Batch 3 aktif)

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

### Catatan lanjutan Batch 4: draf privat AB-027
- Dokumen baru tersimpan **privat di Notion**, judul: `Qira’ah Batch 4 — Draf Privat AB-027 (Audit Sumber Belum Final)`. Halaman ini bukan pengganti publik; cari lewat pencarian Notion, jangan simpan URL privat ke repo publik.
- Struktur draf: muqaddimah alasan penulisan, tiga syarat dakwah, tiga dasar dan akibatnya, metodologi, tiga masalah dakwah, dan penutup. 11 subheading konten + heading penutup; dari Shamela digital yang sudah ditelusuri parsial. Konten narasi murni **1.719 kata (~10 menit)**; angka tidak menghitung metadata, judul, catatan sumber, checklist.
- Notion `fetch` mengonfirmasi halaman draf dan isinya. Penulisan dan QA di Notion belum sama dengan `source_qc=passed`, `content_qc=passed`, `rights_cleared`, `human_approved`. PDF pengguna dan banyak lembar digital belum dapat diperiksa.
- Website tetap memakai naskah **lama** AB-027 1.992 kata/11 menit; hanya label cakupan diturunkan ke `partial` agar tidak mengklaim semua subjudul sudah dicakup.
- Antrean batch 4 kini memiliki `batch_4_private_drafts` dan status `batch_4_AB027_private_draft_10m_not_published; batch_3_pending`.

## Koreksi prioritas atas perintah pemilik — 17 November 2026
- Pemilik menegur bahwa Batch 4 **tidak boleh dimulai sebelum Batch 3 selesai**. Instruksi mengikat: **ACTIVE_BATCH=3, BATCH4=PAUSED**, tidak boleh beralih hingga naskah semua lima ID Batch3 lolos audit sumber, konten, hak, peninjau manusia, rilis (bila sesuai) dan verifikasi live.
- `QIRAAH_BATCH_QUEUE.json` telah diubah dalam commit `2a337ca9d0994a8d9c9c99bec1a45342f50fb351`: `active_batch=3`, `batch_4_paused=true`, `next_batch_ids` tetap AB-001 AB-007 AB-030 AB-031 AB-011. Jangan mengubahnya lagi untuk status semu.
- Hasil substansial baru: naskah privat **AB-007** dibuat dari PDF Arab **resmi** Nasim al-Sham 16 halaman. Dibaca dari PDF terindeks p1–16 (bukan ringkasan lama), dihasilkan **1.847 kata narasi inti (~10 menit)** / total dokumen termasuk meta ±2.248 kata, 7 bagian editorial plus pengantar/penutup. Tersimpan dan dibaca ulang di halaman privat Notion bernama `Qira’ah Batch 3 — Draf Privat AB-007 (PDF Resmi Nasim al-Sham)`; URL privat tidak dicantumkan di GitHub.
- Penting: nomor 1–7 merupakan **pengelompokan editor**, bukan klaim judul asli setiap bab. PDF Nasim al-Sham memiliki 16 halaman bernomor, sedangkan mirror Archive yang dahulu dicatat 35 halaman. Sebelum `source_qc_passed`, cocokkan edisi, visual, teks Arab, dan sanad/riwayat.
- Peta TOC resmi untuk AB-030 (5 bagian: `مقدمة`, `تمهيد`, tema ibadah, `معنى الطاقة الروحية`, dan pengaruh sosial-ekonomi-politik) dan AB-031 (7 keberatan dalam 3 kelompok) diperiksa kembali dari Nasim al-Sham. Rincian: `QIRAAH_BATCH3_EDISI_QA_2026-11-17.md`.
- AB-001: situs memiliki draft panjang 2320 kata dengan lima judul, tetapi `pdfUrl` berbeda dari `SOURCE_LOCK` di ringkasan; judul halaman Nasim al-Sham memakai tambahan `عز وجل`. AB-011: situs 653 kata dan parsial; TOC asli dan halaman terakhir masih harus dicek. AB-030/031 tetap bacaan singkat 736/641 kata; jangan dipoles menjadi 'final' tanpa sumber.
- Sumber: `https://naseemalsham.com/uploads/Component/word%20new/Arabic/Research/2012/Al3qobat_AlIslameeh.pdf` dapat dibaca sebagai teks; permintaan screenshot PDF dengan web gagal akibat cache miss. Container tool masih gagal ClientError, ZIP 449MB melebihi batas Files. Karena itu **tidak ada klaim seluruh sumber utama sudah diaudit**.
- Tidak ada perubahan naskah `assets/books.js` dari Batch3 pada sesi ini. Draf privat baru AB-007 belum aman dipublikasikan karena dokumentasi izin per edisi dan QA manusia masih pending. Belum ada email dikirim; alamat penerima tetap hanya di percakapan, tidak di repo publik.

## Progres revisi isi langsung Batch 3 — 17 November 2026
- Atas koreksi pemilik, aktif **Batch 3** saja; Batch 4 tetap **PAUSED**. Jangan pakai Notion untuk Qira'ah mulai sekarang, dan jangan mengirim laporan rutin sebagai pengganti naskah.
- **AB-007:** kitab resmi Nasim al-Sham berisi 16 halaman teks Arab dibaca; naskah situs `assets/books.js` diganti dari 602 menjadi **1.999 kata / 11 menit**, cakupan `partial`, commit `5bd2562bbf143af23a28dbde454ed10e25f694cc`; ISBN/edisi 35-halaman Archive belum dicocokkan; QA manusia/hak belum selesai.
- **AB-031:** tujuh keberatan asli dari Nasim al-Sham dibuat masing-masing heading, menghilangkan gabungan tiga masalah hukum–riba–perempuan; teks kini **767 kata / 5 menit**, `partial`, commit `eec48810e8289ef45a69294b2a9f3f5261481878`.
- **AB-030:** prosa lama 736 kata ditata ulang di bawah **lima heading asli** dari Nasim al-Sham tanpa menambah bahasan yang belum diverifikasi; kini **802 kata / 5 menit**, `partial`, commit `45955595f23f86c89ba10dd729cc8f97e7ef7c0b`.
- **AB-001:** tetap 5 bab inti dan **2.347 kata / 13 menit**, namun sumber PDF katalog dan `SOURCE_LOCK` berbeda. Penanda sumber dikoreksi menjadi `belum terkunci`, cakupan `partial` sambil menunggu verifikasi lembar OCR rusak, commit `6202d609c22f91207f4f39f68f8311296ef7d826`.
- **AB-011:** masih ringkasan lama **653 kata / 4 menit, partial**; ujung sumber (hlm. ~56–63) dan TOC asli belum bisa diperiksa. **Tidak dikarang**.
- Cache import `assets/books.js` pada semua halaman utama dan empat halaman kitab yang berubah disinkronkan ke versi `batch3-20261117-final`. Tetap perlu verifikasi workflow Pages dan URL live.
- ZIP PDF 449MB tidak dapat diakses via Files; `container.exec` gagal ClientError; Firecrawl kredit 0. Tanpa sumber asli yang bisa diperiksa dan izin terverifikasi, tidak sah menaikkan status lima buku menjadi final. Sumber/draf mentah tidak diunggah ke repository publik. Tidak ada email berhasil dikirim.

## Pembaruan sumber Arab AB-031 — Batch 3 (17 November 2026)
- Salinan OCR Arab 26 halaman dari https://www.scribd.com/document/1065361357 dilacak dan dibandingkan dengan daftar isi resmi https://naseemalsham.com/subjects/view/54443 . Cuplikan teks substantif mendukung muqaddimah, keberatan minoritas, perubahan hukum, riba, kitab fikih lama, dan penutup. OCR bagian perempuan dan rincian lainnya belum lengkap; jangan menyulapnya menjadi bacaan `full`.
- `AB-031` ringkasan Indonesia di `assets/books.js` diganti dari **767 kata menjadi 2.165 kata / sekitar 12 menit** dengan tujuh bagian sesuai TOC, commit `a401c2341cb4bd774c7388f6634df6ac0b3ebfb2`. Status `summaryCoverage=partial` dan audit hak/visual belum lulus.
- Semua entry routes dan empat kitab Batch 3 diperbarui ke query data `batch3-v2-20261117` supaya artikel terbaru tidak tertahan cache. Batch 4 tetap dibekukan. Tidak ada Notion atau email dikirim.

## Persiapan cover Syekh al-Buthi — branch aman (17 November 2026)
- Instruksi terbaru: fokus cover 26 kitab **Syekh al-Buthi**, baik sudah atau belum diringkas. **Sembunyikan daftar ringkasan dari tampilan sementara**; tidak menghapus naskah `summaryMd` maupun 59 judul al-Adni dari data. Metode produksi ringkasan baru baru diterapkan setelah tahap cover selesai.
- User sudah mengirim `QIraah-main.zip` (1.851.428 bytes) dan **45 gambar screenshot PNG** cover/halaman judul dalam 3 pesan. Nama file sudah dicocokkan secara visual dan dipetakan ke semua 26 ID melalui `QIRAAH_COVER_IMPORT_BOUTHI.json` di branch ini.
- Repo `main` sebelum perubahan: **85 judul**, 26 al-Buthi, 59 al-Adni; **1 cover aktif** pada AB-001. Jangan menganggap kumpulan 62 gambar yang ada di repo semuanya terkait dengan 26 ID aktif.
- Branch kerja **`qiraah/bouthi-catalog-covers-20261117`**, PR draft #1. `assets/app.js` telah menyiapkan mode fokus al-Buthi dan menyembunyikan menu/daftar ringkasan; `assets/books.js` pada branch memetakan **25** `coverUrl` langsung ke nama PNG yang diunggah pengguna, menjaga AB-001 yang sudah ada, `coverRightsStatus=pending`, dan mempertahankan seluruh naskah ringkasan serta katalog al-Adni. Semua perubahan ini **belum** masuk `main`.
- **Halangan terakhir:** berkas PNG yang sudah ada dalam percakapan belum dapat di-stream langsung sebagai blob GitHub, karena `container.exec` gagal `ClientError`. Satu unggahan multiberkas ke path `assets/covers/inbox/` pada branch PR diperlukan sebelum gambar ditampilkan. GitHub connector mendukung text commit, tetapi tidak menerima file attachment sebagai blob mentah tanpa bytes yang dapat diakses.
- Hingga unggahan gambar dan QA selesai, **jangan merge PR** atau mengklaim cover live. Setelah file gambar ada, verifikasi 25 URL, kualitas dan jenis cover/halaman judul, keamanan nama file, rights, cache, mobile, dan tindakan akhir melalui GitHub Pages; baru merge dan umumkan hasil.
- Memori ini disimpan pada **branch draft**, bukan penggantian status rilis di `main`.

### Penyimpanan final gambar terpilih — 19 November 2026
- Semua 45 PNG asli telah dicek di branch GitHub (46 item termasuk README). Untuk 25 ID yang membutuhkan cover baru, file asli disalin melalui SHA blob Git tanpa rekode ke `assets/covers/<BOOK_ID>-qiraah.png` dan path di `assets/books.js` diperbarui. Cover AB-001 yang ada tetap dipakai. Semua 45 screenshot tetap ada di `assets/covers/inbox/` untuk jejak sumber serta judul yang belum dipakai. Hak tampil sampul masih ditandai pending secara metadata; jangan mengklaim ada lisensi tertulis yang belum diverifikasi.

## Rilis cover al-Buthi terverifikasi — 19 November 2026
- PR #1 telah **merged** sebagai `d962a0b4d537edab4f91ede5cba74049da6bbd9a`; GitHub Pages workflow `44491830404` **success** dan browser QA menemukan 26 sampul tampil pada Jelajahi, 12 kartu pada beranda, pencarian AB-007 tepat (1 hasil), tanpa broken image. Sumber QA rinci: [QIRAAH_COVER_RELEASE_QA_2026-11-19.md](./QIRAAH_COVER_RELEASE_QA_2026-11-19.md).
- 26 al-Buthi mendapat gambar sampul/halaman judul (25 file baru + 1 lama), 45 PNG asli tetap di inbox. 85 entri beserta semua `summaryMd` tetap utuh; 59 al-Adni tersembunyi dari katalog fokus tetapi masih ada dalam data. Daftar ringkasan hanya disembunyikan dari UI dan fallback HTML; tidak ada penghapusan naskah.
- Hak reproduksi cover `pending`; belum diuji HP, audio, dan seluruh detail kitab. Jangan mengulang tugas cover untuk 26 ID ini jika tidak ada bukti regresi. Selanjutnya selesaikan Batch 3, bukan Batch 4. Tidak ada pengiriman email yang diklaim.

## Aturan wajib terbaru — 21 November 2026
- Katalog sumber terbaru harus dibaca dari [`docs/qiraah/AUDIT_PDF_MD_KATALOG_2026-11-21.md`](docs/qiraah/AUDIT_PDF_MD_KATALOG_2026-11-21.md), **bukan** mengklaim isi ZIP PDF 449MB telah diaudit. ZIP PDF terblokir batas Files 100MB, ZIP MD 5.4MB berhasil materialize tetapi gagal diurai karena container `ClientError`.
- Skill baru [`qiraah-integrity-operator`](.github/skills/qiraah-integrity-operator/SKILL.md) dengan rules tunggal [`QIRAAH_RULES.md`](.github/skills/qiraah-integrity-operator/references/QIRAAH_RULES.md) dibuat atas perintah pemilik. Ini **berkas skill dalam repository**, belum berarti terpasang otomatis di akun ChatGPT.
- Aturan baru mengunci **bab besar asli**, pengantar dari muqaddimah, ringkasan 10–15 menit (kecuali izin eksplisit per nazam), kesimpulan + ajakan + link PDF dan Shopee sah, sampul wajib untuk ringkasan yang diterbitkan, dan **tidak boleh mengubah kata/menu/fitur/UI** tanpa arahan. Default kerja satu kitab sampai jelas, bukan lima untuk mengejar angka.
- Pemilik mengingatkan naskah yang semula tampil tidak boleh hilang sewaktu cover/perubahan UI; semua perubahan harus memiliki diff, cek data/konten lama, tes mobile, dan QA URL live. **Tidak pakai Notion** untuk proyek ini kecuali diminta ulang eksplisit.
- Hitungan dari katalog `assets/books.js`: 85 ID = 26 al-Buthi +59 al-Adni; 70 teks, 15 kosong; 58 dari 70 masih <10 menit, 11 antara 10–15, 1 >15. Katalog Habib Umar bin Hafizh >100 belum dapat dibuktikan/inventarisasi karena ZIP sumber belum terurai; jangan mencampur beliau dengan al-Adni.

## Intake lima PDF Qira'ah dan ringkasan privat — 21 November 2026
- Penerimaan 5 PDF menghasilkan **4 kitab unik**. `AD-039` mempunyai dua cetakan (251 halaman 1429H/2008 dan 276 halaman 1430H/2009); cetakan kedua menjadi `SOURCE_LOCK`, cetakan pertama hanya pembanding. `AB-001` adalah 27 halaman scan tanpa lapisan teks. Dua buku baru al-Adni (`ابتسامة الثغر` dan `إحياء لغة الإسلام العالمية`) masih kandidat ID, tidak menggeser nomor katalog lama.
- Paket privat **`QIRAAH_MD_DAN_DRAF_5_PDF_2026-11-21.zip`** dibuat dalam percakapan: 5 Markdown sumber, gambar privat halaman scan, lima naskah draf 11–12 menit, peta bagian asli, laporan QA, checksum, dan backup ringkasan lama. **Jangan unggah ZIP ini ke GitHub publik**. Berkas paket belum terpasang otomatis ke sesi mendatang; pemilik perlu menyimpannya.
- Naskah draf: nazam 12 menit, `Ihya Lugha` dua seri masing-masing 11 menit, `AD-039` dua seri 11/12 menit. Draf belum lulus seluruh QA per subjudul/glif/riwayat, belum ACC pemilik, link PDF edisi tepat dan Shopee belum lengkap, izin adaptasi/publikasi belum jelas.
- Catatan status publik di [`docs/qiraah/INTAKE_5_PDF_2026-11-21.md`](docs/qiraah/INTAKE_5_PDF_2026-11-21.md). **Tidak mengubah `assets/books.js`, `assets/app.js`, menu, beranda, sampul, atau halaman baca**. Ringkasan lama `AB-001` dan `AD-039` dipertahankan (versi pada main tetap).
- Tindakan berikutnya: selesaikan pemeriksaan teks/edisi, hak per versi, sampul dan link sah; dapatkan ACC pemilik. Baru buat branch publikasi dengan QA regresi sesuai `QIRAAH_RULES.md`. Jangan mengklaim lima draf telah tampil di website.


## Addendum PDF asli, katalog pratinjau, 22 November 2026 — PR belum merge

- Pengguna mengunggah 10 PDF asli (1427 halaman PDF fisik), termasuk dua edisi berbeda untuk satu karya `AD-039` (276p cetakan 1430H/2009 dan 251p cetakan 1429H/2008). **9 karya unik**; jangan duplikasi AD-039.
- `AB-001` adalah PDF scan 27p tanpa lapisan teks, ringkasan situs lama 2347 kata/13 menit dipertahankan. `إشكالية تجديد أصول الفقه` adalah PDF scan 316p dua pengarang (al-Buthi & Abu Ya'rub al-Marzouqi); judul `تحديد` hanya nama file, bukan judul pada sampul.
- Cabang **`qiraah-10pdf-catalog-preview-20261122`** dibuat dari `main` (bukan rilis). `assets/books.js` diperluas 85→90: katalog baru `AD-060` ابتسامة الثغر, `AD-061` إحياء لغة الإسلام العالمية, `AD-062` إزاحة المآثم, `AD-063` إظهار العلم المكنون, `AB-038` إشكالية تجديد أصول الفقه. Nomor `AB-037` **tidak dipakai** karena ada halaman HTML arsip lain dengan ID itu (tanpa record aktif).
- Lima fallback halaman katalog baru ditambahkan, berlabel belum terbit; semua `summaryMd`, `summaryCoverage`, `coverUrl`, dan `published` milik 85 buku lama tidak diubah. Kover PDF asli dipakai **hanya** dalam ZIP pratinjau privat dan bukan publik. Lima kartu baru memakai ilustrasi Qira'ah bawaan (`coverUrl:''`); tiga tautan PDF resmi yang dibuka ditambahkan untuk `AD-060/061/063`, lainnya halaman sumber saja.
- Draf bacaan baru yang benar-benar dibuat **privat**: `AD-040` 1852 kata (10m), `AD-041` 1891 kata (10m), `AD-062` 1887 kata (10m). Lima karya unik lainnya belum memiliki naskah baru 10–15 menit di cabang ini; `AB-001` sudah 13m lama. Peta sumber privat ikut, pemeriksaan setiap bab, izin hak, dan ACC belum final.
- Penting: `QIRAAH_BOUTHI_FOCUS=true` pada `assets/app.js` masih membatasi tampilan UI situs; metadata al-Adni belum otomatis muncul untuk semua pengunjung. Jangan mengubah fokus/desain tanpa QA dan keputusan produk.
- Laporan sumber (SHA-256 PDF, status hak, lokasi dan tautan) di `docs/qiraah/VALIDASI_10_PDF_2026-11-22.md`. **STOP_RELEASE**: rights `audit`, `sourceQc` dan `contentQc` untuk artikel baru belum lulus, editor manusia belum menyetujui, regresi UI/browser dan GitHub Pages belum diuji. PR **draft**, jangan merge sebagai rilis selesai.


### Addendum gambar cover dan kesiapan artikel — 22 November 2026
- Pengguna memberikan **8 screenshot cover** (nama berkas 130444, 130457, 130509, 130617, 130646, 130656, 130713, 130726); mengecualikan *Adab al-Hiwar* dan *Isykaliyyat* dari edit. Aturan terbaru: **tampilkan cover bila ringkasan sesuai target ada; bila tidak, sebut belum siap, jangan mengklaim rilis 10–15 menit**.
- Audit aktual `assets/books.js` PR #3: tiga draf 10 menit **hanya di file privat**, yakni `AD-040` (1852 kata), `AD-041` (1891), `AD-062` (1887). Tidak satu pun draf baru diterbitkan ke `summaryMd`; ringkasan lama dalam katalog AD-040/041 hanya sekitar 1 menit. `AD-060/061/063` kosong; `AD-039` 171 kata, `AD-042` 179 kata → **belum siap 10–15 menit**.
- Dibandingkan gambar sebenarnya dari GitHub: `AD-039.webp`, `AD-041.webp`, dan `AD-042.webp` sudah cocok dengan unggahan (tidak diubah); `AD-040.webp` adalah potongan halaman yang tidak memadai sehingga dikoreksi dengan screenshot pengguna `assets/covers/AD-040-user.webp`; `AD-062` belum punya gambar, kini memakai `assets/covers/AD-062-user.webp`.
- Dua file WEBP **nyata** dan referensinya sudah ditambahkan pada cabang `qiraah-10pdf-catalog-preview-20261122` (draft PR #3). Blob AD-040 = `f2e1f35e7522a211ad905001821882b14a078bdc` dan AD-062 = `3c1d6fa73ff91aa19776efbd8b5df1c509c0cc3a`; gambar asal tetap milik pengguna, yang di repository merupakan thumbnail teroptimasi. Instruksi pengguna untuk memasang cover dicatat, namun bukan bukti lisensi reproduksi pihak ketiga.
- Untuk memungkinkan cover al-Adni muncul di **cabang review**, `QIRAAH_BOUTHI_FOCUS=false` pada `assets/app.js`; 8 ID intake mendapat label `Ringkasan 10–15 menit belum siap` selama `publicationGate` belum lulus. **Tidak otomatis diterapkan ke main; UI browser belum diverifikasi.**
- `AB-001` tidak disentuh, memiliki ringkasan ±13 menit dan cover. `AB-038` menurut `books.js` review **masih tanpa ringkasan/cover** walau pengguna menyebut Isykaliyyat sudah ada; jangan menimpa hingga identitas/ID naskah yang dimaksud terselesaikan.
- Dokumentasi lengkap `docs/qiraah/COVER_8_STATUS_2026-11-22.md` di cabang review; **STOP_RELEASE** ringkasan dan sampul ke `main` sampai hak serta approval terverifikasi. Katalog/artefak lama tidak dihapus.

- **Tindak lanjut cover 22 November 2026:** fallback HTML `kitab/AD-040/index.html`, `kitab/AD-041/index.html`, dan `kitab/AD-062/index.html` ditambah elemen `<img>` cover dan label belum siap, khusus di PR #3; belum merge/deploy.

### Keputusan owner ACC dan perintah rilis, 22 November 2026
- **Instruksi terakhir pemilik:** “aku anggap sdh acc dan sdh ku edit dan baca tampilkan live skrg semuanya ya”. Artinya ACC editorial naskah bacaan yang **memang sudah ada** (AD-040, AD-041, AD-062), **tidak** berarti lima judul yang belum punya artikel dinyatakan selesai.
- Tiga `summaryMd` baru dari dokumen privat disalin ke `assets/books.js` dengan bagian peta sumber privat dilepas; AD-040 ±10m, AD-041 ±11m, AD-062 ±11m; `summaryCoverage=partial`, `ownerFinal=true`, `humanApproval=true`, `published=true`. `rights=audit` secara sengaja **tetap**; izin pihak ketiga belum terverifikasi. Lihat `docs/qiraah/RILIS_ACC_PEMILIK_2026-11-22.md`.
- `assets/app.js`: `QIRAAH_10PDF_PENDING` disempitkan menjadi `AD-039/042/060/061/063`; ketiga artikel ACC muncul dalam pembaca situs. `QIRAAH_BOUTHI_FOCUS=false` untuk dua pengarang pada cabang rilis.
- Fallback HTML `kitab/AD-040`, `AD-041`, `AD-062` kini menampilkan sampul nyata dan link menuju pembaca `#/baca/<id>`, dengan durasi akurat.
- Workflow CI lama masih dirancang untuk 85 kitab dan fokus al-Buthi; dibuat `scripts/qa_qiraah_10pdf_live.cjs` dan pemilihan tes sesuai branch di `.github/workflows/qa-bouthi-covers.yml`. Tes CI serta merge/deploy harus diverifikasi, jangan klaim live sebelum sukses.
