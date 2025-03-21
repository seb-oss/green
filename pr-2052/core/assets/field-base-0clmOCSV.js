import{l as C}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as h,r as _,G as w,h as c,g as z}from"./custom-element-scoping-BOlwUH_F.js";import{a as $}from"./query-p8xgzTDt.js";import{e as x}from"./class-map-CXsQwv0r.js";import{T as E}from"./transitional-styles-D9IvMC4x.js";import{w as T}from"./watch-tFciLXSI.js";import{i as D}from"./lit-element-Bx14lxc-.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*B(e,t){if(e!==void 0){let s=0;for(const r of e)yield t(r,s++)}}const G=D`
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
`;var N=Object.defineProperty,A=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},o=(e,t,s,r)=>{for(var a=r>1?void 0:r?A(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(r?p(t,s,a):p(a))||a);return r&&a&&N(t,s,a),a},O=(e,t,s)=>t.has(e)||S("Cannot "+s),u=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(O(e,t,"access private method"),s),g,l,k,v,f,m,b;let i=class extends w{constructor(){super(),y(this,l),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,y(this,g,(e,t)=>{const r=t.target.assignedNodes({flatten:!0}),a=r.length>0&&r.some(d=>{var p;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((p=d.textContent)==null?void 0:p.trim())!==""});e==="lead"?this._leadSlotOccupied=a:e==="trail"?this._trailSlotOccupied=a:e==="action"&&(this._actionSlotOccupied=a)})}connectedCallback(){super.connectedCallback(),E.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return c`
      <div class="field ${x(e)}" part="_base">
        ${n(this,l,k).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};g=new WeakMap;l=new WeakSet;k=function(){if(this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied))return c`
        ${n(this,l,v).call(this)} ${n(this,l,f).call(this)}
        <div class="right">
          ${n(this,l,m).call(this)} ${n(this,l,b).call(this)}
        </div>
      `;{const e=[n(this,l,v).call(this),n(this,l,f).call(this),n(this,l,m).call(this),n(this,l,b).call(this)];return c`${B(e,t=>t)}`}};v=function(){return c` <slot
      name="lead"
      @slotchange=${e=>u(this,g).call(this,"lead",e)}
    ></slot>`};f=function(){return c`<div
      class="main-slot-wrap ${x({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>u(this,g).call(this,"main",e)}
      ></slot>
    </div>`};m=function(){return c`
      <slot
        name="action"
        @slotchange=${e=>u(this,g).call(this,"action",e)}
      ></slot>
    `};b=function(){return c`
      <slot
        name="trail"
        @slotchange=${e=>u(this,g).call(this,"trail",e)}
      ></slot>
    `};i.styles=[G];o([h()],i.prototype,"size",2);o([h({type:Boolean})],i.prototype,"multiline",2);o([h({type:Boolean,reflect:!0})],i.prototype,"disabled",2);o([h({type:Boolean})],i.prototype,"invalid",2);o([$("slot:not([name])")],i.prototype,"_mainSlotElement",2);o([_()],i.prototype,"_leadSlotOccupied",2);o([_()],i.prototype,"_trailSlotOccupied",2);o([_()],i.prototype,"_actionSlotOccupied",2);o([T("disabled")],i.prototype,"_handleDisabledChange",1);i=o([z("gds-field-base"),C()],i);i.define();export{B as o};
