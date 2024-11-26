import{n as l,r as _,g as y,G as b,h as c}from"./custom-element-scoping-b4lD3laR.js";import{t as x}from"./tokens.style-Y0rrifyK.js";import{i as $}from"./lit-element-C_s9q329.js";import"./flex-Bsn6VNzj.js";const S=$`
  :host {
    display: inline-block;
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
`;var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},n=(t,e,i,s)=>{for(var o=s>1?void 0:s?O(e,i):e,h=t.length-1,p;h>=0;h--)(p=t[h])&&(o=(s?p(e,i,o):p(o))||o);return s&&o&&E(e,i,o),o},z=(t,e,i)=>e.has(t)||f("Cannot "+i),C=(t,e,i)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),d=(t,e,i)=>(z(t,e,"access private method"),i),r,u,m,g,v;let a=class extends b{constructor(){super(),C(this,r),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${s}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${d(this,r,u).call(this)} ${d(this,r,m).call(this)}
      ${d(this,r,v).call(this)}
    </gds-flex>`}};r=new WeakSet;u=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};m=function(){return c`<slot @slotchange=${d(this,r,g)}></slot>`};g=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(s=>{var o;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((o=s.textContent)==null?void 0:o.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};a.styles=[x,S];n([l()],a.prototype,"variant",2);n([l({type:String})],a.prototype,"size",2);n([l({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);n([l({attribute:"notification",type:Boolean,reflect:!0})],a.prototype,"notification",2);n([l({attribute:"rounded",type:Boolean,reflect:!0})],a.prototype,"rounded",2);n([_()],a.prototype,"mainSlotOccupied",2);a=n([y("gds-badge")],a);
