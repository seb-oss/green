import{n as o,r as U,g as V,h as l}from"./gds-element-86064462.js";import{a as J}from"./query-b9d3c2af.js";import{r as M}from"./query-async-1ff18261.js";import{b as K}from"./until-27bb1490.js";import{i as Q,D as g}from"./lit-element-1d72f0ce.js";import{n as f}from"./when-748fcf30.js";import{r as Y}from"./choose-473fcf2d.js";import{m as O}from"./runtime-c06dc943.js";import{c as Z}from"./constrain-slots-08d8606c.js";import{w as ee}from"./watch-c4961afe.js";import{a as te,f as se}from"./button-7f889fcf.js";import"./flex-a14d12bd.js";import{t as ie}from"./tokens.style-01187a75.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-82e7a89b.js";import"./card-9d673652.js";import"./text-7318d3bf.js";import"./badge-3e2e430d.js";const ne=Q`
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
    }
  }

  @layer simplified {
    // ...
  }
`;var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,n=(e,t,a,p)=>{for(var d=p>1?void 0:p?re(t,a):t,u=e.length-1,x;u>=0;u--)(x=e[u])&&(d=(p?x(t,a,d):x(d))||d);return p&&d&&ae(t,a,d),d},R=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},h=(e,t,a)=>(R(e,t,"read from private field"),a?a.call(e):t.get(e)),s=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},r=(e,t,a)=>(R(e,t,"access private method"),a),m,N,v,F,y,_,w,$,S,k,E,D,c,b,z,G,T,P,C,L,W,H,A,q,B,X,I,j;let i=class extends te{constructor(){super(),s(this,m),s(this,v),s(this,E),s(this,c),s(this,z),s(this,T),s(this,C),s(this,W),s(this,A),s(this,B),s(this,I),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="default",this.leadSlotOccupied=!1,s(this,y,e=>["type","placeholder","required"].includes(e.name)),s(this,_,e=>{const t=e.target;this.value=t.value}),s(this,w,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),s(this,$,()=>{this.elInputAsync.then(e=>e.focus())}),s(this,S,()=>{this.value=""}),s(this,k,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),Z(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return l`${Y(this.variant,[["default",()=>r(this,m,N).call(this)],["floating-label",()=>r(this,v,F).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};m=new WeakSet;N=function(){return l`
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
            ${f(this.supportingText,()=>r(this,T,P).call(this))}
          </gds-flex>
          ${K(r(this,I,j).call(this),g)}
        </gds-flex>

        ${r(this,C,L).call(this)}

        <gds-flex
          position="relative"
          align-items="center"
          justify-content="center"
          gap="${this.size==="small"?"2xs":"xs"}"
          padding="${this.size==="small"?"xs s":r(this,c,b).call(this)?"xs xs xs m":"xs m"}"
          min-height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}"
          height="${this.size==="small"?"var(--gds-space-xl)":"var(--gds-space-3xl)"}}"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${h(this,$)}
          cursor="text"
        >
          ${r(this,E,D).call(this)} ${r(this,z,G).call(this)}
          <gds-flex gap="xs" align-items="center">
            ${r(this,W,H).call(this)} ${r(this,c,b).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${f(this.invalid,()=>l`
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
            ${f(h(this,A,q),()=>r(this,B,X).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};v=new WeakSet;F=function(){return g};y=new WeakMap;_=new WeakMap;w=new WeakMap;$=new WeakMap;S=new WeakMap;k=new WeakMap;E=new WeakSet;D=function(){return l` <slot name="lead"></slot> `};c=new WeakSet;b=function(){return l` <slot name="trail" gds-allow="gds-badge"></slot> `};z=new WeakSet;G=function(){return l`
      <input
        @input=${h(this,_)}
        @change=${h(this,w)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        placeholder=" "
        ${se(h(this,y))}
      />
    `};T=new WeakSet;P=function(){return l`
      <gds-text
        font-size="${this.size==="small"?"detail-s":"detail-m"}"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};C=new WeakSet;L=function(){return l`
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
    `};W=new WeakSet;H=function(){return this.clearable&&this.value.length>0?l`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${h(this,S)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};A=new WeakSet;q=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};B=new WeakSet;X=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",l`<gds-badge variant="${t}">${e}</gds-badge>`};I=new WeakSet;j=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?l`
          <gds-button
            size="small"
            rank="tertiary"
            label="${O("Show extended supporting text")}"
            @click=${h(this,k)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};i.styles=[ie,ne];n([o()],i.prototype,"value",2);n([o()],i.prototype,"label",2);n([o({attribute:"supporting-text"})],i.prototype,"supportingText",2);n([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);n([o({attribute:"disabled",type:Boolean,reflect:!0})],i.prototype,"disabled",2);n([o({type:Boolean})],i.prototype,"clearable",2);n([o({type:Number})],i.prototype,"maxlength",2);n([o({type:String})],i.prototype,"variant",2);n([o({type:String})],i.prototype,"size",2);n([M("input, textarea")],i.prototype,"elInputAsync",2);n([J("input, textarea")],i.prototype,"elInput",2);n([M('slot[name="extended-supporting-text"]')],i.prototype,"elExtendedSupportingTextSlot",2);n([U()],i.prototype,"leadSlotOccupied",2);n([ee("value")],i.prototype,"_setAutoHeight",1);i=n([V("gds-input")],i);
