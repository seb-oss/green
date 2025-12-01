import{i as N,L as O,U as A,K as D,A as L,h as c,b,t as j,n as d,d as R,z as F,a as J,g as T,J as q}from"./iframe-i8Wbx1Bl.js";import{w as W,G as K}from"./popover.component-BbTpwsfQ.js";import{a as Q,G as U}from"./context-menu.component-DeHttKWC.js";import{a as V}from"./dropdown.component-u_ysYZZB.js";import{I as X}from"./chevron-bottom.component-CbxW1UF6.js";import{I as Y,a as H,b as Z,c as tt}from"./chevron-right-small.component-6m2iJ0Yh.js";import{I as et}from"./chevron-right.component-CGvZP69E.js";import{G as st}from"./input.component-B3HOfVA6.js";import{G as it}from"./text-Bm34wBNV.js";const nt=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gds-sys-space-xl);
    --_appearance-spin-button: none;
  }

  .navigation-controls ::part(_button) {
    padding: 0;
    aspect-ratio: 1/1;
  }
`;var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},h=(t,s,i,p)=>{for(var l=p>1?void 0:p?at(s,i):s,f=t.length-1,m;f>=0;f--)(m=t[f])&&(l=(p?m(s,i,l):m(l))||l);return p&&l&&ot(s,i,l),l},$=(t,s,i)=>s.has(t)||_("Cannot "+i),o=(t,s,i)=>($(t,s,"read from private field"),i?i.call(t):s.get(t)),rt=(t,s,i)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),n=(t,s,i)=>($(t,s,"access private method"),i),e,u,a,y,x,z,w,P,G,k,C,I,M,S,g,B,E,v;const lt={compact:{size:"small",input:"small",font:"detail-book-s",gap:"xl",navGap:"xs"},comfortable:{size:"small",input:"small",font:"detail-book-s",gap:"2xl",navGap:"s"},spacious:{size:"medium",input:"large",font:"detail-book-m",gap:"2xl",navGap:"s"}};let r=class extends O(A(D(L))){constructor(){super(...arguments),rt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.density="comfortable",this.label="",this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return c`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${o(this,e,a).gap}"
      >
        ${n(this,e,S).call(this)}
        <gds-flex aling-items="center" gap="${o(this,e,a).gap}" flex="1">
          ${[n(this,e,C).call(this),n(this,e,M).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};a=function(){return lt[this.density]};y=function(t){if(t<=7)return Array.from({length:t},(p,l)=>l+1);const s=t,i=[];return i.push(1),this.page<=4?i.push(2,3,4,5,"...",s):this.page>=t-3?i.push("...",t-4,t-3,t-2,t-1,s):i.push("...",this.page-1,this.page,this.page+1,"...",s),i};x=function(t){if(t==="...")return c`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${n(this,e,E)}
        >
          <gds-button
            size="${o(this,e,a).size}"
            rank="tertiary"
            slot="trigger"
          >
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="s"
            width="140px"
            max-height="280px"
          >
            <gds-input
              size="${o(this,e,a).input}"
              label="Go to page"
              type="number"
              min="1"
              max="${o(this,e,u)}"
              @change=${n(this,e,v)}
            >
              <gds-button
                size="xs"
                rank="secondary"
                @click=${n(this,e,v)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,i=this.page===s;return c`
      <gds-button
        size="${o(this,e,a).size}"
        rank="${i?"primary":"tertiary"}"
        @click=${()=>n(this,e,g).call(this,s)}
      >
        ${s}
      </gds-button>
    `};z=function(){const t=o(this,e,u),s=n(this,e,y).call(this,t);return c`${s.map(i=>n(this,e,x).call(this,i))}`};w=function(){return c`
      <gds-button
        size="${o(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>n(this,e,g).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};P=function(){return c`
      <gds-button
        size="${o(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>n(this,e,g).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};G=function(){const t=o(this,e,u);return c`
      <gds-button
        size="${o(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>n(this,e,g).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};k=function(){const t=o(this,e,u);return c`
      <gds-button
        size="${o(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>n(this,e,g).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};C=function(){return c`
      <gds-flex
        gap="${o(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[b(this.jump,()=>n(this,e,w).call(this)),n(this,e,P).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${n(this,e,z).call(this)}
        </gds-flex>
        ${[n(this,e,G).call(this),b(this.jump,()=>n(this,e,k).call(this))]}
      </gds-flex>
    `};I=function(t){const s=this.rows===t;return c`
      <gds-menu-item
        data-value=${t}
        class=${J({selected:s})}
        size="${o(this,e,a).size}"
      >
        ${t}
      </gds-menu-item>
    `};M=function(){return this._isMobile?null:c`
      <gds-flex align-items="center" gap="s">
        <gds-text font="${o(this,e,a).font}" color="neutral-01">
          Rows per page
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${n(this,e,B)}>
          <gds-button
            slot="trigger"
            size="${o(this,e,a).size}"
            rank="secondary"
          >
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(t=>n(this,e,I).call(this,t))}
        </gds-context-menu>
      </gds-flex>
    `};S=function(){return this._isMobile||!this.label?null:c`
      <gds-text font="${o(this,e,a).font}" color="neutral-02">
        ${this.label}
      </gds-text>
    `};g=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};B=function(t){const s=t.target,i=parseInt(s.dataset.value||"10");i!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:i},bubbles:!0}))};E=function(t){if(t.detail.open){const i=t.target.querySelector("gds-input");i&&requestAnimationFrame(()=>{i.focus()})}};v=function(t){const i=t.target.closest("gds-input");if(i){const p=parseInt(i.value,10);if(p&&p>=1&&p<=o(this,e,u)){n(this,e,g).call(this,p);const l=i.closest("gds-popover");l&&l.hide()}}};r.styles=[j,nt];h([d({type:Number})],r.prototype,"page",2);h([d({type:Number})],r.prototype,"rows",2);h([d({type:Number})],r.prototype,"total",2);h([d({type:Array})],r.prototype,"options",2);h([d({type:Boolean})],r.prototype,"jump",2);h([d({reflect:!1})],r.prototype,"density",2);h([d()],r.prototype,"label",2);h([R("#page-input")],r.prototype,"_elInput",2);h([F()],r.prototype,"_isMobile",2);h([W("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=h([T("gds-pagination",{dependsOn:[q,K,it,st,V,Q,U,X,Y,H,et,Z,tt]})],r);r.define();export{r as G};
