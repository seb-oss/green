import{n as y,r as U,g as Le,h as W}from"./gds-element-54cd6e2a.js";import{e as Ue,a as Qe}from"./query-b9d3c2af.js";import{r as Q}from"./query-async-1ff18261.js";import{n as Oe}from"./when-cf7256a5.js";import{w as ae,s as je,i as et,T as Te}from"./lit-element-71e04f06.js";import{i as tt,p as at,v as F,r as z,h as ee,m as st}from"./directive-helpers-9aabd8ef.js";import{f as it}from"./ref-ff2f01fc.js";import{e as Ve,i as nt,t as rt}from"./directive-12249aa5.js";import{e as Ne}from"./class-map-4ef1884f.js";import{m as p}from"./lit-localize-87611c26.js";import{a as ot}from"./button-cd1cef7e.js";import{T as lt}from"./transitional-styles-1a2d368e.js";import{w as De}from"./watch-c4961afe.js";import{d as We,a as ht}from"./attribute-converters-ae269b4b.js";import"./popover-046eb5e2.js";import"./backdrop-24fc6001.js";import{i as dt}from"./calendar-0ba1ee3d.js";import"./dropdown-62459351.js";import"./menu-heading-8467f282.js";import"./calendar-65d95192.js";import"./chevron-right-84e21e70.js";import{t as ct}from"./tokens.style-500fe15d.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ut;function pt(e){return(t,a)=>Ue(t,a,{get(){return(this.renderRoot??ut??(ut=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ft(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gt{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class mt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=e=>!tt(e)&&typeof e.then=="function",ze=1073741823;let vt=class extends it{constructor(){super(...arguments),this._$Cwt=ze,this._$Cbt=[],this._$CK=new gt(this),this._$CX=new mt}render(...t){return t.find(a=>!Pe(a))??ae}update(t,a){const i=this._$Cbt;let s=i.length;this._$Cbt=a;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<a.length&&!(c>this._$Cwt);c++){const r=a[c];if(!Pe(r))return this._$Cwt=c,r;c<s&&r===i[c]||(this._$Cwt=ze,s=0,Promise.resolve(r).then(async x=>{for(;o.get();)await o.get();const k=n.deref();if(k!==void 0){const l=k._$Cbt.indexOf(r);l>-1&&l<k._$Cwt&&(k._$Cwt=l,k.setValue(x))}}))}return ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const _t=Ve(vt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*yt(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},wt=Ve(class extends nt{constructor(e){if(super(e),e.type!==rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let o=0;for(const c of e)s[o]=i?i(c,o):o,n[o]=a(c,o),o++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=at(e),{values:n,keys:o}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=o,n;const c=this.ut??(this.ut=[]),r=[];let x,k,l=0,v=s.length-1,g=0,b=n.length-1;for(;l<=v&&g<=b;)if(s[l]===null)l++;else if(s[v]===null)v--;else if(c[l]===o[g])r[g]=F(s[l],n[g]),l++,g++;else if(c[v]===o[b])r[b]=F(s[v],n[b]),v--,b--;else if(c[l]===o[b])r[b]=F(s[l],n[b]),z(e,r[b+1],s[l]),l++,b--;else if(c[v]===o[g])r[g]=F(s[v],n[g]),z(e,s[l],s[v]),v--,g++;else if(x===void 0&&(x=Ae(o,g,b),k=Ae(c,l,v)),x.has(c[l]))if(x.has(c[v])){const S=k.get(o[g]),j=S!==void 0?s[S]:null;if(j===null){const Ie=z(e,s[l]);F(Ie,n[g]),r[g]=Ie}else r[g]=F(j,n[g]),z(e,s[l],j),s[S]=null;g++}else ee(s[v]),v--;else ee(s[l]),l++;for(;g<=b;){const S=z(e,r[b+1]);F(S,n[g]),r[g++]=S}for(;l<=v;){const S=s[l++];S!==null&&ee(S)}return this.ut=o,st(e,r),ae}});var bt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,E=(e,t,a,i)=>{for(var s=i>1?void 0:i?$t(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&bt(t,a,s),s},Fe=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},m=(e,t,a)=>(Fe(e,t,"read from private field"),a?a.call(e):t.get(e)),$=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Re=(e,t,a,i)=>(Fe(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),w=(e,t,a)=>(Fe(e,t,"access private method"),a),D,R,B,q,G,se,ie,ne,re,Be,I,A,K,oe,N,L,O,X;let C=class extends je{constructor(){super(...arguments),$(this,re),$(this,I),$(this,K),$(this,N),$(this,O),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,K,oe).call(this,this.value,this.length),$(this,D,""),$(this,R,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,N,L).call(this,e+1),w(this,I,A).call(this)}),$(this,B,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,N,L).call(this,e-1),w(this,I,A).call(this)}),$(this,q,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),$(this,G,()=>{w(this,O,X).call(this)}),$(this,se,()=>{m(this,D)!==""&&(w(this,O,X).call(this),this.value=w(this,N,L).call(this,parseInt(this.value.toString())),w(this,I,A).call(this))}),$(this,ie,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,B).call(this):m(this,R).call(this)}),$(this,ne,e=>{let t=!1;if(e.key==="ArrowUp")m(this,R).call(this),t=!0;else if(e.key==="ArrowDown")m(this,B).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,D).length<this.length&&(Re(this,D,m(this,D)+a.toString()),this.value=parseInt(m(this,D))),m(this,D).length===this.length&&(this.value=w(this,N,L).call(this,this.value),w(this,O,X).call(this),w(this,re,Be).call(this),w(this,I,A).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,ie)),this.addEventListener("keydown",m(this,ne)),this.addEventListener("blur",m(this,se)),this.addEventListener("focus",m(this,G)),this.addEventListener("click",m(this,q)),this.addEventListener("mousedown",m(this,q))}focus(e){super.focus(e),m(this,G).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,K,oe).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};D=new WeakMap;R=new WeakMap;B=new WeakMap;q=new WeakMap;G=new WeakMap;se=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakSet;Be=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof C){e.focus();break}e=e.nextElementSibling}};I=new WeakSet;A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};K=new WeakSet;oe=function(e,t){return String(e).padStart(t,"0")};N=new WeakSet;L=function(e){return Math.max(this.min,Math.min(this.max,e))};O=new WeakSet;X=function(){Re(this,D,"")};C.formAssociated=!0;E([y({type:Number})],C.prototype,"value",2);E([y({type:Number})],C.prototype,"length",2);E([y({type:Number,attribute:"aria-valuemin"})],C.prototype,"min",2);E([y({type:Number,attribute:"aria-valuemax"})],C.prototype,"max",2);E([U()],C.prototype,"displayValue",2);E([De("value")],C.prototype,"_refreshDisplayValue",1);C=E([Le("gds-date-part-spinner")],C);const xt=et`
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
`;var kt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,f=(e,t,a,i)=>{for(var s=i>1?void 0:i?Ct(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&kt(t,a,s),s},Ye=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},u=(e,t,a)=>(Ye(e,t,"read from private field"),a?a.call(e):t.get(e)),h=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},te=(e,t,a,i)=>(Ye(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),_=(e,t,a)=>(Ye(e,t,"access private method"),a),T,le,qe,V,H,he,Ge,de,Ke,ce,Xe,Y,P,ue,Ze,pe,fe,ge,me,ve,_e,ye,we,be,$e,J,xe,ke,Z,Ce,Se,M,Me,He,Ee,Je;let d=class extends ot{constructor(){super(...arguments),h(this,le),h(this,V),h(this,he),h(this,de),h(this,ce),h(this,Y),h(this,ue),h(this,Z),h(this,Me),h(this,Ee),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=_(this,Z,Ce).call(this,"y-m-d"),h(this,T,void 0),h(this,pe,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),h(this,fe,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),h(this,ge,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),h(this,me,e=>{this._elField.then(t=>{var o;if(e.currentTarget!==t)return;e.preventDefault();const a=(o=e.clipboardData)==null?void 0:o.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const c=this._dateFormatLayout.layout,r=parseInt(n[c.findIndex(l=>l.token==="y")]),x=parseInt(n[c.findIndex(l=>l.token==="m")])-1,k=parseInt(n[c.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(x)&&!isNaN(k)&&(i=new Date(`${r}-${x+1}-${k}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,_(this,Y,P).call(this))})}),h(this,ve,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),h(this,_e,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,_(this,Y,P).call(this)}),h(this,ye,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),h(this,we,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),h(this,be,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),h(this,$e,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),h(this,J,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),_(this,ue,Ze).call(this)}),h(this,xe,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!dt(t||new Date(0),u(this,T)||new Date(0))&&(this.value=t,_(this,Y,P).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=u(this,T))}}),h(this,ke,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),h(this,Se,(e,t)=>{u(this,M)[t]=e;const a=new Date;a.setFullYear(parseInt(u(this,M).year)),a.setMonth(parseInt(u(this,M).month)-1),a.setDate(parseInt(u(this,M).day)),a.toString()!=="Invalid Date"&&(this.value=a,_(this,Y,P).call(this))}),h(this,M,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=_(this,Z,Ce).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),lt.instance.apply(this,"gds-datepicker")}render(){return W`${Oe(this.label&&!this.hideLabel,()=>W`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${Ne({field:!0,small:this.size==="small"})}
        id="field"
        @click=${u(this,ve)}
        @copy=${u(this,ge)}
        @paste=${u(this,me)}
      >
        <div
          class=${Ne({input:!0,"is-placeholder":!this.value})}
          @focusout=${u(this,pe)}
        >
          ${ft(yt(this._dateFormatLayout.layout,(e,t)=>W`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${u(this,M)[e.name]}
                  aria-valuemin=${_(this,de,Ke).call(this,e.name)}
                  aria-valuemax=${_(this,ce,Xe).call(this,e.name)}
                  aria-label=${_(this,he,Ge).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${u(this,ke)}
                  @change=${a=>u(this,Se).call(this,a.detail.value,e.name)}
                  @focus=${u(this,fe)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),W`<span>${this._dateFormatLayout.delimiter}</span>`)}
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

      <div class="form-info">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${u(this,xe)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${u(this,$e)}
            aria-label=${p("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${u(this,ye)}
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
            @change=${u(this,we)}
            .maxHeight=${300}
            label="${p("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${wt(u(this,Me,He),e=>e,e=>W`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${u(this,be)}
            aria-label=${p("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${u(this,_e)}
          @gds-date-focused=${u(this,J)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,_(this,Y,P).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${_t(_(this,le,qe).call(this),Te)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),_(this,V,H).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){te(this,M,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");te(this,M,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(te(this,T,this.value),this._elCalendar.then(e=>e.focus()))}};T=new WeakMap;le=new WeakSet;qe=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=p("Last available date"),a=i=>{i.stopPropagation(),_(this,V,H).call(this,this.max)}):e&&e<this.min&&(t=p("First available date"),a=i=>{i.stopPropagation(),_(this,V,H).call(this,this.min)}),W`${Oe(t.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Te)}`};V=new WeakSet;H=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(u(this,J))};he=new WeakSet;Ge=function(e){return{year:p("Year"),month:p("Month"),day:p("Day")}[e]};de=new WeakSet;Ke=function(e){return{year:1900,month:1,day:1}[e]};ce=new WeakSet;Xe=function(e){return{year:9999,month:12,day:31}[e]};Y=new WeakSet;P=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};ue=new WeakSet;Ze=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};pe=new WeakMap;fe=new WeakMap;ge=new WeakMap;me=new WeakMap;ve=new WeakMap;_e=new WeakMap;ye=new WeakMap;we=new WeakMap;be=new WeakMap;$e=new WeakMap;J=new WeakMap;xe=new WeakMap;ke=new WeakMap;Z=new WeakSet;Ce=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(r=>r==="y"),s=a.findIndex(r=>r==="m"),n=a.findIndex(r=>r==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[i,s,n].sort((r,x)=>r-x).map(r=>a[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:t,layout:c}};Se=new WeakMap;M=new WeakMap;Me=new WeakSet;He=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=u(this,Ee,Je),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};Ee=new WeakSet;Je=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};d.styles=[ct,xt];d.shadowRootOptions={mode:"open",delegatesFocus:!0};f([y({converter:We})],d.prototype,"value",2);f([y({converter:We})],d.prototype,"min",2);f([y({converter:We})],d.prototype,"max",2);f([y({type:Boolean})],d.prototype,"open",2);f([y()],d.prototype,"label",2);f([y({type:Boolean,attribute:"show-week-numbers"})],d.prototype,"showWeekNumbers",2);f([y()],d.prototype,"size",2);f([y({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);f([y()],d.prototype,"dateformat",1);f([y({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);f([y({converter:ht,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);f([Q("#calendar-button")],d.prototype,"test_calendarButton",2);f([U()],d.prototype,"_focusedMonth",2);f([U()],d.prototype,"_focusedYear",2);f([U()],d.prototype,"_dateFormatLayout",2);f([Q("#calendar")],d.prototype,"_elCalendar",2);f([Q("#calendar-button")],d.prototype,"_elTrigger",2);f([Q("#field")],d.prototype,"_elField",2);f([pt("[role=spinbutton]")],d.prototype,"_elSpinners",2);f([Qe(".input")],d.prototype,"_elInput",2);f([De("value")],d.prototype,"_handleValueChange",1);f([De("open")],d.prototype,"_handleOpenChange",1);d=f([Le("gds-datepicker")],d);
