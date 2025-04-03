import{m as G}from"./runtime-BL31MtW8.js";import{l as O}from"./localized-decorator-DtmrKsyB.js";import{n as c,h as n,g as W}from"./custom-element-scoping-b4c89-hi.js";import{a as C}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{r as q}from"./choose-Dh3k58u9.js";import{n as z}from"./when-BR7zwNJC.js";import{i as L,E as m}from"./lit-element-Bx14lxc-.js";import{G as N}from"./field-base.component-u2-leZ5O.js";import{G as I,a as D}from"./form-control-header.component-CS8g-3iX.js";import{t as U}from"./tokens.style-BScLRl5F.js";import{w as R}from"./watch-tFciLXSI.js";import{r as X}from"./resize-observer-B9k8v2TZ.js";import{s as V,d as J,w as K,b as Q}from"./declarative-layout-mixins-BB4ZLY5n.js";import{a as Y,G as Z,f as j}from"./button.component-Z9yRxVMZ.js";import{I as ee}from"./cross-large.component-BYEseUaL.js";const te=L`
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
      overflow: auto;
      outline: none;
      padding: unset;
      width: 100%;
      min-width: 20ch;
      padding-inline-end: calc(var(--gds-space-xs) + var(--padding-inline-end));

      &.resize-manual {
        resize: vertical;
      }

      &.resize-auto {
        resize: none;
      }

      &.resize-false {
        resize: none;
      }
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
  }

  @layer simplified {
  }
`;var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},a=(e,t,s,l)=>{for(var o=l>1?void 0:l?ie(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(l?g(t,s,o):g(o))||o);return l&&o&&se(t,s,o),o},S=(e,t,s)=>t.has(e)||$("Cannot "+s),d=(e,t,s)=>(S(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s)=>(S(e,t,"access private method"),s),r,T,A,_,w,v,y,b,x,E,P,k,M,F,B;let i=class extends Y{constructor(){super(),h(this,r),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.plain=!1,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},h(this,_,e=>["type","placeholder","required"].includes(e.name)),h(this,w,e=>{const t=e.target;this.value=t.value}),h(this,v,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),h(this,y,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),h(this,b,()=>{this.elTextareaAsync.then(e=>e.focus())}),h(this,x,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#clear-button")}test_getFieldElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{var s;const e=(s=this.fieldBase)==null?void 0:s.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const l=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${l.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return n`${q(this.variant,[["default",()=>p(this,r,T).call(this)],["floating-label",()=>p(this,r,A).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),l=e.scrollHeight,o=Math.ceil(l/s),u=this._initialRows??this._defaultRows;this.rows=Math.max(u,o),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};r=new WeakSet;T=function(){return n`
      ${z(!this.plain,()=>n`<gds-form-control-header class="size-${this.size}">
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${d(this,b)}
        multiline
      >
        ${p(this,r,E).call(this)}
      </gds-field-base>

      ${z(!this.plain,()=>{var e;return n`<gds-form-control-footer
            lass="size-${this.size}"
            .charCounter=${d(this,r,B)&&this.maxlength-(((e=this.value)==null?void 0:e.length)||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`})}
    `};A=function(){return m};_=new WeakMap;w=new WeakMap;v=new WeakMap;y=new WeakMap;b=new WeakMap;x=new WeakMap;E=function(){return[p(this,r,P).call(this),p(this,r,M).call(this),p(this,r,F).call(this),p(this,r,k).call(this)].map(t=>n`${t}`)};P=function(){return n`<slot slot="lead" name="lead"></slot>`};k=function(){return n`<slot slot="trail" name="trail"></slot>`};M=function(){return n`
      <textarea
        @input=${d(this,w)}
        @change=${d(this,v)}
        @paste=${d(this,y)}
        .value=${this.value}
        id="input"
        class="resize-${this.resizable}"
        aria-label=${this.plain&&this.label||m}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${j(d(this,_))}
      ></textarea>
    `};F=function(){var e;return this.clearable&&(((e=this.value)==null?void 0:e.length)||0)>0?n`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${G("Clear input")}"
          @click=${d(this,x)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:m};B=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};i.styles=[U,te];a([V({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],i.prototype,"rows",2);a([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);a([c({type:Boolean})],i.prototype,"clearable",2);a([c({type:String})],i.prototype,"resizable",2);a([c({type:Number})],i.prototype,"maxlength",2);a([c({type:String})],i.prototype,"variant",2);a([c({type:String})],i.prototype,"size",2);a([c({type:Boolean})],i.prototype,"plain",2);a([H("textarea")],i.prototype,"elTextareaAsync",2);a([C("textarea")],i.prototype,"elTextarea",2);a([C("gds-field-base")],i.prototype,"fieldBase",2);a([X()],i.prototype,"_handleResize",1);a([R("value")],i.prototype,"_setAutoHeight",1);a([R("rows")],i.prototype,"_handleRowsChange",1);i=a([O()],i);let f=class extends J(K(Q(i))){};f=a([W("gds-textarea",{dependsOn:[I,D,Z,N,ee]})],f);f.define();
