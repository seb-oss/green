import{i as M,B as V,U as G,n as r,l as T,$ as m,F as N,L as O,T as H,C as W,a0 as q,d as S,h,A as z,o as d,J as D,a as I,K as L}from"./iframe-C9vl5CI1.js";import{l as U}from"./localized-decorator-DIwM2EAe.js";import{r as X}from"./query-async-DaMAe4cS.js";import{f as J,G as K}from"./form-control-host.style-BxUQK_AO.js";import{G as Q,a as Y}from"./form-control-header.component-Cjf-GzGC.js";import{r as Z}from"./resize-observer-CfkbZofs.js";import{I as j}from"./cross-small.component-DjdHJIwe.js";const tt=M`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
    min-width: 20ch;
    padding-inline-end: calc(
      var(--gds-sys-space-xs) + var(--padding-inline-end)
    );

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
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},i=(t,e,a,o)=>{for(var n=o>1?void 0:o?st(e,a):e,g=t.length-1,y;g>=0;g--)(y=t[g])&&(n=(o?y(e,a,n):y(n))||n);return o&&n&&et(e,a,n),n},w=(t,e,a)=>e.has(t)||A("Cannot "+a),u=(t,e,a)=>(w(t,e,"read from private field"),a?a.call(t):e.get(t)),c=(t,e,a)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),it=(t,e,a,o)=>(w(t,e,"write to private field"),e.set(t,a),a),p=(t,e,a)=>(w(t,e,"access private method"),a),f,l,R,b,v,x,_,C,k,E,B,F,P;let s=class extends q{constructor(){super(),c(this,l),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autocorrect=!1,this.autofocus=!1,this.spellcheck=!0,this.charCounterCallback=at,c(this,f,this.charCounterCallback(this)),this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,b,t=>{const e=t.target;this.value=e.value}),c(this,v,t=>{const e=t.target;this.value=e.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,x,t=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,_,()=>{this.elTextareaAsync.then(t=>t.focus())}),c(this,C,()=>{this.value="",this.elTextareaAsync.then(t=>{if(this.resizable==="manual")t.style.height="";else if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString()),t.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(t){this._getValidityAnchor()?.focus(t)}select(){this._getValidityAnchor()?.select()}setRangeText(...t){this._getValidityAnchor()?.setRangeText(...t),this.value=this._getValidityAnchor()?.value||""}setSelectionRange(...t){this._getValidityAnchor()?.setSelectionRange(...t)}get selectionStart(){return this._getValidityAnchor()?.selectionStart}set selectionStart(t){const e=this._getValidityAnchor();e&&(e.selectionStart=t)}get selectionEnd(){return this._getValidityAnchor()?.selectionEnd}set selectionEnd(t){const e=this._getValidityAnchor();e&&(e.selectionEnd=t)}get selectionDirection(){return this._getValidityAnchor()?.selectionDirection}set selectionDirection(t){const e=this._getValidityAnchor();e&&(e.selectionDirection=t)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const t=this.fieldBase?.shadowRoot;if(!t)return;const e=t.querySelector(".right");if(e){const a=e.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${a.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){if(super.connectedCallback(),this.hasAttribute("rows")){const t=Number(this.rows);Number.isFinite(t)&&t>0&&(this._initialRows=t)}this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return h`
      ${S(!this.plain,()=>h`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
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
        @click=${u(this,_)}
        multiline
      >
        ${p(this,l,k).call(this)}
      </gds-field-base>

      ${S(p(this,l,R).call(this),()=>h`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${u(this,f)}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleValueChange(){it(this,f,this.charCounterCallback(this))}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(t=>{if(this.resizable==="false"){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(t.value===""){const e=this._initialRows??this._defaultRows;this.rows=e,t.style.setProperty("--_lines",e.toString())}else{const e=getComputedStyle(t),a=parseFloat(e.lineHeight),o=this._initialRows??this._defaultRows;if(!Number.isFinite(a)||a<=0)this.rows=o,t.style.setProperty("--_lines",o.toString());else{const n=t.scrollHeight,g=Math.ceil(n/a);this.rows=Math.max(o,g),t.style.setProperty("--_lines",this.rows.toString())}}})}_handleRowsChange(){if(this.hasAttribute("rows")){const t=Number(this.rows);Number.isFinite(t)&&t>0&&(this._initialRows=t)}this.elTextareaAsync.then(t=>{this.resizable==="false"&&t.style.setProperty("--_lines",this.rows.toString())})}};f=new WeakMap;l=new WeakSet;R=function(){return!this.plain};b=new WeakMap;v=new WeakMap;x=new WeakMap;_=new WeakMap;C=new WeakMap;k=function(){return[p(this,l,E).call(this),p(this,l,F).call(this),p(this,l,P).call(this),p(this,l,B).call(this)].map(e=>h`${e}`)};E=function(){return h`<slot slot="lead" name="lead"></slot>`};B=function(){return h`<slot slot="trail" name="trail"></slot>`};F=function(){return h`
      <textarea
        @input=${u(this,b)}
        @change=${u(this,v)}
        @paste=${u(this,x)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||z}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${d(this.autocapitalize)}
        autocomplete=${d(this.autocomplete)}
        autocorrect=${d(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${d(this.enterkeyhint)}
        inputmode=${d(this.inputmode)}
        wrap=${d(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};P=function(){return this.clearable&&(this.value?.length||0)>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${d(this.invalid?"negative":void 0)}"
          ?disabled="${this.disabled}"
          label="${D("Clear input")}"
          @click=${u(this,C)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `:z};s.styles=[V,J,tt];i([G({valueTemplate:t=>t,selector:"textarea",styleTemplate:(t,e)=>`min-height: calc(1lh * ${e[0]});`})],s.prototype,"rows",2);i([r({attribute:"supporting-text"})],s.prototype,"supportingText",2);i([r({type:Boolean})],s.prototype,"clearable",2);i([r({type:String})],s.prototype,"resizable",2);i([r({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);i([r({type:Number})],s.prototype,"maxlength",2);i([r({type:String})],s.prototype,"size",2);i([r({type:Boolean})],s.prototype,"plain",2);i([r()],s.prototype,"autocapitalize",2);i([r({type:Boolean})],s.prototype,"autocorrect",2);i([r()],s.prototype,"autocomplete",2);i([r({type:Boolean})],s.prototype,"autofocus",2);i([r({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],s.prototype,"spellcheck",2);i([r()],s.prototype,"wrap",2);i([r()],s.prototype,"enterkeyhint",2);i([r()],s.prototype,"inputmode",2);i([r({attribute:!1})],s.prototype,"charCounterCallback",2);i([X("textarea")],s.prototype,"elTextareaAsync",2);i([T("textarea")],s.prototype,"elTextarea",2);i([T("gds-field-base")],s.prototype,"fieldBase",2);i([Z()],s.prototype,"_handleResize",1);i([m("value")],s.prototype,"_handleValueChange",1);i([m("value")],s.prototype,"_setAutoHeight",1);i([m("rows")],s.prototype,"_handleRowsChange",1);s=i([N({labelledBy:"textarea",describedBy:"textarea",errorMessage:"textarea"}),U()],s);let $=class extends O(H(W(s))){};$=i([I("gds-textarea",{dependsOn:[Q,Y,L,K,j]})],$);const at=t=>{const e=(t.value?.length||0)>=t.maxlength?"negative":"positive";return[t.maxlength-(t.value?.length||0),t.maxlength<Number.MAX_SAFE_INTEGER&&e]};export{$ as G,at as c};
