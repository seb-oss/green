import{n as d,r as J,g as K,h as l}from"./gds-element-86064462.js";import{a as Q}from"./query-b9d3c2af.js";import{r as B}from"./query-async-1ff18261.js";import{b as Y}from"./until-27bb1490.js";import{i as Z,D as c}from"./lit-element-1d72f0ce.js";import{n as x}from"./when-748fcf30.js";import{r as ee}from"./choose-473fcf2d.js";import{m as I}from"./runtime-c06dc943.js";import{c as te}from"./constrain-slots-08d8606c.js";import{w as ie}from"./watch-c4961afe.js";import{a as se,f as ne}from"./button-7f889fcf.js";import"./flex-bcd919b1.js";import{t as ae}from"./tokens.style-01187a75.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-89e950a3.js";import"./card-dcd6ce07.js";import"./text-c6537c2f.js";import"./badge-f5495a3d.js";const re=Z`
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
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
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
`;var le=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,a=(e,t,n,h)=>{for(var o=h>1?void 0:h?oe(t,n):t,g=e.length-1,u;g>=0;g--)(u=e[g])&&(o=(h?u(t,n,o):u(o))||o);return h&&o&&le(t,n,o),o},M=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},p=(e,t,n)=>(M(e,t,"read from private field"),n?n.call(e):t.get(e)),i=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},r=(e,t,n)=>(M(e,t,"access private method"),n),f,R,m,D,v,b,y,_,w,S,$,F,k,G,E,L,z,P,T,H,C,X,W,j,A,q,N,U,O,V;let s=class extends se{constructor(){super(),i(this,f),i(this,m),i(this,$),i(this,k),i(this,E),i(this,z),i(this,T),i(this,C),i(this,W),i(this,A),i(this,N),i(this,O),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.trailSlotOccupied=!1,i(this,v,e=>["type","placeholder","required"].includes(e.name)),i(this,b,e=>{const t=e.target;this.value=t.value}),i(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,_,()=>{this.elInputAsync.then(e=>e.focus())}),i(this,w,()=>{this.value=""}),i(this,S,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),te(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return l`${ee(this.variant,[["default",()=>r(this,f,R).call(this)],["floating-label",()=>r(this,m,D).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};f=new WeakSet;R=function(){return l`
      <gds-flex
        level="3"
        flex-direction="column"
        width="100%"
        gap="xs"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
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
            ${x(this.supportingText,()=>r(this,T,H).call(this))}
          </gds-flex>
          ${Y(r(this,O,V).call(this),c)}
        </gds-flex>

        ${r(this,C,X).call(this)}

        <gds-flex
          level="3"
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size==="small"?"2xs":"xs"}"
          padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
          min-block-size="${this.size==="small"?"xl":"3xl"}"
          block-size="${this.size==="small"?"xl":"3xl"}"
          border-radius="xs"
          .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${p(this,_)}
          cursor="text"
        >
          ${r(this,$,F).call(this)} ${r(this,z,P).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${r(this,W,j).call(this)} ${r(this,k,G).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${x(this.invalid,()=>l`
              <gds-flex
                align-items="flex-start"
                gap="${this.size==="small"?"2xs":"xs"}"
                margin="2xs 0 0 0"
              >
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation
                    width="${this.size==="small"?"16":"18"}"
                    height="${this.size==="small"?"16":"18"}"
                    solid
                  >
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
          <gds-flex
            margin="0 0 0 auto"
            min-width="4ch"
            justify-content="flex-end"
          >
            ${x(p(this,A,q),()=>r(this,N,U).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};m=new WeakSet;D=function(){return c};v=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;S=new WeakMap;$=new WeakSet;F=function(){return l` <slot name="lead"></slot> `};k=new WeakSet;G=function(){return l`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${r(this,E,L)}
      ></slot>
    `};E=new WeakSet;L=function(e){const n=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=n.length>0&&n.some(h=>{var o;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((o=h.textContent)==null?void 0:o.trim())!==""})};z=new WeakSet;P=function(){return l`
      <input
        @input=${p(this,b)}
        @change=${p(this,y)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${ne(p(this,v))}
      />
    `};T=new WeakSet;H=function(){return l`
      <gds-text
        level="3"
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};C=new WeakSet;X=function(){return l`
      <gds-card
        level="3"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="secondary"
        color="tertiary"
        display="${this.showExtendedSupportingText?"block":"none"}"
      >
        <gds-text font-size="body-s">
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};W=new WeakSet;j=function(){return this.clearable&&this.value.length>0?l`
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
      `:c};A=new WeakSet;q=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};N=new WeakSet;U=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",l`<gds-badge variant="${t}">${e}</gds-badge>`};O=new WeakSet;V=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?l`
          <gds-button
            size="small"
            rank="tertiary"
            label="${I("Show extended supporting text")}"
            @click=${p(this,S)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};s.styles=[ae,re];a([d()],s.prototype,"value",2);a([d()],s.prototype,"label",2);a([d({attribute:"supporting-text"})],s.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([d({type:Boolean})],s.prototype,"clearable",2);a([d({type:Number})],s.prototype,"maxlength",2);a([d({type:String})],s.prototype,"variant",2);a([d({type:String})],s.prototype,"size",2);a([B("input")],s.prototype,"elInputAsync",2);a([Q("input")],s.prototype,"elInput",2);a([B('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);a([J()],s.prototype,"trailSlotOccupied",2);a([ie("value")],s.prototype,"_setAutoHeight",1);s=a([K("gds-input")],s);
