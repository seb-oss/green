import{h as d,n as c,r as _,G as y,g as b}from"./gds-element-DKcDvDP5.js";import{t as x}from"./tokens.style-BJN0iJ4Z.js";import{a as w,b as S,w as k}from"./declarative-layout-mixins-Bw_LIblW.js";import{G as O}from"./flex.component-CFOjodgy.js";import{i as $}from"./lit-element-Bx14lxc-.js";const E=$`
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
`;var z=Object.defineProperty,C=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},r=(t,e,i,s)=>{for(var a=s>1?void 0:s?C(e,i):e,h=t.length-1,f;h>=0;h--)(f=t[h])&&(a=(s?f(e,i,a):f(a))||a);return s&&a&&z(e,i,a),a},G=(t,e,i)=>e.has(t)||p("Cannot "+i),N=(t,e,i)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),l=(t,e,i)=>(G(t,e,"access private method"),i),o,m,g,u,v;let n=class extends w(S(k(y))){constructor(){super(...arguments),N(this,o),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){let t,e;if(this.notification)t="negative-01",e="inversed";else switch(this.variant){case"information":t="information-03",e="information-01";break;case"notice":t="notice-03",e="notice-01";break;case"positive":t="positive-03",e="positive-01";break;case"warning":t="warning-03",e="warning-01";break;case"negative":t="negative-03",e="negative-01";break;case"disabled":t="disabled-03",e="disabled-01";break;default:t="information-03",e="information-01";break}const i=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return d`<gds-flex
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
      ${l(this,o,m).call(this)} ${l(this,o,g).call(this)}
      ${l(this,o,v).call(this)}
    </gds-flex>`}};o=new WeakSet;m=function(){if(this.size!=="small"||!this.notification)return d`<slot name="lead"></slot>`};g=function(){return d`<slot @slotchange=${l(this,o,u)}></slot>`};u=function(t){const i=t.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(s=>{var a;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((a=s.textContent)==null?void 0:a.trim())!==""})};v=function(){return d`<slot name="trail"></slot>`};n.styles=[x,E];r([c()],n.prototype,"variant",2);r([c({type:String})],n.prototype,"size",2);r([c({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);r([c({attribute:"rounded",type:Boolean,reflect:!0})],n.prototype,"rounded",2);r([_()],n.prototype,"mainSlotOccupied",2);n=r([b("gds-badge",{dependsOn:[O]})],n);export{n as G};
