import{m as O}from"./runtime-CMQcyTl6.js";import{l as M}from"./localized-decorator-B8fm5KIw.js";import{n,r as A,g as I,h as c}from"./custom-element-scoping-b4lD3laR.js";import{a as W}from"./query-p8xgzTDt.js";import{r as G}from"./query-async-MEroNOeJ.js";import{r as B}from"./form-control-footer-RoTPdVQh.js";import{i as D,E as y}from"./lit-element-C_s9q329.js";import{t as F}from"./tokens.style-Y0rrifyK.js";import{a as P,f as L}from"./button-C5Gipx1b.js";import"./cross-small-CgIxxlLH.js";import"./flex-Bsn6VNzj.js";const R=D`
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
`;var X=Object.defineProperty,q=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},a=(e,t,s,o)=>{for(var r=o>1?void 0:o?q(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(r=(o?g(t,s,r):g(r))||r);return o&&r&&X(t,s,r),r},$=(e,t,s)=>t.has(e)||_("Cannot "+s),p=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>($(e,t,"access private method"),s),l,z,k,v,m,f,b,x,w,E,C,S,T,N;let i=class extends P{constructor(){super(),h(this,l),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,h(this,v,e=>["type","placeholder","required"].includes(e.name)),h(this,m,e=>{const t=e.target;this.value=t.value}),h(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,b,()=>{this.elInputAsync.then(e=>e.focus())}),h(this,x,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return c`${B(this.variant,[["default",()=>d(this,l,z).call(this)],["floating-label",()=>d(this,l,k).call(this)]])}`}_getValidityAnchor(){return this.elInput}};l=new WeakSet;z=function(){return c`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
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
        @click=${p(this,b)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${d(this,l,w).call(this)} ${d(this,l,S).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${d(this,l,T).call(this)} ${d(this,l,E).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${p(this,l,N)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};k=function(){return y};v=new WeakMap;m=new WeakMap;f=new WeakMap;b=new WeakMap;x=new WeakMap;w=function(){return c` <slot name="lead"></slot> `};E=function(){return c`
      <slot name="trail" @slotchange=${d(this,l,C)}></slot>
    `};C=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(o=>{var r;return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&((r=o.textContent)==null?void 0:r.trim())!==""})};S=function(){return c`
      <input
        @input=${p(this,m)}
        @change=${p(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${L(p(this,v))}
      />
    `};T=function(){return this.clearable&&this.value.length>0?c`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${p(this,x)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:y};N=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[F,R];a([n()],i.prototype,"value",2);a([n()],i.prototype,"label",2);a([n({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([n({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);a([n({type:Boolean})],i.prototype,"clearable",2);a([n({type:Number})],i.prototype,"maxlength",2);a([n({type:String})],i.prototype,"variant",2);a([n({type:String})],i.prototype,"size",2);a([G("input")],i.prototype,"elInputAsync",2);a([W("input")],i.prototype,"elInput",2);a([A()],i.prototype,"trailSlotOccupied",2);i=a([I("gds-input"),M()],i);
