import{i as T,h as o,v as I,a2 as P,w as x,f as W,n as h,R as S,a3 as B,o as l,a as _,g as O,F as A,d as $}from"./iframe-DR7_L-1p.js";import{G as R}from"./flex.component-BWUkr1rl.js";import{I as D}from"./checkmark.component-BPMVrT_W.js";import{I as M}from"./chevron-right.component-DYaKWyrE.js";import{I as F}from"./minus-small.component-CS-UZJZq.js";import{G as j}from"./list-item-jl8sJYsc.js";import{G as z}from"./text.component-BsUVRtFw.js";import{c as K}from"./rbcb-toggle.template-BfnB_Ooh.js";import{r as N}from"./resize-observer-CfkbZofs.js";import{w as V}from"./props-link-vRXXw61w.js";const q=T`
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
    transition:
      background-color 0.15s ease,
      box-shadow 0.15s ease;
    /* Extend hover to top, and bottom edges of the host */
    margin-top: calc(-1 * var(--gds-sys-space-s));
    margin-bottom: calc(-1 * var(--gds-sys-space-s));
    padding: var(--gds-sys-space-s);
    /* Pre-set transparent outline so it animates in on focus (same pattern as gds-button) */
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
`;var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},r=(e,t,s,c)=>{for(var d=c>1?void 0:c?J(t,s):t,u=e.length-1,m;u>=0;u--)(m=e[u])&&(d=(c?m(t,s,d):m(d))||d);return c&&d&&H(t,s,d),d},w=(e,t,s)=>t.has(e)||k("Cannot "+s),y=(e,t,s)=>(w(e,t,"read from private field"),s?s.call(e):t.get(e)),Q=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),i=(e,t,s)=>(w(e,t,"access private method"),s),a,f,C,p,E,v,L,g,b,G;let n=class extends V(j){constructor(){super(...arguments),Q(this,a),this._isWrapped=!1,this._hasLead=!1,this.label="",this.selectable=!1,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasTrailContent=!1}_checkWrap(){const e=this._itemsContainer;if(!e)return;const t=Array.from(e.children);if(t.length<2){this._isWrapped=!1;return}const s=t[0].getBoundingClientRect().top;this._isWrapped=t.some(c=>c.getBoundingClientRect().top>s)}render(){return o`${i(this,a,G).call(this)}`}};a=new WeakSet;f=function(){return!!this.href};C=function(){const e=s=>{s.stopPropagation(),!this.disabled&&(this.checked=!this.checked,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))},t=s=>{(s.key===" "||s.key==="Enter")&&(s.preventDefault(),e(s))};return o`
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
        ${K({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:!1})}
      </div>
    `};p=function(){return this.selectable?i(this,a,C).call(this):o``};E=function(e,t=!1){return o`
      <div class="item-column ${t?"align-end":""}">
        ${$(e.label,()=>o`<gds-text font="detail-s-regular" tag="label"
              >${e.label}</gds-text
            >`)}
        <gds-text font="detail-m-book" tag="span">${e.value}</gds-text>
      </div>
    `};v=function(e){const t=e.target;this._hasLead=t.assignedElements().length>0};L=function(e){const t=e.target;this._hasTrailContent=t.assignedElements().length>0||y(this,a,f)};g=function(){if(this.items&&this.items.length>0){const e=this.items.length>=3?"wrap":"nowrap",t=this.items.length>=2&&!this._isWrapped;return o`
        <slot name="lead" @slotchange=${i(this,a,v)}></slot>
        <gds-flex
          class="items-container"
          flex="1"
          justify-content="space-between"
          gap="l"
          flex-wrap=${e}
        >
          ${this.items.map((s,c)=>{const d=c===this.items.length-1;return i(this,a,E).call(this,c===0&&this.label&&!s.label?{...s,label:this.label}:s,t&&d)})}
        </gds-flex>
        <slot></slot>
      `}return o`<slot name="lead" @slotchange=${i(this,a,v)}></slot
      ><slot></slot>`};b=function(){const e=_({"has-content":this._hasTrailContent});return o`
      <slot name="trail" @slotchange=${i(this,a,L)} class=${e}
        >${$(this.href,()=>o`<gds-icon-chevron-right></gds-icon-chevron-right>`)}</slot
      >
    `};G=function(){if(y(this,a,f)&&this.selectable)return o`
        ${i(this,a,p).call(this)} ${i(this,a,g).call(this)}
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
      `;if(y(this,a,f)){const e=_({"has-lead":this._hasLead});return o`
        ${i(this,a,p).call(this)}
        <a
          class="linked-area ${e}"
          href=${l(this.href)}
          target=${l(this.target)}
          rel=${l(this.rel)}
          download=${l(this.download)}
          ping=${l(this.ping)}
        >
          ${i(this,a,g).call(this)} ${i(this,a,b).call(this)}
        </a>
      `}return o`${i(this,a,p).call(this)} ${i(this,a,g).call(this)}
    ${i(this,a,b).call(this)}`};n.styles=[I,P,q];r([x()],n.prototype,"_isWrapped",2);r([x()],n.prototype,"_hasLead",2);r([W(".items-container")],n.prototype,"_itemsContainer",2);r([N()],n.prototype,"_checkWrap",1);r([h({type:Array})],n.prototype,"items",2);r([h({reflect:!0})],n.prototype,"label",2);r([h({type:Boolean,reflect:!0})],n.prototype,"selectable",2);r([h({type:Boolean,reflect:!0})],n.prototype,"checked",2);r([h({type:Boolean,reflect:!0})],n.prototype,"indeterminate",2);r([h({type:Boolean,reflect:!0})],n.prototype,"disabled",2);r([S({...B,reflect:!0})],n.prototype,"padding-inline",2);r([x()],n.prototype,"_hasTrailContent",2);n=r([O("gds-list-item-pattern-01",{dependsOn:[R,z,A,D,F,M]})],n);export{n as G};
