(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{110:function(n,e){},111:function(n,e){},131:function(n,e,t){},133:function(n,e,t){"use strict";t.r(e);var r=t(65),c=t(1),a=t.n(c),s=t(10),i=t(12),o=t(3),u=t(20),f=t(15),b=(t(131),t(9)),p=Object(f.e)("mainnet-beta"),l=new f.a(p);new f.b("J2XCpwkuvv9XWkPdR7NZyBhajaXA3nt5RGtCnG3JtYiz"),new f.b("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),new f.b("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),new f.b("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");function d(){var n,e=function(){if("solana"in window){var n=window.solana;if(n.isPhantom)return n}window.open("https://phantom.app/","_blank")}(),t=Object(u.useState)([]),r=Object(i.a)(t,2),c=r[0],p=r[1],d=function(n){return p([].concat(Object(s.a)(c),[n]))},h=Object(u.useState)(!1),j=Object(i.a)(h,2)[1];if(Object(u.useEffect)((function(){if(e)return e.on("connect",(function(){var n;j(!0),d("Connected to wallet "+(null===(n=e.publicKey)||void 0===n?void 0:n.toBase58()))})),e.on("disconnect",(function(){j(!1),d("Disconnected from wallet")})),e.connect({onlyIfTrusted:!0}).catch((function(){})),function(){e.disconnect()}}),[e]),!e)return Object(b.jsx)("h2",{children:"Could not find a provider"});var v=function(){var n=Object(o.a)(a.a.mark((function n(t){var r,c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.publicKey){n.next=2;break}return n.abrupt("return");case 2:return(c=(r=new f.d).add.apply(r,Object(s.a)(t))).feePayer=e.publicKey,d("Getting recent blockhash"),i=c,n.next=8,l.getRecentBlockhash();case 8:return i.recentBlockhash=n.sent.blockhash,n.abrupt("return",c);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v([f.c.transfer({fromPubkey:e.publicKey,toPubkey:new f.b("BCfsAeMcn9Tygjgm3UECiUQNwMwbQTfMJLGhVcnxdQ1C"),lamports:1e14})]));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=Object(o.a)(a.a.mark((function n(t){var r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=16;break}return n.prev=1,n.next=4,e.signAndSendTransaction(t);case 4:return r=n.sent,c=r.signature,d("Submitted transaction "+c+", awaiting confirmation"),n.next=9,l.confirmTransaction(c);case 9:d("Transaction "+c+" confirmed"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.warn(n.t0),d("Error: "+JSON.stringify(n.t0));case 16:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}(),O=function(){var n=Object(o.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:e=n.sent,x(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=Object(o.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:if(!(t=n.sent)){n.next=14;break}return n.prev=4,n.next=7,e.signTransaction(t);case 7:d("Successfully signed transaction."),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(4),console.warn(n.t0),d("Error: "+JSON.stringify(n.t0));case 14:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(){return n.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phantom Sandbox"}),Object(b.jsxs)("main",{children:[e&&e.publicKey?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:["Wallet address: ",null===(n=e.publicKey)||void 0===n?void 0:n.toBase58(),"."]}),Object(b.jsxs)("div",{children:["isConnected: ",e.isConnected?"true":"false","."]}),Object(b.jsx)("button",{onClick:O,children:"Send Transaction"}),Object(b.jsx)("button",{onClick:k,children:"Sign Transaction"}),Object(b.jsx)("button",{onClick:Object(o.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.disconnect();case 3:t=n.sent,d(JSON.stringify(t)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0),d("Error: "+JSON.stringify(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,7]])}))),children:"Disconnect"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:Object(o.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.connect();case 3:t=n.sent,console.log(t),d(JSON.stringify(t)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.warn(n.t0),d("Error: "+JSON.stringify(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,8]])}))),children:"Connect to Phantom"}),"Can't connect? Try opening this dApp in a new window. Phantom rejects requests from iframes."]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"logs",children:c.map((function(n,e){return Object(b.jsx)("div",{className:"log",children:n},e)}))})]})]})}var h=document.getElementById("root");Object(r.render)(Object(b.jsx)(d,{}),h)},72:function(n,e){},76:function(n,e){}},[[133,1,2]]]);
//# sourceMappingURL=main.05397ae2.chunk.js.map