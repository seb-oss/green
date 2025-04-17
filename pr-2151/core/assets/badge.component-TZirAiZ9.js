import{h as c,n as l,r as y,G as _,g as b}from"./custom-element-scoping-b4c89-hi.js";import{t as x}from"./tokens.style-FJSmZZcv.js";import{w as S,b as $,d as O}from"./declarative-layout-mixins-BgWwoHZ-.js";import{G as z}from"./flex.component-CPPMsy9S.js";import{i as E}from"./lit-element-Bx14lxc-.js";const w=E`
  :host {
    display: inline-block;
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
`;var C=Object.defineProperty,G=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},n=(t,e,s,i)=>{for(var o=i>1?void 0:i?G(e,s):e,h=t.length-1,p;h>=0;h--)(p=t[h])&&(o=(i?p(e,s,o):p(o))||o);return i&&o&&C(e,s,o),o},N=(t,e,s)=>e.has(t)||f("Cannot "+s),P=(t,e,s)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s)=>(N(t,e,"access private method"),s),r,u,m,g,v;let a=class extends S($(O(_))){constructor(){super(...arguments),P(this,r),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",i=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${i}"
      width="100%"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${d(this,r,u).call(this)} ${d(this,r,m).call(this)}
      ${d(this,r,v).call(this)}
    </gds-flex>`}};r=new WeakSet;u=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};m=function(){return c`<slot @slotchange=${d(this,r,g)}></slot>`};g=function(t){const s=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(i=>{var o;return i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&((o=i.textContent)==null?void 0:o.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};a.styles=[x,w];n([l()],a.prototype,"variant",2);n([l({type:String})],a.prototype,"size",2);n([l({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);n([l({attribute:"notification",type:Boolean,reflect:!0})],a.prototype,"notification",2);n([l({attribute:"rounded",type:Boolean,reflect:!0})],a.prototype,"rounded",2);n([y()],a.prototype,"mainSlotOccupied",2);a=n([b("gds-badge",{dependsOn:[z]})],a);export{a as G};
