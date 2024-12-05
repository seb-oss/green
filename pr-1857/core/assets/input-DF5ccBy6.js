import{m as T}from"./runtime-CMQcyTl6.js";import{l as N}from"./localized-decorator-B8fm5KIw.js";import{n as o,r as x,g as O,G as Z,h as d}from"./custom-element-scoping-b4lD3laR.js";import{a as M}from"./query-p8xgzTDt.js";import{r as ee}from"./query-async-MEroNOeJ.js";import{r as te}from"./form-control-header-DFiaq7mp.js";import{i as F,E as A}from"./lit-element-C_s9q329.js";import{t as se}from"./tokens.style-BpCJ0qXS.js";import{a as ie,f as D}from"./button-D0ZJix2D.js";import{e as ae}from"./class-map-Bz98xO8-.js";import"./cross-small-CgIxxlLH.js";import"./flex-CCeRRtYR.js";const le=F`
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
`,ne=F`
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
`;var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},m=(e,t,s,a)=>{for(var i=a>1?void 0:a?oe(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(i=(a?u(t,s,i):u(i))||i);return a&&i&&re(t,s,i),i},G=(e,t,s)=>t.has(e)||L("Cannot "+s),w=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),E=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s)=>(G(e,t,"access private method"),s),S,C,g,I,W,B,P,X;let h=class extends Z{constructor(){super(),E(this,g),this.size="large",this.isFocused=!1,this.leadSlotOccupied=!1,this.trailSlotOccupied=!1,E(this,S,()=>{console.log("click",this.mainSlotElement);const t=this.mainSlotElement.assignedElements({flatten:!0}).find(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement);t&&(t.focus(),this.isFocused=!0,t.addEventListener("blur",w(this,C)))}),E(this,C,()=>{this.isFocused=!1})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){const e={field:!0,focused:this.isFocused};return d`
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
        @click=${w(this,S)}
        class=${ae(e)}
        cursor="text"
        color="tertiary"
      >
        ${b(this,g,B).call(this)} ${b(this,g,P).call(this)}
        ${b(this,g,X).call(this)}
      </gds-flex>
    `}};S=new WeakMap;C=new WeakMap;g=new WeakSet;I=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(a=>{var i;return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&((i=a.textContent)==null?void 0:i.trim())!==""})};W=function(e){const s=e.target.assignedNodes({flatten:!0});this.leadSlotOccupied=s.length>0&&s.some(a=>{var i;return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&((i=a.textContent)==null?void 0:i.trim())!==""})};B=function(){return d` <gds-flex
      align-items="center"
      justify-content="center"
      gap="xs"
    >
      <slot name="lead" @slotchange=${b(this,g,W)}></slot>
    </gds-flex>`};P=function(){return d` <gds-flex align-items="center" flex="1">
      <slot></slot>
    </gds-flex>`};X=function(){return d`
      <gds-flex align-items="center" justify-content="center" gap="xs">
        <slot name="trail" @slotchange=${b(this,g,I)}></slot>
      </gds-flex>
    `};h.styles=[ne];m([o({type:String})],h.prototype,"size",2);m([M("slot:not([name])")],h.prototype,"mainSlotElement",2);m([x()],h.prototype,"isFocused",2);m([x()],h.prototype,"leadSlotOccupied",2);m([x()],h.prototype,"trailSlotOccupied",2);h=m([O("gds-field-base"),N()],h);var de=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,H=e=>{throw TypeError(e)},n=(e,t,s,a)=>{for(var i=a>1?void 0:a?ce(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(i=(a?u(t,s,i):u(i))||i);return a&&i&&de(t,s,i),i},R=(e,t,s)=>t.has(e)||H("Cannot "+s),c=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s)=>(R(e,t,"access private method"),s),r,j,q,y,_,$,k,z,U,V,J,K,Q,Y;let l=class extends ie{constructor(){super(),f(this,r),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,f(this,y,e=>["type","placeholder","required"].includes(e.name)),f(this,_,e=>{const t=e.target;this.value=t.value}),f(this,$,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),f(this,k,()=>{this.elInputAsync.then(e=>e.focus())}),f(this,z,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${te(this.variant,[["default",()=>v(this,r,j).call(this)],["floating-label",()=>v(this,r,q).call(this)]])}`}_getValidityAnchor(){return this.elInput}};r=new WeakSet;j=function(){return d`
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
          @input=${c(this,_)}
          @change=${c(this,$)}
          style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
          .value=${this.value}
          id="input"
          ?disabled=${this.disabled}
          aria-describedby="supporting-text"
          aria-invalid=${this.invalid}
          placeholder=" "
          ${D(c(this,y))}
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
        @click=${c(this,k)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${v(this,r,U).call(this)} ${v(this,r,K).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${v(this,r,Q).call(this)} ${v(this,r,V).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${c(this,r,Y)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};q=function(){return A};y=new WeakMap;_=new WeakMap;$=new WeakMap;k=new WeakMap;z=new WeakMap;U=function(){return d` <slot name="lead"></slot> `};V=function(){return d`
      <slot name="trail" @slotchange=${v(this,r,J)}></slot>
    `};J=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(a=>{var i;return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE&&((i=a.textContent)==null?void 0:i.trim())!==""})};K=function(){return d`
      <input
        @input=${c(this,_)}
        @change=${c(this,$)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${D(c(this,y))}
      />
    `};Q=function(){return this.clearable&&this.value.length>0?d`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${T("Clear input")}"
          @click=${c(this,z)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:A};Y=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};l.styles=[se,le];n([o()],l.prototype,"value",2);n([o()],l.prototype,"label",2);n([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);n([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);n([o({attribute:"disabled",type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([o({type:Boolean})],l.prototype,"clearable",2);n([o({type:Number})],l.prototype,"maxlength",2);n([o({type:String})],l.prototype,"variant",2);n([o({type:String})],l.prototype,"size",2);n([ee("input")],l.prototype,"elInputAsync",2);n([M("input")],l.prototype,"elInput",2);n([x()],l.prototype,"trailSlotOccupied",2);l=n([O("gds-input"),N()],l);
