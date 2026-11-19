# Qira’ah — QA rilis katalog cover al-Buthi (19 November 2026)
Status: **rilis kode dan GitHub Pages berhasil; pemeriksaan browser katalog lulus; QA HP/hak reproduksi belum final.**

## Bukti operasi
- [PR #1 digabungkan](https://github.com/amangkitabb-lab/QIraah/pull/1) ke `main` sebagai commit `d962a0b4d537edab4f91ede5cba74049da6bbd9a`.
- [Deployment GitHub Pages](https://github.com/amangkitabb-lab/QIraah/actions/runs/44491830404) `success`, HEAD commit sama dengan rilis di atas.
- [QA otomatis terakhir (push)](https://github.com/amangkitabb-lab/QIraah/actions/runs/44491485119) dan [QA PR](https://github.com/amangkitabb-lab/QIraah/actions/runs/44491481808) `success`.
- [Website live](https://amangkitabb-lab.github.io/QIraah/) dan [Jelajahi live](https://amangkitabb-lab.github.io/QIraah/jelajahi/).

## Konten yang berhasil diverifikasi
- Semua 45 PNG dari 3 unggahan cover pengguna ada dalam `assets/covers/inbox/`, lalu **25** diantaranya disalin sebagai alias blob SHA yang identik ke `assets/covers/<BOOK_ID>-qiraah.png` agar aman dari spasi nama; **AB-001** mempertahankan `assets/covers/AB-001-source-scan.webp`.
- Dari 85 rekaman katalog sebelumnya, **26 al-Buthi** tampil sebagai fokus, **59 al-Adni** tetap utuh dalam data, tidak dihapus. Semua 26 al-Buthi memiliki `coverUrl`; gambar bisa berbentuk sampul berilustrasi atau halaman judul pindai.
- `summaryMd` setiap record dibandingkan CI dengan `origin/main` pra-merge dan dipastikan **identik**, tidak ada ringkasan yang terhapus/ditulis ulang dalam rilis cover.
- Beranda dan Jelajahi berfokus pada al-Buthi, menu/daftar ringkasan tidak tampil; route lama `/ringkasan/` diarahkan ke katalog tanpa menghapus data bacaan. **32 entrypoint HTML** disegarkan ke `bouthi-covers-20261119`, termasuk 26 reader al-Buthi, supaya JS tidak tersangkut cache lama.
- QA browser baca-saja pada 19 November 2026: beranda menampilkan **12 kartu**, Jelajahi menampilkan **26 kartu** dan **26 gambar tanpa broken image yang terdeteksi**, pencarian `AB-007` menghasilkan 1 judul yang benar, filter genre dan navigasi katalog berfungsi. Bukti: [sesi browser QA](https://agent.tinyfish.ai/runs/165bc2b9-5f00-4ba7-a77f-5ca816fe5eac). Pembukaan **detail** AB-007 tidak dilakukan dalam sesi browser karena budget sesi, walau URL direct `/kitab/AB-007/` diambil sebagai halaman statis via pemeriksaan konten terpisah.

## Hal yang belum diverifikasi/risiko
- Uji visual layar HP sebenarnya, TTS/audio, serta seluruh 26 halaman detail satu per satu **belum dilakukan**. Jangan klaim full cross-device QA.
- Verifikasi hak reproduksi foto sampul dan edisi penerbit tetap `coverRightsStatus=pending`; pengguna telah mengunggah gambar dan meminta ditampilkan, tetapi izin tertulis dari seluruh penerbit tidak diaudit.
- Di antara 45 PNG pada GitHub, berkas **Screenshot 2026-11-17 131251.png** (tidak digunakan oleh 26 katalog al-Buthi) memiliki ukuran berbeda dibanding lampiran percakapan. **Seluruh 25 PNG yang digunakan** mempunyai ukuran yang cocok dan alias identik dengan unggahan GitHub.
- Halaman detail mungkin memiliki fallback HTML lama tentang status ringkasan bila JavaScript dinonaktifkan; rilis ini hanya menyembunyikan **daftar** ringkasan, bukan mengaudit ulang cakupan isi kitab.
- Belum ada email yang dikirim oleh rilis ini.

## Keputusan lanjutan
Tahap cover Syekh al-Buthi selesai untuk 26 judul katalog aktif. Prosedur ringkasan baru pengguna diterapkan setelah tahap ini, mulai dari menyelesaikan Batch 3 sesuai prioritas yang masih tersimpan. Batch 4 tidak dibuka kembali tanpa perintah pengguna.
