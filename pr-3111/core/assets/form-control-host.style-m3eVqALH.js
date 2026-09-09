import{l as C}from"./localized-decorator-C89aei6H.js";import{i as b,n as h,l as $,E as y,$ as E,D as B,V as T,e as v,h as r,d as D,a as A}from"./iframe-D9F9vJcX.js";import{I as G}from"./lock.component-sAI_HyBg.js";const H=b`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-sys-space-xs);
      padding-block: var(--gds-sys-space-xs);
      padding-inline: var(--gds-sys-space-m) var(--gds-sys-space-s);
      min-block-size: var(--gds-sys-space-3xl);
      block-size: var(--gds-sys-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-sys-radius-xs);
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      outline-offset: 0;
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-01);
      cursor: text;
      transition-property: background-color, outline-offset;
      backface-visibility: hidden;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-linear);

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-xs);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-4xs);
      outline-offset: var(--gds-sys-space-4xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-3xs);
      padding: var(--gds-sys-space-3xs) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-2xl);
      block-size: var(--gds-sys-space-2xl);
      border-radius: var(--gds-sys-radius-2xs);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-sys-space-s);
      padding-inline-start: var(--gds-sys-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-sys-color-l3-disabled-01);
      color: var(--gds-sys-color-content-disabled-01);
      border-color: transparent;
      pointer-events: none;
    }

    .field.readonly {
      background: var(--gds-sys-color-l3-disabled-01);
      border-color: var(--gds-sys-color-l3-disabled-01);
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.small.lead-has-badge {
      padding-inline-start: var(--gds-sys-space-2xs);
    }

    .field.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-xs);
    }

    .field.small.trail-slot-occupied {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);
    }

    .field.small.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-2xs);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
      align-self: stretch;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover:not(.readonly) {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-02),
          var(--gds-sys-color-state-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    gds-icon-lock {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var N=Object.defineProperty,L=Object.getOwnPropertyDescriptor,x=s=>{throw TypeError(s)},i=(s,e,a,d)=>{for(var l=d>1?void 0:d?L(e,a):e,o=s.length-1,u;o>=0;o--)(u=s[o])&&(l=(d?u(e,a,l):u(l))||l);return d&&l&&N(e,a,l),l},_=(s,e,a)=>e.has(s)||x("Cannot "+a),c=(s,e,a)=>(_(s,e,"read from private field"),a?a.call(s):e.get(s)),m=(s,e,a)=>e.has(s)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),g=(s,e,a)=>(_(s,e,"access private method"),a),p,n,S,f,k,O,w,z;let t=class extends B{constructor(){super(),m(this,n),this.size="large",this.multiline=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,m(this,p,(s,e)=>{const d=e.target.assignedNodes({flatten:!0}),l=d.length>0&&d.some(o=>o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&o.textContent?.trim()!=="");s==="lead"?(this._leadSlotOccupied=l,this._leadHasBadge=l&&d.some(o=>o.getAttribute?.("gds-element")==="gds-badge")):s==="trail"?this._trailSlotOccupied=l:s==="action"&&(this._actionSlotOccupied=l)})}connectedCallback(){super.connectedCallback(),T.instance.apply(this,"gds-field-base")}render(){const s={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,readonly:this.readonly,"lead-slot-occupied":this._leadSlotOccupied||c(this,n,f),"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${v(s)}" part="_base">
        ${g(this,n,S).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};p=new WeakMap;n=new WeakSet;S=function(){const s={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${g(this,n,k).call(this)} ${g(this,n,O).call(this)}
      <div class="${v(s)}">
        ${g(this,n,w).call(this)} ${g(this,n,z).call(this)}
      </div>
    `};f=function(){return this.readonly&&!this._leadSlotOccupied};k=function(){return r`
      ${D(c(this,n,f),()=>r`<gds-icon-lock solid></gds-icon-lock>`)}
      <slot
        name="lead"
        @slotchange=${s=>c(this,p).call(this,"lead",s)}
      ></slot>
    `};O=function(){return r`<div
      class="main-slot-wrap ${v({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${s=>c(this,p).call(this,"main",s)}
      ></slot>
    </div>`};w=function(){return r`
      <slot
        name="action"
        @slotchange=${s=>c(this,p).call(this,"action",s)}
      ></slot>
    `};z=function(){return r`
      <slot
        name="trail"
        @slotchange=${s=>c(this,p).call(this,"trail",s)}
      ></slot>
    `};t.styles=[H];i([h()],t.prototype,"size",2);i([h({type:Boolean})],t.prototype,"multiline",2);i([h({type:Boolean,reflect:!0})],t.prototype,"disabled",2);i([h({type:Boolean,reflect:!0})],t.prototype,"readonly",2);i([h({type:Boolean})],t.prototype,"invalid",2);i([$("slot:not([name])")],t.prototype,"_mainSlotElement",2);i([y()],t.prototype,"_leadSlotOccupied",2);i([y()],t.prototype,"_leadHasBadge",2);i([y()],t.prototype,"_trailSlotOccupied",2);i([y()],t.prototype,"_actionSlotOccupied",2);i([E("disabled")],t.prototype,"_handleDisabledChange",1);t=i([A("gds-field-base",{dependsOn:[G]}),C()],t);const F=b`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-sys-space-3xs);
  }

  :host([size='small']) .native-control {
    font: var(--gds-sys-text-detail-s-regular);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-m-regular);
    align-items: center;
    align-self: center;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-sys-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-m);
    max-width: var(--gds-sys-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-l);
    display: flex;
  }
`;export{t as G,F as f};
