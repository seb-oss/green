import{n as l,r as V,g as J,h as a}from"./gds-element-86064462.js";import{a as K}from"./query-b9d3c2af.js";import{r as M}from"./query-async-1ff18261.js";import{b as Q}from"./until-27bb1490.js";import{i as Y,D as c}from"./lit-element-1d72f0ce.js";import{n as x}from"./when-748fcf30.js";import{r as Z}from"./choose-473fcf2d.js";import{m as O}from"./runtime-c06dc943.js";import{c as ee}from"./constrain-slots-08d8606c.js";import{w as te}from"./watch-c4961afe.js";import{a as ie,f as ne}from"./button-7f889fcf.js";import"./flex-a14d12bd.js";import{t as se}from"./tokens.style-01187a75.js";import{s as re}from"./style-expression-property-0e3d4d40.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-82e7a89b.js";import"./card-9d673652.js";import"./text-7318d3bf.js";import"./badge-3e2e430d.js";const ae=Y`
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

    :host([size='small']) textarea {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(textarea:focus-visible) {
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
      min-width: var(--gds-space-l);
    }
  }

  @layer simplified {
    // ...
  }
`;var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,s=(e,t,r,p)=>{for(var d=p>1?void 0:p?le(t,r):t,g=e.length-1,u;g>=0;g--)(u=e[g])&&(d=(p?u(t,r,d):u(d))||d);return p&&d&&oe(t,r,d),d},R=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},h=(e,t,r)=>(R(e,t,"read from private field"),r?r.call(e):t.get(e)),i=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},o=(e,t,r)=>(R(e,t,"access private method"),r),f,I,v,N,m,b,y,_,w,S,k,F,$,P,D,T,G,E,L,C,H,W,q,z,X,A,j,B,U;let n=class extends ie{constructor(){super(),i(this,f),i(this,v),i(this,k),i(this,$),i(this,D),i(this,T),i(this,E),i(this,C),i(this,W),i(this,z),i(this,A),i(this,B),this.value="",this.label="",this.rows=4,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.leadSlotOccupied=!1,i(this,m,e=>["type","placeholder","required"].includes(e.name)),i(this,b,e=>{const t=e.target;this.value=t.value}),i(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,_,()=>{this.elInputAsync.then(e=>e.focus())}),i(this,w,()=>{this.value=""}),i(this,S,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ee(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return a`${Z(this.variant,[["default",()=>o(this,f,I).call(this)],["floating-label",()=>o(this,v,N).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};f=new WeakSet;I=function(){return a`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="xs"
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
            <gds-text font-weight="book" font-size="detail-m">
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${x(this.supportingText,()=>o(this,E,L).call(this))}
          </gds-flex>
          ${Q(o(this,B,U).call(this),c)}
        </gds-flex>

        ${o(this,C,H).call(this)}

        <gds-flex
          position="relative"
          align-items="flex-start"
          justify-content="center"
          gap="xs"
          padding="s s s m"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${h(this,_)}
          cursor="text"
        >
          ${o(this,k,F).call(this)} ${o(this,T,G).call(this)}

          <gds-flex gap="xs" align-items="center" height="var(--gds-space-l)">
            ${o(this,W,q).call(this)} ${o(this,$,P).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${x(this.invalid,()=>a`
              <gds-flex align-items="flex-start" gap="xs">
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="detail-s"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `)}
          <gds-flex margin="0 0 0 auto">
            ${x(h(this,z,X),()=>o(this,A,j).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};v=new WeakSet;N=function(){return c};m=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;S=new WeakMap;k=new WeakSet;F=function(){return a` <slot name="lead"></slot> `};$=new WeakSet;P=function(){return a` <slot name="trail" gds-allow="gds-badge"></slot> `};D=new WeakSet;T=new WeakSet;G=function(){return a`
      <textarea
        @input=${h(this,b)}
        @change=${h(this,y)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${ne(h(this,m))}
      ></textarea>
    `};E=new WeakSet;L=function(){return a`
      <gds-text
        font-size="detail-m"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};C=new WeakSet;H=function(){return a`
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
    `};W=new WeakSet;q=function(){return this.clearable&&this.value.length>0?a`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${h(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};z=new WeakSet;X=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};A=new WeakSet;j=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",a`<gds-badge variant="${t}">${e}</gds-badge>`};B=new WeakSet;U=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?a`
          <gds-button
            size="small"
            rank="tertiary"
            label="${O("Show extended supporting text")}"
            @click=${h(this,S)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};n.styles=[se,ae];s([l()],n.prototype,"value",2);s([l()],n.prototype,"label",2);s([re({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],n.prototype,"rows",2);s([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);s([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);s([l({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);s([l({type:Boolean})],n.prototype,"clearable",2);s([l({type:Number})],n.prototype,"maxlength",2);s([l({type:String})],n.prototype,"variant",2);s([M("textarea")],n.prototype,"elInputAsync",2);s([K("textarea")],n.prototype,"elInput",2);s([M('slot[name="extended-supporting-text"]')],n.prototype,"elExtendedSupportingTextSlot",2);s([V()],n.prototype,"leadSlotOccupied",2);s([te("value")],n.prototype,"_setAutoHeight",1);n=s([J("gds-textarea")],n);
