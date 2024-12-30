import{m as F}from"./runtime-CMQcyTl6.js";import{l as P}from"./localized-decorator-B8fm5KIw.js";import{n as c,r as R,g as G,h as u}from"./custom-element-scoping-b4lD3laR.js";import{a as Y}from"./query-p8xgzTDt.js";import{r as B}from"./query-async-MEroNOeJ.js";import{r as I}from"./field-base-M7Yks-hH.js";import{n as X}from"./when-BR7zwNJC.js";import{i as q,E as _}from"./lit-element-C_s9q329.js";import{t as V}from"./tokens.style-B6Zq2CtY.js";import{w as J}from"./watch-tFciLXSI.js";import{s as K}from"./style-expression-property-CYg4CGI6.js";import{a as Q,f as U}from"./button-5hkoQ3qT.js";import"./cross-small-CgIxxlLH.js";import"./flex-DnAdyWkx.js";const Z=q`
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
`;var j=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},o=(t,e,i,p)=>{for(var h=p>1?void 0:p?tt(e,i):e,v=t.length-1,b;v>=0;v--)(b=t[v])&&(h=(p?b(e,i,h):b(h))||h);return p&&h&&j(e,i,h),h},T=(t,e,i)=>e.has(t)||C("Cannot "+i),s=(t,e,i)=>(T(t,e,"read from private field"),i?i.call(t):e.get(t)),d=(t,e,i)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),l=(t,e,i)=>(T(t,e,"access private method"),i),n,z,M,y,w,E,S,$,k,A,L,x,a,f,g,m,N,D,O,W,H;let r=class extends Q{constructor(){super(),d(this,n),this.value="",this.label="",this.rows=4,this.supportingText="",this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,d(this,y,t=>["type","placeholder","required"].includes(t.name)),d(this,w,t=>{const e=t.target;this.value=e.value}),d(this,E,t=>{const e=t.target;this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,S,()=>{this.elTextareaAsync.then(t=>t.focus())}),d(this,$,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),d(this,a,{isDragging:!1,startMouseY:0,lines:this.rows,deltaLines:0,lineHeight:0}),d(this,f,t=>{t.preventDefault(),s(this,a).isDragging=!0,s(this,a).startMouseY=t.clientY,s(this,a).lineHeight=parseFloat(getComputedStyle(this.elTextarea).lineHeight),document.addEventListener("mousemove",s(this,g)),document.addEventListener("mouseup",s(this,m))}),d(this,g,t=>{if(!s(this,a).isDragging)return;const e=t.clientY-s(this,a).startMouseY;s(this,a).deltaLines=Math.round(e/s(this,a).lineHeight),this.elTextareaAsync.then(i=>{i==null||i.style.setProperty("--_lines",(s(this,a).lines+s(this,a).deltaLines).toString())})}),d(this,m,()=>{s(this,a).isDragging=!1,s(this,a).lines+=s(this,a).deltaLines,this.rows=s(this,a).lines,s(this,a).deltaLines=0,document.removeEventListener("mousemove",s(this,g)),document.removeEventListener("mouseup",s(this,m))}),this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),l(this,n,x).call(this)}disconnectedCallback(){super.disconnectedCallback(),l(this,n,x).call(this)}render(){return u`${I(this.variant,[["default",()=>l(this,n,z).call(this)],["floating-label",()=>l(this,n,M).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{this.rows=Math.max(this.rows,t.value.split(`
`).length),s(this,a).lines=Number(this.rows),t==null||t.style.setProperty("--_lines",this.rows.toString())})}};n=new WeakSet;z=function(){var t;return u`
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
        ${l(this,n,k).call(this)}
        ${X(this.resize==="auto",()=>l(this,n,N).call(this),()=>_)}
      </gds-field-base>

      <gds-form-control-footer
        .charCounter=${s(this,n,H)&&this.maxlength-(((t=this.value)==null?void 0:t.length)||0)}
        .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
      ></gds-form-control-footer>
    `};M=function(){return _};y=new WeakMap;w=new WeakMap;E=new WeakMap;S=new WeakMap;$=new WeakMap;k=function(){return[l(this,n,A).call(this),l(this,n,O).call(this),l(this,n,W).call(this),l(this,n,L).call(this)].map(e=>u`${e}`)};A=function(){return u` <slot slot="lead" name="lead"></slot> `};L=function(){return u`
      <slot
        slot="trail"
        name="trail"
        @slotchange=${l(this,n,D)}
      ></slot>
    `};x=function(){const t=this.querySelector(".resize-handle");t&&t.addEventListener("mousedown",s(this,f))};a=new WeakMap;f=new WeakMap;g=new WeakMap;m=new WeakMap;N=function(){return u`
      <div class="resize-handle" @mousedown=${s(this,f)}></div>
    `};D=function(t){const i=t.target.assignedNodes({flatten:!0});this.trailSlotOccupied=i.length>0&&i.some(p=>{var h;return p.nodeType===Node.ELEMENT_NODE||p.nodeType===Node.TEXT_NODE&&((h=p.textContent)==null?void 0:h.trim())!==""})};O=function(){return u`
      <textarea
        @input=${s(this,w)}
        @change=${s(this,E)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${U(s(this,y))}
      ></textarea>
    `};W=function(){var t;return this.clearable&&(((t=this.value)==null?void 0:t.length)||0)>0?u`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${F("Clear input")}"
          @click=${s(this,$)}
          slot="action"
        >
          <gds-icon-cross-small />
        </gds-button>
      `:_};H=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[V,Z];o([c()],r.prototype,"value",2);o([c()],r.prototype,"label",2);o([K({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],r.prototype,"rows",2);o([c({attribute:"supporting-text"})],r.prototype,"supportingText",2);o([c({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([c({type:Boolean})],r.prototype,"clearable",2);o([c()],r.prototype,"resize",2);o([c({type:Number})],r.prototype,"maxlength",2);o([c({type:String})],r.prototype,"variant",2);o([B("textarea")],r.prototype,"elTextareaAsync",2);o([Y("textarea")],r.prototype,"elTextarea",2);o([R()],r.prototype,"trailSlotOccupied",2);o([J("value")],r.prototype,"_setAutoHeight",1);r=o([G("gds-textarea"),P()],r);
