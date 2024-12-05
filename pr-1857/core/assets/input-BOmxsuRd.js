import{m as _}from"./runtime-CMQcyTl6.js";import{l as $}from"./localized-decorator-B8fm5KIw.js";import{g as z,G as P,h as u,n as d,r as B}from"./custom-element-scoping-b4lD3laR.js";import{a as F}from"./query-p8xgzTDt.js";import{r as W}from"./query-async-MEroNOeJ.js";import{r as j}from"./form-control-header-DFiaq7mp.js";import{i as w,E as C}from"./lit-element-C_s9q329.js";import{t as L}from"./tokens.style-BpCJ0qXS.js";import{a as R,f as E}from"./button-D0ZJix2D.js";import"./cross-small-CgIxxlLH.js";import"./flex-CCeRRtYR.js";const X=w`
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
`,q=w`
  @layer base, reset;
  @layer base {
    /* Field Base Style */
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);

      &:focus-within {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      min-width: var(--gds-space-l);
    }
  }
`;var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,H=(e,t,s,l)=>{for(var i=l>1?void 0:l?V(t,s):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&U(t,s,i),i};let m=class extends P{render(){return u`
      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="space-between"
        gap="xs"
        padding="s m"
        min-block-size="3xl"
        block-size="3xl"
        border-radius="xs"
        background="secondary"
        border="4xs/secondary"
        class="field"
        cursor="text"
        color="tertiary"
      >
        <gds-flex align-items="center" justify-content="center" gap="xs">
          <slot name="lead"></slot>
        </gds-flex>
        <gds-flex align-items="center" flex="1">
          <slot></slot>
        </gds-flex>
        <gds-flex align-items="center" justify-content="center" gap="xs">
          <slot name="trail"></slot>
        </gds-flex>
      </gds-flex>
    `}};m.styles=[q];m=H([z("gds-field-base"),$()],m);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},r=(e,t,s,l)=>{for(var i=l>1?void 0:l?K(t,s):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&J(t,s,i),i},S=(e,t,s)=>t.has(e)||k("Cannot "+s),o=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s)=>(S(e,t,"access private method"),s),n,O,T,v,f,b,x,y,N,M,A,I,G,D;let a=class extends R{constructor(){super(),g(this,n),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,g(this,v,e=>["type","placeholder","required"].includes(e.name)),g(this,f,e=>{const t=e.target;this.value=t.value}),g(this,b,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),g(this,x,()=>{this.elInputAsync.then(e=>e.focus())}),g(this,y,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return u`${j(this.variant,[["default",()=>h(this,n,O).call(this)],["floating-label",()=>h(this,n,T).call(this)]])}`}_getValidityAnchor(){return this.elInput}};n=new WeakSet;O=function(){return u`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base>
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <gds-badge variant="notice" rounded slot="lead"> 20 </gds-badge>
        <input
          @input=${o(this,f)}
          @change=${o(this,b)}
          style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
          .value=${this.value}
          id="input"
          ?disabled=${this.disabled}
          aria-describedby="supporting-text"
          aria-invalid=${this.invalid}
          placeholder=" "
          ${E(o(this,v))}
        />
        <gds-button
          size="small"
          rank="tertiary"
          variant=""
          ?disabled="${this.disabled}"
          label="${_("Clear input")}"
          slot="trail"
        >
          <gds-icon-cross-small />
        </gds-button>
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-field-base>
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
        @click=${o(this,x)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${h(this,n,N).call(this)} ${h(this,n,I).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${h(this,n,G).call(this)} ${h(this,n,M).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${o(this,n,D)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};T=function(){return C};v=new WeakMap;f=new WeakMap;b=new WeakMap;x=new WeakMap;y=new WeakMap;N=function(){return u` <slot name="lead"></slot> `};M=function(){return u`
      <slot name="trail" @slotchange=${h(this,n,A)}></slot>
    `};A=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(l=>{var i;return l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&((i=l.textContent)==null?void 0:i.trim())!==""})};I=function(){return u`
      <input
        @input=${o(this,f)}
        @change=${o(this,b)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${E(o(this,v))}
      />
    `};G=function(){return this.clearable&&this.value.length>0?u`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${_("Clear input")}"
          @click=${o(this,y)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:C};D=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};a.styles=[L,X];r([d()],a.prototype,"value",2);r([d()],a.prototype,"label",2);r([d({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([d({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);r([d({type:Boolean})],a.prototype,"clearable",2);r([d({type:Number})],a.prototype,"maxlength",2);r([d({type:String})],a.prototype,"variant",2);r([d({type:String})],a.prototype,"size",2);r([W("input")],a.prototype,"elInputAsync",2);r([F("input")],a.prototype,"elInput",2);r([B()],a.prototype,"trailSlotOccupied",2);a=r([z("gds-input"),$()],a);
