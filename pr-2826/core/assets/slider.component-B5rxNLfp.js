import{l as K}from"./localized-decorator-D-GA75Wc.js";import{i as Q,v as X,n as l,f as J,w as g,S as x,Q as Z,I as tt,H as et,a0 as st,d as v,h as m,o as A,g as it}from"./iframe-P4Ox4Kkx.js";import{G as at,a as rt}from"./form-control-header.component-1F2bkHNi.js";import{f as nt}from"./form-control-host.style-BNa0SSqf.js";const ot=Q`
  :host {
    --_slider-track-bg: var(--gds-sys-color-border-neutral-03);
    --_slider-fill-color: var(--gds-sys-color-content-neutral-01);
    --_slider-thumb-size: var(--gds-sys-space-m);
    --_slider-track-height: var(--gds-sys-space-3xs);
    --_slider-thumb-color: var(--gds-sys-color-content-neutral-01);
    --_slider-thumb-border-color: var(--gds-sys-color-content-neutral-01);
    --_slider-thumb-ring-color: var(--gds-sys-color-border-neutral-02);
    --_slider-thumb-focus-ring-color: var(--gds-sys-color-content-neutral-01);
    --_slider-separator-color: var(--gds-sys-color-border-neutral-01);
    --_slider-separator-gap: 10%;
    --_bound-height: var(--gds-sys-space-xl);
    --_bubble-gap: calc(var(--gds-sys-space-m) + var(--gds-sys-space-4xs));
  }

  :host([size='small']) {
    --_slider-thumb-size: var(--gds-sys-space-s);
    --_slider-track-height: var(--gds-sys-space-4xs);
  }

  #control {
    align-items: center;
    display: grid;
    height: var(--_slider-thumb-size);
    min-height: var(--_slider-thumb-size);
    overflow: visible;
    position: relative;
  }

  #control-row {
    align-items: center;
    column-gap: var(--gds-sys-space-xs, 8px);
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  #range-min,
  #range-max {
    align-items: center;
    column-gap: var(--gds-sys-space-xs, 8px);
    display: inline-flex;
  }

  #range-max {
    justify-self: end;
  }

  .range-side-label {
    color: var(--gds-sys-color-content-neutral-02);
    font: var(--gds-sys-text-detail-s-regular);
    white-space: nowrap;
  }

  .bound-editor {
    display: grid;
    position: relative;
  }

  .bound-editor > * {
    grid-area: 1 / 1;
  }

  .range-editor-button,
  .range-editor-input {
    background: var(--gds-sys-color-l3-neutral-01);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    border-color: var(--gds-sys-color-border-neutral-02);
    border-radius: var(--gds-sys-radius-max);
    color: var(--gds-sys-color-content-neutral-01);
    font: var(--gds-sys-text-detail-s-regular);
    min-height: var(--_bound-height);
  }

  /* Button: exits immediately, re-enters after 80ms delay */
  .range-editor-button {
    cursor: pointer;
    opacity: 1;
    padding: 0 var(--gds-sys-space-s);
    pointer-events: all;
    transition:
      opacity 100ms ease 80ms,
      outline-color 120ms ease,
      outline-offset 120ms ease,
      transform 100ms ease 80ms;
    white-space: nowrap;
  }

  .bound-editor.editing .range-editor-button {
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 100ms ease,
      outline-color 120ms ease,
      outline-offset 120ms ease,
      transform 100ms ease;
  }

  .range-editor-input {
    -webkit-appearance: textfield;
    appearance: textfield;
    align-self: center;
    box-sizing: content-box;
    justify-self: center;
    min-width: 3ch;
    width: 3ch;
    opacity: 0;
    padding: 0 var(--gds-sys-space-s);
    pointer-events: none;
    text-align: center;
    transition:
      width 120ms ease,
      opacity 100ms ease,
      outline-color 120ms ease,
      outline-offset 120ms ease,
      transform 100ms ease;
  }

  .bound-editor.editing .range-editor-input {
    opacity: 1;
    pointer-events: all;
    transition:
      width 120ms ease,
      opacity 100ms ease 80ms,
      outline-color 120ms ease,
      outline-offset 120ms ease,
      transform 100ms ease 80ms;
  }

  .range-editor-input::-webkit-outer-spin-button,
  .range-editor-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .range-editor-button,
  .range-editor-input {
    outline: 2px solid transparent;
    outline-offset: 0px;
  }

  .range-editor-button:focus-visible,
  .range-editor-input:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
    outline-offset: 2px;
  }

  .range-editor-button:disabled,
  .range-editor-input:disabled {
    background: var(--gds-sys-color-l3-disabled-01);
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  @media (max-width: 640px) {
    #control-row {
      column-gap: var(--gds-sys-space-3xs, 4px);
      grid-template-columns: auto minmax(0, 1fr) auto;
    }
  }

  #track,
  #filled-track {
    border-radius: var(--gds-sys-radius-max);
    height: var(--_slider-track-height);
    pointer-events: none;
    position: absolute;
    top: calc(50% - (var(--_slider-track-height) / 2));
  }

  #track {
    background: var(--_slider-track-bg);
    inset-inline: 0;
    z-index: 0;
  }

  #filled-track {
    background: var(--_slider-fill-color);
    inset-inline-start: var(--_range-start);
    inset-inline-end: calc(100% - var(--_range-end));
    z-index: 1;
  }

  :host([show-ticks]) #control::after {
    background-image: repeating-linear-gradient(
      to right,
      transparent 0,
      transparent calc(var(--_tick-interval) - 1px),
      var(--_slider-separator-color) calc(var(--_tick-interval) - 1px),
      var(--_slider-separator-color) var(--_tick-interval)
    );
    content: '';
    height: 6px;
    inset-inline: 0;
    pointer-events: none;
    position: absolute;
    top: calc(50% + (var(--_slider-track-height) / 2) + 4px);
    z-index: 2;
  }

  :host([show-ticks][ticks-position='top']) #control::after {
    top: calc(50% - (var(--_slider-track-height) / 2) - 10px);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    display: block;
    grid-area: 1 / 1;
    height: var(--_slider-thumb-size);
    margin: 0;
    min-height: var(--_slider-thumb-size);
    overflow: visible;
    pointer-events: none;
    position: relative;
    width: 100%;
    z-index: 3;
  }

  input[type='range']::-webkit-slider-runnable-track {
    background: transparent;
    height: var(--_slider-track-height);
  }

  input[type='range']::-moz-range-track {
    background: transparent;
    height: var(--_slider-track-height);
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: var(--_slider-thumb-color);
    border: 1px solid var(--_slider-thumb-border-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    height: var(--_slider-thumb-size);
    margin-top: calc(
      (var(--_slider-track-height) - var(--_slider-thumb-size)) / 2
    );
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition:
      transform 0.12s ease,
      scale 120ms ease,
      outline-color 120ms ease,
      outline-offset 120ms ease;
    width: var(--_slider-thumb-size);
  }

  input[type='range']::-webkit-slider-thumb:hover {
    scale: 1.1;
  }

  input[type='range']::-webkit-slider-thumb:active {
    scale: 0.89;
  }

  input[type='range']::-webkit-slider-thumb:hover,
  input[type='range']::-webkit-slider-thumb:active {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-webkit-slider-thumb:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    background: var(--_slider-thumb-color);
    border: 1px solid var(--_slider-thumb-border-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    height: var(--_slider-thumb-size);
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition:
      transform 0.12s ease,
      scale 120ms ease,
      outline-color 120ms ease,
      outline-offset 120ms ease;
    width: var(--_slider-thumb-size);
  }

  input[type='range']::-moz-range-thumb:hover {
    scale: 1.1;
  }

  input[type='range']::-moz-range-thumb:active {
    scale: 0.89;
  }

  input[type='range']::-moz-range-thumb:hover,
  input[type='range']::-moz-range-thumb:active {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-moz-range-thumb:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  :host([disabled]) input[type='range']::-webkit-slider-thumb,
  :host([disabled]) input[type='range']::-moz-range-thumb {
    border-color: var(--gds-sys-color-content-disabled-01);
    background: var(--gds-sys-color-l3-disabled-01);
    cursor: default;
  }

  :host(:not([disabled]))
    input[type='range']:focus-visible::-webkit-slider-thumb {
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 4px var(--_slider-thumb-focus-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
  }

  :host(:not([disabled])) input[type='range']:focus-visible::-moz-range-thumb {
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 4px var(--_slider-thumb-focus-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
  }

  .thumb-start {
    z-index: 2;
  }

  .thumb-end {
    z-index: 3;
  }

  .value-bubble {
    background: var(--gds-sys-color-l3-neutral-03);
    border-radius: var(--gds-sys-radius-max);
    color: var(--gds-sys-color-content-neutral-05);
    font: var(--gds-sys-text-detail-xs-book);
    left: calc(
      (100% - var(--_slider-thumb-size)) * var(--_value-start-ratio) +
        (var(--_slider-thumb-size) / 2)
    );
    padding: var(--gds-sys-space-3xs) var(--gds-sys-space-2xs);
    pointer-events: none;
    position: absolute;
    top: calc(50% - var(--_slider-thumb-size) / 2 - var(--_bubble-gap));
    opacity: 0;
    transform: translate(-50%, -50%) translateY(12px) scale(0);
    transition:
      opacity 150ms ease-out,
      transform 150ms ease-out;
    visibility: hidden;
    white-space: nowrap;
    z-index: 5;
  }

  .value-bubble.active {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0) scale(1);
    transition:
      opacity 150ms ease-in,
      transform 150ms ease-in;
    visibility: visible;
  }

  .bubble-end {
    left: calc(
      (100% - var(--_slider-thumb-size)) * var(--_value-end-ratio) +
        (var(--_slider-thumb-size) / 2)
    );
    z-index: 6;
  }

  #bounds {
    color: var(--gds-sys-color-content-neutral-02);
    display: flex;
    font: var(--gds-sys-text-detail-s-regular);
    justify-content: space-between;
    line-height: 1.4;
    margin-top: var(--gds-sys-space-3xs);
  }
`;var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,D=t=>{throw TypeError(t)},r=(t,e,n,h)=>{for(var u=h>1?void 0:h?dt(e,n):e,p=t.length-1,y;p>=0;p--)(y=t[p])&&(u=(h?y(e,n,u):y(u))||u);return h&&u&&lt(e,n,u),u},G=(t,e,n)=>e.has(t)||D("Cannot "+n),o=(t,e,n)=>(G(t,e,"read from private field"),e.get(t)),d=(t,e,n)=>e.has(t)?D("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),i=(t,e,n)=>(G(t,e,"access private method"),n),s,w,b,_,$,I,q,O,f,H,j,k,M,z,V,T,E,c,S,C,N,L,B,R,U,Y,P,W;let a=class extends st{constructor(){super(),d(this,s),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.showTicks=!1,this.ticksPosition="bottom",this.showValueLabel=!0,this.range=!1,this.endValue=100,this.minLabel="L",this.maxLabel="R",this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="0",this._draftMax="100",d(this,k,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),d(this,M,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),d(this,z,t=>{const e=i(this,s,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),i(this,s,f).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),d(this,V,t=>{const e=i(this,s,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),i(this,s,f).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),d(this,T,()=>{this._activeThumb="start"}),d(this,E,()=>{this._activeThumb="end"}),d(this,c,()=>{this._activeThumb=null}),d(this,S,()=>{this._focusedThumb="start"}),d(this,C,()=>{this._focusedThumb="end"}),d(this,N,()=>{o(this,c).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),d(this,L,()=>{o(this,c).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max,this._draftMin=`${this.min}`,this._draftMax=`${this.max}`}get value(){return this._internalValue??this.min}set value(t){const e=i(this,s,b).call(this,t);this._internalValue=this.range?Math.min(e,this.endValue):e,i(this,s,f).call(this)}connectedCallback(){super.connectedCallback(),i(this,s,w).call(this),window.addEventListener("pointerup",o(this,c))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",o(this,c))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=`--_range-start: ${i(this,s,I).call(this)}%; --_range-end: ${i(this,s,q).call(this)}%; --_value-start-ratio: ${i(this,s,$).call(this,this.value)}; --_value-end-ratio: ${i(this,s,$).call(this,this.endValue)}; --_tick-interval: ${i(this,s,O).call(this)}%;`;return m`
      ${v(!this.plain,()=>m`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
          >
            <label for="slider-start" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <div id="control-row">
        <div id="range-min" aria-label="Minimum range limit">
          ${i(this,s,B).call(this,"min")}
          <span class="range-side-label" aria-hidden="true"
            >${this.minLabel}</span
          >
        </div>

        <div id="control" style=${t}>
          <div id="track"></div>
          <div id="filled-track"></div>

          <input
            class="native-control thumb thumb-start"
            id="slider-start"
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .valueAsNumber=${this.value}
            aria-describedby="supporting-text extended-supporting-text message"
            aria-invalid=${this.invalid}
            aria-errormessage="message"
            aria-label=${A(i(this,s,H).call(this))}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${o(this,T)}
            @pointerup=${o(this,c)}
            @pointercancel=${o(this,c)}
            @focus=${o(this,S)}
            @blur=${o(this,N)}
            @input=${o(this,k)}
            @change=${o(this,M)}
          />

          ${v(this.range,()=>m`<input
                class="native-control thumb thumb-end"
                id="slider-end"
                type="range"
                min=${this.min}
                max=${this.max}
                step=${this.step}
                .valueAsNumber=${this.endValue}
                aria-describedby="supporting-text extended-supporting-text message"
                aria-invalid=${this.invalid}
                aria-errormessage="message"
                aria-label=${A(i(this,s,j).call(this))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${o(this,E)}
                @pointerup=${o(this,c)}
                @pointercancel=${o(this,c)}
                @focus=${o(this,C)}
                @blur=${o(this,L)}
                @input=${o(this,z)}
                @change=${o(this,V)}
              />`)}
          ${v(this.showValueLabel,()=>m`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  >${this.value}</output
                >
                ${v(this.range,()=>m`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      >${this.endValue}</output
                    >`)}`)}
        </div>

        <div id="range-max" aria-label="Maximum range limit">
          <span class="range-side-label" aria-hidden="true"
            >${this.maxLabel}</span
          >
          ${i(this,s,B).call(this,"max")}
        </div>
      </div>

      ${v(!this.plain,()=>m`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){i(this,s,w).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};s=new WeakSet;w=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=i(this,s,b).call(this,this.value),this.endValue=i(this,s,b).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),i(this,s,f).call(this)};b=function(t){const e=this.step>0?this.step:1,n=this.min+Math.round((t-this.min)/e)*e;return Math.max(this.min,Math.min(this.max,n))};_=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};$=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};I=function(){return this.range?i(this,s,_).call(this,this.value):i(this,s,_).call(this,this.min)};q=function(){return i(this,s,_).call(this,this.range?this.endValue:this.value)};O=function(){const t=this.max-this.min,e=this.step>0?this.step:1;return t<=0?100:Math.max(e/t*100,1)};f=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};H=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};j=function(){return this.label?`${this.label} end`:void 0};k=new WeakMap;M=new WeakMap;z=new WeakMap;V=new WeakMap;T=new WeakMap;E=new WeakMap;c=new WeakMap;S=new WeakMap;C=new WeakMap;N=new WeakMap;L=new WeakMap;B=function(t){const e=t==="min"?this._editingMin:this._editingMax,n=t==="min"?this._draftMin:this._draftMax,h=t==="min"?this.min:this.max,u=t==="min"?"Min":"Max";return m`
      <span class="bound-editor ${e?"editing":""}">
        <button
          class="range-editor-button"
          type="button"
          aria-label="Edit ${u.toLowerCase()} range"
          aria-hidden=${e?"true":"false"}
          tabindex=${e?"-1":"0"}
          ?disabled=${this.disabled}
          @click=${()=>i(this,s,R).call(this,t)}
        >
          ${h}
        </button>
        <input
          class="range-editor-input"
          id="${t}-range-editor"
          type="number"
          .value=${n}
          style="min-width: ${Math.max(n.length,3)}ch"
          aria-label="${u} range"
          aria-hidden=${e?"false":"true"}
          tabindex=${e?"0":"-1"}
          ?disabled=${this.disabled}
          @input=${p=>i(this,s,U).call(this,t,p)}
          @blur=${()=>i(this,s,P).call(this,t)}
          @keydown=${p=>i(this,s,Y).call(this,t,p)}
        />
      </span>
    `};R=function(t){t==="min"?(this._draftMin=`${this.min}`,this._editingMin=!0):(this._draftMax=`${this.max}`,this._editingMax=!0),setTimeout(()=>{const e=this.shadowRoot?.querySelector(`#${t}-range-editor`);e?.focus(),e?.select()},80)};U=function(t,e){const n=e.target.value;t==="min"?this._draftMin=n:this._draftMax=n;const h=Number(n);!n||Number.isNaN(h)||(t==="min"?this.min=h:this.max=h)};Y=function(t,e){if(e.key==="Enter"){i(this,s,P).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),i(this,s,W).call(this,t))};P=function(t){const e=Number(t==="min"?this._draftMin:this._draftMax);Number.isNaN(e)||(t==="min"?this.min=e:this.max=e),i(this,s,W).call(this,t)};W=function(t){if(t==="min"){this._editingMin=!1,this._draftMin=`${this.min}`;return}this._editingMax=!1,this._draftMax=`${this.max}`};a.styles=[X,nt,ot];r([l({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([l({type:Boolean})],a.prototype,"plain",2);r([l({reflect:!0})],a.prototype,"size",2);r([l({type:Number})],a.prototype,"min",2);r([l({type:Number})],a.prototype,"max",2);r([l({type:Number})],a.prototype,"step",2);r([l({type:Boolean,reflect:!0,attribute:"show-ticks"})],a.prototype,"showTicks",2);r([l({reflect:!0,attribute:"ticks-position"})],a.prototype,"ticksPosition",2);r([l({type:Boolean,reflect:!0,attribute:"show-value-label"})],a.prototype,"showValueLabel",2);r([l({type:Boolean,reflect:!0})],a.prototype,"range",2);r([l({type:Number})],a.prototype,"value",1);r([l({type:Number,attribute:"end-value"})],a.prototype,"endValue",2);r([l({attribute:"min-label"})],a.prototype,"minLabel",2);r([l({attribute:"max-label"})],a.prototype,"maxLabel",2);r([J("#slider-start")],a.prototype,"_startInput",2);r([g()],a.prototype,"_activeThumb",2);r([g()],a.prototype,"_focusedThumb",2);r([g()],a.prototype,"_editingMin",2);r([g()],a.prototype,"_editingMax",2);r([g()],a.prototype,"_draftMin",2);r([g()],a.prototype,"_draftMax",2);r([x("min"),x("max"),x("step"),x("range")],a.prototype,"_handleConstraintsUpdate",1);a=r([K()],a);let F=class extends Z(tt(et(a))){};F=r([it("gds-slider",{dependsOn:[at,rt]})],F);export{F as G};
