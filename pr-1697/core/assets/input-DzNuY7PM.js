import{m as M}from"./runtime-CMQcyTl6.js";import{n,r as A,g as I,h as c}from"./gds-element-DjAhZX8m.js";import{a as W}from"./query-p8xgzTDt.js";import{r as y}from"./query-async-MEroNOeJ.js";import{r as G}from"./form-control-footer-BmoT9s9s.js";import{i as B,E as _}from"./lit-element-C_s9q329.js";import{t as D}from"./tokens.style-B_4vLAFn.js";import{a as F,f as P}from"./button-BKEHoiqg.js";import"./cross-small-WNT3EiwY.js";import"./flex-Az1wr94v.js";const L=B`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }
  }

  @layer simplified {
  }
`;var R=Object.defineProperty,X=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},a=(e,t,i,o)=>{for(var r=o>1?void 0:o?X(t,i):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(r=(o?g(t,i,r):g(r))||r);return o&&r&&R(t,i,r),r},z=(e,t,i)=>t.has(e)||$("Cannot "+i),h=(e,t,i)=>(z(e,t,"read from private field"),i?i.call(e):t.get(e)),p=(e,t,i)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),d=(e,t,i)=>(z(e,t,"access private method"),i),l,k,w,v,m,f,b,x,C,E,S,T,N,O;let s=class extends F{constructor(){super(),p(this,l),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.trailSlotOccupied=!1,p(this,v,e=>["type","placeholder","required"].includes(e.name)),p(this,m,e=>{const t=e.target;this.value=t.value}),p(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),p(this,b,()=>{this.elInputAsync.then(e=>e.focus())}),p(this,x,()=>{this.value=""})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return c`${G(this.variant,[["default",()=>d(this,l,k).call(this)],["floating-label",()=>d(this,l,w).call(this)]])}`}_getValidityAnchor(){return this.elInput}};l=new WeakSet;k=function(){return c`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text">${this.supportingText}</span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="center"
        gap="${this.size==="small"?"2xs":"xs"}"
        padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
        min-block-size="${this.size==="small"?"xl":"3xl"}"
        block-size="${this.size==="small"?"xl":"3xl"}"
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${h(this,b)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${d(this,l,C).call(this)} ${d(this,l,T).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${d(this,l,N).call(this)} ${d(this,l,E).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${h(this,l,O)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};w=function(){return _};v=new WeakMap;m=new WeakMap;f=new WeakMap;b=new WeakMap;x=new WeakMap;C=function(){return c` <slot name="lead"></slot> `};E=function(){return c`
      <slot name="trail" @slotchange=${d(this,l,S)}></slot>
    `};S=function(e){const i=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=i.length>0&&i.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};T=function(){return c`
      <input
        @input=${h(this,m)}
        @change=${h(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${P(h(this,v))}
      />
    `};N=function(){return this.clearable&&this.value.length>0?c`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${M("Clear input")}"
          @click=${h(this,x)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:_};O=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};s.styles=[D,L];a([n()],s.prototype,"value",2);a([n()],s.prototype,"label",2);a([n({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([n({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([n({type:Boolean})],s.prototype,"clearable",2);a([n({type:Number})],s.prototype,"maxlength",2);a([n({type:String})],s.prototype,"variant",2);a([n({type:String})],s.prototype,"size",2);a([y("input")],s.prototype,"elInputAsync",2);a([W("input")],s.prototype,"elInput",2);a([y('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);a([A()],s.prototype,"trailSlotOccupied",2);s=a([I("gds-input")],s);
