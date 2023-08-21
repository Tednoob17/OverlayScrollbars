(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.3.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function N(t,e){if(Be(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&N(Object.keys(t),n=>e(t[n],n,t));return t}function st(t,e){const n=Rt(e);if(gt(e)||n){let s=n?"":{};if(t){const c=window.getComputedStyle(t,null);s=n?kn(t,c,e):e.reduce((r,i)=>(r[i]=kn(t,c,i),r),s)}return s}t&&N(dt(e),s=>cs(t,s,e[s]))}const bt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const i=(u,y)=>{const f=c,p=u,C=y||(o?!o(f,p):f!==p);return(C||s)&&(c=p,r=f),[c,C,r]};return[e?u=>i(e(c,r),u):i,u=>[c,!!u,r]]},de=()=>typeof window<"u",ao=de()&&Node.ELEMENT_NODE,{toString:Vo,hasOwnProperty:Ve}=Object.prototype,Tt=t=>t===void 0,ze=t=>t===null,jo=t=>Tt(t)||ze(t)?`${t}`:Vo.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),kt=t=>typeof t=="number",Rt=t=>typeof t=="string",bn=t=>typeof t=="boolean",wt=t=>typeof t=="function",gt=t=>Array.isArray(t),re=t=>typeof t=="object"&&!gt(t)&&!ze(t),Be=t=>{const e=!!t&&t.length,n=kt(e)&&e>-1&&e%1==0;return gt(t)||!wt(t)&&n?e>0&&re(t)?e-1 in t:!0:!1},tn=t=>{if(!t||!re(t)||jo(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=Ve.call(t,n),r=s&&Ve.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return Tt(e)||Ve.call(t,e)},se=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===ao:!1},Ie=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===ao:!1},vn=(t,e,n)=>t.indexOf(e,n),G=(t,e,n)=>(!n&&!Rt(e)&&Be(e)?Array.prototype.push.apply(t,e):t.push(e),t),Vt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{G(n,o)}):N(t,o=>{G(n,o)}),n)},mn=t=>!!t&&t.length===0,$t=(t,e,n)=>{N(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Me=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),dt=t=>t?Object.keys(t):[],Z=(t,e,n,o,s,c,r)=>{const i=[e,n,o,s,c,r];return(typeof t!="object"||ze(t))&&!wt(t)&&(t={}),N(i,l=>{N(dt(l),a=>{const u=l[a];if(t===u)return!0;const y=gt(u);if(u&&(tn(u)||y)){const f=t[a];let p=f;y&&!gt(f)?p=[]:!y&&!tn(f)&&(p={}),t[a]=Z(p,u)}else t[a]=u})}),t},wn=t=>{for(const e in t)return!1;return!0},uo=(t,e,n,o)=>{if(Tt(o))return n?n[t]:e;n&&(Rt(o)||kt(o))&&(n[t]=o)},ot=(t,e,n)=>{if(Tt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},lt=(t,e)=>{t&&t.removeAttribute(e)},Nt=(t,e,n,o)=>{if(n){const s=ot(t,e)||"",c=new Set(s.split(" "));c[o?"add":"delete"](n);const r=Vt(c).join(" ").trim();ot(t,e,r)}},Yo=(t,e,n)=>{const o=ot(t,e)||"";return new Set(o.split(" ")).has(n)},mt=(t,e)=>uo("scrollLeft",0,t,e),At=(t,e)=>uo("scrollTop",0,t,e),en=de()&&Element.prototype,fo=(t,e)=>{const n=[],o=e?Ie(e)?e:null:document;return o?G(n,o.querySelectorAll(t)):n},Xo=(t,e)=>{const n=e?Ie(e)?e:null:document;return n?n.querySelector(t):null},Le=(t,e)=>Ie(t)?(en.matches||en.msMatchesSelector).call(t,e):!1,Sn=t=>t?Vt(t.childNodes):[],Ht=t=>t?t.parentElement:null,Kt=(t,e)=>{if(Ie(t)){const n=en.closest;if(n)return n.call(t,e);do{if(Le(t,e))return t;t=Ht(t)}while(t)}return null},Go=(t,e,n)=>{const o=t&&Kt(t,e),s=t&&Xo(n,o),c=Kt(s,e)===o;return o&&s?o===t||s===t||c&&Kt(Kt(t,n),e)!==o:!1},xn=(t,e,n)=>{if(n&&t){let o=e,s;Be(n)?(s=document.createDocumentFragment(),N(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},pt=(t,e)=>{xn(t,null,e)},Ko=(t,e)=>{xn(Ht(t),t,e)},Bn=(t,e)=>{xn(Ht(t),t&&t.nextSibling,e)},Ct=t=>{if(Be(t))N(Vt(t),e=>Ct(e));else if(t){const e=Ht(t);e&&e.removeChild(t)}},Ut=t=>{const e=document.createElement("div");return t&&ot(e,"class",t),e},po=t=>{const e=Ut();return e.innerHTML=t.trim(),N(Sn(e),n=>Ct(n))},nn=t=>t.charAt(0).toUpperCase()+t.slice(1),Wo=()=>Ut().style,Jo=["-webkit-","-moz-","-o-","-ms-"],Zo=["WebKit","Moz","O","MS","webkit","moz","o","ms"],je={},Ye={},Qo=t=>{let e=Ye[t];if(Me(Ye,t))return e;const n=nn(t),o=Wo();return N(Jo,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,nn(c)+n].find(i=>o[i]!==void 0))}),Ye[t]=e||""},ne=t=>{if(de()){let e=je[t]||window[t];return Me(je,t)||(N(Zo,n=>(e=e||window[n+nn(t)],!e)),je[t]=e),e}},ts=ne("MutationObserver"),In=ne("IntersectionObserver"),Wt=ne("ResizeObserver"),go=ne("cancelAnimationFrame"),yo=ne("requestAnimationFrame"),on=ne("ScrollTimeline"),Ae=de()&&window.setTimeout,sn=de()&&window.clearTimeout,es=/[^\x20\t\r\n\f]+/g,ho=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&Rt(e)){const i=e.match(es)||[];for(r=i.length>0;s=i[c++];)r=!!n(o,s)&&r}return r},On=(t,e)=>{ho(t,e,(n,o)=>n.remove(o))},Pt=(t,e)=>(ho(t,e,(n,o)=>n.add(o)),On.bind(0,t,e)),ke=(t,e,n,o)=>{if(t&&e){let s=!0;return N(n,c=>{const r=o?o(t[c]):t[c],i=o?o(e[c]):e[c];r!==i&&(s=!1)}),s}return!1},bo=(t,e)=>ke(t,e,["w","h"]),vo=(t,e)=>ke(t,e,["x","y"]),ns=(t,e)=>ke(t,e,["t","r","b","l"]),Mn=(t,e,n)=>ke(t,e,["width","height"],n&&(o=>Math.round(o))),ut=()=>{},Ft=t=>{let e;const n=t?Ae:yo,o=t?sn:go;return[s=>{o(e),e=n(s,wt(t)?t():t)},()=>o(e)]},En=(t,e)=>{let n,o,s,c=ut;const{g:r,v:i,p:l}=e||{},a=function(C){c(),sn(n),n=o=void 0,c=ut,t.apply(this,C)},u=p=>l&&o?l(o,p):p,y=()=>{c!==ut&&a(u(s)||s)},f=function(){const C=Vt(arguments),b=wt(r)?r():r;if(kt(b)&&b>=0){const H=wt(i)?i():i,d=kt(H)&&H>=0,v=b>0?Ae:yo,A=b>0?sn:go,q=u(C)||C,D=a.bind(0,q);c();const M=v(D,b);c=()=>A(M),d&&!n&&(n=Ae(y,H)),o=s=q}else a(C)};return f.m=y,f},os={opacity:1,zIndex:1},be=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},ss=(t,e)=>!os[t]&&kt(e)?`${e}px`:e,kn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),cs=(t,e,n)=>{try{const{style:o}=t;Tt(o[e])?o.setProperty(e,n):o[e]=ss(e,n)}catch{}},le=t=>st(t,"direction")==="rtl",Rn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,a=st(t,[c,r,i,l]);return{t:be(a[c],!0),r:be(a[r],!0),b:be(a[i],!0),l:be(a[l],!0)}},ee=(t,e)=>`translate${gt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:_n}=Math,Cn={w:0,h:0},ie=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:Cn,$e=t=>t?{w:t.clientWidth,h:t.clientHeight}:Cn,Pe=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:Cn,He=t=>{const e=parseFloat(st(t,"height"))||0,n=parseFloat(st(t,"width"))||0;return{w:n-_n(n),h:e-_n(e)}},Et=t=>t.getBoundingClientRect(),Jt=t=>!!(t&&(t.height||t.width));let ve;const rs=()=>{if(Tt(ve)){ve=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){ve=!0}}))}catch{}}return ve},mo=t=>t.split(" "),ls=(t,e,n,o)=>{N(mo(e),s=>{t.removeEventListener(s,n,o)})},tt=(t,e,n,o)=>{var s;const c=rs(),r=(s=c&&o&&o.S)!=null?s:c,i=o&&o.$||!1,l=o&&o.C||!1,a=[],u=c?{passive:r,capture:i}:i;return N(mo(e),y=>{const f=l?p=>{t.removeEventListener(y,f,i),n&&n(p)}:n;G(a,ls.bind(null,t,y,f,i)),t.addEventListener(y,f,u)}),$t.bind(0,a)},wo=t=>t.stopPropagation(),So=t=>t.preventDefault(),is={x:0,y:0},Xe=t=>{const e=t?Et(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:is},Dn=(t,e)=>{N(gt(e)?e:[e],t)},$n=t=>{const e=new Map,n=(c,r)=>{if(c){const i=e.get(c);Dn(l=>{i&&i[l?"delete":"clear"](l)},r)}else e.forEach(i=>{i.clear()}),e.clear()},o=(c,r)=>{if(Rt(c)){const a=e.get(c)||new Set;return e.set(c,a),Dn(u=>{wt(u)&&a.add(u)},r),n.bind(0,c,r)}bn(r)&&r&&n();const i=dt(c),l=[];return N(i,a=>{const u=c[a];u&&G(l,o(a,u))}),$t.bind(0,l)},s=(c,r)=>{const i=e.get(c);N(Vt(i),l=>{r&&!mn(r)?l.apply(0,r):l()})};return o(t||{}),[o,n,s]},Fn=t=>JSON.stringify(t,(e,n)=>{if(wt(n))throw new Error;return n}),as={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},xo=(t,e)=>{const n={},o=dt(e).concat(dt(t));return N(o,s=>{const c=t[s],r=e[s];if(re(c)&&re(r))Z(n[s]={},xo(c,r)),wn(n[s])&&delete n[s];else if(Me(e,s)&&r!==c){let i=!0;if(gt(c)||gt(r))try{Fn(c)===Fn(r)&&(i=!1)}catch{}i&&(n[s]=r)}}),n},fe="data-overlayscrollbars",Oo="os-environment",Eo=`${Oo}-flexbox-glue`,us=`${Eo}-max`,Co="os-scrollbar-hidden",Ge=`${fe}-initialize`,vt=fe,$o=`${vt}-overflow-x`,Lo=`${vt}-overflow-y`,Qt="overflowVisible",ds="scrollbarHidden",qn="scrollbarPressed",Te="updating",It=`${fe}-viewport`,Ke="arrange",Ao="scrollbarHidden",te=Qt,cn=`${fe}-padding`,fs=te,Nn=`${fe}-content`,Ln="os-size-observer",ps=`${Ln}-appear`,gs=`${Ln}-listener`,ys="os-trinsic-observer",hs="os-no-css-vars",bs="os-theme-none",it="os-scrollbar",vs=`${it}-rtl`,ms=`${it}-horizontal`,ws=`${it}-vertical`,Po=`${it}-track`,An=`${it}-handle`,Ss=`${it}-visible`,xs=`${it}-cornerless`,Un=`${it}-transitionless`,Vn=`${it}-interaction`,jn=`${it}-unusable`,rn=`${it}-auto-hide`,Yn=`${rn}-hidden`,Xn=`${it}-wheel`,Os=`${Po}-interactive`,Es=`${An}-interactive`,Ho={},jt=()=>Ho,Cs=t=>{const e=[];return N(gt(t)?t:[t],n=>{const o=dt(n);N(o,s=>{G(e,Ho[s]=n[s])})}),e},$s="__osOptionsValidationPlugin",Ls="__osSizeObserverPlugin",Pn="__osScrollbarsHidingPlugin",As="__osClickScrollPlugin";let We;const Gn=(t,e,n,o)=>{pt(t,e);const s=$e(e),c=ie(e),r=He(n);return o&&Ct(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},Ps=t=>{let e=!1;const n=Pt(t,Co);try{e=st(t,Qo("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},Hs=(t,e)=>{const n="hidden";st(t,{overflowX:n,overflowY:n,direction:"rtl"}),mt(t,0);const o=Xe(t),s=Xe(e);mt(t,-999);const c=Xe(e);return{i:o.x===s.x,n:s.x!==c.x}},Ts=(t,e)=>{const n=Pt(t,Eo),o=Et(t),s=Et(e),c=Mn(s,o,!0),r=Pt(t,us),i=Et(t),l=Et(e),a=Mn(l,i,!0);return n(),r(),c&&a},zs=()=>{const{body:t}=document,n=po(`<div class="${Oo}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=$n(),[r,i]=bt({o:Gn(t,n,o),u:vo},Gn.bind(0,t,n,o,!0)),[l]=i(),a=Ps(n),u={x:l.x===0,y:l.y===0},y={elements:{host:null,padding:!a,viewport:d=>a&&d===d.ownerDocument.body&&d,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=Z({},as),p=Z.bind(0,{},f),C=Z.bind(0,{},y),b={k:l,I:u,A:a,H:st(n,"zIndex")==="-1",B:!!on,V:Hs(n,o),Y:Ts(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:C,F:d=>Z(y,d)&&C(),G:p,X:d=>Z(f,d)&&p(),U:Z({},y),W:Z({},f)},P=window.addEventListener,H=En(d=>c(d?"z":"r"),{g:33,v:99});if(lt(n,"style"),Ct(n),P("resize",H.bind(0,!1)),!a&&(!u.x||!u.y)){let d;P("resize",()=>{const v=jt()[Pn];d=d||v&&v.R(),d&&d(b,r,H.bind(0,!0))})}return b},at=()=>(We||(We=zs()),We),Hn=(t,e)=>wt(e)?e.apply(0,t):e,Bs=(t,e,n,o)=>{const s=Tt(o)?n:o;return Hn(t,s)||e.apply(0,t)},To=(t,e,n,o)=>{const s=Tt(o)?n:o,c=Hn(t,s);return!!c&&(se(c)?c:e.apply(0,t))},Is=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:c,A:r}=at(),{nativeScrollbarsOverlaid:i,body:l}=e,a=o??i,u=Tt(s)?l:s,y=(c.x||c.y)&&a,f=t&&(ze(u)?!r:u);return!!y||!!f},Tn=new WeakMap,Ms=(t,e)=>{Tn.set(t,e)},ks=t=>{Tn.delete(t)},zo=t=>Tn.get(t),Kn=(t,e)=>t?e.split(".").reduce((n,o)=>n&&Me(n,o)?n[o]:void 0,t):void 0,ln=(t,e,n)=>o=>[Kn(t,o),n||Kn(e,o)!==void 0],Bo=t=>{let e=t;return[()=>e,n=>{e=Z({},e,n)}]},me="tabindex",we=Ut.bind(0,""),Je=t=>{pt(Ht(t),Sn(t)),Ct(t)},Rs=t=>{const e=at(),{q:n,A:o}=e,s=jt()[Pn],c=s&&s.T,{elements:r}=n(),{host:i,padding:l,viewport:a,content:u}=r,y=se(t),f=y?{}:t,{elements:p}=f,{host:C,padding:b,viewport:P,content:H}=p||{},d=y?t:f.target,v=Le(d,"textarea"),A=d.ownerDocument,I=A.documentElement,q=d===A.body,D=A.defaultView,M=Bs.bind(0,[d]),R=To.bind(0,[d]),J=Hn.bind(0,[d]),U=M.bind(0,we,a),k=R.bind(0,we,u),h=U(P),g=h===d,m=g&&q,S=!g&&k(H),T=!g&&se(h)&&h===S,L=T&&!!J(u),x=L?U():h,$=L?S:k(),F=m?I:T?x:h,j=v?M(we,i,C):d,w=m?F:j,O=T?$:S,E=A.activeElement,_=!g&&D.top===D&&E===d,z={Z:d,J:w,K:F,tt:!g&&R(we,l,b),nt:O,ot:!g&&!o&&c&&c(e),st:m?I:F,et:m?A:F,ct:D,rt:A,lt:v,it:q,ut:y,ft:g,dt:T,_t:(et,ct)=>Yo(F,g?vt:It,g?ct:et),ht:(et,ct,rt)=>Nt(F,g?vt:It,g?ct:et,rt)},Y=dt(z).reduce((et,ct)=>{const rt=z[ct];return G(et,rt&&se(rt)&&!Ht(rt)?rt:!1)},[]),K=et=>et?vn(Y,et)>-1:null,{Z:W,J:Q,tt:X,K:V,nt,ot:yt}=z,ft=[()=>{lt(Q,vt),lt(Q,Ge),lt(W,Ge),q&&(lt(I,vt),lt(I,Ge))}],zt=v&&K(Q);let _t=v?W:Sn([nt,V,X,Q,W].find(et=>K(et)===!1));const Xt=m?W:nt||V;return[z,()=>{ot(Q,vt,g?"viewport":"host"),ot(X,cn,""),ot(nt,Nn,""),g||ot(V,It,"");const et=q&&!g?Pt(Ht(d),Co):ut;if(zt&&(Bn(W,Q),G(ft,()=>{Bn(Q,W),Ct(Q)})),pt(Xt,_t),pt(Q,X),pt(X||Q,!g&&V),pt(V,nt),G(ft,()=>{et(),lt(X,cn),lt(nt,Nn),lt(V,$o),lt(V,Lo),lt(V,It),K(nt)&&Je(nt),K(V)&&Je(V),K(X)&&Je(X)}),o&&!g&&(Nt(V,It,Ao,!0),G(ft,lt.bind(0,V,It))),yt&&(Ko(V,yt),G(ft,Ct.bind(0,yt))),_){const ct=ot(V,me);ot(V,me,"-1"),V.focus();const rt=()=>ct?ot(V,me,ct):lt(V,me),ht=tt(A,"pointerdown keydown",()=>{rt(),ht()});G(ft,[rt,ht])}else E&&E.focus&&E.focus();_t=0},$t.bind(0,ft)]},_s=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:c}=at(),{gt:r}=o(),{vt:i}=s,l=(n||!c)&&i;return l&&st(n,{height:r?"":"100%"}),{wt:l,bt:l}}},Ds=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ft:i}=t,[l,a]=bt({u:ns,o:Rn()},Rn.bind(0,s,"padding",""));return(u,y,f)=>{let[p,C]=a(f);const{A:b,Y:P}=at(),{yt:H}=n(),{wt:d,bt:v,St:A}=u,[I,q]=y("paddingAbsolute");(d||C||!P&&v)&&([p,C]=l(f));const M=!i&&(q||A||C);if(M){const R=!I||!c&&!b,J=p.r+p.l,U=p.t+p.b,k={marginRight:R&&!H?-J:0,marginBottom:R?-U:0,marginLeft:R&&H?-J:0,top:R?-p.t:0,right:R?H?-p.r:"auto":0,left:R?H?"auto":-p.l:0,width:R?`calc(100% + ${J}px)`:""},h={paddingTop:R?p.t:0,paddingRight:R?p.r:0,paddingBottom:R?p.b:0,paddingLeft:R?p.l:0};st(c||r,k),st(r,h),o({tt:p,$t:!R,P:c?h:Z({},k,h)})}return{xt:M}}},{max:an}=Math,Mt=an.bind(0,0),Io="visible",Wn="hidden",Fs=42,Se={u:bo,o:{w:0,h:0}},qs={u:vo,o:{x:Wn,y:Wn}},Ns=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Mt(t.w-e.w),h:Mt(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},xe=t=>t.indexOf(Io)===0,Us=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ot:i,ft:l,ht:a,it:u,ct:y}=t,{k:f,Y:p,A:C,I:b}=at(),P=jt()[Pn],H=!l&&!C&&(b.x||b.y),d=u&&l,[v,A]=bt(Se,He.bind(0,r)),[I,q]=bt(Se,Pe.bind(0,r)),[D,M]=bt(Se),[R,J]=bt(Se),[U]=bt(qs),k=(L,x)=>{if(st(r,{height:""}),x){const{$t:$,tt:B}=n(),{Ct:F,M:j}=L,w=He(s),O=$e(s),E=st(r,"boxSizing")==="content-box",_=$||E?B.b+B.t:0,z=!(b.x&&E);st(r,{height:O.h+w.h+(F.x&&z?j.x:0)-_})}},h=(L,x)=>{const $=!C&&!L?Fs:0,B=(K,W,Q)=>{const X=st(r,K),nt=(x?x[K]:X)==="scroll";return[X,nt,nt&&!C?W?$:Q:0,W&&!!$]},[F,j,w,O]=B("overflowX",b.x,f.x),[E,_,z,Y]=B("overflowY",b.y,f.y);return{Ot:{x:F,y:E},Ct:{x:j,y:_},M:{x:w,y:z},D:{x:O,y:Y}}},g=(L,x,$,B)=>{const F=(_,z)=>{const Y=xe(_),K=z&&Y&&_.replace(`${Io}-`,"")||"";return[z&&!Y?_:"",xe(K)?"hidden":K]},[j,w]=F($.x,x.x),[O,E]=F($.y,x.y);return B.overflowX=w&&O?w:j,B.overflowY=E&&j?E:O,h(L,B)},m=(L,x,$,B)=>{const{M:F,D:j}=L,{x:w,y:O}=j,{x:E,y:_}=F,{P:z}=n(),Y=x?"marginLeft":"marginRight",K=x?"paddingLeft":"paddingRight",W=z[Y],Q=z.marginBottom,X=z[K],V=z.paddingBottom;B.width=`calc(100% + ${_+-1*W}px)`,B[Y]=-_+W,B.marginBottom=-E+Q,$&&(B[K]=X+(O?_:0),B.paddingBottom=V+(w?E:0))},[S,T]=P?P.L(H,p,r,i,n,h,m):[()=>H,()=>[ut]];return(L,x,$)=>{const{wt:B,Tt:F,bt:j,xt:w,vt:O,St:E}=L,{gt:_,yt:z}=n(),[Y,K]=x("showNativeOverlaidScrollbars"),[W,Q]=x("overflow"),X=Y&&b.x&&b.y,V=!l&&!p&&(B||j||F||K||O),nt=xe(W.x),yt=xe(W.y),ft=nt||yt;let zt=A($),_t=q($),Xt=M($),Gt=J($),et;if(K&&C&&a(Ao,ds,!X),V&&(et=h(X),k(et,_)),B||w||j||E||K){ft&&a(te,Qt,!1);const[Lt,Bt]=T(X,z,et),[xt,he]=zt=v($),[Ot,oe]=_t=I($),Dt=$e(r);let Ne=Ot,Ue=Dt;Lt(),(oe||he||K)&&Bt&&!X&&S(Bt,Ot,xt,z)&&(Ue=$e(r),Ne=Pe(r));const Uo={w:Mt(an(Ot.w,Ne.w)+xt.w),h:Mt(an(Ot.h,Ne.h)+xt.h)},zn={w:Mt((d?y.innerWidth:Ue.w+Mt(Dt.w-Ot.w))+xt.w),h:Mt((d?y.innerHeight+xt.h:Ue.h+Mt(Dt.h-Ot.h))+xt.h)};Gt=R(zn),Xt=D(Ns(Uo,zn),$)}const[ct,rt]=Gt,[ht,pe]=Xt,[Re,_e]=_t,[De,Fe]=zt,St={x:ht.w>0,y:ht.h>0},ge=nt&&yt&&(St.x||St.y)||nt&&St.x&&!St.y||yt&&St.y&&!St.x;if(w||E||Fe||_e||rt||pe||Q||K||V){const Lt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Bt=g(X,St,W,Lt),xt=S(Bt,Re,De,z);l||m(Bt,z,xt,Lt),V&&k(Bt,_),l?(ot(s,$o,Lt.overflowX),ot(s,Lo,Lt.overflowY)):st(r,Lt)}Nt(s,vt,Qt,ge),Nt(c,cn,fs,ge),l||Nt(r,It,te,ft);const[qe,ye]=U(h(X).Ot);return o({Ot:qe,zt:{x:ct.w,y:ct.h},Et:{x:ht.w,y:ht.h},At:St}),{It:ye,Ht:rt,Lt:pe}}},Jn=(t,e,n)=>{const o={},s=e||{},c=dt(t).concat(dt(s));return N(c,r=>{const i=t[r],l=s[r];o[r]=!!(n||i||l)}),o},Vs=(t,e)=>{const{Z:n,K:o,ht:s,ft:c}=t,{A:r,I:i,Y:l}=at(),a=!r&&(i.x||i.y),u=[_s(t,e),Ds(t,e),Us(t,e)];return(y,f,p)=>{const C=Jn(Z({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},f),{},p),b=a||!l,P=b&&mt(o),H=b&&At(o);s("",Te,!0);let d=C;return N(u,v=>{d=Jn(d,v(d,y,!!p)||{},p)}),mt(o,P),At(o,H),s("",Te),c||(mt(n,0),At(n,0)),d}},js=(t,e,n)=>{let o,s=!1;const c=()=>{s=!0},r=i=>{if(n){const l=n.reduce((a,u)=>{if(u){const[y,f]=u,p=f&&y&&(i?i(y):fo(y,t));p&&p.length&&f&&Rt(f)&&G(a,[p,f.trim()],!0)}return a},[]);N(l,a=>N(a[0],u=>{const y=a[1],f=o.get(u)||[];if(t.contains(u)){const C=tt(u,y,b=>{s?(C(),o.delete(u)):e(b)});o.set(u,G(f,C))}else $t(f),o.delete(u)}))}};return n&&(o=new WeakMap,r()),[c,r]},Zn=(t,e,n,o)=>{let s=!1;const{Mt:c,Dt:r,Rt:i,kt:l,Bt:a,Vt:u}=o||{},y=En(()=>{s&&n(!0)},{g:33,v:99}),[f,p]=js(t,y,i),C=c||[],b=r||[],P=C.concat(b),H=(v,A)=>{const I=a||ut,q=u||ut,D=new Set,M=new Set;let R=!1,J=!1;if(N(v,U=>{const{attributeName:k,target:h,type:g,oldValue:m,addedNodes:S,removedNodes:T}=U,L=g==="attributes",x=g==="childList",$=t===h,B=L&&Rt(k)?ot(h,k):0,F=B!==0&&m!==B,j=vn(b,k)>-1&&F;if(e&&(x||!$)){const w=!L,O=L&&F,E=O&&l&&Le(h,l),z=(E?!I(h,k,m,B):w||O)&&!q(U,!!E,t,o);N(S,Y=>D.add(Y)),N(T,Y=>D.add(Y)),J=J||z}!e&&$&&F&&!I(h,k,m,B)&&(M.add(k),R=R||j)}),D.size>0&&p(U=>Vt(D).reduce((k,h)=>(G(k,fo(U,h)),Le(h,U)?G(k,h):k),[])),e)return!A&&J&&n(!1),[!1];if(M.size>0||R){const U=[Vt(M),R];return!A&&n.apply(0,U),U}},d=new ts(v=>H(v));return d.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(f(),d.disconnect(),s=!1)},()=>{if(s){y.m();const v=d.takeRecords();return!mn(v)&&H(v,!0)}}]},Oe=3333333,Mo=(t,e,n)=>{const{Yt:o=!1,Pt:s=!1}=n||{},c=jt()[Ls],{V:r}=at(),l=po(`<div class="${Ln}"><div class="${gs}"></div></div>`)[0],a=l.firstChild,u=le.bind(0,t),[y]=bt({o:void 0,_:!0,u:(b,P)=>!(!b||!Jt(b)&&Jt(P))}),f=b=>{const P=gt(b)&&b.length>0&&re(b[0]),H=!P&&bn(b[0]);let d=!1,v=!1,A=!0;if(P){const[I,,q]=y(b.pop().contentRect),D=Jt(I),M=Jt(q);d=!q&&!!M||!D,v=!M&&D,A=!d}else H?[,A]=b:v=b===!0;if(o&&A){const I=H?b[0]:le(l);mt(l,I?r.n?-Oe:r.i?0:Oe:Oe),At(l,Oe)}d||e({wt:!H,jt:H?b:void 0,Pt:!!v})},p=[];let C=s?f:!1;return[()=>{$t(p),Ct(l)},()=>{if(Wt){const b=new Wt(f);b.observe(a),G(p,()=>{b.disconnect()})}else if(c){const[b,P]=c.O(a,f,s);C=b,G(p,P)}if(o){const[b]=bt({o:void 0},u);G(p,tt(l,"scroll",P=>{const H=b(),[d,v,A]=H;v&&(On(a,"ltr rtl"),d?Pt(a,"rtl"):Pt(a,"ltr"),f([!!d,v,A])),wo(P)}))}C&&(Pt(l,ps),G(p,tt(l,"animationstart",C,{C:!!Wt}))),(Wt||c)&&pt(t,l)}]},Ys=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,Xs=(t,e)=>{let n;const o=Ut(ys),s=[],[c]=bt({o:!1}),r=(l,a)=>{if(l){const u=c(Ys(l)),[,y]=u;if(y)return!a&&e(u),[u]}},i=(l,a)=>{if(l&&l.length>0)return r(l.pop(),a)};return[()=>{$t(s),Ct(o)},()=>{if(In)n=new In(l=>i(l),{root:t}),n.observe(o),G(s,()=>{n.disconnect()});else{const l=()=>{const y=ie(o);r(y)},[a,u]=Mo(o,l);G(s,a),u(),l()}pt(t,o)},()=>{if(n)return i(n.takeRecords(),!0)}]},Qn=`[${vt}]`,Gs=`[${It}]`,Ze=["tabindex"],to=["wrap","cols","rows"],Qe=["id","class","style","open"],Ks=(t,e,n)=>{let o,s,c;const{J:r,K:i,nt:l,lt:a,ft:u,_t:y,ht:f}=t,{Y:p}=at(),[C]=bt({u:bo,o:{w:0,h:0}},()=>{const m=y(te,Qt),S=y(Ke,""),T=S&&mt(i),L=S&&At(i);f(te,Qt),f(Ke,""),f("",Te,!0);const x=Pe(l),$=Pe(i),B=He(i);return f(te,Qt,m),f(Ke,"",S),f("",Te),mt(i,T),At(i,L),{w:$.w+x.w+B.w,h:$.h+x.h+B.h}}),b=a?to:Qe.concat(to),P=En(n,{g:()=>o,v:()=>s,p(m,S){const[T]=m,[L]=S;return[dt(T).concat(dt(L)).reduce((x,$)=>(x[$]=T[$]||L[$],x),{})]}}),H=m=>{N(m||Ze,S=>{if(vn(Ze,S)>-1){const T=ot(r,S);Rt(T)?ot(i,S,T):lt(i,S)}})},d=(m,S)=>{const[T,L]=m,x={vt:L};return e({gt:T}),!S&&n(x),x},v=({wt:m,jt:S,Pt:T})=>{const L=!m||T?n:P;let x=!1;if(S){const[$,B]=S;x=B,e({yt:$})}L({wt:m,Pt:T,St:x})},A=(m,S)=>{const[,T]=C(),L={bt:T};return T&&!S&&(m?n:P)(L),L},I=(m,S,T)=>{const L={Tt:S};return S?!T&&P(L):u||H(m),L},[q,D,M]=l||!p?Xs(r,d):[ut,ut,ut],[R,J]=u?[ut,ut]:Mo(r,v,{Pt:!0,Yt:!0}),[U,k]=Zn(r,!1,I,{Dt:Qe,Mt:Qe.concat(Ze)});let h;const g=u&&Wt&&new Wt(m=>{const S=m[m.length-1].contentRect,T=Jt(S),x=!Jt(h)&&T;v({wt:!0,Pt:x}),h=S});return g&&g.observe(r),H(),[()=>{q(),R(),c&&c[0](),g&&g.disconnect(),U()},()=>{J(),D()},()=>{const m={},S=k(),T=M(),L=c&&c[1]();return S&&Z(m,I.apply(0,G(S,!0))),T&&Z(m,d.apply(0,G(T,!0))),L&&Z(m,A.apply(0,G(L,!0))),m},m=>{const[S]=m("update.ignoreMutation"),[T,L]=m("update.attributes"),[x,$]=m("update.elementEvents"),[B,F]=m("update.debounce"),j=$||L,w=O=>wt(S)&&S(O);if(j&&(c&&(c[1](),c[0]()),c=Zn(l||i,!0,A,{Mt:b.concat(T||[]),Rt:x,kt:Qn,Vt:(O,E)=>{const{target:_,attributeName:z}=O;return(!E&&z&&!u?Go(_,Qn,Gs):!1)||!!Kt(_,`.${it}`)||!!w(O)}})),F)if(P.m(),gt(B)){const O=B[0],E=B[1];o=kt(O)&&O,s=kt(E)&&E}else kt(B)?(o=B,s=!1):(o=!1,s=!1)}]},eo={x:0,y:0},Ws=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:eo,Et:eo,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:le(t.J)}),Js=(t,e)=>{const n=ln(e,{}),[o,s,c]=$n(),[r,i,l]=Rs(t),a=Bo(Ws(r)),[u,y]=a,f=Vs(r,a),p=(v,A,I)=>{const D=dt(v).some(M=>!!v[M])||!wn(A)||I;return D&&c("u",[v,A,I]),D},[C,b,P,H]=Ks(r,y,v=>p(f(n,v),{},!1)),d=u.bind(0);return d.Nt=v=>o("u",v),d.qt=()=>{const{Z:v,K:A,rt:I,it:q}=r,D=q?I.documentElement:v,M=mt(D),R=At(D);b(),i(),mt(A,M),At(A,R)},d.Ft=r,[(v,A)=>{const I=ln(e,v,A);return H(I),p(f(I,P(),A),v,!!A)},d,()=>{s(),C(),l()}]},{round:no}=Math,Zs=t=>{const{width:e,height:n}=Et(t),{w:o,h:s}=ie(t);return{x:no(e)/o||1,y:no(n)/s||1}},Qs=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:c,pointerType:r}=t,{pointers:i}=o;return s===0&&c&&o[n?"dragScroll":"clickScroll"]&&(i||[]).includes(r)},oo="pointerup pointerleave pointercancel lostpointercapture",tc=t=>({transform:[ee("0%",t),ee("-100%",t)],[t?"left":"top"]:["0%","100%"]}),ec=(t,e)=>tt(t,"mousedown",tt.bind(0,e,"click",wo,{C:!0,$:!0}),{$:!0}),nc=(t,e,n,o,s,c,r)=>{const{V:i}=at(),{Gt:l,Xt:a,Ut:u}=o,y=`scroll${r?"Left":"Top"}`,f=`client${r?"X":"Y"}`,p=r?"width":"height",C=r?"left":"top",b=r?"w":"h",P=r?"x":"y",H=(d,v)=>A=>{const{Et:I}=c(),q=ie(a)[b]-ie(l)[b],M=v*A/q*I[P],J=le(u)&&r?i.n||i.i?1:-1:1;s[y]=d+M*J};return tt(a,"pointerdown",d=>{const v=Kt(d.target,`.${An}`)===l,A=v?l:a;if(Nt(e,vt,qn,!0),Qs(d,t,v)){const I=!v&&d.shiftKey,q=()=>Et(l),D=()=>Et(a),M=(x,$)=>(x||q())[C]-($||D())[C],R=H(s[y]||0,1/Zs(s)[P]),J=d[f],U=q(),k=D(),h=U[p],g=M(U,k)+h/2,m=J-k[C],S=v?0:m-g,T=x=>{$t(L),A.releasePointerCapture(x.pointerId)},L=[Nt.bind(0,e,vt,qn),tt(n,oo,T),tt(n,"selectstart",x=>So(x),{S:!1}),tt(a,oo,T),tt(a,"pointermove",x=>{const $=x[f]-J;(v||I)&&R(S+$)})];if(I)R(S);else if(!v){const x=jt()[As];x&&G(L,x.O(R,M,S,h,m))}A.setPointerCapture(d.pointerId)}})},oc=({Gt:t},e,n)=>{if(!e)return ut;const o=t.animate(tc(n),{timeline:e});return()=>{o.cancel()}},sc=(t,e)=>(n,o,s,c,r,i,l)=>{const{Ut:a}=n,[u,y]=Ft(333),f=!!r.scrollBy;let p=!0;return $t.bind(0,[tt(a,"pointerenter",()=>{o(Vn,!0)}),tt(a,"pointerleave pointercancel",()=>{o(Vn)}),tt(a,"wheel",C=>{const{deltaX:b,deltaY:P,deltaMode:H}=C;f&&p&&H===0&&Ht(a)===c&&r.scrollBy({left:b,top:P,behavior:"smooth"}),p=!1,o(Xn,!0),u(()=>{p=!0,o(Xn)}),So(C)},{S:!1,$:!0}),ec(a,s),nc(t,c,s,n,r,e,l),oc(n,i,l),y])},{min:un,max:so,abs:cc,round:rc}=Math,ko=(t,e,n,o)=>{if(o){const i=n?"x":"y",{Et:l,zt:a}=o,u=a[i],y=l[i];return so(0,un(1,u/(u+y)))}const s=n?"width":"height",c=Et(t)[s],r=Et(e)[s];return so(0,un(1,c/r))},lc=(t,e,n,o,s,c)=>{const{V:r}=at(),i=c?"x":"y",l=c?"Left":"Top",{Et:a}=o,u=rc(a[i]),y=cc(n[`scroll${l}`]),f=c&&s,p=r.i?y:u-y,b=un(1,(f?p:y)/u),P=ko(t,e,c);return 1/P*(1-P)*b},ic=t=>`${Math.max(0,t-.5)}px`,co=(t,e,n,o)=>t.animate({transform:[ee("0px",o),ee(ic(n),o)]},{timeline:e,composite:"add"}),ro=(t,e)=>on?new on({source:t,axis:e}):null,ac=(t,e,n)=>{const{q:o,H:s}=at(),{scrollbars:c}=o(),{slot:r}=c,{rt:i,Z:l,J:a,K:u,ut:y,st:f,it:p,ft:C}=e,{scrollbars:b}=y?{}:t,{slot:P}=b||{},H=new Map,d=ro(f,"x"),v=ro(f,"y"),A=To([l,a,u],()=>C&&p?l:a,r,P),I=w=>C&&!p&&Ht(w)===u,q=()=>{H.forEach(w=>{(w||[]).forEach(O=>{O.cancel()})})},D=(w,O,E)=>{const _=E?Pt:On;N(w,z=>{_(z.Ut,O)})},M=(w,O)=>{N(w,E=>{const[_,z]=O(E);st(_,z)})},R=(w,O,E)=>{M(w,_=>{const{Gt:z,Xt:Y}=_;return[z,{[E?"width":"height"]:`${(100*ko(z,Y,E,O)).toFixed(3)}%`}]})},J=(w,O,E)=>{!v&&!v&&M(w,_=>{const{Gt:z,Xt:Y,Ut:K}=_,W=lc(z,Y,f,O,le(K),E);return[z,{transform:W===W?ee(`${(100*W).toFixed(3)}%`,E):""}]})},U=w=>{const{Ut:O}=w,E=I(O)&&O;return[E,{transform:E?ee([`${mt(f)}px`,`${At(f)}px`]):""}]},k=[],h=[],g=[],m=(w,O,E)=>{const _=bn(E),z=_?E:!0,Y=_?!E:!0;z&&D(h,w,O),Y&&D(g,w,O)},S=w=>{R(h,w,!0),R(g,w)},T=w=>{J(h,w,!0),J(g,w)},L=()=>{!v&&!v&&(C&&M(h,U),C&&M(g,U))},x=({Et:w})=>{q(),g.concat(h).forEach(({Ut:O})=>{I(O)&&H.set(O,[co(O,d,w.x,!0),co(O,v,w.y)])})},$=w=>{const O=w?ms:ws,E=w?h:g,_=mn(E)?Un:"",z=Ut(`${it} ${O} ${_}`),Y=Ut(Po),K=Ut(An),W={Ut:z,Xt:Y,Gt:K};return s||Pt(z,hs),pt(z,Y),pt(Y,K),G(E,W),G(k,[()=>{q(),H.clear()},Ct.bind(0,z),n(W,m,i,a,f,w?d:v,w)]),W},B=$.bind(0,!0),F=$.bind(0,!1),j=()=>{pt(A,h[0].Ut),pt(A,g[0].Ut),Ae(()=>{m(Un)},300)};return B(),F(),[{Wt:S,Zt:T,Jt:x,Kt:L,Qt:m,tn:{B:d,nn:h,sn:B,en:M.bind(0,h)},cn:{B:v,nn:g,sn:F,en:M.bind(0,g)}},j,$t.bind(0,k)]},uc=(t,e,n,o)=>{let s,c,r,i,l,a=0;const u=Bo({}),[y]=u,[f,p]=Ft(),[C,b]=Ft(),[P,H]=Ft(100),[d,v]=Ft(100),[A,I]=Ft(100),[q,D]=Ft(()=>a),[M,R,J]=ac(t,n.Ft,sc(e,n)),{J:U,et:k,it:h}=n.Ft,{Qt:g,Wt:m,Zt:S,Jt:T,Kt:L}=M,x=w=>{g(rn,w,!0),g(rn,w,!1)},$=(w,O)=>{if(D(),w)g(Yn);else{const E=()=>g(Yn,!0);a>0&&!O?q(E):E()}},B=()=>{i=c,i&&$(!0)},F=[H,D,v,I,b,p,J,tt(U,"pointerover",B,{C:!0}),tt(U,"pointerenter",B),tt(U,"pointerleave",()=>{i=!1,c&&$(!1)}),tt(U,"pointermove",()=>{s&&f(()=>{H(),$(!0),d(()=>{s&&$(!1)})})}),tt(k,"scroll",w=>{C(()=>{S(n()),r&&$(!0),P(()=>{r&&!i&&$(!1)})}),o(w),L()})],j=y.bind(0);return j.Ft=M,j.qt=R,[(w,O,E)=>{const{Ht:_,Lt:z,It:Y,St:K,Pt:W}=E,{I:Q}=at(),X=ln(e,w,O),V=n(),{Et:nt,Ot:yt,yt:ft,At:zt}=V,[_t,Xt]=X("showNativeOverlaidScrollbars"),[Gt,et]=X("scrollbars.theme"),[ct,rt]=X("scrollbars.visibility"),[ht,pe]=X("scrollbars.autoHide"),[Re,_e]=X("scrollbars.autoHideSuspend"),[De]=X("scrollbars.autoHideDelay"),[Fe,St]=X("scrollbars.dragScroll"),[ge,qe]=X("scrollbars.clickScroll"),ye=W&&!O,Lt=_||z||K,Bt=Y||rt,xt=_t&&Q.x&&Q.y,he=(Ot,oe)=>{const Dt=ct==="visible"||ct==="auto"&&Ot==="scroll";return g(Ss,Dt,oe),Dt};if(a=De,Xt&&g(bs,xt),et&&(g(l),g(Gt,!0),l=Gt),(_e||ye)&&(Re&&ye&&(zt.x||zt.y)?(x(!1),A(()=>F.push(tt(k,"scroll",x.bind(0,!0),{C:!0})))):x(!0)),pe&&(s=ht==="move",c=ht==="leave",r=ht!=="never",$(!r,!0)),St&&g(Es,Fe),qe&&g(Os,ge),Bt){const Ot=he(yt.x,!0),oe=he(yt.y,!1);g(xs,!(Ot&&oe))}Lt&&(m(V),S(V),T(V),L(),g(jn,!nt.x,!0),g(jn,!nt.y,!1),g(vs,ft&&!h))},j,$t.bind(0,F)]},Ro=(t,e,n)=>{wt(t)&&t(e||void 0,n||void 0)},Yt=(t,e,n)=>{const{G:o,q:s,j:c,N:r}=at(),i=jt(),l=se(t),a=l?t:t.target,u=zo(a);if(e&&!u){let y=!1;const f=h=>{const g=jt()[$s],m=g&&g.O;return m?m(h,!0):h},p=Z({},o(),f(e)),[C,b,P]=$n(n),[H,d,v]=Js(t,p),[A,I,q]=uc(t,p,d,h=>P("scroll",[k,h])),D=(h,g)=>H(h,!!g),M=D.bind(0,{},!0),R=c(M),J=r(M),U=h=>{ks(a),R(),J(),q(),v(),y=!0,P("destroyed",[k,!!h]),b()},k={options(h,g){if(h){const m=g?o():{},S=xo(p,Z(m,f(h)));wn(S)||(Z(p,S),D(S))}return Z({},p)},on:C,off:(h,g)=>{h&&g&&b(h,g)},state(){const{zt:h,Et:g,Ot:m,At:S,tt:T,$t:L,yt:x}=d();return Z({},{overflowEdge:h,overflowAmount:g,overflowStyle:m,hasOverflow:S,padding:T,paddingAbsolute:L,directionRTL:x,destroyed:y})},elements(){const{Z:h,J:g,tt:m,K:S,nt:T,st:L,et:x}=d.Ft,{tn:$,cn:B}=I.Ft,F=w=>{const{Gt:O,Xt:E,Ut:_}=w;return{scrollbar:_,track:E,handle:O}},j=w=>{const{nn:O,sn:E}=w,_=F(O[0]);return Z({},_,{clone:()=>{const z=F(E());return A({},!0,{}),z}})};return Z({},{target:h,host:g,padding:m||S,viewport:S,content:T||S,scrollOffsetElement:L,scrollEventElement:x,scrollbarHorizontal:j($),scrollbarVertical:j(B)})},update:h=>D({},h),destroy:U.bind(0)};return d.Nt((h,g,m)=>{A(g,m,h)}),Ms(a,k),N(dt(i),h=>Ro(i[h],0,k)),Is(d.Ft.it,s().cancel,!l&&t.cancel)?(U(!0),k):(d.qt(),I.qt(),P("initialized",[k]),d.Nt((h,g,m)=>{const{wt:S,St:T,vt:L,Ht:x,Lt:$,It:B,bt:F,Tt:j}=h;P("updated",[k,{updateHints:{sizeChanged:S,directionChanged:T,heightIntrinsicChanged:L,overflowEdgeChanged:x,overflowAmountChanged:$,overflowStyleChanged:B,contentMutation:F,hostMutation:j},changedOptions:g,force:m}])}),k.update(!0),k)}return u};Yt.plugin=t=>{N(Cs(t),e=>Ro(e,Yt))};Yt.valid=t=>{const e=t&&t.elements,n=wt(e)&&e();return tn(n)&&!!zo(n.target)};Yt.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:c,B:r,U:i,W:l,q:a,F:u,G:y,X:f}=at();return Z({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:i,staticDefaultOptions:l,getDefaultInitialization:a,setDefaultInitialization:u,getDefaultOptions:y,setDefaultOptions:f})};const dc=document.querySelector("#eventsSection"),lo=document.querySelector("#events"),fc=t=>{dc.style.display="",lo.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,lo.append(o)})},pc=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,fc({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const i=e[r];e[r]=typeof i=="number"?i+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const l=new Set(t);l.delete(r),s(Array.from(l))},500)}};let qt,dn=!1,fn=!1,pn=!0;const Ee=pc(),Zt=document.querySelector("#target"),io=document.querySelector("#targetContent"),Ce=document.querySelector("#impostor"),gn=document.querySelector("#scrollButton"),ae=document.querySelector("#toggleContentButton"),ue=document.querySelector("#toggleElementButton"),yn=document.querySelector("#toggleOverlayScrollbarsButton"),_o=()=>{dn?(io.style.display="none",ae.textContent="Show Content"):(io.style.display="",ae.textContent="Hide Content")},Do=()=>{fn?(Zt.style.display="none",ue.textContent="Show Element"):(Zt.style.display="",ue.textContent="Hide Element")},Fo=()=>{var t,e;pn?((t=Ce.parentElement)==null||t.append(Zt),Ce.remove(),gn.style.display="",ae.style.display="",ue.style.display="",yn.textContent="Destroy OverlayScrollbars",qt=Yt(Zt,{},{initialized:()=>Ee("initialized"),destroyed:()=>Ee("destroyed"),updated:()=>Ee("updated"),scroll:()=>Ee("scroll")})):(qt==null||qt.destroy(),(e=Zt.parentElement)==null||e.append(Ce),Zt.remove(),Ce.style.display="",gn.style.display="none",ae.style.display="none",ue.style.display="none",yn.textContent="Initialize OverlayScrollbars")};gn.addEventListener("click",()=>{if(!qt)return;const{overflowAmount:t}=qt.state(),{scrollOffsetElement:e}=qt.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});ae.addEventListener("click",()=>{dn=!dn,_o()});ue.addEventListener("click",()=>{fn=!fn,Do()});yn.addEventListener("click",()=>{pn=!pn,Fo()});_o();Do();Fo();let ce=null;const qo=t=>Yt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,gc=document.querySelector("#toggleBodyOverlayScrollbarsSection"),hn=document.querySelector("#toggleBodyOverlayScrollbarsButton"),No=()=>{ce===null&&(ce=!qo()),gc.style.display="",hn.style.display="",hn.textContent=`${ce?"Destroy":"Initialize"} Body OverlayScrollbars`};hn.addEventListener("click",()=>{const t=Yt(document.body);t?t.destroy():qo(!0),ce=!ce,No()});No();
