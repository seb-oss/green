import{i as E,I as L,Q as A,H as D,z as W,A as F,E as p,d as v,h as c,v as R,n as g,f as T,w as y,g as J,F as q,y as Q,a as H}from"./iframe-C1LXsbkn.js";import{l as V}from"./localized-decorator-OS1BFSQ3.js";import{w as X,G as Y}from"./popover.component-TMi_fxgX.js";import{a as K,G as U}from"./context-menu.component-DoYyAtkY.js";import{a as Z}from"./dropdown.component-Cu5WKdGa.js";import{I as tt}from"./chevron-bottom.component-B6_MpyBB.js";import{I as et,a as st,b as nt,c as it}from"./chevron-right-small.component-DL_GWOFI.js";import{I as ot}from"./chevron-right.component-3-z4_il7.js";import{G as at}from"./input.component-CbGITBag.js";import{G as rt}from"./text.component-NbkTWyc3.js";const lt=E`
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
`;var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},h=(t,s,n,d)=>{for(var l=d>1?void 0:d?ht(s,n):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(l=(d?b(s,n,l):b(l))||l);return d&&l&&pt(s,n,l),l},x=(t,s,n)=>s.has(t)||_("Cannot "+n),i=(t,s,n)=>(x(t,s,"read from private field"),n?n.call(t):s.get(t)),dt=(t,s,n)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),o=(t,s,n)=>(x(t,s,"access private method"),n),e,u,a,P,w,G,C,z,I,k,M,S,O,B,f,j,N,$;const ct={compact:{button:"small",font:"detail-s-book",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-s-book",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-m-book",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends L(A(D(W))){constructor(){super(...arguments),dt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.hideOptions=!1,this.density="comfortable",this.label="",this._isMobile=!1,this._jumpPopoverOpen=!1}_handleMobile(t){this._isMobile=t}render(){const s=i(this,e,u)>1,n=o(this,e,O).call(this);return!s&&!n?F:c`
      <nav aria-label="${this.label||p("Pagination")}">
        <gds-flex
          align-items="center"
          justify-content="space-between"
          width="100%"
          gap="${i(this,e,a).gap}"
        >
          ${o(this,e,B).call(this)}
          <gds-flex
            aling-items="center"
            gap="${i(this,e,a).gap}"
            flex="1"
            justify-content="${s?"space-between":"flex-end"}"
          >
            ${[v(s,()=>o(this,e,M).call(this)),n]}
          </gds-flex>
        </gds-flex>
      </nav>
    `}};e=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};a=function(){return ct[this.density]};P=function(t){if(t<=7)return Array.from({length:t},(d,l)=>l+1);const s=t,n=[];return n.push(1),this.page<=4?n.push(2,3,4,5,"...",s):this.page>=t-3?n.push("...",t-4,t-3,t-2,t-1,s):n.push("...",this.page-1,this.page,this.page+1,"...",s),n};w=function(t){if(t==="...")return c`
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
    `};z=function(){return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to previous page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,f).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};I=function(){const t=i(this,e,u);return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to next page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,f).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};k=function(){const t=i(this,e,u);return c`
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
        ${[v(this.jump,()=>o(this,e,C).call(this)),o(this,e,z).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,G).call(this)}
        </gds-flex>
        ${[o(this,e,I).call(this),v(this.jump,()=>o(this,e,k).call(this))]}
      </gds-flex>
    `};S=function(t){const s=this.rows===t;return c`
      <gds-menu-item
        data-value=${t}
        class=${H({selected:s})}
        size="${i(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};O=function(){if(this._isMobile||this.hideOptions||this.options.length<=1)return null;const t=`${p("Rows per page")}, ${this.rows} ${p("selected")}`;return c`
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
          ${this.options.map(s=>o(this,e,S).call(this,s))}
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
    `};f=function(t){this.dispatchCustomEvent("gds-page-change",{detail:{page:t},bubbles:!0})};j=function(t){const s=t.target,n=parseInt(s.dataset.value||"10");n!==this.rows&&this.dispatchCustomEvent("gds-rows-change",{detail:{rows:n},bubbles:!0})};N=function(t){if(this._jumpPopoverOpen=t.detail.open,t.detail.open){const n=t.target.querySelector('[gds-element="gds-input"]');n&&requestAnimationFrame(()=>{n.focus()})}};$=function(t){const n=t.target.closest('[gds-element="gds-input"]');if(n){const d=parseInt(n.value,10);if(d&&d>=1&&d<=i(this,e,u)){o(this,e,f).call(this,d);const l=n.closest('[gds-element="gds-popover"]');l&&(l.open=!1)}}};r.styles=[R,lt];h([g({type:Number})],r.prototype,"page",2);h([g({type:Number})],r.prototype,"rows",2);h([g({type:Number})],r.prototype,"total",2);h([g({type:Array})],r.prototype,"options",2);h([g({type:Boolean})],r.prototype,"jump",2);h([g({attribute:"hide-options",type:Boolean,reflect:!1})],r.prototype,"hideOptions",2);h([g({reflect:!1})],r.prototype,"density",2);h([g()],r.prototype,"label",2);h([T("#page-input")],r.prototype,"_elInput",2);h([y()],r.prototype,"_isMobile",2);h([y()],r.prototype,"_jumpPopoverOpen",2);h([X("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=h([V(),J("gds-pagination",{dependsOn:[q,Y,rt,at,Z,K,U,tt,et,st,ot,nt,it]}),Q({labelledBy:"nav",describedBy:"nav"})],r);r.define();export{r as G};
