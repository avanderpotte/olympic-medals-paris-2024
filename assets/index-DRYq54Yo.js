(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fu(i,t){const e=new Set(i.split(","));return n=>e.has(n)}const ae={},as=[],Sn=()=>{},a_=()=>!1,Ia=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),hu=i=>i.startsWith("onUpdate:"),De=Object.assign,du=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},l_=Object.prototype.hasOwnProperty,$t=(i,t)=>l_.call(i,t),Pt=Array.isArray,ls=i=>Ua(i)==="[object Map]",xd=i=>Ua(i)==="[object Set]",Ft=i=>typeof i=="function",_e=i=>typeof i=="string",$i=i=>typeof i=="symbol",se=i=>i!==null&&typeof i=="object",Md=i=>(se(i)||Ft(i))&&Ft(i.then)&&Ft(i.catch),Sd=Object.prototype.toString,Ua=i=>Sd.call(i),c_=i=>Ua(i).slice(8,-1),yd=i=>Ua(i)==="[object Object]",pu=i=>_e(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ws=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},u_=/-(\w)/g,Fn=Na(i=>i.replace(u_,(t,e)=>e?e.toUpperCase():"")),f_=/\B([A-Z])/g,Or=Na(i=>i.replace(f_,"-$1").toLowerCase()),Oa=Na(i=>i.charAt(0).toUpperCase()+i.slice(1)),rl=Na(i=>i?`on${Oa(i)}`:""),Gi=(i,t)=>!Object.is(i,t),sl=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},Ed=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},h_=i=>{const t=parseFloat(i);return isNaN(t)?i:t},d_=i=>{const t=_e(i)?Number(i):NaN;return isNaN(t)?i:t};let Mf;const Td=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fa(i){if(Pt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],r=_e(n)?g_(n):Fa(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(_e(i)||se(i))return i}const p_=/;(?![^(]*\))/g,m_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function g_(i){const t={};return i.replace(__,"").split(p_).forEach(e=>{if(e){const n=e.split(m_);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function mu(i){let t="";if(_e(i))t=i;else if(Pt(i))for(let e=0;e<i.length;e++){const n=mu(i[e]);n&&(t+=n+" ")}else if(se(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const v_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=fu(v_);function bd(i){return!!i||i===""}const Ad=i=>!!(i&&i.__v_isRef===!0),wd=i=>_e(i)?i:i==null?"":Pt(i)||se(i)&&(i.toString===Sd||!Ft(i.toString))?Ad(i)?wd(i.value):JSON.stringify(i,Cd,2):String(i),Cd=(i,t)=>Ad(t)?Cd(i,t.value):ls(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,r],s)=>(e[ol(n,s)+" =>"]=r,e),{})}:xd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ol(e))}:$i(t)?ol(t):se(t)&&!Pt(t)&&!yd(t)?String(t):t,ol=(i,t="")=>{var e;return $i(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let In;class M_{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=In,!t&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=In;try{return In=this,t()}finally{In=e}}}on(){In=this}off(){In=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function S_(i,t=In){t&&t.active&&t.effects.push(i)}function y_(){return In}let Tr;class _u{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,S_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ki();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(E_(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ji()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Fi,e=Tr;try{return Fi=!0,Tr=this,this._runnings++,Sf(this),this.fn()}finally{yf(this),this._runnings--,Tr=e,Fi=t}}stop(){this.active&&(Sf(this),yf(this),this.onStop&&this.onStop(),this.active=!1)}}function E_(i){return i.value}function Sf(i){i._trackId++,i._depsLength=0}function yf(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Rd(i.deps[t],i);i.deps.length=i._depsLength}}function Rd(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let Fi=!0,ec=0;const Pd=[];function Ki(){Pd.push(Fi),Fi=!1}function ji(){const i=Pd.pop();Fi=i===void 0?!0:i}function gu(){ec++}function vu(){for(ec--;!ec&&nc.length;)nc.shift()()}function Ld(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const n=i.deps[i._depsLength];n!==t?(n&&Rd(n,i),i.deps[i._depsLength++]=t):i._depsLength++}}const nc=[];function Dd(i,t,e){gu();for(const n of i.keys()){let r;n._dirtyLevel<t&&(r??(r=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=t),n._shouldSchedule&&(r??(r=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&nc.push(n.scheduler)))}vu()}const Id=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},ic=new WeakMap,br=Symbol(""),rc=Symbol("");function Je(i,t,e){if(Fi&&Tr){let n=ic.get(i);n||ic.set(i,n=new Map);let r=n.get(e);r||n.set(e,r=Id(()=>n.delete(e))),Ld(Tr,r)}}function hi(i,t,e,n,r,s){const o=ic.get(i);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Pt(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!$i(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Pt(i)?pu(e)&&a.push(o.get("length")):(a.push(o.get(br)),ls(i)&&a.push(o.get(rc)));break;case"delete":Pt(i)||(a.push(o.get(br)),ls(i)&&a.push(o.get(rc)));break;case"set":ls(i)&&a.push(o.get(br));break}gu();for(const l of a)l&&Dd(l,4);vu()}const T_=fu("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter($i)),Ef=b_();function b_(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const n=jt(this);for(let s=0,o=this.length;s<o;s++)Je(n,"get",s+"");const r=n[t](...e);return r===-1||r===!1?n[t](...e.map(jt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){Ki(),gu();const n=jt(this)[t].apply(this,e);return vu(),ji(),n}}),i}function A_(i){$i(i)||(i=String(i));const t=jt(this);return Je(t,"has",i),t.hasOwnProperty(i)}class Nd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return n===(r?s?z_:zd:s?Bd:Fd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Pt(t);if(!r){if(o&&$t(Ef,e))return Reflect.get(Ef,e,n);if(e==="hasOwnProperty")return A_}const a=Reflect.get(t,e,n);return($i(e)?Ud.has(e):T_(e))||(r||Je(t,"get",e),s)?a:Qe(a)?o&&pu(e)?a:a.value:se(a)?r?Hd(a):Su(a):a}}class Od extends Nd{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];if(!this._isShallow){const l=Pr(s);if(!_s(n)&&!Pr(n)&&(s=jt(s),n=jt(n)),!Pt(t)&&Qe(s)&&!Qe(n))return l?!1:(s.value=n,!0)}const o=Pt(t)&&pu(e)?Number(e)<t.length:$t(t,e),a=Reflect.set(t,e,n,r);return t===jt(r)&&(o?Gi(n,s)&&hi(t,"set",e,n):hi(t,"add",e,n)),a}deleteProperty(t,e){const n=$t(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&hi(t,"delete",e,void 0),r}has(t,e){const n=Reflect.has(t,e);return(!$i(e)||!Ud.has(e))&&Je(t,"has",e),n}ownKeys(t){return Je(t,"iterate",Pt(t)?"length":br),Reflect.ownKeys(t)}}class w_ extends Nd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const C_=new Od,R_=new w_,P_=new Od(!0);const xu=i=>i,Ba=i=>Reflect.getPrototypeOf(i);function bo(i,t,e=!1,n=!1){i=i.__v_raw;const r=jt(i),s=jt(t);e||(Gi(t,s)&&Je(r,"get",t),Je(r,"get",s));const{has:o}=Ba(r),a=n?xu:e?Eu:Qs;if(o.call(r,t))return a(i.get(t));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(t)}function Ao(i,t=!1){const e=this.__v_raw,n=jt(e),r=jt(i);return t||(Gi(i,r)&&Je(n,"has",i),Je(n,"has",r)),i===r?e.has(i):e.has(i)||e.has(r)}function wo(i,t=!1){return i=i.__v_raw,!t&&Je(jt(i),"iterate",br),Reflect.get(i,"size",i)}function Tf(i,t=!1){!t&&!_s(i)&&!Pr(i)&&(i=jt(i));const e=jt(this);return Ba(e).has.call(e,i)||(e.add(i),hi(e,"add",i,i)),this}function bf(i,t,e=!1){!e&&!_s(t)&&!Pr(t)&&(t=jt(t));const n=jt(this),{has:r,get:s}=Ba(n);let o=r.call(n,i);o||(i=jt(i),o=r.call(n,i));const a=s.call(n,i);return n.set(i,t),o?Gi(t,a)&&hi(n,"set",i,t):hi(n,"add",i,t),this}function Af(i){const t=jt(this),{has:e,get:n}=Ba(t);let r=e.call(t,i);r||(i=jt(i),r=e.call(t,i)),n&&n.call(t,i);const s=t.delete(i);return r&&hi(t,"delete",i,void 0),s}function wf(){const i=jt(this),t=i.size!==0,e=i.clear();return t&&hi(i,"clear",void 0,void 0),e}function Co(i,t){return function(n,r){const s=this,o=s.__v_raw,a=jt(o),l=t?xu:i?Eu:Qs;return!i&&Je(a,"iterate",br),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ro(i,t,e){return function(...n){const r=this.__v_raw,s=jt(r),o=ls(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=e?xu:t?Eu:Qs;return!t&&Je(s,"iterate",l?rc:br),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Mi(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function L_(){const i={get(s){return bo(this,s)},get size(){return wo(this)},has:Ao,add:Tf,set:bf,delete:Af,clear:wf,forEach:Co(!1,!1)},t={get(s){return bo(this,s,!1,!0)},get size(){return wo(this)},has:Ao,add(s){return Tf.call(this,s,!0)},set(s,o){return bf.call(this,s,o,!0)},delete:Af,clear:wf,forEach:Co(!1,!0)},e={get(s){return bo(this,s,!0)},get size(){return wo(this,!0)},has(s){return Ao.call(this,s,!0)},add:Mi("add"),set:Mi("set"),delete:Mi("delete"),clear:Mi("clear"),forEach:Co(!0,!1)},n={get(s){return bo(this,s,!0,!0)},get size(){return wo(this,!0)},has(s){return Ao.call(this,s,!0)},add:Mi("add"),set:Mi("set"),delete:Mi("delete"),clear:Mi("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ro(s,!1,!1),e[s]=Ro(s,!0,!1),t[s]=Ro(s,!1,!0),n[s]=Ro(s,!0,!0)}),[i,e,t,n]}const[D_,I_,U_,N_]=L_();function Mu(i,t){const e=t?i?N_:U_:i?I_:D_;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get($t(e,r)&&r in n?e:n,r,s)}const O_={get:Mu(!1,!1)},F_={get:Mu(!1,!0)},B_={get:Mu(!0,!1)};const Fd=new WeakMap,Bd=new WeakMap,zd=new WeakMap,z_=new WeakMap;function H_(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function k_(i){return i.__v_skip||!Object.isExtensible(i)?0:H_(c_(i))}function Su(i){return Pr(i)?i:yu(i,!1,C_,O_,Fd)}function V_(i){return yu(i,!1,P_,F_,Bd)}function Hd(i){return yu(i,!0,R_,B_,zd)}function yu(i,t,e,n,r){if(!se(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=k_(i);if(o===0)return i;const a=new Proxy(i,o===2?n:e);return r.set(i,a),a}function Xs(i){return Pr(i)?Xs(i.__v_raw):!!(i&&i.__v_isReactive)}function Pr(i){return!!(i&&i.__v_isReadonly)}function _s(i){return!!(i&&i.__v_isShallow)}function kd(i){return i?!!i.__v_raw:!1}function jt(i){const t=i&&i.__v_raw;return t?jt(t):i}function G_(i){return Object.isExtensible(i)&&Ed(i,"__v_skip",!0),i}const Qs=i=>se(i)?Su(i):i,Eu=i=>se(i)?Hd(i):i;class Vd{constructor(t,e,n,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new _u(()=>t(this._value),()=>ea(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const t=jt(this);return(!t._cacheable||t.effect.dirty)&&Gi(t._value,t._value=t.effect.run())&&ea(t,4),Gd(t),t.effect._dirtyLevel>=2&&ea(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function W_(i,t,e=!1){let n,r;const s=Ft(i);return s?(n=i,r=Sn):(n=i.get,r=i.set),new Vd(n,r,s||!r,e)}function Gd(i){var t;Fi&&Tr&&(i=jt(i),Ld(Tr,(t=i.dep)!=null?t:i.dep=Id(()=>i.dep=void 0,i instanceof Vd?i:void 0)))}function ea(i,t=4,e,n){i=jt(i);const r=i.dep;r&&Dd(r,t)}function Qe(i){return!!(i&&i.__v_isRef===!0)}function qn(i){return X_(i,!1)}function X_(i,t){return Qe(i)?i:new q_(i,t)}class q_{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:jt(t),this._value=e?t:Qs(t)}get value(){return Gd(this),this._value}set value(t){const e=this.__v_isShallow||_s(t)||Pr(t);t=e?t:jt(t),Gi(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=e?t:Qs(t),ea(this,4))}}function sc(i){return Qe(i)?i.value:i}const Y_={get:(i,t,e)=>sc(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const r=i[t];return Qe(r)&&!Qe(e)?(r.value=e,!0):Reflect.set(i,t,e,n)}};function Wd(i){return Xs(i)?i:new Proxy(i,Y_)}/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bi(i,t,e,n){try{return n?i(...n):i()}catch(r){za(r,t,e)}}function wn(i,t,e,n){if(Ft(i)){const r=Bi(i,t,e,n);return r&&Md(r)&&r.catch(s=>{za(s,t,e)}),r}if(Pt(i)){const r=[];for(let s=0;s<i.length;s++)r.push(wn(i[s],t,e,n));return r}}function za(i,t,e,n=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Ki(),Bi(l,null,10,[i,o,a]),ji();return}}$_(i,e,r,n)}function $_(i,t,e,n=!0){console.error(i)}let to=!1,oc=!1;const Ne=[];let Gn=0;const cs=[];let Ri=null,mr=0;const Xd=Promise.resolve();let Tu=null;function K_(i){const t=Tu||Xd;return i?t.then(this?i.bind(this):i):t}function j_(i){let t=Gn+1,e=Ne.length;for(;t<e;){const n=t+e>>>1,r=Ne[n],s=eo(r);s<i||s===i&&r.pre?t=n+1:e=n}return t}function bu(i){(!Ne.length||!Ne.includes(i,to&&i.allowRecurse?Gn+1:Gn))&&(i.id==null?Ne.push(i):Ne.splice(j_(i.id),0,i),qd())}function qd(){!to&&!oc&&(oc=!0,Tu=Xd.then($d))}function Z_(i){const t=Ne.indexOf(i);t>Gn&&Ne.splice(t,1)}function J_(i){Pt(i)?cs.push(...i):(!Ri||!Ri.includes(i,i.allowRecurse?mr+1:mr))&&cs.push(i),qd()}function Cf(i,t,e=to?Gn+1:0){for(;e<Ne.length;e++){const n=Ne[e];if(n&&n.pre){if(i&&n.id!==i.uid)continue;Ne.splice(e,1),e--,n()}}}function Yd(i){if(cs.length){const t=[...new Set(cs)].sort((e,n)=>eo(e)-eo(n));if(cs.length=0,Ri){Ri.push(...t);return}for(Ri=t,mr=0;mr<Ri.length;mr++){const e=Ri[mr];e.active!==!1&&e()}Ri=null,mr=0}}const eo=i=>i.id==null?1/0:i.id,Q_=(i,t)=>{const e=eo(i)-eo(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function $d(i){oc=!1,to=!0,Ne.sort(Q_);try{for(Gn=0;Gn<Ne.length;Gn++){const t=Ne[Gn];t&&t.active!==!1&&Bi(t,t.i,t.i?15:14)}}finally{Gn=0,Ne.length=0,Yd(),to=!1,Tu=null,(Ne.length||cs.length)&&$d()}}let yn=null,Ha=null;function ma(i){const t=yn;return yn=i,Ha=i&&i.type.__scopeId||null,t}function tg(i){Ha=i}function eg(){Ha=null}function ka(i,t=yn,e){if(!t||i._n)return i;const n=(...r)=>{n._d&&Bf(-1);const s=ma(t);let o;try{o=i(...r)}finally{ma(s),n._d&&Bf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function tr(i,t,e,n){const r=i.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ki(),wn(l,e,8,[i.el,a,i,t]),ji())}}const Pi=Symbol("_leaveCb"),Po=Symbol("_enterCb");function ng(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ws(()=>{i.isMounted=!0}),tp(()=>{i.isUnmounting=!0}),i}const gn=[Function,Array],Kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},jd=i=>{const t=i.subTree;return t.component?jd(t.component):t},ig={name:"BaseTransition",props:Kd,setup(i,{slots:t}){const e=i0(),n=ng();return()=>{const r=t.default&&Jd(t.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==an){s=h;break}}const o=jt(i),{mode:a}=o;if(n.isLeaving)return al(s);const l=Rf(s);if(!l)return al(s);let c=ac(l,o,n,e,h=>c=h);_a(l,c);const u=e.subTree,f=u&&Rf(u);if(f&&f.type!==an&&!gr(l,f)&&jd(e).type!==an){const h=ac(f,o,n,e);if(_a(f,h),a==="out-in"&&l.type!==an)return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,e.update.active!==!1&&(e.effect.dirty=!0,e.update())},al(s);a==="in-out"&&l.type!==an&&(h.delayLeave=(d,g,_)=>{const p=Zd(n,f);p[String(f.key)]=f,d[Pi]=()=>{g(),d[Pi]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return s}}},rg=ig;function Zd(i,t){const{leavingVNodes:e}=i;let n=e.get(t.type);return n||(n=Object.create(null),e.set(t.type,n)),n}function ac(i,t,e,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:y,onAppearCancelled:M}=t,E=String(i.key),C=Zd(e,i),A=(x,S)=>{x&&wn(x,n,9,S)},w=(x,S)=>{const L=S[1];A(x,S),Pt(x)?x.every(N=>N.length<=1)&&L():x.length<=1&&L()},D={mode:o,persisted:a,beforeEnter(x){let S=l;if(!e.isMounted)if(s)S=p||l;else return;x[Pi]&&x[Pi](!0);const L=C[E];L&&gr(i,L)&&L.el[Pi]&&L.el[Pi](),A(S,[x])},enter(x){let S=c,L=u,N=f;if(!e.isMounted)if(s)S=m||c,L=y||u,N=M||f;else return;let F=!1;const Z=x[Po]=Q=>{F||(F=!0,Q?A(N,[x]):A(L,[x]),D.delayedLeave&&D.delayedLeave(),x[Po]=void 0)};S?w(S,[x,Z]):Z()},leave(x,S){const L=String(i.key);if(x[Po]&&x[Po](!0),e.isUnmounting)return S();A(h,[x]);let N=!1;const F=x[Pi]=Z=>{N||(N=!0,S(),Z?A(_,[x]):A(g,[x]),x[Pi]=void 0,C[L]===i&&delete C[L])};C[L]=i,d?w(d,[x,F]):F()},clone(x){const S=ac(x,t,e,n,r);return r&&r(S),S}};return D}function al(i){if(Va(i))return i=Wi(i),i.children=null,i}function Rf(i){if(!Va(i))return i;const{shapeFlag:t,children:e}=i;if(e){if(t&16)return e[0];if(t&32&&Ft(e.default))return e.default()}}function _a(i,t){i.shapeFlag&6&&i.component?_a(i.component.subTree,t):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function Jd(i,t=!1,e){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===ke?(o.patchFlag&128&&r++,n=n.concat(Jd(o.children,t,a))):(t||o.type!==an)&&n.push(a!=null?Wi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const na=i=>!!i.type.__asyncLoader,Va=i=>i.type.__isKeepAlive;function sg(i,t){Qd(i,"a",t)}function og(i,t){Qd(i,"da",t)}function Qd(i,t,e=Pe){const n=i.__wdc||(i.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ga(t,n,e),e){let r=e.parent;for(;r&&r.parent;)Va(r.parent.vnode)&&ag(n,t,e,r),r=r.parent}}function ag(i,t,e,n){const r=Ga(t,i,n,!0);ep(()=>{du(n[t],r)},e)}function Ga(i,t,e=Pe,n=!1){if(e){const r=e[i]||(e[i]=[]),s=t.__weh||(t.__weh=(...o)=>{Ki();const a=ho(e),l=wn(t,e,i,o);return a(),ji(),l});return n?r.unshift(s):r.push(s),s}}const gi=i=>(t,e=Pe)=>{(!qa||i==="sp")&&Ga(i,(...n)=>t(...n),e)},lg=gi("bm"),ws=gi("m"),cg=gi("bu"),ug=gi("u"),tp=gi("bum"),ep=gi("um"),fg=gi("sp"),hg=gi("rtg"),dg=gi("rtc");function pg(i,t=Pe){Ga("ec",i,t)}const mg="components",np=Symbol.for("v-ndc");function _g(i){return _e(i)?gg(mg,i,!1)||i:i||np}function gg(i,t,e=!0,n=!1){const r=yn||Pe;if(r){const s=r.type;{const a=l0(s,!1);if(a&&(a===t||a===Fn(t)||a===Oa(Fn(t))))return s}const o=Pf(r[i]||s[i],t)||Pf(r.appContext[i],t);return!o&&n?s:o}}function Pf(i,t){return i&&(i[t]||i[Fn(t)]||i[Oa(Fn(t))])}function Au(i,t,e,n){let r;const s=e;if(Pt(i)||_e(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=t(i[o],o,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=t(o+1,o,void 0,s)}else if(se(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>t(o,a,void 0,s));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(i[c],c,a,s)}}else r=[];return r}const lc=i=>i?yp(i)?Lu(i):lc(i.parent):null,qs=De(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>lc(i.parent),$root:i=>lc(i.root),$emit:i=>i.emit,$options:i=>wu(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,bu(i.update)}),$nextTick:i=>i.n||(i.n=K_.bind(i.proxy)),$watch:i=>kg.bind(i)}),ll=(i,t)=>i!==ae&&!i.__isScriptSetup&&$t(i,t),vg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return n[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(ll(n,t))return o[t]=1,n[t];if(r!==ae&&$t(r,t))return o[t]=2,r[t];if((c=i.propsOptions[0])&&$t(c,t))return o[t]=3,s[t];if(e!==ae&&$t(e,t))return o[t]=4,e[t];cc&&(o[t]=0)}}const u=qs[t];let f,h;if(u)return t==="$attrs"&&Je(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==ae&&$t(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,$t(h,t))return h[t]},set({_:i},t,e){const{data:n,setupState:r,ctx:s}=i;return ll(r,t)?(r[t]=e,!0):n!==ae&&$t(n,t)?(n[t]=e,!0):$t(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(s[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!e[o]||i!==ae&&$t(i,o)||ll(t,o)||(a=s[0])&&$t(a,o)||$t(n,o)||$t(qs,o)||$t(r.config.globalProperties,o)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:$t(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Lf(i){return Pt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let cc=!0;function xg(i){const t=wu(i),e=i.proxy,n=i.ctx;cc=!1,t.beforeCreate&&Df(t.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:y,destroyed:M,unmounted:E,render:C,renderTracked:A,renderTriggered:w,errorCaptured:D,serverPrefetch:x,expose:S,inheritAttrs:L,components:N,directives:F,filters:Z}=t;if(c&&Mg(c,n,null),o)for(const K in o){const k=o[K];Ft(k)&&(n[K]=k.bind(e))}if(r){const K=r.call(e,e);se(K)&&(i.data=Su(K))}if(cc=!0,s)for(const K in s){const k=s[K],ht=Ft(k)?k.bind(e,e):Ft(k.get)?k.get.bind(e,e):Sn,_t=!Ft(k)&&Ft(k.set)?k.set.bind(e):Sn,gt=u0({get:ht,set:_t});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>gt.value,set:At=>gt.value=At})}if(a)for(const K in a)ip(a[K],n,e,K);if(l){const K=Ft(l)?l.call(e):l;Reflect.ownKeys(K).forEach(k=>{Ag(k,K[k])})}u&&Df(u,i,"c");function W(K,k){Pt(k)?k.forEach(ht=>K(ht.bind(e))):k&&K(k.bind(e))}if(W(lg,f),W(ws,h),W(cg,d),W(ug,g),W(sg,_),W(og,p),W(pg,D),W(dg,A),W(hg,w),W(tp,y),W(ep,E),W(fg,x),Pt(S))if(S.length){const K=i.exposed||(i.exposed={});S.forEach(k=>{Object.defineProperty(K,k,{get:()=>e[k],set:ht=>e[k]=ht})})}else i.exposed||(i.exposed={});C&&i.render===Sn&&(i.render=C),L!=null&&(i.inheritAttrs=L),N&&(i.components=N),F&&(i.directives=F)}function Mg(i,t,e=Sn){Pt(i)&&(i=uc(i));for(const n in i){const r=i[n];let s;se(r)?"default"in r?s=ia(r.from||n,r.default,!0):s=ia(r.from||n):s=ia(r),Qe(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[n]=s}}function Df(i,t,e){wn(Pt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function ip(i,t,e,n){const r=n.includes(".")?gp(e,n):()=>e[n];if(_e(i)){const s=t[i];Ft(s)&&ul(r,s)}else if(Ft(i))ul(r,i.bind(e));else if(se(i))if(Pt(i))i.forEach(s=>ip(s,t,e,n));else{const s=Ft(i.handler)?i.handler.bind(e):t[i.handler];Ft(s)&&ul(r,s,i)}}function wu(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!n?l=t:(l={},r.length&&r.forEach(c=>ga(l,c,o,!0)),ga(l,t,o)),se(t)&&s.set(t,l),l}function ga(i,t,e,n=!1){const{mixins:r,extends:s}=t;s&&ga(i,s,e,!0),r&&r.forEach(o=>ga(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Sg[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Sg={data:If,props:Uf,emits:Uf,methods:Hs,computed:Hs,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Hs,directives:Hs,watch:Eg,provide:If,inject:yg};function If(i,t){return t?i?function(){return De(Ft(i)?i.call(this,this):i,Ft(t)?t.call(this,this):t)}:t:i}function yg(i,t){return Hs(uc(i),uc(t))}function uc(i){if(Pt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function ze(i,t){return i?[...new Set([].concat(i,t))]:t}function Hs(i,t){return i?De(Object.create(null),i,t):t}function Uf(i,t){return i?Pt(i)&&Pt(t)?[...new Set([...i,...t])]:De(Object.create(null),Lf(i),Lf(t??{})):t}function Eg(i,t){if(!i)return t;if(!t)return i;const e=De(Object.create(null),i);for(const n in t)e[n]=ze(i[n],t[n]);return e}function rp(){return{app:null,config:{isNativeTag:a_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tg=0;function bg(i,t){return function(n,r=null){Ft(n)||(n=De({},n)),r!=null&&!se(r)&&(r=null);const s=rp(),o=new WeakSet;let a=!1;const l=s.app={_uid:Tg++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:h0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ft(c.install)?(o.add(c),c.install(l,...u)):Ft(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=he(n,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Lu(h.component)}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Ys;Ys=l;try{return c()}finally{Ys=u}}};return l}}let Ys=null;function Ag(i,t){if(Pe){let e=Pe.provides;const n=Pe.parent&&Pe.parent.provides;n===e&&(e=Pe.provides=Object.create(n)),e[i]=t}}function ia(i,t,e=!1){const n=Pe||yn;if(n||Ys){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Ys._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return e&&Ft(t)?t.call(n&&n.proxy):t}}const sp={},op=()=>Object.create(sp),ap=i=>Object.getPrototypeOf(i)===sp;function wg(i,t,e,n=!1){const r={},s=op();i.propsDefaults=Object.create(null),lp(i,t,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);e?i.props=n?r:V_(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Cg(i,t,e,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=jt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wa(i.emitsOptions,h))continue;const d=t[h];if(l)if($t(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Fn(h);r[g]=fc(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{lp(i,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!$t(t,f)&&((u=Or(f))===f||!$t(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=fc(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!$t(t,f))&&(delete s[f],c=!0)}c&&hi(i.attrs,"set","")}function lp(i,t,e,n){const[r,s]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ws(l))continue;const c=t[l];let u;r&&$t(r,u=Fn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:Wa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=jt(e),c=a||ae;for(let u=0;u<s.length;u++){const f=s[u];e[f]=fc(r,l,f,c[f],i,!$t(c,f))}}return o}function fc(i,t,e,n,r,s){const o=i[e];if(o!=null){const a=$t(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ft(l)){const{propsDefaults:c}=r;if(e in c)n=c[e];else{const u=ho(r);n=c[e]=l.call(null,t),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Or(e))&&(n=!0))}return n}const Rg=new WeakMap;function cp(i,t,e=!1){const n=e?Rg:t.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ft(i)){const u=f=>{l=!0;const[h,d]=cp(f,t,!0);De(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return se(i)&&n.set(i,as),as;if(Pt(s))for(let u=0;u<s.length;u++){const f=Fn(s[u]);Nf(f)&&(o[f]=ae)}else if(s)for(const u in s){const f=Fn(u);if(Nf(f)){const h=s[u],d=o[f]=Pt(h)||Ft(h)?{type:h}:De({},h),g=d.type;let _=!1,p=!0;if(Pt(g))for(let m=0;m<g.length;++m){const y=g[m],M=Ft(y)&&y.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=Ft(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||$t(d,"default"))&&a.push(f)}}const c=[o,a];return se(i)&&n.set(i,c),c}function Nf(i){return i[0]!=="$"&&!Ws(i)}const up=i=>i[0]==="_"||i==="$stable",Cu=i=>Pt(i)?i.map(kn):[kn(i)],Pg=(i,t,e)=>{if(t._n)return t;const n=ka((...r)=>Cu(t(...r)),e);return n._c=!1,n},fp=(i,t,e)=>{const n=i._ctx;for(const r in i){if(up(r))continue;const s=i[r];if(Ft(s))t[r]=Pg(r,s,n);else if(s!=null){const o=Cu(s);t[r]=()=>o}}},hp=(i,t)=>{const e=Cu(t);i.slots.default=()=>e},dp=(i,t,e)=>{for(const n in t)(e||n!=="_")&&(i[n]=t[n])},Lg=(i,t,e)=>{const n=i.slots=op();if(i.vnode.shapeFlag&32){const r=t._;r?(dp(n,t,e),e&&Ed(n,"_",r,!0)):fp(t,n)}else t&&hp(i,t)},Dg=(i,t,e)=>{const{vnode:n,slots:r}=i;let s=!0,o=ae;if(n.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:dp(r,t,e):(s=!t.$stable,fp(t,r)),o=t}else t&&(hp(i,t),o={default:1});if(s)for(const a in r)!up(a)&&o[a]==null&&delete r[a]};function hc(i,t,e,n,r=!1){if(Pt(i)){i.forEach((h,d)=>hc(h,t&&(Pt(t)?t[d]:t),e,n,r));return}if(na(n)&&!r)return;const s=n.shapeFlag&4?Lu(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(_e(c)?(u[c]=null,$t(f,c)&&(f[c]=null)):Qe(c)&&(c.value=null)),Ft(l))Bi(l,a,12,[o,u]);else{const h=_e(l),d=Qe(l);if(h||d){const g=()=>{if(i.f){const _=h?$t(f,l)?f[l]:u[l]:l.value;r?Pt(_)&&du(_,s):Pt(_)?_.includes(s)||_.push(s):h?(u[l]=[s],$t(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,$t(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,We(g,e)):g()}}}const Ig=Symbol("_vte"),Ug=i=>i.__isTeleport,We=Kg;function Ng(i){return Og(i)}function Og(i,t){const e=Td();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Sn,insertStaticContent:g}=i,_=(R,I,G,X=null,et=null,J=null,nt=void 0,b=null,v=!!I.dynamicChildren)=>{if(R===I)return;R&&!gr(R,I)&&(X=xt(R),At(R,et,J,!0),R=null),I.patchFlag===-2&&(v=!1,I.dynamicChildren=null);const{type:P,ref:H,shapeFlag:Y}=I;switch(P){case Xa:p(R,I,G,X);break;case an:m(R,I,G,X);break;case hl:R==null&&y(I,G,X,nt);break;case ke:N(R,I,G,X,et,J,nt,b,v);break;default:Y&1?C(R,I,G,X,et,J,nt,b,v):Y&6?F(R,I,G,X,et,J,nt,b,v):(Y&64||Y&128)&&P.process(R,I,G,X,et,J,nt,b,v,Ot)}H!=null&&et&&hc(H,R&&R.ref,J,I||R,!I)},p=(R,I,G,X)=>{if(R==null)n(I.el=a(I.children),G,X);else{const et=I.el=R.el;I.children!==R.children&&c(et,I.children)}},m=(R,I,G,X)=>{R==null?n(I.el=l(I.children||""),G,X):I.el=R.el},y=(R,I,G,X)=>{[R.el,R.anchor]=g(R.children,I,G,X,R.el,R.anchor)},M=({el:R,anchor:I},G,X)=>{let et;for(;R&&R!==I;)et=h(R),n(R,G,X),R=et;n(I,G,X)},E=({el:R,anchor:I})=>{let G;for(;R&&R!==I;)G=h(R),r(R),R=G;r(I)},C=(R,I,G,X,et,J,nt,b,v)=>{I.type==="svg"?nt="svg":I.type==="math"&&(nt="mathml"),R==null?A(I,G,X,et,J,nt,b,v):x(R,I,et,J,nt,b,v)},A=(R,I,G,X,et,J,nt,b)=>{let v,P;const{props:H,shapeFlag:Y,transition:V,dirs:lt}=R;if(v=R.el=o(R.type,J,H&&H.is,H),Y&8?u(v,R.children):Y&16&&D(R.children,v,null,X,et,cl(R,J),nt,b),lt&&tr(R,null,X,"created"),w(v,R,R.scopeId,nt,X),H){for(const ct in H)ct!=="value"&&!Ws(ct)&&s(v,ct,null,H[ct],J,X);"value"in H&&s(v,"value",null,H.value,J),(P=H.onVnodeBeforeMount)&&zn(P,X,R)}lt&&tr(R,null,X,"beforeMount");const it=Fg(et,V);it&&V.beforeEnter(v),n(v,I,G),((P=H&&H.onVnodeMounted)||it||lt)&&We(()=>{P&&zn(P,X,R),it&&V.enter(v),lt&&tr(R,null,X,"mounted")},et)},w=(R,I,G,X,et)=>{if(G&&d(R,G),X)for(let J=0;J<X.length;J++)d(R,X[J]);if(et){let J=et.subTree;if(I===J){const nt=et.vnode;w(R,nt,nt.scopeId,nt.slotScopeIds,et.parent)}}},D=(R,I,G,X,et,J,nt,b,v=0)=>{for(let P=v;P<R.length;P++){const H=R[P]=b?Li(R[P]):kn(R[P]);_(null,H,I,G,X,et,J,nt,b)}},x=(R,I,G,X,et,J,nt)=>{const b=I.el=R.el;let{patchFlag:v,dynamicChildren:P,dirs:H}=I;v|=R.patchFlag&16;const Y=R.props||ae,V=I.props||ae;let lt;if(G&&er(G,!1),(lt=V.onVnodeBeforeUpdate)&&zn(lt,G,I,R),H&&tr(I,R,G,"beforeUpdate"),G&&er(G,!0),(Y.innerHTML&&V.innerHTML==null||Y.textContent&&V.textContent==null)&&u(b,""),P?S(R.dynamicChildren,P,b,G,X,cl(I,et),J):nt||k(R,I,b,null,G,X,cl(I,et),J,!1),v>0){if(v&16)L(b,Y,V,G,et);else if(v&2&&Y.class!==V.class&&s(b,"class",null,V.class,et),v&4&&s(b,"style",Y.style,V.style,et),v&8){const it=I.dynamicProps;for(let ct=0;ct<it.length;ct++){const vt=it[ct],ot=Y[vt],pt=V[vt];(pt!==ot||vt==="value")&&s(b,vt,ot,pt,et,G)}}v&1&&R.children!==I.children&&u(b,I.children)}else!nt&&P==null&&L(b,Y,V,G,et);((lt=V.onVnodeUpdated)||H)&&We(()=>{lt&&zn(lt,G,I,R),H&&tr(I,R,G,"updated")},X)},S=(R,I,G,X,et,J,nt)=>{for(let b=0;b<I.length;b++){const v=R[b],P=I[b],H=v.el&&(v.type===ke||!gr(v,P)||v.shapeFlag&70)?f(v.el):G;_(v,P,H,null,X,et,J,nt,!0)}},L=(R,I,G,X,et)=>{if(I!==G){if(I!==ae)for(const J in I)!Ws(J)&&!(J in G)&&s(R,J,I[J],null,et,X);for(const J in G){if(Ws(J))continue;const nt=G[J],b=I[J];nt!==b&&J!=="value"&&s(R,J,b,nt,et,X)}"value"in G&&s(R,"value",I.value,G.value,et)}},N=(R,I,G,X,et,J,nt,b,v)=>{const P=I.el=R?R.el:a(""),H=I.anchor=R?R.anchor:a("");let{patchFlag:Y,dynamicChildren:V,slotScopeIds:lt}=I;lt&&(b=b?b.concat(lt):lt),R==null?(n(P,G,X),n(H,G,X),D(I.children||[],G,H,et,J,nt,b,v)):Y>0&&Y&64&&V&&R.dynamicChildren?(S(R.dynamicChildren,V,G,et,J,nt,b),(I.key!=null||et&&I===et.subTree)&&pp(R,I,!0)):k(R,I,G,H,et,J,nt,b,v)},F=(R,I,G,X,et,J,nt,b,v)=>{I.slotScopeIds=b,R==null?I.shapeFlag&512?et.ctx.activate(I,G,X,nt,v):Z(I,G,X,et,J,nt,v):Q(R,I,v)},Z=(R,I,G,X,et,J,nt)=>{const b=R.component=n0(R,X,et);if(Va(R)&&(b.ctx.renderer=Ot),r0(b,!1,nt),b.asyncDep){if(et&&et.registerDep(b,W,nt),!R.el){const v=b.subTree=he(an);m(null,v,I,G)}}else W(b,R,I,G,et,J,nt)},Q=(R,I,G)=>{const X=I.component=R.component;if(qg(R,I,G))if(X.asyncDep&&!X.asyncResolved){K(X,I,G);return}else X.next=I,Z_(X.update),X.effect.dirty=!0,X.update();else I.el=R.el,X.vnode=I},W=(R,I,G,X,et,J,nt)=>{const b=()=>{if(R.isMounted){let{next:H,bu:Y,u:V,parent:lt,vnode:it}=R;{const zt=mp(R);if(zt){H&&(H.el=it.el,K(R,H,nt)),zt.asyncDep.then(()=>{R.isUnmounted||b()});return}}let ct=H,vt;er(R,!1),H?(H.el=it.el,K(R,H,nt)):H=it,Y&&sl(Y),(vt=H.props&&H.props.onVnodeBeforeUpdate)&&zn(vt,lt,H,it),er(R,!0);const ot=fl(R),pt=R.subTree;R.subTree=ot,_(pt,ot,f(pt.el),xt(pt),R,et,J),H.el=ot.el,ct===null&&Yg(R,ot.el),V&&We(V,et),(vt=H.props&&H.props.onVnodeUpdated)&&We(()=>zn(vt,lt,H,it),et)}else{let H;const{el:Y,props:V}=I,{bm:lt,m:it,parent:ct}=R,vt=na(I);if(er(R,!1),lt&&sl(lt),!vt&&(H=V&&V.onVnodeBeforeMount)&&zn(H,ct,I),er(R,!0),Y&&U){const ot=()=>{R.subTree=fl(R),U(Y,R.subTree,R,et,null)};vt?I.type.__asyncLoader().then(()=>!R.isUnmounted&&ot()):ot()}else{const ot=R.subTree=fl(R);_(null,ot,G,X,R,et,J),I.el=ot.el}if(it&&We(it,et),!vt&&(H=V&&V.onVnodeMounted)){const ot=I;We(()=>zn(H,ct,ot),et)}(I.shapeFlag&256||ct&&na(ct.vnode)&&ct.vnode.shapeFlag&256)&&R.a&&We(R.a,et),R.isMounted=!0,I=G=X=null}},v=R.effect=new _u(b,Sn,()=>bu(P),R.scope),P=R.update=()=>{v.dirty&&v.run()};P.i=R,P.id=R.uid,er(R,!0),P()},K=(R,I,G)=>{I.component=R;const X=R.vnode.props;R.vnode=I,R.next=null,Cg(R,I.props,X,G),Dg(R,I.children,G),Ki(),Cf(R),ji()},k=(R,I,G,X,et,J,nt,b,v=!1)=>{const P=R&&R.children,H=R?R.shapeFlag:0,Y=I.children,{patchFlag:V,shapeFlag:lt}=I;if(V>0){if(V&128){_t(P,Y,G,X,et,J,nt,b,v);return}else if(V&256){ht(P,Y,G,X,et,J,nt,b,v);return}}lt&8?(H&16&&yt(P,et,J),Y!==P&&u(G,Y)):H&16?lt&16?_t(P,Y,G,X,et,J,nt,b,v):yt(P,et,J,!0):(H&8&&u(G,""),lt&16&&D(Y,G,X,et,J,nt,b,v))},ht=(R,I,G,X,et,J,nt,b,v)=>{R=R||as,I=I||as;const P=R.length,H=I.length,Y=Math.min(P,H);let V;for(V=0;V<Y;V++){const lt=I[V]=v?Li(I[V]):kn(I[V]);_(R[V],lt,G,null,et,J,nt,b,v)}P>H?yt(R,et,J,!0,!1,Y):D(I,G,X,et,J,nt,b,v,Y)},_t=(R,I,G,X,et,J,nt,b,v)=>{let P=0;const H=I.length;let Y=R.length-1,V=H-1;for(;P<=Y&&P<=V;){const lt=R[P],it=I[P]=v?Li(I[P]):kn(I[P]);if(gr(lt,it))_(lt,it,G,null,et,J,nt,b,v);else break;P++}for(;P<=Y&&P<=V;){const lt=R[Y],it=I[V]=v?Li(I[V]):kn(I[V]);if(gr(lt,it))_(lt,it,G,null,et,J,nt,b,v);else break;Y--,V--}if(P>Y){if(P<=V){const lt=V+1,it=lt<H?I[lt].el:X;for(;P<=V;)_(null,I[P]=v?Li(I[P]):kn(I[P]),G,it,et,J,nt,b,v),P++}}else if(P>V)for(;P<=Y;)At(R[P],et,J,!0),P++;else{const lt=P,it=P,ct=new Map;for(P=it;P<=V;P++){const wt=I[P]=v?Li(I[P]):kn(I[P]);wt.key!=null&&ct.set(wt.key,P)}let vt,ot=0;const pt=V-it+1;let zt=!1,Rt=0;const Mt=new Array(pt);for(P=0;P<pt;P++)Mt[P]=0;for(P=lt;P<=Y;P++){const wt=R[P];if(ot>=pt){At(wt,et,J,!0);continue}let Xt;if(wt.key!=null)Xt=ct.get(wt.key);else for(vt=it;vt<=V;vt++)if(Mt[vt-it]===0&&gr(wt,I[vt])){Xt=vt;break}Xt===void 0?At(wt,et,J,!0):(Mt[Xt-it]=P+1,Xt>=Rt?Rt=Xt:zt=!0,_(wt,I[Xt],G,null,et,J,nt,b,v),ot++)}const It=zt?Bg(Mt):as;for(vt=It.length-1,P=pt-1;P>=0;P--){const wt=it+P,Xt=I[wt],O=wt+1<H?I[wt+1].el:X;Mt[P]===0?_(null,Xt,G,O,et,J,nt,b,v):zt&&(vt<0||P!==It[vt]?gt(Xt,G,O,2):vt--)}}},gt=(R,I,G,X,et=null)=>{const{el:J,type:nt,transition:b,children:v,shapeFlag:P}=R;if(P&6){gt(R.component.subTree,I,G,X);return}if(P&128){R.suspense.move(I,G,X);return}if(P&64){nt.move(R,I,G,Ot);return}if(nt===ke){n(J,I,G);for(let Y=0;Y<v.length;Y++)gt(v[Y],I,G,X);n(R.anchor,I,G);return}if(nt===hl){M(R,I,G);return}if(X!==2&&P&1&&b)if(X===0)b.beforeEnter(J),n(J,I,G),We(()=>b.enter(J),et);else{const{leave:Y,delayLeave:V,afterLeave:lt}=b,it=()=>n(J,I,G),ct=()=>{Y(J,()=>{it(),lt&&lt()})};V?V(J,it,ct):ct()}else n(J,I,G)},At=(R,I,G,X=!1,et=!1)=>{const{type:J,props:nt,ref:b,children:v,dynamicChildren:P,shapeFlag:H,patchFlag:Y,dirs:V,cacheIndex:lt}=R;if(Y===-2&&(et=!1),b!=null&&hc(b,null,G,R,!0),lt!=null&&(I.renderCache[lt]=void 0),H&256){I.ctx.deactivate(R);return}const it=H&1&&V,ct=!na(R);let vt;if(ct&&(vt=nt&&nt.onVnodeBeforeUnmount)&&zn(vt,I,R),H&6)at(R.component,G,X);else{if(H&128){R.suspense.unmount(G,X);return}it&&tr(R,null,I,"beforeUnmount"),H&64?R.type.remove(R,I,G,Ot,X):P&&!P.hasOnce&&(J!==ke||Y>0&&Y&64)?yt(P,I,G,!1,!0):(J===ke&&Y&384||!et&&H&16)&&yt(v,I,G),X&&Wt(R)}(ct&&(vt=nt&&nt.onVnodeUnmounted)||it)&&We(()=>{vt&&zn(vt,I,R),it&&tr(R,null,I,"unmounted")},G)},Wt=R=>{const{type:I,el:G,anchor:X,transition:et}=R;if(I===ke){tt(G,X);return}if(I===hl){E(R);return}const J=()=>{r(G),et&&!et.persisted&&et.afterLeave&&et.afterLeave()};if(R.shapeFlag&1&&et&&!et.persisted){const{leave:nt,delayLeave:b}=et,v=()=>nt(G,J);b?b(R.el,J,v):v()}else J()},tt=(R,I)=>{let G;for(;R!==I;)G=h(R),r(R),R=G;r(I)},at=(R,I,G)=>{const{bum:X,scope:et,update:J,subTree:nt,um:b,m:v,a:P}=R;Of(v),Of(P),X&&sl(X),et.stop(),J&&(J.active=!1,At(nt,R,I,G)),b&&We(b,I),We(()=>{R.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},yt=(R,I,G,X=!1,et=!1,J=0)=>{for(let nt=J;nt<R.length;nt++)At(R[nt],I,G,X,et)},xt=R=>{if(R.shapeFlag&6)return xt(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=h(R.anchor||R.el),G=I&&I[Ig];return G?h(G):I};let Nt=!1;const Bt=(R,I,G)=>{R==null?I._vnode&&At(I._vnode,null,null,!0):_(I._vnode||null,R,I,null,null,null,G),Nt||(Nt=!0,Cf(),Yd(),Nt=!1),I._vnode=R},Ot={p:_,um:At,m:gt,r:Wt,mt:Z,mc:D,pc:k,pbc:S,n:xt,o:i};let ie,U;return{render:Bt,hydrate:ie,createApp:bg(Bt,ie)}}function cl({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function er({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function Fg(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function pp(i,t,e=!1){const n=i.children,r=t.children;if(Pt(n)&&Pt(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Li(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&pp(o,a)),a.type===Xa&&(a.el=o.el)}}function Bg(i){const t=i.slice(),e=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=e[e.length-1],i[r]<c){t[n]=r,e.push(n);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,i[e[a]]<c?s=a+1:o=a;c<i[e[s]]&&(s>0&&(t[n]=e[s-1]),e[s]=n)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function mp(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mp(t)}function Of(i){if(i)for(let t=0;t<i.length;t++)i[t].active=!1}const zg=Symbol.for("v-scx"),Hg=()=>ia(zg),Lo={};function ul(i,t,e){return _p(i,t,e)}function _p(i,t,{immediate:e,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=ae){if(t&&s){const A=t;t=(...w)=>{A(...w),C()}}const l=Pe,c=A=>n===!0?A:_r(A,n===!1?1:void 0);let u,f=!1,h=!1;if(Qe(i)?(u=()=>i.value,f=_s(i)):Xs(i)?(u=()=>c(i),f=!0):Pt(i)?(h=!0,f=i.some(A=>Xs(A)||_s(A)),u=()=>i.map(A=>{if(Qe(A))return A.value;if(Xs(A))return c(A);if(Ft(A))return Bi(A,l,2)})):Ft(i)?t?u=()=>Bi(i,l,2):u=()=>(d&&d(),wn(i,l,3,[g])):u=Sn,t&&n){const A=u;u=()=>_r(A())}let d,g=A=>{d=M.onStop=()=>{Bi(A,l,4),d=M.onStop=void 0}},_;if(qa)if(g=Sn,t?e&&wn(t,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const A=Hg();_=A.__watcherHandles||(A.__watcherHandles=[])}else return Sn;let p=h?new Array(i.length).fill(Lo):Lo;const m=()=>{if(!(!M.active||!M.dirty))if(t){const A=M.run();(n||f||(h?A.some((w,D)=>Gi(w,p[D])):Gi(A,p)))&&(d&&d(),wn(t,l,3,[A,p===Lo?void 0:h&&p[0]===Lo?[]:p,g]),p=A)}else M.run()};m.allowRecurse=!!t;let y;r==="sync"?y=m:r==="post"?y=()=>We(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),y=()=>bu(m));const M=new _u(u,Sn,y),E=y_(),C=()=>{M.stop(),E&&du(E.effects,M)};return t?e?m():p=M.run():r==="post"?We(M.run.bind(M),l&&l.suspense):M.run(),_&&_.push(C),C}function kg(i,t,e){const n=this.proxy,r=_e(i)?i.includes(".")?gp(n,i):()=>n[i]:i.bind(n,n);let s;Ft(t)?s=t:(s=t.handler,e=t);const o=ho(this),a=_p(r,s.bind(n),e);return o(),a}function gp(i,t){const e=t.split(".");return()=>{let n=i;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function _r(i,t=1/0,e){if(t<=0||!se(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),t--,Qe(i))_r(i.value,t,e);else if(Pt(i))for(let n=0;n<i.length;n++)_r(i[n],t,e);else if(xd(i)||ls(i))i.forEach(n=>{_r(n,t,e)});else if(yd(i)){for(const n in i)_r(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&_r(i[n],t,e)}return i}const Vg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${Fn(t)}Modifiers`]||i[`${Or(t)}Modifiers`];function Gg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||ae;let r=e;const s=t.startsWith("update:"),o=s&&Vg(n,t.slice(7));o&&(o.trim&&(r=e.map(u=>_e(u)?u.trim():u)),o.number&&(r=e.map(h_)));let a,l=n[a=rl(t)]||n[a=rl(Fn(t))];!l&&s&&(l=n[a=rl(Or(t))]),l&&wn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,wn(c,i,6,r)}}function vp(i,t,e=!1){const n=t.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ft(i)){const l=c=>{const u=vp(c,t,!0);u&&(a=!0,De(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(se(i)&&n.set(i,null),null):(Pt(s)?s.forEach(l=>o[l]=null):De(o,s),se(i)&&n.set(i,o),o)}function Wa(i,t){return!i||!Ia(t)?!1:(t=t.slice(2).replace(/Once$/,""),$t(i,t[0].toLowerCase()+t.slice(1))||$t(i,Or(t))||$t(i,t))}function fl(i){const{type:t,vnode:e,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,p=ma(i);let m,y;try{if(e.shapeFlag&4){const E=r||n,C=E;m=kn(c.call(C,E,u,f,d,h,g)),y=a}else{const E=t;m=kn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),y=t.props?a:Wg(a)}}catch(E){$s.length=0,za(E,i,1),m=he(an)}let M=m;if(y&&_!==!1){const E=Object.keys(y),{shapeFlag:C}=M;E.length&&C&7&&(s&&E.some(hu)&&(y=Xg(y,s)),M=Wi(M,y,!1,!0))}return e.dirs&&(M=Wi(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&(M.transition=e.transition),m=M,ma(p),m}const Wg=i=>{let t;for(const e in i)(e==="class"||e==="style"||Ia(e))&&((t||(t={}))[e]=i[e]);return t},Xg=(i,t)=>{const e={};for(const n in i)(!hu(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function qg(i,t,e){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Ff(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Wa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ff(n,o,c):!0:!!o;return!1}function Ff(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==i[s]&&!Wa(e,s))return!0}return!1}function Yg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const $g=i=>i.__isSuspense;function Kg(i,t){t&&t.pendingBranch?Pt(i)?t.effects.push(...i):t.effects.push(i):J_(i)}const ke=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),hl=Symbol.for("v-stc"),$s=[];let cn=null;function fn(i=!1){$s.push(cn=i?null:[])}function jg(){$s.pop(),cn=$s[$s.length-1]||null}let no=1;function Bf(i){no+=i,i<0&&cn&&(cn.hasOnce=!0)}function xp(i){return i.dynamicChildren=no>0?cn||as:null,jg(),no>0&&cn&&cn.push(i),i}function $n(i,t,e,n,r,s){return xp(hn(i,t,e,n,r,s,!0))}function Ru(i,t,e,n,r){return xp(he(i,t,e,n,r,!0))}function dc(i){return i?i.__v_isVNode===!0:!1}function gr(i,t){return i.type===t.type&&i.key===t.key}const Mp=({key:i})=>i??null,ra=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?_e(i)||Qe(i)||Ft(i)?{i:yn,r:i,k:t,f:!!e}:i:null);function hn(i,t=null,e=null,n=0,r=null,s=i===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Mp(t),ref:t&&ra(t),scopeId:Ha,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(Pu(l,e),s&128&&i.normalize(l)):e&&(l.shapeFlag|=_e(e)?8:16),no>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const he=Zg;function Zg(i,t=null,e=null,n=0,r=null,s=!1){if((!i||i===np)&&(i=an),dc(i)){const a=Wi(i,t,!0);return e&&Pu(a,e),no>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(i)]=a:cn.push(a)),a.patchFlag=-2,a}if(c0(i)&&(i=i.__vccOpts),t){t=Jg(t);let{class:a,style:l}=t;a&&!_e(a)&&(t.class=mu(a)),se(l)&&(kd(l)&&!Pt(l)&&(l=De({},l)),t.style=Fa(l))}const o=_e(i)?1:$g(i)?128:Ug(i)?64:se(i)?4:Ft(i)?2:0;return hn(i,t,e,n,r,o,s,!0)}function Jg(i){return i?kd(i)||ap(i)?De({},i):i:null}function Wi(i,t,e=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=t?Qg(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Mp(c),ref:t&&t.ref?e&&s?Pt(s)?s.concat(ra(t)):[s,ra(t)]:ra(t):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==ke?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Wi(i.ssContent),ssFallback:i.ssFallback&&Wi(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&_a(u,l.clone(u)),u}function Lr(i=" ",t=0){return he(Xa,null,i,t)}function Sp(i="",t=!1){return t?(fn(),Ru(an,null,i)):he(an,null,i)}function kn(i){return i==null||typeof i=="boolean"?he(an):Pt(i)?he(ke,null,i.slice()):typeof i=="object"?Li(i):he(Xa,null,String(i))}function Li(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Wi(i)}function Pu(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Pt(t))e=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),Pu(i,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!ap(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Ft(t)?(t={default:t,_ctx:yn},e=32):(t=String(t),n&64?(e=16,t=[Lr(t)]):e=8);i.children=t,i.shapeFlag|=e}function Qg(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=mu([t.class,n.class]));else if(r==="style")t.style=Fa([t.style,n.style]);else if(Ia(r)){const s=t[r],o=n[r];o&&s!==o&&!(Pt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=n[r])}return t}function zn(i,t,e,n=null){wn(i,t,7,[e,n])}const t0=rp();let e0=0;function n0(i,t,e){const n=i.type,r=(t?t.appContext:i.appContext)||t0,s={uid:e0++,vnode:i,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new M_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(n,r),emitsOptions:vp(n,r),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:n.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Gg.bind(null,s),i.ce&&i.ce(s),s}let Pe=null;const i0=()=>Pe||yn;let va,pc;{const i=Td(),t=(e,n)=>{let r;return(r=i[e])||(r=i[e]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};va=t("__VUE_INSTANCE_SETTERS__",e=>Pe=e),pc=t("__VUE_SSR_SETTERS__",e=>qa=e)}const ho=i=>{const t=Pe;return va(i),i.scope.on(),()=>{i.scope.off(),va(t)}},zf=()=>{Pe&&Pe.scope.off(),va(null)};function yp(i){return i.vnode.shapeFlag&4}let qa=!1;function r0(i,t=!1,e=!1){t&&pc(t);const{props:n,children:r}=i.vnode,s=yp(i);wg(i,n,s,t),Lg(i,r,e);const o=s?s0(i,t):void 0;return t&&pc(!1),o}function s0(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,vg);const{setup:n}=e;if(n){const r=i.setupContext=n.length>1?a0(i):null,s=ho(i);Ki();const o=Bi(n,i,0,[i.props,r]);if(ji(),s(),Md(o)){if(o.then(zf,zf),t)return o.then(a=>{Hf(i,a,t)}).catch(a=>{za(a,i,0)});i.asyncDep=o}else Hf(i,o,t)}else Ep(i,t)}function Hf(i,t,e){Ft(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:se(t)&&(i.setupState=Wd(t)),Ep(i,e)}let kf;function Ep(i,t,e){const n=i.type;if(!i.render){if(!t&&kf&&!n.render){const r=n.template||wu(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=De(De({isCustomElement:s,delimiters:a},o),l);n.render=kf(r,c)}}i.render=n.render||Sn}{const r=ho(i);Ki();try{xg(i)}finally{ji(),r()}}}const o0={get(i,t){return Je(i,"get",""),i[t]}};function a0(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,o0),slots:i.slots,emit:i.emit,expose:t}}function Lu(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Wd(G_(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in qs)return qs[e](i)},has(t,e){return e in t||e in qs}})):i.proxy}function l0(i,t=!0){return Ft(i)?i.displayName||i.name:i.name||t&&i.__name}function c0(i){return Ft(i)&&"__vccOpts"in i}const u0=(i,t)=>W_(i,t,qa);function f0(i,t,e){const n=arguments.length;return n===2?se(t)&&!Pt(t)?dc(t)?he(i,null,[t]):he(i,t):he(i,null,t):(n>3?e=Array.prototype.slice.call(arguments,2):n===3&&dc(e)&&(e=[e]),he(i,t,e))}const h0="3.4.35";/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const d0="http://www.w3.org/2000/svg",p0="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Vf=oi&&oi.createElement("template"),m0={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const r=t==="svg"?oi.createElementNS(d0,i):t==="mathml"?oi.createElementNS(p0,i):e?oi.createElement(i,{is:e}):oi.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>oi.createTextNode(i),createComment:i=>oi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>oi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Vf.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=Vf.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Si="transition",Ps="animation",io=Symbol("_vtc"),Ya=(i,{slots:t})=>f0(rg,_0(i),t);Ya.displayName="Transition";const Tp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ya.props=De({},Kd,Tp);const nr=(i,t=[])=>{Pt(i)?i.forEach(e=>e(...t)):i&&i(...t)},Gf=i=>i?Pt(i)?i.some(t=>t.length>1):i.length>1:!1;function _0(i){const t={};for(const N in i)N in Tp||(t[N]=i[N]);if(i.css===!1)return t;const{name:e="v",type:n,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=i,g=g0(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:y,onEnterCancelled:M,onLeave:E,onLeaveCancelled:C,onBeforeAppear:A=m,onAppear:w=y,onAppearCancelled:D=M}=t,x=(N,F,Z)=>{ir(N,F?u:a),ir(N,F?c:o),Z&&Z()},S=(N,F)=>{N._isLeaving=!1,ir(N,f),ir(N,d),ir(N,h),F&&F()},L=N=>(F,Z)=>{const Q=N?w:y,W=()=>x(F,N,Z);nr(Q,[F,W]),Wf(()=>{ir(F,N?l:s),yi(F,N?u:a),Gf(Q)||Xf(F,n,_,W)})};return De(t,{onBeforeEnter(N){nr(m,[N]),yi(N,s),yi(N,o)},onBeforeAppear(N){nr(A,[N]),yi(N,l),yi(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,F){N._isLeaving=!0;const Z=()=>S(N,F);yi(N,f),yi(N,h),M0(),Wf(()=>{N._isLeaving&&(ir(N,f),yi(N,d),Gf(E)||Xf(N,n,p,Z))}),nr(E,[N,Z])},onEnterCancelled(N){x(N,!1),nr(M,[N])},onAppearCancelled(N){x(N,!0),nr(D,[N])},onLeaveCancelled(N){S(N),nr(C,[N])}})}function g0(i){if(i==null)return null;if(se(i))return[dl(i.enter),dl(i.leave)];{const t=dl(i);return[t,t]}}function dl(i){return d_(i)}function yi(i,t){t.split(/\s+/).forEach(e=>e&&i.classList.add(e)),(i[io]||(i[io]=new Set)).add(t)}function ir(i,t){t.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const e=i[io];e&&(e.delete(t),e.size||(i[io]=void 0))}function Wf(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let v0=0;function Xf(i,t,e,n){const r=i._endId=++v0,s=()=>{r===i._endId&&n()};if(e)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=x0(i,t);if(!o)return n();const c=o+"end";let u=0;const f=()=>{i.removeEventListener(c,h),s()},h=d=>{d.target===i&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),i.addEventListener(c,h)}function x0(i,t){const e=window.getComputedStyle(i),n=g=>(e[g]||"").split(", "),r=n(`${Si}Delay`),s=n(`${Si}Duration`),o=qf(r,s),a=n(`${Ps}Delay`),l=n(`${Ps}Duration`),c=qf(a,l);let u=null,f=0,h=0;t===Si?o>0&&(u=Si,f=o,h=s.length):t===Ps?c>0&&(u=Ps,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Si:Ps:null,h=u?u===Si?s.length:l.length:0);const d=u===Si&&/\b(transform|all)(,|$)/.test(n(`${Si}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function qf(i,t){for(;i.length<t.length;)i=i.concat(i);return Math.max(...t.map((e,n)=>Yf(e)+Yf(i[n])))}function Yf(i){return i==="auto"?0:Number(i.slice(0,-1).replace(",","."))*1e3}function M0(){return document.body.offsetHeight}function S0(i,t,e){const n=i[io];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const $f=Symbol("_vod"),y0=Symbol("_vsh"),E0=Symbol(""),T0=/(^|;)\s*display\s*:/;function b0(i,t,e){const n=i.style,r=_e(e);let s=!1;if(e&&!r){if(t)if(_e(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&sa(n,a,"")}else for(const o in t)e[o]==null&&sa(n,o,"");for(const o in e)o==="display"&&(s=!0),sa(n,o,e[o])}else if(r){if(t!==e){const o=n[E0];o&&(e+=";"+o),n.cssText=e,s=T0.test(e)}}else t&&i.removeAttribute("style");$f in i&&(i[$f]=s?n.display:"",i[y0]&&(n.display="none"))}const Kf=/\s*!important$/;function sa(i,t,e){if(Pt(e))e.forEach(n=>sa(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=A0(i,t);Kf.test(e)?i.setProperty(Or(n),e.replace(Kf,""),"important"):i[n]=e}}const jf=["Webkit","Moz","ms"],pl={};function A0(i,t){const e=pl[t];if(e)return e;let n=Fn(t);if(n!=="filter"&&n in i)return pl[t]=n;n=Oa(n);for(let r=0;r<jf.length;r++){const s=jf[r]+n;if(s in i)return pl[t]=s}return t}const Zf="http://www.w3.org/1999/xlink";function Jf(i,t,e,n,r,s=x_(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(Zf,t.slice(6,t.length)):i.setAttributeNS(Zf,t,e):e==null||s&&!bd(e)?i.removeAttribute(t):i.setAttribute(t,s?"":$i(e)?String(e):e)}function w0(i,t,e,n){if(t==="innerHTML"||t==="textContent"){if(e==null)return;i[t]=e;return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?i.getAttribute("value")||"":i.value,a=e==null?"":String(e);(o!==a||!("_value"in i))&&(i.value=a),e==null&&i.removeAttribute(t),i._value=e;return}let s=!1;if(e===""||e==null){const o=typeof i[t];o==="boolean"?e=bd(e):e==null&&o==="string"?(e="",s=!0):o==="number"&&(e=0,s=!0)}try{i[t]=e}catch{}s&&i.removeAttribute(t)}function C0(i,t,e,n){i.addEventListener(t,e,n)}function R0(i,t,e,n){i.removeEventListener(t,e,n)}const Qf=Symbol("_vei");function P0(i,t,e,n,r=null){const s=i[Qf]||(i[Qf]={}),o=s[t];if(n&&o)o.value=n;else{const[a,l]=L0(t);if(n){const c=s[t]=U0(n,r);C0(i,a,c,l)}else o&&(R0(i,a,o,l),s[t]=void 0)}}const th=/(?:Once|Passive|Capture)$/;function L0(i){let t;if(th.test(i)){t={};let n;for(;n=i.match(th);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Or(i.slice(2)),t]}let ml=0;const D0=Promise.resolve(),I0=()=>ml||(D0.then(()=>ml=0),ml=Date.now());function U0(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;wn(N0(n,e.value),t,5,[n])};return e.value=i,e.attached=I0(),e}function N0(i,t){if(Pt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const eh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,O0=(i,t,e,n,r,s)=>{const o=r==="svg";t==="class"?S0(i,n,o):t==="style"?b0(i,e,n):Ia(t)?hu(t)||P0(i,t,e,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):F0(i,t,n,o))?(w0(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jf(i,t,n,o,s,t!=="value")):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),Jf(i,t,n,o))};function F0(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&eh(t)&&Ft(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eh(t)&&_e(e)?!1:t in i}const B0=De({patchProp:O0},m0);let nh;function z0(){return nh||(nh=Ng(B0))}const H0=(...i)=>{const t=z0().createApp(...i),{mount:e}=t;return t.mount=n=>{const r=V0(n);if(!r)return;const s=t._component;!Ft(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,k0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function k0(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function V0(i){return _e(i)?document.querySelector(i):i}function ai(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function bp(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gs={duration:.5,overwrite:!1,delay:0},Du,Fe,oe,En=1e8,ne=1/En,mc=Math.PI*2,G0=mc/4,W0=0,Ap=Math.sqrt,X0=Math.cos,q0=Math.sin,we=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},Iu=function(t){return typeof t>"u"},Zn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},Uu=function(){return typeof window<"u"},Do=function(t){return de(t)||we(t)},wp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,_c=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rp=/[+-]=-?[.\d]+/,Pp=/[^,'"\[\]\s]+/gi,Y0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,Hn,gc,Nu,mn={},xa={},Lp,Dp=function(t){return(xa=Dr(t,mn))&&tn},Ou=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ro=function(t,e){return!e&&console.warn(t)},Ip=function(t,e){return t&&(mn[t]=e)&&xa&&(xa[t]=e)||mn},so=function(){return 0},$0={suppressEvents:!0,isStart:!0,kill:!1},oa={suppressEvents:!0,kill:!1},K0={suppressEvents:!0},Fu={},zi=[],vc={},Up,on={},gl={},ih=30,aa=[],Bu="",zu=function(t){var e=t[0],n,r;if(Zn(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=aa.length;r--&&!aa[r].targetTest(e););n=aa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new rm(t[r],n)))||t.splice(r,1);return t},Ar=function(t){return t._gsap||zu(Tn(t))[0]._gsap},Np=function(t,e,n){return(n=t[e])&&de(n)?t[e]():Iu(n)&&t.getAttribute&&t.getAttribute(e)||n},Ye=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},us=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},j0=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ma=function(){var t=zi.length,e=zi.slice(0),n,r;for(vc={},zi.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Op=function(t,e,n,r){zi.length&&!Fe&&Ma(),t.render(e,n,Fe&&e<0&&(t._initted||t._startAt)),zi.length&&!Fe&&Ma()},Fp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pp).length<2?e:we(t)?t.trim():t},Bp=function(t){return t},Cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Z0=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Dr=function(t,e){for(var n in e)t[n]=e[n];return t},rh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Sa=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Ks=function(t){var e=t.parent||le,n=t.keyframes?Z0(Be(t.keyframes)):Cn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},J0=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},zp=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},$a=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},wr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Q0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xc=function(t,e,n,r){return t._startAt&&(Fe?t._startAt.revert(oa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},tv=function i(t){return!t||t._ts&&i(t.parent)},sh=function(t){return t._repeat?vs(t._tTime,t=t.duration()+t._rDelay)*t:0},vs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ya=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ka=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},ja=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ka(t),n._dirty||wr(n,t)),t},Hp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ya(t.rawTime(),e),(!e._dur||po(0,e.totalDuration(),n)-e._tTime>ne)&&e.render(n,!0)),wr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ne}},Wn=function(t,e,n,r){return e.parent&&Xi(e),e._start=Ae((di(n)?n:n||t!==le?xn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zp(t,e,"_first","_last",t._sort?"_start":0),Mc(e)||(t._recent=e),r||Hp(t,e),t._ts<0&&ja(t,t._tTime),t},kp=function(t,e){return(mn.ScrollTrigger||Ou("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Vp=function(t,e,n,r,s){if(ku(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Up!==ln.frame)return zi.push(t),t._lazy=[s,r],1},ev=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Mc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},nv=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&ev(t)&&!(!t._initted&&Mc(t))||(t._ts<0||t._dp._ts<0)&&!Mc(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=po(0,t._tDur,e),u=vs(l,a),t._yoyo&&u&1&&(o=1-o),u!==vs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Fe||r||t._zTime===ne||!e&&t._zTime){if(!t._initted&&Vp(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?ne:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&xc(t,e,n,!0),t._onUpdate&&!n&&un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xi(t,1),!n&&!Fe&&(un(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},iv=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},xs=function(t,e,n,r){var s=t._repeat,o=Ae(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ae(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ja(t,t._tTime=t._tDur*a),t.parent&&Ka(t),n||wr(t.parent,t),t},oh=function(t){return t instanceof Ve?wr(t):xs(t,t._dur)},rv={_start:0,endTime:so,totalDuration:so},xn=function i(t,e,n){var r=t.labels,s=t._recent||rv,o=t.duration()>=En?s.endTime(!1):t._dur,a,l,c;return we(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Be(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},js=function(t,e,n){var r=di(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;o.immediateRender=qe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Me(e[0],o,e[s+1])},Zi=function(t,e){return t||t===0?e(t):e},po=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!we(t)||!(e=Y0.exec(t))?"":e[1]},sv=function(t,e,n){return Zi(n,function(r){return po(t,e,r)})},Sc=[].slice,Gp=function(t,e){return t&&Zn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zn(t[0]))&&!t.nodeType&&t!==Hn},ov=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return we(r)&&!e||Gp(r,1)?(s=n).push.apply(s,Tn(r)):n.push(r)})||n},Tn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):we(t)&&!n&&(gc||!Ms())?Sc.call((e||Nu).querySelectorAll(t),0):Be(t)?ov(t,n):Gp(t)?Sc.call(t,0):t?[t]:[]},yc=function(t){return t=Tn(t)[0]||ro("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Tn(e,n.querySelectorAll?n:n===t?ro("Invalid scope")||Nu.createElement("div"):t)}},Wp=function(t){return t.sort(function(){return .5-Math.random()})},Xp=function(t){if(de(t))return t;var e=Zn(t)?t:{each:t},n=Cr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return we(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,p=o[_],m,y,M,E,C,A,w,D,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,En])[1],!x){for(w=-En;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:r%x,y=x===En?0:l?_*f/x-.5:r/x|0,w=0,D=En,A=0;A<_;A++)M=A%x-m,E=y-(A/x|0),p[A]=C=c?Math.abs(c==="y"?E:M):Ap(M*M+E*E),C>w&&(w=C),C<D&&(D=C);r==="random"&&Wp(p),p.max=w-D,p.min=D,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Oe(e.amount||e.each)||0,n=n&&_<0?em(n):n}return _=(p[h]-p.min)/p.max||0,Ae(p.b+(n?n(_):_)*p.v)+p.u}},Ec=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ae(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(di(n)?0:Oe(n))}},qp=function(t,e){var n=Be(t),r,s;return!n&&Zn(t)&&(r=n=t.radius||En,t.values?(t=Tn(t.values),(s=!di(t[0]))&&(r*=r)):t=Ec(t.increment)),Zi(e,n?de(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=En,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||di(o)?u:u+Oe(o)}:Ec(t))},Yp=function(t,e,n,r){return Zi(Be(t)?!e:n===!0?!!(n=0):!r,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},av=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},lv=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},cv=function(t,e,n){return Kp(t,e,0,1,n)},$p=function(t,e,n){return Zi(n,function(r){return t[~~e(r)]})},uv=function i(t,e,n){var r=e-t;return Be(t)?$p(t,i(0,t.length),e):Zi(n,function(s){return(r+(s-t)%r)%r+t})},fv=function i(t,e,n){var r=e-t,s=r*2;return Be(t)?$p(t,i(0,t.length-1),e):Zi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},oo=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?Pp:_c),n+=t.substr(e,r-e)+Yp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Kp=function(t,e,n,r,s){var o=e-t,a=r-n;return Zi(s,function(l){return n+((l-t)/o*a||0)})},hv=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=we(t),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else r||(t=Dr(Be(t)?[]:{},t));if(!u){for(l in e)Hu.call(a,t,l,"get",e[l]);s=function(g){return Wu(g,a)||(o?t.p:t)}}}return Zi(n,s)},ah=function(t,e,n){var r=t.labels,s=En,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},un=function(t,e,n){var r=t.vars,s=r[e],o=oe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&zi.length&&Ma(),a&&(oe=a),u=l?s.apply(c,l):s.call(c),oe=o,u},ks=function(t){return Xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&un(t,"onInterrupt"),t},ss,jp=[],Zp=function(t){if(t)if(t=!t.name&&t.default||t,Uu()||t.headless){var e=t.name,n=de(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:so,render:Wu,add:Hu,kill:Cv,modifier:wv,rawVars:0},o={targetTest:0,get:0,getSetter:Gu,aliases:{},register:0};if(Ms(),t!==r){if(on[e])return;Cn(r,Cn(Sa(t,s),o)),Dr(r.prototype,Dr(s,Sa(t,o))),on[r.prop=e]=r,t.targetTest&&(aa.push(r),Fu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ip(e,r),t.register&&t.register(tn,r,$e)}else jp.push(t)},ee=255,Vs={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},vl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ee+.5|0},Jp=function(t,e,n){var r=t?di(t)?[t>>16,t>>8&ee,t&ee]:0:Vs.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vs[t])r=Vs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ee,r&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(_c),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=vl(l+1/3,s,o),r[1]=vl(l,s,o),r[2]=vl(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Cp),n&&r.length<4&&(r[3]=1),r}else r=t.match(_c)||Vs.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/ee,o=r[1]/ee,a=r[2]/ee,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Qp=function(t){var e=[],n=[],r=-1;return t.split(Hi).forEach(function(s){var o=s.match(rs)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},lh=function(t,e,n){var r="",s=(t+r).match(Hi),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Jp(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Qp(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Hi,"1").split(rs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Hi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Hi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vs)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),dv=/hsl[a]?\(/,tm=function(t){var e=t.join(" "),n;if(Hi.lastIndex=0,Hi.test(e))return n=dv.test(e),t[1]=lh(t[1],n),t[0]=lh(t[0],n,Qp(t[1])),!0},ao,ln=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=i()-r,y=p===!0,M,E,C,A;if((m>t||m<0)&&(n+=m-e),r+=m,C=r-n,M=C-o,(M>0||y)&&(A=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=M+(M>=s?4:s-M),E=1),y||(l=c(_)),E)for(d=0;d<a.length;d++)a[d](C,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Lp&&(!gc&&Uu()&&(Hn=gc=window,Nu=Hn.document||{},mn.gsap=tn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(tn.version),Dp(xa||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),jp.forEach(Zp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},ao=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ao=0,c=so},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var M=m?function(E,C,A,w){p(E,C,A,w),f.remove(M)}:p;return f.remove(p),a[y?"unshift":"push"](M),Ms(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),Ms=function(){return!ao&&ln.wake()},Gt={},pv=/^[\d.\-M][\d.\-,\s]/,mv=/["']/g,_v=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(mv,"").trim():+c,r=l.substr(a+1).trim();return e},gv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},vv=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_v(e[1])]:gv(t).split(",").map(Fp)):Gt._CE&&pv.test(t)?Gt._CE("",t):n},em=function(t){return function(e){return 1-t(1-e)}},nm=function i(t,e){for(var n=t._first,r;n;)n instanceof Ve?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Cr=function(t,e){return t&&(de(t)?t:Gt[t]||vv(t))||e},Fr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Ye(t,function(a){Gt[a]=mn[a]=s,Gt[o=a.toLowerCase()]=n;for(var l in s)Gt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Gt[a+"."+l]=s[l]}),s},im=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},xl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/mc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*q0((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:im(a);return s=mc/s,l.config=function(c,u){return i(t,c,u)},l},Ml=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:im(n);return r.config=function(s){return i(t,s)},r};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Fr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;Fr("Elastic",xl("in"),xl("out"),xl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Fr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Fr("Circ",function(i){return-(Ap(1-i*i)-1)});Fr("Sine",function(i){return i===1?1:-X0(i*G0)+1});Fr("Back",Ml("in"),Ml("out"),Ml());Gt.SteppedEase=Gt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-ne;return function(a){return((r*po(0,o,a)|0)+s)*n}}};gs.ease=Gt["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bu+=i+","+i+"Params,"});var rm=function(t,e){this.id=W0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Np,this.set=e?e.getSetter:Gu},lo=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xs(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),ao||ln.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,n),!s._dp||s.parent||Hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ne||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Op(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?vs(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(po(-Math.abs(this._delay),this._tDur,s),r!==!1),Ka(this),Q0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=K0);var r=Fe;return Fe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,oh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,oh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(xn(this,n),qe(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,qe(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ne)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=de(n)?n:Bp,a=function(){var c=r.then;r.then=null,de(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){ks(this)},i}();Cn(lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Ve=function(i){bp(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),le&&Wn(n.parent||le,ai(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kp(ai(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return js(0,arguments,this),this},e.from=function(r,s,o){return js(1,arguments,this),this},e.fromTo=function(r,s,o,a){return js(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Me(r,s,xn(this,o),1),this},e.call=function(r,s,o){return Wn(this,Me.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Me(r,o,xn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ks(o).immediateRender=qe(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Ks(a).immediateRender=qe(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ae(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,p,m,y,M,E,C,A,w;if(this!==le&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,E=this._start,M=this._ts,m=!M,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=Ae(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),C=vs(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),A&&_&1&&(h=c-h,w=1),_!==C&&!this._lock){var D=A&&C&1,x=D===(A&&_&1);if(_<C&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Ae(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;nm(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=iv(this,Ae(a),Ae(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(un(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-ne);break}}d=g}else{d=this._last;for(var S=r<0?r:h;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Fe&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=S?-ne:ne);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-ne)._zTime=h>=a?1:-1,this._ts))return this._start=E,Ka(this),this.render(r,s,o);this._onUpdate&&!s&&un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(un(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(di(s)||(s=xn(this,s,r)),!(r instanceof lo)){if(Be(r))return r.forEach(function(a){return o.add(a,s)}),this;if(we(r))return this.addLabel(r,s);if(de(r))r=Me.delayedCall(0,r);else return this}return this!==r?Wn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Me?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return we(r)?this.removeLabel(r):de(r)?this.killTweensOf(r):($a(this,r),r===this._recent&&(this._recent=this._last),wr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=xn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Me.delayedCall(0,s||so,o);return a.data="isPause",this._hasPause=1,Wn(this,a,xn(this,r))},e.removePause=function(r){var s=this._first;for(r=xn(this,r);s;)s._start===r&&s.data==="isPause"&&Xi(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ui!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Tn(r),l=this._first,c=di(s),u;l;)l instanceof Me?j0(l._targets,a)&&(c?(!Ui||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=xn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Me.to(o,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ne,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&xs(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Cn({startAt:{time:xn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),ah(this,xn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),ah(this,xn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return wr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=En,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;xs(o,o===le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(le._ts&&(Op(le,ya(r,le)),Up=ln.frame),ln.frame>=ih){ih+=dn.autoSleep||120;var s=le._first;if((!s||!s._ts)&&dn.autoSleep&&ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ln.sleep()}}},t}(lo);Cn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var xv=function(t,e,n,r,s,o,a){var l=new $e(this._pt,t,e,0,1,um,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=oo(r)),o&&(y=[n,r],o(y,t,e),n=y[0],r=y[1]),h=n.match(_l)||[];f=_l.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?us(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=_l.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Rp.test(r)||m)&&(l.e=0),this._pt=l,l},Hu=function(t,e,n,r,s,o,a,l,c,u){de(r)&&(r=r(s||0,t,o));var f=t[e],h=n!=="get"?n:de(f)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=de(f)?c?Tv:lm:Vu,g;if(we(r)&&(~r.indexOf("random(")&&(r=oo(r)),r.charAt(1)==="="&&(g=us(h,r)+(Oe(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Tc)return!isNaN(h*r)&&r!==""?(g=new $e(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Av:cm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Ou(e,r),xv.call(this,t,e,h,r,d,l||dn.stringFilter,c))},Mv=function(t,e,n,r,s){if(de(t)&&(t=Zs(t,s,e,n,r)),!Zn(t)||t.style&&t.nodeType||Be(t)||wp(t))return we(t)?Zs(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Zs(t[a],s,e,n,r);return o},sm=function(t,e,n,r,s,o){var a,l,c,u;if(on[t]&&(a=new on[t]).init(s,a.rawVars?e[t]:Mv(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new $e(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ui,Tc,ku=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,M=t._overwrite==="auto"&&!Du,E=t.timeline,C,A,w,D,x,S,L,N,F,Z,Q,W,K;if(E&&(!h||!s)&&(s="none"),t._ease=Cr(s,gs.ease),t._yEase=f?em(Cr(f===!0?s:f,gs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!E&&!!r.runBackwards,!E||h&&!r.stagger){if(N=p[0]?Ar(p[0]).harness:0,W=N&&r[N.prop],C=Sa(r,Fu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?oa:$0),_._lazy=0),o){if(Xi(t._startAt=Me.set(p,Cn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return un(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!a&&!d)&&t._startAt.revert(oa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),w=Cn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qe(l),immediateRender:a,stagger:0,parent:m},C),W&&(w[N.prop]=W),Xi(t._startAt=Me.set(p,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(oa):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&qe(l)||l&&!g,A=0;A<p.length;A++){if(x=p[A],L=x._gsap||zu(p)[A]._gsap,t._ptLookup[A]=Z={},vc[L.id]&&zi.length&&Ma(),Q=y===p?A:y.indexOf(x),N&&(F=new N).init(x,W||C,t,Q,y)!==!1&&(t._pt=D=new $e(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(k){Z[k]=D}),F.priority&&(S=1)),!N||W)for(w in C)on[w]&&(F=sm(w,C,t,Q,x,y))?F.priority&&(S=1):Z[w]=D=Hu.call(t,x,w,"get",C[w],Q,y,0,r.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),M&&t._pt&&(Ui=t,le.killTweensOf(x,Z,t.globalTime(e)),K=!t.parent,Ui=0),t._pt&&l&&(vc[L.id]=1)}S&&fm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,h&&e<=0&&E.render(En,!0,!0)},Sv=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Tc=1,t.vars[e]="+=0",ku(t,a),Tc=0,l?ro(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=me(n)+Oe(f.e)),f.b&&(f.b=u.s+Oe(f.b))},yv=function(t,e){var n=t[0]?Ar(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Dr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ev=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Be(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Zs=function(t,e,n,r,s){return de(t)?t.call(e,n,r,s):we(t)&&~t.indexOf("random(")?oo(t):t},om=Bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",am={};Ye(om+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return am[i]=1});var Me=function(i){bp(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ks(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=r.parent||le,M=(Be(n)||wp(n)?di(n[0]):"length"in r)?[n]:Tn(n),E,C,A,w,D,x,S,L;if(a._targets=M.length?zu(M):ro("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Do(c)||Do(u)){if(r=a.vars,E=a.timeline=new Ve({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:M}),E.kill(),E.parent=E._dp=ai(a),E._start=0,h||Do(c)||Do(u)){if(w=M.length,S=h&&Xp(h),Zn(h))for(D in h)~om.indexOf(D)&&(L||(L={}),L[D]=h[D]);for(C=0;C<w;C++)A=Sa(r,am),A.stagger=0,m&&(A.yoyoEase=m),L&&Dr(A,L),x=M[C],A.duration=+Zs(c,ai(a),C,x,M),A.delay=(+Zs(u,ai(a),C,x,M)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),E.to(x,A,S?S(C,x,M):0),E._ease=Gt.none;E.duration()?c=u=0:a.timeline=0}else if(g){Ks(Cn(E.vars.defaults,{ease:"none"})),E._ease=Cr(g.ease||r.ease||"none");var N=0,F,Z,Q;if(Be(g))g.forEach(function(W){return E.to(M,W,">")}),E.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||Ev(D,g[D],A,g.easeEach);for(D in A)for(F=A[D].sort(function(W,K){return W.t-K.t}),N=0,C=0;C<F.length;C++)Z=F[C],Q={ease:Z.e,duration:(Z.t-(C?F[C-1].t:0))/100*c},Q[D]=Z.v,E.to(M,Q,N),N+=Q.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!Du&&(Ui=ai(a),le.killTweensOf(M),Ui=0),Wn(y,ai(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ae(y._time)&&qe(f)&&tv(ai(a))&&y.data!=="nested")&&(a._tTime=-ne,a.render(Math.max(0,-u)||0)),p&&kp(ai(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ne&&!u?l:r<ne?0:r,h,d,g,_,p,m,y,M,E;if(!c)nv(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Ae(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===Ae(f/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(E=this._yEase,h=c-h),p=vs(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(M&&this._yEase&&nm(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vp(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&xc(this,r,s,o),un(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&xc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Xi(this,1),!s&&!(u&&!a)&&(f||a||m)&&(un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){ao||ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ku(this,c),u=this._ease(c/this._dur),Sv(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(ja(this,0),this.parent||zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ui&&Ui.vars.overwrite!==!0)._first||ks(this),this.parent&&o!==this.timeline.totalDuration()&&xs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Tn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&J0(a,l))return s==="all"&&(this._pt=0),ks(this);for(f=this._op=this._op||[],s!=="all"&&(we(s)&&(_={},Ye(s,function(y){return _[y]=1}),s=_),s=yv(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&$a(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ks(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return js(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return js(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return le.killTweensOf(r,s,o)},t}(lo);Cn(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(i){Me[i]=function(){var t=new Ve,e=Sc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Vu=function(t,e,n){return t[e]=n},lm=function(t,e,n){return t[e](n)},Tv=function(t,e,n,r){return t[e](r.fp,n)},bv=function(t,e,n){return t.setAttribute(e,n)},Gu=function(t,e){return de(t[e])?lm:Iu(t[e])&&t.setAttribute?bv:Vu},cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Av=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},um=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Wu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},wv=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},Cv=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?$a(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Rv=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},fm=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},$e=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||cm,this.d=l||this,this.set=c||Vu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Rv,this.m=n,this.mt=s,this.tween=r},i}();Ye(Bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Fu[i]=1});mn.TweenMax=mn.TweenLite=Me;mn.TimelineLite=mn.TimelineMax=Ve;le=new Ve({sortChildren:!1,defaults:gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=tm;var Rr=[],la={},Pv=[],ch=0,Lv=0,Sl=function(t){return(la[t]||Pv).map(function(e){return e()})},bc=function(){var t=Date.now(),e=[];t-ch>2&&(Sl("matchMediaInit"),Rr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Hn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Sl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ch=t,Sl("matchMedia"))},hm=function(){function i(e,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lv++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){de(n)&&(s=r,r=n,n=de);var o=this,a=function(){var c=oe,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=yc(s)),oe=o,f=r.apply(o,arguments),de(f)&&o._r.push(f),oe=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===de?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=oe;oe=null,n(this),oe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Me&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Rr.length;o--;)Rr[o].id===this.id&&Rr.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),Dv=function(){function i(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Zn(n)||(n={matches:n});var o=new hm(0,s||this.scope),a=o.conditions={},l,c,u;oe&&!o.selector&&(o.selector=oe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(Rr.indexOf(o)<0&&Rr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bc):l.addEventListener("change",bc)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ea={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Zp(r)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return le.getTweensOf(t,e)},getProperty:function(t,e,n,r){we(t)&&(t=Tn(t)[0]);var s=Ar(t||{}).get,o=n?Bp:Fp;return n==="native"&&(n=""),t&&(e?o((on[e]&&on[e].get||s)(t,e,n,r)):function(a,l,c){return o((on[a]&&on[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Tn(t),t.length>1){var r=t.map(function(u){return tn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=on[e],a=Ar(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;ss._pt=0,f.init(t,n?u+n:u,ss,0,[t]),f.render(1,f),ss._pt&&Wu(1,ss)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=tn.to(t,Dr((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Cr(t.ease,gs.ease)),rh(gs,t||{})},config:function(t){return rh(dn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!on[a]&&!mn[a]&&ro(e+" effect requires "+a+" plugin.")}),gl[e]=function(a,l,c){return n(Tn(a),Cn(l||{},s),c)},o&&(Ve.prototype[e]=function(a,l,c){return this.add(gl[e](a,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Gt[t]=Cr(e)},parseEase:function(t,e){return arguments.length?Cr(t,e):Gt},getById:function(t){return le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),r,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),le.remove(n),n._dp=0,n._time=n._tTime=le._time,r=le._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Me&&r.vars.onComplete===r._targets[0]))&&Wn(n,r,r._start-r._delay),r=s;return Wn(le,n,0),n},context:function(t,e){return t?new hm(t,e):oe},matchMedia:function(t){return new Dv(t)},matchMediaRefresh:function(){return Rr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||bc()},addEventListener:function(t,e){var n=la[t]||(la[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=la[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:uv,wrapYoyo:fv,distribute:Xp,random:Yp,snap:qp,normalize:cv,getUnit:Oe,clamp:sv,splitColor:Jp,toArray:Tn,selector:yc,mapRange:Kp,pipe:av,unitize:lv,interpolate:hv,shuffle:Wp},install:Dp,effects:gl,ticker:ln,updateRoot:Ve.updateRoot,plugins:on,globalTimeline:le,core:{PropTween:$e,globals:Ip,Tween:Me,Timeline:Ve,Animation:lo,getCache:Ar,_removeLinkedListItem:$a,reverting:function(){return Fe},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Du=t}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ea[i]=Me[i]});ln.add(Ve.updateRoot);ss=Ea.to({},{duration:0});var Iv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Uv=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Iv(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},yl=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(we(s)&&(l={},Ye(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Uv(a,s)}}}},tn=Ea.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},yl("roundProps",Ec),yl("modifiers"),yl("snap",qp))||Ea;Me.version=Ve.version=tn.version="3.12.5";Lp=1;Uu()&&Ms();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var uh,Ni,fs,Xu,Mr,fh,qu,Nv=function(){return typeof window<"u"},pi={},hr=180/Math.PI,hs=Math.PI/180,zr=Math.atan2,hh=1e8,Yu=/([A-Z])/g,Ov=/(left|right|width|margin|padding|x)/i,Fv=/[\s,\(]\S/,Yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ac=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},dm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},kv=function(t,e,n){return t.style[e]=n},Vv=function(t,e,n){return t.style.setProperty(e,n)},Gv=function(t,e,n){return t._gsap[e]=n},Wv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xv=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},qv=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ce="transform",Ke=ce+"Origin",Yv=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in pi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=li(r,a)}):this.tfm[t]=o.x?o[t]:li(r,t),t===Ke&&(this.tfm.zOrigin=o.zOrigin);else return Yn.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(ce)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ke,e,"")),t=ce}(s||e)&&this.props.push(t,e,s[t])},mm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$v=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!n[ce]&&(mm(n),r.zOrigin&&n[Ke]&&(n[Ke]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_m=function(t,e){var n={target:t,props:[],revert:$v,save:Yv};return t._gsap||tn.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},gm,wc=function(t,e){var n=Ni.createElementNS?Ni.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ni.createElement(t);return n&&n.style?n:Ni.createElement(t)},Kn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Ss(e)||e,1)||""},dh="O,Moz,ms,Ms,Webkit".split(","),Ss=function(t,e,n){var r=e||Mr,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(dh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?dh[o]:"")+t},Cc=function(){Nv()&&window.document&&(uh=window,Ni=uh.document,fs=Ni.documentElement,Mr=wc("div")||{style:{}},wc("div"),ce=Ss(ce),Ke=ce+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gm=!!Ss("perspective"),qu=tn.core.reverting,Xu=1)},El=function i(t){var e=wc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(fs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),fs.removeChild(e),this.style.cssText=s,o},ph=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},vm=function(t){var e;try{e=t.getBBox()}catch{e=El.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===El||(e=El.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ph(t,["x","cx","x1"])||0,y:+ph(t,["y","cy","y1"])||0,width:0,height:0}:e},xm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vm(t))},Ir=function(t,e){if(e){var n=t.style,r;e in pi&&e!==Ke&&(e=ce),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Yu,"-$1").toLowerCase())):n.removeAttribute(e)}},Oi=function(t,e,n,r,s,o){var a=new $e(t._pt,e,n,0,1,o?pm:dm);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},mh={deg:1,rad:1,turn:1},Kv={grid:1,flex:1},qi=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Mr.style,l=Ov.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||mh[r]||mh[o])return s;if(o!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&xm(t),(d||o==="%")&&(pi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],me(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ni||!_.appendChild)&&(_=Ni.body),p=_._gsap,p&&d&&p.width&&l&&p.time===ln.time&&!p.uncache)return me(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,g=t[u],y?t.style[e]=y:Ir(t,e)}else(d||o==="%")&&!Kv[Kn(_,"display")]&&(a.position=Kn(t,"position")),_===t&&(a.position="static"),_.appendChild(Mr),g=Mr[u],_.removeChild(Mr),a.position="absolute";return l&&d&&(p=Ar(_),p.time=ln.time,p.width=_[u]),me(h?g*s/f:g&&s?f/g*s:0)},li=function(t,e,n,r){var s;return Xu||Cc(),e in Yn&&e!=="transform"&&(e=Yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),pi[e]&&e!=="transform"?(s=uo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ba(Kn(t,Ke))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ta[e]&&Ta[e](t,e,n)||Kn(t,e)||Np(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qi(t,e,s,n)+n:s},jv=function(t,e,n,r){if(!n||n==="none"){var s=Ss(e,t,1),o=s&&Kn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Kn(t,"borderTopColor"))}var a=new $e(this._pt,t.style,e,0,1,um),l=0,c=0,u,f,h,d,g,_,p,m,y,M,E,C;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Kn(t,e)||r,_?t.style[e]=_:Ir(t,e)),u=[n,r],tm(u),n=u[0],r=u[1],h=n.match(rs)||[],C=r.match(rs)||[],C.length){for(;f=rs.exec(r);)p=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,E=_.substr((d+"").length),p.charAt(1)==="="&&(p=us(d,p)+E),m=parseFloat(p),M=p.substr((m+"").length),l=rs.lastIndex-M.length,M||(M=M||dn.units[e]||E,l===r.length&&(r+=M,a.e+=M)),E!==M&&(d=qi(t,e,_,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?pm:dm;return Rp.test(r)&&(a.e=0),this._pt=a,a},_h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zv=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=_h[n]||n,e[1]=_h[r]||r,e.join(" ")},Jv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pi[a]&&(l=1,a=a==="transformOrigin"?Ke:ce),Ir(n,a);l&&(Ir(n,ce),o&&(o.svg&&n.removeAttribute("transform"),uo(n,1),o.uncache=1,mm(r)))}},Ta={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new $e(t._pt,e,n,0,0,Jv);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},co=[1,0,0,1,0,0],Mm={},Sm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gh=function(t){var e=Kn(t,ce);return Sm(e)?co:e.substr(7).match(Cp).map(me)},$u=function(t,e){var n=t._gsap||Ar(t),r=t.style,s=gh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?co:s):(s===co&&!t.offsetParent&&t!==fs&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,fs.appendChild(t)),s=gh(t),l?r.display=l:Ir(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):fs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Rc=function(t,e,n,r,s,o){var a=t._gsap,l=s||$u(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],M=e.split(" "),E=parseFloat(M[0])||0,C=parseFloat(M[1])||0,A,w,D,x;n?l!==co&&(w=d*p-g*_)&&(D=E*(p/w)+C*(-_/w)+(_*y-p*m)/w,x=E*(-g/w)+C*(d/w)-(d*y-g*m)/w,E=D,C=x):(A=vm(t),E=A.x+(~M[0].indexOf("%")?E/100*A.width:E),C=A.y+(~(M[1]||M[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(m=E-c,y=C-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=C,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Ke]="0px 0px",o&&(Oi(o,a,"xOrigin",c,E),Oi(o,a,"yOrigin",u,C),Oi(o,a,"xOffset",f,a.xOffset),Oi(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",E+" "+C)},uo=function(t,e){var n=t._gsap||new rm(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Kn(t,Ke)||"0",u,f,h,d,g,_,p,m,y,M,E,C,A,w,D,x,S,L,N,F,Z,Q,W,K,k,ht,_t,gt,At,Wt,tt,at;return u=f=h=_=p=m=y=M=E=0,d=g=1,n.svg=!!(t.getCTM&&xm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ce]!=="none"?l[ce]:"")),r.scale=r.rotate=r.translate="none"),w=$u(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Rc(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,A=n.yOrigin||0,w!==co&&(L=w[0],N=w[1],F=w[2],Z=w[3],u=Q=w[4],f=W=w[5],w.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt(Z*Z+F*F),_=L||N?zr(N,L)*hr:0,y=F||Z?zr(F,Z)*hr+_:0,y&&(g*=Math.abs(Math.cos(y*hs))),n.svg&&(u-=C-(C*L+A*F),f-=A-(C*N+A*Z))):(at=w[6],Wt=w[7],_t=w[8],gt=w[9],At=w[10],tt=w[11],u=w[12],f=w[13],h=w[14],D=zr(at,At),p=D*hr,D&&(x=Math.cos(-D),S=Math.sin(-D),K=Q*x+_t*S,k=W*x+gt*S,ht=at*x+At*S,_t=Q*-S+_t*x,gt=W*-S+gt*x,At=at*-S+At*x,tt=Wt*-S+tt*x,Q=K,W=k,at=ht),D=zr(-F,At),m=D*hr,D&&(x=Math.cos(-D),S=Math.sin(-D),K=L*x-_t*S,k=N*x-gt*S,ht=F*x-At*S,tt=Z*S+tt*x,L=K,N=k,F=ht),D=zr(N,L),_=D*hr,D&&(x=Math.cos(D),S=Math.sin(D),K=L*x+N*S,k=Q*x+W*S,N=N*x-L*S,W=W*x-Q*S,L=K,Q=k),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=me(Math.sqrt(L*L+N*N+F*F)),g=me(Math.sqrt(W*W+at*at)),D=zr(Q,W),y=Math.abs(D)>2e-4?D*hr:0,E=tt?1/(tt<0?-tt:tt):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sm(Kn(t,ce)),K&&t.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=me(d),n.scaleY=me(g),n.rotation=me(_)+a,n.rotationX=me(p)+a,n.rotationY=me(m)+a,n.skewX=y+a,n.skewY=M+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Ke]=ba(c)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?tx:gm?ym:Qv,n.uncache=0,n},ba=function(t){return(t=t.split(" "))[0]+" "+t[1]},Tl=function(t,e,n){var r=Oe(e);return me(parseFloat(e)+parseFloat(qi(t,"x",n+"px",r)))+r},Qv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ym(t,e)},rr="0deg",Ls="0px",sr=") ",ym=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,M=n.zOrigin,E="",C=m==="auto"&&t&&t!==1||m===!0;if(M&&(f!==rr||u!==rr)){var A=parseFloat(u)*hs,w=Math.sin(A),D=Math.cos(A),x;A=parseFloat(f)*hs,x=Math.cos(A),o=Tl(y,o,w*x*-M),a=Tl(y,a,-Math.sin(A)*-M),l=Tl(y,l,D*x*-M+M)}p!==Ls&&(E+="perspective("+p+sr),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||o!==Ls||a!==Ls||l!==Ls)&&(E+=l!==Ls||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+sr),c!==rr&&(E+="rotate("+c+sr),u!==rr&&(E+="rotateY("+u+sr),f!==rr&&(E+="rotateX("+f+sr),(h!==rr||d!==rr)&&(E+="skew("+h+", "+d+sr),(g!==1||_!==1)&&(E+="scale("+g+", "+_+sr),y.style[ce]=E||"translate(0, 0)"},tx=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,M=parseFloat(o),E=parseFloat(a),C,A,w,D,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=hs,c*=hs,C=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=hs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,D*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),C*=x,A*=x)),C=me(C),A=me(A),w=me(w),D=me(D)):(C=f,D=h,A=w=0),(M&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(M=qi(d,"x",o,"px"),E=qi(d,"y",a,"px")),(g||_||p||m)&&(M=me(M+g-(g*C+_*w)+p),E=me(E+_-(g*A+_*D)+m)),(r||s)&&(x=d.getBBox(),M=me(M+r/100*x.width),E=me(E+s/100*x.height)),x="matrix("+C+","+A+","+w+","+D+","+M+","+E+")",d.setAttribute("transform",x),y&&(d.style[ce]=x)},ex=function(t,e,n,r,s){var o=360,a=we(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*hh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*hh)%o-~~(c/o)*o)),t._pt=h=new $e(t._pt,e,n,r,c,Bv),h.e=u,h.u="deg",t._props.push(n),h},vh=function(t,e){for(var n in e)t[n]=e[n];return t},nx=function(t,e,n){var r=vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ce]=e,a=uo(n,1),Ir(n,ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ce],o[ce]=e,a=uo(n,1),o[ce]=c);for(l in pi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Oe(c),g=Oe(u),f=d!==g?qi(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new $e(t._pt,a,l,f,h-f,Ac),t._pt.u=g||0,t._props.push(l));vh(a,r)};Ye("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Ta[t>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return li(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Em={name:"css",register:Cc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,M,E,C,A,w,D;Xu||Cc(),this.styles=this.styles||_m(t),D=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(on[_]&&sm(_,e,n,r,t,s)))){if(d=typeof u,g=Ta[_],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=oo(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Hi.lastIndex=0,Hi.test(c)||(p=Oe(c),m=Oe(u)),m?p!==m&&(c=qi(t,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],we(c)&&~c.indexOf("random(")&&(c=oo(c)),Oe(c+"")||c==="auto"||(c+=dn.units[_]||Oe(li(t,_))||""),(c+"").charAt(1)==="="&&(c=li(t,_))):c=li(t,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Yn&&(_==="autoAlpha"&&(h===1&&li(t,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),Oi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in pi,M){if(this.styles.save(_),E||(C=t._gsap,C.renderTransform&&!e.parseTransform||uo(t,e.parseTransform),A=e.smoothOrigin!==!1&&C.smooth,E=this._pt=new $e(this._pt,a,ce,0,1,C.renderTransform,C,0,-1),E.dep=1),_==="scale")this._pt=new $e(this._pt,C,"scaleY",C.scaleY,(y?us(C.scaleY,y+f):f)-C.scaleY||0,Ac),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Ke,0,a[Ke]),u=Zv(u),C.svg?Rc(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&Oi(this,C,"zOrigin",C.zOrigin,m),Oi(this,a,_,ba(c),ba(u)));continue}else if(_==="svgOrigin"){Rc(t,u,1,A,0,this);continue}else if(_ in Mm){ex(this,C,_,h,y?us(h,y+u):u);continue}else if(_==="smoothOrigin"){Oi(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){nx(this,u,t);continue}}else _ in a||(_=Ss(_)||_);if(M||(f||f===0)&&(h||h===0)&&!Fv.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=Oe(u)||(_ in dn.units?dn.units[_]:p),p!==m&&(h=qi(t,_,c,m)),this._pt=new $e(this._pt,M?C:a,_,h,(y?us(h,y+f):f)-h,!M&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?Hv:Ac),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=zv);else if(_ in a)jv.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Ou(_,u);continue}M||(_ in a?D.push(_,0,a[_]):D.push(_,1,c||t[_])),o.push(_)}}w&&fm(this)},render:function(t,e){if(e.tween._time||!qu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:li,aliases:Yn,getSetter:function(t,e,n){var r=Yn[e];return r&&r.indexOf(",")<0&&(e=r),e in pi&&e!==Ke&&(t._gsap.x||li(t,"x"))?n&&fh===n?e==="scale"?Wv:Gv:(fh=n||{})&&(e==="scale"?Xv:qv):t.style&&!Iu(t.style[e])?kv:~e.indexOf("-")?Vv:Gu(t,e)},core:{_removeProperty:Ir,_getMatrix:$u}};tn.utils.checkPrefix=Ss;tn.core.getStyleSaver=_m;(function(i,t,e,n){var r=Ye(i+","+t+","+e,function(s){pi[s]=1});Ye(t,function(s){dn.units[s]="deg",Mm[s]=1}),Yn[r[13]]=i+","+t,Ye(n,function(s){var o=s.split(":");Yn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){dn.units[i]="px"});tn.registerPlugin(Em);var be=tn.registerPlugin(Em)||tn;be.core.Tween;const mo=(i,t)=>{const e=i.__vccOpts||i;for(const[n,r]of t)e[n]=r;return e},ix={__name:"AppIntro",setup(i){const t=qn(),e=qn([]);let n;ws(()=>{n=be.timeline({delay:.2,repeat:1,repeatDelay:.2,onComplete:()=>{r()}}),n.fromTo(e.value,{scale:0,yPercent:50},{scale:1,yPercent:0,stagger:.06,duration:.8,ease:"elastic.out(1.1, 0.8)"}),n.to(e.value,{scale:0,stagger:.06,duration:.4,ease:"power2.in"})});function r(){be.to(t.value,{autoAlpha:0,duration:1,ease:"power2.out"})}return(s,o)=>(fn(),$n("div",{ref_key:"root",ref:t,class:"app-intro"},[(fn(),$n(ke,null,Au(5,a=>hn("div",{ref_for:!0,ref_key:"loops",ref:e,key:`intro-${a}`,class:"loop"})),64))],512))}},rx=mo(ix,[["__scopeId","data-v-acb1d92e"]]),Hr="0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ",sx=["data-char","textContent"],ox={__name:"UiGlitchText",props:{markup:{type:String,default:"span"},text:{type:String,default:"",required:!0}},setup(i,{expose:t}){const e=qn(null);ws(()=>{Array.from(e.value.children).forEach(s=>{s.style.setProperty("--char-1",`'${Hr[Math.floor(Math.random()*Hr.length)]}'`),s.style.setProperty("--char-2",`'${Hr[Math.floor(Math.random()*Hr.length)]}'`),s.style.setProperty("--char-3",`'${Hr[Math.floor(Math.random()*Hr.length)]}'`)})});function n(){e.value.classList.add("-active")}function r(){e.value.classList.remove("-active")}return t({show:n,hide:r}),(s,o)=>(fn(),Ru(_g(i.markup),{ref_key:"root",ref:e,class:"ui-glitchText","aria-label":i.text},{default:ka(()=>[(fn(!0),$n(ke,null,Au(i.text.split(""),(a,l)=>(fn(),$n("span",{key:a,"data-char":a,style:Fa({"--index":[2,4,1,0,3][l%5]}),textContent:wd(a)},null,12,sx))),128))]),_:1},8,["aria-label"]))}},Aa=mo(ox,[["__scopeId","data-v-aba71cf1"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="167",ax=0,xh=1,lx=2,Tm=1,bm=2,si=3,Yi=0,je=1,ci=2,ki=0,ds=1,Mh=2,Sh=3,yh=4,cx=5,vr=100,ux=101,fx=102,hx=103,dx=104,px=200,mx=201,_x=202,gx=203,Pc=204,Lc=205,vx=206,xx=207,Mx=208,Sx=209,yx=210,Ex=211,Tx=212,bx=213,Ax=214,wx=0,Cx=1,Rx=2,wa=3,Px=4,Lx=5,Dx=6,Ix=7,Am=0,Ux=1,Nx=2,Vi=0,Ox=1,Fx=2,Bx=3,zx=4,Hx=5,kx=6,Vx=7,wm=300,ys=301,Es=302,Dc=303,Ic=304,Za=306,Uc=1e3,Sr=1001,Nc=1002,bn=1003,Gx=1004,Io=1005,Nn=1006,bl=1007,yr=1008,mi=1009,Cm=1010,Rm=1011,fo=1012,ju=1013,Ur=1014,ui=1015,_o=1016,Zu=1017,Ju=1018,Ts=1020,Pm=35902,Lm=1021,Dm=1022,On=1023,Im=1024,Um=1025,ps=1026,bs=1027,Nm=1028,Qu=1029,Om=1030,tf=1031,ef=1033,ca=33776,ua=33777,fa=33778,ha=33779,Oc=35840,Fc=35841,Bc=35842,zc=35843,Hc=36196,kc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,$c=37813,Kc=37814,jc=37815,Zc=37816,Jc=37817,Qc=37818,tu=37819,eu=37820,nu=37821,da=36492,iu=36494,ru=36495,Fm=36283,su=36284,ou=36285,au=36286,Wx=3200,Xx=3201,Bm=0,qx=1,Ii="",Un="srgb",Ji="srgb-linear",nf="display-p3",Ja="display-p3-linear",Ca="linear",re="srgb",Ra="rec709",Pa="p3",kr=7680,Eh=519,Yx=512,$x=513,Kx=514,zm=515,jx=516,Zx=517,Jx=518,Qx=519,Th=35044,bh="300 es",fi=2e3,La=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,lu=180/Math.PI;function go(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function tM(i,t){return(i%t+t)%t}function wl(i,t,e){return(1-e)*i+e*t}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],p=r[3],m=r[6],y=r[1],M=r[4],E=r[7],C=r[2],A=r[5],w=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*p+a*M+l*A,s[6]=o*m+a*E+l*w,s[1]=c*_+u*y+f*C,s[4]=c*p+u*M+f*A,s[7]=c*m+u*E+f*w,s[2]=h*_+d*y+g*C,s[5]=h*p+d*M+g*A,s[8]=h*m+d*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new kt;function Hm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eM(){const i=Da("canvas");return i.style.display="block",i}const Ah={};function Js(i){i in Ah||(Ah[i]=!0,console.warn(i))}function nM(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const wh=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ch=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[Ji]:{transfer:Ca,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Un]:{transfer:re,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ja]:{transfer:Ca,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(wh)},[nf]:{transfer:re,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ch),fromReference:i=>i.applyMatrix3(wh).convertLinearToSRGB()}},iM=new Set([Ji,Ja]),Kt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!iM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Is[t].toReference,r=Is[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Is[i].primaries},getTransfer:function(i){return i===Ii?Ca:Is[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Is[t].luminanceCoefficients)}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vr;class rM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vr===void 0&&(Vr=Da("canvas")),Vr.width=t.width,Vr.height=t.height;const n=Vr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class km{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=go(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pl(r[o].image)):s.push(Pl(r[o]))}else s=Pl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Ze extends Cs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Sr,r=Sr,s=Nn,o=yr,a=On,l=mi,c=Ze.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=go(),this.name="",this.source=new km(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uc:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uc:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=wm;Ze.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,E=(d+1)/2,C=(m+1)/2,A=(u+h)/4,w=(f+_)/4,D=(g+p)/4;return M>E&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=w/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=D/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=D/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aM extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ze(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new km(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends aM{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vm extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,m*y);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const E=a*y;if(l=l*p+h*E,c=c*p+d*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new q,Rh=new vo;class xo{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),No.subVectors(this.max,Us),Gr.subVectors(t.a,Us),Wr.subVectors(t.b,Us),Xr.subVectors(t.c,Us),Ei.subVectors(Wr,Gr),Ti.subVectors(Xr,Wr),or.subVectors(Gr,Xr);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-or.z,or.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,or.z,0,-or.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-or.y,or.x,0];return!Dl(e,Gr,Wr,Xr,No)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,Gr,Wr,Xr,No))?!1:(Oo.crossVectors(Ei,Ti),e=[Oo.x,Oo.y,Oo.z],Dl(e,Gr,Wr,Xr,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new q,new q,new q,new q,new q,new q,new q,new q],Pn=new q,Uo=new xo,Gr=new q,Wr=new q,Xr=new q,Ei=new q,Ti=new q,or=new q,Us=new q,No=new q,Oo=new q,ar=new q;function Dl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ar.fromArray(i,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=t.dot(ar),c=e.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cM=new xo,Ns=new q,Il=new q;class rf{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cM.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ns,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Il)),this.expandByPoint(Ns.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new q,Ul=new q,Fo=new q,bi=new q,Nl=new q,Bo=new q,Ol=new q;class Gm{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ul.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Ul);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=bi.dot(this.direction),l=-bi.dot(Fo),c=bi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ul).addScaledVector(Fo,h),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,r,s){Nl.subVectors(e,t),Bo.subVectors(n,t),Ol.crossVectors(Nl,Bo);let o=this.direction.dot(Ol),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const l=a*this.direction.dot(Bo.crossVectors(bi,Bo));if(l<0)return null;const c=a*this.direction.dot(Nl.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Ol);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,p)}set(t,e,n,r,s,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/qr.setFromMatrixColumn(t,0).length(),s=1/qr.setFromMatrixColumn(t,1).length(),o=1/qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ai.crossVectors(n,rn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ai.crossVectors(n,rn)),Ai.normalize(),zo.crossVectors(rn,Ai),r[0]=Ai.x,r[4]=zo.x,r[8]=rn.x,r[1]=Ai.y,r[5]=zo.y,r[9]=rn.y,r[2]=Ai.z,r[6]=zo.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],M=n[7],E=n[11],C=n[15],A=r[0],w=r[4],D=r[8],x=r[12],S=r[1],L=r[5],N=r[9],F=r[13],Z=r[2],Q=r[6],W=r[10],K=r[14],k=r[3],ht=r[7],_t=r[11],gt=r[15];return s[0]=o*A+a*S+l*Z+c*k,s[4]=o*w+a*L+l*Q+c*ht,s[8]=o*D+a*N+l*W+c*_t,s[12]=o*x+a*F+l*K+c*gt,s[1]=u*A+f*S+h*Z+d*k,s[5]=u*w+f*L+h*Q+d*ht,s[9]=u*D+f*N+h*W+d*_t,s[13]=u*x+f*F+h*K+d*gt,s[2]=g*A+_*S+p*Z+m*k,s[6]=g*w+_*L+p*Q+m*ht,s[10]=g*D+_*N+p*W+m*_t,s[14]=g*x+_*F+p*K+m*gt,s[3]=y*A+M*S+E*Z+C*k,s[7]=y*w+M*L+E*Q+C*ht,s[11]=y*D+M*N+E*W+C*_t,s[15]=y*x+M*F+E*K+C*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-e*l*f+e*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,M=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,E=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,A=e*y+n*M+r*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(_*h*s-f*p*s-_*r*d+n*p*d+f*r*m-n*h*m)*w,t[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*w,t[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*w,t[4]=M*w,t[5]=(u*p*s-g*h*s+g*r*d-e*p*d-u*r*m+e*h*m)*w,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*m-e*l*m)*w,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*w,t[8]=E*w,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*m-e*f*m)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*d-e*a*d)*w,t[12]=C*w,t[13]=(u*_*r-g*f*r+g*n*h-e*_*h-u*n*p+e*f*p)*w,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*f*r-u*a*r+u*n*l-e*f*l-o*n*h+e*a*h)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,M=l*u,E=l*f,C=n.x,A=n.y,w=n.z;return r[0]=(1-(_+m))*C,r[1]=(d+E)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(d-E)*A,r[5]=(1-(h+m))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(g+M)*w,r[9]=(p-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ln.copy(this);const c=1/s,u=1/o,f=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=fi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let d,g;if(a===fi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===La)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(o-s),h=(e+t)*c,d=(n+r)*u;let g,_;if(a===fi)g=(o+s)*f,_=-2*f;else if(a===La)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qr=new q,Ln=new pe,uM=new q(0,0,0),fM=new q(1,1,1),Ai=new q,zo=new q,rn=new q,Ph=new pe,Lh=new vo;class Jn{constructor(t=0,e=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class sf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const Dh=new q,Yr=new vo,ni=new pe,Ho=new q,Os=new q,dM=new q,pM=new vo,Ih=new q(1,0,0),Uh=new q(0,1,0),Nh=new q(0,0,1),Oh={type:"added"},mM={type:"removed"},$r={type:"childadded",child:null},Fl={type:"childremoved",child:null};class Le extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new q,e=new Jn,n=new vo,r=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(t,e){return Yr.setFromAxisAngle(t,e),this.quaternion.premultiply(Yr),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Os,Ho,this.up):ni.lookAt(Ho,Os,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ni),this.quaternion.premultiply(Yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),$r.child=t,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mM),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Le.DEFAULT_UP=new q(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new q,ii=new q,Bl=new q,ri=new q,Kr=new q,jr=new q,Fh=new q,zl=new q,Hl=new q,kl=new q;class Xn{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Dn.subVectors(t,e),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Dn.subVectors(r,e),ii.subVectors(n,e),Bl.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(Bl),c=ii.dot(ii),u=ii.dot(Bl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(t,e,n,r){return Dn.subVectors(n,e),ii.subVectors(t,e),Dn.cross(ii).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,n),jr.subVectors(s,n),zl.subVectors(t,n);const l=Kr.dot(zl),c=jr.dot(zl);if(l<=0&&c<=0)return e.copy(n);Hl.subVectors(t,r);const u=Kr.dot(Hl),f=jr.dot(Hl);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Kr,o);kl.subVectors(t,s);const d=Kr.dot(kl),g=jr.dot(kl);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(jr,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Fh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(Fh,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(Kr,o).addScaledVector(jr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Kt.workingColorSpace){if(t=tM(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Vl(o,s,t+1/3),this.g=Vl(o,s,t),this.b=Vl(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=Wm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Rl(t.r),this.g=Rl(t.g),this.b=Rl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return Kt.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Xe(Ue.r*255,0,255))*65536+Math.round(Xe(Ue.g*255,0,255))*256+Math.round(Xe(Ue.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,r=Ue.g,s=Ue.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Un){Kt.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,r=Ue.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(ko);const n=wl(wi.h,ko.h,e),r=wl(wi.s,ko.s,e),s=wl(wi.l,ko.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new qt;qt.NAMES=Wm;let _M=0;class Mo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=go(),this.name="",this.type="Material",this.blending=ds,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class of extends Mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new q,Vo=new Vt;class jn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Js("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}}class Xm extends jn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qm extends jn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends jn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gM=0;const vn=new pe,Gl=new Le,Zr=new q,sn=new xo,Fs=new xo,Te=new q;class vi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hm(t)?qm:Xm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(sn.min,Fs.min),sn.expandByPoint(Te),Te.addVectors(sn.max,Fs.max),sn.expandByPoint(Te)):(sn.expandByPoint(Fs.min),sn.expandByPoint(Fs.max))}sn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Te.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(t,c),Te.add(Zr)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new q,l[D]=new q;const c=new q,u=new q,f=new q,h=new Vt,d=new Vt,g=new Vt,_=new q,p=new q;function m(D,x,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,S),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[x].add(_),a[S].add(_),l[D].add(p),l[x].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,x=y.length;D<x;++D){const S=y[D],L=S.start,N=S.count;for(let F=L,Z=L+N;F<Z;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new q,E=new q,C=new q,A=new q;function w(D){C.fromBufferAttribute(r,D),A.copy(C);const x=a[D];M.copy(x),M.sub(C.multiplyScalar(C.dot(x))).normalize(),E.crossVectors(A,x);const L=E.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,x=y.length;D<x;++D){const S=y[D],L=S.start,N=S.count;for(let F=L,Z=L+N;F<Z;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new pe,lr=new Gm,Go=new rf,zh=new q,Jr=new q,Qr=new q,ts=new q,Wl=new q,Wo=new q,Xo=new Vt,qo=new Vt,Yo=new Vt,Hh=new q,kh=new q,Vh=new q,$o=new q,Ko=new q;class An extends Le{constructor(t=new vi,e=new of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wl.fromBufferAttribute(f,t),o?Wo.addScaledVector(Wl,u):Wo.addScaledVector(Wl.sub(e),u))}e.add(Wo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(Go.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Go,zh)===null||lr.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Bh.copy(s).invert(),lr.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,C=M;E<C;E+=3){const A=a.getX(E),w=a.getX(E+1),D=a.getX(E+2);r=jo(this,m,t,n,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);r=jo(this,o,t,n,c,u,f,y,M,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,C=M;E<C;E+=3){const A=E,w=E+1,D=E+2;r=jo(this,m,t,n,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,M=p+1,E=p+2;r=jo(this,o,t,n,c,u,f,y,M,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function vM(i,t,e,n,r,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Yi,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:i}}function jo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Jr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,ts);const u=vM(i,t,e,n,Jr,Qr,ts,$o);if(u){r&&(Xo.fromBufferAttribute(r,a),qo.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),u.uv=Xn.getInterpolation($o,Jr,Qr,ts,Xo,qo,Yo,new Vt)),s&&(Xo.fromBufferAttribute(s,a),qo.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),u.uv1=Xn.getInterpolation($o,Jr,Qr,ts,Xo,qo,Yo,new Vt)),o&&(Hh.fromBufferAttribute(o,a),kh.fromBufferAttribute(o,l),Vh.fromBufferAttribute(o,c),u.normal=Xn.getInterpolation($o,Jr,Qr,ts,Hh,kh,Vh,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Xn.getNormal(Jr,Qr,ts,f.normal),u.face=f}return u}class So extends vi{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(f,2));function g(_,p,m,y,M,E,C,A,w,D,x){const S=E/w,L=C/D,N=E/2,F=C/2,Z=A/2,Q=w+1,W=D+1;let K=0,k=0;const ht=new q;for(let _t=0;_t<W;_t++){const gt=_t*L-F;for(let At=0;At<Q;At++){const Wt=At*S-N;ht[_]=Wt*y,ht[p]=gt*M,ht[m]=Z,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[p]=0,ht[m]=A>0?1:-1,u.push(ht.x,ht.y,ht.z),f.push(At/w),f.push(1-_t/D),K+=1}}for(let _t=0;_t<D;_t++)for(let gt=0;gt<w;gt++){const At=h+gt+Q*_t,Wt=h+gt+Q*(_t+1),tt=h+(gt+1)+Q*(_t+1),at=h+(gt+1)+Q*_t;l.push(At,Wt,at),l.push(Wt,tt,at),k+=6}a.addGroup(d,k,x),d+=k,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const r in n)t[r]=n[r]}return t}function xM(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ym(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const MM={clone:As,merge:He};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $m extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new q,Gh=new Vt,Wh=new Vt;class Mn extends $m{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Wh),e.subVectors(Wh,Gh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Al*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class EM extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(es,ns,t,e);r.layers=this.layers,this.add(r);const s=new Mn(es,ns,t,e);s.layers=this.layers,this.add(s);const o=new Mn(es,ns,t,e);o.layers=this.layers,this.add(o);const a=new Mn(es,ns,t,e);a.layers=this.layers,this.add(a);const l=new Mn(es,ns,t,e);l.layers=this.layers,this.add(l);const c=new Mn(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Km extends Ze{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TM extends Nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Km(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new So(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ki});s.uniforms.tEquirect.value=e;const o=new An(r,s),a=e.minFilter;return e.minFilter===yr&&(e.minFilter=Nn),new EM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Xl=new q,bM=new q,AM=new kt;class dr{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Xl.subVectors(n,e).cross(bM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||AM.getNormalMatrix(t),r=this.coplanarPoint(Xl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new rf,Zo=new q;class af{constructor(t=new dr,e=new dr,n=new dr,r=new dr,s=new dr,o=new dr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],M=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,p-d,E-m).normalize(),n[1].setComponents(l+s,h+c,p+d,E+m).normalize(),n[2].setComponents(l+o,h+u,p+g,E+y).normalize(),n[3].setComponents(l-o,h-u,p-g,E-y).normalize(),n[4].setComponents(l-a,h-f,p-_,E-M).normalize(),e===fi)n[5].setComponents(l+a,h+f,p+_,E+M).normalize();else if(e===La)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zo.x=r.normal.x>0?t.max.x:t.min.x,Zo.y=r.normal.y>0?t.max.y:t.min.y,Zo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function wM(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class yo extends vi{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let M=0;M<c;M++){const E=M*f-s;g.push(E,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const M=y+c*m,E=y+c*(m+1),C=y+1+c*(m+1),A=y+1+c*m;d.push(M,E,A),d.push(E,C,A)}this.setIndex(d),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rS="gl_FragColor = linearToOutputTexel( gl_FragColor );",sS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ny=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$y=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:CM,alphahash_pars_fragment:RM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:IM,aomap_fragment:UM,aomap_pars_fragment:NM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:HM,iridescence_fragment:kM,bumpmap_pars_fragment:VM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:$M,color_pars_vertex:KM,color_vertex:jM,common:ZM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:QM,displacementmap_pars_vertex:tS,displacementmap_vertex:eS,emissivemap_fragment:nS,emissivemap_pars_fragment:iS,colorspace_fragment:rS,colorspace_pars_fragment:sS,envmap_fragment:oS,envmap_common_pars_fragment:aS,envmap_pars_fragment:lS,envmap_pars_vertex:cS,envmap_physical_pars_fragment:MS,envmap_vertex:uS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:dS,fog_pars_fragment:pS,gradientmap_pars_fragment:mS,lightmap_pars_fragment:_S,lights_lambert_fragment:gS,lights_lambert_pars_fragment:vS,lights_pars_begin:xS,lights_toon_fragment:SS,lights_toon_pars_fragment:yS,lights_phong_fragment:ES,lights_phong_pars_fragment:TS,lights_physical_fragment:bS,lights_physical_pars_fragment:AS,lights_fragment_begin:wS,lights_fragment_maps:CS,lights_fragment_end:RS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:IS,map_fragment:US,map_pars_fragment:NS,map_particle_fragment:OS,map_particle_pars_fragment:FS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:zS,morphinstance_vertex:HS,morphcolor_vertex:kS,morphnormal_vertex:VS,morphtarget_pars_vertex:GS,morphtarget_vertex:WS,normal_fragment_begin:XS,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:$S,normal_vertex:KS,normalmap_pars_fragment:jS,clearcoat_normal_fragment_begin:ZS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:ty,opaque_fragment:ey,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:ry,dithering_fragment:sy,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:hy,skinbase_vertex:dy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:_y,specularmap_fragment:gy,specularmap_pars_fragment:vy,tonemapping_fragment:xy,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:yy,uv_pars_fragment:Ey,uv_pars_vertex:Ty,uv_vertex:by,worldpos_vertex:Ay,background_vert:wy,background_frag:Cy,backgroundCube_vert:Ry,backgroundCube_frag:Py,cube_vert:Ly,cube_frag:Dy,depth_vert:Iy,depth_frag:Uy,distanceRGBA_vert:Ny,distanceRGBA_frag:Oy,equirect_vert:Fy,equirect_frag:By,linedashed_vert:zy,linedashed_frag:Hy,meshbasic_vert:ky,meshbasic_frag:Vy,meshlambert_vert:Gy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:qy,meshnormal_vert:Yy,meshnormal_frag:$y,meshphong_vert:Ky,meshphong_frag:jy,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:Qy,meshtoon_frag:tE,points_vert:eE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:oE},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Vn={basic:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([mt.points,mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([mt.common,mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([mt.sprite,mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([mt.common,mt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Vn.physical={uniforms:He([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Jo={r:0,b:0,g:0},ur=new Jn,aE=new pe;function lE(i,t,e,n,r,s,o){const a=new qt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const E=g(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===Za)?(u===void 0&&(u=new An(new So(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:As(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ur.copy(M.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(ur)),u.material.toneMapped=Kt.getTransfer(E.colorSpace)!==re,(f!==E||h!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new An(new yo(2,2),new _i({name:"BackgroundMaterial",uniforms:As(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Jo,Ym(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function cE(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(S,L,N,F,Z){let Q=!1;const W=f(F,N,L);s!==W&&(s=W,c(s.object)),Q=d(S,F,N,Z),Q&&g(S,F,N,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(S,L,N,F),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,L,N){const F=N.wireframe===!0;let Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let Q=Z[L.id];Q===void 0&&(Q={},Z[L.id]=Q);let W=Q[F];return W===void 0&&(W=h(l()),Q[F]=W),W}function h(S){const L=[],N=[],F=[];for(let Z=0;Z<e;Z++)L[Z]=0,N[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,L,N,F){const Z=s.attributes,Q=L.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){const _t=Z[k];let gt=Q[k];if(gt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),_t===void 0||_t.attribute!==gt||gt&&_t.data!==gt.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(S,L,N,F){const Z={},Q=L.attributes;let W=0;const K=N.getAttributes();for(const k in K)if(K[k].location>=0){let _t=Q[k];_t===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));const gt={};gt.attribute=_t,_t&&_t.data&&(gt.data=_t.data),Z[k]=gt,W++}s.attributes=Z,s.attributesNum=W,s.index=F}function _(){const S=s.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function p(S){m(S,0)}function m(S,L){const N=s.newAttributes,F=s.enabledAttributes,Z=s.attributeDivisors;N[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),Z[S]!==L&&(i.vertexAttribDivisor(S,L),Z[S]=L)}function y(){const S=s.newAttributes,L=s.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==S[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function M(S,L,N,F,Z,Q,W){W===!0?i.vertexAttribIPointer(S,L,N,Z,Q):i.vertexAttribPointer(S,L,N,F,Z,Q)}function E(S,L,N,F){_();const Z=F.attributes,Q=N.getAttributes(),W=L.defaultAttributeValues;for(const K in Q){const k=Q[K];if(k.location>=0){let ht=Z[K];if(ht===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){const _t=ht.normalized,gt=ht.itemSize,At=t.get(ht);if(At===void 0)continue;const Wt=At.buffer,tt=At.type,at=At.bytesPerElement,yt=tt===i.INT||tt===i.UNSIGNED_INT||ht.gpuType===ju;if(ht.isInterleavedBufferAttribute){const xt=ht.data,Nt=xt.stride,Bt=ht.offset;if(xt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<k.locationSize;Ot++)m(k.location+Ot,xt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ot=0;Ot<k.locationSize;Ot++)p(k.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ot=0;Ot<k.locationSize;Ot++)M(k.location+Ot,gt/k.locationSize,tt,_t,Nt*at,(Bt+gt/k.locationSize*Ot)*at,yt)}else{if(ht.isInstancedBufferAttribute){for(let xt=0;xt<k.locationSize;xt++)m(k.location+xt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let xt=0;xt<k.locationSize;xt++)p(k.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let xt=0;xt<k.locationSize;xt++)M(k.location+xt,gt/k.locationSize,tt,_t,gt*at,gt/k.locationSize*xt*at,yt)}}else if(W!==void 0){const _t=W[K];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(k.location,_t);break;case 3:i.vertexAttrib3fv(k.location,_t);break;case 4:i.vertexAttrib4fv(k.location,_t);break;default:i.vertexAttrib1fv(k.location,_t)}}}}y()}function C(){D();for(const S in n){const L=n[S];for(const N in L){const F=L[N];for(const Z in F)u(F[Z].object),delete F[Z];delete L[N]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const N in L){const F=L[N];for(const Z in F)u(F[Z].object),delete F[Z];delete L[N]}delete n[S.id]}function w(S){for(const L in n){const N=n[L];if(N[S.id]===void 0)continue;const F=N[S.id];for(const Z in F)u(F[Z].object),delete F[Z];delete N[S.id]}}function D(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function uE(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fE(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!w)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:E,maxSamples:C}}function hE(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new dr,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,M=y*4;let E=m.clippingState||null;l.value=E,E=u(g,h,M,d);for(let C=0;C!==M;++C)E[C]=e[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=d;M!==_;++M,E+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function dE(i){let t=new WeakMap;function e(o,a){return a===Dc?o.mapping=ys:a===Ic&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Ic)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TM(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zm extends $m{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,Xh=[.125,.215,.35,.446,.526,.582],xr=20,ql=new Zm,qh=new qt;let Yl=null,$l=0,Kl=0,jl=!1;const pr=(1+Math.sqrt(5))/2,is=1/pr,Yh=[new q(-pr,is,0),new q(pr,is,0),new q(-is,0,pr),new q(is,0,pr),new q(0,pr,-is),new q(0,pr,is),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class $h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,$l,Kl),this._renderer.xr.enabled=jl,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:_o,format:On,colorSpace:Ji,depthBuffer:!1},r=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pE(s)),this._blurMaterial=mE(s,t,e)}return r}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,ql)}_sceneToCubeUV(t,e,n,r){const a=new Mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(qh),u.toneMapping=Vi,u.autoClear=!1;const d=new of({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new An(new So,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(qh),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Qo(r,y*M,m>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ys||t.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ql)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yh[(r-s-1)%Yh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const m=[];let y=0;for(let w=0;w<xr;++w){const D=w/_,x=Math.exp(-D*D/2);m.push(x),w===0?y+=x:w<p&&(y+=2*x)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const E=this._sizeLods[r],C=3*E*(r>M-os?r-M+os:0),A=4*(this._cubeSize-E);Qo(e,C,A,3*E,2*E),l.setRenderTarget(e),l.render(f,ql)}}function pE(i){const t=[],e=[],n=[];let r=i;const s=i-os+1+Xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-os?l=Xh[o-i+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),M=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,D=A>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];y.set(x,_*g*A),M.set(h,p*g*A);const S=[A,A,A,A,A,A];E.set(S,m*g*A)}const C=new vi;C.setAttribute("position",new jn(y,_)),C.setAttribute("uv",new jn(M,p)),C.setAttribute("faceIndex",new jn(E,m)),t.push(C),r>os&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){const n=new Nr(i,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function mE(i,t,e){const n=new Float32Array(xr),r=new q(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function jh(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Zh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _E(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dc||l===Ic,u=l===ys||l===Es;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new $h(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new $h(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gE(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vE(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,E=y.length;M<E;M+=3){const C=y[M+0],A=y[M+1],w=y[M+2];h.push(C,A,A,w,w,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,E=y.length/3-1;M<E;M+=3){const C=M+0,A=M+1,w=M+2;h.push(C,A,A,w,w,C)}}else return;const p=new(Hm(h)?qm:Xm)(h,1);p.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function xE(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ME(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function SE(i,t,e){const n=new WeakMap,r=new Se;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*A*4*f),D=new Vm(w,C,A,f);D.type=ui,D.needsUpdate=!0;const x=E*4;for(let L=0;L<f;L++){const N=m[L],F=y[L],Z=M[L],Q=C*A*4*L;for(let W=0;W<N.count;W++){const K=W*x;g===!0&&(r.fromBufferAttribute(N,W),w[Q+K+0]=r.x,w[Q+K+1]=r.y,w[Q+K+2]=r.z,w[Q+K+3]=0),_===!0&&(r.fromBufferAttribute(F,W),w[Q+K+4]=r.x,w[Q+K+5]=r.y,w[Q+K+6]=r.z,w[Q+K+7]=0),p===!0&&(r.fromBufferAttribute(Z,W),w[Q+K+8]=r.x,w[Q+K+9]=r.y,w[Q+K+10]=r.z,w[Q+K+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Vt(C,A)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function yE(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Jm extends Ze{constructor(t,e,n,r,s,o,a,l,c,u=ps){if(u!==ps&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ps&&(n=Ur),n===void 0&&u===bs&&(n=Ts),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qm=new Ze,Jh=new Jm(1,1),t_=new Vm,e_=new lM,n_=new Km,Qh=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function EE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function TE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function bE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function AE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function wE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),Ee(e,n)}}function CE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),Ee(e,n)}}function RE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),Ee(e,n)}}function PE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function LE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function DE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function IE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function UE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function NE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function OE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function FE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function BE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=zm,s=Jh):s=Qm,e.setTexture2D(t||s,r)}function zE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||e_,r)}function HE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||n_,r)}function kE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||t_,r)}function VE(i){switch(i){case 5126:return EE;case 35664:return TE;case 35665:return bE;case 35666:return AE;case 35674:return wE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return NE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return kE}}function GE(i,t){i.uniform1fv(this.addr,t)}function WE(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function XE(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function qE(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function YE(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $E(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function KE(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jE(i,t){i.uniform1iv(this.addr,t)}function ZE(i,t){i.uniform2iv(this.addr,t)}function JE(i,t){i.uniform3iv(this.addr,t)}function QE(i,t){i.uniform4iv(this.addr,t)}function tT(i,t){i.uniform1uiv(this.addr,t)}function eT(i,t){i.uniform2uiv(this.addr,t)}function nT(i,t){i.uniform3uiv(this.addr,t)}function iT(i,t){i.uniform4uiv(this.addr,t)}function rT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Qm,s[o])}function sT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||e_,s[o])}function oT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||n_,s[o])}function aT(i,t,e){const n=this.cache,r=t.length,s=Qa(e,r);ye(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||t_,s[o])}function lT(i){switch(i){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return qE;case 35674:return YE;case 35675:return $E;case 35676:return KE;case 5124:case 35670:return jE;case 35667:case 35671:return ZE;case 35668:case 35672:return JE;case 35669:case 35673:return QE;case 5125:return tT;case 36294:return eT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class cT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=VE(e.type)}}class uT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lT(e.type)}}class fT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function hT(i,t,e){const n=i.name,r=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),o=Zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rd(e,c===void 0?new cT(a,i,t):new uT(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new fT(a),rd(e,f)),e=f}}}class pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);hT(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function sd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dT=37297;let pT=0;function mT(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function _T(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===Pa&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ji:case Ja:return[n,"LinearTransferOETF"];case Un:case nf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function od(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+mT(i.getShaderSource(t),o)}else return r}function gT(i,t){const e=_T(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vT(i,t){let e;switch(t){case Ox:e="Linear";break;case Fx:e="Reinhard";break;case Bx:e="OptimizedCineon";break;case zx:e="ACESFilmic";break;case kx:e="AgX";break;case Vx:e="Neutral";break;case Hx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new q;function xT(){Kt.getLuminanceCoefficients(ta);const i=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function ST(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yT(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function ad(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(ET,bT)}const TT=new Map;function bT(i,t){let e=Ht[t];if(e===void 0){const n=TT.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cu(e)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(AT,wT)}function wT(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CT(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function RT(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Es:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PT(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function LT(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Am:t="ENVMAP_BLENDING_MULTIPLY";break;case Ux:t="ENVMAP_BLENDING_MIX";break;case Nx:t="ENVMAP_BLENDING_ADD";break}return t}function DT(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function IT(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=CT(e),c=RT(e),u=PT(e),f=LT(e),h=DT(e),d=MT(e),g=ST(s),_=r.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Vi?vT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,gT("linearToOutputTexel",e.outputColorSpace),xT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=cu(o),o=ad(o,e),o=ld(o,e),a=cu(a),a=ad(a,e),a=ld(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+p+o,E=y+m+a,C=sd(r,r.VERTEX_SHADER,M),A=sd(r,r.FRAGMENT_SHADER,E);r.attachShader(_,C),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(A).trim();let Q=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,A);else{const K=od(r,C,"vertex"),k=od(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+K+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||Z==="")&&(W=!1);W&&(L.diagnostics={runnable:Q,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(C),r.deleteShader(A),D=new pa(r,_),x=yT(r,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,dT)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let UT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new OT(t),e.set(t,n)),n}}class OT{constructor(t){this.id=UT++,this.code=t,this.usedTimes=0}}function FT(i,t,e,n,r,s,o){const a=new sf,l=new NT,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,L,N,F){const Z=N.fog,Q=F.geometry,W=x.isMeshStandardMaterial?N.environment:null,K=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),k=K&&K.mapping===Za?K.image.height:null,ht=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=_t!==void 0?_t.length:0;let At=0;Q.morphAttributes.position!==void 0&&(At=1),Q.morphAttributes.normal!==void 0&&(At=2),Q.morphAttributes.color!==void 0&&(At=3);let Wt,tt,at,yt;if(ht){const Zt=Vn[ht];Wt=Zt.vertexShader,tt=Zt.fragmentShader}else Wt=x.vertexShader,tt=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),yt=l.getFragmentShaderID(x);const xt=i.getRenderTarget(),Nt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,Ot=!!x.map,ie=!!x.matcap,U=!!K,R=!!x.aoMap,I=!!x.lightMap,G=!!x.bumpMap,X=!!x.normalMap,et=!!x.displacementMap,J=!!x.emissiveMap,nt=!!x.metalnessMap,b=!!x.roughnessMap,v=x.anisotropy>0,P=x.clearcoat>0,H=x.dispersion>0,Y=x.iridescence>0,V=x.sheen>0,lt=x.transmission>0,it=v&&!!x.anisotropyMap,ct=P&&!!x.clearcoatMap,vt=P&&!!x.clearcoatNormalMap,ot=P&&!!x.clearcoatRoughnessMap,pt=Y&&!!x.iridescenceMap,zt=Y&&!!x.iridescenceThicknessMap,Rt=V&&!!x.sheenColorMap,Mt=V&&!!x.sheenRoughnessMap,It=!!x.specularMap,wt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,O=lt&&!!x.transmissionMap,ut=lt&&!!x.thicknessMap,rt=!!x.gradientMap,st=!!x.alphaMap,dt=x.alphaTest>0,Lt=!!x.alphaHash,Yt=!!x.extensions;let ge=Vi;x.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ce={shaderID:ht,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:tt,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:ie,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:I,bumpMap:G,normalMap:X,displacementMap:h&&et,emissiveMap:J,normalMapObjectSpace:X&&x.normalMapType===qx,normalMapTangentSpace:X&&x.normalMapType===Bm,metalnessMap:nt,roughnessMap:b,anisotropy:v,anisotropyMap:it,clearcoat:P,clearcoatMap:ct,clearcoatNormalMap:vt,clearcoatRoughnessMap:ot,dispersion:H,iridescence:Y,iridescenceMap:pt,iridescenceThicknessMap:zt,sheen:V,sheenColorMap:Rt,sheenRoughnessMap:Mt,specularMap:It,specularColorMap:wt,specularIntensityMap:Xt,transmission:lt,transmissionMap:O,thicknessMap:ut,gradientMap:rt,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:dt,alphaHash:Lt,combine:x.combine,mapUv:Ot&&_(x.map.channel),aoMapUv:R&&_(x.aoMap.channel),lightMapUv:I&&_(x.lightMap.channel),bumpMapUv:G&&_(x.bumpMap.channel),normalMapUv:X&&_(x.normalMap.channel),displacementMapUv:et&&_(x.displacementMap.channel),emissiveMapUv:J&&_(x.emissiveMap.channel),metalnessMapUv:nt&&_(x.metalnessMap.channel),roughnessMapUv:b&&_(x.roughnessMap.channel),anisotropyMapUv:it&&_(x.anisotropyMap.channel),clearcoatMapUv:ct&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(x.sheenRoughnessMap.channel),specularMapUv:It&&_(x.specularMap.channel),specularColorMapUv:wt&&_(x.specularColorMap.channel),specularIntensityMapUv:Xt&&_(x.specularIntensityMap.channel),transmissionMapUv:O&&_(x.transmissionMap.channel),thicknessMapUv:ut&&_(x.thicknessMap.channel),alphaMapUv:st&&_(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(X||v),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(Ot||st),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:At,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Yt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&x.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),x.push(a.mask)}function E(x){const S=g[x.type];let L;if(S){const N=Vn[S];L=MM.clone(N.uniforms)}else L=x.uniforms;return L}function C(x,S){let L;for(let N=0,F=u.length;N<F;N++){const Z=u[N];if(Z.cacheKey===S){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new IT(i,S,x,s),u.push(L)),L}function A(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function w(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:D}}function BT(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function zT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||zT),n.length>1&&n.sort(h||fd),r.length>1&&r.sort(h||fd)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function HT(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hd,i.set(n,[o])):r>=s.length?(o=new hd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new qt};break;case"SpotLight":e={position:new q,direction:new q,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function VT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let GT=0;function WT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function XT(i){const t=new kT,e=VT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const r=new q,s=new pe,o=new pe;function a(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,M=0,E=0,C=0,A=0,w=0;c.sort(WT);for(let x=0,S=c.length;x<S;x++){const L=c[x],N=L.color,F=L.intensity,Z=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*F,f+=N.g*F,h+=N.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],F);w++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(F),W.distance=Z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const K=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=Q,E++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(N).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,k=e.get(L);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==E||D.numSpotMaps!==C||D.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=E,D.numSpotMaps=C,D.numLightProbes=w,n.version=GT++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(M.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function dd(i){const t=new XT(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qT(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new dd(i),t.set(r,[a])):s>=o.length?(a=new dd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class YT extends Mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $T extends Mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZT(i,t,e){let n=new af;const r=new Vt,s=new Vt,o=new Se,a=new YT({depthPacking:Xx}),l=new $T,c={},u=e.maxTextureSize,f={[Yi]:je,[je]:Yi,[ci]:ci},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:KT,fragmentShader:jT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm;let m=this.type;this.render=function(A,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ki),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=m!==si&&this.type===si,Z=m===si&&this.type!==si;for(let Q=0,W=A.length;Q<W;Q++){const K=A[Q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ht=k.getFrameExtents();if(r.multiply(ht),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ht.x),r.x=s.x*ht.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ht.y),r.y=s.y*ht.y,k.mapSize.y=s.y)),k.map===null||F===!0||Z===!0){const gt=this.type!==si?{minFilter:bn,magFilter:bn}:{};k.map!==null&&k.map.dispose(),k.map=new Nr(r.x,r.y,gt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const _t=k.getViewportCount();for(let gt=0;gt<_t;gt++){const At=k.getViewport(gt);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),N.viewport(o),k.updateMatrices(K,gt),n=k.getFrustum(),E(w,D,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===si&&y(k,D),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(x,S,L)};function y(A,w){const D=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,D,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,D,d,_,null)}function M(A,w,D,x){let S=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,F=w.uuid;let Z=c[N];Z===void 0&&(Z={},c[N]=Z);let Q=Z[F];Q===void 0&&(Q=S.clone(),Z[F]=Q,w.addEventListener("dispose",C)),S=Q}if(S.visible=w.visible,S.wireframe=w.wireframe,x===si?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=D}return S}function E(A,w,D,x,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===si)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=t.update(A),Z=A.material;if(Array.isArray(Z)){const Q=F.groups;for(let W=0,K=Q.length;W<K;W++){const k=Q[W],ht=Z[k.materialIndex];if(ht&&ht.visible){const _t=M(A,ht,x,S);A.onBeforeShadow(i,A,w,D,F,_t,k),i.renderBufferDirect(D,null,F,_t,A,k),A.onAfterShadow(i,A,w,D,F,_t,k)}}}else if(Z.visible){const Q=M(A,Z,x,S);A.onBeforeShadow(i,A,w,D,F,Q,null),i.renderBufferDirect(D,null,F,Q,A,null),A.onAfterShadow(i,A,w,D,F,Q,null)}}const N=A.children;for(let F=0,Z=N.length;F<Z;F++)E(N[F],w,D,x,S)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const x=c[D],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function JT(i){function t(){let O=!1;const ut=new Se;let rt=null;const st=new Se(0,0,0,0);return{setMask:function(dt){rt!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),rt=dt)},setLocked:function(dt){O=dt},setClear:function(dt,Lt,Yt,ge,Ce){Ce===!0&&(dt*=ge,Lt*=ge,Yt*=ge),ut.set(dt,Lt,Yt,ge),st.equals(ut)===!1&&(i.clearColor(dt,Lt,Yt,ge),st.copy(ut))},reset:function(){O=!1,rt=null,st.set(-1,0,0,0)}}}function e(){let O=!1,ut=null,rt=null,st=null;return{setTest:function(dt){dt?yt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(dt){ut!==dt&&!O&&(i.depthMask(dt),ut=dt)},setFunc:function(dt){if(rt!==dt){switch(dt){case wx:i.depthFunc(i.NEVER);break;case Cx:i.depthFunc(i.ALWAYS);break;case Rx:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case Px:i.depthFunc(i.EQUAL);break;case Lx:i.depthFunc(i.GEQUAL);break;case Dx:i.depthFunc(i.GREATER);break;case Ix:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=dt}},setLocked:function(dt){O=dt},setClear:function(dt){st!==dt&&(i.clearDepth(dt),st=dt)},reset:function(){O=!1,ut=null,rt=null,st=null}}}function n(){let O=!1,ut=null,rt=null,st=null,dt=null,Lt=null,Yt=null,ge=null,Ce=null;return{setTest:function(Zt){O||(Zt?yt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Zt){ut!==Zt&&!O&&(i.stencilMask(Zt),ut=Zt)},setFunc:function(Zt,Qn,Bn){(rt!==Zt||st!==Qn||dt!==Bn)&&(i.stencilFunc(Zt,Qn,Bn),rt=Zt,st=Qn,dt=Bn)},setOp:function(Zt,Qn,Bn){(Lt!==Zt||Yt!==Qn||ge!==Bn)&&(i.stencilOp(Zt,Qn,Bn),Lt=Zt,Yt=Qn,ge=Bn)},setLocked:function(Zt){O=Zt},setClear:function(Zt){Ce!==Zt&&(i.clearStencil(Zt),Ce=Zt)},reset:function(){O=!1,ut=null,rt=null,st=null,dt=null,Lt=null,Yt=null,ge=null,Ce=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,M=null,E=null,C=null,A=new qt(0,0,0),w=0,D=!1,x=null,S=null,L=null,N=null,F=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=W>=2);let k=null,ht={};const _t=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),At=new Se().fromArray(_t),Wt=new Se().fromArray(gt);function tt(O,ut,rt,st){const dt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(O,Lt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<rt;Yt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ut+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Lt}const at={};at[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),s.setFunc(wa),G(!1),X(xh),yt(i.CULL_FACE),R(ki);function yt(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function xt(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Nt(O,ut){return u[O]!==ut?(i.bindFramebuffer(O,ut),u[O]=ut,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Bt(O,ut){let rt=h,st=!1;if(O){rt=f.get(ut),rt===void 0&&(rt=[],f.set(ut,rt));const dt=O.textures;if(rt.length!==dt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,Yt=dt.length;Lt<Yt;Lt++)rt[Lt]=i.COLOR_ATTACHMENT0+Lt;rt.length=dt.length,st=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,st=!0);st&&i.drawBuffers(rt)}function Ot(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const ie={[vr]:i.FUNC_ADD,[ux]:i.FUNC_SUBTRACT,[fx]:i.FUNC_REVERSE_SUBTRACT};ie[hx]=i.MIN,ie[dx]=i.MAX;const U={[px]:i.ZERO,[mx]:i.ONE,[_x]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[yx]:i.SRC_ALPHA_SATURATE,[Mx]:i.DST_COLOR,[vx]:i.DST_ALPHA,[gx]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Sx]:i.ONE_MINUS_DST_COLOR,[xx]:i.ONE_MINUS_DST_ALPHA,[Ex]:i.CONSTANT_COLOR,[Tx]:i.ONE_MINUS_CONSTANT_COLOR,[bx]:i.CONSTANT_ALPHA,[Ax]:i.ONE_MINUS_CONSTANT_ALPHA};function R(O,ut,rt,st,dt,Lt,Yt,ge,Ce,Zt){if(O===ki){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),O!==cx){if(O!==_||Zt!==D){if((p!==vr||M!==vr)&&(i.blendEquation(i.FUNC_ADD),p=vr,M=vr),Zt)switch(O){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mh:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,E=null,C=null,A.set(0,0,0),w=0,_=O,D=Zt}return}dt=dt||ut,Lt=Lt||rt,Yt=Yt||st,(ut!==p||dt!==M)&&(i.blendEquationSeparate(ie[ut],ie[dt]),p=ut,M=dt),(rt!==m||st!==y||Lt!==E||Yt!==C)&&(i.blendFuncSeparate(U[rt],U[st],U[Lt],U[Yt]),m=rt,y=st,E=Lt,C=Yt),(ge.equals(A)===!1||Ce!==w)&&(i.blendColor(ge.r,ge.g,ge.b,Ce),A.copy(ge),w=Ce),_=O,D=!1}function I(O,ut){O.side===ci?xt(i.CULL_FACE):yt(i.CULL_FACE);let rt=O.side===je;ut&&(rt=!rt),G(rt),O.blending===ds&&O.transparent===!1?R(ki):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const st=O.stencilWrite;o.setTest(st),st&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),J(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function X(O){O!==ax?(yt(i.CULL_FACE),O!==S&&(O===xh?i.cullFace(i.BACK):O===lx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),S=O}function et(O){O!==L&&(Q&&i.lineWidth(O),L=O)}function J(O,ut,rt){O?(yt(i.POLYGON_OFFSET_FILL),(N!==ut||F!==rt)&&(i.polygonOffset(ut,rt),N=ut,F=rt)):xt(i.POLYGON_OFFSET_FILL)}function nt(O){O?yt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function b(O){O===void 0&&(O=i.TEXTURE0+Z-1),k!==O&&(i.activeTexture(O),k=O)}function v(O,ut,rt){rt===void 0&&(k===null?rt=i.TEXTURE0+Z-1:rt=k);let st=ht[rt];st===void 0&&(st={type:void 0,texture:void 0},ht[rt]=st),(st.type!==O||st.texture!==ut)&&(k!==rt&&(i.activeTexture(rt),k=rt),i.bindTexture(O,ut||at[O]),st.type=O,st.texture=ut)}function P(){const O=ht[k];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(O){At.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),At.copy(O))}function Mt(O){Wt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Wt.copy(O))}function It(O,ut){let rt=l.get(ut);rt===void 0&&(rt=new WeakMap,l.set(ut,rt));let st=rt.get(O);st===void 0&&(st=i.getUniformBlockIndex(ut,O.name),rt.set(O,st))}function wt(O,ut){const st=l.get(ut).get(O);a.get(ut)!==st&&(i.uniformBlockBinding(ut,st,O.__bindingPointIndex),a.set(ut,st))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,ht={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,M=null,E=null,C=null,A=new qt(0,0,0),w=0,D=!1,x=null,S=null,L=null,N=null,F=null,At.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:yt,disable:xt,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:Ot,setBlending:R,setMaterial:I,setFlipSided:G,setCullFace:X,setLineWidth:et,setPolygonOffset:J,setScissorTest:nt,activeTexture:b,bindTexture:v,unbindTexture:P,compressedTexImage2D:H,compressedTexImage3D:Y,texImage2D:pt,texImage3D:zt,updateUBOMapping:It,uniformBlockBinding:wt,texStorage2D:vt,texStorage3D:ot,texSubImage2D:V,texSubImage3D:lt,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:Rt,viewport:Mt,reset:Xt}}function pd(i,t,e,n){const r=QT(n);switch(e){case Lm:return i*t;case Im:return i*t;case Um:return i*t*2;case Nm:return i*t/r.components*r.byteLength;case Qu:return i*t/r.components*r.byteLength;case Om:return i*t*2/r.components*r.byteLength;case tf:return i*t*2/r.components*r.byteLength;case Dm:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case ef:return i*t*4/r.components*r.byteLength;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fc:case zc:return Math.max(i,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(i,8)*Math.max(t,8)/2;case Hc:case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case da:case iu:case ru:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fm:case su:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ou:case au:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function QT(i){switch(i){case mi:case Cm:return{byteLength:1,components:1};case fo:case Rm:case _o:return{byteLength:2,components:1};case Zu:case Ju:return{byteLength:2,components:4};case Ur:case ju:case ui:return{byteLength:4,components:1};case Pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tb(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Da("canvas")}function _(b,v,P){let H=1;const Y=nt(b);if((Y.width>P||Y.height>P)&&(H=P/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(H*Y.width),lt=Math.floor(H*Y.height);f===void 0&&(f=g(V,lt));const it=v?g(V,lt):f;return it.width=V,it.height=lt,it.getContext("2d").drawImage(b,0,0,V,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+V+"x"+lt+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==bn&&b.minFilter!==Nn}function m(b){i.generateMipmap(b)}function y(b,v,P,H,Y=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=v;if(v===i.RED&&(P===i.FLOAT&&(V=i.R32F),P===i.HALF_FLOAT&&(V=i.R16F),P===i.UNSIGNED_BYTE&&(V=i.R8)),v===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.R8UI),P===i.UNSIGNED_SHORT&&(V=i.R16UI),P===i.UNSIGNED_INT&&(V=i.R32UI),P===i.BYTE&&(V=i.R8I),P===i.SHORT&&(V=i.R16I),P===i.INT&&(V=i.R32I)),v===i.RG&&(P===i.FLOAT&&(V=i.RG32F),P===i.HALF_FLOAT&&(V=i.RG16F),P===i.UNSIGNED_BYTE&&(V=i.RG8)),v===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RG8UI),P===i.UNSIGNED_SHORT&&(V=i.RG16UI),P===i.UNSIGNED_INT&&(V=i.RG32UI),P===i.BYTE&&(V=i.RG8I),P===i.SHORT&&(V=i.RG16I),P===i.INT&&(V=i.RG32I)),v===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),v===i.RGBA){const lt=Y?Ca:Kt.getTransfer(H);P===i.FLOAT&&(V=i.RGBA32F),P===i.HALF_FLOAT&&(V=i.RGBA16F),P===i.UNSIGNED_BYTE&&(V=lt===re?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(b,v){let P;return b?v===null||v===Ur||v===Ts?P=i.DEPTH24_STENCIL8:v===ui?P=i.DEPTH32F_STENCIL8:v===fo&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ur||v===Ts?P=i.DEPTH_COMPONENT24:v===ui?P=i.DEPTH_COMPONENT32F:v===fo&&(P=i.DEPTH_COMPONENT16),P}function E(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==bn&&b.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&u.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),x(v)}function w(b){const v=n.get(b);if(v.__webglInit===void 0)return;const P=b.source,H=h.get(P);if(H){const Y=H[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(b),Object.keys(H).length===0&&h.delete(P)}n.remove(b)}function D(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const P=b.source,H=h.get(P);delete H[v.__cacheKey],o.memory.textures--}function x(b){const v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let Y=0;Y<v.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const P=b.textures;for(let H=0,Y=P.length;H<Y;H++){const V=n.get(P[H]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(P[H])}n.remove(b)}let S=0;function L(){S=0}function N(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function F(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const P=n.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(P,b,v);return}}e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+v)}function Q(b,v){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Wt(P,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+v)}function W(b,v){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Wt(P,b,v);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+v)}function K(b,v){const P=n.get(b);if(b.version>0&&P.__version!==b.version){tt(P,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+v)}const k={[Uc]:i.REPEAT,[Sr]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},ht={[bn]:i.NEAREST,[Gx]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[yr]:i.LINEAR_MIPMAP_LINEAR},_t={[Yx]:i.NEVER,[Qx]:i.ALWAYS,[$x]:i.LESS,[zm]:i.LEQUAL,[Kx]:i.EQUAL,[Jx]:i.GEQUAL,[jx]:i.GREATER,[Zx]:i.NOTEQUAL};function gt(b,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===bl||v.magFilter===Io||v.magFilter===yr||v.minFilter===Nn||v.minFilter===bl||v.minFilter===Io||v.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,k[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,k[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,k[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Io&&v.minFilter!==yr||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function At(b,v){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const H=v.source;let Y=h.get(H);Y===void 0&&(Y={},h.set(H,Y));const V=F(v);if(V!==b.__cacheKey){Y[V]===void 0&&(Y[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Y[V].usedTimes++;const lt=Y[b.__cacheKey];lt!==void 0&&(Y[b.__cacheKey].usedTimes--,lt.usedTimes===0&&D(v)),b.__cacheKey=V,b.__webglTexture=Y[V].texture}return P}function Wt(b,v,P){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);const Y=At(b,v),V=v.source;e.bindTexture(H,b.__webglTexture,i.TEXTURE0+P);const lt=n.get(V);if(V.version!==lt.__version||Y===!0){e.activeTexture(i.TEXTURE0+P);const it=Kt.getPrimaries(Kt.workingColorSpace),ct=v.colorSpace===Ii?null:Kt.getPrimaries(v.colorSpace),vt=v.colorSpace===Ii||it===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ot=_(v.image,!1,r.maxTextureSize);ot=J(v,ot);const pt=s.convert(v.format,v.colorSpace),zt=s.convert(v.type);let Rt=y(v.internalFormat,pt,zt,v.colorSpace,v.isVideoTexture);gt(H,v);let Mt;const It=v.mipmaps,wt=v.isVideoTexture!==!0,Xt=lt.__version===void 0||Y===!0,O=V.dataReady,ut=E(v,ot);if(v.isDepthTexture)Rt=M(v.format===bs,v.type),Xt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,Rt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Rt,ot.width,ot.height,0,pt,zt,null));else if(v.isDataTexture)if(It.length>0){wt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ut,Rt,It[0].width,It[0].height);for(let rt=0,st=It.length;rt<st;rt++)Mt=It[rt],wt?O&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,pt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,Mt.width,Mt.height,0,pt,zt,Mt.data);v.generateMipmaps=!1}else wt?(Xt&&e.texStorage2D(i.TEXTURE_2D,ut,Rt,ot.width,ot.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,pt,zt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,ot.width,ot.height,0,pt,zt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){wt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Rt,It[0].width,It[0].height,ot.depth);for(let rt=0,st=It.length;rt<st;rt++)if(Mt=It[rt],v.format!==On)if(pt!==null)if(wt){if(O)if(v.layerUpdates.size>0){const dt=pd(Mt.width,Mt.height,v.format,v.type);for(const Lt of v.layerUpdates){const Yt=Mt.data.subarray(Lt*dt/Mt.data.BYTES_PER_ELEMENT,(Lt+1)*dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Lt,Mt.width,Mt.height,1,pt,Yt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,ot.depth,pt,Mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,ot.depth,pt,zt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,Mt.width,Mt.height,ot.depth,0,pt,zt,Mt.data)}else{wt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ut,Rt,It[0].width,It[0].height);for(let rt=0,st=It.length;rt<st;rt++)Mt=It[rt],v.format!==On?pt!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,pt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Rt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?O&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,pt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,Mt.width,Mt.height,0,pt,zt,Mt.data)}else if(v.isDataArrayTexture)if(wt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Rt,ot.width,ot.height,ot.depth),O)if(v.layerUpdates.size>0){const rt=pd(ot.width,ot.height,v.format,v.type);for(const st of v.layerUpdates){const dt=ot.data.subarray(st*rt/ot.data.BYTES_PER_ELEMENT,(st+1)*rt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,pt,zt,dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,pt,zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,ot.width,ot.height,ot.depth,0,pt,zt,ot.data);else if(v.isData3DTexture)wt?(Xt&&e.texStorage3D(i.TEXTURE_3D,ut,Rt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,pt,zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,ot.width,ot.height,ot.depth,0,pt,zt,ot.data);else if(v.isFramebufferTexture){if(Xt)if(wt)e.texStorage2D(i.TEXTURE_2D,ut,Rt,ot.width,ot.height);else{let rt=ot.width,st=ot.height;for(let dt=0;dt<ut;dt++)e.texImage2D(i.TEXTURE_2D,dt,Rt,rt,st,0,pt,zt,null),rt>>=1,st>>=1}}else if(It.length>0){if(wt&&Xt){const rt=nt(It[0]);e.texStorage2D(i.TEXTURE_2D,ut,Rt,rt.width,rt.height)}for(let rt=0,st=It.length;rt<st;rt++)Mt=It[rt],wt?O&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt,zt,Mt):e.texImage2D(i.TEXTURE_2D,rt,Rt,pt,zt,Mt);v.generateMipmaps=!1}else if(wt){if(Xt){const rt=nt(ot);e.texStorage2D(i.TEXTURE_2D,ut,Rt,rt.width,rt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Rt,pt,zt,ot);p(v)&&m(H),lt.__version=V.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function tt(b,v,P){if(v.image.length!==6)return;const H=At(b,v),Y=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+P);const V=n.get(Y);if(Y.version!==V.__version||H===!0){e.activeTexture(i.TEXTURE0+P);const lt=Kt.getPrimaries(Kt.workingColorSpace),it=v.colorSpace===Ii?null:Kt.getPrimaries(v.colorSpace),ct=v.colorSpace===Ii||lt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const vt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let st=0;st<6;st++)!vt&&!ot?pt[st]=_(v.image[st],!0,r.maxCubemapSize):pt[st]=ot?v.image[st].image:v.image[st],pt[st]=J(v,pt[st]);const zt=pt[0],Rt=s.convert(v.format,v.colorSpace),Mt=s.convert(v.type),It=y(v.internalFormat,Rt,Mt,v.colorSpace),wt=v.isVideoTexture!==!0,Xt=V.__version===void 0||H===!0,O=Y.dataReady;let ut=E(v,zt);gt(i.TEXTURE_CUBE_MAP,v);let rt;if(vt){wt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,It,zt.width,zt.height);for(let st=0;st<6;st++){rt=pt[st].mipmaps;for(let dt=0;dt<rt.length;dt++){const Lt=rt[dt];v.format!==On?Rt!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt,0,0,Lt.width,Lt.height,Rt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt,It,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt,0,0,Lt.width,Lt.height,Rt,Mt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt,It,Lt.width,Lt.height,0,Rt,Mt,Lt.data)}}}else{if(rt=v.mipmaps,wt&&Xt){rt.length>0&&ut++;const st=nt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,It,st.width,st.height)}for(let st=0;st<6;st++)if(ot){wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt[st].width,pt[st].height,Rt,Mt,pt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,It,pt[st].width,pt[st].height,0,Rt,Mt,pt[st].data);for(let dt=0;dt<rt.length;dt++){const Yt=rt[dt].image[st].image;wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt+1,0,0,Yt.width,Yt.height,Rt,Mt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt+1,It,Yt.width,Yt.height,0,Rt,Mt,Yt.data)}}else{wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt,Mt,pt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,It,Rt,Mt,pt[st]);for(let dt=0;dt<rt.length;dt++){const Lt=rt[dt];wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt+1,0,0,Rt,Mt,Lt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt+1,It,Rt,Mt,Lt.image[st])}}}p(v)&&m(i.TEXTURE_CUBE_MAP),V.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function at(b,v,P,H,Y,V){const lt=s.convert(P.format,P.colorSpace),it=s.convert(P.type),ct=y(P.internalFormat,lt,it,P.colorSpace);if(!n.get(v).__hasExternalTextures){const ot=Math.max(1,v.width>>V),pt=Math.max(1,v.height>>V);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,V,ct,ot,pt,v.depth,0,lt,it,null):e.texImage2D(Y,V,ct,ot,pt,0,lt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),X(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,n.get(P).__webglTexture,0,G(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,n.get(P).__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(b,v,P){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const H=v.depthTexture,Y=H&&H.isDepthTexture?H.type:null,V=M(v.stencilBuffer,Y),lt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=G(v);X(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,V,v.width,v.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,V,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,V,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,b)}else{const H=v.textures;for(let Y=0;Y<H.length;Y++){const V=H[Y],lt=s.convert(V.format,V.colorSpace),it=s.convert(V.type),ct=y(V.internalFormat,lt,it,V.colorSpace),vt=G(v);P&&X(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ct,v.width,v.height):X(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const H=n.get(v.depthTexture).__webglTexture,Y=G(v);if(v.depthTexture.format===ps)X(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(v.depthTexture.format===bs)X(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Nt(b){const v=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");xt(v.__webglFramebuffer,b)}else if(P){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=i.createRenderbuffer(),yt(v.__webglDepthbuffer[H],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),yt(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(b,v,P){const H=n.get(b);v!==void 0&&at(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Nt(b)}function Ot(b){const v=b.texture,P=n.get(b),H=n.get(v);b.addEventListener("dispose",A);const Y=b.textures,V=b.isWebGLCubeRenderTarget===!0,lt=Y.length>1;if(lt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,o.memory.textures++),V){P.__webglFramebuffer=[];for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[it]=[];for(let ct=0;ct<v.mipmaps.length;ct++)P.__webglFramebuffer[it][ct]=i.createFramebuffer()}else P.__webglFramebuffer[it]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let it=0;it<v.mipmaps.length;it++)P.__webglFramebuffer[it]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(lt)for(let it=0,ct=Y.length;it<ct;it++){const vt=n.get(Y[it]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&X(b)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let it=0;it<Y.length;it++){const ct=Y[it];P.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[it]);const vt=s.convert(ct.format,ct.colorSpace),ot=s.convert(ct.type),pt=y(ct.internalFormat,vt,ot,ct.colorSpace,b.isXRRenderTarget===!0),zt=G(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,P.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),gt(i.TEXTURE_CUBE_MAP,v);for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)at(P.__webglFramebuffer[it][ct],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct);else at(P.__webglFramebuffer[it],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let it=0,ct=Y.length;it<ct;it++){const vt=Y[it],ot=n.get(vt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),gt(i.TEXTURE_2D,vt),at(P.__webglFramebuffer,b,vt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),p(vt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,H.__webglTexture),gt(it,v),v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)at(P.__webglFramebuffer[ct],b,v,i.COLOR_ATTACHMENT0,it,ct);else at(P.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,it,0);p(v)&&m(it),e.unbindTexture()}b.depthBuffer&&Nt(b)}function ie(b){const v=b.textures;for(let P=0,H=v.length;P<H;P++){const Y=v[P];if(p(Y)){const V=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(Y).__webglTexture;e.bindTexture(V,lt),m(V),e.unbindTexture()}}}const U=[],R=[];function I(b){if(b.samples>0){if(X(b)===!1){const v=b.textures,P=b.width,H=b.height;let Y=i.COLOR_BUFFER_BIT;const V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(b),it=v.length>1;if(it)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const vt=n.get(v[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,P,H,0,0,P,H,Y,i.NEAREST),l===!0&&(U.length=0,R.length=0,U.push(i.COLOR_ATTACHMENT0+ct),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(V),R.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const vt=n.get(v[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function G(b){return Math.min(r.maxSamples,b.samples)}function X(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function J(b,v){const P=b.colorSpace,H=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==Ji&&P!==Ii&&(Kt.getTransfer(P)===re?(H!==On||Y!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),v}function nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Bt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=X}function eb(i,t){function e(n,r=Ii){let s;const o=Kt.getTransfer(r);if(n===mi)return i.UNSIGNED_BYTE;if(n===Zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ju)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cm)return i.BYTE;if(n===Rm)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===ju)return i.INT;if(n===Ur)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===_o)return i.HALF_FLOAT;if(n===Lm)return i.ALPHA;if(n===Dm)return i.RGB;if(n===On)return i.RGBA;if(n===Im)return i.LUMINANCE;if(n===Um)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Nm)return i.RED;if(n===Qu)return i.RED_INTEGER;if(n===Om)return i.RG;if(n===tf)return i.RG_INTEGER;if(n===ef)return i.RGBA_INTEGER;if(n===ca||n===ua||n===fa||n===ha)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Fc||n===Bc||n===zc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hc||n===kc||n===Vc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hc||n===kc)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Kc||n===jc||n===Zc||n===Jc||n===Qc||n===tu||n===eu||n===nu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eu)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===iu||n===ru)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fm||n===su||n===ou||n===au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ou)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class nb extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Er extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Er;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ab extends Cs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new ob,p=e.getContextAttributes();let m=null,y=null;const M=[],E=[],C=new Vt;let A=null;const w=new Mn;w.layers.enable(1),w.viewport=new Se;const D=new Mn;D.layers.enable(2),D.viewport=new Se;const x=[w,D],S=new nb;S.layers.enable(1),S.layers.enable(2);let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=M[tt];return at===void 0&&(at=new Jl,M[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=M[tt];return at===void 0&&(at=new Jl,M[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=M[tt];return at===void 0&&(at=new Jl,M[tt]=at),at.getHandSpace()};function F(tt){const at=E.indexOf(tt.inputSource);if(at===-1)return;const yt=M[at];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,c||o),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Z(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Q);for(let tt=0;tt<M.length;tt++){const at=E[tt];at!==null&&(E[tt]=null,M[tt].disconnect(at))}L=null,N=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,r=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const at={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Nr(d.framebufferWidth,d.framebufferHeight,{format:On,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let at=null,yt=null,xt=null;p.depth&&(xt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=p.stencil?bs:ps,yt=p.stencil?Ts:Ur);const Nt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Nt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Nr(h.textureWidth,h.textureHeight,{format:On,type:mi,depthTexture:new Jm(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(tt){for(let at=0;at<tt.removed.length;at++){const yt=tt.removed[at],xt=E.indexOf(yt);xt>=0&&(E[xt]=null,M[xt].disconnect(yt))}for(let at=0;at<tt.added.length;at++){const yt=tt.added[at];let xt=E.indexOf(yt);if(xt===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=E.length){E.push(yt),xt=Bt;break}else if(E[Bt]===null){E[Bt]=yt,xt=Bt;break}if(xt===-1)break}const Nt=M[xt];Nt&&Nt.connect(yt)}}const W=new q,K=new q;function k(tt,at,yt){W.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const xt=W.distanceTo(K),Nt=at.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,Ot=Nt[14]/(Nt[10]-1),ie=Nt[14]/(Nt[10]+1),U=(Nt[9]+1)/Nt[5],R=(Nt[9]-1)/Nt[5],I=(Nt[8]-1)/Nt[0],G=(Bt[8]+1)/Bt[0],X=Ot*I,et=Ot*G,J=xt/(-I+G),nt=J*-I;at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(nt),tt.translateZ(J),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert();const b=Ot+J,v=ie+J,P=X-nt,H=et+(xt-nt),Y=U*ie/v*b,V=R*ie/v*b;tt.projectionMatrix.makePerspective(P,H,Y,V,b,v),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}function ht(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;_.texture!==null&&(tt.near=_.depthNear,tt.far=_.depthFar),S.near=D.near=w.near=tt.near,S.far=D.far=w.far=tt.far,(L!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far,w.near=L,w.far=N,D.near=L,D.far=N,w.updateProjectionMatrix(),D.updateProjectionMatrix(),tt.updateProjectionMatrix());const at=tt.parent,yt=S.cameras;ht(S,at);for(let xt=0;xt<yt.length;xt++)ht(yt[xt],at);yt.length===2?k(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),_t(tt,S,at)};function _t(tt,at,yt){yt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=lu*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let gt=null;function At(tt,at){if(u=at.getViewerPose(c||o),g=at,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let xt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,xt=!0);for(let Bt=0;Bt<yt.length;Bt++){const Ot=yt[Bt];let ie=null;if(d!==null)ie=d.getViewport(Ot);else{const R=f.getViewSubImage(h,Ot);ie=R.viewport,Bt===0&&(t.setRenderTargetTextures(y,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(y))}let U=x[Bt];U===void 0&&(U=new Mn,U.layers.enable(Bt),U.viewport=new Se,x[Bt]=U),U.matrix.fromArray(Ot.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ot.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ie.x,ie.y,ie.width,ie.height),Bt===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xt===!0&&S.cameras.push(U)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=f.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,r.renderState)}}for(let yt=0;yt<M.length;yt++){const xt=E[yt],Nt=M[yt];xt!==null&&Nt!==void 0&&Nt.update(xt,at,c||o)}gt&&gt(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Wt=new jm;Wt.setAnimationLoop(At),this.setAnimationLoop=function(tt){gt=tt},this.dispose=function(){}}}const fr=new Jn,lb=new pe;function cb(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ym(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,E=y.envMapRotation;M&&(p.envMap.value=M,fr.copy(E),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),p.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(fr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ub(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const E=M.program;n.uniformBlockBinding(y,E)}function c(y,M){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(y,C);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const M=f();y.__bindingPointIndex=M;const E=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,w=E.length;A<w;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,S=D.length;x<S;x++){const L=D[x];if(d(L,A,x,C)===!0){const N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let Q=0;Q<F.length;Q++){const W=F[Q],K=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,N+Z,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,E,C){const A=y.value,w=M+"_"+E;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const D=C[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){const M=y.uniforms;let E=0;const C=16;for(let w=0,D=M.length;w<D;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,L=x.length;S<L;S++){const N=x[S],F=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,Q=F.length;Z<Q;Z++){const W=F[Z],K=_(W),k=E%C,ht=k%K.boundary,_t=k+ht;E+=ht,_t!==0&&C-_t<K.storage&&(E+=C-_t),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=K.storage}}}const A=E%C;return A>0&&(E+=C-A),y.__size=E,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class fb{constructor(t={}){const{canvas:e=eM(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Vi,this.toneMappingExposure=1;const M=this;let E=!1,C=0,A=0,w=null,D=-1,x=null;const S=new Se,L=new Se;let N=null;const F=new qt(0);let Z=0,Q=e.width,W=e.height,K=1,k=null,ht=null;const _t=new Se(0,0,Q,W),gt=new Se(0,0,Q,W);let At=!1;const Wt=new af;let tt=!1,at=!1;const yt=new pe,xt=new q,Nt=new Se,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ie(){return w===null?K:1}let U=n;function R(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ku}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){const B="webgl2";if(U=R(B,T),U===null)throw R(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let I,G,X,et,J,nt,b,v,P,H,Y,V,lt,it,ct,vt,ot,pt,zt,Rt,Mt,It,wt,Xt;function O(){I=new gE(U),I.init(),It=new eb(U,I),G=new fE(U,I,t,It),X=new JT(U),et=new ME(U),J=new BT,nt=new tb(U,I,X,J,G,It,et),b=new dE(M),v=new _E(M),P=new wM(U),wt=new cE(U,P),H=new vE(U,P,et,wt),Y=new yE(U,H,P,et),zt=new SE(U,G,nt),vt=new hE(J),V=new FT(M,b,v,I,G,wt,vt),lt=new cb(M,J),it=new HT,ct=new qT(I),pt=new lE(M,b,v,X,Y,h,l),ot=new ZT(M,Y,G),Xt=new ub(U,et,G,X),Rt=new uE(U,I,et),Mt=new xE(U,I,et),et.programs=V.programs,M.capabilities=G,M.extensions=I,M.properties=J,M.renderLists=it,M.shadowMap=ot,M.state=X,M.info=et}O();const ut=new ab(M,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=I.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=I.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(Q,W,!1))},this.getSize=function(T){return T.set(Q,W)},this.setSize=function(T,B,$=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,W=B,e.width=Math.floor(T*K),e.height=Math.floor(B*K),$===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Q*K,W*K).floor()},this.setDrawingBufferSize=function(T,B,$){Q=T,W=B,K=$,e.width=Math.floor(T*$),e.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,B,$,j){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,B,$,j),X.viewport(S.copy(_t).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,B,$,j){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,B,$,j),X.scissor(L.copy(gt).multiplyScalar(K).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){X.setScissorTest(At=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(T=!0,B=!0,$=!0){let j=0;if(T){let z=!1;if(w!==null){const ft=w.texture.format;z=ft===ef||ft===tf||ft===Qu}if(z){const ft=w.texture.type,St=ft===mi||ft===Ur||ft===fo||ft===Ts||ft===Zu||ft===Ju,Et=pt.getClearColor(),Tt=pt.getClearAlpha(),Dt=Et.r,Ut=Et.g,Ct=Et.b;St?(d[0]=Dt,d[1]=Ut,d[2]=Ct,d[3]=Tt,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=Dt,g[1]=Ut,g[2]=Ct,g[3]=Tt,U.clearBufferiv(U.COLOR,0,g))}else j|=U.COLOR_BUFFER_BIT}B&&(j|=U.DEPTH_BUFFER_BIT),$&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),it.dispose(),ct.dispose(),J.dispose(),b.dispose(),v.dispose(),Y.dispose(),wt.dispose(),Xt.dispose(),V.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Bn),ut.removeEventListener("sessionend",df),Qi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=et.autoReset,B=ot.enabled,$=ot.autoUpdate,j=ot.needsUpdate,z=ot.type;O(),et.autoReset=T,ot.enabled=B,ot.autoUpdate=$,ot.needsUpdate=j,ot.type=z}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Lt(T){const B=T.target;B.removeEventListener("dispose",Lt),Yt(B)}function Yt(T){ge(T),J.remove(T)}function ge(T){const B=J.get(T).programs;B!==void 0&&(B.forEach(function($){V.releaseProgram($)}),T.isShaderMaterial&&V.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,j,z,ft){B===null&&(B=Bt);const St=z.isMesh&&z.matrixWorld.determinant()<0,Et=i_(T,B,$,j,z);X.setMaterial(j,St);let Tt=$.index,Dt=1;if(j.wireframe===!0){if(Tt=H.getWireframeAttribute($),Tt===void 0)return;Dt=2}const Ut=$.drawRange,Ct=$.attributes.position;let Jt=Ut.start*Dt,ue=(Ut.start+Ut.count)*Dt;ft!==null&&(Jt=Math.max(Jt,ft.start*Dt),ue=Math.min(ue,(ft.start+ft.count)*Dt)),Tt!==null?(Jt=Math.max(Jt,0),ue=Math.min(ue,Tt.count)):Ct!=null&&(Jt=Math.max(Jt,0),ue=Math.min(ue,Ct.count));const fe=ue-Jt;if(fe<0||fe===1/0)return;wt.setup(z,j,Et,$,Tt);let en,Qt=Rt;if(Tt!==null&&(en=P.get(Tt),Qt=Mt,Qt.setIndex(en)),z.isMesh)j.wireframe===!0?(X.setLineWidth(j.wireframeLinewidth*ie()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(z.isLine){let bt=j.linewidth;bt===void 0&&(bt=1),X.setLineWidth(bt*ie()),z.isLineSegments?Qt.setMode(U.LINES):z.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else z.isPoints?Qt.setMode(U.POINTS):z.isSprite&&Qt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const bt=z._multiDrawStarts,Re=z._multiDrawCounts,te=z._multiDrawCount,Rn=Tt?P.get(Tt).bytesPerElement:1,Br=J.get(j).currentProgram.getUniforms();for(let nn=0;nn<te;nn++)Br.setValue(U,"_gl_DrawID",nn),Qt.render(bt[nn]/Rn,Re[nn])}else if(z.isInstancedMesh)Qt.renderInstances(Jt,fe,z.count);else if($.isInstancedBufferGeometry){const bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,bt);Qt.renderInstances(Jt,fe,Re)}else Qt.render(Jt,fe)};function Ce(T,B,$){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,To(T,B,$),T.side=Yi,T.needsUpdate=!0,To(T,B,$),T.side=ci):To(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),p=ct.get($),p.init(B),y.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==$&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return T.traverse(function(z){const ft=z.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const Et=ft[St];Ce(Et,$,z),j.add(Et)}else Ce(ft,$,z),j.add(ft)}),y.pop(),p=null,j},this.compileAsync=function(T,B,$=null){const j=this.compile(T,B,$);return new Promise(z=>{function ft(){if(j.forEach(function(St){J.get(St).currentProgram.isReady()&&j.delete(St)}),j.size===0){z(T);return}setTimeout(ft,10)}I.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Zt=null;function Qn(T){Zt&&Zt(T)}function Bn(){Qi.stop()}function df(){Qi.start()}const Qi=new jm;Qi.setAnimationLoop(Qn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(T){Zt=T,ut.setAnimationLoop(T),T===null?Qi.stop():Qi.start()},ut.addEventListener("sessionstart",Bn),ut.addEventListener("sessionend",df),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,w),p=ct.get(T,y.length),p.init(B),y.push(p),yt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Wt.setFromProjectionMatrix(yt),at=this.localClippingEnabled,tt=vt.init(this.clippingPlanes,at),_=it.get(T,m.length),_.init(),m.push(_),ut.enabled===!0&&ut.isPresenting===!0){const ft=M.xr.getDepthSensingMesh();ft!==null&&tl(ft,B,-1/0,M.sortObjects)}tl(T,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(k,ht),Ot=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ot&&pt.addToRenderList(_,T),this.info.render.frame++,tt===!0&&vt.beginShadows();const $=p.state.shadowsArray;ot.render($,T,B),tt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,z=_.transmissive;if(p.setupLights(),B.isArrayCamera){const ft=B.cameras;if(z.length>0)for(let St=0,Et=ft.length;St<Et;St++){const Tt=ft[St];mf(j,z,T,Tt)}Ot&&pt.render(T);for(let St=0,Et=ft.length;St<Et;St++){const Tt=ft[St];pf(_,T,Tt,Tt.viewport)}}else z.length>0&&mf(j,z,T,B),Ot&&pt.render(T),pf(_,T,B);w!==null&&(nt.updateMultisampleRenderTarget(w),nt.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(M,T,B),wt.resetDefaultState(),D=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&vt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function tl(T,B,$,j){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Wt.intersectsSprite(T)){j&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);const St=Y.update(T),Et=T.material;Et.visible&&_.push(T,St,Et,$,Nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Wt.intersectsObject(T))){const St=Y.update(T),Et=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Nt.copy(St.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(Et)){const Tt=St.groups;for(let Dt=0,Ut=Tt.length;Dt<Ut;Dt++){const Ct=Tt[Dt],Jt=Et[Ct.materialIndex];Jt&&Jt.visible&&_.push(T,St,Jt,$,Nt.z,Ct)}}else Et.visible&&_.push(T,St,Et,$,Nt.z,null)}}const ft=T.children;for(let St=0,Et=ft.length;St<Et;St++)tl(ft[St],B,$,j)}function pf(T,B,$,j){const z=T.opaque,ft=T.transmissive,St=T.transparent;p.setupLightsView($),tt===!0&&vt.setGlobalState(M.clippingPlanes,$),j&&X.viewport(S.copy(j)),z.length>0&&Eo(z,B,$),ft.length>0&&Eo(ft,B,$),St.length>0&&Eo(St,B,$),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function mf(T,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Nr(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?_o:mi,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ft=p.state.transmissionRenderTarget[j.id],St=j.viewport||S;ft.setSize(St.z,St.w);const Et=M.getRenderTarget();M.setRenderTarget(ft),M.getClearColor(F),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Ot&&pt.render($);const Tt=M.toneMapping;M.toneMapping=Vi;const Dt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),tt===!0&&vt.setGlobalState(M.clippingPlanes,j),Eo(T,$,j),nt.updateMultisampleRenderTarget(ft),nt.updateRenderTargetMipmap(ft),I.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ct=0,Jt=B.length;Ct<Jt;Ct++){const ue=B[Ct],fe=ue.object,en=ue.geometry,Qt=ue.material,bt=ue.group;if(Qt.side===ci&&fe.layers.test(j.layers)){const Re=Qt.side;Qt.side=je,Qt.needsUpdate=!0,_f(fe,$,j,en,Qt,bt),Qt.side=Re,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(nt.updateMultisampleRenderTarget(ft),nt.updateRenderTargetMipmap(ft))}M.setRenderTarget(Et),M.setClearColor(F,Z),Dt!==void 0&&(j.viewport=Dt),M.toneMapping=Tt}function Eo(T,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ft=T.length;z<ft;z++){const St=T[z],Et=St.object,Tt=St.geometry,Dt=j===null?St.material:j,Ut=St.group;Et.layers.test($.layers)&&_f(Et,B,$,Tt,Dt,Ut)}}function _f(T,B,$,j,z,ft){T.onBeforeRender(M,B,$,j,z,ft),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.transparent===!0&&z.side===ci&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,M.renderBufferDirect($,B,j,z,T,ft),z.side=Yi,z.needsUpdate=!0,M.renderBufferDirect($,B,j,z,T,ft),z.side=ci):M.renderBufferDirect($,B,j,z,T,ft),T.onAfterRender(M,B,$,j,z,ft)}function To(T,B,$){B.isScene!==!0&&(B=Bt);const j=J.get(T),z=p.state.lights,ft=p.state.shadowsArray,St=z.state.version,Et=V.getParameters(T,z.state,ft,B,$),Tt=V.getProgramCacheKey(Et);let Dt=j.programs;j.environment=T.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(T.isMeshStandardMaterial?v:b).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Lt),Dt=new Map,j.programs=Dt);let Ut=Dt.get(Tt);if(Ut!==void 0){if(j.currentProgram===Ut&&j.lightsStateVersion===St)return vf(T,Et),Ut}else Et.uniforms=V.getUniforms(T),T.onBeforeCompile(Et,M),Ut=V.acquireProgram(Et,Tt),Dt.set(Tt,Ut),j.uniforms=Et.uniforms;const Ct=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=vt.uniform),vf(T,Et),j.needsLights=s_(T),j.lightsStateVersion=St,j.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Ut,j.uniformsList=null,Ut}function gf(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=pa.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function vf(T,B){const $=J.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function i_(T,B,$,j,z){B.isScene!==!0&&(B=Bt),nt.resetTextureUnits();const ft=B.fog,St=j.isMeshStandardMaterial?B.environment:null,Et=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ji,Tt=(j.isMeshStandardMaterial?v:b).get(j.envMap||St),Dt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ut=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ct=!!$.morphAttributes.position,Jt=!!$.morphAttributes.normal,ue=!!$.morphAttributes.color;let fe=Vi;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(fe=M.toneMapping);const en=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=en!==void 0?en.length:0,bt=J.get(j),Re=p.state.lights;if(tt===!0&&(at===!0||T!==x)){const _n=T===x&&j.id===D;vt.setState(j,T,_n)}let te=!1;j.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Re.state.version||bt.outputColorSpace!==Et||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==Tt||j.fog===!0&&bt.fog!==ft||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==vt.numPlanes||bt.numIntersection!==vt.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ut||bt.morphTargets!==Ct||bt.morphNormals!==Jt||bt.morphColors!==ue||bt.toneMapping!==fe||bt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,bt.__version=j.version);let Rn=bt.currentProgram;te===!0&&(Rn=To(j,B,z));let Br=!1,nn=!1,el=!1;const ve=Rn.getUniforms(),xi=bt.uniforms;if(X.useProgram(Rn.program)&&(Br=!0,nn=!0,el=!0),j.id!==D&&(D=j.id,nn=!0),Br||x!==T){ve.setValue(U,"projectionMatrix",T.projectionMatrix),ve.setValue(U,"viewMatrix",T.matrixWorldInverse);const _n=ve.map.cameraPosition;_n!==void 0&&_n.setValue(U,xt.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&ve.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ve.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,nn=!0,el=!0)}if(z.isSkinnedMesh){ve.setOptional(U,z,"bindMatrix"),ve.setOptional(U,z,"bindMatrixInverse");const _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ve.setValue(U,"boneTexture",_n.boneTexture,nt))}z.isBatchedMesh&&(ve.setOptional(U,z,"batchingTexture"),ve.setValue(U,"batchingTexture",z._matricesTexture,nt),ve.setOptional(U,z,"batchingIdTexture"),ve.setValue(U,"batchingIdTexture",z._indirectTexture,nt),ve.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(U,"batchingColorTexture",z._colorsTexture,nt));const nl=$.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0)&&zt.update(z,$,Rn),(nn||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,ve.setValue(U,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xi.envMap.value=Tt,xi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(xi.envMapIntensity.value=B.environmentIntensity),nn&&(ve.setValue(U,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&r_(xi,el),ft&&j.fog===!0&&lt.refreshFogUniforms(xi,ft),lt.refreshMaterialUniforms(xi,j,K,W,p.state.transmissionRenderTarget[T.id]),pa.upload(U,gf(bt),xi,nt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pa.upload(U,gf(bt),xi,nt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ve.setValue(U,"center",z.center),ve.setValue(U,"modelViewMatrix",z.modelViewMatrix),ve.setValue(U,"normalMatrix",z.normalMatrix),ve.setValue(U,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const _n=j.uniformsGroups;for(let il=0,o_=_n.length;il<o_;il++){const xf=_n[il];Xt.update(xf,Rn),Xt.bind(xf,Rn)}}return Rn}function r_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function s_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,$){J.get(T.texture).__webglTexture=B,J.get(T.depthTexture).__webglTexture=$;const j=J.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=J.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){w=T,C=B,A=$;let j=!0,z=null,ft=!1,St=!1;if(T){const Tt=J.get(T);Tt.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(U.FRAMEBUFFER,null),j=!1):Tt.__webglFramebuffer===void 0?nt.setupRenderTarget(T):Tt.__hasExternalTextures&&nt.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(St=!0);const Ut=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[B])?z=Ut[B][$]:z=Ut[B],ft=!0):T.samples>0&&nt.useMultisampledRTT(T)===!1?z=J.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?z=Ut[$]:z=Ut,S.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else S.copy(_t).multiplyScalar(K).floor(),L.copy(gt).multiplyScalar(K).floor(),N=At;if(X.bindFramebuffer(U.FRAMEBUFFER,z)&&j&&X.drawBuffers(T,z),X.viewport(S),X.scissor(L),X.setScissorTest(N),ft){const Tt=J.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,$)}else if(St){const Tt=J.get(T.texture),Dt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,$||0,Dt)}D=-1},this.readRenderTargetPixels=function(T,B,$,j,z,ft,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){X.bindFramebuffer(U.FRAMEBUFFER,Et);try{const Tt=T.texture,Dt=Tt.format,Ut=Tt.type;if(!G.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-j&&$>=0&&$<=T.height-z&&U.readPixels(B,$,j,z,It.convert(Dt),It.convert(Ut),ft)}finally{const Tt=w!==null?J.get(w).__webglFramebuffer:null;X.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,j,z,ft,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){X.bindFramebuffer(U.FRAMEBUFFER,Et);try{const Tt=T.texture,Dt=Tt.format,Ut=Tt.type;if(!G.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-j&&$>=0&&$<=T.height-z){const Ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),U.readPixels(B,$,j,z,It.convert(Dt),It.convert(Ut),0),U.flush();const Jt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await nM(U,Jt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft)}finally{U.deleteBuffer(Ct),U.deleteSync(Jt)}return ft}}finally{const Tt=w!==null?J.get(w).__webglFramebuffer:null;X.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(T,B=null,$=0){T.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),z=Math.floor(T.image.width*j),ft=Math.floor(T.image.height*j),St=B!==null?B.x:0,Et=B!==null?B.y:0;nt.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,St,Et,z,ft),X.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,j=null,z=0){T.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,$=null);let ft,St,Et,Tt,Dt,Ut;$!==null?(ft=$.max.x-$.min.x,St=$.max.y-$.min.y,Et=$.min.x,Tt=$.min.y):(ft=T.image.width,St=T.image.height,Et=0,Tt=0),j!==null?(Dt=j.x,Ut=j.y):(Dt=0,Ut=0);const Ct=It.convert(B.format),Jt=It.convert(B.type);nt.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ue=U.getParameter(U.UNPACK_ROW_LENGTH),fe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),en=U.getParameter(U.UNPACK_SKIP_PIXELS),Qt=U.getParameter(U.UNPACK_SKIP_ROWS),bt=U.getParameter(U.UNPACK_SKIP_IMAGES),Re=T.isCompressedTexture?T.mipmaps[z]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tt),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Dt,Ut,ft,St,Ct,Jt,Re.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Dt,Ut,Re.width,Re.height,Ct,Re.data):U.texSubImage2D(U.TEXTURE_2D,z,Dt,Ut,ft,St,Ct,Jt,Re),U.pixelStorei(U.UNPACK_ROW_LENGTH,ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,en),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bt),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$=null,j=null,z=0){T.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0);let ft,St,Et,Tt,Dt,Ut,Ct,Jt,ue;const fe=T.isCompressedTexture?T.mipmaps[z]:T.image;$!==null?(ft=$.max.x-$.min.x,St=$.max.y-$.min.y,Et=$.max.z-$.min.z,Tt=$.min.x,Dt=$.min.y,Ut=$.min.z):(ft=fe.width,St=fe.height,Et=fe.depth,Tt=0,Dt=0,Ut=0),j!==null?(Ct=j.x,Jt=j.y,ue=j.z):(Ct=0,Jt=0,ue=0);const en=It.convert(B.format),Qt=It.convert(B.type);let bt;if(B.isData3DTexture)nt.setTexture3D(B,0),bt=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)nt.setTexture2DArray(B,0),bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Re=U.getParameter(U.UNPACK_ROW_LENGTH),te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rn=U.getParameter(U.UNPACK_SKIP_PIXELS),Br=U.getParameter(U.UNPACK_SKIP_ROWS),nn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(bt,z,Ct,Jt,ue,ft,St,Et,en,Qt,fe.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,z,Ct,Jt,ue,ft,St,Et,en,fe.data):U.texSubImage3D(bt,z,Ct,Jt,ue,ft,St,Et,en,Qt,fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Br),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),z===0&&B.generateMipmaps&&U.generateMipmap(bt),X.unbindTexture()},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?nt.setTextureCube(T,0):T.isData3DTexture?nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?nt.setTexture2DArray(T,0):nt.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,X.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nf?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Ja?"display-p3":"srgb"}}class hb extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cf extends vi{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new q,u=new Vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new pn(o,3)),this.setAttribute("normal",new pn(a,3)),this.setAttribute("uv",new pn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class uf extends vi{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new q,f=new q,h=new q;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const _=g/r*s,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,p=(r+1)*(d-1)+g-1,m=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(_,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new pn(a,3)),this.setAttribute("normal",new pn(l,3)),this.setAttribute("uv",new pn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class db extends Mo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bm,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ff extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pb extends ff{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ql=new pe,md=new q,_d=new q;class mb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new af,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),_d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_d),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _b extends mb{constructor(){super(new Zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tc extends ff{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gb extends ff{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const gd=new pe;class vb{constructor(t,e,n=0,r=1/0){this.ray=new Gm(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(t,e=!0,n=[]){return uu(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)uu(t[r],this,n,e);return n.sort(vd),n}}function vd(i,t){return i.distance-t.distance}function uu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)uu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);const Bs={CONTINENT_COLORS:["#1b8fc8","#f5cf02","#333333","#00923d","#c22d2e"]};class zs extends Er{constructor(t,e,n,r){super(),this.name=t,this.index=e,this.color=n,this.factor=r,this.init()}init(){this.tube=1+2*this.factor,this.geometry=new uf(20,this.tube,18,64),this.material=new db({color:new qt(this.color),metalness:0,roughness:0}),this.mesh=new An(this.geometry,this.material),this.mesh.rotation.x=Math.PI*be.utils.random(-.5,.5,.1),this.mesh.rotation.y=Math.PI*be.utils.random(-.5,.5,.1),this.mesh.position.z=this.index%2?10:-10,this.mesh.castShadow=!0,this.mesh.scale.set(0,0,0),this.add(this.mesh),this.hitGeometry=new cf(20+this.tube),this.hitMaterial=new of({visible:!1}),this.hitMesh=new An(this.hitGeometry,this.hitMaterial),this.hitMesh.name=this.name,this.add(this.hitMesh),this.position.y=10}show(){this.tl=be.timeline({delay:be.utils.random(0,.2,.05)}),this.tl.to(this.mesh.scale,{x:1,y:1,z:1,duration:1,ease:"elastic.out(0.8, 0.8)"},0),this.tl.to(this.mesh.position,{z:0,duration:1,ease:"power2.out"},0),this.tl.to(this.mesh.rotation,{x:0,y:0,duration:1,ease:"elastic.out(0.8, 0.8)"},0)}enter(){this.hover&&this.hover.pause(),this.hover=be.to(this.mesh.scale,{x:1.05,y:1.05,z:1.05,duration:.6,ease:"power2.out"})}leave(){this.hover&&this.hover.pause(),this.hover=be.to(this.mesh.scale,{x:1,y:1,z:1,duration:1,ease:"elastic.out(1, 0.4)"})}}const xb=`
    varying float vNoise;

    uniform float uTime;
    uniform float uBumpNoise;

    //	Simplex 3D Noise
    //	by Ian McEwan, Ashima Arts
    //
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //  x0 = x0 - 0. + 0.0 * C
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        // Permutations
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients
        // ( N*N points uniformly over a square, mapped onto an octahedron.)
        float n_ = 1.0/7.0; // N=7
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                        dot(p2,x2), dot(p3,x3) ) );
    }


    void main() {
        vec2 noiseCoords = uv * vec2(3.0, 4.0);
        float noise = snoise(vec3(
          noiseCoords.x + uTime * 30.,
          noiseCoords.y + uTime * 20.,
          uBumpNoise + uTime * 5.0
        ));
        vNoise = noise;

        vec3 pos = vec3(position.x, position.y, position.z + noise * 30. * uBumpNoise);


        gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    }
`,Mb=`
    varying float vNoise;

    uniform vec3 uColor;

    void main() {

        // vec3 finalColor = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), vNoise);
        // gl_FragColor = vec4(finalColor, 1.0);
        gl_FragColor = vec4(uColor, vNoise);
    }
`;class Sb extends Er{constructor(t){super(),this.init()}init(){this.geometry=new yo(1e3,1e3,128,128),this.material=new _i({uniforms:{uColor:{value:new qt(15330543)},uTime:{value:0},uBumpNoise:{value:0}},vertexShader:xb,fragmentShader:Mb,transparent:!0}),this.mesh=new An(this.geometry,this.material),this.mesh.rotation.x=-Math.PI*.5,this.mesh.position.y-=65,this.add(this.mesh),be.to(this.material.uniforms.uBumpNoise,{value:1,duration:3.5,delay:3,ease:"power2.inOut"})}update(t,e){this.material.uniforms.uTime.value=t*.005}}const Di={europe:{gold:57,silver:55,bronze:69,total:181},asia:{gold:39,silver:32,bronze:36,total:107},america:{gold:18,silver:29,bronze:32,total:79},oceania:{gold:14,silver:12,bronze:6,total:32},africa:{gold:2,silver:3,bronze:3,total:8}};class yb{constructor(t,e){this.wrapperEl=t,this.updateHoverId=e,this.hoverId="",this.IS_READY=!1,this.onResize(),this.initEngine(),this.initRaycaster(),this.initLights(),this.initContinents(),this.initMountains(),be.ticker.add(this.onTick.bind(this)),window.addEventListener("resize",this.onResize.bind(this)),be.delayedCall(5,()=>{this.IS_READY=!0,this.continents.forEach(n=>n.show())})}initEngine(){this.scene=new hb,this.camera=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,10,120),this.center=new q,this.camera.lookAt(this.center),this.cameraGroup=new Er,this.cameraGroup.add(this.camera),this.cameraCursor=new Vt,this.dpr=Math.min(window.devicePixelRatio,2),this.renderer=new fb({dpr:this.dpr,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(16250871),Kt.enabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bm,this.renderer.outputColorSpace=Un,this.wrapperEl.appendChild(this.renderer.domElement)}initRaycaster(){this.raycaster=new vb,this.pointer=new Vt(-1,-1),window.addEventListener("pointermove",this.onPointerMove.bind(this))}initLights(){this.scene.add(new pb(10461087,16777215,1)),this.scene.add(new gb(16777215,1));const t=new tc(16777215,3);t.position.set(100,200,100),this.scene.add(t);const e=new tc(16777215,3);e.position.set(100,200,100),this.scene.add(e);const n=new tc(16777215,3);n.position.set(-100,-200,-100),this.scene.add(n)}initContinents(){const t=[];for(const[c,u]of Object.entries(Di))t.push(u.total);const e=Math.min(...t),n=Math.max(...t),r=new zs("europe",0,Bs.CONTINENT_COLORS[0],be.utils.mapRange(e,n,0,1,Di.europe.total));this.scene.add(r);const s=new zs("asia",1,Bs.CONTINENT_COLORS[1],be.utils.mapRange(e,n,0,1,Di.asia.total));this.scene.add(s);const o=new zs("africa",2,Bs.CONTINENT_COLORS[2],be.utils.mapRange(e,n,0,1,Di.africa.total));this.scene.add(o);const a=new zs("oceania",3,Bs.CONTINENT_COLORS[3],be.utils.mapRange(e,n,0,1,Di.oceania.total));this.scene.add(a);const l=new zs("america",4,Bs.CONTINENT_COLORS[4],be.utils.mapRange(e,n,0,1,Di.america.total));this.scene.add(l),r.position.x-=42+o.tube+r.tube,s.position.x-=20+o.tube+s.tube,s.position.y-=20,s.position.z+=o.tube+s.tube,a.position.x+=20+o.tube+a.tube,a.position.y-=20,a.position.z+=o.tube+a.tube,l.position.x+=42+o.tube+l.tube,this.continents=[r,s,o,a,l],this.continentsHits=this.continents.map(c=>c.hitMesh)}initMountains(){this.mountains=new Sb,this.scene.add(this.mountains)}onPointerMove(t){this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1}onTick(t,e){if(this.renderer.render(this.scene,this.camera),this.controls&&this.controls.update(),this.mountains&&this.mountains.update(t),this.cameraCursor.lerp(this.pointer,e*.005),this.cameraGroup.rotation.x=Math.PI*.05*this.cameraCursor.y,this.cameraGroup.rotation.y=Math.PI*.05*this.cameraCursor.x,this.camera.lookAt(this.center),!this.IS_READY)return;this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.continentsHits);n.length?(this.renderer.domElement.style.cursor="pointer",this.hoverId!==n[0].object.name&&(this.activeEl&&this.activeEl.leave(),this.activeEl=n[0].object.parent,this.hoverId=n[0].object.name,this.activeEl.enter(),this.updateHoverId(this.hoverId))):!n.length&&this.hoverId&&(this.activeEl&&(this.activeEl.leave(),this.activeEl=null),this.renderer.domElement.style.cursor="initial",this.hoverId="",this.updateHoverId(this.hoverId))}onResize(){this.dpr=Math.min(window.devicePixelRatio,2),this.wW=this.wrapperEl.offsetWidth,this.wH=this.wrapperEl.offsetHeight,this.aspect=this.wW/this.wH,this.camera&&(this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.wW,this.wH))}}const Eb={class:"panel"},Tb={__name:"AppWebgl",setup(i){const t=qn(null),e=qn(),n=qn([]),r=qn("");ws(()=>{new yb(t.value,s)});function s(a){r.value=a}function o(){e.value.show(),n.value.forEach(a=>a.show())}return(a,l)=>(fn(),$n("div",{ref_key:"root",ref:t,class:"app-webgl"},[he(Ya,{duration:200,name:"fade",onEnter:o},{default:ka(()=>[r.value?(fn(),$n("div",{class:"infos",key:r.value},[he(Aa,{ref_key:"label",ref:e,markup:"p",text:`${r.value}: ${sc(Di)[r.value].total}`},null,8,["text"]),hn("div",Eb,[hn("ul",null,[(fn(),$n(ke,null,Au(["gold","silver","bronze"],(c,u)=>hn("li",{key:`medal-${u}`,markup:"li"},[he(Aa,{ref_for:!0,ref_key:"medals",ref:n,text:`${c}: ${sc(Di)[r.value][c]}`},null,8,["text"])])),64))])])])):Sp("",!0)]),_:1})],512))}},bb=mo(Tb,[["__scopeId","data-v-0ee9f741"]]),Ab={},hf=i=>(tg("data-v-5770d0d1"),i=i(),eg(),i),wb={class:"app-credits"},Cb=hf(()=>hn("p",null,[Lr(" Submission for a development challenge proposed by "),hn("a",{href:"https://www.youtube.com/@BenjaminCode",target:"_blank",rel:"noopener noreferer"},"BenjaminCode"),Lr(". ")],-1)),Rb=hf(()=>hn("p",null,[Lr(" Based on an original design by "),hn("a",{href:"https://dribbble.com/shots/16149730--Olympic-medals-per-continent-in-Rio-2016",target:"_blank",rel:"noopener noreferer"},"ramsés cabello"),Lr(". ")],-1)),Pb=hf(()=>hn("p",null,[Lr(" Made with ♥ by "),hn("a",{href:"https://avdp.xyz",target:"_blank",rel:"noopener noreferer"},"Adrien Vanderpotte"),Lr(". ")],-1)),Lb=[Cb,Rb,Pb];function Db(i,t){return fn(),$n("div",wb,Lb)}const Ib=mo(Ab,[["render",Db],["__scopeId","data-v-5770d0d1"]]),Ub={class:"app-header"},Nb={__name:"AppHeader",setup(i){const t=qn(null),e=qn(null),n=qn(!1);return ws(()=>{be.delayedCall(6,()=>{t.value.show(),e.value.show()})}),(r,s)=>(fn(),$n(ke,null,[hn("header",Ub,[he(Aa,{ref_key:"title",ref:t,markup:"h1",text:"Olympic Medals Paris 2024"},null,512),he(Aa,{ref_key:"credits",ref:e,markup:"button",text:"Credits","aria-expanded":n.value,onClick:s[0]||(s[0]=o=>n.value=!n.value)},null,8,["aria-expanded"])]),he(Ya,{name:"popin"},{default:ka(()=>[n.value?(fn(),Ru(Ib,{key:0})):Sp("",!0)]),_:1})],64))}},Ob=mo(Nb,[["__scopeId","data-v-ce3ed9bb"]]),Fb={__name:"App",setup(i){return(t,e)=>(fn(),$n(ke,null,[he(rx),he(bb),he(Ob)],64))}};H0(Fb).mount("#app");
