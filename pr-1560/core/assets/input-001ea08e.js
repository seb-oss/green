import{i as U,s as V,a as u}from"./lit-element-2a5e401f.js";import{n as d,g as J,h as o}from"./gds-element-24e794df.js";import{a as K}from"./query-b9d3c2af.js";import{r as P}from"./query-async-1ff18261.js";import{m as D}from"./until-87c9e354.js";import{n as c}from"./when-cf7256a5.js";import{m as H}from"./lit-localize-87611c26.js";import{c as L}from"./constrain-slots-08d8606c.js";import{w as Q}from"./watch-c4961afe.js";import{G as Z,f as Y}from"./form-control-0ab31465.js";import{t as ee}from"./tokens.style-d981605a.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=(e,t,i)=>{for(const h of t)if(h[0]===e)return(0,h[1])();return i==null?void 0:i()},ie=U`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_color-bg: var(--gds-sys-color-container-container);

      --_color-border: var(--gds-sys-color-stroke-stroke-variant1);
      --_border-radius: 0.5rem;
      --_border-width: 0.0625rem;
      --_border-width-hover: 0.125rem;

      --_color-outline-alpha: 60%;
      --_color-outline: color-mix(
        in srgb,
        var(--_color-border),
        transparent var(--_color-outline-alpha)
      );

      --_transition: var(--gds-sys-transition);
      --_lh: 1.25;
      --_core-min-block-size: 3.5rem;
      --_gap: 0.5rem;
      --_padding-block: 0.625rem;
      --_padding-inline: 1rem;
      --_core-icon-size: 1.5rem;
      --_inner-height: 2rem;
    }
  }

  @layer a11y {
    /* @media (prefers-color-scheme: dark) {
    :host {
      --_color-bg: var(--_color-bg-dark);
    }
  } */

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

    /* @media (prefers-contrast: more) {
    :host {
      --_color-bg: hsla(60, 4%, 96%, 1);
      --_color-outline-alpha: 0%;
    }
  } */
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      contain: layout;
      display: block;
      isolation: isolate;
    }

    .head {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-inline-end: 1rem;
    }

    label {
      font-weight: 400;
    }

    .foot {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-inline-end: 1rem;

      gds-badge {
        align-self: flex-end;
      }

      :first-child {
        flex-grow: 1;
      }
    }

    .supporting-text,
    .error-text {
      font-size: 0.875rem;
    }

    slot[name='extended-supporting-text'] {
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      display: block;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      opacity: 0;
      padding: 1rem;
      transition: var(--_transition);

      [aria-hidden='false'] & {
        opacity: 1;
      }
    }

    div.extended-supporting-text {
      display: grid;
      grid-template-rows: 0fr;
      transition: var(--_transition);

      > * {
        overflow: hidden;
      }

      &[aria-hidden='false'] {
        grid-template-rows: 1fr;
        opacity: 1;
      }
    }

    input[type='number']::-webkit-inner-spin-button {
      display: none;
    }

    input,
    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--_fs);
      line-height: var(--_lh);
      margin: unset;
      min-height: var(--_inner-height);
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;

      &:focus:not(:focus-visible) {
        outline: none;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator {
        appearance: none;
        background-color: rgb(195, 0, 255);
        background-image: none;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
      }
    }

    textarea {
      max-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
      min-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
      overflow: hidden;
      resize: none;
      transition: unset;
    }

    .field {
      align-items: flex-start;
      background-color: var(--_color-bg);
      block-size: max-content;
      border: var(--_border-width) solid var(--_color-border);
      border-radius: var(--_border-radius);
      cursor: text;
      display: flex;
      flex-direction: row;
      gap: var(--_gap);
      justify-content: center;
      margin-block: var(--_gap);
      min-block-size: var(--_core-min-block-size);
      outline-color: transparent;
      outline-offset: var(--_border-width);
      outline-style: solid;
      outline-width: var(--_border-width-hover);
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition: var(--_transition);

      &:focus:not(:focus-visible) {
        outline: none;
      }

      &:hover {
        --_color-bg: var(--gds-sys-color-container-container-dim2);
      }

      &:has(input:focus, textarea:focus) {
        /* --_border-width: var(--_border-width-hover); */
        border: var(--_border-width) solid var(--_color-border);
        border-radius: var(--_border-radius);
        box-shadow: none;
        outline-color: var(--_color-outline);
        transition: var(--_transition);
      }

      slot {
        align-items: center;
        display: flex;
        height: var(--_inner-height);
      }
    }

    :host(:invalid) .field {
      --_color-bg: var(--gds-sys-color-status-negative-negative-bright);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
      --_color-outline: var(--gds-sys-color-stroke-stroke-negative);
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }

    :host(:invalid) .error-text {
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }

    :host(:invalid) label {
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }
  }

  @layer simplified {
    :host([variant='simplified']) label {
      align-items: center;
      background-color: transparent;
      display: block;
      height: max-content;
      inset: 0;
      width: 100%;

      div {
        line-height: var(--_lh);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: var(--_transition);
      }
    }

    :host([variant='simplified'])
      label:has(
        input:not(:placeholder-shown, [readonly]),
        textarea:not(:placeholder-shown, [readonly])
      ),
    :host([variant='simplified']) label:focus-within {
      div {
        font-size: 0.75rem;
        font-weight: 500;
        top: 0.375rem;
        transform: translateY(
          translateY(calc(0px - var(--gds-input-label-translate)))
        );
      }

      input,
      textarea {
        margin-top: 0.75rem;
      }
    }
  }
`;var re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,s=(e,t,i,h)=>{for(var p=h>1?void 0:h?ne(t,i):t,E=e.length-1,T;E>=0;E--)(T=e[E])&&(p=(h?T(t,i,p):T(p))||p);return h&&p&&re(t,i,p),p},q=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l=(e,t,i)=>(q(e,t,"read from private field"),i?i.call(e):t.get(e)),r=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n=(e,t,i)=>(q(e,t,"access private method"),i),C,X,W,j,g,v,f,m,z,A,b,B,_,I,x,M,y,R,w,N,k,O,$,G,S,F;let a=class extends Z{constructor(){super(),r(this,C),r(this,W),r(this,b),r(this,_),r(this,x),r(this,y),r(this,w),r(this,k),r(this,$),r(this,S),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.multiline=!1,r(this,g,e=>["type","placeholder","required"].includes(e.name)),r(this,v,e=>{const t=e.target;this.value=t.value}),r(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),r(this,m,()=>{this.elInputAsync.then(e=>e.focus())}),r(this,z,()=>{this.value=""}),r(this,A,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),L(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}render(){return o`${te(this.variant,[["default",()=>n(this,C,X).call(this)],["simplified",()=>n(this,W,j).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};C=new WeakSet;X=function(){return o`
      <div class="head">
        <label for="input">${this.label}</label>
        ${D(n(this,S,F).call(this),u)}
      </div>

      ${n(this,x,M).call(this)} ${n(this,y,R).call(this)}

      <div class="field" @click=${l(this,m)}>
        <slot name="lead"></slot>
        ${c(this.multiline,()=>o`${n(this,_,I).call(this)}`,()=>o`${n(this,b,B).call(this)}`)}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${n(this,w,N).call(this)}
      </div>

      <div class="foot">
        <div>
          ${c(this.invalid,()=>o`<span class="error-text">${this.validationMessage}</span>`)}
        </div>
        ${c(l(this,k,O),()=>n(this,$,G).call(this))}
      </div>
    `};W=new WeakSet;j=function(){return o`
      <div class="field" @click=${l(this,m)}>
        <slot name="lead"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${c(this.multiline,()=>o`${n(this,_,I).call(this)}`,()=>o`${n(this,b,B).call(this)}`)}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${n(this,w,N).call(this)}
      </div>

      <div class="foot">
        ${n(this,x,M).call(this)}
        ${c(l(this,k,O),()=>n(this,$,G).call(this))}
        ${D(n(this,S,F).call(this),u)}
      </div>

      ${n(this,y,R).call(this)}
    `};g=new WeakMap;v=new WeakMap;f=new WeakMap;m=new WeakMap;z=new WeakMap;A=new WeakMap;b=new WeakSet;B=function(){return o`
      <input
        @input=${l(this,v)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${Y(l(this,g))}
      />
    `};_=new WeakSet;I=function(){return o`
      <textarea
        @input=${l(this,v)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${Y(l(this,g))}
      ></textarea>
    `};x=new WeakSet;M=function(){return o`
      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>
    `};y=new WeakSet;R=function(){return o`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot name="message" @slotchange=${()=>this.requestUpdate()}></slot>
        </div>
      </div>
    `};w=new WeakSet;N=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          variant="tertiary"
          label="${H("Clear input")}"
          @click=${l(this,z)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:u};k=new WeakSet;O=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};$=new WeakSet;G=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="error":e<20?t="warning":t="success",o`<gds-badge variant="${t}">${e}</gds-badge>`};S=new WeakSet;F=async function(){return this.elExtendedSupportingTextSlot.then(e=>e.assignedElements().length>0?o`
          <gds-button
            size="small"
            variant="tertiary"
            label="${H("Show extended supporting text")}"
            @click=${l(this,A)}
          >
            <gds-icon-circle-info />
          </gds-button>
        `:u)};a.shadowRootOptions={...V.shadowRootOptions,delegatesFocus:!0};a.styles=[ee,ie];s([d()],a.prototype,"value",2);s([d()],a.prototype,"label",2);s([d({attribute:"supporting-text"})],a.prototype,"supportingText",2);s([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);s([d({type:Boolean})],a.prototype,"clearable",2);s([d({type:Number})],a.prototype,"maxlength",2);s([d({type:String})],a.prototype,"variant",2);s([d({type:Boolean})],a.prototype,"multiline",2);s([P("input, textarea")],a.prototype,"elInputAsync",2);s([K("input, textarea")],a.prototype,"elInput",2);s([P('slot[name="extended-supporting-text"]')],a.prototype,"elExtendedSupportingTextSlot",2);s([Q("value")],a.prototype,"_setAutoHeight",1);a=s([J("gds-input")],a);
