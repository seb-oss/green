import{n as d,r as _}from"./Reflect-DJ7r0WLU.js";import{h as c,G as y,g as b}from"./gds-element-DTROifYq.js";import{t as x}from"./tokens.style-DW_p3hws.js";import{w,b as S,d as k}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as O}from"./flex.component-sFfxQKGj.js";import{i as $}from"./lit-element-Bx14lxc-.js";const E=$`
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
`;var z=Object.defineProperty,C=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},r=(t,e,i,s)=>{for(var a=s>1?void 0:s?C(e,i):e,h=t.length-1,f;h>=0;h--)(f=t[h])&&(a=(s?f(e,i,a):f(a))||a);return s&&a&&z(e,i,a),a},G=(t,e,i)=>e.has(t)||p("Cannot "+i),N=(t,e,i)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),l=(t,e,i)=>(G(t,e,"access private method"),i),n,m,g,u,v;let o=class extends w(S(k(y))){constructor(){super(...arguments),N(this,n),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){let t,e;if(this.notification)t="negative-01",e="inversed";else switch(this.variant){case"information":t="information-03",e="information-01";break;case"notice":t="notice-03",e="notice-01";break;case"positive":t="positive-03",e="positive-03";break;case"warning":t="warning-03",e="warning-01";break;case"negative":t="negative-03",e="negative-01";break;case"disabled":t="disabled-03",e="disabled-01";break;default:t="information-03",e="information-01";break}const i=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return c`<gds-flex
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
      font="${this.size==="small"||this.notification?"detail-regular-xs":"detail-regular-s"}"
    >
      ${l(this,n,m).call(this)} ${l(this,n,g).call(this)}
      ${l(this,n,v).call(this)}
    </gds-flex>`}};n=new WeakSet;m=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};g=function(){return c`<slot @slotchange=${l(this,n,u)}></slot>`};u=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(s=>{var a;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((a=s.textContent)==null?void 0:a.trim())!==""})};v=function(){return c`<slot name="trail"></slot>`};o.styles=[x,E];r([d()],o.prototype,"variant",2);r([d({type:String})],o.prototype,"size",2);r([d({attribute:"notification",type:Boolean,reflect:!0})],o.prototype,"notification",2);r([d({attribute:"rounded",type:Boolean,reflect:!0})],o.prototype,"rounded",2);r([_()],o.prototype,"mainSlotOccupied",2);o=r([b("gds-badge",{dependsOn:[O]})],o);export{o as G};
