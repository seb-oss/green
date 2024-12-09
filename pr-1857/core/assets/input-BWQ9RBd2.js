import{m as T}from"./runtime-CMQcyTl6.js";import{l as N}from"./localized-decorator-B8fm5KIw.js";import{n as c,r as x,g as M,G as Z,h}from"./custom-element-scoping-b4lD3laR.js";import{a as F}from"./query-p8xgzTDt.js";import{r as j}from"./query-async-MEroNOeJ.js";import{r as ee}from"./form-control-header-CxGu2yEV.js";import{i as A,E as G}from"./lit-element-C_s9q329.js";import{t as te}from"./tokens.style-B6Zq2CtY.js";import{a as se,f as I}from"./button-NaP5_Riu.js";import{e as ie}from"./class-map-Bz98xO8-.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const ae=A`
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
`,le=A`
  @layer base, reset;
  @layer base {
    /* Field Base Style */
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
      user-select: none;
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);

      &.focused {
        outline-color: currentColor;
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

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      min-width: var(--gds-space-l);
    }
  }
`;var re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,W=e=>{throw TypeError(e)},m=(e,t,s,a)=>{for(var i=a>1?void 0:a?ne(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&re(t,s,i),i},B=(e,t,s)=>t.has(e)||W("Cannot "+s),O=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),E=(e,t,s)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s)=>(B(e,t,"access private method"),s),S,k,g,C,D,L,P;let u=class extends Z{constructor(){super(),E(this,g),this.size="large",this.isFocused=!1,this.leadSlotOccupied=!1,this.trailSlotOccupied=!1,E(this,S,()=>{console.log("click",this.mainSlotElement);const t=this.mainSlotElement.assignedElements({flatten:!0}).find(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement);t&&(t.focus(),this.isFocused=!0,t.addEventListener("blur",O(this,k)))}),E(this,k,()=>{this.isFocused=!1})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e={field:!0,focused:this.isFocused};return h`
      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="space-between"
        gap="xs"
        padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
        min-block-size="${this.size==="small"?"xl":"3xl"}"
        block-size="${this.size==="small"?"xl":"3xl"}"
        border-radius="xs"
        background="secondary"
        border=${this.isFocused?"4xs/primary":"4xs/secondary"}
        @click=${O(this,S)}
        class=${ie(e)}
        cursor="text"
        color="tertiary"
      >
        ${b(this,g,D).call(this)} ${b(this,g,L).call(this)}
        ${b(this,g,P).call(this)}
      </gds-flex>
    `}};S=new WeakMap;k=new WeakMap;g=new WeakSet;C=function(e,t){const a=t.target.assignedNodes({flatten:!0}),i=a.length>0&&a.some(n=>{var o;return n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&((o=n.textContent)==null?void 0:o.trim())!==""});e==="lead"?this.leadSlotOccupied=i:e==="trail"&&(this.trailSlotOccupied=i)};D=function(){return h` <slot
      name="lead"
      @slotchange=${e=>b(this,g,C).call(this,"lead",e)}
    ></slot>`};L=function(){return h` <gds-flex align-items="center" flex="1">
      <slot></slot>
    </gds-flex>`};P=function(){return h`
      <slot
        name="trail"
        @slotchange=${e=>b(this,g,C).call(this,"trail",e)}
      ></slot>
    `};u.styles=[le];m([c({type:String})],u.prototype,"size",2);m([F("slot:not([name])")],u.prototype,"mainSlotElement",2);m([x()],u.prototype,"isFocused",2);m([x()],u.prototype,"leadSlotOccupied",2);m([x()],u.prototype,"trailSlotOccupied",2);u=m([M("gds-field-base"),N()],u);var oe=Object.defineProperty,de=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},r=(e,t,s,a)=>{for(var i=a>1?void 0:a?de(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(a?o(t,s,i):o(i))||i);return a&&i&&oe(t,s,i),i},H=(e,t,s)=>t.has(e)||X("Cannot "+s),p=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s)=>(H(e,t,"access private method"),s),d,R,q,y,_,$,z,w,U,V,J,K,Q,Y;let l=class extends se{constructor(){super(),f(this,d),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,f(this,y,e=>["type","placeholder","required"].includes(e.name)),f(this,_,e=>{const t=e.target;this.value=t.value}),f(this,$,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),f(this,z,()=>{this.elInputAsync.then(e=>e.focus())}),f(this,w,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return h`${ee(this.variant,[["default",()=>v(this,d,R).call(this)],["floating-label",()=>v(this,d,q).call(this)]])}`}_getValidityAnchor(){return this.elInput}};d=new WeakSet;R=function(){return h`
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
          @input=${p(this,_)}
          @change=${p(this,$)}
          style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
          .value=${this.value}
          id="input"
          ?disabled=${this.disabled}
          aria-describedby="supporting-text"
          aria-invalid=${this.invalid}
          placeholder=" "
          ${I(p(this,y))}
        />
        <gds-button
          size="small"
          rank="tertiary"
          variant=""
          ?disabled="${this.disabled}"
          label="${T("Clear input")}"
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
        @click=${p(this,z)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${v(this,d,U).call(this)} ${v(this,d,K).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${v(this,d,Q).call(this)} ${v(this,d,V).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${p(this,d,Y)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};q=function(){return G};y=new WeakMap;_=new WeakMap;$=new WeakMap;z=new WeakMap;w=new WeakMap;U=function(){return h` <slot name="lead"></slot> `};V=function(){return h`
      <slot name="trail" @slotchange=${v(this,d,J)}></slot>
    `};J=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(a=>{var i;return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&((i=a.textContent)==null?void 0:i.trim())!==""})};K=function(){return h`
      <input
        @input=${p(this,_)}
        @change=${p(this,$)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${I(p(this,y))}
      />
    `};Q=function(){return this.clearable&&this.value.length>0?h`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${T("Clear input")}"
          @click=${p(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:G};Y=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};l.styles=[te,ae];r([c()],l.prototype,"value",2);r([c()],l.prototype,"label",2);r([c({attribute:"supporting-text"})],l.prototype,"supportingText",2);r([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);r([c({attribute:"disabled",type:Boolean,reflect:!0})],l.prototype,"disabled",2);r([c({type:Boolean})],l.prototype,"clearable",2);r([c({type:Number})],l.prototype,"maxlength",2);r([c({type:String})],l.prototype,"variant",2);r([c({type:String})],l.prototype,"size",2);r([j("input")],l.prototype,"elInputAsync",2);r([F("input")],l.prototype,"elInput",2);r([x()],l.prototype,"trailSlotOccupied",2);l=r([M("gds-input"),N()],l);
