import{i as N,L as O,U as A,K as D,A as L,h,b as v,H as W,t as j,n as d,d as R,z as F,a as J,I as T,g as q,J as H}from"./iframe-DVJINxuy.js";import{w as K,G as Q}from"./popover.component-C8o6T2Uy.js";import{a as U,G as V}from"./context-menu.component-DAq8MHHu.js";import{a as X}from"./dropdown.component-7_Lr0HhQ.js";import{I as Y}from"./chevron-bottom.component-C-R2pIAE.js";import{I as Z,a as tt,b as et,c as st}from"./chevron-right-small.component-C4W-_ats.js";import{I as nt}from"./chevron-right.component-wzO7Vwp_.js";import{G as it}from"./input.component-D_8imp2Q.js";import{G as ot}from"./text-CGCi0eev.js";const at=N`
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
`;var rt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},p=(t,s,n,c)=>{for(var l=c>1?void 0:c?lt(s,n):s,f=t.length-1,m;f>=0;f--)(m=t[f])&&(l=(c?m(s,n,l):m(l))||l);return c&&l&&rt(s,n,l),l},$=(t,s,n)=>s.has(t)||_("Cannot "+n),i=(t,s,n)=>($(t,s,"read from private field"),n?n.call(t):s.get(t)),ht=(t,s,n)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,n),o=(t,s,n)=>($(t,s,"access private method"),n),e,g,a,x,y,P,w,G,z,I,k,C,M,S,u,B,E,b;const pt={compact:{button:"small",font:"detail-book-s",gap:"xl",navGap:"xs",input:"small",inputWidth:"140px",inputPadding:"m"},comfortable:{button:"small",font:"detail-book-s",gap:"2xl",navGap:"s",input:"small",inputWidth:"140px",inputPadding:"m"},spacious:{button:"medium",font:"detail-book-m",gap:"2xl",navGap:"s",input:"large",inputWidth:"200px",inputPadding:"xl"}};let r=class extends O(A(D(L))){constructor(){super(...arguments),ht(this,e),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1,this.density="comfortable",this.label="",this._isMobile=!1}_handleMobile(t){this._isMobile=t}render(){return h`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${i(this,e,a).gap}"
      >
        ${o(this,e,S).call(this)}
        <gds-flex aling-items="center" gap="${i(this,e,a).gap}" flex="1">
          ${[o(this,e,k).call(this),o(this,e,M).call(this)]}
        </gds-flex>
      </gds-flex>
    `}};e=new WeakSet;g=function(){return Math.ceil(this.total/this.rows)};a=function(){return pt[this.density]};x=function(t){if(t<=7)return Array.from({length:t},(c,l)=>l+1);const s=t,n=[];return n.push(1),this.page<=4?n.push(2,3,4,5,"...",s):this.page>=t-3?n.push("...",t-4,t-3,t-2,t-1,s):n.push("...",this.page-1,this.page,this.page+1,"...",s),n};y=function(t){if(t==="...")return h`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${o(this,e,E)}
        >
          <gds-button
            size="${i(this,e,a).button}"
            rank="tertiary"
            slot="trigger"
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
              label="Go to page"
              type="number"
              min="1"
              max="${i(this,e,g)}"
              @change=${o(this,e,b)}
            >
              <gds-button
                size="xs"
                rank="secondary"
                @click=${o(this,e,b)}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `;const s=t,n=this.page===s;return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="${n?"primary":"tertiary"}"
        @click=${()=>o(this,e,u).call(this,s)}
      >
        ${s}
      </gds-button>
    `};P=function(){const t=i(this,e,g),s=o(this,e,x).call(this,t);return h`${s.map(n=>o(this,e,y).call(this,n))}`};w=function(){return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `};G=function(){return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        ?disabled=${this.page===1}
        @click=${()=>o(this,e,u).call(this,this.page-1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `};z=function(){const t=i(this,e,g);return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
        ?disabled=${this.page===t}
        @click=${()=>o(this,e,u).call(this,this.page+1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `};I=function(){const t=i(this,e,g);return h`
      <gds-button
        size="${i(this,e,a).button}"
        rank="secondary"
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
        ${[v(this.jump,()=>o(this,e,w).call(this)),o(this,e,G).call(this)]}
        <gds-flex gap="4xs" align-items="center">
          ${o(this,e,P).call(this)}
        </gds-flex>
        ${[o(this,e,z).call(this),v(this.jump,()=>o(this,e,I).call(this))]}
      </gds-flex>
    `};C=function(t){const s=this.rows===t;return h`
      <gds-menu-item
        data-value=${t}
        class=${J({selected:s})}
        size="${i(this,e,a).button}"
      >
        ${t}
      </gds-menu-item>
    `};M=function(){return this._isMobile?null:h`
      <gds-flex align-items="center" gap="s">
        <gds-text font="${i(this,e,a).font}" color="neutral-01">
          ${W("Rows per page")}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${o(this,e,B)}>
          <gds-button
            slot="trigger"
            size="${i(this,e,a).button}"
            rank="secondary"
          >
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map(t=>o(this,e,C).call(this,t))}
        </gds-context-menu>
      </gds-flex>
    `};S=function(){return this._isMobile||!this.label?null:h`
      <gds-text font="${i(this,e,a).font}" color="neutral-02">
        ${this.label}
      </gds-text>
    `};u=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};B=function(t){const s=t.target,n=parseInt(s.dataset.value||"10");n!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:n},bubbles:!0}))};E=function(t){if(t.detail.open){const n=t.target.querySelector("gds-input");n&&requestAnimationFrame(()=>{n.focus()})}};b=function(t){const n=t.target.closest("gds-input");if(n){const c=parseInt(n.value,10);if(c&&c>=1&&c<=i(this,e,g)){o(this,e,u).call(this,c);const l=n.closest("gds-popover");l&&l.hide()}}};r.styles=[j,at];p([d({type:Number})],r.prototype,"page",2);p([d({type:Number})],r.prototype,"rows",2);p([d({type:Number})],r.prototype,"total",2);p([d({type:Array})],r.prototype,"options",2);p([d({type:Boolean})],r.prototype,"jump",2);p([d({reflect:!1})],r.prototype,"density",2);p([d()],r.prototype,"label",2);p([R("#page-input")],r.prototype,"_elInput",2);p([F()],r.prototype,"_isMobile",2);p([K("(max-width: 768px)")],r.prototype,"_handleMobile",1);r=p([T(),q("gds-pagination",{dependsOn:[H,Q,ot,it,X,U,V,Y,Z,tt,nt,et,st]})],r);r.define();export{r as G};
