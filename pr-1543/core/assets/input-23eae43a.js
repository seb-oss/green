import{n as d,r as J,g as K,h as o}from"./gds-element-86064462.js";import{a as Q}from"./query-b9d3c2af.js";import{r as B}from"./query-async-1ff18261.js";import{b as Y}from"./until-27bb1490.js";import{i as Z,D as c}from"./lit-element-1d72f0ce.js";import{n as x}from"./when-748fcf30.js";import{r as tt}from"./choose-473fcf2d.js";import{m as I}from"./runtime-c06dc943.js";import{c as et}from"./constrain-slots-08d8606c.js";import{w as st}from"./watch-c4961afe.js";import{a as it,f as nt}from"./button-7f889fcf.js";import"./flex-b2130ae8.js";import{t as at}from"./tokens.style-01187a75.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-e16c39c4.js";import"./card-cb4c8a23.js";import"./text-7318d3bf.js";import"./badge-5e02330c.js";const rt=Z`
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
      width: var(--gds-space-m);
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
`;var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,a=(t,e,n,h)=>{for(var l=h>1?void 0:h?lt(e,n):e,g=t.length-1,u;g>=0;g--)(u=t[g])&&(l=(h?u(e,n,l):u(l))||l);return h&&l&&ot(e,n,l),l},M=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},p=(t,e,n)=>(M(t,e,"read from private field"),n?n.call(t):e.get(t)),s=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},r=(t,e,n)=>(M(t,e,"access private method"),n),f,R,m,D,v,b,y,_,w,S,$,F,k,G,E,L,T,P,C,H,z,X,W,q,A,j,N,U,O,V;let i=class extends it{constructor(){super(),s(this,f),s(this,m),s(this,$),s(this,k),s(this,E),s(this,T),s(this,C),s(this,z),s(this,W),s(this,A),s(this,N),s(this,O),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.trailSlotOccupied=!1,s(this,v,t=>["type","placeholder","required"].includes(t.name)),s(this,b,t=>{const e=t.target;this.value=e.value}),s(this,y,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),s(this,_,()=>{this.elInputAsync.then(t=>t.focus())}),s(this,w,()=>{this.value=""}),s(this,S,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),et(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return o`${tt(this.variant,[["default",()=>r(this,f,R).call(this)],["floating-label",()=>r(this,m,D).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};f=new WeakSet;R=function(){return o`
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
            ${x(this.supportingText,()=>r(this,C,H).call(this))}
          </gds-flex>
          ${Y(r(this,O,V).call(this),c)}
        </gds-flex>

        ${r(this,z,X).call(this)}

        <gds-flex
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size==="small"?"2xs":"xs"}"
          padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
          min-height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}"
          height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}}"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${p(this,_)}
          cursor="text"
        >
          ${r(this,$,F).call(this)} ${r(this,T,P).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${r(this,W,q).call(this)} ${r(this,k,G).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${x(this.invalid,()=>o`
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
            ${x(p(this,A,j),()=>r(this,N,U).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};m=new WeakSet;D=function(){return c};v=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;S=new WeakMap;$=new WeakSet;F=function(){return o` <slot name="lead"></slot> `};k=new WeakSet;G=function(){return o`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${r(this,E,L)}
      ></slot>
    `};E=new WeakSet;L=function(t){const n=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=n.length>0&&n.some(h=>{var l;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((l=h.textContent)==null?void 0:l.trim())!==""})};T=new WeakSet;P=function(){return o`
      <input
        @input=${p(this,b)}
        @change=${p(this,y)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${nt(p(this,v))}
      />
    `};C=new WeakSet;H=function(){return o`
      <gds-text
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};z=new WeakSet;X=function(){return o`
      <gds-card
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="l3-background-secondary"
        color="l3-content-tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};W=new WeakSet;q=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${I("Clear input")}"
          @click=${p(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};A=new WeakSet;j=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};N=new WeakSet;U=function(){const t=this.maxlength-this.value.length;let e;return t<0?e="negative":t<20?e="warning":e="positive",o`<gds-badge variant="${e}">${t}</gds-badge>`};O=new WeakSet;V=async function(){return this.elExtendedSupportingTextSlot.then(t=>t&&t.assignedElements().length>0?o`
          <gds-button
            size="small"
            rank="tertiary"
            label="${I("Show extended supporting text")}"
            @click=${p(this,S)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};i.styles=[at,rt];a([d()],i.prototype,"value",2);a([d()],i.prototype,"label",2);a([d({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);a([d({type:Boolean})],i.prototype,"clearable",2);a([d({type:Number})],i.prototype,"maxlength",2);a([d({type:String})],i.prototype,"variant",2);a([d({type:String})],i.prototype,"size",2);a([B("input, textarea")],i.prototype,"elInputAsync",2);a([Q("input, textarea")],i.prototype,"elInput",2);a([B('slot[name="extended-supporting-text"]')],i.prototype,"elExtendedSupportingTextSlot",2);a([J()],i.prototype,"trailSlotOccupied",2);a([st("value")],i.prototype,"_setAutoHeight",1);i=a([K("gds-input")],i);
