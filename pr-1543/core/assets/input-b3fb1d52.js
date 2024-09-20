import{n as d,r as K,g as Q,h as r}from"./gds-element-86064462.js";import{a as Y}from"./query-b9d3c2af.js";import{r as M}from"./query-async-1ff18261.js";import{b as Z}from"./until-27bb1490.js";import{i as ee,D as c}from"./lit-element-1d72f0ce.js";import{n as u}from"./when-748fcf30.js";import{m as N}from"./runtime-c06dc943.js";import{c as te}from"./constrain-slots-08d8606c.js";import{w as ie}from"./watch-c4961afe.js";import{a as se,f as O}from"./button-f13a8f91.js";import"./flex-e0066de6.js";import{t as ne}from"./tokens.style-d0c8c448.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-a3cd0825.js";import"./card-6335216c.js";import"./text-fff8e4d1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=(e,t,n)=>{for(const h of t)if(h[0]===e)return(0,h[1])();return n==null?void 0:n()},re=ee`
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
`;var le=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,a=(e,t,n,h)=>{for(var p=h>1?void 0:h?oe(t,n):t,v=e.length-1,m;v>=0;v--)(m=e[v])&&(p=(h?m(t,n,p):m(p))||p);return h&&p&&le(t,n,p),p},R=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},o=(e,t,n)=>(R(e,t,"read from private field"),n?n.call(e):t.get(e)),i=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},l=(e,t,n)=>(R(e,t,"access private method"),n),b,F,y,D,g,x,f,_,$,w,S,G,k,P,E,L,T,H,z,q,C,X,W,j,A,U,B,V,I,J;let s=class extends se{constructor(){super(),i(this,b),i(this,y),i(this,S),i(this,k),i(this,E),i(this,T),i(this,z),i(this,C),i(this,W),i(this,A),i(this,B),i(this,I),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.textarea=!1,this.leadSlotOccupied=!1,i(this,g,e=>["type","placeholder","required"].includes(e.name)),i(this,x,e=>{const t=e.target;this.value=t.value}),i(this,f,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,_,()=>{this.elInputAsync.then(e=>e.focus())}),i(this,$,()=>{this.value=""}),i(this,w,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),te(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return r`${ae(this.variant,[["default",()=>l(this,b,F).call(this)],["floating-label",()=>l(this,y,D).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.textarea&&this.elInputAsync.then(e=>{const t=(e.value.split(`
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
            ${u(this.supportingText,()=>l(this,z,q).call(this))}
          </gds-flex>
          ${Z(l(this,I,J).call(this),c)}
        </gds-flex>

        ${l(this,C,X).call(this)}

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
          @click=${o(this,_)}
          cursor="text"
        >
          ${this.textarea?c:l(this,S,G).call(this)}
          ${u(this.textarea,()=>r`${l(this,T,H).call(this)}`,()=>r`${l(this,E,L).call(this)}`)}
          <gds-flex gap="xs" align-items="center">
            ${l(this,W,j).call(this)}
            ${this.textarea?c:l(this,k,P).call(this)}
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
            ${u(o(this,A,U),()=>l(this,B,V).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};y=new WeakSet;D=function(){return c};g=new WeakMap;x=new WeakMap;f=new WeakMap;_=new WeakMap;$=new WeakMap;w=new WeakMap;S=new WeakSet;G=function(){return r` <slot name="lead"></slot> `};k=new WeakSet;P=function(){return r` <slot name="trail" gds-allow="gds-badge"></slot> `};E=new WeakSet;L=function(){return r`
      <input
        @input=${o(this,x)}
        @change=${o(this,f)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${O(o(this,g))}
      />
    `};T=new WeakSet;H=function(){return r`
      <textarea
        @input=${o(this,x)}
        @change=${o(this,f)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${O(o(this,g))}
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
        display="${this.showExtendedSupportingText?"block":"none"}"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="l3-background-secondary"
        color="l3-content-tertiary"
      >
        <gds-text
          font-size="body-s"
          display="${this.showExtendedSupportingText?"block":"none"}"
        >
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
          label="${N("Clear input")}"
          @click=${o(this,$)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};A=new WeakSet;U=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};B=new WeakSet;V=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",r`<gds-badge variant="${t}">${e}</gds-badge>`};I=new WeakSet;J=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?r`
          <gds-button
            size="small"
            rank="tertiary"
            label="${N("Show extended supporting text")}"
            @click=${o(this,w)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};s.styles=[ne,re];a([d()],s.prototype,"value",2);a([d()],s.prototype,"label",2);a([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([d({type:Boolean})],s.prototype,"clearable",2);a([d({type:Number})],s.prototype,"maxlength",2);a([d({type:String})],s.prototype,"variant",2);a([d({type:String})],s.prototype,"size",2);a([d({type:Boolean})],s.prototype,"textarea",2);a([M("input, textarea")],s.prototype,"elInputAsync",2);a([Y("input, textarea")],s.prototype,"elInput",2);a([M('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);a([K()],s.prototype,"leadSlotOccupied",2);a([ie("value")],s.prototype,"_setAutoHeight",1);s=a([Q("gds-input")],s);
