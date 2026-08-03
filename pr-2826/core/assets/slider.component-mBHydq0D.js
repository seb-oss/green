import{l as R}from"./localized-decorator-CVxg0usr.js";import{i as J,v as Z,n as d,f as q,w as g,S as x,Q as tt,I as et,H as st,a0 as it,d as v,h as m,o as D,g as at}from"./iframe-3Z-nmvVH.js";import{G as rt,a as nt}from"./form-control-header.component-mWsBev5N.js";import{f as ot}from"./form-control-host.style-CcZq6q0j.js";const lt=J`
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
    width: 100%;
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
    background-color: #000;
  }

  .tick-filled {
    background-color: #fff;
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
    border: 1px solid var(--_slider-thumb-border-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
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
    cursor: grabbing;
    cursor: -webkit-grabbing;
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
    cursor: grabbing;
    cursor: -webkit-grabbing;
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
    padding: var(--gds-sys-space-4xs) var(--gds-sys-space-xs);
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
`;var dt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,O=t=>{throw TypeError(t)},n=(t,e,a,l)=>{for(var h=l>1?void 0:l?ht(e,a):e,c=t.length-1,y;c>=0;c--)(y=t[c])&&(h=(l?y(e,a,h):y(h))||h);return l&&h&&dt(e,a,h),h},j=(t,e,a)=>e.has(t)||O("Cannot "+a),o=(t,e,a)=>(j(t,e,"read from private field"),e.get(t)),u=(t,e,a)=>e.has(t)?O("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),i=(t,e,a)=>(j(t,e,"access private method"),a),s,w,b,_,$,W,A,P,H,f,U,X,k,M,z,V,T,E,p,S,C,N,L,B,Y,K,Q,F,I;let r=class extends it{constructor(){super(),u(this,s),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.showTicks=!1,this.showValueLabel=!0,this.range=!1,this.endValue=100,this.minLabel="",this.maxLabel="",this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="0",this._draftMax="100",u(this,k,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,M,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,z,t=>{const e=i(this,s,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),i(this,s,f).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,V,t=>{const e=i(this,s,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),i(this,s,f).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,T,()=>{this._activeThumb="start"}),u(this,E,()=>{this._activeThumb="end"}),u(this,p,()=>{this._activeThumb=null}),u(this,S,()=>{this._focusedThumb="start"}),u(this,C,()=>{this._focusedThumb="end"}),u(this,N,()=>{o(this,p).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),u(this,L,()=>{o(this,p).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max,this._draftMin=`${this.min}`,this._draftMax=`${this.max}`}get value(){return this._internalValue??this.min}set value(t){const e=i(this,s,b).call(this,t);this._internalValue=this.range?Math.min(e,this.endValue):e,i(this,s,f).call(this)}connectedCallback(){super.connectedCallback(),i(this,s,w).call(this),window.addEventListener("pointerup",o(this,p))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",o(this,p))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=`--_range-start: ${i(this,s,W).call(this)}%; --_range-end: ${i(this,s,A).call(this)}%; --_value-start-ratio: ${i(this,s,$).call(this,this.value)}; --_value-end-ratio: ${i(this,s,$).call(this,this.endValue)}; --_tick-interval: ${i(this,s,P).call(this)}%;`;return m`
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

          ${i(this,s,H).call(this)}

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
            aria-label=${D(i(this,s,U).call(this))}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${o(this,T)}
            @pointerup=${o(this,p)}
            @pointercancel=${o(this,p)}
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
                aria-label=${D(i(this,s,X).call(this))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${o(this,E)}
                @pointerup=${o(this,p)}
                @pointercancel=${o(this,p)}
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
    `}_handleConstraintsUpdate(){i(this,s,w).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};s=new WeakSet;w=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=i(this,s,b).call(this,this.value),this.endValue=i(this,s,b).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),i(this,s,f).call(this)};b=function(t){const e=this.step>0?this.step:1,a=this.min+Math.round((t-this.min)/e)*e;return Math.max(this.min,Math.min(this.max,a))};_=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};$=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};W=function(){return this.range?i(this,s,_).call(this,this.value):i(this,s,_).call(this,this.min)};A=function(){return i(this,s,_).call(this,this.range?this.endValue:this.value)};P=function(){const t=this.max-this.min,e=this.step>0?this.step:1;return t<=0?100:Math.max(e/t*100,1)};H=function(){if(!this.showTicks)return m``;const t=[],e=i(this,s,P).call(this);for(let a=0;a<=100;a+=e){const l=this.min+(this.max-this.min)*a/100;t.push({position:a,value:l})}return m`
      ${t.map((a,l)=>{const h=a.position>=i(this,s,W).call(this)&&a.position<=i(this,s,A).call(this);let c=a.position;return l===0&&(c=Math.max(0,a.position+1)),l===t.length-1&&(c=Math.min(100,a.position-1)),m`
          <div
            class="tick ${h?"tick-filled":"tick-unfilled"}"
            style="left: ${c}%"
          ></div>
        `})}
    `};f=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};U=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};X=function(){return this.label?`${this.label} end`:void 0};k=new WeakMap;M=new WeakMap;z=new WeakMap;V=new WeakMap;T=new WeakMap;E=new WeakMap;p=new WeakMap;S=new WeakMap;C=new WeakMap;N=new WeakMap;L=new WeakMap;B=function(t){const e=t==="min"?this._editingMin:this._editingMax,a=t==="min"?this._draftMin:this._draftMax,l=t==="min"?this.min:this.max,h=t==="min"?"Min":"Max";return m`
      <span class="bound-editor ${e?"editing":""}">
        <button
          class="range-editor-button"
          type="button"
          aria-label="Edit ${h.toLowerCase()} range"
          aria-hidden=${e?"true":"false"}
          tabindex=${e?"-1":"0"}
          ?disabled=${this.disabled}
          @click=${()=>i(this,s,Y).call(this,t)}
        >
          ${l}
        </button>
        <input
          class="range-editor-input"
          id="${t}-range-editor"
          type="number"
          .value=${a}
          style="min-width: ${Math.max(a.length,3)}ch"
          aria-label="${h} range"
          aria-hidden=${e?"false":"true"}
          tabindex=${e?"0":"-1"}
          ?disabled=${this.disabled}
          @input=${c=>i(this,s,K).call(this,t,c)}
          @blur=${()=>i(this,s,F).call(this,t)}
          @keydown=${c=>i(this,s,Q).call(this,t,c)}
        />
      </span>
    `};Y=function(t){t==="min"?(this._draftMin=`${this.min}`,this._editingMin=!0):(this._draftMax=`${this.max}`,this._editingMax=!0),setTimeout(()=>{const e=this.shadowRoot?.querySelector(`#${t}-range-editor`);e?.focus(),e?.select()},80)};K=function(t,e){const a=e.target.value;t==="min"?this._draftMin=a:this._draftMax=a;const l=Number(a);!a||Number.isNaN(l)||(t==="min"?this.min=l:this.max=l)};Q=function(t,e){if(e.key==="Enter"){i(this,s,F).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),i(this,s,I).call(this,t))};F=function(t){const e=Number(t==="min"?this._draftMin:this._draftMax);Number.isNaN(e)||(t==="min"?this.min=e:this.max=e),i(this,s,I).call(this,t)};I=function(t){if(t==="min"){this._editingMin=!1,this._draftMin=`${this.min}`;return}this._editingMax=!1,this._draftMax=`${this.max}`};r.styles=[Z,ot,lt];n([d({attribute:"supporting-text"})],r.prototype,"supportingText",2);n([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);n([d({type:Boolean})],r.prototype,"plain",2);n([d({reflect:!0})],r.prototype,"size",2);n([d({type:Number})],r.prototype,"min",2);n([d({type:Number})],r.prototype,"max",2);n([d({type:Number})],r.prototype,"step",2);n([d({type:Boolean,reflect:!0,attribute:"show-ticks"})],r.prototype,"showTicks",2);n([d({type:Boolean,reflect:!0,attribute:"show-value-label"})],r.prototype,"showValueLabel",2);n([d({type:Boolean,reflect:!0})],r.prototype,"range",2);n([d({type:Number})],r.prototype,"value",1);n([d({type:Number,attribute:"end-value"})],r.prototype,"endValue",2);n([d({attribute:"min-label"})],r.prototype,"minLabel",2);n([d({attribute:"max-label"})],r.prototype,"maxLabel",2);n([q("#slider-start")],r.prototype,"_startInput",2);n([q("#slider-end")],r.prototype,"_endInput",2);n([g()],r.prototype,"_activeThumb",2);n([g()],r.prototype,"_focusedThumb",2);n([g()],r.prototype,"_editingMin",2);n([g()],r.prototype,"_editingMax",2);n([g()],r.prototype,"_draftMin",2);n([g()],r.prototype,"_draftMax",2);n([x("min"),x("max"),x("step"),x("range")],r.prototype,"_handleConstraintsUpdate",1);r=n([R()],r);let G=class extends tt(et(st(r))){};G=n([at("gds-slider",{dependsOn:[rt,nt]})],G);export{G};
