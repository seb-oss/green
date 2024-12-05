import{m as X}from"./runtime-CMQcyTl6.js";import{l as q}from"./localized-decorator-B8fm5KIw.js";import{n as d,g as k,G as V,h,r as M}from"./custom-element-scoping-b4lD3laR.js";import{a as j}from"./query-p8xgzTDt.js";import{r as J}from"./query-async-MEroNOeJ.js";import{r as K}from"./form-control-header-DFiaq7mp.js";import{n as f}from"./when-BR7zwNJC.js";import{i as O,E as y}from"./lit-element-C_s9q329.js";import{t as Q}from"./tokens.style-BpCJ0qXS.js";import{w as U}from"./watch-tFciLXSI.js";import{s as Z}from"./style-expression-property-CYg4CGI6.js";import{a as ee,f as te}from"./button-D0ZJix2D.js";import"./badge-vv4C0a3g.js";import"./triangle-exclamation-qVaGzhdK.js";import"./cross-small-CgIxxlLH.js";import"./flex-CCeRRtYR.js";const se=O`
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
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
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
  }
`,ie=O`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},_=(e,t,s,l)=>{for(var a=l>1?void 0:l?re(t,s):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(a=(l?p(t,s,a):p(a))||a);return l&&a&&ae(t,s,a),a},ne=(e,t,s)=>t.has(e)||A("Cannot "+s),oe=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),le=(e,t,s)=>(ne(e,t,"access private method"),s),m,D;let v=class extends V{constructor(){super(...arguments),oe(this,m)}render(){return h`<div aria-live="polite">
      <div class="error-message">
        ${f(this.validationMessage,()=>h`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${f(Number.isInteger(this.charCounter),()=>le(this,m,D).call(this,this.charCounter))}
      </div>
    </div>`}};m=new WeakSet;D=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",h`<gds-badge variant="${t}">${e}</gds-badge>`};v.styles=[ie];_([d({type:Number})],v.prototype,"charCounter",2);_([d()],v.prototype,"validationMessage",2);v=_([k("gds-form-control-footer")],v);var de=Object.defineProperty,he=Object.getOwnPropertyDescriptor,N=e=>{throw TypeError(e)},o=(e,t,s,l)=>{for(var a=l>1?void 0:l?he(t,s):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(a=(l?p(t,s,a):p(a))||a);return l&&a&&de(t,s,a),a},P=(e,t,s)=>t.has(e)||N("Cannot "+s),u=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(P(e,t,"access private method"),s),i,W,G,$,w,C,z,E,F,L,x,T,S,b,R,Y,B,H,I;let r=class extends ee{constructor(){super(),g(this,i),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,g(this,$,e=>["type","placeholder","required"].includes(e.name)),g(this,w,e=>{const t=e.target;this.value=t.value}),g(this,C,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),g(this,z,()=>{this.elTextareaAsync.then(e=>e.focus())}),g(this,E,()=>{this.value=""}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),n(this,i,x).call(this)}disconnectedCallback(){super.disconnectedCallback(),n(this,i,x).call(this)}render(){return h`${K(this.variant,[["default",()=>n(this,i,W).call(this)],["floating-label",()=>n(this,i,G).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};i=new WeakSet;W=function(){return h`
      <gds-form-control-header>
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

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
        @click=${u(this,z)}
        cursor="text"
      >
        ${n(this,i,F).call(this)} ${n(this,i,B).call(this)}

        <gds-flex gap="xs" align-items="center" block-size="l">
          ${n(this,i,H).call(this)} ${n(this,i,L).call(this)}
        </gds-flex>
        ${f(this.resize==="auto",()=>n(this,i,R).call(this),()=>y)}
      </gds-flex>

      <gds-form-control-footer
        .charCounter=${u(this,i,I)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};G=function(){return y};$=new WeakMap;w=new WeakMap;C=new WeakMap;z=new WeakMap;E=new WeakMap;F=function(){return h` <slot name="lead"></slot> `};L=function(){return h`
      <slot name="trail" @slotchange=${n(this,i,Y)}></slot>
    `};x=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,i,T).bind(this))};T=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,i,S).bind(this)),document.addEventListener("mouseup",n(this,i,b).bind(this))};S=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};b=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,i,S).bind(this)),document.removeEventListener("mouseup",n(this,i,b).bind(this))};R=function(){return h`
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
    `};Y=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(l=>{var a;return l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&((a=l.textContent)==null?void 0:a.trim())!==""})};B=function(){return h`
      <textarea
        @input=${u(this,w)}
        @change=${u(this,C)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${te(u(this,$))}
      ></textarea>
    `};H=function(){return this.clearable&&this.value.length>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${X("Clear input")}"
          @click=${u(this,E)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:y};I=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[Q,se];o([d()],r.prototype,"value",2);o([d()],r.prototype,"label",2);o([Z({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],r.prototype,"rows",2);o([M()],r.prototype,"lines",2);o([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);o([d({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([d({type:Boolean})],r.prototype,"clearable",2);o([d()],r.prototype,"resize",2);o([d({type:Number})],r.prototype,"maxlength",2);o([d({type:String})],r.prototype,"variant",2);o([J("textarea")],r.prototype,"elTextareaAsync",2);o([j("textarea")],r.prototype,"elTextarea",2);o([M()],r.prototype,"trailSlotOccupied",2);o([U("value")],r.prototype,"_setAutoHeight",1);r=o([k("gds-textarea"),q()],r);
