import{i as L,S as E,a0 as D,Q as W,J as A,h as d,b as $,O as p,t as R,n as g,d as J,I as _,a as T,g as F,P as q}from"./iframe-DNTl48pd.js";import{l as Q}from"./localized-decorator-D5Q6_2Fc.js";import{w as V,G as X}from"./popover.component-Borr-Qhb.js";import{a as Y,G as H}from"./context-menu.component-CYkTy3HD.js";import{a as K}from"./dropdown.component-DPk91myw.js";import{I as U}from"./chevron-bottom.component-D8E9rmEH.js";import{I as Z,a as tt,b as et,c as st}from"./chevron-right-small.component-C8vaJMUl.js";import{I as it}from"./chevron-right.component-CzeyrXHF.js";import{G as nt}from"./input.component-u_rmPoHE.js";import{G as ot}from"./text-BKxLgXZ5.js";const at=L`
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
`;var rt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},h=(t,s,i,c)=>{for(var l=c>1?void 0:c?lt(s,i):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(l=(c?b(s,i,l):b(l))||l);return c&&l&&rt(s,i,l),l},x=(t,s,i)=>s.has(t)||y("Cannot "+i),n=(t,s,i)=>(x(t,s,"read from private field"),i?i.call(t):s.get(t)),pt=(t,s,i)=>s.has(t)?y("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),o=(t,s,i)=>(x(t,s,"access private method"),i),e,f,a,P,w,G,C,I,k,z,M,O,S,B,u,j,N,v;const ht={compact:{button:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends E(D(W(A))){constructor(){super(...arguments),pt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.hideOptions=!1,this.density="comfortable",this.label="",this._isMobile=!1,this._jumpPopoverOpen=!1}_handleMobile(t){this._isMobile=t}render(){return d`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${n(this,e,a).gap}"
      >
        ${o(this,e,B).call(this)}
        <gds-flex aling-items="center" gap="${n(this,e,a).gap}" flex="1">
          ${[o(this,e,M).call(this),o(this,e,S).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;f=function(){return Math.ceil(this.total/this.rows)};a=function(){return ht[this.density]};P=function(t){if(t<=7)return Array.from({length:t},(c,l)=>l+1);const s=t,i=[];return i.push(1),this.page<=4?i.push(2,3,4,5,"...",s):this.page>=t-3?i.push("...",t-4,t-3,t-2,t-1,s):i.push("...",this.page-1,this.page,this.page+1,"...",s),i};w=function(t){if(t==="...")return d`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,N)}
        >
          <gds-button
            size="${n(this,e,a).button}"
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
            padding="${n(this,e,a).inputPadding}"
            width="${n(this,e,a).inputWidth}"
            max-height="280px"
          >
            <gds-input
              size="${n(this,e,a).input}"
              label="${p("Go to page")}"
              type="number"
              min="1"
              max="${n(this,e,f)}"
              @change=${o(this,e,v)}
            >
              <gds-button
                size="xs"
                label="${p("Go")}"
                rank="secondary"
                @click=${o(this,e,v)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,i=this.page===s,c=`${p("Current page")}, ${p("page")} ${s}`,l=`${p("Go to page")} ${s}`,m=i?c:l;return d`
      <gds-button
        size="${n(this,e,a).button}"
        rank="${i?"primary":"tertiary"}"
        label="${m}"
        aria-current="${i?"page":"false"}"
        @click=${()=>o(this,e,u).call(this,s)}
      >
        ${s}
      </gds-button>
    `};G=function(){const t=n(this,e,f),s=o(this,e,P).call(this,t);return d`${s.map(i=>o(this,e,w).call(this,i))}`};C=function(){return d`
      <gds-button
        size="${n(this,e,a).button}"
        rank="secondary"
        label="${p("Go to first page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};I=function(){return d`
      <gds-button
        size="${n(this,e,a).button}"
        rank="secondary"
        label="${p("Go to previous page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};k=function(){const t=n(this,e,f);return d`
      <gds-button
        size="${n(this,e,a).button}"
        rank="secondary"
        label="${p("Go to next page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,u).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};z=function(){const t=n(this,e,f);return d`
      <gds-button
        size="${n(this,e,a).button}"
        rank="secondary"
        label="${p("Go to last page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,u).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};M=function(){return d`
      <gds-flex
        gap="${n(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[$(this.jump,()=>o(this,e,C).call(this)),o(this,e,I).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,G).call(this)}
        </gds-flex>
        ${[o(this,e,k).call(this),$(this.jump,()=>o(this,e,z).call(this))]}
      </gds-flex>
    `};O=function(t){const s=this.rows===t;return d`
      <gds-menu-item
        data-value=${t}
        class=${T({selected:s})}
        size="${n(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};S=function(){if(this._isMobile||this.hideOptions)return null;const t=`${p("Rows per page")}, ${this.rows} ${p("selected")}`;return d`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${n(this,e,a).font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${p("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,j)}>
          <gds-button
            slot="trigger"
            size="${n(this,e,a).button}"
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
    `};B=function(){return this._isMobile||!this.label?null:d`
      <gds-text
        font="${n(this,e,a).font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `};u=function(t){this.dispatchCustomEvent("gds-page-change",{detail:{page:t},bubbles:!0})};j=function(t){const s=t.target,i=parseInt(s.dataset.value||"10");i!==this.rows&&this.dispatchCustomEvent("gds-rows-change",{detail:{rows:i},bubbles:!0})};N=function(t){if(this._jumpPopoverOpen=t.detail.open,t.detail.open){const i=t.target.querySelector("gds-input");i&&requestAnimationFrame(()=>{i.focus()})}};v=function(t){const i=t.target.closest("gds-input");if(i){const c=parseInt(i.value,10);if(c&&c>=1&&c<=n(this,e,f)){o(this,e,u).call(this,c);const l=i.closest("gds-popover");l&&l.hide()}}};r.styles=[R,at];h([g({type:Number})],r.prototype,"page",2);h([g({type:Number})],r.prototype,"rows",2);h([g({type:Number})],r.prototype,"total",2);h([g({type:Array})],r.prototype,"options",2);h([g({type:Boolean})],r.prototype,"jump",2);h([g({attribute:"hide-options",type:Boolean,reflect:!1})],r.prototype,"hideOptions",2);h([g({reflect:!1})],r.prototype,"density",2);h([g()],r.prototype,"label",2);h([J("#page-input")],r.prototype,"_elInput",2);h([_()],r.prototype,"_isMobile",2);h([_()],r.prototype,"_jumpPopoverOpen",2);h([V("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=h([Q(),F("gds-pagination",{dependsOn:[q,X,ot,nt,K,Y,H,U,Z,tt,it,et,st]})],r);r.define();export{r as G};
