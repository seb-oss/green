import{n as d,r as b,g as x,G as $,h as c}from"./gds-element-86064462.js";import{t as z}from"./tokens.style-01187a75.js";import{i as O}from"./lit-element-1d72f0ce.js";const E=O`
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
`;var w=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(e,t,i,n)=>{for(var s=n>1?void 0:n?T(t,i):t,h=e.length-1,f;h>=0;h--)(f=e[h])&&(s=(n?f(t,i,s):f(s))||s);return n&&s&&w(t,i,s),s},C=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r=(e,t,i)=>(C(e,t,"access private method"),i),p,v,m,_,g,y,u,S;let a=class extends ${constructor(){super(),l(this,p),l(this,m),l(this,g),l(this,u),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,i=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs",s=this.mainSlotOccupied?"l":"xs";return c`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${i}"
      border-radius="${this.notification?"max":"2xs"}"
      block-size="${n}"
      width="max-content"
      inline-size="${s}"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${r(this,p,v).call(this)} ${r(this,m,_).call(this)} ${r(this,u,S).call(this)}
    </gds-flex>`}};p=new WeakSet;v=function(){if(this.size!=="small"||!this.notification)return c`<slot name="lead"></slot>`};m=new WeakSet;_=function(){return c`<slot @slotchange=${r(this,g,y)}></slot>`};g=new WeakSet;y=function(e){const i=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=i.length>0&&i.some(n=>{var s;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((s=n.textContent)==null?void 0:s.trim())!==""})};u=new WeakSet;S=function(){return c`<slot name="trail"></slot>`};a.styles=[z,E];o([d()],a.prototype,"variant",2);o([d({type:String})],a.prototype,"size",2);o([d({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);o([d({attribute:"notification",type:Boolean,reflect:!0})],a.prototype,"notification",2);o([b()],a.prototype,"mainSlotOccupied",2);a=o([x("gds-badge")],a);
