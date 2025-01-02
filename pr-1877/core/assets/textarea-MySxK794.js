import{m as F}from"./runtime-CMQcyTl6.js";import{l as P}from"./localized-decorator-B8fm5KIw.js";import{n as c,r as R,g as G,h as u}from"./custom-element-scoping-b4lD3laR.js";import{a as Y}from"./query-p8xgzTDt.js";import{r as B}from"./query-async-MEroNOeJ.js";import{r as I}from"./field-base-C3nKzmfH.js";import{n as X}from"./when-BR7zwNJC.js";import{i as q,E as x}from"./lit-element-C_s9q329.js";import{t as V}from"./tokens.style-B6Zq2CtY.js";import{w as J}from"./watch-tFciLXSI.js";import{s as K}from"./style-expression-property-CYg4CGI6.js";import{a as Q,f as U}from"./button-DnilZTBH.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const Z=q`
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
`;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},n=(t,s,i,p)=>{for(var l=p>1?void 0:p?tt(s,i):s,v=t.length-1,b;v>=0;v--)(b=t[v])&&(l=(p?b(s,i,l):b(l))||l);return p&&l&&j(s,i,l),l},T=(t,s,i)=>s.has(t)||C("Cannot "+i),e=(t,s,i)=>(T(t,s,"read from private field"),i?i.call(t):s.get(t)),h=(t,s,i)=>s.has(t)?C("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),d=(t,s,i)=>(T(t,s,"access private method"),i),o,z,M,_,y,w,E,$,k,S,A,L,a,f,m,g,N,D,O,W,H;let r=class extends Q{constructor(){super(),h(this,o),this.value="",this.label="",this.rows=4,this.supportingText="",this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,h(this,_,t=>["type","placeholder","required"].includes(t.name)),h(this,y,t=>{const s=t.target;this.value=s.value}),h(this,w,t=>{const s=t.target;this.value=s.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,E,()=>{this.elTextareaAsync.then(t=>t.focus())}),h(this,$,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),h(this,a,{isDragging:!1,startMouseY:0,lines:this.rows,deltaLines:0,lineHeight:0}),h(this,f,t=>{t.preventDefault(),e(this,a).isDragging=!0,e(this,a).startMouseY=t.clientY,e(this,a).lineHeight=parseFloat(getComputedStyle(this.elTextarea).lineHeight),document.addEventListener("mousemove",e(this,m)),document.addEventListener("mouseup",e(this,g))}),h(this,m,t=>{if(!e(this,a).isDragging)return;const s=t.clientY-e(this,a).startMouseY;e(this,a).deltaLines=Math.round(s/e(this,a).lineHeight),this.elTextareaAsync.then(i=>{i==null||i.style.setProperty("--_lines",(e(this,a).lines+e(this,a).deltaLines).toString())})}),h(this,g,()=>{e(this,a).isDragging=!1,e(this,a).lines+=e(this,a).deltaLines,this.rows=e(this,a).lines,e(this,a).deltaLines=0,document.removeEventListener("mousemove",e(this,m)),document.removeEventListener("mouseup",e(this,g))}),this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),d(this,o,L).call(this)}disconnectedCallback(){super.disconnectedCallback(),e(this,g).call(this)}render(){return u`${I(this.variant,[["default",()=>d(this,o,z).call(this)],["floating-label",()=>d(this,o,M).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{this.rows=Math.max(this.rows,t.value.split(`
`).length),e(this,a).lines=Number(this.rows),t==null||t.style.setProperty("--_lines",this.rows.toString())})}};o=new WeakSet;z=function(){var t;return u`
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
        @click=${e(this,E)}
        multiline
      >
        ${d(this,o,k).call(this)}
        ${X(this.resize==="auto",()=>d(this,o,N).call(this),()=>x)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${e(this,o,H)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};M=function(){return x};_=new WeakMap;y=new WeakMap;w=new WeakMap;E=new WeakMap;$=new WeakMap;k=function(){return[d(this,o,S).call(this),d(this,o,O).call(this),d(this,o,W).call(this),d(this,o,A).call(this)].map(s=>u`${s}`)};S=function(){return u` <slot slot="lead" name="lead"></slot> `};A=function(){return u`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${d(this,o,D)}
      ></slot>
    `};L=function(){const t=this.querySelector(".resize-handle");t&&t.addEventListener("mousedown",e(this,f))};a=new WeakMap;f=new WeakMap;m=new WeakMap;g=new WeakMap;N=function(){return u`
      <div class="resize-handle" @mousedown=${e(this,f)}></div>
    `};D=function(t){const i=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=i.length>0&&i.some(p=>{var l;return p.nodeType===Node.ELEMENT_NODE||p.nodeType===Node.TEXT_NODE&&((l=p.textContent)==null?void 0:l.trim())!==""})};O=function(){return u`
      <textarea
        @input=${e(this,y)}
        @change=${e(this,w)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${U(e(this,_))}
      ></textarea>
    `};W=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?u`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${e(this,$)}
          slot="action"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:x};H=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[V,Z];n([c()],r.prototype,"value",2);n([c()],r.prototype,"label",2);n([K({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,s)=>`min-height: calc(1lh * ${s[0]});`})],r.prototype,"rows",2);n([c({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([c({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);n([c({type:Boolean})],r.prototype,"clearable",2);n([c()],r.prototype,"resize",2);n([c({type:Number})],r.prototype,"maxlength",2);n([c({type:String})],r.prototype,"variant",2);n([B("textarea")],r.prototype,"elTextareaAsync",2);n([Y("textarea")],r.prototype,"elTextarea",2);n([R()],r.prototype,"trailSlotOccupied",2);n([J("value")],r.prototype,"_setAutoHeight",1);r=n([G("gds-textarea"),P()],r);
