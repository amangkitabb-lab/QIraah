# Qira’ah — Batch 4: audit sumber, peta bab primer, dan daftar kerja
**Pemeriksaan:** 17 November 2026 (WIB).  
**Status:** `source_audit_in_progress`, **bukan** lima ringkasan baru atau rilis.  
**Katalog acuan:** `assets/books.js` GitHub `main` sebelum perubahan batch ini, 85 entri.  
**Arsip hak:** bukti per edisi belum terkunci; catatan administratif ini **tidak** menerbitkan teks sumber maupun naskah adaptasi.

## A. Seleksi Batch 4 — tidak mengulang Batch 1–3

Batch 1 = AD-026, AD-029, AD-034, AD-035, AD-033.  
Batch 2 = AD-027, AD-032, AD-030, AD-028, AD-031.  
Batch 3 **masih belum selesai**: AB-001, AB-007, AB-030, AB-031, AB-011 (baru sumber/preflight).

| BOOK_ID | Judul katalog | Edisi pembanding (bukan lock PDF pengguna) | Naskah situs lama | Kebutuhan |
|---|---|---|---:|---|
| **AB-027** | هكذا فلندع إلى الإسلام | Dar al-Fikr cetak 2020, **112 hlm**, ISBN 9789933361761; Shamela teks 26 **nomor otomatis**, bukan halaman cetak | 1.992 kata, 5 kelompok besar, `full` berlabel | Cocokkan 12 subbagian asli dan peta isi sebelum revisi |
| **AB-036** | أوربة من التقنية إلى الروحانية | Dar al-Fikr edisi Arab 2018 / toko 112 hlm; edisi bahasa lain 64 hlm: **jangan campur** | 190 kata, `partial` | Periksa PDF dan bab asli; identitas edisi berbeda |
| **AB-010** | حرية الإنسان في ظل عبوديته لله | Dar al-Fikr cetak 2015, **128 hlm**, ISBN 9789933108922 | 186 kata, `partial` | Daftar isi, muqaddimah, argumen tentang kebebasan–ubudiyyah |
| **AB-035** | مدخل إلى فهم الجذور: من أنا ولماذا وإلى أين | Dar al-Fikr 2017, **144 hlm**, ISBN 9789933360238; katalog yang dibuka mendeskripsikan **terjemahan Prancis**, perlu cek apakah edisi bersesuaian | 192 kata, `partial` | Kunci versi Arab vs Prancis; audit judul dan bab, jangan samakan |
| **KR-016** | عائشة أم المؤمنين رضي الله عنها | Dar al-Fikr cetak 2018, **144 hlm**, ISBN 9789933361150 | 513 kata, `partial` | Peta bab dan isi dengan rujukan historis/takhrij |

**Pemilihan bersifat provisional**, bukan lima PDF terpendek dalam semua sumber. Berkas `KITAB PDF.zip` besar tidak bisa diinventarisasi dalam pembaca Project (449.680.907 byte > batas 104.857.600 byte); container untuk membongkar `KITAB MD.zip` saat ini gagal. Semua angka di atas adalah **jumlah halaman edisi cetak** / versi Shamela, **bukan** hasil hitung PDF ZIP pengguna. Prioritas kitab <=100 halaman tetap berlaku begitu sumber tersedia.

## B. Sumber dengan identitas terverifikasi

| ID | Tautan bukti | Apa yang dapat dan tidak dapat dibuktikan |
|---|---|---|
| AB-027 | [Penerbit](https://fikr.com/products/fikr-3063); [Shamela, daftar isi & teks](https://shamela.ws/book/1751); [PDF terdaftar di katalog website](https://archive.org/download/elbouti/hakadha.pdf) | Penerbit memuat **muqaddimah pengarang**; Shamela memuat TOC dan teks banyak halaman. **Nomor halaman otomatis tidak sama dengan edisi cetak**; edisi PDF pengguna belum dicocokkan visual |
| AB-036 | [Penerbit](https://fikr.com/collections/%D9%85%D8%A4%D9%84%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D9%88%D8%B7%D9%8A/products/fikr-1351); [katalog edisi 112 hlm](https://www.neelwafurat.com/itempage.aspx?id=lbb392565-390121&search=books); [PDF yang terdaftar](https://archive.org/download/elbouti/oroba.pdf) | Kajian berawal dari ceramah Juni 1999 di Paris dan London. Uraian penerbit adalah **deskripsi**, bukan bacaan lengkap bab |
| AB-010 | [Penerbit](https://fikr.com/collections/%D9%85%D8%A4%D9%84%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%B1%D9%85%D8%B6%D8%A7%D9%86-%D8%A7%D9%84%D8%A8%D9%88%D8%B7%D9%8A/products/fikr-225); [PDF terdaftar](https://archive.org/download/elbouti/horia.pdf) | Penerbit mengidentifikasi pertanyaan utama tentang kehendak manusia, qada-qadar, kebebasan berekspresi dan kebijakan. **Bukan TOC asli** |
| AB-035 | [Penerbit](https://fikr.com/collections/%D9%83%D8%AA%D8%A8-%D8%A3%D8%B9%D9%8A%D8%AF%D8%AA-%D8%B7%D8%A8%D8%A7%D8%B9%D8%AA%D9%87%D8%A7/products/fikr-509); [PDF terdaftar](https://archive.org/download/elbouti/fahmjodour.pdf) | Judul dan pertanyaan eksistensial diketahui; halaman katalog bertuliskan **terjemahan Prancis**. **Edisi belum sinkron** |
| KR-016 | [Penerbit & muqaddimah penulis](https://fikr.com/collections/best-selling-collection/products/fikr-2986?_fid=e68faf3ae&_pos=30&_ss=c); [PDF terdaftar](https://archive.org/download/elbouti/aicha.pdf) | Muqaddimah asli tersedia: kehidupan Aisyah dikaji sebagai jendela masyarakat awal Islam, posisi perempuan, relasi agama dan politik. **Daftar isi PDF belum dibaca** |

**Aturan lima identitas per buku**:
- `BOOK_ID`: sesuai tabel; `EDITION`: edisi penerbit pembanding saja, **edition_lock=pending**;
- `SOURCE_LOCK`: URL situs / PDF kandidat, **checksum belum ada**;
- `RIGHTS_STATUS=rights_audit_not_cleared`, per karya/edisi;
- `CURRENT_PHASE=metadata_and_toc_audit` (AB-027), `metadata_audit` (empat lainnya).

## C. AB-027 — peta struktur **asli** berdasarkan teks kitab, bukan sinopsis

**Rujukan:** [Shamela book ID 1751](https://shamela.ws/book/1751); label halamannya **nomor otomatis**, bukan halaman cetakan. TOC digital memberi **5 kelompok utama dengan 12 subjudul substantif**. Peta berikut adalah **inventaris judul asli dan pokok yang sudah didukung cuplikan teks**. Peta ini tidak menggantikan pencocokan dengan PDF sumber pengguna.

| Urut | Struktur judul sumber | Jangkar Shamela | Pokok bahasan sementara | Gate |
|---|---|---|---|---|
| Muq. | مقدمة (teks pendahuluan, bukan heading TOC tersendiri) | [1](https://shamela.ws/book/1751/1)–2 | Mengapa risalah singkat dakwah diperlukan saat keraguan intelektual berkurang tetapi metode dakwah dan adab belum tertata | Dibaca p1; p2 belum |
| Kel. 1 | الشروط الأولية لسلامة الدعوة | [3](https://shamela.ws/book/1751/3) | Tiga prasyarat dakwah | TOC ada |
| 1.1 | الشرط الأول: أن يتحقق الإسلام الصحيح في شخص الداعي اليه | [3](https://shamela.ws/book/1751/3)–4 | Pengajak hendaknya berusaha mengamalkan Islam dan memeriksa keikhlasan sebelum menasihati | Cuplikan primer dicek |
| 1.2 | الشرط الثاني: أن تشيع الدعوة أولا في صفوف المسلمين أنفسهم | [5](https://shamela.ws/book/1751/5) | Membina perilaku masyarakat Muslim dahulu supaya menjadi kesaksian nyata bagi orang lain | Cuplikan primer dicek |
| 1.3 | الشرط الثالث: أن يتبصر الداعي الى الاسلام بالأحكام الإسلامية المتعلقة بالدعوة وآدابها | [6](https://shamela.ws/book/1751/6) | Pengetahuan tentang hukum dan adab membatasi tindakan yang hanya digerakkan emosi | Cuplikan primer dicek |
| Kel. 2 | منطلقات الدعوة | [7](https://shamela.ws/book/1751/7) | Tiga dasar gerak pendakwah dan akibatnya | TOC ada |
| 2.1 | المنطلق الأول: ويتمثل في معرفة أن أعمال الدعوة الاسلامية ليست في حقيقتها إلا عبادة | [7](https://shamela.ws/book/1751/7)–8 | Dakwah sebagai ibadah, bukan persaingan dan pembelaan reputasi diri | Cuplikan primer dicek |
| 2.2 | المنطلق الثاني: ويتمثل في ضرورة الا تنبعث اعمال الدعوة الاسلامية إلا من شعور غامر بالشفقة والرحمة لعباد الله جميعا | [8](https://shamela.ws/book/1751/8)–10 | Perasaan iba kepada manusia mesti dibedakan dari permusuhan personal; contoh introspeksi penulis di [10](https://shamela.ws/book/1751/10) | Cuplikan primer dicek |
| 2.3 | المنطلق الثالث: ويتمثل في اليقين بأن القيام بأعباء الدعوة إلى الإسلام، ليس إلا اداء للواجب | [11](https://shamela.ws/book/1751/11)–12 | Tugas menyampaikan, bukan menguasai hasil; pendakwah mengendalikan amarah demi hak diri | Cuplikan p11; p12 belum |
| 2.4 | الآثار التي تتحقق بالتزام هذه المنطلقات | [13](https://shamela.ws/book/1751/13) | Sikap rendah hati dan kelembutan mengurangi reaksi defensif; bukan jaminan hasil instan | Cuplikan primer dicek |
| Kel. 3 | منهجية الدعوة | [14](https://shamela.ws/book/1751/14)–17 | Urutkan penjelasan keyakinan dan pembinaan akhlak; contoh bimbingan bertahap dijumpai p16 | Cuplikan p14,p16; lainnya belum |
| Kel. 4 | مشكلات الدعوة | [18](https://shamela.ws/book/1751/18) | Penulis menyebut tiga kekeliruan yang memperburuk penerimaan dakwah | Cuplikan primer dicek |
| 4.1 | المشكلة الأولى: مسألة تكفير الناس | [18](https://shamela.ws/book/1751/18)–20 | Peringatan bahaya mudah mengkafirkan ketika emosi mendahului ilmu | Cuplikan awal; kelanjutan belum |
| 4.2 | المشكلة الثانية: مسألة دار الكفر ودار الإسلام | [21](https://shamela.ws/book/1751/21)–23 | Kehati-hatian menggunakan klasifikasi wilayah dalam literatur fikih, bukan dasar mencaci masyarakat | Cuplikan primer dicek |
| 4.3 | المشكلة الثالثة: سياسة المسلم مع أهله وأسرته | [23](https://shamela.ws/book/1751/23)–25 | Bimbingan keluarga dengan pengetahuan, adab, dan tanggung jawab | Awal p23; lanjutan perlu cek |
| Kel. 5 | وأخيرا.. هكذا فلندع إلى الإسلام | [26](https://shamela.ws/book/1751/26) | Penulis menutup dengan menghubungkan ilmu, penyucian diri, kasih sayang, dan cara berdakwah | Cuplikan primer dicek |

**Perbandingan website:** `assets/books.js` untuk AB-027 saat pemeriksaan berisi **1.992 kata** dan lima heading besar (`## Bagian 1` sampai `## Bagian 5`), sudah lebih panjang daripada kebanyakan entri lain. Tetapi tampilan lima bagian itu belum setara dengan daftar subjudul asli di atas. **Belum boleh diklaim 12 subjudul telah diberi ringkasan khusus**. Jangan menaikkan label `full` berdasarkan peta ini saja.

### D. Catatan editorial dari pengantar AB-027 yang benar-benar dibaca
Pengarang menyebut adanya perubahan situasi intelektual dan minat generasi muda yang menurut pengamatannya membuka kebutuhan baru bagi da'i. Ia juga memperingatkan bahwa emosi keagamaan tanpa ilmu dapat mengubah seruan menjadi pertarungan nama, kemarahan, dan saling menyerang. Karena itu ia sengaja membuat risalah yang ringkas tentang **prasyarat**, **landasan sikap**, **metode**, dan **tiga persoalan dakwah**. Ini ringkasan motivasi dari **muqaddimah pengarang** yang terbuka di halaman penerbit dan Shamela, bukan prolog karangan editor.
- [Teks muqaddimah penerbit](https://fikr.com/products/fikr-3063)
- [Muqaddimah Shamela](https://shamela.ws/book/1751/1)

## E. Gerbang rilis dan langkah berikutnya

- [x] Lima `BOOK_ID` dipisahkan dari semua kandidat Batch 1, 2, dan 3.
- [x] Metadata edisi **pembanding** diperiksa lewat penerbit/katalog.
- [x] AB-027: lima kelompok, subjudul masing-masing, dan alasan penulisan dari teks primer terpetakan; beberapa halaman digital masih tak terbuka.
- [ ] Semua PDF asli di ZIP diinventarisasi, jumlah halaman digital dicek, edisi pengguna dicocokkan, SHA-256 dicatat.
- [ ] Peta TOC **semua** 5 judul tuntas dan teks asli tiap bagian dibaca.
- [ ] Naskah Indonesia baru per bagian benar-benar ditulis dan diaudit; hitungan kata aktual, panjang ±10–15 menit jika didukung sumber.
- [ ] `source_qc=passed`, `content_qc=passed`, `human_review=passed`, `rights_clearance` per karya/edisi.
- [ ] Publikasi naskah baru pada `assets/books.js` dan halaman `kitab/<ID>/index.html`, QA browser/mobile/audio dan URL live.
- [ ] Email laporan setelah pekerjaan selesai dari identitas pengirim yang berizin dan pengiriman terverifikasi.

**Keputusan:** menyimpan **audit administratif** ini aman dalam repo publik, tetapi **tidak** menyimpan halaman PDF/MD, catatan izin pribadi, atau draft panjang yang belum lolos hak. Batasi klaim: Batch 4 mulai ditelusuri, **belum ada naskah batch 4 yang selesai diterbitkan**. Batch 3 masih terbuka.

Rujukan proyek: [Memori](./MEMORI_PROYEK_QIRAAH.md) · [Antrean](./QIRAAH_BATCH_QUEUE.json) · [Audit Batch 3](./QIRAAH_BATCH3_SOURCE_AUDIT_2026-11-16.md)

## F. Koreksi metadata publik selama Batch 4 (17-11-2026)
**Bukti commit:** [`be02ad4`](https://github.com/amangkitabb-lab/QIraah/commit/be02ad436eb7f7608647f3bf89d67b24be113ec6).

Karena `AB-027` di website hanya memiliki lima heading besar sementara daftar isi sumber digital memuat subjudul spesifik yang belum diwakili sebagai heading mandiri sesuai SOP terbaru pemilik, **`summaryCoverage` untuk AB-027 diganti `full` → `partial`**. Ini adalah koreksi label **cakupan editorial**, bukan revisi isi kitab atau klaim bahwa isi sumber baru telah lengkap.
- 85 buku tetap ada; judul, sampul, urutan, `summaryMd` AB-027 **1.992 kata** dan `readMinutes=11` tidak berubah.
- `sourceQc` dan `contentQc` tetap `pending`; status `rights` tetap `audit`.
- Reader kini dirancang menampilkan label **Seri ringkasan tersedia** dan penjelasan cakupan belum lengkap dari logika `assets/app.js`.
- Versi muatan `assets/books.js` pada `index.html`, `ringkasan/index.html`, `jelajahi/index.html`, `rak/index.html`, `kitab/AB-027/index.html`, dan `tentang/index.html` dinaikkan ke `b4-20261117` demi menghindari cache data lama.
- **Status verifikasi:** perubahan di repository dan enam URL sumber halaman diverifikasi lewat API GitHub; status GitHub Pages/deployment dan tampilan live harus diuji lagi. Uji visual HP/audio belum dilakukan.

Semua tabel di atas yang menyebut `AB-027` sebagai `full` adalah **snapshot SEBELUM koreksi ini**, bukan kondisi yang berlaku sesudah commit.

## G. Draf editorial privat AB-027 (17 November 2026)
- Draf bahasa Indonesia **disimpan di Notion sebagai halaman privat/draft**, bukan halaman website atau berkas dalam repo publik. Judul halaman: `Qira’ah Batch 4 — Draf Privat AB-027 (Audit Sumber Belum Final)`. Link privat tidak ditulis di repo publik.
- Pemeriksaan baca-balik Notion berhasil. Konten dokumen memiliki **6 heading besar** (termasuk pengantar) dan **11 subheading isi**; pembahasan penutup merupakan heading besar terakhir tersendiri. Dengan demikian naskah berusaha mengikuti **12 bagian isi** di samping muqaddimah, bukan lima kelompok besar saja.
- Penghitungan kata dari **narasi utama** antara heading muqaddimah dan catatan audit (tanpa metadata, judul heading, tautan sumber, dan checklist): **1.719 kata**, setara kira-kira **10 menit** jika pembulatan `Math.ceil(kata/190)`. Durasi ini adalah **draf**, bukan menit yang diumumkan pada website.
- Isinya mengacu pada cuplikan teks sumber digital di Shamela yang bisa dibaca (antara lain nomor 1,3,5,6,7,8,10,11,13,14,16,18,21,22,23,25,26), dengan tautan sumber per bagian. Beberapa halaman digital masih belum terbaca atau tidak lengkap, sehingga klaim kelengkapan sumber belum memenuhi standar `source_qc=passed`.
- **Tidak diterbitkan di `assets/books.js`**. Teks website AB-027 tetap 1.992 kata lama / ±11 menit dan label `partial`. Draf memerlukan pencocokan PDF, pemeriksaan materi fikih sensitif, izin publikasi per edisi, dan review manusia.
