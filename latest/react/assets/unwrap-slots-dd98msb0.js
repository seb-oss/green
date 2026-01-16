import{Z as y,E as $,i as x,b as C,d as p}from"./tokens.style-C8tF5EVt.js";import{i as k,t as w,e as I}from"./icon.component-JtScC6dz.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:E}=y,F=t=>t===null||typeof t!="object"&&typeof t!="function",G=t=>t.strings===void 0,_=()=>document.createComment(""),P=(t,s,e)=>{var a;const i=t._$AA.parentNode,o=s===void 0?t._$AB:s._$AA;if(e===void 0){const h=i.insertBefore(_(),o),n=i.insertBefore(_(),o);e=new E(h,n,t,t.options)}else{const h=e._$AB.nextSibling,n=e._$AM,r=n!==t;if(r){let l;(a=e._$AQ)==null||a.call(e,t),e._$AM=t,e._$AP!==void 0&&(l=t._$AU)!==n._$AU&&e._$AP(l)}if(h!==o||r){let l=e._$AA;for(;l!==h;){const d=l.nextSibling;i.insertBefore(l,o),l=d}}}return e},S=(t,s,e=t)=>(t._$AI(s,e),t),N={},U=(t,s=N)=>t._$AH=s,W=t=>t._$AH,Q=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(t,s)=>{var i;const e=t._$AN;if(e===void 0)return!1;for(const o of e)(i=o._$AO)==null||i.call(o,s,!1),c(o,s);return!0},f=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},A=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),T(s)}};function L(t){this._$AN!==void 0?(f(this),this._$AM=t,A(this)):this._$AM=t}function M(t,s=!1,e=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(s)if(Array.isArray(i))for(let a=e;a<i.length;a++)c(i[a],!1),f(i[a]);else i!=null&&(c(i,!1),f(i));else c(this,t)}const T=t=>{t.type==w.CHILD&&(t._$AP??(t._$AP=M),t._$AQ??(t._$AQ=L))};class H extends k{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),A(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,o;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),e&&(c(this,s),f(this))}setValue(s){if(G(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=()=>new O;class O{}const g=new WeakMap,K=I(class extends H{render(t){return $}update(t,[s]){var i;const e=s!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),$}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let e=g.get(s);e===void 0&&(e=new WeakMap,g.set(s,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,s;return typeof this.G=="function"?(t=g.get(this.ht??globalThis))==null?void 0:t.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),R=t=>{class s extends t{focus(i){this.setAttribute("tabindex","0"),super.focus(i)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",i=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:i.relatedTarget}))}),this.addEventListener("focus",i=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:i.relatedTarget}))})}}return s},B=x`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-regular-m);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-3xs);
        position: absolute;
        border: var(--gds-sys-space-4xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-sys-color-l2-neutral-03);
      color: var(--gds-sys-color-content-inversed);
    }

    :host(:hover:not([highlighted])) .item {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-05)
      );
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-3xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }
  }
`;var V=B,u;class Z{constructor(s){C(this,u,e=>{var a,h;const i=e.target;if(!this.host.navigableItems.includes(i))return;let o=!1;if(e.key==="ArrowDown"){const n=this.host.navigableItems.indexOf(i)+1,r=this.host.navigableItems[n];r==null||r.focus(),o=!0}else if(e.key==="ArrowUp"){const n=this.host.navigableItems.indexOf(i)-1,r=this.host.navigableItems[n];r==null||r.focus(),o=!0}else if(e.key==="Home")(a=this.host.navigableItems[0])==null||a.focus(),o=!0;else if(e.key==="End")(h=this.host.navigableItems[this.host.navigableItems.length-1])==null||h.focus(),o=!0;else{const n=e.key.toLowerCase();if(n.length!==1)return;const r=n>="a"&&n<="z",l=n>="0"&&n<="9";if(r||l){const d=this.host.navigableItems.find(m=>{var b;const v=(b=m.textContent)==null?void 0:b.trim().toLowerCase();return v==null?void 0:v.startsWith(n)});d==null||d.focus(),o=!0}}o&&(e.preventDefault(),e.stopPropagation())}),(this.host=s).addController(this)}hostConnected(){this.host.addEventListener("keydown",p(this,u))}hostDisconnected(){this.host.removeEventListener("keydown",p(this,u))}}u=new WeakMap;function q(t){let s=t;for(;s.assignedElements().length>0&&s.assignedElements()[0].nodeName==="SLOT";)s=s.assignedElements()[0];return s}export{R as F,Z as L,Q as M,j as e,H as f,F as i,U as m,K as n,V as o,W as p,P as s,q as u,S as v};
