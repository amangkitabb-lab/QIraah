(function(){
  'use strict';
  let app=null,auth=null,db=null,listener=null,authUser=null,ready=false;
  const cfg=window.QIRAAH_FIREBASE_CONFIG;
  const enabled=!!(cfg && cfg.apiKey && cfg.authDomain && cfg.projectId);
  function addScript(src){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.onload=resolve;script.onerror=reject;document.head.appendChild(script);});}
  async function init(cb){
    listener=cb;
    if(!enabled){ready=true;listener?.(null,null);return false;}
    try{
      await addScript('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
      await addScript('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js');
      await addScript('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js');
      app=firebase.initializeApp(cfg);auth=firebase.auth();db=firebase.firestore();
      auth.onAuthStateChanged(async u=>{authUser=u;if(!u){listener?.(null,null);return;}
        let remote=null;try{const snap=await db.collection('readers').doc(u.uid).get();if(snap.exists)remote=snap.data();}catch(e){console.warn('Gagal membaca bookmark remote',e);}
        listener?.(u,remote);
      });
      ready=true;return true;
    }catch(e){ready=true;console.warn(e);listener?.(null,null);return false;}
  }
  async function signIn(){if(!enabled)throw new Error('Login Google belum diaktifkan. Tambahkan konfigurasi Firebase lebih dahulu.');if(!auth)throw new Error('Layanan login belum siap. Muat ulang halaman atau periksa koneksi internet.');const provider=new firebase.auth.GoogleAuthProvider();await auth.signInWithPopup(provider);}
  async function signOut(){if(auth)await auth.signOut();}
  async function sync(profile){if(!db||!authUser)return;const data={bookmarks:profile.bookmarks||[],progress:profile.progress||{},previewDone:profile.previewDone||{},completed:profile.completed||{},lastOpened:profile.lastOpened||{},lastSynced:firebase.firestore.FieldValue.serverTimestamp()};try{await db.collection('readers').doc(authUser.uid).set(data,{merge:true});}catch(e){console.warn('Sinkronisasi belum berhasil',e);}}
  window.QIRAAH_AUTH={enabled,init,signIn,signOut,sync,currentUser:()=>authUser,isAdmin:()=>!!authUser&&((window.QIRAAH_ADMIN_EMAILS||[]).map(x=>x.toLowerCase()).includes((authUser.email||'').toLowerCase()))};
})();
