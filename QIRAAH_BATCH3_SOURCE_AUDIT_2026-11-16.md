# Qira'ah — Batch 3: shortlist PDF pendek dan audit keterbatasan sumber
Tanggal: 16-11-2026 (Asia/Jakarta). Tahap: **seleksi sumber / source preflight**, **belum** ringkasan baru.

## Lima kandidat kerja (urut pendek yang dapat dipertanggungjawabkan)
Tidak menyatakan ini lima terpendek dalam ZIP pengguna: ZIP belum terinventarisasi. Empat jumlah halaman dicocokkan langsung dari metadata hasil pembacaan URL PDF Archive.org pada sesi ini; satu dari catatan katalog terdahulu, belum diverifikasi ulang.

| BOOK_ID | Judul Arab katalog | Halaman PDF | Bacaan publik sebelumnya | Cakupan saat ini | Tindakan |
|---|---|---:|---:|---|---|
| AB-001 | أدب الحوار في كتاب الله | 27 (metadata katalog, belum dicek ulang) | 2.320 kata / ±13 menit | full (perlu QA edisi) | Selesaikan konflik URL sumber, verifikasi TOC lima bagian dan cuplikan teks PDF |
| AB-007 | العقوبات الإسلامية وعقدة التناقض بينها وبين ما يسمى بطبيعة العصر | **35** | 602 kata / ±4 menit | full (perlu audit granular) | Peta seluruh bagian dan kembangkan argumen dari sumber; audit klaim fikih |
| AB-030 | العناية بالعبادات أساس لا بد منه لتثبيت المجتمع الإسلامي | **36** | 736 kata / ±4 menit | full (perlu audit granular) | Bandingkan muqaddimah, semua judul bab, dan isi ringkasan |
| AB-031 | مجمل الشبهات التي تثار حول تطبيق الشريعة الإسلامية في العصر الحديث | **49** | 641 kata / ±4 menit | full (perlu audit granular) | Daftar tiap subbagian/syubhat dan jawaban penulis; audit konteks |
| AB-011 | دفاع عن الإسلام والتاريخ | **63** | 653 kata / ±4 menit | partial | Lengkapi bagian akhir yang draf lama akui belum diaudit, telusuri sumber sejarah |

**Prioritas pembaruan isi:** AB-007, AB-030, AB-031, AB-011. AB-001 adalah pekerjaan QA edisi yang juga masuk lima unit batch (bukan pengakuan bahwa ringkasannya perlu ditulis ulang). Empat yang pertama merupakan calon perbaikan ringkasan lama, bukan penambahan jumlah katalog. Urutan hasil pemrosesan boleh berubah setelah inventaris ZIP.

## Bukti sumber yang benar-benar didapat
- AB-007: `https://archive.org/download/elbouti/3oqoubate.pdf` — metadata `totalPages:35`, HTTP 200; **hanya 3 halaman awal** ditelusuri dalam uji metadata.
- AB-030: `https://archive.org/download/elbouti/3inaya.pdf` — `totalPages:36`, HTTP 200; hanya 3 halaman awal.
- AB-031: `https://archive.org/download/elbouti/mojmalchobohate.pdf` — `totalPages:49`, HTTP 200; hanya 3 halaman awal.
- AB-011: `https://archive.org/download/elbouti/difa3.pdf` — `totalPages:63`, HTTP 200; hanya 3 halaman awal.
- AB-001: `assets/books.js` menyatakan `pdfUrl` dari koleksi `nasai_yopmail_20180313`, tetapi naskah `summaryMd` menuliskan `SOURCE_LOCK` dari `elbouti/adabhiwar.pdf`. Ini **konflik edisi/URL** yang harus diselesaikan terhadap PDF sebelum mengubah klaim QC atau ringkasan.

## Kondisi dan batasan penting
- Sumber primer pengguna: `KITAB PDF.zip` (449.680.907 bytes) **tidak terbaca melalui pembaca Project** karena batas 104.857.600 byte. `KITAB MD.zip` (5.424.268 bytes) berhasil ditempatkan di container melalui Files, tetapi alat container tidak merespons pada sesi ini sehingga berkasnya belum bisa dibuka/diinventarisasi. Pembaca Files tidak menampilkan isi ZIP.
- Pencarian koleksi naskah melalui Shamela gagal secara internal; layanan Firecrawl kehabisan kredit pada upaya membaca lengkap PDF AB-007, sehingga **tidak ada bukti pembacaan 35 halaman secara utuh**.
- Semua calon berstatus `rights=audit` pada data publik. Pemilik dahulu menyatakan memperoleh izin karya al-Buthi, tetapi dokumen cakupan/edisi belum dicocokkan. Karena itu **jangan** mengirim PDF/MD mentah, naskah adaptasi yang belum lolos hak, atau draf privat ke GitHub publik.
- Perhitungan menit menggunakan pembagian 190 kata per menit dan dibulatkan ke atas; kata yang tercantum adalah hitungan naskah yang saat ini ada di `assets/books.js`, bukan jumlah kata naskah batch3 baru. Kebutuhan lebih detail tidak boleh dipenuhi dengan paragraf generik.
- Peta seluruh daftar isi asli, muqaddimah lengkap, QA ayat/hadis, audit filologis, dan naskah baru **belum dilakukan**. Tidak ada yang diberi status ACC dan **website tidak diubah** oleh laporan ini.

## Pekerjaan tertunda dari Batch 2
- AD-028 `الوثيقة` (352 halaman): sekitar 35 kelompok tematik namun subjudul kecil PDF belum semua dijelaskan; perlu 2 unit sumber dan pemeriksaan granular.
- AD-031 `الأسس والمنطلقات` (469 halaman): sekitar 40 kelompok tematik; subjudul kecil masih belum dituntaskan; perlu 3 unit sumber.
Keduanya mempertahankan label ringkasan tematik **partial**.

## Aturan lanjut
- Sumber PDF asli pengguna otoritas bila dapat diakses. Bila memakai mirror Archive.org, cocokkan identitas dan edisi; jangan diam-diam menganggapnya sama dengan ZIP asli.
- Mulai tiap buku dengan `BOOK_ID`, `EDITION`, `SOURCE_LOCK`, `RIGHTS_STATUS`, `CURRENT_PHASE`. Petakan setiap heading asli dan jangkar halaman, lalu tulis isi ringkasan berurutan dan audit sebelum publikasi.
- Tiap akhir batch laporkan progres per ID, kata dan menit aktual, hasil source/content/human/right gates, bukti GitHub & URL live, lalu sampaikan pemberitahuan di chat dan email **hanya jika tersedia pengirim terotorisasi dan pengiriman benar-benar berhasil**. Tidak ada pengiriman email otomatis/background.
- Sampai penghalang sumber teratasi, jangan menandai batch3 selesai atau menyatakan ada ringkasan baru diterbitkan.

## Sumber administrasi
[Memori proyek](./MEMORI_PROYEK_QIRAAH.md) · [Pipeline editorial](./QIRAAH_EDITORIAL_PIPELINE.md) · [Antrean](./QIRAAH_BATCH_QUEUE.json) · [Serah terima](./QIRAAH_BATCH3_HANDOFF_2026-11-16.md)

## 6. Fragmen sumber primer AB-007 yang sudah diperiksa
Sumber: halaman **Nasim al-Sham** yang menampilkan nama dan teks pengarang, https://naseemalsham.com/persons/muhammad_said_ramadan_al_bouti/subjects/view/36465 , bertanggal 12-11-2012. Halaman ini menyediakan tulisan pembuka dan link PDF. Sumber primer teks HTML ini **bukan** verifikasi bahwa semua halaman PDF Archive yang berjumlah 35 merupakan cetakan yang sama.

**Jejak gagasan dalam pembuka resmi (bahasa editor, bukan kutipan langsung):**
1. Menetapkan dua jenis sanksi menurut al-Buthi: yang jenis dan ketentuannya telah ditetapkan secara tekstual, serta yang diserahkan dalam batas tertentu kepada kewenangan otoritas/penguasa.
2. Menghubungkan kelompok hukuman pertama dengan penjagaan lima kebutuhan pokok yang disebutnya: agama, jiwa, akal, nasab, dan harta. **Catat sebagai penyusunan argumentasi pengarang, bukan otoritas Qira'ah memutus perkara pidana.**
3. Menyebut perbedaan nilai hukum antara pelanggaran pokok dan pelanggaran turunan yang ditangani melalui `ta'zir`.
4. Membatasi fokus persoalan pada keberatan masyarakat modern mengenai relevansi dan ketegasan hukuman yang menurut penulis bersumber dari nash.
5. Mengajukan urutan pembahasan: apa saja bentuk pertentangan yang dipersepsikan, dari mana gagasan pertentangan itu berasal dan bagaimana nilainya jika diperiksa secara ilmiah, lalu jalan menjawab keberatan tersebut.

**Kesimpulan audit terbatas**: sebagian motivasi penulisan sudah bersumber langsung dari teks pengarang: ia ingin menjawab keberatan tentang hukum pidana Islam di mata masyarakat modern. Ini dapat menjadi bahan paragraf pembuka ringkasan AB-007 setelah diverifikasi terhadap muqaddimah edisi PDF yang dikunci. **Belum** didapati daftar isi asli, pembahasan terperinci dan contoh dalam seluruh risalah, sehingga belum memenuhi standar menulis ringkasan per bab yang lengkap.
