import{i as K,h as Q,D as c}from"./lit-element-1d72f0ce.js";import{n as d,r as Y,g as Z,h as r}from"./gds-element-86064462.js";import{a as ee}from"./query-b9d3c2af.js";import{r as M}from"./query-async-1ff18261.js";import{b as te}from"./until-27bb1490.js";import{n as u}from"./when-748fcf30.js";import{m as O}from"./runtime-c06dc943.js";import{c as ie}from"./constrain-slots-08d8606c.js";import{w as se}from"./watch-c4961afe.js";import{a as ne,f as R}from"./button-f13a8f91.js";import"./flex-e0066de6.js";import{t as ae}from"./tokens.style-d0c8c448.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-a3cd0825.js";import"./card-6335216c.js";import"./text-fff8e4d1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=(e,t,n)=>{for(const h of t)if(h[0]===e)return(0,h[1])();return n==null?void 0:n()},oe=K`
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

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      width: var(--gds-space-l);
    }
  }

  @layer simplified {
    // ...
  }
`;var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,a=(e,t,n,h)=>{for(var p=h>1?void 0:h?de(t,n):t,v=e.length-1,m;v>=0;v--)(m=e[v])&&(p=(h?m(t,n,p):m(p))||p);return h&&p&&le(t,n,p),p},N=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},l=(e,t,n)=>(N(e,t,"read from private field"),n?n.call(e):t.get(e)),s=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},o=(e,t,n)=>(N(e,t,"access private method"),n),b,F,y,D,g,x,f,w,$,_,S,G,k,P,E,L,T,H,z,q,C,X,W,j,A,U,B,V,I,J;let i=class extends ne{constructor(){super(),s(this,b),s(this,y),s(this,S),s(this,k),s(this,E),s(this,T),s(this,z),s(this,C),s(this,W),s(this,A),s(this,B),s(this,I),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.textarea=!1,this.leadSlotOccupied=!1,s(this,g,e=>["type","placeholder","required"].includes(e.name)),s(this,x,e=>{const t=e.target;this.value=t.value}),s(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),s(this,w,()=>{this.elInputAsync.then(e=>e.focus())}),s(this,$,()=>{this.value=""}),s(this,_,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ie(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return r`${re(this.variant,[["default",()=>o(this,b,F).call(this)],["floating-label",()=>o(this,y,D).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.textarea&&this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};b=new WeakSet;F=function(){return r`
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
            ${u(this.supportingText,()=>o(this,z,q).call(this))}
          </gds-flex>
          ${te(o(this,I,J).call(this),c)}
        </gds-flex>

        ${o(this,C,X).call(this)}

        <gds-flex
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size==="small"?"2xs":"xs"}"
          padding="${this.textarea?"s s s m":this.size==="small"?"xs s":"xs m"}"
          min-height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}"
          height="${this.textarea?"":this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}}"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${l(this,w)}
          cursor="text"
        >
          ${this.textarea?c:o(this,S,G).call(this)}
          ${u(this.textarea,()=>r`${o(this,T,H).call(this)}`,()=>r`${o(this,E,L).call(this)}`)}
          <gds-flex gap="xs" align-items="center">
            ${o(this,W,j).call(this)}
            ${this.textarea?c:o(this,k,P).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${u(this.invalid,()=>r`
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
            ${u(l(this,A,U),()=>o(this,B,V).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};y=new WeakSet;D=function(){return c};g=new WeakMap;x=new WeakMap;f=new WeakMap;w=new WeakMap;$=new WeakMap;_=new WeakMap;S=new WeakSet;G=function(){return r` <slot name="lead"></slot> `};k=new WeakSet;P=function(){return r` <slot name="trail" gds-allow="gds-badge"></slot> `};E=new WeakSet;L=function(){return r`
      <input
        @input=${l(this,x)}
        @change=${l(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${R(l(this,g))}
      />
    `};T=new WeakSet;H=function(){return r`
      <textarea
        @input=${l(this,x)}
        @change=${l(this,f)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${R(l(this,g))}
      ></textarea>
    `};z=new WeakSet;q=function(){return r`
      <gds-text
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};C=new WeakSet;X=function(){return r`
      <gds-card
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
        opacity="${this.showExtendedSupportingText?"1":"0"}"
        height="${this.showExtendedSupportingText?"auto":"0px"}"
        padding="${this.showExtendedSupportingText?"s m":"0 m"}"
        border-radius="xs"
        background="l3-background-secondary"
        transition=".3s"
        color="l3-content-tertiary"
        overflow="hidden"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};W=new WeakSet;j=function(){return this.clearable&&this.value.length>0?r`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${l(this,$)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};A=new WeakSet;U=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};B=new WeakSet;V=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",r`<gds-badge variant="${t}">${e}</gds-badge>`};I=new WeakSet;J=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?r`
          <gds-button
            size="small"
            rank="tertiary"
            label="${O("Show extended supporting text")}"
            @click=${l(this,_)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};i.shadowRootOptions={...Q.shadowRootOptions,delegatesFocus:!0};i.styles=[ae,oe];a([d()],i.prototype,"value",2);a([d()],i.prototype,"label",2);a([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);a([d({type:Boolean})],i.prototype,"clearable",2);a([d({type:Number})],i.prototype,"maxlength",2);a([d({type:String})],i.prototype,"variant",2);a([d({type:String})],i.prototype,"size",2);a([d({type:Boolean})],i.prototype,"textarea",2);a([M("input, textarea")],i.prototype,"elInputAsync",2);a([ee("input, textarea")],i.prototype,"elInput",2);a([M('slot[name="extended-supporting-text"]')],i.prototype,"elExtendedSupportingTextSlot",2);a([Y()],i.prototype,"leadSlotOccupied",2);a([se("value")],i.prototype,"_setAutoHeight",1);i=a([Z("gds-input")],i);
