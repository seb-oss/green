import{m as Y}from"./runtime-CMQcyTl6.js";import{l as P}from"./localized-decorator-B8fm5KIw.js";import{n as l,r as z,g as R,h}from"./custom-element-scoping-b4lD3laR.js";import{a as G}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as B}from"./form-control-footer-RoTPdVQh.js";import{n as F}from"./when-BR7zwNJC.js";import{i as I,E as m}from"./lit-element-C_s9q329.js";import{t as X}from"./tokens.style-Y0rrifyK.js";import{w as q}from"./watch-tFciLXSI.js";import{s as V}from"./style-expression-property-CYg4CGI6.js";import{a as J,f as K}from"./button-C5Gipx1b.js";import"./cross-small-CgIxxlLH.js";import"./flex-Bsn6VNzj.js";const Q=I`
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
`;var U=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},n=(e,t,s,d)=>{for(var o=d>1?void 0:d?Z(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(d?g(t,s,o):g(o))||o);return d&&o&&U(t,s,o),o},k=(e,t,s)=>t.has(e)||T("Cannot "+s),p=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),a=(e,t,s)=>(k(e,t,"access private method"),s),i,C,S,x,b,y,_,w,M,A,f,$,E,v,O,D,N,L,W;let r=class extends J{constructor(){super(),c(this,i),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,c(this,x,e=>["type","placeholder","required"].includes(e.name)),c(this,b,e=>{const t=e.target;this.value=t.value}),c(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),c(this,_,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,w,()=>{this.value=""}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),a(this,i,f).call(this)}disconnectedCallback(){super.disconnectedCallback(),a(this,i,f).call(this)}render(){return h`${B(this.variant,[["default",()=>a(this,i,C).call(this)],["floating-label",()=>a(this,i,S).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};i=new WeakSet;C=function(){return h`
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
        @click=${p(this,_)}
        cursor="text"
      >
        ${a(this,i,M).call(this)} ${a(this,i,N).call(this)}

        <gds-flex gap="xs" align-items="center" block-size="l">
          ${a(this,i,L).call(this)} ${a(this,i,A).call(this)}
        </gds-flex>
        ${F(this.resize==="auto",()=>a(this,i,O).call(this),()=>m)}
      </gds-flex>

      <gds-form-control-footer
        .charCounter=${p(this,i,W)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};S=function(){return m};x=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;M=function(){return h` <slot name="lead"></slot> `};A=function(){return h`
      <slot name="trail" @slotchange=${a(this,i,D)}></slot>
    `};f=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",a(this,i,$).bind(this))};$=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",a(this,i,E).bind(this)),document.addEventListener("mouseup",a(this,i,v).bind(this))};E=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};v=function(){this.isDragging=!1,document.removeEventListener("mousemove",a(this,i,E).bind(this)),document.removeEventListener("mouseup",a(this,i,v).bind(this))};O=function(){return h`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${a(this,i,$)}
      ></gds-container>
    `};D=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(d=>{var o;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((o=d.textContent)==null?void 0:o.trim())!==""})};N=function(){return h`
      <textarea
        @input=${p(this,b)}
        @change=${p(this,y)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${K(p(this,x))}
      ></textarea>
    `};L=function(){return this.clearable&&this.value.length>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${Y("Clear input")}"
          @click=${p(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:m};W=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[X,Q];n([l()],r.prototype,"value",2);n([l()],r.prototype,"label",2);n([V({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],r.prototype,"rows",2);n([z()],r.prototype,"lines",2);n([l({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);n([l({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);n([l({type:Boolean})],r.prototype,"clearable",2);n([l()],r.prototype,"resize",2);n([l({type:Number})],r.prototype,"maxlength",2);n([l({type:String})],r.prototype,"variant",2);n([H("textarea")],r.prototype,"elTextareaAsync",2);n([G("textarea")],r.prototype,"elTextarea",2);n([z()],r.prototype,"trailSlotOccupied",2);n([q("value")],r.prototype,"_setAutoHeight",1);r=n([R("gds-textarea"),P()],r);
