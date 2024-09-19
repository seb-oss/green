import{i as Q,h as Y,D as u}from"./lit-element-1d72f0ce.js";import{n as d,r as Z,g as ee,h as a}from"./gds-element-86064462.js";import{a as te}from"./query-b9d3c2af.js";import{r as j}from"./query-async-1ff18261.js";import{b as H}from"./until-27bb1490.js";import{n as c}from"./when-748fcf30.js";import{m as q}from"./runtime-c06dc943.js";import{c as ie}from"./constrain-slots-08d8606c.js";import{w as se}from"./watch-c4961afe.js";import{a as ne,f as L}from"./button-62abad27.js";import"./flex-0e931cf8.js";import{t as ae}from"./tokens.style-dc3ad24e.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-b1fc3909.js";import"./card-21efe6d3.js";import"./text-fbd919b7.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=(e,t,r)=>{for(const h of t)if(h[0]===e)return(0,h[1])();return r==null?void 0:r()},le=Q`
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
      contain: layout;
      display: contents;
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
        // border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      // min-height: max(var(--gds-space-xl), calc(1lh * var(--_lines)));
    }

    @media (hover: hover) {
      .field:hover {
        .state {
          opacity: 1;
        }
      }
    }

    input,
    textarea {
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

    textarea {
      overflow: hidden;
      resize: none;
      transition: unset;
      min-height: calc(1lh * 4);
      height: calc(1lh * var(--_lines));
    }
  }

  @layer simplified {
    // ...
  }
`;var oe=Object.defineProperty,de=Object.getOwnPropertyDescriptor,l=(e,t,r,h)=>{for(var p=h>1?void 0:h?de(t,r):t,z=e.length-1,T;z>=0;z--)(T=e[z])&&(p=(h?T(t,r,p):T(p))||p);return h&&p&&oe(t,r,p),p},X=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},o=(e,t,r)=>(X(e,t,"read from private field"),r?r.call(e):t.get(e)),s=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},n=(e,t,r)=>(X(e,t,"access private method"),r),E,U,C,V,g,x,f,m,W,A,B,J,O,K,b,I,v,M,y,R,$,N,_,D,w,F,S,G,k,P;let i=class extends ne{constructor(){super(),s(this,E),s(this,C),s(this,B),s(this,O),s(this,b),s(this,v),s(this,y),s(this,$),s(this,_),s(this,w),s(this,S),s(this,k),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.multiline=!1,this.leadSlotOccupied=!1,s(this,g,e=>["type","placeholder","required"].includes(e.name)),s(this,x,e=>{const t=e.target;this.value=t.value}),s(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),s(this,m,()=>{this.elInputAsync.then(e=>e.focus())}),s(this,W,()=>{this.value=""}),s(this,A,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ie(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return a`${re(this.variant,[["default",()=>n(this,E,U).call(this)],["simplified",()=>n(this,C,V).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};E=new WeakSet;U=function(){return a`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="${this.size==="small"?"2xs":"xs"}"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
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
            ${c(this.supportingText,()=>n(this,y,R).call(this))}
          </gds-flex>
          ${H(n(this,k,P).call(this),u)}
        </gds-flex>

        ${c(this.showExtendedSupportingText,()=>n(this,$,N).call(this))}

        <gds-flex
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size==="small"?"2xs":"xs"}"
          padding="${this.multiline?"s s s m":this.size==="small"?"xs s":"xs m"}"
          min-height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}"
          height="${this.multiline?"":this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}}"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field"
          @click=${o(this,m)}
          cursor="text"
        >
          ${this.multiline?u:n(this,B,J).call(this)}
          ${c(this.multiline,()=>a`${n(this,v,M).call(this)}`,()=>a`${n(this,b,I).call(this)}`)}
          <gds-flex gap="xs" align-items="center">
            ${n(this,_,D).call(this)}
            ${this.multiline?u:n(this,O,K).call(this)}
          </gds-flex>

          <gds-flex
            class="state"
            position="absolute"
            inset="0"
            border-radius="xs"
            .background="${this.invalid?"l3-states-negative-hover":"l3-states-light-hover"}"
            pointer-events="none"
            opacity="0"
            transition="all 368ms cubic-bezier(0.4, 0, 0.2, 1)"
          ></gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${c(this.invalid,()=>a`
              <gds-flex
                align-items="flex-start"
                gap="${this.size==="small"?"2xs":"xs"}"
              >
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
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
          <gds-flex margin="0 0 0 auto">
            ${c(o(this,w,F),()=>n(this,S,G).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};C=new WeakSet;V=function(){return a`
      <gds-flex flex-direction="column" gap="2xs">
        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          background="l3-background-secondary"
          border="4xs/l3-border-secondary"
          border-radius="xs"
          class="field"
          @click=${o(this,m)}
        >
          <slot name="lead"></slot>
          <gds-text
            tag="label"
            font-weight="book"
            font-size="detail-m"
            for="input"
          >
            <gds-flex>${this.label}</gds-flex>
            ${c(this.multiline,()=>a`${n(this,v,M).call(this)}`,()=>a`${n(this,b,I).call(this)}`)}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${n(this,_,D).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          ${n(this,y,R).call(this)}
          ${c(o(this,w,F),()=>n(this,S,G).call(this))}
          ${H(n(this,k,P).call(this),u)}
        </gds-flex>

        ${n(this,$,N).call(this)}
      </gds-flex>
    `};g=new WeakMap;x=new WeakMap;f=new WeakMap;m=new WeakMap;W=new WeakMap;A=new WeakMap;B=new WeakSet;J=function(){return a`
      <gds-flex
        width="${this.size==="small"?"18px":"24px"}"
        height="${this.size==="small"?"18px":"24px"}"
        align-items="center"
        justify-content="center"
      >
        <slot name="lead"></slot>
      </gds-flex>
    `};O=new WeakSet;K=function(){return a`
      <gds-flex width="24px">
        <slot name="trail" gds-allow="gds-badge"></slot>
      </gds-flex>
    `};b=new WeakSet;I=function(){return a`
      <input
        @input=${o(this,x)}
        @change=${o(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${L(o(this,g))}
      />
    `};v=new WeakSet;M=function(){return a`
      <textarea
        @input=${o(this,x)}
        @change=${o(this,f)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${L(o(this,g))}
      ></textarea>
    `};y=new WeakSet;R=function(){return a`
      <gds-text
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};$=new WeakSet;N=function(){return a`
      <gds-card
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
        padding="s m"
        border-radius="xs"
        background="l3-background-secondary"
        color="l3-content-tertiary"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};_=new WeakSet;D=function(){return this.clearable&&this.value.length>0?a`
        <gds-button
          size="xs"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${q("Clear input")}"
          @click=${o(this,W)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:u};w=new WeakSet;F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};S=new WeakSet;G=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",a`<gds-badge variant="${this.invalid?"negative":t}"
      >${e}</gds-badge
    >`};k=new WeakSet;P=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?a`
          <gds-button
            size="small"
            rank="tertiary"
            label="${q("Show extended supporting text")}"
            @click=${o(this,A)}
          >
            <!-- TODO: When is open it should be solid  -->
            <gds-icon-circle-info />
          </gds-button>
        `:u)};i.shadowRootOptions={...Y.shadowRootOptions,delegatesFocus:!0};i.styles=[ae,le];l([d()],i.prototype,"value",2);l([d()],i.prototype,"label",2);l([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);l([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);l([d({type:Boolean})],i.prototype,"clearable",2);l([d({type:Number})],i.prototype,"maxlength",2);l([d({type:String})],i.prototype,"variant",2);l([d({type:String})],i.prototype,"size",2);l([d({type:Boolean})],i.prototype,"multiline",2);l([j("input, textarea")],i.prototype,"elInputAsync",2);l([te("input, textarea")],i.prototype,"elInput",2);l([j('slot[name="extended-supporting-text"]')],i.prototype,"elExtendedSupportingTextSlot",2);l([Z()],i.prototype,"leadSlotOccupied",2);l([se("value")],i.prototype,"_setAutoHeight",1);i=l([ee("gds-input")],i);
