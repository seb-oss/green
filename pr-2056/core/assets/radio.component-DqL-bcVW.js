import{l as $}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n,G as S,h as v,g as m,r as B}from"./custom-element-scoping-b4c89-hi.js";import{a as V}from"./query-p8xgzTDt.js";import{e as R}from"./class-map-CXsQwv0r.js";import{G as j,a as H}from"./form-control-header.component-mAIXysio.js";import{t as T}from"./tokens.style-C9bLefPj.js";import{w as y}from"./watch-tFciLXSI.js";import{d as K,b as q,w as U}from"./declarative-layout-mixins-C09DP4OO.js";import{a as X}from"./button.component-BLJSqniR.js";import{i as w}from"./lit-element-Bx14lxc-.js";import{T as J}from"./transitional-styles-BOwn52Fb.js";const N=w`
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
`;var Q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,C=(e,t,i,s)=>{for(var r=s>1?void 0:s?Y(t,i):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(r=(s?l(t,i,r):l(r))||r);return s&&r&&Q(t,i,r),r};let g=class extends S{constructor(){super(),this.label="",this.supportingText=""}connectedCallback(){super.connectedCallback(),J.instance.apply(this,"gds-selection-field-label")}render(){const e={"selection-field-label":!0,"has-supporting-text":!!this.supportingText};return v`
      <div class="selection-field-container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${R(e)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?v`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};g.styles=[T,N];C([n()],g.prototype,"label",2);C([n({attribute:"supporting-text"})],g.prototype,"supportingText",2);g=C([m("gds-selection-field-label"),$()],g);const Z=w`
  :host {
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-pressed)
    );

    --radio-size: var(--gds-space-xl);
    --radio-disc-size: var(--gds-space-m);
    --radio-radius: var(--gds-space-max);
    --radio-border-color: var(--gds-color-l3-border-secondary);
    --radio-border-color-selected: var(--gds-color-l3-border-primary);
    --radio-border-width: var(--gds-space-4xs);
    --radio-border-width-selected: var(--gds-space-2xs);
    --radio-outline-width: var(--gds-space-3xs);
    --radio-disc-background-color: var(--gds-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-color-l3-content-tertiary);
    --_radio-outline-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --radio-border-color: var(--gds-color-l3-border-negative);
    --radio-disc-background-color: var(
      --gds-color-l3-background-negative-secondary
    );
    --radio-border-color-selected: var(--gds-color-l3-border-negative);
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-pressed)
    );
    --_radio-label-color: var(--gds-color-l3-content-negative);
    --_radio-outline-color: var(--gds-color-l3-content-negative);
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
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,F=e=>{throw TypeError(e)},p=(e,t,i,s)=>{for(var r=s>1?void 0:s?te(t,i):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(r=(s?l(t,i,r):l(r))||r);return s&&r&&ee(t,i,r),r},ie=(e,t,i)=>t.has(e)||F("Cannot "+i),se=(e,t,i)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),a=(e,t,i)=>(ie(e,t,"access private method"),i),o,b,D,k,G,O,f,P,L,M,I;let c=class extends X{constructor(){super(...arguments),se(this,o),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),a(this,o,b).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{a(this,o,b).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="radiogroup"
      id="radiogroup"
      class=${R(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
    >
      ${a(this,o,P).call(this)}
    </div>`}};o=new WeakSet;b=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};D=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(i=>i.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(i=>i.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};k=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0})),this.dispatchEvent(new Event("input",{bubbles:!0}))};G=function(e){const t=e.target;t.hasAttribute("value")&&(this.value=t.value,this._syncRadioStates(),a(this,o,k).call(this))};O=function(e){if(!this._isConnected)return;const t=this.radios.filter(s=>!s.hasAttribute("disabled"));if(t.length===0)return;let i=t.findIndex(s=>document.activeElement===s);switch(i===-1&&(i=t.findIndex(s=>s.checked),i===-1&&(i=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const s=(i+1)%t.length;a(this,o,f).call(this,t[s]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const s=(i-1+t.length)%t.length;a(this,o,f).call(this,t[s]);break}default:return}};f=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),a(this,o,k).call(this))};P=function(){return[a(this,o,L).call(this),a(this,o,M).call(this),a(this,o,I).call(this)].map(t=>v`${t}`)};L=function(){if(this.label)return v` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};M=function(){return v` <div
      class="content"
      @keydown=${a(this,o,O)}
      @focus=${a(this,o,D)}
    >
      <slot @gds-radio-change=${a(this,o,G)}></slot>
    </div>`};I=function(){return v` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
    >
    </gds-form-control-footer>`};c.styles=[T,Z];p([n()],c.prototype,"size",2);p([n()],c.prototype,"direction",2);p([n({attribute:"supporting-text"})],c.prototype,"supportingText",2);p([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);p([V(".content")],c.prototype,"_contentElement",2);p([y("value")],c.prototype,"_handleValueChange",1);p([y("invalid")],c.prototype,"_syncRadioStates",1);c=p([$()],c);let z=class extends K(q(U(c))){};z=p([m("gds-radio-group",{dependsOn:[j,H]})],z);const re=w`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .radio {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_radio-label-color: var(--gds-color-l3-content-disabled);
    }

    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      margin-block-start: calc(var(--radio-border-width) * 2);
      cursor: pointer;
    }

    .state {
      display: flex;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-1 * var(--radio-outline-width));
      outline-width: var(--radio-outline-width);
      outline-color: transparent;
      border-radius: var(--radio-radius);
      min-width: var(--radio-size);
      min-height: var(--radio-size);
      position: absolute;
      left: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      top: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      scale: 0.8;
    }

    @media (hover: hover) {
      .radio:hover,
      :host(:hover) .radio .state {
        background-color: var(--radio-bg-mix);
        scale: 1;
      }
    }

    .radio:active .state,
    :host(:active) .radio .state {
      background-color: var(--radio-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .radio:active .state,
    :host(:active:not(:focus-visible)) .radio .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .radio .state {
      outline-color: var(--_radio-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .radio .state {
      outline-color: transparent;
    }

    .disc {
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      border-radius: var(--radio-radius);
      box-shadow: inset 0 0 0 var(--radio-border-width)
        var(--radio-border-color);
      background-color: var(--radio-disc-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
      position: absolute;
      inset: 0;
    }

    :host([checked]) .disc,
    :host(:active) .disc {
      box-shadow: inset 0 0 0 var(--radio-border-width-selected)
        var(--radio-border-color-selected);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .radio .disc {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`;var oe=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,W=e=>{throw TypeError(e)},u=(e,t,i,s)=>{for(var r=s>1?void 0:s?ae(t,i):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(r=(s?l(t,i,r):l(r))||r);return s&&r&&oe(t,i,r),r},ne=(e,t,i)=>t.has(e)||W("Cannot "+i),E=(e,t,i)=>(ne(e,t,"read from private field"),i?i.call(e):t.get(e)),A=(e,t,i)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),x,_;let h=class extends S{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,A(this,x,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),A(this,_,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchEvent(new Event("gds-radio-change",{bubbles:!0})))}),this.addEventListener("keydown",E(this,_)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",E(this,x))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}render(){return v`
      <gds-selection-field-label
        supporting-text=${this.supportingText}
        label=${this.label}
        type="radio"
      >
        <div class="radio">
          <div class="state"></div>
          <div class="disc"></div>
        </div>
      </gds-selection-field-label>
    `}};x=new WeakMap;_=new WeakMap;h.styles=[re];u([n()],h.prototype,"label",2);u([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);u([n()],h.prototype,"value",2);u([n({type:Boolean,reflect:!0})],h.prototype,"checked",2);u([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);u([n({type:Boolean})],h.prototype,"invalid",2);u([B()],h.prototype,"_isFocused",2);u([y("disabled")],h.prototype,"_handleDisabledChange",1);h=u([m("gds-radio",{dependsOn:[g]})],h);export{h as G,z as a,g as b};
