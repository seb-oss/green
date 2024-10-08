import{n as d,r as _,g as y,G as b,h as c}from"./gds-element-QykLKB9o.js";import{t as x}from"./tokens.style-Dwr4YKnv.js";import{i as $}from"./lit-element-BoQqPHl6.js";const S=$`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }

    slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-m);
    }

    :host([notification]) slot[name='trail']::slotted(*) {
      line-height: var(--gds-space-s);
    }

    :host([notification]) slot[name='lead']::slotted(*) {
      line-height: var(--gds-space-s);
    }
  }
`;var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},l=(t,e,s,i)=>{for(var a=i>1?void 0:i?O(e,s):e,h=t.length-1,f;h>=0;h--)(f=t[h])&&(a=(i?f(e,s,a):f(a))||a);return i&&a&&E(e,s,a),a},z=(t,e,s)=>e.has(t)||p("Cannot "+s),C=(t,e,s)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),r=(t,e,s)=>(z(t,e,"access private method"),s),o,m,g,u,v;let n=class extends b{constructor(){super(),C(this,o),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",i=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${i}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${r(this,o,m).call(this)} ${r(this,o,g).call(this)} ${r(this,o,v).call(this)}
    </gds-flex>`}};o=new WeakSet;m=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};g=function(){return c`<slot @slotchange=${r(this,o,u)}></slot>`};u=function(t){const s=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(i=>{var a;return i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&((a=i.textContent)==null?void 0:a.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};n.styles=[x,S];l([d()],n.prototype,"variant",2);l([d({type:String})],n.prototype,"size",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);l([d({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);l([_()],n.prototype,"mainSlotOccupied",2);n=l([y("gds-badge")],n);
