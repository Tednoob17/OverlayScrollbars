"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{4197:function(t,e,r){let l,n;r.d(e,{E:function(){return rI},A:function(){return rN}});var o=r(2265);/*!
 * OverlayScrollbars
 * Version: 2.4.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let i=(t,e)=>{let r;let{o:l,u:n,_:o}=t,i=l,a=(t,e)=>{let l=i,a=e||(n?!n(l,t):l!==t);return(a||o)&&(i=t,r=l),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},a="undefined"!=typeof window,s=a&&Node.ELEMENT_NODE,{toString:u,hasOwnProperty:c}=Object.prototype,d=/^\[object (.+)\]$/,f=t=>void 0===t,p=t=>null===t,y=t=>f(t)||p(t)?`${t}`:u.call(t).replace(d,"$1").toLowerCase(),h=t=>"number"==typeof t,v=t=>"string"==typeof t,b=t=>"boolean"==typeof t,m=t=>"function"==typeof t,g=t=>Array.isArray(t),w=t=>"object"==typeof t&&!g(t)&&!p(t),x=t=>{let e=!!t&&t.length,r=h(e)&&e>-1&&e%1==0;return(!!g(t)||!m(t)&&!!r)&&(!(e>0&&w(t))||e-1 in t)},$=t=>{let e;if(!t||!w(t)||"object"!==y(t))return!1;let r="constructor",l=t[r],n=l&&l.prototype,o=c.call(t,r),i=n&&c.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(e in t);return f(e)||c.call(t,e)},O=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===s)},E=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===s)};function S(t,e){if(x(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&S(Object.keys(t),r=>e(t[r],r,t));return t}let C=(t,e)=>t.indexOf(e)>=0,k=(t,e)=>t.concat(e),z=(t,e,r)=>(!r&&!v(e)&&x(e)?Array.prototype.push.apply(t,e):t.push(e),t),H=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{z(r,t)}):S(t,t=>{z(r,t)}),r)},_=t=>!!t&&!t.length,R=t=>H(new Set(t)),T=(t,e,r)=>{S(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},A=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),N=t=>t?Object.keys(t):[],I=(t,e,r,l,n,o,i)=>{let a=[e,r,l,n,o,i];return("object"!=typeof t||p(t))&&!m(t)&&(t={}),S(a,e=>{S(e,(r,l)=>{let n=e[l];if(t===n)return!0;let o=g(n);if(n&&$(n)){let e=t[l],r=e;o&&!g(e)?r=[]:o||$(e)||(r={}),t[l]=I(r,n)}else t[l]=o?n.slice():n})}),t},M=t=>{for(let e in t)return!1;return!0},P=(t,e,r)=>{if(f(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},D=(t,e)=>new Set((P(t,e)||"").split(" ")),L=(t,e)=>{t&&t.removeAttribute(e)},j=(t,e,r,l)=>{if(r){let n=D(t,e);n[l?"add":"delete"](r);let o=H(n).join(" ").trim();P(t,e,o)}},F=(t,e,r)=>D(t,e).has(r),X=a&&Element.prototype,V=(t,e)=>{let r=[],l=e?E(e)&&e:document;return l?z(r,l.querySelectorAll(t)):r},Y=(t,e)=>{let r=e?E(e)&&e:document;return r?r.querySelector(t):null},q=(t,e)=>{if(E(t)){let r=X.matches||X.msMatchesSelector;return r.call(t,e)}return!1},B=t=>t?H(t.childNodes):[],U=t=>t&&t.parentElement,W=(t,e)=>{if(E(t)){let r=X.closest;if(r)return r.call(t,e);do{if(q(t,e))return t;t=U(t)}while(t)}},K=(t,e,r)=>{let l=W(t,e),n=t&&Y(r,l),o=W(n,e)===l;return!!l&&!!n&&(l===t||n===t||o&&W(W(t,r),e)!==l)},J=()=>{},Q=t=>{if(x(t))S(H(t),t=>Q(t));else if(t){let e=U(t);e&&e.removeChild(t)}},G=(t,e,r)=>{if(r&&t){let l,n=e;return x(r)?(l=document.createDocumentFragment(),S(r,t=>{t===n&&(n=t.previousSibling),l.appendChild(t)})):l=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(l,n||null),()=>Q(r)}return J},Z=(t,e)=>G(t,null,e),tt=(t,e)=>G(U(t),t,e),te=(t,e)=>G(U(t),t&&t.nextSibling,e),tr=t=>{let e=document.createElement("div");return P(e,"class",t),e},tl=t=>{let e=tr();return e.innerHTML=t.trim(),S(B(e),t=>Q(t))},tn=a?window:{},to=Math.max,ti=Math.min,ta=Math.round,ts=tn.cancelAnimationFrame,tu=tn.requestAnimationFrame,tc=tn.setTimeout,td=tn.clearTimeout,tf=t=>t.charAt(0).toUpperCase()+t.slice(1),tp=()=>tr().style,ty=["-webkit-","-moz-","-o-","-ms-"],th=["WebKit","Moz","O","MS","webkit","moz","o","ms"],tv={},tb={},tm=t=>{let e=tb[t];if(A(tb,t))return e;let r=tf(t),l=tp();return S(ty,n=>{let o=n.replace(/-/g,""),i=[t,n+t,o+r,tf(o)+r];return!(e=i.find(t=>void 0!==l[t]))}),tb[t]=e||""},tg=t=>{let e=tv[t]||tn[t];return A(tv,t)||(S(th,r=>!(e=e||tn[r+tf(t)])),tv[t]=e),e},tw=tg("MutationObserver"),tx=tg("IntersectionObserver"),t$=tg("ResizeObserver"),tO=tg("ScrollTimeline"),tE=(t,...e)=>t.bind(0,...e),tS=t=>{let e;let r=t?tc:tu,l=t?td:ts;return[n=>{l(e),e=r(n,m(t)?t():t)},()=>l(e)]},tC=(t,e)=>{let r,l,n;let o=J,{v:i,p:a,g:s}=e||{},u=function(e){o(),td(r),r=l=void 0,o=J,t.apply(this,e)},c=t=>s&&l?s(l,t):t,d=()=>{o!==J&&u(c(n)||n)},f=function(){let t=H(arguments),e=m(i)?i():i,s=h(e)&&e>=0;if(s){let i=m(a)?a():a,s=h(i)&&i>=0,f=e>0?tc:tu,p=e>0?td:ts,y=c(t),v=y||t,b=u.bind(0,v);o();let g=f(b,e);o=()=>p(g),s&&!r&&(r=tc(d,i)),l=n=v}else u(t)};return f.m=d,f},tk=/[^\x20\t\r\n\f]+/g,tz=(t,e,r)=>{let l;let n=t&&t.classList,o=0,i=!1;if(n&&e&&v(e)){let t=e.match(tk)||[];for(i=t.length>0;l=t[o++];)i=!!r(n,l)&&i}return i},tH=(t,e)=>{tz(t,e,(t,e)=>t.remove(e))},t_=(t,e)=>(tz(t,e,(t,e)=>t.add(e)),tE(tH,t,e)),tR={opacity:1,zIndex:1},tT=(t,e)=>{let r=t||"",l=e?parseFloat(r):parseInt(r,10);return l==l?l:0},tA=(t,e)=>!tR[t]&&h(e)?`${e}px`:e,tN=(t,e,r)=>String((null!=e?e[r]||e.getPropertyValue(r):t.style[r])||""),tI=(t,e,r)=>{try{let{style:l}=t;f(l[e])?l.setProperty(e,r):l[e]=tA(e,r)}catch(t){}};function tM(t,e){let r=v(e),l=g(e)||r;if(l){let l=r?"":{};if(t){let n=tn.getComputedStyle(t,null);l=r?tN(t,n,e):e.reduce((e,r)=>(e[r]=tN(t,n,r),e),l)}return l}t&&S(e,(r,l)=>tI(t,l,e[l]))}let tP=t=>"rtl"===tM(t,"direction"),tD=(t,e,r)=>{let l=e?`${e}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,a=`${l}bottom${n}`,s=`${l}left${n}`,u=tM(t,[o,i,a,s]);return{t:tT(u[o],!0),r:tT(u[i],!0),b:tT(u[a],!0),l:tT(u[s],!0)}},tL=(t,e)=>`translate${w(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,tj="paddingTop",tF="paddingRight",tX="paddingLeft",tV="paddingBottom",tY="marginLeft",tq="marginRight",tB="marginBottom",tU="overflowX",tW="overflowY",tK="width",tJ="height",tQ="hidden",tG={w:0,h:0},tZ=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:tG,t0=t=>tZ("inner",t||tn),t1=tE(tZ,"offset"),t3=tE(tZ,"client"),t2=tE(tZ,"scroll"),t9=t=>{let e=parseFloat(tM(t,tK))||0,r=parseFloat(tM(t,tJ))||0;return{w:e-ta(e),h:r-ta(r)}},t4=t=>t.getBoundingClientRect(),t5=t=>!!(t&&(t[tJ]||t[tK])),t6=(t,e)=>{let r=t5(t),l=t5(e);return!l&&r},t7=(t,e,r,l)=>{if(t&&e){let n=!0;return S(r,r=>{let o=l?l(t[r]):t[r],i=l?l(e[r]):e[r];o!==i&&(n=!1)}),n}return!1},t8=(t,e)=>t7(t,e,["w","h"]),et=(t,e)=>t7(t,e,["x","y"]),ee=(t,e)=>t7(t,e,["t","r","b","l"]),er=(t,e,r)=>t7(t,e,[tK,tJ],r&&(t=>ta(t))),el="passive",en=()=>{if(f(l)){l=!1;try{tn.addEventListener(el,J,Object.defineProperty({},el,{get(){l=!0}}))}catch(t){}}return l},eo=t=>t.split(" "),ei=(t,e,r,l)=>{S(eo(e),e=>{t.removeEventListener(e,r,l)})},ea=(t,e,r,l)=>{var n;let o=en(),i=null!=(n=o&&l&&l.S)?n:o,a=l&&l.$||!1,s=l&&l.O||!1,u=o?{passive:i,capture:a}:a;return tE(T,eo(e).map(e=>{let l=s?n=>{ei(t,e,l,a),r(n)}:r;return t.addEventListener(e,l,u),tE(ei,t,e,l,a)}))},es=t=>t.stopPropagation(),eu=t=>t.preventDefault(),ec={x:0,y:0},ed=t=>{let e=t&&t4(t);return e?{x:e.left+tn.pageYOffset,y:e.top+tn.pageXOffset}:ec},ef=(t,e,r)=>r?r.n?-t:r.i?e-t:t:t,ep=(t,e)=>[e&&e.i?t:0,ef(t,t,e)],ey=(t,e)=>{let{x:r,y:l}=h(e)?{x:e,y:e}:e||{};h(r)&&(t.scrollLeft=r),h(l)&&(t.scrollTop=l)},eh=t=>({x:t.scrollLeft,y:t.scrollTop}),ev=(t,e)=>{S(g(e)?e:[e],t)},eb=t=>{let e=new Map,r=(t,r)=>{if(t){let l=e.get(t);ev(t=>{l&&l[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},l=(t,n)=>{if(v(t)){let l=e.get(t)||new Set;return e.set(t,l),ev(t=>{m(t)&&l.add(t)},n),tE(r,t,n)}b(n)&&n&&r();let o=N(t),i=[];return S(o,e=>{let r=t[e];r&&z(i,l(e,r))}),tE(T,i)};return l(t||{}),[l,r,(t,r)=>{S(H(e.get(t)),t=>{r&&!_(r)?t.apply(0,r):t()})}]},em=t=>JSON.stringify(t,(t,e)=>{if(m(e))throw 0;return e}),eg=(t,e)=>t?`${e}`.split(".").reduce((t,e)=>t&&A(t,e)?t[e]:void 0,t):void 0,ew={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},ex=(t,e)=>{let r={},l=k(N(e),N(t));return S(l,l=>{let n=t[l],o=e[l];if(w(n)&&w(o))I(r[l]={},ex(n,o)),M(r[l])&&delete r[l];else if(A(e,l)&&o!==n){let t=!0;if(g(n)||g(o))try{em(n)===em(o)&&(t=!1)}catch(t){}t&&(r[l]=o)}}),r},e$=(t,e,r)=>l=>[eg(t,l),r||void 0!==eg(e,l)],eO="data-overlayscrollbars",eE="os-environment",eS=`${eE}-flexbox-glue`,eC=`${eS}-max`,ek="os-scrollbar-hidden",ez=`${eO}-initialize`,eH=`${eO}-overflow-x`,e_=`${eO}-overflow-y`,eR="overflowVisible",eT="scrollbarPressed",eA="updating",eN=`${eO}-viewport`,eI="arrange",eM="scrollbarHidden",eP=`${eO}-padding`,eD=`${eO}-content`,eL="os-size-observer",ej=`${eL}-appear`,eF=`${eL}-listener`,eX="os-scrollbar",eV=`${eX}-rtl`,eY=`${eX}-horizontal`,eq=`${eX}-vertical`,eB=`${eX}-track`,eU=`${eX}-handle`,eW=`${eX}-visible`,eK=`${eX}-cornerless`,eJ=`${eX}-transitionless`,eQ=`${eX}-interaction`,eG=`${eX}-unusable`,eZ=`${eX}-auto-hide`,e0=`${eZ}-hidden`,e1=`${eX}-wheel`,e3=`${eB}-interactive`,e2=`${eU}-interactive`,e9={},e4={},e5=t=>{S(t,t=>S(t,(e,r)=>{e9[r]=t[r]}))},e6=(t,e,r)=>N(t).map(l=>{let{static:n,instance:o}=t[l],[i,a,s]=r||[],u=r?o:n;if(u){let t=r?u(i,a,e):u(e);return(s||e4)[l]=t}}),e7=t=>e4[t],e8="__osScrollbarsHidingPlugin",rt=(t,e,r,l)=>{Z(t,e);let n=t3(e),o=t1(e),i=t9(r);return l&&Q(e),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},re=t=>{let e=!1,r=t_(t,ek);try{e="none"===tM(t,tm("scrollbar-width"))||"none"===tn.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return r(),e},rr=(t,e)=>{tM(t,{[tU]:tQ,[tW]:tQ,direction:"rtl"}),ey(t,{x:0});let r=ed(t),l=ed(e);ey(t,{x:-999});let n=ed(e);return{i:r.x===l.x,n:l.x!==n.x}},rl=(t,e)=>{let r=t_(t,eS),l=t4(t),n=t4(e),o=er(n,l,!0),i=t_(t,eC),a=t4(t),s=t4(e),u=er(s,a,!0);return r(),i(),o&&u},rn=()=>{let{body:t}=document,e=tl(`<div class="${eE}"><div></div></div>`),r=e[0],l=r.firstChild,[n,,o]=eb(),[a,s]=i({o:rt(t,r,l),u:et},tE(rt,t,r,l,!0)),[u]=s(),c=re(r),d={x:0===u.x,y:0===u.y},f={elements:{host:null,padding:!c,viewport:t=>c&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=I({},ew),y=tE(I,{},p),h=tE(I,{},f),v={L:u,I:d,H:c,A:"-1"===tM(r,"zIndex"),P:!!tO,V:rr(r,l),U:rl(r,l),B:tE(n,"z"),j:tE(n,"r"),N:h,G:t=>I(f,t)&&h(),q:y,W:t=>I(p,t)&&y(),F:I({},f),X:I({},p)},b=tE(ea,tn,"resize"),m=tC(t=>o(t,[]),{v:33,p:99});return L(r,"style"),Q(r),b(tE(m,"r")),c||d.x&&d.y||b(()=>{let t=e7(e8),e=t?t.M():J;e(v,a,tE(m,"z"))}),v},ro=()=>(n||(n=rn()),n),ri=(t,e)=>m(e)?e.apply(0,t):e,ra=(t,e,r,l)=>{let n=f(l)?r:l,o=ri(t,n);return o||e.apply(0,t)},rs=(t,e,r,l)=>{let n=f(l)?r:l,o=ri(t,n);return!!o&&(O(o)?o:e.apply(0,t))},ru=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:l}=e||{},{I:n,H:o,N:i}=ro(),{nativeScrollbarsOverlaid:a,body:s}=i().cancel,u=f(l)?s:l,c=(n.x||n.y)&&(null!=r?r:a),d=t&&(p(u)?!o:u);return!!c||!!d},rc=new WeakMap,rd=(t,e)=>{rc.set(t,e)},rf=t=>{rc.delete(t)},rp=t=>rc.get(t),ry=(t,e,r)=>{let l=!1,n=!!r&&new WeakMap,o=o=>{if(n&&r){let i=r.map(e=>{let[r,l]=e||[],n=l&&r?(o||V)(r,t):[];return[n,l]});S(i,r=>S(r[0],o=>{let i=r[1],a=n.get(o)||[],s=t.contains(o);if(s&&i){let t=ea(o,i.trim(),r=>{l?(t(),n.delete(o)):e(r)});n.set(o,z(a,t))}else T(a),n.delete(o)}))}};return o(),[()=>{l=!0},o]},rh=(t,e,r,l)=>{let n=!1,{Y:o,Z:i,J:a,K:s,tt:u,nt:c}=l||{},d=tC(()=>n&&r(!0),{v:33,p:99}),[f,p]=ry(t,d,a),y=i||[],h=k(o||[],y),v=(n,o)=>{if(!_(o)){let i=u||J,a=c||J,d=[],f=[],h=!1,v=!1;if(S(o,r=>{let{attributeName:n,target:o,type:u,oldValue:c,addedNodes:p,removedNodes:b}=r,m="attributes"===u,g=t===o,w=m&&n,x=w?P(o,n||""):null,$=w&&c!==x,O=C(y,n)&&$;if(e&&("childList"===u||!g)){let e=m&&$,u=e&&s&&q(o,s),f=u?!i(o,n,c,x):!m||e,y=f&&!a(r,!!u,t,l);S(p,t=>z(d,t)),S(b,t=>z(d,t)),v=v||y}!e&&g&&$&&!i(o,n,c,x)&&(z(f,n),h=h||O)}),p(t=>R(d).reduce((e,r)=>(z(e,V(t,r)),q(r,t)?z(e,r):e),[])),e)return!n&&v&&r(!1),[!1];if(!_(f)||h){let t=[R(f),h];return n||r.apply(0,t),t}}},b=new tw(tE(v,!1));return[()=>(b.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:h,subtree:e,childList:e,characterData:e}),n=!0,()=>{n&&(f(),b.disconnect(),n=!1)}),()=>{if(n)return d.m(),v(!0,b.takeRecords())}]},rv=(t,e,r)=>{let l=!1,{ot:n,st:o,et:a}=r||{},s=e7("__osSizeObserverPlugin"),{V:u}=ro(),c=tE(tP,t),[d,f]=tS(33),[p]=i({o:!1,_:!0});return()=>{let r=[f,ea(tn,"resize",()=>{l=!!a,d(()=>{l=!1})})],y=tl(`<div class="${eL}"><div class="${eF}"></div></div>`),h=y[0],v=h.firstChild,b=t=>{let r=t instanceof ResizeObserverEntry,o=!r&&g(t),i=!1,a=!1,s=!0;if(r){let[e,,r]=p(t.contentRect),n=t5(e),o=t6(e,r),u=!r;s=!(i=!(a=u||o)&&(!n||l))}else o?[,s]=t:a=!0===t;if(n&&s){let e=o?t[0]:tP(h);ey(h,{x:ef(3333333,3333333,e&&u),y:3333333})}i||e({ct:o?t:void 0,rt:!o,st:a}),l=!1};if(t$){let t=new t$(t=>b(t.pop()));t.observe(v),z(r,()=>{t.disconnect()})}else{if(!s)return J;let[t,e]=s(v,b,o);z(r,k([t_(h,ej),ea(h,"animationstart",t)],e))}if(n){let[t]=i({o:void 0},c);z(r,ea(h,"scroll",e=>{let r=t(),[l,n,o]=r;n&&(tH(v,"ltr rtl"),t_(v,l?"rtl":"ltr"),b([!!l,n,o])),es(e)}))}return tE(T,z(r,Z(t,h)))}},rb=(t,e)=>{let r;let l=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,n=tr("os-trinsic-observer"),[o]=i({o:!1}),a=(t,r)=>{if(t){let n=o(l(t)),[,i]=n;return i&&!r&&e(n)&&[n]}},s=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(tx)(r=new tx(tE(s,!1),{root:t})).observe(n),z(e,()=>{r.disconnect()});else{let t=()=>{let t=t1(n);a(t)};z(e,rv(n,t)()),t()}return tE(T,z(e,Z(t,n)))},()=>r&&s(!0,r.takeRecords())]},rm=(t,e)=>{let r,l,n,o,a;let{H:s}=ro(),u=`[${eO}]`,c=`[${eN}]`,d=["tabindex"],f=["wrap","cols","rows"],p=["id","class","style","open"],y={lt:!1,it:tP(t.ut)},{ut:b,ft:w,_t:x,dt:$,vt:O,ht:E,gt:z}=t,{U:H}=ro(),[_]=i({u:t8,o:{w:0,h:0}},()=>{let t=E(eR,eR),e=E(eI,""),r=e&&eh(w);z(eR,eR),z(eI,""),z("",eA,!0);let l=t2(x),n=t2(w),o=t9(w);return z(eR,eR,t),z(eI,"",e),z("",eA),ey(w,r),{w:n.w+l.w+o.w,h:n.h+l.h+o.h}}),R=$?f:k(p,f),T=tC(e,{v:()=>r,p:()=>l,g(t,e){let[r]=t,[l]=e;return[k(N(r),N(l)).reduce((t,e)=>(t[e]=r[e]||l[e],t),{})]}}),A=t=>{S(t||d,t=>{if(C(d,t)){let e=P(b,t);v(e)?P(w,t,e):L(w,t)}})},M=(t,r)=>{let[l,n]=t,o={bt:n};return I(y,{lt:l}),r||e(o),o},D=({rt:t,ct:r,st:l})=>{let n=!(t&&!l&&!r)&&s?T:e,[o,i]=r||[];r&&I(y,{it:o}),n({rt:t||l,st:l,wt:i})},j=(t,r)=>{let[,l]=_(),n={yt:l},o=t?e:T;return l&&!r&&o(n),n},F=(t,e,r)=>{let l={St:e};return e&&!r?T(l):O||A(t),l},[X,V]=x||!H?rb(b,M):[],Y=!O&&rv(b,D,{st:!0,ot:!0,et:!0}),[q,B]=rh(b,!1,F,{Z:p,Y:k(p,d)}),U=O&&t$&&new t$(t=>{let e=t[t.length-1].contentRect;D({rt:!0,st:t6(e,a)}),a=e});return[()=>{A(),U&&U.observe(b);let t=Y&&Y(),e=X&&X(),r=q();return()=>{U&&U.disconnect(),t&&t(),e&&e(),o&&o(),r()}},({$t:t,xt:e,Ot:i})=>{let a={},[s]=t("update.ignoreMutation"),[d,f]=t("update.attributes"),[p,y]=t("update.elementEvents"),[v,b]=t("update.debounce"),$=e||i,E=t=>m(s)&&s(t);if(y||f){n&&n(),o&&o();let[t,e]=rh(x||w,!0,j,{Y:k(R,d||[]),J:p,K:u,nt:(t,e)=>{let{target:r,attributeName:l}=t,n=!e&&!!l&&!O&&K(r,u,c);return n||!!W(r,`.${eX}`)||!!E(t)}});o=t(),n=e}if(b){if(T.m(),g(v)){let t=v[0],e=v[1];r=h(t)&&t,l=h(e)&&e}else r=!!h(v)&&v,l=!1}if($){let t=B(),e=V&&V(),r=n&&n();t&&I(a,F(t[0],t[1],$)),e&&I(a,M(e[0],$)),r&&I(a,j(r[0],$))}return a},y]},rg=(t,e,r)=>to(t,ti(e,r)),rw=(t,e,r)=>{let l=ta(e),[n,o]=ep(l,r),i=t/o,a=r?r.n?(o-t)/o:r.i?t/n:i:i;return rg(0,1,a)},rx=(t,e,r,l)=>{if(l){let t=r?"x":"y",{Ct:e,zt:n}=l,o=n[t],i=e[t];return rg(0,1,o/(o+i))}let n=r?tK:tJ,o=t4(t)[n],i=t4(e)[n];return rg(0,1,o/i)},r$=(t,e,r,l,n,o)=>{let{V:i}=ro(),a=o?"x":"y",s=o?"Left":"Top",{Ct:u}=l,c=rx(t,e,o);return 1/c*(1-c)*rw(r[`scroll${s}`],u[a],o&&n&&i)},rO=(t,e,r)=>{let{N:l,A:n}=ro(),{scrollbars:o}=l(),{slot:i}=o,{Ht:a,ut:s,ft:u,It:c,At:d,Et:f,vt:p}=e,{scrollbars:y}=c?{}:t,{slot:h}=y||{},v=new Map,m=t=>tO&&new tO({source:d,axis:t}),w=m("x"),x=m("y"),$=rs([a,s,u],()=>p&&f?a:s,i,h),O=t=>p&&!f&&U(t)===u,E=t=>{v.forEach((e,r)=>{let l=!t||C(g(t)?t:[t],r);l&&((e||[]).forEach(t=>{t&&t.cancel()}),v.delete(r))})},H=(t,e,r)=>{let l=r?t_:tH;S(t,t=>{l(t.Tt,e)})},R=(t,e)=>{S(t,t=>{let[r,l]=e(t);tM(r,l)})},A=(t,e,r)=>{R(t,t=>{let{Dt:l,Rt:n}=t;return[l,{[r?tK:tJ]:`${(100*rx(l,n,r,e)).toFixed(3)}%`}]})},N=(t,e,r)=>{x||x||R(t,t=>{let{Dt:l,Rt:n,Tt:o}=t,i=r$(l,n,d,e,tP(o),r);return[l,{transform:i==i?tL(`${(100*i).toFixed(3)}%`,r):""}]})},I=t=>{let{Tt:e}=t,r=O(e)&&e,l=eh(d);return[r,{transform:r?tL({x:`${l.x}px`,y:`${l.y}px`}):""}]},M=(t,e,r,l)=>e&&t.animate(r,{timeline:e,composite:l}),P=(t,e,r,l)=>M(t,e,{transform:[tL("0px",l),tL(`${to(0,r-.5)}px`,l)]},"add"),D=[],L=[],j=[],F=(t,e,r)=>{let l=b(r),n=!l||r,o=!l||!r;n&&H(L,t,e),o&&H(j,t,e)},X=t=>{let e=t?eY:eq,l=t?L:j,o=_(l)?eJ:"",i=tr(`${eX} ${e} ${o}`),a=tr(eB),s=tr(eU),u={Tt:i,Rt:a,Dt:s};return n||t_(i,"os-no-css-vars"),z(l,u),z(D,[Z(i,a),Z(a,s),tE(Q,i),E,r(u,F,t)]),u},V=tE(X,!0),Y=tE(X,!1);return V(),Y(),[{kt:t=>{A(L,t,!0),A(j,t)},Mt:t=>{N(L,t,!0),N(j,t)},Lt:()=>{let t=(t,{Tt:e,Dt:r})=>{let l=t&&tP(e);E(r),v.set(r,[M(r,t?w:x,{transform:[tL("0%",t),tL(t&&l?"100%":"-100%",t)],[t?l?"right":"left":"top"]:["0%","100%"]})])};L.forEach(tE(t,!0)),j.forEach(tE(t,!1))},Pt:({Ct:t})=>{k(j,L).forEach(({Tt:e})=>{E(e),O(e)&&v.set(e,[P(e,w,t.x,!0),P(e,x,t.y)])})},Vt:()=>{x||x||(p&&R(L,I),p&&R(j,I))},Ut:F,Bt:{P:w,jt:L,Nt:V,Gt:tE(R,L)},qt:{P:x,jt:j,Nt:Y,Gt:tE(R,j)}},()=>(Z($,L[0].Tt),Z($,j[0].Tt),tc(()=>{F(eJ)},300),tE(T,D))]},rE=(t,e,r)=>{let{ut:l,At:n,Wt:o}=e,i=(e,i)=>{let{Dt:a,Rt:s}=e,u=`scroll${i?"Left":"Top"}`,c=`client${i?"X":"Y"}`,d=i?tK:tJ,f=i?"left":"top",p=i?"w":"h",y=i?"x":"y",h="pointerup pointerleave pointercancel lostpointercapture",v=(t,e)=>l=>{let{Ct:o}=r,i=t1(s)[p]-t1(a)[p],c=e*l/i*o[y];n[u]=t+c};return ea(s,"pointerdown",e=>{let r=W(e.target,`.${eU}`)===a,i=r?a:s,y=t.scrollbars,{button:b,isPrimary:m,pointerType:g}=e,{pointers:w}=y,x=0===b&&m&&y[r?"dragScroll":"clickScroll"]&&(w||[]).includes(g);if(j(l,eO,eT,!0),x){let t=!r&&e.shiftKey,y=tE(t4,a),b=tE(t4,s),m=(t,e)=>(t||y())[f]-(e||b())[f],g=ta(t4(n)[d])/t1(n)[p]||1,w=v(n[u]||0,1/g),x=e[c],$=y(),O=b(),E=$[d],S=m($,O)+E/2,C=x-O[f],k=r?0:C-S,H=t=>{T(_),i.releasePointerCapture(t.pointerId)},_=[tE(j,l,eO,eT),ea(o,h,H),ea(o,"selectstart",t=>eu(t),{S:!1}),ea(s,h,H),ea(s,"pointermove",e=>{let l=e[c]-x;(r||t)&&w(k+l)})];if(t)w(k);else if(!r){let t=e7("__osClickScrollPlugin");t&&z(_,t(w,m,k,E,C))}i.setPointerCapture(e.pointerId)}})};return(t,e,r)=>{let{Tt:a}=t,[s,u]=tS(333),c=!!n.scrollBy,d=!0;return tE(T,[ea(a,"pointerenter",()=>{e(eQ,!0)}),ea(a,"pointerleave pointercancel",()=>{e(eQ,!1)}),ea(a,"wheel",t=>{let{deltaX:r,deltaY:o,deltaMode:i}=t;c&&d&&0===i&&U(a)===l&&n.scrollBy({left:r,top:o,behavior:"smooth"}),d=!1,e(e1,!0),s(()=>{d=!0,e(e1)}),eu(t)},{S:!1,$:!0}),ea(a,"mousedown",tE(ea,o,"click",es,{O:!0,$:!0}),{$:!0}),i(t,r),u])}},rS=(t,e,r,l,n,o)=>{let i,a,s,u,c;let d=J,f=0,[p,y]=tS(),[h,v]=tS(),[b,m]=tS(100),[g,w]=tS(100),[x,$]=tS(100),[O,E]=tS(()=>f),[S,C]=rO(t,n,rE(e,n,l)),{ut:k,Ft:H,Et:_}=n,{Ut:R,kt:A,Mt:N,Lt:I,Pt:M,Vt:P}=S,D=t=>{R(eZ,t,!0),R(eZ,t,!1)},L=(t,e)=>{if(E(),t)R(e0);else{let t=tE(R,e0,!0);f>0&&!e?O(t):t()}},j=t=>"mouse"===t.pointerType,F=t=>{j(t)&&(u=a)&&L(!0)},X=[m,E,w,$,v,y,()=>d(),ea(k,"pointerover",F,{O:!0}),ea(k,"pointerenter",F),ea(k,"pointerleave",t=>{j(t)&&(u=!1,a&&L(!1))}),ea(k,"pointermove",t=>{j(t)&&i&&p(()=>{m(),L(!0),g(()=>{i&&L(!1)})})}),ea(H,"scroll",t=>{h(()=>{N(l),s&&L(!0),b(()=>{s&&!u&&L(!1)})}),o(t),P()})];return[()=>tE(T,z(X,C())),({$t:t,Ot:e,Xt:n,Yt:o})=>{let{Zt:u,Jt:p,Kt:y}=o||{},{wt:h,st:v}=n||{},{it:b}=r,{I:m}=ro(),{Ct:g,Qt:w,tn:$}=l,[O,E]=t("showNativeOverlaidScrollbars"),[S,C]=t("scrollbars.theme"),[k,z]=t("scrollbars.visibility"),[T,j]=t("scrollbars.autoHide"),[F,X]=t("scrollbars.autoHideSuspend"),[V]=t("scrollbars.autoHideDelay"),[Y,q]=t("scrollbars.dragScroll"),[B,U]=t("scrollbars.clickScroll"),W=$.x||$.y,K=O&&m.x&&m.y,J=(t,e)=>{let r="visible"===k||"auto"===k&&"scroll"===t;return R(eW,r,e),r};if(f=V,v&&!e&&(F&&W?(D(!1),d(),x(()=>{d=ea(H,"scroll",tE(D,!0),{O:!0})})):D(!0)),E&&R("os-theme-none",K),C&&(R(c),R(S,!0),c=S),X&&!F&&D(!0),j&&(i="move"===T,a="leave"===T,L(!(s="never"!==T),!0)),q&&R(e2,Y),U&&R(e3,B),y||z){let t=J(w.x,!0),e=J(w.y,!1),r=t&&e;R(eK,!r)}(u||p||h||e)&&(A(l),N(l),I(l),P(),M(l),R(eG,!g.x,!0),R(eG,!g.y,!1),R(eV,b&&!_))},{},S]},rC=t=>{let e=ro(),{N:r,H:l}=e,n=e7(e8),o=n&&n.C,{elements:i}=r(),{host:a,padding:s,viewport:u,content:c}=i,d=O(t),f=d?{}:t,{elements:p}=f,{host:y,padding:h,viewport:v,content:b}=p||{},m=d?t:f.target,g=q(m,"textarea"),w=m.ownerDocument,x=w.documentElement,$=m===w.body,E=w.defaultView,S=tE(ra,[m]),k=tE(rs,[m]),H=tE(ri,[m]),_=tE(tr,""),R=tE(S,_,u),A=tE(k,_,c),I=R(v),M=I===m,D=M&&$,X=!M&&A(b),V=!M&&O(I)&&I===X,Y=V&&!!H(c),W=Y?R():I,K=Y?X:A(),G=V?W:I,tl=D?x:G,tn=g?S(_,a,y):m,to=D?tl:tn,ti=w.activeElement,ta=!M&&E.top===E&&ti===m,ts={Ht:m,ut:to,ft:tl,nn:!M&&k(_,s,h),_t:V?K:X,sn:!M&&!l&&o&&o(e),At:D?x:tl,Ft:D?w:tl,en:E,Wt:w,dt:g,Et:$,It:d,vt:M,cn:V,ht:(t,e)=>F(tl,M?eO:eN,M?e:t),gt:(t,e,r)=>j(tl,M?eO:eN,M?e:t,r)},tu=N(ts).reduce((t,e)=>{let r=ts[e];return z(t,!!(r&&O(r))&&!U(r)&&r)},[]),tc=t=>t?C(tu,t):null,{Ht:td,ut:tf,nn:tp,ft:ty,_t:th,sn:tv}=ts,tb=[()=>{L(tf,eO),L(tf,ez),L(td,ez),$&&(L(x,eO),L(x,ez))}],tm=g&&tc(tf),tg=g?td:B([th,ty,tp,tf,td].find(t=>!1===tc(t))),tw=D?td:th||ty,tx=tE(T,tb);return[ts,()=>{P(tf,eO,M?"viewport":"host"),P(tp,eP,""),P(th,eD,""),M||P(ty,eN,"");let t=$&&!M?t_(U(m),ek):J,e=t=>{Z(U(t),B(t)),Q(t)};if(tm&&(te(td,tf),z(tb,()=>{te(tf,td),Q(tf)})),Z(tw,tg),Z(tf,tp),Z(tp||tf,!M&&ty),Z(ty,th),z(tb,()=>{t(),L(tp,eP),L(th,eD),L(ty,eH),L(ty,e_),L(ty,eN),tc(th)&&e(th),tc(ty)&&e(ty),tc(tp)&&e(tp)}),l&&!M&&(j(ty,eN,eM,!0),z(tb,tE(L,ty,eN))),tv&&(tt(ty,tv),z(tb,tE(Q,tv))),ta){let t="tabindex",e=P(ty,t);P(ty,t,"-1"),ty.focus();let r=()=>e?P(ty,t,e):L(ty,t),l=ea(w,"pointerdown keydown",()=>{r(),l()});z(tb,[r,l])}else ti&&ti.focus&&ti.focus();return tg=0,tx},tx]},rk=({_t:t})=>({Xt:e,rn:r,Ot:l})=>{let{U:n}=ro(),{bt:o}=e||{},{lt:i}=r,a=(t||!n)&&(o||l);a&&tM(t,{[tJ]:i?"":"100%"})},rz=({ut:t,nn:e,ft:r,vt:l},n)=>{let[o,a]=i({u:ee,o:tD()},tE(tD,t,"padding",""));return({$t:t,Xt:i,rn:s,Ot:u})=>{let[c,d]=a(u),{H:f,U:p}=ro(),{rt:y,yt:h,wt:v}=i||{},{it:b}=s,[m,g]=t("paddingAbsolute"),w=u||!p&&h;(y||d||w)&&([c,d]=o(u));let x=!l&&(g||v||d);if(x){let t=!m||!e&&!f,l=c.r+c.l,o=c.t+c.b,i={[tq]:t&&!b?-l:0,[tB]:t?-o:0,[tY]:t&&b?-l:0,top:t?-c.t:0,right:t?b?-c.r:"auto":0,left:t?b?"auto":-c.l:0,[tK]:t?`calc(100% + ${l}px)`:""},a={[tj]:t?c.t:0,[tF]:t?c.r:0,[tV]:t?c.b:0,[tX]:t?c.l:0};tM(e||r,i),tM(r,a),I(n,{nn:c,ln:!t,D:e?a:I({},i,a)})}return{an:x}}},rH=({ut:t,nn:e,ft:r,sn:l,vt:n,gt:o,Et:a,en:s},u)=>{let c=tE(to,0),d="visible",f={u:t8,o:{w:0,h:0}},p=(t,e)=>{let r=tn.devicePixelRatio%1!=0?1:0,l={w:c(t.w-e.w),h:c(t.h-e.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},y=t=>0===t.indexOf(d),{L:h,U:v,H:b,I:m}=ro(),g=e7(e8),w=!n&&!b&&(m.x||m.y),x=a&&n,[$,O]=i(f,tE(t9,r)),[E,S]=i(f,tE(t2,r)),[C,k]=i(f),[z,H]=i(f),[_]=i({u:et,o:{x:tQ,y:tQ}}),R=(e,l)=>{if(tM(r,{[tJ]:""}),l){let{ln:l,nn:n}=u,{un:o,R:i}=e,a=t9(t),s=t3(t),c="content-box"===tM(r,"boxSizing"),d=l||c?n.b+n.t:0,f=!(m.x&&c);tM(r,{[tJ]:s.h+a.h+(o.x&&f?i.x:0)-d})}},T=(t,e)=>{let l=b||t?0:42,n=(t,n,o)=>{let i=tM(r,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!b?n?l:o:0,n&&!!l]},[o,i,a,s]=n(tU,m.x,h.x),[u,c,d,f]=n(tW,m.y,h.y);return{Qt:{x:o,y:u},un:{x:i,y:c},R:{x:a,y:d},k:{x:s,y:f}}},A=(t,e,r,l)=>{let n=(t,e)=>{let r=y(t),l=e&&r&&t.replace(`${d}-`,"")||"";return[e&&!r?t:"",y(l)?"hidden":l]},[o,i]=n(r.x,e.x),[a,s]=n(r.y,e.y);return l[tU]=i&&a?i:o,l[tW]=s&&o?s:a,T(t,l)},N=(t,e,r,l)=>{let{R:n,k:o}=t,{x:i,y:a}=o,{x:s,y:c}=n,{D:d}=u,f=e?tY:tq,p=e?tX:tF,y=d[f],h=d[tB],v=d[p],b=d[tV];l[tK]=`calc(100% + ${c+-1*y}px)`,l[f]=-c+y,l[tB]=-s+h,r&&(l[p]=v+(a?c:0),l[tV]=b+(i?s:0))},[M,D]=g?g.T(w,v,r,l,u,T,N):[()=>w,()=>[J]];return({$t:l,Xt:i,rn:a,Ot:d},{an:f})=>{let h;let{rt:g,St:w,yt:L,bt:F,wt:X}=i||{},{lt:V,it:Y}=a,[q,B]=l("showNativeOverlaidScrollbars"),[U,W]=l("overflow"),K=q&&m.x&&m.y,J=!n&&!v&&(g||L||w||B||F),Q=g||f||L||X||B,G=y(U.x),Z=y(U.y),tt=G||Z,te=O(d),tr=S(d),tl=k(d),tn=H(d);if(B&&b&&o(eM,"scrollbarHidden",!K),J&&R(h=T(K),V),Q){tt&&o(eR,eR,!1);let[t,e]=D(K,Y,h),[l,n]=te=$(d),[i,a]=tr=E(d),u=t3(r),f=i,y=u;t(),(a||n||B)&&e&&!K&&M(e,i,l,Y)&&(y=t3(r),f=t2(r));let v=t0(s),b={w:c(to(i.w,f.w)+l.w),h:c(to(i.h,f.h)+l.h)},m={w:c((x?v.w:y.w+c(u.w-i.w))+l.w),h:c((x?v.h:y.h+c(u.h-i.h))+l.h)};tn=z(m),tl=C(p(b,m),d)}let[ti,ta]=tn,[ts,tu]=tl,[tc,td]=tr,[tf,tp]=te,ty={x:ts.w>0,y:ts.h>0},th=G&&Z&&(ty.x||ty.y)||G&&ty.x&&!ty.y||Z&&ty.y&&!ty.x;if(f||X||tp||td||ta||tu||W||B||J||Q){let e={[tq]:0,[tB]:0,[tY]:0,[tK]:"",[tU]:"",[tW]:""},l=A(K,ty,U,e),o=M(l,tc,tf,Y);n||N(l,Y,o,e),J&&R(l,V),n?(P(t,eH,e[tU]),P(t,e_,e[tW])):tM(r,e)}j(t,eO,eR,th),j(e,eP,eR,th),n||j(r,eN,eR,tt);let[tv,tb]=_(T(K).Qt);return I(u,{Qt:tv,zt:{x:ti.w,y:ti.h},Ct:{x:ts.w,y:ts.h},tn:ty}),{Kt:tb,Zt:ta,Jt:tu}}},r_=t=>{let[e,r,l]=rC(t),n={nn:{t:0,r:0,b:0,l:0},ln:!1,D:{[tq]:0,[tB]:0,[tY]:0,[tj]:0,[tF]:0,[tV]:0,[tX]:0},zt:{x:0,y:0},Ct:{x:0,y:0},Qt:{x:tQ,y:tQ},tn:{x:!1,y:!1}},{Ht:o,ft:i,gt:a,vt:s}=e,{H:u,I:c,U:d}=ro(),f=!u&&(c.x||c.y),p=[rk(e),rz(e,n),rH(e,n)];return[r,t=>{let e={},r=(f||!d)&&eh(i);return a("",eA,!0),S(p,r=>{I(e,r(t,e)||{})}),a("",eA),ey(i,r),s||ey(o,0),e},n,e,l]},rR=(t,e,r,l)=>{let[n,o,i,a,s]=r_(t),[u,c,d]=rm(a,t=>{b({},t)}),[f,p,,y]=rS(t,e,d,i,a,l),h=t=>S(I({},t),(t,e,r)=>{r[e]=!!t}),v=t=>N(t).some(e=>!!t[e]),b=(t,l)=>{let{fn:n,Ot:i,xt:a,_n:s,dn:u}=t,f=n||{},y=!!i,b={$t:e$(e,f,y),fn:f,Ot:y};if(s)return p(b),!1;let m=l||c(I({},b,{xt:a}));u&&I(m,{rt:!0,yt:!0});let g=o(I({},b,{rn:d,Xt:m}));p(I({},b,{Xt:m,Yt:g}));let w=v(m),x=v(g),$=w||x||!M(f)||y;return $&&r(t,{Xt:h(m),Yt:h(g)}),$};return[()=>{let{Ht:t,ft:e,Wt:r,Et:l}=a,o=l?r.documentElement:t,i=eh(o),s=[u(),n(),f()];return ey(e,i),tE(T,s)},b,()=>({vn:d,hn:i}),{pn:a,gn:y},s]},rT=(t,e,r)=>{let{q:l,B:n,j:o}=ro(),i=O(t),a=i?t:t.target,s=rp(a);if(e&&!s){let s=!1,u=[],c={},d=t=>{let e=e7("__osOptionsValidationPlugin");return e?e(t,!0):t},f=I({},l(),d(e)),[p,y,h]=eb(),[v,b,m]=eb(r),g=(t,e)=>{m(t,e),h(t,e)},[w,x,$,O,E]=rR(t,f,({fn:t,Ot:e},{Xt:r,Yt:l})=>{let{rt:n,wt:o,bt:i,yt:a,St:s}=r,{Zt:u,Jt:c,Kt:d}=l;g("updated",[C,{updateHints:{sizeChanged:n,directionChanged:o,heightIntrinsicChanged:i,overflowEdgeChanged:u,overflowAmountChanged:c,overflowStyleChanged:d,contentMutation:a,hostMutation:s},changedOptions:t||{},force:!!e}])},t=>g("scroll",[C,t])),S=t=>{rf(a),T(u),s=!0,g("destroyed",[C,t]),y(),b()},C={options(t,e){if(t){let r=e?l():{},n=ex(f,I(r,d(t)));M(n)||(I(f,n),x({fn:n}))}return I({},f)},on:v,off:(t,e)=>{t&&e&&b(t,e)},state(){let{vn:t,hn:e}=$(),{it:r}=t,{zt:l,Ct:n,Qt:o,tn:i,nn:a,ln:u}=e;return I({},{overflowEdge:l,overflowAmount:n,overflowStyle:o,hasOverflow:i,padding:a,paddingAbsolute:u,directionRTL:r,destroyed:s})},elements(){let{Ht:t,ut:e,nn:r,ft:l,_t:n,At:o,Ft:i}=O.pn,{Bt:a,qt:s}=O.gn,u=t=>{let{Dt:e,Rt:r,Tt:l}=t;return{scrollbar:l,track:r,handle:e}},c=t=>{let{jt:e,Nt:r}=t,l=u(e[0]);return I({},l,{clone:()=>{let t=u(r());return x({_n:!0}),t}})};return I({},{target:t,host:e,padding:r||l,viewport:l,content:n||l,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:c(a),scrollbarVertical:c(s)})},update:t=>x({Ot:t,xt:!0}),destroy:tE(S,!1),plugin:t=>c[N(t)[0]]},k=()=>{let{hn:t}=$(),{tn:e}=t,r=e.x||e.y;r&&x({dn:r})};return(z(u,[n(k),o(k),E]),rd(a,C),e6(e9,rT,[C,p,c]),ru(O.pn.Et,!i&&t.cancel))?S(!0):(z(u,w()),g("initialized",[C]),C.update(!0)),C}return s};rT.plugin=t=>{let e=g(t),r=e?t:[t],l=r.map(t=>e6(t,rT)[0]);return e5(r),e?l:l[0]},rT.valid=t=>{let e=t&&t.elements,r=m(e)&&e();return $(r)&&!!rp(r.target)},rT.env=()=>{let{L:t,I:e,H:r,V:l,U:n,A:o,P:i,F:a,X:s,N:u,G:c,q:d,W:f}=ro();return I({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,scrollTimeline:i,staticDefaultInitialization:a,staticDefaultOptions:s,getDefaultInitialization:u,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};let rA=()=>{let t,e;if(typeof window>"u"){let t=()=>{};return[t,t]}let r=window,l="function"==typeof r.requestIdleCallback,n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,a=l?r.cancelIdleCallback:o,s=()=>{a(t),o(e)};return[(r,o)=>{s(),t=i(l?()=>{s(),e=n(r)}:r,"object"==typeof o?o:{timeout:2233})},s]},rN=t=>{let{options:e,events:r,defer:l}=t||{},[n,i]=(0,o.useMemo)(rA,[]),a=(0,o.useRef)(null),s=(0,o.useRef)(l),u=(0,o.useRef)(e),c=(0,o.useRef)(r);return(0,o.useEffect)(()=>{s.current=l},[l]),(0,o.useEffect)(()=>{let{current:t}=a;u.current=e,rT.valid(t)&&t.options(e||{},!0)},[e]),(0,o.useEffect)(()=>{let{current:t}=a;c.current=r,rT.valid(t)&&t.on(r||{},!0)},[r]),(0,o.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,o.useMemo)(()=>[t=>{let e=a.current;if(rT.valid(e))return;let r=s.current,l=u.current||{},o=c.current||{},i=()=>a.current=rT(t,l,o);r?n(i,r):i()},()=>a.current],[])},rI=(0,o.forwardRef)((t,e)=>{let{element:r="div",options:l,events:n,defer:i,children:a,...s}=t,u=(0,o.useRef)(null),c=(0,o.useRef)(null),[d,f]=rN({options:l,events:n,defer:i});return(0,o.useEffect)(()=>{let{current:t}=u,{current:e}=c;return t&&e&&d({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,o.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),o.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...s},o.createElement("div",{"data-overlayscrollbars-contents":"",ref:c},a))})},2115:function(t,e,r){r.d(e,{r:function(){return u}});var l=r(7437),n=r(4440),o=r.n(n),i=r(1396),a=r.n(i),s=r(2265);let u=(0,s.forwardRef)((t,e)=>{let{external:r,...n}=t,i=o()("no-underline text-primary-blue2 font-medium [background:linear-gradient(0deg,currentColor,currentColor)_no-repeat_right_bottom_/_0_2px]","[transition:background-size_250ms] hover:[background-size:100%_2px] hover:[background-position-x:left]","focus-visible:rounded-sm",n.className);return r?(0,l.jsx)("a",{...n,ref:e,className:i}):(0,l.jsx)(a(),{...n,ref:e,className:i})})}}]);