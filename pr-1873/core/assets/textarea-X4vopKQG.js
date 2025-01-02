import{m as F}from"./runtime-CMQcyTl6.js";import{l as O}from"./localized-decorator-B8fm5KIw.js";import{n as d,g as N,h as p}from"./custom-element-scoping-b4lD3laR.js";import{a as P}from"./query-p8xgzTDt.js";import{r as G}from"./query-async-MEroNOeJ.js";import{r as Y}from"./field-base-BRBkqvTI.js";import{n as B}from"./when-BR7zwNJC.js";import{i as q,E as x}from"./lit-element-C_s9q329.js";import{t as I}from"./tokens.style-B6Zq2CtY.js";import{w as X}from"./watch-tFciLXSI.js";import{s as V}from"./style-expression-property-CYg4CGI6.js";import{a as J,f as K}from"./button-E0snPoHF.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const Q=q`
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
      position: absolute;
      inset: auto auto -10px 0;
      width: 100%;
      height: 20px;
      cursor: row-resize;
      z-index: 2;
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
`;var U=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},n=(e,s,i,g)=>{for(var u=g>1?void 0:g?Z(s,i):s,v=e.length-1,b;v>=0;v--)(b=e[v])&&(u=(g?b(s,i,u):b(u))||u);return g&&u&&U(s,i,u),u},C=(e,s,i)=>s.has(e)||z("Cannot "+i),t=(e,s,i)=>(C(e,s,"read from private field"),i?i.call(e):s.get(e)),l=(e,s,i)=>s.has(e)?z("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,i),h=(e,s,i)=>(C(e,s,"access private method"),i),o,M,k,_,y,w,E,$,T,S,A,L,a,f,m,c,W,D,H,R;let r=class extends J{constructor(){super(),l(this,o),this.value="",this.label="",this.rows=4,this.supportingText="",this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",l(this,_,e=>["type","placeholder","required"].includes(e.name)),l(this,y,e=>{const s=e.target;this.value=s.value}),l(this,w,e=>{const s=e.target;this.value=s.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),l(this,E,()=>{this.elTextareaAsync.then(e=>e.focus())}),l(this,$,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),l(this,a,{isDragging:!1,startMouseY:0,lines:this.rows,deltaLines:0,lineHeight:0}),l(this,f,e=>{e.preventDefault(),t(this,a).isDragging=!0,t(this,a).startMouseY=e.clientY,t(this,a).lineHeight=parseFloat(getComputedStyle(this.elTextarea).lineHeight),document.addEventListener("mousemove",t(this,m)),document.addEventListener("mouseup",t(this,c))}),l(this,m,e=>{if(!t(this,a).isDragging)return;const s=e.clientY-t(this,a).startMouseY;t(this,a).deltaLines=Math.round(s/t(this,a).lineHeight),this.elTextareaAsync.then(i=>{i==null||i.style.setProperty("--_lines",(t(this,a).lines+t(this,a).deltaLines).toString())})}),l(this,c,()=>{t(this,a).isDragging=!1,t(this,a).lines+=t(this,a).deltaLines,this.rows=t(this,a).lines,t(this,a).deltaLines=0,document.removeEventListener("mousemove",t(this,m)),document.removeEventListener("mouseup",t(this,c))}),this.resize="auto"}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),h(this,o,L).call(this)}disconnectedCallback(){super.disconnectedCallback(),t(this,c).call(this)}render(){return p`${Y(this.variant,[["default",()=>h(this,o,M).call(this)],["floating-label",()=>h(this,o,k).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{this.rows=Math.max(this.rows,e.value.split(`
`).length),t(this,a).lines=Number(this.rows),e==null||e.style.setProperty("--_lines",this.rows.toString())})}};o=new WeakSet;M=function(){var e;return p`
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
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${t(this,E)}
        multiline
      >
        ${h(this,o,T).call(this)}
        ${B(this.resize==="auto",()=>h(this,o,W).call(this),()=>x)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${t(this,o,R)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};k=function(){return x};_=new WeakMap;y=new WeakMap;w=new WeakMap;E=new WeakMap;$=new WeakMap;T=function(){return[h(this,o,S).call(this),h(this,o,D).call(this),h(this,o,H).call(this),h(this,o,A).call(this)].map(s=>p`${s}`)};S=function(){return p`<slot slot="lead" name="lead"></slot>`};A=function(){return p`<slot slot="trail" name="trail"></slot>`};L=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",t(this,f))};a=new WeakMap;f=new WeakMap;m=new WeakMap;c=new WeakMap;W=function(){return p`
      <div class="resize-handle" @mousedown=${t(this,f)}></div>
    `};D=function(){return p`
      <textarea
        @input=${t(this,y)}
        @change=${t(this,w)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${K(t(this,_))}
      ></textarea>
    `};H=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?p`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${t(this,$)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:x};R=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[I,Q];n([d()],r.prototype,"value",2);n([d()],r.prototype,"label",2);n([V({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,s)=>`min-height: calc(1lh * ${s[0]});`})],r.prototype,"rows",2);n([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([d({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);n([d({type:Boolean})],r.prototype,"clearable",2);n([d()],r.prototype,"resize",2);n([d({type:Number})],r.prototype,"maxlength",2);n([d({type:String})],r.prototype,"variant",2);n([G("textarea")],r.prototype,"elTextareaAsync",2);n([P("textarea")],r.prototype,"elTextarea",2);n([X("value")],r.prototype,"_setAutoHeight",1);r=n([N("gds-textarea"),O()],r);
