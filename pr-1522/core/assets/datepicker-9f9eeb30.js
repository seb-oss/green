import{n as y,r as j,g as We,h as W}from"./gds-element-d19a6729.js";import{e as je,a as Qe}from"./query-b9d3c2af.js";import{r as Q}from"./query-async-1ff18261.js";import{n as Le}from"./when-cf7256a5.js";import{w as se,s as et,i as tt,b as Te}from"./lit-element-52f3de9a.js";import{i as at,p as st,v as F,r as P,h as te,m as it}from"./directive-helpers-0d32f0a2.js";import{f as nt}from"./ref-e4ddd06a.js";import{e as Re,i as rt,t as ot}from"./directive-12249aa5.js";import{e as Pe}from"./class-map-531a0fa6.js";import{m as p}from"./lit-localize-87611c26.js";import{G as lt}from"./button-072279fe.js";import{T as ht}from"./transitional-styles-ec463408.js";import{w as Fe}from"./watch-c4961afe.js";import{d as Ye,a as dt}from"./attribute-converters-ae269b4b.js";import"./popover-335316de.js";import"./backdrop-a24e559d.js";import{i as ct}from"./calendar-83ec003e.js";import"./dropdown-bf2d77a8.js";import"./menu-heading-da05b809.js";import{G as ut}from"./icon-543da64a.js";import"./chevron-right-82547181.js";import{t as pt}from"./tokens.style-4c028ad8.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft;function gt(e){return(t,a)=>je(t,a,{get(){return(this.renderRoot??ft??(ft=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*mt(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class _t{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=e=>!at(e)&&typeof e.then=="function",ze=1073741823;let yt=class extends nt{constructor(){super(...arguments),this._$Cwt=ze,this._$Cbt=[],this._$CK=new vt(this),this._$CX=new _t}render(...t){return t.find(a=>!Oe(a))??se}update(t,a){const i=this._$Cbt;let s=i.length;this._$Cbt=a;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<a.length&&!(c>this._$Cwt);c++){const o=a[c];if(!Oe(o))return this._$Cwt=c,o;c<s&&o===i[c]||(this._$Cwt=ze,s=0,Promise.resolve(o).then(async x=>{for(;r.get();)await r.get();const k=n.deref();if(k!==void 0){const l=k._$Cbt.indexOf(o);l>-1&&l<k._$Cwt&&(k._$Cwt=l,k.setValue(x))}}))}return se}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const bt=Re(yt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*wt(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},$t=Re(class extends rt{constructor(e){if(super(e),e.type!==ot.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let r=0;for(const c of e)s[r]=i?i(c,r):r,n[r]=a(c,r),r++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=st(e),{values:n,keys:r}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=r,n;const c=this.ut??(this.ut=[]),o=[];let x,k,l=0,v=s.length-1,g=0,w=n.length-1;for(;l<=v&&g<=w;)if(s[l]===null)l++;else if(s[v]===null)v--;else if(c[l]===r[g])o[g]=F(s[l],n[g]),l++,g++;else if(c[v]===r[w])o[w]=F(s[v],n[w]),v--,w--;else if(c[l]===r[w])o[w]=F(s[l],n[w]),P(e,o[w+1],s[l]),l++,w--;else if(c[v]===r[g])o[g]=F(s[v],n[g]),P(e,s[l],s[v]),v--,g++;else if(x===void 0&&(x=Ae(r,g,w),k=Ae(c,l,v)),x.has(c[l]))if(x.has(c[v])){const M=k.get(r[g]),ee=M!==void 0?s[M]:null;if(ee===null){const Ne=P(e,s[l]);F(Ne,n[g]),o[g]=Ne}else o[g]=F(ee,n[g]),P(e,s[l],ee),s[M]=null;g++}else te(s[v]),v--;else te(s[l]),l++;for(;g<=w;){const M=P(e,o[w+1]);F(M,n[g]),o[g++]=M}for(;l<=v;){const M=s[l++];M!==null&&te(M)}return this.ut=r,it(e,o),se}});var xt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,V=(e,t,a,i)=>{for(var s=i>1?void 0:i?kt(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&xt(t,a,s),s},Ve=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},m=(e,t,a)=>(Ve(e,t,"read from private field"),a?a.call(e):t.get(e)),$=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Be=(e,t,a,i)=>(Ve(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),b=(e,t,a)=>(Ve(e,t,"access private method"),a),D,B,H,G,Z,ie,ne,re,oe,He,E,O,q,le,I,z,A,K;let C=class extends et{constructor(){super(...arguments),$(this,oe),$(this,E),$(this,q),$(this,I),$(this,A),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=b(this,q,le).call(this,this.value,this.length),$(this,D,""),$(this,B,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=b(this,I,z).call(this,e+1),b(this,E,O).call(this)}),$(this,H,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=b(this,I,z).call(this,e-1),b(this,E,O).call(this)}),$(this,G,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),$(this,Z,()=>{b(this,A,K).call(this)}),$(this,ie,()=>{m(this,D)!==""&&(b(this,A,K).call(this),this.value=b(this,I,z).call(this,parseInt(this.value.toString())),b(this,E,O).call(this))}),$(this,ne,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,H).call(this):m(this,B).call(this)}),$(this,re,e=>{let t=!1;if(e.key==="ArrowUp")m(this,B).call(this),t=!0;else if(e.key==="ArrowDown")m(this,H).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,D).length<this.length&&(Be(this,D,m(this,D)+a.toString()),this.value=parseInt(m(this,D))),m(this,D).length===this.length&&(this.value=b(this,I,z).call(this,this.value),b(this,A,K).call(this),b(this,oe,He).call(this),b(this,E,O).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,ne)),this.addEventListener("keydown",m(this,re)),this.addEventListener("blur",m(this,ie)),this.addEventListener("focus",m(this,Z)),this.addEventListener("click",m(this,G)),this.addEventListener("mousedown",m(this,G))}focus(e){super.focus(e),m(this,Z).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=b(this,q,le).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};D=new WeakMap;B=new WeakMap;H=new WeakMap;G=new WeakMap;Z=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakMap;oe=new WeakSet;He=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof C){e.focus();break}e=e.nextElementSibling}};E=new WeakSet;O=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};q=new WeakSet;le=function(e,t){return String(e).padStart(t,"0")};I=new WeakSet;z=function(e){return Math.max(this.min,Math.min(this.max,e))};A=new WeakSet;K=function(){Be(this,D,"")};C.formAssociated=!0;V([y({type:Number})],C.prototype,"value",2);V([y({type:Number})],C.prototype,"length",2);V([y({type:Number,attribute:"aria-valuemin"})],C.prototype,"min",2);V([y({type:Number,attribute:"aria-valuemax"})],C.prototype,"max",2);V([j()],C.prototype,"displayValue",2);V([Fe("value")],C.prototype,"_refreshDisplayValue",1);C=V([We("gds-date-part-spinner")],C);var Ct=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,St=(e,t,a,i)=>{for(var s=i>1?void 0:i?Mt(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&Ct(t,a,s),s};let T=class extends ut{};T._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';T._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';T._name="calendar";T=St([We("gds-icon-calendar")],T);const Dt=tt`
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
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-book);
      line-height: var(--gds-text-line-height-label-input-large);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-label-information-medium);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-information-medium);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
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

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-label-small);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`;var Wt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,f=(e,t,a,i)=>{for(var s=i>1?void 0:i?Ft(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&Wt(t,a,s),s},Ee=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},u=(e,t,a)=>(Ee(e,t,"read from private field"),a?a.call(e):t.get(e)),h=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},ae=(e,t,a,i)=>(Ee(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),_=(e,t,a)=>(Ee(e,t,"access private method"),a),L,he,Ge,R,J,de,Ze,ce,qe,ue,Ke,Y,N,pe,Xe,fe,ge,me,ve,_e,ye,be,we,$e,xe,U,ke,Ce,X,Me,Se,S,De,Je,Ie,Ue;let d=class extends lt{constructor(){super(...arguments),h(this,he),h(this,R),h(this,de),h(this,ce),h(this,ue),h(this,Y),h(this,pe),h(this,X),h(this,De),h(this,Ie),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=_(this,X,Me).call(this,"y-m-d"),h(this,L,void 0),h(this,fe,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),h(this,ge,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),h(this,me,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),h(this,ve,e=>{this._elField.then(t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const a=(r=e.clipboardData)==null?void 0:r.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const c=this._dateFormatLayout.layout,o=parseInt(n[c.findIndex(l=>l.token==="y")]),x=parseInt(n[c.findIndex(l=>l.token==="m")])-1,k=parseInt(n[c.findIndex(l=>l.token==="d")]);!isNaN(o)&&!isNaN(x)&&!isNaN(k)&&(i=new Date(`${o}-${x+1}-${k}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,_(this,Y,N).call(this))})}),h(this,_e,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),h(this,ye,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,_(this,Y,N).call(this)}),h(this,be,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),h(this,we,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),h(this,$e,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),h(this,xe,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),h(this,U,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),_(this,pe,Xe).call(this)}),h(this,ke,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!ct(t||new Date(0),u(this,L)||new Date(0))&&(this.value=t,_(this,Y,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=u(this,L))}}),h(this,Ce,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),h(this,Se,(e,t)=>{u(this,S)[t]=e;const a=new Date;a.setFullYear(parseInt(u(this,S).year)),a.setMonth(parseInt(u(this,S).month)-1),a.setDate(parseInt(u(this,S).day)),a.toString()!=="Invalid Date"&&(this.value=a,_(this,Y,N).call(this))}),h(this,S,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=_(this,X,Me).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),ht.instance.apply(this,"gds-datepicker")}render(){return W`${Le(this.label&&!this.hideLabel,()=>W`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${Pe({field:!0,small:this.size==="small"})}
        id="field"
        @click=${u(this,_e)}
        @copy=${u(this,me)}
        @paste=${u(this,ve)}
      >
        <div
          class=${Pe({input:!0,"is-placeholder":!this.value})}
          @focusout=${u(this,fe)}
        >
          ${mt(wt(this._dateFormatLayout.layout,(e,t)=>W`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${u(this,S)[e.name]}
                  aria-valuemin=${_(this,ce,qe).call(this,e.name)}
                  aria-valuemax=${_(this,ue,Ke).call(this,e.name)}
                  aria-label=${_(this,de,Ze).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${u(this,Ce)}
                  @change=${a=>u(this,Se).call(this,a.detail.value,e.name)}
                  @focus=${u(this,ge)}
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
        @gds-ui-state=${u(this,ke)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${u(this,xe)}
            aria-label=${p("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${u(this,be)}
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
            ${$t(u(this,De,Je),e=>e,e=>W`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${u(this,$e)}
            aria-label=${p("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${u(this,ye)}
          @gds-date-focused=${u(this,U)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,_(this,Y,N).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${bt(_(this,he,Ge).call(this),Te)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),_(this,R,J).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){ae(this,S,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");ae(this,S,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(ae(this,L,this.value),this._elCalendar.then(e=>e.focus()))}};L=new WeakMap;he=new WeakSet;Ge=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=p("Last available date"),a=i=>{i.stopPropagation(),_(this,R,J).call(this,this.max)}):e&&e<this.min&&(t=p("First available date"),a=i=>{i.stopPropagation(),_(this,R,J).call(this,this.min)}),W`${Le(t.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Te)}`};R=new WeakSet;J=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(u(this,U))};de=new WeakSet;Ze=function(e){return{year:p("Year"),month:p("Month"),day:p("Day")}[e]};ce=new WeakSet;qe=function(e){return{year:1900,month:1,day:1}[e]};ue=new WeakSet;Ke=function(e){return{year:9999,month:12,day:31}[e]};Y=new WeakSet;N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};pe=new WeakSet;Xe=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};fe=new WeakMap;ge=new WeakMap;me=new WeakMap;ve=new WeakMap;_e=new WeakMap;ye=new WeakMap;be=new WeakMap;we=new WeakMap;$e=new WeakMap;xe=new WeakMap;U=new WeakMap;ke=new WeakMap;Ce=new WeakMap;X=new WeakSet;Me=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(o=>o==="y"),s=a.findIndex(o=>o==="m"),n=a.findIndex(o=>o==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[i,s,n].sort((o,x)=>o-x).map(o=>a[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:c}};Se=new WeakMap;S=new WeakMap;De=new WeakSet;Je=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=u(this,Ie,Ue),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};Ie=new WeakSet;Ue=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};d.styles=[pt,Dt];d.shadowRootOptions={mode:"open",delegatesFocus:!0};f([y({converter:Ye})],d.prototype,"value",2);f([y({converter:Ye})],d.prototype,"min",2);f([y({converter:Ye})],d.prototype,"max",2);f([y({type:Boolean})],d.prototype,"open",2);f([y()],d.prototype,"label",2);f([y({type:Boolean,attribute:"show-week-numbers"})],d.prototype,"showWeekNumbers",2);f([y()],d.prototype,"size",2);f([y({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);f([y()],d.prototype,"dateformat",1);f([y({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);f([y({converter:dt,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);f([Q("#calendar-button")],d.prototype,"test_calendarButton",2);f([j()],d.prototype,"_focusedMonth",2);f([j()],d.prototype,"_focusedYear",2);f([j()],d.prototype,"_dateFormatLayout",2);f([Q("#calendar")],d.prototype,"_elCalendar",2);f([Q("#calendar-button")],d.prototype,"_elTrigger",2);f([Q("#field")],d.prototype,"_elField",2);f([gt("[role=spinbutton]")],d.prototype,"_elSpinners",2);f([Qe(".input")],d.prototype,"_elInput",2);f([Fe("value")],d.prototype,"_handleValueChange",1);f([Fe("open")],d.prototype,"_handleOpenChange",1);d=f([We("gds-datepicker")],d);
