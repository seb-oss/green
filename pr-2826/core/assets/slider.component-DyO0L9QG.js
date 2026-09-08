import{l as nt}from"./localized-decorator-BbJ9OoJx.js";import{i as lt,B as ot,n as c,l as ht,E as f,W as z,T as ut,C as dt,L as ct,a0 as pt,d as x,h as v,e as gt,o as H,a as bt}from"./iframe-BJon1Ubb.js";import{G as vt,a as ft}from"./form-control-header.component-Cr83rncs.js";import{f as mt}from"./form-control-host.style-BMjvzcU-.js";const _t=lt`
  :host {
    --_track-bg: var(--gds-sys-color-l3-neutral-02);
    --_fill-color: var(--gds-sys-color-l3-neutral-03);
    --_thumb-size: var(--gds-sys-space-m);
    --_track-height: var(--gds-sys-space-3xs);
    --_thumb-color: var(--gds-sys-color-l3-neutral-03);
    --_thumb-ring-color: var(--gds-sys-color-border-neutral-02);
    --_textbox-height: var(--gds-sys-space-2xl);
    --_textbox-padding: var(--gds-sys-space-s);
    --_textbox-font: var(--gds-sys-text-detail-s-regular);
    --_bubble-font: var(--gds-sys-text-detail-s-regular);
    --_bubble-padding-x: var(--gds-sys-space-xs);
    --_bubble-bg: var(--gds-sys-color-l3-neutral-03);
    --_row-gap: var(--gds-sys-space-s);
    --_bubble-gap: var(--gds-sys-space-l);
    --_bubble-gap-pressed: var(--gds-sys-space-4xs);
    --_fill-gap: calc(var(--_thumb-size) - 6px);
    --_fill-gap-start: var(--_fill-gap);
    --_fill-gap-end: var(--_fill-gap);
    --_thumb-outline-space: 4px;
    --_fill-gap-hover: calc(var(--_thumb-size) - 1px);
    --_fill-gap-pressed: calc(var(--_thumb-size) - 3px);
    --_fill-gap-focus-hover: calc(var(--_thumb-size) - 1px);
    --_t-easing-in: cubic-bezier(var(--gds-sys-motion-easing-ease-in));
    --_t-easing-out: cubic-bezier(var(--gds-sys-motion-easing-ease-out));
    --_t-duration: var(--gds-sys-motion-duration-fastest);
    --_t-duration-slow: var(--gds-sys-motion-duration-fast);
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) {
    --_thumb-size: var(--gds-sys-space-s);
    --_track-height: var(--gds-sys-space-3xs);
    --_textbox-height: var(--gds-sys-space-xl);
    --_textbox-padding: var(--gds-sys-space-xs);
    --_textbox-font: var(--gds-sys-text-detail-xs-regular);
    --_bubble-font: var(--gds-sys-text-detail-xs-regular);
    --_bubble-gap-pressed: var(--gds-sys-space-4xs);
    --_bubble-padding-x: var(--gds-sys-space-2xs);
    --_row-gap: var(--gds-sys-space-xs);
    --_fill-gap: calc(var(--_thumb-size) - 4px);
    --_fill-gap-start: var(--_fill-gap);
    --_fill-gap-end: var(--_fill-gap);
    --_fill-gap-hover: calc(var(--_thumb-size) + 1px);
    --_fill-gap-pressed: calc(var(--_thumb-size) - 2px);
    --_fill-gap-focus-hover: calc(var(--_thumb-size) + 4px);
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

  .textbox {
    -webkit-appearance: textfield;
    appearance: textfield;
    background: var(--gds-sys-color-l3-neutral-02);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    border-color: var(--gds-sys-color-border-neutral-01);
    border-radius: var(--gds-sys-radius-max);
    box-sizing: content-box;
    color: var(--gds-sys-color-content-neutral-01);
    font: var(--_textbox-font);
    min-height: calc(var(--_textbox-height) - 2 * var(--gds-sys-space-5xs));
    min-width: 3ch;
    max-width: 12ch;
    width: 3ch;
    outline: 2px solid transparent;
    outline-offset: 0px;
    padding: 0 var(--_textbox-padding);
    text-align: center;
    transition-property: outline-color, outline-offset;
    transition-duration: var(--_t-duration), var(--_t-duration);
    transition-timing-function: var(--_t-easing-out);
  }

  .textbox::-webkit-outer-spin-button,
  .textbox::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .textbox:focus-visible {
    outline-color: var(--gds-sys-color-content-neutral-01);
    outline-offset: 2px;
  }

  .textbox:disabled {
    cursor: default;
  }

  :host([readonly]) .native-control {
    cursor: default;
    pointer-events: none;
  }

  :host([readonly]) .textbox {
    cursor: default;
  }

  #track-before,
  #track-after,
  #filled-track {
    border-radius: var(--gds-sys-radius-max);
    height: var(--_track-height);
    pointer-events: none;
    position: absolute;
    top: calc(50% - (var(--_track-height) / 2));
    transition-property: inset-inline-start, inset-inline-end;
    transition-duration: 80ms;
    transition-timing-function: linear;
  }

  /* Disable the transition while actively dragging so the track follows the pointer instantly */
  #control:has(input[type='range']:active) #track-before,
  #control:has(input[type='range']:active) #track-after,
  #control:has(input[type='range']:active) #filled-track,
  #control:has(input[type='range'].dragging) #track-before,
  #control:has(input[type='range'].dragging) #track-after,
  #control:has(input[type='range'].dragging) #filled-track {
    transition-duration: 0s;
  }

  #track-before,
  #track-after {
    background: var(--_track-bg);
    z-index: 0;
  }

  #track-before {
    inset-inline-start: 0;
    inset-inline-end: calc(100% - var(--_track-before-end));
  }

  #track-after {
    inset-inline-start: var(--_track-after-start);
    inset-inline-end: 0;
  }

  #filled-track {
    background: var(--_fill-color);
    inset-inline-start: var(--_fill-start-pos);
    inset-inline-end: calc(100% - var(--_fill-end-pos));
    z-index: 1;
  }

  #control.thumb-hovering-start {
    --_fill-gap-start: var(--_fill-gap-hover);
  }

  #control.thumb-hovering-end {
    --_fill-gap-end: var(--_fill-gap-hover);
  }

  #control:has(#slider-start:active),
  #control:has(#slider-start:focus-visible),
  #control:has(#slider-start.dragging) {
    --_fill-gap-start: var(--_fill-gap-pressed);
  }

  #control:has(#slider-end:active),
  #control:has(#slider-end:focus-visible),
  #control:has(#slider-end.dragging) {
    --_fill-gap-end: var(--_fill-gap-pressed);
  }

  /* Hover + focus-visible together need a larger gap than either alone */
  #control.thumb-hovering-start:has(#slider-start:focus-visible) {
    --_fill-gap-start: var(--_fill-gap-focus-hover);
  }

  #control.thumb-hovering-end:has(#slider-end:focus-visible) {
    --_fill-gap-end: var(--_fill-gap-focus-hover);
  }

  /* Single-value mode has only #slider-start, but the visible gap uses --_fill-gap-end */
  :host(:not([range])) #control.thumb-hovering-start {
    --_fill-gap-end: var(--_fill-gap-hover);
  }

  :host(:not([range])) #control:has(#slider-start:active),
  :host(:not([range])) #control:has(#slider-start:focus-visible),
  :host(:not([range])) #control:has(#slider-start.dragging) {
    --_fill-gap-end: var(--_fill-gap-pressed);
  }

  :host(:not([range]))
    #control.thumb-hovering-start:has(#slider-start:focus-visible) {
    --_fill-gap-end: var(--_fill-gap-focus-hover);
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
    border-radius: var(--gds-sys-radius-max);
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
    border-radius: var(--gds-sys-radius-max);
    background-clip: content-box;
    height: var(--_thumb-size);
    margin-top: calc((var(--_track-height) - var(--_thumb-size)) / 2);
    pointer-events: all;
    outline: 2px solid transparent;
    outline-offset: 2px;
    scale: 1;
    transition: all 240ms;
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
    padding: 2px;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    outline-color: var(--gds-sys-color-l3-neutral-03);
  }

  input[type='range']::-webkit-slider-thumb:focus-visible {
    outline-color: var(--gds-sys-color-l3-neutral-03);
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    background: var(--_thumb-color);
    border-radius: var(--gds-sys-radius-max);
    background-clip: content-box;
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
    padding: 4px;
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
    background: var(--_bubble-bg);
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
    min-width: 4ch;
    text-align: center;
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
`;var xt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,U=t=>{throw TypeError(t)},o=(t,e,i,r)=>{for(var h=r>1?void 0:r?yt(e,i):e,p=t.length-1,d;p>=0;p--)(d=t[p])&&(h=(r?d(e,i,h):d(h))||h);return r&&h&&xt(e,i,h),h},O=(t,e,i)=>e.has(t)||U("Cannot "+i),n=(t,e,i)=>(O(t,e,"read from private field"),e.get(t)),u=(t,e,i)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),T=(t,e,i,r)=>(O(t,e,"write to private field"),e.set(t,i),i),s=(t,e,i)=>(O(t,e,"access private method"),i),y,k,a,N,g,S,m,K,J,Q,Z,j,tt,M,et,it,C,I,W,A,P,B,b,$,V,F,L,D,G,R,E,at,st,rt,q,X;let l=class extends pt{constructor(){super(),u(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.ticks=!1,this.bubble=!0,this.range=!1,this.endValue=100,this.hideTextbox=!1,this.readonly=!1,this._activeThumb=null,this._focusedThumb=null,this._hoveredThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="",this._draftMax="",this._draftMinInvalid=!1,this._draftMaxInvalid=!1,u(this,y,!1),u(this,k,{}),u(this,C,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,i=s(this,a,g).call(this,e.valueAsNumber),r=this.range?Math.min(i,this.endValue):i;r!==i&&(e.value=String(r)),this.value=r,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,I,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,i=s(this,a,g).call(this,e.valueAsNumber),r=this.range?Math.min(i,this.endValue):i;r!==i&&(e.value=String(r)),this.value=r,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,W,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,i=s(this,a,g).call(this,e.valueAsNumber),r=Math.max(this.value,i);r!==i&&(e.value=String(r)),this.endValue=r,s(this,a,M).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),u(this,A,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,i=s(this,a,g).call(this,e.valueAsNumber),r=Math.max(this.value,i);r!==i&&(e.value=String(r)),this.endValue=r,s(this,a,M).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,P,t=>{this._activeThumb="start",n(this,$).call(this,"start",t)}),u(this,B,t=>{this._activeThumb="end",n(this,$).call(this,"end",t)}),u(this,b,()=>{this._activeThumb=null,T(this,k,{})}),u(this,$,(t,e)=>{const i=e.currentTarget,r=this._activeThumb===t&&n(this,k)[t]?n(this,k)[t]:n(this,k)[t]=i.getBoundingClientRect(),h=t==="start"?this.value:this.endValue,p=s(this,a,m).call(this,h),d=r.height,_=r.left+d/2+(r.width-d)*p,w=Math.abs(e.clientX-_);this._hoveredThumb=w<=d/2?t:null}),u(this,V,t=>{this._hoveredThumb===t&&(this._hoveredThumb=null)}),u(this,F,()=>{this._focusedThumb="start"}),u(this,L,()=>{this._focusedThumb="end"}),u(this,D,()=>{n(this,b).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),u(this,G,()=>{n(this,b).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max}get value(){return this._internalValue??this.min}set value(t){const e=!Number.isNaN(t)&&(t>this.max||t<this.min),i=s(this,a,g).call(this,t);this._internalValue=this.range?Math.min(i,this.endValue):i,e?(T(this,y,!0),this.errorMessage=`Value must be between ${this.min} and ${this.max}`,this.invalid=!0):n(this,y)&&(T(this,y,!1),this.errorMessage="",this.invalid=!1),s(this,a,M).call(this)}connectedCallback(){super.connectedCallback(),s(this,a,N).call(this),window.addEventListener("pointerup",n(this,b))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",n(this,b))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=s(this,a,tt).call(this);return v`
      ${x(!this.plain,()=>v`<gds-form-control-header
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
        ${x(this.range&&!this.hideTextbox,()=>s(this,a,R).call(this,"min"))}

        <div
          id="control"
          style=${t}
          class=${gt({"thumb-hovering-start":this._hoveredThumb==="start","thumb-hovering-end":this._hoveredThumb==="end"})}
        >
          <div id="track-before"></div>
          <div id="filled-track"></div>
          <div id="track-after"></div>

          ${s(this,a,j).call(this)}

          <input
            class="native-control thumb thumb-start ${this._activeThumb==="start"?"dragging":""} ${this.range&&s(this,a,m).call(this,this.value)>.5?"upper":""}"
            id="slider-start"
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .valueAsNumber=${this.value}
            aria-describedby="supporting-text extended-supporting-text message"
            aria-invalid=${this.invalid}
            aria-errormessage="message"
            aria-label=${H(s(this,a,et).call(this))}
            aria-readonly=${this.readonly?"true":"false"}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${n(this,P)}
            @pointerup=${n(this,b)}
            @pointercancel=${n(this,b)}
            @pointermove=${e=>n(this,$).call(this,"start",e)}
            @pointerleave=${()=>n(this,V).call(this,"start")}
            @focus=${n(this,F)}
            @blur=${n(this,D)}
            @input=${n(this,C)}
            @change=${n(this,I)}
          />

          ${x(this.range,()=>v`<input
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
                aria-label=${H(s(this,a,it).call(this))}
                aria-readonly=${this.readonly?"true":"false"}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${n(this,B)}
                @pointerup=${n(this,b)}
                @pointercancel=${n(this,b)}
                @pointermove=${e=>n(this,$).call(this,"end",e)}
                @pointerleave=${()=>n(this,V).call(this,"end")}
                @focus=${n(this,L)}
                @blur=${n(this,G)}
                @input=${n(this,W)}
                @change=${n(this,A)}
              />`)}
          ${x(this.bubble,()=>v`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  aria-hidden="true"
                  >${s(this,a,E).call(this,this.value)}</output
                >
                ${x(this.range,()=>v`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      aria-hidden="true"
                      >${s(this,a,E).call(this,this.endValue)}</output
                    >`)}`)}
        </div>

        ${x(!this.hideTextbox,()=>s(this,a,R).call(this,"max"))}
      </div>

      ${x(!this.plain,()=>v`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){n(this,y)&&(T(this,y,!1),this.errorMessage="",this.invalid=!1),s(this,a,N).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};y=new WeakMap;k=new WeakMap;a=new WeakSet;N=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=s(this,a,g).call(this,this.value),this.endValue=s(this,a,g).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),s(this,a,M).call(this)};g=function(t){const e=this.step>0?this.step:1,i=this.min+Math.round((t-this.min)/e)*e;return Math.max(this.min,Math.min(this.max,i))};S=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};m=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};K=function(){return this.range?s(this,a,S).call(this,this.value):s(this,a,S).call(this,this.min)};J=function(){return s(this,a,S).call(this,this.range?this.endValue:this.value)};Q=function(t,e,i){return e?"left: 1px; transform: none":i?"left: calc(100% - 1px); transform: translateX(-100%)":`left: calc(var(--_thumb-size) / 2 + ${t} * (100% - var(--_thumb-size)))`};Z=function(){const t=this.max-this.min,e=this.step>0?this.step:1;return t<=0?100:Math.max(e/t*100,1)};j=function(){if(!this.ticks)return v``;const t=[],e=s(this,a,Z).call(this);for(let i=0;i<=100;i+=e){const r=this.min+(this.max-this.min)*i/100;t.push({position:i,value:r})}return v`
      ${t.map((i,r)=>{const h=i.position>=s(this,a,K).call(this)&&i.position<=s(this,a,J).call(this),p=i.position/100,d=r===0,_=r===t.length-1;return v`
          <div
            class="tick ${h?"tick-filled":"tick-unfilled"}"
            style="${s(this,a,Q).call(this,p,d,_)}"
          ></div>
        `})}
    `};tt=function(){const t=_=>`calc((100% - var(--_thumb-size)) * ${_} + (var(--_thumb-size) / 2))`,e=this.range?s(this,a,m).call(this,this.value):0,i=this.range?s(this,a,m).call(this,this.endValue):s(this,a,m).call(this,this.value),r=this.range?`calc(${t(e)} + var(--_fill-gap-start))`:"0%",h=`calc(${t(i)} - var(--_fill-gap-end))`,p=`calc(${t(i)} + var(--_fill-gap-end))`,d=this.range?`calc(${t(e)} - var(--_fill-gap-start))`:"0%";return[`--_value-start-ratio: ${s(this,a,m).call(this,this.value)}`,`--_value-end-ratio: ${s(this,a,m).call(this,this.endValue)}`,`--_fill-start-pos: ${r}`,`--_fill-end-pos: ${h}`,`--_track-after-start: ${p}`,`--_track-before-end: ${d}`].join("; ")};M=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};et=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};it=function(){return this.label?`${this.label} end`:void 0};C=new WeakMap;I=new WeakMap;W=new WeakMap;A=new WeakMap;P=new WeakMap;B=new WeakMap;b=new WeakMap;$=new WeakMap;V=new WeakMap;F=new WeakMap;L=new WeakMap;D=new WeakMap;G=new WeakMap;R=function(t){const e=t==="min"?this._editingMin:this._editingMax,i=t==="min"?this.value:this.range?this.endValue:this.value,r=t==="min"?this._draftMin:this._draftMax,h=t==="min"?this._draftMinInvalid:this._draftMaxInvalid,p=e?r:s(this,a,E).call(this,i),d=t==="min"?"Start value":"End value",_=this.label?`${this.label} ${d.toLowerCase()}`:d;return v`<input
      class="textbox ${h?"invalid":""}"
      id="${t}-textbox"
      type="number"
      .value=${p}
      .step=${String(this.step)}
      style="min-width: ${Math.min(Math.max(p.length,3),12)}ch"
      aria-label="${_}"
      aria-invalid=${h?"true":"false"}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @focus=${()=>s(this,a,at).call(this,t)}
      @input=${w=>s(this,a,st).call(this,t,w)}
      @blur=${()=>s(this,a,q).call(this,t)}
      @keydown=${w=>s(this,a,rt).call(this,t,w)}
    />`};E=function(t){const e=String(this.step).split(".")[1]?.length??0;return t.toFixed(e)};at=function(t){if(this.readonly)return;t==="min"?(this._draftMin=`${this.value}`,this._editingMin=!0):(this._draftMax=`${this.range?this.endValue:this.value}`,this._editingMax=!0),this.shadowRoot?.querySelector(`#${t}-textbox`)?.select()};st=function(t,e){const i=e.target.value;t==="min"?this._draftMin=i:this._draftMax=i;const r=Number(i);if(!i||Number.isNaN(r))return;const h=r<this.min||r>this.max;t==="min"?(this._draftMinInvalid=h,h||(this.value=s(this,a,g).call(this,r))):(this._draftMaxInvalid=h,h||(this.range?this.endValue=Math.max(this.value,s(this,a,g).call(this,r)):this.value=s(this,a,g).call(this,r)))};rt=function(t,e){if(e.key==="Enter"){s(this,a,q).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),s(this,a,X).call(this,t))};q=function(t){if(this.readonly)return;const e=Number(t==="min"?this._draftMin:this._draftMax);if(!Number.isNaN(e)){const i=s(this,a,g).call(this,e);t==="min"?this.value=i:this.range?this.endValue=Math.max(this.value,i):this.value=i}s(this,a,X).call(this,t)};X=function(t){if(t==="min"){this._editingMin=!1,this._draftMin="",this._draftMinInvalid=!1;return}this._editingMax=!1,this._draftMax="",this._draftMaxInvalid=!1};l.styles=[ot,mt,_t];o([c({attribute:"supporting-text"})],l.prototype,"supportingText",2);o([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);o([c({type:Boolean})],l.prototype,"plain",2);o([c({reflect:!0})],l.prototype,"size",2);o([c({type:Number,reflect:!0})],l.prototype,"min",2);o([c({type:Number,reflect:!0})],l.prototype,"max",2);o([c({type:Number})],l.prototype,"step",2);o([c({type:Boolean,reflect:!0,attribute:"ticks"})],l.prototype,"ticks",2);o([c({type:Boolean,reflect:!0,attribute:"bubble"})],l.prototype,"bubble",2);o([c({type:Boolean,reflect:!0})],l.prototype,"range",2);o([c({type:Number})],l.prototype,"value",1);o([c({type:Number,attribute:"end-value"})],l.prototype,"endValue",2);o([c({type:Boolean,attribute:"hide-textbox"})],l.prototype,"hideTextbox",2);o([c({type:Boolean,reflect:!0})],l.prototype,"readonly",2);o([ht("#slider-start")],l.prototype,"_startInput",2);o([f()],l.prototype,"_activeThumb",2);o([f()],l.prototype,"_focusedThumb",2);o([f()],l.prototype,"_hoveredThumb",2);o([f()],l.prototype,"_editingMin",2);o([f()],l.prototype,"_editingMax",2);o([f()],l.prototype,"_draftMin",2);o([f()],l.prototype,"_draftMax",2);o([f()],l.prototype,"_draftMinInvalid",2);o([f()],l.prototype,"_draftMaxInvalid",2);o([z("min"),z("max"),z("step"),z("range")],l.prototype,"_handleConstraintsUpdate",1);l=o([nt()],l);let Y=class extends ut(dt(ct(l))){};Y=o([bt("gds-slider",{dependsOn:[vt,ft]})],Y);export{Y as G};
