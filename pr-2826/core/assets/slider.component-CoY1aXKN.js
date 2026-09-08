import{i as _t,B as mt,n as p,l as xt,E as x,W as C,T as yt,C as kt,L as $t,a0 as wt,J as z,a1 as F,d as w,h as m,e as Mt,o as it,a as zt}from"./iframe-BHL6rpgH.js";import{l as Tt}from"./localized-decorator-C4LOLK1b.js";import{G as Vt,a as St}from"./form-control-header.component-C3ijXghP.js";import{f as Et}from"./form-control-host.style-CH_gu6gB.js";const Nt=_t`
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
    inset-inline-start: calc(
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
    transition-property: opacity, transform, visibility;
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
    inset-inline-start: calc(
      (100% - var(--_thumb-size)) * var(--_value-end-ratio) +
        (var(--_thumb-size) / 2)
    );
    z-index: 6;
  }
`;var Ct=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,st=t=>{throw TypeError(t)},o=(t,e,s,r)=>{for(var h=r>1?void 0:r?Wt(e,s):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(h=(r?d(e,s,h):d(h))||h);return r&&h&&Ct(e,s,h),h},j=(t,e,s)=>e.has(t)||st("Cannot "+s),n=(t,e,s)=>(j(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>e.has(t)?st("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),y=(t,e,s,r)=>(j(t,e,"write to private field"),e.set(t,s),s),a=(t,e,s)=>(j(t,e,"access private method"),s),T,M,E,N,W,i,v,f,D,b,P,k,rt,nt,lt,ot,ht,A,ut,ct,R,G,O,q,X,H,_,V,I,Y,U,J,K,Q,B,dt,pt,gt,tt,et,Z;let l=class extends wt{constructor(){super(),u(this,i),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.ticks=!1,this.bubble=!0,this.range=!1,u(this,T),this.hideTextbox=!1,this.readonly=!1,this._activeThumb=null,this._focusedThumb=null,this._hoveredThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="",this._draftMax="",this._draftMinInvalid=!1,this._draftMaxInvalid=!1,u(this,M,!1),u(this,E,{}),u(this,N),u(this,W),u(this,R,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,s=a(this,i,b).call(this,e.valueAsNumber),r=this.range?Math.min(s,this.endValue):s;r!==s&&(e.value=String(r)),this.value=r}),u(this,G,t=>{if(this.readonly){t.target.valueAsNumber=this.value;return}const e=t.target,s=a(this,i,b).call(this,e.valueAsNumber),r=this.range?Math.min(s,this.endValue):s;r!==s&&(e.value=String(r)),this.value=r,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,O,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,s=a(this,i,b).call(this,e.valueAsNumber),r=Math.max(this.value,s);r!==s&&(e.value=String(r)),this.endValue=r}),u(this,q,t=>{if(this.readonly){t.target.valueAsNumber=this.endValue;return}const e=t.target,s=a(this,i,b).call(this,e.valueAsNumber),r=Math.max(this.value,s);r!==s&&(e.value=String(r)),this.endValue=r,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),u(this,X,t=>{this._activeThumb="start",n(this,V).call(this,"start",t)}),u(this,H,t=>{this._activeThumb="end",n(this,V).call(this,"end",t)}),u(this,_,()=>{this._activeThumb=null,y(this,E,{})}),u(this,V,(t,e)=>{const s=e.currentTarget,r=n(this,E)[t]??=s.getBoundingClientRect(),h=t==="start"?this.value:this.endValue,c=a(this,i,k).call(this,h),d=r.height,$=r.left+d/2+(r.width-d)*c,g=Math.abs(e.clientX-$);this._hoveredThumb=g<=d/2?t:null}),u(this,I,t=>{this._hoveredThumb===t&&(this._hoveredThumb=null),delete n(this,E)[t]}),u(this,Y,()=>{this._focusedThumb="start"}),u(this,U,()=>{this._focusedThumb="end"}),u(this,J,()=>{n(this,_).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),u(this,K,()=>{n(this,_).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=a(this,i,v).call(this),this.endValue=a(this,i,f).call(this)}get value(){return this._internalValue??a(this,i,v).call(this)}set value(t){const e=a(this,i,v).call(this),s=a(this,i,f).call(this),r=!Number.isNaN(t)&&(t>s||t<e),h=a(this,i,b).call(this,t);this._internalValue=this.range?Math.min(h,this.endValue):h,r?(y(this,M,!0),this.errorMessage=z(F`Value must be between ${e} and ${s}`),this.invalid=!0):n(this,M)&&(y(this,M,!1),this.errorMessage="",this.invalid=!1),a(this,i,A).call(this)}get endValue(){return n(this,T)??a(this,i,f).call(this)}set endValue(t){const e=a(this,i,b).call(this,t);y(this,T,Math.max(e,this.value)),a(this,i,A).call(this)}connectedCallback(){super.connectedCallback(),a(this,i,D).call(this),n(this,N)===void 0&&(y(this,N,this.value),y(this,W,this.endValue)),window.addEventListener("pointerup",n(this,_))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",n(this,_))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=a(this,i,ht).call(this),e=a(this,i,v).call(this),s=a(this,i,f).call(this);return m`
      ${w(!this.plain,()=>m`<gds-form-control-header
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
        ${w(this.range&&!this.hideTextbox,()=>a(this,i,Q).call(this,"min"))}

        <div
          id="control"
          style=${t}
          class=${Mt({"thumb-hovering-start":this._hoveredThumb==="start","thumb-hovering-end":this._hoveredThumb==="end"})}
        >
          <div id="track-before"></div>
          <div id="filled-track"></div>
          <div id="track-after"></div>

          ${a(this,i,ot).call(this)}

          <input
            class="native-control thumb thumb-start ${this._activeThumb==="start"?"dragging":""} ${this.range&&a(this,i,k).call(this,this.value)>.5?"upper":""}"
            id="slider-start"
            type="range"
            min=${e}
            max=${s}
            step=${this.step}
            .valueAsNumber=${this.value}
            aria-describedby="supporting-text extended-supporting-text message"
            aria-invalid=${this.invalid}
            aria-errormessage="message"
            aria-label=${it(a(this,i,ut).call(this))}
            aria-readonly=${this.readonly?"true":"false"}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${n(this,X)}
            @pointerup=${n(this,_)}
            @pointercancel=${n(this,_)}
            @pointermove=${r=>n(this,V).call(this,"start",r)}
            @pointerleave=${()=>n(this,I).call(this,"start")}
            @focus=${n(this,Y)}
            @blur=${n(this,J)}
            @input=${n(this,R)}
            @change=${n(this,G)}
          />

          ${w(this.range,()=>m`<input
                class="native-control thumb thumb-end ${this._activeThumb==="end"?"dragging":""}"
                id="slider-end"
                type="range"
                min=${e}
                max=${s}
                step=${this.step}
                .valueAsNumber=${this.endValue}
                aria-describedby="supporting-text extended-supporting-text message"
                aria-invalid=${this.invalid}
                aria-errormessage="message"
                aria-label=${it(a(this,i,ct).call(this))}
                aria-readonly=${this.readonly?"true":"false"}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${n(this,H)}
                @pointerup=${n(this,_)}
                @pointercancel=${n(this,_)}
                @pointermove=${r=>n(this,V).call(this,"end",r)}
                @pointerleave=${()=>n(this,I).call(this,"end")}
                @focus=${n(this,U)}
                @blur=${n(this,K)}
                @input=${n(this,O)}
                @change=${n(this,q)}
              />`)}
          ${w(this.bubble,()=>m`<output
                  class="value-bubble bubble-start ${a(this,i,Z).call(this,"start")?"active":""}"
                  aria-hidden="true"
                  >${a(this,i,B).call(this,this.value)}</output
                >
                ${w(this.range,()=>m`<output
                      class="value-bubble bubble-end ${a(this,i,Z).call(this,"end")?"active":""}"
                      aria-hidden="true"
                      >${a(this,i,B).call(this,this.endValue)}</output
                    >`)}`)}
        </div>

        ${w(!this.hideTextbox,()=>a(this,i,Q).call(this,"max"))}
      </div>

      ${w(!this.plain,()=>m`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){n(this,M)&&(y(this,M,!1),this.errorMessage="",this.invalid=!1),a(this,i,D).call(this)}_getValidityAnchor(){return this._startInput}formResetCallback(){this.value=n(this,N)??a(this,i,v).call(this),this.endValue=n(this,W)??a(this,i,f).call(this)}};T=new WeakMap;M=new WeakMap;E=new WeakMap;N=new WeakMap;W=new WeakMap;i=new WeakSet;v=function(){return Math.min(this.min,this.max)};f=function(){return Math.max(this.min,this.max)};D=function(){this._internalValue=a(this,i,b).call(this,this.value),y(this,T,a(this,i,b).call(this,this.endValue)),this.range&&this._internalValue>n(this,T)&&(this._internalValue=n(this,T)),a(this,i,A).call(this)};b=function(t){const e=a(this,i,v).call(this),s=a(this,i,f).call(this),r=this.step>0?this.step:1,h=e+Math.round((t-e)/r)*r;return Math.max(e,Math.min(s,h))};P=function(t){const e=a(this,i,v).call(this),s=a(this,i,f).call(this);return s===e?0:(t-e)/(s-e)*100};k=function(t){const e=a(this,i,v).call(this),s=a(this,i,f).call(this);return s===e?0:(t-e)/(s-e)};rt=function(){return this.range?a(this,i,P).call(this,this.value):a(this,i,P).call(this,a(this,i,v).call(this))};nt=function(){return a(this,i,P).call(this,this.range?this.endValue:this.value)};lt=function(t,e,s){return e?"inset-inline-start: 1px; transform: none":s?"inset-inline-start: calc(100% - 1px); transform: translateX(-100%)":`inset-inline-start: calc(var(--_thumb-size) / 2 + ${t} * (100% - var(--_thumb-size)))`};ot=function(){if(!this.ticks)return m``;const t=a(this,i,v).call(this),s=a(this,i,f).call(this)-t,r=this.step>0?this.step:1,h=s<=0?0:Math.round(s/r),c=[];for(let g=0;g<=h;g++){const S=t+g*r,L=s<=0?0:(S-t)/s*100;c.push({position:L,value:S})}const d=a(this,i,rt).call(this),$=a(this,i,nt).call(this);return m`
      ${c.map((g,S)=>{const L=g.position>=d&&g.position<=$,bt=g.position/100,vt=S===0,ft=S===c.length-1;return m`
          <div
            class="tick ${L?"tick-filled":"tick-unfilled"}"
            style="${a(this,i,lt).call(this,bt,vt,ft)}"
          ></div>
        `})}
    `};ht=function(){const t=$=>`calc((100% - var(--_thumb-size)) * ${$} + (var(--_thumb-size) / 2))`,e=this.range?a(this,i,k).call(this,this.value):0,s=this.range?a(this,i,k).call(this,this.endValue):a(this,i,k).call(this,this.value),r=this.range?`calc(${t(e)} + var(--_fill-gap-start))`:"0%",h=`calc(${t(s)} - var(--_fill-gap-end))`,c=`calc(${t(s)} + var(--_fill-gap-end))`,d=this.range?`calc(${t(e)} - var(--_fill-gap-start))`:"0%";return[`--_value-start-ratio: ${a(this,i,k).call(this,this.value)}`,`--_value-end-ratio: ${a(this,i,k).call(this,this.endValue)}`,`--_fill-start-pos: ${r}`,`--_fill-end-pos: ${h}`,`--_track-after-start: ${c}`,`--_track-before-end: ${d}`].join("; ")};A=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};ut=function(){return this.range?this.label?z(F`${this.label} start`):void 0:this.plain?this.label:void 0};ct=function(){return this.label?z(F`${this.label} end`):void 0};R=new WeakMap;G=new WeakMap;O=new WeakMap;q=new WeakMap;X=new WeakMap;H=new WeakMap;_=new WeakMap;V=new WeakMap;I=new WeakMap;Y=new WeakMap;U=new WeakMap;J=new WeakMap;K=new WeakMap;Q=function(t){const e=t==="min"?this._editingMin:this._editingMax,s=t==="min"?this.value:this.range?this.endValue:this.value,r=t==="min"?this._draftMin:this._draftMax,h=t==="min"?this._draftMinInvalid:this._draftMaxInvalid,c=e?r:a(this,i,B).call(this,s),d=this.range?t==="min"?z("Start value"):z("End value"):z("Value"),$=this.label?z(F`${this.label} ${d.toLowerCase()}`):d;return m`<input
      class="textbox ${h?"invalid":""}"
      id="${t}-textbox"
      type="number"
      .value=${c}
      .step=${String(this.step)}
      style="min-width: ${Math.min(Math.max(c.length,3),12)}ch"
      aria-label="${$}"
      aria-invalid=${h?"true":"false"}
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @focus=${()=>a(this,i,dt).call(this,t)}
      @input=${g=>a(this,i,pt).call(this,t,g)}
      @blur=${()=>a(this,i,tt).call(this,t)}
      @keydown=${g=>a(this,i,gt).call(this,t,g)}
    />`};B=function(t){const e=String(this.step).split(".")[1]?.length??0;return t.toFixed(e)};dt=function(t){if(this.readonly)return;t==="min"?(this._draftMin=`${this.value}`,this._editingMin=!0):(this._draftMax=`${this.range?this.endValue:this.value}`,this._editingMax=!0),this.shadowRoot?.querySelector(`#${t}-textbox`)?.select()};pt=function(t,e){const s=e.target.value;t==="min"?this._draftMin=s:this._draftMax=s;const r=Number(s);if(!s||Number.isNaN(r))return;const h=r<a(this,i,v).call(this)||r>a(this,i,f).call(this);t==="min"?(this._draftMinInvalid=h,h||(this.value=a(this,i,b).call(this,r))):(this._draftMaxInvalid=h,h||(this.range?this.endValue=Math.max(this.value,a(this,i,b).call(this,r)):this.value=a(this,i,b).call(this,r)))};gt=function(t,e){if(e.key==="Enter"){a(this,i,tt).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),a(this,i,et).call(this,t))};tt=function(t){if(this.readonly)return;const e=Number(t==="min"?this._draftMin:this._draftMax);if(!Number.isNaN(e)){const s=a(this,i,b).call(this,e);t==="min"?this.value=s:this.range?this.endValue=Math.max(this.value,s):this.value=s,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}a(this,i,et).call(this,t)};et=function(t){if(t==="min"){this._editingMin=!1,this._draftMin="",this._draftMinInvalid=!1;return}this._editingMax=!1,this._draftMax="",this._draftMaxInvalid=!1};Z=function(t){return this._activeThumb===t||this._focusedThumb===t};l.styles=[mt,Et,Nt];o([p({attribute:"supporting-text"})],l.prototype,"supportingText",2);o([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);o([p({type:Boolean})],l.prototype,"plain",2);o([p({reflect:!0})],l.prototype,"size",2);o([p({type:Number,reflect:!0})],l.prototype,"min",2);o([p({type:Number,reflect:!0})],l.prototype,"max",2);o([p({type:Number})],l.prototype,"step",2);o([p({type:Boolean,reflect:!0,attribute:"ticks"})],l.prototype,"ticks",2);o([p({type:Boolean,reflect:!0,attribute:"bubble"})],l.prototype,"bubble",2);o([p({type:Boolean,reflect:!0})],l.prototype,"range",2);o([p({type:Number})],l.prototype,"value",1);o([p({type:Number,attribute:"end-value"})],l.prototype,"endValue",1);o([p({type:Boolean,attribute:"hide-textbox"})],l.prototype,"hideTextbox",2);o([p({type:Boolean,reflect:!0})],l.prototype,"readonly",2);o([xt("#slider-start")],l.prototype,"_startInput",2);o([x()],l.prototype,"_activeThumb",2);o([x()],l.prototype,"_focusedThumb",2);o([x()],l.prototype,"_hoveredThumb",2);o([x()],l.prototype,"_editingMin",2);o([x()],l.prototype,"_editingMax",2);o([x()],l.prototype,"_draftMin",2);o([x()],l.prototype,"_draftMax",2);o([x()],l.prototype,"_draftMinInvalid",2);o([x()],l.prototype,"_draftMaxInvalid",2);o([C("min"),C("max"),C("step"),C("range")],l.prototype,"_handleConstraintsUpdate",1);l=o([Tt()],l);let at=class extends yt(kt($t(l))){};at=o([zt("gds-slider",{dependsOn:[Vt,St]})],at);export{at as G};
