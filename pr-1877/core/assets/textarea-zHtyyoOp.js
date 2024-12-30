import{m as P}from"./runtime-CMQcyTl6.js";import{l as R}from"./localized-decorator-B8fm5KIw.js";import{n as h,r as $,g as F,h as d}from"./custom-element-scoping-b4lD3laR.js";import{a as G}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as B}from"./field-base-CPsso550.js";import{n as I}from"./when-BR7zwNJC.js";import{i as X,E as v}from"./lit-element-C_s9q329.js";import{t as q}from"./tokens.style-B6Zq2CtY.js";import{w as V}from"./watch-tFciLXSI.js";import{s as J}from"./style-expression-property-CYg4CGI6.js";import{a as K,f as Q}from"./button-C0V---aq.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const U=X`
  @layer base, simplified;

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

    [align-items] ::part(_button) {
      margin-top: calc(var(--gds-space-2xs) * -1);
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
`;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},r=(t,e,s,l)=>{for(var o=l>1?void 0:l?j(e,s):e,u=t.length-1,g;u>=0;u--)(g=t[u])&&(o=(l?g(e,s,o):g(o))||o);return l&&o&&Z(e,s,o),o},T=(t,e,s)=>e.has(t)||C("Cannot "+s),c=(t,e,s)=>(T(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),a=(t,e,s)=>(T(t,e,"access private method"),s),i,z,M,b,x,_,S,y,A,k,D,f,w,E,m,N,O,L,W,Y;let n=class extends K{constructor(){super(),p(this,i),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,p(this,b,t=>["type","placeholder","required"].includes(t.name)),p(this,x,t=>{const e=t.target;this.value=e.value}),p(this,_,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),p(this,S,()=>{this.elTextareaAsync.then(t=>t.focus())}),p(this,y,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),a(this,i,f).call(this)}disconnectedCallback(){super.disconnectedCallback(),a(this,i,f).call(this)}render(){return d`${B(this.variant,[["default",()=>a(this,i,z).call(this)],["floating-label",()=>a(this,i,M).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{const e=(t.value.split(`
`).length||1).toString();t==null||t.style.setProperty("--_lines",e.toString())})}};i=new WeakSet;z=function(){var t;return d`
      <gds-form-control-header>
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-field-base
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        multiline
      >
        ${a(this,i,A).call(this)}
        ${I(this.resize==="auto",()=>a(this,i,N).call(this),()=>v)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${c(this,i,Y)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};M=function(){return v};b=new WeakMap;x=new WeakMap;_=new WeakMap;S=new WeakMap;y=new WeakMap;A=function(){return[a(this,i,k).call(this),a(this,i,L).call(this),a(this,i,W).call(this),a(this,i,D).call(this)].map(e=>d`${e}`)};k=function(){return d` <slot slot="lead" name="lead"></slot> `};D=function(){return d`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${a(this,i,O)}
      ></slot>
    `};f=function(){const t=this.querySelector(".resize-handle");t&&t.addEventListener("mousedown",a(this,i,w).bind(this))};w=function(t){t.preventDefault(),this.isDragging=!0,this.lastMouseY=t.clientY,document.addEventListener("mousemove",a(this,i,E).bind(this)),document.addEventListener("mouseup",a(this,i,m).bind(this))};E=function(t){if(!this.isDragging)return;const e=t.clientY-this.lastMouseY;Math.abs(e)>=20&&(e>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=t.clientY)};m=function(){this.isDragging=!1,document.removeEventListener("mousemove",a(this,i,E).bind(this)),document.removeEventListener("mouseup",a(this,i,m).bind(this))};N=function(){return d`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${a(this,i,w)}
      ></gds-container>
    `};O=function(t){const s=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(l=>{var o;return l.nodeType===Node.ELEMENT_NODE||l.nodeType===Node.TEXT_NODE&&((o=l.textContent)==null?void 0:o.trim())!==""})};L=function(){return d`
      <textarea
        @input=${c(this,x)}
        @change=${c(this,_)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${Q(c(this,b))}
      ></textarea>
    `};W=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${P("Clear input")}"
          @click=${c(this,y)}
          slot="action"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:v};Y=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};n.styles=[q,U];r([h()],n.prototype,"value",2);r([h()],n.prototype,"label",2);r([J({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],n.prototype,"rows",2);r([$()],n.prototype,"lines",2);r([h({attribute:"supporting-text"})],n.prototype,"supportingText",2);r([h({attribute:"disabled",type:Boolean,reflect:!0})],n.prototype,"disabled",2);r([h({type:Boolean})],n.prototype,"clearable",2);r([h()],n.prototype,"resize",2);r([h({type:Number})],n.prototype,"maxlength",2);r([h({type:String})],n.prototype,"variant",2);r([H("textarea")],n.prototype,"elTextareaAsync",2);r([G("textarea")],n.prototype,"elTextarea",2);r([$()],n.prototype,"trailSlotOccupied",2);r([V("value")],n.prototype,"_setAutoHeight",1);n=r([F("gds-textarea"),R()],n);
