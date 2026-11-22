'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process'),assert=require('node:assert/strict');
const load=p=>fs.readFileSync(path.join(process.cwd(),p),'utf8');
function parse(src){const context={window:{}};vm.runInNewContext(src,context,{timeout:3000});return JSON.parse(JSON.stringify(context.window.QIRAAH_SEED))}
const current=parse(load('assets/books.js'));
const baseline=parse(cp.execFileSync('git',['show','origin/main:assets/books.js'],{encoding:'utf8',maxBuffer:24*1024*1024}));
assert.equal(current.length,baseline.length+5,'Preserve old catalog and add five distinct books');
assert.equal(new Set(current.map(b=>b.id)).size,current.length,'No duplicate IDs');
const byId=new Map(current.map(b=>[b.id,b]));
const baseById=new Map(baseline.map(b=>[b.id,b]));
const approved=new Set(['AD-040','AD-041','AD-062']);
for(const b of baseline){const now=byId.get(b.id);assert(now,'Missing original catalog ID '+b.id);
 if(!approved.has(b.id))assert.equal(now.summaryMd,b.summaryMd,'Unapproved summary overwritten '+b.id);
 assert.equal(now.group,b.group,'Original author group modified '+b.id);
 if(!approved.has(b.id))assert.equal(now.coverUrl,b.coverUrl,'Existing cover changed unexpectedly '+b.id);
}
const add=['AD-060','AD-061','AD-062','AD-063','AB-038'];
for(const id of add)assert(byId.has(id),'Missing intake catalog ID '+id);
assert.equal(byId.get('AB-038').titleAr,'إشكالية تجديد أصول الفقه','Correct original title');
const expectedCover={'AD-040':'assets/covers/AD-040-user.webp','AD-041':'assets/covers/AD-041.webp','AD-062':'assets/covers/AD-062-user.webp'};
for(const id of approved){
 const book=byId.get(id);
 assert.equal(book.coverUrl,expectedCover[id],'Missing approved cover '+id);
 assert(book.ownerFinal&&book.humanApproval,'Missing owner editorial approval '+id);
 assert.equal(book.summaryCoverage,'partial','Tematic summaries must not claim entire book '+id);
 assert(book.published,'Approved public reading edition not marked published '+id);
 const n=book.summaryMd.split(/\s+/).filter(Boolean).length;
 assert(n>=1750&&n<2600,'Actual approved edition is not 10-15 minutes '+id+' words='+n);
 for(const needle of ['## Peta sumber privat','SOURCE_LOCK:','CURRENT_PHASE:','PUBLICATION=HOLD']){
  assert(!book.summaryMd.includes(needle),'Private editor/source note leaked for '+id+': '+needle);
 }
 assert.equal(book.rights,'audit','Never infer third-party rights clearance from editorial ACC '+id);
 const file=path.join(process.cwd(),book.coverUrl);
 assert(fs.existsSync(file),'Cover asset missing '+file);
 const bytes=fs.readFileSync(file);
 assert(bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP','Invalid webp '+file);
 assert(bytes.length>1200,'Empty cover '+file);
 const html=load('kitab/'+id+'/index.html');
 assert(html.includes('../../'+book.coverUrl),'Static direct-route cover missing '+id);
 assert(html.includes('#/baca/'+id),'Read link missing '+id);
 assert(!html.includes('Ringkasan 10–15 menit belum siap diterbitkan'),'Outdated fallback status '+id);
}
for(const id of ['AD-039','AD-042','AD-060','AD-061','AD-063']){
 assert(byId.has(id),'Missing pending title '+id);
 assert(byId.get(id).summaryMd.split(/\s+/).length<400,'Unexpected false full summary '+id);
}
assert.equal(byId.get('AB-001').summaryMd,baseById.get('AB-001').summaryMd,'Existing Adab al-Hiwar summary changed');
assert.equal(byId.get('AB-001').coverUrl,baseById.get('AB-001').coverUrl,'Adab al-Hiwar cover changed');
const app=load('assets/app.js');
assert(app.includes('const QIRAAH_BOUTHI_FOCUS=false;'),'Both author groups must show');
assert(app.includes("const QIRAAH_10PDF_PENDING=new Set(['AD-039','AD-042','AD-060','AD-061','AD-063']);"),'Ready titles are still blocked');
for(const id of add)assert(fs.existsSync(path.join('kitab',id,'index.html')),'Missing new page '+id);
const diff=cp.execFileSync('git',['diff','--name-only','origin/main...HEAD'],{encoding:'utf8'});
assert(!diff.split(String.fromCharCode(10)).some(s=>['.pdf','.zip','.env'].some(ext=>s.toLowerCase().endsWith(ext))),'Raw source or secret file uploaded');
console.log('PASS Qiraah: 90 unique books, five catalog additions, three approved 10-15m summaries and covers, intact legacy catalog, PDF originals not published.');
