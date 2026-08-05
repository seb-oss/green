import{l as C}from"./localized-decorator-DncZGlXD.js";import{i as m,n as g,f as k,w as h,$,z as E,T as B,a as y,h as d,g as T}from"./iframe-CNBLKHAI.js";const D=m`
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
`;var A=Object.defineProperty,G=Object.getOwnPropertyDescriptor,b=s=>{throw TypeError(s)},l=(s,e,t,n)=>{for(var i=n>1?void 0:n?G(e,t):e,o=s.length-1,v;o>=0;o--)(v=s[o])&&(i=(n?v(e,t,i):v(i))||i);return n&&i&&A(e,t,i),i},x=(s,e,t)=>e.has(s)||b("Cannot "+t),u=(s,e,t)=>(x(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>e.has(s)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),p=(s,e,t)=>(x(s,e,"access private method"),t),c,r,_,S,w,O,z;let a=class extends E{constructor(){super(),f(this,r),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,f(this,c,(s,e)=>{const n=e.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(o=>o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&o.textContent?.trim()!=="");s==="lead"?(this._leadSlotOccupied=i,this._leadHasBadge=i&&n.some(o=>o.getAttribute?.("gds-element")==="gds-badge")):s==="trail"?this._trailSlotOccupied=i:s==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-field-base")}render(){const s={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return d`
      <div class="field ${y(s)}" part="_base">
        ${p(this,r,_).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};c=new WeakMap;r=new WeakSet;_=function(){const s={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return d`
      ${p(this,r,S).call(this)} ${p(this,r,w).call(this)}
      <div class="${y(s)}">
        ${p(this,r,O).call(this)} ${p(this,r,z).call(this)}
      </div>
    `};S=function(){return d` <slot
      name="lead"
      @slotchange=${s=>u(this,c).call(this,"lead",s)}
    ></slot>`};w=function(){return d`<div
      class="main-slot-wrap ${y({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${s=>u(this,c).call(this,"main",s)}
      ></slot>
    </div>`};O=function(){return d`
      <slot
        name="action"
        @slotchange=${s=>u(this,c).call(this,"action",s)}
      ></slot>
    `};z=function(){return d`
      <slot
        name="trail"
        @slotchange=${s=>u(this,c).call(this,"trail",s)}
      ></slot>
    `};a.styles=[D];l([g()],a.prototype,"size",2);l([g({type:Boolean})],a.prototype,"multiline",2);l([g({type:Boolean,reflect:!0})],a.prototype,"disabled",2);l([g({type:Boolean})],a.prototype,"invalid",2);l([k("slot:not([name])")],a.prototype,"_mainSlotElement",2);l([h()],a.prototype,"_leadSlotOccupied",2);l([h()],a.prototype,"_leadHasBadge",2);l([h()],a.prototype,"_trailSlotOccupied",2);l([h()],a.prototype,"_actionSlotOccupied",2);l([$("disabled")],a.prototype,"_handleDisabledChange",1);a=l([T("gds-field-base"),C()],a);const M=m`
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
`;export{a as G,M as f};
