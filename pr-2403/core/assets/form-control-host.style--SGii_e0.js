import{l as C}from"./runtime-CNluP0A8.js";import{n as h,r as u}from"./Reflect-DJ7r0WLU.js";import{a as k}from"./query-p8xgzTDt.js";import{e as y}from"./if-defined-BAXgs-ZI.js";import{G as $,h as c,g as E}from"./gds-element-DTROifYq.js";import{T}from"./transitional-styles-BVSXzgEe.js";import{w as D}from"./watch-tFciLXSI.js";import{i as f}from"./lit-element-Bx14lxc-.js";const G=f`
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
      border-radius: var(--gds-sys-space-xs);
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      border: var(--gds-sys-space-4xs) solid
        var(--gds-sys-color-border-interactive);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-s);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);

      &.small {
        padding-inline-end: var(--gds-sys-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-3xs);
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-2xs);
      padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-xl);
      block-size: var(--gds-sys-space-xl);
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

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
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
      .field:hover {
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

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,b=s=>{throw TypeError(s)},l=(s,e,t,o)=>{for(var i=o>1?void 0:o?N(e,t):e,r=s.length-1,d;r>=0;r--)(d=s[r])&&(i=(o?d(e,t,i):d(i))||i);return o&&i&&B(e,t,i),i},x=(s,e,t)=>e.has(s)||b("Cannot "+t),v=(s,e,t)=>(x(s,e,"read from private field"),t?t.call(s):e.get(s)),m=(s,e,t)=>e.has(s)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),g=(s,e,t)=>(x(s,e,"access private method"),t),p,n,_,S,w,O,z;let a=class extends ${constructor(){super(),m(this,n),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,m(this,p,(s,e)=>{const o=e.target.assignedNodes({flatten:!0}),i=o.length>0&&o.some(r=>{var d;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((d=r.textContent)==null?void 0:d.trim())!==""});s==="lead"?this._leadSlotOccupied=i:s==="trail"?this._trailSlotOccupied=i:s==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),T.instance.apply(this,"gds-field-base")}render(){const s={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return c`
      <div class="field ${y(s)}" part="_base">
        ${g(this,n,_).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};p=new WeakMap;n=new WeakSet;_=function(){const s={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return c`
      ${g(this,n,S).call(this)} ${g(this,n,w).call(this)}
      <div class="${y(s)}">
        ${g(this,n,O).call(this)} ${g(this,n,z).call(this)}
      </div>
    `};S=function(){return c` <slot
      name="lead"
      @slotchange=${s=>v(this,p).call(this,"lead",s)}
    ></slot>`};w=function(){return c`<div
      class="main-slot-wrap ${y({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${s=>v(this,p).call(this,"main",s)}
      ></slot>
    </div>`};O=function(){return c`
      <slot
        name="action"
        @slotchange=${s=>v(this,p).call(this,"action",s)}
      ></slot>
    `};z=function(){return c`
      <slot
        name="trail"
        @slotchange=${s=>v(this,p).call(this,"trail",s)}
      ></slot>
    `};a.styles=[G];l([h()],a.prototype,"size",2);l([h({type:Boolean})],a.prototype,"multiline",2);l([h({type:Boolean,reflect:!0})],a.prototype,"disabled",2);l([h({type:Boolean})],a.prototype,"invalid",2);l([k("slot:not([name])")],a.prototype,"_mainSlotElement",2);l([u()],a.prototype,"_leadSlotOccupied",2);l([u()],a.prototype,"_trailSlotOccupied",2);l([u()],a.prototype,"_actionSlotOccupied",2);l([D("disabled")],a.prototype,"_handleDisabledChange",1);a=l([E("gds-field-base"),C()],a);const j=f`
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
    gap: var(--gds-sys-space-2xs);
  }

  :host([size='small']) .native-control {
    font: var(--gds-sys-text-detail-regular-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-regular-m);
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
`;export{a as G,j as f};
