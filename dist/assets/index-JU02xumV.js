(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $c(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},is=[],hn=()=>{},Ky=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),gt=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gy=Object.prototype.hasOwnProperty,Pe=(t,e)=>Gy.call(t,e),ue=Array.isArray,os=t=>Li(t)==="[object Map]",Aa=t=>Li(t)==="[object Set]",Gh=t=>Li(t)==="[object Date]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",gn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",yp=t=>(Ve(t)||pe(t))&&pe(t.then)&&pe(t.catch),Ep=Object.prototype.toString,Li=t=>Ep.call(t),Qy=t=>Li(t).slice(8,-1),Tp=t=>Li(t)==="[object Object]",Kc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=$c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jy=/-(\w)/g,Wt=ba(t=>t.replace(Jy,(e,n)=>n?n.toUpperCase():"")),Xy=/\B([A-Z])/g,$r=ba(t=>t.replace(Xy,"-$1").toLowerCase()),Ra=ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sl=ba(t=>t?`on${Ra(t)}`:""),ir=(t,e)=>!Object.is(t,e),bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qh;const Sa=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?tE(r):Gc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||Ve(t))return t}const Yy=/;(?![^(]*\))/g,Zy=/:([^]+)/,eE=/\/\*[^]*?\*\//g;function tE(t){const e={};return t.replace(eE,"").split(Yy).forEach(n=>{if(n){const r=n.split(Zy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bn(t){let e="";if(ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=bn(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rE=$c(nE);function vp(t){return!!t||t===""}function sE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Pa(t[r],e[r]);return n}function Pa(t,e){if(t===e)return!0;let n=Gh(t),r=Gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=gn(t),r=gn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?sE(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Pa(t[o],e[o]))return!1}}return String(t)===String(e)}function iE(t,e){return t.findIndex(n=>Pa(n,e))}const Ip=t=>!!(t&&t.__v_isRef===!0),jt=t=>ze(t)?t:t==null?"":ue(t)||Ve(t)&&(t.toString===Ep||!pe(t.toString))?Ip(t)?jt(t.value):JSON.stringify(t,Ap,2):String(t),Ap=(t,e)=>Ip(e)?Ap(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pl(r,i)+" =>"]=s,n),{})}:Aa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pl(n))}:gn(e)?Pl(e):Ve(e)&&!ue(e)&&!Tp(e)?String(e):e,Pl=(t,e="")=>{var n;return gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class oE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function aE(){return Nt}let De;const Cl=new WeakSet;class bp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cl.has(this)&&(Cl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jh(this),Pp(this);const e=De,n=Xt;De=this,Xt=!0;try{return this.fn()}finally{Cp(this),De=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xc(e);this.deps=this.depsTail=void 0,Jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ec(this)&&this.run()}get dirty(){return ec(this)}}let Rp=0,oi,ai;function Sp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Qc(){Rp++}function Jc(){if(--Rp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xc(r),lE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yi))return;t.globalVersion=yi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ec(t)){t.flags&=-3;return}const n=De,r=Xt;De=t,Xt=!0;try{Pp(t);const s=t.fn(t._value);(e.version===0||ir(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Xt=r,Cp(t),t.flags&=-3}}function Xc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const Op=[];function mr(){Op.push(Xt),Xt=!1}function gr(){const t=Op.pop();Xt=t===void 0?!0:t}function Jh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let yi=0;class cE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Xt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new cE(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Np(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,yi++,this.notify(e)}notify(e){Qc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jc()}}}function Np(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Np(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tc=new WeakMap,Dr=Symbol(""),nc=Symbol(""),Ei=Symbol("");function ut(t,e,n){if(Xt&&De){let r=tc.get(t);r||tc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yc),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=tc.get(t);if(!o){yi++;return}const l=c=>{c&&c.trigger()};if(Qc(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&Kc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ei||!gn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ei)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Dr)),os(t)&&l(o.get(nc)));break;case"delete":c||(l(o.get(Dr)),os(t)&&l(o.get(nc)));break;case"set":os(t)&&l(o.get(Dr));break}}Jc()}function Yr(t){const e=Se(t);return e===t?e:(ut(e,"iterate",Ei),$t(t)?e:e.map(ht))}function Ca(t){return ut(t=Se(t),"iterate",Ei),t}const uE={__proto__:null,[Symbol.iterator](){return kl(this,Symbol.iterator,ht)},concat(...t){return Yr(this).concat(...t.map(e=>ue(e)?Yr(e):e))},entries(){return kl(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return vn(this,"find",t,e,ht,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ol(this,"includes",t)},indexOf(...t){return Ol(this,"indexOf",t)},join(t){return Yr(this).join(t)},lastIndexOf(...t){return Ol(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Xh(this,"reduce",t,e)},reduceRight(t,...e){return Xh(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return Yr(this).toReversed()},toSorted(t){return Yr(this).toSorted(t)},toSpliced(...t){return Yr(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return kl(this,"values",ht)}};function kl(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const hE=Array.prototype;function vn(t,e,n,r,s,i){const o=Ca(t),l=o!==t&&!$t(t),c=o[e];if(c!==hE[e]){const p=c.apply(t,i);return l?ht(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ht(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Xh(t,e,n,r){const s=Ca(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ht(l),c,t)}),s[e](i,...r)}function Ol(t,e,n){const r=Se(t);ut(r,"iterate",Ei);const s=r[e](...n);return(s===-1||s===!1)&&tu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){mr(),Qc();const r=Se(t)[e].apply(t,n);return Jc(),gr(),r}const fE=$c("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gn));function dE(t){gn(t)||(t=String(t));const e=Se(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?IE:Fp:i?Mp:Lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=uE[n]))return c;if(n==="hasOwnProperty")return dE}const l=Reflect.get(e,n,mt(e)?e:r);return(gn(n)?Dp.has(n):fE(n))||(s||ut(e,"get",n),i)?l:mt(l)?o&&Kc(n)?l:l.value:Ve(l)?s?Bp(l):ka(l):l}}class xp extends Vp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Lr(i);if(!$t(r)&&!Lr(r)&&(i=Se(i),r=Se(r)),!ue(e)&&mt(i)&&!mt(r))return c?!1:(i.value=r,!0)}const o=ue(e)&&Kc(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,mt(e)?e:s);return e===Se(s)&&(o?ir(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gn(n)||!Dp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",ue(e)?"length":Dr),Reflect.ownKeys(e)}}class pE extends Vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mE=new xp,gE=new pE,_E=new xp(!0);const rc=t=>t,go=t=>Reflect.getPrototypeOf(t);function yE(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=os(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?rc:e?sc:ht;return!e&&ut(i,"iterate",c?nc:Dr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function _o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function EE(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(ir(s,l)&&ut(o,"get",s),ut(o,"get",l));const{has:c}=go(o),u=e?rc:t?sc:ht;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(Se(s),"iterate",Dr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(ir(s,l)&&ut(o,"has",s),ut(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?rc:t?sc:ht;return!t&&ut(c,"iterate",Dr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return gt(n,t?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(s){!e&&!$t(s)&&!Lr(s)&&(s=Se(s));const i=Se(this);return go(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!Lr(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=go(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?ir(i,f)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=go(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Rn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yE(s,t,e)}),n}function Zc(t,e){const n=EE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const TE={get:Zc(!1,!1)},wE={get:Zc(!1,!0)},vE={get:Zc(!0,!1)};const Lp=new WeakMap,Mp=new WeakMap,Fp=new WeakMap,IE=new WeakMap;function AE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bE(t){return t.__v_skip||!Object.isExtensible(t)?0:AE(Qy(t))}function ka(t){return Lr(t)?t:eu(t,!1,mE,TE,Lp)}function Up(t){return eu(t,!1,_E,wE,Mp)}function Bp(t){return eu(t,!0,gE,vE,Fp)}function eu(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function as(t){return Lr(t)?as(t.__v_raw):!!(t&&t.__v_isReactive)}function Lr(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function tu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function RE(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&wp(t,"__v_skip",!0),t}const ht=t=>Ve(t)?ka(t):t,sc=t=>Ve(t)?Bp(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function on(t){return jp(t,!1)}function SE(t){return jp(t,!0)}function jp(t,e){return mt(t)?t:new PE(t,e)}class PE{constructor(e,n){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Lr(e);e=r?e:Se(e),ir(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function ls(t){return mt(t)?t.value:t}const CE={get:(t,e,n)=>e==="__v_raw"?t:ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qp(t){return as(t)?t:new Proxy(t,CE)}class kE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Sp(this,!0),!0}get value(){const e=this.dep.track();return kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function OE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new kE(r,s,n)}const yo={},zo=new WeakMap;let Rr;function NE(t,e=!1,n=Rr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function DE(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=z=>s?z:$t(z)||s===!1||s===0?Sn(z,1):Sn(z);let f,p,m,_,b=!1,O=!1;if(mt(t)?(p=()=>t.value,b=$t(t)):as(t)?(p=()=>u(t),b=!0):ue(t)?(O=!0,b=t.some(z=>as(z)||$t(z)),p=()=>t.map(z=>{if(mt(z))return z.value;if(as(z))return u(z);if(pe(z))return c?c(z,2):z()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){mr();try{m()}finally{gr()}}const z=Rr;Rr=f;try{return c?c(t,3,[_]):t(_)}finally{Rr=z}}:p=hn,e&&s){const z=p,re=s===!0?1/0:s;p=()=>Sn(z(),re)}const S=aE(),B=()=>{f.stop(),S&&S.active&&Wc(S.effects,f)};if(i&&e){const z=e;e=(...re)=>{z(...re),B()}}let U=O?new Array(t.length).fill(yo):yo;const q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const re=f.run();if(s||b||(O?re.some((ae,I)=>ir(ae,U[I])):ir(re,U))){m&&m();const ae=Rr;Rr=f;try{const I=[re,U===yo?void 0:O&&U[0]===yo?[]:U,_];c?c(e,3,I):e(...I),U=re}finally{Rr=ae}}}else f.run()};return l&&l(q),f=new bp(p),f.scheduler=o?()=>o(q,!1):q,_=z=>NE(z,!1,f),m=f.onStop=()=>{const z=zo.get(f);if(z){if(c)c(z,4);else for(const re of z)re();zo.delete(f)}},e?r?q(!0):U=f.run():o?o(q.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Sn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,mt(t))Sn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Aa(t)||os(t))t.forEach(r=>{Sn(r,e,n)});else if(Tp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function _n(t,e,n,r){if(pe(t)){const s=Mi(t,e,n,r);return s&&yp(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){mr(),Mi(i,null,10,[t,c,u]),gr();return}}VE(t,n,s,r,o)}function VE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let an=-1;const cs=[];let Yn=null,Zr=0;const Hp=Promise.resolve();let Wo=null;function nu(t){const e=Wo||Hp;return t?e.then(this?t.bind(this):t):e}function xE(t){let e=an+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Ti(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ru(t){if(!(t.flags&1)){const e=Ti(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Ti(n)?wt.push(t):wt.splice(xE(e),0,t),t.flags|=1,$p()}}function $p(){Wo||(Wo=Hp.then(Wp))}function LE(t){ue(t)?cs.push(...t):Yn&&t.id===-1?Yn.splice(Zr+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),$p()}function Yh(t,e,n=an+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zp(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>Ti(n)-Ti(r));if(cs.length=0,Yn){Yn.push(...e);return}for(Yn=e,Zr=0;Zr<Yn.length;Zr++){const n=Yn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Yn=null,Zr=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wp(t){try{for(an=0;an<wt.length;an++){const e=wt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<wt.length;an++){const e=wt[an];e&&(e.flags&=-2)}an=-1,wt.length=0,zp(),Wo=null,(wt.length||cs.length)&&Wp()}}let Dt=null,Kp=null;function Ko(t){const e=Dt;return Dt=t,Kp=t&&t.type.__scopeId||null,e}function Cr(t,e=Dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cf(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&cf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function un(t,e){if(Dt===null)return t;const n=xa(Dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(mr(),_n(c,n,8,[t.el,l,t,e]),gr())}}const ME=Symbol("_vte"),FE=t=>t.__isTeleport;function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Gp(t,e){return pe(t)?gt({name:t.name},e,{setup:t}):t}function Qp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Go(t,e,n,r,s=!1){if(ue(t)){t.forEach((b,O)=>Go(b,e&&(ue(e)?e[O]:e),n,r,s));return}if(li(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Go(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?xa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,m=Se(p),_=p===Ne?()=>!1:b=>Pe(m,b);if(u!=null&&u!==c&&(ze(u)?(f[u]=null,_(u)&&(p[u]=null)):mt(u)&&(u.value=null)),pe(c))Mi(c,l,12,[o,f]);else{const b=ze(c),O=mt(c);if(b||O){const S=()=>{if(t.f){const B=b?_(c)?p[c]:f[c]:c.value;s?ue(B)&&Wc(B,i):ue(B)?B.includes(i)||B.push(i):b?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else b?(f[c]=o,_(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,Ot(S,n)):S()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const li=t=>!!t.type.__asyncLoader,Jp=t=>t.type.__isKeepAlive;function UE(t,e){Xp(t,"a",e)}function BE(t,e){Xp(t,"da",e)}function Xp(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jp(s.parent.vnode)&&jE(r,e,n,s),s=s.parent}}function jE(t,e,n,r){const s=Na(e,t,r,!0);Yp(()=>{Wc(r[e],s)},n)}function Na(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{mr();const l=Fi(n),c=_n(e,n,t,o);return l(),gr(),c});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=dt)=>{(!vi||t==="sp")&&Na(t,(...r)=>e(...r),n)},qE=Bn("bm"),HE=Bn("m"),$E=Bn("bu"),zE=Bn("u"),WE=Bn("bum"),Yp=Bn("um"),KE=Bn("sp"),GE=Bn("rtg"),QE=Bn("rtc");function JE(t,e=dt){Na("ec",t,e)}const XE="components";function Rt(t,e){return ZE(XE,t,!0,e)||t}const YE=Symbol.for("v-ndc");function ZE(t,e,n=!0,r=!1){const s=Dt||dt;if(s){const i=s.type;{const l=jT(i,!1);if(l&&(l===e||l===Wt(e)||l===Ra(Wt(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[Wt(e)]||t[Ra(Wt(e))])}function eT(t,e,n,r){let s;const i=n,o=ue(t);if(o||ze(t)){const l=o&&as(t);let c=!1;l&&(c=!$t(t),t=Ca(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const ic=t=>t?Em(t)?xa(t):ic(t.parent):null,ci=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>em(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=nu.bind(t.proxy)),$watch:t=>wT.bind(t)}),Nl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Pe(t,e),tT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Nl(r,e))return o[e]=1,r[e];if(s!==Ne&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];oc&&(o[e]=0)}}const f=ci[e];let p,m;if(f)return e==="$attrs"&&ut(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Pe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Nl(s,e)?(s[e]=n,!0):r!==Ne&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&Pe(t,o)||Nl(e,o)||(l=i[0])&&Pe(l,o)||Pe(r,o)||Pe(ci,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ef(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oc=!0;function nT(t){const e=em(t),n=t.proxy,r=t.ctx;oc=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:b,activated:O,deactivated:S,beforeDestroy:B,beforeUnmount:U,destroyed:q,unmounted:z,render:re,renderTracked:ae,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:R,components:C,directives:v,filters:yt}=e;if(u&&rT(u,r,null),o)for(const we in o){const _e=o[we];pe(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);Ve(we)&&(t.data=ka(we))}if(oc=!0,i)for(const we in i){const _e=i[we],Ct=pe(_e)?_e.bind(n,n):pe(_e.get)?_e.get.bind(n,n):hn,Gt=!pe(_e)&&pe(_e.set)?_e.set.bind(n):hn,Ft=qt({get:Ct,set:Gt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Me=>Ft.value=Me})}if(l)for(const we in l)Zp(l[we],r,n,we);if(c){const we=pe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(_e=>{Ro(_e,we[_e])})}f&&tf(f,t,"c");function He(we,_e){ue(_e)?_e.forEach(Ct=>we(Ct.bind(n))):_e&&we(_e.bind(n))}if(He(qE,p),He(HE,m),He($E,_),He(zE,b),He(UE,O),He(BE,S),He(JE,y),He(QE,ae),He(GE,I),He(WE,U),He(Yp,z),He(KE,w),ue(A))if(A.length){const we=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:Ct=>n[_e]=Ct})})}else t.exposed||(t.exposed={});re&&t.render===hn&&(t.render=re),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),v&&(t.directives=v),w&&Qp(t)}function rT(t,e,n=hn){ue(t)&&(t=ac(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tf(t,e,n){_n(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,r){let s=r.includes(".")?pm(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&So(s,i)}else if(pe(t))So(s,t.bind(n));else if(Ve(t))if(ue(t))t.forEach(i=>Zp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&So(s,i,t)}}function em(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qo(c,u,o,!0)),Qo(c,e,o)),Ve(e)&&i.set(e,c),c}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=sT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const sT={data:nf,props:rf,emits:rf,methods:Ys,computed:Ys,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ys,directives:Ys,watch:oT,provide:nf,inject:iT};function nf(t,e){return e?t?function(){return gt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function iT(t,e){return Ys(ac(t),ac(e))}function ac(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?gt(Object.create(null),t,e):e}function rf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),ef(t),ef(e??{})):e}function oT(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function tm(){return{app:null,config:{isNativeTag:Ky,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aT=0;function lT(t,e){return function(r,s=null){pe(r)||(r=gt({},r)),s!=null&&!Ve(s)&&(s=null);const i=tm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:aT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:HT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const _=u._ceVNode||ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,xa(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=us;us=u;try{return f()}finally{us=p}}};return u}}let us=null;function Ro(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=dt||Dt;if(r||us){const s=us?us._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const nm={},rm=()=>Object.create(nm),sm=t=>Object.getPrototypeOf(t)===nm;function cT(t,e,n,r=!1){const s={},i=rm();t.propsDefaults=Object.create(null),im(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Da(t.emitsOptions,m))continue;const _=e[m];if(c)if(Pe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const b=Wt(m);s[b]=lc(c,l,b,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{im(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Pe(e,p)&&((f=$r(p))===p||!Pe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=lc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function im(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ii(c))continue;const u=e[c];let f;s&&Pe(s,f=Wt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Da(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=lc(s,c,p,u[p],t,!Pe(u,p))}}return o}function lc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Fi(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===$r(n))&&(r=!0))}return r}const hT=new WeakMap;function om(t,e,n=!1){const r=n?hT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const f=p=>{c=!0;const[m,_]=om(p,e,!0);gt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ve(t)&&r.set(t,is),is;if(ue(i))for(let f=0;f<i.length;f++){const p=Wt(i[f]);sf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Wt(f);if(sf(p)){const m=i[f],_=o[p]=ue(m)||pe(m)?{type:m}:gt({},m),b=_.type;let O=!1,S=!0;if(ue(b))for(let B=0;B<b.length;++B){const U=b[B],q=pe(U)&&U.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(S=!1)}else O=pe(b)&&b.name==="Boolean";_[0]=O,_[1]=S,(O||Pe(_,"default"))&&l.push(p)}}const u=[o,l];return Ve(t)&&r.set(t,u),u}function sf(t){return t[0]!=="$"&&!ii(t)}const am=t=>t[0]==="_"||t==="$stable",iu=t=>ue(t)?t.map(cn):[cn(t)],fT=(t,e,n)=>{if(e._n)return e;const r=Cr((...s)=>iu(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(am(s))continue;const i=t[s];if(pe(i))e[s]=fT(s,i,r);else if(i!=null){const o=iu(i);e[s]=()=>o}}},cm=(t,e)=>{const n=iu(e);t.slots.default=()=>n},um=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},dT=(t,e,n)=>{const r=t.slots=rm();if(t.vnode.shapeFlag&32){const s=e._;s?(um(r,e,n),n&&wp(r,"_",s,!0)):lm(e,r)}else e&&cm(t,e)},pT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:um(s,e,n):(i=!e.$stable,lm(e,s)),o=e}else e&&(cm(t,e),o={default:1});if(i)for(const l in s)!am(l)&&o[l]==null&&delete s[l]},Ot=PT;function mT(t){return gT(t)}function gT(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=hn,insertStaticContent:b}=t,O=(E,T,P,x=null,F=null,L=null,Q=void 0,K=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!Qs(E,T)&&(x=V(E),Me(E,F,L,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:$,ref:ie,shapeFlag:X}=T;switch($){case Va:S(E,T,P,x);break;case Mr:B(E,T,P,x);break;case Po:E==null&&U(T,P,x,Q);break;case ln:C(E,T,P,x,F,L,Q,K,W);break;default:X&1?re(E,T,P,x,F,L,Q,K,W):X&6?v(E,T,P,x,F,L,Q,K,W):(X&64||X&128)&&$.process(E,T,P,x,F,L,Q,K,W,ee)}ie!=null&&F&&Go(ie,E&&E.ref,L,T||E,!T)},S=(E,T,P,x)=>{if(E==null)r(T.el=l(T.children),P,x);else{const F=T.el=E.el;T.children!==E.children&&u(F,T.children)}},B=(E,T,P,x)=>{E==null?r(T.el=c(T.children||""),P,x):T.el=E.el},U=(E,T,P,x)=>{[E.el,E.anchor]=b(E.children,T,P,x,E.el,E.anchor)},q=({el:E,anchor:T},P,x)=>{let F;for(;E&&E!==T;)F=m(E),r(E,P,x),E=F;r(T,P,x)},z=({el:E,anchor:T})=>{let P;for(;E&&E!==T;)P=m(E),s(E),E=P;s(T)},re=(E,T,P,x,F,L,Q,K,W)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),E==null?ae(T,P,x,F,L,Q,K,W):w(E,T,F,L,Q,K,W)},ae=(E,T,P,x,F,L,Q,K)=>{let W,$;const{props:ie,shapeFlag:X,transition:ne,dirs:le}=E;if(W=E.el=o(E.type,L,ie&&ie.is,ie),X&8?f(W,E.children):X&16&&y(E.children,W,null,x,F,Dl(E,L),Q,K),le&&Ar(E,null,x,"created"),I(W,E,E.scopeId,Q,x),ie){for(const me in ie)me!=="value"&&!ii(me)&&i(W,me,null,ie[me],L,x);"value"in ie&&i(W,"value",null,ie.value,L),($=ie.onVnodeBeforeMount)&&rn($,x,E)}le&&Ar(E,null,x,"beforeMount");const oe=_T(F,ne);oe&&ne.beforeEnter(W),r(W,T,P),(($=ie&&ie.onVnodeMounted)||oe||le)&&Ot(()=>{$&&rn($,x,E),oe&&ne.enter(W),le&&Ar(E,null,x,"mounted")},F)},I=(E,T,P,x,F)=>{if(P&&_(E,P),x)for(let L=0;L<x.length;L++)_(E,x[L]);if(F){let L=F.subTree;if(T===L||gm(L.type)&&(L.ssContent===T||L.ssFallback===T)){const Q=F.vnode;I(E,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},y=(E,T,P,x,F,L,Q,K,W=0)=>{for(let $=W;$<E.length;$++){const ie=E[$]=K?Zn(E[$]):cn(E[$]);O(null,ie,T,P,x,F,L,Q,K)}},w=(E,T,P,x,F,L,Q)=>{const K=T.el=E.el;let{patchFlag:W,dynamicChildren:$,dirs:ie}=T;W|=E.patchFlag&16;const X=E.props||Ne,ne=T.props||Ne;let le;if(P&&br(P,!1),(le=ne.onVnodeBeforeUpdate)&&rn(le,P,T,E),ie&&Ar(T,E,P,"beforeUpdate"),P&&br(P,!0),(X.innerHTML&&ne.innerHTML==null||X.textContent&&ne.textContent==null)&&f(K,""),$?A(E.dynamicChildren,$,K,P,x,Dl(T,F),L):Q||_e(E,T,K,null,P,x,Dl(T,F),L,!1),W>0){if(W&16)R(K,X,ne,P,F);else if(W&2&&X.class!==ne.class&&i(K,"class",null,ne.class,F),W&4&&i(K,"style",X.style,ne.style,F),W&8){const oe=T.dynamicProps;for(let me=0;me<oe.length;me++){const ve=oe[me],st=X[ve],Ye=ne[ve];(Ye!==st||ve==="value")&&i(K,ve,st,Ye,F,P)}}W&1&&E.children!==T.children&&f(K,T.children)}else!Q&&$==null&&R(K,X,ne,P,F);((le=ne.onVnodeUpdated)||ie)&&Ot(()=>{le&&rn(le,P,T,E),ie&&Ar(T,E,P,"updated")},x)},A=(E,T,P,x,F,L,Q)=>{for(let K=0;K<T.length;K++){const W=E[K],$=T[K],ie=W.el&&(W.type===ln||!Qs(W,$)||W.shapeFlag&70)?p(W.el):P;O(W,$,ie,null,x,F,L,Q,!0)}},R=(E,T,P,x,F)=>{if(T!==P){if(T!==Ne)for(const L in T)!ii(L)&&!(L in P)&&i(E,L,T[L],null,F,x);for(const L in P){if(ii(L))continue;const Q=P[L],K=T[L];Q!==K&&L!=="value"&&i(E,L,K,Q,F,x)}"value"in P&&i(E,"value",T.value,P.value,F)}},C=(E,T,P,x,F,L,Q,K,W)=>{const $=T.el=E?E.el:l(""),ie=T.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:ne,slotScopeIds:le}=T;le&&(K=K?K.concat(le):le),E==null?(r($,P,x),r(ie,P,x),y(T.children||[],P,ie,F,L,Q,K,W)):X>0&&X&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,P,F,L,Q,K),(T.key!=null||F&&T===F.subTree)&&hm(E,T,!0)):_e(E,T,P,ie,F,L,Q,K,W)},v=(E,T,P,x,F,L,Q,K,W)=>{T.slotScopeIds=K,E==null?T.shapeFlag&512?F.ctx.activate(T,P,x,Q,W):yt(T,P,x,F,L,Q,W):Mt(E,T,W)},yt=(E,T,P,x,F,L,Q)=>{const K=E.component=LT(E,x,F);if(Jp(E)&&(K.ctx.renderer=ee),MT(K,!1,Q),K.asyncDep){if(F&&F.registerDep(K,He,Q),!E.el){const W=K.subTree=ke(Mr);B(null,W,T,P)}}else He(K,E,T,P,F,L,Q)},Mt=(E,T,P)=>{const x=T.component=E.component;if(RT(E,T,P))if(x.asyncDep&&!x.asyncResolved){we(x,T,P);return}else x.next=T,x.update();else T.el=E.el,x.vnode=T},He=(E,T,P,x,F,L,Q)=>{const K=()=>{if(E.isMounted){let{next:X,bu:ne,u:le,parent:oe,vnode:me}=E;{const it=fm(E);if(it){X&&(X.el=me.el,we(E,X,Q)),it.asyncDep.then(()=>{E.isUnmounted||K()});return}}let ve=X,st;br(E,!1),X?(X.el=me.el,we(E,X,Q)):X=me,ne&&bo(ne),(st=X.props&&X.props.onVnodeBeforeUpdate)&&rn(st,oe,X,me),br(E,!0);const Ye=af(E),Ut=E.subTree;E.subTree=Ye,O(Ut,Ye,p(Ut.el),V(Ut),E,F,L),X.el=Ye.el,ve===null&&ST(E,Ye.el),le&&Ot(le,F),(st=X.props&&X.props.onVnodeUpdated)&&Ot(()=>rn(st,oe,X,me),F)}else{let X;const{el:ne,props:le}=T,{bm:oe,m:me,parent:ve,root:st,type:Ye}=E,Ut=li(T);br(E,!1),oe&&bo(oe),!Ut&&(X=le&&le.onVnodeBeforeMount)&&rn(X,ve,T),br(E,!0);{st.ce&&st.ce._injectChildStyle(Ye);const it=E.subTree=af(E);O(null,it,P,x,E,F,L),T.el=it.el}if(me&&Ot(me,F),!Ut&&(X=le&&le.onVnodeMounted)){const it=T;Ot(()=>rn(X,ve,it),F)}(T.shapeFlag&256||ve&&li(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&Ot(E.a,F),E.isMounted=!0,T=P=x=null}};E.scope.on();const W=E.effect=new bp(K);E.scope.off();const $=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>ru(ie),br(E,!0),$()},we=(E,T,P)=>{T.component=E;const x=E.vnode.props;E.vnode=T,E.next=null,uT(E,T.props,x,P),pT(E,T.children,P),mr(),Yh(E),gr()},_e=(E,T,P,x,F,L,Q,K,W=!1)=>{const $=E&&E.children,ie=E?E.shapeFlag:0,X=T.children,{patchFlag:ne,shapeFlag:le}=T;if(ne>0){if(ne&128){Gt($,X,P,x,F,L,Q,K,W);return}else if(ne&256){Ct($,X,P,x,F,L,Q,K,W);return}}le&8?(ie&16&&It($,F,L),X!==$&&f(P,X)):ie&16?le&16?Gt($,X,P,x,F,L,Q,K,W):It($,F,L,!0):(ie&8&&f(P,""),le&16&&y(X,P,x,F,L,Q,K,W))},Ct=(E,T,P,x,F,L,Q,K,W)=>{E=E||is,T=T||is;const $=E.length,ie=T.length,X=Math.min($,ie);let ne;for(ne=0;ne<X;ne++){const le=T[ne]=W?Zn(T[ne]):cn(T[ne]);O(E[ne],le,P,null,F,L,Q,K,W)}$>ie?It(E,F,L,!0,!1,X):y(T,P,x,F,L,Q,K,W,X)},Gt=(E,T,P,x,F,L,Q,K,W)=>{let $=0;const ie=T.length;let X=E.length-1,ne=ie-1;for(;$<=X&&$<=ne;){const le=E[$],oe=T[$]=W?Zn(T[$]):cn(T[$]);if(Qs(le,oe))O(le,oe,P,null,F,L,Q,K,W);else break;$++}for(;$<=X&&$<=ne;){const le=E[X],oe=T[ne]=W?Zn(T[ne]):cn(T[ne]);if(Qs(le,oe))O(le,oe,P,null,F,L,Q,K,W);else break;X--,ne--}if($>X){if($<=ne){const le=ne+1,oe=le<ie?T[le].el:x;for(;$<=ne;)O(null,T[$]=W?Zn(T[$]):cn(T[$]),P,oe,F,L,Q,K,W),$++}}else if($>ne)for(;$<=X;)Me(E[$],F,L,!0),$++;else{const le=$,oe=$,me=new Map;for($=oe;$<=ne;$++){const Ze=T[$]=W?Zn(T[$]):cn(T[$]);Ze.key!=null&&me.set(Ze.key,$)}let ve,st=0;const Ye=ne-oe+1;let Ut=!1,it=0;const Wn=new Array(Ye);for($=0;$<Ye;$++)Wn[$]=0;for($=le;$<=X;$++){const Ze=E[$];if(st>=Ye){Me(Ze,F,L,!0);continue}let Bt;if(Ze.key!=null)Bt=me.get(Ze.key);else for(ve=oe;ve<=ne;ve++)if(Wn[ve-oe]===0&&Qs(Ze,T[ve])){Bt=ve;break}Bt===void 0?Me(Ze,F,L,!0):(Wn[Bt-oe]=$+1,Bt>=it?it=Bt:Ut=!0,O(Ze,T[Bt],P,null,F,L,Q,K,W),st++)}const xs=Ut?yT(Wn):is;for(ve=xs.length-1,$=Ye-1;$>=0;$--){const Ze=oe+$,Bt=T[Ze],Zi=Ze+1<ie?T[Ze+1].el:x;Wn[$]===0?O(null,Bt,P,Zi,F,L,Q,K,W):Ut&&(ve<0||$!==xs[ve]?Ft(Bt,P,Zi,2):ve--)}}},Ft=(E,T,P,x,F=null)=>{const{el:L,type:Q,transition:K,children:W,shapeFlag:$}=E;if($&6){Ft(E.component.subTree,T,P,x);return}if($&128){E.suspense.move(T,P,x);return}if($&64){Q.move(E,T,P,ee);return}if(Q===ln){r(L,T,P);for(let X=0;X<W.length;X++)Ft(W[X],T,P,x);r(E.anchor,T,P);return}if(Q===Po){q(E,T,P);return}if(x!==2&&$&1&&K)if(x===0)K.beforeEnter(L),r(L,T,P),Ot(()=>K.enter(L),F);else{const{leave:X,delayLeave:ne,afterLeave:le}=K,oe=()=>r(L,T,P),me=()=>{X(L,()=>{oe(),le&&le()})};ne?ne(L,oe,me):me()}else r(L,T,P)},Me=(E,T,P,x=!1,F=!1)=>{const{type:L,props:Q,ref:K,children:W,dynamicChildren:$,shapeFlag:ie,patchFlag:X,dirs:ne,cacheIndex:le}=E;if(X===-2&&(F=!1),K!=null&&Go(K,null,P,E,!0),le!=null&&(T.renderCache[le]=void 0),ie&256){T.ctx.deactivate(E);return}const oe=ie&1&&ne,me=!li(E);let ve;if(me&&(ve=Q&&Q.onVnodeBeforeUnmount)&&rn(ve,T,E),ie&6)nn(E.component,P,x);else{if(ie&128){E.suspense.unmount(P,x);return}oe&&Ar(E,null,T,"beforeUnmount"),ie&64?E.type.remove(E,T,P,ee,x):$&&!$.hasOnce&&(L!==ln||X>0&&X&64)?It($,T,P,!1,!0):(L===ln&&X&384||!F&&ie&16)&&It(W,T,P),x&&Fe(E)}(me&&(ve=Q&&Q.onVnodeUnmounted)||oe)&&Ot(()=>{ve&&rn(ve,T,E),oe&&Ar(E,null,T,"unmounted")},P)},Fe=E=>{const{type:T,el:P,anchor:x,transition:F}=E;if(T===ln){zn(P,x);return}if(T===Po){z(E);return}const L=()=>{s(P),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:Q,delayLeave:K}=F,W=()=>Q(P,L);K?K(E.el,L,W):W()}else L()},zn=(E,T)=>{let P;for(;E!==T;)P=m(E),s(E),E=P;s(T)},nn=(E,T,P)=>{const{bum:x,scope:F,job:L,subTree:Q,um:K,m:W,a:$}=E;of(W),of($),x&&bo(x),F.stop(),L&&(L.flags|=8,Me(Q,E,T,P)),K&&Ot(K,T),Ot(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},It=(E,T,P,x=!1,F=!1,L=0)=>{for(let Q=L;Q<E.length;Q++)Me(E[Q],T,P,x,F)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),P=T&&T[ME];return P?m(P):T};let Y=!1;const J=(E,T,P)=>{E==null?T._vnode&&Me(T._vnode,null,null,!0):O(T._vnode||null,E,T,null,null,null,P),T._vnode=E,Y||(Y=!0,Yh(),zp(),Y=!1)},ee={p:O,um:Me,m:Ft,r:Fe,mt:yt,mc:y,pc:_e,pbc:A,n:V,o:t};return{render:J,hydrate:void 0,createApp:lT(J)}}function Dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _T(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Zn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&hm(o,l)),l.type===Va&&(l.el=o.el)}}function yT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fm(e)}function of(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ET=Symbol.for("v-scx"),TT=()=>fn(ET);function So(t,e,n){return dm(t,e,n)}function dm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=gt({},n),c=e&&r||!e&&i!=="post";let u;if(vi){if(i==="sync"){const _=TT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=hn,_.resume=hn,_.pause=hn,_}}const f=dt;l.call=(_,b,O)=>_n(_,f,b,O);let p=!1;i==="post"?l.scheduler=_=>{Ot(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,b)=>{b?_():ru(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=DE(t,e,l);return vi&&(u?u.push(m):c&&m()),m}function wT(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?pm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Fi(this),l=dm(s,i.bind(r),n);return o(),l}function pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${$r(e)}Modifiers`];function IT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&vT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ze(f)?f.trim():f)),o.number&&(s=n.map($o)));let l,c=r[l=Sl(e)]||r[l=Sl(Wt(e))];!c&&i&&(c=r[l=Sl($r(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function mm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const f=mm(u,e,!0);f&&(l=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):gt(o,i),Ve(t)&&r.set(t,o),o)}function Da(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,$r(e))||Pe(t,e))}function af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:b,inheritAttrs:O}=t,S=Ko(t);let B,U;try{if(n.shapeFlag&4){const z=s||r,re=z;B=cn(u.call(re,z,f,p,_,m,b)),U=l}else{const z=e;B=cn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),U=e.props?l:AT(l)}}catch(z){ui.length=0,Oa(z,t,1),B=ke(Mr)}let q=B;if(U&&O!==!1){const z=Object.keys(U),{shapeFlag:re}=q;z.length&&re&7&&(i&&z.some(zc)&&(U=bT(U,i)),q=gs(q,U,!1,!0))}return n.dirs&&(q=gs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&su(q,n.transition),B=q,Ko(S),B}const AT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},bT=(t,e)=>{const n={};for(const r in t)(!zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function RT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Da(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lf(r,o,u):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Da(n,i))return!0}return!1}function ST({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const gm=t=>t.__isSuspense;function PT(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):LE(t)}const ln=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),Mr=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),ui=[];let Vt=null;function je(t=!1){ui.push(Vt=t?null:[])}function CT(){ui.pop(),Vt=ui[ui.length-1]||null}let wi=1;function cf(t,e=!1){wi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function _m(t){return t.dynamicChildren=wi>0?Vt||is:null,CT(),wi>0&&Vt&&Vt.push(t),t}function Ke(t,e,n,r,s,i){return _m(j(t,e,n,r,s,i,!0))}function cc(t,e,n,r,s){return _m(ke(t,e,n,r,s,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const ym=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||mt(t)||pe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===ln?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ym(e),ref:e&&Co(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return l?(ou(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),wi>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const ke=kT;function kT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===YE)&&(t=Mr),Jo(t)){const l=gs(t,e,!0);return n&&ou(l,n),wi>0&&!i&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(qT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=bn(l)),Ve(c)&&(tu(c)&&!ue(c)&&(c=gt({},c)),e.style=Gc(c))}const o=ze(t)?1:gm(t)?128:FE(t)?64:Ve(t)?4:pe(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function OT(t){return t?tu(t)||sm(t)?gt({},t):t:null}function gs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?DT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ym(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Co(e)):[i,Co(e)]:Co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ln?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&su(f,c.clone(f)),f}function Ht(t=" ",e=0){return ke(Va,null,t,e)}function NT(t,e){const n=ke(Po,null,t);return n.staticCount=e,n}function Fr(t="",e=!1){return e?(je(),cc(Mr,null,t)):ke(Mr,null,t)}function cn(t){return t==null||typeof t=="boolean"?ke(Mr):ue(t)?ke(ln,null,t.slice()):Jo(t)?Zn(t):ke(Va,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function ou(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!sm(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[Ht(e)]):n=8);t.children=e,t.shapeFlag|=n}function DT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bn([e.class,r.class]));else if(s==="style")e.style=Gc([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){_n(t,e,7,[n,r])}const VT=tm();let xT=0;function LT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VT,i={uid:xT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new oE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:om(r,s),emitsOptions:mm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=IT.bind(null,i),t.ce&&t.ce(i),i}let dt=null,Xo,uc;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),uc=e("__VUE_SSR_SETTERS__",n=>vi=n)}const Fi=t=>{const e=dt;return Xo(t),t.scope.on(),()=>{t.scope.off(),Xo(e)}},uf=()=>{dt&&dt.scope.off(),Xo(null)};function Em(t){return t.vnode.shapeFlag&4}let vi=!1;function MT(t,e=!1,n=!1){e&&uc(e);const{props:r,children:s}=t.vnode,i=Em(t);cT(t,r,i,e),dT(t,s,n);const o=i?FT(t,e):void 0;return e&&uc(!1),o}function FT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tT);const{setup:r}=n;if(r){mr();const s=t.setupContext=r.length>1?BT(t):null,i=Fi(t),o=Mi(r,t,0,[t.props,s]),l=yp(o);if(gr(),i(),(l||t.sp)&&!li(t)&&Qp(t),l){if(o.then(uf,uf),e)return o.then(c=>{hf(t,c)}).catch(c=>{Oa(c,t,0)});t.asyncDep=o}else hf(t,o)}else Tm(t)}function hf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=qp(e)),Tm(t)}function Tm(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=Fi(t);mr();try{nT(t)}finally{gr(),s()}}}const UT={get(t,e){return ut(t,"get",""),t[e]}};function BT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,UT),slots:t.slots,emit:t.emit,expose:e}}function xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qp(RE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}})):t.proxy}function jT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function qT(t){return pe(t)&&"__vccOpts"in t}const qt=(t,e)=>OE(t,e,vi);function wm(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ue(e)?Jo(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jo(n)&&(n=[n]),ke(t,e,n))}const HT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hc;const ff=typeof window<"u"&&window.trustedTypes;if(ff)try{hc=ff.createPolicy("vue",{createHTML:t=>t})}catch{}const vm=hc?t=>hc.createHTML(t):t=>t,$T="http://www.w3.org/2000/svg",zT="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,df=An&&An.createElement("template"),WT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS($T,t):e==="mathml"?An.createElementNS(zT,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=vm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=df.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},KT=Symbol("_vtc");function GT(t,e,n){const r=t[KT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pf=Symbol("_vod"),QT=Symbol("_vsh"),JT=Symbol(""),XT=/(^|;)\s*display\s*:/;function YT(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ko(r,l,"")}else for(const o in e)n[o]==null&&ko(r,o,"");for(const o in n)o==="display"&&(i=!0),ko(r,o,n[o])}else if(s){if(e!==n){const o=r[JT];o&&(n+=";"+o),r.cssText=n,i=XT.test(n)}}else e&&t.removeAttribute("style");pf in t&&(t[pf]=i?r.display:"",t[QT]&&(r.display="none"))}const mf=/\s*!important$/;function ko(t,e,n){if(ue(n))n.forEach(r=>ko(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZT(t,e);mf.test(n)?t.setProperty($r(r),n.replace(mf,""),"important"):t[r]=n}}const gf=["Webkit","Moz","ms"],Vl={};function ZT(t,e){const n=Vl[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Vl[e]=r;r=Ra(r);for(let s=0;s<gf.length;s++){const i=gf[s]+r;if(i in t)return Vl[e]=i}return e}const _f="http://www.w3.org/1999/xlink";function yf(t,e,n,r,s,i=rE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_f,e.slice(6,e.length)):t.setAttributeNS(_f,e,n):n==null||i&&!vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":gn(n)?String(n):n)}function Ef(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function ew(t,e,n,r){t.removeEventListener(e,n,r)}const Tf=Symbol("_vei");function tw(t,e,n,r,s=null){const i=t[Tf]||(t[Tf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=nw(e);if(r){const u=i[e]=iw(r,s);Pr(t,l,u,c)}else o&&(ew(t,l,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function nw(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let xl=0;const rw=Promise.resolve(),sw=()=>xl||(rw.then(()=>xl=0),xl=Date.now());function iw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(ow(r,n.value),e,5,[r])};return n.value=t,n.attached=sw(),n}function ow(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?GT(t,r,o):e==="style"?YT(t,n,r):Ia(e)?zc(e)||tw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lw(t,e,r,o))?(Ef(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Ef(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yf(t,e,r,o))};function lw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vf(e)&&ze(n)?!1:e in t}const Yo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>bo(e,n):e};function cw(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hs=Symbol("_assign"),Cn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[hs]=Yo(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=$o(l)),t[hs](l)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",cw),Pr(t,"compositionend",If),Pr(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[hs]=Yo(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?$o(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Aa(e);Pr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(Zo(o)):Zo(o));t[hs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,nu(()=>{t._assigning=!1})}),t[hs]=Yo(r)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,e,n){t[hs]=Yo(n)},updated(t,{value:e}){t._assigning||Af(t,e)}};function Af(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Aa(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Zo(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=iE(e,l)>-1}else o.selected=e.has(l);else if(Pa(Zo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zo(t){return"_value"in t?t._value:t.value}const hw=["ctrl","shift","alt","meta"],fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hw.some(n=>t[`${n}Key`]&&!e.includes(n))},ea=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=fw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},dw=gt({patchProp:aw},WT);let bf;function pw(){return bf||(bf=mT(dw))}const mw=(...t)=>{const e=pw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_w(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _w(t){return ze(t)?document.querySelector(t):t}const _r=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yw={name:"App"},Ew={id:"app"};function Tw(t,e,n,r,s,i){const o=Rt("router-view");return je(),Ke("div",Ew,[ke(o)])}const ww=_r(yw,[["render",Tw]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof document<"u";function Im(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Im(t.default)}const Re=Object.assign;function Ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const hi=()=>{},Zt=Array.isArray,Am=/#/g,Iw=/&/g,Aw=/\//g,bw=/=/g,Rw=/\?/g,bm=/\+/g,Sw=/%5B/g,Pw=/%5D/g,Rm=/%5E/g,Cw=/%60/g,Sm=/%7B/g,kw=/%7C/g,Pm=/%7D/g,Ow=/%20/g;function au(t){return encodeURI(""+t).replace(kw,"|").replace(Sw,"[").replace(Pw,"]")}function Nw(t){return au(t).replace(Sm,"{").replace(Pm,"}").replace(Rm,"^")}function fc(t){return au(t).replace(bm,"%2B").replace(Ow,"+").replace(Am,"%23").replace(Iw,"%26").replace(Cw,"`").replace(Sm,"{").replace(Pm,"}").replace(Rm,"^")}function Dw(t){return fc(t).replace(bw,"%3D")}function Vw(t){return au(t).replace(Am,"%23").replace(Rw,"%3F")}function xw(t){return t==null?"":Vw(t).replace(Aw,"%2F")}function Ii(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Lw=/\/$/,Mw=t=>t.replace(Lw,"");function Ml(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=jw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ii(o)}}function Fw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&Cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bw(t[n],e[n]))return!1;return!0}function Bw(t,e){return Zt(t)?Sf(t,e):Zt(e)?Sf(e,t):t===e}function Sf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ai;(function(t){t.pop="pop",t.push="push"})(Ai||(Ai={}));var fi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fi||(fi={}));function qw(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mw(t)}const Hw=/^[^#]+#/;function $w(t,e){return t.replace(Hw,"#")+e}function zw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function Ww(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pf(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function Kw(t,e){dc.set(t,e)}function Gw(t){const e=dc.get(t);return dc.delete(t),e}let Qw=()=>location.protocol+"//"+location.host;function km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Rf(c,"")}return Rf(n,t)+r+s}function Jw(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=km(t,location),b=n.value,O=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}S=O?m.position-O.position:0}else r(_);s.forEach(B=>{B(n.value,b,{delta:S,type:Ai.pop,direction:S?S>0?fi.forward:fi.back:fi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:La()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Cf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?La():null}}function Xw(t){const{history:e,location:n}=window,r={value:km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Qw()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){const f=Re({},e.state,Cf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Re({},s.value,e.state,{forward:c,scroll:La()});i(f.current,f,!0);const p=Re({},Cf(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Yw(t){t=qw(t);const e=Xw(t),n=Jw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:$w.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zw(t){return typeof t=="string"||t&&typeof t=="object"}function Om(t){return typeof t=="string"||typeof t=="symbol"}const Nm=Symbol("");var kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kf||(kf={}));function ys(t,e){return Re(new Error,{type:t,[Nm]:!0},e)}function In(t,e){return t instanceof Error&&Nm in t&&(e==null||!!(t.type&e))}const Of="[^/]+?",ev={sensitive:!1,strict:!1,start:!0,end:!0},tv=/[.+*?^${}()[\]/\\]/g;function nv(t,e){const n=Re({},ev,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(tv,"\\$&"),_+=40;else if(m.type===1){const{value:b,repeatable:O,optional:S,regexp:B}=m;i.push({name:b,repeatable:O,optional:S});const U=B||Of;if(U!==Of){_+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${b}" (${U}): `+z.message)}}let q=O?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(q=S&&u.length<2?`(?:/${q})`:"/"+q),S&&(q+="?"),s+=q,_+=20,S&&(_+=-8),O&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",b=i[m-1];p[b.name]=_&&b.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:b,repeatable:O,optional:S}=_,B=b in u?u[b]:"";if(Zt(B)&&!O)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const U=Zt(B)?B.join("/"):B;if(!U)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function rv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Dm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nf(r))return 1;if(Nf(s))return-1}return s.length-r.length}function Nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sv={type:0,value:""},iv=/[a-zA-Z0-9_]/;function ov(t){if(!t)return[[]];if(t==="/")return[[sv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:iv.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function av(t,e,n){const r=nv(ov(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lv(t,e){const n=[],r=new Map;e=Lf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const b=!_,O=Vf(p);O.aliasOf=_&&_.record;const S=Lf(e,p),B=[O];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of z)B.push(Vf(Re({},O,{components:_?_.record.components:O.components,path:re,aliasOf:_?_.record:O})))}let U,q;for(const z of B){const{path:re}=z;if(m&&re[0]!=="/"){const ae=m.record.path,I=ae[ae.length-1]==="/"?"":"/";z.path=m.record.path+(re&&I+re)}if(U=av(z,m,S),_?_.alias.push(U):(q=q||U,q!==U&&q.alias.push(U),b&&p.name&&!xf(U)&&o(p.name)),Vm(U)&&c(U),O.children){const ae=O.children;for(let I=0;I<ae.length;I++)i(ae[I],U,_&&_.children[I])}_=_||U}return q?()=>{o(q)}:hi}function o(p){if(Om(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=hv(p,n);n.splice(m,0,p),p.record.name&&!xf(p)&&r.set(p.record.name,p)}function u(p,m){let _,b={},O,S;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ys(1,{location:p});S=_.record.name,b=Re(Df(m.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Df(p.params,_.keys.map(q=>q.name))),O=_.stringify(b)}else if(p.path!=null)O=p.path,_=n.find(q=>q.re.test(O)),_&&(b=_.parse(O),S=_.record.name);else{if(_=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!_)throw ys(1,{location:p,currentLocation:m});S=_.record.name,b=Re({},m.params,p.params),O=_.stringify(b)}const B=[];let U=_;for(;U;)B.unshift(U.record),U=U.parent;return{name:S,path:O,params:b,matched:B,meta:uv(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:cv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uv(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Lf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Dm(t,e[i])<0?r=i:n=i+1}const s=fv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function fv(t){let e=t;for(;e=e.parent;)if(Vm(e)&&Dm(t,e)===0)return e}function Vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function dv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bm," "),o=i.indexOf("="),l=Ii(o<0?i:i.slice(0,o)),c=o<0?null:Ii(i.slice(o+1));if(l in e){let u=e[l];Zt(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Mf(t){let e="";for(let n in t){const r=t[n];if(n=Dw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&fc(i)):[r&&fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mv=Symbol(""),Ff=Symbol(""),Ma=Symbol(""),xm=Symbol(""),pc=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ys(4,{from:n,to:e})):m instanceof Error?c(m):Zw(m)?c(ys(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Fl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Im(c)){const f=(c.__vccOpts||c)[e];f&&i.push(er(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=vw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&er(_,n,r,o,l,s)()}))}}return i}function Uf(t){const e=fn(Ma),n=fn(xm),r=qt(()=>{const c=ls(t.to);return e.resolve(c)}),s=qt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(_s.bind(null,f));if(m>-1)return m;const _=Bf(c[u-2]);return u>1&&Bf(f)===_&&p[p.length-1].path!==_?p.findIndex(_s.bind(null,c[u-2])):m}),i=qt(()=>s.value>-1&&Tv(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&Cm(n.params,r.value.params));function l(c={}){if(Ev(c)){const u=e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(hi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function gv(t){return t.length===1?t[0]:t}const _v=Gp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uf,setup(t,{slots:e}){const n=ka(Uf(t)),{options:r}=fn(Ma),s=qt(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gv(e.default(n));return t.custom?i:wm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yv=_v;function Ev(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Tv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,wv=Gp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=fn(pc),s=qt(()=>t.route||r.value),i=fn(Ff,0),o=qt(()=>{let u=ls(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=qt(()=>s.value.matched[o.value]);Ro(Ff,qt(()=>o.value+1)),Ro(mv,l),Ro(pc,s);const c=on();return So(()=>[c.value,l.value,t.name],([u,f,p],[m,_,b])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!_s(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return qf(n.default,{Component:m,route:u});const _=p.props[f],b=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=wm(m,Re({},b,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return qf(n.default,{Component:S,route:u})||S}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vv=wv;function Iv(t){const e=lv(t.routes,t),n=t.parseQuery||dv,r=t.stringifyQuery||Mf,s=t.history,i=Js(),o=Js(),l=Js(),c=SE(Jn);let u=Jn;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ll.bind(null,V=>""+V),p=Ll.bind(null,xw),m=Ll.bind(null,Ii);function _(V,Y){let J,ee;return Om(V)?(J=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,J)}function b(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function O(){return e.getRoutes().map(V=>V.record)}function S(V){return!!e.getRecordMatcher(V)}function B(V,Y){if(Y=Re({},Y||c.value),typeof V=="string"){const P=Ml(n,V,Y.path),x=e.resolve({path:P.path},Y),F=s.createHref(P.fullPath);return Re(P,x,{params:m(x.params),hash:Ii(P.hash),redirectedFrom:void 0,href:F})}let J;if(V.path!=null)J=Re({},V,{path:Ml(n,V.path,Y.path).path});else{const P=Re({},V.params);for(const x in P)P[x]==null&&delete P[x];J=Re({},V,{params:p(P)}),Y.params=p(Y.params)}const ee=e.resolve(J,Y),Ae=V.hash||"";ee.params=f(m(ee.params));const E=Fw(r,Re({},V,{hash:Nw(Ae),path:ee.path})),T=s.createHref(E);return Re({fullPath:E,hash:Ae,query:r===Mf?pv(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:T})}function U(V){return typeof V=="string"?Ml(n,V,c.value.path):Re({},V)}function q(V,Y){if(u!==V)return ys(8,{from:Y,to:V})}function z(V){return I(V)}function re(V){return z(Re(U(V),{replace:!0}))}function ae(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:J}=Y;let ee=typeof J=="function"?J(V):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),Re({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function I(V,Y){const J=u=B(V),ee=c.value,Ae=V.state,E=V.force,T=V.replace===!0,P=ae(J);if(P)return I(Re(U(P),{state:typeof P=="object"?Re({},Ae,P.state):Ae,force:E,replace:T}),Y||J);const x=J;x.redirectedFrom=Y;let F;return!E&&Uw(r,ee,J)&&(F=ys(16,{to:x,from:ee}),Ft(ee,ee,!0,!1)),(F?Promise.resolve(F):A(x,ee)).catch(L=>In(L)?In(L,2)?L:Gt(L):_e(L,x,ee)).then(L=>{if(L){if(In(L,2))return I(Re({replace:T},U(L.to),{state:typeof L.to=="object"?Re({},Ae,L.to.state):Ae,force:E}),Y||x)}else L=C(x,ee,!0,T,Ae);return R(x,ee,L),L})}function y(V,Y){const J=q(V,Y);return J?Promise.reject(J):Promise.resolve()}function w(V){const Y=zn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function A(V,Y){let J;const[ee,Ae,E]=Av(V,Y);J=Fl(ee.reverse(),"beforeRouteLeave",V,Y);for(const P of ee)P.leaveGuards.forEach(x=>{J.push(er(x,V,Y))});const T=y.bind(null,V,Y);return J.push(T),It(J).then(()=>{J=[];for(const P of i.list())J.push(er(P,V,Y));return J.push(T),It(J)}).then(()=>{J=Fl(Ae,"beforeRouteUpdate",V,Y);for(const P of Ae)P.updateGuards.forEach(x=>{J.push(er(x,V,Y))});return J.push(T),It(J)}).then(()=>{J=[];for(const P of E)if(P.beforeEnter)if(Zt(P.beforeEnter))for(const x of P.beforeEnter)J.push(er(x,V,Y));else J.push(er(P.beforeEnter,V,Y));return J.push(T),It(J)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),J=Fl(E,"beforeRouteEnter",V,Y,w),J.push(T),It(J))).then(()=>{J=[];for(const P of o.list())J.push(er(P,V,Y));return J.push(T),It(J)}).catch(P=>In(P,8)?P:Promise.reject(P))}function R(V,Y,J){l.list().forEach(ee=>w(()=>ee(V,Y,J)))}function C(V,Y,J,ee,Ae){const E=q(V,Y);if(E)return E;const T=Y===Jn,P=es?history.state:{};J&&(ee||T?s.replace(V.fullPath,Re({scroll:T&&P&&P.scroll},Ae)):s.push(V.fullPath,Ae)),c.value=V,Ft(V,Y,J,T),Gt()}let v;function yt(){v||(v=s.listen((V,Y,J)=>{if(!nn.listening)return;const ee=B(V),Ae=ae(ee);if(Ae){I(Re(Ae,{replace:!0,force:!0}),ee).catch(hi);return}u=ee;const E=c.value;es&&Kw(Pf(E.fullPath,J.delta),La()),A(ee,E).catch(T=>In(T,12)?T:In(T,2)?(I(Re(U(T.to),{force:!0}),ee).then(P=>{In(P,20)&&!J.delta&&J.type===Ai.pop&&s.go(-1,!1)}).catch(hi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),_e(T,ee,E))).then(T=>{T=T||C(ee,E,!1),T&&(J.delta&&!In(T,8)?s.go(-J.delta,!1):J.type===Ai.pop&&In(T,20)&&s.go(-1,!1)),R(ee,E,T)}).catch(hi)}))}let Mt=Js(),He=Js(),we;function _e(V,Y,J){Gt(V);const ee=He.list();return ee.length?ee.forEach(Ae=>Ae(V,Y,J)):console.error(V),Promise.reject(V)}function Ct(){return we&&c.value!==Jn?Promise.resolve():new Promise((V,Y)=>{Mt.add([V,Y])})}function Gt(V){return we||(we=!V,yt(),Mt.list().forEach(([Y,J])=>V?J(V):Y()),Mt.reset()),V}function Ft(V,Y,J,ee){const{scrollBehavior:Ae}=t;if(!es||!Ae)return Promise.resolve();const E=!J&&Gw(Pf(V.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return nu().then(()=>Ae(V,Y,E)).then(T=>T&&Ww(T)).catch(T=>_e(T,V,Y))}const Me=V=>s.go(V);let Fe;const zn=new Set,nn={currentRoute:c,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:O,resolve:B,options:t,push:z,replace:re,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:He.add,isReady:Ct,install(V){const Y=this;V.component("RouterLink",yv),V.component("RouterView",vv),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),es&&!Fe&&c.value===Jn&&(Fe=!0,z(s.location).catch(Ae=>{}));const J={};for(const Ae in Jn)Object.defineProperty(J,Ae,{get:()=>c.value[Ae],enumerable:!0});V.provide(Ma,Y),V.provide(xm,Up(J)),V.provide(pc,c);const ee=V.unmount;zn.add(V),V.unmount=function(){zn.delete(V),zn.size<1&&(u=Jn,v&&v(),v=null,c.value=Jn,Fe=!1,we=!1),ee()}}};function It(V){return V.reduce((Y,J)=>Y.then(()=>w(J)),Promise.resolve())}return nn}function Av(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>_s(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>_s(u,c))||s.push(c))}return[n,r,s]}function bv(){return fn(Ma)}function Lm(t,e){return function(){return t.apply(e,arguments)}}const{toString:Rv}=Object.prototype,{getPrototypeOf:lu}=Object,Fa=(t=>e=>{const n=Rv.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tn=t=>(t=t.toLowerCase(),e=>Fa(e)===t),Ua=t=>e=>typeof e===t,{isArray:Ss}=Array,bi=Ua("undefined");function Sv(t){return t!==null&&!bi(t)&&t.constructor!==null&&!bi(t.constructor)&&Lt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Mm=tn("ArrayBuffer");function Pv(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Mm(t.buffer),e}const Cv=Ua("string"),Lt=Ua("function"),Fm=Ua("number"),Ba=t=>t!==null&&typeof t=="object",kv=t=>t===!0||t===!1,Oo=t=>{if(Fa(t)!=="object")return!1;const e=lu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ov=tn("Date"),Nv=tn("File"),Dv=tn("Blob"),Vv=tn("FileList"),xv=t=>Ba(t)&&Lt(t.pipe),Lv=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Lt(t.append)&&((e=Fa(t))==="formdata"||e==="object"&&Lt(t.toString)&&t.toString()==="[object FormData]"))},Mv=tn("URLSearchParams"),[Fv,Uv,Bv,jv]=["ReadableStream","Request","Response","Headers"].map(tn),qv=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ui(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ss(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let l;for(r=0;r<o;r++)l=i[r],e.call(null,t[l],l,t)}}function Um(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bm=t=>!bi(t)&&t!==kr;function mc(){const{caseless:t}=Bm(this)&&this||{},e={},n=(r,s)=>{const i=t&&Um(e,s)||s;Oo(e[i])&&Oo(r)?e[i]=mc(e[i],r):Oo(r)?e[i]=mc({},r):Ss(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ui(arguments[r],n);return e}const Hv=(t,e,n,{allOwnKeys:r}={})=>(Ui(e,(s,i)=>{n&&Lt(s)?t[i]=Lm(s,n):t[i]=s},{allOwnKeys:r}),t),$v=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),zv=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Wv=(t,e,n,r)=>{let s,i,o;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&lu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Kv=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Gv=t=>{if(!t)return null;if(Ss(t))return t;let e=t.length;if(!Fm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Qv=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lu(Uint8Array)),Jv=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Xv=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Yv=tn("HTMLFormElement"),Zv=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Hf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),eI=tn("RegExp"),jm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ui(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},tI=t=>{jm(t,(e,n)=>{if(Lt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Lt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nI=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ss(t)?r(t):r(String(t).split(e)),n},rI=()=>{},sI=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ul="abcdefghijklmnopqrstuvwxyz",$f="0123456789",qm={DIGIT:$f,ALPHA:Ul,ALPHA_DIGIT:Ul+Ul.toUpperCase()+$f},iI=(t=16,e=qm.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function oI(t){return!!(t&&Lt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const aI=t=>{const e=new Array(10),n=(r,s)=>{if(Ba(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Ss(r)?[]:{};return Ui(r,(o,l)=>{const c=n(o,s+1);!bi(c)&&(i[l]=c)}),e[s]=void 0,i}}return r};return n(t,0)},lI=tn("AsyncFunction"),cI=t=>t&&(Ba(t)||Lt(t))&&Lt(t.then)&&Lt(t.catch),Hm=((t,e)=>t?setImmediate:e?((n,r)=>(kr.addEventListener("message",({source:s,data:i})=>{s===kr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),kr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Lt(kr.postMessage)),uI=typeof queueMicrotask<"u"?queueMicrotask.bind(kr):typeof process<"u"&&process.nextTick||Hm,D={isArray:Ss,isArrayBuffer:Mm,isBuffer:Sv,isFormData:Lv,isArrayBufferView:Pv,isString:Cv,isNumber:Fm,isBoolean:kv,isObject:Ba,isPlainObject:Oo,isReadableStream:Fv,isRequest:Uv,isResponse:Bv,isHeaders:jv,isUndefined:bi,isDate:Ov,isFile:Nv,isBlob:Dv,isRegExp:eI,isFunction:Lt,isStream:xv,isURLSearchParams:Mv,isTypedArray:Qv,isFileList:Vv,forEach:Ui,merge:mc,extend:Hv,trim:qv,stripBOM:$v,inherits:zv,toFlatObject:Wv,kindOf:Fa,kindOfTest:tn,endsWith:Kv,toArray:Gv,forEachEntry:Jv,matchAll:Xv,isHTMLForm:Yv,hasOwnProperty:Hf,hasOwnProp:Hf,reduceDescriptors:jm,freezeMethods:tI,toObjectSet:nI,toCamelCase:Zv,noop:rI,toFiniteNumber:sI,findKey:Um,global:kr,isContextDefined:Bm,ALPHABET:qm,generateString:iI,isSpecCompliantForm:oI,toJSONObject:aI,isAsyncFn:lI,isThenable:cI,setImmediate:Hm,asap:uI};function ge(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}D.inherits(ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const $m=ge.prototype,zm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{zm[t]={value:t}});Object.defineProperties(ge,zm);Object.defineProperty($m,"isAxiosError",{value:!0});ge.from=(t,e,n,r,s,i)=>{const o=Object.create($m);return D.toFlatObject(t,o,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),ge.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const hI=null;function gc(t){return D.isPlainObject(t)||D.isArray(t)}function Wm(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function zf(t,e,n){return t?t.concat(e).map(function(s,i){return s=Wm(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function fI(t){return D.isArray(t)&&!t.some(gc)}const dI=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function ja(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,S){return!D.isUndefined(S[O])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(s))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(D.isDate(b))return b.toISOString();if(!c&&D.isBlob(b))throw new ge("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(b)||D.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function f(b,O,S){let B=b;if(b&&!S&&typeof b=="object"){if(D.endsWith(O,"{}"))O=r?O:O.slice(0,-2),b=JSON.stringify(b);else if(D.isArray(b)&&fI(b)||(D.isFileList(b)||D.endsWith(O,"[]"))&&(B=D.toArray(b)))return O=Wm(O),B.forEach(function(q,z){!(D.isUndefined(q)||q===null)&&e.append(o===!0?zf([O],z,i):o===null?O:O+"[]",u(q))}),!1}return gc(b)?!0:(e.append(zf(S,O,i),u(b)),!1)}const p=[],m=Object.assign(dI,{defaultVisitor:f,convertValue:u,isVisitable:gc});function _(b,O){if(!D.isUndefined(b)){if(p.indexOf(b)!==-1)throw Error("Circular reference detected in "+O.join("."));p.push(b),D.forEach(b,function(B,U){(!(D.isUndefined(B)||B===null)&&s.call(e,B,D.isString(U)?U.trim():U,O,m))===!0&&_(B,O?O.concat(U):[U])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Wf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function cu(t,e){this._pairs=[],t&&ja(t,this,e)}const Km=cu.prototype;Km.append=function(e,n){this._pairs.push([e,n])};Km.toString=function(e){const n=e?function(r){return e.call(this,r,Wf)}:Wf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function pI(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gm(t,e,n){if(!e)return t;const r=n&&n.encode||pI;D.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=D.isURLSearchParams(e)?e.toString():new cu(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Kf{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Qm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mI=typeof URLSearchParams<"u"?URLSearchParams:cu,gI=typeof FormData<"u"?FormData:null,_I=typeof Blob<"u"?Blob:null,yI={isBrowser:!0,classes:{URLSearchParams:mI,FormData:gI,Blob:_I},protocols:["http","https","file","blob","url","data"]},uu=typeof window<"u"&&typeof document<"u",_c=typeof navigator=="object"&&navigator||void 0,EI=uu&&(!_c||["ReactNative","NativeScript","NS"].indexOf(_c.product)<0),TI=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wI=uu&&window.location.href||"http://localhost",vI=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uu,hasStandardBrowserEnv:EI,hasStandardBrowserWebWorkerEnv:TI,navigator:_c,origin:wI},Symbol.toStringTag,{value:"Module"})),pt={...vI,...yI};function II(t,e){return ja(t,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return pt.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function AI(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function bI(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Jm(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=i>=n.length;return o=!o&&D.isArray(s)?s.length:o,c?(D.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!D.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&D.isArray(s[o])&&(s[o]=bI(s[o])),!l)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,s)=>{e(AI(r),s,n,0)}),n}return null}function RI(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const Bi={transitional:Qm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=D.isObject(e);if(i&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return s?JSON.stringify(Jm(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return II(e,this.formSerializer).toString();if((l=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ja(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),RI(e)):e}],transformResponse:[function(e){const n=this.transitional||Bi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?ge.from(l,ge.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{Bi.headers[t]={}});const SI=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PI=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&SI[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Gf=Symbol("internals");function Xs(t){return t&&String(t).trim().toLowerCase()}function No(t){return t===!1||t==null?t:D.isArray(t)?t.map(No):String(t)}function CI(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const kI=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Bl(t,e,n,r,s){if(D.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function OI(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function NI(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class St{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(l,c,u){const f=Xs(c);if(!f)throw new Error("header name must be a non-empty string");const p=D.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||c]=No(l))}const o=(l,c)=>D.forEach(l,(u,f)=>i(u,f,c));if(D.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(D.isString(e)&&(e=e.trim())&&!kI(e))o(PI(e),n);else if(D.isHeaders(e))for(const[l,c]of e.entries())i(c,l,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Xs(e),e){const r=D.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return CI(s);if(D.isFunction(n))return n.call(this,s,r);if(D.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Xs(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Bl(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Xs(o),o){const l=D.findKey(r,o);l&&(!n||Bl(r,r[l],l,n))&&(delete r[l],s=!0)}}return D.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Bl(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return D.forEach(this,(s,i)=>{const o=D.findKey(r,i);if(o){n[o]=No(s),delete n[i];return}const l=e?OI(i):String(i).trim();l!==i&&delete n[i],n[l]=No(s),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Gf]=this[Gf]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=Xs(o);r[l]||(NI(s,o),r[l]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}}St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(St);function jl(t,e){const n=this||Bi,r=e||n,s=St.from(r.headers);let i=r.data;return D.forEach(t,function(l){i=l.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Xm(t){return!!(t&&t.__CANCEL__)}function Ps(t,e,n){ge.call(this,t??"canceled",ge.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(Ps,ge,{__CANCEL__:!0});function Ym(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ge("Request failed with status code "+n.status,[ge.ERR_BAD_REQUEST,ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function DI(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function VI(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),f=r[i];o||(o=u),n[s]=c,r[s]=u;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=f&&u-f;return _?Math.round(m*1e3/_):void 0}}function xI(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const f=Date.now(),p=f-n;p>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const ta=(t,e,n=3)=>{let r=0;const s=VI(50,250);return xI(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,c=o-r,u=s(c),f=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&f?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Qf=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Jf=t=>(...e)=>D.asap(()=>t(...e)),LI=pt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,pt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(pt.origin),pt.navigator&&/(msie|trident)/i.test(pt.navigator.userAgent)):()=>!0,MI=pt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FI(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function UI(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Zm(t,e){return t&&!FI(e)?UI(t,e):e}const Xf=t=>t instanceof St?{...t}:t;function Ur(t,e){e=e||{};const n={};function r(u,f,p,m){return D.isPlainObject(u)&&D.isPlainObject(f)?D.merge.call({caseless:m},u,f):D.isPlainObject(f)?D.merge({},f):D.isArray(f)?f.slice():f}function s(u,f,p,m){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u,p,m)}else return r(u,f,p,m)}function i(u,f){if(!D.isUndefined(f))return r(void 0,f)}function o(u,f){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,p){if(p in e)return r(u,f);if(p in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,f,p)=>s(Xf(u),Xf(f),p,!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(f){const p=c[f]||s,m=p(t[f],e[f],f);D.isUndefined(m)&&p!==l||(n[f]=m)}),n}const eg=t=>{const e=Ur({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:l}=e;e.headers=o=St.from(o),e.url=Gm(Zm(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(D.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...f]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...f].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&LI(e.url))){const u=s&&i&&MI.read(i);u&&o.set(s,u)}return e},BI=typeof XMLHttpRequest<"u",jI=BI&&function(t){return new Promise(function(n,r){const s=eg(t);let i=s.data;const o=St.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=s,f,p,m,_,b;function O(){_&&_(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function B(){if(!S)return;const q=St.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),re={data:!l||l==="text"||l==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:q,config:t,request:S};Ym(function(I){n(I),O()},function(I){r(I),O()},re),S=null}"onloadend"in S?S.onloadend=B:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(B)},S.onabort=function(){S&&(r(new ge("Request aborted",ge.ECONNABORTED,t,S)),S=null)},S.onerror=function(){r(new ge("Network Error",ge.ERR_NETWORK,t,S)),S=null},S.ontimeout=function(){let z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const re=s.transitional||Qm;s.timeoutErrorMessage&&(z=s.timeoutErrorMessage),r(new ge(z,re.clarifyTimeoutError?ge.ETIMEDOUT:ge.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&D.forEach(o.toJSON(),function(z,re){S.setRequestHeader(re,z)}),D.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),l&&l!=="json"&&(S.responseType=s.responseType),u&&([m,b]=ta(u,!0),S.addEventListener("progress",m)),c&&S.upload&&([p,_]=ta(c),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(f=q=>{S&&(r(!q||q.type?new Ps(null,t,S):q),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const U=DI(s.url);if(U&&pt.protocols.indexOf(U)===-1){r(new ge("Unsupported protocol "+U+":",ge.ERR_BAD_REQUEST,t));return}S.send(i||null)})},qI=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,l();const f=u instanceof Error?u:this.reason;r.abort(f instanceof ge?f:new Ps(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new ge(`timeout ${e} of ms exceeded`,ge.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>D.asap(l),c}},HI=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},$I=async function*(t,e){for await(const n of zI(t))yield*HI(n,e)},zI=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Yf=(t,e,n,r)=>{const s=$I(t,e);let i=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await s.next();if(u){l(),c.close();return}let p=f.byteLength;if(n){let m=i+=p;n(m)}c.enqueue(new Uint8Array(f))}catch(u){throw l(u),u}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},qa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",tg=qa&&typeof ReadableStream=="function",WI=qa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),ng=(t,...e)=>{try{return!!t(...e)}catch{return!1}},KI=tg&&ng(()=>{let t=!1;const e=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Zf=64*1024,yc=tg&&ng(()=>D.isReadableStream(new Response("").body)),na={stream:yc&&(t=>t.body)};qa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!na[e]&&(na[e]=D.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ge(`Response type '${e}' is not supported`,ge.ERR_NOT_SUPPORT,r)})})})(new Response);const GI=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(pt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await WI(t)).byteLength},QI=async(t,e)=>{const n=D.toFiniteNumber(t.getContentLength());return n??GI(e)},JI=qa&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:f,withCredentials:p="same-origin",fetchOptions:m}=eg(t);u=u?(u+"").toLowerCase():"text";let _=qI([s,i&&i.toAbortSignal()],o),b;const O=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let S;try{if(c&&KI&&n!=="get"&&n!=="head"&&(S=await QI(f,r))!==0){let re=new Request(e,{method:"POST",body:r,duplex:"half"}),ae;if(D.isFormData(r)&&(ae=re.headers.get("content-type"))&&f.setContentType(ae),re.body){const[I,y]=Qf(S,ta(Jf(c)));r=Yf(re.body,Zf,I,y)}}D.isString(p)||(p=p?"include":"omit");const B="credentials"in Request.prototype;b=new Request(e,{...m,signal:_,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:B?p:void 0});let U=await fetch(b);const q=yc&&(u==="stream"||u==="response");if(yc&&(l||q&&O)){const re={};["status","statusText","headers"].forEach(w=>{re[w]=U[w]});const ae=D.toFiniteNumber(U.headers.get("content-length")),[I,y]=l&&Qf(ae,ta(Jf(l),!0))||[];U=new Response(Yf(U.body,Zf,I,()=>{y&&y(),O&&O()}),re)}u=u||"text";let z=await na[D.findKey(na,u)||"text"](U,t);return!q&&O&&O(),await new Promise((re,ae)=>{Ym(re,ae,{data:z,headers:St.from(U.headers),status:U.status,statusText:U.statusText,config:t,request:b})})}catch(B){throw O&&O(),B&&B.name==="TypeError"&&/fetch/i.test(B.message)?Object.assign(new ge("Network Error",ge.ERR_NETWORK,t,b),{cause:B.cause||B}):ge.from(B,B&&B.code,t,b)}}),Ec={http:hI,xhr:jI,fetch:JI};D.forEach(Ec,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ed=t=>`- ${t}`,XI=t=>D.isFunction(t)||t===null||t===!1,rg={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!XI(n)&&(r=Ec[(o=String(n)).toLowerCase()],r===void 0))throw new ge(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ed).join(`
`):" "+ed(i[0]):"as no adapter specified";throw new ge("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ec};function ql(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ps(null,t)}function td(t){return ql(t),t.headers=St.from(t.headers),t.data=jl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),rg.getAdapter(t.adapter||Bi.adapter)(t).then(function(r){return ql(t),r.data=jl.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return Xm(r)||(ql(t),r&&r.response&&(r.response.data=jl.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const sg="1.7.9",Ha={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ha[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const nd={};Ha.transitional=function(e,n,r){function s(i,o){return"[Axios v"+sg+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(e===!1)throw new ge(s(o," has been removed"+(n?" in "+n:"")),ge.ERR_DEPRECATED);return n&&!nd[o]&&(nd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,l):!0}};Ha.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function YI(t,e,n){if(typeof t!="object")throw new ge("options must be an object",ge.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const l=t[i],c=l===void 0||o(l,i,t);if(c!==!0)throw new ge("option "+i+" must be "+c,ge.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ge("Unknown option "+i,ge.ERR_BAD_OPTION)}}const Do={assertOptions:YI,validators:Ha},sn=Do.validators;class Vr{constructor(e){this.defaults=e,this.interceptors={request:new Kf,response:new Kf}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ur(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Do.assertOptions(r,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),s!=null&&(D.isFunction(s)?n.paramsSerializer={serialize:s}:Do.assertOptions(s,{encode:sn.function,serialize:sn.function},!0)),Do.assertOptions(n,{baseUrl:sn.spelling("baseURL"),withXsrfToken:sn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&D.merge(i.common,i[n.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=St.concat(o,i);const l=[];let c=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(n)===!1||(c=c&&O.synchronous,l.unshift(O.fulfilled,O.rejected))});const u=[];this.interceptors.response.forEach(function(O){u.push(O.fulfilled,O.rejected)});let f,p=0,m;if(!c){const b=[td.bind(this),void 0];for(b.unshift.apply(b,l),b.push.apply(b,u),m=b.length,f=Promise.resolve(n);p<m;)f=f.then(b[p++],b[p++]);return f}m=l.length;let _=n;for(p=0;p<m;){const b=l[p++],O=l[p++];try{_=b(_)}catch(S){O.call(this,S);break}}try{f=td.call(this,_)}catch(b){return Promise.reject(b)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(e){e=Ur(this.defaults,e);const n=Zm(e.baseURL,e.url);return Gm(n,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){Vr.prototype[e]=function(n,r){return this.request(Ur(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,l){return this.request(Ur(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Vr.prototype[e]=n(),Vr.prototype[e+"Form"]=n(!0)});class hu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,l){r.reason||(r.reason=new Ps(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new hu(function(s){e=s}),cancel:e}}}function ZI(t){return function(n){return t.apply(null,n)}}function eA(t){return D.isObject(t)&&t.isAxiosError===!0}const Tc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tc).forEach(([t,e])=>{Tc[e]=t});function ig(t){const e=new Vr(t),n=Lm(Vr.prototype.request,e);return D.extend(n,Vr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return ig(Ur(t,s))},n}const We=ig(Bi);We.Axios=Vr;We.CanceledError=Ps;We.CancelToken=hu;We.isCancel=Xm;We.VERSION=sg;We.toFormData=ja;We.AxiosError=ge;We.Cancel=We.CanceledError;We.all=function(e){return Promise.all(e)};We.spread=ZI;We.isAxiosError=eA;We.mergeConfig=Ur;We.AxiosHeaders=St;We.formToJSON=t=>Jm(D.isHTMLForm(t)?new FormData(t):t);We.getAdapter=rg.getAdapter;We.HttpStatusCode=Tc;We.default=We;var rd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new nA;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const b=u<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rA=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},ra=function(t){return rA(t).replace(/\./g,"")},lg=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=()=>sA().__FIREBASE_DEFAULTS__,oA=()=>{if(typeof process>"u"||typeof rd>"u")return;const t=rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lg(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return iA()||oA()||aA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cg=t=>{var e,n;return(n=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lA=t=>{const e=cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ug=()=>{var t;return(t=$a())===null||t===void 0?void 0:t.config},hg=t=>{var e;return(e=$a())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ra(JSON.stringify(n)),ra(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function fA(){var t;const e=(t=$a())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function EA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TA,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new jn(s,l,r)}}function wA(t,e){return t.replace(vA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vA=/\{\$([^}]+)}/g;function IA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sd(i)&&sd(o)){if(!sa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function AA(t,e){const n=new bA(t,e);return n.subscribe.bind(n)}class bA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hl),s.error===void 0&&(s.error=Hl),s.complete===void 0&&(s.complete=Hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CA(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(t){return t===Sr?void 0:t}function CA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const OA={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},NA=ye.INFO,DA={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},VA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=DA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fu{constructor(e){this.name=e,this._logLevel=NA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const xA=(t,e)=>e.some(n=>t instanceof n);let id,od;function LA(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MA(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,wc=new WeakMap,dg=new WeakMap,$l=new WeakMap,du=new WeakMap;function FA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),du.set(e,t),e}function UA(t){if(wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wc.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BA(t){vc=t(vc)}function jA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zl(this),e,...n);return dg.set(r,e.sort?e.sort():[e]),or(r)}:MA().includes(t)?function(...e){return t.apply(zl(this),e),or(fg.get(this))}:function(...e){return or(t.apply(zl(this),e))}}function qA(t){return typeof t=="function"?jA(t):(t instanceof IDBTransaction&&UA(t),xA(t,LA())?new Proxy(t,vc):t)}function or(t){if(t instanceof IDBRequest)return FA(t);if($l.has(t))return $l.get(t);const e=qA(t);return e!==t&&($l.set(t,e),du.set(e,t)),e}const zl=t=>du.get(t);function HA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",c=>{r(or(o.result),c.oldVersion,c.newVersion,or(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $A=["get","getKey","getAll","getAllKeys","count"],zA=["put","add","delete","clear"],Wl=new Map;function ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$A.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Wl.set(e,i),i}BA(t=>({...t,get:(e,n,r)=>ad(e,n)||t.get(e,n,r),has:(e,n)=>!!ad(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",ld="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new fu("@firebase/app"),GA="@firebase/app-compat",QA="@firebase/analytics-compat",JA="@firebase/analytics",XA="@firebase/app-check-compat",YA="@firebase/app-check",ZA="@firebase/auth",eb="@firebase/auth-compat",tb="@firebase/database",nb="@firebase/data-connect",rb="@firebase/database-compat",sb="@firebase/functions",ib="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",lb="@firebase/messaging",cb="@firebase/messaging-compat",ub="@firebase/performance",hb="@firebase/performance-compat",fb="@firebase/remote-config",db="@firebase/remote-config-compat",pb="@firebase/storage",mb="@firebase/storage-compat",gb="@firebase/firestore",_b="@firebase/vertexai",yb="@firebase/firestore-compat",Eb="firebase",Tb="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",wb={[Ic]:"fire-core",[GA]:"fire-core-compat",[JA]:"fire-analytics",[QA]:"fire-analytics-compat",[YA]:"fire-app-check",[XA]:"fire-app-check-compat",[ZA]:"fire-auth",[eb]:"fire-auth-compat",[tb]:"fire-rtdb",[nb]:"fire-data-connect",[rb]:"fire-rtdb-compat",[sb]:"fire-fn",[ib]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[lb]:"fire-fcm",[cb]:"fire-fcm-compat",[ub]:"fire-perf",[hb]:"fire-perf-compat",[fb]:"fire-rc",[db]:"fire-rc-compat",[pb]:"fire-gcs",[mb]:"fire-gcs-compat",[gb]:"fire-fst",[yb]:"fire-fst-compat",[_b]:"fire-vertex","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map,vb=new Map,bc=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(bc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,t);for(const n of ia.values())cd(n,t);for(const n of vb.values())cd(n,t);return!0}function pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new ji("app","Firebase",Ib);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=Tb;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=ug()),!n)throw ar.create("no-options");const i=ia.get(s);if(i){if(sa(n,i.options)&&sa(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new kA(s);for(const c of bc.values())o.addComponent(c);const l=new Ab(n,r,o);return ia.set(s,l),l}function mg(t=Ac){const e=ia.get(t);if(!e&&t===Ac&&ug())return pg();if(!e)throw ar.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let s=(r=wb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Es(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="firebase-heartbeat-database",Rb=1,Ri="firebase-heartbeat-store";let Kl=null;function gg(){return Kl||(Kl=HA(bb,Rb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function Sb(t){try{const n=(await gg()).transaction(Ri),r=await n.objectStore(Ri).get(_g(t));return await n.done,r}catch(e){if(e instanceof jn)Ln.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function ud(t,e){try{const r=(await gg()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,_g(t)),await r.done}catch(n){if(n instanceof jn)Ln.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=1024,Cb=30*24*60*60*1e3;class kb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Cb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hd(),{heartbeatsToSend:r,unsentEntries:s}=Ob(this._heartbeatsCache.heartbeats),i=ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function hd(){return new Date().toISOString().substring(0,10)}function Ob(t,e=Pb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?EA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fd(t){return ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){Es(new Br("platform-logger",e=>new WA(e),"PRIVATE")),Es(new Br("heartbeat",e=>new kb(e),"PRIVATE")),lr(Ic,ld,t),lr(Ic,ld,"esm2017"),lr("fire-js","")}Db("");var Vb="firebase",xb="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lr(Vb,xb,"app");function mu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lb=yg,Eg=new ji("auth","Firebase",yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new fu("@firebase/auth");function Mb(t,...e){oa.logLevel<=ye.WARN&&oa.warn(`Auth (${Cs}): ${t}`,...e)}function Vo(t,...e){oa.logLevel<=ye.ERROR&&oa.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw _u(t,...e)}function Yt(t,...e){return _u(t,...e)}function gu(t,e,n){const r=Object.assign(Object.assign({},Lb()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return gu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),gu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eg.create(t,...e)}function ce(t,e,...n){if(!t)throw _u(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Mn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return dd()==="http:"||dd()==="https:"}function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||pA()||"connection"in navigator)?navigator.onLine:!0}function jb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=hA()||mA()}get(){return Bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Hi(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return wg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return dA()||(u.referrerPolicy="no-referrer"),Tg.fetch()(vg(t,t.config.apiHost,n,l),u)})}async function wg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qb),e);try{const s=new zb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Eo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gu(t,f,u);Kt(t,f)}}catch(s){if(s instanceof jn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function $i(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yu(t.config,s):`${t.config.apiScheme}://${s}`}function $b(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),Hb.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}function pd(t){return t!==void 0&&t.enterprise!==void 0}class Wb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $b(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kb(t,e){return Hn(t,"GET","/v2/recaptchaConfig",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Ig(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Eu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Gl(s.auth_time)),issuedAtTime:di(Gl(s.iat)),expirationTime:di(Gl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gl(t){return Number(t)*1e3}function Eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=lg(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function md(t){const e=Eu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&Jb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,Ig(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ag(i.providerUserInfo):[],l=Zb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Yb(t){const e=vt(t);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ag(t){return t.map(e=>{var{providerId:n}=e,r=mu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e){const n=await wg(t,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tR(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=md(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fs;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return Yb(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Si(this,Gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:z,isAnonymous:re,providerData:ae,stsTokenManager:I}=n;ce(q&&I,e,"internal-error");const y=fs.fromJSON(this.name,I);ce(typeof q=="string",e,"internal-error"),Xn(p,e.name),Xn(m,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof re=="boolean",e,"internal-error"),Xn(_,e.name),Xn(b,e.name),Xn(O,e.name),Xn(S,e.name),Xn(B,e.name),Xn(U,e.name);const w=new On({uid:q,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:re,photoURL:b,phoneNumber:_,tenantId:O,stsTokenManager:y,createdAt:B,lastLoginAt:U});return ae&&Array.isArray(ae)&&(w.providerData=ae.map(A=>Object.assign({},A))),S&&(w._redirectEventId=S),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new fs;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ag(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fs;l.updateFromIdToken(r);const c=new On({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;function Nn(t){Mn(t instanceof Function,"Expected a class definition");let e=gd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bg.type="NONE";const _d=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Nn(_d),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(_d);const o=xo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=On._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Ng(e))return"Webos";if(Sg(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rg(t=_t()){return/firefox\//i.test(t)}function Sg(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(t=_t()){return/crios\//i.test(t)}function Cg(t=_t()){return/iemobile/i.test(t)}function kg(t=_t()){return/android/i.test(t)}function Og(t=_t()){return/blackberry/i.test(t)}function Ng(t=_t()){return/webos/i.test(t)}function Tu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nR(t=_t()){var e;return Tu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rR(){return gA()&&document.documentMode===10}function Dg(t=_t()){return Tu(t)||kg(t)||Ng(t)||Og(t)||/windows phone/i.test(t)||Cg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e=[]){let n;switch(t){case"Browser":n=yd(_t());break;case"Worker":n=`${yd(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",qn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=6;class aR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ed(this),this.idTokenSubscription=new Ed(this),this.beforeStateQueue=new sR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ig(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Dn(this));const n=e?vt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iR(this),n=new aR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(t){return vt(t)}class Ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=AA(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cR(t){za=t}function xg(t){return za.loadJS(t)}function uR(){return za.recaptchaEnterpriseScript}function hR(){return za.gapiScript}function fR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dR{constructor(){this.enterprise=new pR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mR="recaptcha-enterprise",Lg="NO_RECAPTCHA";class gR{constructor(e){this.type=mR,this.auth=$n(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Kb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Wb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;pd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Lg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&pd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uR();c.length!==0&&(c+=l),xg(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Td(t,e,n,r=!1,s=!1){const i=new gR(t);let o;if(s)o=Lg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function la(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Td(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Td(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){const n=pu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sa(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function yR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ER(t,e,n){const r=$n(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Mg(e),{host:o,port:l}=TR(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),wR()}function Mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TR(t){const e=Mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wd(o)}}}function wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function vR(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){return $i(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}async function AR(t,e){return Hn(t,"POST","/v1/accounts:sendOobCode",qn(t,e))}async function bR(t,e){return AR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function SR(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends wu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return la(e,n,"signInWithPassword",IR);case"emailLink":return RR(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return la(e,r,"signUpPassword",vR);case"emailLink":return SR(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return $i(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="http://localhost";class jr extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:PR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kR(t){const e=Zs(ei(t)).link,n=e?Zs(ei(e)).deep_link_id:null,r=Zs(ei(t)).deep_link_id;return(r?Zs(ei(r)).link:null)||r||n||e||t}class vu{constructor(e){var n,r,s,i,o,l;const c=Zs(ei(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=CR((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=kR(e);try{return new vu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vu.parseLink(n);return ce(r,"argument-error"),Pi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Iu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends zi{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends zi{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends zi{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){return $i(t,"POST","/v1/accounts:signUp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=vd(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vd(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ca(e,n,r,s)}}function Fg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(t,i,e,r):i})}async function NR(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Si(t,Fg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Eu(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e,n=!1){if(Jt(t.app))return Promise.reject(Dn(t));const r="signIn",s=await Fg(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function VR(t,e){return Ug($n(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(t){const e=$n(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jg(t,e,n){const r=$n(t);await la(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",bR)}async function xR(t,e,n){if(Jt(t.app))return Promise.reject(Dn(t));const r=$n(t),o=await la(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bg(t),c}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LR(t,e,n){return Jt(t.app)?Promise.reject(Dn(t)):VR(vt(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bg(t),r})}function MR(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function FR(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}const ua="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=1e3,BR=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const jR=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$g.type="SESSION";const zg=$g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await qR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Au("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function $R(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function zR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KR(){return Wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firebaseLocalStorageDb",GR=1,ha="firebaseLocalStorage",Gg="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([ha],e?"readwrite":"readonly").objectStore(ha)}function QR(){const t=indexedDB.deleteDatabase(Kg);return new Wi(t).toPromise()}function Pc(){const t=indexedDB.open(Kg,GR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ha,{keyPath:Gg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ha)?e(r):(r.close(),await QR(),e(await Pc()))})})}async function Id(t,e,n){const r=Ka(t,!0).put({[Gg]:e,value:n});return new Wi(r).toPromise()}async function JR(t,e){const n=Ka(t,!1).get(e),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Ad(t,e){const n=Ka(t,!0).delete(e);return new Wi(n).toPromise()}const XR=800,YR=3;class Qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wa._getInstance(KR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zR(),!this.activeServiceWorker)return;this.sender=new HR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await Id(e,ua,"1"),await Ad(e,ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ka(s,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qg.type="LOCAL";const ZR=Qg;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){return e?Nn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eS(t){return Ug(t.auth,new bu(t),t.bypassAuthState)}function tS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),DR(n,new bu(t),t.bypassAuthState)}async function nS(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),NR(n,new bu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eS;case"linkViaPopup":case"linkViaRedirect":return nS;case"reauthViaPopup":case"reauthViaRedirect":return tS;default:Kt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Hi(2e3,1e4);async function sS(t,e,n){if(Jt(t.app))return Promise.reject(Yt(t,"operation-not-supported-in-this-environment"));const r=$n(t);Fb(t,e,Iu);const s=Jg(r,n);return new Or(r,"signInViaPopup",e,s).executeNotNull()}class Or extends Xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rS.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="pendingRedirect",Lo=new Map;class oS extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await aS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aS(t,e){const n=uS(e),r=cS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lS(t,e){Lo.set(t._key(),e)}function cS(t){return Nn(t._redirectPersistence)}function uS(t){return xo(iS,t.config.apiKey,t.name)}async function hS(t,e,n=!1){if(Jt(t.app))return Promise.reject(Dn(t));const r=$n(t),s=Jg(r,e),o=await new oS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=10*60*1e3;class dS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fS&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_S=/^https?/;async function yS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mS(t);for(const n of e)try{if(ES(n))return}catch{}Kt(t,"unauthorized-domain")}function ES(t){const e=Rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_S.test(n))return!1;if(gS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Hi(3e4,6e4);function Rd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wS(t){return new Promise((e,n)=>{var r,s,i;function o(){Rd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rd(),n(Yt(t,"network-request-failed"))},timeout:TS.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=fR("iframefcb");return dn()[l]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},xg(`${hR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function vS(t){return Mo=Mo||wS(t),Mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new Hi(5e3,15e3),AS="__/auth/iframe",bS="emulator/auth/iframe",RS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PS(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yu(e,bS):`https://${t.config.authDomain}/${AS}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},s=SS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qi(r).slice(1)}`}async function CS(t){const e=await vS(t),n=dn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:PS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},IS.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OS=500,NS=600,DS="_blank",VS="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xS(t,e,n,r=OS,s=NS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},kS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_t().toLowerCase();n&&(l=Pg(u)?DS:n),Rg(u)&&(e=e||VS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(nR(u)&&l!=="_self")return LS(e||"",l),new Sd(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Sd(p)}function LS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="__/auth/handler",FS="emulator/auth/handler",US=encodeURIComponent("fac");async function Pd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:s};if(e instanceof Iu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof zi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${US}=${encodeURIComponent(c)}`:"";return`${BS(t)}?${qi(l).slice(1)}${u}`}function BS({config:t}){return t.emulator?yu(t,FS):`https://${t.authDomain}/${MS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="webStorageSupport";class jS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zg,this._completeRedirectFn=hS,this._overrideRedirectResult=lS}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pd(e,n,r,Rc(),s);return xS(e,o,Au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Pd(e,n,r,Rc(),s);return $R(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CS(e),r=new dS(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ql,{type:Ql},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ql];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dg()||Sg()||Tu()}}const qS=jS;var Cd="@firebase/auth",kd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zS(t){Es(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vg(t)},u=new lR(r,s,i,c);return yR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Br("auth-internal",e=>{const n=$n(e.getProvider("auth").getImmediate());return(r=>new HS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(Cd,kd,$S(t)),lr(Cd,kd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=5*60,KS=hg("authIdTokenMaxAge")||WS;let Od=null;const GS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KS)return;const s=n==null?void 0:n.token;Od!==s&&(Od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QS(t=mg()){const e=pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_R(t,{popupRedirectResolver:qS,persistence:[ZR,jR,zg]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=GS(i.toString());FR(n,o,()=>o(n.currentUser)),MR(n,l=>o(l))}}const s=cg("auth");return s&&ER(n,`http://${s}`),n}function JS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zS("Browser");var Nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,Zg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,R,C){for(var v=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)v[yt-2]=arguments[yt];return y.prototype[R].apply(A,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;16>R;++R)A[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],R=I.g[2];var C=I.g[3],v=y+(C^w&(R^C))+A[0]+3614090360&4294967295;y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+A[1]+3905402710&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+A[2]+606105819&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+A[3]+3250441966&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+A[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+A[5]+1200080426&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+A[6]+2821735955&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+A[7]+4249261313&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+A[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+A[9]+2336552879&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+A[10]+4294925233&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+A[11]+2304563134&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(C^w&(R^C))+A[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(R^y&(w^R))+A[13]+4254626195&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(w^C&(y^w))+A[14]+2792965006&4294967295,R=C+(v<<17&4294967295|v>>>15),v=w+(y^R&(C^y))+A[15]+1236535329&4294967295,w=R+(v<<22&4294967295|v>>>10),v=y+(R^C&(w^R))+A[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+A[6]+3225465664&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+A[11]+643717713&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+A[0]+3921069994&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+A[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+A[10]+38016083&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+A[15]+3634488961&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+A[4]+3889429448&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+A[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+A[14]+3275163606&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+A[3]+4107603335&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+A[8]+1163531501&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(w^R))+A[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^R&(y^w))+A[2]+4243563512&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^w&(C^y))+A[7]+1735328473&4294967295,R=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(R^C))+A[12]+2368359562&4294967295,w=R+(v<<20&4294967295|v>>>12),v=y+(w^R^C)+A[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+A[8]+2272392833&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+A[11]+1839030562&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+A[14]+4259657740&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+A[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+A[4]+1272893353&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+A[7]+4139469664&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+A[10]+3200236656&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+A[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+A[0]+3936430074&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+A[3]+3572445317&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+A[6]+76029189&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(w^R^C)+A[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^R)+A[12]+3873151461&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^w)+A[15]+530742520&4294967295,R=C+(v<<16&4294967295|v>>>16),v=w+(R^C^y)+A[2]+3299628645&4294967295,w=R+(v<<23&4294967295|v>>>9),v=y+(R^(w|~C))+A[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+A[7]+1126891415&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+A[14]+2878612391&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+A[5]+4237533241&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+A[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+A[3]+2399980690&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+A[10]+4293915773&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+A[1]+2240044497&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+A[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+A[15]+4264355552&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+A[6]+2734768916&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+A[13]+1309151649&4294967295,w=R+(v<<21&4294967295|v>>>11),v=y+(R^(w|~C))+A[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~R))+A[11]+3174756917&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~w))+A[2]+718787259&4294967295,R=C+(v<<15&4294967295|v>>>17),v=w+(C^(R|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,A=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=w;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(A[R++]=I.charCodeAt(C++),R==this.blockSize){s(this,A),R=0;break}}else for(;C<y;)if(A[R++]=I[C++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)I[w++]=this.g[y]>>>A&255;return I};function i(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],A=!0,R=I.length-1;0<=R;R--){var C=I[R]|0;A&&C==y||(w[R]=C,A=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return S(u(-I));for(var y=[],w=1,A=0;I>=w;A++)y[A]=I/w|0,w*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return S(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=p,R=0;R<I.length;R+=8){var C=Math.min(8,I.length-R),v=parseInt(I.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),A=A.j(C).add(u(v))):(A=A.j(w),A=A.add(u(v)))}return A}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-S(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(O(this))return"-"+S(this).toString(I);for(var y=u(Math.pow(I,6)),w=this,A="";;){var R=z(w,y).g;w=B(w,R.j(y));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=R,b(w))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=B(this,I),O(I)?-1:b(I)?0:1};function S(I){for(var y=I.g.length,w=[],A=0;A<y;A++)w[A]=~I.g[A];return new o(w,~I.h).add(m)}t.abs=function(){return O(this)?S(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0,R=0;R<=y;R++){var C=A+(this.i(R)&65535)+(I.i(R)&65535),v=(C>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=v>>>16,C&=65535,v&=65535,w[R]=v<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function B(I,y){return I.add(S(y))}t.j=function(I){if(b(this)||b(I))return p;if(O(this))return O(I)?S(this).j(S(I)):S(S(this).j(I));if(O(I))return S(this.j(S(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var C=this.i(A)>>>16,v=this.i(A)&65535,yt=I.i(R)>>>16,Mt=I.i(R)&65535;w[2*A+2*R]+=v*Mt,U(w,2*A+2*R),w[2*A+2*R+1]+=C*Mt,U(w,2*A+2*R+1),w[2*A+2*R+1]+=v*yt,U(w,2*A+2*R+1),w[2*A+2*R+2]+=C*yt,U(w,2*A+2*R+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function U(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function q(I,y){this.g=I,this.h=y}function z(I,y){if(b(y))throw Error("division by zero");if(b(I))return new q(p,p);if(O(I))return y=z(S(I),y),new q(S(y.g),S(y.h));if(O(y))return y=z(I,S(y)),new q(S(y.g),y.h);if(30<I.g.length){if(O(I)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=y;0>=A.l(I);)w=re(w),A=re(A);var R=ae(w,1),C=ae(A,1);for(A=ae(A,2),w=ae(w,2);!b(A);){var v=C.add(A);0>=v.l(I)&&(R=R.add(w),C=v),A=ae(A,1),w=ae(w,1)}return y=B(I,R.j(y)),new q(R,y)}for(R=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(w),v=C.j(y);O(v)||0<v.l(I);)w-=A,C=u(w),v=C.j(y);b(C)&&(C=m),R=R.add(C),I=B(I,v)}return new q(R,I)}t.A=function(I){return z(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function re(I){for(var y=I.g.length+1,w=[],A=0;A<y;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function ae(I,y){var w=y>>5;y%=32;for(var A=I.g.length-w,R=[],C=0;C<A;C++)R[C]=0<y?I.i(C+w)>>>y|I.i(C+w+1)<<32-y:I.i(C+w);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,xr=o}).apply(typeof Nd<"u"?Nd:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,ti,t_,Fo,Cc,n_,r_,s_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,N){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return h.prototype[k].apply(g,G)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function S(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const k=a.length||0,N=g.length||0;a.length=k+N;for(let G=0;G<N;G++)a[k+G]=g[G]}else a.push(g)}}class B{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var re=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ae(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let N=0;N<w.length;N++)d=w[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Ct;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class yt{constructor(){this.h=this.g=null}add(h,d){const g=Mt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new B(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let we,_e=!1,Ct=new yt,Gt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){C(d)}var h=Mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function nn(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(re){e:{try{z(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:It[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}b(nn,Fe);var It={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,h,d,g,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var G=T(a,h,g,k);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new J(h,this.src,N,!!g,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(g,k,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function F(a,h,d,g,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)F(a,h[N],d,g,k);return null}return d=le(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,k):L(a,h,d,!1,g,k)}function L(a,h,d,g,k,N){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Oe=X(a);if(Oe||(a[P]=Oe=new Ae(a)),d=Oe.add(h,d,g,G,N),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)zn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent($(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,g,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)K(a,h[N],d,g,k);else g=u(g)?!!g.capture:!!g,d=le(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=T(N,d,g,k),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,k)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent($(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=X(h))?(E(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function $(a){return a in x?x[a]:x[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new nn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function X(a){return a=a[P],a instanceof Ae?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function oe(){Me.call(this),this.i=new Ae(this),this.M=this,this.F=null}b(oe,Me),oe.prototype[V]=!0,oe.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function me(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var k=h;h=new Fe(g,a),A(h,k)}if(k=!0,d)for(var N=d.length-1;0<=N;N--){var G=h.g=d[N];k=ve(G,g,!0,h)&&k}if(G=h.g=a,k=ve(G,g,!0,h)&&k,k=ve(G,g,!1,h)&&k,d)for(N=0;N<d.length;N++)G=h.g=d[N],k=ve(G,g,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ve(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var G=h[N];if(G&&!G.da&&G.capture==d){var Oe=G.listener,et=G.ha||G.src;G.fa&&E(a.i,G),k=Oe.call(et,g)!==!1&&k}}return k&&!g.defaultPrevented}function st(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ye(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ut extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function it(a){Me.call(this),this.h=a,this.g={}}b(it,Me);var Wn=[];function xs(a){ae(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}it.prototype.N=function(){it.aa.N.call(this),xs(this)},it.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ze=l.JSON.stringify,Bt=l.JSON.parse,Zi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fl(){}fl.prototype.h=null;function rh(a){return a.h||(a.h=a.i())}function sh(){}var Ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dl(){Fe.call(this,"d")}b(dl,Fe);function pl(){Fe.call(this,"c")}b(pl,Fe);var Tr={},ih=null;function eo(){return ih=ih||new oe}Tr.La="serverreachability";function oh(a){Fe.call(this,Tr.La,a)}b(oh,Fe);function Ms(a){const h=eo();me(h,new oh(h))}Tr.STAT_EVENT="statevent";function ah(a,h){Fe.call(this,Tr.STAT_EVENT,a),this.stat=h}b(ah,Fe);function Et(a){const h=eo();me(h,new ah(h,a))}Tr.Ma="timingevent";function lh(a,h){Fe.call(this,Tr.Ma,a),this.size=h}b(lh,Fe);function Fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function Ay(a,h,d,g,k,N){a.info(function(){if(a.g)if(N)for(var G="",Oe=N.split("&"),et=0;et<Oe.length;et++){var be=Oe[et].split("=");if(1<be.length){var ot=be[0];be=be[1];var at=ot.split("_");G=2<=at.length&&at[1]=="type"?G+(ot+"="+be+"&"):G+(ot+"=redacted&")}}else G=null;else G=N;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+G})}function by(a,h,d,g,k,N,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+G})}function Gr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Sy(a,d)+(g?" "+g:"")})}function Ry(a,h){a.info(function(){return"TIMEOUT: "+h})}Us.prototype.info=function(){};function Sy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return Ze(d)}catch{return h}}var to={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ml;function no(){}b(no,fl),no.prototype.g=function(){return new XMLHttpRequest},no.prototype.i=function(){return{}},ml=new no;function Kn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new it(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uh}function uh(){this.i=null,this.g="",this.h=!1}var hh={},gl={};function _l(a,h,d){a.L=1,a.v=oo(Tn(h)),a.m=d,a.P=!0,fh(a,null)}function fh(a,h){a.F=Date.now(),ro(a),a.A=Tn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Rh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new uh,a.g=$h(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ut(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Wn[0]=k.toString()),k=Wn);for(var N=0;N<k.length;N++){var G=F(d,k[N],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ms(),Ay(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&wn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const at=wn(this.g);var h=this.g.Ba();const Xr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Dh(this.g)))){this.J||at!=4||h==7||(h==8||0>=Xr?Ms(3):Ms(2)),yl(this);var d=this.g.Z();this.X=d;t:if(dh(this)){var g=Dh(this.g);a="";var k=g.length,N=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),Bs(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,by(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,et=this.g;if((Oe=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Oe)){var be=Oe;break t}}be=null}if(d=be)Gr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,d);else{this.o=!1,this.s=3,Et(12),wr(this),Bs(this);break e}}if(this.P){d=!0;let Qt;for(;!this.J&&this.C<G.length;)if(Qt=Py(this,G),Qt==gl){at==4&&(this.s=4,Et(14),d=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==hh){this.s=4,Et(15),Gr(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Gr(this.i,this.l,Qt,null),El(this,Qt);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||G.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)Gr(this.i,this.l,G,"[Invalid Chunked Response]"),wr(this),Bs(this);else if(0<G.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),bl(ot),ot.M=!0,Et(11))}}else Gr(this.i,this.l,G,null),El(this,G);at==4&&wr(this),this.o&&!this.J&&(at==4?Bh(this.j,this):(this.o=!1,ro(this)))}else zy(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),wr(this),Bs(this)}}}catch{}finally{}};function dh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Py(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?gl:(d=Number(h.substring(d,g)),isNaN(d)?hh:(g+=1,g+d>h.length?gl:(h=h.slice(g,g+d),a.C=g+d,h)))}Kn.prototype.cancel=function(){this.J=!0,wr(this)};function ro(a){a.S=Date.now()+a.I,ph(a,a.I)}function ph(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fs(m(a.ba,a),h)}function yl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ry(this.i,this.A),this.L!=2&&(Ms(),Et(17)),wr(this),this.s=2,Bs(this)):ph(this,this.S-a)};function Bs(a){a.j.G==0||a.J||Bh(a.j,a)}function wr(a){yl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function El(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Tl(d.h,a))){if(!a.K&&Tl(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)fo(d),uo(d);else break e;Al(d),Et(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fs(m(d.Za,d),6e3));if(1>=_h(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ir(d,11)}else if((a.K||d.g==a)&&fo(d),!U(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let be=k[h];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const ot=be[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=be[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const Xr=be[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(g=1.5*Xr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Qt=a.g;if(Qt){const mo=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var N=g.h;N.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(wl(N,N.h),N.h=null))}if(g.D){const Rl=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Rl&&(g.ya=Rl,xe(g.I,g.D,Rl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=Hh(g,g.J?g.ia:null,g.W),G.K){yh(g.h,G);var Oe=G,et=g.L;et&&(Oe.I=et),Oe.B&&(yl(Oe),ro(Oe)),g.g=G}else Fh(g);0<d.i.length&&ho(d)}else be[0]!="stop"&&be[0]!="close"||Ir(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Ir(d,7):Il(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}Ms(4)}catch{}}var Cy=class{constructor(a,h){this.g=a,this.map=h}};function mh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _h(a){return a.h?1:a.g?a.g.size:0}function Tl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wl(a,h){a.g?a.g.add(h):a.h=h}function yh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}mh.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function ky(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function Oy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Th(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Oy(a),g=ky(a),k=g.length,N=0;N<k;N++)h.call(void 0,g[N],d&&d[N],a)}var wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ny(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var N=a[d].substring(0,g);k=a[d].substring(g+1)}else N=a[d];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vr){this.h=a.h,so(this,a.j),this.o=a.o,this.g=a.g,io(this,a.s),this.l=a.l;var h=a.i,d=new Hs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),vh(this,d),this.m=a.m}else a&&(h=String(a).match(wh))?(this.h=!1,so(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),io(this,h[4]),this.l=js(h[5]||"",!0),vh(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(qs(h,Ih,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(qs(h,Ih,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(qs(d,d.charAt(0)=="/"?xy:Vy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",qs(d,My)),a.join("")};function Tn(a){return new vr(a)}function so(a,h,d){a.j=d?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function io(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vh(a,h,d){h instanceof Hs?(a.i=h,Fy(a.i,a.h)):(d||(h=qs(h,Ly)),a.i=new Hs(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function oo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function qs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Dy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Dy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ih=/[#\/\?@]/g,Vy=/[#\?:]/g,xy=/[#\?]/g,Ly=/[#\?@]/g,My=/#/g;function Hs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ny(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Hs.prototype,t.add=function(a,h){Gn(this),this.i=null,a=Qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ah(a,h){Gn(a),h=Qr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bh(a,h){return Gn(a),h=Qr(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let N=0;N<k.length;N++)d.push(h[g])}return d},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")bh(this,a)&&(h=h.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=Qr(this,a),bh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Rh(a,h,d){Ah(a,h),0<d.length&&(a.i=null,a.g.set(Qr(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var k=N;G[g]!==""&&(k+="="+encodeURIComponent(String(G[g]))),a.push(k)}}return this.i=a.join("&")};function Qr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Fy(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Ah(this,g),Rh(this,k,d))},a)),a.j=h}function Uy(a,h){const d=new Us;if(l.Image){const g=new Image;g.onload=_(Qn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Qn,d,"TestLoadImage: error",!1,h,g),g.onabort=_(Qn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Qn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function By(a,h){const d=new Us,g=new AbortController,k=setTimeout(()=>{g.abort(),Qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(k),N.ok?Qn(d,"TestPingServer: ok",!0,h):Qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Qn(d,"TestPingServer: error",!1,h)})}function Qn(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function jy(){this.g=new Zi}function qy(a,h,d){const g=d||"";try{Th(a,function(k,N){let G=k;u(k)&&(G=Ze(k)),h.push(g+N+"="+encodeURIComponent(G))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function ao(a){this.l=a.Ub||null,this.j=a.eb||!1}b(ao,fl),ao.prototype.g=function(){return new lo(this.l,this.j)},ao.prototype.i=function(a){return function(){return a}}({});function lo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(lo,oe),t=lo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$s(this):zs(this),this.readyState==3&&Sh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Qa=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ph(a){let h="";return ae(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function vl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ph(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function Be(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Be,oe);var Hy=/^https?$/i,$y=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ml.g(),this.v=this.o?rh(this.o):rh(ml),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Ch(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($y,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of d)this.g.setRequestHeader(N,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ch(this,N)}};function Ch(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,kh(a),co(a)}function kh(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,me(this,"complete"),me(this,"abort"),co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Oh(this):this.bb())},t.bb=function(){Oh(this)};function Oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wn(a)!=4||a.Z()!=2)){if(a.u&&wn(a)==4)st(a.Ea,0,a);else if(me(a,"readystatechange"),wn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var k=String(a.D).match(wh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!Hy.test(k?k.toLowerCase():"")}d=g}if(d)me(a,"complete"),me(a,"success");else{a.m=6;try{var N=2<wn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",kh(a)}}finally{co(a)}}}}function co(a,h){if(a.g){Nh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||me(a,"ready");try{d.onreadystatechange=g}catch{}}}function Nh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function wn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bt(h)}};function Dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zy(a){const h={};a=(a.g&&2<=wn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=R(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Vh(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mh(a&&a.concurrentRequestLimit),this.Da=new jy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Et(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Hh(this,null,this.W),ho(this)};function Il(a){if(xh(a),a.G==3){var h=a.U++,d=Tn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),Ks(a,d),h=new Kn(a,a.j,h),h.L=2,h.v=oo(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=$h(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ro(h)}qh(a)}function uo(a){a.g&&(bl(a),a.g.cancel(),a.g=null)}function xh(a){uo(a),a.u&&(l.clearTimeout(a.u),a.u=null),fo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ho(a){if(!gh(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||Gt(),_e||(we(),_e=!0),Ct.add(h,a),a.B=0}}function Wy(a,h){return _h(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fs(m(a.Ga,a,h),jh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Kn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mh(this,k,h),d=Tn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),Ks(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Ph(N)))+"&"+h:this.m&&vl(d,this.m,N)),wl(this.h,k),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),k.T=!0,_l(k,d,null)):_l(k,d,h),this.G=2}}else this.G==3&&(a?Lh(this,a):this.i.length==0||gh(this.h)||Lh(this))};function Lh(a,h){var d;h?d=h.l:d=a.U++;const g=Tn(a.I);xe(g,"SID",a.K),xe(g,"RID",d),xe(g,"AID",a.T),Ks(a,g),a.m&&a.o&&vl(g,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Mh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wl(a.h,d),_l(d,g,h)}function Ks(a,h){a.H&&ae(a.H,function(d,g){xe(h,g,d)}),a.l&&Th({},function(d,g){xe(h,g,d)})}function Mh(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const G=["count="+d];N==-1?0<d?(N=k[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let Oe=!0;for(let et=0;et<d;et++){let be=k[et].g;const ot=k[et].map;if(be-=N,0>be)N=Math.max(0,k[et].g-100),Oe=!1;else try{qy(ot,G,"req"+be+"_")}catch{g&&g(ot)}}if(Oe){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Fh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||Gt(),_e||(we(),_e=!0),Ct.add(h,a),a.v=0}}function Al(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fs(m(a.Fa,a),jh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),uo(this),Uh(this))};function bl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Uh(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&vl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=oo(Tn(h)),d.m=null,d.P=!0,fh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,uo(this),Al(this),Et(19))};function fo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Bh(a,h){var d=null;if(a.g==h){fo(a),bl(a),a.g=null;var g=2}else if(Tl(a.h,h))d=h.D,yh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=eo(),me(g,new lh(g,d)),ho(a)}else Fh(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&Wy(a,h)||g==2&&Al(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function jh(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Ir(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||so(g,"https"),oo(g),k?Uy(g.toString(),d):By(g.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(h),qh(a),xh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function qh(a){if(a.G=0,a.ka=[],a.l){const h=Eh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Hh(a,h,d){var g=d instanceof vr?Tn(d):new vr(d);if(g.g!="")h&&(g.g=h+"."+g.g),io(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new vr(null);g&&so(N,g),h&&(N.g=h),k&&io(N,k),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&xe(g,d,h),xe(g,"VER",a.la),Ks(a,g),g}function $h(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new ao({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zh(){}t=zh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function po(){}po.prototype.g=function(a,h){return new kt(a,h)};function kt(a,h){oe.call(this),this.g=new Vh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Jr(this)}b(kt,oe),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Il(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ze(a),a=d);h.i.push(new Cy(h.Ya++,a)),h.G==3&&ho(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,kt.aa.N.call(this)};function Wh(a){dl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(Wh,dl);function Kh(){pl.call(this),this.status=1}b(Kh,pl);function Jr(a){this.g=a}b(Jr,zh),Jr.prototype.ua=function(){me(this.g,"a")},Jr.prototype.ta=function(a){me(this.g,new Wh(a))},Jr.prototype.sa=function(a){me(this.g,new Kh)},Jr.prototype.ra=function(){me(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,s_=function(){return new po},r_=function(){return eo()},n_=Tr,Cc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,Fo=to,ch.COMPLETE="complete",t_=ch,sh.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",oe.prototype.listen=oe.prototype.K,ti=sh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,e_=Be}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const Dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new fu("@firebase/firestore");function ts(){return Hr.logLevel}function Z(t,...e){if(Hr.logLevel<=ye.DEBUG){const n=e.map(Ru);Hr.debug(`Firestore (${Os}): ${t}`,...n)}}function Fn(t,...e){if(Hr.logLevel<=ye.ERROR){const n=e.map(Ru);Hr.error(`Firestore (${Os}): ${t}`,...n)}}function Ts(t,...e){if(Hr.logLevel<=ye.WARN){const n=e.map(Ru);Hr.warn(`Firestore (${Os}): ${t}`,...n)}}function Ru(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Ce(t,e){t||he()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class YS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZS{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new i_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ct(e)}}class eP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new nP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Qe(0,0))}static max(){return new fe(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ci{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const iP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Ci{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return iP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Le.fromString(e))}static fromName(e){return new se(Le.fromString(e).popFirst(5))}static empty(){return new se(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Le(e.slice()))}}function oP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new ur(s,se.empty(),e)}function aP(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(fe.min(),se.empty(),-1)}static max(){return new ur(fe.max(),se.empty(),-1)}}function lP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==cP)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function hP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ga.oe=-1;function Qa(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function fP(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vd(e)),e=pP(t.get(n),e);return Vd(e)}function pP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Vd(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function a_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ld(this.data.getIterator())}getIteratorFrom(e){return new Ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Je(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new l_("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const mP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=mP.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ja(t){const e=t.mapValue.fields.__previous_value__;return Su(e)?Ja(e):e}function ki(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Su(t)?4:yP(t)?9007199254740991:_P(t)?10:11:he()}function yn(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),l=hr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),l=qe(i.doubleValue);return o===l?fa(o)===fa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(xd(o)!==xd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!yn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Ni(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=dr(t),r=dr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Md(t.timestampValue,e.timestampValue);case 4:return Md(ki(t),ki(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=fr(i),c=fr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(qe(i.latitude),qe(o.latitude));return l!==0?l:Te(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,b=(c=m.value)===null||c===void 0?void 0:c.arrayValue,O=Te(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Fd(_,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Te(c[p],f[p]);if(m!==0)return m;const _=vs(l[c[p]],u[f[p]]);if(_!==0)return _}return Te(c.length,f.length)}(t.mapValue,e.mapValue);default:throw he()}}function Md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=hr(t),r=hr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Fd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Is(t){return kc(t)}function kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Uo(t){switch(dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ja(t);return e?16+Uo(e):16;case 5:return 2*t.stringValue.length;case 6:return fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Uo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return yr(r.fields,(i,o)=>{s+=i.length+Uo(o)}),s}(t.mapValue);default:throw he()}}function Oc(t){return!!t&&"integerValue"in t}function Pu(t){return!!t&&"arrayValue"in t}function Ud(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function _P(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=pi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(pi(this.value))}}function c_(t){const e=[];return yr(t.fields,(n,r)=>{const s=new nt([n]);if(Bo(r)){const i=c_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,fe.min(),fe.min(),fe.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,fe.min(),fe.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,fe.min(),fe.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function EP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{}class Ge extends u_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wP(e,n,r):n==="array-contains"?new AP(e,r):n==="in"?new bP(e,r):n==="not-in"?new RP(e,r):n==="array-contains-any"?new SP(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vP(e,r):new IP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends u_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return h_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function h_(t){return t.op==="and"}function f_(t){return TP(t)&&h_(t)}function TP(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Nc(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(f_(t))return t.filters.map(e=>Nc(e)).join(",");{const e=t.filters.map(n=>Nc(n)).join(",");return`${t.op}(${e})`}}function d_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&d_(o,s.filters[l]),!0):!1}(t,e):void he()}function p_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(p_).join(" ,")+"}"}(t):"Filter"}class wP extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class vP extends Ge{constructor(e,n){super(e,"in",n),this.keys=m_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IP extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=m_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function m_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class AP extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pu(n)&&Ni(n.arrayValue,this.value)}}class bP extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class RP extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class SP extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new PP(t,e,n,r,s,i,o)}function Cu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ue=n}return e.ue}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!d_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qd(t.startAt,e.startAt)&&qd(t.endAt,e.endAt)}function Dc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function CP(t,e,n,r,s,i,o,l){return new Xa(t,e,n,r,s,i,o,l)}function Ou(t){return new Xa(t)}function $d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kP(t){return t.collectionGroup!==null}function mi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new pa(i,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new pa(nt.keyField(),r))}return e.ce}function pn(t){const e=de(t);return e.le||(e.le=OP(e,mi(t))),e.le}function OP(t,e){if(t.limitType==="F")return Hd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)});const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return Hd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vc(t,e,n){return new Xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return ku(pn(t),pn(e))&&t.limitType===e.limitType}function g_(t){return`${Cu(pn(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>p_(s)).join(", ")}]`),Qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=jd(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,l,c){const u=jd(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,mi(r),s))}(t,e)}function NP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function __(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=DP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DP(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?vs(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return a_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new Ue(se.comparator);function Un(){return VP}const y_=new Ue(se.comparator);function ni(...t){let e=y_;for(const n of t)e=e.insert(n.key,n);return e}function E_(t){let e=y_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return gi()}function T_(){return gi()}function gi(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const xP=new Ue(se.comparator),LP=new Je(se.comparator);function Ee(...t){let e=LP;for(const n of t)e=e.add(n);return e}const MP=new Je(Te);function FP(){return MP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function w_(t){return{integerValue:""+t}}function UP(t,e){return fP(e)?w_(e):Nu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this._=void 0}}function BP(t,e,n){return t instanceof ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Su(i)&&(i=Ja(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?I_(t,e):t instanceof Vi?A_(t,e):function(s,i){const o=v_(s,i),l=zd(o)+zd(s.Pe);return Oc(o)&&Oc(s.Pe)?w_(l):Nu(s.serializer,l)}(t,e)}function jP(t,e,n){return t instanceof Di?I_(t,e):t instanceof Vi?A_(t,e):n}function v_(t,e){return t instanceof ga?function(r){return Oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ma extends el{}class Di extends el{constructor(e){super(),this.elements=e}}function I_(t,e){const n=b_(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends el{constructor(e){super(),this.elements=e}}function A_(t,e){let n=b_(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class ga extends el{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zd(t){return qe(t.integerValue||t.doubleValue)}function b_(t){return Pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Vi&&s instanceof Vi?ws(r.elements,s.elements,yn):r instanceof ga&&s instanceof ga?yn(r.Pe,s.Pe):r instanceof ma&&s instanceof ma}(t.transform,e.transform)}class HP{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function R_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Du(t.key,zt.none()):new Ki(t.key,t.data,zt.none());{const n=t.data,r=bt.empty();let s=new Je(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new xt(s.toArray()),zt.none())}}function $P(t,e,n){t instanceof Ki?function(s,i,o){const l=s.value.clone(),c=Kd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(s,i,o){if(!jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(S_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _i(t,e,n,r){return t instanceof Ki?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=i.value.clone(),f=Gd(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=Gd(i.fieldTransforms,c,o),f=o.data;return f.setAll(S_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function zP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>qP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function S_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,jP(o,l,n[s]))}return r}function Gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,BP(i,o,e))}return r}class Du extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WP extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$P(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=T_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=R_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>Wd(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>Wd(n,r))}}class Vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return xP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Ie;function JP(t){switch(t){default:return he();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function P_(t){if(t===void 0)return Fn("GRPC error has no .code"),H.UNKNOWN;switch(t){case $e.OK:return H.OK;case $e.CANCELLED:return H.CANCELLED;case $e.UNKNOWN:return H.UNKNOWN;case $e.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case $e.INTERNAL:return H.INTERNAL;case $e.UNAVAILABLE:return H.UNAVAILABLE;case $e.UNAUTHENTICATED:return H.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case $e.NOT_FOUND:return H.NOT_FOUND;case $e.ALREADY_EXISTS:return H.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return H.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case $e.ABORTED:return H.ABORTED;case $e.OUT_OF_RANGE:return H.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return H.UNIMPLEMENTED;case $e.DATA_LOSS:return H.DATA_LOSS;default:return he()}}(Ie=$e||($e={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new xr([4294967295,4294967295],0);function Qd(t){const e=XP().encode(t),n=new Zg;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xr([n,r],0),new xr([s,i],0)]}class xu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ri(`Invalid padding: ${n}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ri(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=xr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(xr.fromNumber(r)));return s.compare(YP)===1&&(s=new xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(fe.min(),s,new Ue(Te),Un(),Ee())}}class Gi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gi(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class C_{constructor(e,n){this.targetId=e,this.me=n}}class k_{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xd{constructor(){this.fe=0,this.ge=Yd(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Gi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Yd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Io(),this.Qe=Io(),this.Ke=new Ue(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Dc(i))if(r===0){const o=new se(i.path);this.We(n,o,ft.newNoDocument(o,fe.min()))}else Ce(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=fr(r).toUint8Array()}catch(c){if(c instanceof l_)return Ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xu(o,s,i)}catch(c){return Ts(c instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Dc(l.target)){const c=new se(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,ft.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Ke,this.ke,r);return this.ke=Un(),this.qe=Io(),this.Qe=Io(),this.Ke=new Ue(Te),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Xd,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Je(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Xd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Io(){return new Ue(se.comparator)}function Yd(){return new Ue(se.comparator)}const eC={asc:"ASCENDING",desc:"DESCENDING"},tC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nC={and:"AND",or:"OR"};class rC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xc(t,e){return t.useProto3Json||Qa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sC(t,e){return _a(t,e.toTimestamp())}function mn(t){return Ce(!!t),fe.fromTimestamp(function(n){const r=hr(n);return new Qe(r.seconds,r.nanos)}(t))}function Lu(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function N_(t){const e=Le.fromString(t);return Ce(M_(e)),e}function Mc(t,e){return Lu(t.databaseId,e.path)}function Jl(t,e){const n=N_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(V_(n))}function D_(t,e){return Lu(t.databaseId,e)}function iC(t){const e=N_(t);return e.length===4?Le.emptyPath():V_(e)}function Fc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function oC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?H.UNKNOWN:P_(u.code);return new te(f,u.message||"")}(o);n=new k_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):fe.min(),l=new bt({mapValue:{fields:r.document.fields}}),c=ft.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new qo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jl(t,r.document),i=r.readTime?mn(r.readTime):fe.min(),o=ft.newNoDocument(s,i),l=r.removedTargetIds||[];n=new qo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jl(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QP(s,i),l=r.targetId;n=new C_(l,o)}}return n}function aC(t,e){let n;if(e instanceof Ki)n={update:Zd(t,e.key,e.value)};else if(e instanceof Du)n={delete:Mc(t,e.key)};else if(e instanceof Er)n={update:Zd(t,e.key,e.data),updateMask:gC(e.fieldMask)};else{if(!(e instanceof WP))return he();n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function lC(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(fe.min())&&(o=mn(i)),new HP(o,s.transformResults||[])}(n,e))):[]}function cC(t,e){return{documents:[D_(t,e.path)]}}function uC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=D_(t,s);const i=function(u){if(u.length!==0)return L_(En.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:rs(m.field),direction:dC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function hC(t){let e=iC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=x_(p);return m instanceof En&&f_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new pa(ss(b.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Qa(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new da(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new da(_,m)}(n.endAt)),CP(e,s,o,i,l,"F",c,u)}function fC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ss(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function dC(t){return eC[t]}function pC(t){return tC[t]}function mC(t){return nC[t]}function rs(t){return{fieldPath:t.canonicalString()}}function ss(t){return nt.fromServerFormat(t.fieldPath)}function L_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Bd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(Ud(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bd(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(Ud(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:pC(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>L_(s));return r.length===1?r[0]:{compositeFilter:{op:mC(n.op),filters:r}}}(t):he()}function gC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function M_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.ht=e}}function yC(t){const e=hC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.ln=new TC}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ur.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class TC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(41943040,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new As(0)}static Qn(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class wC{constructor(e){this.Gn=e,this.buffer=new Je(tp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();tp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ds(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ns(n)}await this.Yn(3e5)})}}class IC{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ga.oe);const r=new wC(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(ep)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ep):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ts()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function AC(t,e){return new IC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_i(r.mutation,s,xt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ni();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Un();const o=gi(),l=function(){return gi()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),_i(f.mutation,u,f.mutation.getFieldMask(),Qe.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new RC(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=gi();let s=new Ue((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||xt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=T_();f.forEach(m=>{if(!i.has(m)){const _=R_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Nr());let l=-1,c=i;return o.next(u=>M.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(f=>({batchId:l,changes:E_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(p,m){return new Xa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let l=ni();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&_i(f.mutation,u,xt.empty(),Qe.now()),Za(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:yC(s.bundledQuery),readTime:mn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.overlays=new Ue(se.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Nr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return M.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GP(n,r));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.dr=new Je(Xe.Ar),this.Rr=new Je(Xe.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Xe(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new se(new Le([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new Le([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=Ee();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Je(Xe.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(Te);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new se(i),0);let l=new Je(Te);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),M.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Xe(n,0),s=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.Nr=e,this.docs=function(){return new Ue(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lP(aP(f),r)<=0||(s.has(f.key)||Za(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DC(this)}getSize(e){return M.resolve(this.size)}}class DC extends bC{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.persistence=e,this.Br=new zr(n=>Cu(n),ku),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new Mu,this.targetCount=0,this.Qr=As.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ga(0),this.Ur=!1,this.Ur=!0,this.Wr=new kC,this.referenceDelegate=e(this),this.Gr=new VC(this),this.indexManager=new EC,this.remoteDocumentCache=function(s){return new NC(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new _C(n),this.jr=new PC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new OC(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new xC(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class xC extends uP{constructor(e){super(),this.currentSequenceNumber=e}}class Fu{constructor(e){this.persistence=e,this.Zr=new Mu,this.Xr=null}static ei(e){return new Fu(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.ri=new zr(r=>dP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=AC(this,n)}static ei(e,n){return new ya(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uo(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _A()?8:hP(_t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new LC;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ts()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(ts()<=ye.DEBUG&&Z("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ts()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):M.resolve())}Xi(e,n){if($d(n))return M.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vc(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Vc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return $d(n)||s.isEqual(fe.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?M.resolve(null):(ts()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ns(n)),this.os(e,o,n,oP(s,-1)).next(l=>l))})}rs(e,n){let r=new Je(__(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ts()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Zi.getDocumentsMatchingQuery(e,n,ur.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(Te),this.cs=new zr(i=>Cu(i),ku),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function UC(t,e,n,r){return new FC(t,e,n,r)}async function U_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function BC(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let _=M.resolve();return m.forEach(b=>{_=_.next(()=>f.getEntry(c,b)).next(O=>{const S=u.docVersions.get(b);Ce(S!==null),O.version.compareTo(S)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function B_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function jC(t,e){const n=de(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(rt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(O,S,B){return O.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,_,f)&&l.push(n.Gr.updateTargetData(i,_))});let c=Un(),u=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(qC(i,o,e.documentUpdates).next(f=>{c=f.Is,u=f.Es})),!r.isEqual(fe.min())){const f=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function qC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function HC(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $C(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Uc(t,e,n){const r=de(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ds(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function np(t,e,n){const r=de(t);let s=fe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=de(c),m=p.cs.get(f);return m!==void 0?M.resolve(p.us.get(m)):p.Gr.getTargetData(u,f)}(r,o,pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Ee())).next(l=>(zC(r,NP(e),l),{documents:l,ds:i})))}function zC(t,e,n){let r=t.ls.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class rp{constructor(){this.activeTargetIds=FP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WC{constructor(){this._o=new rp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function Xl(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class JC extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Xl(),c=this.No(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ts("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=GC[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Xl();return new Promise((o,l)=>{const c=new e_;c.setWithCredentials(!0),c.listenOnce(t_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fo.NO_ERROR:const f=c.getResponseJson();Z(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Fo.TIMEOUT:Z(lt,`RPC '${e}' ${i} timed out`),l(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const p=c.getStatus();if(Z(lt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const b=function(S){const B=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(B)>=0?B:H.UNKNOWN}(_.status);l(new te(b,_.message))}else l(new te(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(H.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Z(lt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(lt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Xl(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s_(),l=r_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(lt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,_=!1;const b=new QC({Eo:S=>{_?Z(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(Z(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(lt,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Ao:()=>p.close()}),O=(S,B,U)=>{S.listen(B,q=>{try{U(q)}catch(z){setTimeout(()=>{throw z},0)}})};return O(p,ti.EventType.OPEN,()=>{_||(Z(lt,`RPC '${e}' stream ${s} transport opened.`),b.So())}),O(p,ti.EventType.CLOSE,()=>{_||(_=!0,Z(lt,`RPC '${e}' stream ${s} transport closed`),b.Do())}),O(p,ti.EventType.ERROR,S=>{_||(_=!0,Ts(lt,`RPC '${e}' stream ${s} transport errored:`,S),b.Do(new te(H.UNAVAILABLE,"The operation could not be completed")))}),O(p,ti.EventType.MESSAGE,S=>{var B;if(!_){const U=S.data[0];Ce(!!U);const q=U,z=(q==null?void 0:q.error)||((B=q[0])===null||B===void 0?void 0:B.error);if(z){Z(lt,`RPC '${e}' stream ${s} received error:`,z);const re=z.status;let ae=function(w){const A=$e[w];if(A!==void 0)return P_(A)}(re),I=z.message;ae===void 0&&(ae=H.INTERNAL,I="Unknown error status: "+re+" with message "+z.message),_=!0,b.Do(new te(ae,I)),p.close()}else Z(lt,`RPC '${e}' stream ${s} received:`,U),b.vo(U)}}),O(l,n_.STAT_EVENT,S=>{S.stat===Cc.PROXY?Z(lt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Cc.NOPROXY&&Z(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function Yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return new rC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new j_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XC extends q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=oC(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?mn(o.readTime):fe.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Fc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Dc(c)?{documents:cC(i,c)}:{query:uC(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=O_(i,o.resumeToken);const u=xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=fC(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.c_(n)}}class YC extends q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=lC(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Fc(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aC(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Lc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(H.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Lc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(H.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class e0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fn(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.k_.add(4),await Qi(u),u.K_.set("Unknown"),u.k_.delete(4),await sl(u)}(this))})}),this.K_=new e0(r,s)}}async function sl(t){if(Wr(t))for(const e of t.q_)await e(!0)}async function Qi(t){for(const e of t.q_)await e(!1)}function H_(t,e){const n=de(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Hu(n)?qu(n):Vs(n).s_()&&ju(n,e))}function Bu(t,e){const n=de(t),r=Vs(n);n.B_.delete(e),r.s_()&&$_(n,e),n.B_.size===0&&(r.s_()?r.a_():Wr(n)&&n.K_.set("Unknown"))}function ju(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).V_(e)}function $_(t,e){t.U_.xe(e),Vs(t).m_(e)}function qu(t){t.U_=new ZP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.K_.F_()}function Hu(t){return Wr(t)&&!Vs(t).i_()&&t.B_.size>0}function Wr(t){return de(t).k_.size===0}function z_(t){t.U_=void 0}async function n0(t){t.K_.set("Online")}async function r0(t){t.B_.forEach((e,n)=>{ju(t,e)})}async function s0(t,e){z_(t),Hu(t)?(t.K_.O_(e),qu(t)):t.K_.set("Unknown")}async function i0(t,e,n){if(t.K_.set("Online"),e instanceof k_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ea(t,r)}else if(e instanceof qo?t.U_.$e(e):e instanceof C_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(fe.min()))try{const r=await B_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.B_.get(u);f&&i.B_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.B_.get(c);if(!f)return;i.B_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),$_(i,c);const p=new sr(f.target,c,u,f.sequenceNumber);ju(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Ea(t,r)}}async function Ea(t,e,n){if(!Ds(e))throw e;t.k_.add(1),await Qi(t),t.K_.set("Offline"),n||(n=()=>B_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await sl(t)})}function W_(t,e){return e().catch(n=>Ea(t,n,e))}async function il(t){const e=de(t),n=pr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;o0(e);)try{const s=await HC(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,a0(e,s)}catch(s){await Ea(e,s)}K_(e)&&G_(e)}function o0(t){return Wr(t)&&t.L_.length<10}function a0(t,e){t.L_.push(e);const n=pr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function K_(t){return Wr(t)&&!pr(t).i_()&&t.L_.length>0}function G_(t){pr(t).start()}async function l0(t){pr(t).w_()}async function c0(t){const e=pr(t);for(const n of t.L_)e.g_(n.mutations)}async function u0(t,e,n){const r=t.L_.shift(),s=Vu.from(r,e,n);await W_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function h0(t,e){e&&pr(t).f_&&await async function(r,s){if(function(o){return JP(o)&&o!==H.ABORTED}(s.code)){const i=r.L_.shift();pr(r).__(),await W_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),K_(t)&&G_(t)}async function ip(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.k_.add(3),await Qi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await sl(n)}async function f0(t,e){const n=de(t);e?(n.k_.delete(2),await sl(n)):e||(n.k_.add(2),await Qi(n),n.K_.set("Unknown"))}function Vs(t){return t.W_||(t.W_=function(n,r,s){const i=de(n);return i.b_(),new XC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:n0.bind(null,t),mo:r0.bind(null,t),po:s0.bind(null,t),R_:i0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Hu(t)?qu(t):t.K_.set("Unknown")):(await t.W_.stop(),z_(t))})),t.W_}function pr(t){return t.G_||(t.G_=function(n,r,s){const i=de(n);return i.b_(),new YC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:l0.bind(null,t),po:h0.bind(null,t),p_:c0.bind(null,t),y_:u0.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await il(t)):(await t.G_.stop(),t.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new $u(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zu(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Ds(t))return new te(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{static emptySet(e){return new ms(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ni(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.z_=new Ue(se.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class p0{constructor(){this.queries=ap(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=ap(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new te(H.ABORTED,"Firestore shutting down"))}}function ap(){return new zr(t=>g_(t),Ya)}async function Q_(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new d0,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=zu(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Wu(n)}async function J_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function m0(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Wu(n)}function g0(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Wu(t){t.X_.forEach(e=>{e.next()})}var Bc,lp;(lp=Bc||(Bc={})).na="default",lp.Cache="cache";class X_{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class _0{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=__(e),this.ma=new ms(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new op,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=Za(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?b!==O&&(r.track({type:3,doc:_}),S=!0):this.ya(m,_)||(r.track({type:2,doc:_}),S=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),S=!0):m&&!_&&(r.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(_?(o=o.add(_),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(_,b){const O=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return O(_)-O(b)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new bs(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new op,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Z_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Y_(r))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return bs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class y0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E0{constructor(e){this.key=e,this.Fa=!1}}class T0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new zr(l=>g_(l),Ya),this.Oa=new Map,this.Na=new Set,this.La=new Ue(se.comparator),this.Ba=new Map,this.ka=new Mu,this.qa={},this.Qa=new Map,this.Ka=As.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function w0(t,e,n=!0){const r=iy(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await ey(r,e,n,!0),s}async function v0(t,e){const n=iy(t);await ey(n,e,!0,!1)}async function ey(t,e,n,r){const s=await $C(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await I0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&H_(t.remoteStore,s),l}async function I0(t,e,n,r,s){t.Ua=(p,m,_)=>async function(O,S,B,U){let q=S.view.ga(B);q.ss&&(q=await np(O.localStore,S.query,!1).then(({documents:I})=>S.view.ga(I,q)));const z=U&&U.targetChanges.get(S.targetId),re=U&&U.targetMismatches.get(S.targetId)!=null,ae=S.view.applyChanges(q,O.isPrimaryClient,z,re);return up(O,S.targetId,ae.ba),ae.snapshot}(t,p,m,_);const i=await np(t.localStore,e,!0),o=new _0(e,i.ds),l=o.ga(i.documents),c=Gi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);up(t,n,u.ba);const f=new y0(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function A0(t,e,n){const r=de(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ya(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bu(r.remoteStore,s.targetId),jc(r,s.targetId)}).catch(Ns)):(jc(r,s.targetId),await Uc(r.localStore,s.targetId,!0))}async function b0(t,e){const n=de(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(n.remoteStore,r.targetId))}async function R0(t,e,n){const r=D0(t);try{const s=await function(o,l){const c=de(o),u=Qe.now(),f=l.reduce((_,b)=>_.add(b.key),Ee());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let b=Un(),O=Ee();return c.hs.getEntries(_,f).next(S=>{b=S,b.forEach((B,U)=>{U.isValidDocument()||(O=O.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,b)).next(S=>{p=S;const B=[];for(const U of l){const q=zP(U,p.get(U.key).overlayedDocument);q!=null&&B.push(new Er(U.key,q,c_(q.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,B,l)}).next(S=>{m=S;const B=S.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(_,S.batchId,B)})}).then(()=>({batchId:m.batchId,changes:E_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ue(Te)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ji(r,s.changes),await il(r.remoteStore)}catch(s){const i=zu(s,"Failed to persist write");n.reject(i)}}async function ty(t,e){const n=de(t);try{const r=await jC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ce(o.Fa):s.removedDocuments.size>0&&(Ce(o.Fa),o.Fa=!1))}),await Ji(n,r,e)}catch(r){await Ns(r)}}function cp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&Wu(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function S0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ue(se.comparator);o=o.insert(i,ft.newNoDocument(i,fe.min()));const l=Ee().add(i),c=new nl(fe.min(),new Map,new Ue(Te),o,l);await ty(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Ku(r)}else await Uc(r.localStore,e,!1).then(()=>jc(r,e,n)).catch(Ns)}async function P0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await BC(n.localStore,e);ry(n,r,null),ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ji(n,s)}catch(s){await Ns(s)}}async function C0(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ce(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);ry(r,e,n),ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ji(r,s)}catch(s){await Ns(s)}}function ny(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function ry(t,e,n){const r=de(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||sy(t,r)})}function sy(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Bu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Ku(t))}function up(t,e,n){for(const r of n)r instanceof Y_?(t.ka.addReference(r.key,e),k0(t,r)):r instanceof Z_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||sy(t,r.key)):he()}function k0(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(r),Ku(t))}function Ku(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(Le.fromString(e)),r=t.Ka.next();t.Ba.set(r,new E0(n)),t.La=t.La.insert(n,r),H_(t.remoteStore,new sr(pn(Ou(n.path)),r,"TargetPurposeLimboResolution",Ga.oe))}}async function Ji(t,e,n){const r=de(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Uu.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,m=>M.forEach(m.Wi,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.Gi,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ds(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.us.get(m),b=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(b);f.us=f.us.insert(m,O)}}}(r.localStore,i))}async function O0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await U_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new te(H.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ji(n,r.Ts)}}function N0(t,e){const n=de(t),r=n.Ba.get(e);if(r&&r.Fa)return Ee().add(r.key);{let s=Ee();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function iy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=S0.bind(null,e),e.Ma.R_=m0.bind(null,e.eventManager),e.Ma.Wa=g0.bind(null,e.eventManager),e}function D0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C0.bind(null,e),e}class Ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return UC(this.persistence,new MC,e.initialUser,this.serializer)}ja(e){return new F_(Fu.ei,this.serializer)}za(e){return new WC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ta.provider={build:()=>new Ta};class V0 extends Ta{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ce(this.persistence.referenceDelegate instanceof ya);const r=this.persistence.referenceDelegate.garbageCollector;return new vC(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new F_(r=>ya.ei(r,n),this.serializer)}}class qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O0.bind(null,this.syncEngine),await f0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new p0}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new JC(i)}(e.databaseInfo);return function(i,o,l,c){return new ZC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new t0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>cp(this.syncEngine,n,0),function(){return sp.p()?new sp:new KC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const p=new T0(s,i,o,l,c,u);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Qi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qc.provider={build:()=>new qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=o_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await U_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await L0(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ip(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ip(e.remoteStore,s)),t._onlineComponents=e}async function L0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new Ta)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Zl(t,new V0(void 0));return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await hp(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await hp(t,new qc))),t._onlineComponents}function M0(t){return ay(t).then(e=>e.syncEngine)}async function ly(t){const e=await ay(t),n=e.eventManager;return n.onListen=w0.bind(null,e.syncEngine),n.onUnlisten=A0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=v0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b0.bind(null,e.syncEngine),n}function F0(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new oy({next:m=>{f.eu(),o.enqueueAndForget(()=>J_(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new te(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new te(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new X_(Ou(l.path),f,{includeMetadataChanges:!0,ua:!0});return Q_(i,p)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}function U0(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new oy({next:m=>{f.eu(),o.enqueueAndForget(()=>J_(i,p)),m.fromCache&&c.source==="server"?u.reject(new te(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new X_(l,f,{includeMetadataChanges:!0,ua:!0});return Q_(i,p)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e,n){if(!n)throw new te(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function B0(t,e,n,r){if(e===!0&&r===!0)throw new te(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dp(t){if(!se.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pp(t){if(se.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gu(t);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XS;switch(r.type){case"firstParty":return new tP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fp.get(n);r&&(Z("ComponentProvider","Removing Datastore"),fp.delete(n),r.terminate())}(this),Promise.resolve()}}function j0(t,e,n,r={}){var s;const i=(t=en(t,ol))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ct.MOCK_USER;else{l=uA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(u)}t._authCredentials=new YS(new i_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new al(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class cr extends al{constructor(e,n,r){super(e,n,Ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new se(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function gp(t,e,...n){if(t=vt(t),uy("collection","path",e),t instanceof ol){const r=Le.fromString(e,...n);return pp(r),new cr(t,null,r)}{if(!(t instanceof Pt||t instanceof cr))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return pp(r),new cr(t.firestore,null,r)}}function wa(t,e,...n){if(t=vt(t),arguments.length===1&&(e=o_.newId()),uy("doc","path",e),t instanceof ol){const r=Le.fromString(e,...n);return dp(r),new Pt(t,null,new se(r))}{if(!(t instanceof Pt||t instanceof cr))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return dp(r),new Pt(t.firestore,t instanceof cr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new j_(this,"async_queue_retry"),this.fu=()=>{const r=Yl();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Vn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ds(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=$u.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Kr extends ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _p,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _p(e),this._firestoreClient=void 0,await e}}}function q0(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:"(default)",s=pu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lA("firestore");i&&j0(s,...i)}return s}function Qu(t){if(t._terminated)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||H0(t),t._firestoreClient}function H0(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new gP(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new x0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(rt.fromBase64String(e))}catch(n){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^__.*__$/;class z0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}class hy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Zu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return va(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(fy(this.Mu)&&$0.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class W0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}$u(e,n,r,s=!1){return new Zu({Mu:e,methodName:n,Ku:r,path:nt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eh(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new W0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dy(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);th("Data must be an object, but it was:",o,r);const l=py(r,o);let c,u;if(i.merge)c=new xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Hc(e,p,n);if(!o.contains(m))throw new te(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);gy(f,m)||f.push(m)}c=new xt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new z0(new bt(l),c,u)}class cl extends Ju{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cl}}function K0(t,e,n,r){const s=t.$u(1,e,n);th("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();yr(r,(c,u)=>{const f=nh(e,c,n);u=vt(u);const p=s.Bu(f);if(u instanceof cl)i.push(f);else{const m=ul(u,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new xt(i);return new hy(o,l,s.fieldTransforms)}function G0(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Hc(e,r,n)],c=[s];if(i.length%2!=0)throw new te(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Hc(e,i[m])),c.push(i[m+1]);const u=[],f=bt.empty();for(let m=l.length-1;m>=0;--m)if(!gy(u,l[m])){const _=l[m];let b=c[m];b=vt(b);const O=o.Bu(_);if(b instanceof cl)u.push(_);else{const S=ul(b,O);S!=null&&(u.push(_),f.set(_,S))}}const p=new xt(u);return new hy(f,p,o.fieldTransforms)}function ul(t,e){if(my(t=vt(t)))return th("Unsupported field value:",e,t),py(t,e);if(t instanceof Ju)return function(r,s){if(!fy(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ul(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:_a(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_a(s.serializer,i)}}if(r instanceof Xu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rs)return{bytesValue:O_(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Nu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Gu(r)}`)}(t,e)}function py(t,e){const n={};return a_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=ul(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function my(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Xu||t instanceof Rs||t instanceof Pt||t instanceof Ju||t instanceof Yu)}function th(t,e,n){if(!my(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gu(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Hc(t,e,n){if((e=vt(e))instanceof ll)return e._internalPath;if(typeof e=="string")return nh(t,e);throw va("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q0=new RegExp("[~\\*/\\[\\]]");function nh(t,e,n){if(e.search(Q0)>=0)throw va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ll(...e.split("."))._internalPath}catch{throw va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(H.INVALID_ARGUMENT,l+t+c)}function gy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J0 extends _y{data(){return super.data()}}function yy(t,e){return typeof e=="string"?nh(t,e):e instanceof ll?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y0{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new Yu(i)}convertGeoPoint(e){return new Xu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ja(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ce(M_(r));const s=new Oi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ty extends _y{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ho extends Ty{data(e={}){return super.data(e)}}class Z0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ho(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ek(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ek(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){t=en(t,Pt);const e=en(t.firestore,Kr);return F0(Qu(e),t._key).then(n=>ok(e,t,n))}class wy extends Y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function nk(t){t=en(t,al);const e=en(t.firestore,Kr),n=Qu(e),r=new wy(e);return X0(t._query),U0(n,t._query).then(s=>new Z0(e,r,t,s))}function rk(t,e,n){t=en(t,Pt);const r=en(t.firestore,Kr),s=Ey(t.converter,e);return hl(r,[dy(eh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zt.none())])}function vy(t,e,n,...r){t=en(t,Pt);const s=en(t.firestore,Kr),i=eh(s);let o;return o=typeof(e=vt(e))=="string"||e instanceof ll?G0(i,"updateDoc",t._key,e,n,r):K0(i,"updateDoc",t._key,e),hl(s,[o.toMutation(t._key,zt.exists(!0))])}function sk(t){return hl(en(t.firestore,Kr),[new Du(t._key,zt.none())])}function ik(t,e){const n=en(t.firestore,Kr),r=wa(t),s=Ey(t.converter,e);return hl(n,[dy(eh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function hl(t,e){return function(r,s){const i=new Vn;return r.asyncQueue.enqueueAndForget(async()=>R0(await M0(r),s,i)),i.promise}(Qu(t),e)}function ok(t,e,n){const r=n.docs.get(e._key),s=new wy(t);return new Ty(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Os=s})(Cs),Es(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Kr(new ZS(r.getProvider("auth-internal")),new rP(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),lr(Dd,"4.7.5",e),lr(Dd,"4.7.5","esm2017")})();const ak={apiKey:"AIzaSyBpVjMEwPBtbmlw3W5NEgZgs4LKztYQbpA",authDomain:"fitclima-tcc.firebaseapp.com",databaseURL:"https://fitclima-tcc-default-rtdb.firebaseio.com",projectId:"fitclima-tcc",storageBucket:"fitclima-tcc.firebasestorage.app",messagingSenderId:"117549519794",appId:"1:117549519794:web:e81922423b331440a24aab"},Iy=pg(ak),xn=QS(Iy),xi=q0(Iy),lk=new Pn,ck={name:"Header",data(){return{cityName:"",isLoggedIn:!1}},mounted(){xn.onAuthStateChanged(t=>{t?(this.isLoggedIn=!0,this.$route.path==="/login"&&this.$router.push("/dashboard")):this.isLoggedIn=!1}),this.autoDetectLocation()},methods:{getCityFromStorage(){return localStorage.getItem("userCity")},async autoDetectLocation(){const t=this.getCityFromStorage();if(t){this.cityName=t;return}navigator.geolocation?navigator.geolocation.getCurrentPosition(async e=>{const{latitude:n,longitude:r}=e.coords;try{const s=await We.get("http://localhost:3000/api",{params:{lat:n,lon:r}});if(s.data&&s.data.results){const i=s.data.results;this.cityName=i.city||"",localStorage.setItem("userCity",i.city||"")}else throw new Error("Localização não encontrada")}catch(s){console.error("Erro ao buscar localização:",s)}},e=>{console.error("Erro ao acessar a localização:",e)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):console.error("Geolocalização não suportada neste navegador.")},logout(){xn.signOut().then(()=>{this.$router.push("/")}).catch(t=>{console.error("Erro ao sair:",t)})}}},uk={id:"city-info",class:"city-info"},hk={id:"city-name"};function fk(t,e,n,r,s,i){const o=Rt("router-link");return je(),Ke("header",null,[e[5]||(e[5]=j("h1",null,"FitClima",-1)),j("section",uk,[j("span",hk,jt(s.cityName),1)]),j("nav",null,[j("ul",null,[j("li",null,[ke(o,{to:"/"},{default:Cr(()=>e[1]||(e[1]=[Ht("Home")])),_:1})]),j("li",null,[ke(o,{to:"/informe"},{default:Cr(()=>e[2]||(e[2]=[Ht("Informe-se")])),_:1})]),j("li",null,[s.isLoggedIn?(je(),cc(o,{key:0,to:"/dashboard"},{default:Cr(()=>e[3]||(e[3]=[Ht("Perfil")])),_:1})):(je(),cc(o,{key:1,to:"/login"},{default:Cr(()=>e[4]||(e[4]=[Ht("Login")])),_:1}))]),j("li",null,[s.isLoggedIn?(je(),Ke("button",{key:0,onClick:e[0]||(e[0]=(...l)=>i.logout&&i.logout(...l)),class:"nav-button"},"Sair")):Fr("",!0)])])])])}const Xi=_r(ck,[["render",fk],["__scopeId","data-v-8a3b4722"]]),dk={name:"Footer"};function pk(t,e,n,r,s,i){return je(),Ke("footer",null,e[0]||(e[0]=[j("p",null,"© 2024 João Pedro de Almeida. Todos os direitos reservados.",-1)]))}const Yi=_r(dk,[["render",pk],["__scopeId","data-v-7ffd848e"]]),mk={name:"Home",components:{Header:Xi,Footer:Yi},data(){return{isModalVisible:!1,isEditing:!1,editIndex:null,formData:{activity:"",day:"segunda-feira",time:""},activities:[],maxCards:15}},methods:{openForm(){this.isModalVisible=!0},closeForm(){this.isModalVisible=!1,this.resetForm()},resetForm(){this.formData={activity:"",day:"segunda-feira",time:""},this.isEditing=!1,this.editIndex=null},async handleSubmit(){if(this.activities.length>=this.maxCards){alert("Você já atingiu o limite máximo de 15 atividades!");return}try{if(this.isEditing&&this.editIndex!==null){const t=this.activities[this.editIndex].docRef;await vy(t,{activity:this.formData.activity,day:this.formData.day,time:this.formData.time}),this.activities[this.editIndex]={...this.formData,docRef:t}}else{const t=await ik(gp(xi,"activities"),{...this.formData});this.activities.push({...this.formData,docRef:t})}this.closeForm()}catch(t){console.error("Erro ao enviar o formulário:",t)}},async editActivity(t){try{const e=this.activities[t];this.formData={...e},this.isEditing=!0,this.editIndex=t,this.openForm()}catch(e){console.error("Erro ao editar atividade:",e)}},async removeActivity(t){try{const e=this.activities[t].docRef;await sk(e),this.activities.splice(t,1)}catch(e){console.error("Erro ao remover atividade:",e)}}},async mounted(){try{const t=await nk(gp(xi,"activities"));this.activities=t.docs.map(e=>({...e.data(),docRef:e.ref}))}catch(t){console.error("Erro ao carregar atividades:",t)}}},gk={class:"form-container"},_k={type:"submit"},yk={class:"activity-list"},Ek=["onClick"],Tk=["onClick"];function wk(t,e,n,r,s,i){const o=Rt("Header"),l=Rt("Footer");return je(),Ke("div",null,[ke(o),j("main",null,[e[14]||(e[14]=j("h1",null,"Bem-vindo ao FitClima!",-1)),j("div",null,[j("div",{class:"add-icon",onClick:e[0]||(e[0]=(...c)=>i.openForm&&i.openForm(...c))},"+"),s.isModalVisible?(je(),Ke("div",{key:0,class:"overlay",onClick:e[6]||(e[6]=ea((...c)=>i.closeForm&&i.closeForm(...c),["self"]))},[j("div",gk,[j("form",{onSubmit:e[5]||(e[5]=ea((...c)=>i.handleSubmit&&i.handleSubmit(...c),["prevent"]))},[j("h2",null,jt(s.isEditing?"Editar Atividade Física":"Adicionar Atividade Física"),1),e[8]||(e[8]=j("label",{for:"activity"},"Atividade Física:",-1)),un(j("input",{type:"text",id:"activity","onUpdate:modelValue":e[1]||(e[1]=c=>s.formData.activity=c),required:"",placeholder:"Ex: Corrida"},null,512),[[Cn,s.formData.activity]]),e[9]||(e[9]=j("label",{for:"day"},"Dia da Semana:",-1)),un(j("select",{id:"day","onUpdate:modelValue":e[2]||(e[2]=c=>s.formData.day=c),required:""},e[7]||(e[7]=[NT('<option value="segunda-feira" data-v-fef5a1b8>Segunda-feira</option><option value="terca-feira" data-v-fef5a1b8>Terça-feira</option><option value="quarta-feira" data-v-fef5a1b8>Quarta-feira</option><option value="quinta-feira" data-v-fef5a1b8>Quinta-feira</option><option value="sexta-feira" data-v-fef5a1b8>Sexta-feira</option><option value="sabado" data-v-fef5a1b8>Sábado</option><option value="domingo" data-v-fef5a1b8>Domingo</option>',7)]),512),[[uw,s.formData.day]]),e[10]||(e[10]=j("label",{for:"time"},"Horário:",-1)),un(j("input",{type:"time",id:"time","onUpdate:modelValue":e[3]||(e[3]=c=>s.formData.time=c),required:""},null,512),[[Cn,s.formData.time]]),j("button",_k,jt(s.isEditing?"Salvar":"Adicionar"),1),s.isEditing?(je(),Ke("button",{key:0,type:"button",onClick:e[4]||(e[4]=(...c)=>i.closeForm&&i.closeForm(...c))},"Cancelar")):Fr("",!0)],32)])])):Fr("",!0),j("div",yk,[(je(!0),Ke(ln,null,eT(s.activities,(c,u)=>(je(),Ke("div",{key:c.id,class:"activity-card"},[j("p",null,[e[11]||(e[11]=j("strong",null,"Atividade:",-1)),Ht(" "+jt(c.activity),1)]),j("p",null,[e[12]||(e[12]=j("strong",null,"Dia:",-1)),Ht(" "+jt(c.day),1)]),j("p",null,[e[13]||(e[13]=j("strong",null,"Horário:",-1)),Ht(" "+jt(c.time),1)]),j("button",{onClick:f=>i.editActivity(u)},"Editar",8,Ek),j("button",{onClick:f=>i.removeActivity(u)},"Remover",8,Tk)]))),128))])])]),ke(l)])}const vk=_r(mk,[["render",wk],["__scopeId","data-v-fef5a1b8"]]),Ik="/devjoaoalmeida.github.io/assets/article1-BM6nFMTd.jpg",Ak="/devjoaoalmeida.github.io/assets/article2-Bzrc6g7s.jpg",bk="/devjoaoalmeida.github.io/assets/article3-BcGaAZoj.jpg",Rk={components:{Header:Xi,Footer:Yi}};function Sk(t,e,n,r,s,i){const o=Rt("Header"),l=Rt("Footer");return je(),Ke("div",null,[ke(o),e[0]||(e[0]=j("main",null,[j("h1",null,"Informe-se"),j("p",null,"Informações sobre Sedentarismo e Atividade Física."),j("section",{class:"articles-container"},[j("div",{class:"article-block"},[j("a",{href:"https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf",target:"_blank"},[j("img",{src:Ik,alt:"Guia Atividade Física"})]),j("h2",null,"Guia de Atividade Física")]),j("div",{class:"article-block"},[j("a",{href:"https://iris.who.int/bitstream/handle/10665/363607/9789240059153-eng.pdf?sequence=1",target:"_blank"},[j("img",{src:Ak,alt:"Relatório OMS"})]),j("h2",null,"Relatório da OMS")]),j("div",{class:"article-block"},[j("a",{href:"#",onclick:"alert('TCC ainda em desenvolvimento. Aguarde!'); return false;"},[j("img",{src:bk,alt:"TCC Em Desenvolvimento"})]),j("h2",null,"TCC - FitClima")])])],-1)),ke(l)])}const Pk=_r(Rk,[["render",Sk],["__scopeId","data-v-baa1fbf1"]]),Ck="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASVSURBVHgBzVlfaFtVGP+dmxv7x7VJoMSCQxKmDxuVdagTnGNxMAeCyFCh9ME5BntQZE5QEYZtQBAKYhzssdj6oBPcqgzEIW4Rtoc9iKkbIrrR6CqsXTRp2jS0aXL9vrObrGlv7z0nhNQf3Jx7z/nOvb/8vu+c+51zBRrE/Px8rFKp9Ash9lmWxWWQqoN2c47q0lSXpnLSMIxkV1dXEg1A6BjTw4ILCwvHqXxzFRlVpOlI+v3+eEdHR1q1kxJBm9iQTawZGFMl6kmQFSNXDkNfMS+k6Yh3d3ePuRm5EqQ4+7iJqjkTECJB8Xliw3anSnYpkZug0xhaAHpeirz0TCgUyq1tM5w6kFsvoUXkGKRiv8/nm3BqW0fQdms/Wo8YP3ttZZ2L8/n8q1R8ik0EiXMiEAgkqtc1gsViMVIqldi1EWwucuVyOVqNR7NaS+SGoEnOKhRQvvgdKtcnUZm6AWt2RtaL8AMwog/DeHIPzP0HoYmgaZrMRY5sqaCt3pTOXcpXr6B0aoRILrjaiXAvzIFXtImSiiFWUQ4SWz1llEZPY/nD9z3JMazZ2/KPrFy8AB3Q+1vOv9VRHFPtWDozjpXz56ADQe72kbu1+ghxnEuTsxIaORGVTmVSYeXMZ+vq/QOHYfTtlAfDmrqJ0vmz0p7JtX3wEcT9W6AJflnExNzc3DCxVXLx8jsvo/z7v7Vrjq+29+KShBOYKGjANEDubn+acgwit1PF2Jf5AoGXfkD7E3dqdW7kGCK6rWFyNmImEYwQU09LX/ZbWXYemIYRWMJS5agruWaAxTNV408s/1U7b999B2L7U6g42B0b904xB3YD+7d7iwKeE6GY5xmFa3XX1n0POdrN5r0JXv/bIoJQQdDA/xxMMKdiWGmrV0wsXkOjCHcpm+bYxUzQ081W56PA0t04/LK4DdPTt/BaaL3d12+sj8yT5wS59Z7rw91QAq8MWcGUinE59BzmLT8ShT55fHXrKlL//ObZbzaPOnKMvq1KA4Txp0Esf1SxrBDBdxcPSPWqGPllFLeLGbiROzlRH+Z9D1o6Lk7RO9lQUtDyBXBox1t1dUxu8NLbGJkcxc38vWloZjGD8T++wbHLQ/J8NZ7XyNV5wS+1p0w6C8Xp5vSvn+Ns+nuowljpQXtmEGbhMSJn4eheNfdy/FFmHTXsi0+giNd3DOLwIy+omqNiZrDYewp7H/9JmRyD3iJJWfJPNpsN0qoqCw1cmL4s3egWg4wt/k75h16MPAsd2Gl/uja8KKtJVHMwXaJXZn6WRG/Ycdjb2YPejh7sCe/Cwa1PS5KaGKMdhyN8UiNoq8hpf7O3OLTAsWcv4tN8XZsDOP+nxjg2GeTFeJUco26S4vWozoBpNvjZazeTHFMPmnZauvXB4P0ZEmjX2nrHbIZG0CHugNYhyXHn1OCavDU6snXAbiXlNtzic80H7Y5HeGShyaB75ux9GNf9R8+ElYOW5aebjaNJYNXontHVm0QbQWsTnebKCL3Ah+l0Hy+2NLpKxahgYgmnjcqmEFwN+zNEjFde9sIrYn+KqJLJ0XWK0znOmBr9DPEf04UEHWqzPZEAAAAASUVORK5CYII=",kk={data(){return{email:"",password:""}},methods:{async handleLogin(){try{await LR(xn,this.email,this.password),this.$router.push("/dashboard")}catch(t){alert("Erro ao fazer login: "+t.message)}},async loginWithGoogle(){try{await sS(xn,lk),this.$router.push("/dashboard")}catch(t){alert("Erro ao fazer login com Google: "+t.message)}},async handlePasswordReset(){try{const t=this.email;t?(await jg(xn,t),alert("E-mail para redefinição de senha enviado com sucesso!")):(alert("Endereço de e-mail não encontrado!"),alert("Digite o e-mail no local indicado e clique novamente em Esqueci minha senha"))}catch(t){console.error("Erro ao enviar e-mail de redefinição de senha:",t),alert(`Erro ao enviar e-mail: ${t.message}`)}}},components:{Header:Xi,Footer:Yi}},Ok={class:"login-container"},Nk={class:"login-box"},Dk={class:"forgot-password"},Vk={class:"login-text"},xk={class:"google-login"},Lk={class:"register-button"};function Mk(t,e,n,r,s,i){const o=Rt("Header"),l=Rt("router-link"),c=Rt("Footer");return je(),Ke("div",null,[ke(o),j("main",null,[j("div",Ok,[j("div",Nk,[e[11]||(e[11]=j("h2",null,"Entrar no seu perfil",-1)),j("form",{onSubmit:e[3]||(e[3]=ea((...u)=>i.handleLogin&&i.handleLogin(...u),["prevent"]))},[e[5]||(e[5]=j("label",{for:"email"},"Email:",-1)),un(j("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=u=>s.email=u),id:"email",required:""},null,512),[[Cn,s.email]]),e[6]||(e[6]=j("label",{for:"password"},"Senha:",-1)),un(j("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=u=>s.password=u),id:"password",required:""},null,512),[[Cn,s.password]]),j("div",Dk,[j("a",{onClick:e[2]||(e[2]=(...u)=>i.handlePasswordReset&&i.handlePasswordReset(...u))},"Esqueci minha senha")]),e[7]||(e[7]=j("button",{type:"submit"},"Entrar",-1))],32),j("div",Vk,[j("div",xk,[e[8]||(e[8]=j("p",null,"Ou entre com o Google",-1)),j("img",{src:Ck,onClick:e[4]||(e[4]=(...u)=>i.loginWithGoogle&&i.loginWithGoogle(...u)),class:"google-login-button"})]),j("div",Lk,[e[10]||(e[10]=j("p",null,"Não tem conta? ",-1)),ke(l,{to:"/register"},{default:Cr(()=>e[9]||(e[9]=[Ht("Cadastre-se")])),_:1})])])])])]),ke(c)])}const Fk=_r(kk,[["render",Mk],["__scopeId","data-v-032bff38"]]),Uk={name:"Register",components:{Header:Xi,Footer:Yi},setup(){const t=bv(),e=on(""),n=on(""),r=on(""),s=on(""),i=on(!1),o=on(""),l=on(""),c=on(""),u=on({length:!1,uppercase:!1,lowercase:!1,number:!1,special:!1}),f=qt(()=>e.value&&n.value&&!l.value&&!c.value&&Object.values(u.value).every(S=>S)&&i.value);return{nome:e,email:n,password:r,confirmPassword:s,confirmPasswordValid:i,confirmPasswordMessage:o,nameError:l,emailError:c,passwordCriteria:u,isFormValid:f,validateName:()=>{e.value.trim()?l.value="":l.value="O nome não pode estar vazio."},validateEmail:()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?c.value="":c.value="Por favor, insira um email válido."},validatePassword:()=>{u.value.length=r.value.length>=8,u.value.uppercase=/[A-Z]/.test(r.value),u.value.lowercase=/[a-z]/.test(r.value),u.value.number=/\d/.test(r.value),u.value.special=/[@$!%*?&]/.test(r.value)},validateConfirmPassword:()=>{r.value===s.value?(i.value=!0,o.value="As senhas coincidem!"):(i.value=!1,o.value="As senhas não coincidem.")},handleRegister:async()=>{if(f.value)try{const B=(await xR(xn,n.value,r.value)).user;await rk(wa(xi,"users",B.uid),{nome:e.value,email:n.value}),alert(`Bem-vindo, ${e.value}!`),t.push("/dashboard")}catch(S){console.error("Erro ao cadastrar:",S.message),alert("Erro ao cadastrar. Tente novamente.")}}}}},Bk={class:"login-container"},jk={class:"login-box"},qk={key:0,class:"error-message"},Hk={key:1,class:"error-message"},$k={class:"password-checklist"},zk=["disabled"],Wk={class:"register-text"};function Kk(t,e,n,r,s,i){const o=Rt("Header"),l=Rt("router-link"),c=Rt("Footer");return je(),Ke("div",null,[ke(o),j("main",null,[j("div",Bk,[j("div",jk,[e[15]||(e[15]=j("h2",null,"Cadastre-se",-1)),j("form",{onSubmit:e[8]||(e[8]=ea((...u)=>r.handleRegister&&r.handleRegister(...u),["prevent"]))},[e[9]||(e[9]=j("label",{for:"name"},"Nome:",-1)),un(j("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=u=>r.nome=u),id:"name",onInput:e[1]||(e[1]=(...u)=>r.validateName&&r.validateName(...u)),required:""},null,544),[[Cn,r.nome]]),r.nameError?(je(),Ke("small",qk,jt(r.nameError),1)):Fr("",!0),e[10]||(e[10]=j("label",{for:"email"},"Email:",-1)),un(j("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=u=>r.email=u),id:"email",onInput:e[3]||(e[3]=(...u)=>r.validateEmail&&r.validateEmail(...u)),required:""},null,544),[[Cn,r.email]]),r.emailError?(je(),Ke("small",Hk,jt(r.emailError),1)):Fr("",!0),e[11]||(e[11]=j("label",{for:"password"},"Senha:",-1)),un(j("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=u=>r.password=u),id:"password",onInput:e[5]||(e[5]=(...u)=>r.validatePassword&&r.validatePassword(...u)),required:""},null,544),[[Cn,r.password]]),j("ul",$k,[j("li",{class:bn({valid:r.passwordCriteria.length})},"Mínimo de 8 caracteres",2),j("li",{class:bn({valid:r.passwordCriteria.uppercase})},"Uma letra maiúscula",2),j("li",{class:bn({valid:r.passwordCriteria.lowercase})},"Uma letra minúscula",2),j("li",{class:bn({valid:r.passwordCriteria.number})},"Um número",2),j("li",{class:bn({valid:r.passwordCriteria.special})},"Um caractere especial",2)]),e[12]||(e[12]=j("label",{for:"confirmPassword"},"Confirmar Senha:",-1)),un(j("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=u=>r.confirmPassword=u),id:"confirmPassword",onInput:e[7]||(e[7]=(...u)=>r.validateConfirmPassword&&r.validateConfirmPassword(...u)),required:""},null,544),[[Cn,r.confirmPassword]]),j("small",{class:bn(["confirmation-message",{valid:r.confirmPasswordValid,error:!r.confirmPasswordValid}])},jt(r.confirmPasswordMessage),3),j("button",{type:"submit",disabled:!r.isFormValid},"Cadastrar",8,zk)],32),j("div",Wk,[e[14]||(e[14]=j("p",null,"Já tem conta?",-1)),ke(l,{to:"/login"},{default:Cr(()=>e[13]||(e[13]=[Ht("Entre aqui")])),_:1})])])])]),ke(c)])}const Gk=_r(Uk,[["render",Kk],["__scopeId","data-v-830a6d2a"]]),Qk={data(){return{user:null,userInfo:null,editName:"",editEmail:"",isEditing:!1,isGoogleUser:!1}},methods:{async fetchUserInfo(){try{if(console.log("Fetching user info..."),!this.user){console.warn("Usuário não autenticado corretamente.");return}if(this.isGoogleUser)this.userInfo={nome:this.user.displayName,email:this.user.email};else{const t=wa(xi,"users",this.user.uid),e=await tk(t);e.exists()?this.userInfo=e.data():(console.warn("Dados do usuário não encontrados!"),this.userInfo=null)}}catch(t){console.error("Erro ao buscar informações do usuário:",t),alert("Ocorreu um erro ao carregar seus dados. Por favor, tente novamente.")}},editProfile(){var t,e,n;this.editName=((t=this.userInfo)==null?void 0:t.nome)||((e=this.user)==null?void 0:e.displayName)||"",this.editEmail=((n=this.user)==null?void 0:n.email)||"",this.isEditing=!0},cancelEdit(){this.isEditing=!1,this.editName="",this.editEmail=""},async updateProfile(){var t;try{if(this.editName!==((t=this.userInfo)==null?void 0:t.nome)){const e=wa(xi,"users",this.user.uid);await vy(e,{nome:this.editName}),alert("Perfil atualizado com sucesso!"),this.isEditing=!1,this.fetchUserInfo()}else alert("Não há alteração no nome.")}catch(e){console.error("Erro ao atualizar perfil:",e),alert("Erro ao atualizar perfil. Tente novamente.")}},async sendPasswordReset(){var t;try{const e=(t=this.user)==null?void 0:t.email;e?(await jg(xn,e),alert("E-mail para redefinição de senha enviado com sucesso!")):alert("Endereço de e-mail não encontrado!")}catch(e){console.error("Erro ao enviar e-mail de redefinição de senha:",e),alert(`Erro ao enviar e-mail: ${e.message}`)}},async handleGoogleSignIn(t){if(t&&t.user){const e=t.user;e.displayName?this.editName=e.displayName:console.warn("Nome do Google não encontrado, verificando informações..."),this.isGoogleUser=!0,await this.fetchUserInfo()}}},async created(){var t;this.user=xn.currentUser,this.user?(((t=this.user.providerData[0])==null?void 0:t.providerId)==="google.com"&&(this.isGoogleUser=!0,this.user.displayName&&(this.editName=this.user.displayName)),await this.fetchUserInfo()):this.$router.push("/login"),xn.onAuthStateChanged(e=>{e&&(this.user=e,this.handleGoogleSignIn(e))})},components:{Header:Xi,Footer:Yi}},Jk={class:"dashboard-container"},Xk={class:"user-info"},Yk={key:0},Zk={class:"button-editing-name"},eO={key:1,class:"edit-name"},tO={class:"password-reset-section"};function nO(t,e,n,r,s,i){var c,u,f;const o=Rt("Header"),l=Rt("Footer");return je(),Ke("div",null,[ke(o),j("main",null,[j("div",Jk,[e[8]||(e[8]=j("h1",null,"Bem-vindo ao seu perfil!",-1)),j("div",Xk,[e[7]||(e[7]=j("h2",null,"Informações do Perfil",-1)),j("p",null,[e[5]||(e[5]=j("strong",null,"Nome:",-1)),Ht(" "+jt(((c=s.userInfo)==null?void 0:c.nome)||((u=s.user)==null?void 0:u.displayName)),1)]),j("p",null,[e[6]||(e[6]=j("strong",null,"Email:",-1)),Ht(" "+jt((f=s.user)==null?void 0:f.email),1)]),s.isEditing&&!s.isGoogleUser?(je(),Ke("div",Yk,[un(j("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=p=>s.editName=p),placeholder:"Editar nome"},null,512),[[Cn,s.editName]]),j("div",Zk,[j("button",{onClick:e[1]||(e[1]=(...p)=>i.updateProfile&&i.updateProfile(...p))},"Salvar"),j("button",{onClick:e[2]||(e[2]=(...p)=>i.cancelEdit&&i.cancelEdit(...p))},"Cancelar")])])):(je(),Ke("div",eO,[s.isGoogleUser?Fr("",!0):(je(),Ke("button",{key:0,onClick:e[3]||(e[3]=(...p)=>i.editProfile&&i.editProfile(...p))},"Editar Nome"))]))]),j("div",tO,[s.isGoogleUser?Fr("",!0):(je(),Ke("button",{key:0,onClick:e[4]||(e[4]=(...p)=>i.sendPasswordReset&&i.sendPasswordReset(...p))},"Enviar e-mail de Redefinição de Senha"))])])]),ke(l)])}const rO=_r(Qk,[["render",nO],["__scopeId","data-v-836ecad5"]]),sO=[{path:"/",component:vk},{path:"/informe",component:Pk},{path:"/login",component:Fk},{path:"/register",component:Gk},{path:"/dashboard",component:rO,meta:{requiresAuth:!0}}],iO=Iv({history:Yw(),routes:sO});mw(ww).use(iO).mount("#app");
