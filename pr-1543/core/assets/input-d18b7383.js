import{i as V,h as J,D as c}from"./lit-element-1d72f0ce.js";import{n as d,g as K,h as a}from"./gds-element-86064462.js";import{a as L}from"./query-b9d3c2af.js";import{r as G}from"./query-async-1ff18261.js";import{b as P}from"./until-27bb1490.js";import{n as u}from"./when-748fcf30.js";import{m as H}from"./runtime-c06dc943.js";import{c as Q}from"./constrain-slots-08d8606c.js";import{w as Y}from"./watch-c4961afe.js";import{a as Z,f as q}from"./button-c89fd615.js";import"./flex-bd3ef588.js";import{t as tt}from"./tokens.style-b5b8efd2.js";import"./cross-small-7e719cb3.js";import"./circle-info-52fe3396.js";import"./container-def7f44d.js";import"./text-4793c6cc.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(t,e,s)=>{for(const h of e)if(h[0]===t)return(0,h[1])();return s==null?void 0:s()},st=V`
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
`;var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,o=(t,e,s,h)=>{for(var p=h>1?void 0:h?it(e,s):e,E=t.length-1,T;E>=0;E--)(T=t[E])&&(p=(h?T(e,s,p):T(p))||p);return h&&p&&nt(e,s,p),p},X=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},l=(t,e,s)=>(X(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},i=(t,e,s)=>(X(t,e,"access private method"),s),C,j,W,U,g,x,f,m,A,z,b,B,v,I,y,M,_,R,w,N,$,O,k,D,S,F;let r=class extends Z{constructor(){super(),n(this,C),n(this,W),n(this,b),n(this,v),n(this,y),n(this,_),n(this,w),n(this,$),n(this,k),n(this,S),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.multiline=!1,n(this,g,t=>["type","placeholder","required"].includes(t.name)),n(this,x,t=>{const e=t.target;this.value=e.value}),n(this,f,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),n(this,m,()=>{this.elInputAsync.then(t=>t.focus())}),n(this,A,()=>{this.value=""}),n(this,z,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),Q(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}render(){return a`${et(this.variant,[["default",()=>i(this,C,j).call(this)],["simplified",()=>i(this,W,U).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};C=new WeakSet;j=function(){return a`
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
            ${u(this.supportingText,()=>i(this,y,M).call(this))}
          </gds-flex>
          ${P(i(this,S,F).call(this),c)}
        </gds-flex>

        ${u(this.showExtendedSupportingText,()=>i(this,_,R).call(this))}

        <gds-flex
          align-items="center"
          justify-content="center"
          gap="m"
          padding="xs m"
          height="var(--gds-space-3xl)"
          border-radius="xs"
          .background=${this.invalid?"l3c-background-negative-secondary":"l3-background-secondary"}
          .border=${this.invalid?"4xs/l3c-stroke-negative":"4xs/l3-stroke-secondary"}
          class="field"
          @click=${l(this,m)}
          cursor="text"
        >
          <slot name="lead"></slot>
          ${u(this.multiline,()=>a`${i(this,v,I).call(this)}`,()=>a`${i(this,b,B).call(this)}`)}
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${i(this,w,N).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          <gds-container>
            ${u(this.invalid,()=>a`<gds-text tag="span" class="error-text"
                  >${this.validationMessage}</gds-text
                >`)}
          </gds-container>
          ${u(l(this,$,O),()=>i(this,k,D).call(this))}
        </gds-flex>
      </gds-flex>
    `};W=new WeakSet;U=function(){return a`
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
          @click=${l(this,m)}
        >
          <slot name="lead"></slot>
          <gds-text
            tag="label"
            font-weight="book"
            font-size="detail-m"
            for="input"
          >
            <gds-flex>${this.label}</gds-flex>
            ${u(this.multiline,()=>a`${i(this,v,I).call(this)}`,()=>a`${i(this,b,B).call(this)}`)}
          </gds-text>
          <slot name="trail" gds-allow="gds-badge"></slot>
          ${i(this,w,N).call(this)}
        </gds-flex>

        <gds-flex class="foot">
          ${i(this,y,M).call(this)}
          ${u(l(this,$,O),()=>i(this,k,D).call(this))}
          ${P(i(this,S,F).call(this),c)}
        </gds-flex>

        ${i(this,_,R).call(this)}
      </gds-flex>
    `};g=new WeakMap;x=new WeakMap;f=new WeakMap;m=new WeakMap;A=new WeakMap;z=new WeakMap;b=new WeakSet;B=function(){return a`
      <input
        @input=${l(this,x)}
        @change=${l(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(l(this,g))}
      />
    `};v=new WeakSet;I=function(){return a`
      <textarea
        @input=${l(this,x)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${q(l(this,g))}
      ></textarea>
    `};y=new WeakSet;M=function(){return a`
      <gds-text
        font-size="detail-s"
        color="l3-content-tertiary"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};_=new WeakSet;R=function(){return a`
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
          <slot name="message" @slotchange=${()=>this.requestUpdate()}></slot>
        </gds-text>
      </gds-flex>
    `};w=new WeakSet;N=function(){return this.clearable&&this.value.length>0?a`
        <gds-button
          size="small"
          rank="tertiary"
          label="${H("Clear input")}"
          @click=${l(this,A)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};$=new WeakSet;O=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};k=new WeakSet;D=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="error":t<20?e="warning":e="success",a`<gds-badge variant="${e}">${t}</gds-badge>`};S=new WeakSet;F=async function(){return this.elExtendedSupportingTextSlot.then(t=>t&&t.assignedElements().length>0?a`
          <gds-button
            size="small"
            rank="tertiary"
            label="${H("Show extended supporting text")}"
            @click=${l(this,z)}
          >
            <gds-icon-circle-info />
          </gds-button>
        `:c)};r.shadowRootOptions={...J.shadowRootOptions,delegatesFocus:!0};r.styles=[tt,st];o([d()],r.prototype,"value",2);o([d()],r.prototype,"label",2);o([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);o([d({type:Boolean})],r.prototype,"clearable",2);o([d({type:Number})],r.prototype,"maxlength",2);o([d({type:String})],r.prototype,"variant",2);o([d({type:Boolean})],r.prototype,"multiline",2);o([G("input, textarea")],r.prototype,"elInputAsync",2);o([L("input, textarea")],r.prototype,"elInput",2);o([G('slot[name="message"]')],r.prototype,"elExtendedSupportingTextSlot",2);o([Y("value")],r.prototype,"_setAutoHeight",1);r=o([K("gds-input")],r);
