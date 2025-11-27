import{i as B,L as E,U as N,K as A,A as O,h as r,b as v,t as D,n as d,d as L,z as j,a as J,g as R,J as q}from"./iframe-82Tnoa_h.js";import{w as F,G as T}from"./popover.component-CjCMNABt.js";import{a as W,G as K}from"./context-menu.component-D2COzRhG.js";import{a as Q}from"./dropdown.component-C1_1LvO2.js";import{I as U}from"./chevron-bottom.component-C53qZNgl.js";import{I as V,a as X,b as H,c as Y}from"./chevron-right-small.component-DolZzFrI.js";import{I as Z}from"./chevron-right.component-q8cpdYQN.js";import{G as tt}from"./input.component-3Sw5fXY3.js";import{G as et}from"./text-DujAjQ5y.js";const st=B`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gds-sys-space-xl);
    --_appearance-spin-button: none;
  }

  .pages ::part(_button) {
    padding: 0;
    aspect-ratio: 1/1;
  }
`;var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},c=(t,e,s,l)=>{for(var o=l>1?void 0:l?it(e,s):e,u=t.length-1,m;u>=0;u--)(m=t[u])&&(o=(l?m(e,s,o):m(o))||o);return l&&o&&nt(e,s,o),o},_=(t,e,s)=>e.has(t)||b("Cannot "+s),g=(t,e,s)=>(_(t,e,"read from private field"),s?s.call(t):e.get(t)),ot=(t,e,s)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),i=(t,e,s)=>(_(t,e,"access private method"),s),n,p,y,$,x,P,w,z,C,G,I,k,h,M,S,f;let a=class extends E(N(A(O))){constructor(){super(...arguments),ot(this,n),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return r`
      <gds-flex align-items="center" align-items="center" gap="xl">
        <gds-flex gap="2xs" align-items="center" class="pages">
          ${i(this,n,G).call(this)}
        </gds-flex>
        ${i(this,n,k).call(this)}
      </gds-flex>
    `}};n=new WeakSet;p=function(){return Math.ceil(this.total/this.rows)};y=function(t){if(t<=7)return Array.from({length:t},(l,o)=>o+1);const e=t,s=[];return s.push(1),this.page<=4?s.push(2,3,4,5,"...",e):this.page>=t-3?s.push("...",t-4,t-3,t-2,t-1,e):s.push("...",this.page-1,this.page,this.page+1,"...",e),s};$=function(t){if(t==="...")return r`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${i(this,n,S)}
        >
          <gds-button size="small" rank="tertiary" slot="trigger">
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="s"
            width="140px"
            max-height="280px"
          >
            <gds-input
              size="small"
              label="Go to page"
              type="number"
              min="1"
              max="${g(this,n,p)}"
              @change=${i(this,n,f)}
            >
              <gds-button
                size="xs"
                rank="secondary"
                @click=${i(this,n,f)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const e=t,s=this.page===e;return r`
      <gds-button
        size="small"
        rank="${s?"primary":"tertiary"}"
        @click=${()=>i(this,n,h).call(this,e)}
      >
        ${e}
      </gds-button>
    `};x=function(){const t=g(this,n,p),e=i(this,n,y).call(this,t);return r` ${e.map(s=>i(this,n,$).call(this,s))} `};P=function(){return r`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,h).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};w=function(){return r`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>i(this,n,h).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};z=function(){const t=g(this,n,p);return r`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,h).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};C=function(){const t=g(this,n,p);return r`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>i(this,n,h).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};G=function(){return r`
      ${v(this.jump,()=>i(this,n,P).call(this))}
      ${i(this,n,w).call(this)} ${i(this,n,x).call(this)}
      ${i(this,n,z).call(this)}
      ${v(this.jump,()=>i(this,n,C).call(this))}
    `};I=function(t){const e=this.rows===t;return r`
      <gds-menu-item
        data-value=${t}
        class=${J({selected:e})}
      >
        ${t}
      </gds-menu-item>
    `};k=function(){return this._isMobile?null:r`
      <gds-flex align-items="center" gap="s">
        <gds-text font="detail-book-s" color="neutral-01">
          Items per page
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${i(this,n,M)}>
          <gds-button slot="trigger" size="small" rank="secondary">
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(t=>i(this,n,I).call(this,t))}
        </gds-context-menu>
      </gds-flex>
    `};h=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};M=function(t){const e=t.target,s=parseInt(e.dataset.value||"10");s!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:s},bubbles:!0}))};S=function(t){if(t.detail.open){const s=t.target.querySelector("gds-input");s&&requestAnimationFrame(()=>{s.focus()})}};f=function(t){const s=t.target.closest("gds-input");if(s){const l=parseInt(s.value,10);if(l&&l>=1&&l<=g(this,n,p)){i(this,n,h).call(this,l);const o=s.closest("gds-popover");o&&o.hide()}}};a.styles=[D,st];c([d({type:Number})],a.prototype,"page",2);c([d({type:Number})],a.prototype,"rows",2);c([d({type:Number})],a.prototype,"total",2);c([d({type:Array})],a.prototype,"options",2);c([d({type:Boolean})],a.prototype,"jump",2);c([L("#page-input")],a.prototype,"_elInput",2);c([j()],a.prototype,"_isMobile",2);c([F("(max-width: 768px)")],a.prototype,"_handleMobile",1);a=c([R("gds-pagination",{dependsOn:[q,T,et,tt,Q,W,K,U,V,X,Z,H,Y]})],a);a.define();export{a as G};
