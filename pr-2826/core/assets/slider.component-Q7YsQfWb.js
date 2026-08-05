import{l as it}from"./localized-decorator-AYtcdh4h.js";import{i as et,v as at,n as d,f as O,w as g,$ as x,Q as st,I as rt,H as nt,a0 as ot,d as p,h,a as lt,o as G,g as dt}from"./iframe-DX1nX-Km.js";import{G as ut,a as ht}from"./form-control-header.component-DdFioqGF.js";import{f as ct}from"./form-control-host.style-uj7_cm1k.js";import{G as pt}from"./input.component-VfJa5T0T.js";const mt=et`
  :host {
    --_slider-track-bg: var(--gds-sys-color-border-neutral-03);
    --_slider-fill-color: var(--gds-sys-color-content-neutral-01);
    --_slider-thumb-size: var(--gds-sys-space-m);
    --_slider-track-height: var(--gds-sys-space-3xs);
    --_slider-thumb-color: var(--gds-sys-color-content-neutral-01);
    --_slider-thumb-ring-color: var(--gds-sys-color-border-neutral-02);
    --_slider-thumb-focus-ring-color: var(--gds-sys-color-content-neutral-01);
    --_slider-separator-color: var(--gds-sys-color-border-neutral-01);
    --_slider-separator-gap: 10%;
    --_bound-height: var(--gds-sys-space-xl);
    --_bubble-gap: calc(var(--gds-sys-space-m) + var(--gds-sys-space-4xs));
    --_t-easing: cubic-bezier(var(--gds-sys-motion-easing-ease-out));
    --_t-easing-in: cubic-bezier(var(--gds-sys-motion-easing-ease-in));
    --_t-easing-out: cubic-bezier(var(--gds-sys-motion-easing-ease-out));
    --_t-duration-fast: var(--gds-sys-motion-duration-fastest);
    --_t-duration-normal: var(--gds-sys-motion-duration-fastest);
    --_t-duration-slow: var(--gds-sys-motion-duration-fast);
    --_t-delay: 80ms;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) {
    --_slider-thumb-size: var(--gds-sys-space-s);
    --_slider-track-height: var(--gds-sys-space-4xs);
  }

  #control {
    align-items: center;
    display: grid;
    grid-column: 2;
    height: var(--_slider-thumb-size);
    min-height: var(--_slider-thumb-size);
    overflow: visible;
    position: relative;
    width: 100%;
  }

  #control-row {
    align-items: center;
    column-gap: var(--gds-sys-space-xs, 8px);
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
  }

  #control-row.no-bounds {
    grid-template-columns: minmax(0, 1fr);
  }

  #control-row.no-bounds #control {
    grid-column: 1;
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
    transition-property: opacity, outline-color, outline-offset, transform;
    transition-duration:
      var(--_t-duration-fast), var(--_t-duration-normal),
      var(--_t-duration-normal), var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing);
    transition-delay: var(--_t-delay), 0ms, 0ms, var(--_t-delay);
    white-space: nowrap;
  }

  .bound-editor.editing .range-editor-button {
    opacity: 0;
    pointer-events: none;
    transition-property: opacity, outline-color, outline-offset, transform;
    transition-duration:
      var(--_t-duration-fast), var(--_t-duration-normal),
      var(--_t-duration-normal), var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing);
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
    transition-property:
      width, opacity, outline-color, outline-offset, transform;
    transition-duration:
      var(--_t-duration-normal), var(--_t-duration-fast),
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing);
  }

  .bound-editor.editing .range-editor-input {
    opacity: 1;
    pointer-events: all;
    transition-property:
      width, opacity, outline-color, outline-offset, transform;
    transition-duration:
      var(--_t-duration-normal), var(--_t-duration-fast),
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing);
    transition-delay: 0ms, var(--_t-delay), 0ms, 0ms, var(--_t-delay);
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
    inset-inline: calc(var(--_slider-thumb-size) / 2);
    z-index: 0;
  }

  #filled-track {
    background: var(--_slider-fill-color);
    inset-inline-start: calc(
      var(--_slider-thumb-size) / 2 + var(--_fill-start-ratio) *
        (100% - var(--_slider-thumb-size))
    );
    inset-inline-end: calc(
      100% - var(--_slider-thumb-size) / 2 - var(--_fill-end-ratio) *
        (100% - var(--_slider-thumb-size))
    );
    z-index: 1;
  }

  :host(:not([show-ticks])) .tick {
    display: none;
  }

  .tick {
    height: 2px;
    pointer-events: none;
    position: absolute;
    top: calc(50% - 1px);
    transform: translateX(-50%);
    width: 2px;
    border-radius: 50%;
    z-index: 1;
  }

  .tick-unfilled {
    background-color: var(--gds-sys-color-border-neutral-04);
  }

  .tick-filled {
    background-color: var(--gds-sys-color-border-neutral-05);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    cursor: grab;
    cursor: -webkit-grab;
    display: block;
    grid-area: 1 / 1;
    height: var(--_slider-thumb-size);
    margin: 0;
    min-height: var(--_slider-thumb-size);
    overflow: visible;
    pointer-events: all;
    position: relative;
    width: 100%;
    z-index: 3;
  }

  /* Range mode: only thumbs receive events, not the full track area */
  input[type='range']:not(:only-of-type) {
    pointer-events: none;
  }

  input[type='range']:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
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
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35),
      inset 0 0 0 0px white;
    height: var(--_slider-thumb-size);
    margin-top: calc(
      (var(--_slider-track-height) - var(--_slider-thumb-size)) / 2
    );
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition-property:
      transform, scale, outline-color, outline-offset, box-shadow;
    transition-duration:
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-slow);
    transition-timing-function: var(--_t-easing);
    width: var(--_slider-thumb-size);
  }

  input[type='range']::-webkit-slider-thumb:hover {
    scale: 1.1;
  }

  input[type='range']::-webkit-slider-thumb:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    outline-color: transparent;
    outline-offset: 0px;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35),
      inset 0 0 0 calc(var(--_slider-thumb-size) * 0.3) white;
    scale: 0.89;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-webkit-slider-thumb:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    background: var(--_slider-thumb-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35),
      inset 0 0 0 0px white;
    height: var(--_slider-thumb-size);
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition-property:
      transform, scale, outline-color, outline-offset, box-shadow;
    transition-duration:
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-normal), var(--_t-duration-normal),
      var(--_t-duration-slow);
    transition-timing-function: var(--_t-easing);
    width: var(--_slider-thumb-size);
  }

  input[type='range']::-moz-range-thumb:hover {
    scale: 1.1;
  }

  input[type='range']::-moz-range-thumb:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    outline-color: transparent;
    outline-offset: 0px;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35),
      inset 0 0 0 calc(var(--_slider-thumb-size) * 0.3) white;
    scale: 0.89;
  }

  input[type='range']::-moz-range-thumb:hover {
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
    padding: var(--gds-sys-space-4xs) var(--gds-sys-space-xs);
    pointer-events: none;
    position: absolute;
    top: calc(50% - var(--_slider-thumb-size) / 2 - var(--_bubble-gap));
    opacity: 0;
    transform: translate(-50%, -50%) translateY(8px);
    transition-property: all;
    transition-duration: var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing-in);
    visibility: hidden;
    white-space: nowrap;
    z-index: 5;
  }

  .value-bubble.active {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
    transition-property: opacity, transform, visibility;
    transition-duration: var(--_t-duration-fast);
    transition-timing-function: var(--_t-easing-out);
    visibility: visible;
  }

  input[type='range']:active ~ .value-bubble.active {
    transform: translate(-50%, -50%) translateY(3px);
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
`;var bt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,R=t=>{throw TypeError(t)},n=(t,i,s,l)=>{for(var c=l>1?void 0:l?gt(i,s):i,b=t.length-1,_;b>=0;b--)(_=t[b])&&(c=(l?_(i,s,c):_(c))||c);return l&&c&&bt(i,s,c),c},j=(t,i,s)=>i.has(t)||R("Cannot "+s),o=(t,i,s)=>(j(t,i,"read from private field"),i.get(t)),u=(t,i,s)=>i.has(t)?R("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,s),a=(t,i,s)=>(j(t,i,"access private method"),s),e,$,v,w,f,W,A,H,D,Y,U,X,k,y,K,Q,z,M,V,E,T,S,m,N,B,I,C,L,J,Z,tt,P,F;let r=class extends ot{constructor(){super(),u(this,e),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.showTicks=!1,this.showTrailInput=!1,this.showValueLabel=!0,this.range=!1,this.endValue=100,this.leadLabel="",this.trailLabel="",this.hideBoundEditors=!1,this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="0",this._draftMax="100",this._trailDisplayValue="",this._trailInvalid=!1,u(this,k,t=>{const i=t.target;this._trailDisplayValue=String(i.value);const s=Number(i.value);this._trailInvalid=!Number.isNaN(s)&&(s>this.max||s<this.min),!Number.isNaN(s)&&!this._trailInvalid&&(this.value=a(this,e,v).call(this,s))}),u(this,z,t=>{const i=t.target.valueAsNumber;this.value=i,this._trailDisplayValue=String(i),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,M,t=>{const i=t.target.valueAsNumber;this.value=i,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,V,t=>{const i=a(this,e,v).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,i),a(this,e,y).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,E,t=>{const i=a(this,e,v).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,i),a(this,e,y).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,T,()=>{this._activeThumb="start"}),u(this,S,()=>{this._activeThumb="end"}),u(this,m,()=>{this._activeThumb=null}),u(this,N,()=>{this._focusedThumb="start"}),u(this,B,()=>{this._focusedThumb="end"}),u(this,I,()=>{o(this,m).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),u(this,C,()=>{o(this,m).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max,this._draftMin=`${this.min}`,this._draftMax=`${this.max}`}get value(){return this._internalValue??this.min}set value(t){const i=a(this,e,v).call(this,t);this._internalValue=this.range?Math.min(i,this.endValue):i,a(this,e,y).call(this)}connectedCallback(){super.connectedCallback(),a(this,e,$).call(this),window.addEventListener("pointerup",o(this,m))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",o(this,m))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=a(this,e,U).call(this);return h`
      ${p(!this.plain,()=>h`<gds-form-control-header
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
            <slot name="trail" slot="trail"></slot>
            ${p(this.showTrailInput,()=>h`<gds-input
                  slot="trail"
                  type="number"
                  size="small"
                  min-width="6ch"
                  width=${a(this,e,X).call(this)}
                  max-width="18ch"
                  ?invalid=${this._trailInvalid}
                  plain
                  .value=${String(this.value)}
                  .step=${this.step}
                  @input=${o(this,k)}
                ></gds-input>`)}
          </gds-form-control-header>`)}

      <div
        id="control-row"
        class=${lt({"no-bounds":!this.leadLabel&&!this.trailLabel&&this.hideBoundEditors})}
      >
        ${p(this.leadLabel||!this.hideBoundEditors,()=>h`
            <div id="range-min" aria-label="Minimum range limit">
              ${p(!this.hideBoundEditors,()=>a(this,e,L).call(this,"min"))}
              <span class="range-side-label" aria-hidden="true"
                >${this.leadLabel}</span
              >
            </div>
          `)}

        <div id="control" style=${t}>
          <div id="track"></div>
          <div id="filled-track"></div>

          ${a(this,e,Y).call(this)}

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
            aria-label=${G(a(this,e,K).call(this))}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${o(this,T)}
            @pointerup=${o(this,m)}
            @pointercancel=${o(this,m)}
            @focus=${o(this,N)}
            @blur=${o(this,I)}
            @input=${o(this,z)}
            @change=${o(this,M)}
          />

          ${p(this.range,()=>h`<input
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
                aria-label=${G(a(this,e,Q).call(this))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${o(this,S)}
                @pointerup=${o(this,m)}
                @pointercancel=${o(this,m)}
                @focus=${o(this,B)}
                @blur=${o(this,C)}
                @input=${o(this,V)}
                @change=${o(this,E)}
              />`)}
          ${p(this.showValueLabel,()=>h`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  >${this.value}</output
                >
                ${p(this.range,()=>h`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      >${this.endValue}</output
                    >`)}`)}
        </div>

        ${p(this.trailLabel||!this.hideBoundEditors,()=>h`
            <div id="range-max" aria-label="Maximum range limit">
              <span class="range-side-label" aria-hidden="true"
                >${this.trailLabel}</span
              >
              ${p(!this.hideBoundEditors,()=>a(this,e,L).call(this,"max"))}
            </div>
          `)}
      </div>

      ${p(!this.plain,()=>h`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this._trailInvalid?`Value must be between ${this.min} and ${this.max}`:this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){a(this,e,$).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};e=new WeakSet;$=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=a(this,e,v).call(this,this.value),this.endValue=a(this,e,v).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),a(this,e,y).call(this)};v=function(t){const i=this.step>0?this.step:1,s=this.min+Math.round((t-this.min)/i)*i;return Math.max(this.min,Math.min(this.max,s))};w=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};f=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};W=function(){return this.range?a(this,e,w).call(this,this.value):a(this,e,w).call(this,this.min)};A=function(){return a(this,e,w).call(this,this.range?this.endValue:this.value)};H=function(t,i=0){const s=i>0?"+":"-",l=i!==0?` ${s} ${Math.abs(i)}px`:"";return`calc(var(--_slider-thumb-size) / 2 + ${t} * (100% - var(--_slider-thumb-size))${l})`};D=function(){const t=this.max-this.min,i=this.step>0?this.step:1;return t<=0?100:Math.max(i/t*100,1)};Y=function(){if(!this.showTicks)return h``;const t=[],i=a(this,e,D).call(this);for(let s=0;s<=100;s+=i){const l=this.min+(this.max-this.min)*s/100;t.push({position:s,value:l})}return h`
      ${t.map((s,l)=>{const c=s.position>=a(this,e,W).call(this)&&s.position<=a(this,e,A).call(this),b=s.position/100,_=l===0?2:l===t.length-1?-2:0;return h`
          <div
            class="tick ${c?"tick-filled":"tick-unfilled"}"
            style="left: ${a(this,e,H).call(this,b,_)}"
          ></div>
        `})}
    `};U=function(){const t=this.range?a(this,e,f).call(this,this.value):0,i=this.range?a(this,e,f).call(this,this.endValue):a(this,e,f).call(this,this.value);return[`--_range-start: ${a(this,e,W).call(this)}%`,`--_range-end: ${a(this,e,A).call(this)}%`,`--_value-start-ratio: ${a(this,e,f).call(this,this.value)}`,`--_value-end-ratio: ${a(this,e,f).call(this,this.endValue)}`,`--_fill-start-ratio: ${t}`,`--_fill-end-ratio: ${i}`,`--_tick-interval: ${a(this,e,D).call(this)}%`].join("; ")};X=function(){return`${Math.max(this._trailDisplayValue.length+4,5)}ch`};k=new WeakMap;y=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};K=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};Q=function(){return this.label?`${this.label} end`:void 0};z=new WeakMap;M=new WeakMap;V=new WeakMap;E=new WeakMap;T=new WeakMap;S=new WeakMap;m=new WeakMap;N=new WeakMap;B=new WeakMap;I=new WeakMap;C=new WeakMap;L=function(t){const i=t==="min"?this._editingMin:this._editingMax,s=t==="min"?this._draftMin:this._draftMax,l=t==="min"?this.min:this.max,c=t==="min"?"Min":"Max";return h`
      <span class="bound-editor ${i?"editing":""}">
        <button
          class="range-editor-button"
          type="button"
          aria-label="Edit ${c.toLowerCase()} range"
          aria-hidden=${i?"true":"false"}
          tabindex=${i?"-1":"0"}
          ?disabled=${this.disabled}
          @click=${()=>a(this,e,J).call(this,t)}
        >
          ${l}
        </button>
        <input
          class="range-editor-input"
          id="${t}-range-editor"
          type="number"
          .value=${s}
          style="min-width: ${Math.max(s.length,3)}ch"
          aria-label="${c} range"
          aria-hidden=${i?"false":"true"}
          tabindex=${i?"0":"-1"}
          ?disabled=${this.disabled}
          @input=${b=>a(this,e,Z).call(this,t,b)}
          @blur=${()=>a(this,e,P).call(this,t)}
          @keydown=${b=>a(this,e,tt).call(this,t,b)}
        />
      </span>
    `};J=function(t){t==="min"?(this._draftMin=`${this.min}`,this._editingMin=!0):(this._draftMax=`${this.max}`,this._editingMax=!0),setTimeout(()=>{const i=this.shadowRoot?.querySelector(`#${t}-range-editor`);i?.focus(),i?.select()},80)};Z=function(t,i){const s=i.target.value;t==="min"?this._draftMin=s:this._draftMax=s;const l=Number(s);!s||Number.isNaN(l)||(t==="min"?this.min=l:this.max=l)};tt=function(t,i){if(i.key==="Enter"){a(this,e,P).call(this,t);return}i.key==="Escape"&&(i.preventDefault(),a(this,e,F).call(this,t))};P=function(t){const i=Number(t==="min"?this._draftMin:this._draftMax);Number.isNaN(i)||(t==="min"?this.min=i:this.max=i),a(this,e,F).call(this,t)};F=function(t){if(t==="min"){this._editingMin=!1,this._draftMin=`${this.min}`;return}this._editingMax=!1,this._draftMax=`${this.max}`};r.styles=[at,ct,mt];n([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);n([d({type:Boolean})],r.prototype,"plain",2);n([d({reflect:!0})],r.prototype,"size",2);n([d({type:Number,reflect:!0})],r.prototype,"min",2);n([d({type:Number,reflect:!0})],r.prototype,"max",2);n([d({type:Number})],r.prototype,"step",2);n([d({type:Boolean,reflect:!0,attribute:"show-ticks"})],r.prototype,"showTicks",2);n([d({type:Boolean,reflect:!0,attribute:"show-trail-input"})],r.prototype,"showTrailInput",2);n([d({type:Boolean,reflect:!0,attribute:"show-value-label"})],r.prototype,"showValueLabel",2);n([d({type:Boolean,reflect:!0})],r.prototype,"range",2);n([d({type:Number})],r.prototype,"value",1);n([d({type:Number,attribute:"end-value"})],r.prototype,"endValue",2);n([d({attribute:"lead-label"})],r.prototype,"leadLabel",2);n([d({attribute:"trail-label"})],r.prototype,"trailLabel",2);n([d({type:Boolean,attribute:"hide-bound-editors"})],r.prototype,"hideBoundEditors",2);n([O("#slider-start")],r.prototype,"_startInput",2);n([O("#slider-end")],r.prototype,"_endInput",2);n([g()],r.prototype,"_activeThumb",2);n([g()],r.prototype,"_focusedThumb",2);n([g()],r.prototype,"_editingMin",2);n([g()],r.prototype,"_editingMax",2);n([g()],r.prototype,"_draftMin",2);n([g()],r.prototype,"_draftMax",2);n([g()],r.prototype,"_trailDisplayValue",2);n([g()],r.prototype,"_trailInvalid",2);n([x("min"),x("max"),x("step"),x("range")],r.prototype,"_handleConstraintsUpdate",1);r=n([it()],r);let q=class extends st(rt(nt(r))){};q=n([dt("gds-slider",{dependsOn:[ut,ht,pt]})],q);export{q as G};
