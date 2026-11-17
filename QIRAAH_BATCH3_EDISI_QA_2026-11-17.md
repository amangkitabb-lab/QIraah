# Qira'ah — Batch 3: audit isi, penerbit dan batas sumber (17 November 2026)

**Perintah pemilik terbaru:** **SELESAIKAN BATCH 3 DAHULU. BATCH 4 DIPARKIR/DIBEKUKAN.** Status pekerjaan saat dokumen dibuat: AB-007 memiliki **draf editorial privat berbasis naskah Arab resmi**; empat judul lainnya belum lolos audit sumber penuh. **Jangan mengklaim Batch 3 final, release, atau email dikirim.**

## Bukti kerja dan keputusan isi

| BOOK_ID | Judul sumber | Status isi di website sebelum Batch 3 | Hasil sesi ini | Belum lulus |
|---|---|---:|---|---|
| **AB-001** | أدب الحوار في كتاب الله | 2.320 kata, 13 menit, 5 kelompok dari TOC draf lama | Audit editorial existing summary dan temuan tautan resmi pengarang; konflik sumber lama dicatat | Edisi PDF asli, QA halaman rusak, kecocokan lima heading, hak, human check |
| **AB-007** | العقوبات الإسلامية وعقدة التناقض بينها وبين ما يسمى بطبيعة العصر الحديث | 602 kata, 4 menit | **Draf baru tersimpan privat di Notion, 1.847 kata narasi murni (~10 menit)**. Isi berdasarkan **teks PDF resmi Nasim al-Sham 16 halaman** p1–16, bukan snippet. Tujuh subbagian editorial mengikuti empat fase argumentasi sumber: dua keberatan, sebab, ukuran hukuman, syarat pembuktian, dan pendidikan iman | Pemeriksaan visual PDF resmi via screenshot belum berhasil; perbedaan edisi 16 versus 35 halaman; izin, kajian fikih, review manusia |
| **AB-030** | العناية بالعبادات أساس لا بد منه لتثبيت المجتمع الإسلامي | 736 kata, 4 menit, 5 pokok editor | **Daftar isi resmi 5 tahap** berhasil ditemukan (lihat tabel). Uji kecocokan dengan naskah lama dimulai | Teks lengkap tiap bagian; PDF pengguna; izin dan QA |
| **AB-031** | مجمل الشبهات التي تثار حول تطبيق الشريعة الإسلامية في العصر الحديث | 641 kata, 4 menit, 5 pokok editor | **Peta 7 syubhat asli dalam 3 kelompok** dari situs resmi ditentukan (lihat tabel). Naskah lama menggabungkan beberapa syubhat dalam satu heading | Teks pembahasan per syubhat; PDF dan QA; izin |
| **AB-011** | دفاع عن الإسلام والتاريخ | 653 kata, 4 menit, parsial | Judul/atribusi dibuktikan sebagai **tanggapan al-Buthi atas karya Syakir Mustafa**. Bagian utama dari draf yang sudah ada di website diinventarisasi | PDF 63 halaman, sisa bagian akhir, verifikasi setiap dalil sejarah/riwayat |

**Draf AB-007:** halaman Notion disimpan sebagai draf privat: `Qira’ah Batch 3 — Draf Privat AB-007 (PDF Resmi Nasim al-Sham)`. URL privat sengaja tidak diabadikan di repository publik. Readback Notion lulus; terdapat 7 pemenggalan editorial + pengantar, penutup, daftar gate. Penghitungan kata tidak mencakup metadata dan checklist (1.847 kata, `ceil(kata/190)=10 menit`). Sampai sekarang konten publik AB-007 **belum diganti**.

## Identitas dan TOC yang diverifikasi

### AB-030: [Nasim al-Sham](https://newsrv.naseemalsham.com/subjects/view/54996)
Judul asli pada pengantar situs resmi (bukan hanya lima paragraf ringkasan generik):
1. `مقدمة`
2. `تمهيد`
3. `العناية بالعبادات أساس لابد منه لتثبيت المجتمع الإسلامي`
4. `معنى الطاقة الروحية وأثر العبادات في تصعيدها`
5. `أثر العبادات في الجوانب السياسية والاجتماعية والاقتصادية`

Sumber: [halaman pengarang](https://newsrv.naseemalsham.com/subjects/view/54996). Jumlah halaman **36 PDF** berasal dari metadata mirror Archive.org yang diperiksa pada 16 Nov. **Belum** membaca lengkap semua p5–36 pada sesi ini. 5 heading lama website bukan TOC asli, meski berhubungan secara tematik.

### AB-031: [Nasim al-Sham](https://naseemalsham.com/subjects/view/54443)
Tiga kelompok dan tujuh masalah:
1. `الشبهات التي تتعلق بجوهر الشريعة الإسلامية` — `تطبيق الشريعة يثير المشاعر السلبية لدى الأقليات`; `جمود الشريعة الذي لا يتوافق مع تطور المجتمع`; `الإسلام مجرد عبادات لا علاقة له بنظام الدولة`.
2. `الشبهات التي تتعلق بجوانب خاصة من الشريعة` — `قسوة أحكام الحدود`; `تحريم الربا وتعارضه مع النظم الاقتصادية الجديدة`; `دعوة الإسلام المرأة للتستر يتعارض مع ضرورات الحياة الصناعية اليوم`.
3. `الشبهات المتعلقة بالشكل` — `الكتب الفقهية القديمة ذات أسلوب جاف مما يشكل عقبة أمام تقنين الفقه الإسلامي`.

Sumber: [daftar isi resmi](https://naseemalsham.com/subjects/view/54443). Website lama menggabungkan *hukuman–riba–perempuan* menjadi satu heading dan perlu dipisahkan satu per syubhat. Jumlah PDF **49 halaman** dari metadata mirror 16 Nov; tidak ada klaim semua 49 halaman sudah dibaca pada sesi ini.

### AB-001: [Nasim al-Sham](https://www.naseemalsham.com/subjects/view/55795)
Halaman resmi memakai judul `أدب الحوار في كتاب الله عز وجل` dan bertanya tentang dasar/tujuan dialog Qur'ani. Website Qira'ah memakai `أدب الحوار في كتاب الله`. Naskah lama 2.320 kata telah dibuka kembali dari `assets/books.js`: urut lima bagian dalam TOC versi lama `تمهيد`, `مستند الحوار القرآني`, `منهج الحوار في القرآن`, `نماذج من الحوار القرآني`, `خاتمة`. **Jangan** menyimpulkan kepastian kecocokan edisi hanya karena judul tematis mirip: `pdfUrl` saat ini menunjuk arsip `nasai_yopmail_20180313`, sedangkan `SOURCE_LOCK` di `summaryMd` menunjuk `elbouti/adabhiwar.pdf`. PDF resmi Nasim al-Sham juga mempunyai URL sendiri; perlu keputusan sumber terkunci.

### AB-007: [PDF resmi Nasim al-Sham](https://naseemalsham.com/uploads/Component/word%20new/Arabic/Research/2012/Al3qobat_AlIslameeh.pdf)
Teks PDF resmi yang tersedia adalah **16 halaman bernomor** (ini berbeda dari 35 halaman PDF Archive yang pernah dicatat). Isi argumen yang benar-benar dibaca: klasifikasi *ḥudūd / ta‘zīr*, dua keberatan (*lama versus baru* dan kekerasan sanksi), kesesuaian penilaian tindakan dengan bobot hukuman, syarat bukti dan prinsip *syubhat*, hak pihak yang dirugikan, lalu pembinaan keyakinan/moral sebelum menempatkan aturan formal sebagai satu-satunya jawaban. Heading nomor 1–7 di draf merupakan **pengelompokan Qira'ah**, **bukan** daftar isi Arab 7 bab asli. Pada halaman PDF resmi beberapa subjudul asli ada, namun teks visual tidak berhasil diverifikasi dalam tool screenshot; label teks Arab yang rancu sengaja tidak dipaksakan.

### AB-011: status sumber
Penerbit/indeks buku teridentifikasi dari [bibliografi](https://www.maktabana.com/search/label/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE), [katalog PDF](https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AF%D9%81%D8%A7%D8%B9-%D8%B9%D9%86-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D9%88%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-pdf) dan [PDF mirror terdaftar](https://archive.org/download/elbouti/difa3.pdf). Draf laman mengandung pembahasan *mawālī*, Murji'ah, riwayat Umar, Umar bin Abdul Aziz dan berita akhir zaman, tetapi **daftar isi aslinya belum terverifikasi**, penutup setelah p55 belum diperiksa. Jangan membuat simpulan tambahan atas dasar inventaris draft.

## Status gate (17-11-2026)

| Gate | AB-001 | AB-007 | AB-030 | AB-031 | AB-011 |
|---|---|---|---|---|---|
| source identity | ⚠ 3 URL kandidat | ✓ resmi 16p, mismatch 35p | ✓ judul/TOC resmi; PDF pending | ✓ judul/TOC resmi; PDF pending | ✓ judul/penerbit; PDF pending |
| chapter-map evidence | ⚠ 5 via draft lama | ✓ jalur argumen dan halaman resmi; pembagian editor | ✓ 5 heading resmi | ✓ 3 kelompok + 7 subpokok resmi | ⚠ heading draft, bukan TOC |
| 10-minute reading | ✓ ada sebelumnya, belum QA | ✓ **baru, privat, ~10 menit** | ✗ ~4 menit, perlu sumber | ✗ ~4 menit, perlu sumber | ✗ ~4 menit, perlu bagian akhir |
| verified substantive coverage | belum | draf; pengecekan visual pending | belum | belum | belum |
| rights clearance, independent human QA | pending | pending | pending | pending | pending |
| new Batch3 public website release | **NO** | **NO** | **NO** | **NO** | **NO** |

### Batas sumber dan QA
1. `KITAB PDF.zip` lebih besar dari batas project materialization 100 MB; `KITAB MD.zip` pernah diduplikasi dalam runtime tetapi container kembali tidak tersedia dalam giliran ini. **Tidak meminta ulang sumber sebagai pengganti pekerjaan.**
2. Browser `web.run` dapat membaca teks penuh PDF resmi AB-007 yang diindeks, tetapi **screenshot PDF gagal**. Upaya buka versi Archive.org dari keempat judul lain juga gagal. Jangan menyebut pemeriksaan visual atau pembandingan checksum selesai.
3. Situs resmi al-Buthi menunjukkan banyak TOC, bukan seluruh isi. TOC bukan lisensi untuk mengarang rincian bab.
4. Klaim pemilik tentang izin karya al-Buthi masih `owner_stated`; catatan per karya/edisi dan pemeriksaan independen belum disimpan. Repository publik hanya menyimpan laporan proses dan metadata, **tidak** memuat naskah privat/raw PDF.
5. Batch4 **PAUSED** atas permintaan eksplisit pemilik 17-11-2026. Jangan lanjut Batch4 sampai 5 kitab Batch3 selesai dan lulus gate; rilis arsip privat yang sudah ada dari Batch4 tetap disimpan dan tidak dipindahkan ke publik.

**Dokumen rujukan:** [Memory](./MEMORI_PROYEK_QIRAAH.md) · [Queue](./QIRAAH_BATCH_QUEUE.json) · [Audit sebelumnya](./QIRAAH_BATCH3_SOURCE_AUDIT_2026-11-16.md)
