import{m as F}from"./runtime-CMQcyTl6.js";import{l as O}from"./localized-decorator-iufJoRiP.js";import{n as c,g as N,h as d}from"./custom-element-scoping-BEGY3AqQ.js";import{a as P}from"./query-p8xgzTDt.js";import{r as G}from"./query-async-MEroNOeJ.js";import{r as Y}from"./choose-Dh3k58u9.js";import{n as q}from"./when-BR7zwNJC.js";import{i as B,E as b}from"./lit-element-C_s9q329.js";import{t as I}from"./tokens.style-CFvqdzpw.js";import{w as X}from"./watch-tFciLXSI.js";import{s as V}from"./style-expression-property-D7o6hSzp.js";import{a as J,f as K}from"./button-DX0_HimP.js";import"./field-base-sr8FsR41.js";import"./cross-small-BPSJp46U.js";import"./flex-CV3X_Fty.js";const Q=B`
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

      &::before {
        content: '';
        position: absolute;
        background: currentColor;
        inset: 0;
        margin-inline: auto;
        height: 1px;
        width: 22px;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
  }
`;var U=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},l=(t,s,i,g)=>{for(var p=g>1?void 0:g?Z(s,i):s,v=t.length-1,_;v>=0;v--)(_=t[v])&&(p=(g?_(s,i,p):_(p))||p);return g&&p&&U(s,i,p),p},z=(t,s,i)=>s.has(t)||C("Cannot "+i),e=(t,s,i)=>(z(t,s,"read from private field"),i?i.call(t):s.get(t)),o=(t,s,i)=>s.has(t)?C("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),h=(t,s,i)=>(z(t,s,"access private method"),i),r,M,k,x,y,w,E,$,T,S,A,L,a,f,m,u,W,D,H,R;let n=class extends J{constructor(){super(),o(this,r),this.rows=4,this.supportingText="",this.clearable=!1,this.resize="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",o(this,x,t=>["type","placeholder","required"].includes(t.name)),o(this,y,t=>{const s=t.target;this.value=s.value}),o(this,w,t=>{const s=t.target;this.value=s.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),o(this,E,()=>{this.elTextareaAsync.then(t=>t.focus())}),o(this,$,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),o(this,a,{isDragging:!1,startMouseY:0,lines:this.rows,deltaLines:0,lineHeight:0}),o(this,f,t=>{t.preventDefault(),e(this,a).isDragging=!0,e(this,a).startMouseY=t.clientY,e(this,a).lineHeight=parseFloat(getComputedStyle(this.elTextarea).lineHeight),document.addEventListener("mousemove",e(this,m)),document.addEventListener("mouseup",e(this,u))}),o(this,m,t=>{if(!e(this,a).isDragging)return;const s=t.clientY-e(this,a).startMouseY;e(this,a).deltaLines=Math.round(s/e(this,a).lineHeight),this.elTextareaAsync.then(i=>{i==null||i.style.setProperty("--_lines",(e(this,a).lines+e(this,a).deltaLines).toString())})}),o(this,u,()=>{e(this,a).isDragging=!1,e(this,a).lines+=e(this,a).deltaLines,this.rows=e(this,a).lines,e(this,a).deltaLines=0,document.removeEventListener("mousemove",e(this,m)),document.removeEventListener("mouseup",e(this,u))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),h(this,r,L).call(this)}disconnectedCallback(){super.disconnectedCallback(),e(this,u).call(this)}render(){return d`${Y(this.variant,[["default",()=>h(this,r,M).call(this)],["floating-label",()=>h(this,r,k).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{this.rows=Math.max(this.rows,t.value.split(`
`).length),e(this,a).lines=Number(this.rows),t==null||t.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;M=function(){var t;return d`
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
        @click=${e(this,E)}
        multiline
      >
        ${h(this,r,T).call(this)}
        ${q(this.resize==="auto",()=>h(this,r,W).call(this),()=>b)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${e(this,r,R)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};k=function(){return b};x=new WeakMap;y=new WeakMap;w=new WeakMap;E=new WeakMap;$=new WeakMap;T=function(){return[h(this,r,S).call(this),h(this,r,D).call(this),h(this,r,H).call(this),h(this,r,A).call(this)].map(s=>d`${s}`)};S=function(){return d`<slot slot="lead" name="lead"></slot>`};A=function(){return d`<slot slot="trail" name="trail"></slot>`};L=function(){const t=this.querySelector(".resize-handle");t&&t.addEventListener("mousedown",e(this,f))};a=new WeakMap;f=new WeakMap;m=new WeakMap;u=new WeakMap;W=function(){return d`
      <div class="resize-handle" @mousedown=${e(this,f)}></div>
    `};D=function(){return d`
      <textarea
        @input=${e(this,y)}
        @change=${e(this,w)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${K(e(this,x))}
      ></textarea>
    `};H=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${e(this,$)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:b};R=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};n.styles=[I,Q];l([V({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,s)=>`min-height: calc(1lh * ${s[0]});`})],n.prototype,"rows",2);l([c({attribute:"supporting-text"})],n.prototype,"supportingText",2);l([c({type:Boolean})],n.prototype,"clearable",2);l([c()],n.prototype,"resize",2);l([c({type:Number})],n.prototype,"maxlength",2);l([c({type:String})],n.prototype,"variant",2);l([G("textarea")],n.prototype,"elTextareaAsync",2);l([P("textarea")],n.prototype,"elTextarea",2);l([X("value")],n.prototype,"_setAutoHeight",1);n=l([N("gds-textarea"),O()],n);
