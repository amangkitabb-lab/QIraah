// QA for the reversible al-Buthi cover-catalog branch. No dependencies.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const read = p=>fs.readFileSync(path.join(process.cwd(),p),'utf8');
function booksFrom(src) {
 const ctx={window:{}};
 vm.runInNewContext(src,ctx,{timeout:3000});
 return JSON.parse(JSON.stringify(ctx.window.QIRAAH_SEED));
}
const actual=booksFrom(read('assets/books.js'));
const base=booksFrom(cp.execFileSync('git',['show','origin/main:assets/books.js'],{encoding:'utf8',maxBuffer:8*1024*1024}));
const mapping=JSON.parse(read('QIRAAH_COVER_IMPORT_BOUTHI.json'));
assert.equal(actual.length,85,'All original catalog records must remain');
assert.equal(actual.filter(b=>b.group==='Al-Buthi').length,26);
assert.equal(actual.filter(b=>b.group==='Al-Adni').length,59);
assert.equal(new Set(actual.map(b=>b.id)).size,85,'No duplicate book ID');
assert.equal(mapping.rows.length,26,'26 al-Buthi mappings');
const byId=new Map(actual.map(b=>[b.id,b]));
const baseById=new Map(base.map(b=>[b.id,b]));
let newCovers=0;
for (const row of mapping.rows) {
 const b=byId.get(row.book_id);
 assert(b&&b.group==='Al-Buthi','Wrong book in mapping: '+row.book_id);
 assert.equal(row.title_ar,b.titleAr,'Cover title differs from book catalog: '+row.book_id);
 if(row.action==='keep_existing_cover'){
   assert.equal(b.coverUrl,baseById.get(b.id).coverUrl,'Existing cover changed');
 } else {
   newCovers++;
   const expected='assets/covers/'+b.id+'-qiraah.png';
   assert.equal(b.coverUrl,expected,'Cover URL mismatch: '+b.id);
   assert(row.uploaded_file.startsWith('Screenshot 2026-11-17 '),'Unexpected uploaded filename');
   const file=path.resolve(expected);
   assert(file.startsWith(path.resolve('assets/covers/inbox')+path.sep),'Out-of-directory path');
   assert(fs.existsSync(file),'Cover not uploaded: '+expected);
   const bytes=fs.readFileSync(file);
   assert(bytes.length>10000,'Image is too small or empty');
   assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a','Not a PNG: '+expected);
   const original=fs.readFileSync(path.join('assets/covers/inbox',row.uploaded_file));
   assert(bytes.equals(original),'Selected cover differs from uploaded PNG: '+expected);
   assert(bytes.readUInt32BE(16)>=100&&bytes.readUInt32BE(20)>=100,'Invalid dimensions: '+expected);
   assert.equal(b.coverRightsStatus,'pending','Do not falsely mark cover rights verified');
 }
}
assert.equal(newCovers,25,'Expected 25 newly mapped covers');
const covers=fs.readdirSync('assets/covers/inbox').filter(x=>x.endsWith('.png'));
assert.equal(covers.length,45,'All 45 supplied images must be preserved');
const coverFields=['coverUrl','coverKind','coverRightsStatus','coverRightsEvidence'];
for(const b of actual){
 const old=baseById.get(b.id);
 assert(old,'Unexpected added book '+b.id);
 const normalized={...b};
 for(const k of coverFields){if(Object.hasOwn(old,k))normalized[k]=old[k];else delete normalized[k];}
 assert.deepEqual(normalized,old,'Non-cover data changed in '+b.id);
}
const app=read('assets/app.js');
assert(app.includes('const QIRAAH_BOUTHI_FOCUS=true'),'Al-Buthi focus not enabled');
assert(app.includes('function bouthiHome()')&&app.includes('function bouthiCatalog()'),'Missing gallery views');
assert(app.includes("function summariesPage(){if(QIRAAH_BOUTHI_FOCUS)return bouthiCatalog();"),'Summary route must be hidden without deletion');
assert(app.includes('safeImageLink(raw)'),'Image safety handler missing');
assert(!app.includes('navLink(\'#/ringkasan\',REVIEW_MODE?'),'Summary navigation still shown');
console.log('PASS: 45/45 PNGs, 26 al-Buthi titles, 25 newly linked covers, 85 records and all summaries preserved.');
