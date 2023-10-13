"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{4197:function(t,e,r){let l,n;r.d(e,{E:function(){return rR},A:function(){return rH}});var o=r(2265);/*!
 * OverlayScrollbars
 * Version: 2.4.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let i=(t,e)=>{let r;let{o:l,u:n,_:o}=t,i=l,a=(t,e)=>{let l=i,a=e||(n?!n(l,t):l!==t);return(a||o)&&(i=t,r=l),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},a="undefined"!=typeof window,s=a&&Node.ELEMENT_NODE,{toString:u,hasOwnProperty:c}=Object.prototype,d=/^\[object (.+)\]$/,f=t=>void 0===t,p=t=>null===t,y=t=>f(t)||p(t)?`${t}`:u.call(t).replace(d,"$1").toLowerCase(),h=t=>"number"==typeof t,v=t=>"string"==typeof t,b=t=>"boolean"==typeof t,m=t=>"function"==typeof t,g=t=>Array.isArray(t),w=t=>"object"==typeof t&&!g(t)&&!p(t),x=t=>{let e=!!t&&t.length,r=h(e)&&e>-1&&e%1==0;return(!!g(t)||!m(t)&&!!r)&&(!(e>0&&w(t))||e-1 in t)},$=t=>{let e;if(!t||!w(t)||"object"!==y(t))return!1;let r="constructor",l=t[r],n=l&&l.prototype,o=c.call(t,r),i=n&&c.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(e in t);return f(e)||c.call(t,e)},E=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===s)},O=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===s)};function S(t,e){if(x(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&S(Object.keys(t),r=>e(t[r],r,t));return t}let k=(t,e)=>t.indexOf(e)>=0,z=(t,e,r)=>(!r&&!v(e)&&x(e)?Array.prototype.push.apply(t,e):t.push(e),t),C=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{z(r,t)}):S(t,t=>{z(r,t)}),r)},_=t=>!!t&&!t.length,A=t=>C(new Set(t)),I=(t,e,r)=>{S(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},H=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),R=t=>t?Object.keys(t):[],M=(t,e,r,l,n,o,i)=>{let a=[e,r,l,n,o,i];return("object"!=typeof t||p(t))&&!m(t)&&(t={}),S(a,e=>{S(e,(r,l)=>{let n=e[l];if(t===n)return!0;let o=g(n);if(n&&$(n)){let e=t[l],r=e;o&&!g(e)?r=[]:o||$(e)||(r={}),t[l]=M(r,n)}else t[l]=o?n.slice():n})}),t},N=t=>{for(let e in t)return!1;return!0},P=(t,e,r)=>{if(f(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},T=(t,e)=>new Set((P(t,e)||"").split(" ")),D=(t,e)=>{t&&t.removeAttribute(e)},L=(t,e,r,l)=>{if(r){let n=T(t,e);n[l?"add":"delete"](r);let o=C(n).join(" ").trim();P(t,e,o)}},F=(t,e,r)=>T(t,e).has(r),j=a&&Element.prototype,X=(t,e)=>{let r=[],l=e?O(e)&&e:document;return l?z(r,l.querySelectorAll(t)):r},V=(t,e)=>{let r=e?O(e)&&e:document;return r?r.querySelector(t):null},B=(t,e)=>{if(O(t)){let r=j.matches||j.msMatchesSelector;return r.call(t,e)}return!1},Y=t=>t?C(t.childNodes):[],q=t=>t&&t.parentElement,U=(t,e)=>{if(O(t)){let r=j.closest;if(r)return r.call(t,e);do{if(B(t,e))return t;t=q(t)}while(t)}},W=(t,e,r)=>{let l=U(t,e),n=t&&V(r,l),o=U(n,e)===l;return!!l&&!!n&&(l===t||n===t||o&&U(U(t,r),e)!==l)},G=()=>{},K=t=>{if(x(t))S(C(t),t=>K(t));else if(t){let e=q(t);e&&e.removeChild(t)}},J=(t,e,r)=>{if(r&&t){let l,n=e;return x(r)?(l=document.createDocumentFragment(),S(r,t=>{t===n&&(n=t.previousSibling),l.appendChild(t)})):l=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(l,n||null),()=>K(r)}return G},Q=(t,e)=>J(t,null,e),Z=(t,e)=>J(q(t),t,e),tt=(t,e)=>J(q(t),t&&t.nextSibling,e),te=t=>{let e=document.createElement("div");return P(e,"class",t),e},tr=t=>{let e=te();return e.innerHTML=t.trim(),S(Y(e),t=>K(t))},tl=a?window:{},tn=Math.max,to=Math.min,ti=Math.round,ta=tl.cancelAnimationFrame,ts=tl.requestAnimationFrame,tu=tl.setTimeout,tc=tl.clearTimeout,td=t=>t.charAt(0).toUpperCase()+t.slice(1),tf=()=>te().style,tp=["-webkit-","-moz-","-o-","-ms-"],ty=["WebKit","Moz","O","MS","webkit","moz","o","ms"],th={},tv={},tb=t=>{let e=tv[t];if(H(tv,t))return e;let r=td(t),l=tf();return S(tp,n=>{let o=n.replace(/-/g,""),i=[t,n+t,o+r,td(o)+r];return!(e=i.find(t=>void 0!==l[t]))}),tv[t]=e||""},tm=t=>{let e=th[t]||tl[t];return H(th,t)||(S(ty,r=>!(e=e||tl[r+td(t)])),th[t]=e),e},tg=tm("MutationObserver"),tw=tm("IntersectionObserver"),tx=tm("ResizeObserver"),t$=tm("ScrollTimeline"),tE=(t,...e)=>t.bind(0,...e),tO=t=>{let e;let r=t?tu:ts,l=t?tc:ta;return[n=>{l(e),e=r(n,m(t)?t():t)},()=>l(e)]},tS=(t,e)=>{let r,l,n;let o=G,{v:i,p:a,g:s}=e||{},u=function(e){o(),tc(r),r=l=void 0,o=G,t.apply(this,e)},c=t=>s&&l?s(l,t):t,d=()=>{o!==G&&u(c(n)||n)},f=function(){let t=C(arguments),e=m(i)?i():i,s=h(e)&&e>=0;if(s){let i=m(a)?a():a,s=h(i)&&i>=0,f=e>0?tu:ts,p=e>0?tc:ta,y=c(t),v=y||t,b=u.bind(0,v);o();let g=f(b,e);o=()=>p(g),s&&!r&&(r=tu(d,i)),l=n=v}else u(t)};return f.m=d,f},tk=/[^\x20\t\r\n\f]+/g,tz=(t,e,r)=>{let l;let n=t&&t.classList,o=0,i=!1;if(n&&e&&v(e)){let t=e.match(tk)||[];for(i=t.length>0;l=t[o++];)i=!!r(n,l)&&i}return i},tC=(t,e)=>{tz(t,e,(t,e)=>t.remove(e))},t_=(t,e)=>(tz(t,e,(t,e)=>t.add(e)),tE(tC,t,e)),tA={opacity:1,zIndex:1},tI=(t,e)=>{let r=t||"",l=e?parseFloat(r):parseInt(r,10);return l==l?l:0},tH=(t,e)=>!tA[t]&&h(e)?`${e}px`:e,tR=(t,e,r)=>String((null!=e?e[r]||e.getPropertyValue(r):t.style[r])||""),tM=(t,e,r)=>{try{let{style:l}=t;f(l[e])?l.setProperty(e,r):l[e]=tH(e,r)}catch(t){}};function tN(t,e){let r=v(e),l=g(e)||r;if(l){let l=r?"":{};if(t){let n=tl.getComputedStyle(t,null);l=r?tR(t,n,e):e.reduce((e,r)=>(e[r]=tR(t,n,r),e),l)}return l}t&&S(e,(r,l)=>tM(t,l,e[l]))}let tP=t=>"rtl"===tN(t,"direction"),tT=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,a=`${l}bottom${n}`,s=`${l}left${n}`,u=tN(t,[o,i,a,s]);return{t:tI(u[o],!0),r:tI(u[i],!0),b:tI(u[a],!0),l:tI(u[s],!0)}},tD=(t,e)=>`translate${w(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,tL="paddingTop",tF="paddingRight",tj="paddingLeft",tX="paddingBottom",tV="marginLeft",tB="marginRight",tY="marginBottom",tq="overflowX",tU="overflowY",tW="width",tG="height",tK="hidden",tJ={w:0,h:0},tQ=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:tJ,tZ=t=>tQ("inner",t||tl),t0=tE(tQ,"offset"),t1=tE(tQ,"client"),t3=tE(tQ,"scroll"),t2=t=>{let e=parseFloat(tN(t,tW))||0,r=parseFloat(tN(t,tG))||0;return{w:e-ti(e),h:r-ti(r)}},t9=t=>t.getBoundingClientRect(),t4=t=>!!(t&&(t[tG]||t[tW])),t5=(t,e,r,l)=>{if(t&&e){let n=!0;return S(r,r=>{let o=l?l(t[r]):t[r],i=l?l(e[r]):e[r];o!==i&&(n=!1)}),n}return!1},t6=(t,e)=>t5(t,e,["w","h"]),t7=(t,e)=>t5(t,e,["x","y"]),t8=(t,e)=>t5(t,e,["t","r","b","l"]),et=(t,e,r)=>t5(t,e,[tW,tG],r&&(t=>ti(t))),ee="passive",er=()=>{if(f(l)){l=!1;try{tl.addEventListener(ee,G,Object.defineProperty({},ee,{get(){l=!0}}))}catch(t){}}return l},el=t=>t.split(" "),en=(t,e,r,l)=>{S(el(e),e=>{t.removeEventListener(e,r,l)})},eo=(t,e,r,l)=>{var n;let o=er(),i=null!=(n=o&&l&&l.S)?n:o,a=l&&l.$||!1,s=l&&l.O||!1,u=o?{passive:i,capture:a}:a;return tE(I,el(e).map(e=>{let l=s?n=>{en(t,e,l,a),r(n)}:r;return t.addEventListener(e,l,u),tE(en,t,e,l,a)}))},ei=t=>t.stopPropagation(),ea=t=>t.preventDefault(),es={x:0,y:0},eu=t=>{let e=t&&t9(t);return e?{x:e.left+tl.pageYOffset,y:e.top+tl.pageXOffset}:es},ec=(t,e,r)=>r?r.n?-t:r.i?e-t:t:t,ed=(t,e)=>[e&&e.i?t:0,ec(t,t,e)],ef=(t,e)=>{let{x:r,y:l}=h(e)?{x:e,y:e}:e||{};h(r)&&(t.scrollLeft=r),h(l)&&(t.scrollTop=l)},ep=t=>({x:t.scrollLeft,y:t.scrollTop}),ey=(t,e)=>{S(g(e)?e:[e],t)},eh=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);ey(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,n)=>{if(v(t)){let l=e.get(t)||new Set;return e.set(t,l),ey(t=>{m(t)&&l.add(t)},n),tE(r,t,n)}b(n)&&n&&r();let o=R(t),i=[];return S(o,e=>{let r=t[e];r&&z(i,l(e,r))}),tE(I,i)};return l(t||{}),[l,r,(t,r)=>{S(C(e.get(t)),t=>{r&&!_(r)?t.apply(0,r):t()})}]},ev=t=>JSON.stringify(t,(t,e)=>{if(m(e))throw 0;return e}),eb=(t,e)=>t?`${e}`.split(".").reduce((t,e)=>t&&H(t,e)?t[e]:void 0,t):void 0,em={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},eg=(t,e)=>{let r={},l=R(e).concat(R(t));return S(l,l=>{let n=t[l],o=e[l];if(w(n)&&w(o))M(r[l]={},eg(n,o)),N(r[l])&&delete r[l];else if(H(e,l)&&o!==n){let t=!0;if(g(n)||g(o))try{ev(n)===ev(o)&&(t=!1)}catch(t){}t&&(r[l]=o)}}),r},ew=(t,e,r)=>l=>[eb(t,l),r||void 0!==eb(e,l)],ex="data-overlayscrollbars",e$="os-environment",eE=`${e$}-flexbox-glue`,eO=`${eE}-max`,eS="os-scrollbar-hidden",ek=`${ex}-initialize`,ez=`${ex}-overflow-x`,eC=`${ex}-overflow-y`,e_="overflowVisible",eA="scrollbarPressed",eI="updating",eH=`${ex}-viewport`,eR="arrange",eM="scrollbarHidden",eN=`${ex}-padding`,eP=`${ex}-content`,eT="os-size-observer",eD=`${eT}-appear`,eL=`${eT}-listener`,eF="os-scrollbar",ej=`${eF}-rtl`,eX=`${eF}-horizontal`,eV=`${eF}-vertical`,eB=`${eF}-track`,eY=`${eF}-handle`,eq=`${eF}-visible`,eU=`${eF}-cornerless`,eW=`${eF}-transitionless`,eG=`${eF}-interaction`,eK=`${eF}-unusable`,eJ=`${eF}-auto-hide`,eQ=`${eJ}-hidden`,eZ=`${eF}-wheel`,e0=`${eB}-interactive`,e1=`${eY}-interactive`,e3={},e2={},e9=t=>{S(t,t=>S(t,(e,r)=>{e3[r]=t[r]}))},e4=(t,e,r,l)=>R(t).map(n=>{let{static:o,instance:i}=t[n],a=r?i:o;if(a){let t=r?a(r,e):a(e);return(l||e2)[n]=t}}),e5=t=>e2[t],e6="__osScrollbarsHidingPlugin",e7=(t,e,r,l)=>{Q(t,e);let n=t1(e),o=t0(e),i=t2(r);return l&&K(e),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},e8=t=>{let e=!1,r=t_(t,eS);try{e="none"===tN(t,tb("scrollbar-width"))||"none"===tl.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return r(),e},rt=(t,e)=>{tN(t,{[tq]:tK,[tU]:tK,direction:"rtl"}),ef(t,{x:0});let r=eu(t),l=eu(e);ef(t,{x:-999});let n=eu(e);return{i:r.x===l.x,n:l.x!==n.x}},re=(t,e)=>{let r=t_(t,eE),l=t9(t),n=t9(e),o=et(n,l,!0),i=t_(t,eO),a=t9(t),s=t9(e),u=et(s,a,!0);return r(),i(),o&&u},rr=()=>{let{body:t}=document,e=tr(`<div class="${e$}"><div></div></div>`),r=e[0],l=r.firstChild,[n,,o]=eh(),[a,s]=i({o:e7(t,r,l),u:t7},tE(e7,t,r,l,!0)),[u]=s(),c=e8(r),d={x:0===u.x,y:0===u.y},f={elements:{host:null,padding:!c,viewport:t=>c&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=M({},em),y=tE(M,{},p),h=tE(M,{},f),v={L:u,I:d,H:c,A:"-1"===tN(r,"zIndex"),P:!!t$,V:rt(r,l),U:re(r,l),B:tE(n,"z"),j:tE(n,"r"),N:h,q:t=>M(f,t)&&h(),G:y,W:t=>M(p,t)&&y(),F:M({},f),X:M({},p)},b=tE(eo,tl,"resize"),m=tS(t=>o(t),{v:33,p:99});return D(r,"style"),K(r),b(tE(m,"r")),c||d.x&&d.y||b(()=>{let t=e5(e6),e=t?t.M():G;e(v,a,tE(m,"z"))}),v},rl=()=>(n||(n=rr()),n),rn=(t,e)=>m(e)?e.apply(0,t):e,ro=(t,e,r,l)=>{let n=f(l)?r:l,o=rn(t,n);return o||e.apply(0,t)},ri=(t,e,r,l)=>{let n=f(l)?r:l,o=rn(t,n);return!!o&&(E(o)?o:e.apply(0,t))},ra=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:l}=e||{},{I:n,H:o,N:i}=rl(),{nativeScrollbarsOverlaid:a,body:s}=i().cancel,u=f(l)?s:l,c=(n.x||n.y)&&(null!=r?r:a),d=t&&(p(u)?!o:u);return!!c||!!d},rs=new WeakMap,ru=(t,e)=>{rs.set(t,e)},rc=t=>{rs.delete(t)},rd=t=>rs.get(t),rf=(t,e,r)=>{let l=!1,n=!!r&&new WeakMap,o=o=>{if(n&&r){let i=r.map(e=>{let[r,l]=e||[],n=l&&r?(o||X)(r,t):[];return[n,l]});S(i,r=>S(r[0],o=>{let i=r[1],a=n.get(o)||[],s=t.contains(o);if(s&&i){let t=eo(o,i.trim(),r=>{l?(t(),n.delete(o)):e(r)});n.set(o,z(a,t))}else I(a),n.delete(o)}))}};return o(),[()=>{l=!0},o]},rp=(t,e,r,l)=>{let n=!1,{Y:o,Z:i,J:a,K:s,tt:u,nt:c}=l||{},d=tS(()=>n&&r(!0),{v:33,p:99}),[f,p]=rf(t,d,a),y=i||[],h=(o||[]).concat(y),v=(n,o)=>{if(!_(o)){let i=u||G,a=c||G,d=[],f=[],h=!1,v=!1;if(S(o,r=>{let{attributeName:n,target:o,type:u,oldValue:c,addedNodes:p,removedNodes:b}=r,m="attributes"===u,g=t===o,w=m&&n,x=w?P(o,n||""):null,$=w&&c!==x,E=k(y,n)&&$;if(e&&("childList"===u||!g)){let e=m&&$,u=e&&s&&B(o,s),f=u?!i(o,n,c,x):!m||e,y=f&&!a(r,!!u,t,l);S(p,t=>z(d,t)),S(b,t=>z(d,t)),v=v||y}!e&&g&&$&&!i(o,n,c,x)&&(z(f,n),h=h||E)}),p(t=>A(d).reduce((e,r)=>(z(e,X(t,r)),B(r,t)?z(e,r):e),[])),e)return!n&&v&&r(!1),[!1];if(!_(f)||h){let t=[A(f),h];return n||r.apply(0,t),t}}},b=new tg(tE(v,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),n=!0,()=>{n&&(f(),b.disconnect(),n=!1)}),()=>{if(n)return d.m(),v(!0,b.takeRecords())}]},ry=(t,e,r)=>{let l=!1,{ot:n,st:o,et:a}=r||{},s=e5("__osSizeObserverPlugin"),{V:u}=rl(),c=tE(tP,t),[d,f]=tO(33),[p]=i({o:!1,_:!0,u:(t,e)=>!(!t||!t4(t)&&t4(e))});return()=>{let r=[f,eo(tl,"resize",()=>{l=!!a,d(()=>{l=!1})})],y=tr(`<div class="${eT}"><div class="${eL}"></div></div>`),h=y[0],v=h.firstChild,b=t=>{let r=t instanceof ResizeObserverEntry,o=!r&&g(t),i=!1,a=!1,s=!0;if(r){let[e,,r]=p(t.contentRect),n=t4(e),o=t4(r),u=!r;a=!o&&n,s=!(i=u&&!!o||!n||l)}else o?[,s]=t:a=!0===t;if(n&&s){let e=o?t[0]:tP(h);ef(h,{x:ec(3333333,3333333,e&&u),y:3333333})}i||a||e({ct:!o,rt:o?t:void 0,st:a}),l=!1},m=o&&b;if(tx){let t=new tx(t=>b(t.pop()));t.observe(v),z(r,()=>{t.disconnect()})}else{if(!s)return G;let[t,e]=s(v,b,o);m=t,z(r,e)}if(n){let[t]=i({o:void 0},c);z(r,eo(h,"scroll",e=>{let r=t(),[l,n,o]=r;n&&(tC(v,"ltr rtl"),t_(v,l?"rtl":"ltr"),b([!!l,n,o])),ei(e)}))}return m&&(t_(h,eD),z(r,eo(h,"animationstart",m,{O:!!tx}))),tE(I,z(r,Q(t,h)))}},rh=(t,e)=>{let r;let l=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,n=te("os-trinsic-observer"),[o]=i({o:!1}),a=(t,r)=>{if(t){let n=o(l(t)),[,i]=n;return i&&!r&&e(n)&&[n]}},s=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(tw)(r=new tw(tE(s,!1),{root:t})).observe(n),z(e,()=>{r.disconnect()});else{let t=()=>{let t=t0(n);a(t)};z(e,ry(n,t)()),t()}return tE(I,z(e,Q(t,n)))},()=>r&&s(!0,r.takeRecords())]},rv=(t,e)=>{let r,l,n,o,a;let s=`[${ex}]`,u=`[${eH}]`,c=["tabindex"],d=["wrap","cols","rows"],f=["id","class","style","open"],p={lt:!1,it:tP(t.ut)},{ut:y,ft:b,_t:w,dt:x,vt:$,ht:E,gt:O}=t,{U:z}=rl(),[C]=i({u:t6,o:{w:0,h:0}},()=>{let t=E(e_,e_),e=E(eR,""),r=e&&ep(b);O(e_,e_),O(eR,""),O("",eI,!0);let l=t3(w),n=t3(b),o=t2(b);return O(e_,e_,t),O(eR,"",e),O("",eI),ef(b,r),{w:n.w+l.w+o.w,h:n.h+l.h+o.h}}),_=x?d:f.concat(d),A=tS(e,{v:()=>r,p:()=>l,g(t,e){let[r]=t,[l]=e;return[R(r).concat(R(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),I=t=>{S(t||c,t=>{if(k(c,t)){let e=P(y,t);v(e)?P(b,t,e):D(b,t)}})},H=(t,r)=>{let[l,n]=t,o={bt:n};return M(p,{lt:l}),r||e(o),o},N=({ct:t,rt:r,st:l})=>{let n=!t||l?e:A,[o,i]=r||[];r&&M(p,{it:o}),n({ct:t,st:l,wt:i})},T=(t,r)=>{let[,l]=C(),n={yt:l},o=t?e:A;return l&&!r&&o(n),n},L=(t,e,r)=>{let l={St:e};return e&&!r?A(l):$||I(t),l},[F,j]=w||!z?rh(y,H):[],X=!$&&ry(y,N,{st:!0,ot:!0,et:!0}),[V,B]=rp(y,!1,L,{Z:f,Y:f.concat(c)}),Y=$&&tx&&new tx(t=>{let e=t[t.length-1].contentRect,r=t4(e),l=t4(a);N({ct:!0,st:!l&&r}),a=e});return[()=>{I(),Y&&Y.observe(y);let t=X&&X(),e=F&&F(),r=V();return()=>{Y&&Y.disconnect(),t&&t(),e&&e(),o&&o(),r()}},({$t:t,xt:e})=>{let i={},[a]=t("update.ignoreMutation"),[c,d]=t("update.attributes"),[f,p]=t("update.elementEvents"),[y,v]=t("update.debounce"),x=t=>m(a)&&a(t);if(p||d){n&&n(),o&&o();let[t,e]=rp(w||b,!0,T,{Y:_.concat(c||[]),J:f,K:s,nt:(t,e)=>{let{target:r,attributeName:l}=t,n=!e&&!!l&&!$&&W(r,s,u);return n||!!U(r,`.${eF}`)||!!x(t)}});o=t(),n=e}if(v){if(A.m(),g(y)){let t=y[0],e=y[1];r=h(t)&&t,l=h(e)&&e}else r=!!h(y)&&y,l=!1}if(e){let t=B(),r=j&&j(),l=n&&n();t&&M(i,L(t[0],t[1],e)),r&&M(i,H(r[0],e)),l&&M(i,T(l[0],e))}return i},p]},rb=(t,e,r)=>tn(t,to(e,r)),rm=(t,e,r)=>{let l=ti(e),[n,o]=ed(l,r),i=t/o,a=r?r.n?(o-t)/o:r.i?t/n:i:i;return rb(0,1,a)},rg=(t,e,r,l)=>{if(l){let t=r?"x":"y",{Ot:e,Ct:n}=l,o=n[t],i=e[t];return rb(0,1,o/(o+i))}let n=r?tW:tG,o=t9(t)[n],i=t9(e)[n];return rb(0,1,o/i)},rw=(t,e,r,l,n,o)=>{let{V:i}=rl(),a=o?"x":"y",s=o?"Left":"Top",{Ot:u}=l,c=rg(t,e,o);return 1/c*(1-c)*rm(r[`scroll${s}`],u[a],o&&n&&i)},rx=(t,e,r)=>{let{N:l,A:n}=rl(),{scrollbars:o}=l(),{slot:i}=o,{zt:a,ut:s,ft:u,Ht:c,It:d,At:f,vt:p}=e,{scrollbars:y}=c?{}:t,{slot:h}=y||{},v=new Map,m=t=>t$&&new t$({source:d,axis:t}),w=m("x"),x=m("y"),$=ri([a,s,u],()=>p&&f?a:s,i,h),E=t=>p&&!f&&q(t)===u,O=t=>{v.forEach((e,r)=>{let l=!t||k(g(t)?t:[t],r);l&&((e||[]).forEach(t=>{t&&t.cancel()}),v.delete(r))})},C=(t,e,r)=>{let l=r?t_:tC;S(t,t=>{l(t.Et,e)})},A=(t,e)=>{S(t,t=>{let[r,l]=e(t);tN(r,l)})},H=(t,e,r)=>{A(t,t=>{let{Tt:l,Dt:n}=t;return[l,{[r?tW:tG]:`${(100*rg(l,n,r,e)).toFixed(3)}%`}]})},R=(t,e,r)=>{x||x||A(t,t=>{let{Tt:l,Dt:n,Et:o}=t,i=rw(l,n,d,e,tP(o),r);return[l,{transform:i==i?tD(`${(100*i).toFixed(3)}%`,r):""}]})},M=t=>{let{Et:e}=t,r=E(e)&&e,l=ep(d);return[r,{transform:r?tD({x:`${l.x}px`,y:`${l.y}px`}):""}]},N=(t,e,r,l)=>e&&t.animate(r,{timeline:e,composite:l}),P=(t,e,r,l)=>N(t,e,{transform:[tD("0px",l),tD(`${tn(0,r-.5)}px`,l)]},"add"),T=[],D=[],L=[],F=(t,e,r)=>{let l=b(r),n=!l||r,o=!l||!r;n&&C(D,t,e),o&&C(L,t,e)},j=t=>{let e=t?eX:eV,l=t?D:L,o=_(l)?eW:"",i=te(`${eF} ${e} ${o}`),a=te(eB),s=te(eY),u={Et:i,Dt:a,Tt:s};return n||t_(i,"os-no-css-vars"),z(l,u),z(T,[Q(i,a),Q(a,s),tE(K,i),O,r(u,F,t)]),u},X=tE(j,!0),V=tE(j,!1);return X(),V(),[{Rt:t=>{H(D,t,!0),H(L,t)},kt:t=>{R(D,t,!0),R(L,t)},Mt:()=>{let t=(t,{Et:e,Tt:r})=>{let l=t&&tP(e);O(r),v.set(r,[N(r,t?w:x,{transform:[tD("0%",t),tD(t&&l?"100%":"-100%",t)],[t?l?"right":"left":"top"]:["0%","100%"]})])};D.forEach(tE(t,!0)),L.forEach(tE(t,!1))},Lt:({Ot:t})=>{L.concat(D).forEach(({Et:e})=>{O(e),E(e)&&v.set(e,[P(e,w,t.x,!0),P(e,x,t.y)])})},Pt:()=>{x||x||(p&&A(D,M),p&&A(L,M))},Vt:F,Ut:{P:w,Bt:D,jt:X,Nt:tE(A,D)},qt:{P:x,Bt:L,jt:V,Nt:tE(A,L)}},()=>(Q($,D[0].Et),Q($,L[0].Et),tu(()=>{F(eW)},300),tE(I,T))]},r$=(t,e,r)=>{let{ut:l,It:n,Gt:o}=e,i=(e,i)=>{let{Tt:a,Dt:s}=e,u=`scroll${i?"Left":"Top"}`,c=`client${i?"X":"Y"}`,d=i?tW:tG,f=i?"left":"top",p=i?"w":"h",y=i?"x":"y",h="pointerup pointerleave pointercancel lostpointercapture",v=(t,e)=>l=>{let{Ot:o}=r,i=t0(s)[p]-t0(a)[p],c=e*l/i*o[y];n[u]=t+c};return eo(s,"pointerdown",e=>{let r=U(e.target,`.${eY}`)===a,i=r?a:s,y=t.scrollbars,{button:b,isPrimary:m,pointerType:g}=e,{pointers:w}=y,x=0===b&&m&&y[r?"dragScroll":"clickScroll"]&&(w||[]).includes(g);if(L(l,ex,eA,!0),x){let t=!r&&e.shiftKey,y=tE(t9,a),b=tE(t9,s),m=(t,e)=>(t||y())[f]-(e||b())[f],g=ti(t9(n)[d])/t0(n)[p]||1,w=v(n[u]||0,1/g),x=e[c],$=y(),E=b(),O=$[d],S=m($,E)+O/2,k=x-E[f],C=r?0:k-S,_=t=>{I(A),i.releasePointerCapture(t.pointerId)},A=[tE(L,l,ex,eA),eo(o,h,_),eo(o,"selectstart",t=>ea(t),{S:!1}),eo(s,h,_),eo(s,"pointermove",e=>{let l=e[c]-x;(r||t)&&w(C+l)})];if(t)w(C);else if(!r){let t=e5("__osClickScrollPlugin");t&&z(A,t(w,m,C,O,k))}i.setPointerCapture(e.pointerId)}})};return(t,e,r)=>{let{Et:a}=t,[s,u]=tO(333),c=!!n.scrollBy,d=!0;return tE(I,[eo(a,"pointerenter",()=>{e(eG,!0)}),eo(a,"pointerleave pointercancel",()=>{e(eG,!1)}),eo(a,"wheel",t=>{let{deltaX:r,deltaY:o,deltaMode:i}=t;c&&d&&0===i&&q(a)===l&&n.scrollBy({left:r,top:o,behavior:"smooth"}),d=!1,e(eZ,!0),s(()=>{d=!0,e(eZ)}),ea(t)},{S:!1,$:!0}),eo(a,"mousedown",tE(eo,o,"click",ei,{O:!0,$:!0}),{$:!0}),i(t,r),u])}},rE=(t,e,r,l,n,o)=>{let i,a,s,u,c;let d=G,f=0,[p,y]=tO(),[h,v]=tO(),[b,m]=tO(100),[g,w]=tO(100),[x,$]=tO(100),[E,O]=tO(()=>f),[S,k]=rx(t,n,r$(e,n,l)),{ut:C,Wt:_,At:A}=n,{Vt:H,Rt:R,kt:M,Mt:N,Lt:P,Pt:T}=S,D=t=>{H(eJ,t,!0),H(eJ,t,!1)},L=(t,e)=>{if(O(),t)H(eQ);else{let t=tE(H,eQ,!0);f>0&&!e?E(t):t()}},F=t=>"mouse"===t.pointerType,j=t=>{F(t)&&(u=a)&&L(!0)},X=[m,O,w,$,v,y,()=>d(),eo(C,"pointerover",j,{O:!0}),eo(C,"pointerenter",j),eo(C,"pointerleave",t=>{F(t)&&(u=!1,a&&L(!1))}),eo(C,"pointermove",t=>{F(t)&&i&&p(()=>{m(),L(!0),g(()=>{i&&L(!1)})})}),eo(_,"scroll",t=>{h(()=>{M(l),s&&L(!0),b(()=>{s&&!u&&L(!1)})}),o(t),T()})];return[()=>tE(I,z(X,k())),({$t:t,Ft:e,Xt:n,Yt:o})=>{let{Zt:u,Jt:p,Kt:y}=o||{},{wt:h,st:v}=n||{},{I:b}=rl(),{it:m}=r,{Ot:g,Qt:w,tn:$}=l,[E,O]=t("showNativeOverlaidScrollbars"),[S,k]=t("scrollbars.theme"),[z,C]=t("scrollbars.visibility"),[I,F]=t("scrollbars.autoHide"),[j,X]=t("scrollbars.autoHideSuspend"),[V]=t("scrollbars.autoHideDelay"),[B,Y]=t("scrollbars.dragScroll"),[q,U]=t("scrollbars.clickScroll"),W=$.x||$.y,G=E&&b.x&&b.y,K=(t,e)=>{let r="visible"===z||"auto"===z&&"scroll"===t;return H(eq,r,e),r};if(f=V,v&&!e&&(j&&W?(D(!1),d(),x(()=>{d=eo(_,"scroll",tE(D,!0),{O:!0})})):D(!0)),O&&H("os-theme-none",G),k&&(H(c),H(S,!0),c=S),X&&!j&&D(!0),F&&(i="move"===I,a="leave"===I,L(!(s="never"!==I),!0)),Y&&H(e1,B),U&&H(e0,q),y||C){let t=K(w.x,!0),e=K(w.y,!1),r=t&&e;H(eU,!r)}(u||p||h)&&(R(l),M(l),N(l),T(),P(l),H(eK,!g.x,!0),H(eK,!g.y,!1),H(ej,m&&!A))},{},S]},rO=t=>{let e=rl(),{N:r,H:l}=e,n=e5(e6),o=n&&n.C,{elements:i}=r(),{host:a,padding:s,viewport:u,content:c}=i,d=E(t),f=d?{}:t,{elements:p}=f,{host:y,padding:h,viewport:v,content:b}=p||{},m=d?t:f.target,g=B(m,"textarea"),w=m.ownerDocument,x=w.documentElement,$=m===w.body,O=w.defaultView,S=tE(ro,[m]),C=tE(ri,[m]),_=tE(rn,[m]),A=tE(te,""),H=tE(S,A,u),M=tE(C,A,c),N=H(v),T=N===m,j=T&&$,X=!T&&M(b),V=!T&&E(N)&&N===X,U=V&&!!_(c),W=U?H():N,J=U?X:M(),tr=V?W:N,tl=j?x:tr,tn=g?S(A,a,y):m,to=j?tl:tn,ti=w.activeElement,ta=!T&&O.top===O&&ti===m,ts={zt:m,ut:to,ft:tl,nn:!T&&C(A,s,h),_t:V?J:X,sn:!T&&!l&&o&&o(e),It:j?x:tl,Wt:j?w:tl,en:O,Gt:w,dt:g,At:$,Ht:d,vt:T,cn:V,ht:(t,e)=>F(tl,T?ex:eH,T?e:t),gt:(t,e,r)=>L(tl,T?ex:eH,T?e:t,r)},tu=R(ts).reduce((t,e)=>{let r=ts[e];return z(t,!!(r&&E(r))&&!q(r)&&r)},[]),tc=t=>t?k(tu,t):null,{zt:td,ut:tf,nn:tp,ft:ty,_t:th,sn:tv}=ts,tb=[()=>{D(tf,ex),D(tf,ek),D(td,ek),$&&(D(x,ex),D(x,ek))}],tm=g&&tc(tf),tg=g?td:Y([th,ty,tp,tf,td].find(t=>!1===tc(t))),tw=j?td:th||ty,tx=tE(I,tb);return[ts,()=>{P(tf,ex,T?"viewport":"host"),P(tp,eN,""),P(th,eP,""),T||P(ty,eH,"");let t=$&&!T?t_(q(m),eS):G,e=t=>{Q(q(t),Y(t)),K(t)};if(tm&&(tt(td,tf),z(tb,()=>{tt(tf,td),K(tf)})),Q(tw,tg),Q(tf,tp),Q(tp||tf,!T&&ty),Q(ty,th),z(tb,()=>{t(),D(tp,eN),D(th,eP),D(ty,ez),D(ty,eC),D(ty,eH),tc(th)&&e(th),tc(ty)&&e(ty),tc(tp)&&e(tp)}),l&&!T&&(L(ty,eH,eM,!0),z(tb,tE(D,ty,eH))),tv&&(Z(ty,tv),z(tb,tE(K,tv))),ta){let t="tabindex",e=P(ty,t);P(ty,t,"-1"),ty.focus();let r=()=>e?P(ty,t,e):D(ty,t),l=eo(w,"pointerdown keydown",()=>{r(),l()});z(tb,[r,l])}else ti&&ti.focus&&ti.focus();return tg=0,tx},tx]},rS=({_t:t})=>({Xt:e,rn:r})=>{let{U:l}=rl(),{bt:n}=e||{},{lt:o}=r,i=(t||!l)&&n;i&&tN(t,{[tG]:o?"":"100%"})},rk=({ut:t,nn:e,ft:r,vt:l},n)=>{let[o,a]=i({u:t8,o:tT()},tE(tT,t,"padding",""));return({$t:t,Xt:i,rn:s,Ft:u})=>{let[c,d]=a(u),{H:f,U:p}=rl(),{ct:y,yt:h,wt:v}=i||{},{it:b}=s,[m,g]=t("paddingAbsolute");(y||d||!p&&h)&&([c,d]=o(u));let w=!l&&(g||v||d);if(w){let t=!m||!e&&!f,l=c.r+c.l,o=c.t+c.b,i={[tB]:t&&!b?-l:0,[tY]:t?-o:0,[tV]:t&&b?-l:0,top:t?-c.t:0,right:t?b?-c.r:"auto":0,left:t?b?"auto":-c.l:0,[tW]:t?`calc(100% + ${l}px)`:""},a={[tL]:t?c.t:0,[tF]:t?c.r:0,[tX]:t?c.b:0,[tj]:t?c.l:0};tN(e||r,i),tN(r,a),M(n,{nn:c,ln:!t,D:e?a:M({},i,a)})}return{an:w}}},rz=({ut:t,nn:e,ft:r,sn:l,vt:n,gt:o,At:a,en:s},u)=>{let c=tE(tn,0),d="visible",f={u:t6,o:{w:0,h:0}},p=(t,e)=>{let r=tl.devicePixelRatio%1!=0?1:0,l={w:c(t.w-e.w),h:c(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},y=t=>0===t.indexOf(d),{L:h,U:v,H:b,I:m}=rl(),g=e5(e6),w=!n&&!b&&(m.x||m.y),x=a&&n,[$,E]=i(f,tE(t2,r)),[O,S]=i(f,tE(t3,r)),[k,z]=i(f),[C,_]=i(f),[A]=i({u:t7,o:{x:tK,y:tK}}),I=(e,l)=>{if(tN(r,{[tG]:""}),l){let{ln:l,nn:n}=u,{un:o,R:i}=e,a=t2(t),s=t1(t),c="content-box"===tN(r,"boxSizing"),d=l||c?n.b+n.t:0,f=!(m.x&&c);tN(r,{[tG]:s.h+a.h+(o.x&&f?i.x:0)-d})}},H=(t,e)=>{let l=b||t?0:42,n=(t,n,o)=>{let i=tN(r,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!b?n?l:o:0,n&&!!l]},[o,i,a,s]=n(tq,m.x,h.x),[u,c,d,f]=n(tU,m.y,h.y);return{Qt:{x:o,y:u},un:{x:i,y:c},R:{x:a,y:d},k:{x:s,y:f}}},R=(t,e,r,l)=>{let n=(t,e)=>{let r=y(t),l=e&&r&&t.replace(`${d}-`,"")||"";return[e&&!r?t:"",y(l)?"hidden":l]},[o,i]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l[tq]=i&&a?i:o,l[tU]=s&&o?s:a,H(t,l)},N=(t,e,r,l)=>{let{R:n,k:o}=t,{x:i,y:a}=o,{x:s,y:c}=n,{D:d}=u,f=e?tV:tB,p=e?tj:tF,y=d[f],h=d[tY],v=d[p],b=d[tX];l[tW]=`calc(100% + ${c+-1*y}px)`,l[f]=-c+y,l[tY]=-s+h,r&&(l[p]=v+(a?c:0),l[tX]=b+(i?s:0))},[T,D]=g?g.T(w,v,r,l,u,H,N):[()=>w,()=>[G]];return({$t:l,Xt:i,rn:a,Ft:d},{an:f})=>{let h;let{ct:g,St:w,yt:F,bt:j,wt:X}=i||{},{lt:V,it:B}=a,[Y,q]=l("showNativeOverlaidScrollbars"),[U,W]=l("overflow"),G=Y&&m.x&&m.y,K=!n&&!v&&(g||F||w||q||j),J=y(U.x),Q=y(U.y),Z=J||Q,tt=E(d),te=S(d),tr=z(d),tl=_(d);if(q&&b&&o(eM,"scrollbarHidden",!G),K&&I(h=H(G),V),g||f||F||X||q){Z&&o(e_,e_,!1);let[t,e]=D(G,B,h),[l,n]=tt=$(d),[i,a]=te=O(d),u=t1(r),f=i,y=u;t(),(a||n||q)&&e&&!G&&T(e,i,l,B)&&(y=t1(r),f=t3(r));let v=tZ(s),b={w:c(tn(i.w,f.w)+l.w),h:c(tn(i.h,f.h)+l.h)},m={w:c((x?v.w:y.w+c(u.w-i.w))+l.w),h:c((x?v.h:y.h+c(u.h-i.h))+l.h)};tl=C(m),tr=k(p(b,m),d)}let[to,ti]=tl,[ta,ts]=tr,[tu,tc]=te,[td,tf]=tt,tp={x:ta.w>0,y:ta.h>0},ty=J&&Q&&(tp.x||tp.y)||J&&tp.x&&!tp.y||Q&&tp.y&&!tp.x;if(f||X||tf||tc||ti||ts||W||q||K){let e={[tB]:0,[tY]:0,[tV]:0,[tW]:"",[tq]:"",[tU]:""},l=R(G,tp,U,e),o=T(l,tu,td,B);n||N(l,B,o,e),K&&I(l,V),n?(P(t,ez,e[tq]),P(t,eC,e[tU])):tN(r,e)}L(t,ex,e_,ty),L(e,eN,e_,ty),n||L(r,eH,e_,Z);let[th,tv]=A(H(G).Qt);return M(u,{Qt:th,Ct:{x:to.w,y:to.h},Ot:{x:ta.w,y:ta.h},tn:tp}),{Kt:tv,Zt:ti,Jt:ts}}},rC=t=>{let[e,r,l]=rO(t),n={nn:{t:0,r:0,b:0,l:0},ln:!1,D:{[tB]:0,[tY]:0,[tV]:0,[tL]:0,[tF]:0,[tX]:0,[tj]:0},Ct:{x:0,y:0},Ot:{x:0,y:0},Qt:{x:tK,y:tK},tn:{x:!1,y:!1}},{zt:o,ft:i,gt:a,vt:s}=e,{H:u,I:c,U:d}=rl(),f=!u&&(c.x||c.y),p=[rS(e),rk(e,n),rz(e,n)];return[r,t=>{let e={},r=(f||!d)&&ep(i);return a("",eI,!0),S(p,r=>{M(e,r(t,e)||{})}),a("",eI),ef(i,r),s||ef(o,0),e},n,e,l]},r_=(t,e,r,l)=>{let[n,o,i,a,s]=rC(t),[u,c,d]=rv(a,t=>{b({},t)}),[f,p,,y]=rE(t,e,d,i,a,l),h=t=>S(M({},t),(t,e,r)=>{r[e]=!!t}),v=t=>R(t).some(e=>!!t[e]),b=(t,l)=>{let{fn:n,Ft:i,xt:a,_n:s,dn:u}=t,f=n||{},y=!!i,b={$t:ew(e,f,y),fn:f,Ft:y};if(s)return p(b),!1;let m=l||c(M({},b,{xt:a}));u&&M(m,{ct:!0,yt:!0});let g=o(M({},b,{rn:d,Xt:m}));p(M({},b,{Xt:m,Yt:g}));let w=v(m),x=v(g),$=w||x||!N(f)||y;return $&&r(t,{Xt:h(m),Yt:h(g)}),$};return[()=>{let{zt:t,ft:e,Gt:r,At:l}=a,o=l?r.documentElement:t,i=ep(o),s=[u(),n(),f()];return ef(e,i),tE(I,s)},b,()=>({vn:d,hn:i}),{pn:a,gn:y},s]},rA=(t,e,r)=>{let{G:l,B:n,j:o}=rl(),i=E(t),a=i?t:t.target,s=rd(a);if(e&&!s){let s=!1,u=[],c={},d=t=>{let e=e5("__osOptionsValidationPlugin");return e?e(t,!0):t},f=M({},l(),d(e)),[p,y,h]=eh(r),[v,b,m,g,w]=r_(t,f,({fn:t,Ft:e},{Xt:r,Yt:l})=>{let{ct:n,wt:o,bt:i,yt:a,St:s}=r,{Zt:u,Jt:c,Kt:d}=l;h("updated",[$,{updateHints:{sizeChanged:n,directionChanged:o,heightIntrinsicChanged:i,overflowEdgeChanged:u,overflowAmountChanged:c,overflowStyleChanged:d,contentMutation:a,hostMutation:s},changedOptions:t||{},force:!!e}])},t=>h("scroll",[$,t])),x=t=>{rc(a),I(u),s=!0,h("destroyed",[$,t]),y()},$={options(t,e){if(t){let r=e?l():{},n=eg(f,M(r,d(t)));N(n)||(M(f,n),b({fn:n}))}return M({},f)},on:p,off:(t,e)=>{t&&e&&y(t,e)},state(){let{vn:t,hn:e}=m(),{it:r}=t,{Ct:l,Ot:n,Qt:o,tn:i,nn:a,ln:u}=e;return M({},{overflowEdge:l,overflowAmount:n,overflowStyle:o,hasOverflow:i,padding:a,paddingAbsolute:u,directionRTL:r,destroyed:s})},elements(){let{zt:t,ut:e,nn:r,ft:l,_t:n,It:o,Wt:i}=g.pn,{Ut:a,qt:s}=g.gn,u=t=>{let{Tt:e,Dt:r,Et:l}=t;return{scrollbar:l,track:r,handle:e}},c=t=>{let{Bt:e,jt:r}=t,l=u(e[0]);return M({},l,{clone:()=>{let t=u(r());return b({_n:!0}),t}})};return M({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:c(a),scrollbarVertical:c(s)})},update:t=>b({Ft:t,xt:!0}),destroy:tE(x,!1),plugin:t=>c[R(t)[0]]},E=()=>{let{hn:t}=m(),{tn:e}=t,r=e.x||e.y;r&&b({dn:r})};return(z(u,[n(E),o(E),w]),ru(a,$),e4(e3,rA,$,c),ra(g.pn.At,!i&&t.cancel))?x(!0):(z(u,v()),h("initialized",[$]),$.update(!0)),$}return s};rA.plugin=t=>{let e=g(t),r=e?t:[t],l=r.map(t=>e4(t,rA)[0]);return e9(r),e?l:l[0]},rA.valid=t=>{let e=t&&t.elements,r=m(e)&&e();return $(r)&&!!rd(r.target)},rA.env=()=>{let{L:t,I:e,H:r,V:l,U:n,A:o,P:i,F:a,X:s,N:u,q:c,G:d,W:f}=rl();return M({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,scrollTimeline:i,staticDefaultInitialization:a,staticDefaultOptions:s,getDefaultInitialization:u,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};let rI=()=>{let t,e;if(typeof window>"u"){let t=()=>{};return[t,t]}let r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:o,s=()=>{a(t),o(e)};return[(r,o)=>{s(),t=i(l?()=>{s(),e=n(r)}:r,"object"==typeof o?o:{timeout:2233})},s]},rH=t=>{let{options:e,events:r,defer:l}=t||{},[n,i]=(0,o.useMemo)(rI,[]),a=(0,o.useRef)(null),s=(0,o.useRef)(l),u=(0,o.useRef)(e),c=(0,o.useRef)(r);return(0,o.useEffect)(()=>{s.current=l},[l]),(0,o.useEffect)(()=>{let{current:t}=a;u.current=e,rA.valid(t)&&t.options(e||{},!0)},[e]),(0,o.useEffect)(()=>{let{current:t}=a;c.current=r,rA.valid(t)&&t.on(r||{},!0)},[r]),(0,o.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,o.useMemo)(()=>[t=>{let e=a.current;if(rA.valid(e))return;let r=s.current,l=u.current||{},o=c.current||{},i=()=>a.current=rA(t,l,o);r?n(i,r):i()},()=>a.current],[])},rR=(0,o.forwardRef)((t,e)=>{let{element:r="div",options:l,events:n,defer:i,children:a,...s}=t,u=(0,o.useRef)(null),c=(0,o.useRef)(null),[d,f]=rH({options:l,events:n,defer:i});return(0,o.useEffect)(()=>{let{current:t}=u,{current:e}=c;return t&&e&&d({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,o.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),o.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...s},o.createElement("div",{"data-overlayscrollbars-contents":"",ref:c},a))})},2115:function(t,e,r){r.d(e,{r:function(){return u}});var l=r(7437),n=r(4440),o=r.n(n),i=r(1396),a=r.n(i),s=r(2265);let u=(0,s.forwardRef)((t,e)=>{let{external:r,...n}=t,i=o()("no-underline text-primary-blue2 font-medium [background:linear-gradient(0deg,currentColor,currentColor)_no-repeat_right_bottom_/_0_2px]","[transition:background-size_250ms] hover:[background-size:100%_2px] hover:[background-position-x:left]","focus-visible:rounded-sm",n.className);return r?(0,l.jsx)("a",{...n,ref:e,className:i}):(0,l.jsx)(a(),{...n,ref:e,className:i})})}}]);