import{m as O}from"./runtime-CMQcyTl6.js";import{l as P}from"./localized-decorator-iufJoRiP.js";import{n as g,g as q,h as u}from"./custom-element-scoping-BEGY3AqQ.js";import{a as G}from"./query-p8xgzTDt.js";import{r as N}from"./query-async-MEroNOeJ.js";import{r as Y}from"./choose-Dh3k58u9.js";import{n as B}from"./when-BR7zwNJC.js";import{i as I,E as x}from"./lit-element-C_s9q329.js";import{t as X}from"./tokens.style-CFvqdzpw.js";import{w as V}from"./watch-tFciLXSI.js";import{s as J}from"./style-expression-property-D7o6hSzp.js";import{a as K,f as Q}from"./button-BoBQ5idR.js";import"./field-base-DumaPvjb.js";import"./cross-large-DYI6wi_d.js";import"./flex-CV3X_Fty.js";const U=I`
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
      max-height: calc(1lh * 20);
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
`;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,M=t=>{throw TypeError(t)},l=(t,s,i,p)=>{for(var h=p>1?void 0:p?j(s,i):s,v=t.length-1,_;v>=0;v--)(_=t[v])&&(h=(p?_(s,i,h):_(h))||h);return p&&h&&Z(s,i,h),h},z=(t,s,i)=>s.has(t)||M("Cannot "+i),e=(t,s,i)=>(z(t,s,"read from private field"),i?i.call(t):s.get(t)),o=(t,s,i)=>s.has(t)?M("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),d=(t,s,i)=>(z(t,s,"access private method"),i),r,k,S,b,w,y,E,$,C,T,A,R,H,a,f,m,c,W,L,D,F;let n=class extends K{constructor(){super(),o(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resize="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",o(this,b,t=>["type","placeholder","required"].includes(t.name)),o(this,w,t=>{const s=t.target;this.value=s.value}),o(this,y,t=>{const s=t.target;this.value=s.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),o(this,E,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),o(this,$,()=>{this.elTextareaAsync.then(t=>t.focus())}),o(this,C,()=>{this.value="",this.rows=this._defaultRows,e(this,a).lines=this._defaultRows,this.elTextareaAsync.then(t=>{t==null||t.style.setProperty("--_lines",this._defaultRows.toString())}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),o(this,a,{isDragging:!1,startMouseY:0,lines:this.rows,deltaLines:0,lineHeight:0}),o(this,f,t=>{t.preventDefault(),e(this,a).isDragging=!0,e(this,a).startMouseY=t.clientY,e(this,a).lineHeight=parseFloat(getComputedStyle(this.elTextarea).lineHeight),document.addEventListener("mousemove",e(this,m)),document.addEventListener("mouseup",e(this,c))}),o(this,m,t=>{if(!e(this,a).isDragging)return;const s=t.clientY-e(this,a).startMouseY;e(this,a).deltaLines=Math.round(s/e(this,a).lineHeight),this.elTextareaAsync.then(i=>{i==null||i.style.setProperty("--_lines",(e(this,a).lines+e(this,a).deltaLines).toString())})}),o(this,c,()=>{e(this,a).isDragging=!1,e(this,a).lines+=e(this,a).deltaLines,this.rows=e(this,a).lines,e(this,a).deltaLines=0,document.removeEventListener("mousemove",e(this,m)),document.removeEventListener("mouseup",e(this,c))}),this.value=""}test_getClearButton(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#clear-button")}test_getFieldElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("#field")}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),d(this,r,H).call(this)}disconnectedCallback(){super.disconnectedCallback(),e(this,c).call(this)}render(){return u`${Y(this.variant,[["default",()=>d(this,r,k).call(this)],["floating-label",()=>d(this,r,S).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(t.value==="")this.rows=this._defaultRows;else{const s=getComputedStyle(t),i=parseFloat(s.lineHeight),p=t.scrollHeight,h=Math.ceil(p/i);this.rows=Math.max(this._defaultRows,h)}e(this,a).lines=this.rows,t.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;k=function(){var t;return u`
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
        @click=${e(this,$)}
        multiline
      >
        ${d(this,r,T).call(this)}
        ${B(this.resize==="auto",()=>d(this,r,W).call(this),()=>x)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${e(this,r,F)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};S=function(){return x};b=new WeakMap;w=new WeakMap;y=new WeakMap;E=new WeakMap;$=new WeakMap;C=new WeakMap;T=function(){return[d(this,r,A).call(this),d(this,r,L).call(this),d(this,r,D).call(this),d(this,r,R).call(this)].map(s=>u`${s}`)};A=function(){return u`<slot slot="lead" name="lead"></slot>`};R=function(){return u`<slot slot="trail" name="trail"></slot>`};H=function(){const t=this.querySelector(".resize-handle");t&&t.addEventListener("mousedown",e(this,f))};a=new WeakMap;f=new WeakMap;m=new WeakMap;c=new WeakMap;W=function(){return u`
      <div class="resize-handle" @mousedown=${e(this,f)}></div>
    `};L=function(){return u`
      <textarea
        @input=${e(this,w)}
        @change=${e(this,y)}
        @paste=${e(this,E)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Q(e(this,b))}
      ></textarea>
    `};D=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?u`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${O("Clear input")}"
          @click=${e(this,C)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large />
        </gds-button>
      `:x};F=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};n.styles=[X,U];l([J({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,s)=>`min-height: calc(1lh * ${s[0]});`})],n.prototype,"rows",2);l([g({attribute:"supporting-text"})],n.prototype,"supportingText",2);l([g({type:Boolean})],n.prototype,"clearable",2);l([g()],n.prototype,"resize",2);l([g({type:Number})],n.prototype,"maxlength",2);l([g({type:String})],n.prototype,"variant",2);l([N("textarea")],n.prototype,"elTextareaAsync",2);l([G("textarea")],n.prototype,"elTextarea",2);l([V("value")],n.prototype,"_setAutoHeight",1);n=l([q("gds-textarea"),P()],n);
