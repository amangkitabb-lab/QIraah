# Qira’ah — pemasangan cover berdasarkan kesiapan ringkasan · 22 November 2026

**Keputusan:** pengguna memberikan delapan screenshot cover, menyatakan `AB-001` (Adab al-Hiwar) dan Isykaliyyat tidak perlu diubah, serta meminta agar kitab tanpa ringkasan 10–15 menit dinyatakan **belum siap**, bukan diberi label terbit.

## Audit gambar dan artikel, bukan hanya flag katalog

| Urutan screenshot | BOOK_ID | Kitab | Ringkasan yang ada di `books.js` | Draf privat 10 menit | Cover di cabang review | Status |
|---|---|---|---:|---|---|---|
| 130444 | AD-060 | ابتسامة الثغر في نظم مناسبة ليلة القدر | 0 kata | Draf lama 12m disebut dalam laporan intake, **belum hadir sebagai naskah siap di repo** | Belum dipasang | **BELUM SIAP** |
| 130457 | AD-061 | إحياء لغة الإسلام العالمية | 0 kata | Draf seri lama disebut dalam laporan intake; belum dinyatakan lulus QA / siap publish | Belum dipasang | **BELUM SIAP** |
| 130509 | AD-039 | إحياء منهجية النمط الأوسط | 171 kata ±1m | Draf seri lama belum lulus QA / ACC | `assets/covers/AD-039.webp` sudah sesuai screenshot, tidak diganti | **BELUM SIAP** |
| 130617 | AD-062 | إزاحة المآثم عن مناسبات المآتم | 0 kata | 1.887 kata ±10m, file privat `EZAH_EDISI_BACA_PRIVAT.md` | **DITAMBAHKAN:** `assets/covers/AD-062-user.webp`, gambar pengguna; telah dicek blob GitHub | **DRAF ADA; BELUM TERBIT** |
| 130646 | AD-040 | أصول الدين الأربعة | 168 kata ±1m | 1.852 kata ±10m, file privat `AD-040_EDISI_BACA_PRIVAT.md` | **DIKOREKSI:** `assets/covers/AD-040-user.webp` mengganti referensi gambar lama yang keliru, file lama tetap tersimpan | **DRAF ADA; BELUM TERBIT** |
| 130656 | AD-063 | إظهار العلم المكنون | 0 kata | Belum ada draf 10–15m siap | Belum dipasang | **BELUM SIAP** |
| 130713 | AD-041 | إقامة الجدار في نظم حياة الشيخ أحمد بن محمد بلجفار | 177 kata ±1m | 1.891 kata ±10m, file privat `AD-041_EDISI_BACA_PRIVAT.md` | `assets/covers/AD-041.webp` sudah sesuai screenshot, tidak diduplikasi | **DRAF ADA; BELUM TERBIT** |
| 130726 | AD-042 | الأبنية الفكرية الجامعة لثوابت الطريقة العلوية الحسينية | 179 kata ±1m | Belum ada draf 10–15m siap | `assets/covers/AD-042.webp` sudah sesuai screenshot, tidak diganti | **BELUM SIAP** |

## Yang sengaja tidak diubah
- `AB-001` (أدب الحوار في كتاب الله) sudah berisi 2.347 kata (±13 menit) dan memiliki `assets/covers/AB-001-source-scan.webp`; tidak disentuh.
- `AB-038` (إشكالية تجديد أصول الفقه) **menurut data cabang review masih kosong** (`summaryMd:''`, `coverUrl:''`). Ini **berbeda** dari ingatan pengguna bahwa ada naskah dan sampul; tidak ditimpa maupun direkayasa. Jika naskah yang dimaksud tersimpan dengan ID berbeda, cocokkan dahulu.
- Dua cover yang belum siap pada katalog lama (`AD-039` dan `AD-042`) dipertahankan, bukan dianggap bukti ringkasan siap.
- Semua 85 artikel dan status publikasi sebelum intake tetap utuh; `summaryMd` untuk 90 entri cabang review tidak ditambah, diganti, atau dihapus.

## Perubahan teknis GitHub
1. Dua berkas gambar WEBP sungguhan dibuat di cabang `qiraah-10pdf-catalog-preview-20261122`, memakai screenshot **yang diberikan pengguna** (untuk katalog diperkecil); blob GitHub diverifikasi:
   - `assets/covers/AD-062-user.webp`: Git blob `3c1d6fa73ff91aa19776efbd8b5df1c509c0cc3a`, 170×240px.
   - `assets/covers/AD-040-user.webp`: Git blob `f2e1f35e7522a211ad905001821882b14a078bdc`, 349×500px.
2. `assets/books.js`: hanya dua rujukan cover baru/yang dikoreksi di atas, beserta catatan asal dan status bukti hak. AD-041 tetap merujuk cover existing.
3. `assets/app.js`: pengaturan fokus yang dulu menyembunyikan buku al-Adni kini **dimatikan pada cabang review saja**; seluruh muallif tersedia pada tampilan katalog. Delapan ID intake diberi label eksplisit `Ringkasan 10–15 menit belum siap` dan tak boleh dianggap siap karena naskah pengantar 1 menit, `ownerFinal` historis, atau draf privat.
4. **Belum terbit di `main` / GitHub Pages.** Cabang ini bagian dari draft PR #3. Pengujian UI melalui browser dan tinjauan hak gambar belum tuntas.

## Hak dan keputusan publikasi
Perintah pemilik proyek untuk menampilkan screenshot dicatat sebagai **instruksi pengguna**, bukan lisensi pihak ketiga secara hukum. Sampul ditambahkan hanya pada cabang review GitHub; jangan merge sampai hak reproduksi dan pemeriksaan ulang selesai. Draf narasi 10 menit tetap privat sampai source QC, content QC, dan tinjauan manusia selesai.
