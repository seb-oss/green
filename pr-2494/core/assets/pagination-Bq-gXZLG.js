import{i as N,L as O,U as A,K as D,A as W,h,b as v,H as p,t as j,n as d,d as R,z as J,a as T,I as F,g as q,J as H}from"./iframe-D-4og825.js";import{w as K,G as Q}from"./popover.component-DuoALPnt.js";import{a as U,G as V}from"./context-menu.component-BV78Qbgd.js";import{a as X}from"./dropdown.component-BbgESdeK.js";import{I as Y}from"./chevron-bottom.component-BHAk1oQN.js";import{I as Z,a as tt,b as et,c as st}from"./chevron-right-small.component-xgt276F9.js";import{I as nt}from"./chevron-right.component-BLG0Knk0.js";import{G as it}from"./input.component-CqNHe81p.js";import{G as ot}from"./text-BpZn50rK.js";const at=N`
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
`;var rt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},g=(t,s,n,c)=>{for(var r=c>1?void 0:c?lt(s,n):s,m=t.length-1,b;m>=0;m--)(b=t[m])&&(r=(c?b(s,n,r):b(r))||r);return c&&r&&rt(s,n,r),r},x=(t,s,n)=>s.has(t)||_("Cannot "+n),i=(t,s,n)=>(x(t,s,"read from private field"),n?n.call(t):s.get(t)),pt=(t,s,n)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),o=(t,s,n)=>(x(t,s,"access private method"),n),e,f,a,y,w,P,G,z,C,I,k,M,S,B,u,E,L,$;const ct={compact:{button:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let l=class extends O(A(D(W))){constructor(){super(...arguments),pt(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.density="comfortable",this.label="",this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return h`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${i(this,e,a).gap}"
      >
        ${o(this,e,B).call(this)}
        <gds-flex aling-items="center" gap="${i(this,e,a).gap}" flex="1">
          ${[o(this,e,k).call(this),o(this,e,S).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;f=function(){return Math.ceil(this.total/this.rows)};a=function(){return ct[this.density]};y=function(t){if(t<=7)return Array.from({length:t},(c,r)=>r+1);const s=t,n=[];return n.push(1),this.page<=4?n.push(2,3,4,5,"...",s):this.page>=t-3?n.push("...",t-4,t-3,t-2,t-1,s):n.push("...",this.page-1,this.page,this.page+1,"...",s),n};w=function(t){if(t==="...")return h`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,L)}
        >
          <gds-button
            size="${i(this,e,a).button}"
            rank="tertiary"
            slot="trigger"
            label="${p("Jump to page")}"
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
              max="${i(this,e,f)}"
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
      `;const s=t,n=this.page===s,c=`${p("Current page")}, ${p("page")} ${s}`,r=`${p("Go to page")} ${s}`,m=n?c:r;return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="${n?"primary":"tertiary"}"
        label="${m}"
        aria-current="${n?"page":"false"}"
        @click=${()=>o(this,e,u).call(this,s)}
      >
        ${s}
      </gds-button>
    `};P=function(){const t=i(this,e,f),s=o(this,e,y).call(this,t);return h`${s.map(n=>o(this,e,w).call(this,n))}`};G=function(){return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to first page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};z=function(){return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to previous page")}"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};C=function(){const t=i(this,e,f);return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to next page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,u).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};I=function(){const t=i(this,e,f);return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        label="${p("Go to last page")}"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,u).call(this,t)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `};k=function(){return h`
      <gds-flex
        gap="${i(this,e,a).navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[v(this.jump,()=>o(this,e,G).call(this)),o(this,e,z).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,P).call(this)}
        </gds-flex>
        ${[o(this,e,C).call(this),v(this.jump,()=>o(this,e,I).call(this))]}
      </gds-flex>
    `};M=function(t){const s=this.rows===t;return h`
      <gds-menu-item
        data-value=${t}
        class=${T({selected:s})}
        size="${i(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};S=function(){if(this._isMobile)return null;const t=`${p("Rows per page")}, ${this.rows} ${p("selected")}`;return h`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${i(this,e,a).font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${p("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,E)}>
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
          ${this.options.map(s=>o(this,e,M).call(this,s))}
        </gds-context-menu>
      </gds-flex>
    `};B=function(){return this._isMobile||!this.label?null:h`
      <gds-text
        font="${i(this,e,a).font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `};u=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};E=function(t){const s=t.target,n=parseInt(s.dataset.value||"10");n!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:n},bubbles:!0}))};L=function(t){if(t.detail.open){const n=t.target.querySelector("gds-input");n&&requestAnimationFrame(()=>{n.focus()})}};$=function(t){const n=t.target.closest("gds-input");if(n){const c=parseInt(n.value,10);if(c&&c>=1&&c<=i(this,e,f)){o(this,e,u).call(this,c);const r=n.closest("gds-popover");r&&r.hide()}}};l.styles=[j,at];g([d({type:Number})],l.prototype,"page",2);g([d({type:Number})],l.prototype,"rows",2);g([d({type:Number})],l.prototype,"total",2);g([d({type:Array})],l.prototype,"options",2);g([d({type:Boolean})],l.prototype,"jump",2);g([d({reflect:!1})],l.prototype,"density",2);g([d()],l.prototype,"label",2);g([R("#page-input")],l.prototype,"_elInput",2);g([J()],l.prototype,"_isMobile",2);g([K("(max-width: 768px)")],l.prototype,"_handleMobile",1);l=g([F(),q("gds-pagination",{dependsOn:[H,Q,ot,it,X,U,V,Y,Z,tt,nt,et,st]})],l);l.define();export{l as G};
