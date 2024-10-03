import{n as d,r as F,g as P,h as l}from"./gds-element-QykLKB9o.js";import{a as R}from"./query-p8xgzTDt.js";import{r as w}from"./query-async-MEroNOeJ.js";import{b as H}from"./until-BfWLtGmt.js";import{i as L,D as g}from"./lit-element-BoQqPHl6.js";import{n as f}from"./when-BxLAFfhK.js";import{r as X}from"./choose-Dh3k58u9.js";import{m as S}from"./runtime-CMQcyTl6.js";import{c as j}from"./constrain-slots-I5VCMCIw.js";import{w as q}from"./watch-tFciLXSI.js";import{a as U,f as V}from"./button-CtC0nGXM.js";import"./flex-CoYv6jJm.js";import{t as J}from"./tokens.style-DuOE18tp.js";import"./cross-small-CT50TTBm.js";import"./triangle-exclamation-Bg-q5F9C.js";import"./container-CcASHre0.js";import"./card-CSp9FIXb.js";import"./text-CVRRTRWZ.js";import"./badge-D8OQ6C7S.js";const K=L`
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
`;var Q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,E=t=>{throw TypeError(t)},n=(t,e,i,p)=>{for(var o=p>1?void 0:p?Y(e,i):e,u=t.length-1,x;u>=0;u--)(x=t[u])&&(o=(p?x(e,i,o):x(o))||o);return p&&o&&Q(e,i,o),o},k=(t,e,i)=>e.has(t)||E("Cannot "+i),c=(t,e,i)=>(k(t,e,"read from private field"),i?i.call(t):e.get(t)),h=(t,e,i)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),r=(t,e,i)=>(k(t,e,"access private method"),i),a,z,T,m,v,b,y,_,$,C,A,N,O,I,M,B,W,D,G;let s=class extends U{constructor(){super(),h(this,a),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.trailSlotOccupied=!1,h(this,m,t=>["type","placeholder","required"].includes(t.name)),h(this,v,t=>{const e=t.target;this.value=e.value}),h(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),h(this,_,()=>{this.value=""}),h(this,$,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),j(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return l`${X(this.variant,[["default",()=>r(this,a,z).call(this)],["floating-label",()=>r(this,a,T).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};a=new WeakSet;z=function(){return l`
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
            ${f(this.supportingText,()=>r(this,a,I).call(this))}
          </gds-flex>
          ${H(r(this,a,G).call(this),g)}
        </gds-flex>

        ${r(this,a,M).call(this)}

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
          ${r(this,a,C).call(this)} ${r(this,a,O).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${r(this,a,B).call(this)} ${r(this,a,A).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${f(this.invalid,()=>l`
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
            ${f(c(this,a,W),()=>r(this,a,D).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};T=function(){return g};m=new WeakMap;v=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;$=new WeakMap;C=function(){return l` <slot name="lead"></slot> `};A=function(){return l`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${r(this,a,N)}
      ></slot>
    `};N=function(t){const i=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=i.length>0&&i.some(p=>{var o;return p.nodeType===Node.ELEMENT_NODE||p.nodeType===Node.TEXT_NODE&&((o=p.textContent)==null?void 0:o.trim())!==""})};O=function(){return l`
      <input
        @input=${c(this,v)}
        @change=${c(this,b)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${V(c(this,m))}
      />
    `};I=function(){return l`
      <gds-text
        level="3"
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};M=function(){return l`
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
    `};B=function(){return this.clearable&&this.value.length>0?l`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${S("Clear input")}"
          @click=${c(this,_)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};W=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};D=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="negative":t<20?e="warning":e="positive",l`<gds-badge variant="${e}">${t}</gds-badge>`};G=async function(){return this.elExtendedSupportingTextSlot.then(t=>t&&t.assignedElements().length>0?l`
          <gds-button
            size="small"
            rank="tertiary"
            label="${S("Show extended supporting text")}"
            @click=${c(this,$)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};s.styles=[J,K];n([d()],s.prototype,"value",2);n([d()],s.prototype,"label",2);n([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);n([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);n([d({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);n([d({type:Boolean})],s.prototype,"clearable",2);n([d({type:Number})],s.prototype,"maxlength",2);n([d({type:String})],s.prototype,"variant",2);n([d({type:String})],s.prototype,"size",2);n([w("input")],s.prototype,"elInputAsync",2);n([R("input")],s.prototype,"elInput",2);n([w('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);n([F()],s.prototype,"trailSlotOccupied",2);n([q("value")],s.prototype,"_setAutoHeight",1);s=n([P("gds-input")],s);
