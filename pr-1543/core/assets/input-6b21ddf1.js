import{i as V,h as J,D as B}from"./lit-element-1d72f0ce.js";import{n as d,g as K,h as a}from"./gds-element-86064462.js";import{a as L}from"./query-b9d3c2af.js";import{r as G}from"./query-async-1ff18261.js";import{b as P}from"./until-27bb1490.js";import{n as u}from"./when-748fcf30.js";import{m as H}from"./runtime-c06dc943.js";import{c as Q}from"./constrain-slots-08d8606c.js";import{w as Y}from"./watch-c4961afe.js";import{a as Z,f as q}from"./button-c89fd615.js";import"./flex-bd3ef588.js";import{t as tt}from"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./circle-info-52fe3396.js";import"./container-def7f44d.js";import"./text-fd8401c4.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(t,e,n)=>{for(const h of e)if(h[0]===t)return(0,h[1])();return n==null?void 0:n()},st=V`
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
    }
  }

  @layer simplified {
    // ...
  }
`;var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,o=(t,e,n,h)=>{for(var p=h>1?void 0:h?it(e,n):e,T=t.length-1,C;T>=0;T--)(C=t[T])&&(p=(h?C(e,n,p):C(p))||p);return h&&p&&nt(e,n,p),p},X=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},l=(t,e,n)=>(X(t,e,"read from private field"),n?n.call(t):e.get(t)),i=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},s=(t,e,n)=>(X(t,e,"access private method"),n),W,j,A,U,m,v,b,y,I,M,_,R,w,N,c,x,g,f,$,O,S,z,k,D,E,F;let r=class extends Z{constructor(){super(),i(this,W),i(this,A),i(this,_),i(this,w),i(this,c),i(this,g),i(this,$),i(this,S),i(this,k),i(this,E),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.multiline=!1,i(this,m,t=>["type","placeholder","required"].includes(t.name)),i(this,v,t=>{const e=t.target;this.value=e.value}),i(this,b,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,y,()=>{this.elInputAsync.then(t=>t.focus())}),i(this,I,()=>{this.value=""}),i(this,M,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),Q(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}render(){return a`${et(this.variant,[["default",()=>s(this,W,j).call(this)],["simplified",()=>s(this,A,U).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};W=new WeakSet;j=function(){return a`
      <gds-flex
        flex-direction="column"
        gap="2xs"
        width="340px"
        color="${this.invalid?"l3-content-negative":null}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
        >
          <gds-text tag="label" for="input"> ${this.label} </gds-text>
          ${P(s(this,E,F).call(this),B)}
        </gds-flex>

        <!-- ${s(this,c,x).call(this)} ${s(this,g,f).call(this)} -->
        ${u(this.supportingText,()=>s(this,c,x).call(this))}
        ${u(this.showExtendedSupportingText,()=>s(this,g,f).call(this))}

        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          height="var(--gds-space-3xl)"
          border-radius="xs"
          background="${this.invalid?"l3c-background-negative-secondary":"l3-background-secondary"}"
          border="${this.invalid?"4xs/l3c-stroke-negative":"4xs/l3-stroke-secondary"}"
          class="field"
          @click=${l(this,y)}
          cursor="text"
        >
          <slot name="lead"></slot>
          ${u(this.multiline,()=>a`${s(this,w,N).call(this)}`,()=>a`${s(this,_,R).call(this)}`)}
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${s(this,$,O).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          <gds-container>
            ${u(this.invalid,()=>a`<gds-text tag="span" class="error-text"
                  >${this.validationMessage}</gds-text
                >`)}
          </gds-container>
          ${u(l(this,S,z),()=>s(this,k,D).call(this))}
        </gds-flex>
      </gds-flex>
    `};A=new WeakSet;U=function(){return a`
      <gds-flex flex-direction="column" gap="2xs">
        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          background="l3-background-secondary"
          border="4xs/l3-stroke-secondary"
          height="var(--gds-space-3xl)"
          border-radius="xs"
          class="field"
          @click=${l(this,y)}
        >
          <slot name="lead"></slot>
          <gds-text tag="label" for="input">
            <gds-flex>${this.label}</gds-flex>
            ${u(this.multiline,()=>a`${s(this,w,N).call(this)}`,()=>a`${s(this,_,R).call(this)}`)}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${s(this,$,O).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          ${s(this,c,x).call(this)}
          ${u(l(this,S,z),()=>s(this,k,D).call(this))}
          ${P(s(this,E,F).call(this),B)}
        </gds-flex>

        ${s(this,g,f).call(this)}
      </gds-flex>
    `};m=new WeakMap;v=new WeakMap;b=new WeakMap;y=new WeakMap;I=new WeakMap;M=new WeakMap;_=new WeakSet;R=function(){return a`
      <input
        @input=${l(this,v)}
        @change=${l(this,b)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(l(this,m))}
      />
    `};w=new WeakSet;N=function(){return a`
      <textarea
        @input=${l(this,v)}
        @change=${l(this,b)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(l(this,m))}
      ></textarea>
    `};c=new WeakSet;x=function(){return a`
      <gds-flex class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </gds-flex>
    `};g=new WeakSet;f=function(){return a`
      <gds-flex
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot name="message" @slotchange=${()=>this.requestUpdate()}></slot>
        </div>
      </gds-flex>
    `};$=new WeakSet;O=function(){return this.clearable&&this.value.length>0?a`
        <gds-button
          size="small"
          rank="tertiary"
          label="${H("Clear input")}"
          @click=${l(this,I)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:B};S=new WeakSet;z=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};k=new WeakSet;D=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="error":t<20?e="warning":e="success",a`<gds-badge variant="${e}">${t}</gds-badge>`};E=new WeakSet;F=async function(){return this.elExtendedSupportingTextSlot.then(t=>a`
        <gds-button
          size="small"
          rank="tertiary"
          label="${H("Show extended supporting text")}"
          @click=${l(this,M)}
        >
          <gds-icon-circle-info />
        </gds-button>
      `)};r.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};r.styles=[tt,st];o([d()],r.prototype,"value",2);o([d()],r.prototype,"label",2);o([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);o([d({type:Boolean})],r.prototype,"clearable",2);o([d({type:Number})],r.prototype,"maxlength",2);o([d({type:String})],r.prototype,"variant",2);o([d({type:Boolean})],r.prototype,"multiline",2);o([G("input, textarea")],r.prototype,"elInputAsync",2);o([L("input, textarea")],r.prototype,"elInput",2);o([G('slot[name="extended-supporting-text"]')],r.prototype,"elExtendedSupportingTextSlot",2);o([Y("value")],r.prototype,"_setAutoHeight",1);r=o([K("gds-input")],r);
