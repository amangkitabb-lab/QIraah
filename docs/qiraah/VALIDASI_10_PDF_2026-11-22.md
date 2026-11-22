# Qira’ah — pemeriksaan 10 PDF dan paket pratinjau (22 November 2026)

**Status:** PDF asli dibuka; lima entri katalog baru disiapkan pada branch GitHub `qiraah-10pdf-catalog-preview-20261122`. **Bukan rilis ringkasan final**. Dua draf substantif ±10 menit dibuat privat untuk editorial. Cover asli baru hanya untuk pratinjau privat; rilis publik belum mengantongi bukti hak reproduksi.

## Inventaris PDF asli (SHA-256 berkas diunggah)

| ID | Judul | Halaman PDF | SHA-256 PDF | Isi/status | Cover | Tautan PDF/sumber |
|---|---|---:|---|---|---|---|
| `AB-001` | أدب الحوار في كتاب الله | 27 (0 h. berlapis teks) | `bdb2895a30478c17bcf21911273be6b9c81f930d30fcce05867152ca99d9f700` | Lama; 2.347 kata/13 menit; sumber image-only | existing cover preserved | URL Archive existing; edition-match pending |
| `AD-040` | أصول الدين الأربعة | 105 (105 h. berlapis teks) | `24b1ff181749dac59e0cc1e70712da3907dcf7cfe1dd008d218751f458a90563` | Draf privat 1.852 kata/10 menit; buku 1434H under revision | existing cover preserved | PDF legal direct pending |
| `AD-061` | إحياء لغة الإسلام العالمية | 214 (213 h. berlapis teks) | `9c5dbb20e3e901217a29837e3afe13d463f56f3f24cff99dc3b9c39e0f0e4d8e` | 214p; 10-15 menit per seri belum final | private cover preview; public Qiraah illustration | PDF official checked: https://www.alhabibabobakr.com/wp-content/uploads/2013/03/ahyaa.pdf |
| `AD-039` | إحياء منهجية النمط الأوسط (2009) | 276 (273 h. berlapis teks) | `4473b164d194a9d8dd106327afcc861a41eca7f517a80a5b7a4fe246f127af20` | edisi utama, 276p; 10-15 menit per seri belum final | existing cover preserved | official landing checked; direct PDF pending |
| `AD-039` | إحياء منهجية النمط الأوسط (2008) | 251 (247 h. berlapis teks) | `67c0edccfde241453a61df8586cc5ea169f600da236a35bfce82b171074b2dc8` | edisi pembanding 251p; tidak membuat ID baru | cover only preview; no duplicate | edition comparison only |
| `AD-062` | إزاحة المآثم عن مناسبات المآتم | 32 (30 h. berlapis teks) | `e66bdbbf7a478ffe41d98d34818838a4a871c0b5373172fc200c97a3499ce3de` | Draf privat 1.887 kata/10 menit; peta sumber ikut | private cover preview; public Qiraah illustration | official landing checked; direct PDF still pending |
| `AB-038` | إشكالية تجديد أصول الفقه | 316 (0 h. berlapis teks) | `dced885cdae4aac75abab51e9e9849f8e8b362b87f234d40b8e10d533590e58c` | PDF fisik 316p image-only; cetak 328p, dua pengarang; belum ada ringkasan lengkap | private cover preview; public Qiraah illustration | Dar al-Fikr official product page; no official direct free PDF |
| `AD-063` | إظهار العلم المكنون | 158 (155 h. berlapis teks) | `ea56a96e0658da1883663ea06915dd29eb9c64a793192efe2bcd6074b1ad81bf` | 158p 1436H/2015; seri 10-15 menit belum final | private cover preview; public Qiraah illustration | PDF official checked: https://www.alhabibabobakr.com/wp-content/uploads/2015/02/shorf_36.pdf |
| `AD-041` | إقامة الجدار في نظم حياة الشيخ احمد بن محمد بلجفار | 30 (29 h. berlapis teks) | `b28c858ba51e54bb14f611b204323abf2467886ccd1ba9ba0ba7cf99d5cc3f48` | nazam under revision; 30p; belum ada ringkasan final | existing cover preserved | PDF direct pending |
| `AD-060` | ابتسامة الثغر في نظم مناسبة ليلة القدر | 18 (17 h. berlapis teks) | `103929d48a64e1fadead3dbe7a4229958b27d85fc112e1e784e568e87b1b2b4a` | nazam 18p under revision; 10-15 menit belum final | private cover preview; public Qiraah illustration | PDF official checked: https://www.alhabibabobakr.com/wp-content/uploads/2017/06/ebtsamt.pdf |

## Prinsip publikasi dan perlindungan

- Sepuluh file sumber = **sembilan kitab unik**. Dua edisi `AD-039` tidak dibuat menjadi dua entri katalog.
- `AB-001` sudah memiliki ringkasan Indonesia 2.347 kata / ±13 menit dan dipertahankan apa adanya. Delapan kitab lain memerlukan naskah baru/lanjutan atau pengecekan bab, termasuk AD-040/AD-062 sebagai draf belum lulus.
- Pada PDF scan dua-pengarang `إشكالية ...`, judul asli halaman sampul adalah `تجديد`, bukan `تحديد` dalam nama berkas unggahan; lama 316 halaman PDF, 328 halaman cetak disebut penerbit. ID `AB-038` digunakan karena `kitab/AB-037/index.html` sudah dipakai halaman arsip judul lain.
- `AD-039` edisi 2009 p.3 melarang reproduksi tanpa izin tertulis. `إحياء لغة` (p.3) dan `إظهار العلم المكنون` (p.3) juga menyatakan hak cipta dilindungi; beberapa file lain menunjukkan status `قيد/تحت التعديل`.
- Gambar cover dalam ZIP preview adalah ekstraksi halaman PDF milik pengguna untuk **review privat** dan **tidak disisipkan ke repositori publik**. Katalog baru di GitHub memakai ilustrasi tipografis bawaan Qira’ah yang berlabel bukan sampul asli.
- Pengunggahan PDF oleh pengguna memudahkan audit, tetapi tidak otomatis membuktikan izin penerbit/pengarang untuk adaptasi teks, reproduksi sampul, ataupun meng-host salinan PDF.
- Entri `summaryMd` 85 kitab lama dipertahankan byte-for-byte, semua `coverUrl` existing dipertahankan, semua `published` tidak diubah. Lima entri baru `summaryMd` kosong dan `summaryCoverage:none`; tidak diklaim 10–15 menit.
- Situs memiliki `QIRAAH_BOUTHI_FOCUS=true` di `assets/app.js`: UI publik default belum menampilkan seluruh al-Adni meskipun data sudah ada. Mengubah fokus UI perlu pemeriksaan UI/regresi dan keputusan publikasi.

## Hasil penulisan privat yang benar-benar dibuat

| Draf | Kata isi utama | Durasi dengan 190 kata/menit | Sumber dan status |
|---|---:|---:|---|
| `AD-040_EDISI_BACA_PRIVAT.md` | 1.852 | 10 menit | PDF asli 105 halaman; pembahasan empat pokok menurut pengarang, sitasi peta sumber privat; versi masih revisi; editorial dan hak HOLD |
| `EZAH_EDISI_BACA_PRIVAT.md` | 1.887 | 10 menit | PDF asli 32 halaman; adab kematian, nazam dan tambahan urutan pemulasaraan, peta sumber privat; hak dan konsultasi fikih HOLD |

## Gate rilis

| Gate | Status |
|---|---|
| SHA dan jumlah halaman PDF | Diperiksa (10 file) |
| Identitas sembilan kitab unik dan judul sampul | Diperiksa |
| Sampul untuk pratinjau privat | Ada dalam ZIP privat; bukan izin publik |
| Naskah 10–15 menit seluruh 9 karya | **BELUM**: 2 draf/1 ringkasan lama, lainnya belum lengkap |
| Kecocokan penuh setiap bab dan cetakan | **BELUM** (terutama kitab 214/276/316/158p) |
| Hak adaptasi/reproduksi sampul dan PDF | **BELUM CLEAR** |
| Persetujuan editorial baru oleh pemilik | **BELUM** |
| Uji browser seluler dan deployment Pages | **BELUM**, tidak boleh klaim sudah live |

Keputusan: **PRATINJAU / DRAFT PR**, bukan rilis. Lengkapi hak, bab asli, QA kritis dan editor manusia sebelum penerbitan ringkasan publik.