import{l as Q}from"./localized-decorator-DGEJRqnp.js";import{i as X,v as J,n as o,f as Y,w as f,S as _,Q as Z,I as tt,H as et,a0 as it,d as g,h as p,o as A,g as st}from"./iframe-DQGdI21_.js";import{G as at,a as rt}from"./form-control-header.component-CK_5WCeI.js";import{f as nt}from"./form-control-host.style-BQ66Rfrr.js";const lt=X`
  :host {
    --_slider-track-bg: #e2e2e2;
    --_slider-fill-color: #111111;
    --_slider-thumb-size: 18px;
    --_slider-track-height: 2px;
    --_slider-thumb-color: #000000;
    --_slider-thumb-border-color: #000000;
    --_slider-thumb-ring-color: #b5b5b5;
    --_slider-thumb-focus-ring-color: #111111;
    --_slider-separator-color: rgba(150, 150, 150, 0.45);
    --_slider-separator-gap: 10%;
  }

  :host([size='small']) {
    --_slider-thumb-size: 12px;
    --_slider-track-height: 2px;
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
    column-gap: var(--gds-sys-space-3xs, 4px);
    display: inline-flex;
  }

  #range-max {
    justify-self: end;
  }

  .range-side-label {
    color: #3f3f3f;
    font: var(--gds-sys-text-detail-s-regular);
    white-space: nowrap;
  }

  .range-editor-button,
  .range-editor-input {
    background: #ffffff;
    border: 1px solid #c8c8c8;
    border-radius: 999px;
    color: #111111;
    font: var(--gds-sys-text-detail-s-regular);
    min-height: 28px;
  }

  .range-editor-button {
    cursor: pointer;
    padding: 0 10px;
    white-space: nowrap;
  }

  .range-editor-input {
    padding: 0 10px;
    text-align: center;
    width: 72px;
  }

  .range-editor-button:focus-visible,
  .range-editor-input:focus-visible {
    outline: 2px solid #111111;
    outline-offset: 2px;
  }

  .range-editor-button:disabled,
  .range-editor-input:disabled {
    background: #f5f5f5;
    color: #6f6f6f;
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
    border-radius: 999px;
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
      0 0 0 2px #ffffff,
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    height: var(--_slider-thumb-size);
    margin-top: calc(
      (var(--_slider-track-height) - var(--_slider-thumb-size)) / 2
    );
    pointer-events: all;
    transition: transform 0.12s ease;
    width: var(--_slider-thumb-size);
  }

  input[type='range']::-moz-range-thumb {
    appearance: none;
    background: var(--_slider-thumb-color);
    border: 1px solid var(--_slider-thumb-border-color);
    border-radius: 50%;
    box-shadow:
      0 0 0 2px #ffffff,
      0 0 0 3px var(--_slider-thumb-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    height: var(--_slider-thumb-size);
    pointer-events: all;
    transition: transform 0.12s ease;
    width: var(--_slider-thumb-size);
  }

  :host([disabled]) input[type='range']::-webkit-slider-thumb,
  :host([disabled]) input[type='range']::-moz-range-thumb {
    border-color: #5f5f5f;
    background: #d0d0d0;
    cursor: default;
  }

  :host(:not([disabled]))
    input[type='range']:focus-visible::-webkit-slider-thumb {
    box-shadow:
      0 0 0 2px #ffffff,
      0 0 0 4px var(--_slider-thumb-focus-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    transform: scale(1.12);
  }

  :host(:not([disabled])) input[type='range']:focus-visible::-moz-range-thumb {
    box-shadow:
      0 0 0 2px #ffffff,
      0 0 0 4px var(--_slider-thumb-focus-ring-color),
      0 2px 4px rgba(0, 0, 0, 0.35);
    transform: scale(1.12);
  }

  .thumb-start {
    z-index: 2;
  }

  .thumb-end {
    z-index: 3;
  }

  .value-bubble {
    background: #111111;
    border-radius: 999px;
    color: #ffffff;
    font: 600 12px/1 sans-serif;
    left: calc(
      (100% - var(--_slider-thumb-size)) * var(--_value-start-ratio) +
        (var(--_slider-thumb-size) / 2)
    );
    padding: 4px 6px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    opacity: 0;
    transform: translate(-50%, calc(-1 * var(--_slider-thumb-size) - 14px));
    transition:
      opacity 0.12s ease,
      transform 0.12s ease;
    visibility: hidden;
    white-space: nowrap;
    z-index: 5;
  }

  .value-bubble.active {
    opacity: 1;
    transform: translate(-50%, calc(-1 * var(--_slider-thumb-size) - 18px));
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
    color: #3f3f3f;
    display: flex;
    font: var(--gds-sys-text-detail-s-regular);
    justify-content: space-between;
    line-height: 1.4;
    margin-top: var(--gds-sys-space-3xs);
  }
`;var ot=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,D=t=>{throw TypeError(t)},r=(t,e,l,m)=>{for(var d=m>1?void 0:m?ht(e,l):e,c=t.length-1,y;c>=0;c--)(y=t[c])&&(d=(m?y(e,l,d):y(d))||d);return m&&d&&ot(e,l,d),d},G=(t,e,l)=>e.has(t)||D("Cannot "+l),n=(t,e,l)=>(G(t,e,"read from private field"),e.get(t)),h=(t,e,l)=>e.has(t)?D("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,l),s=(t,e,l)=>(G(t,e,"access private method"),l),i,$,b,x,w,I,q,O,v,H,R,k,M,z,V,T,E,u,S,C,L,N,B,U,j,K,P,W;let a=class extends it{constructor(){super(),h(this,i),this.supportingText="",this.showExtendedSupportingText=!1,this.plain=!1,this.size="large",this.min=0,this.max=100,this.step=1,this.showTicks=!1,this.ticksPosition="bottom",this.showValueLabel=!0,this.range=!1,this.endValue=100,this.minLabel="L",this.maxLabel="R",this._activeThumb=null,this._focusedThumb=null,this._editingMin=!1,this._editingMax=!1,this._draftMin="0",this._draftMax="100",h(this,k,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),h(this,M,t=>{const e=t.target.valueAsNumber;this.value=e,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,z,t=>{const e=s(this,i,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),s(this,i,v).call(this),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),h(this,V,t=>{const e=s(this,i,b).call(this,t.target.valueAsNumber);this.endValue=Math.max(this.value,e),s(this,i,v).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),h(this,T,()=>{this._activeThumb="start"}),h(this,E,()=>{this._activeThumb="end"}),h(this,u,()=>{this._activeThumb=null}),h(this,S,()=>{this._focusedThumb="start"}),h(this,C,()=>{this._focusedThumb="end"}),h(this,L,()=>{n(this,u).call(this),this._focusedThumb==="start"&&(this._focusedThumb=null)}),h(this,N,()=>{n(this,u).call(this),this._focusedThumb==="end"&&(this._focusedThumb=null)}),this._internalValue=this.min,this.endValue=this.max,this._draftMin=`${this.min}`,this._draftMax=`${this.max}`}get value(){return this._internalValue??this.min}set value(t){const e=s(this,i,b).call(this,t);this._internalValue=this.range?Math.min(e,this.endValue):e,s(this,i,v).call(this)}connectedCallback(){super.connectedCallback(),s(this,i,$).call(this),window.addEventListener("pointerup",n(this,u))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerup",n(this,u))}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t=`--_range-start: ${s(this,i,I).call(this)}%; --_range-end: ${s(this,i,q).call(this)}%; --_value-start-ratio: ${s(this,i,w).call(this,this.value)}; --_value-end-ratio: ${s(this,i,w).call(this,this.endValue)}; --_tick-interval: ${s(this,i,O).call(this)}%;`;return p`
      ${g(!this.plain,()=>p`<gds-form-control-header
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
          ${s(this,i,B).call(this,"min")}
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
            aria-label=${A(s(this,i,H).call(this))}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @pointerdown=${n(this,T)}
            @pointerup=${n(this,u)}
            @pointercancel=${n(this,u)}
            @focus=${n(this,S)}
            @blur=${n(this,L)}
            @input=${n(this,k)}
            @change=${n(this,M)}
          />

          ${g(this.range,()=>p`<input
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
                aria-label=${A(s(this,i,R).call(this))}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @pointerdown=${n(this,E)}
                @pointerup=${n(this,u)}
                @pointercancel=${n(this,u)}
                @focus=${n(this,C)}
                @blur=${n(this,N)}
                @input=${n(this,z)}
                @change=${n(this,V)}
              />`)}
          ${g(this.showValueLabel,()=>p`<output
                  class="value-bubble bubble-start ${this._isThumbVisible("start")?"active":""}"
                  >${this.value}</output
                >
                ${g(this.range,()=>p`<output
                      class="value-bubble bubble-end ${this._isThumbVisible("end")?"active":""}"
                      >${this.endValue}</output
                    >`)}`)}
        </div>

        <div id="range-max" aria-label="Maximum range limit">
          <span class="range-side-label" aria-hidden="true"
            >${this.maxLabel}</span
          >
          ${s(this,i,B).call(this,"max")}
        </div>
      </div>

      ${g(!this.plain,()=>p`<gds-form-control-footer
            id="message"
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_handleConstraintsUpdate(){s(this,i,$).call(this)}_getValidityAnchor(){return this._startInput}_isThumbVisible(t){return this._activeThumb===t||this._focusedThumb===t}};i=new WeakSet;$=function(){if(this.max<this.min){const t=this.min;this.min=this.max,this.max=t}this._internalValue=s(this,i,b).call(this,this.value),this.endValue=s(this,i,b).call(this,this.endValue),this.range&&this._internalValue>this.endValue&&(this._internalValue=this.endValue),s(this,i,v).call(this)};b=function(t){const e=this.step>0?this.step:1,l=this.min+Math.round((t-this.min)/e)*e;return Math.max(this.min,Math.min(this.max,l))};x=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)*100};w=function(t){return this.max===this.min?0:(t-this.min)/(this.max-this.min)};I=function(){return this.range?s(this,i,x).call(this,this.value):s(this,i,x).call(this,this.min)};q=function(){return s(this,i,x).call(this,this.range?this.endValue:this.value)};O=function(){const t=this.max-this.min,e=this.step>0?this.step:1;return t<=0?100:Math.max(e/t*100,1)};v=function(){this.range?this._setFormValue(`${this.value},${this.endValue}`):this._setFormValue(`${this.value}`)};H=function(){return this.range?`${this.label} start`:this.plain?this.label:void 0};R=function(){return this.label?`${this.label} end`:void 0};k=new WeakMap;M=new WeakMap;z=new WeakMap;V=new WeakMap;T=new WeakMap;E=new WeakMap;u=new WeakMap;S=new WeakMap;C=new WeakMap;L=new WeakMap;N=new WeakMap;B=function(t){const e=t==="min"?this._editingMin:this._editingMax,l=t==="min"?this._draftMin:this._draftMax,m=t==="min"?this.min:this.max,d=t==="min"?"Min":"Max";return e?p`
        <input
          class="range-editor-input"
          id="${t}-range-editor"
          type="number"
          .value=${l}
          aria-label="${d} range"
          ?disabled=${this.disabled}
          @input=${c=>s(this,i,j).call(this,t,c)}
          @blur=${()=>s(this,i,P).call(this,t)}
          @keydown=${c=>s(this,i,K).call(this,t,c)}
        />
      `:p`
      <button
        class="range-editor-button"
        type="button"
        aria-label="Edit ${d.toLowerCase()} range"
        ?disabled=${this.disabled}
        @click=${()=>s(this,i,U).call(this,t)}
      >
        ${m}
      </button>
    `};U=function(t){t==="min"?(this._draftMin=`${this.min}`,this._editingMin=!0):(this._draftMax=`${this.max}`,this._editingMax=!0),this.updateComplete.then(()=>{const e=this.shadowRoot?.querySelector(`#${t}-range-editor`);e?.focus(),e?.select()})};j=function(t,e){const l=e.target.value;if(t==="min"){this._draftMin=l;return}this._draftMax=l};K=function(t,e){if(e.key==="Enter"){s(this,i,P).call(this,t);return}e.key==="Escape"&&(e.preventDefault(),s(this,i,W).call(this,t))};P=function(t){const e=Number(t==="min"?this._draftMin:this._draftMax);Number.isNaN(e)||(t==="min"?this.min=e:this.max=e),s(this,i,W).call(this,t)};W=function(t){if(t==="min"){this._editingMin=!1,this._draftMin=`${this.min}`;return}this._editingMax=!1,this._draftMax=`${this.max}`};a.styles=[J,nt,lt];r([o({attribute:"supporting-text"})],a.prototype,"supportingText",2);r([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);r([o({type:Boolean})],a.prototype,"plain",2);r([o({reflect:!0})],a.prototype,"size",2);r([o({type:Number})],a.prototype,"min",2);r([o({type:Number})],a.prototype,"max",2);r([o({type:Number})],a.prototype,"step",2);r([o({type:Boolean,reflect:!0,attribute:"show-ticks"})],a.prototype,"showTicks",2);r([o({reflect:!0,attribute:"ticks-position"})],a.prototype,"ticksPosition",2);r([o({type:Boolean,reflect:!0,attribute:"show-value-label"})],a.prototype,"showValueLabel",2);r([o({type:Boolean,reflect:!0})],a.prototype,"range",2);r([o({type:Number})],a.prototype,"value",1);r([o({type:Number,attribute:"end-value"})],a.prototype,"endValue",2);r([o({attribute:"min-label"})],a.prototype,"minLabel",2);r([o({attribute:"max-label"})],a.prototype,"maxLabel",2);r([Y("#slider-start")],a.prototype,"_startInput",2);r([f()],a.prototype,"_activeThumb",2);r([f()],a.prototype,"_focusedThumb",2);r([f()],a.prototype,"_editingMin",2);r([f()],a.prototype,"_editingMax",2);r([f()],a.prototype,"_draftMin",2);r([f()],a.prototype,"_draftMax",2);r([_("min"),_("max"),_("step"),_("range")],a.prototype,"_handleConstraintsUpdate",1);a=r([Q()],a);let F=class extends Z(tt(et(a))){};F=r([st("gds-slider",{dependsOn:[at,rt]})],F);export{F as G};
