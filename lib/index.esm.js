/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class i{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,o=t=>{let o=s.get(t);return void 0===o&&s.set(t,o=new i(t,e)),o},n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return o(s)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>o("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,c,a,h;const u={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=v){var s,o;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:u.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,e){var i,s,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,c=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:u.fromAttribute;this.Πh=r,this[r]=c(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f,g,b,m;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null===(c=(l=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(l,{ReactiveElement:p}),(null!==(a=(h=globalThis).reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,S="?"+k,x=`<${S}>`,j=document,$=(t="")=>j.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,_=/"/g,U=/^(?:script|style|textarea)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),q=new WeakMap,I=j.createTreeWalker(j,129,null,!1);class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[c,a]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let l,c,a=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===E?"!--"===c[1]?r=M:void 0!==c[1]?r=z:void 0!==c[2]?(U.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=T):void 0!==c[3]&&(r=T):r===T?">"===c[0]?(r=null!=o?o:E,a=-1):void 0===c[1]?a=-2:(a=r.lastIndex-c[2].length,l=c[1],r=void 0===c[3]?T:'"'===c[3]?_:A):r===_||r===A?r=T:r===M||r===z?r=E:(r=T,o=void 0);const u=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===E?i+x:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+k+u):i+k+(-2===a?(s.push(void 0),e):u)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(l):l,s]})(t,e);if(this.el=L.createElement(c,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?J:"@"===e[1]?Z:B})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),I.nextNode(),l.push({type:2,index:++o});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===S)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)l.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,s){var o,n,r,l;if(e===P)return e;let c=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const a=O(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==a&&(null===(n=null==c?void 0:c.O)||void 0===n||n.call(c,!1),void 0===a?c=void 0:(c=new a(t),c.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=c:i.Σo=c),void 0!==c&&(e=D(t,c.S(t,e.values),c,s)),e}class H{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:j).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,l=0,c=s[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new W(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new K(n,this,t)),this.l.push(e),c=s[++l]}r!==(null==c?void 0:c.index)&&(n=I.nextNode(),r++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class W{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=D(this,t,e),O(t)?t===R||null==t||""===t?(this.H!==R&&this.R(),this.H=R):t!==this.H&&t!==P&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(j.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new H(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new L(t)),e}g(t){C(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new W(this.k($()),this.k($()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class B{constructor(t,e,i,s,o){this.type=1,this.H=R,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(R),this.strings=i):this.H=R}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=D(this,t,e,0),n=!O(t)||t!==this.H&&t!==P,n&&(this.H=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=D(this,s[i+r],e,r),l===P&&(l=this.H[r]),n||(n=!O(l)||l!==this.H[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[r+1]),this.H[r]=l}n&&!s&&this.W(t)}W(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends B{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===R?void 0:t}}class J extends B{constructor(){super(...arguments),this.type=4}W(t){t&&t!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends B{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:R)===P)return;const s=this.H,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){D(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,G,Q,X,Y,tt;null===(g=(f=globalThis).litHtmlPlatformSupport)||void 0===g||g.call(f,L,W),(null!==(b=(m=globalThis).litHtmlVersions)&&void 0!==b?b:m.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(V=(tt=globalThis).litElementVersions)&&void 0!==V?V:tt.litElementVersions=[]).push("3.0.0-rc.2");class et extends p{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new W(e.insertBefore($(),t),t,void 0,i)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return P}}et.finalized=!0,et._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:et}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:et});const it=t=>(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce(((t,e)=>(Object.entries(e).forEach((([e,i])=>t[e]=i)),t)),{}):(t=>Object.entries(t).reduce(((t,[e,i])=>(t[e]=function(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}(i),t)),{}))((null==t?void 0:t.defaults)||{}),st={},ot=(t,e,i)=>{if(st[t])return st[t];customElements.define(t,class extends et{static get properties(){return it(i)}static get styles(){return null==i?void 0:i.styles}constructor(){super(),(t=>void 0!==t&&void 0!==t.defaults)(i)&&Object.entries(i.defaults).forEach((([t,e])=>{this[t]=e}))}render(){return e(this)}});const s=document.createElement(t);return st[t]=s,s};var nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},rt={},lt={},ct={};Object.defineProperty(ct,"t",{value:!0}),ct.shallowClone=void 0,ct.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)};var at={};function ht(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function ut(t){const e=t;if(e.o)return e;const i=ht(t),s=i.updated;return e.o={index:0,count:0,states:[],reducers:[]},i.updated=t=>(e.o.index=0,s(t)),e}Object.defineProperty(at,"t",{value:!0}),at.withReducer=at.withState=at.decorate=at.asUpdateableLitElement=void 0,at.asUpdateableLitElement=ht,at.decorate=ut,at.withState=function(t,e,i={}){const s=ut(t),{index:o,count:n}=s.o;return o===n?(s.o.index++,s.o.count++,s.o.states.push(e),e):(s.o.index++,i.updateDefault&&s.o.states[o].inject(e.getState()),s.o.states[o])},at.withReducer=function(t,e){const i=ut(t),{index:s,count:o,reducers:n}=i.o;return s!==o||n[s-1]?i.o.reducers[s-1]:(i.o.reducers[s-1]=e,e)};var dt=nt&&nt.u||function(t,e,i,s){return new(i||(i=Promise))((function(o,n){function r(t){try{c(s.next(t))}catch(t){n(t)}}function l(t){try{c(s.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(lt,"t",{value:!0}),lt.useState=void 0;const vt=ct,pt=at;lt.useState=(t,e,i={})=>{let s=vt.shallowClone(e);const o=[()=>t.requestUpdate()];return pt.withState(t,{publish:t=>dt(void 0,void 0,void 0,(function*(){s!==t&&(s=vt.shallowClone(t),o.forEach((t=>t(s))))})),subscribe:t=>o.push(t),getState:()=>s,inject:t=>{s=t}},i)};var ft={};Object.defineProperty(ft,"t",{value:!0}),ft.useReducer=void 0;const gt=lt,bt=at;ft.useReducer=(t,e,i,s={})=>{const{getState:o,publish:n}=gt.useState(t,i,s),r=[];return bt.withReducer(t,{getState:o,subscribe:t=>r.push(t),when:(t,e)=>r.push(((i,s)=>i===t&&e(s))),publish:(i,l)=>{const c=e(o());c[i]&&(n(c[i](l)),r.forEach((t=>t(i,o()))),s.dispatchEvent&&t.dispatchEvent(new CustomEvent(i,{detail:o()})))}})},function(t){Object.defineProperty(t,"t",{value:!0});var e=lt;Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return e.useState}});var i=ft;Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return i.useReducer}})}(rt);var mt={},wt={},yt={};function kt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function St(t){const e=t;if(e.i)return e;const i=kt(t),s=i.updated;return e.i={index:0,count:0,effects:[]},i.updated=t=>(e.i.index=0,s(t)),e}Object.defineProperty(yt,"t",{value:!0}),yt.withEffect=yt.decorate=yt.asUpdateableLitElement=void 0,yt.asUpdateableLitElement=kt,yt.decorate=St,yt.withEffect=function(t,e){const i=St(t),{index:s,count:o}=i.i;return s===o?(i.i.index++,i.i.count++,i.i.effects.push(e),e):(i.i.index++,i.i.effects[s])},Object.defineProperty(wt,"t",{value:!0}),wt.useOnce=wt.useEffect=void 0;const xt=yt;function jt(t,e,i){const s=xt.withEffect(t,{on:e,observe:["__initial__dirty"]});s.observe.some(((t,e)=>i[e]!==t))&&s.on(),s.observe=i}wt.useEffect=jt,wt.useOnce=(t,e)=>jt(t,e,[]),function(t){Object.defineProperty(t,"t",{value:!0});var e=wt;Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return e.useEffect}}),Object.defineProperty(t,"useOnce",{enumerable:!0,get:function(){return e.useOnce}})}(mt);var $t=mt.useOnce,Ot=rt.useState;const Ct="html-presentations/set-preview-mode",Et="html-presentations/slide/switch",Mt="html-presentations/block-lessons/click";function zt(){const t=document.createElement("style");t.appendChild(document.createTextNode("\n  html,body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n\n    --colorContrast: #331832ff;\n    --colorHighlight: #d81e5bff;\n    --colorFocus: #f0544fff;\n    --colorShow: #c6d8d3ff;\n    --colorMain: #fdf0d5ff;\n  }\n")),document.head.insertBefore(t,document.head.firstChild)}let Tt;window.addEventListener("message",(t=>{null==Tt||Tt.postMessage(t.data,location.href)})),ot("presentation-body",(t=>($t(t,zt),$t(t,(()=>{document.addEventListener("keydown",(function(e){e.ctrlKey&&"o"===e.key&&(console.log("opening fullscreen"),function(t){t.requestFullscreen&&t.requestFullscreen()}(t)),e.ctrlKey&&"c"===e.key&&(console.log("opening second window"),Tt&&Tt.close(),Tt=window.open(window.location.href,"popup","resizable,scrollbars"),null==Tt||Tt.addEventListener("load",(()=>{null==Tt||Tt.postMessage({type:Ct},location.href)})))}))})),N`<slot></slot>`)),{styles:n`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      scroll-behavior: smooth;

      overflow: scroll-y;
      text-align: center;
    }
    h1 {
      color: var(--colorFocus);
      font-size: 15rem;
      line-height: 10rem;
      position: absolute;
      bottom: 0;
    }
    h2 {
      color: var(--colorContrast);
      font-size: 5rem;
      line-height: 5rem;
      margin-top: 4rem;
    }
    video {
      width: 100%;
      height: 70%;
    }
  `});ot("presentation-slide",(t=>{const e=[...document.querySelectorAll("presentation-slide")].findIndex((e=>e===t));return $t(t,(()=>{window.addEventListener("message",(i=>{var s,o,n;(null===(s=i.data)||void 0===s?void 0:s.type)===Et&&(null===(o=i.data)||void 0===o?void 0:o.payload)===e&&t.scrollIntoView(),(null===(n=i.data)||void 0===n?void 0:n.type)===Ct&&(console.log("Slide in preview mode"),t.style.height="50%",t.style.width="50%",t.style.zoom="0.5")})),window.location.hash===`#${e}`&&t.scrollIntoView()})),N`<slot></slot> ${t.last?"":N`<div
          class="scroller next"
          role="next-slide"
          @click=${()=>{window.postMessage({type:Et,payload:e+1},location.href),window.location.hash=`#${e+1}`}}
        >
          next
        </div>`}
    ${t.first?"":N`<div
          class="scroller"
          role="previous-slide"
          @click=${()=>{window.postMessage({type:Et,payload:e-1},location.href),window.location.hash="#"+(e-1)}}
        >
          prev
        </div>`}`}),{styles:n`
  :host {
    position: relative;
    display: inline-block;
    border: solid 1px gray;
    width: 100%;
    height: 100%;
    background-color: var(--colorMain);
  }
  :host slot {
      display:block;
    width: 100%;
    height: 100%;
    overflow-x: auto;
  }
  * {
    text-align: center;
    font-family: 'Martel Sans', sans-serif;
  }
  .scroller {
    display: block;
    position: absolute;
    bottom: 0px;
    left: 20px;
    cursor: pointer;
  }
  .scroller.next {
    right: 20px;
    left: auto;
  }
`,defaults:{first:!1,last:!1}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class _t extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.vt=R,t.type!==At)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R)return this.Vt=void 0,this.vt=t;if(t===P)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const e=[t];return e.raw=e,this.Vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}_t.directiveName="unsafeHTML",_t.resultType=1;const Ut=(t=>(...e)=>({_$litDirective$:t,values:e}))(_t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");const Nt=n`
code[class*=language-],pre[class*=language-]{color:#657b83;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{background:#073642}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{background:#073642}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background-color:#fdf6e3}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#93a1a1}.token.punctuation{color:#586e75}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#268bd2}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string,.token.url{color:#2aa198}.token.entity{color:#657b83;background:#eee8d5}.token.atrule,.token.attr-value,.token.keyword{color:#859900}.token.class-name,.token.function{color:#b58900}.token.important,.token.regex,.token.variable{color:#cb4b16}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
`,Pt=n`
:host {
    width: 30%;
    margin-top: 2rem;
    padding: 10px;
}

slot {
  transition: opacity 2s;
  display: block;
}
.visible {
    opacity: 1;
}
.hidden {
    opacity: 0;
}
`;ot("block-lessons",(t=>{const{getState:e,publish:i}=Ot(t,0);return $t(t,(()=>{t.addEventListener("click",(()=>{const s=Math.min(e(),Number.MAX_SAFE_INTEGER-1)+1;i(s),window.postMessage({type:Mt,clicks:s,source:t.id},window.origin)})),window.addEventListener("message",(e=>{var s;(null===(s=e.data)||void 0===s?void 0:s.type)===Ct&&(t.id=`${t.id}-preview-mode`,i(Number.MAX_SAFE_INTEGER),window.postMessage({type:Mt,clicks:Number.MAX_SAFE_INTEGER,source:t.id},window.origin))}))})),N`<slot></slot>`}),{styles:[n`
:host {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}`]}),ot("block-lesson",(t=>{const e=t.attributes.appearOnClick?parseInt(t.attributes.appearOnClick.value,10):t.appearOnClick,{getState:i,publish:s}=Ot(t,0);return $t(t,(()=>{window.addEventListener("message",(e=>{var i,o,n;e.origin===window.origin&&(null===(i=e.data)||void 0===i?void 0:i.type)===Mt&&(null===(o=e.data)||void 0===o?void 0:o.source)===(null===(n=t.parentElement)||void 0===n?void 0:n.id)&&s(e.data.clicks)}))})),N`<slot class="${e<=i()?" visible":"hidden"}"></slot>`}),{styles:[Pt],defaults:{appearOnClick:0}});const Rt=[];let qt=!1;if(!document.head.querySelector("script#prism")){const t=document.createElement("script");t.id="prism",t.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.0/prism.min.js",t.type="text/javascript",t.onload=()=>(qt=!0,Rt.forEach((t=>t()))),t.dataset.manual="true",document.head.append(t);const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.0/plugins/autoloader/prism-autoloader.min.js",document.head.append(e)}ot("block-code",(t=>{var e;$t(t,(()=>{return e=()=>t.requestUpdate(),void(qt?e():Rt.push(e));var e}));const i=null!==(e=t.innerHTML.replace(/\&amp;/gi,"&").replace(/\&gt;/gi,">").replace(/\&lt;/gi,"<"))&&void 0!==e?e:"";try{return N`<pre class="language-${t.lang}">
    <code class="language-${t.lang}">${Prism?Ut(Prism.highlight(i,Prism.languages[t.lang],t.lang)):N`<slot></slot>`}</code>
</pre>`}catch(t){return N`<slot></slot>`}}),{styles:[Nt]});
//# sourceMappingURL=index.esm.js.map
