import{n as d,r as b,g as x,G as $,h as c}from"./gds-element-86064462.js";import{t as O}from"./tokens.style-01187a75.js";import{i as w}from"./lit-element-1d72f0ce.js";const z=w`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }
  }
`;var E=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(e,t,i,n)=>{for(var s=n>1?void 0:n?T(t,i):t,h=e.length-1,f;h>=0;h--)(f=e[h])&&(s=(n?f(t,i,s):f(s))||s);return n&&s&&E(t,i,s),s},k=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l=(e,t,i)=>(k(e,t,"access private method"),i),p,v,u,_,g,y,m,S;let a=class extends ${constructor(){super(),r(this,p),r(this,u),r(this,g),r(this,m),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs",s=this.mainSlotOccupied?"l":"xs";return c`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="2xs"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${n}"
      width="max-content"
      inline-size="${s}"
      font-size="detail-s"
      font-weight="book"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${l(this,p,v).call(this)} ${l(this,u,_).call(this)}
      ${l(this,m,S).call(this)}
    </gds-flex>`}};p=new WeakSet;v=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};u=new WeakSet;_=function(){return c`<slot @slotchange=${l(this,g,y)}></slot>`};g=new WeakSet;y=function(e){const i=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(n=>{var s;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((s=n.textContent)==null?void 0:s.trim())!==""})};m=new WeakSet;S=function(){if(!this.notification)return c`<slot name="trail"></slot>`};a.styles=[O,z];o([d()],a.prototype,"variant",2);o([d({type:String})],a.prototype,"size",2);o([d({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);o([d({attribute:"notification",type:Boolean,reflect:!0})],a.prototype,"notification",2);o([b()],a.prototype,"mainSlotOccupied",2);a=o([x("gds-badge")],a);
