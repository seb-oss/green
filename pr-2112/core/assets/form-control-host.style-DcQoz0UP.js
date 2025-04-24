import{l as k}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as h,r as u,G as C,h as c,g as $}from"./custom-element-scoping-b4c89-hi.js";import{a as E}from"./query-p8xgzTDt.js";import{e as m}from"./class-map-CXsQwv0r.js";import{T}from"./transitional-styles-DZvN5yHb.js";import{w as D}from"./watch-tFciLXSI.js";import{i as b}from"./lit-element-Bx14lxc-.js";const G=b`
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
      gap: var(--gds-space-xs);
      padding-block: var(--gds-space-xs);
      padding-inline: var(--gds-space-m) var(--gds-space-s);
      min-block-size: var(--gds-space-3xl);
      block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
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
        gap: var(--gds-space-xs);
        right: var(--gds-space-s);
        top: var(--gds-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-space-s);

      &.small {
        padding-inline-end: var(--gds-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
      block-size: var(--gds-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-space-s);
      padding-inline-start: var(--gds-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-space-xs);
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-space-l);
      block-size: var(--gds-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},l=(e,t,s,o)=>{for(var i=o>1?void 0:o?N(t,s):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(i=(o?d(t,s,i):d(i))||i);return o&&i&&B(t,s,i),i},y=(e,t,s)=>t.has(e)||x("Cannot "+s),v=(e,t,s)=>(y(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g=(e,t,s)=>(y(e,t,"access private method"),s),p,n,_,S,z,w,O;let a=class extends C{constructor(){super(),f(this,n),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,f(this,p,(e,t)=>{const o=t.target.assignedNodes({flatten:!0}),i=o.length>0&&o.some(r=>{var d;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&((d=r.textContent)==null?void 0:d.trim())!==""});e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),T.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return c`
      <div class="field ${m(e)}" part="_base">
        ${g(this,n,_).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};p=new WeakMap;n=new WeakSet;_=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return c`
      ${g(this,n,S).call(this)} ${g(this,n,z).call(this)}
      <div class="${m(e)}">
        ${g(this,n,w).call(this)} ${g(this,n,O).call(this)}
      </div>
    `};S=function(){return c` <slot
      name="lead"
      @slotchange=${e=>v(this,p).call(this,"lead",e)}
    ></slot>`};z=function(){return c`<div
      class="main-slot-wrap ${m({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>v(this,p).call(this,"main",e)}
      ></slot>
    </div>`};w=function(){return c`
      <slot
        name="action"
        @slotchange=${e=>v(this,p).call(this,"action",e)}
      ></slot>
    `};O=function(){return c`
      <slot
        name="trail"
        @slotchange=${e=>v(this,p).call(this,"trail",e)}
      ></slot>
    `};a.styles=[G];l([h()],a.prototype,"size",2);l([h({type:Boolean})],a.prototype,"multiline",2);l([h({type:Boolean,reflect:!0})],a.prototype,"disabled",2);l([h({type:Boolean})],a.prototype,"invalid",2);l([E("slot:not([name])")],a.prototype,"_mainSlotElement",2);l([u()],a.prototype,"_leadSlotOccupied",2);l([u()],a.prototype,"_trailSlotOccupied",2);l([u()],a.prototype,"_actionSlotOccupied",2);l([D("disabled")],a.prototype,"_handleDisabledChange",1);a=l([$("gds-field-base"),k()],a);const j=b`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-space-2xs);
  }

  :host([size='small']) .native-control {
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
  }

  :host([disabled]) {
    color: var(--gds-color-l3-content-disabled);
    pointer-events: none;
  }

  .native-control {
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-space-m);
    max-width: var(--gds-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-space-l);
    display: flex;
  }
`;export{a as G,j as f};
