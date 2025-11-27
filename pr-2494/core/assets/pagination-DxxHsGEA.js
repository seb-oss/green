import{i as S,L as B,U as I,K as E,A as N,h as a,b as f,t as O,n as d,z as A,a as D,g as L,J as j}from"./iframe-DWsB4ykc.js";import{w as J}from"./popover.component-DYQ20OuB.js";import{a as R,G as T}from"./context-menu.component-ntPtG8RV.js";import{a as W}from"./dropdown.component-D-_vtcwF.js";import{I as F}from"./chevron-bottom.component-BQNm9Ejz.js";import{I as K,a as Q,b as U,c as V}from"./chevron-right-small.component-C5iPbXBF.js";import{G as X}from"./text-sA9KGlwJ.js";const q=S`
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
`;var H=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},l=(t,s,e,c)=>{for(var r=c>1?void 0:c?Y(s,e):s,p=t.length-1,g;p>=0;p--)(g=t[p])&&(r=(c?g(s,e,r):g(r))||r);return c&&r&&H(s,e,r),r},b=(t,s,e)=>s.has(t)||v("Cannot "+e),m=(t,s,e)=>(b(t,s,"read from private field"),e?e.call(t):s.get(t)),Z=(t,s,e)=>s.has(t)?v("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),i=(t,s,e)=>(b(t,s,"access private method"),e),n,u,_,y,$,w,P,z,C,M,k,x,h,G;let o=class extends B(I(E(N))){constructor(){super(...arguments),Z(this,n),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return a`
      <div class="pages">${i(this,n,M).call(this)}</div>
      ${i(this,n,x).call(this)}
    `}};n=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};_=function(t){if(t<=7)return Array.from({length:t},(c,r)=>r+1);const s=t,e=[];return e.push(1),this.page<=4?e.push(2,3,4,5,"...",s):this.page>=t-3?e.push("...",t-4,t-3,t-2,t-1,s):e.push("...",this.page-1,this.page,this.page+1,"...",s),e};y=function(t){if(t==="...")return a`
        <gds-button size="small" rank="tertiary" inert> ... </gds-button>
      `;const s=t,e=this.page===s;return a`
      <gds-button
        size="small"
        rank="${e?"primary":"tertiary"}"
        @click=${()=>i(this,n,h).call(this,s)}
      >
        ${s}
      </gds-button>
    `};$=function(){const t=m(this,n,u),s=i(this,n,_).call(this,t);return a` ${s.map(e=>i(this,n,y).call(this,e))} `};w=function(){return a`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,h).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};P=function(){return a`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,h).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};z=function(){const t=m(this,n,u);return a`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,h).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};C=function(){const t=m(this,n,u);return a`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,h).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};M=function(){return a`
      ${f(this.jump,()=>i(this,n,w).call(this))}
      ${i(this,n,P).call(this)} ${i(this,n,$).call(this)}
      ${i(this,n,z).call(this)}
      ${f(this.jump,()=>i(this,n,C).call(this))}
    `};k=function(t){const s=this.rows===t;return a`
      <gds-menu-item
        data-value=${t}
        class=${D({selected:s})}
      >
        ${t}
      </gds-menu-item>
    `};x=function(){return this._isMobile?null:a`
      <gds-context-menu @gds-menu-item-click=${i(this,n,G)}>
        <gds-button slot="trigger" size="small" rank="secondary">
          ${this.rows}
          <gds-icon-chevron-bottom
            slot="trail"
            size="m"
          ></gds-icon-chevron-bottom>
        </gds-button>
        ${this.options.map(t=>i(this,n,k).call(this,t))}
      </gds-context-menu>
    `};h=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};G=function(t){const s=t.target,e=parseInt(s.dataset.value||"10");e!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:e},bubbles:!0}))};o.styles=[O,q];l([d({type:Number})],o.prototype,"page",2);l([d({type:Number})],o.prototype,"rows",2);l([d({type:Number})],o.prototype,"total",2);l([d({type:Array})],o.prototype,"options",2);l([d({type:Boolean})],o.prototype,"jump",2);l([A()],o.prototype,"_isMobile",2);l([J("(max-width: 768px)")],o.prototype,"_handleMobile",1);o=l([L("gds-pagination",{dependsOn:[j,X,W,R,T,F,K,Q,U,V]})],o);o.define();export{o as G};
