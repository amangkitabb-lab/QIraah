# QIRAAH RULES — Aturan Wajib Proyek
Versi: **1.0 — 21 November 2026**  
Pemilik: proyek Qira’ah. Status: keputusan editorial dan tata kelola teknis terbaru.  
Tujuan: **menjaga kitab dan ringkasannya tetap setia pada sumber, menghindari pekerjaan semu, serta mencegah regresi website**.

> **Kontrak STOP:** Jika satu pemeriksaan wajib tidak punya bukti, berhenti pada tahap itu, tandai `BELUM LULUS` dan jelaskan penyebabnya. Jangan mengubah status menjadi selesai untuk menyenangkan pemilik. Jika aturan lama bertentangan dengan instruksi eksplisit pemilik yang lebih baru, pakai instruksi terbaru dan catat perubahannya.

## I. Otoritas dan batas pekerjaan

**R01 — Sumber adalah bukti.** PDF edisi yang ditetapkan pemilik adalah otoritas isi. MD/OCR adalah alat bantu, bukan bukti otomatis bahwa semua halaman tersedia atau benar. Daftar judul, sampul, metadata, sinopsis, website pihak ketiga dan respons AI **tidak menggantikan pembacaan PDF**.

**R02 — Jangan lompat tahap.** Untuk setiap ID bedakan: `archive_received`, `pdf_found_in_zip`, `pdf_opened`, `pdf_text_extracted`, `pdf_visual_qa`, `md_matched`, `source_locked`, `chapter_map_approved`, `summary_drafted`, `source_qc`, `content_qc`, `editorial_approval`, `rights_clearance`, `cover_ready`, `links_checked`, `website_qa`, `publication_status`. Nilai satu kolom tidak boleh otomatis mengisi kolom lain. `ownerFinal=true` pada katalog lama **tidak** berarti semua gate lulus.

**R03 — Audit ZIP dahulu untuk daftar lengkap.** Catat nama file internal persis, ukuran, SHA-256, jumlah halaman, status terenkripsi/korup, awal–tengah–akhir, daftar isi, penutup, dan halaman tanpa teks. Untuk MD catat pasangan PDF beserta keyakinan pencocokannya. Jika ZIP 450 MB tidak bisa dibuka, tulis **`ZIP_ACCESS_BLOCKED`**, jangan menebak daftar PDF dari 85 judul katalog atau dari gambar sampul.

**R04 — Empat status sumber, tak boleh dicampur.** ✅ = PDF spesifik **pernah dibaca dengan bukti halaman/struktur**; ⚠ = sebagian halaman, edisi lain, atau OCR rusak; ❌ = file/arsip spesifik **sudah dicoba tetapi gagal dibuka**; ? = **belum diuji**. Catat penyebab, lokasi, versi, dan waktu tes. Tidak boleh memberi ❌ pada PDF individual hanya karena ZIP induk terlalu besar, atau ✅ hanya karena ada `pdfUrl`.

**R05 — Jangan anggap pemilik harus mengunggah ulang semua.** Pakai sumber yang sudah tersedia. Jika ada blokir, sebutkan **nama arsip/file spesifik dan tes yang gagal**, serta jalan kerja paling sedikit yang dibutuhkan; jangan minta ulang seluruh arsip atau mengulang pertanyaan yang sudah dijawab.

**R06 — Pengarang dan edisi harus tepat.** Habib Abu Bakar al-Adni berbeda dari Habib Umar bin Hafizh; kedua katalog tidak boleh digabung tanpa data. Bentuk Arab judul, edisi, dan tahun harus diperiksa dari sumber. Cover belum membuktikan adanya PDF; PDF belum membuktikan naskah sudah diringkas.

## II. Ringkasan wajib sebelum masuk website

**R07 — Panjang utama 10–15 menit.** Untuk artikel ringkasan biasa, target bacaan utama **±1.900–2.850 kata bahasa Indonesia**, dihitung `ceil(kata_narasi_utama / 190)`. Metadata, judul, daftar isi dan daftar sumber tidak dihitung. Panjang target bukan izin mengarang atau menambah pengantar berulang. Bila sumber benar-benar pendek atau berupa nazam, kurang dari 10 menit **hanya dengan pengecualian eksplisit pemilik per kitab**, serta mencatat alasan dan cakupan yang tuntas.

**R08 — Kitab besar wajib berseri.** Pada kitab >200 halaman, alokasikan kira-kira satu unit kerja setiap 200 halaman (352 → minimal 2; 469 → minimal 3), dengan batas **bab besar/argumen asli**, bukan memotong paragraf sembarang. Kitab >400 halaman tidak boleh diringkas 10–15 menit sekali lalu diberi label `full`. Setiap seri mengikuti durasi normal, dan `full` hanya setelah semua bab besar tercakup serta QA selesai.

**R09 — Pendahuluan berasal dari pengarang.** Mulai dengan alasan/tujuan kitab dari `مقدمة` atau `تمهيد`/prolog yang memang ada. Jika tidak ditemukan, nyatakan **`muqaddimah tujuan penulisan tidak ditemukan`**, bukan menulis alasan rekaan. Bedakan pengantar penerbit dan pengantar penulis.

**R10 — Urutan bab besar tidak boleh diganti.** Jika sumber mempunyai **6 bab besar**, tampilkan 6 bab besar dengan urutan serta judul yang sama; terjemahan Indonesia boleh menyertai judul Arab. Subjudul kecil boleh dipetakan dalam matriks internal dan dijelaskan di bawah bab induknya; **tidak boleh dihilangkan tanpa jejak** atau dibuat seolah-olah enam bab baru karangan editor adalah judul penulis. Jika kitab tidak memakai bab, hormati bentuk aslinya (khutbah, tema, qasidah, bait nazam) dan beri label eksplisit bila perlu kelompok editorial.

**R11 — Ringkas isi, bukan hanya prolog.** Tiap bab memuat pokok klaim, alur alasan, contoh/kisah/dalil yang benar-benar ada, batas kesimpulan pengarang, dan hubungannya dengan bab sesudahnya. Tidak mengarang dalil, percakapan, kisah, fatwa, kutipan Arab, derajat hadis, atau lokasi halaman. Kesetiaan sumber mengalahkan gaya bahasa indah.

**R12 — Nazam/manzumah mendapatkan prosedur khusus.** Tandai bait/rentang sumber dan tema dari bait asli. Jangan memalsukan struktur nazam menjadi prosa bab yang seolah ditulis pengarang. Bila OCR rusak, minta foto halaman/bait **yang spesifik** dan catat apakah pemilik telah menyediakan koreksi; jangan mengira-ngira teks Arabnya.

**R13 — Penutup dan ajakan bersumber.** Akhiri dengan: (1) ringkasan kesimpulan pengarang; (2) implikasi/ajakan yang relevan dengan persoalan yang dibahas, berlabel refleksi editor bila bukan kata penulis; (3) ajakan membaca kitab asli. Jangan membuat kesimpulan baru yang bertentangan dengan penulis.

**R14 — Dua tautan akhir.** Sertakan tautan PDF/Archive yang **benar sesuai edisi dan sah untuk ditautkan**, serta tautan Shopee yang **terverifikasi** bila tersedia. Bedakan tegas `produk langsung`, `pencarian Shopee`, dan `affiliate pemilik`. Jangan membuat tautan produk, harga, stok, atau referral fiktif. Jika belum ada, catat `LINK_SHOPEE_PENDING` dan minta sumber produk/affiliate ketika relevan; jangan mengganti dengan situs belanja lain.

**R15 — Cover wajib untuk ringkasan baru yang dipublikasikan.** Pastikan buku memiliki sampul/halaman judul yang cocok dengan judul dan edisi. Jika cover belum tersedia, minta **hanya** gambar untuk ID tersebut kepada pemilik atau cari sumber yang boleh digunakan. Bedakan `cover` dan `title_page`. Kehadiran cover tidak membuat ringkasan menjadi lengkap. **Kitab tanpa ringkasan boleh tetap tampil di katalog** dengan label jujur.

**R16 — ACC harus nyata.** Setidaknya: sumber dan edisi terkunci, bab besar lengkap, panjang yang sesuai atau pengecualian eksplisit, koreksi Arab/ayat/hadis yang membutuhkan verifikasi selesai, naskah Indonesia sudah diedit, sampul benar, dua tautan ditangani, editorial pemilik/reviewer jelas, dan hak adaptasi/publikasi tercatat. Hak PDF gratis != izin adaptasi. Jika salah satu gate belum lulus, simpan sebagai `DRAFT/REVIEW`, **jangan** menyajikannya sebagai ringkasan final.

## III. Website dan integritas katalog

**R17 — Kunci kata dan desain yang sudah disepakati.** Jangan mengganti heading, CTA, menu, warna, foto, urutan halaman, label seperti `Kenali`, atau susunan beranda atas inisiatif sendiri. Ambil snapshot versi GitHub yang terakhir disetujui pemilik; perubahan copy/visual perlu instruksi eksplisit + sebelum/sesudah. Tidak boleh menambah fitur karena merasa lebih bagus.

**R18 — Fitur cukup yang diminta.** Fokus: beranda, Jelajahi Koleksi, Buku Saya/Rak Saya, katalog per muallif, kategori per fan, pembaca kitab. Referensi UI perpustakaan lain (mis. F15 Library) adalah inspirasi alur, **bukan perintah menyalin desain**. Figma digunakan jika pengguna benar-benar meminta perubahan UI/UX; jangan otomatis mengubah kode menjadi desain baru.

**R19 — Jangan hapus karya lain saat mengerjakan satu tugas.** Memasang cover al-Buthi **tidak boleh** menghapus/menyembunyikan permanen ringkasan atau entri al-Adni/Habib Umar, mengurangi jumlah kitab, mengubah isi `summaryMd`, atau mengganti `BOOK_ID` lama tanpa perintah pemilik. Daftar ringkasan yang disembunyikan ≠ data ringkasannya dihapus. Jika pengguna mengubah fokus tampilan, status penyembunyian harus reversibel dan tercatat.

**R20 — Perubahan minimum dan dapat dibatalkan.** Sebelum edit baca `assets/books.js`, `assets/app.js`, `index.html`, fallback `kitab/<ID>/index.html`, dan catat baseline. Terapkan hanya delta yang diminta. Gunakan branch dan PR untuk perubahan bermakna, bukan commit terburu-buru langsung di `main`.

**R21 — Uji regresi sebelum merge.** Periksa angka katalog dan `BOOK_ID` unik; bandingkan seluruh `summaryMd` lama vs baru pada **tugas nonringkasan**, jumlah judul masing-masing muallif, `coverUrl`, semua halaman buku, path `/QIraah/` (huruf besar-kecil), JavaScript, gambar, tautan, klik menu, pencarian, responsif HP, audio jika tersentuh, 404, dan aksesibilitas. Tetapkan `STOP_RELEASE` bila ada kehilangan teks/record atau hasil tes belum tersedia. **CI lulus saja belum menggantikan tes browser sebenarnya.**

**R22 — Jangan publikasi bahan privat.** PDF/MD mentah dari ZIP, OCR lengkap, izin pribadi, data email dan draf yang haknya belum jelas tetap privat; GitHub Pages publik hanya menerima kode, metadata aman, dan konten yang izin serta QC-nya memenuhi persyaratan.

**R23 — Bukti selesai wajib ada.** Laporkan file/ID yang berubah, keadaan sebelum–sesudah, checksum/status, jumlah kata dan menit nyata, checklist QA, URL commit, hasil workflow Pages dan URL live yang dicek. Jangan menyebut `selesai`, `ACC`, `terkirim email`, atau `sudah live` hanya karena tool menerima commit.

## IV. Penggunaan alat dan kesinambungan kerja

**R24 — Alat hanya sesuai tugas.** Untuk sumber privat gunakan Files/PDF tools yang tersedia; GitHub untuk baca/ubah repo bila diizinkan; Figma hanya untuk tugas desain yang diminta. **Tidak memakai Notion, Canva, plugin email, atau alat lain secara spontan untuk Qira’ah**, kecuali pemilik secara eksplisit memintanya atau alat itu memang tak tergantikan dan sudah diotorisasi.

**R25 — Bedakan mode kerja.** Permintaan `audit sumber` → hanya inventaris, tes file dan laporan, **tanpa** edit UI atau ringkas baru. Permintaan `ringkas satu kitab` → jangan buka batch berikutnya. Permintaan `pasang cover` → jangan ubah ringkasan. Permintaan `perbaiki website` → jangan ubah konten kitab kecuali terkait langsung dan diminta.

**R26 — Memori kerja berbasis berkas, bukan klaim ingat otomatis.** Setiap sesi dimulai dengan membaca aturan ini, laporan audit sumber terbaru, dan memori proyek yang terverifikasi dari GitHub/Project Sources. Simpan status terbaru per ID dalam fail aman, beri penanda sumber tanggal dan commit. Histori lama tidak mengalahkan bukti baru; jangan mengulang pekerjaan yang sudah diverifikasi.

**R27 — Tidak ada kerja latar tanpa mekanisme.** Jangan meminta pengguna menunggu untuk hasil yang akan datang, jangan berjanji notifikasi/email yang belum dibuat, dan jangan membuat daftar batch hanya untuk tampak produktif. Utamakan **satu kitab benar-benar sampai gate** ketimbang lima kitab semu.

## V. Gate keputusan (wajib diterapkan berurutan)

```text
SOURCE_FOUND?
  no  -> STOP_SOURCE; audit nama/arsip, jangan meringkas.
  yes -> PDF_OPENED_AND_EDITION_MATCH?
            no -> STOP_SOURCE / PARTIAL_SOURCE; daftar halaman/masalah.
            yes -> ORIGINAL_MAJOR_CHAPTERS_MAPPED?
                      no -> STOP_MAP; buat peta bab dari sumber.
                      yes -> DRAFT_SOURCE_FAITHFUL_AND_LENGTH_OK?
                                no -> DRAFT_ONLY; jangan publikasi.
                                yes -> COVER_AND_LINKS_CHECKED?
                                          no -> WAIT_ASSETS; boleh katalog, bukan final.
                                          yes -> QC_EDITORIAL_AND_RIGHTS_CLEARED?
                                                    no -> PRIVATE_REVIEW; jangan final.
                                                    yes -> BACKUP_AND_REGRESSION_TESTS_PASS?
                                                              no -> STOP_RELEASE.
                                                              yes -> MERGE, VERIFY DEPLOY, LIVE QA.
```

## VI. Format baris audit wajib

`BOOK_ID | AUTHOR | TITLE_AR | ZIP_PDF_PATH | ZIP_MD_PATH | PDF_SHA256 | PDF_PAGES | PDF_READ_STATUS | MD_READ_STATUS | EDITION_MATCH | MISSING_PAGES | MAIN_CHAPTERS_MAPPED | SUMMARY_WORDS | READ_MINUTES | COVER | PDF_LINK | SHOPEE_LINK | SOURCE_QC | CONTENT_QC | OWNER_ACC | RIGHTS | LIVE_STATUS | NEXT_ACTION`

**Jangan mengisi kolom kosong dengan tebakan atau status sukses yang belum didukung tes.**

## VII. Aturan versi

- Perubahan aturan memerlukan instruksi eksplisit pemilik, penomoran versi, pencatatan teks lama–baru dan tanggal.
- Aturan terbaru ini **menggantikan aturan default lima kitab/batch** dan kewajiban membuat daftar isi tiap subjudul kecil sebagai heading tersendiri: kini fokus **satu kitab per pengerjaan**, tampilkan **bab besar asli**, petakan subbab di audit internal.
- Target **10–15 menit** adalah standar; pengecualian nazam/kitab pendek harus mendapatkan persetujuan eksplisit pemilik per ID, bukan asumsi dari keputusan lama.
- Perubahan dari sumber terverifikasi menjadi versi bercampur harus ditolak meski kalimat baru tampak lebih bagus.

**STATUS DOKUMEN: rules aktif secara editorial setelah dibuat; integrasi otomatis bergantung pada apakah skill sudah terpasang dan alat QA tersedia.**