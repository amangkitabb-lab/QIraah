# Qira'ah — Protokol Produksi Ringkasan Berbasis PDF
Terakhir diperbarui: 2026-11-16. Status: prosedur produksi dan antrean; **bukan** bukti bahwa naskah sudah lolos QA atau telah terbit.

## Tujuan
Pemilik mengunggah sumber satu kali ke ChatGPT Project Sources; editor mengerjakan bertahap dalam batch default 5 kitab, memeriksa setiap naskah, dan memperbarui halaman kitab yang sudah ada. Hindari mengulang permintaan unggah PDF yang masih dapat diakses. Pengguna cukup mengetik **LANJUT QIRAAH BATCH** dalam proyek yang sama untuk melanjutkan pekerjaan.

Pekerjaan hanya dilakukan selama sesi aktif. Tidak ada klaim proses otomatis yang terus berjalan setelah percakapan berakhir.

## Tempat sumber dan keamanan
- Sumber utama privat: `KITAB PDF.zip` dalam Project Sources, atau PDF asli yang sudah terunggah pada percakapan proyek.
- Sumber bantu privat: `KITAB MD.zip` (teks hasil konversi). MD **bukan** otoritas jika berlainan dengan PDF, atau jika OCR Arab rusak.
- Lock tiap karya memakai `BOOK_ID`, judul Arab, pengarang, edisi, file sumber, jumlah halaman, checksum SHA-256 setelah berkas dapat diaudit, dan catatan halaman tidak terbaca.
- Sumber mentah, berkas hasil OCR, kutipan panjang, draf nonpublik, bukti hak, dan izin privat **jangan** dimasukkan ke repository GitHub Pages yang publik.
- Jika akses sebuah sumber terputus, catat file persis yang tidak tersedia; jangan meminta pengiriman ulang semua kitab tanpa perlu.

## Alur wajib tiap kitab
1. **Inventaris dan audit PDF**: cocokkan judul, edisi, sampul, daftar isi, awal-tengah-akhir, setiap bab/bait/khutbah, dan halaman bermasalah. MD divalidasi dengan PDF.
2. **Peta bagian asli**: setiap bab/fasal/khutbah/rangkaian bait mempunyai jangkar halaman; jangan mengarang lima bab agar terlihat rapi.
3. **Penulisan mendalam**: pengantar mengapa kitab ditulis berdasarkan teks, pembahasan substantif mengikuti urutan argumen dan contoh asli, penjelasan istilah, latar yang ditandai sebagai informasi editorial apabila bukan isi kitab, penutup, profil pengarang, ajakan ke edisi sah.
4. **Audit editorial**: telusuri klaim penting ke halaman, cek ayat/hadis/istilah/kutipan dengan sumber, bedakan pendapat pengarang dari fakta yang terverifikasi, cek bahasa Indonesia, dan perbaiki perulangan atau isi generik.
5. **Audit panjang**: website menghitung kira-kira 190 kata/menit. Target 10–15 menit berarti sekitar **1.900–2.850 kata naskah Indonesia yang sungguh tersedia**; hitung isi utama, bukan metadata. Untuk kitab besar, gunakan seri 10–15 menit hingga semua bagian terliput, lalu tandai `full` hanya bila benar-benar lengkap. Untuk nazam tipis, kembangkan penjelasan yang bersandar pada bait dan catatan sumber; **jangan** mengarang atau menggelembungkan isi hanya demi angka menit. Jika sumber tidak menopang 10 menit, catat pengecualian secara jujur.
6. **ACC terpisah**: `source_qc=passed`, `content_qc=passed`, `editorial_approval`, dan `rights_clearance` adalah gerbang berbeda. ACC/editorial bukan bukti lisensi. Untuk naskah baru, mintakan tinjauan pemilik per batch bila belum ada mandat persetujuan eksplisit.
7. **Integrasi website**: backup, cocokkan `BOOK_ID`, ganti `summaryMd` lama tanpa mengubah judul dan sampul secara tidak perlu, perbarui `summaryCoverage`, status, dan estimasi berdasarkan kata nyata. Hindari menyebut pengantar sebagai ringkasan kitab utuh.
8. **Uji dan rilis**: periksa halaman reader dan kartu, direct entry URL `/QIraah/`, seluler, tautan sumber/Shopee, 404 dan kutipan. Commit/PR harus menyebut ID kitab, QA dan status hak. Jangan klaim live tanpa memeriksa deployment.

## Penyimpanan kerja lintas percakapan
- Antrean 10 PDF dan kondisi awal: `QIRAAH_BATCH_QUEUE.json` di repository ini (metadata saja).
- Berkas privat tiap karya (di luar repo publik): `source_audit.md`, `chapter_map.md`, `reading_edition.md`, `qa_report.md`, `rights_evidence.md`, `status.md`.
- Setiap akhir batch: perbarui file antrean, hasil QA, dan memori proyek; sertakan daftar kitab yang selesai dan yang masih menunggu.
- Satu batch default **5 kitab**. Jika volume PDF sangat besar, bagi satu kitab menjadi beberapa seri, tidak mengklaim seluruh isi final hanya karena satu seri terbit.
- Saat hak adaptasi/publikasi belum terverifikasi, kerjakan draf **privat** dan jangan mendorong naskah lengkap ke repository publik.

## Baseline aktual, bukan target
Audit `assets/books.js` pada 2026-11-16: **85** kitab katalog, **70** naskah Indonesia terisi; **68 dari 70** naskah itu masih kurang dari 10 menit berdasarkan rumus `Math.ceil(kata/190)`; **63** sekitar 1–3 menit; **15** belum memiliki naskah. Dua naskah mencapai atau melampaui 10 menit. Ini antrean perbaikan, bukan alasan mengganti label secara fiktif.

## Format keluaran per batch
`BOOK_ID | judul | halaman sumber terverifikasi | cakupan bagian asli | kata | menit | status QC | status hak | link halaman/commit | kekurangan`.

**Keputusan produk**: PDF otoritatif, MD sekunder, batch 5, target artikel 10–15 menit dengan penjelasan berlandaskan kitab, status naskah dan hak dipisah, tidak menghapus naskah lama sebelum backup dan bukti pembaruan.
