import{n as d}from"./Reflect-DJ7r0WLU.js";import{e as B}from"./class-map-CXsQwv0r.js";import{n as f}from"./when-BR7zwNJC.js";import{h as o,G as I,g as E}from"./gds-element-DTROifYq.js";import{t as M}from"./tokens.style-CQAfIFlK.js";import{b as N,w as O,d as D}from"./declarative-layout-mixins-C4FFYA_h.js";import{G as A}from"./button.component-D-n6FD2-.js";import{a as L,G as j}from"./context-menu.component-lyyXBHF2.js";import{G as J}from"./dropdown.component-BF8VGxGE.js";import{I as R}from"./chevron-bottom.component-CSL53Fnd.js";import{I as T,a as W,b as F,c as V}from"./chevron-right-small.component-DK4xuJpw.js";import{G as X}from"./text-Z9s1gHys.js";import{i as q}from"./lit-element-Bx14lxc-.js";const H=q`
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
`;var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},l=(t,s,e,h)=>{for(var r=h>1?void 0:h?Q(s,e):s,u=t.length-1,g;u>=0;u--)(g=t[u])&&(r=(h?g(s,e,r):g(r))||r);return h&&r&&K(s,e,r),r},b=(t,s,e)=>s.has(t)||v("Cannot "+e),m=(t,s,e)=>(b(t,s,"read from private field"),e?e.call(t):s.get(t)),U=(t,s,e)=>s.has(t)?v("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),i=(t,s,e)=>(b(t,s,"access private method"),e),n,p,_,y,$,P,w,G,z,C,k,x,c,S;let a=class extends N(O(D(I))){constructor(){super(...arguments),U(this,n),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1}render(){return o`
      <div class="pages">${i(this,n,C).call(this)}</div>
      ${i(this,n,x).call(this)}
    `}};n=new WeakSet;p=function(){return Math.ceil(this.total/this.rows)};_=function(t){if(t<=7)return Array.from({length:t},(h,r)=>r+1);const s=t,e=[];return e.push(1),this.page<=4?e.push(2,3,4,5,"...",s):this.page>=t-3?e.push("...",t-4,t-3,t-2,t-1,s):e.push("...",this.page-1,this.page,this.page+1,"...",s),e};y=function(t){if(t==="...")return o`
        <gds-button size="small" rank="tertiary" inert> ... </gds-button>
      `;const s=t,e=this.page===s;return o`
      <gds-button
        size="small"
        rank="${e?"primary":"tertiary"}"
        @click=${()=>i(this,n,c).call(this,s)}
      >
        ${s}
      </gds-button>
    `};$=function(){const t=m(this,n,p),s=i(this,n,_).call(this,t);return o` ${s.map(e=>i(this,n,y).call(this,e))} `};P=function(){return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,c).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};w=function(){return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,c).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};G=function(){const t=m(this,n,p);return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,c).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};z=function(){const t=m(this,n,p);return o`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,c).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};C=function(){return o`
      ${f(this.jump,()=>i(this,n,P).call(this))}
      ${i(this,n,w).call(this)} ${i(this,n,$).call(this)}
      ${i(this,n,G).call(this)}
      ${f(this.jump,()=>i(this,n,z).call(this))}
    `};k=function(t){const s=this.rows===t;return o`
      <gds-menu-item
        data-value=${t}
        class=${B({selected:s})}
      >
        ${t}
      </gds-menu-item>
    `};x=function(){return o`
      <gds-context-menu @gds-menu-item-click=${i(this,n,S)}>
        <gds-button slot="trigger" size="small" rank="secondary">
          ${this.rows}
          <gds-icon-chevron-bottom
            slot="trail"
            size="m"
          ></gds-icon-chevron-bottom>
        </gds-button>
        ${this.options.map(t=>i(this,n,k).call(this,t))}
      </gds-context-menu>
    `};c=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};S=function(t){const s=t.target,e=parseInt(s.dataset.value||"10");e!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:e},bubbles:!0}))};a.styles=[M,H];l([d({type:Number})],a.prototype,"page",2);l([d({type:Number})],a.prototype,"rows",2);l([d({type:Number})],a.prototype,"total",2);l([d({type:Array})],a.prototype,"options",2);l([d({type:Boolean})],a.prototype,"jump",2);a=l([E("gds-pagination",{dependsOn:[A,X,J,L,j,R,T,W,F,V]})],a);a.define();export{a as G};
