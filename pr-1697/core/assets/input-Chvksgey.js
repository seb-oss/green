import{m as G}from"./runtime-CMQcyTl6.js";import{n as l,r as W,g as w,G as A,h as o}from"./gds-element-DjAhZX8m.js";import{a as te}from"./query-p8xgzTDt.js";import{r as P}from"./query-async-MEroNOeJ.js";import{r as se}from"./choose-Dh3k58u9.js";import{i as E,E as F}from"./lit-element-C_s9q329.js";import{t as ae}from"./tokens.style-B_4vLAFn.js";import{a as ie,f as re}from"./button-BKEHoiqg.js";import{n as b}from"./when-BR7zwNJC.js";import"./triangle-exclamation-D8aXgUcH.js";import"./card-DPV51UTY.js";import"./badge-BOd5zLMj.js";import"./cross-small-WNT3EiwY.js";import"./flex-Az1wr94v.js";const ne=E`
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
`,oe=E`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    .extended-supporting-text {
      opacity: 1;
      translate: 0;
      transition: var(--_transition);
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);

      @starting-style {
        opacity: 0;
        translate: 0 2px;
      }
    }
  }
`;var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},C=(e,t,s,i)=>{for(var a=i>1?void 0:i?de(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(i?p(t,s,a):p(a))||a);return i&&a&&le(t,s,a),a},B=(e,t,s)=>t.has(e)||I("Cannot "+s),N=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s)=>(B(e,t,"access private method"),s),f,R,y,_,L;let v=class extends A{constructor(){super(...arguments),m(this,f),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,m(this,y,()=>o`
      <gds-button
        size="small"
        rank="tertiary"
        label="${G("Show more information")}"
        @click=${N(this,_)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),m(this,_,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return o`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${b(this._hasExtendedSupportingText,N(this,y))}
      </div>

      ${D(this,f,L).call(this)}
    `}};f=new WeakSet;R=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};y=new WeakMap;_=new WeakMap;L=function(){return o`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        margin="2xs 0 0 0"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${D(this,f,R)}
        ></slot>
      </gds-card>
    `};v.styles=[oe];C([l({type:Boolean,reflect:!0})],v.prototype,"showExtendedSupportingText",2);C([W()],v.prototype,"_hasExtendedSupportingText",2);v=C([w("gds-form-control-header")],v);const pe=E`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var he=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,X=e=>{throw TypeError(e)},S=(e,t,s,i)=>{for(var a=i>1?void 0:i?ce(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(i?p(t,s,a):p(a))||a);return i&&a&&he(t,s,a),a},ge=(e,t,s)=>t.has(e)||X("Cannot "+s),ue=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ve=(e,t,s)=>(ge(e,t,"access private method"),s),$,H;let x=class extends A{constructor(){super(...arguments),ue(this,$)}render(){return o`<div aria-live="polite">
      <div class="error-message">
        ${b(this.validationMessage,()=>o`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${b(Number.isInteger(this.charCounter),()=>ve(this,$,H).call(this,this.charCounter))}
      </div>
    </div>`}};$=new WeakSet;H=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};x.styles=[pe];S([l({type:Number})],x.prototype,"charCounter",2);S([l()],x.prototype,"validationMessage",2);x=S([w("gds-form-control-footer")],x);var xe=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,q=e=>{throw TypeError(e)},n=(e,t,s,i)=>{for(var a=i>1?void 0:i?fe(t,s):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(a=(i?p(t,s,a):p(a))||a);return i&&a&&xe(t,s,a),a},V=(e,t,s)=>t.has(e)||q("Cannot "+s),u=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s)=>(V(e,t,"access private method"),s),h,J,K,z,T,k,O,M,Q,U,Y,Z,j,ee;let r=class extends ie{constructor(){super(),g(this,h),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.trailSlotOccupied=!1,g(this,z,e=>["type","placeholder","required"].includes(e.name)),g(this,T,e=>{const t=e.target;this.value=t.value}),g(this,k,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),g(this,O,()=>{this.elInputAsync.then(e=>e.focus())}),g(this,M,()=>{this.value=""})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return o`${se(this.variant,[["default",()=>c(this,h,J).call(this)],["floating-label",()=>c(this,h,K).call(this)]])}`}_getValidityAnchor(){return this.elInput}};h=new WeakSet;J=function(){return o`
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
        @click=${u(this,O)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${c(this,h,Q).call(this)} ${c(this,h,Z).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${c(this,h,j).call(this)} ${c(this,h,U).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${u(this,h,ee)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};K=function(){return F};z=new WeakMap;T=new WeakMap;k=new WeakMap;O=new WeakMap;M=new WeakMap;Q=function(){return o` <slot name="lead"></slot> `};U=function(){return o`
      <slot name="trail" @slotchange=${c(this,h,Y)}></slot>
    `};Y=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(i=>{var a;return i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&((a=i.textContent)==null?void 0:a.trim())!==""})};Z=function(){return o`
      <input
        @input=${u(this,T)}
        @change=${u(this,k)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${re(u(this,z))}
      />
    `};j=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${G("Clear input")}"
          @click=${u(this,M)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:F};ee=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[ae,ne];n([l()],r.prototype,"value",2);n([l()],r.prototype,"label",2);n([l({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);n([l({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);n([l({type:Boolean})],r.prototype,"clearable",2);n([l({type:Number})],r.prototype,"maxlength",2);n([l({type:String})],r.prototype,"variant",2);n([l({type:String})],r.prototype,"size",2);n([P("input")],r.prototype,"elInputAsync",2);n([te("input")],r.prototype,"elInput",2);n([P('slot[name="extended-supporting-text"]')],r.prototype,"elExtendedSupportingTextSlot",2);n([W()],r.prototype,"trailSlotOccupied",2);r=n([w("gds-input")],r);
