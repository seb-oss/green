import{i as S,h as l,B as W,a1 as B,E as _,l as x,n as d,o,e as $,a as P,K as O,d as k}from"./iframe-DuBKvbTM.js";import{G as A}from"./flex.component-Bilq_XdN.js";import{I as R}from"./checkmark.component-C2wu05yR.js";import{I as D}from"./chevron-right.component-WX3vz1us.js";import{I as M}from"./minus-small.component-S0urbRaC.js";import{G as z}from"./list-item-BWmLZhda.js";import{G as K}from"./text.component-ClFA9x5w.js";import{c as j}from"./rbcb-toggle.template-BaLEmXKl.js";import{r as F}from"./resize-observer-CfkbZofs.js";import{w as N}from"./props-link-Ch6Lk6N3.js";const q=S`
  :host {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-s);
    border-radius: var(--gds-sys-space-2xs);
    transition:
      background-color 0.15s ease,
      box-shadow 0.15s ease;
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
    margin: calc(-1 * var(--gds-sys-space-s));
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

  .nav-chevron {
    font: var(--gds-sys-text-detail-s-book);
  }

  @media (pointer: fine) {
    .linked-area:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l2-neutral-01),
        var(--gds-sys-color-state-neutral-03)
      );
      margin: calc(-1 * var(--gds-sys-space-s));
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

  :host([href][selectable]) slot[name='trail'] {
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
`;var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},r=(e,t,s,c)=>{for(var h=c>1?void 0:c?J(t,s):t,m=e.length-1,y;m>=0;m--)(y=e[m])&&(h=(c?y(t,s,h):y(h))||h);return c&&h&&H(t,s,h),h},C=(e,t,s)=>t.has(e)||w("Cannot "+s),u=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),Q=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),i=(e,t,s)=>(C(e,t,"access private method"),s),a,p,E,L,g,T,v,G,f,b,I;let n=class extends N(z){constructor(){super(...arguments),Q(this,a),this._isWrapped=!1,this._hasLead=!1,this.label="",this.selectable=!1,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasTrailContent=!1}_checkWrap(){const e=this._itemsContainer;if(!e)return;const t=Array.from(e.children);if(t.length<2){this._isWrapped=!1;return}const s=t[0].getBoundingClientRect().top;this._isWrapped=t.some(c=>c.getBoundingClientRect().top>s)}updated(e){super.updated(e),e.has("href")&&i(this,a,E).call(this)}render(){return l`${i(this,a,I).call(this)}`}};a=new WeakSet;p=function(){return!!this.href};E=function(){this._hasTrailContent=u(this,a,p)||!!this._trailSlot?.assignedElements().length};L=function(){const e=s=>{s.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},t=s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),e(s))};return l`
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
        ${j({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `};g=function(){return this.selectable?i(this,a,L).call(this):l``};T=function(e,t=!1){return l`
      <div class="item-column ${t?"align-end":""}">
        ${k(e.label,()=>l`<gds-text font="detail-s-regular" tag="label"
              >${e.label}</gds-text
            >`)}
        <gds-text font="detail-m-book" tag="span">${e.value}</gds-text>
      </div>
    `};v=function(e){const t=e.target;this._hasLead=t.assignedElements().length>0};G=function(e){const t=e.target;this._hasTrailContent=t.assignedElements().length>0||u(this,a,p)};f=function(){if(this.items&&this.items.length>0){const e=this.items.length>=3?"wrap":"nowrap",t=this.items.length>=2&&!this._isWrapped;return l`
        <slot name="lead" @slotchange=${i(this,a,v)}></slot>
        <gds-flex
          class="items-container"
          flex="1"
          justify-content="space-between"
          gap="l"
          flex-wrap=${e}
        >
          ${this.items.map((s,c)=>{const h=c===this.items.length-1;return i(this,a,T).call(this,c===0&&this.label&&!s.label?{...s,label:this.label}:s,t&&h)})}
        </gds-flex>
        <slot></slot>
      `}return l`<slot name="lead" @slotchange=${i(this,a,v)}></slot
      ><slot></slot>`};b=function(){const e=$({"has-content":this._hasTrailContent});return l`
      <slot name="trail" @slotchange=${i(this,a,G)} class=${e}
        >${k(this.href,()=>l`<gds-icon-chevron-right
              class="nav-chevron"
            ></gds-icon-chevron-right>`)}</slot
      >
    `};I=function(){if(u(this,a,p)&&this.selectable)return l`
        ${i(this,a,g).call(this)} ${i(this,a,f).call(this)}
        <gds-button
          slot="trail"
          href=${o(this.href)}
          target=${o(this.target)}
          rel=${o(this.rel)}
          download=${o(this.download)}
          ping=${o(this.ping)}
          rank="tertiary"
          size="small"
          aria-label=${this.label||"Navigate"}
          ><gds-icon-chevron-right></gds-icon-chevron-right
        ></gds-button>
      `;if(u(this,a,p)){const e=$({"has-lead":this._hasLead});return l`
        ${i(this,a,g).call(this)}
        <a
          class="linked-area ${e}"
          href=${o(this.href)}
          target=${o(this.target)}
          rel=${o(this.rel)}
          download=${o(this.download)}
          ping=${o(this.ping)}
        >
          ${i(this,a,f).call(this)} ${i(this,a,b).call(this)}
        </a>
      `}return l`${i(this,a,g).call(this)} ${i(this,a,f).call(this)}
    ${i(this,a,b).call(this)}`};n.styles=[...W,B,q];r([_()],n.prototype,"_isWrapped",2);r([_()],n.prototype,"_hasLead",2);r([x(".items-container")],n.prototype,"_itemsContainer",2);r([x('slot[name="trail"]')],n.prototype,"_trailSlot",2);r([F()],n.prototype,"_checkWrap",1);r([d({type:Array})],n.prototype,"items",2);r([d({reflect:!0})],n.prototype,"label",2);r([d({type:Boolean,reflect:!0})],n.prototype,"selectable",2);r([d({type:Boolean,reflect:!0})],n.prototype,"checked",2);r([d({type:Boolean,reflect:!0})],n.prototype,"indeterminate",2);r([d({type:Boolean,reflect:!0})],n.prototype,"disabled",2);r([_()],n.prototype,"_hasTrailContent",2);n=r([P("gds-list-item-pattern-01",{dependsOn:[A,K,O,R,M,D]})],n);export{n as G};
