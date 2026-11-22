# Keputusan pemilik dan paket rilis Qira’ah — 22 November 2026

**Keputusan baru:** pemilik Qira’ah menyatakan sudah membaca/mengedit naskah, memberi ACC editorial, serta memerintahkan agar tersedia di website publik pada 22 November 2026.

## Naskah dan halaman
| ID | Judul Indonesia | Naskah asli | Kata artikel (tanpa audit privat) | Estimasi | Cover |
|---|---|---|---:|---:|---|
| AD-040 | Empat Pokok Agama dan Cara Membaca Perubahan Zaman | أصول الدين الأربعة, PDF 105p, bertanda revisi | 1.865 kata narasi | ±10 menit | `assets/covers/AD-040-user.webp` |
| AD-041 | Menjaga Jejak Syekh Ahmad Baljafar di Tengah Perubahan Zaman | إقامة الجدار, PDF 30p, bertanda revisi | 1.943 kata narasi | ±11 menit | `assets/covers/AD-041.webp` |
| AD-062 | Mengurus Duka Tanpa Kehilangan Adab | إزاحة المآثم, PDF 32p | 1.903 kata narasi | ±11 menit | `assets/covers/AD-062-user.webp` |

Ringkasan baru ditulis original dalam bahasa Indonesia, berasal dari hasil baca PDF pengguna, **bukan** pengunggahan PDF lengkap atau salinan Markdown Arab. Peta sumber audit dan catatan editorial privat dipotong dari teks yang masuk `summaryMd`. Ringkasan `AB-001` (Adab al-Hiwar) tidak diubah.

## Status lima kitab lain dari delapan sampul
- `AD-060` ابتسامة الثغر: katalog ada, **belum ada edisi baca siap terbit**.
- `AD-061` إحياء لغة الإسلام العالمية: katalog ada, **belum ada edisi baca siap terbit**.
- `AD-039` إحياء منهجية النمط الأوسط: ringkasan lama 171 kata ±1 menit, **belum ada edisi baca 10–15 menit siap terbit**.
- `AD-063` إظهار العلم المكنون: katalog ada, **belum ada edisi baca siap terbit**.
- `AD-042` الأبنية الفكرية: ringkasan lama 179 kata ±1 menit, **belum ada edisi baca 10–15 menit siap terbit**.

Gambar existing `AD-039`, `AD-041`, `AD-042` tetap. Gambar `AD-040` dan `AD-062` benar-benar disimpan sebagai gambar WEBP di GitHub dan dipakai oleh katalog dan fallback laman masing-masing. Tidak membuat cover fiktif untuk judul lain. `AB-038` Isykaliyyat **masih kosong di data cabang**, jadi belum boleh mengklaim naskahnya ada atau menimpa isi lama.

## Rilis bertahap dan status hak
- **Human editorial approval: YES**, berdasarkan pesan eksplisit pemilik tanggal ini; tidak mengklaim pemilik mengirimkan versi dokumen lain.
- **Izin penerbit/pemegang hak sumber dan cover: AUDIT / tidak terdokumentasi secara mandiri**. Pernyataan pemilik **bukan** bukti lisensi pihak ketiga. Jangan mengubah `rights` menjadi `cleared` tanpa bukti; tidak ada PDF asli disalin ke website.
- **Source QC:** sampel halaman dan alur besar telah diperiksa dengan PDF asli, tetapi verifikasi rinci setiap bait, sanad, hadis, dan varian edisi belum diklaim lulus. Cakupan artikel disimpan `partial`, bukan `full`.
- Sesuai permintaan rilis langsung pemilik, tiga ringkasan ditayangkan sebagai **edisi bacaan yang telah di-ACC pemilik**, tanpa menampilkan dokumen sumber mentah. Ini adalah keputusan publikasi oleh pemilik, bukan sertifikasi hak pihak ketiga.

## QA teknis yang harus dibuktikan
- `assets/books.js`: 90 ID unik (85 lama + 5 baru), naskah lain tidak ditimpa.
- Periksa `assets/app.js` mengenali dua pengarang dan membuka bacaan AD-040/041/062; lima judul yang belum siap tidak diberi menit palsu.
- Periksa tiga cover WEBP dan masing-masing `kitab/<ID>/index.html`, plus `AB-001` tidak berubah.
- Jalankan workflow PR yang sesuai, gabungkan ke `main` hanya jika QA teknis lulus; cek GitHub Pages setelah penggabungan. Jangan menulis "sudah live" sampai bukti commit + deployment tersedia.

## Batasan isi
Semua bacaan menyebut pandangan dan narasi pengarang sebagai pandangan pengarang, membedakan refleksi editor, serta tidak mengklaim memverifikasi seluruh riwayat dan kisah sejarah. Pembaca dianjurkan merujuk kitab Arab. Untuk masukan atau masalah hak cipta, website menyediakan laman `hak-cipta/`.
