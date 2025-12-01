import{i as N,L as O,U as A,K as D,A as L,h,b,t as W,n as d,d as j,z as R,a as F,g as J,J as T}from"./iframe-C2q7SHgj.js";import{w as q,G as K}from"./popover.component-CC6CIOOy.js";import{a as Q,G as U}from"./context-menu.component-NcW5jCFl.js";import{a as V}from"./dropdown.component-lEE6ESp_.js";import{I as X}from"./chevron-bottom.component-CIbVOEF9.js";import{I as Y,a as H,b as Z,c as tt}from"./chevron-right-small.component-CBtr3qtw.js";import{I as et}from"./chevron-right.component-xdUKeqhZ.js";import{G as st}from"./input.component-CjhtzWbe.js";import{G as it}from"./text-hNWEXlFQ.js";const nt=N`
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
`;var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},p=(t,s,i,c)=>{for(var l=c>1?void 0:c?at(s,i):s,f=t.length-1,m;f>=0;f--)(m=t[f])&&(l=(c?m(s,i,l):m(l))||l);return c&&l&&ot(s,i,l),l},$=(t,s,i)=>s.has(t)||_("Cannot "+i),n=(t,s,i)=>($(t,s,"read from private field"),i?i.call(t):s.get(t)),rt=(t,s,i)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),o=(t,s,i)=>($(t,s,"access private method"),i),e,u,a,x,y,z,P,w,G,k,C,I,M,S,g,B,E,v;const lt={compact:{size:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{size:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{size:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends O(A(D(L))){constructor(){super(...arguments),rt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.density="comfortable",this.label="",this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return h`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${n(this,e,a).gap}"
      >
        ${o(this,e,S).call(this)}
        <gds-flex aling-items="center" gap="${n(this,e,a).gap}" flex="1">
          ${[o(this,e,C).call(this),o(this,e,M).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};a=function(){return lt[this.density]};x=function(t){if(t<=7)return Array.from({length:t},(c,l)=>l+1);const s=t,i=[];return i.push(1),this.page<=4?i.push(2,3,4,5,"...",s):this.page>=t-3?i.push("...",t-4,t-3,t-2,t-1,s):i.push("...",this.page-1,this.page,this.page+1,"...",s),i};y=function(t){if(t==="...")return h`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,E)}
        >
          <gds-button
            size="${n(this,e,a).size}"
            rank="tertiary"
            slot="trigger"
          >
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="${n(this,e,a).inputPadding}"
            width="${n(this,e,a).inputWidth}"
            max-height="280px"
          >
            <gds-input
              size="${n(this,e,a).input}"
              label="Go to page"
              type="number"
              min="1"
              max="${n(this,e,u)}"
              @change=${o(this,e,v)}
            >
              <gds-button
                size="xs"
                rank="secondary"
                @click=${o(this,e,v)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,i=this.page===s;return h`
      <gds-button
        size="${n(this,e,a).size}"
        rank="${i?"primary":"tertiary"}"
        @click=${()=>o(this,e,g).call(this,s)}
      >
        ${s}
      </gds-button>
    `};z=function(){const t=n(this,e,u),s=o(this,e,x).call(this,t);return h`${s.map(i=>o(this,e,y).call(this,i))}`};P=function(){return h`
      <gds-button
        size="${n(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,g).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};w=function(){return h`
      <gds-button
        size="${n(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,g).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};G=function(){const t=n(this,e,u);return h`
      <gds-button
        size="${n(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,g).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};k=function(){const t=n(this,e,u);return h`
      <gds-button
        size="${n(this,e,a).size}"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,g).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};C=function(){return h`
      <gds-flex
        gap="${n(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[b(this.jump,()=>o(this,e,P).call(this)),o(this,e,w).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,z).call(this)}
        </gds-flex>
        ${[o(this,e,G).call(this),b(this.jump,()=>o(this,e,k).call(this))]}
      </gds-flex>
    `};I=function(t){const s=this.rows===t;return h`
      <gds-menu-item
        data-value=${t}
        class=${F({selected:s})}
        size="${n(this,e,a).size}"
      >
        ${t}
      </gds-menu-item>
    `};M=function(){return this._isMobile?null:h`
      <gds-flex align-items="center" gap="s">
        <gds-text font="${n(this,e,a).font}" color="neutral-01">
          Rows per page
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,B)}>
          <gds-button
            slot="trigger"
            size="${n(this,e,a).size}"
            rank="secondary"
          >
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(t=>o(this,e,I).call(this,t))}
        </gds-context-menu>
      </gds-flex>
    `};S=function(){return this._isMobile||!this.label?null:h`
      <gds-text font="${n(this,e,a).font}" color="neutral-02">
        ${this.label}
      </gds-text>
    `};g=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};B=function(t){const s=t.target,i=parseInt(s.dataset.value||"10");i!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:i},bubbles:!0}))};E=function(t){if(t.detail.open){const i=t.target.querySelector("gds-input");i&&requestAnimationFrame(()=>{i.focus()})}};v=function(t){const i=t.target.closest("gds-input");if(i){const c=parseInt(i.value,10);if(c&&c>=1&&c<=n(this,e,u)){o(this,e,g).call(this,c);const l=i.closest("gds-popover");l&&l.hide()}}};r.styles=[W,nt];p([d({type:Number})],r.prototype,"page",2);p([d({type:Number})],r.prototype,"rows",2);p([d({type:Number})],r.prototype,"total",2);p([d({type:Array})],r.prototype,"options",2);p([d({type:Boolean})],r.prototype,"jump",2);p([d({reflect:!1})],r.prototype,"density",2);p([d()],r.prototype,"label",2);p([j("#page-input")],r.prototype,"_elInput",2);p([R()],r.prototype,"_isMobile",2);p([q("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=p([J("gds-pagination",{dependsOn:[T,K,it,st,V,Q,U,X,Y,H,et,Z,tt]})],r);r.define();export{r as G};
