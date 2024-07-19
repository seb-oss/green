var v=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var g=(e,t,s)=>(v(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},_=(e,t,s,o)=>(v(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{b as A,i as y,x as I}from"./lit-element-71e04f06.js";import{f as k}from"./directive-helpers-9aabd8ef.js";import{i as E,t as T,e as Y}from"./directive-12249aa5.js";import{g as N,G as O}from"./gds-element-54cd6e2a.js";import{T as L}from"./transitional-styles-73ecf23d.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(e,t)=>{var o;const s=e._$AN;if(s===void 0)return!1;for(const n of s)(o=n._$AO)==null||o.call(n,t,!1),c(n,t);return!0},d=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},C=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),M(t)}};function H(e){this._$AN!==void 0?(d(this),this._$AM=e,C(this)):this._$AM=e}function D(e,t=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let i=s;i<o.length;i++)c(o[i],!1),d(o[i]);else o!=null&&(c(o,!1),d(o));else c(this,e)}const M=e=>{e.type==T.CHILD&&(e._$AP??(e._$AP=D),e._$AQ??(e._$AQ=H))};class P extends E{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),C(this),this.isConnected=t._$AU}_$AO(t,s=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),s&&(c(this,t),d(this))}setValue(t){if(k(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=()=>new F;class F{}const b=new WeakMap,J=Y(class extends P{render(e){return A}update(e,[t]){var o;const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),A}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let s=b.get(t);s===void 0&&(s=new WeakMap,b.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=b.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),R=y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`,X=e=>{class t extends e{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return t};var l;class Z{constructor(t){$(this,l,void 0);_(this,l,s=>{var i,a;const o=s.target;if(!this.host.navigableItems.includes(o))return;let n=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(o)+1,h=this.host.navigableItems[r];h==null||h.focus(),n=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(o)-1,h=this.host.navigableItems[r];h==null||h.focus(),n=!0}else if(s.key==="Home")(i=this.host.navigableItems[0])==null||i.focus(),n=!0;else if(s.key==="End")(a=this.host.navigableItems[this.host.navigableItems.length-1])==null||a.focus(),n=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const h=r>="a"&&r<="z",w=r>="0"&&r<="9";if(h||w){const u=this.host.navigableItems.find(x=>{var m;const f=(m=x.textContent)==null?void 0:m.trim().toLowerCase();return f==null?void 0:f.startsWith(r)});u==null||u.focus(),n=!0}}n&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",g(this,l))}hostDisconnected(){this.host.removeEventListener("keydown",g(this,l))}}l=new WeakMap;function tt(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}const z=y`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`;var G=Object.defineProperty,S=Object.getOwnPropertyDescriptor,W=(e,t,s,o)=>{for(var n=o>1?void 0:o?S(t,s):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(o?a(t,s,n):a(n))||n);return o&&n&&G(t,s,n),n};let p=class extends O{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>L.instance.apply(this,"gds-menu-heading"))}render(){return I`<slot></slot>`}};p.styles=z;p=W([N("gds-menu-heading")],p);export{X as F,Z as L,B as e,P as f,J as n,R as s,tt as u};
