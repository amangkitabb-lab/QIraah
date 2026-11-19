(()=>{
'use strict';
// Resolve the deployment prefix from this script's URL. On GitHub Pages a
// repository site may live below /QIraah/, not at the domain root.
// This works for either a user-site root or a project-site subdirectory.
const qiraahCurrentScript = document.currentScript || [...document.scripts].find(s => /\/assets\/app\.js(?:[?#]|$)/.test(s.src));
if (qiraahCurrentScript && qiraahCurrentScript.src) {
  const siteRoot = new URL('../', qiraahCurrentScript.src);
  window.QIRAAH_BASE_PATH = siteRoot.pathname.replace(/\/$/, '');
}
const CATALOG_KEY='qiraah.v28.md-only.catalog';
const PROFILE_PREFIX='qiraah.v04.profile.';
const AUTH=window.QIRAAH_AUTH;
const SITE_KEY='qiraah.v14.siteConfig';
const SITE_FIELDS=['countryLabel','motto','instagramUrl','tiktokUrl','threadsUrl','saweriaUrl','lynkUrl','linktreeUrl','qrisImageUrl','qrisPayUrl','qrisMerchantName','contactEmail'];
const SITE_DEFAULTS=window.QIRAAH_SITE_CONFIG||{};
let siteConfig={...SITE_DEFAULTS,...loadJson(SITE_KEY,{})};
const SEED=(Array.isArray(window.QIRAAH_SEED)?window.QIRAAH_SEED:[]).filter(b=>b.group==='Al-Buthi'||b.group==='Al-Adni');
const REVIEW_MODE=window.QIRAAH_REVIEW_MODE===true;
// Temporary presentation mode: focus on al-Buthi. Catalog and summaries remain in books.js.
const QIRAAH_BOUTHI_FOCUS=true;
const REVIEW_DRAFTS=REVIEW_MODE?(window.QIRAAH_EDITORIAL_DRAFTS||{}):{};
const draftFor=id=>REVIEW_MODE?REVIEW_DRAFTS[id]:null;
const $=(q)=>document.querySelector(q);
const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const qs=(v)=>encodeURIComponent(String(v??''));
const url=(v)=>{try{const u=new URL(v,location.href);return ['https:','http:'].includes(u.protocol)?esc(u.href):'#'}catch{return '#'}};
const v=(id)=>document.getElementById(id)?.value||'';
function loadJson(key,fallback){try{let raw=localStorage.getItem(key);if(raw)return JSON.parse(raw)}catch(e){console.warn('Gagal membaca penyimpanan lokal',e)}return fallback;}
function writeJson(key,data){try{localStorage.setItem(key,JSON.stringify(data));return true}catch(e){toast('Penyimpanan browser tidak tersedia; perubahan mungkin tidak tersimpan.');return false}}
const normalize=(b)=>({ coverUrl:'', shopeeUrl:'', shopNotes:'', storeVerified:false, ...b, summaryCoverage:b.summaryCoverage||'unknown', coverRightsStatus:b.coverRightsStatus||'pending', coverRightsEvidence:b.coverRightsEvidence||'', sourceQc:b.sourceQc||'pending', contentQc:b.contentQc||'pending', humanApproval:b.humanApproval||false, rightsEvidence:b.rightsEvidence||'', summaryMd:b.summaryMd||'' });
function restoredCatalog(){
 const previous=loadJson(CATALOG_KEY,loadJson('qiraah.v27.bouthi.catalog',loadJson('qiraah.v17.bouthi.catalog',loadJson('qiraah.v16.bouthi.catalog',[]))));
 if(!Array.isArray(previous))return SEED;
 const previousById=new Map(previous.map(b=>[b.id,b]));
 const shopFields=['shopeeUrl','shopNotes','storeVerified'];
 return SEED.map(b=>{const old=previousById.get(b.id);if(!old)return b;const custom={};for(const k of shopFields)if(old[k])custom[k]=old[k];return {...b,...custom}});
}
let books=(REVIEW_MODE?SEED:restoredCatalog()).map(normalize);
if(!Array.isArray(books)||!books.length)books=SEED.map(normalize);
const profileDefault=()=>({bookmarks:[],progress:{},previewProgress:{},previewDone:{},seriesDone:{},completed:{},lastOpened:{}});
let user=null,profileKey=PROFILE_PREFIX+'guest',profile={...profileDefault(),...loadJson(profileKey,loadJson('riwaq.v02.profile.guest',{}))};
const READER_PREFS_KEY='qiraah.v23.readerPreferences';
let readerPrefs={size:1,night:false,...loadJson(READER_PREFS_KEY,{})};
const readerSizes=[0.9,1,1.12,1.23];
function applyReaderPrefs(){document.documentElement.style.setProperty('--reader-scale',String(readerSizes[Math.max(0,Math.min(3,Number(readerPrefs.size)||0))]));document.body.classList.toggle('reading-night',!!readerPrefs.night);}
function changeReaderPrefs(action){if(action==='read-smaller')readerPrefs.size=Math.max(0,Number(readerPrefs.size)-1);if(action==='read-larger')readerPrefs.size=Math.min(3,Number(readerPrefs.size)+1);if(action==='read-theme')readerPrefs.night=!readerPrefs.night;writeJson(READER_PREFS_KEY,readerPrefs);applyReaderPrefs();const toggle=document.querySelector('[data-action="read-theme"]');if(toggle){toggle.setAttribute('aria-pressed',String(readerPrefs.night));toggle.textContent=readerPrefs.night?'Mode terang':'Mode nyaman';}}
let trackedReaderHref='';
let qAudioActive=false;
function qAudioStop(){
 if('speechSynthesis' in window){try{window.speechSynthesis.cancel()}catch(e){console.warn('Audio tidak dapat dihentikan',e)}}
 qAudioActive=false;
 const button=document.querySelector('[data-action="audio-toggle"]');
 if(button){button.textContent='♫ Dengarkan';button.setAttribute('aria-pressed','false')}
}
function qAudioToggle(){
 if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){toast('Peramban ini belum mendukung pembacaan suara.');return}
 if(qAudioActive){qAudioStop();return}
 const content=document.querySelector('.reader-copy');
 if(!content||!content.textContent.trim()){toast('Ringkasan belum tersedia untuk didengarkan.');return}
 qAudioStop();
 const speech=new SpeechSynthesisUtterance(content.textContent.replace(/\s+/g,' ').trim());
 speech.lang='id-ID';speech.rate=0.92;speech.pitch=1;
 speech.onend=()=>qAudioStop();speech.onerror=()=>qAudioStop();
 qAudioActive=true;
 const button=document.querySelector('[data-action="audio-toggle"]');
 if(button){button.textContent='■ Hentikan';button.setAttribute('aria-pressed','true')}
 try{window.speechSynthesis.speak(speech)}catch(e){qAudioStop();toast('Audio tidak dapat dimulai pada perangkat ini.')}
}
let searchTerm='',genreFilter='Semua',authorFilter='Semua',progressFilter='Semua',lastCatalogRouteToken=null,sortBy='editor',adminTerm='',adminStage='Semua',editingId=null,scrollTimer=null,toastTimer=null,suppressScrollUntil=0;
const genres=['Semua','Akidah','Al-Quran','Adab & Tazkiyah','Pemikiran Islam','Tasawuf','Riwayah & Sastra','Sirah & Biografi','Pendidikan','Fikih'];
const phase1=(b)=>Number(b.phase)===1;
const publicationGate=(b)=>!!(b&&b.published&&b.editorialStatus==='terbit'&&b.rights==='cleared'&&String(b.rightsEvidence||'').trim()&&b.sourceQc==='passed'&&b.contentQc==='passed'&&b.humanApproval===true&&String(b.sourceUrl||'').trim()&&['full','partial'].includes(b.summaryCoverage)&&String(b.summaryMd||'').trim().length>=300);
const isBookReady=(b)=>publicationGate(b)||!!(b&&b.ownerFinal===true&&String(b.summaryMd||'').trim().length>300);
const getBook=(id)=>books.find(b=>b.id===id);
const full=(b)=>b&&isBookReady(b);
const staged=(b)=>!!(REVIEW_MODE&&b&&draftFor(b.id)&&String(draftFor(b.id).markdown||'').length>300);
const hasWrittenSummary=(b)=>!!(b&&(full(b)||staged(b)||b.internalDraftAvailable||b.editorialStatus==='review'));
const canRead=(b)=>!!(b&&(full(b)||staged(b)));
const progressFor=(b)=>b?(full(b)?percent(profile.progress?.[b.id]):staged(b)?percent(profile.previewProgress?.[b.id]):0):0;
const doneFor=(b)=>!!(b&&(full(b)?profile.completed?.[b.id]:staged(b)&&draftFor(b.id)?.coverage==='full'&&profile.previewDone?.[b.id]));
function readingStats(){const read=books.filter(b=>canRead(b)&&(progressFor(b)>0||doneFor(b)));const done=read.filter(doneFor);return {read,done,ongoing:read.filter(b=>!doneFor(b)&&progressFor(b)>0),genres:[...new Set(read.map(b=>b.genre))]};}

const mainCatalog=()=>QIRAAH_BOUTHI_FOCUS?books.filter(b=>b.group==='Al-Buthi'):books; // Keep original seed intact.
const statusName={antri:'Antrian',riset:'Riset sumber',konversi:'PDF → MD',peta:'Peta bab',ringkas:'Peringkasan',review:'Review editor',terbit:'Terbit'};
const rightsName={audit:'Audit izin',cleared:'Izin tercatat',restricted:'Terbatas',unknown:'Belum jelas',nonkomersial_disebutkan:'Batas nonkomersial',pemakaian_pribadi_saja:'Pemakaian pribadi'};
const authorShort=(b)=>b.collaborative?b.author:b.group==='Al-Buthi'?'Imam Muhammad Sa’id Ramadan al-Buthi':b.group==='Al-Adni'?'Habib Abu Bakar al-Adni':b.author;
function saveCatalog(){writeJson(CATALOG_KEY,books)}
function saveProfile(){writeJson(profileKey,profile);if(user)AUTH.sync(profile)}
function isBookmark(id){return profile.bookmarks?.includes(id)}
function toggleBookmark(id){let items=new Set(profile.bookmarks||[]);if(items.has(id)){items.delete(id);toast('Dihapus dari rak bacaan')}else{items.add(id);toast('Kitab ditambahkan ke rak bacaan')}profile.bookmarks=[...items];saveProfile();render();}
const percent=(x)=>Math.min(100,Math.max(0,Number(x)||0));
function toast(message){let root=$('#toast-root');if(!root)return;root.innerHTML=`<div class="modal-toast" role="status">${esc(message)}</div>`;clearTimeout(toastTimer);toastTimer=setTimeout(()=>root.innerHTML='',4500)}
function brand(){return `<a href="#/" class="wordmark" aria-label="Qira’ah beranda"><span class="mark"><img src="${safeImageLink('assets/qiraah-qaf-white.svg')}" class="brand-qaf-icon" width="28" height="28" alt="" aria-hidden="true"></span>qira’ah<span style="font-size:10px;color:#829184;margin-left:2px;letter-spacing:0;font-weight:700">BACAAN KITAB</span></a>`}
const icon=(name)=>({bookmark:'♧',book:'▤',spark:'✧',arrow:'↗',check:'✓',pen:'✎',search:'⌕',shelf:'▦',back:'←',filter:'⌘'}[name]||name);
function navLink(href,label,active){return `<a class="navlink ${active?'active':''}" href="${href}">${label}</a>`}
function header(active){return `${REVIEW_MODE?'<div class="staging-banner">MODE REVIEW LOKAL · Draf belum melalui izin dan pemeriksaan manusia · Jangan upload folder ini ke hosting publik</div>':''}<header class="topbar"><div class="shell navwrap">${brand()}<nav class="navlinks" aria-label="Menu utama">${navLink('#/','Beranda',active==='home')}${navLink('#/jelajahi','Jelajahi Kitab',active==='catalog')}${navLink('#/kamus','Kamus & Kutipan',active==='dictionary')}${navLink('#/rak','Rak Saya',active==='shelf')}${REVIEW_MODE?navLink('#/review','Sumber Markdown',active==='review'):''}${navLink('#/tentang','Tentang',active==='about')}</nav><div class="navend">${user?`<button class="btn btn-soft btn-sm" data-action="user-menu" title="Akun Google aktif">${esc(user.displayName||user.email||'Akun')} ◌</button>`:AUTH?.enabled?`<button class="btn btn-primary btn-sm" data-action="sign-in">Masuk Google</button>`:`<a class="btn btn-primary btn-sm" href="#/rak">Buka Rak Saya</a>`}</div></div></header><nav class="mobile-nav" aria-label="Menu ponsel"><a class="${active==='home'?'active':''}" href="#/"><b>⌂</b>Beranda</a><a class="${active==='catalog'?'active':''}" href="#/jelajahi"><b>▤</b>Jelajahi</a><a class="${active==='shelf'?'active':''}" href="#/rak"><b>▦</b>Rak Saya</a><a class="${active==='dictionary'?'active':''}" href="#/kamus"><b>⌕</b>Kamus</a></nav>`}
function validatedLink(raw){try{const u=new URL(String(raw||''));return u.protocol==='https:'?esc(u.href):''}catch{return ''}}
function safeImageLink(raw){const s=String(raw||'').trim();if(/^assets\/[a-zA-Z0-9._\/-]+$/.test(s)&&!s.includes('..')){const appScript=[...document.scripts].find(x=>/assets\/app\.js(?:\?|$)/.test(x.getAttribute('src')||''));const root=appScript?new URL('../',appScript.src):new URL('./',document.baseURI);return esc(new URL(s,root).href)}return validatedLink(s)}
function footerLink(key,label){const href=validatedLink(siteConfig[key]);return href?`<a class="social-link" target="_blank" rel="noopener noreferrer" href="${href}">${esc(label)} <span aria-hidden="true">↗</span></a>`:''}
function footer(){
 const socials=[['instagramUrl','Instagram'],['tiktokUrl','TikTok'],['threadsUrl','Threads']].map(([k,l])=>footerLink(k,l)).filter(Boolean).join('');
 const donations=[['saweriaUrl','Saweria'],['lynkUrl','Lynk.id'],['linktreeUrl','Linktree']].map(([k,l])=>footerLink(k,l)).filter(Boolean).join('');
 const qris=safeImageLink(siteConfig.qrisImageUrl);
 const adminLink=window.QIRAAH_PUBLIC_MODE?'':'<a href="#/admin">Ruang editor</a>';
 return `<footer class="footer site-footer"><div class="footer-free"><div class="shell"><span class="free-seal"><img src="${safeImageLink('assets/qiraah-qaf-green.svg')}" width="24" height="24" alt="" aria-hidden="true"></span><div><strong>Akses katalog gratis.</strong><p>Ringkasan yang tersedia dapat dibaca tanpa login.</p></div><a class="footer-browse" href="#/jelajahi">Jelajahi kitab ↗</a></div></div><div class="shell footer-grid q-footer-compact"><div class="footer-col footer-identity">${brand()}<p>Bacaan singkat, jalan menuju kitab asli.</p><div class="footer-country">Indonesia</div></div><div class="footer-col"><h3>Qira’ah</h3><a href="#/">Beranda</a><a href="#/jelajahi">Jelajahi kitab</a><a href="#/kamus">Kamus & Kutipan</a><a href="#/rak">Rak Saya</a><a href="#/tentang">Tentang</a><a href="${esc(String(window.QIRAAH_BASE_PATH||''))}/hak-cipta/">Hak Cipta &amp; Pengaduan</a>${adminLink}${socials?`<div class="footer-social">${socials}</div>`:''}</div><div class="footer-col footer-donation"><h3>Mari berdonasi untuk perkembangan Qira’ah.</h3>${qris?`<a href="${qris}" class="qris-actual" target="_blank" rel="noopener noreferrer" title="Perbesar QRIS"><img src="${qris}" alt="Pindai QRIS donasi sukarela Qira’ah" loading="eager" decoding="async"></a>`:''}</div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Qira’ah</span><a href="${esc(String(window.QIRAAH_BASE_PATH||''))}/hak-cipta/">Laporkan masalah hak cipta</a></div></footer>`;
}
const palettes=[['#284d41','#688674'],['#7c8060','#4b6352'],['#7a5f50','#9e8777'],['#415867','#778b8b'],['#597c70','#2d5044'],['#967d62','#695943'],['#6a6567','#444b48'],['#485d51','#72957b'],['#6c8161','#3d5f4b']];
function cover(b,eager=false){const p=palettes[(Number(b.coverVariant)||0)%palettes.length];if(b.coverUrl&&safeImageLink(b.coverUrl))return `<div class="book-cover original-cover" style="--c1:${p[0]};--c2:${p[1]}"><img src="${safeImageLink(b.coverUrl)}" alt="${b.coverKind==='title_page'?'Halaman judul':'Gambar sampul'} kitab ${esc(b.titleAr)}" loading="${eager?'eager':'lazy'}" decoding="async" fetchpriority="${eager?'high':'auto'}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="cover-remote-fallback" lang="ar" dir="rtl" style="display:none">${esc(b.titleAr)}</span></div>`;return `<div class="book-cover book-cover-pending qiraah-illustration" style="--c1:${p[0]};--c2:${p[1]}" role="img" aria-label="Ilustrasi katalog Qiraah, bukan sampul asli: ${esc(b.titleAr)}"><div class="illustration-top"><img src="${safeImageLink('assets/qiraah-qaf-white.svg')}" width="28" height="28" alt="" aria-hidden="true"><small>QIRAAH / KATALOG</small></div><strong class="illustration-title" lang="ar" dir="rtl">${esc(b.titleAr)}</strong><div class="illustration-rule" aria-hidden="true"></div><span class="illustration-author">${esc(authorShort(b))}</span><span class="illustration-note">ILUSTRASI · BUKAN SAMPUL ASLI</span></div>`}
function readingEstimate(b){
 if(full(b)&&String(b.summaryMd||'').trim()){const words=String(b.summaryMd).split(/\s+/).filter(Boolean).length;return `± ${Math.max(1,Math.ceil(words/190))} menit baca`; }
 if(staged(b)){const wc=String(draftFor(b.id)?.markdown||'').split(/\s+/).filter(Boolean).length;return `± ${Math.max(1,Math.ceil(wc/190))} menit · draf`;}

 return 'Durasi belum tersedia';
}
function card(b){
 const pending=!hasWrittenSummary(b),pr=progressFor(b),can=canRead(b);
 const shortStatus=full(b)?(b.summaryCoverage==='full'?'Ringkasan lengkap':'Ringkasan bagian awal'):staged(b)?'Baca draf editorial':hasWrittenSummary(b)?(b.editorialStatus==='ringkas'?'Draf ringkasan awal':'Belum tersedia'):'Menunggu ringkasan';
 return `<article class="book-card ${pending?'book-card-waiting':'book-card-featured'}"><div class="cover-wrap"><a class="book-link" data-animate-book="true" href="#/baca/${qs(b.id)}" aria-label="Buka ${esc(b.titleAr)}">${cover(b)}</a><button class="bookmark-float" data-action="bookmark" data-id="${esc(b.id)}" title="${isBookmark(b.id)?'Hapus dari rak':'Simpan ke Rak Saya'}" aria-label="Simpan ${esc(b.titleAr)}">${isBookmark(b.id)?'♥':'♡'}</button></div><a class="book-link" data-animate-book="true" href="#/baca/${qs(b.id)}"><div class="book-title" dir="rtl" lang="ar">${esc(b.titleAr)}</div><div class="book-author">${esc(authorShort(b))}</div><div class="book-below">${esc(shortStatus)} · ${esc(b.genre)}</div><div class="reading-time-chip">◷ ${esc(readingEstimate(b))}</div>${can&&pr>0?`<div class="card-progress"><span style="width:${pr}%"></span></div><small class="card-progress-note">${doneFor(b)?'✓ Selesai':Math.round(pr)+'% dibaca'}</small>`:''}</a></article>`;
}
function genreCard(g,i){const n=mainCatalog().filter(b=>b.genre===g).length;return `<a class="genre-card" href="#/jelajahi?fan=${qs(g)}"><div><span class="genre-icon">${['✧','◈','⌘','❖','✥','✦','❂','☷','◌'][i%9]}</span><strong>${esc(g)}</strong><small>${n} judul</small></div><span style="color:#afbfaf;font-size:20px">↗</span></a>`}

// Muallif cards use live catalog records, not manually-maintained counters.
const authorGroups=[
 {group:'Al-Buthi',arabic:'محمد سعيد رمضان البوطي',name:'Syekh Muhammad Sa’id Ramadan al-Buthi',short:'Akidah, fikih, Al-Qur’an dan pemikiran Islam',letter:'ب',tone:'forest'},
 {group:'Al-Adni',arabic:'أبو بكر العدني بن علي المشهور',name:'Habib Abu Bakar al-Adni',short:'Sirah, dakwah, adab, pendidikan, dan karya nazam',letter:'ع',tone:'olive'}
];
function authorCard(x){
 const set=mainCatalog().filter(b=>x.author?b.author===x.author:b.group===x.group);
 const drafted=set.filter(hasWrittenSummary).length;
 const target=x.author?'author:'+x.author:x.group;
 return `<a class="muallif-card muallif-${x.tone}${x.author?' muallif-small':''}" href="#/jelajahi?muallif=${qs(target)}" aria-label="Lihat ${set.length} kitab ${esc(x.name)}"><div class="muallif-card-top"><span class="muallif-collection">${x.author?'PILIHAN PEMBACA':'KOLEKSI MUALLIF'}</span><span class="muallif-arrow" aria-hidden="true">↗</span></div><div class="muallif-card-body"><span class="muallif-monogram" lang="ar" aria-hidden="true">${x.letter}</span><div class="muallif-card-text"><span class="muallif-arabic" lang="ar" dir="rtl">${esc(x.arabic)}</span><h3>${esc(x.name)}</h3><p>${esc(x.short)}</p></div></div><div class="muallif-card-foot"><strong>${set.length} kitab</strong><span>${drafted} ringkasan tersedia</span><span class="muallif-action">Lihat koleksi <span aria-hidden="true">→</span></span></div></a>`;
}

function collectionGallery(){
 const groups=['Pemikiran Islam','Sirah & Biografi','Adab & Tazkiyah'];
 return `<section class="section collection-showcase" id="jelajahi-koleksi"><div class="section-head collection-section-head"><div><div class="eyebrow">PERPUSTAKAAN PILIHAN</div><h2>Jelajahi koleksi</h2><p>Tiga kitab dari setiap fan. Pilih sampul untuk melihat ringkasan, estimasi baca, dan sumber asli.</p></div><a class="text-link" href="#/jelajahi">Lihat semua ↗</a></div><div class="collection-grid">${groups.map((g,gi)=>{const list=books.filter(b=>b.genre===g).slice(0,3),n=books.filter(b=>b.genre===g).length;return `<div class="collection-group"><a href="#/jelajahi?fan=${qs(g)}" class="collection-heading"><h3>${esc(g)}</h3><span>${n} kitab · jelajahi ↗</span></a><div class="collection-cover-stack">${list.map((b,i)=>`<a href="#/baca/${qs(b.id)}" data-animate-book="true" class="collection-book collection-book-${i+1}" aria-label="Buka ${esc(b.titleAr)} · ${esc(readingEstimate(b))}" title="${esc(b.titleAr)} — ${esc(readingEstimate(b))}">${cover(b)}</a>`).join('')}</div><p class="collection-caption">${list.length} pilihan · ${gi===0?'Pemikiran & peradaban':gi===1?'Sirah & kisah keteladanan':'Akhlak & pembinaan jiwa'}</p></div>`}).join('')}</div></section>`;
}
function recentlyOpenedSection(){
 const recent=Object.entries(profile.lastOpened||{}).sort((a,b)=>String(b[1]).localeCompare(String(a[1]))).map(([id,date])=>({b:getBook(id),date})).filter(x=>x.b).slice(0,6);
 return `<section class="section recent-books" id="terakhir-dibuka"><div class="section-head"><div><div class="eyebrow">LANJUTKAN PETUALANGAN BACA</div><h2>Terakhir dibuka</h2><p>Riwayat kitab yang dibuka tersimpan hanya pada perangkat ini.</p></div>${recent.length?'<button class="btn btn-soft btn-sm" data-action="clear-history">Hapus riwayat</button>':''}</div>${recent.length?`<div class="recent-list">${recent.map(({b,date})=>{const percentNow=progressFor(b);return `<div class="recent-item"><a class="recent-cover" data-animate-book="true" href="#/baca/${qs(b.id)}">${cover(b)}</a><div class="recent-item-info"><a href="#/baca/${qs(b.id)}"><strong dir="rtl" lang="ar">${esc(b.titleAr)}</strong></a><span>oleh ${esc(authorShort(b))} · ${esc(readingEstimate(b))}</span>${canRead(b)?`<div class="recent-progress"><i style="width:${percentNow}%"></i></div><small>${Math.round(percentNow)}% dibaca · ${esc(b.genre)}</small>`:`<small>Halaman kitab · ringkasan belum terbit</small>`}</div><div class="recent-side"><a href="#/baca/${qs(b.id)}${canRead(b)?'?lanjut=1':''}">Buka kembali ↗</a><button type="button" data-action="remove-history" data-id="${esc(b.id)}" aria-label="Hapus ${esc(b.titleAr)} dari riwayat" title="Hapus riwayat kitab">×</button></div></div>`}).join('')}</div>`:`<div class="recent-empty"><span>◷</span><div><strong>Belum ada riwayat bacaan.</strong><p>Klik sebuah kitab di katalog; jejaknya akan muncul di sini secara otomatis.</p></div><a href="#/jelajahi" class="btn btn-soft">Mulai jelajahi ↗</a></div>`}</section>`;
}

/* Al-Buthi catalogue view — summaries remain safely stored, but are not listed.
   Once cover binaries are available, coverUrl fields in assets/books.js supply
   the real images without changing these views. */
function bouthiCoverCard(b){
  const href='#/baca/'+qs(b.id);
  return '<article class="book-card book-card-featured"><a class="book-link" data-animate-book="true" href="'+href+'" aria-label="Lihat kitab '+esc(b.titleAr)+'"><div class="cover-wrap">'+cover(b)+'</div><div class="book-title" dir="rtl" lang="ar">'+esc(b.titleAr)+'</div><div class="book-author">'+esc(authorShort(b))+'</div><div class="book-below">'+esc(b.genre)+' · Lihat detail kitab</div></a></article>';
}
function bouthiHome(){
  const list=mainCatalog();
  const picks=['AB-001','AB-003','AB-007'].map(getBook).filter(Boolean);
  return header('home')+
    '<main id="main" class="shell">'+
      '<section class="lead lead-v18"><div class="eyebrow">QIRAAH · KATALOG KITAB SYEKH AL-BUTHI</div><h1>Kenali kitabnya.<br><span style="color:var(--sage)">Lihat sampul aslinya.</span></h1><p>Koleksi karya Syekh Muhammad Sa’id Ramadan al-Buthi. Sampul dan halaman judul dipasangkan sesuai karya. Pilih kitab untuk melihat detailnya.</p><a class="btn btn-primary" href="#/jelajahi">Lihat seluruh kitab ↗</a></section>'+
      '<section class="hero-feature hero-feature-v18"><div class="feature-copy"><div class="eyebrow">KARYA PILIHAN</div><h2>Mulai dari kitabnya.</h2><div class="arabic-feature" lang="ar">اقْرَأْ</div><p>Telusuri judul, tema, dan sumber kitab karya al-Buthi.</p><a class="btn btn-primary" href="#/jelajahi">Jelajahi katalog ↗</a></div><div class="feature-covers feature-covers-v18" aria-label="Sampul kitab pilihan">'+
        picks.map((b,i)=>'<a class="hero-book hero-book-'+(i+1)+'" data-animate-book="true" href="#/baca/'+qs(b.id)+'" aria-label="Buka '+esc(b.titleAr)+'">'+cover(b,i===0)+'</a>').join('')+
      '</div></section>'+
      '<section class="section"><div class="section-head"><div><div class="eyebrow">KATALOG MUALLIF</div><h2>Kitab Syekh al-Buthi</h2><p>'+list.length+' judul dalam katalog. Pilih gambar untuk membuka detail kitab.</p></div><a class="text-link" href="#/jelajahi">Lihat semua ↗</a></div><div class="book-grid">'+list.slice(0,12).map(bouthiCoverCard).join('')+'</div></section>'+
      '<section class="section"><div class="section-head"><div><h2>Jelajahi menurut fan</h2><p>Temukan tema bacaan yang kamu cari.</p></div></div><div class="genre-grid">'+genres.slice(1).filter(g=>list.some(b=>b.genre===g)).map((g,i)=>genreCard(g,i)).join('')+'</div></section>'+
    '</main>'+footer();
}
function bouthiCatalog(){
  const needle=searchTerm.trim().toLowerCase();
  const list=mainCatalog().filter(b=>(genreFilter==='Semua'||genreFilter===b.genre)&&(!needle||[b.id,b.titleAr,b.displayTitle,b.author,b.genre].join(' ').toLowerCase().includes(needle)));
  if(sortBy==='title')list.sort((a,b)=>a.titleAr.localeCompare(b.titleAr,'ar')); else if(sortBy==='genre')list.sort((a,b)=>a.genre.localeCompare(b.genre,'id')); else list.sort((a,b)=>(a.priority||99)-(b.priority||99));
  return header('catalog')+
    '<main id="main" class="shell">'+
      '<section class="catalog-intro"><div class="eyebrow">SYEKH MUHAMMAD SA’ID RAMADAN AL-BUTHI</div><h1>Katalog kitab & sampul.</h1><p>Temukan karya berdasarkan judul Arab atau fan. Ringkasan tidak dihapus dari arsip; daftar ringkasan disembunyikan sementara agar katalog kitab menjadi fokus.</p></section>'+
      '<div class="toolbar"><label class="searchbox" aria-label="Cari kitab"><span aria-hidden="true">⌕</span><input id="catalog-search" placeholder="Cari judul Arab atau fan..." autocomplete="off" value="'+esc(searchTerm)+'"></label><label><span class="footnote">Urutkan &nbsp;</span><select id="sort-books" style="padding:10px;border:1px solid var(--line);border-radius:10px;color:var(--ink);background:#fff"><option value="editor" '+(sortBy==='editor'?'selected':'')+'>Pilihan editor</option><option value="title" '+(sortBy==='title'?'selected':'')+'>Judul A–Z</option><option value="genre" '+(sortBy==='genre'?'selected':'')+'>Menurut fan</option></select></label></div>'+
      '<div class="chips">'+genres.filter(g=>g==='Semua'||mainCatalog().some(b=>b.genre===g)).map(g=>'<button class="chip '+(g===genreFilter?'active':'')+'" data-action="genre" data-genre="'+esc(g)+'">'+esc(g)+'</button>').join('')+'</div>'+
      '<div class="result-note">'+list.length+' judul Syekh al-Buthi</div>'+
      '<section class="section q-catalog-results"><div class="book-grid">'+list.map(bouthiCoverCard).join('')+'</div></section>'+
      (!list.length?'<div class="empty-state"><h3>Judul belum ditemukan.</h3><button class="btn btn-soft" data-action="reset-filter">Lihat semua</button></div>':'')+
      '</main>'+footer();
}

function home(){if(QIRAAH_BOUTHI_FOCUS)return bouthiHome();
 const drafted=books.filter(hasWrittenSummary).sort((a,b)=>(Number(a.priority)||9)-(Number(b.priority)||9));
 const publishReady=drafted.filter(full);
 const featured=REVIEW_MODE?drafted.filter(staged).concat(drafted.filter(b=>!staged(b))).slice(0,5):publishReady.length?publishReady.slice(0,5):drafted.slice(0,5);
 const waiting=books.filter(b=>!hasWrittenSummary(b)).slice(0,8);
 const heroIds=['AB-001','AD-001','AD-002'];const hero=heroIds.map(getBook).filter(Boolean);
 const st=readingStats(), continuing=st.ongoing.slice().sort((a,b)=>(profile.lastOpened?.[b.id]||'').localeCompare(profile.lastOpened?.[a.id]||'')).slice(0,3);
 return `${header('home')}<main id="main"><div class="shell"><section class="lead lead-v18"><div class="eyebrow">QIRAAH · PERPUSTAKAAN BACAAN KITAB</div><h1>Mengenal kitab.<br><span style="color:var(--sage)">Menjaga sumbernya.</span></h1><p>Karya Syekh al-Buthi dan Habib Abu Bakar al-Adni, lengkap dengan edisi ringkas yang telah dipilih pemilik Qira’ah.</p></section><section class="hero-feature hero-feature-v18"><div class="feature-copy"><div class="eyebrow">PILIHAN KITAB</div><h2>Mulai dari satu kitab.</h2><div class="arabic-feature" lang="ar">اقْرَأْ</div><p>${REVIEW_MODE?'Pilih kitab dan baca draf ringkasan yang telah disusun untuk pemeriksaan.': 'Dua muallif, satu perpustakaan. Buka ringkasan pilihan dan lanjutkan ke kitab aslinya.'}</p><a class="btn btn-primary" href="${REVIEW_MODE?'#/ringkasan':'#/jelajahi'}">${REVIEW_MODE?'Baca draf ringkasan':'Jelajahi katalog'} ↗</a></div><div class="feature-covers feature-covers-v18" aria-label="Klik sampul kitab pilihan">${hero.map((b,i)=>`<a class="hero-book hero-book-${i+1}" data-animate-book="true" href="#/baca/${qs(b.id)}" aria-label="Buka ${esc(b.titleAr)}">${cover(b,i===0)}<span class="hero-book-tooltip" dir="rtl" lang="ar">${esc(b.titleAr)} ↗</span></a>`).join('')}</div></section><section class="section muallif-section" id="jelajahi-muallif"><div class="section-head"><div><div class="eyebrow">KENALI PENGARANGNYA</div><h2>Jelajahi menurut muallif</h2><p>Pilih ulama atau penulis yang ingin kamu kenal, lalu temukan kitab-kitabnya.</p></div><a href="#/jelajahi" class="text-link">Semua pengarang ↗</a></div><div class="muallif-grid">${authorGroups.map(authorCard).join('')}</div></section><section class="editorial-dashboard" aria-label="Status katalog Qira'ah"><div><strong>${books.length}</strong><span>Kitab terdata</span></div><div><strong>${drafted.length}</strong><span>Naskah pilihan</span></div><div><strong>${publishReady.length}</strong><span>Bacaan tersedia</span></div><a href="#/ringkasan">Lihat status ringkasan ↗</a></section><section class="reading-dashboard" aria-label="Perjalanan bacaanmu"><div class="reading-dashboard-intro"><span class="eyebrow">JEJAK BACA PRIBADI</span><strong>Perjalanan membacamu</strong><small>Tersimpan di browser ini.</small></div><div class="reading-dashboard-stats"><div><strong>${st.done.length}</strong><span>Selesai</span></div><div><strong>${st.ongoing.length}</strong><span>Sedang dibaca</span></div><div><strong>${st.genres.length}</strong><span>Fan dijelajahi</span></div>${st.genres.length?`<div class="dashboard-genres">${st.genres.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`:''}</div><a href="#/rak" class="read-dash-link">Rak Saya ↗</a></section>${continuing.length?`<section class="section section-continue"><div class="section-head"><div><h2>Lanjutkan membaca</h2><p>Kamu bisa melanjutkan dari posisi terakhir.</p></div></div><div class="continue-grid">${continuing.map(b=>`<a class="continue-item" href="#/baca/${qs(b.id)}?lanjut=1">${cover(b)}<div><strong dir="rtl" lang="ar">${esc(b.titleAr)}</strong><small>${esc(b.genre)}</small><div class="progress-line"><span style="width:${progressFor(b)}%"></span></div><small>${Math.round(progressFor(b))}% dibaca · lanjutkan ↗</small></div></a>`).join('')}</div></section>`:''}<section class="section"><div class="section-head"><div><h2>${REVIEW_MODE?'Pilih dan baca draf ringkasan':publishReady.length?'Ringkasan pilihan yang dapat dibaca':'Karya yang sedang disiapkan'}</h2><p>${REVIEW_MODE?'Draf disediakan di ruang privat untuk diperiksa.':publishReady.length?publishReady.length+' ringkasan tersedia dengan persetujuan editorial pemilik; cakupan bab berbeda antarjudul.':drafted.length+' draf masih menjalani pemeriksaan sumber, isi, dan izin publikasi.'}</p></div><a href="#/ringkasan" class="text-link">${REVIEW_MODE?'Baca semua draf':'Status ringkasan'} ↗</a></div><div class="book-grid">${featured.map(card).join('')}</div></section>${collectionGallery()}${recentlyOpenedSection()}<section class="section"><div class="section-head"><div><h2>Jelajahi menurut fan</h2><p>Temukan kitab sesuai minatmu.</p></div></div><div class="genre-grid">${genres.slice(1,9).map(genreCard).join('')}</div></section>${waiting.length?`<section class="section waiting-section"><div class="section-head"><div><h2>Kitab lain dalam katalog</h2><p>Ringkasannya sedang dipersiapkan.</p></div><a href="#/jelajahi" class="text-link">Lihat semua ↗</a></div><div class="book-grid">${waiting.map(card).join('')}</div></section>`:''}</div></main>${footer()}`;
}
function dictionary(){
 const quoteBooks=REVIEW_MODE?books.filter(b=>(window.QIRAAH_EDITORIAL_QUOTES||{})[b.id]?.length):[];
 const links=[
  {name:'Al-Maany · Arab–Indonesia',subtitle:'Cari makna kata Arab dalam bahasa Indonesia',href:'https://www.almaany.com/id/dict/ar-id/',mark:'ع'},
  {name:'Al-Maany · Arab–Arab',subtitle:'Rujuk definisi dan penggunaan dalam bahasa Arab',href:'https://www.almaany.com/ar/dict/ar-ar/',mark:'أ'},
  {name:'Shamela · Kitab Bahasa',subtitle:'Kumpulan kitab الغريب والمعاجم di المكتبة الشاملة',href:'https://shamela.ws/category/30',mark:'ش'},
  {name:'Shamela · Pencarian Kitab',subtitle:'Telusuri pustaka sumber Arab melalui pencarian resmi',href:'https://shamela.ws/search',mark:'ش'}
 ];
 return `${header('dictionary')}<main id="main" class="shell dictionary-page"><section class="dictionary-hero"><span class="eyebrow">QIRAAH · ALAT BANTU MEMBACA</span><h1>Kamus & Kutipan Kitab</h1><p>Temukan arti kata, jelajahi kamus turats, dan kembalilah ke halaman kitab asli. Tautan berikut membuka sumber pihak ketiga; Qira’ah tidak menyalin database kamus mereka.</p><form id="dictionary-form" class="dictionary-search"><label for="dictionary-word">Cari satu kata Arab di Al-Maany</label><div><input type="search" id="dictionary-word" lang="ar" dir="rtl" required placeholder="اكتب كلمة عربية…" aria-label="Kata bahasa Arab"><button class="btn btn-primary" type="submit">Cari arti ↗</button></div></form></section><div class="dictionary-links">${links.map(x=>`<a class="dictionary-link" href="${url(x.href)}" target="_blank" rel="noopener noreferrer"><span class="dictionary-mark" aria-hidden="true">${x.mark}</span><div><strong>${esc(x.name)}</strong><p>${esc(x.subtitle)}</p></div><span aria-hidden="true">↗</span></a>`).join('')}</div><section class="section quote-index"><div class="section-head"><div><div class="eyebrow">JEJAK TEKS ASLI</div><h2>Kutipan menurut kitab</h2><p>Kutipan akan tampil setelah setiap redaksi dibandingkan dengan sumber asli, diperiksa halamannya, dan diizinkan untuk ditampilkan.</p></div></div>${quoteBooks.length?`<div class="quote-index-grid">${quoteBooks.map(b=>`<a class="quote-book-link" href="#/baca/${qs(b.id)}"><strong lang="ar" dir="rtl">${esc(b.titleAr)}</strong><span>${(window.QIRAAH_EDITORIAL_QUOTES||{})[b.id].length} kandidat kutipan untuk review · lihat sumber ↗</span></a>`).join('')}</div>`:`<div class="quote-pending"><span aria-hidden="true">❝</span><strong>Kutipan pengarang sedang diverifikasi.</strong><p>Belum ada petikan yang diizinkan untuk tampil di situs publik. Jangan menganggap deskripsi katalog sebagai kutipan penulis.</p></div>`}</section></main>${footer()}`;
}
function filteredBooks(){const low=searchTerm.trim().toLowerCase();let subset=mainCatalog().filter(b=>(genreFilter==='Semua'||genreFilter===b.genre)&&(authorFilter==='Semua'||authorFilter===b.group||authorFilter==='author:'+b.author)&&(progressFilter==='Semua'||(progressFilter==='Siap'&&full(b))||(progressFilter==='Review'&&!full(b)&&hasWrittenSummary(b))||(progressFilter==='Antri'&&!hasWrittenSummary(b)))&&(!low||[b.displayTitle,b.titleAr,b.author,b.group,b.genre].join(' ').toLowerCase().includes(low)));
if(sortBy==='title')subset.sort((a,b)=>a.titleAr.localeCompare(b.titleAr,'ar'));else if(sortBy==='genre')subset.sort((a,b)=>a.genre.localeCompare(b.genre,'id'));else subset.sort((a,b)=>Number(hasWrittenSummary(b))-Number(hasWrittenSummary(a))||(a.priority||5)-(b.priority||5));return subset}
function reviewPage(){
 if(!REVIEW_MODE)return notfound();
 const ids=Object.keys(REVIEW_DRAFTS);
 const items=ids.map(getBook).filter(Boolean);
 const completeCount=ids.filter(id=>REVIEW_DRAFTS[id].coverage==='full').length;
 const partialCount=ids.length-completeCount;
 const sources=books.filter(b=>b.sourceMdAvailable);
 return `${header('review')}<main id="main" class="shell"><section class="catalog-intro"><div class="eyebrow">RUANG REVIEW LOKAL · BUKAN WEBSITE PUBLIK</div><h1>${ids.length} draf · ${sources.length} sumber Markdown.</h1><p>${completeCount} draf mencakup bagian asli dan ${partialCount} draf seri/parsial. Tersedia ${sources.length} teks Arab hasil OCR PDF untuk audit sumber; belum ada naskah yang disahkan untuk diterbitkan. Pilih sampul untuk membaca draf, atau buka sumber Arab untuk memeriksa halaman.</p></section><div class="review-grid">${items.map(b=>{const d=draftFor(b.id);return `<article class="review-entry"><a href="#/baca/${qs(b.id)}">${cover(b)}</a><div><div class="eyebrow">${d.coverage==='full'?'DRAF MENCAKUP SEMUA BAGIAN':'DRAF PARSIAL / SERI'}</div><h2 dir="rtl" lang="ar">${esc(b.titleAr)}</h2><p>${esc(d.note)}</p><a class="btn btn-primary" href="#/baca/${qs(b.id)}">Baca untuk review ↗</a></div></article>`}).join('')}</div><section class="section"><div class="section-head"><div><h2>${sources.length} sumber Arab siap diaudit</h2><p>Setiap MD terhubung dengan PDF asli, halaman, dan checksum. Buka satu kitab untuk memeriksa teks hasil OCR; ini bukan ringkasan bahasa Indonesia.</p></div></div><div class="book-grid">${sources.map(b=>`<article class="book-card"><a class="book-link" href="${sourceReaderHref(b.id)}">${cover(b)}<div class="book-title" lang="ar" dir="rtl">${esc(b.titleAr)}</div><div class="book-author">${esc(authorShort(b))}</div><div class="book-below">${esc(b.sourceMdPageCount)} hlm · OCR perlu audit</div></a></article>`).join('')}</div></section><div class="notice"><strong>Belum ada ringkasan final.</strong><p>Jangan masukkan folder staging ke repository publik. Penanda pratinjau tidak berarti isi dan hak publikasi telah disetujui.</p></div></main>${footer()}`;
}
function summariesPagePublic(){
 const finalBooks=books.filter(b=>full(b)&&b.summaryCoverage==='full');
 const series=books.filter(b=>full(b)&&b.summaryCoverage==='partial');
 const review=books.filter(b=>!full(b)&&hasWrittenSummary(b));
 return `${header('summaries')}<main id="main" class="shell"><section class="summary-intro"><div class="eyebrow">KOLEKSI RINGKASAN QIRAAH</div><h1>Sudah diringkas, <em>siap dibaca.</em></h1><p>Naskah yang tersedia telah disetujui pemilik Qira’ah sebagai edisi bacaan. Ringkasan bagian awal belum mencakup seluruh bab. Izin publikasi sumber dan sampul tetap dicatat terpisah.</p><div class="summary-metrics"><div><strong>${finalBooks.length}</strong><span>Cakupan penuh</span></div><div><strong>${series.length}</strong><span>Ringkasan bagian awal</span></div><div><strong>${review.length}</strong><span>Belum tersedia</span></div></div></section>${finalBooks.length?`<section class="section"><div class="section-head"><div><h2>Ringkasan tuntas</h2><p>Dapat dibaca; tetap disertai rujukan menuju karya asli.</p></div></div><div class="book-grid">${finalBooks.map(card).join('')}</div></section>`:`<section class="section empty-summary"><div class="empty-symbol" aria-hidden="true">ق</div><div><h2>Belum ada ringkasan yang lulus pemeriksaan akhir.</h2><p>Isi tetap aman di ruang editorial. Begitu perizinan, audit sumber, dan persetujuan editor lengkap, kitab akan muncul di rak ini secara otomatis saat situs dibangun ulang.</p><a class="btn btn-primary" href="#/jelajahi">Jelajahi katalog kitab ↗</a></div></section>`}${series.length?`<section class="section"><div class="section-head"><div><h2>Ringkasan berseri</h2><p>Bagian yang tersedia dapat dibaca, tetapi bukan ringkasan seluruh kitab.</p></div></div><div class="book-grid">${series.map(card).join('')}</div></section>`:''}${review.length?`<section class="section"><div class="section-head"><div><h2>Sedang diperiksa</h2><p>${review.length} draf terdata. Daftar ini menunjukkan progres editorial, bukan teks yang sudah boleh disebarluaskan.</p></div></div><div class="book-grid">${review.slice(0,10).map(card).join('')}</div><div class="section-tail"><a class="btn btn-soft" href="#/jelajahi">Lihat seluruh ${books.length} judul ↗</a></div></section>`:''}</main>${footer()}`;
}
function summariesPage(){if(QIRAAH_BOUTHI_FOCUS)return bouthiCatalog();
 if(!REVIEW_MODE)return summariesPagePublic();
 const drafts=books.filter(staged);
 const totalFull=drafts.filter(b=>draftFor(b.id).coverage==='full').length;
 const subsets=[['Al-Buthi','Syekh Muhammad Sa’id Ramadan al-Buthi'],['Al-Adni','Habib Abu Bakar al-Adni']];
 return `${header('summaries')}<main id="main" class="shell q-draft-rack"><section class="summary-intro"><div class="eyebrow">EDISI BACA · REVIEW PRIVAT</div><h1>Ringkasan kitab, <em>kembali tersedia.</em></h1><p>Seluruh naskah yang telah disusun dapat dibuka untuk pemeriksaan di sini. Teks belum menjadi terbitan publik; cek ketepatan ibarat, cakupan bab, dan izin karya sebelum dirilis.</p><div class="summary-metrics"><div><strong>${drafts.length}</strong><span>Draf dapat dibaca</span></div><div><strong>${totalFull}</strong><span>Label cakupan penuh*</span></div><div><strong>${books.length-drafts.length}</strong><span>Belum punya draf</span></div></div><div class="review-caution">*Cakupan penuh adalah label pengerjaan naskah, bukan bukti sudah lulus audit sumber atau izin.</div></section>${subsets.map(([group,label])=>{const set=drafts.filter(b=>b.group===group).sort((a,b)=>(a.priority||99)-(b.priority||99));return `<section class="section"><div class="section-head"><div><div class="eyebrow">KOLEKSI MUALLIF</div><h2>${label}</h2><p>${set.length} draf tersedia untuk dibaca dan diperiksa.</p></div><a class="text-link" href="#/jelajahi?muallif=${qs(group)}">Seluruh katalog ↗</a></div><div class="book-grid">${set.map(card).join('')}</div></section>`}).join('')}</main>${footer()}`;
}

function catalog(){if(QIRAAH_BOUTHI_FOCUS)return bouthiCatalog();
 const list=filteredBooks();const summarized=list.filter(hasWrittenSummary),waiting=list.filter(b=>!hasWrittenSummary(b));
 return `${header('catalog')}<main id="main" class="shell"><section class="catalog-intro"><div class="eyebrow">JELAJAHI KITAB</div><h1>Temukan bacaanmu.</h1><p>${books.length} kitab dari Syekh al-Buthi dan Habib Abu Bakar al-Adni. Pilih karya, telusuri fan, dan baca ringkasan yang telah disetujui pemilik Qira’ah.</p></section><div class="toolbar"><label class="searchbox" aria-label="Cari kitab"><span aria-hidden="true">⌕</span><input id="catalog-search" placeholder="Cari judul, pengarang, atau fan..." autocomplete="off" value="${esc(searchTerm)}"></label><label><span class="footnote">Urutkan &nbsp;</span><select id="sort-books" style="padding:10px;border:1px solid var(--line);border-radius:10px;color:var(--ink);background:#fff"><option value="editor" ${sortBy==='editor'?'selected':''}>Ringkasan dahulu</option><option value="title" ${sortBy==='title'?'selected':''}>Judul A–Z</option><option value="genre" ${sortBy==='genre'?'selected':''}>Menurut fan</option></select></label></div><div class="q-author-filter"><label for="author-group-filter">Pengarang </label><select id="author-group-filter"><option value="Semua" ${authorFilter==='Semua'?'selected':''}>Semua pengarang</option><option value="Al-Buthi" ${authorFilter==='Al-Buthi'?'selected':''}>Syekh al-Buthi</option><option value="Al-Adni" ${authorFilter==='Al-Adni'?'selected':''}>Habib Abu Bakar al-Adni</option></select></div><div class="status-filter" role="group" aria-label="Tahap ringkasan">${[['Semua','Semua status'],['Siap','Siap dibaca'],['Review','Dalam review'],['Antri','Belum ditulis']].map(([k,label])=>`<button type="button" class="status-filter-btn ${progressFilter===k?'selected':''}" data-action="progress-filter" data-filter="${k}" aria-pressed="${progressFilter===k}">${label}</button>`).join('')}</div><div class="chips">${genres.map(g=>`<button class="chip ${g===genreFilter?'active':''}" data-action="genre" data-genre="${esc(g)}">${esc(g)}</button>`).join('')}</div><div class="result-note">${list.length} judul · ${list.filter(full).length} siap dibaca · ${summarized.length} ringkasan tersedia</div>${summarized.length?`<section class="section q-catalog-results"><div class="section-head"><div><h2>${list.filter(full).length?'Ringkasan tersedia':'Menunggu naskah ringkasan'}</h2><p>${REVIEW_MODE?'Buka naskah di ruang editorial privat.':'Lihat naskah ringkasan pilihan dan status cakupan sebenarnya.'}</p></div></div><div class="book-grid">${summarized.map(card).join('')}</div></section>`:''}${waiting.length?`<section class="section q-catalog-results waiting-section"><div class="section-head"><div><h2>Menunggu peringkasan</h2><p>Sudah memiliki sumber MD, tetapi ringkasan Indonesia belum tersedia.</p></div></div><div class="book-grid">${waiting.map(card).join('')}</div></section>`:''}${!list.length?`<div class="empty-state"><h3>Judul belum ditemukan</h3><button class="btn btn-soft" data-action="reset-filter">Lihat semua kitab</button></div>`:''}<div style="height:40px"></div></main>${footer()}`;
}
function sourceReaderHref(id){
 const appScript=[...document.scripts].find(x=>/assets\/app\.js(?:\?|$)/.test(x.getAttribute('src')||''));
 const root=appScript?new URL('../',appScript.src):new URL('./',document.baseURI);
 return esc(new URL('sumber/'+encodeURIComponent(id)+'/index.html',root).href);
}
function sourceBlock(b){
 const pdf=validatedLink(b.pdfUrl);
 const source=validatedLink(b.sourceUrl);
 return `<div class="reading-end"><h3>Kitab asli</h3><p>Ringkasan ini hanya pengantar. Untuk pembahasan yang lebih lengkap, bacalah kitab asli.</p><div class="split-buttons">${pdf?`<a class="btn btn-soft" href="${pdf}" rel="noopener noreferrer" target="_blank">Baca PDF kitab asli ↗</a>`:''}${source?`<a class="text-link" href="${source}" rel="noopener noreferrer" target="_blank">Laman sumber ↗</a>`:''}</div>${!pdf?'<p class="commerce-caption">Tautan PDF belum tersedia untuk judul ini.</p>':''}</div>`;
}
function mdToSections(text){const lines=String(text||'').replace(/\r/g,'').split('\n');let html='',inList=false;
function endList(){if(inList){html+='</ul>';inList=false}}
for(const line of lines){const s=line.trim();if(!s){endList();continue}if(/^#{1,3} /.test(s)){endList();const hashes=s.match(/^#+/)[0].length;html+=`<h${hashes+1}>${inline(s.slice(hashes+1))}</h${hashes+1}>`}else if(/^[-*] /.test(s)){if(!inList){html+='<ul>';inList=true}html+=`<li>${inline(s.slice(2))}</li>`}else if(/^> \[arabic\](?: \[([^\]]+)\])? /.test(s)){endList();const m=s.match(/^> \[arabic\](?: \[([^\]]+)\])? (.*)$/);html+=`<figure class="source-excerpt"><blockquote lang="ar" dir="rtl">${esc(m[2])}</blockquote>${m[1]?`<figcaption>${esc(m[1])}</figcaption>`: ''}</figure>`}else if(/^> /.test(s)){endList();html+=`<blockquote class="editorial-quote">${inline(s.slice(2))}</blockquote>`}else{endList();html+=`<p>${inline(s)}</p>`}}endList();return html}
function inline(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>')}
const DEMO_BOOK_ID='KR-035';
const DEMO_PARTS=[
 {id:'contoh-1',title:'Bagian 1 — Memasuki bacaan',body:[
  'Bagian ini memperlihatkan bagaimana sebuah ringkasan akan dibuka: ada pertanyaan utama, jalan penjelasan, dan hubungan antargagasan. Ini tulisan contoh yang disusun untuk menguji tampilan Qira’ah, bukan ringkasan dari isi kitab فاتتني صلاة.',
  'Setelah naskah sumber tersedia, bagian ini akan diganti dengan pembacaan atas bab pertama yang benar-benar ada dalam edisi pilihan. Judul bab, alur tulisan, dan halaman rujukannya akan mengikuti buku tersebut.'
 ]},
 {id:'contoh-2',title:'Bagian 2 — Mengikuti jalan pembahasan',body:[
  'Ketika suatu bab memuat kisah, contoh, atau pertanyaan, kita akan menuliskannya dalam bahasa Indonesia yang wajar tanpa memutus konteks. Setiap klaim perlu dapat ditelusuri ke letaknya dalam sumber Arab.',
  'Jika sebuah bab memiliki ibarat Arab yang penting, petikannya dapat muncul langsung di antara paragraf ringkasan. Redaksi dan nomor halaman harus lebih dahulu dibandingkan dengan kitab asli.'
 ]},
 {id:'contoh-3',title:'Bagian 3 — Kembali kepada kitab utuh',body:[
  'Ringkasan yang baik semestinya membuat pembaca tahu apa yang belum tercakup, bukan merasa telah menggantikan sebuah buku. Karena itu edisi Qira’ah akan ditutup dengan catatan batas ringkasan dan ajakan membuka karya aslinya.',
  'Di bawah halaman ini tersedia pilihan mencari kitab cetak di marketplace. Tautan produk resmi dari toko kitab akan dipasang kemudian ketika sudah diberikan dan dicek oleh pengelola.'
 ]}
];
const shopLink=(link)=>{try{const u=new URL(String(link||'').trim());const host=u.hostname.toLowerCase();return u.protocol==='https:'&&(host==='shopee.co.id'||host.endsWith('.shopee.co.id')||host==='shope.ee')?esc(u.href):'';}catch{return '';}};
const defaultShopSearch=b=>{
 const v=b.marketplaceSearchShopee||'';
 if(shopLink(v))return shopLink(v);
 const term=String(b.marketplaceSearchTerm||[b.titleAr,b.group==='Al-Buthi'?'البوطي':b.group==='Al-Adni'?'المشهور':b.author].join(' '));
 return 'https://shopee.co.id/search?keyword='+qs(term);
};
function purchaseLinks(b){
 const links=[];const seen=new Set();
 const add=(raw,edition='')=>{const href=shopLink(raw);if(href&&!seen.has(href)){seen.add(href);links.push({href,edition});}};
 add(b.shopeeUrl,b.marketplaceEdition||'');
 for(const x of b.marketplaceOffers||[])if(String(x.platform||'').toLowerCase()==='shopee')add(x.url,x.edition||'');
 return links;
}
function marketButtons(b,compact=false){
 const actual=purchaseLinks(b);
 const first=actual.length?actual[0]:null;
 const href=first?first.href:url(defaultShopSearch(b));
 const label=first?'Lihat di Shopee · produk':'Cari di Shopee · hasil pencarian';
 return `<a class="btn btn-soft q-original-btn" href="${href}" target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label="${esc(label)} untuk ${esc(b.titleAr)}">${label} ↗</a>`;
}
function quoteCompanion(b){return '';}

function buySidebar(b){return '';}

function originalCTA(b){
 const pdf=validatedLink(b.pdfUrl);
 return `<section class="original-cta q-original-simple" id="beli-kitab"><div class="eyebrow">SUMBER & KITAB CETAK</div><h2>Lanjutkan ke kitab asli</h2><p>Ringkasan adalah pengantar; periksa edisi asli untuk rincian pembahasan dan ibarat penulis.</p><div class="q-original-actions">${pdf?`<a class="btn btn-primary q-original-btn" href="${pdf}" target="_blank" rel="noopener noreferrer" aria-label="Buka PDF asli ${esc(b.titleAr)}">Buka PDF sumber ↗</a>`:`<span class="q-original-unavailable">PDF belum memiliki tautan terverifikasi.</span>`}${marketButtons(b)}</div><p class="commerce-caption">Tautan PDF menuju pihak luar. Shopee bisa berupa pencarian, bukan jaminan judul, stok, atau cetakan yang sama. <a class="legal-inline" href="${esc(String(window.QIRAAH_BASE_PATH||''))}/hak-cipta/">Hak Cipta &amp; Pengaduan</a>.</p></section>`;
}
function demoPartsHtml(){return `<div class="reading-tag reading-tag-demo">DEMO INTERAKTIF · BUKAN RINGKASAN KITAB</div><div class="demo-disclaimer"><strong>Contoh tata letak</strong><p>Teks berikut disusun khusus untuk menguji alur halaman. Bukan terjemahan, kutipan, atau ringkasan dari فاتتني صلاة. Judul bab asli baru akan ditampilkan setelah PDF/Markdown diverifikasi.</p></div><h2 class="reading-title">Bagaimana edisi Qira’ah akan dibaca</h2>${DEMO_PARTS.map((p,i)=>`<section class="demo-chapter" id="${p.id}"><div class="chapter-number">0${i+1} / 03</div><h2>${esc(p.title)}</h2>${p.body.map(t=>`<p>${esc(t)}</p>`).join('')}</section>`).join('')}`}
function mdHeadings(md){return String(md||'').split('\n').filter(l=>/^#{1,3} /.test(l)).map((h,i)=>({title:h.replace(/^#{1,3} /,''),id:'bab-'+(i+1)}));}
function cleanReadingMarkdown(md){
 // Presentation only: never modify the original editorial Markdown or its source audit.
 let lines=String(md||'').replace(/\r/g,'').split('\n');
 const first=lines.findIndex(l=>/^##\s+/.test(l));
 if(first>0)lines=lines.slice(first);
 const out=[];let cutting=false;
 for(const line of lines){
  const s=line.trim();
  if(/^##\s+(?:Melanjutkan(?:\s+(?:bacaan|ke|kepada))?|Mengapa sebaiknya membaca kitab aslinya|Tautan (?:pembelian|kitab asli))/i.test(s)){cutting=true;break;}
  if(/^\*\*(?:BOOK_ID|EDITION|SOURCE_LOCK|RIGHTS_STATUS|CURRENT_PHASE|Status editorial|Sumber|Edisi yang diperiksa|Landasan asli|Tujuan bacaan Qira’ah|Susunan kitab yang diperiksa)\s*[:：]/i.test(s))continue;
  if(/^(?:\*\*Catatan editorial privat|\*Status editorial|>\s*\*\*Catatan pemeriksaan)/i.test(s))continue;
  if(/^(?:Ringkasan ini mengikuti urutan pembahasan tersebut|Tautan kitab asli yang terdaftar|Tautan toko kitab cetak akan ditambahkan)/i.test(s))continue;
  if(/^---+$/.test(s))continue;
  out.push(line.replace(/\[(?:PDF\s*(?:hlm\.|h\.)?|Syamilah|hlm\.|h\.\s*\d)[^\]]*\]/gi,'').replace(/\s{2,}$/,'').trimEnd());
 }
 return out.join('\n').trim();
}

function mdToAnchoredSections(md){let n=0;return mdToSections(md).replace(/<h([2-4])>/g,(_m,level)=>`<h${level} id="bab-${++n}">`)}
function tocMarkup(b,ready,preview,reviewMarkdown=''){
 if(reviewMarkdown){const hs=mdHeadings(reviewMarkdown);return hs.map(h=>`<a href="#${h.id}">${esc(h.title)}</a>`).join('')+'<a href="#beli-kitab">Kitab asli</a>';}
 if(ready){const hs=mdHeadings(cleanReadingMarkdown(b.summaryMd));return hs.length?hs.map((h,i)=>`<a href="#${h.id}" class="${!i?'active':''}">${esc(h.title)}</a>`).join(''):'<a href="#bagian-bacaan">Ringkasan</a>'}
 if(b.id===DEMO_BOOK_ID)return DEMO_PARTS.map((p,i)=>`<a href="#${p.id}" class="${!i?'active':''}">${esc(p.title)}</a>`).join('')+'<a href="#beli-kitab">Beli kitab asli</a>';
 if(preview)return (b.preview||[]).map((p,i)=>`<a href="#sec-${i}">${esc(p.heading)}</a>`).join('')+'<a href="#beli-kitab">Beli kitab asli</a>';
 return '<a href="#keterangan">Tentang kitab</a><a href="#beli-kitab">Cari kitab cetak</a>';
}
function prettyRoutes(html){
 if(location.protocol==='file:')return html;
 const base=String(window.QIRAAH_BASE_PATH||'');
 return html.replace(/href="#\/([^"]*)"/g,(all,p)=>{
  const [part,search='']=p.split('?');
  const route=part.startsWith('baca/')?'/kitab/'+part.slice(5)+'/':part?'/'+part.replace(/\/$/,'')+'/':'/';
  const query=search?'?'+search:'';
  return 'href="'+esc(base+route+query)+'" data-route="true"';
 });
}

function reader(id){
 const b=getBook(id);if(!b)return notfound();
 const ready=full(b),reviewDraft=!ready?draftFor(b.id):null,draft=!!reviewDraft&&String(reviewDraft.markdown||'').length>300,preview=!ready&&b.preview?.length;
 const demo=!ready&&b.id===DEMO_BOOK_ID;
 const last=progressFor(b);
 const sections=preview?b.preview:[];
 const text=draft?`<div class="reading-tag reading-tag-demo">${reviewDraft.coverage==='partial'?'BACAAN BERSERI':'PRATINJAU RINGKASAN'} · BELUM TERBIT</div><div class="reader-copy">${mdToAnchoredSections(cleanReadingMarkdown(reviewDraft.markdown))}</div>`:ready?`<div class="reading-tag">✓ ${b.summaryCoverage==='partial'?'Seri ringkasan tersedia':'Ringkasan tersedia'}</div>${b.summaryCoverage==='partial'?'<p class="commerce-caption" style="margin:4px 0 18px">Edisi ini merangkum sebagian pembahasan kitab.</p>':''}<h2 class="reading-title">${esc(b.displayTitle||b.titleAr)}</h2><div class="reader-copy">${mdToAnchoredSections(cleanReadingMarkdown(b.summaryMd))}</div>`:
 demo?demoPartsHtml():preview?`<div class="reading-tag reading-tag-demo">CONTOH EDITORIAL · BUKAN RINGKASAN FINAL</div><div class="demo-disclaimer"><strong>Belum menggunakan teks kitab per bab</strong><p>Cuplikan ini diambil dari deskripsi katalog; naskah sumber masih harus diaudit.</p></div>${sections.map((s,i)=>`<section class="demo-chapter" id="sec-${i}"><h2>${esc(s.heading)}</h2><p>${esc(s.text)}</p><small>${esc(s.note)}</small></section>`).join('')}`:`<div class="reading-tag">${hasWrittenSummary(b)?'DRAF MENUNGGU AUDIT DAN IZIN':'RINGKASAN BELUM TERSEDIA'}</div><h2 class="reading-title">${hasWrittenSummary(b)?'Naskah sedang diperiksa':'Ringkasan kitab sedang disiapkan'}</h2><p>Ringkasan untuk kitab ini belum tersedia secara publik. Kamu tetap dapat menemukan kitab aslinya melalui tautan di bawah.</p>${b.description?`<section class="catalog-note"><div class="eyebrow">CATATAN KATALOG · BELUM DIAUDIT</div><p>${esc(b.description)}</p></section>`:''}<div class="notice"><strong>Simpan untuk nanti</strong><p>Tambahkan kitab ke Rak Saya. Belum ada pemberitahuan otomatis untuk edisi yang sedang disiapkan.</p></div>`;
 return `${header('reader')}<div class="reading-progress" role="progressbar" aria-label="Progres membaca" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(last)}"><div id="progress-bar" style="width:${last}%"></div><span id="progress-percentage">${Math.round(last)}%</span></div><main id="main" class="reader-container"><div class="breadcrumbs"><a href="#/jelajahi">← Jelajahi Kitab</a><span>/</span><span>${esc(b.genre)}</span></div><section class="reader-intro reader-intro-new">${cover(b)}<div class="reader-intro-copy"><div class="eyebrow">${esc(b.genre)} · ${esc(b.group)}</div><h1 dir="rtl" lang="ar">${esc(b.titleAr)}</h1><p>${esc(authorShort(b))}</p><div class="small-meta"><span>${esc(readingEstimate(b))}</span>${ready?'':`<span class="meta-dot">${draft?'Draf untuk diperiksa':hasWrittenSummary(b)?'Draf belum terbit':'Belum ada ringkasan'}</span>`}</div><div class="reader-actions"><button class="btn ${isBookmark(b.id)?'btn-soft':'btn-primary'}" data-action="bookmark" data-id="${esc(b.id)}">${isBookmark(b.id)?'♥ Tersimpan':'♡ Simpan kitab'}</button><a class="btn btn-ghost" href="#beli-kitab">PDF & Shopee ↓</a>${ready||draft?'<button type="button" class="btn btn-soft q-audio-button" data-action="audio-toggle" aria-pressed="false" aria-label="Dengarkan ringkasan Indonesia">♫ Dengarkan</button>':''}</div><div class="reading-controls" aria-label="Pengaturan kenyamanan membaca"><span>Tampilan bacaan</span><button type="button" class="reader-control" data-action="read-smaller" aria-label="Perkecil huruf">A−</button><button type="button" class="reader-control" data-action="read-larger" aria-label="Perbesar huruf">A+</button><button type="button" class="reader-control" data-action="read-theme" aria-pressed="${readerPrefs.night}">${readerPrefs.night?'Mode terang':'Mode nyaman'}</button></div></div></section><div class="reader-main reader-main-3col"><details class="toc q-toc-disclosure"><summary aria-label="Buka atau tutup daftar isi">Daftar isi <span aria-hidden="true">⌄</span></summary><nav class="q-toc-links" aria-label="Daftar bagian">${tocMarkup(b,ready,preview,draft?cleanReadingMarkdown(reviewDraft.markdown):'')}<p class="toc-foot">${canRead(b)?'Posisi baca disimpan otomatis.':'Ringkasan sedang disiapkan.'}</p></nav></details><article class="reading-pane" id="bagian-bacaan"><div id="keterangan">${text}</div>${ready||draft?`<div class="reading-finish-notice" id="reading-finish-notice">${doneFor(b)?'✓ Bacaan ini selesai.':'Bacalah sampai bagian akhir untuk menyelesaikan progres.'}</div>`:''}${originalCTA(b)}</article>${buySidebar(b)}</div></main>${footer()}`;
}
function openBook(id){profile.lastOpened[id]=new Date().toISOString();saveProfile();}
function shelf(){
 const saved=(profile.bookmarks||[]).map(getBook).filter(Boolean);const st=readingStats();
 const current=st.ongoing.slice().sort((a,b)=>(profile.lastOpened?.[b.id]||'').localeCompare(profile.lastOpened?.[a.id]||''));
 return `${header('shelf')}<main id="main" class="shell"><section class="shelf-head"><div class="eyebrow">RAK SAYA</div><h1>Perjalanan membacamu.</h1><p style="color:var(--muted);margin-top:12px">${user?'Bookmark dapat disinkronkan jika layanan akun aktif.':'Tanpa login — tersimpan di perangkat ini.'}</p></section><div class="stat-grid"><div class="stat"><label>Selesai</label><strong>${st.done.length}</strong></div><div class="stat"><label>Sedang dibaca</label><strong>${current.length}</strong></div><div class="stat"><label>Fan dijelajahi</label><strong>${st.genres.length}</strong></div></div>${st.genres.length?`<div class="shelf-genre-tags">${st.genres.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`:''}${recentlyOpenedSection()}<section class="shelf-section"><h2>Lanjutkan membaca</h2>${current.length?`<div class="panel-list">${current.map(b=>`<a class="panel-row continue-row" href="#/baca/${qs(b.id)}?lanjut=1">${cover(b)}<div style="flex:1;min-width:0"><strong dir="rtl" lang="ar">${esc(b.titleAr)}</strong><small>${esc(b.genre)} · ${Math.round(progressFor(b))}% dibaca</small><div class="progress-line"><span style="width:${progressFor(b)}%"></span></div></div><span class="btn btn-soft btn-sm">Lanjutkan ↗</span></a>`).join('')}</div>`:`<p class="footnote">Belum ada ringkasan yang sedang dibaca.</p>`}</section><section class="shelf-section"><h2>Kitab yang disimpan</h2>${saved.length?`<div class="book-grid">${saved.map(card).join('')}</div>`:`<div class="empty-state"><h3>Rakmu masih kosong.</h3><p>Ketuk ikon hati pada kitab untuk menyimpannya.</p><a href="#/jelajahi" class="btn btn-primary">Cari kitab</a></div>`}</section><section class="shelf-section"><h2>Bacaan yang selesai</h2>${st.done.length?`<div class="book-grid">${st.done.map(card).join('')}</div>`:`<p class="footnote">Bacaan selesai akan muncul di sini.</p>`}</section>${REVIEW_MODE?'<p class="reading-subtle-note">Statistik pratinjau hanya berlaku pada draf yang tersedia di ruang review, bukan penghitung ringkasan terbit.</p>':''}</main>${footer()}`;
}
function about(){return `${header('about')}<main id="main" class="shell"><article class="about-page"><div class="eyebrow">TENTANG QIRAAH</div><h1>Ringkasan untuk membuka pintu, bukan menutup kitab.</h1><p>Qira’ah adalah konsep perpustakaan ringkasan karya ulama dan penulis Arab. Setiap ringkasan seharusnya mengikuti susunan kitab, menunjukkan apa yang benar-benar dikatakan pengarang, dan menyediakan jalan menuju teks utuh.</p><h2>Bukan sekadar sinopsis</h2><p>Targetnya adalah bacaan yang nyaman, lazimnya sekitar lima belas menit untuk satu edisi, tetapi panjangnya mengikuti bobot bahan. Tulisan editorial ditinjau kembali terhadap sumber, termasuk istilah Arab, kutipan, konteks, dan batasan pendapat.</p><h2>Gratis tanpa login, donasi sukarela</h2><p>Ringkasan yang lolos pemeriksaan dibaca gratis, dan tidak diperlukan akun untuk membacanya. Dukungan melalui QRIS atau layanan donasi bersifat sukarela. Login hanya berguna untuk sinkronisasi Rak Saya ketika server telah dikonfigurasi; saat ini data demo disimpan di browser.</p><div class="arabic">القراءة بداية المعرفة، وليست نهايتها</div><p class="footnote">Kalimat Arab di atas adalah moto editorial buatan proyek, bukan kutipan dari pengarang kitab.</p><h2>Proses editorial dan hak cipta</h2><p>Kitab dalam katalog belum tentu mempunyai ringkasan terbit. Naskah dinyatakan siap hanya setelah audit sumber dan isi, izin adaptasi yang jelas, serta persetujuan editor. Gambar sampul akan ditampilkan pada situs publik setelah hak penggunaannya dikonfirmasi. Kitab lainnya menampilkan penanda sampul belum tersedia. Edisi ringkasan yang sudah tersedia tetap dapat diperbaiki berdasarkan koreksi pembaca dan pemeriksaan teks. Pengelolaan editorial pada demo ini berjalan lokal, bukan sistem backend produksi.</p><p><a class="legal-inline" href="${esc(String(window.QIRAAH_BASE_PATH||''))}/hak-cipta/">Baca kebijakan hak cipta dan kirim pengaduan</a></p><a href="#/jelajahi" class="btn btn-primary">Lihat katalog →</a></article></main>${footer()}`}
function publicAdminClosed(){return `${header('about')}<main id="main" class="shell"><div class="empty-state" style="margin:60px 0"><h1>Ruang editor tidak tersedia di website publik.</h1><p>Perubahan katalog dan naskah dikelola di ruang editorial terpisah.</p><a class="btn btn-primary" href="#/jelajahi">Kembali ke katalog</a></div></main>${footer()}`;}
function notfound(){return `${header('catalog')}<main id="main" class="shell"><div class="empty-state" style="margin:60px 0"><h1>Halaman tidak ditemukan</h1><p>Kitab mungkin telah dipindahkan atau URL-nya kurang tepat.</p><a href="#/jelajahi" class="btn btn-primary">Kembali ke katalog</a></div></main>${footer()}`}
function admin(){const stat={total:books.length,published:books.filter(full).length,active:books.filter(b=>!full(b)&&b.editorialStatus!=='antri').length,blocked:books.filter(b=>b.rights!=='cleared').length};let list=books.filter(b=>(adminStage==='Semua'||(adminStage==='Tahap 1'&&phase1(b))||(adminStage==='Tahap 2'&&!phase1(b))||(adminStage===b.editorialStatus))&&(!adminTerm||[b.titleAr,b.author,b.genre,b.group,b.id].join(' ').toLowerCase().includes(adminTerm.toLowerCase())));
const stepNames=['Terdaftar','Riset sumber','Konversi MD','Review isi','Siap terbit'];const stepCounts=[books.length,books.filter(b=>b.sourceQc==='passed').length,books.filter(b=>b.editorialStatus==='konversi').length,books.filter(b=>b.contentQc==='passed').length,stat.published];
const guard=!!window.QIRAAH_PUBLIC_MODE || (AUTH.enabled&&!AUTH.isAdmin());
if(guard)return `${header('')}<main id="main" class="shell"><div class="notice amber" style="margin:70px 0"><strong>Admin terbatas</strong><p>${window.QIRAAH_PUBLIC_MODE?'Ruang editor online belum diaktifkan. Gunakan dashboard lokal untuk meninjau katalog, sumber, dan tautan toko. Nantinya akses admin memerlukan otorisasi di server.':'Akses editor hanya untuk akun Google pengelola yang disetujui.'}</p>${window.QIRAAH_PUBLIC_MODE?'':'<button class="btn btn-primary" data-action="sign-in">Masuk Google</button>'}</div></main>${footer()}`;
return `<div class="admin-layout" id="main"><aside class="admin-sidebar">${brand()}<div class="eyebrow" style="margin:3px 0 16px;font-size:10px">EDITORIAL WORKSPACE</div><nav class="admin-nav"><a class="active" href="#/admin">▦ &nbsp; Dashboard</a><a href="#/jelajahi">▤ &nbsp; Katalog pembaca</a><a href="#/">⌂ &nbsp; Halaman utama</a><a href="#/tentang">ⓘ &nbsp; Petunjuk proyek</a></nav><div class="admin-side-footer"><strong>QIRAAH · PROTOTIPE v0.5</strong><br>Manajemen katalog pada browser lokal.<br>Data admin belum tersinkron dengan server dan akses lokal tidak aman untuk publikasi online.</div></aside><main class="admin-main"><div class="admin-top"><div><small>JUMAT, 6 NOVEMBER 2026 · VERSI EDITORIAL</small><h1>Dashboard Editorial</h1></div><div class="split-buttons"><button class="btn btn-ghost btn-sm" data-action="export-catalog">↓ Ekspor JSON</button><label class="btn btn-soft btn-sm" style="cursor:pointer">↑ Impor JSON<input type="file" id="import-json" accept="application/json" hidden></label><button class="btn btn-soft btn-sm" data-action="site-settings">⚙ Pengaturan situs</button><button class="btn btn-primary btn-sm" data-action="add-book">+ Tambah kitab</button></div></div><div class="admin-demo"><strong>DEMO LOKAL — BUKAN PRODUKSI.</strong> Semua perubahan tersimpan pada browser ini. Admin belum memakai backend atau hak akses aman. Untuk website publik gunakan autentikasi, database, dan validasi hak akses di server.</div><div class="admin-grid"><div class="admin-stat"><div class="mini-label">Judul terdata</div><div class="big">${stat.total}</div><div class="mini-foot">Katalog awal; bukan total karya final</div></div><div class="admin-stat"><div class="mini-label">Ringkasan terbit</div><div class="big">${stat.published}</div><div class="mini-foot">Edisi baca tersedia di katalog</div></div><div class="admin-stat"><div class="mini-label">Dalam proses</div><div class="big">${stat.active}</div><div class="mini-foot">Riset, konversi, atau editorial</div></div><div class="admin-stat"><div class="mini-label">Hak belum cleared</div><div class="big">${stat.blocked}</div><div class="mini-foot">Catatan hak untuk ditinjau</div></div></div><h2 class="admin-section-title">Jalur kerja editorial</h2><div class="mini-steps">${stepNames.map((s,i)=>`<div class="mini-step"><strong>${stepCounts[i]}</strong><small>${s}</small></div>`).join('')}</div><h2 class="admin-section-title">Perpustakaan kerja</h2><div class="admin-toolbar"><label class="searchbox" style="max-width:500px;min-width:230px"><span>⌕</span><input id="admin-search" placeholder="Cari judul atau pengarang..." value="${esc(adminTerm)}"></label><select id="admin-stage" class="btn btn-ghost"><option>Semua</option><option ${adminStage==='Tahap 1'?'selected':''}>Tahap 1</option><option ${adminStage==='Tahap 2'?'selected':''}>Tahap 2</option>${Object.keys(statusName).map(k=>`<option value="${k}" ${adminStage===k?'selected':''}>${statusName[k]}</option>`).join('')}</select></div><div class="result-note">Menampilkan ${list.length} dari ${books.length} catatan</div><div class="table-scroll"><table class="data-table"><thead><tr><th>Kitab</th><th>Fan</th><th>Tahap</th><th>Editorial</th><th>Hak</th><th>Tindakan</th></tr></thead><tbody>${list.map(b=>`<tr><td><div class="book-cell">${cover(b)}<div><strong dir="rtl" lang="ar">${esc(b.titleAr)}</strong><small>${esc(b.id)} · ${esc(b.group)}</small></div></div></td><td>${esc(b.genre)}</td><td>Proyek ${b.phase}</td><td><span class="pill ${full(b)?'olive':b.editorialStatus==='antri'?'stone':'sky'}">${esc(full(b)?'Terbit':statusName[b.editorialStatus]||b.editorialStatus)}</span></td><td><span class="pill ${b.rights==='cleared'?'olive':b.rights==='restricted'?'rose':'cream'}">${esc(rightsName[b.rights]||b.rights)}</span></td><td><button class="btn btn-soft btn-sm" data-action="edit-book" data-id="${esc(b.id)}">Edit ↗</button></td></tr>`).join('')}</tbody></table></div><div class="notice" style="margin-top:25px"><strong>Koreksi dan pembaruan</strong><p>Ringkasan tersedia dalam edisi baca. Perbarui teks, catatan edisi, atau tautan kitab asli jika menemukan kesalahan. Status audit sumber dan hak dicatat secara terpisah.</p></div></main></div>`}
function openSiteSettings(){
 const fields=[['countryLabel','Domisili umum (tanpa alamat pribadi)'],['motto','Kalimat pendek di footer'],['instagramUrl','URL Instagram Qira’ah'],['tiktokUrl','URL TikTok Qira’ah'],['threadsUrl','URL Threads Qira’ah'],['saweriaUrl','URL Saweria'],['lynkUrl','URL Lynk.id'],['linktreeUrl','URL Linktree'],['qrisImageUrl','URL atau path assets/ gambar QRIS'],['qrisMerchantName','Nama penerima pembayaran sebagaimana tercantum di QRIS'],['qrisPayUrl','URL pembayaran QRIS opsional'],['contactEmail','Email kontak publik (opsional)']];
 const html=`<div class="editor-modal" id="site-modal"><div class="editor-panel"><div class="editor-top"><div><div class="eyebrow">PENGATURAN SITUS · DEMO LOKAL</div><h2>Footer, donasi dan media sosial</h2></div><button class="btn-icon" data-action="close-site-settings" aria-label="Tutup">✕</button></div><p class="form-help">Isilah setelah tautan resmi tersedia. Tidak ada QR palsu atau nama akun yang diisi otomatis. Untuk produksi, ekspor JSON dan perbarui site_config.json sebelum build.</p><form id="site-settings-form"><div class="editor-form">${fields.map(([key,label])=>`<div class="field ${key==='motto'?'full':''}"><label for="site-${key}">${label}</label><input id="site-${key}" value="${esc(siteConfig[key]||'')}" type="${key.endsWith('Url')?'url':'text'}"></div>`).join('')}</div><div class="editor-actions"><button type="button" class="btn btn-ghost" data-action="close-site-settings">Batal</button><button type="button" class="btn btn-soft" data-action="export-site-settings">↓ Ekspor JSON</button><button type="submit" class="btn btn-primary">Simpan di browser</button></div></form><div class="notice"><strong>Catatan publikasi</strong><p>QRIS hanya ditampilkan bila URL gambar diisi. Pengaturan browser demo tidak mengubah website Vercel sampai file konfigurasi di-deploy ulang.</p></div></div></div>`;
 document.body.insertAdjacentHTML('beforeend',html);$('#site-countryLabel')?.focus();
}
function closeSiteSettings(){document.getElementById('site-modal')?.remove()}
function saveSiteSettings(){let draft={};for(const k of SITE_FIELDS){const value=v('site-'+k).trim();if(k.endsWith('Url')&&value&&!(k==='qrisImageUrl'?safeImageLink(value):validatedLink(value))){toast('URL harus diawali https:// untuk '+k);return}draft[k]=value}siteConfig={...siteConfig,...draft};writeJson(SITE_KEY,siteConfig);closeSiteSettings();render();toast('Pengaturan tersimpan di browser. Ekspor JSON untuk deploy.');}
function exportSiteSettings(){const blob=new Blob([JSON.stringify(siteConfig,null,2)],{type:'application/json'});const uri=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=uri;anchor.download='qiraah-site-config.json';anchor.click();setTimeout(()=>URL.revokeObjectURL(uri),2000);}
function selectOpts(options,current){return options.map(([k,label])=>`<option value="${esc(k)}" ${String(k)===String(current)?'selected':''}>${esc(label)}</option>`).join('')}
function editPanel(id){const b=id?getBook(id):null,mode=!!b;editingId=id||null;const draft=b||{id:'',titleAr:'',displayTitle:'',author:'',genre:'Adab & Tazkiyah',group:'Koleksi baru',phase:1,priority:4,rights:'audit',coverUrl:'',rightsEvidence:'',sourceUrl:'',pdfUrl:'',sourceStatus:'bibliografi',editorialStatus:'antri',sourceQc:'pending',contentQc:'pending',summaryCoverage:'unknown',coverRightsStatus:'pending',coverRightsEvidence:'',humanApproval:false,summaryMd:'',published:false,coverVariant:0,description:''};
const field=(name,label,type='text',full='')=>`<div class="field ${full}"><label for="edit-${name}">${label}</label>${type==='textarea'?`<textarea id="edit-${name}" ${name==='summaryMd'?'class="bigtext"':''}>${esc(draft[name]||'')}</textarea>`:`<input id="edit-${name}" type="${type}" value="${esc(draft[name]??'')}">`}</div>`;
const sel=(name,label,options)=>`<div class="field"><label for="edit-${name}">${label}</label><select id="edit-${name}">${selectOpts(options,draft[name])}</select></div>`;
const html=`<div class="editor-modal" id="editor-modal"><div class="editor-panel"><div class="editor-top"><div><div class="eyebrow">${mode?esc(b.id):'CATATAN BARU'}</div><h2>${mode?'Edit katalog kitab':'Tambah kitab'}</h2></div><button class="btn-icon" data-action="close-editor" aria-label="Tutup editor">✕</button></div><div class="cover-preview">${cover(draft)}<div><strong>${esc(draft.titleAr||'Judul Arab')}</strong><p>Gunakan sampul edisi PDF yang telah diverifikasi; tanpa sampul, kartu ditandai belum lengkap.</p></div></div><div class="divider"></div><form id="book-editor-form"><div class="editor-form">${field('titleAr','Judul Arab asli')}${field('displayTitle','Judul tampilan')}${field('author','Nama pengarang')}${field('group','Kelompok katalog')}${field('coverUrl','URL atau path gambar sampul (assets/...)','text','full')}${sel('coverRightsStatus','Izin penggunaan sampul',[['pending','Belum diperiksa'],['cleared','Boleh ditampilkan'],['restricted','Dibatasi / tidak boleh']])}${field('coverRightsEvidence','Bukti izin spesifik untuk gambar sampul','text','full')}${sel('genre','Fan / genre',genres.slice(1).map(g=>[g,g]))}${sel('phase','Tahap proyek',[['1','1 — Bacaan kontemporer'],['2','2 — Kajian mendalam']].map(x=>[x[0],x[1]]))}${sel('editorialStatus','Tahapan editorial',Object.entries(statusName))}${sel('rights','Status hak penggunaan',Object.entries(rightsName))}${field('rightsEvidence','URL / catatan bukti izin','text','full')}${field('sourceUrl','Halaman sumber resmi','url','full')}${field('pdfUrl','Tautan PDF sumber (jika terbukti tersedia)','url','full')}<div class="field full"><strong class="form-section-title">Tautan pembelian kitab · Shopee saja</strong><p class="form-help">Jika kosong, pembaca melihat hasil pencarian Shopee, bukan tautan produk atau penjual resmi. Platform tidak boleh diberi label resmi tanpa verifikasi.</p></div>${field('shopeeUrl','Shopee — URL produk langsung (opsional)','url')}${field('shopNotes','Catatan edisi, cetakan, atau pengiriman','textarea','full')}<div class="field full"><label class="check-row"><input type="checkbox" id="edit-storeVerified" ${draft.storeVerified?'checked':''}> Tautan penjual telah diperiksa oleh editor</label><small class="form-help">Centang hanya setelah editor membuka tautan, mencocokkan judul dan edisi, serta memeriksa identitas penjual.</small></div>${sel('sourceQc','Audit sumber',[['pending','Belum diperiksa'],['passed','Lulus'],['failed','Perlu perbaikan']])}${sel('contentQc','Audit isi',[['pending','Belum diperiksa'],['passed','Lulus'],['failed','Perlu perbaikan']])}${sel('summaryCoverage','Cakupan ringkasan',[['unknown','Belum ditentukan'],['partial','Sebagian / berseri'],['full','Lengkap sesuai naskah sumber']])}${field('description','Deskripsi editor','textarea','full')}${field('summaryMd','Naskah ringkasan Markdown — hanya dari sumber yang diaudit','textarea','full')}<div class="field full"><label style="display:flex;align-items:center;gap:10px"><input type="checkbox" id="edit-humanApproval" style="height:17px;width:17px;min-height:17px" ${draft.humanApproval?'checked':''}> Editor manusia sudah menyetujui naskah</label><small class="form-help">Centang hanya setelah editor benar-benar memeriksa naskah, sumber, kutipan, dan pengantar.</small></div></div><div class="editor-actions"><button type="button" class="btn btn-ghost" data-action="close-editor">Batal</button><button type="submit" class="btn btn-soft">Simpan draf</button><button type="button" class="btn btn-primary" data-action="publish-book">${draft.published?'Periksa ulang terbit':'Terbitkan setelah lolos gate'}</button></div></form><div class="notice amber"><strong>Mode lokal</strong><p>Data halaman admin bukan database server. Sebelum publikasi di internet, seluruh hak edit harus dibatasi di backend dan melewati review legal/editorial.</p></div></div></div>`;document.body.insertAdjacentHTML('beforeend',html);$('#edit-titleAr')?.focus();}
function closeEditor(){document.getElementById('editor-modal')?.remove();editingId=null}
function collectForm(){const names=['titleAr','displayTitle','author','group','coverUrl','coverRightsStatus','coverRightsEvidence','genre','phase','editorialStatus','rights','rightsEvidence','sourceUrl','pdfUrl','sourceQc','contentQc','summaryCoverage','description','summaryMd','shopeeUrl','shopNotes'];let out={};for(const key of names)out[key]=v('edit-'+key).trim();out.phase=Number(out.phase)||1;out.humanApproval=!!$('#edit-humanApproval')?.checked;out.storeVerified=!!$('#edit-storeVerified')?.checked;if(out.rights!=='cleared'||out.sourceQc!=='passed'||out.contentQc!=='passed'||!out.humanApproval)out.published=false;return out}
function gateErrors(b){let errs=[];if(b.rights!=='cleared')errs.push('status hak belum cleared');if(!['full','partial'].includes(b.summaryCoverage))errs.push('cakupan ringkasan belum diisi');if(!String(b.rightsEvidence||'').trim())errs.push('bukti izin belum dicatat');if(!String(b.sourceUrl||'').trim())errs.push('URL sumber belum ada');if(b.sourceQc!=='passed')errs.push('audit sumber belum lulus');if(b.contentQc!=='passed')errs.push('audit isi belum lulus');if(!b.humanApproval)errs.push('persetujuan manusia belum diberikan');if(String(b.summaryMd||'').trim().length<300)errs.push('ringkasan Markdown belum cukup lengkap');return errs}
function saveFromForm(publish=false){let out=collectForm();if(out.shopeeUrl&&!shopLink(out.shopeeUrl)){toast('URL pembelian harus dari domain Shopee (https://shopee.co.id/).');return}if(!out.titleAr||!out.author){toast('Judul Arab dan pengarang wajib diisi.');return}const old=editingId?getBook(editingId):null;const payload={...(old||{}),...out};if(!old){payload.id='KR-'+String(1+Math.max(0,...books.map(b=>Number((b.id||'').split('-').at(-1))||0))).padStart(3,'0');payload.priority=5;payload.coverVariant=books.length%palettes.length;payload.updatedAt=new Date().toISOString().slice(0,10);payload.preview=[];payload.sourceStatus='bibliografi';payload.published=false;}else payload.updatedAt=new Date().toISOString().slice(0,10);
if(publish){const errors=gateErrors(payload);if(errors.length){toast('Belum layak terbit: '+errors.join('; '));return}payload.published=true;payload.editorialStatus='terbit';}
else if(payload.published&&String(payload.summaryMd||'').trim().length<300){payload.published=false;if(payload.editorialStatus==='terbit')payload.editorialStatus='review';toast('Ringkasan ditarik karena naskah kosong.')}if(old)books=books.map(b=>b.id===old.id?payload:b);else books.push(payload);saveCatalog();closeEditor();render();toast(publish?'Lulus gate editorial lokal. Ekspor JSON lalu lakukan build dengan kontrol izin.':'Catatan kitab tersimpan di browser ini.');}
function authDialog(){const configured=AUTH?.enabled;const p=user?`<p>Akun terhubung: <strong>${esc(user.email||user.displayName||'Google')}</strong>.</p><p>Bookmarked dan progres tersinkron ke Firestore bila konfigurasi benar dan koneksi aktif.</p>`:configured?'<p>Masuk untuk menyimpan bookmark dan progres pada akunmu. Membaca tetap bisa dilakukan tanpa login.</p>':'<p>Fitur Google login belum diaktifkan pada prototipe. Tambahkan kredensial Firebase milik proyek dan domain yang diizinkan melalui <code>firebase-config.js</code> lalu pasang aturan Firestore sebelum peluncuran.</p>';
$('body').insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="auth-dialog"><div class="modal-box"><div class="eyebrow">AKUN QIRAAH</div><h2>${user?'Akun pembaca':'Masuk dengan Google'}</h2>${p}<div class="modal-footer"><button class="btn btn-ghost" data-action="dismiss-dialog">Tutup</button>${user?'<button class="btn btn-primary" data-action="sign-out">Keluar</button>':configured?'<button class="btn btn-primary" data-action="do-sign-in">Lanjutkan dengan Google</button>':''}</div></div></div>`)}
function exportCatalog(){const blob=new Blob([JSON.stringify(books,null,2)],{type:'application/json'}),a=document.createElement('a');const objectURL=URL.createObjectURL(blob);a.href=objectURL;a.download='qiraah-katalog-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(objectURL),3000);toast('Katalog diekspor sebagai JSON.');}
function importCatalog(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const incoming=JSON.parse(reader.result);if(!Array.isArray(incoming)||!incoming.length||!incoming.every(b=>typeof b.id==='string'&&typeof b.titleAr==='string'&&typeof b.author==='string'))throw new Error('Struktur daftar kitab tidak valid');if(incoming.length>5000)throw new Error('Terlalu banyak entri');books=incoming.map(normalize).map(b=>({...b,published:!!b.published&&String(b.summaryMd||'').trim().length>=300}));saveCatalog();render();toast(`${books.length} entri berhasil dimuat dari JSON.`)}catch(e){toast('Impor gagal: '+e.message)}};reader.readAsText(file)}
function routeInfo(){
 const useHash=location.protocol==='file:' || location.hash.startsWith('#/');
 const pathName=location.pathname.replace(/\/index\.html$/,'');
 const bp=String(window.QIRAAH_BASE_PATH||'');
 const raw=useHash?decodeURIComponent((location.hash||'#/').slice(1)):decodeURIComponent(bp&&(pathName===bp||pathName.startsWith(bp+'/'))?pathName.slice(bp.length)||'/':pathName);
 let [route,query]=raw.split('?');
 if(!useHash)query=location.search.slice(1);
 const path=route.split('/').filter(Boolean);
 if(!path.length)return {type:'home'};
 if(path[0]==='jelajahi')return {type:'catalog',query:query||''};
 if(path[0]==='baca'||path[0]==='kitab')return {type:'reader',id:path[1]||'',resume:new URLSearchParams(query||'').has('lanjut')};
 if(path[0]==='rak')return {type:'shelf'};
 if(path[0]==='ringkasan')return {type:'summaries'};
 if(path[0]==='review'&&REVIEW_MODE)return {type:'review'};
 if(path[0]==='kamus')return {type:'dictionary'};
 if(path[0]==='admin'||path[0]==='admin.html')return window.QIRAAH_PUBLIC_MODE?{type:'admin-closed'}:{type:'admin'};
 if(path[0]==='tentang')return {type:'about'};
 return {type:'404'};
}
function render(){
 const r=routeInfo();
 if(r.type!=='reader'&&qAudioActive)qAudioStop();
 if(r.type==='reader'){const token=location.pathname+location.search+location.hash;if(trackedReaderHref!==token){trackedReaderHref=token;openBook(r.id);}}else trackedReaderHref='';
 if(r.type==='catalog'){
   const token=location.hash.startsWith('#/')?location.hash:location.pathname+location.search;
   if(lastCatalogRouteToken!==token){
     const params=new URLSearchParams(r.query||'');
     genreFilter=params.get('fan')||'Semua';
     authorFilter=params.get('muallif')||'Semua';
     lastCatalogRouteToken=token;
   }
 }else lastCatalogRouteToken=null;
 const app=$('#app');if(!app)return;
 const html=r.type==='home'?home():r.type==='catalog'?catalog():r.type==='summaries'?summariesPage():r.type==='reader'?reader(r.id):r.type==='shelf'?shelf():r.type==='review'?reviewPage():r.type==='dictionary'?dictionary():r.type==='admin'?admin():r.type==='admin-closed'?publicAdminClosed():r.type==='about'?about():notfound();
 app.innerHTML=prettyRoutes(html);applyReaderPrefs();
 if(r.type==='reader'&&r.resume)requestAnimationFrame(()=>requestAnimationFrame(()=>resumeReading(r.id)));
 document.title=`${({home:'Beranda',catalog:'Katalog Kitab',summaries:QIRAAH_BOUTHI_FOCUS?'Katalog Kitab':'Sudah Diringkas',reader:getBook(r.id)?.titleAr||'Baca',shelf:'Rak Saya',review:'Ruang Review',dictionary:'Kamus & Kutipan',admin:'Dashboard Admin',about:'Tentang'}[r.type]||'Qira’ah')} · Qira’ah`;
 if(r.type==='catalog'){const u=new URLSearchParams(r.query||'');const who=u.get('muallif'),fan=u.get('fan');const topic=who==='Al-Buthi'?'Karya Syekh al-Buthi':who==='Al-Adni'?'Karya Habib Abu Bakar al-Adni':fan?('Kitab '+fan):'';if(topic){document.title=topic+' · Katalog Qira’ah';const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Jelajahi '+topic+' yang sumber Markdown-nya ada dalam koleksi Qira’ah.');}}
}

function updateCatalogLocation(){
 const params=new URLSearchParams();
 if(genreFilter!=='Semua')params.set('fan',genreFilter);
 if(authorFilter!=='Semua')params.set('muallif',authorFilter);
 const q=params.toString(),hash=location.hash.startsWith('#/')||location.protocol==='file:';
 const target=hash?'#/jelajahi'+(q?'?'+q:''):(String(window.QIRAAH_BASE_PATH||'')+'/jelajahi/'+(q?'?'+q:''));
 history.replaceState(null,'',target);
 lastCatalogRouteToken=null;
}
function filterRefresh(){const inp=$('#catalog-search');const oldCursor=inp?.selectionStart;render();const newer=$('#catalog-search');if(newer&&oldCursor!==null){newer.focus();newer.setSelectionRange(oldCursor,oldCursor)}}
function handleClick(e){const node=e.target.closest('[data-action]');if(!node)return;let act=node.dataset.action,id=node.dataset.id;
if(act==='bookmark')toggleBookmark(id);
else if(act==='genre'){genreFilter=node.dataset.genre;updateCatalogLocation();render()}
else if(act==='reset-filter'){genreFilter='Semua';authorFilter='Semua';progressFilter='Semua';searchTerm='';updateCatalogLocation();render()}
else if(act==='clear-history'){profile.lastOpened={};saveProfile();render();toast('Riwayat pembukaan kitab dihapus dari perangkat ini.')}
else if(act==='remove-history'){delete profile.lastOpened[id];saveProfile();render();toast('Kitab dihapus dari riwayat.')}
else if(act==='progress-filter'){progressFilter=node.dataset.filter||'Semua';render()}
else if(['read-smaller','read-larger','read-theme'].includes(act))changeReaderPrefs(act)
else if(act==='audio-toggle')qAudioToggle()
else if(act==='edit-book')editPanel(id);
else if(act==='add-book')editPanel(null);
 else if(act==='site-settings')openSiteSettings();
 else if(act==='close-site-settings')closeSiteSettings();
 else if(act==='export-site-settings')exportSiteSettings();
else if(act==='close-editor')closeEditor();
else if(act==='publish-book')saveFromForm(true);
else if(act==='preview-done'){profile.previewDone[id]=true;saveProfile();toast('Cuplikan editorial dicatat sebagai dibaca, bukan ringkasan selesai.');render()}
else if(act==='complete'){if(!full(getBook(id))){toast('Belum ada naskah terbit untuk diselesaikan.');return}profile.completed[id]=!profile.completed[id];profile.progress[id]=profile.completed[id]?100:99;saveProfile();render();toast(profile.completed[id]?'Ringkasan selesai dicatat.':'Tanda selesai dibatalkan.');}
else if(act==='sign-in'||act==='user-menu')authDialog();
else if(act==='dismiss-dialog')$('#auth-dialog')?.remove();
else if(act==='do-sign-in')AUTH.signIn().then(()=>{$('#auth-dialog')?.remove();toast('Berhasil masuk dengan Google')}).catch(e=>toast(e?.message||'Gagal masuk Google'));
else if(act==='sign-out')AUTH.signOut().then(()=>{$('#auth-dialog')?.remove();toast('Kamu telah keluar dari akun.')}).catch(e=>toast('Gagal keluar: '+e.message));
else if(act==='export-catalog')exportCatalog();}
document.addEventListener('click',e=>{
 const a=e.target.closest('a[data-route]');
 if(!a||e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||a.target||location.protocol==='file:')return;
 e.preventDefault();const go=()=>{qAudioStop();suppressScrollUntil=Date.now()+550;history.pushState(null,'',a.href);closeEditor();const r=routeInfo();if(r.type==='reader')openBook(r.id);render();window.scrollTo({top:0,behavior:'instant'});};
 if(a.hasAttribute('data-animate-book')&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){a.classList.add('book-opening');setTimeout(go,190)}else go();
});
document.addEventListener('click',e=>{
 if(location.protocol!=='file:')return;
 const a=e.target.closest('a[data-animate-book]');
 if(!a||e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 e.preventDefault();a.classList.add('book-opening');setTimeout(()=>location.hash=a.getAttribute('href'),190);
});
document.addEventListener('click',handleClick);
document.addEventListener('input',e=>{if(e.target.id==='catalog-search'){searchTerm=e.target.value;filterRefresh()}else if(e.target.id==='admin-search'){adminTerm=e.target.value;const p=e.target.selectionStart;render();const x=$('#admin-search');if(x){x.focus();x.setSelectionRange(p,p)}}});
document.addEventListener('change',e=>{if(e.target.id==='author-group-filter'){authorFilter=e.target.value;updateCatalogLocation();render()}else if(e.target.id==='sort-books'){sortBy=e.target.value;render()}else if(e.target.id==='admin-stage'){adminStage=e.target.value;render()}else if(e.target.id==='import-json'){importCatalog(e.target.files?.[0])}});
document.addEventListener('submit',e=>{if(e.target.id==='book-editor-form'){e.preventDefault();saveFromForm(false)}else if(e.target.id==='site-settings-form'){e.preventDefault();saveSiteSettings()}else if(e.target.id==='dictionary-form'){
 e.preventDefault();const word=v('dictionary-word').trim();if(!word)return;
 window.open('https://www.almaany.com/id/dict/ar-id/'+encodeURIComponent(word)+'/','_blank','noopener,noreferrer');
 }});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#auth-dialog')?.remove();closeEditor();closeSiteSettings()}});
function resumeReading(id){
 const b=getBook(id);if(!canRead(b))return;
 const pane=$('.reader-copy');if(!pane)return;
 const offset=progressFor(b)/100*Math.max(pane.offsetHeight,1);
 window.scrollTo({top:Math.max(0,window.scrollY+pane.getBoundingClientRect().top+offset-window.innerHeight*.45),behavior:'instant'});
}
function onScroll(){
 if(Date.now()<suppressScrollUntil)return;
 const r=routeInfo();if(r.type!=='reader')return;
 const links=[...document.querySelectorAll('.toc a[href^="#"]')];let selected=null;
 for(const a of links){const sec=document.getElementById(a.getAttribute('href').slice(1));if(sec&&sec.getBoundingClientRect().top<200)selected=a;}
 if(!selected&&links.length)selected=links[0];
 if(selected)for(const a of links)a.classList.toggle('active',a===selected);
 const b=getBook(r.id);if(!canRead(b))return;
 const pane=$('.reader-copy');if(!pane)return;
 const rect=pane.getBoundingClientRect(),height=Math.max(1,pane.offsetHeight);
 const done=percent((window.innerHeight*.52-rect.top)/height*100);
 const stored=progressFor(b);
 const current=done>=98?100:Math.max(stored,Math.round(done));
 $('#progress-bar')?.style.setProperty('width',current+'%');
 const p=$('#progress-percentage');if(p)p.textContent=current+'%';
 $('.reading-progress')?.setAttribute('aria-valuenow',String(current));
 if(current>stored){
   if(full(b))profile.progress[r.id]=current;else profile.previewProgress[r.id]=current;
   clearTimeout(scrollTimer);scrollTimer=setTimeout(saveProfile,650);
 }
 if(done>=98&&!doneFor(b)&&!profile.seriesDone?.[r.id]){
  if(full(b))profile.completed[r.id]=true;
  else if(staged(b)&&draftFor(b.id)?.coverage==='full')profile.previewDone[r.id]=true;
  else if(staged(b))profile.seriesDone[r.id]=true;
  const label=$('#reading-finish-notice');
  if(label)label.textContent=full(b)||draftFor(b.id)?.coverage==='full'?'✓ Kamu sudah menuntaskan bacaan ini.':'✓ Kamu sudah mencapai akhir seri ini.';
  saveProfile();
 }
}
window.addEventListener('scroll',onScroll,{passive:true});
window.addEventListener('hashchange',()=>{
 if(location.protocol!=='file:'&&!location.hash.startsWith('#/'))return;
 suppressScrollUntil=Date.now()+550;closeEditor();window.scrollTo(0,0);const r=routeInfo();if(r.type==='reader')openBook(r.id);render();
});
window.addEventListener('popstate',()=>{suppressScrollUntil=Date.now()+550;closeEditor();window.scrollTo(0,0);render()});
AUTH.init((u,remote)=>{user=u;profileKey=PROFILE_PREFIX+(u?'google.'+u.uid:'guest');const local=loadJson(profileKey,loadJson('riwaq.v02.profile.'+(u?'google.'+u.uid:'guest'),profileDefault()));if(u){profile={...profileDefault(),...local,bookmarks:[...new Set([...(remote?.bookmarks||[]),...(local.bookmarks||[])])],progress:{...(remote?.progress||{}),...(local.progress||{})},previewProgress:{...(remote?.previewProgress||{}),...(local.previewProgress||{})},previewDone:{...(remote?.previewDone||{}),...(local.previewDone||{})},seriesDone:{...(remote?.seriesDone||{}),...(local.seriesDone||{})},completed:{...(remote?.completed||{}),...(local.completed||{})},lastOpened:local.lastOpened||{}};saveProfile()}else profile={...profileDefault(),...local};render()});
render();
})();
