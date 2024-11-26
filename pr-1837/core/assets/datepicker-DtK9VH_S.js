import{m as p}from"./runtime-CMQcyTl6.js";import{l as Te}from"./localized-decorator-B8fm5KIw.js";import{T as U,i as Ve,a as Re,E as Ce}from"./lit-element-C_s9q329.js";import{n as $,r as K,g as De,h as Y}from"./custom-element-scoping-b4lD3laR.js";import{e as Be,a as Ge}from"./query-p8xgzTDt.js";import{r as X}from"./query-async-MEroNOeJ.js";import{e as $e}from"./class-map-Bz98xO8-.js";import{e as Me,i as qe,t as Ke}from"./directive-CF8sV3Lr.js";import{p as Xe,v as E,r as P,M as Z,m as He,i as Ze}from"./directive-helpers-C6DiESt7.js";import{f as Je}from"./ref-D_ho-JAG.js";import{n as Se}from"./when-BR7zwNJC.js";import{t as Ue}from"./tokens.style-BpCJ0qXS.js";import{T as je}from"./transitional-styles-D3kSUer7.js";import{w as me}from"./watch-tFciLXSI.js";import{d as ve,a as Qe}from"./attribute-converters-CdI0trPX.js";import{a as et}from"./button-DRwD-DCX.js";import"./dropdown-CsdJphkX.js";import"./menu-heading-DsDkZq7g.js";import{i as tt}from"./calendar-C58WxAP5.js";import"./calendar-qXEpmrDX.js";import"./chevron-right-BwEVIrUT.js";import"./popover-BrIkCRfy.js";import"./backdrop-BGzK9qgd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at;function st(e){return(t,a)=>Be(t,a,{get(){return(this.renderRoot??at??(at=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*it(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*nt(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},rt=Me(class extends qe{constructor(e){if(super(e),e.type!==Ke.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let o=0;for(const d of e)s[o]=i?i(d,o):o,n[o]=a(d,o),o++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=Xe(e),{values:n,keys:o}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=o,n;const d=this.ut??(this.ut=[]),r=[];let k,C,l=0,_=s.length-1,g=0,x=n.length-1;for(;l<=_&&g<=x;)if(s[l]===null)l++;else if(s[_]===null)_--;else if(d[l]===o[g])r[g]=E(s[l],n[g]),l++,g++;else if(d[_]===o[x])r[x]=E(s[_],n[x]),_--,x--;else if(d[l]===o[x])r[x]=E(s[l],n[x]),P(e,r[x+1],s[l]),l++,x--;else if(d[_]===o[g])r[g]=E(s[_],n[g]),P(e,s[l],s[_]),_--,g++;else if(k===void 0&&(k=we(o,g,x),C=we(d,l,_)),k.has(d[l]))if(k.has(d[_])){const M=C.get(o[g]),H=M!==void 0?s[M]:null;if(H===null){const be=P(e,s[l]);E(be,n[g]),r[g]=be}else r[g]=E(H,n[g]),P(e,s[l],H),s[M]=null;g++}else Z(s[_]),_--;else Z(s[l]),l++;for(;g<=x;){const M=P(e,r[x+1]);E(M,n[g]),r[g++]=M}for(;l<=_;){const M=s[l++];M!==null&&Z(M)}return this.ut=o,He(e,r),U}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class lt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=e=>!Ze(e)&&typeof e.then=="function",ke=1073741823;class ht extends Je{constructor(){super(...arguments),this._$Cwt=ke,this._$Cbt=[],this._$CK=new ot(this),this._$CX=new lt}render(...t){return t.find(a=>!xe(a))??U}update(t,a){const i=this._$Cbt;let s=i.length;this._$Cbt=a;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<a.length&&!(d>this._$Cwt);d++){const r=a[d];if(!xe(r))return this._$Cwt=d,r;d<s&&r===i[d]||(this._$Cwt=ke,s=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const C=n.deref();if(C!==void 0){const l=C._$Cbt.indexOf(r);l>-1&&l<C._$Cwt&&(C._$Cwt=l,C.setValue(k))}}))}return U}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const dt=Me(ht),ct=Ve`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`;var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Fe=e=>{throw TypeError(e)},I=(e,t,a,i)=>{for(var s=i>1?void 0:i?ut(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&pt(t,a,s),s},ye=(e,t,a)=>t.has(e)||Fe("Cannot "+a),v=(e,t,a)=>(ye(e,t,"read from private field"),a?a.call(e):t.get(e)),S=(e,t,a)=>t.has(e)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),We=(e,t,a,i)=>(ye(e,t,"write to private field"),t.set(e,a),a),w=(e,t,a)=>(ye(e,t,"access private method"),a),W,O,T,V,R,j,Q,ee,y,Ye,z,te,A,B;let D=class extends Re{constructor(){super(...arguments),S(this,y),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,y,te).call(this,this.value,this.length),S(this,W,""),S(this,O,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,y,A).call(this,e+1),w(this,y,z).call(this)}),S(this,T,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,y,A).call(this,e-1),w(this,y,z).call(this)}),S(this,V,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),S(this,R,()=>{w(this,y,B).call(this)}),S(this,j,()=>{v(this,W)!==""&&(w(this,y,B).call(this),this.value=w(this,y,A).call(this,parseInt(this.value.toString())),w(this,y,z).call(this))}),S(this,Q,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?v(this,T).call(this):v(this,O).call(this)}),S(this,ee,e=>{let t=!1;if(e.key==="ArrowUp")v(this,O).call(this),t=!0;else if(e.key==="ArrowDown")v(this,T).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(v(this,W).length<this.length&&(We(this,W,v(this,W)+a.toString()),this.value=parseInt(v(this,W))),v(this,W).length===this.length&&(this.value=w(this,y,A).call(this,this.value),w(this,y,B).call(this),w(this,y,Ye).call(this),w(this,y,z).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",v(this,Q)),this.addEventListener("keydown",v(this,ee)),this.addEventListener("blur",v(this,j)),this.addEventListener("focus",v(this,R)),this.addEventListener("click",v(this,V)),this.addEventListener("mousedown",v(this,V))}focus(e){super.focus(e),v(this,R).call(this)}render(){return Y`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,y,te).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;O=new WeakMap;T=new WeakMap;V=new WeakMap;R=new WeakMap;j=new WeakMap;Q=new WeakMap;ee=new WeakMap;y=new WeakSet;Ye=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof D){e.focus();break}e=e.nextElementSibling}};z=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};te=function(e,t){return String(e).padStart(t,"0")};A=function(e){return Math.max(this.min,Math.min(this.max,e))};B=function(){We(this,W,"")};D.formAssociated=!0;I([$({type:Number})],D.prototype,"value",2);I([$({type:Number})],D.prototype,"length",2);I([$({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);I([$({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);I([K()],D.prototype,"displayValue",2);I([me("value")],D.prototype,"_refreshDisplayValue",1);D=I([De("gds-date-part-spinner")],D);var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Ee=e=>{throw TypeError(e)},u=(e,t,a,i)=>{for(var s=i>1?void 0:i?ft(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&gt(t,a,s),s},_e=(e,t,a)=>t.has(e)||Ee("Cannot "+a),c=(e,t,a)=>(_e(e,t,"read from private field"),a?a.call(e):t.get(e)),m=(e,t,a)=>t.has(e)?Ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),J=(e,t,a,i)=>(_e(e,t,"write to private field"),t.set(e,a),a),b=(e,t,a)=>(_e(e,t,"access private method"),a),L,f,Ie,G,Ne,Pe,ze,N,Ae,ae,se,ie,ne,re,oe,le,he,de,ce,q,pe,ue,ge,fe,F,Le,Oe;let h=class extends et{constructor(){super(...arguments),m(this,f),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=b(this,f,ge).call(this,"y-m-d"),m(this,L),m(this,ae,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),m(this,se,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),m(this,ie,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),m(this,ne,e=>{this._elField.then(t=>{var o;if(e.currentTarget!==t)return;e.preventDefault();const a=(o=e.clipboardData)==null?void 0:o.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const d=this._dateFormatLayout.layout,r=parseInt(n[d.findIndex(l=>l.token==="y")]),k=parseInt(n[d.findIndex(l=>l.token==="m")])-1,C=parseInt(n[d.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(C)&&(i=new Date(`${r}-${k+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,b(this,f,N).call(this))})}),m(this,re,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),m(this,oe,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,b(this,f,N).call(this)}),m(this,le,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),m(this,he,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),m(this,de,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),m(this,ce,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),m(this,q,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),b(this,f,Ae).call(this)}),m(this,pe,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!tt(t||new Date(0),c(this,L)||new Date(0))&&(this.value=t,b(this,f,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=c(this,L))}}),m(this,ue,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),m(this,fe,(e,t)=>{c(this,F)[t]=e;const a=new Date;a.setFullYear(parseInt(c(this,F).year)),a.setMonth(parseInt(c(this,F).month)-1),a.setDate(parseInt(c(this,F).day)),a.setHours(12,0,0,0),a.toString()!=="Invalid Date"&&(this.value=a,b(this,f,N).call(this))}),m(this,F,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=b(this,f,ge).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),je.instance.apply(this,"gds-datepicker")}render(){return Y`${Se(this.label&&!this.hideLabel,()=>Y`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${$e({field:!0,small:this.size==="small"})}
        id="field"
        @click=${c(this,re)}
        @copy=${c(this,ie)}
        @paste=${c(this,ne)}
      >
        <div
          class=${$e({input:!0,"is-placeholder":!this.value})}
          @focusout=${c(this,ae)}
        >
          ${it(nt(this._dateFormatLayout.layout,(e,t)=>Y`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${c(this,F)[e.name]}
                  aria-valuemin=${b(this,f,Pe).call(this,e.name)}
                  aria-valuemax=${b(this,f,ze).call(this,e.name)}
                  aria-label=${b(this,f,Ne).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${c(this,ue)}
                  @change=${a=>c(this,fe).call(this,a.detail.value,e.name)}
                  @focus=${c(this,se)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),Y`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${p("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info" aria-live="polite" id="message">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${c(this,pe)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${c(this,ce)}
            aria-label=${p("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${c(this,le)}
            .maxHeight=${300}
            label="${p("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${p("January")}</gds-option>
            <gds-option value="1">${p("February")}</gds-option>
            <gds-option value="2">${p("March")}</gds-option>
            <gds-option value="3">${p("April")}</gds-option>
            <gds-option value="4">${p("May")}</gds-option>
            <gds-option value="5">${p("June")}</gds-option>
            <gds-option value="6">${p("July")}</gds-option>
            <gds-option value="7">${p("August")}</gds-option>
            <gds-option value="8">${p("September")}</gds-option>
            <gds-option value="9">${p("October")}</gds-option>
            <gds-option value="10">${p("November")}</gds-option>
            <gds-option value="11">${p("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${c(this,he)}
            .maxHeight=${300}
            label="${p("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${rt(c(this,f,Le),e=>e,e=>Y`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${c(this,de)}
            aria-label=${p("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${c(this,oe)}
          @gds-date-focused=${c(this,q)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,b(this,f,N).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${dt(b(this,f,Ie).call(this),Ce)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),b(this,f,G).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){J(this,F,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");J(this,F,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(J(this,L,this.value),this._elCalendar.then(e=>e.focus()))}};L=new WeakMap;f=new WeakSet;Ie=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=p("Last available date"),a=i=>{i.stopPropagation(),b(this,f,G).call(this,this.max)}):e&&e<this.min&&(t=p("First available date"),a=i=>{i.stopPropagation(),b(this,f,G).call(this,this.min)}),Y`${Se(t.length>0,()=>Y`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Ce)}`};G=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(c(this,q))};Ne=function(e){return{year:p("Year"),month:p("Month"),day:p("Day")}[e]};Pe=function(e){return{year:1900,month:1,day:1}[e]};ze=function(e){return{year:9999,month:12,day:31}[e]};N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};Ae=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};ae=new WeakMap;se=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakMap;oe=new WeakMap;le=new WeakMap;he=new WeakMap;de=new WeakMap;ce=new WeakMap;q=new WeakMap;pe=new WeakMap;ue=new WeakMap;ge=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(r=>r==="y"),s=a.findIndex(r=>r==="m"),n=a.findIndex(r=>r==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const d=[i,s,n].sort((r,k)=>r-k).map(r=>a[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:t,layout:d}};fe=new WeakMap;F=new WeakMap;Le=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=c(this,f,Oe),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};Oe=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[Ue,ct];h.shadowRootOptions={mode:"open",delegatesFocus:!0};u([$({converter:ve})],h.prototype,"value",2);u([$({converter:ve})],h.prototype,"min",2);u([$({converter:ve})],h.prototype,"max",2);u([$({type:Boolean})],h.prototype,"open",2);u([$()],h.prototype,"label",2);u([$({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);u([$()],h.prototype,"size",2);u([$({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);u([$()],h.prototype,"dateformat",1);u([$({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);u([$({converter:Qe,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);u([X("#calendar-button")],h.prototype,"test_calendarButton",2);u([K()],h.prototype,"_focusedMonth",2);u([K()],h.prototype,"_focusedYear",2);u([K()],h.prototype,"_dateFormatLayout",2);u([X("#calendar")],h.prototype,"_elCalendar",2);u([X("#calendar-button")],h.prototype,"_elTrigger",2);u([X("#field")],h.prototype,"_elField",2);u([st("[role=spinbutton]")],h.prototype,"_elSpinners",2);u([Ge(".input")],h.prototype,"_elInput",2);u([me("value")],h.prototype,"_handleValueChange",1);u([me("open")],h.prototype,"_handleOpenChange",1);h=u([De("gds-datepicker"),Te()],h);
