import{n as h,r as J,g as K,h as o}from"./gds-element-86064462.js";import{a as Q}from"./query-b9d3c2af.js";import{r as B}from"./query-async-1ff18261.js";import{b as Y}from"./until-27bb1490.js";import{i as Z,D as c}from"./lit-element-1d72f0ce.js";import{n as x}from"./when-748fcf30.js";import{r as ee}from"./choose-473fcf2d.js";import{m as M}from"./runtime-c06dc943.js";import{c as te}from"./constrain-slots-08d8606c.js";import{w as ie}from"./watch-c4961afe.js";import{a as ne,f as se}from"./button-7f889fcf.js";import"./flex-0f40f454.js";import{t as re}from"./tokens.style-01187a75.js";import{s as ae}from"./style-expression-property-0e3d4d40.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-faf9edc4.js";import"./card-4cc9dc24.js";import"./text-7318d3bf.js";import"./badge-3e2e430d.js";const oe=Z`
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
`;var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,r=(e,t,s,d)=>{for(var l=d>1?void 0:d?de(t,s):t,g=e.length-1,u;g>=0;g--)(u=e[g])&&(l=(d?u(t,s,l):u(l))||l);return d&&l&&le(t,s,l),l},R=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},p=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),i=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},a=(e,t,s)=>(R(e,t,"access private method"),s),f,I,m,D,v,b,y,_,w,S,k,F,$,P,T,G,E,L,C,H,W,X,z,q,A,j,N,U,O,V;let n=class extends ne{constructor(){super(),i(this,f),i(this,m),i(this,k),i(this,$),i(this,T),i(this,E),i(this,C),i(this,W),i(this,z),i(this,A),i(this,N),i(this,O),this.value="",this.label="",this.rows=4,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,i(this,v,e=>["type","placeholder","required"].includes(e.name)),i(this,b,e=>{const t=e.target;this.value=t.value}),i(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,_,()=>{this.elInputAsync.then(e=>e.focus())}),i(this,w,()=>{this.value=""}),i(this,S,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),te(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return o`${ee(this.variant,[["default",()=>a(this,f,I).call(this)],["floating-label",()=>a(this,m,D).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};f=new WeakSet;I=function(){return o`
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
            ${x(this.supportingText,()=>a(this,C,H).call(this))}
          </gds-flex>
          ${Y(a(this,O,V).call(this),c)}
        </gds-flex>

        ${a(this,W,X).call(this)}

        <gds-flex
          position="relative"
          align-items="flex-start"
          justify-content="center"
          gap="xs"
          padding=${this.trailSlotOccupied?"s m s m":"s s s m"}
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${p(this,_)}
          cursor="text"
        >
          ${a(this,k,F).call(this)} ${a(this,E,L).call(this)}

          <gds-flex gap="xs" align-items="center" height="var(--gds-space-l)">
            ${a(this,z,q).call(this)} ${a(this,$,P).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${x(this.invalid,()=>o`
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
            ${x(p(this,A,j),()=>a(this,N,U).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};m=new WeakSet;D=function(){return c};v=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;S=new WeakMap;k=new WeakSet;F=function(){return o` <slot name="lead"></slot> `};$=new WeakSet;P=function(){return o`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${a(this,T,G)}
      ></slot>
    `};T=new WeakSet;G=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(d=>{var l;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((l=d.textContent)==null?void 0:l.trim())!==""})};E=new WeakSet;L=function(){return o`
      <textarea
        @input=${p(this,b)}
        @change=${p(this,y)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${se(p(this,v))}
      ></textarea>
    `};C=new WeakSet;H=function(){return o`
      <gds-text
        font-size="detail-m"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};W=new WeakSet;X=function(){return o`
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
    `};z=new WeakSet;q=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${M("Clear input")}"
          @click=${p(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:c};A=new WeakSet;j=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};N=new WeakSet;U=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};O=new WeakSet;V=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?o`
          <gds-button
            size="small"
            rank="tertiary"
            label="${M("Show extended supporting text")}"
            @click=${p(this,S)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:c)};n.styles=[re,oe];r([h()],n.prototype,"value",2);r([h()],n.prototype,"label",2);r([ae({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],n.prototype,"rows",2);r([h({attribute:"supporting-text"})],n.prototype,"supportingText",2);r([h({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);r([h({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);r([h({type:Boolean})],n.prototype,"clearable",2);r([h({type:Number})],n.prototype,"maxlength",2);r([h({type:String})],n.prototype,"variant",2);r([B("textarea")],n.prototype,"elInputAsync",2);r([Q("textarea")],n.prototype,"elInput",2);r([B('slot[name="extended-supporting-text"]')],n.prototype,"elExtendedSupportingTextSlot",2);r([J()],n.prototype,"trailSlotOccupied",2);r([ie("value")],n.prototype,"_setAutoHeight",1);n=r([K("gds-textarea")],n);
