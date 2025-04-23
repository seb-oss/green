import{l as R}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as l,G as T,h as b,g as y,r as j}from"./custom-element-scoping-b4c89-hi.js";import{a as V}from"./query-p8xgzTDt.js";import{e as w}from"./class-map-CXsQwv0r.js";import{G as H,a as K}from"./form-control-header.component-DE15buoc.js";import{t as F}from"./tokens.style-C9bLefPj.js";import{w as k}from"./watch-tFciLXSI.js";import{d as q,b as U,w as X}from"./declarative-layout-mixins-C09DP4OO.js";import{a as J}from"./button.component-CJG_iMlt.js";import{i as v,x as E}from"./lit-element-Bx14lxc-.js";import{T as N}from"./transitional-styles-BOwn52Fb.js";import{n as Q}from"./when-BR7zwNJC.js";const Y=v`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
      --_color: var(--_radio-label-color, inherit);
    }

    .selection-field-container {
      display: flex;
      gap: var(--gds-space-s);
      cursor: pointer;
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--_color);
    }

    .primary-label {
      font-weight: var(--gds-text-weight-book);
      cursor: pointer;
    }

    .supporting-text {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-text-weight-regular);
    }
  }
`;var Z=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,C=(e,t,i,s)=>{for(var r=s>1?void 0:s?ee(t,i):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(r=(s?d(t,i,r):d(r))||r);return s&&r&&Z(t,i,r),r};let u=class extends T{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),N.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return b`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${w(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?b`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};u.styles=[F,Y];C([l()],u.prototype,"label",2);C([l({attribute:"supporting-text"})],u.prototype,"supportingText",2);u=C([y("gds-selection-field-label"),R()],u);const te=v`
  .rbcb {
    --_toggle-size: var(--gds-space-m);
    --_toggle-radius: var(--gds-space-2xs);
    --_perimeter-size: var(--gds-space-xl);
    --_toggle-border-width-checked: var(--gds-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-pressed)
    );

    /* -- */

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-space-4xs) * 2);
    cursor: pointer;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-space-max);
    --_toggle-border-width-checked: var(--gds-space-2xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-space-4xs)
      var(--gds-color-l3-border-secondary);
    background-color: var(--gds-color-l3-content-primary);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: 248ms;
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbcb__icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-color-l3-content-primary);
    @starting-style {
      scale: 0.2;
    }
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: 248ms;
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-color-l3-content-tertiary);
    border-radius: calc(var(--_toggle-radius) + 4px);
    min-width: var(--_perimeter-size);
    min-height: var(--_perimeter-size);
    position: absolute;
    left: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-color-l3-border-primary);
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-color-l3-content-disabled);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-color-l3-background-negative-secondary);
    box-shadow: inset 0 0 0 var(--gds-space-4xs)
      var(--gds-color-l3-border-negative);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-space-4xs)
      var(--gds-color-l3-border-negative);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-color-l3-border-negative);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-color-l3-content-negative);
  }

  :host(:focus-visible) .rbcb__perimeter {
    outline-width: var(--gds-space-3xs);
    scale: 1;
  }

  @media (hover: hover) {
    .rbcb:hover .rbcb__perimeter,
    :host(:hover) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle {
      transition: none;
    }
  }

  .rbcb:active .rbcb__perimeter,
  :host(:active) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
  }

  :host(:active:not(:focus-visible)) .rbcb:active .rbcb__perimeter,
  :host(:active:not(:focus-visible)) .rbcb__perimeter {
    scale: 0.96;
  }
`,ie=e=>{const{type:t,checked:i,disabled:s,invalid:r}=e;return E`
    <div class="rbcb ${w({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":i,"--disabled":s,"--invalid":r})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${Q(t==="checkbox"&&i,()=>E`<gds-icon-checkmark
              class="rbcb__icon"
              stroke="4"
            ></gds-icon-checkmark>`)}
      </div>
    </div>
  `},se=v`
  :host {
    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-text-size-detail-s);
    --_line-height-label: var(--gds-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-space-xs);
  }
`;var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,D=e=>{throw TypeError(e)},p=(e,t,i,s)=>{for(var r=s>1?void 0:s?oe(t,i):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(r=(s?d(t,i,r):d(r))||r);return s&&r&&re(t,i,r),r},ae=(e,t,i)=>t.has(e)||D("Cannot "+i),ne=(e,t,i)=>t.has(e)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),a=(e,t,i)=>(ae(e,t,"access private method"),i),o,_,G,z,O,P,f,L,M,I,W;let c=class extends J{constructor(){super(...arguments),ne(this,o),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),a(this,o,_).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{a(this,o,_).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return b`<div
      role="radiogroup"
      id="radiogroup"
      class=${w(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${a(this,o,L).call(this)}
    </div>`}};o=new WeakSet;_=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};G=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(i=>i.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(i=>i.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};z=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))};O=function(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),a(this,o,z).call(this))};P=function(e){if(!this._isConnected)return;const t=this.radios.filter(s=>!s.hasAttribute("disabled"));if(t.length===0)return;let i=t.findIndex(s=>document.activeElement===s);switch(i===-1&&(i=t.findIndex(s=>s.checked),i===-1&&(i=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const s=(i+1)%t.length;a(this,o,f).call(this,t[s]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const s=(i-1+t.length)%t.length;a(this,o,f).call(this,t[s]);break}default:return}};f=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),a(this,o,z).call(this))};L=function(){return[a(this,o,M).call(this),a(this,o,I).call(this),a(this,o,W).call(this)].map(t=>b`${t}`)};M=function(){if(this.label)return b` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};I=function(){return b` <div
      class="content"
      @keydown=${a(this,o,P)}
      @focus=${a(this,o,G)}
    >
      <slot @gds-radio-change=${a(this,o,O)}></slot>
    </div>`};W=function(){return b` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};c.styles=[F,se];p([l()],c.prototype,"size",2);p([l()],c.prototype,"direction",2);p([l({attribute:"supporting-text"})],c.prototype,"supportingText",2);p([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);p([V(".content")],c.prototype,"_contentElement",2);p([k("value")],c.prototype,"_handleValueChange",1);p([k("invalid")],c.prototype,"_syncRadioStates",1);c=p([R()],c);let $=class extends q(U(X(c))){};$=p([y("gds-radio-group",{dependsOn:[H,K]})],$);const le=v`
  :host([disabled]) {
    --_radio-label-color: var(--gds-color-l3-content-disabled);
  }

  :host(:focus) {
    outline: none;
  }
`;var de=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,B=e=>{throw TypeError(e)},g=(e,t,i,s)=>{for(var r=s>1?void 0:s?ce(t,i):t,n=e.length-1,d;n>=0;n--)(d=e[n])&&(r=(s?d(t,i,r):d(r))||r);return s&&r&&de(t,i,r),r},he=(e,t,i)=>t.has(e)||B("Cannot "+i),A=(e,t,i)=>(he(e,t,"read from private field"),i?i.call(e):t.get(e)),S=(e,t,i)=>t.has(e)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),x,m;let h=class extends T{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,S(this,x,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),S(this,m,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),this.addEventListener("keydown",A(this,m)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",A(this,x))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return b`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        type="radio"
      >
        ${ie({type:"radio",checked:this.checked,disabled:this.disabled,invalid:this.invalid})}
      </gds-selection-field-label>
    `}};x=new WeakMap;m=new WeakMap;h.styles=[te,le];g([l()],h.prototype,"label",2);g([l({attribute:"supporting-text"})],h.prototype,"supportingText",2);g([l()],h.prototype,"value",2);g([l({type:Boolean,reflect:!0})],h.prototype,"checked",2);g([l({type:Boolean,reflect:!0})],h.prototype,"disabled",2);g([l({type:Boolean})],h.prototype,"invalid",2);g([j()],h.prototype,"_isFocused",2);g([k("disabled")],h.prototype,"_handleDisabledChange",1);h=g([y("gds-radio",{dependsOn:[u]})],h);export{h as G,$ as a,ie as b,u as c,te as r};
