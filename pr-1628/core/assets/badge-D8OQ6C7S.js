import{n as d,r as _,g as y,G as b,h as c}from"./gds-element-QykLKB9o.js";import{t as x}from"./tokens.style-DuOE18tp.js";import{i as S}from"./lit-element-BoQqPHl6.js";const $=S`
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
`;var z=Object.defineProperty,O=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},l=(t,e,i,a)=>{for(var s=a>1?void 0:a?O(e,i):e,h=t.length-1,p;h>=0;h--)(p=t[h])&&(s=(a?p(e,i,s):p(s))||s);return a&&s&&z(e,i,s),s},E=(t,e,i)=>e.has(t)||f("Cannot "+i),C=(t,e,i)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),r=(t,e,i)=>(E(t,e,"access private method"),i),o,m,u,g,v;let n=class extends b{constructor(){super(),C(this,o),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",a=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs",s=this.mainSlotOccupied?"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${a}"
      width="max-content"
      inline-size="${s}"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${r(this,o,m).call(this)} ${r(this,o,u).call(this)}
      ${r(this,o,v).call(this)}
    </gds-flex>`}};o=new WeakSet;m=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};u=function(){return c`<slot @slotchange=${r(this,o,g)}></slot>`};g=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(a=>{var s;return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&((s=a.textContent)==null?void 0:s.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};n.styles=[x,$];l([d()],n.prototype,"variant",2);l([d({type:String})],n.prototype,"size",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);l([d({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);l([_()],n.prototype,"mainSlotOccupied",2);n=l([y("gds-badge")],n);
