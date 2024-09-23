import{n as d,r as G,g as re,h as o}from"./gds-element-86064462.js";import{a as oe}from"./query-b9d3c2af.js";import{r as q}from"./query-async-1ff18261.js";import{b as le}from"./until-27bb1490.js";import{i as de,D as g}from"./lit-element-1d72f0ce.js";import{n as c}from"./when-748fcf30.js";import{r as he}from"./choose-473fcf2d.js";import{m as I}from"./runtime-c06dc943.js";import{c as pe}from"./constrain-slots-08d8606c.js";import{w as ge}from"./watch-c4961afe.js";import{a as ce,f as ue}from"./button-7f889fcf.js";import"./flex-6d86855b.js";import{t as xe}from"./tokens.style-01187a75.js";import{s as fe}from"./style-expression-property-0e3d4d40.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-93208d58.js";import"./card-79567ceb.js";import"./text-7d772f50.js";import"./badge-7a1650c6.js";const me=de`
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
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: currentColor;
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
`;var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,r=(e,t,s,h)=>{for(var l=h>1?void 0:h?be(t,s):t,v=e.length-1,b;v>=0;v--)(b=e[v])&&(l=(h?b(t,s,l):b(l))||l);return h&&l&&ve(t,s,l),l},X=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},p=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),i=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},n=(e,t,s)=>(X(e,t,"access private method"),s),y,j,_,U,k,$,T,E,z,C,W,V,D,J,u,w,x,M,f,A,m,S,R,K,N,Q,O,Z,L,ee,B,te,H,ie,Y,se,P,ne,F,ae;let a=class extends ce{constructor(){super(),i(this,y),i(this,_),i(this,W),i(this,D),i(this,u),i(this,x),i(this,f),i(this,m),i(this,R),i(this,N),i(this,O),i(this,L),i(this,B),i(this,H),i(this,Y),i(this,P),i(this,F),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,i(this,k,e=>["type","placeholder","required"].includes(e.name)),i(this,$,e=>{const t=e.target;this.value=t.value}),i(this,T,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),i(this,E,()=>{this.elTextareaAsync.then(e=>e.focus())}),i(this,z,()=>{this.value=""}),i(this,C,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),pe(this),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),n(this,u,w).call(this)}disconnectedCallback(){super.disconnectedCallback(),n(this,u,w).call(this)}render(){return o`${he(this.variant,[["default",()=>n(this,y,j).call(this)],["floating-label",()=>n(this,_,U).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};y=new WeakSet;j=function(){return o`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="xs"
        level="3"
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
            <gds-text font-weight="book" font-size="detail-m">
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${c(this.supportingText,()=>n(this,L,ee).call(this))}
          </gds-flex>
          ${le(n(this,F,ae).call(this),g)}
        </gds-flex>

        ${n(this,B,te).call(this)}

        <gds-flex
          position="relative"
          align-items="flex-start"
          justify-content="center"
          gap="xs"
          level="3"
          padding=${this.trailSlotOccupied?"s m s m":"s s s m"}
          border-radius="xs"
          .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${p(this,E)}
          cursor="text"
        >
          ${n(this,W,V).call(this)} ${n(this,O,Z).call(this)}

          <gds-flex gap="xs" align-items="center" height="var(--gds-space-l)">
            ${n(this,H,ie).call(this)} ${n(this,D,J).call(this)}
          </gds-flex>
          ${c(this.resize==="auto",()=>n(this,R,K).call(this),()=>g)}
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${c(this.invalid,()=>o`
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
            ${c(p(this,Y,se),()=>n(this,P,ne).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};_=new WeakSet;U=function(){return g};k=new WeakMap;$=new WeakMap;T=new WeakMap;E=new WeakMap;z=new WeakMap;C=new WeakMap;W=new WeakSet;V=function(){return o` <slot name="lead"></slot> `};D=new WeakSet;J=function(){return o`
      <slot
        name="trail"
        gds-allow="gds-badge"
        @slotchange=${n(this,N,Q)}
      ></slot>
    `};u=new WeakSet;w=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,x,M).bind(this))};x=new WeakSet;M=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,f,A).bind(this)),document.addEventListener("mouseup",n(this,m,S).bind(this))};f=new WeakSet;A=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};m=new WeakSet;S=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,f,A).bind(this)),document.removeEventListener("mouseup",n(this,m,S).bind(this))};R=new WeakSet;K=function(){return console.log("renderResizeHandle",this.resize),o`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${n(this,x,M)}
      ></gds-container>
    `};N=new WeakSet;Q=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(h=>{var l;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((l=h.textContent)==null?void 0:l.trim())!==""})};O=new WeakSet;Z=function(){return o`
      <textarea
        @input=${p(this,$)}
        @change=${p(this,T)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${ue(p(this,k))}
      ></textarea>
    `};L=new WeakSet;ee=function(){return o`
      <gds-text
        level="3"
        font-size="detail-m"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};B=new WeakSet;te=function(){return o`
      <gds-card
        level="3"
        display="${this.showExtendedSupportingText?"block":"none"}"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="secondary"
        color="tertiary"
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
    `};H=new WeakSet;ie=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${I("Clear input")}"
          @click=${p(this,z)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};Y=new WeakSet;se=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};P=new WeakSet;ne=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};F=new WeakSet;ae=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?o`
          <gds-button
            size="small"
            rank="tertiary"
            label="${I("Show extended supporting text")}"
            @click=${p(this,C)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};a.styles=[xe,me];r([d()],a.prototype,"value",2);r([d()],a.prototype,"label",2);r([fe({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],a.prototype,"rows",2);r([G()],a.prototype,"lines",2);r([d({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([d({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);r([d({type:Boolean})],a.prototype,"clearable",2);r([d()],a.prototype,"resize",2);r([d({type:Number})],a.prototype,"maxlength",2);r([d({type:String})],a.prototype,"variant",2);r([q("textarea")],a.prototype,"elTextareaAsync",2);r([oe("textarea")],a.prototype,"elTextarea",2);r([q('slot[name="extended-supporting-text"]')],a.prototype,"elExtendedSupportingTextSlot",2);r([G()],a.prototype,"trailSlotOccupied",2);r([ge("value")],a.prototype,"_setAutoHeight",1);a=r([re("gds-textarea")],a);
