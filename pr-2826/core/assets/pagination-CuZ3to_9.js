import{i as D,z as E,R as A,J as R,B as W,A as F,H as l,d as v,h as c,y as J,n as g,l as T,C as _,a as q,I as H,D as Q,e as V}from"./iframe-CAXRNL5R.js";import{l as X}from"./localized-decorator-DK5RIkPW.js";import{w as Y,G as K}from"./popover.component-CcUy6kTf.js";import{a as U,G as Z}from"./context-menu.component-DKM6kJiz.js";import{a as tt}from"./dropdown.component-DNuDY6K4.js";import{I as et}from"./chevron-bottom.component-DWeqjdCK.js";import{I as st,a as nt,b as it,c as ot}from"./chevron-right-small.component-dlCxN4_l.js";import{I as at}from"./chevron-right.component-KGSeCrGQ.js";import{G as rt}from"./input.component-B-J85IZr.js";import{G as lt}from"./text.component-DBX7t9zK.js";const pt=D`
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

  nav {
    width: 100%;
  }
`;var ht=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,P=t=>{throw TypeError(t)},h=(t,s,n,d)=>{for(var p=d>1?void 0:d?ct(s,n):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(p=(d?b(s,n,p):b(p))||p);return d&&p&&ht(s,n,p),p},w=(t,s,n)=>s.has(t)||P("Cannot "+n),i=(t,s,n)=>(w(t,s,"read from private field"),n?n.call(t):s.get(t)),dt=(t,s,n)=>s.has(t)?P("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),o=(t,s,n)=>(w(t,s,"access private method"),n),e,u,a,G,C,z,I,y,x,k,M,S,B,O,j,f,N,L,$;const gt={compact:{button:"small",font:"detail-s-book",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-s-book",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-m-book",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends E(A(R(W))){constructor(){super(...arguments),dt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.hideOptions=!1,this.simple=!1,this.density="comfortable",this.label="",this._isMobile=!1,this._jumpPopoverOpen=!1}_handleMobile(t){this._isMobile=t}render(){const s=i(this,e,u)>1,n=o(this,e,O).call(this);return!s&&!n?F:c`
      <nav aria-label="${this.label||l("Pagination")}">
        <gds-flex
          align-items="center"
          justify-content="space-between"
          width="100%"
          gap="${i(this,e,a).gap}"
        >
          ${o(this,e,j).call(this)}
          <gds-flex
            aling-items="center"
            gap="${i(this,e,a).gap}"
            flex="1"
            justify-content="${s?"space-between":"flex-end"}"
          >
            ${[v(s,()=>this.simple?o(this,e,S).call(this):o(this,e,M).call(this)),n]}
          </gds-flex>
        </gds-flex>
      </nav>
    `}};e=new WeakSet;u=function(){return Math.ceil(this.total/this.rows)};a=function(){return gt[this.density]};G=function(t){if(t<=7)return Array.from({length:t},(d,p)=>p+1);const s=t,n=[];return n.push(1),this.page<=4?n.push(2,3,4,5,"...",s):this.page>=t-3?n.push("...",t-4,t-3,t-2,t-1,s):n.push("...",this.page-1,this.page,this.page+1,"...",s),n};C=function(t){if(t==="...")return c`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,L)}
        >
          <gds-button
            size="${i(this,e,a).button}"
            rank="tertiary"
            slot="trigger"
            label="${l("Jump to page")}"
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
              label="${l("Go to page")}"
              type="number"
              min="1"
              max="${i(this,e,u)}"
              @change=${o(this,e,$)}
            >
              <gds-button
                size="xs"
                label="${l("Go")}"
                rank="secondary"
                @click=${o(this,e,$)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,n=this.page===s,d=`${l("Current page")}, ${l("page")} ${s}`,p=`${l("Go to page")} ${s}`,m=n?d:p;return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="${n?"primary":"tertiary"}"
        label="${m}"
        aria-current="${n?"page":"false"}"
        @click=${()=>o(this,e,f).call(this,s)}
      >
        ${s}
      </gds-button>
    `};z=function(){const t=i(this,e,u),s=o(this,e,G).call(this,t);return c`${s.map(n=>o(this,e,C).call(this,n))}`};I=function(){return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${l("Go to first page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,f).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};y=function(){return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${l("Go to previous page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,f).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};x=function(){const t=i(this,e,u);return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${l("Go to next page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,f).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};k=function(){const t=i(this,e,u);return c`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${l("Go to last page")}"
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
        ${[v(this.jump,()=>o(this,e,I).call(this)),o(this,e,y).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,z).call(this)}
        </gds-flex>
        ${[o(this,e,x).call(this),v(this.jump,()=>o(this,e,k).call(this))]}
      </gds-flex>
    `};S=function(){return c`
      <gds-flex
        gap="${i(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls navigation-controls-simple"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${o(this,e,y).call(this)}
        <gds-text
          font="${i(this,e,a).font}"
          color="neutral-01"
          aria-live="polite"
          aria-atomic="true"
        >
          ${l("Page")} ${this.page}
        </gds-text>
        ${o(this,e,x).call(this)}
      </gds-flex>
    `};B=function(t){const s=this.rows===t;return c`
      <gds-menu-item
        data-value=${t}
        class=${V({selected:s})}
        size="${i(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};O=function(){if(this._isMobile||this.hideOptions||this.options.length<=1)return null;const t=`${l("Rows per page")}, ${this.rows} ${l("selected")}`;return c`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${i(this,e,a).font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${l("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,N)}>
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
          ${this.options.map(s=>o(this,e,B).call(this,s))}
        </gds-context-menu>
      </gds-flex>
    `};j=function(){return this._isMobile||!this.label?null:c`
      <gds-text
        font="${i(this,e,a).font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `};f=function(t){this.dispatchCustomEvent("gds-page-change",{detail:{page:t},bubbles:!0})};N=function(t){const s=t.target,n=parseInt(s.dataset.value||"10");n!==this.rows&&this.dispatchCustomEvent("gds-rows-change",{detail:{rows:n},bubbles:!0})};L=function(t){if(this._jumpPopoverOpen=t.detail.open,t.detail.open){const n=t.target.querySelector('[gds-element="gds-input"]');n&&requestAnimationFrame(()=>{n.focus()})}};$=function(t){const n=t.target.closest('[gds-element="gds-input"]');if(n){const d=parseInt(n.value,10);if(d&&d>=1&&d<=i(this,e,u)){o(this,e,f).call(this,d);const p=n.closest('[gds-element="gds-popover"]');p&&(p.open=!1)}}};r.styles=[J,pt];h([g({type:Number})],r.prototype,"page",2);h([g({type:Number})],r.prototype,"rows",2);h([g({type:Number})],r.prototype,"total",2);h([g({type:Array})],r.prototype,"options",2);h([g({type:Boolean})],r.prototype,"jump",2);h([g({attribute:"hide-options",type:Boolean,reflect:!1})],r.prototype,"hideOptions",2);h([g({type:Boolean,reflect:!1})],r.prototype,"simple",2);h([g({reflect:!1})],r.prototype,"density",2);h([g()],r.prototype,"label",2);h([T("#page-input")],r.prototype,"_elInput",2);h([_()],r.prototype,"_isMobile",2);h([_()],r.prototype,"_jumpPopoverOpen",2);h([Y("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=h([X(),q("gds-pagination",{dependsOn:[H,K,lt,rt,tt,U,Z,et,st,nt,at,it,ot]}),Q({labelledBy:"nav",describedBy:"nav"})],r);r.define();export{r as G};
