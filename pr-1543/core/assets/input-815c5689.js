import{i as Q,h as Y,D as u}from"./lit-element-1d72f0ce.js";import{n as d,r as Z,g as tt,h as a}from"./gds-element-86064462.js";import{a as et}from"./query-b9d3c2af.js";import{r as H}from"./query-async-1ff18261.js";import{b as j}from"./until-27bb1490.js";import{n as c}from"./when-748fcf30.js";import{m as q}from"./runtime-c06dc943.js";import{c as it}from"./constrain-slots-08d8606c.js";import{w as st}from"./watch-c4961afe.js";import{a as nt,f as L}from"./button-c89fd615.js";import"./flex-d3b80d4d.js";import{t as at}from"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-9164f049.js";import"./text-4793c6cc.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=(t,e,r)=>{for(const h of e)if(h[0]===t)return(0,h[1])();return r==null?void 0:r()},lt=Q`
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

      &:has(input:focus) {
        border-color: var(--gds-color-l3-border-primary);
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
`;var ot=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,l=(t,e,r,h)=>{for(var p=h>1?void 0:h?dt(e,r):e,z=t.length-1,E;z>=0;z--)(E=t[z])&&(p=(h?E(e,r,p):E(p))||p);return h&&p&&ot(e,r,p),p},X=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},o=(t,e,r)=>(X(t,e,"read from private field"),r?r.call(t):e.get(t)),s=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},n=(t,e,r)=>(X(t,e,"access private method"),r),T,U,C,V,g,x,f,m,W,A,B,J,I,K,b,M,v,O,y,R,$,N,_,D,w,F,S,G,k,P;let i=class extends nt{constructor(){super(),s(this,T),s(this,C),s(this,B),s(this,I),s(this,b),s(this,v),s(this,y),s(this,$),s(this,_),s(this,w),s(this,S),s(this,k),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.multiline=!1,this.leadSlotOccupied=!1,s(this,g,t=>["type","placeholder","required"].includes(t.name)),s(this,x,t=>{const e=t.target;this.value=e.value}),s(this,f,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),s(this,m,()=>{this.elInputAsync.then(t=>t.focus())}),s(this,W,()=>{this.value=""}),s(this,A,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),it(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return a`${rt(this.variant,[["default",()=>n(this,T,U).call(this)],["simplified",()=>n(this,C,V).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};T=new WeakSet;U=function(){return a`
      <gds-flex
        flex-direction="column"
        gap="2xs"
        width="${this.size==="small"?"200px":"343px"}"
        pointer-events="${this.disabled?"none":"auto"}"
        user-select="${this.disabled?"none":"auto"}"
        color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":null}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 2xs 0"
        >
          <gds-flex flex-direction="column">
            <gds-text
              font-weight="book"
              font-size="detail-m"
              tag="label"
              for="input"
            >
              ${this.label}
            </gds-text>
            ${c(this.supportingText,()=>n(this,y,R).call(this))}
          </gds-flex>
          ${j(n(this,k,P).call(this),u)}
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
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3c-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3c-stroke-negative":"4xs/l3-stroke-secondary"}
          class="field"
          @click=${o(this,m)}
          cursor="text"
        >
          ${this.multiline?u:n(this,B,J).call(this)}
          ${c(this.multiline,()=>a`${n(this,v,O).call(this)}`,()=>a`${n(this,b,M).call(this)}`)}
          ${this.multiline?u:n(this,I,K).call(this)}
          ${n(this,_,D).call(this)}

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

        <gds-flex class="foot">
          <gds-container>
            ${c(this.invalid,()=>a`
                <gds-flex
                  align-items="center"
                  gap="${this.size==="small"?"2xs":"xs"}"
                  padding="${this.size==="small"?"0 s":"xs m xs 0"}"
                >
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
                  </gds-icon-triangle-exclamation>
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
          </gds-container>
          ${c(o(this,w,F),()=>n(this,S,G).call(this))}
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
          border="4xs/l3-stroke-secondary"
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
            ${c(this.multiline,()=>a`${n(this,v,O).call(this)}`,()=>a`${n(this,b,M).call(this)}`)}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${n(this,_,D).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          ${n(this,y,R).call(this)}
          ${c(o(this,w,F),()=>n(this,S,G).call(this))}
          ${j(n(this,k,P).call(this),u)}
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
    `};I=new WeakSet;K=function(){return a`
      <gds-flex width="24px">
        <slot name="trail" gds-allow="gds-badge"></slot>
      </gds-flex>
    `};b=new WeakSet;M=function(){return a`
      <input
        @input=${o(this,x)}
        @change=${o(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${L(o(this,g))}
      />
    `};v=new WeakSet;O=function(){return a`
      <textarea
        @input=${o(this,x)}
        @change=${o(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${L(o(this,g))}
      ></textarea>
    `};y=new WeakSet;R=function(){return a`
      <gds-text
        font-size="detail-s"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};$=new WeakSet;N=function(){return a`
      <gds-flex
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
        padding="s m"
        border-radius="xs"
        background="l2-background-primary"
        color="l2-content-primary"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-flex>
    `};_=new WeakSet;D=function(){return this.clearable&&this.value.length>0?a`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${q("Clear input")}"
          @click=${o(this,W)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:u};w=new WeakSet;F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};S=new WeakSet;G=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="error":t<20?e="warning":e="success",a`<gds-badge variant="${e}">${t}</gds-badge>`};k=new WeakSet;P=async function(){return this.elExtendedSupportingTextSlot.then(t=>t&&t.assignedElements().length>0?a`
          <gds-button
            size="small"
            rank="tertiary"
            label="${q("Show extended supporting text")}"
            @click=${o(this,A)}
          >
            <gds-icon-circle-info />
          </gds-button>
        `:u)};i.shadowRootOptions={...Y.shadowRootOptions,delegatesFocus:!0};i.styles=[at,lt];l([d()],i.prototype,"value",2);l([d()],i.prototype,"label",2);l([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);l([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);l([d({type:Boolean})],i.prototype,"clearable",2);l([d({type:Number})],i.prototype,"maxlength",2);l([d({type:String})],i.prototype,"variant",2);l([d({type:String})],i.prototype,"size",2);l([d({type:Boolean})],i.prototype,"multiline",2);l([H("input, textarea")],i.prototype,"elInputAsync",2);l([et("input, textarea")],i.prototype,"elInput",2);l([H('slot[name="extended-supporting-text"]')],i.prototype,"elExtendedSupportingTextSlot",2);l([Z()],i.prototype,"leadSlotOccupied",2);l([st("value")],i.prototype,"_setAutoHeight",1);i=l([tt("gds-input")],i);
