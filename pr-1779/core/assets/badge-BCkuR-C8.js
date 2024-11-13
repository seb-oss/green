import{n as d,r as _,g as b,G as y,h as c}from"./custom-element-scoping-b4lD3laR.js";import{t as x}from"./tokens.style-Y0rrifyK.js";import{i as $}from"./lit-element-C_s9q329.js";const S=$`
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
`;var E=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},l=(t,e,i,s)=>{for(var a=s>1?void 0:s?O(e,i):e,h=t.length-1,f;h>=0;h--)(f=t[h])&&(a=(s?f(e,i,a):f(a))||a);return s&&a&&E(e,i,a),a},z=(t,e,i)=>e.has(t)||p("Cannot "+i),C=(t,e,i)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),r=(t,e,i)=>(z(t,e,"access private method"),i),o,m,u,g,v;let n=class extends y{constructor(){super(),C(this,o),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${s}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${r(this,o,m).call(this)} ${r(this,o,u).call(this)}
      ${r(this,o,v).call(this)}
    </gds-flex>`}};o=new WeakSet;m=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};u=function(){return c`<slot @slotchange=${r(this,o,g)}></slot>`};g=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(s=>{var a;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((a=s.textContent)==null?void 0:a.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};n.styles=[x,S];l([d()],n.prototype,"variant",2);l([d({type:String})],n.prototype,"size",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);l([d({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);l([_()],n.prototype,"mainSlotOccupied",2);n=l([b("gds-badge")],n);
