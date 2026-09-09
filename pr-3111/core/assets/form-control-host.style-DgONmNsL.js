import{l as z}from"./localized-decorator-CPnzJVOl.js";import{i as m,n as g,l as C,E as y,$,D as E,V as B,e as u,h as r,d as T,a as D}from"./iframe-CNPadLMU.js";import{I as A}from"./lock.component-CTMDrZWZ.js";const G=m`
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

    .field.readonly .lead-slot-content {
      display: none;
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
      color: var(--gds-sys-color-content-disabled-01);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,b=s=>{throw TypeError(s)},i=(s,e,a,n)=>{for(var l=n>1?void 0:n?N(e,a):e,o=s.length-1,v;o>=0;o--)(v=s[o])&&(l=(n?v(e,a,l):v(l))||l);return n&&l&&H(e,a,l),l},x=(s,e,a)=>e.has(s)||b("Cannot "+a),h=(s,e,a)=>(x(s,e,"read from private field"),a?a.call(s):e.get(s)),f=(s,e,a)=>e.has(s)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),p=(s,e,a)=>(x(s,e,"access private method"),a),c,d,_,S,k,O,w;let t=class extends E{constructor(){super(),f(this,d),this.size="large",this.multiline=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._leadHasBadge=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,f(this,c,(s,e)=>{const n=e.target.assignedNodes({flatten:!0}),l=n.length>0&&n.some(o=>o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&o.textContent?.trim()!=="");s==="lead"?(this._leadSlotOccupied=l,this._leadHasBadge=l&&n.some(o=>o.getAttribute?.("gds-element")==="gds-badge")):s==="trail"?this._trailSlotOccupied=l:s==="action"&&(this._actionSlotOccupied=l)})}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-field-base")}render(){const s={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,readonly:this.readonly,"lead-slot-occupied":this._leadSlotOccupied||this.readonly,"lead-has-badge":this._leadHasBadge,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return r`
      <div class="field ${u(s)}" part="_base">
        ${p(this,d,_).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};c=new WeakMap;d=new WeakSet;_=function(){const s={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return r`
      ${p(this,d,S).call(this)} ${p(this,d,k).call(this)}
      <div class="${u(s)}">
        ${p(this,d,O).call(this)} ${p(this,d,w).call(this)}
      </div>
    `};S=function(){return r`
      ${T(this.readonly,()=>r`<gds-icon-lock solid></gds-icon-lock>`)}
      <span class="lead-slot-content">
        <slot
          name="lead"
          @slotchange=${s=>h(this,c).call(this,"lead",s)}
        ></slot>
      </span>
    `};k=function(){return r`<div
      class="main-slot-wrap ${u({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${s=>h(this,c).call(this,"main",s)}
      ></slot>
    </div>`};O=function(){return r`
      <slot
        name="action"
        @slotchange=${s=>h(this,c).call(this,"action",s)}
      ></slot>
    `};w=function(){return r`
      <slot
        name="trail"
        @slotchange=${s=>h(this,c).call(this,"trail",s)}
      ></slot>
    `};t.styles=[G];i([g()],t.prototype,"size",2);i([g({type:Boolean})],t.prototype,"multiline",2);i([g({type:Boolean,reflect:!0})],t.prototype,"disabled",2);i([g({type:Boolean,reflect:!0})],t.prototype,"readonly",2);i([g({type:Boolean})],t.prototype,"invalid",2);i([C("slot:not([name])")],t.prototype,"_mainSlotElement",2);i([y()],t.prototype,"_leadSlotOccupied",2);i([y()],t.prototype,"_leadHasBadge",2);i([y()],t.prototype,"_trailSlotOccupied",2);i([y()],t.prototype,"_actionSlotOccupied",2);i([$("disabled")],t.prototype,"_handleDisabledChange",1);t=i([D("gds-field-base",{dependsOn:[A]}),z()],t);const F=m`
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
