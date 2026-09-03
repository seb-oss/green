import{l as it}from"./localized-decorator-DIPZWc8G.js";import{i as st,y as at,n as h,l as rt,C as m,U as $,R as nt,z as ot,J as lt,a0 as ut,d as f,h as p,o as O,a as ht}from"./iframe-BOo9vEbG.js";import{G as dt,a as ct}from"./form-control-header.component-BfZ7oGMg.js";import{f as pt}from"./form-control-host.style-P6GmLObx.js";const gt=st`
  :host {
    --_track-bg: var(--gds-sys-color-border-neutral-03);
    --_fill-color: var(--gds-sys-color-content-neutral-01);
    --_thumb-size: var(--gds-sys-space-m);
    --_track-height: var(--gds-sys-space-3xs);
    --_thumb-color: var(--gds-sys-color-content-neutral-01);
    --_thumb-ring-color: var(--gds-sys-color-border-neutral-02);
    --_bound-height: var(--gds-sys-space-2xl);
    --_bound-padding: var(--gds-sys-space-s);
    --_bound-font: var(--gds-sys-text-detail-s-regular);
    --_bubble-font: var(--gds-sys-text-detail-s-regular);
    --_bubble-padding-x: var(--gds-sys-space-xs);
    --_row-gap: var(--gds-sys-space-s);
    --_bubble-gap: calc(var(--gds-sys-space-m) + var(--gds-sys-space-4xs));
    --_bubble-gap-pressed: var(--gds-sys-space-4xs);
    --_t-easing-in: cubic-bezier(var(--gds-sys-motion-easing-ease-in));
    --_t-easing-out: cubic-bezier(var(--gds-sys-motion-easing-ease-out));
    --_t-duration: var(--gds-sys-motion-duration-fastest);
    --_t-duration-slow: var(--gds-sys-motion-duration-fast);
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) {
    --_thumb-size: var(--gds-sys-space-s);
    --_track-height: var(--gds-sys-space-3xs);
    --_bound-height: var(--gds-sys-space-xl);
    --_bound-padding: var(--gds-sys-space-xs);
    --_bound-font: var(--gds-sys-text-detail-xs-regular);
    --_bubble-font: var(--gds-sys-text-detail-xs-regular);
    --_bubble-gap-pressed: var(--gds-sys-space-4xs);
    --_bubble-padding-x: var(--gds-sys-space-2xs);
    --_row-gap: var(--gds-sys-space-xs);
  }

  #control {
    align-items: center;
    display: grid;
    flex: 1;
    height: var(--_thumb-size);
    min-height: var(--_thumb-size);
    overflow: visible;
    position: relative;
  }

  #control-row {
    align-items: center;
    display: flex;
    gap: var(--_row-gap);
  }

  .range-editor-input {
    -webkit-appearance: textfield;
    appearance: textfield;
    background: var(--gds-sys-color-l3-neutral-01);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    border-color: var(--gds-sys-color-border-neutral-02);
    border-radius: var(--gds-sys-radius-max);
    box-sizing: content-box;
    color: var(--gds-sys-color-content-neutral-01);
    font: var(--_bound-font);
    min-height: calc(var(--_bound-height) - 2 * var(--gds-sys-space-5xs));
    min-width: 3ch;
    max-width: 12ch;
    width: 3ch;
    outline: 2px solid transparent;
    outline-offset: 0px;
    padding: 0 var(--_bound-padding);
    text-align: center;
    transition-property: outline-color, outline-offset;
    transition-duration: var(--_t-duration), var(--_t-duration);
    transition-timing-function: var(--_t-easing-out);
  }

  .range-editor-input::-webkit-outer-spin-button,
  .range-editor-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .range-editor-input:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
    outline-offset: 2px;
  }

  .range-editor-input:disabled {
    cursor: default;
  }

  :host([readonly]) .native-control {
    cursor: default;
    pointer-events: none;
  }

  :host([readonly]) .range-editor-input {
    cursor: default;
  }

  #track,
  #filled-track {
    border-radius: var(--gds-sys-radius-max);
    height: var(--_track-height);
    pointer-events: none;
    position: absolute;
    top: calc(50% - (var(--_track-height) / 2));
  }

  #track {
    background: var(--_track-bg);
    inset-inline: 0;
    z-index: 0;
  }

  #filled-track {
    background: var(--_fill-color);
    inset-inline-start: calc(var(--_fill-start-ratio) * 100%);
    inset-inline-end: calc((1 - var(--_fill-end-ratio)) * 100%);
    z-index: 1;
  }

  :host(:not([ticks])) .tick {
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
    background-color: var(--gds-sys-color-content-neutral-03);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    cursor: grab;
    cursor: -webkit-grab;
    display: block;
    grid-area: 1 / 1;
    height: var(--_thumb-size);
    margin: 0;
    min-height: var(--_thumb-size);
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
    height: var(--_track-height);
  }

  input[type='range']::-moz-range-track {
    background: transparent;
    height: var(--_track-height);
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: var(--_thumb-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_thumb-ring-color),
      0 2px 4px
        color-mix(
          in srgb,
          var(--gds-sys-color-content-neutral-01) 35%,
          transparent
        ),
      inset 0 0 0 0px var(--gds-sys-color-l3-neutral-01);
    height: var(--_thumb-size);
    margin-top: calc((var(--_track-height) - var(--_thumb-size)) / 2);
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition-property:
      transform, scale, outline-color, outline-offset, box-shadow;
    transition-duration:
      var(--_t-duration), var(--_t-duration), var(--_t-duration),
      var(--_t-duration), var(--_t-duration-slow);
    transition-timing-function: var(--_t-easing-out);
    width: var(--_thumb-size);
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
      0 0 0 3px var(--_thumb-ring-color),
      0 2px 4px
        color-mix(
          in srgb,
          var(--gds-sys-color-content-neutral-01) 35%,
          transparent
        ),
      inset 0 0 0 calc(var(--_thumb-size) * 0.3)
        var(--gds-sys-color-l3-neutral-01);
  }

  input[type='range']::-webkit-slider-thumb:hover {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-webkit-slider-thumb:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    background: var(--_thumb-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px var(--gds-sys-color-l3-neutral-01),
      0 0 0 3px var(--_thumb-ring-color),
      0 2px 4px
        color-mix(
          in srgb,
          var(--gds-sys-color-content-neutral-01) 35%,
          transparent
        ),
      inset 0 0 0 0px var(--gds-sys-color-l3-neutral-01);
    height: var(--_thumb-size);
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition-property:
      transform, scale, outline-color, outline-offset, box-shadow;
    transition-duration:
      var(--_t-duration), var(--_t-duration), var(--_t-duration),
      var(--_t-duration), var(--_t-duration-slow);
    transition-timing-function: var(--_t-easing-out);
    width: var(--_thumb-size);
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
      0 0 0 3px var(--_thumb-ring-color),
      0 2px 4px
        color-mix(
          in srgb,
          var(--gds-sys-color-content-neutral-01) 35%,
          transparent
        ),
      inset 0 0 0 calc(var(--_thumb-size) * 0.3)
        var(--gds-sys-color-l3-neutral-01);
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
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  :host(:not([disabled])) input[type='range']:focus-visible::-moz-range-thumb {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  .thumb-start {
    z-index: 2;
  }

  .thumb-end {
    z-index: 3;
  }

  /* When start thumb is in upper half, elevate it so it remains reachable */
  .thumb-start.upper {
    z-index: 4;
  }

  .value-bubble {
    background: var(--gds-sys-color-l3-neutral-03);
    border-radius: var(--gds-sys-radius-max);
    color: var(--gds-sys-color-content-neutral-03);
    font: var(--_bubble-font);
    left: calc(
      (100% - var(--_thumb-size)) * var(--_value-start-ratio) +
        (var(--_thumb-size) / 2)
    );
    padding: var(--gds-sys-space-4xs) var(--_bubble-padding-x);
    pointer-events: none;
    position: absolute;
    top: calc(50% - var(--_thumb-size) / 2 - var(--_bubble-gap));
    opacity: 0;
    transform: translate(-50%, -50%) translateY(8px);
    transition-property: all;
    transition-duration: var(--_t-duration);
    transition-timing-function: var(--_t-easing-in);
    visibility: hidden;
    white-space: nowrap;
    z-index: 5;
  }

  .value-bubble.active {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
    transition-property: opacity, transform, visibility;
    transition-duration: var(--_t-duration);
    transition-timing-function: var(--_t-easing-out);
    visibility: visible;
  }

  input[type='range']:active ~ .value-bubble.active,
  input[type='range'].dragging ~ .value-bubble.active {
    transform: translate(-50%, -50%) translateY(var(--_bubble-gap-pressed));
  }

  .bubble-end {
    left: calc(
      (100% - var(--_thumb-size)) * var(--_value-end-ratio) +
        (var(--_thumb-size) / 2)
    );
    z-index: 6;
  }
`;var bt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,q=t=>{throw TypeError(t)},o=(t,e,i,r)=>{for(var u=r>1?void 0:r?vt(e,i):e,b=t.length-1,v;b>=0;b--)(v=t[b])&&(u=(r?v(e,i,u):v(u))||u);return r&&u&&bt(e,i,u),u},D=(t,e,i)=>e.has(t)||q("Cannot "+i),l=(t,e,i)=>(D(t,e,"read from private field"),e.get(t)),d=(t,e,i)=>e.has(t)?q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),z=(t,e,i,r)=>(D(t,e,"write to private field"),e.set(t,i),i),a=(t,e,i)=>(D(t,e,"access private method"),i),_,s,V,g,w,y,U,X,Y,H,J,K,x,Q,Z,E,S,T,N,I,C,c,B,A,W,P,F,j,tt,et,L,G;let n=class extends ut{constructor(){super(),d(this,s),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.ticks=!1,this.bubble=!0,this.range=!1,this.endValue=100,this.hideBoundEditors=!1,this.readonly=!1,this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="",this._draftMax="",this._draftMinInvalid=!1,this._draftMaxInvalid=!1,d(this,_,!1),d(this,E,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,i=e.valueAsNumber,r=this.range?Math.min(i,this.endValue):i;r!==i&&(e.value=String(r)),this.value=r,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),d(this,S,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,i=e.valueAsNumber,r=this.range?Math.min(i,this.endValue):i;r!==i&&(e.value=String(r)),this.value=r,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),d(this,T,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,i=a(this,s,g).call(this,e.valueAsNumber),r=Math.max(this.value,i);r!==i&&(e.value=String(r)),this.endValue=r,a(this,s,x).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),d(this,N,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,i=a(this,s,g).call(this,e.valueAsNumber),r=Math.max(this.value,i);r!==i&&(e.value=String(r)),this.endValue=r,a(this,s,x).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),d(this,I,()=>{this._activeThumb="start"}),d(this,C,()=>{this._activeThumb="end"}),d(this,c,()=>{this._activeThumb=null}),d(this,B,()=>{this._focusedThumb="start"}),d(this,A,()=>{this._focusedThumb="end"}),d(this,W,()=>{l(this,c).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),d(this,P,()=>{l(this,c).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max}get value(){return this._internalValue??this.min}set value(t){const e=!Number.isNaN(t)&&(t>this.max||t<this.min),i=a(this,s,g).call(this,t);this._internalValue=this.range?Math.min(i,this.endValue):i,e?(z(this,_,!0),this.errorMessage=`Value must be between ${this.min} and ${this.max}`,this.invalid=!0):l(this,_)&&(z(this,_,!1),this.errorMessage="",this.invalid=!1),a(this,s,x).call(this)}connectedCallback(){super.connectedCallback(),a(this,s,V).call(this),window.addEventListener("pointerup",l(this,c))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",l(this,c))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=a(this,s,K).call(this);return p`
      ${f(!this.plain,()=>p`<gds-form-control-header
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
          </gds-form-control-header>`)}

      <div id="control-row">
        ${f(this.range&&!this.hideBoundEditors,()=>a(this,s,F).call(this,"min"))}

        <div id="control" style=${t}>
          <div id="track"></div>
          <div id="filled-track"></div>

          ${a(this,s,J).call(this)}

          <input
            class="native-control thumb thumb-start ${this._activeThumb==="start"?"dragging":""} ${this.range&&a(this,s,y).call(this,this.value)>.5?"upper":""}"
            id="slider-start"
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .valueAsNumber=${this.value}
            aria-describedby="supporting-text extended-supporting-text message"
            aria-invalid=${this.invalid}
            aria-errormessage="message"
            aria-label=${O(a(this,s,Q).call(this))}
            aria-readonly=${this.readonly?"true":"false"}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${l(this,I)}
            @pointerup=${l(this,c)}
            @pointercancel=${l(this,c)}
            @focus=${l(this,B)}
            @blur=${l(this,W)}
            @input=${l(this,E)}
            @change=${l(this,S)}
          />

          ${f(this.range,()=>p`<input
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
                aria-label=${O(a(this,s,Z).call(this))}
                aria-readonly=${this.readonly?"true":"false"}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${l(this,C)}
                @pointerup=${l(this,c)}
                @pointercancel=${l(this,c)}
                @focus=${l(this,A)}
                @blur=${l(this,P)}
                @input=${l(this,T)}
                @change=${l(this,N)}
              />`)}
          ${f(this.bubble,()=>p`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  aria-hidden="true"
                  >${this.value}</output
                >
                ${f(this.range,()=>p`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      aria-hidden="true"
                      >${this.endValue}</output
                    >`)}`)}
        </div>

        ${f(!this.hideBoundEditors,()=>a(this,s,F).call(this,"max"))}
      </div>

      ${f(!this.plain,()=>p`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){l(this,_)&&(z(this,_,!1),this.errorMessage="",this.invalid=!1),a(this,s,V).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};_=new WeakMap;s=new WeakSet;V=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=a(this,s,g).call(this,this.value),this.endValue=a(this,s,g).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),a(this,s,x).call(this)};g=function(t){const e=this.step>0?this.step:1,i=this.min+Math.round((t-this.min)/e)*e;return Math.max(this.min,Math.min(this.max,i))};w=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};y=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};U=function(){return this.range?a(this,s,w).call(this,this.value):a(this,s,w).call(this,this.min)};X=function(){return a(this,s,w).call(this,this.range?this.endValue:this.value)};Y=function(t,e,i){return e?"left: 1px; transform: none":i?"left: calc(100% - 1px); transform: translateX(-100%)":`left: calc(var(--_thumb-size) / 2 + ${t} * (100% - var(--_thumb-size)))`};H=function(){const t=this.max-this.min,e=this.step>0?this.step:1;return t<=0?100:Math.max(e/t*100,1)};J=function(){if(!this.ticks)return p``;const t=[],e=a(this,s,H).call(this);for(let i=0;i<=100;i+=e){const r=this.min+(this.max-this.min)*i/100;t.push({position:i,value:r})}return p`
      ${t.map((i,r)=>{const u=i.position>=a(this,s,U).call(this)&&i.position<=a(this,s,X).call(this),b=i.position/100,v=r===0,k=r===t.length-1;return p`
          <div
            class="tick ${u?"tick-filled":"tick-unfilled"}"
            style="${a(this,s,Y).call(this,b,v,k)}"
          ></div>
        `})}
    `};K=function(){const t=this.range?a(this,s,y).call(this,this.value):0,e=this.range?a(this,s,y).call(this,this.endValue):a(this,s,y).call(this,this.value);return[`--_value-start-ratio: ${a(this,s,y).call(this,this.value)}`,`--_value-end-ratio: ${a(this,s,y).call(this,this.endValue)}`,`--_fill-start-ratio: ${t}`,`--_fill-end-ratio: ${e}`].join("; ")};x=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};Q=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};Z=function(){return this.label?`${this.label} end`:void 0};E=new WeakMap;S=new WeakMap;T=new WeakMap;N=new WeakMap;I=new WeakMap;C=new WeakMap;c=new WeakMap;B=new WeakMap;A=new WeakMap;W=new WeakMap;P=new WeakMap;F=function(t){const e=t==="min"?this._editingMin:this._editingMax,i=t==="min"?this.value:this.range?this.endValue:this.value,r=t==="min"?this._draftMin:this._draftMax,u=t==="min"?this._draftMinInvalid:this._draftMaxInvalid,b=e?r:String(i),v=t==="min"?"Start value":"End value",k=this.label?`${this.label} ${v.toLowerCase()}`:v;return p`<input
      class="range-editor-input ${u?"invalid":""}"
      id="${t}-range-editor"
      type="number"
      .value=${b}
      .step=${String(this.step)}
      style="min-width: ${Math.min(Math.max(b.length,3),12)}ch"
      aria-label="${k}"
      aria-invalid=${u?"true":"false"}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @focus=${()=>a(this,s,j).call(this,t)}
      @input=${M=>a(this,s,tt).call(this,t,M)}
      @blur=${()=>a(this,s,L).call(this,t)}
      @keydown=${M=>a(this,s,et).call(this,t,M)}
    />`};j=function(t){if(this.readonly)return;t==="min"?(this._draftMin=`${this.value}`,this._editingMin=!0):(this._draftMax=`${this.range?this.endValue:this.value}`,this._editingMax=!0),this.shadowRoot?.querySelector(`#${t}-range-editor`)?.select()};tt=function(t,e){const i=e.target.value;t==="min"?this._draftMin=i:this._draftMax=i;const r=Number(i);if(!i||Number.isNaN(r))return;const u=r<this.min||r>this.max;t==="min"?(this._draftMinInvalid=u,u||(this.value=a(this,s,g).call(this,r))):(this._draftMaxInvalid=u,u||(this.range?this.endValue=Math.max(this.value,a(this,s,g).call(this,r)):this.value=a(this,s,g).call(this,r)))};et=function(t,e){if(e.key==="Enter"){a(this,s,L).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),a(this,s,G).call(this,t))};L=function(t){if(this.readonly)return;const e=Number(t==="min"?this._draftMin:this._draftMax);if(!Number.isNaN(e)){const i=a(this,s,g).call(this,e);t==="min"?this.value=i:this.range?this.endValue=Math.max(this.value,i):this.value=i}a(this,s,G).call(this,t)};G=function(t){if(t==="min"){this._editingMin=!1,this._draftMin="",this._draftMinInvalid=!1;return}this._editingMax=!1,this._draftMax="",this._draftMaxInvalid=!1};n.styles=[at,pt,gt];o([h({attribute:"supporting-text"})],n.prototype,"supportingText",2);o([h({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);o([h({type:Boolean})],n.prototype,"plain",2);o([h({reflect:!0})],n.prototype,"size",2);o([h({type:Number,reflect:!0})],n.prototype,"min",2);o([h({type:Number,reflect:!0})],n.prototype,"max",2);o([h({type:Number})],n.prototype,"step",2);o([h({type:Boolean,reflect:!0,attribute:"ticks"})],n.prototype,"ticks",2);o([h({type:Boolean,reflect:!0,attribute:"bubble"})],n.prototype,"bubble",2);o([h({type:Boolean,reflect:!0})],n.prototype,"range",2);o([h({type:Number})],n.prototype,"value",1);o([h({type:Number,attribute:"end-value"})],n.prototype,"endValue",2);o([h({type:Boolean,attribute:"hide-bound-editors"})],n.prototype,"hideBoundEditors",2);o([h({type:Boolean,reflect:!0})],n.prototype,"readonly",2);o([rt("#slider-start")],n.prototype,"_startInput",2);o([m()],n.prototype,"_activeThumb",2);o([m()],n.prototype,"_focusedThumb",2);o([m()],n.prototype,"_editingMin",2);o([m()],n.prototype,"_editingMax",2);o([m()],n.prototype,"_draftMin",2);o([m()],n.prototype,"_draftMax",2);o([m()],n.prototype,"_draftMinInvalid",2);o([m()],n.prototype,"_draftMaxInvalid",2);o([$("min"),$("max"),$("step"),$("range")],n.prototype,"_handleConstraintsUpdate",1);n=o([it()],n);let R=class extends nt(ot(lt(n))){};R=o([ht("gds-slider",{dependsOn:[dt,ct]})],R);export{R as G};
