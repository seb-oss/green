import{n as c,r as y}from"./Reflect-DJ7r0WLU.js";import{e as b}from"./class-map-CXsQwv0r.js";import{h as g,G as m,g as x}from"./gds-element-DTROifYq.js";import{t as z}from"./tokens.style-CQAfIFlK.js";import{w,b as S,d as O}from"./declarative-layout-mixins-C4FFYA_h.js";import{G as k}from"./flex.component-BYRotL8F.js";import{i as E}from"./lit-element-Bx14lxc-.js";const C=E`
  @layer tokens, core, variants, sizes, states, notification;

  @layer core {
    :host {
      display: inline-block;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: var(--gds-sys-space-3xs);
      padding: var(--_padding);
      min-height: var(--_block-size);
      border-radius: var(--_border-radius);
      width: 100%;
      min-width: var(--_inline-size);
      font: var(--_font);
      background-color: var(--_bg);
      color: var(--_color);
      box-sizing: border-box;

      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-2xs);
      --_inline-size: var(--gds-sys-space-l);
      --_font: var(--gds-sys-text-detail-book-s);
    }
  }

  @layer variants {
    .badge.information {
      --_bg: var(--gds-sys-color-l3-information-03);
      --_color: var(--gds-sys-color-content-information-01);
    }

    .badge.notice {
      --_bg: var(--gds-sys-color-l3-notice-03);
      --_color: var(--gds-sys-color-content-notice-01);
    }

    .badge.positive {
      --_bg: var(--gds-sys-color-l3-positive-03);
      --_color: var(--gds-sys-color-content-positive-03);
    }

    .badge.warning {
      --_bg: var(--gds-sys-color-l3-warning-03);
      --_color: var(--gds-sys-color-content-warning-01);
    }

    .badge.negative {
      --_bg: var(--gds-sys-color-l3-negative-03);
      --_color: var(--gds-sys-color-content-negative-01);
    }

    .badge.disabled {
      --_bg: var(--gds-sys-color-l3-disabled-03);
      --_color: var(--gds-sys-color-content-disabled-01);
    }
  }

  @layer sizes {
    .badge.small {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_border-radius: var(--gds-sys-space-3xs);
      --_font: var(--gds-sys-text-detail-book-xs);
    }
  }

  @layer notification {
    .badge.notification {
      --_padding: var(--gds-sys-space-3xs);
      --_block-size: var(--gds-sys-space-xs);
      --_border-radius: var(--gds-sys-space-max);
      --_inline-size: 0;
      justify-content: center;
      gap: 0;
      --_bg: var(--gds-sys-color-l3-negative-01);
      --_color: var(--gds-sys-color-content-inversed);
      --_font: var(--gds-sys-text-detail-book-xs);
    }

    .badge.notification.with-content {
      --_padding: var(--gds-sys-space-4xs) var(--gds-sys-space-2xs);
      --_block-size: var(--gds-sys-space-m);
      --_inline-size: var(--gds-sys-space-l);
    }
  }

  @layer states {
    .badge.rounded {
      --_border-radius: var(--gds-sys-space-max);
      justify-content: center;
    }
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;var G=Object.defineProperty,N=Object.getOwnPropertyDescriptor,h=s=>{throw TypeError(s)},n=(s,t,a,i)=>{for(var e=i>1?void 0:i?N(t,a):t,d=s.length-1,p;d>=0;d--)(p=s[d])&&(e=(i?p(t,a,e):p(e))||e);return i&&e&&G(t,a,e),e},P=(s,t,a)=>t.has(s)||h("Cannot "+a),T=(s,t,a)=>t.has(s)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,a),l=(s,t,a)=>(P(s,t,"access private method"),a),r,v,_,f,u;let o=class extends w(S(O(m))){constructor(){super(...arguments),T(this,r),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const s=b({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return g`
      <div class="${s}">
        ${[l(this,r,_).call(this),l(this,r,f).call(this),l(this,r,u).call(this)]}
      </div>
    `}};r=new WeakSet;v=function(s,t){const i=s.target.assignedNodes({flatten:!0});this[t]=i.length>0&&i.some(e=>{var d;return e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE&&((d=e.textContent)==null?void 0:d.trim())!==""})};_=function(){if(this.size!=="small"||!this.notification)return g`<slot
        name="lead"
        @slotchange=${s=>l(this,r,v).call(this,s,"leadSlotOccupied")}
      ></slot>`};f=function(){return g`<slot
      @slotchange=${s=>l(this,r,v).call(this,s,"mainSlotOccupied")}
    ></slot>`};u=function(){return g`<slot name="trail"></slot>`};o.styles=[z,C];n([c()],o.prototype,"variant",2);n([c({type:String})],o.prototype,"size",2);n([c({attribute:"notification",type:Boolean,reflect:!0})],o.prototype,"notification",2);n([c({attribute:"rounded",type:Boolean,reflect:!0})],o.prototype,"rounded",2);n([y()],o.prototype,"mainSlotOccupied",2);n([y()],o.prototype,"leadSlotOccupied",2);o=n([x("gds-badge",{dependsOn:[k]})],o);export{o as G};
