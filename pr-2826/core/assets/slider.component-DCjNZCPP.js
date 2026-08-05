import{l as at}from"./localized-decorator-DncZGlXD.js";import{i as st,v as rt,n as d,f as Y,w as v,$,Q as nt,I as ot,H as lt,a0 as dt,d as p,h,a as ut,o as R,g as ht}from"./iframe-CNBLKHAI.js";import{G as ct,a as pt}from"./form-control-header.component-mZdT658C.js";import{f as gt}from"./form-control-host.style-BCHGqEUL.js";import{G as mt}from"./input.component-Boh7uYUb.js";const bt=st`
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

  input[type='range']::-webkit-slider-thumb:active,
  input[type='range'].dragging::-webkit-slider-thumb {
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

  input[type='range']::-moz-range-thumb:active,
  input[type='range'].dragging::-moz-range-thumb {
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

  input[type='range']:active ~ .value-bubble.active,
  input[type='range'].dragging ~ .value-bubble.active {
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
`;var vt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,j=t=>{throw TypeError(t)},n=(t,i,e,l)=>{for(var c=l>1?void 0:l?ft(i,e):i,b=t.length-1,y;b>=0;b--)(y=t[b])&&(c=(l?y(i,e,c):y(c))||c);return l&&c&&vt(i,e,c),c},D=(t,i,e)=>i.has(t)||j("Cannot "+e),o=(t,i,e)=>(D(t,i,"read from private field"),i.get(t)),u=(t,i,e)=>i.has(t)?j("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(t):i.set(t,e),x=(t,i,e,l)=>(D(t,i,"write to private field"),i.set(t,e),e),s=(t,i,e)=>(D(t,i,"access private method"),e),g,a,M,f,k,_,P,F,U,G,X,K,Q,z,w,J,Z,V,T,E,N,S,I,m,B,C,L,W,A,tt,it,et,q,O;let r=class extends dt{constructor(){super(),u(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.showTicks=!1,this.showTrailInput=!1,this.showValueLabel=!0,this.range=!1,this.endValue=100,this.leadLabel="",this.trailLabel="",this.hideBoundEditors=!1,this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="0",this._draftMax="100",this._trailDisplayValue="",this._trailInvalid=!1,u(this,g,!1),u(this,z,t=>{const i=t.target;this._trailDisplayValue=String(i.value);const e=Number(i.value),l=this._trailInvalid;this._trailInvalid=!Number.isNaN(e)&&(e>this.max||e<this.min),this._trailInvalid&&!l?(x(this,g,!0),this.errorMessage=`Value must be between ${this.min} and ${this.max}`,this.invalid=!0):!this._trailInvalid&&o(this,g)&&(x(this,g,!1),this.errorMessage="",this.invalid=!1),!Number.isNaN(e)&&!this._trailInvalid&&(this.value=s(this,a,f).call(this,e))}),u(this,V,t=>{const i=t.target.valueAsNumber;this.value=i,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,T,t=>{const i=t.target.valueAsNumber;this.value=i,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,E,t=>{const i=s(this,a,f).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,i),s(this,a,w).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,N,t=>{const i=s(this,a,f).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,i),s(this,a,w).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,S,()=>{this._activeThumb="start"}),u(this,I,()=>{this._activeThumb="end"}),u(this,m,()=>{this._activeThumb=null}),u(this,B,()=>{this._focusedThumb="start"}),u(this,C,()=>{this._focusedThumb="end"}),u(this,L,()=>{o(this,m).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),u(this,W,()=>{o(this,m).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max,this._draftMin=`${this.min}`,this._draftMax=`${this.max}`}get value(){return this._internalValue??this.min}set value(t){const i=!Number.isNaN(t)&&(t>this.max||t<this.min),e=s(this,a,f).call(this,t);this._internalValue=this.range?Math.min(e,this.endValue):e,this._trailDisplayValue=String(e),this._trailInvalid=!1,i?(x(this,g,!0),this.errorMessage=`Value must be between ${this.min} and ${this.max}`,this.invalid=!0):o(this,g)&&(x(this,g,!1),this.errorMessage="",this.invalid=!1),s(this,a,w).call(this)}connectedCallback(){super.connectedCallback(),s(this,a,M).call(this),window.addEventListener("pointerup",o(this,m))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",o(this,m))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=s(this,a,K).call(this);return h`
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
                  width=${s(this,a,Q).call(this)}
                  max-width="18ch"
                  ?invalid=${this._trailInvalid}
                  plain
                  .label=${this.label||"Slider value"}
                  .value=${String(this.value)}
                  .step=${this.step}
                  @input=${o(this,z)}
                ></gds-input>`)}
          </gds-form-control-header>`)}

      <div
        id="control-row"
        class=${ut({"no-bounds":!this.leadLabel&&!this.trailLabel&&this.hideBoundEditors})}
      >
        ${p(this.leadLabel||!this.hideBoundEditors,()=>h`
            <div id="range-min" role="group" aria-label="Minimum range limit">
              ${p(!this.hideBoundEditors,()=>s(this,a,A).call(this,"min"))}
              <span class="range-side-label" aria-hidden="true"
                >${this.leadLabel}</span
              >
            </div>
          `)}

        <div id="control" style=${t}>
          <div id="track"></div>
          <div id="filled-track"></div>

          ${s(this,a,X).call(this)}

          <input
            class="native-control thumb thumb-start ${this._activeThumb==="start"?"dragging":""}"
            id="slider-start"
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .valueAsNumber=${this.value}
            aria-describedby="supporting-text extended-supporting-text message"
            aria-invalid=${this.invalid}
            aria-errormessage="message"
            aria-label=${R(s(this,a,J).call(this))}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${o(this,S)}
            @pointerup=${o(this,m)}
            @pointercancel=${o(this,m)}
            @focus=${o(this,B)}
            @blur=${o(this,L)}
            @input=${o(this,V)}
            @change=${o(this,T)}
          />

          ${p(this.range,()=>h`<input
                class="native-control thumb thumb-end ${this._activeThumb==="end"?"dragging":""}"
                id="slider-end"
                type="range"
                min=${this.min}
                max=${this.max}
                step=${this.step}
                .valueAsNumber=${this.endValue}
                aria-describedby="supporting-text extended-supporting-text message"
                aria-invalid=${this.invalid}
                aria-errormessage="message"
                aria-label=${R(s(this,a,Z).call(this))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${o(this,I)}
                @pointerup=${o(this,m)}
                @pointercancel=${o(this,m)}
                @focus=${o(this,C)}
                @blur=${o(this,W)}
                @input=${o(this,E)}
                @change=${o(this,N)}
              />`)}
          ${p(this.showValueLabel,()=>h`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  aria-hidden="true"
                  >${this.value}</output
                >
                ${p(this.range,()=>h`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      aria-hidden="true"
                      >${this.endValue}</output
                    >`)}`)}
        </div>

        ${p(this.trailLabel||!this.hideBoundEditors,()=>h`
            <div id="range-max" role="group" aria-label="Maximum range limit">
              <span class="range-side-label" aria-hidden="true"
                >${this.trailLabel}</span
              >
              ${p(!this.hideBoundEditors,()=>s(this,a,A).call(this,"max"))}
            </div>
          `)}
      </div>

      ${p(!this.plain,()=>h`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this._trailInvalid?`Value must be between ${this.min} and ${this.max}`:this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){o(this,g)&&(x(this,g,!1),this.errorMessage="",this.invalid=!1),s(this,a,M).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};g=new WeakMap;a=new WeakSet;M=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=s(this,a,f).call(this,this.value),this.endValue=s(this,a,f).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),s(this,a,w).call(this)};f=function(t){const i=this.step>0?this.step:1,e=this.min+Math.round((t-this.min)/i)*i;return Math.max(this.min,Math.min(this.max,e))};k=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};_=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};P=function(){return this.range?s(this,a,k).call(this,this.value):s(this,a,k).call(this,this.min)};F=function(){return s(this,a,k).call(this,this.range?this.endValue:this.value)};U=function(t,i=0){const e=i>0?"+":"-",l=i!==0?` ${e} ${Math.abs(i)}px`:"";return`calc(var(--_slider-thumb-size) / 2 + ${t} * (100% - var(--_slider-thumb-size))${l})`};G=function(){const t=this.max-this.min,i=this.step>0?this.step:1;return t<=0?100:Math.max(i/t*100,1)};X=function(){if(!this.showTicks)return h``;const t=[],i=s(this,a,G).call(this);for(let e=0;e<=100;e+=i){const l=this.min+(this.max-this.min)*e/100;t.push({position:e,value:l})}return h`
      ${t.map((e,l)=>{const c=e.position>=s(this,a,P).call(this)&&e.position<=s(this,a,F).call(this),b=e.position/100,y=l===0?2:l===t.length-1?-2:0;return h`
          <div
            class="tick ${c?"tick-filled":"tick-unfilled"}"
            style="left: ${s(this,a,U).call(this,b,y)}"
          ></div>
        `})}
    `};K=function(){const t=this.range?s(this,a,_).call(this,this.value):0,i=this.range?s(this,a,_).call(this,this.endValue):s(this,a,_).call(this,this.value);return[`--_range-start: ${s(this,a,P).call(this)}%`,`--_range-end: ${s(this,a,F).call(this)}%`,`--_value-start-ratio: ${s(this,a,_).call(this,this.value)}`,`--_value-end-ratio: ${s(this,a,_).call(this,this.endValue)}`,`--_fill-start-ratio: ${t}`,`--_fill-end-ratio: ${i}`,`--_tick-interval: ${s(this,a,G).call(this)}%`].join("; ")};Q=function(){return`${Math.max(this._trailDisplayValue.length+4,5)}ch`};z=new WeakMap;w=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};J=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};Z=function(){return this.label?`${this.label} end`:void 0};V=new WeakMap;T=new WeakMap;E=new WeakMap;N=new WeakMap;S=new WeakMap;I=new WeakMap;m=new WeakMap;B=new WeakMap;C=new WeakMap;L=new WeakMap;W=new WeakMap;A=function(t){const i=t==="min"?this._editingMin:this._editingMax,e=t==="min"?this._draftMin:this._draftMax,l=t==="min"?this.min:this.max,c=t==="min"?"Min":"Max";return h`
      <span class="bound-editor ${i?"editing":""}">
        <button
          class="range-editor-button"
          type="button"
          aria-label="Edit ${c.toLowerCase()} range"
          aria-hidden=${i?"true":"false"}
          tabindex=${i?"-1":"0"}
          ?disabled=${this.disabled}
          @click=${()=>s(this,a,tt).call(this,t)}
        >
          ${l}
        </button>
        <input
          class="range-editor-input"
          id="${t}-range-editor"
          type="number"
          .value=${e}
          style="min-width: ${Math.max(e.length,3)}ch"
          aria-label="${c} range"
          aria-hidden=${i?"false":"true"}
          tabindex=${i?"0":"-1"}
          ?disabled=${this.disabled}
          @input=${b=>s(this,a,it).call(this,t,b)}
          @blur=${()=>s(this,a,q).call(this,t)}
          @keydown=${b=>s(this,a,et).call(this,t,b)}
        />
      </span>
    `};tt=function(t){t==="min"?(this._draftMin=`${this.min}`,this._editingMin=!0):(this._draftMax=`${this.max}`,this._editingMax=!0),setTimeout(()=>{const i=this.shadowRoot?.querySelector(`#${t}-range-editor`);i?.focus(),i?.select()},80)};it=function(t,i){const e=i.target.value;t==="min"?this._draftMin=e:this._draftMax=e;const l=Number(e);!e||Number.isNaN(l)||(t==="min"?this.min=l:this.max=l)};et=function(t,i){if(i.key==="Enter"){s(this,a,q).call(this,t);return}i.key==="Escape"&&(i.preventDefault(),s(this,a,O).call(this,t))};q=function(t){const i=Number(t==="min"?this._draftMin:this._draftMax);Number.isNaN(i)||(t==="min"?this.min=i:this.max=i),s(this,a,O).call(this,t)};O=function(t){if(t==="min"){this._editingMin=!1,this._draftMin=`${this.min}`;return}this._editingMax=!1,this._draftMax=`${this.max}`};r.styles=[rt,gt,bt];n([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);n([d({type:Boolean})],r.prototype,"plain",2);n([d({reflect:!0})],r.prototype,"size",2);n([d({type:Number,reflect:!0})],r.prototype,"min",2);n([d({type:Number,reflect:!0})],r.prototype,"max",2);n([d({type:Number})],r.prototype,"step",2);n([d({type:Boolean,reflect:!0,attribute:"show-ticks"})],r.prototype,"showTicks",2);n([d({type:Boolean,reflect:!0,attribute:"show-trail-input"})],r.prototype,"showTrailInput",2);n([d({type:Boolean,reflect:!0,attribute:"show-value-label"})],r.prototype,"showValueLabel",2);n([d({type:Boolean,reflect:!0})],r.prototype,"range",2);n([d({type:Number})],r.prototype,"value",1);n([d({type:Number,attribute:"end-value"})],r.prototype,"endValue",2);n([d({attribute:"lead-label"})],r.prototype,"leadLabel",2);n([d({attribute:"trail-label"})],r.prototype,"trailLabel",2);n([d({type:Boolean,attribute:"hide-bound-editors"})],r.prototype,"hideBoundEditors",2);n([Y("#slider-start")],r.prototype,"_startInput",2);n([Y("#slider-end")],r.prototype,"_endInput",2);n([v()],r.prototype,"_activeThumb",2);n([v()],r.prototype,"_focusedThumb",2);n([v()],r.prototype,"_editingMin",2);n([v()],r.prototype,"_editingMax",2);n([v()],r.prototype,"_draftMin",2);n([v()],r.prototype,"_draftMax",2);n([v()],r.prototype,"_trailDisplayValue",2);n([v()],r.prototype,"_trailInvalid",2);n([$("min"),$("max"),$("step"),$("range")],r.prototype,"_handleConstraintsUpdate",1);r=n([at()],r);let H=class extends nt(ot(lt(r))){};H=n([ht("gds-slider",{dependsOn:[ct,pt,mt]})],H);export{H as G};
