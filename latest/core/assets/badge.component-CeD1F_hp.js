import{i as b,a0 as m,S as x,Q as z,J as S,a as w,h as c,t as O,n as g,I as y,g as k}from"./iframe-CASzBLiX.js";import{G as E}from"./flex.component-J9b9vMFV.js";const C=b`
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
`;var N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,h=s=>{throw TypeError(s)},n=(s,e,a,i)=>{for(var t=i>1?void 0:i?P(e,a):e,d=s.length-1,p;d>=0;d--)(p=s[d])&&(t=(i?p(e,a,t):p(t))||t);return i&&t&&N(e,a,t),t},T=(s,e,a)=>e.has(s)||h("Cannot "+a),G=(s,e,a)=>e.has(s)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,a),l=(s,e,a)=>(T(s,e,"access private method"),a),r,v,_,f,u;let o=class extends m(x(z(S))){constructor(){super(...arguments),G(this,r),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){const s=w({badge:!0,[this.variant]:!0,[this.size]:this.size==="small",notification:this.notification,"with-content":this.notification&&this.mainSlotOccupied,rounded:this.rounded});return c`
      <div class="${s}">
        ${[l(this,r,_).call(this),l(this,r,f).call(this),l(this,r,u).call(this)]}
      </div>
    `}};r=new WeakSet;v=function(s,e){const i=s.target.assignedNodes({flatten:!0});this[e]=i.length>0&&i.some(t=>{var d;return t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&((d=t.textContent)==null?void 0:d.trim())!==""})};_=function(){if(this.size!=="small"||!this.notification)return c`<slot
        name="lead"
        @slotchange=${s=>l(this,r,v).call(this,s,"leadSlotOccupied")}
      ></slot>`};f=function(){return c`<slot
      @slotchange=${s=>l(this,r,v).call(this,s,"mainSlotOccupied")}
    ></slot>`};u=function(){return c`<slot name="trail"></slot>`};o.styles=[O,C];n([g()],o.prototype,"variant",2);n([g({type:String})],o.prototype,"size",2);n([g({attribute:"notification",type:Boolean,reflect:!0})],o.prototype,"notification",2);n([g({attribute:"rounded",type:Boolean,reflect:!0})],o.prototype,"rounded",2);n([y()],o.prototype,"mainSlotOccupied",2);n([y()],o.prototype,"leadSlotOccupied",2);o=n([k("gds-badge",{dependsOn:[E]})],o);export{o as G};
