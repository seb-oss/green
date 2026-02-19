import{i as L,S as E,a0 as D,Q as W,J as A,b as v,h as c,O as p,t as R,n as g,d as J,I as _,a as T,g as F,P as q}from"./iframe-RJwfSkMC.js";import{l as Q}from"./localized-decorator-BK9f9wtH.js";import{w as V,G as X}from"./popover.component-DzJUABbz.js";import{a as Y,G as H}from"./context-menu.component-D1j_lHHk.js";import{a as K}from"./dropdown.component-BKFxju2L.js";import{I as U}from"./chevron-bottom.component-dy5u5m4p.js";import{I as Z,a as tt,b as et,c as st}from"./chevron-right-small.component-BMDfBtcn.js";import{I as nt}from"./chevron-right.component-3i1EphrO.js";import{G as it}from"./input.component-DHIt4WBn.js";import{G as ot}from"./text-jEQP1ns7.js";const at=L`
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
`;var rt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},h=(t,s,n,d)=>{for(var l=d>1?void 0:d?lt(s,n):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(l=(d?b(s,n,l):b(l))||l);return d&&l&&rt(s,n,l),l},x=(t,s,n)=>s.has(t)||y("Cannot "+n),i=(t,s,n)=>(x(t,s,"read from private field"),n?n.call(t):s.get(t)),pt=(t,s,n)=>s.has(t)?y("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),o=(t,s,n)=>(x(t,s,"access private method"),n),e,u,a,P,w,G,C,I,k,z,M,O,S,B,f,j,N,$;const ht={compact:{button:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends E(D(W(A))){constructor(){super(...arguments),pt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.hideOptions=!1,this.density="comfortable",this.label="",this._isMobile=!1,this._jumpPopoverOpen=!1}_handleMobile(t){this._isMobile=t}render(){return c`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${i(this,e,a).gap}"
      >
        ${o(this,e,B).call(this)}
        <gds-flex aling-items="center" gap="${i(this,e,a).gap}" flex="1">
          ${[v(i(this,e,u)>1,()=>o(this,e,M).call(this)),o(this,e,S).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};a=function(){return ht[this.density]};P=function(t){if(t<=7)return Array.from({length:t},(d,l)=>l+1);const s=t,n=[];return n.push(1),this.page<=4?n.push(2,3,4,5,"...",s):this.page>=t-3?n.push("...",t-4,t-3,t-2,t-1,s):n.push("...",this.page-1,this.page,this.page+1,"...",s),n};w=function(t){if(t==="...")return c`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,N)}
        >
          <gds-button
            size="${i(this,e,a).button}"
            rank="tertiary"
            slot="trigger"
            label="${p("Jump to page")}"
            aria-expanded="${this._jumpPopoverOpen}"
            aria-haspopup="dialog"
          >
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="${i(this,e,a).inputPadding}"
            width="${i(this,e,a).inputWidth}"
            max-height="280px"
          >
            <gds-input
              size="${i(this,e,a).input}"
              label="${p("Go to page")}"
              type="number"
              min="1"
              max="${i(this,e,u)}"
              @change=${o(this,e,$)}
            >
              <gds-button
                size="xs"
                label="${p("Go")}"
                rank="secondary"
                @click=${o(this,e,$)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,n=this.page===s,d=`${p("Current page")}, ${p("page")} ${s}`,l=`${p("Go to page")} ${s}`,m=n?d:l;return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="${n?"primary":"tertiary"}"
        label="${m}"
        aria-current="${n?"page":"false"}"
        @click=${()=>o(this,e,f).call(this,s)}
      >
        ${s}
      </gds-button>
    `};G=function(){const t=i(this,e,u),s=o(this,e,P).call(this,t);return c`${s.map(n=>o(this,e,w).call(this,n))}`};C=function(){return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to first page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,f).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};I=function(){return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to previous page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,f).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};k=function(){const t=i(this,e,u);return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to next page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,f).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};z=function(){const t=i(this,e,u);return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to last page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,f).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};M=function(){return c`
      <gds-flex
        gap="${i(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[v(this.jump,()=>o(this,e,C).call(this)),o(this,e,I).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,G).call(this)}
        </gds-flex>
        ${[o(this,e,k).call(this),v(this.jump,()=>o(this,e,z).call(this))]}
      </gds-flex>
    `};O=function(t){const s=this.rows===t;return c`
      <gds-menu-item
        data-value=${t}
        class=${T({selected:s})}
        size="${i(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};S=function(){if(this._isMobile||this.hideOptions||this.options.length<=1)return null;const t=`${p("Rows per page")}, ${this.rows} ${p("selected")}`;return c`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${i(this,e,a).font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${p("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,j)}>
          <gds-button
            slot="trigger"
            size="${i(this,e,a).button}"
            rank="secondary"
            label="${t}"
            aria-labelledby="rows-per-page-label"
          >
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(s=>o(this,e,O).call(this,s))}
        </gds-context-menu>
      </gds-flex>
    `};B=function(){return this._isMobile||!this.label?null:c`
      <gds-text
        font="${i(this,e,a).font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `};f=function(t){this.dispatchCustomEvent("gds-page-change",{detail:{page:t},bubbles:!0})};j=function(t){const s=t.target,n=parseInt(s.dataset.value||"10");n!==this.rows&&this.dispatchCustomEvent("gds-rows-change",{detail:{rows:n},bubbles:!0})};N=function(t){if(this._jumpPopoverOpen=t.detail.open,t.detail.open){const n=t.target.querySelector('[gds-element="gds-input"]');n&&requestAnimationFrame(()=>{n.focus()})}};$=function(t){const n=t.target.closest('[gds-element="gds-input"]');if(n){const d=parseInt(n.value,10);if(d&&d>=1&&d<=i(this,e,u)){o(this,e,f).call(this,d);const l=n.closest('[gds-element="gds-popover"]');l&&(l.open=!1)}}};r.styles=[R,at];h([g({type:Number})],r.prototype,"page",2);h([g({type:Number})],r.prototype,"rows",2);h([g({type:Number})],r.prototype,"total",2);h([g({type:Array})],r.prototype,"options",2);h([g({type:Boolean})],r.prototype,"jump",2);h([g({attribute:"hide-options",type:Boolean,reflect:!1})],r.prototype,"hideOptions",2);h([g({reflect:!1})],r.prototype,"density",2);h([g()],r.prototype,"label",2);h([J("#page-input")],r.prototype,"_elInput",2);h([_()],r.prototype,"_isMobile",2);h([_()],r.prototype,"_jumpPopoverOpen",2);h([V("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=h([Q(),F("gds-pagination",{dependsOn:[q,X,ot,it,K,Y,H,U,Z,tt,nt,et,st]})],r);r.define();export{r as G};
