import{n as d,r as S}from"./Reflect-DJ7r0WLU.js";import{e as B}from"./class-map-CXsQwv0r.js";import{n as f}from"./when-BR7zwNJC.js";import{h as o,G as I,g as E}from"./gds-element-DTROifYq.js";import{t as N}from"./tokens.style-CQAfIFlK.js";import{w as O}from"./popover.component-B7eA3kr8.js";import{b as D,w as A,d as L}from"./declarative-layout-mixins-C4FFYA_h.js";import{G as j}from"./button.component-D-n6FD2-.js";import{a as J,G as R}from"./context-menu.component-QuSad5I1.js";import{G as T}from"./dropdown.component-B2HZn4cD.js";import{I as W}from"./chevron-bottom.component-CSL53Fnd.js";import{I as F,a as Q,b as V,c as X}from"./chevron-right-small.component-DK4xuJpw.js";import{G as q}from"./text-Z9s1gHys.js";import{i as H}from"./lit-element-Bx14lxc-.js";const K=H`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gds-sys-space-xl);
  }

  .pages {
    display: flex;
    gap: var(--gds-sys-space-2xs);
  }

  .pages ::part(_button) {
    padding: 0;
    aspect-ratio: 1/1;
  }
`;var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},l=(t,s,e,c)=>{for(var a=c>1?void 0:c?Y(s,e):s,u=t.length-1,g;u>=0;u--)(g=t[u])&&(a=(c?g(s,e,a):g(a))||a);return c&&a&&U(s,e,a),a},b=(t,s,e)=>s.has(t)||v("Cannot "+e),m=(t,s,e)=>(b(t,s,"read from private field"),e?e.call(t):s.get(t)),Z=(t,s,e)=>s.has(t)?v("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),n=(t,s,e)=>(b(t,s,"access private method"),e),i,p,_,y,$,w,P,G,z,C,M,k,h,x;let r=class extends D(A(L(I))){constructor(){super(...arguments),Z(this,i),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return o`
      <div class="pages">${n(this,i,C).call(this)}</div>
      ${n(this,i,k).call(this)}
    `}};i=new WeakSet;p=function(){return Math.ceil(this.total/this.rows)};_=function(t){if(t<=7)return Array.from({length:t},(c,a)=>a+1);const s=t,e=[];return e.push(1),this.page<=4?e.push(2,3,4,5,"...",s):this.page>=t-3?e.push("...",t-4,t-3,t-2,t-1,s):e.push("...",this.page-1,this.page,this.page+1,"...",s),e};y=function(t){if(t==="...")return o`
        <gds-button size="small" rank="tertiary" inert> ... </gds-button>
      `;const s=t,e=this.page===s;return o`
      <gds-button
        size="small"
        rank="${e?"primary":"tertiary"}"
        @click=${()=>n(this,i,h).call(this,s)}
      >
        ${s}
      </gds-button>
    `};$=function(){const t=m(this,i,p),s=n(this,i,_).call(this,t);return o` ${s.map(e=>n(this,i,y).call(this,e))} `};w=function(){return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>n(this,i,h).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};P=function(){return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>n(this,i,h).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};G=function(){const t=m(this,i,p);return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>n(this,i,h).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};z=function(){const t=m(this,i,p);return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>n(this,i,h).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};C=function(){return o`
      ${f(this.jump,()=>n(this,i,w).call(this))}
      ${n(this,i,P).call(this)} ${n(this,i,$).call(this)}
      ${n(this,i,G).call(this)}
      ${f(this.jump,()=>n(this,i,z).call(this))}
    `};M=function(t){const s=this.rows===t;return o`
      <gds-menu-item
        data-value=${t}
        class=${B({selected:s})}
      >
        ${t}
      </gds-menu-item>
    `};k=function(){return this._isMobile?null:o`
      <gds-context-menu @gds-menu-item-click=${n(this,i,x)}>
        <gds-button slot="trigger" size="small" rank="secondary">
          ${this.rows}
          <gds-icon-chevron-bottom
            slot="trail"
            size="m"
          ></gds-icon-chevron-bottom>
        </gds-button>
        ${this.options.map(t=>n(this,i,M).call(this,t))}
      </gds-context-menu>
    `};h=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};x=function(t){const s=t.target,e=parseInt(s.dataset.value||"10");e!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:e},bubbles:!0}))};r.styles=[N,K];l([d({type:Number})],r.prototype,"page",2);l([d({type:Number})],r.prototype,"rows",2);l([d({type:Number})],r.prototype,"total",2);l([d({type:Array})],r.prototype,"options",2);l([d({type:Boolean})],r.prototype,"jump",2);l([S()],r.prototype,"_isMobile",2);l([O("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=l([E("gds-pagination",{dependsOn:[j,q,T,J,R,W,F,Q,V,X]})],r);r.define();export{r as G};
