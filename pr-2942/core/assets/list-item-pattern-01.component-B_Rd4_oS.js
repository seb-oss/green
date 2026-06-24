import{i as S,h as o,v as W,a2 as P,w as _,f as x,n as h,R as B,a3 as O,o as l,a as $,g as R,F as A,d as k}from"./iframe-BMtxp-Hq.js";import{G as D}from"./flex.component-CoUPMP16.js";import{I as M}from"./checkmark.component-Cl3eXk-r.js";import{I as F}from"./chevron-right.component-1Y0HEQQn.js";import{I as j}from"./minus-small.component-Bh1wSpG4.js";import{G as z}from"./list-item-Bxi_9W8-.js";import{G as K}from"./text.component-DKvbGBO3.js";import{c as N}from"./rbcb-toggle.template-C8CBK2w0.js";import{r as V}from"./resize-observer-CfkbZofs.js";import{w as q}from"./props-link-BY3TmMr2.js";const H=S`
  :host {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-s);
    padding: var(--gds-sys-space-s);
    padding-inline: var(--gds-sys-space-s);
    border-radius: var(--gds-sys-space-2xs);
    transition:
      background-color 0.15s ease,
      box-shadow 0.15s ease;
  }

  /* Remove padding on anchor elements when href is set, applied from the parent list if dividers is set. */
  :host([href]) {
    padding: 0;
  }

  /* Anchor wrapping main when href is set */
  .linked-area {
    flex: 1;
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: var(--gds-sys-space-s);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    border-radius: var(--gds-sys-space-2xs);
    transition-property: background-color, outline;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-ease-in);
    padding: var(--gds-sys-space-s);
    outline-color: transparent;
    outline-offset: calc(-1 * var(--gds-sys-space-4xs));
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
  }

  .linked-area:focus {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  .linked-area:focus:not(:focus-visible) {
    outline-color: transparent;
  }

  @media (pointer: fine) {
    .linked-area:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l2-neutral-01),
        var(--gds-sys-color-state-neutral-03)
      );
      padding: var(--gds-sys-space-s);
    }
  }

  .linked-area:active {
    background-color: color-mix(
      in srgb,
      var(--gds-sys-color-l2-neutral-01),
      var(--gds-sys-color-state-neutral-04)
    );
  }

  .linked-area .has-lead {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  slot[name='trail'] {
    margin-inline-start: auto;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  slot[name='trail']:not(.has-content) {
    display: none;
  }

  :host([href]) slot[name='trail'] {
    display: flex;
    min-width: 40px;
  }

  .rbcb-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
  }

  .item-column {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-4xs);
    justify-content: center;
    text-align: start;
  }

  .item-column.align-end {
    text-align: end;
  }
`;var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},r=(e,t,s,d)=>{for(var c=d>1?void 0:d?Q(t,s):t,m=e.length-1,y;m>=0;m--)(y=e[m])&&(c=(d?y(t,s,c):y(c))||c);return d&&c&&J(t,s,c),c},C=(e,t,s)=>t.has(e)||w("Cannot "+s),u=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),U=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(C(e,t,"access private method"),s),a,p,E,L,g,T,v,G,f,b,I;let i=class extends q(z){constructor(){super(...arguments),U(this,a),this._isWrapped=!1,this._hasLead=!1,this.label="",this.selectable=!1,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasTrailContent=!1}_checkWrap(){const e=this._itemsContainer;if(!e)return;const t=Array.from(e.children);if(t.length<2){this._isWrapped=!1;return}const s=t[0].getBoundingClientRect().top;this._isWrapped=t.some(d=>d.getBoundingClientRect().top>s)}updated(e){super.updated(e),e.has("href")&&n(this,a,E).call(this)}render(){return o`${n(this,a,I).call(this)}`}};a=new WeakSet;p=function(){return!!this.href};E=function(){this._hasTrailContent=u(this,a,p)||!!this._trailSlot?.assignedElements().length};L=function(){const e=s=>{s.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},t=s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),e(s))};return o`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
        aria-label=${this.label||"Select item"}
        tabindex="0"
        @click=${e}
        @keydown=${t}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          aria-hidden="true"
          tabindex="-1"
          @change=${e}
        />
        ${N({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `};g=function(){return this.selectable?n(this,a,L).call(this):o``};T=function(e,t=!1){return o`
      <div class="item-column ${t?"align-end":""}">
        ${k(e.label,()=>o`<gds-text font="detail-s-regular" tag="label"
              >${e.label}</gds-text
            >`)}
        <gds-text font="detail-m-book" tag="span">${e.value}</gds-text>
      </div>
    `};v=function(e){const t=e.target;this._hasLead=t.assignedElements().length>0};G=function(e){const t=e.target;this._hasTrailContent=t.assignedElements().length>0||u(this,a,p)};f=function(){if(this.items&&this.items.length>0){const e=this.items.length>=3?"wrap":"nowrap",t=this.items.length>=2&&!this._isWrapped;return o`
        <slot name="lead" @slotchange=${n(this,a,v)}></slot>
        <gds-flex
          class="items-container"
          flex="1"
          justify-content="space-between"
          gap="l"
          flex-wrap=${e}
        >
          ${this.items.map((s,d)=>{const c=d===this.items.length-1;return n(this,a,T).call(this,d===0&&this.label&&!s.label?{...s,label:this.label}:s,t&&c)})}
        </gds-flex>
        <slot></slot>
      `}return o`<slot name="lead" @slotchange=${n(this,a,v)}></slot
      ><slot></slot>`};b=function(){const e=$({"has-content":this._hasTrailContent});return o`
      <slot name="trail" @slotchange=${n(this,a,G)} class=${e}
        >${k(this.href,()=>o`<gds-icon-chevron-right></gds-icon-chevron-right>`)}</slot
      >
    `};I=function(){if(u(this,a,p)&&this.selectable)return o`
        ${n(this,a,g).call(this)} ${n(this,a,f).call(this)}
        <gds-button
          slot="trail"
          href=${l(this.href)}
          target=${l(this.target)}
          rel=${l(this.rel)}
          download=${l(this.download)}
          ping=${l(this.ping)}
          rank="tertiary"
          aria-label=${this.label||"Navigate"}
          ><gds-icon-chevron-right></gds-icon-chevron-right
        ></gds-button>
      `;if(u(this,a,p)){const e=$({"has-lead":this._hasLead});return o`
        ${n(this,a,g).call(this)}
        <a
          class="linked-area ${e}"
          href=${l(this.href)}
          target=${l(this.target)}
          rel=${l(this.rel)}
          download=${l(this.download)}
          ping=${l(this.ping)}
        >
          ${n(this,a,f).call(this)} ${n(this,a,b).call(this)}
        </a>
      `}return o`${n(this,a,g).call(this)} ${n(this,a,f).call(this)}
    ${n(this,a,b).call(this)}`};i.styles=[...W,P,H];r([_()],i.prototype,"_isWrapped",2);r([_()],i.prototype,"_hasLead",2);r([x(".items-container")],i.prototype,"_itemsContainer",2);r([x('slot[name="trail"]')],i.prototype,"_trailSlot",2);r([V()],i.prototype,"_checkWrap",1);r([h({type:Array})],i.prototype,"items",2);r([h({reflect:!0})],i.prototype,"label",2);r([h({type:Boolean,reflect:!0})],i.prototype,"selectable",2);r([h({type:Boolean,reflect:!0})],i.prototype,"checked",2);r([h({type:Boolean,reflect:!0})],i.prototype,"indeterminate",2);r([h({type:Boolean,reflect:!0})],i.prototype,"disabled",2);r([B({...O,reflect:!0})],i.prototype,"padding-inline",2);r([_()],i.prototype,"_hasTrailContent",2);i=r([R("gds-list-item-pattern-01",{dependsOn:[D,K,A,M,j,F]})],i);export{i as G};
