import{n as d,r as F,g as R,h as r}from"./gds-element-DjAhZX8m.js";import{a as P}from"./query-p8xgzTDt.js";import{r as w}from"./query-async-MEroNOeJ.js";import{m as L}from"./until-DXcpnd_9.js";import{i as X,E as g}from"./lit-element-C_s9q329.js";import{n as f}from"./when-BR7zwNJC.js";import{r as j}from"./choose-Dh3k58u9.js";import{m as E}from"./runtime-CMQcyTl6.js";import{a as q,f as U}from"./button-BasPfvHS.js";import"./flex-BeWEu_BE.js";import{t as V}from"./tokens.style-B_4vLAFn.js";import"./cross-small-WNT3EiwY.js";import"./triangle-exclamation-D8aXgUcH.js";import"./container-CigMimob.js";import"./card-C7YiX9nn.js";import"./text-BpuZ4lK0.js";import"./badge-BOd5zLMj.js";const H=X`
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
      width: 100%;
      contain: layout;
      isolation: isolate;
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

    .extended-supporting-text {
      opacity: 1;
      translate: 0;
      transition: var(--_transition);

      @starting-style {
        opacity: 0;
        translate: 0 2px;
      }
    }
  }

  @layer simplified {
    // ...
  }
`;var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},a=(e,t,i,p)=>{for(var o=p>1?void 0:p?K(t,i):t,u=e.length-1,x;u>=0;u--)(x=e[u])&&(o=(p?x(t,i,o):x(o))||o);return p&&o&&J(t,i,o),o},z=(e,t,i)=>t.has(e)||k("Cannot "+i),c=(e,t,i)=>(z(e,t,"read from private field"),i?i.call(e):t.get(e)),h=(e,t,i)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),l=(e,t,i)=>(z(e,t,"access private method"),i),n,S,T,m,v,b,y,$,_,C,N,O,M,A,I,B,W,G,D;let s=class extends q{constructor(){super(),h(this,n),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,h(this,m,e=>["type","placeholder","required"].includes(e.name)),h(this,v,e=>{const t=e.target;this.value=t.value}),h(this,b,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,y,()=>{this.elInputAsync.then(e=>e.focus())}),h(this,$,()=>{this.value=""}),h(this,_,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return r`${j(this.variant,[["default",()=>l(this,n,S).call(this)],["floating-label",()=>l(this,n,T).call(this)]])}`}_getValidityAnchor(){return this.elInput}};n=new WeakSet;S=function(){return r`
      <gds-flex
        level="3"
        flex-direction="column"
        width="100%"
        gap="xs"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 0 0"
        >
          <gds-flex flex-direction="column">
            <gds-text
              font-weight="book"
              font-size="${this.size==="small"?"detail-s":"detail-m"}"
            >
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${f(this.supportingText,()=>l(this,n,A).call(this))}
          </gds-flex>
          ${L(l(this,n,D).call(this),g)}
        </gds-flex>

        ${l(this,n,I).call(this)}

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
          @click=${c(this,y)}
          cursor="text"
        >
          ${l(this,n,C).call(this)} ${l(this,n,M).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${l(this,n,B).call(this)} ${l(this,n,N).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${f(this.invalid,()=>r`
              <gds-flex
                align-items="flex-start"
                gap="${this.size==="small"?"2xs":"xs"}"
                margin="2xs 0 0 0"
              >
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation
                    width="${this.size==="small"?"16":"18"}"
                    height="${this.size==="small"?"16":"18"}"
                    solid
                  >
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="${this.size==="small"?"detail-xs":"detail-s"}"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `)}
          <gds-flex
            margin="0 0 0 auto"
            min-width="4ch"
            justify-content="flex-end"
          >
            ${f(c(this,n,W),()=>l(this,n,G).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};T=function(){return g};m=new WeakMap;v=new WeakMap;b=new WeakMap;y=new WeakMap;$=new WeakMap;_=new WeakMap;C=function(){return r` <slot name="lead"></slot> `};N=function(){return r`
      <slot name="trail" @slotchange=${l(this,n,O)}></slot>
    `};O=function(e){const i=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=i.length>0&&i.some(p=>{var o;return p.nodeType===Node.ELEMENT_NODE||p.nodeType===Node.TEXT_NODE&&((o=p.textContent)==null?void 0:o.trim())!==""})};M=function(){return r`
      <input
        @input=${c(this,v)}
        @change=${c(this,b)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${U(c(this,m))}
      />
    `};A=function(){return r`
      <gds-text
        level="3"
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};I=function(){return r`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};B=function(){return this.clearable&&this.value.length>0?r`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${E("Clear input")}"
          @click=${c(this,$)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};W=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};G=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",r`<gds-badge variant="${t}">${e}</gds-badge>`};D=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?r`
          <gds-button
            size="small"
            rank="tertiary"
            label="${E("Show extended supporting text")}"
            @click=${c(this,_)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};s.styles=[V,H];a([d()],s.prototype,"value",2);a([d()],s.prototype,"label",2);a([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([d({type:Boolean})],s.prototype,"clearable",2);a([d({type:Number})],s.prototype,"maxlength",2);a([d({type:String})],s.prototype,"variant",2);a([d({type:String})],s.prototype,"size",2);a([w("input")],s.prototype,"elInputAsync",2);a([P("input")],s.prototype,"elInput",2);a([w('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);a([F()],s.prototype,"trailSlotOccupied",2);s=a([R("gds-input")],s);
