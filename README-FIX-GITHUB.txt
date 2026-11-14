Qiraah V2.6.1 — perbaikan routing GitHub Pages

Penyebab: window.QIRAAH_BASE_PATH kosong pada GitHub Pages /QIraah/.
Versi ini membaca base path dari URL assets/app.js secara otomatis.
Paket tetap berisi katalog 95 judul dan TIDAK berisi 86 draf atau
sampul yang masih memerlukan izin publikasi.

Cara cepat: unggah hanya assets/app.js ke folder assets dalam repository.
Cara lengkap: unggah seluruh isi ZIP ini ke root repository dan commit.
Jangan hapus konfigurasi .github dan CNAME milik repository sendiri.

URL target: https://amangkitabb-lab.github.io/QIraah/
