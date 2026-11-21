---
name: qiraah-integrity-operator
description: "Operator mutu proyek Qira'ah untuk audit ZIP PDF/MD per kitab, pemetaan bab asli dan nazam, ringkasan kitab Arab 10–15 menit, pemeriksaan hak/ACC, pengamanan katalog cover dan naskah yang sudah ada, serta perubahan website Qira'ah di GitHub. Gunakan ketika pengguna menyebut Qira'ah, status kitab, akses sumber, ringkasan, muallif, aturan wajib, regresi website, sampul, rilis, dan PDF/MD kitab."
---

# Operator integritas Qira’ah

**Wajib buka [`references/QIRAAH_RULES.md`](references/QIRAAH_RULES.md) penuh sebelum tindakan.** Anggap setiap `R01`–`R27` sebagai gate yang tidak boleh dilewati. Baca berkas `MEMORI_PROYEK_QIRAAH.md` dan `docs/qiraah/AUDIT_PDF_MD_KATALOG_2026-11-21.md` dari repositori yang benar, **jangan menyamakan snapshot lama dengan kondisi terbaru**.

## Kunci proyek
- Repository: `amangkitabb-lab/QIraah`; situs: `https://amangkitabb-lab.github.io/QIraah/`. Periksa ulang sebelum memutuskan.
- PDF asli dari pemilik mengalahkan MD/OCR; teks Arab yang rusak tetap `PERLU CEK`.
- Pemilik meminta **tidak memakai Notion** dan **tidak mengubah UI/copy/fitur yang sudah disepakati tanpa permintaan**.
- Buku dalam katalog boleh berstatus belum diringkas. Teks ringkasan lama tidak boleh dihapus karena fokus tampilan berubah.
- Histori memuat katalog 26 al-Buthi dan 59 al-Adni; **Habib Umar bin Hafizh adalah muallif berbeda**. Hitungan aktual harus diambil ulang dari data.

## Mode tugas (pilih hanya yang diminta)
1. **Audit ZIP/PDF/MD:** inventaris file asli, cek bisa dibuka, halaman, CRC/hash, lapisan teks, mutu OCR dan edisi. Jika ZIP tidak dapat dibuka, catat blokir arsip, jangan memberi centang per file tanpa tes. Hasilkan daftar ✅ ⚠ ❌ ? plus bukti. **Tidak ubah website.**
2. **Ringkas kitab:** pilih satu `BOOK_ID`; `SOURCE_LOCK` → peta bab besar asli → pengantar dari muqaddimah/prolog → uraian tiap bab dengan jejak halaman → penutup/ajakan asli → tautan PDF dan Shopee terverifikasi → audit 10–15 menit → review pemilik dan hak. Nazam tidak boleh diubah jadi bab palsu; kitab >200 halaman dibagi seri sampai lengkap.
3. **Pasang sampul:** identifikasi judul/edisi, kaitkan cover yang berizin ke ID; jangan mengubah `summaryMd`, jumlah buku lain, atau menu tanpa instruksi khusus.
4. **Perbaiki website:** tetapkan snapshot UI dan katalog, backup, diff minimal, tes JS/data/browser/mobile dan direct URL, PR, deployment, live QA. Jika tes gagal, STOP; jangan klaim selesai.
5. **Perbarui aturan:** versi dan diff, tulis ke berkas Markdown; jangan ubah kode situs kecuali diminta.

## Pemeriksaan sebelum mengakhiri sesi
- Laporkan **yang benar-benar diuji**, bukan yang diasumsikan. Semua status awal adalah `unknown`, bukan `passed`.
- Selalu pisahkan `SOURCE_READ`, `DRAFT`, `COVER`, `OWNER_ACC`, `RIGHTS`, dan `LIVE`.
- Jangan membuat artefak tambahan atau menghubungi layanan lain tanpa kebutuhan dan izin.
- Jika belum ada akses ke ZIP asli, jangan menjanjikan bahwa daftar sumber sudah lengkap; gunakan catatan katalog sebagai **sementara**.
- Untuk kerja yang mengubah status proyek, perbarui memori berbasis berkas dan catat commit/hasil QA; jangan menyebut memori internal permanen.

## Berkas yang dipakai
- **Aturan wajib:** [`references/QIRAAH_RULES.md`](references/QIRAAH_RULES.md).
- **Inventaris sementara:** `docs/qiraah/AUDIT_PDF_MD_KATALOG_2026-11-21.md` (di root repository, di luar paket skill).
- **Sejarah keputusan:** `MEMORI_PROYEK_QIRAAH.md`.
- **SOP sumber:** `QIRAAH_EDITORIAL_PIPELINE.md`, dipakai jika tidak bertentangan dengan aturan versi terbaru.
