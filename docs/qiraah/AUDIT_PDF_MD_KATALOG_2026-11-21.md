# Inventaris akses sumber PDF/MD Qira’ah — audit awal 21 November 2026

**STATUS: TIDAK LENGKAP — snapshot katalog, bukan inventaris isi ZIP.** Berkas ini sengaja memisahkan bukti pembacaan sumber, keberadaan naskah Indonesia, durasi, hak, dan ACC. Tidak boleh dikutip sebagai bukti semua PDF telah diperiksa.

## A. Arsip sumber yang diberikan pemilik

| Arsip asli | Fakta yang terverifikasi | Hasil membuka |
|---|---|---|
| `KITAB PDF.zip` | 449.680.907 byte, berkas ada dalam Project Sources | **❌ Tidak dapat diinspeksi saat ini:** pembaca Files menolak karena batas materialisasi 104.857.600 byte. Belum ada daftar nama PDF internal, jumlah PDF, total halaman, atau tes kerusakan per PDF. |
| `KITAB MD.zip` | 5.424.268 byte, salinan mentah berhasil ditempatkan di `/mnt/data/files/KITAB MD_2.zip` | **⚠ Arsip diterima, isi belum diekstrak:** pembaca Files tidak mengindeks isi ZIP dan eksekusi container gagal `ClientError`. Belum ada daftar dokumen MD internal. |
| `QIraah-main.zip` | 1.851.428 byte; cadangan website, bukan sumber kitab | Tidak diperlakukan sebagai pengganti ZIP PDF/MD asli. |

**Jangan menyimpulkan PDF tertentu rusak dari kegagalan membuka ZIP besar.** Kegagalan terjadi pada jalur pemrosesan arsip, bukan bukti kerusakan setiap PDF.

## B. Arti tanda

- ✅ **Bukti kuat:** ada catatan QA terdahulu yang menyatakan teks PDF individual dibaca dan memberikan halaman/struktur; ringkasan tersedia. Tidak berarti sudah ACC akhir, hak sudah jelas, atau semua bait/halaman OCR sempurna.
- ⚠ **Sebagian / edisi lain:** baru preview/TOC/cuplik­an, ada OCR rusak, atau versi PDF yang dibaca belum dapat dipastikan sama dengan PDF katalog.
- ❌ **Tidak terbaca ketika diuji / tidak ada teks ringkasan / belum ACC** — harus dibaca menurut **kolomnya**, jangan disamakan. Dalam daftar per kitab di bawah tidak ada pembuktian file PDF internal ZIP rusak.
- ? **Belum pernah diuji dengan bukti per halaman:** tautan PDF/klaim `user_supplied` ada, tetapi file tertentu tidak memiliki log pembacaan yang cukup.
- **ACC baru:** standar terbaru membutuhkan PDF/MD dikunci, pemetaan bab, isi 10–15 menit atau pengecualian eksplisit, cover, tautan dan pemeriksaan hak/editorial. Karena itu **semua entri masih memerlukan ACC ulang**.

## C. Ringkasan audit katalog (bukan jumlah PDF di ZIP)

Snapshot dari [`assets/books.js`](https://github.com/amangkitabb-lab/QIraah/blob/1946ec191ce107366deb0356751c73d54f94c06a/assets/books.js): **85 entri** = **26 al-Buthi** + **59 al-Adni**, dengan **70 teks `summaryMd`** dan **15 tanpa teks**. Dari 70 naskah, **58** kurang dari 10 menit, **11** berada pada 10–15 menit, **1** melebihi 15 menit (asumsi 190 kata/menit). Ini angka panjang teks, bukan penilaian kelengkapan bab. Bukti sumber kuat: **8 judul**, parsial/beda edisi: **10 judul**, belum diuji per halaman dengan bukti memadai: **67 judul**.

### Syekh Muhammad Sa‘id Ramadan al-Buthi — 26 judul katalog

| ID | Kitab | Akses PDF/MD berbukti | Naskah yang ada | ACC terbaru | Rujukan PDF | Catatan |
|---|---|---|---|---|---|---|
| AB-001 | أدب الحوار في كتاب الله | ⚠ sebagian/edisi lain | ◐ 2347 kata; 13 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/nasai_yopmail_20180313/%D8%A3%D8%AF%D8%A8%20%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%B1.pdf) | 27 hlm diekstrak via parser, tetapi 2 versi PDF konflik; OCR hal. 12 |
| AB-003 | الإسلام والعصر تحديات وآفاق حوار بين البوطي وطيب تيزيني | ? belum diuji | ⚠ 220 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/hiwar.pdf) | Tidak ada bukti audit per halaman |
| AB-007 | العقوبات الإسلامية وعقدة التناقض بينها وبين ما يسمى بطبيعة العصر | ⚠ sebagian/edisi lain | ◐ 1999 kata; 11 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/3oqoubate.pdf) | PDF resmi lain 16 hlm dibaca; PDF katalog 35 hlm belum dicocokkan |
| KR-011 | اللامذهبية أخطر بدعة تهدد الشريعة الإسلامية | ? belum diuji | ⚠ 480 kata; 3 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/lamazhabia.pdf) | Tidak ada bukti audit per halaman |
| AB-010 | حرية الإنسان في ظل عبوديته لله | ⚠ sebagian/edisi lain | ⚠ 186 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/horia.pdf) | hanya pratinjau 2 dari 130 hlm menurut metadata |
| AB-011 | دفاع عن الإسلام والتاريخ | ? belum diuji | ⚠ 653 kata; 4 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/difa3.pdf) | Tidak ada bukti audit per halaman |
| AB-013 | ضوابط المصلحة في الشريعة الإسلامية | ? belum diuji | ⚠ 211 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/maslaha.pdf) | Tidak ada bukti audit per halaman |
| KR-029 | كبرى اليقينيات الكونية | ? belum diuji | ⚠ 180 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/yaqiniate.pdf) | Tidak ada bukti audit per halaman |
| KR-015 | لا يأتيه الباطل | ? belum diuji | ⚠ 526 kata; 3 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/laya2tih.pdf) | Tidak ada bukti audit per halaman |
| KR-005 | محاضرات في الفقه المقارن | ? belum diuji | ⚠ 193 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mohadarate.pdf) | Tidak ada bukti audit per halaman |
| AB-018 | من سنن الله في عباده | ? belum diuji | ⚠ 521 kata; 3 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/senane.pdf) | Tidak ada bukti audit per halaman |
| KR-018 | نقض أوهام المادية الجدلية | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/jadalia.pdf) | Tidak ada bukti audit per halaman |
| KR-004 | هذا والدي | ? belum diuji | ⚠ 624 kata; 4 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/walidi.pdf) | Tidak ada bukti audit per halaman |
| KR-003 | هذه مشكلاتهم | ? belum diuji | ⚠ 192 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mechkilatehem.pdf) | Tidak ada bukti audit per halaman |
| KR-024 | المذاهب التوحيدية والفلسفات المعاصرة | ? belum diuji | ⚠ 182 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mazahebtawhidia.pdf) | Tidak ada bukti audit per halaman |
| AB-027 | هكذا فلندع إلى الإسلام | ⚠ sebagian/edisi lain | ◐ 1992 kata; 11 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/hakadha.pdf) | beberapa halaman teks Shamela dan TOC diperiksa; PDF asli belum dicocokkan |
| KR-002 | هذه مشكلاتنا | ? belum diuji | ⚠ 469 kata; 3 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mochkilatona.pdf) | Tidak ada bukti audit per halaman |
| AB-030 | العناية بالعبادات أساس لا بد منه لتثبيت المجتمع الإسلامي | ⚠ sebagian/edisi lain | ⚠ 802 kata; 5 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/3inaya.pdf) | judul 5 bagian resmi diperiksa; teks lengkap PDF belum ditinjau |
| AB-031 | مجمل الشبهات التي تثار حول تطبيق الشريعة الإسلامية في العصر الحديث | ⚠ sebagian/edisi lain | ◐ 2165 kata; 12 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mojmalchobohate.pdf) | TOC 7 persoalan dan cuplikan OCR; PDF lengkap belum ditinjau |
| AB-032 | مشورات اجتماعية | ⚠ sebagian/edisi lain | ⚠ 186 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mashorate.pdf) | hanya pratinjau 2 dari 275 hlm menurut metadata |
| KR-022 | تحديد النسل بالأسباب الوقائية في الميزان الاجتماعي | ⚠ sebagian/edisi lain | ⚠ 196 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/tahdidnasl.pdf) | hanya pratinjau 2 dari 253 hlm menurut metadata |
| AB-035 | مدخل إلى فهم الجذور: من أنا ولماذا وإلى أين | ? belum diuji | ⚠ 192 kata; 2 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/fahmjodour.pdf) | Tidak ada bukti audit per halaman |
| AB-036 | أوربة من التقنية إلى الروحانية | ? belum diuji | ⚠ 190 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/oroba.pdf) | Tidak ada bukti audit per halaman |
| KR-014 | المرأة بين طغيان النظام الغربي ولطائف التشريع الرباني | ? belum diuji | ⚠ 184 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/mar2at.pdf) | Tidak ada bukti audit per halaman |
| KR-023 | قضايا ساخنة | ? belum diuji | ⚠ 186 kata; 1 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/qsakhina.pdf) | Tidak ada bukti audit per halaman |
| KR-016 | عائشة أم المؤمنين رضي الله عنها | ? belum diuji | ⚠ 513 kata; 3 mnt | ❌ belum ACC baru | [PDF kandidat](https://archive.org/download/elbouti/aicha.pdf) | Tidak ada bukti audit per halaman |

### Habib Abu Bakar al-Adni — 59 judul katalog

**Catatan:** dalam `assets/books.js`, judul al-Adni memakai tautan ke halaman umum buku, **bukan URL PDF langsung**. Itu bukan bukti PDF tidak ada di ZIP milik pemilik. Kolom PDF langsung dibiarkan kosong sampai sumber dicocokkan.

| ID | Kitab | Akses PDF/MD berbukti | Naskah yang ada | ACC terbaru | Rujukan PDF | Catatan |
|---|---|---|---|---|---|---|
| AD-001 | البطولات والفداء في نظم سيرة سيد الشهداء حمزة | ? belum diuji | ⚠ 198 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-002 | البلسم في نظم حياة المسيح عيسى بن مريم | ? belum diuji | ⚠ 195 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-003 | الجمانة في ذكر سيرة رابعة حضرموت الشيخة سلطانة | ? belum diuji | ⚠ 194 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-004 | الحلة السيراء في مناقب عائشة الحميراء | ? belum diuji | ⚠ 188 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-005 | الرموز والأصابع ، مقارنة تاريخية بين قرامطة الأمس وقراصنة اليوم | ? belum diuji | ⚠ 212 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-006 | الزهرات الندية في مولد خير البرية | ? belum diuji | ⚠ 191 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-007 | السلسبيل الجاري في نظم وقائع البخاري | ? belum diuji | ⚠ 184 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-008 | السلسلة العريقة في مشروعية وفضل العقيقة | ? belum diuji | ⚠ 178 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-009 | المزن الثجاج في سرد قصة الإسراء والمعراج | ? belum diuji | ⚠ 192 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-010 | المصفوفة الأم | ? belum diuji | ⚠ 191 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-011 | المنظومة الدرية في ذكر الغزوة البدرية | ? belum diuji | ⚠ 173 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-012 | المنظومة الرجَبيَّة | ? belum diuji | ⚠ 161 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-013 | المنظومة السلطانية المسماة الصواع السلطاني في نظم سيرة السلطان عبد الحميد الثاني | ? belum diuji | ⚠ 196 kata; 2 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-014 | المنظومة الملاذية في نظم السيرة المعاذية معاذ بن جبل | ? belum diuji | ⚠ 178 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-015 | النبذة الصغرى | ? belum diuji | ⚠ 174 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-016 | الوشاح الأخضر في نظم سيرة الإمام حيدر | ? belum diuji | ⚠ 170 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-017 | الوشاح الموشم في نظم سيرة سيدنا الفقيه المقدم | ? belum diuji | ⚠ 174 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-018 | بلغة المشغوف في منظومة الخسوف والكسوف | ? belum diuji | ⚠ 177 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-019 | بواعث الشجن في نظم سيرة الإمام السبط الحسن | ? belum diuji | ⚠ 179 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-020 | درر اللآلي في نظم حياة الإمام الغزالي | ? belum diuji | ⚠ 174 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-021 | دليل التائه الحيران فيما ورد عن ليلة النصف من شعبان | ? belum diuji | ⚠ 186 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-022 | دليل المريد السالك | ? belum diuji | ⚠ 174 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-023 | رسالة إلى شباب المسلمين | ? belum diuji | ⚠ 162 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-024 | رسالة شخصية | ? belum diuji | ⚠ 159 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-025 | زخات المطر في نظم سيرة أمير المؤمنين سيدنا عمر | ? belum diuji | ⚠ 177 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-026 | منظومة ضوء السراج في مناسبة استقبال الحجاج | ✅ dibaca | ⚠ 858 kata; 5 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 14 hlm; teks terbaca, bait Arab perlu cek visual |
| AD-027 | التنصيص المثبوت للمشهور | ✅ dibaca | ◐ 1813 kata; 10 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 78 hlm; struktur dan bagian utama dibaca; riwayat belum review independen |
| AD-028 | الوثيقـة | ⚠ sebagian/edisi lain | ◐ 2833 kata; 15 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 352 hlm; isi dipilah tematik, subjudul rinci belum tercakup |
| AD-029 | مستجدات فقه الدعوة إلى الله في المرحلة المعاصرة | ✅ dibaca | ◐ 1932 kata; 11 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 26 hlm; teks seluruhnya dibaca menurut QA batch 1 |
| AD-030 | الإيضاح والإشارة لما أصاب الأمة من هزائم السقوف المنهارة | ✅ dibaca | ◐ 2165 kata; 12 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 118 hlm; TOC 24 bagian dan isi ditinjau, OCR perlu cek |
| AD-031 | الأسس والمنطلقات | ⚠ sebagian/edisi lain | ⚠ 3047 kata; 17 mnt (butuh seri) | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 469 hlm; peninjauan selektif, OCR rusak dan subjudul rinci belum lengkap |
| AD-032 | الإحاطة والاحتياط من شبه الوقوع فيما أخبر به صلى الله عليه وسلم عند قرب الساعة من العلامات والأشراط | ✅ dibaca | ◐ 1786 kata; 10 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 97 hlm; struktur/teks ditinjau; takhrij belum diperiksa |
| AD-033 | خطب جمعة | ✅ dibaca | ◐ 2313 kata; 13 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 70 hlm; kumpulan khutbah diperiksa, lembar terserak |
| AD-034 | رجال المنابر والمقامات | ✅ dibaca | ◐ 1788 kata; 10 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 31 hlm; teks ditinjau, beberapa karakter OCR rusak |
| AD-035 | شرف الانتماء والارتباط في نظم سيرة صاحب مرباط | ✅ dibaca | ⚠ 1431 kata; 8 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | 36 hlm; nazam dibaca, edisi revisi/bait belum QA visual |
| AD-036 | عقد الجواهر في نظم حياة وهجرة الإمام المهاجر | ? belum diuji | ⚠ 179 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-037 | عقد اللجين في نطم سيرة الإمام السبط الحسين | ? belum diuji | ⚠ 178 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-038 | مختصر المختصر لطلاب العلم في الصغر | ? belum diuji | ⚠ 181 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-039 | إحياء منهجية النمط الأوسط | ? belum diuji | ⚠ 171 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-040 | أصول الدين الأربعة | ? belum diuji | ⚠ 168 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-041 | إقامة الجدار في نظم حياة الشيخ احمد بن محمد بلجفار | ? belum diuji | ⚠ 177 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-042 | الأبنية الفكرية ، الجامعة لثوابت الطريقة العلوية الحسينية | ? belum diuji | ⚠ 179 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-043 | الإتحاف في نظم سيرة الحبيب عبدالقادر السقاف | ? belum diuji | ⚠ 167 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-044 | الإستعدادات الحثيثة لحماية الأربطة من مزاحمة المدرسة الحديثة | ? belum diuji | ⚠ 178 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-045 | الأطروحة للمشهور | ? belum diuji | ⚠ 167 kata; 1 mnt | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Tidak ada bukti audit per halaman |
| AD-046 | مطالع الإسعاد في نظم سيرة الإمام الحداد | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-047 | منظومة الجسد الواحد | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-048 | منظومة الختام فى توديع العام | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-049 | منظومة المائدة الربانية في الوظائف الرمضانية | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-050 | منظومة النفحة الرحمانية في الخصائص الشعبانية | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-051 | منظومة شرح الأثر فيما ورد عن شهر صفر | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-052 | منظومة طالب الفضل والأجر عما يخص المسلم والمسلمة فى عيد الفطر | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-053 | منظومة قارورة الزجاج في ذم العزوبة وفضل الزواج | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-054 | منهج السلامة الواعي المنقذ من طوفان الوهن والتداعي | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-055 | نبذة النبذة | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-056 | هديل الحمائم نظم سيرة الشيخ أبي بكر بن سالم | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-057 | التبصرة الدعوية شرح المنظومة النسوية | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-058 | المناصرة والمؤازرة لكافة منسوبي مدارس آل البيت النبوي في المرحلة | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |
| AD-059 | منظومة السدرة شرح مختصر الهجرة | ? belum diuji | ❌ belum ada teks | ❌ belum ACC baru | tidak ada URL PDF langsung di katalog | Metadata MD saja; PDF tidak terbukti terbaca |

## D. Buku dan pengarang yang belum masuk daftar

1. **Kitab al-Buthi sekitar 45 menurut pemilik:** hanya 26 tercatat pada katalog saat audit; 19 berkas gambar cover yang tidak terpakai **tidak otomatis berarti 19 judul baru** karena ada duplikat, judul pengarang lain, dan variasi sampul. Belum dapat dipastikan jumlah buku unik tanpa inventaris arsip.
2. **Habib Umar bin Hafizh sekitar 100+ menurut pemilik:** **belum ada kelompok pengarang tersebut dalam 85 entri katalog**; jangan mencampurkannya dengan Habib Abu Bakar al-Adni. Buku beliau belum bisa didaftar per PDF sampai daftar isi ZIP sumber tersedia.
3. Nomor `BOOK_ID` dalam katalog adalah identitas UI, **bukan** bukti file dengan ID yang sama ada di arsip.

## E. Prioritas audit sesudah akses ZIP pulih

1. Inventaris ZIP dengan **nama file persis**, ukuran byte, checksum SHA-256, struktur direktori, jumlah PDF/MD; jangan hanya mengandalkan judul cover.
2. Per PDF: uji bisa dibuka, jumlah halaman, metadata edisi/pengarang, kelengkapan awal–tengah–akhir, TOC dan penutup; tes halaman rusak serta kualitas OCR (PDF visual sebagai otoritas). Pisahkan `PDF_OPEN`, `TEXT_EXTRACT`, `VISUAL_QA`, `EDITION_MATCH`, `CHAPTER_MAP`.
3. Per MD: cari pasangan PDF yang **pasti**, hitung bagian hilang, heading rusak, Arab terganggu, cek nukilan. Jangan menganggap semua MD otomatis cocok dengan PDF.
4. Status per buku `SOURCE_READ` diganti ✅ hanya setelah tersedia bukti halaman dan file spesifik, bukan dari `summaryMd` website.
5. Bandingkan seluruh nama PDF/MD sebenarnya dengan 85 judul, tambahan al-Buthi, dan kumpulan Habib Umar. Judul yang belum ada katalog harus dicatat terpisah, tidak dibuat ID secara otomatis.
6. Prioritaskan audit yang berisiko tinggi: **AB-001** (konflik edisi/OCR), **AB-007** (16 vs 35 halaman), **AB-030** (TOC saja), **AB-031** (cuplikan OCR), **AD-028/AD-031** (kitab panjang subjudul belum lengkap), serta semua 15 entri tanpa teks.

## F. Dokumen bukti administratif yang diperiksa

- [QA Batch 1](https://github.com/amangkitabb-lab/QIraah/blob/main/QIRAAH_BATCH1_QA_2026-11-16.md)
- [QA Batch 2](https://github.com/amangkitabb-lab/QIraah/blob/main/QIRAAH_BATCH2_QA_2026-11-16.md)
- [QA Batch 3](https://github.com/amangkitabb-lab/QIraah/blob/main/QIRAAH_BATCH3_EDISI_QA_2026-11-17.md)
- [Memori proyek](https://github.com/amangkitabb-lab/QIraah/blob/main/MEMORI_PROYEK_QIRAAH.md)
- [Protokol sebelumnya](https://github.com/amangkitabb-lab/QIraah/blob/main/QIRAAH_EDITORIAL_PIPELINE.md)

**Laporan ini tidak menjalankan ringkasan ulang, tidak mengubah website dan tidak membuktikan isi ZIP satu per satu.** Pembaruan status wajib menggunakan bukti pemrosesan file individual dan catatan QA baru.
