(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.4.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const wt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const l=(a,d)=>{const y=c,w=a,h=d||(o?!o(y,w):y!==w);return(h||s)&&(c=w,r=y),[c,h,r]};return[e?a=>l(e(c,r),a):l,a=>[c,!!a,r]]},$n=typeof window<"u",io=$n&&Node.ELEMENT_NODE,{toString:Wo,hasOwnProperty:nn}=Object.prototype,Yo=/^\[object (.+)\]$/,qt=t=>t===void 0,ke=t=>t===null,Go=t=>qt(t)||ke(t)?`${t}`:Wo.call(t).replace(Yo,"$1").toLowerCase(),Ht=t=>typeof t=="number",Se=t=>typeof t=="string",ao=t=>typeof t=="boolean",At=t=>typeof t=="function",mt=t=>Array.isArray(t),ve=t=>typeof t=="object"&&!mt(t)&&!ke(t),Fe=t=>{const e=!!t&&t.length,n=Ht(e)&&e>-1&&e%1==0;return mt(t)||!At(t)&&n?e>0&&ve(t)?e-1 in t:!0:!1},un=t=>{if(!t||!ve(t)||Go(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=nn.call(t,n),r=s&&nn.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return qt(e)||nn.call(t,e)},ae=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===io:!1},Ne=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===io:!1};function Q(t,e){if(Fe(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&Q(Object.keys(t),n=>e(t[n],n,t));return t}const qe=(t,e)=>t.indexOf(e)>=0,Z=(t,e,n)=>(!n&&!Se(e)&&Fe(e)?Array.prototype.push.apply(t,e):t.push(e),t),ce=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Z(n,o)}):Q(t,o=>{Z(n,o)}),n)},ze=t=>!!t&&!t.length,kn=t=>ce(new Set(t)),bt=(t,e,n)=>{Q(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Ve=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Bt=t=>t?Object.keys(t):[],K=(t,e,n,o,s,c,r)=>{const l=[e,n,o,s,c,r];return(typeof t!="object"||ke(t))&&!At(t)&&(t={}),Q(l,i=>{Q(i,(u,a)=>{const d=i[a];if(t===d)return!0;const y=mt(d);if(d&&un(d)){const w=t[a];let h=w;y&&!mt(w)?h=[]:!y&&!un(w)&&(h={}),t[a]=K(h,d)}else t[a]=y?d.slice():d})}),t},Cn=t=>{for(const e in t)return!1;return!0},at=(t,e,n)=>{if(qt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},uo=(t,e)=>new Set((at(t,e)||"").split(" ")),ft=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=uo(t,e);s[o?"add":"delete"](n);const c=ce(s).join(" ").trim();at(t,e,c)}},Ko=(t,e,n)=>uo(t,e).has(n),dn=$n&&Element.prototype,fo=(t,e)=>{const n=[],o=e?Ne(e)&&e:document;return o?Z(n,o.querySelectorAll(t)):n},Zo=(t,e)=>{const n=e?Ne(e)&&e:document;return n?n.querySelector(t):null},Le=(t,e)=>Ne(t)?(dn.matches||dn.msMatchesSelector).call(t,e):!1,fn=t=>t?ce(t.childNodes):[],Pt=t=>t&&t.parentElement,Qt=(t,e)=>{if(Ne(t)){const n=dn.closest;if(n)return n.call(t,e);do{if(Le(t,e))return t;t=Pt(t)}while(t)}},Jo=(t,e,n)=>{const o=Qt(t,e),s=t&&Zo(n,o),c=Qt(s,e)===o;return o&&s?o===t||s===t||c&&Qt(Qt(t,n),e)!==o:!1},gt=()=>{},It=t=>{if(Fe(t))Q(ce(t),e=>It(e));else if(t){const e=Pt(t);e&&e.removeChild(t)}},Hn=(t,e,n)=>{if(n&&t){let o=e,s;return Fe(n)?(s=document.createDocumentFragment(),Q(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null),()=>It(n)}return gt},vt=(t,e)=>Hn(t,null,e),Qo=(t,e)=>Hn(Pt(t),t,e),Fn=(t,e)=>Hn(Pt(t),t&&t.nextSibling,e),Wt=t=>{const e=document.createElement("div");return at(e,"class",t),e},po=t=>{const e=Wt();return e.innerHTML=t.trim(),Q(fn(e),n=>It(n))},ut=$n?window:{},ue=Math.max,ts=Math.min,ge=Math.round,yo=ut.cancelAnimationFrame,vo=ut.requestAnimationFrame,Pe=ut.setTimeout,pn=ut.clearTimeout,yn=t=>t.charAt(0).toUpperCase()+t.slice(1),es=()=>Wt().style,ns=["-webkit-","-moz-","-o-","-ms-"],os=["WebKit","Moz","O","MS","webkit","moz","o","ms"],on={},sn={},ss=t=>{let e=sn[t];if(Ve(sn,t))return e;const n=yn(t),o=es();return Q(ns,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,yn(c)+n].find(l=>o[l]!==void 0))}),sn[t]=e||""},je=t=>{let e=on[t]||ut[t];return Ve(on,t)||(Q(os,n=>(e=e||ut[n+yn(t)],!e)),on[t]=e),e},cs=je("MutationObserver"),Nn=je("IntersectionObserver"),de=je("ResizeObserver"),vn=je("ScrollTimeline"),A=(t,...e)=>t.bind(0,...e),_t=t=>{let e;const n=t?Pe:vo,o=t?pn:yo;return[s=>{o(e),e=n(s,At(t)?t():t)},()=>o(e)]},An=(t,e)=>{let n,o,s,c=gt;const{v:r,p:l,g:i}=e||{},u=function(h){c(),pn(n),n=o=void 0,c=gt,t.apply(this,h)},a=w=>i&&o?i(o,w):w,d=()=>{c!==gt&&u(a(s)||s)},y=function(){const h=ce(arguments),L=At(r)?r():r;if(Ht(L)&&L>=0){const N=At(l)?l():l,f=Ht(N)&&N>=0,O=L>0?Pe:vo,m=L>0?pn:yo,D=a(h)||h,S=u.bind(0,D);c();const R=O(S,L);c=()=>m(R),f&&!n&&(n=Pe(d,N)),o=s=D}else u(h)};return y.m=d,y},rs=/[^\x20\t\r\n\f]+/g,go=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&Se(e)){const l=e.match(rs)||[];for(r=l.length>0;s=l[c++];)r=!!n(o,s)&&r}return r},Tn=(t,e)=>{go(t,e,(n,o)=>n.remove(o))},Ft=(t,e)=>(go(t,e,(n,o)=>n.add(o)),A(Tn,t,e)),ls={opacity:1,zIndex:1},$e=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},is=(t,e)=>!ls[t]&&Ht(e)?`${e}px`:e,qn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),as=(t,e,n)=>{try{const{style:o}=t;qt(o[e])?o.setProperty(e,n):o[e]=is(e,n)}catch{}};function it(t,e){const n=Se(e);if(mt(e)||n){let s=n?"":{};if(t){const c=ut.getComputedStyle(t,null);s=n?qn(t,c,e):e.reduce((r,l)=>(r[l]=qn(t,c,l),r),s)}return s}t&&Q(e,(s,c)=>as(t,c,e[c]))}const me=t=>it(t,"direction")==="rtl",Vn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,u=it(t,[c,r,l,i]);return{t:$e(u[c],!0),r:$e(u[r],!0),b:$e(u[l],!0),l:$e(u[i],!0)}},Jt=(t,e)=>`translate${ve(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,mo="paddingTop",zn="paddingRight",Ln="paddingLeft",Ie="paddingBottom",Be="marginLeft",Me="marginRight",fe="marginBottom",le="overflowX",ie="overflowY",Mt="width",Dt="height",se="hidden",us={w:0,h:0},Ue=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:us,ds=t=>Ue("inner",t||ut),pe=A(Ue,"offset"),Te=A(Ue,"client"),De=A(Ue,"scroll"),Re=t=>{const e=parseFloat(it(t,Mt))||0,n=parseFloat(it(t,Dt))||0;return{w:e-ge(e),h:n-ge(n)}},Ct=t=>t.getBoundingClientRect(),te=t=>!!(t&&(t[Dt]||t[Mt])),Xe=(t,e,n,o)=>{if(t&&e){let s=!0;return Q(n,c=>{const r=o?o(t[c]):t[c],l=o?o(e[c]):e[c];r!==l&&(s=!1)}),s}return!1},bo=(t,e)=>Xe(t,e,["w","h"]),ho=(t,e)=>Xe(t,e,["x","y"]),fs=(t,e)=>Xe(t,e,["t","r","b","l"]),jn=(t,e,n)=>Xe(t,e,[Mt,Dt],n&&(o=>ge(o)));let Ce;const Un="passive",ps=()=>{if(qt(Ce)){Ce=!1;try{ut.addEventListener(Un,gt,Object.defineProperty({},Un,{get(){Ce=!0}}))}catch{}}return Ce},So=t=>t.split(" "),Xn=(t,e,n,o)=>{Q(So(e),s=>{t.removeEventListener(s,n,o)})},nt=(t,e,n,o)=>{var s;const c=ps(),r=(s=c&&o&&o.S)!=null?s:c,l=o&&o.$||!1,i=o&&o.O||!1,u=c?{passive:r,capture:l}:l;return A(bt,So(e).map(a=>{const d=i?y=>{Xn(t,a,d,l),n(y)}:n;return t.addEventListener(a,d,u),A(Xn,t,a,d,l)}))},wo=t=>t.stopPropagation(),Wn=t=>t.preventDefault(),ys={x:0,y:0},cn=t=>{const e=t&&Ct(t);return e?{x:e.left+ut.pageYOffset,y:e.top+ut.pageXOffset}:ys},xo=(t,e,n)=>n?n.n?-t:n.i?e-t:t:t,vs=(t,e)=>[e&&e.i?t:0,xo(t,t,e)],Yt=(t,e)=>{const{x:n,y:o}=Ht(e)?{x:e,y:e}:e||{};Ht(n)&&(t.scrollLeft=n),Ht(o)&&(t.scrollTop=o)},We=t=>({x:t.scrollLeft,y:t.scrollTop}),Yn=(t,e)=>{Q(mt(e)?e:[e],t)},Oo=t=>{const e=new Map,n=(c,r)=>{if(c){const l=e.get(c);Yn(i=>{l&&l[i?"delete":"clear"](i)},r)}else e.forEach(l=>{l.clear()}),e.clear()},o=(c,r)=>{if(Se(c)){const u=e.get(c)||new Set;return e.set(c,u),Yn(a=>{At(a)&&u.add(a)},r),A(n,c,r)}ao(r)&&r&&n();const l=Bt(c),i=[];return Q(l,u=>{const a=c[u];a&&Z(i,o(u,a))}),A(bt,i)},s=(c,r)=>{Q(ce(e.get(c)),l=>{r&&!ze(r)?l.apply(0,r):l()})};return o(t||{}),[o,n,s]},Gn=t=>JSON.stringify(t,(e,n)=>{if(At(n))throw 0;return n}),Kn=(t,e)=>t?`${e}`.split(".").reduce((n,o)=>n&&Ve(n,o)?n[o]:void 0,t):void 0,gs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Eo=(t,e)=>{const n={},o=Bt(e).concat(Bt(t));return Q(o,s=>{const c=t[s],r=e[s];if(ve(c)&&ve(r))K(n[s]={},Eo(c,r)),Cn(n[s])&&delete n[s];else if(Ve(e,s)&&r!==c){let l=!0;if(mt(c)||mt(r))try{Gn(c)===Gn(r)&&(l=!1)}catch{}l&&(n[s]=r)}}),n},ms=(t,e,n)=>o=>[Kn(t,o),n||Kn(e,o)!==void 0],we="data-overlayscrollbars",$o="os-environment",Co=`${$o}-flexbox-glue`,bs=`${Co}-max`,Ho="os-scrollbar-hidden",rn=`${we}-initialize`,xt=we,Ao=`${xt}-overflow-x`,To=`${xt}-overflow-y`,ne="overflowVisible",hs="scrollbarHidden",Zn="scrollbarPressed",_e="updating",kt=`${we}-viewport`,ln="arrange",zo="scrollbarHidden",oe=ne,gn=`${we}-padding`,Ss=oe,Jn=`${we}-content`,Pn="os-size-observer",ws=`${Pn}-appear`,xs=`${Pn}-listener`,Os="os-trinsic-observer",Es="os-no-css-vars",$s="os-theme-none",pt="os-scrollbar",Cs=`${pt}-rtl`,Hs=`${pt}-horizontal`,As=`${pt}-vertical`,Lo=`${pt}-track`,In=`${pt}-handle`,Ts=`${pt}-visible`,zs=`${pt}-cornerless`,Qn=`${pt}-transitionless`,to=`${pt}-interaction`,eo=`${pt}-unusable`,mn=`${pt}-auto-hide`,no=`${mn}-hidden`,oo=`${pt}-wheel`,Ls=`${Lo}-interactive`,Ps=`${In}-interactive`,Po={},Io={},Is=t=>{Q(t,e=>Q(e,(n,o)=>{Po[o]=e[o]}))},Bo=(t,e,n,o)=>Bt(t).map(s=>{const{static:c,instance:r}=t[s],l=n?r:c;if(l){const i=n?l(n,e):l(e);return(o||Io)[s]=i}}),re=t=>Io[t],Bs="__osOptionsValidationPlugin",Ms="__osSizeObserverPlugin",Bn="__osScrollbarsHidingPlugin",Ds="__osClickScrollPlugin";let an;const so=(t,e,n,o)=>{vt(t,e);const s=Te(e),c=pe(e),r=Re(n);return o&&It(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},Rs=t=>{let e=!1;const n=Ft(t,Ho);try{e=it(t,ss("scrollbar-width"))==="none"||ut.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},_s=(t,e)=>{it(t,{[le]:se,[ie]:se,direction:"rtl"}),Yt(t,{x:0});const n=cn(t),o=cn(e);Yt(t,{x:-999});const s=cn(e);return{i:n.x===o.x,n:o.x!==s.x}},ks=(t,e)=>{const n=Ft(t,Co),o=Ct(t),s=Ct(e),c=jn(s,o,!0),r=Ft(t,bs),l=Ct(t),i=Ct(e),u=jn(i,l,!0);return n(),r(),c&&u},Fs=()=>{const{body:t}=document,n=po(`<div class="${$o}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=Oo(),[r,l]=wt({o:so(t,n,o),u:ho},A(so,t,n,o,!0)),[i]=l(),u=Rs(n),a={x:i.x===0,y:i.y===0},d={elements:{host:null,padding:!u,viewport:f=>u&&f===f.ownerDocument.body&&f,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},y=K({},gs),w=A(K,{},y),h=A(K,{},d),L={L:i,I:a,H:u,A:it(n,"zIndex")==="-1",P:!!vn,V:_s(n,o),U:ks(n,o),B:A(s,"z"),j:A(s,"r"),N:h,q:f=>K(d,f)&&h(),G:w,W:f=>K(y,f)&&w(),F:K({},d),X:K({},y)},M=A(nt,ut,"resize"),N=An(f=>c(f),{v:33,p:99});return ft(n,"style"),It(n),M(A(N,"r")),!u&&(!a.x||!a.y)&&M(()=>{const f=re(Bn);(f?f.M():gt)(L,r,A(N,"z"))}),L},yt=()=>(an||(an=Fs()),an),Mn=(t,e)=>At(e)?e.apply(0,t):e,Ns=(t,e,n,o)=>{const s=qt(o)?n:o;return Mn(t,s)||e.apply(0,t)},Mo=(t,e,n,o)=>{const s=qt(o)?n:o,c=Mn(t,s);return!!c&&(ae(c)?c:e.apply(0,t))},qs=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{I:s,H:c,N:r}=yt(),{nativeScrollbarsOverlaid:l,body:i}=r().cancel,u=n??l,a=qt(o)?i:o,d=(s.x||s.y)&&u,y=t&&(ke(a)?!c:a);return!!d||!!y},Dn=new WeakMap,Vs=(t,e)=>{Dn.set(t,e)},js=t=>{Dn.delete(t)},Do=t=>Dn.get(t),Us=(t,e,n)=>{let o=!1;const s=n?new WeakMap:!1,c=()=>{o=!0},r=l=>{if(s&&n){const i=n.map(u=>{const[a,d]=u||[];return[d&&a?(l||fo)(a,t):[],d]});Q(i,u=>Q(u[0],a=>{const d=u[1],y=s.get(a)||[];if(t.contains(a)&&d){const h=nt(a,d.trim(),L=>{o?(h(),s.delete(a)):e(L)});s.set(a,Z(y,h))}else bt(y),s.delete(a)}))}};return r(),[c,r]},co=(t,e,n,o)=>{let s=!1;const{Y:c,Z:r,J:l,K:i,tt:u,nt:a}=o||{},d=An(()=>s&&n(!0),{v:33,p:99}),[y,w]=Us(t,d,l),h=c||[],L=r||[],M=h.concat(L),N=(O,m)=>{if(!ze(m)){const q=u||gt,D=a||gt,S=[],R=[];let g=!1,_=!1;if(Q(m,T=>{const{attributeName:P,target:U,type:k,oldValue:I,addedNodes:X,removedNodes:J}=T,tt=k==="attributes",B=k==="childList",$=t===U,z=tt&&P,H=z?at(U,P||""):null,E=z&&I!==H,j=qe(L,P)&&E;if(e&&(B||!$)){const v=tt&&E,et=v&&i&&Le(U,i),b=(et?!q(U,P,I,H):!tt||v)&&!D(T,!!et,t,o);Q(X,C=>Z(S,C)),Q(J,C=>Z(S,C)),_=_||b}!e&&$&&E&&!q(U,P,I,H)&&(Z(R,P),g=g||j)}),w(T=>kn(S).reduce((P,U)=>(Z(P,fo(T,U)),Le(U,T)?Z(P,U):P),[])),e)return!O&&_&&n(!1),[!1];if(!ze(R)||g){const T=[kn(R),g];return!O&&n.apply(0,T),T}}},f=new cs(A(N,!1));return[()=>(f.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:M,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(y(),f.disconnect(),s=!1)}),()=>{if(s)return d.m(),N(!0,f.takeRecords())}]},Ro=(t,e,n)=>{let o=!1;const s=3333333,{ot:c,st:r,et:l}=n||{},i=re(Ms),{V:u}=yt(),a=A(me,t),[d,y]=_t(33),[w]=wt({o:!1,_:!0,u:(h,L)=>!(!h||!te(h)&&te(L))});return()=>{const h=[y,nt(ut,"resize",()=>{o=!!l,d(()=>{o=!1})})],M=po(`<div class="${Pn}"><div class="${xs}"></div></div>`)[0],N=M.firstChild,f=m=>{const q=m instanceof ResizeObserverEntry,D=!q&&mt(m);let S=!1,R=!1,g=!0;if(q){const[_,,T]=w(m.contentRect),P=te(_),U=te(T),k=!T;R=!U&&P,S=k&&!!U||!P||o,g=!S}else D?[,g]=m:R=m===!0;if(c&&g){const _=D?m[0]:me(M);Yt(M,{x:xo(s,s,_&&u),y:s})}!S&&!R&&e({ct:!D,rt:D?m:void 0,st:R}),o=!1};let O=r&&f;if(de){const m=new de(q=>f(q.pop()));m.observe(N),Z(h,()=>{m.disconnect()})}else if(i){const[m,q]=i(N,f,r);O=m,Z(h,q)}else return gt;if(c){const[m]=wt({o:void 0},a);Z(h,nt(M,"scroll",q=>{const D=m(),[S,R,g]=D;R&&(Tn(N,"ltr rtl"),Ft(N,S?"rtl":"ltr"),f([!!S,R,g])),wo(q)}))}return O&&(Ft(M,ws),Z(h,nt(M,"animationstart",O,{O:!!de}))),A(bt,Z(h,vt(t,M)))}},Xs=(t,e)=>{let n;const o=i=>i.h===0||i.isIntersecting||i.intersectionRatio>0,s=Wt(Os),[c]=wt({o:!1}),r=(i,u)=>{if(i){const a=c(o(i)),[,d]=a;return d&&!u&&e(a)&&[a]}},l=(i,u)=>r(u.pop(),i);return[()=>{const i=[];if(Nn)n=new Nn(A(l,!1),{root:t}),n.observe(s),Z(i,()=>{n.disconnect()});else{const u=()=>{const a=pe(s);r(a)};Z(i,Ro(s,u)()),u()}return A(bt,Z(i,vt(t,s)))},()=>n&&l(!0,n.takeRecords())]},Ws=(t,e)=>{let n,o,s,c;const r=`[${xt}]`,l=`[${kt}]`,i=["tabindex"],u=["wrap","cols","rows"],a=["id","class","style","open"],d={lt:!1,it:me(t.ut)},{ut:y,ft:w,_t:h,dt:L,vt:M,ht:N,gt:f}=t,{U:O}=yt(),[m]=wt({u:bo,o:{w:0,h:0}},()=>{const B=N(oe,ne),$=N(ln,""),z=$&&We(w);f(oe,ne),f(ln,""),f("",_e,!0);const H=De(h),E=De(w),j=Re(w);return f(oe,ne,B),f(ln,"",$),f("",_e),Yt(w,z),{w:E.w+H.w+j.w,h:E.h+H.h+j.h}}),q=L?u:a.concat(u),D=An(e,{v:()=>n,p:()=>o,g(B,$){const[z]=B,[H]=$;return[Bt(z).concat(Bt(H)).reduce((E,j)=>(E[j]=z[j]||H[j],E),{})]}}),S=B=>{Q(B||i,$=>{if(qe(i,$)){const z=at(y,$);Se(z)?at(w,$,z):ft(w,$)}})},R=(B,$)=>{const[z,H]=B,E={bt:H};return K(d,{lt:z}),!$&&e(E),E},g=({ct:B,rt:$,st:z})=>{const H=!B||z?e:D,[E,j]=$||[];$&&K(d,{it:E}),H({ct:B,st:z,wt:j})},_=(B,$)=>{const[,z]=m(),H={yt:z};return z&&!$&&(B?e:D)(H),H},T=(B,$,z)=>{const H={St:$};return $&&!z?D(H):M||S(B),H},[P,U]=h||!O?Xs(y,R):[],k=!M&&Ro(y,g,{st:!0,ot:!0,et:!0}),[I,X]=co(y,!1,T,{Z:a,Y:a.concat(i)});let J;const tt=M&&de&&new de(B=>{const $=B[B.length-1].contentRect,z=te($),E=!te(J)&&z;g({ct:!0,st:E}),J=$});return[()=>{S(),tt&&tt.observe(y);const B=k&&k(),$=P&&P(),z=I();return()=>{tt&&tt.disconnect(),B&&B(),$&&$(),c&&c(),z()}},({$t:B,xt:$})=>{const z={},[H]=B("update.ignoreMutation"),[E,j]=B("update.attributes"),[v,et]=B("update.elementEvents"),[p,b]=B("update.debounce"),C=et||j,F=x=>At(H)&&H(x);if(C){s&&s(),c&&c();const[x,V]=co(h||w,!0,_,{Y:q.concat(E||[]),J:v,K:r,nt:(W,G)=>{const{target:Y,attributeName:ot}=W;return(!G&&ot&&!M?Jo(Y,r,l):!1)||!!Qt(Y,`.${pt}`)||!!F(W)}});c=x(),s=V}if(b)if(D.m(),mt(p)){const x=p[0],V=p[1];n=Ht(x)&&x,o=Ht(V)&&V}else Ht(p)?(n=p,o=!1):(n=!1,o=!1);if($){const x=X(),V=U&&U(),W=s&&s();x&&K(z,T(x[0],x[1],$)),V&&K(z,R(V[0],$)),W&&K(z,_(W[0],$))}return z},d]},bn=(t,e,n)=>ue(t,ts(e,n)),Ys=(t,e,n)=>{const o=ge(e),[s,c]=vs(o,n),r=(c-t)/c,l=t/s,i=t/c,u=n?n.n?r:n.i?l:i:i;return bn(0,1,u)},_o=(t,e,n,o)=>{if(o){const l=n?"x":"y",{Ot:i,Ct:u}=o,a=u[l],d=i[l];return bn(0,1,a/(a+d))}const s=n?Mt:Dt,c=Ct(t)[s],r=Ct(e)[s];return bn(0,1,c/r)},Gs=(t,e,n,o,s,c)=>{const{V:r}=yt(),l=c?"x":"y",i=c?"Left":"Top",{Ot:u}=o,a=_o(t,e,c);return 1/a*(1-a)*Ys(n[`scroll${i}`],u[l],c&&s&&r)},Ks=(t,e,n)=>{const{N:o,A:s}=yt(),{scrollbars:c}=o(),{slot:r}=c,{zt:l,ut:i,ft:u,Ht:a,It:d,At:y,vt:w}=e,{scrollbars:h}=a?{}:t,{slot:L}=h||{},M=new Map,N=p=>vn&&new vn({source:d,axis:p}),f=N("x"),O=N("y"),m=Mo([l,i,u],()=>w&&y?l:i,r,L),q=p=>w&&!y&&Pt(p)===u,D=p=>{M.forEach((b,C)=>{(p?qe(mt(p)?p:[p],C):!0)&&((b||[]).forEach(x=>{x&&x.cancel()}),M.delete(C))})},S=(p,b,C)=>{const F=C?Ft:Tn;Q(p,x=>{F(x.Et,b)})},R=(p,b)=>{Q(p,C=>{const[F,x]=b(C);it(F,x)})},g=(p,b,C)=>{R(p,F=>{const{Tt:x,Dt:V}=F;return[x,{[C?Mt:Dt]:`${(_o(x,V,C,b)*100).toFixed(3)}%`}]})},_=(p,b,C)=>{!O&&!O&&R(p,F=>{const{Tt:x,Dt:V,Et:W}=F,G=Gs(x,V,d,b,me(W),C);return[x,{transform:G===G?Jt(`${(G*100).toFixed(3)}%`,C):""}]})},T=p=>{const{Et:b}=p,C=q(b)&&b,F=We(d);return[C,{transform:C?Jt({x:`${F.x}px`,y:`${F.y}px`}):""}]},P=(p,b,C,F)=>b&&p.animate(C,{timeline:b,composite:F}),U=(p,b,C,F)=>P(p,b,{transform:[Jt("0px",F),Jt(`${ue(0,C-.5)}px`,F)]},"add"),k=[],I=[],X=[],J=(p,b,C)=>{const F=ao(C),x=F?C:!0,V=F?!C:!0;x&&S(I,p,b),V&&S(X,p,b)},tt=p=>{g(I,p,!0),g(X,p)},B=p=>{_(I,p,!0),_(X,p)},$=()=>{const p=(b,{Et:C,Tt:F})=>{const x=b&&me(C);D(F),M.set(F,[P(F,b?f:O,{transform:[Jt("0%",b),Jt(b&&x?"100%":"-100%",b)],[b?x?"right":"left":"top"]:["0%","100%"]})])};I.forEach(A(p,!0)),X.forEach(A(p,!1))},z=()=>{!O&&!O&&(w&&R(I,T),w&&R(X,T))},H=({Ot:p})=>{X.concat(I).forEach(({Et:b})=>{D(b),q(b)&&M.set(b,[U(b,f,p.x,!0),U(b,O,p.y)])})},E=p=>{const b=p?Hs:As,C=p?I:X,F=ze(C)?Qn:"",x=Wt(`${pt} ${b} ${F}`),V=Wt(Lo),W=Wt(In),G={Et:x,Dt:V,Tt:W};return s||Ft(x,Es),Z(C,G),Z(k,[vt(x,V),vt(V,W),A(It,x),D,n(G,J,p)]),G},j=A(E,!0),v=A(E,!1),et=()=>(vt(m,I[0].Et),vt(m,X[0].Et),Pe(()=>{J(Qn)},300),A(bt,k));return j(),v(),[{Rt:tt,kt:B,Mt:$,Lt:H,Pt:z,Vt:J,Ut:{P:f,Bt:I,jt:j,Nt:A(R,I)},qt:{P:O,Bt:X,jt:v,Nt:A(R,X)}},et]},Zs=(t,e,n)=>{const{ut:o,It:s,Gt:c}=e,r=(l,i)=>{const{Tt:u,Dt:a}=l,d=`scroll${i?"Left":"Top"}`,y=`client${i?"X":"Y"}`,w=i?Mt:Dt,h=i?"left":"top",L=i?"w":"h",M=i?"x":"y",N="pointerup pointerleave pointercancel lostpointercapture",f=(O,m)=>q=>{const{Ot:D}=n,S=pe(a)[L]-pe(u)[L],g=m*q/S*D[M];s[d]=O+g};return nt(a,"pointerdown",O=>{const m=Qt(O.target,`.${In}`)===u,q=m?u:a,D=t.scrollbars,{button:S,isPrimary:R,pointerType:g}=O,{pointers:_}=D,T=S===0&&R&&D[m?"dragScroll":"clickScroll"]&&(_||[]).includes(g);if(Xt(o,xt,Zn,!0),T){const P=!m&&O.shiftKey,U=A(Ct,u),k=A(Ct,a),I=(p,b)=>(p||U())[h]-(b||k())[h],X=ge(Ct(s)[w])/pe(s)[L]||1,J=f(s[d]||0,1/X),tt=O[y],B=U(),$=k(),z=B[w],H=I(B,$)+z/2,E=tt-$[h],j=m?0:E-H,v=p=>{bt(et),q.releasePointerCapture(p.pointerId)},et=[A(Xt,o,xt,Zn),nt(c,N,v),nt(c,"selectstart",p=>Wn(p),{S:!1}),nt(a,N,v),nt(a,"pointermove",p=>{const b=p[y]-tt;(m||P)&&J(j+b)})];if(P)J(j);else if(!m){const p=re(Ds);p&&Z(et,p(J,I,j,z,E))}q.setPointerCapture(O.pointerId)}})};return(l,i,u)=>{const{Et:a}=l,[d,y]=_t(333),w=!!s.scrollBy;let h=!0;return A(bt,[nt(a,"pointerenter",()=>{i(to,!0)}),nt(a,"pointerleave pointercancel",()=>{i(to,!1)}),nt(a,"wheel",L=>{const{deltaX:M,deltaY:N,deltaMode:f}=L;w&&h&&f===0&&Pt(a)===o&&s.scrollBy({left:M,top:N,behavior:"smooth"}),h=!1,i(oo,!0),d(()=>{h=!0,i(oo)}),Wn(L)},{S:!1,$:!0}),nt(a,"mousedown",A(nt,c,"click",wo,{O:!0,$:!0}),{$:!0}),r(l,u),y])}},Js=(t,e,n,o,s,c)=>{let r,l,i,u,a,d=gt,y=0;const[w,h]=_t(),[L,M]=_t(),[N,f]=_t(100),[O,m]=_t(100),[q,D]=_t(100),[S,R]=_t(()=>y),[g,_]=Ks(t,s,Zs(e,s,o)),{ut:T,Wt:P,At:U}=s,{Vt:k,Rt:I,kt:X,Mt:J,Lt:tt,Pt:B}=g,$=v=>{k(mn,v,!0),k(mn,v,!1)},z=(v,et)=>{if(R(),v)k(no);else{const p=A(k,no,!0);y>0&&!et?S(p):p()}},H=v=>v.pointerType==="mouse",E=v=>{H(v)&&(u=l,u&&z(!0))},j=[f,R,m,D,M,h,()=>d(),nt(T,"pointerover",E,{O:!0}),nt(T,"pointerenter",E),nt(T,"pointerleave",v=>{H(v)&&(u=!1,l&&z(!1))}),nt(T,"pointermove",v=>{H(v)&&r&&w(()=>{f(),z(!0),O(()=>{r&&z(!1)})})}),nt(P,"scroll",v=>{L(()=>{X(o),i&&z(!0),N(()=>{i&&!u&&z(!1)})}),c(v),B()})];return[()=>A(bt,Z(j,_())),({$t:v,Ft:et,Xt:p,Yt:b})=>{const{Zt:C,Jt:F,Kt:x}=b||{},{wt:V,st:W}=p||{},{I:G}=yt(),{it:Y}=n,{Ot:ot,Qt:dt,tn:ct}=o,[Ot,Tt]=v("showNativeOverlaidScrollbars"),[zt,Rt]=v("scrollbars.theme"),[Gt,rt]=v("scrollbars.visibility"),[lt,st]=v("scrollbars.autoHide"),[Lt,Vt]=v("scrollbars.autoHideSuspend"),[jt]=v("scrollbars.autoHideDelay"),[Kt,xe]=v("scrollbars.dragScroll"),[Ye,Ge]=v("scrollbars.clickScroll"),Ke=W&&!et,Ze=ct.x||ct.y,Et=C||F||V,Oe=x||rt,Je=Ot&&G.x&&G.y,Ee=(ht,$t)=>{const St=Gt==="visible"||Gt==="auto"&&ht==="scroll";return k(Ts,St,$t),St};if(y=jt,Ke&&(Lt&&Ze?($(!1),d(),q(()=>{d=nt(P,"scroll",A($,!0),{O:!0})})):$(!0)),Tt&&k($s,Je),Rt&&(k(a),k(zt,!0),a=zt),Vt&&!Lt&&$(!0),st&&(r=lt==="move",l=lt==="leave",i=lt!=="never",z(!i,!0)),xe&&k(Ps,Kt),Ge&&k(Ls,Ye),Oe){const ht=Ee(dt.x,!0),$t=Ee(dt.y,!1);k(zs,!(ht&&$t))}Et&&(I(o),X(o),J(o),B(),tt(o),k(eo,!ot.x,!0),k(eo,!ot.y,!1),k(Cs,Y&&!U))},{},g]},Qs=t=>{const e=yt(),{N:n,H:o}=e,s=re(Bn),c=s&&s.C,{elements:r}=n(),{host:l,padding:i,viewport:u,content:a}=r,d=ae(t),y=d?{}:t,{elements:w}=y,{host:h,padding:L,viewport:M,content:N}=w||{},f=d?t:y.target,O=Le(f,"textarea"),m=f.ownerDocument,q=m.documentElement,D=f===m.body,S=m.defaultView,R=A(Ns,[f]),g=A(Mo,[f]),_=A(Mn,[f]),T=A(Wt,""),P=A(R,T,u),U=A(g,T,a),k=P(M),I=k===f,X=I&&D,J=!I&&U(N),tt=!I&&ae(k)&&k===J,B=tt&&!!_(a),$=B?P():k,z=B?J:U(),E=X?q:tt?$:k,j=O?R(T,l,h):f,v=X?E:j,et=tt?z:J,p=m.activeElement,b=!I&&S.top===S&&p===f,C={zt:f,ut:v,ft:E,nn:!I&&g(T,i,L),_t:et,sn:!I&&!o&&c&&c(e),It:X?q:E,Wt:X?m:E,en:S,Gt:m,dt:O,At:D,Ht:d,vt:I,cn:tt,ht:(rt,lt)=>Ko(E,I?xt:kt,I?lt:rt),gt:(rt,lt,st)=>Xt(E,I?xt:kt,I?lt:rt,st)},F=Bt(C).reduce((rt,lt)=>{const st=C[lt];return Z(rt,st&&ae(st)&&!Pt(st)?st:!1)},[]),x=rt=>rt?qe(F,rt):null,{zt:V,ut:W,nn:G,ft:Y,_t:ot,sn:dt}=C,ct=[()=>{ft(W,xt),ft(W,rn),ft(V,rn),D&&(ft(q,xt),ft(q,rn))}],Ot=O&&x(W);let Tt=O?V:fn([ot,Y,G,W,V].find(rt=>x(rt)===!1));const zt=X?V:ot||Y,Rt=A(bt,ct);return[C,()=>{at(W,xt,I?"viewport":"host"),at(G,gn,""),at(ot,Jn,""),I||at(Y,kt,"");const rt=D&&!I?Ft(Pt(f),Ho):gt,lt=st=>{vt(Pt(st),fn(st)),It(st)};if(Ot&&(Fn(V,W),Z(ct,()=>{Fn(W,V),It(W)})),vt(zt,Tt),vt(W,G),vt(G||W,!I&&Y),vt(Y,ot),Z(ct,()=>{rt(),ft(G,gn),ft(ot,Jn),ft(Y,Ao),ft(Y,To),ft(Y,kt),x(ot)&&lt(ot),x(Y)&&lt(Y),x(G)&&lt(G)}),o&&!I&&(Xt(Y,kt,zo,!0),Z(ct,A(ft,Y,kt))),dt&&(Qo(Y,dt),Z(ct,A(It,dt))),b){const st="tabindex",Lt=at(Y,st);at(Y,st,"-1"),Y.focus();const Vt=()=>Lt?at(Y,st,Lt):ft(Y,st),jt=nt(m,"pointerdown keydown",()=>{Vt(),jt()});Z(ct,[Vt,jt])}else p&&p.focus&&p.focus();return Tt=0,Rt},Rt]},tc=({_t:t})=>({Xt:e,rn:n})=>{const{U:o}=yt(),{bt:s}=e||{},{lt:c}=n;(t||!o)&&s&&it(t,{[Dt]:c?"":"100%"})},ec=({ut:t,nn:e,ft:n,vt:o},s)=>{const[c,r]=wt({u:fs,o:Vn()},A(Vn,t,"padding",""));return({$t:l,Xt:i,rn:u,Ft:a})=>{let[d,y]=r(a);const{H:w,U:h}=yt(),{ct:L,yt:M,wt:N}=i||{},{it:f}=u,[O,m]=l("paddingAbsolute");(L||y||!h&&M)&&([d,y]=c(a));const D=!o&&(m||N||y);if(D){const S=!O||!e&&!w,R=d.r+d.l,g=d.t+d.b,_={[Me]:S&&!f?-R:0,[fe]:S?-g:0,[Be]:S&&f?-R:0,top:S?-d.t:0,right:S?f?-d.r:"auto":0,left:S?f?"auto":-d.l:0,[Mt]:S?`calc(100% + ${R}px)`:""},T={[mo]:S?d.t:0,[zn]:S?d.r:0,[Ie]:S?d.b:0,[Ln]:S?d.l:0};it(e||n,_),it(n,T),K(s,{nn:d,ln:!S,D:e?T:K({},_,T)})}return{an:D}}},nc=({ut:t,nn:e,ft:n,sn:o,vt:s,gt:c,At:r,en:l},i)=>{const u=A(ue,0),a="visible",d=42,y={u:bo,o:{w:0,h:0}},w={u:ho,o:{x:se,y:se}},h=(H,E)=>{const j=ut.devicePixelRatio%1!==0?1:0,v={w:u(H.w-E.w),h:u(H.h-E.h)};return{w:v.w>j?v.w:0,h:v.h>j?v.h:0}},L=H=>H.indexOf(a)===0,{L:M,U:N,H:f,I:O}=yt(),m=re(Bn),q=!s&&!f&&(O.x||O.y),D=r&&s,[S,R]=wt(y,A(Re,n)),[g,_]=wt(y,A(De,n)),[T,P]=wt(y),[U,k]=wt(y),[I]=wt(w),X=(H,E)=>{if(it(n,{[Dt]:""}),E){const{ln:j,nn:v}=i,{un:et,R:p}=H,b=Re(t),C=Te(t),F=it(n,"boxSizing")==="content-box",x=j||F?v.b+v.t:0,V=!(O.x&&F);it(n,{[Dt]:C.h+b.h+(et.x&&V?p.x:0)-x})}},J=(H,E)=>{const j=!f&&!H?d:0,v=(G,Y,ot)=>{const dt=it(n,G),Ot=(E?E[G]:dt)==="scroll";return[dt,Ot,Ot&&!f?Y?j:ot:0,Y&&!!j]},[et,p,b,C]=v(le,O.x,M.x),[F,x,V,W]=v(ie,O.y,M.y);return{Qt:{x:et,y:F},un:{x:p,y:x},R:{x:b,y:V},k:{x:C,y:W}}},tt=(H,E,j,v)=>{const et=(x,V)=>{const W=L(x),G=V&&W&&x.replace(`${a}-`,"")||"";return[V&&!W?x:"",L(G)?"hidden":G]},[p,b]=et(j.x,E.x),[C,F]=et(j.y,E.y);return v[le]=b&&C?b:p,v[ie]=F&&p?F:C,J(H,v)},B=(H,E,j,v)=>{const{R:et,k:p}=H,{x:b,y:C}=p,{x:F,y:x}=et,{D:V}=i,W=E?Be:Me,G=E?Ln:zn,Y=V[W],ot=V[fe],dt=V[G],ct=V[Ie];v[Mt]=`calc(100% + ${x+Y*-1}px)`,v[W]=-x+Y,v[fe]=-F+ot,j&&(v[G]=dt+(C?x:0),v[Ie]=ct+(b?F:0))},[$,z]=m?m.T(q,N,n,o,i,J,B):[()=>q,()=>[gt]];return({$t:H,Xt:E,rn:j,Ft:v},{an:et})=>{const{ct:p,St:b,yt:C,bt:F,wt:x}=E||{},{lt:V,it:W}=j,[G,Y]=H("showNativeOverlaidScrollbars"),[ot,dt]=H("overflow"),ct=G&&O.x&&O.y,Ot=!s&&!N&&(p||C||b||Y||F),Tt=L(ot.x),zt=L(ot.y),Rt=Tt||zt;let Gt=R(v),rt=_(v),lt=P(v),st=k(v),Lt;if(Y&&f&&c(zo,hs,!ct),Ot&&(Lt=J(ct),X(Lt,V)),p||et||C||x||Y){Rt&&c(oe,ne,!1);const[ht,$t]=z(ct,W,Lt),[St,jo]=Gt=S(v),[Zt,Uo]=rt=g(v),Qe=Te(n);let tn=Zt,en=Qe;ht(),(Uo||jo||Y)&&$t&&!ct&&$($t,Zt,St,W)&&(en=Te(n),tn=De(n));const Rn=ds(l),Xo={w:u(ue(Zt.w,tn.w)+St.w),h:u(ue(Zt.h,tn.h)+St.h)},_n={w:u((D?Rn.w:en.w+u(Qe.w-Zt.w))+St.w),h:u((D?Rn.h:en.h+u(Qe.h-Zt.h))+St.h)};st=U(_n),lt=T(h(Xo,_n),v)}const[Vt,jt]=st,[Kt,xe]=lt,[Ye,Ge]=rt,[Ke,Ze]=Gt,Et={x:Kt.w>0,y:Kt.h>0},Oe=Tt&&zt&&(Et.x||Et.y)||Tt&&Et.x&&!Et.y||zt&&Et.y&&!Et.x;if(et||x||Ze||Ge||jt||xe||dt||Y||Ot){const ht={[Me]:0,[fe]:0,[Be]:0,[Mt]:"",[le]:"",[ie]:""},$t=tt(ct,Et,ot,ht),St=$($t,Ye,Ke,W);s||B($t,W,St,ht),Ot&&X($t,V),s?(at(t,Ao,ht[le]),at(t,To,ht[ie])):it(n,ht)}Xt(t,xt,ne,Oe),Xt(e,gn,Ss,Oe),s||Xt(n,kt,oe,Rt);const[Je,Ee]=I(J(ct).Qt);return K(i,{Qt:Je,Ct:{x:Vt.w,y:Vt.h},Ot:{x:Kt.w,y:Kt.h},tn:Et}),{Kt:Ee,Zt:jt,Jt:xe}}},oc=t=>{const[e,n,o]=Qs(t),s={nn:{t:0,r:0,b:0,l:0},ln:!1,D:{[Me]:0,[fe]:0,[Be]:0,[mo]:0,[zn]:0,[Ie]:0,[Ln]:0},Ct:{x:0,y:0},Ot:{x:0,y:0},Qt:{x:se,y:se},tn:{x:!1,y:!1}},{zt:c,ft:r,gt:l,vt:i}=e,{H:u,I:a,U:d}=yt(),y=!u&&(a.x||a.y),w=[tc(e),ec(e,s),nc(e,s)];return[n,h=>{const L={},N=(y||!d)&&We(r);return l("",_e,!0),Q(w,f=>{K(L,f(h,L)||{})}),l("",_e),Yt(r,N),!i&&Yt(c,0),L},s,e,o]},sc=(t,e,n,o)=>{const[s,c,r,l,i]=oc(t),[u,a,d]=Ws(l,f=>{N({},f)}),[y,w,,h]=Js(t,e,d,r,l,o),L=f=>Q(K({},f),(O,m,q)=>{q[m]=!!O}),M=f=>Bt(f).some(O=>!!f[O]),N=(f,O)=>{const{fn:m,Ft:q,xt:D,_n:S,dn:R}=f,g=m||{},_=!!q,T={$t:ms(e,g,_),fn:g,Ft:_};if(S)return w(T),!1;const P=O||a(K({},T,{xt:D}));R&&K(P,{ct:!0,yt:!0});const U=c(K({},T,{rn:d,Xt:P}));w(K({},T,{Xt:P,Yt:U}));const k=M(P),I=M(U),X=k||I||!Cn(g)||_;return X&&n(f,{Xt:L(P),Yt:L(U)}),X};return[()=>{const{zt:f,ft:O,Gt:m,At:q}=l,D=q?m.documentElement:f,S=We(D),R=[u(),s(),y()];return Yt(O,S),A(bt,R)},N,()=>({vn:d,hn:r}),{pn:l,gn:h},i]},Nt=(t,e,n)=>{const{G:o,B:s,j:c}=yt(),r=ae(t),l=r?t:t.target,i=Do(l);if(e&&!i){let u=!1;const a=[],d={},y=g=>{const _=re(Bs);return _?_(g,!0):g},w=K({},o(),y(e)),[h,L,M]=Oo(n),[N,f,O,m,q]=sc(t,w,({fn:g,Ft:_},{Xt:T,Yt:P})=>{const{ct:U,wt:k,bt:I,yt:X,St:J}=T,{Zt:tt,Jt:B,Kt:$}=P;M("updated",[S,{updateHints:{sizeChanged:U,directionChanged:k,heightIntrinsicChanged:I,overflowEdgeChanged:tt,overflowAmountChanged:B,overflowStyleChanged:$,contentMutation:X,hostMutation:J},changedOptions:g||{},force:!!_}])},g=>M("scroll",[S,g])),D=g=>{js(l),bt(a),u=!0,M("destroyed",[S,g]),L()},S={options(g,_){if(g){const T=_?o():{},P=Eo(w,K(T,y(g)));Cn(P)||(K(w,P),f({fn:P}))}return K({},w)},on:h,off:(g,_)=>{g&&_&&L(g,_)},state(){const{vn:g,hn:_}=O(),{it:T}=g,{Ct:P,Ot:U,Qt:k,tn:I,nn:X,ln:J}=_;return K({},{overflowEdge:P,overflowAmount:U,overflowStyle:k,hasOverflow:I,padding:X,paddingAbsolute:J,directionRTL:T,destroyed:u})},elements(){const{zt:g,ut:_,nn:T,ft:P,_t:U,It:k,Wt:I}=m.pn,{Ut:X,qt:J}=m.gn,tt=$=>{const{Tt:z,Dt:H,Et:E}=$;return{scrollbar:E,track:H,handle:z}},B=$=>{const{Bt:z,jt:H}=$,E=tt(z[0]);return K({},E,{clone:()=>{const j=tt(H());return f({_n:!0}),j}})};return K({},{target:g,host:_,padding:T||P,viewport:P,content:U||P,scrollOffsetElement:k,scrollEventElement:I,scrollbarHorizontal:B(X),scrollbarVertical:B(J)})},update:g=>f({Ft:g,xt:!0}),destroy:A(D,!1),plugin:g=>d[Bt(g)[0]]},R=()=>{const{hn:g}=O(),{tn:_}=g,T=_.x||_.y;T&&f({dn:T})};return Z(a,[s(R),c(R),q]),Vs(l,S),Bo(Po,Nt,S,d),qs(m.pn.At,!r&&t.cancel)?(D(!0),S):(Z(a,N()),M("initialized",[S]),S.update(!0),S)}return i};Nt.plugin=t=>{const e=mt(t),n=e?t:[t],o=n.map(s=>Bo(s,Nt)[0]);return Is(n),e?o:o[0]};Nt.valid=t=>{const e=t&&t.elements,n=At(e)&&e();return un(n)&&!!Do(n.target)};Nt.env=()=>{const{L:t,I:e,H:n,V:o,U:s,A:c,P:r,F:l,X:i,N:u,q:a,G:d,W:y}=yt();return K({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:l,staticDefaultOptions:i,getDefaultInitialization:u,setDefaultInitialization:a,getDefaultOptions:d,setDefaultOptions:y})};const cc=document.querySelector("#eventsSection"),ro=document.querySelector("#events"),rc=t=>{cc.style.display="",ro.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,ro.append(o)})},lc=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,rc({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const l=e[r];e[r]=typeof l=="number"?l+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const i=new Set(t);i.delete(r),s(Array.from(i))},500)}};let Ut,hn=!1,Sn=!1,wn=!0;const He=lc(),ee=document.querySelector("#target"),lo=document.querySelector("#targetContent"),Ae=document.querySelector("#impostor"),xn=document.querySelector("#scrollButton"),be=document.querySelector("#toggleContentButton"),he=document.querySelector("#toggleElementButton"),On=document.querySelector("#toggleOverlayScrollbarsButton"),ko=()=>{hn?(lo.style.display="none",be.textContent="Show Content"):(lo.style.display="",be.textContent="Hide Content")},Fo=()=>{Sn?(ee.style.display="none",he.textContent="Show Element"):(ee.style.display="",he.textContent="Hide Element")},No=()=>{var t,e;wn?((t=Ae.parentElement)==null||t.append(ee),Ae.remove(),xn.style.display="",be.style.display="",he.style.display="",On.textContent="Destroy OverlayScrollbars",Ut=Nt(ee,{},{initialized:()=>He("initialized"),destroyed:()=>He("destroyed"),updated:()=>He("updated"),scroll:()=>He("scroll")})):(Ut==null||Ut.destroy(),(e=ee.parentElement)==null||e.append(Ae),ee.remove(),Ae.style.display="",xn.style.display="none",be.style.display="none",he.style.display="none",On.textContent="Initialize OverlayScrollbars")};xn.addEventListener("click",()=>{if(!Ut)return;const{overflowAmount:t}=Ut.state(),{scrollOffsetElement:e}=Ut.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});be.addEventListener("click",()=>{hn=!hn,ko()});he.addEventListener("click",()=>{Sn=!Sn,Fo()});On.addEventListener("click",()=>{wn=!wn,No()});ko();Fo();No();let ye=null;const qo=t=>Nt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,ic=document.querySelector("#toggleBodyOverlayScrollbarsSection"),En=document.querySelector("#toggleBodyOverlayScrollbarsButton"),Vo=()=>{ye===null&&(ye=!qo()),ic.style.display="",En.style.display="",En.textContent=`${ye?"Destroy":"Initialize"} Body OverlayScrollbars`};En.addEventListener("click",()=>{const t=Nt(document.body);t?(t.destroy(),ye=!1):ye=!qo(!0),Vo()});Vo();
