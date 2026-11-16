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
