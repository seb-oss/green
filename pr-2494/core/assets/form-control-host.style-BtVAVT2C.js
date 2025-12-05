import{i as m,n as h,d as C,z as v,a2 as k,A as $,Y as E,a as y,h as c,g as B,I as T}from"./iframe-BAAemVnK.js";const A=m`
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
        var(--gds-sys-color-border-interactive);
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
`;var D=Object.defineProperty,G=Object.getOwnPropertyDescriptor,b=s=>{throw TypeError(s)},o=(s,e,t,r)=>{for(var i=r>1?void 0:r?G(e,t):e,l=s.length-1,n;l>=0;l--)(n=s[l])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&D(e,t,i),i},x=(s,e,t)=>e.has(s)||b("Cannot "+t),u=(s,e,t)=>(x(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>e.has(s)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),g=(s,e,t)=>(x(s,e,"access private method"),t),p,d,_,S,O,w,z;let a=class extends ${constructor(){super(),f(this,d),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,f(this,p,(s,e)=>{const r=e.target.assignedNodes({flatten:!0}),i=r.length>0&&r.some(l=>{var n;return l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&((n=l.textContent)==null?void 0:n.trim())!==""});s==="lead"?(this._leadSlotOccupied=i,this._leadHasBadge=i&&r.some(l=>{var n;return((n=l.getAttribute)==null?void 0:n.call(l,"gds-element"))==="gds-badge"})):s==="trail"?this._trailSlotOccupied=i:s==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),E.instance.apply(this,"gds-field-base")}render(){const s={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return c`
      <div class="field ${y(s)}" part="_base">
        ${g(this,d,_).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};p=new WeakMap;d=new WeakSet;_=function(){const s={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return c`
      ${g(this,d,S).call(this)} ${g(this,d,O).call(this)}
      <div class="${y(s)}">
        ${g(this,d,w).call(this)} ${g(this,d,z).call(this)}
      </div>
    `};S=function(){return c` <slot
      name="lead"
      @slotchange=${s=>u(this,p).call(this,"lead",s)}
    ></slot>`};O=function(){return c`<div
      class="main-slot-wrap ${y({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${s=>u(this,p).call(this,"main",s)}
      ></slot>
    </div>`};w=function(){return c`
      <slot
        name="action"
        @slotchange=${s=>u(this,p).call(this,"action",s)}
      ></slot>
    `};z=function(){return c`
      <slot
        name="trail"
        @slotchange=${s=>u(this,p).call(this,"trail",s)}
      ></slot>
    `};a.styles=[A];o([h()],a.prototype,"size",2);o([h({type:Boolean})],a.prototype,"multiline",2);o([h({type:Boolean,reflect:!0})],a.prototype,"disabled",2);o([h({type:Boolean})],a.prototype,"invalid",2);o([C("slot:not([name])")],a.prototype,"_mainSlotElement",2);o([v()],a.prototype,"_leadSlotOccupied",2);o([v()],a.prototype,"_leadHasBadge",2);o([v()],a.prototype,"_trailSlotOccupied",2);o([v()],a.prototype,"_actionSlotOccupied",2);o([k("disabled")],a.prototype,"_handleDisabledChange",1);a=o([B("gds-field-base"),T()],a);const N=m`
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
`;export{a as G,N as f};
