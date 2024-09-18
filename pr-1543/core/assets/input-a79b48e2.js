import{i as V,h as J,D as u}from"./lit-element-1d72f0ce.js";import{n as d,g as K,h as r}from"./gds-element-86064462.js";import{a as L}from"./query-b9d3c2af.js";import{r as G}from"./query-async-1ff18261.js";import{b as P}from"./until-27bb1490.js";import{n as c}from"./when-748fcf30.js";import{m as H}from"./runtime-c06dc943.js";import{c as Q}from"./constrain-slots-08d8606c.js";import{w as Y}from"./watch-c4961afe.js";import{a as Z,f as q}from"./button-c89fd615.js";import"./flex-e77ecaa5.js";import{t as tt}from"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-43da555d.js";import"./text-4793c6cc.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(t,e,i)=>{for(const h of e)if(h[0]===t)return(0,h[1])();return i==null?void 0:i()},st=V`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: color 368ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 368ms cubic-bezier(0.4, 0, 0.2, 1);
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
  }

  @layer simplified {
    // ...
  }
`;var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,l=(t,e,i,h)=>{for(var p=h>1?void 0:h?nt(e,i):e,E=t.length-1,T;E>=0;E--)(T=t[E])&&(p=(h?T(e,i,p):T(p))||p);return h&&p&&it(e,i,p),p},X=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},o=(t,e,i)=>(X(t,e,"read from private field"),i?i.call(t):e.get(t)),n=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},a=(t,e,i)=>(X(t,e,"access private method"),i),C,j,W,U,g,x,f,m,z,A,b,B,v,I,y,M,_,R,$,N,w,O,k,D,S,F;let s=class extends Z{constructor(){super(),n(this,C),n(this,W),n(this,b),n(this,v),n(this,y),n(this,_),n(this,$),n(this,w),n(this,k),n(this,S),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.multiline=!1,n(this,g,t=>["type","placeholder","required"].includes(t.name)),n(this,x,t=>{const e=t.target;this.value=e.value}),n(this,f,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),n(this,m,()=>{this.elInputAsync.then(t=>t.focus())}),n(this,z,()=>{this.value=""}),n(this,A,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),Q(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return r`${et(this.variant,[["default",()=>a(this,C,j).call(this)],["simplified",()=>a(this,W,U).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};C=new WeakSet;j=function(){return r`
      <!-- color="${this.invalid?"l3-content-negative":null}" -->
      <gds-flex
        flex-direction="column"
        gap="2xs"
        width="340px"
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
            ${c(this.supportingText,()=>a(this,y,M).call(this))}
          </gds-flex>
          ${P(a(this,S,F).call(this),u)}
        </gds-flex>

        ${c(this.showExtendedSupportingText,()=>a(this,_,R).call(this))}

        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3c-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3c-stroke-negative":"4xs/l3-stroke-secondary"}
          class="field"
          @click=${o(this,m)}
          cursor="text"
        >
          <gds-flex width="24px">
            <slot name="lead"></slot>
          </gds-flex>
          ${c(this.multiline,()=>r`${a(this,v,I).call(this)}`,()=>r`${a(this,b,B).call(this)}`)}
          <gds-flex width="24px">
            <slot name="trail" gds-allow="gds-badge"></slot>
          </gds-flex>
          ${a(this,$,N).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          <gds-container>
            ${c(this.invalid,()=>r`
                <gds-flex align-items="center" gap="xs">
                  <gds-icon-triangle-exclamation>
                  </gds-icon-triangle-exclamation>
                  <gds-text tag="span" class="error-text">
                    ${this.validationMessage}
                  </gds-text>
                </gds-flex>
              `)}
          </gds-container>
          ${c(o(this,w,O),()=>a(this,k,D).call(this))}
        </gds-flex>
      </gds-flex>
    `};W=new WeakSet;U=function(){return r`
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
            ${c(this.multiline,()=>r`${a(this,v,I).call(this)}`,()=>r`${a(this,b,B).call(this)}`)}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${a(this,$,N).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          ${a(this,y,M).call(this)}
          ${c(o(this,w,O),()=>a(this,k,D).call(this))}
          ${P(a(this,S,F).call(this),u)}
        </gds-flex>

        ${a(this,_,R).call(this)}
      </gds-flex>
    `};g=new WeakMap;x=new WeakMap;f=new WeakMap;m=new WeakMap;z=new WeakMap;A=new WeakMap;b=new WeakSet;B=function(){return r`
      <input
        @input=${o(this,x)}
        @change=${o(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(o(this,g))}
      />
    `};v=new WeakSet;I=function(){return r`
      <textarea
        @input=${o(this,x)}
        @change=${o(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(o(this,g))}
      ></textarea>
    `};y=new WeakSet;M=function(){return r`
      <gds-text
        font-size="detail-s"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};_=new WeakSet;R=function(){return r`
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
    `};$=new WeakSet;N=function(){return this.clearable&&this.value.length>0?r`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${H("Clear input")}"
          @click=${o(this,z)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:u};w=new WeakSet;O=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};k=new WeakSet;D=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="error":t<20?e="warning":e="success",r`<gds-badge variant="${e}">${t}</gds-badge>`};S=new WeakSet;F=async function(){return this.elExtendedSupportingTextSlot.then(t=>t&&t.assignedElements().length>0?r`
          <gds-button
            size="small"
            rank="tertiary"
            label="${H("Show extended supporting text")}"
            @click=${o(this,A)}
          >
            <gds-icon-circle-info />
          </gds-button>
        `:u)};s.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};s.styles=[tt,st];l([d()],s.prototype,"value",2);l([d()],s.prototype,"label",2);l([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);l([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);l([d({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([d({type:Boolean})],s.prototype,"clearable",2);l([d({type:Number})],s.prototype,"maxlength",2);l([d({type:String})],s.prototype,"variant",2);l([d({type:String})],s.prototype,"size",2);l([d({type:Boolean})],s.prototype,"multiline",2);l([G("input, textarea")],s.prototype,"elInputAsync",2);l([L("input, textarea")],s.prototype,"elInput",2);l([G('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);l([Y("value")],s.prototype,"_setAutoHeight",1);s=l([K("gds-input")],s);
