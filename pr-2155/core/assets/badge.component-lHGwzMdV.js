import{h as c,n as l,r as _,G as y,g as b}from"./custom-element-scoping-b4c89-hi.js";import{t as x}from"./tokens.style-C9bLefPj.js";import{w as S,b as $,d as O}from"./declarative-layout-mixins-CxeMR8ZJ.js";import{G as z}from"./flex.component-BDILfbvS.js";import{i as E}from"./lit-element-Bx14lxc-.js";const w=E`
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
`;var C=Object.defineProperty,G=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},n=(t,e,i,s)=>{for(var o=s>1?void 0:s?G(e,i):e,h=t.length-1,p;h>=0;h--)(p=t[h])&&(o=(s?p(e,i,o):p(o))||o);return s&&o&&C(e,i,o),o},N=(t,e,i)=>e.has(t)||f("Cannot "+i),P=(t,e,i)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),d=(t,e,i)=>(N(t,e,"access private method"),i),r,u,m,g,v;let a=class extends S($(O(y))){constructor(){super(...arguments),P(this,r),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const t=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",e=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${s}"
      width="100%"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${d(this,r,u).call(this)} ${d(this,r,m).call(this)}
      ${d(this,r,v).call(this)}
    </gds-flex>`}};r=new WeakSet;u=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};m=function(){return c`<slot @slotchange=${d(this,r,g)}></slot>`};g=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(s=>{var o;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((o=s.textContent)==null?void 0:o.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};a.styles=[x,w];n([l()],a.prototype,"variant",2);n([l({type:String})],a.prototype,"size",2);n([l({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);n([l({attribute:"notification",type:Boolean,reflect:!0})],a.prototype,"notification",2);n([l({attribute:"rounded",type:Boolean,reflect:!0})],a.prototype,"rounded",2);n([_()],a.prototype,"mainSlotOccupied",2);a=n([b("gds-badge",{dependsOn:[z]})],a);export{a as G};
