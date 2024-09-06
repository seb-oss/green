import{i as K,s as Q,a as g}from"./lit-element-2a5e401f.js";import{n as d,g as Z,h as o}from"./gds-element-24e794df.js";import{a as ee}from"./query-b9d3c2af.js";import{r as Y}from"./query-async-1ff18261.js";import{m as q}from"./until-87c9e354.js";import{n as c}from"./when-cf7256a5.js";import{m as X}from"./lit-localize-87611c26.js";import{c as te}from"./constrain-slots-08d8606c.js";import{w as re}from"./watch-c4961afe.js";import{G as ie,f as j}from"./form-control-0ab31465.js";import{t as ne}from"./tokens.style-cc0690e8.js";import"./_commonjsHelpers-725317a4.js";import"./directive-helpers-5872e68c.js";import"./async-directive-71ec3066.js";import"./directive-12249aa5.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=(e,t,r)=>{for(const p of t)if(p[0]===e)return(0,p[1])();return r==null?void 0:r()},oe=K`
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
`;var se=Object.defineProperty,le=Object.getOwnPropertyDescriptor,s=(e,t,r,p)=>{for(var h=p>1?void 0:p?le(t,r):t,T=e.length-1,C;T>=0;T--)(C=e[T])&&(h=(p?C(t,r,h):C(h))||h);return p&&h&&se(t,r,h),h},L=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},l=(e,t,r)=>(L(e,t,"read from private field"),r?r.call(e):t.get(e)),i=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},n=(e,t,r)=>(L(e,t,"access private method"),r),W,V,z,J,m,v,f,b,A,I,_,B,x,R,y,M,w,N,k,O,S,D,$,P,E,G;let a=class extends ie{constructor(){super(),i(this,W),i(this,z),i(this,_),i(this,x),i(this,y),i(this,w),i(this,k),i(this,S),i(this,$),i(this,E),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.multiline=!1,i(this,m,e=>["type","placeholder","required"].includes(e.name)),i(this,v,e=>{const t=e.target;this.value=t.value}),i(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,b,()=>{this.elInputAsync.then(e=>e.focus())}),i(this,A,()=>{this.value=""}),i(this,I,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),te(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}render(){return o`${ae(this.variant,[["default",()=>n(this,W,V).call(this)],["simplified",()=>n(this,z,J).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.multiline&&this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};W=new WeakSet;V=function(){return o`
      <div class="head">
        <label for="input">${this.label}</label>
        ${q(n(this,E,G).call(this),g)}
      </div>

      ${n(this,y,M).call(this)} ${n(this,w,N).call(this)}

      <div class="field" @click=${l(this,b)}>
        <slot name="lead"></slot>
        ${c(this.multiline,()=>o`${n(this,x,R).call(this)}`,()=>o`${n(this,_,B).call(this)}`)}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${n(this,k,O).call(this)}
      </div>

      <div class="foot">
        <div>
          ${c(this.invalid,()=>o`<span class="error-text">Error information</span>`)}
        </div>
        ${c(l(this,S,D),()=>n(this,$,P).call(this))}
      </div>
    `};z=new WeakSet;J=function(){return o`
      <div class="field" @click=${l(this,b)}>
        <slot name="lead"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${c(this.multiline,()=>o`${n(this,x,R).call(this)}`,()=>o`${n(this,_,B).call(this)}`)}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${n(this,k,O).call(this)}
      </div>

      <div class="foot">
        ${n(this,y,M).call(this)}
        ${c(l(this,S,D),()=>n(this,$,P).call(this))}
        ${q(n(this,E,G).call(this),g)}
      </div>

      ${n(this,w,N).call(this)}
    `};m=new WeakMap;v=new WeakMap;f=new WeakMap;b=new WeakMap;A=new WeakMap;I=new WeakMap;_=new WeakSet;B=function(){return o`
      <input
        @input=${l(this,v)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${j(l(this,m))}
      />
    `};x=new WeakSet;R=function(){return o`
      <textarea
        @input=${l(this,v)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${j(l(this,m))}
      ></textarea>
    `};y=new WeakSet;M=function(){return o`
      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>
    `};w=new WeakSet;N=function(){return o`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </div>
      </div>
    `};k=new WeakSet;O=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          variant="tertiary"
          label="${X("Clear input")}"
          @click=${l(this,A)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};S=new WeakSet;D=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};$=new WeakSet;P=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="error":e<20?t="warning":t="success",o`<gds-badge variant="${t}">${e}</gds-badge>`};E=new WeakSet;G=async function(){return this.elExtendedSupportingTextSlot.then(e=>e.assignedElements().length>0?o`
          <gds-button
            size="small"
            variant="tertiary"
            label="${X("Show extended supporting text")}"
            @click=${l(this,I)}
          >
            <gds-icon-circle-info />
          </gds-button>
        `:g)};a.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};a.styles=[ne,oe];s([d()],a.prototype,"value",2);s([d()],a.prototype,"label",2);s([d({attribute:"supporting-text"})],a.prototype,"supportingText",2);s([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);s([d({type:Boolean})],a.prototype,"clearable",2);s([d({type:Number})],a.prototype,"maxlength",2);s([d({type:String})],a.prototype,"variant",2);s([d({type:Boolean})],a.prototype,"multiline",2);s([Y("input, textarea")],a.prototype,"elInputAsync",2);s([ee("input, textarea")],a.prototype,"elInput",2);s([Y('slot[name="extended-supporting-text"]')],a.prototype,"elExtendedSupportingTextSlot",2);s([re("value")],a.prototype,"_setAutoHeight",1);a=s([Z("gds-input")],a);const $e={title:"Docs/Components/Input",component:"gds-input",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
&nbsp;|&nbsp;
[Usage guidelines](https://seb.io/component/input)

@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},de={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},u={...de};var F,H,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(U=(H=u.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ee=["Basic"];export{u as Basic,Ee as __namedExportsOrder,$e as default};
