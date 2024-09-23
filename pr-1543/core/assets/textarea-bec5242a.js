import{n as d,r as F,g as ae,h as o}from"./gds-element-86064462.js";import{a as oe}from"./query-b9d3c2af.js";import{r as G}from"./query-async-1ff18261.js";import{b as le}from"./until-27bb1490.js";import{i as de,D as g}from"./lit-element-1d72f0ce.js";import{n as v}from"./when-748fcf30.js";import{r as he}from"./choose-473fcf2d.js";import{m as q}from"./runtime-c06dc943.js";import{c as ce}from"./constrain-slots-08d8606c.js";import{w as ge}from"./watch-c4961afe.js";import{a as pe,f as ue}from"./button-7f889fcf.js";import"./flex-b2130ae8.js";import{t as xe}from"./tokens.style-01187a75.js";import{s as fe}from"./style-expression-property-0e3d4d40.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-e16c39c4.js";import"./card-cb4c8a23.js";import"./text-7318d3bf.js";import"./badge-5e02330c.js";const me=de`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1), height 0s;
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
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      outline: none;
      overflow: hidden;
      padding: unset;
      resize: none;
      transition:
        var(--_transition),
        resize 0s;

      width: 100%;
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

    .resize-handle {
      &:hover,
      &:active {
        &::before {
          background: var(--gds-color-l3-border-primary);
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: var(--gds-color-l3-border-primary);
        inset: 0;
        margin-inline: auto;
        height: 0px;
        width: 12px;
        opacity: 0;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
    // ...
  }
`;var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,a=(e,t,s,h)=>{for(var l=h>1?void 0:h?be(t,s):t,f=e.length-1,m;f>=0;f--)(m=e[f])&&(l=(h?m(t,s,l):m(l))||l);return h&&l&&ve(t,s,l),l},I=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},c=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),i=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},n=(e,t,s)=>(I(e,t,"access private method"),s),b,X,y,j,S,k,$,T,E,z,C,U,W,V,_,J,p,D,u,M,x,w,A,K,N,Q,O,Z,R,ee,B,te,L,ie,H,se,Y,ne,P,re;let r=class extends pe{constructor(){super(),i(this,b),i(this,y),i(this,C),i(this,W),i(this,_),i(this,p),i(this,u),i(this,x),i(this,A),i(this,N),i(this,O),i(this,R),i(this,B),i(this,L),i(this,H),i(this,Y),i(this,P),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize=!0,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,i(this,S,e=>["type","placeholder","required"].includes(e.name)),i(this,k,e=>{const t=e.target;this.value=t.value}),i(this,$,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,T,()=>{this.elTextareaAsync.then(e=>e.focus())}),i(this,E,()=>{this.value=""}),i(this,z,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),ce(this),this.lines=0}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback(),n(this,_,J).call(this)}render(){return o`${he(this.variant,[["default",()=>n(this,b,X).call(this)],["floating-label",()=>n(this,y,j).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};b=new WeakSet;X=function(){return o`
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
            ${v(this.supportingText,()=>n(this,R,ee).call(this))}
          </gds-flex>
          ${le(n(this,P,re).call(this),g)}
        </gds-flex>

        ${n(this,B,te).call(this)}

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
          @click=${c(this,T)}
          cursor="text"
        >
          ${n(this,C,U).call(this)} ${n(this,O,Z).call(this)}

          <gds-flex gap="xs" align-items="center" height="var(--gds-space-l)">
            ${n(this,L,ie).call(this)} ${n(this,W,V).call(this)}
          </gds-flex>
          ${n(this,A,K).call(this)}
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${v(this.invalid,()=>o`
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
            ${v(c(this,H,se),()=>n(this,Y,ne).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};y=new WeakSet;j=function(){return g};S=new WeakMap;k=new WeakMap;$=new WeakMap;T=new WeakMap;E=new WeakMap;z=new WeakMap;C=new WeakSet;U=function(){return o` <slot name="lead"></slot> `};W=new WeakSet;V=function(){return this.resize?o`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${n(this,N,Q)}
      ></slot>
    `:g};_=new WeakSet;J=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,p,D).bind(this))};p=new WeakSet;D=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,u,M).bind(this)),document.addEventListener("mouseup",n(this,x,w).bind(this))};u=new WeakSet;M=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),console.log(`Current lines: ${this.lines}`),this.lastMouseY=e.clientY)};x=new WeakSet;w=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,u,M).bind(this)),document.removeEventListener("mouseup",n(this,x,w).bind(this))};A=new WeakSet;K=function(){return o`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${n(this,p,D)}
      ></gds-container>
    `};N=new WeakSet;Q=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(h=>{var l;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((l=h.textContent)==null?void 0:l.trim())!==""})};O=new WeakSet;Z=function(){return o`
      <textarea
        @input=${c(this,k)}
        @change=${c(this,$)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${ue(c(this,S))}
      ></textarea>
    `};R=new WeakSet;ee=function(){return o`
      <gds-text
        font-size="detail-m"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};B=new WeakSet;te=function(){return o`
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
    `};L=new WeakSet;ie=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${q("Clear input")}"
          @click=${c(this,E)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};H=new WeakSet;se=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};Y=new WeakSet;ne=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};P=new WeakSet;re=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?o`
          <gds-button
            size="small"
            rank="tertiary"
            label="${q("Show extended supporting text")}"
            @click=${c(this,z)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};r.styles=[xe,me];a([d()],r.prototype,"value",2);a([d()],r.prototype,"label",2);a([fe({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],r.prototype,"rows",2);a([F()],r.prototype,"lines",2);a([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);a([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);a([d({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);a([d({type:Boolean})],r.prototype,"clearable",2);a([d({type:Boolean})],r.prototype,"resize",2);a([d({type:Number})],r.prototype,"maxlength",2);a([d({type:String})],r.prototype,"variant",2);a([G("textarea")],r.prototype,"elTextareaAsync",2);a([oe("textarea")],r.prototype,"elTextarea",2);a([G('slot[name="extended-supporting-text"]')],r.prototype,"elExtendedSupportingTextSlot",2);a([F()],r.prototype,"trailSlotOccupied",2);a([ge("value")],r.prototype,"_setAutoHeight",1);r=a([ae("gds-textarea")],r);