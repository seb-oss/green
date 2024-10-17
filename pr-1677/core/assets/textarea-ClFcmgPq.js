import{n as d,r as k,g as I,h as o}from"./gds-element-RTlSuh_R.js";import{a as X}from"./query-p8xgzTDt.js";import{r as z}from"./query-async-MEroNOeJ.js";import{b as j}from"./until-BfWLtGmt.js";import{i as U,D as g}from"./lit-element-BoQqPHl6.js";import{n as u}from"./when-BxLAFfhK.js";import{r as V}from"./choose-Dh3k58u9.js";import{m as C}from"./runtime-CMQcyTl6.js";import{w as J}from"./watch-tFciLXSI.js";import{a as K,f as Q}from"./button-Oy9O01vr.js";import"./flex-CKVJn-Vg.js";import{t as Z}from"./tokens.style-DI3Y9gRF.js";import{s as ee}from"./style-expression-property-Da3P080T.js";import"./cross-small-BgcbB_fi.js";import"./triangle-exclamation-CZ0g0XuL.js";import"./container-BYFQQCI3.js";import"./card-B_e1BIMU.js";import"./text-ab3cMMk8.js";import"./badge-COYzyzvi.js";const te=U`
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
`;var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},r=(e,t,s,h)=>{for(var l=h>1?void 0:h?se(t,s):t,x=e.length-1,f;x>=0;x--)(f=e[x])&&(l=(h?f(t,s,l):f(l))||l);return h&&l&&ie(t,s,l),l},A=(e,t,s)=>t.has(e)||M("Cannot "+s),p=(e,t,s)=>(A(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(A(e,t,"access private method"),s),i,D,O,b,y,_,w,$,E,N,W,m,T,S,v,L,R,B,Y,P,G,H,F,q;let a=class extends K{constructor(){super(),c(this,i),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,c(this,b,e=>["type","placeholder","required"].includes(e.name)),c(this,y,e=>{const t=e.target;this.value=t.value}),c(this,_,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),c(this,w,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,$,()=>{this.value=""}),c(this,E,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),n(this,i,m).call(this)}disconnectedCallback(){super.disconnectedCallback(),n(this,i,m).call(this)}render(){return o`${V(this.variant,[["default",()=>n(this,i,D).call(this)],["floating-label",()=>n(this,i,O).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};i=new WeakSet;D=function(){return o`
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
            ${u(this.supportingText,()=>n(this,i,Y).call(this))}
          </gds-flex>
          ${j(n(this,i,q).call(this),g)}
        </gds-flex>

        ${n(this,i,P).call(this)}

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
          @click=${p(this,w)}
          cursor="text"
        >
          ${n(this,i,N).call(this)} ${n(this,i,B).call(this)}

          <gds-flex gap="xs" align-items="center" block-size="l">
            ${n(this,i,G).call(this)} ${n(this,i,W).call(this)}
          </gds-flex>
          ${u(this.resize==="auto",()=>n(this,i,L).call(this),()=>g)}
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="flex-start"
          justify-content="space-between"
          aria-live="polite"
          gap="xl"
        >
          ${u(this.invalid,()=>o`
              <gds-flex align-items="flex-start" gap="xs" margin="2xs 0 0 0">
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
          <gds-flex
            margin="0 0 0 auto"
            min-width="4ch"
            justify-content="flex-end"
          >
            ${u(p(this,i,H),()=>n(this,i,F).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};O=function(){return g};b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;$=new WeakMap;E=new WeakMap;N=function(){return o` <slot name="lead"></slot> `};W=function(){return o`
      <slot name="trail" @slotchange=${n(this,i,R)}></slot>
    `};m=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,i,T).bind(this))};T=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,i,S).bind(this)),document.addEventListener("mouseup",n(this,i,v).bind(this))};S=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};v=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,i,S).bind(this)),document.removeEventListener("mouseup",n(this,i,v).bind(this))};L=function(){return o`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${n(this,i,T)}
      ></gds-container>
    `};R=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(h=>{var l;return h.nodeType===Node.ELEMENT_NODE||h.nodeType===Node.TEXT_NODE&&((l=h.textContent)==null?void 0:l.trim())!==""})};B=function(){return o`
      <textarea
        @input=${p(this,y)}
        @change=${p(this,_)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${Q(p(this,b))}
      ></textarea>
    `};Y=function(){return o`
      <gds-text
        level="3"
        font-size="detail-m"
        .color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};P=function(){return o`
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
    `};G=function(){return this.clearable&&this.value.length>0?o`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${C("Clear input")}"
          @click=${p(this,$)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:g};H=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};F=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",o`<gds-badge variant="${t}">${e}</gds-badge>`};q=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?o`
          <gds-button
            size="small"
            rank="tertiary"
            label="${C("Show extended supporting text")}"
            @click=${p(this,E)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:g)};a.styles=[Z,te];r([d()],a.prototype,"value",2);r([d()],a.prototype,"label",2);r([ee({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],a.prototype,"rows",2);r([k()],a.prototype,"lines",2);r([d({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([d({attribute:"disabled",type:Boolean,reflect:!0})],a.prototype,"disabled",2);r([d({type:Boolean})],a.prototype,"clearable",2);r([d()],a.prototype,"resize",2);r([d({type:Number})],a.prototype,"maxlength",2);r([d({type:String})],a.prototype,"variant",2);r([z("textarea")],a.prototype,"elTextareaAsync",2);r([X("textarea")],a.prototype,"elTextarea",2);r([z('slot[name="extended-supporting-text"]')],a.prototype,"elExtendedSupportingTextSlot",2);r([k()],a.prototype,"trailSlotOccupied",2);r([J("value")],a.prototype,"_setAutoHeight",1);a=r([I("gds-textarea")],a);
