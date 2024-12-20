import{m as p}from"./runtime-CMQcyTl6.js";import{l as Tt}from"./localized-decorator-B8fm5KIw.js";import{T as j,i as zt,a as Ot,E as Ct}from"./lit-element-C_s9q329.js";import{n as _,r as X,g as Mt,h as E}from"./custom-element-scoping-b4lD3laR.js";import{e as Vt,a as Rt}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{e as Dt,i as Bt,t as Gt}from"./directive-CF8sV3Lr.js";import{p as qt,v as W,r as P,M as J,m as Kt,i as Xt}from"./directive-helpers-C6DiESt7.js";import{f as Ht}from"./ref-D_ho-JAG.js";import{n as Zt}from"./when-BR7zwNJC.js";import{t as Jt}from"./tokens.style-B6Zq2CtY.js";import{T as Ut}from"./transitional-styles-6hf7tRoc.js";import{w as vt}from"./watch-tFciLXSI.js";import{d as _t,a as jt}from"./attribute-converters-CdI0trPX.js";import{a as Qt}from"./button-JbY0W8yK.js";import"./flex-DnAdyWkx.js";import"./dropdown-B3lb2_Ew.js";import"./menu-heading-Do8mweoD.js";import{i as te}from"./calendar-DNOxsyKs.js";import"./calender-add-BZH2uut0.js";import"./chevron-right-BwEVIrUT.js";import"./popover-R5_F7LQe.js";import"./backdrop-BGzK9qgd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ee;function ae(t){return(e,a)=>Vt(e,a,{get(){return(this.renderRoot??ee??(ee=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*se(t,e){const a=typeof e=="function";if(t!==void 0){let i=-1;for(const s of t)i>-1&&(yield a?e(i):e),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ie(t,e){if(t!==void 0){let a=0;for(const i of t)yield e(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(t,e,a)=>{const i=new Map;for(let s=e;s<=a;s++)i.set(t[s],s);return i},ne=Dt(class extends Bt{constructor(t){if(super(t),t.type!==Gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,a){let i;a===void 0?a=e:e!==void 0&&(i=e);const s=[],n=[];let o=0;for(const c of t)s[o]=i?i(c,o):o,n[o]=a(c,o),o++;return{values:n,keys:s}}render(t,e,a){return this.dt(t,e,a).values}update(t,[e,a,i]){const s=qt(t),{values:n,keys:o}=this.dt(e,a,i);if(!Array.isArray(s))return this.ut=o,n;const c=this.ut??(this.ut=[]),r=[];let k,C,l=0,b=s.length-1,f=0,x=n.length-1;for(;l<=b&&f<=x;)if(s[l]===null)l++;else if(s[b]===null)b--;else if(c[l]===o[f])r[f]=W(s[l],n[f]),l++,f++;else if(c[b]===o[x])r[x]=W(s[b],n[x]),b--,x--;else if(c[l]===o[x])r[x]=W(s[l],n[x]),P(t,r[x+1],s[l]),l++,x--;else if(c[b]===o[f])r[f]=W(s[b],n[f]),P(t,s[l],s[b]),b--,f++;else if(k===void 0&&(k=wt(o,f,x),C=wt(c,l,b)),k.has(c[l]))if(k.has(c[b])){const D=C.get(o[f]),Z=D!==void 0?s[D]:null;if(Z===null){const bt=P(t,s[l]);W(bt,n[f]),r[f]=bt}else r[f]=W(Z,n[f]),P(t,s[l],Z),s[D]=null;f++}else J(s[b]),b--;else J(s[l]),l++;for(;f<=x;){const D=P(t,r[x+1]);W(D,n[f]),r[f++]=D}for(;l<=b;){const D=s[l++];D!==null&&J(D)}return this.ut=o,Kt(t,r),j}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class oe{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=t=>!Xt(t)&&typeof t.then=="function",kt=1073741823;class le extends Ht{constructor(){super(...arguments),this._$Cwt=kt,this._$Cbt=[],this._$CK=new re(this),this._$CX=new oe}render(...e){return e.find(a=>!xt(a))??j}update(e,a){const i=this._$Cbt;let s=i.length;this._$Cbt=a;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<a.length&&!(c>this._$Cwt);c++){const r=a[c];if(!xt(r))return this._$Cwt=c,r;c<s&&r===i[c]||(this._$Cwt=kt,s=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const C=n.deref();if(C!==void 0){const l=C._$Cbt.indexOf(r);l>-1&&l<C._$Cwt&&(C._$Cwt=l,C.setValue(k))}}))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const he=Dt(le),de=zt`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
      font-family: inherit;
      min-width: 200px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-width: 10ch;
      gap: var(--gds-space-2xs);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      border-radius: var(--gds-space-2xs);
      outline: none;
      padding-inline: var(--gds-space-2xs);
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus-visible {
        background-color: var(--gds-color-l3-background-primary);
        color: var(--gds-color-l3-content-primary);
      }

      &[data-max-width='4'] {
        width: calc(4ch + (var(--gds-space-2xs) * 2));
      }

      &[data-max-width='2'] {
        width: calc(2ch + (var(--gds-space-2xs) * 2));
      }
    }
  }
`;var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,St=t=>{throw TypeError(t)},I=(t,e,a,i)=>{for(var s=i>1?void 0:i?pe(e,a):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,a,s):o(s))||s);return i&&s&&ce(e,a,s),s},yt=(t,e,a)=>e.has(t)||St("Cannot "+a),y=(t,e,a)=>(yt(t,e,"read from private field"),a?a.call(t):e.get(t)),S=(t,e,a)=>e.has(t)?St("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Ft=(t,e,a,i)=>(yt(t,e,"write to private field"),e.set(t,a),a),w=(t,e,a)=>(yt(t,e,"access private method"),a),Y,z,O,V,R,Q,tt,et,$,Yt,A,at,L,B;let M=class extends Ot{constructor(){super(...arguments),S(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,$,at).call(this,this.value,this.length),S(this,Y,""),S(this,z,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,$,L).call(this,t+1),w(this,$,A).call(this)}),S(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,$,L).call(this,t-1),w(this,$,A).call(this)}),S(this,V,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),S(this,R,()=>{w(this,$,B).call(this)}),S(this,Q,()=>{y(this,Y)!==""&&(w(this,$,B).call(this),this.value=w(this,$,L).call(this,parseInt(this.value.toString())),w(this,$,A).call(this))}),S(this,tt,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?y(this,O).call(this):y(this,z).call(this)}),S(this,et,t=>{let e=!1;if(t.key==="ArrowUp")y(this,z).call(this),e=!0;else if(t.key==="ArrowDown")y(this,O).call(this),e=!0;else{const a=parseInt(t.key);isNaN(a)||(y(this,Y).length<this.length&&(Ft(this,Y,y(this,Y)+a.toString()),this.value=parseInt(y(this,Y))),y(this,Y).length===this.length&&(this.value=w(this,$,L).call(this,this.value),w(this,$,B).call(this),w(this,$,Yt).call(this),w(this,$,A).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",y(this,tt)),this.addEventListener("keydown",y(this,et)),this.addEventListener("blur",y(this,Q)),this.addEventListener("focus",y(this,R)),this.addEventListener("click",y(this,V)),this.addEventListener("mousedown",y(this,V))}focus(t){super.focus(t),y(this,R).call(this)}render(){return E`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,$,at).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap;z=new WeakMap;O=new WeakMap;V=new WeakMap;R=new WeakMap;Q=new WeakMap;tt=new WeakMap;et=new WeakMap;$=new WeakSet;Yt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof M){t.focus();break}t=t.nextElementSibling}};A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};at=function(t,e){return String(t).padStart(e,"0")};L=function(t){return Math.max(this.min,Math.min(this.max,t))};B=function(){Ft(this,Y,"")};M.formAssociated=!0;I([_({type:Number})],M.prototype,"value",2);I([_({type:Number})],M.prototype,"length",2);I([_({type:Number,attribute:"aria-valuemin"})],M.prototype,"min",2);I([_({type:Number,attribute:"aria-valuemax"})],M.prototype,"max",2);I([X()],M.prototype,"displayValue",2);I([vt("value")],M.prototype,"_refreshDisplayValue",1);M=I([Mt("gds-date-part-spinner")],M);var ue=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,Wt=t=>{throw TypeError(t)},d=(t,e,a,i)=>{for(var s=i>1?void 0:i?ge(e,a):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,a,s):o(s))||s);return i&&s&&ue(e,a,s),s},$t=(t,e,a)=>e.has(t)||Wt("Cannot "+a),u=(t,e,a)=>($t(t,e,"read from private field"),a?a.call(t):e.get(t)),v=(t,e,a)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),U=(t,e,a,i)=>($t(t,e,"write to private field"),e.set(t,a),a),m=(t,e,a)=>($t(t,e,"access private method"),a),T,g,Et,q,It,Nt,st,N,G,Pt,it,nt,rt,ot,lt,ht,dt,ct,pt,K,ut,gt,ft,mt,F,At,Lt;let h=class extends Qt{constructor(){super(...arguments),v(this,g),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.supportingText="",this.size="large",this.disabled=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=m(this,g,ft).call(this,"y-m-d"),v(this,T),v(this,Pt,t=>{this._elTrigger.then(e=>{var i,s;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),v(this,it,t=>{this._elTrigger.then(e=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(e.firstChild,0),a.setEnd(e.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),v(this,nt,t=>{this._elField.then(e=>{var a;t.currentTarget===e&&(t.preventDefault(),(a=t.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),v(this,rt,t=>{this._elField.then(e=>{var o;if(t.currentTarget!==e)return;t.preventDefault();const a=(o=t.clipboardData)==null?void 0:o.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const c=this._dateFormatLayout.layout,r=parseInt(n[c.findIndex(l=>l.token==="y")]),k=parseInt(n[c.findIndex(l=>l.token==="m")])-1,C=parseInt(n[c.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(C)&&(i=new Date(`${r}-${k+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,m(this,g,N).call(this))})}),v(this,ot,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),v(this,lt,t=>{t.stopPropagation(),this.value=t.detail,this.open=!1,m(this,g,N).call(this),m(this,g,G).call(this)}),v(this,ht,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),v(this,dt,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),v(this,ct,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),v(this,pt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),v(this,K,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),m(this,g,G).call(this)}),v(this,ut,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;!te(e||new Date(0),u(this,T)||new Date(0))&&(this.value=e,m(this,g,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=u(this,T))}}),v(this,gt,t=>{const e=Array.from(this._elSpinners).findIndex(a=>a===t.target);if(t.key==="ArrowRight"){const a=this._elSpinners[e+1];a&&a.focus()}if(t.key==="ArrowLeft"){const a=this._elSpinners[e-1];a&&a.focus()}}),v(this,mt,(t,e)=>{u(this,F)[e]=t;const a=new Date;a.setFullYear(parseInt(u(this,F).year)),a.setMonth(parseInt(u(this,F).month)-1),a.setDate(parseInt(u(this,F).day)),a.setHours(12,0,0,0),a.toString()!=="Invalid Date"&&(this.value=a,m(this,g,N).call(this),m(this,g,G).call(this))}),v(this,F,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=m(this,g,ft).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),Ut.instance.apply(this,"gds-datepicker")}render(){return E`
      <gds-form-control-header class="size-${this.size}">
        <label for="spinner-0" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${u(this,ot)}
        @copy=${u(this,nt)}
        @paste=${u(this,rt)}
        id="date-picker"
      >
        <div class="spinners">
          ${se(ie(this._dateFormatLayout.layout,(t,e)=>E`<gds-date-part-spinner
                  id="spinner-${e}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${u(this,F)[t.name]}
                  aria-valuemin=${m(this,g,Nt).call(this,t.name)}
                  aria-valuemax=${m(this,g,st).call(this,t.name)}
                  aria-label=${m(this,g,It).call(this,t.name)}
                  aria-describedby="label sub-label message"
                  data-max-width=${m(this,g,st).call(this,t.name).toString().length}
                  @keydown=${u(this,gt)}
                  @change=${a=>u(this,mt).call(this,a.detail.value,t.name)}
                  @focus=${u(this,it)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),E`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="small"
          rank="tertiary"
          aria-label="${p("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          <gds-icon-calender-add></gds-icon-calender-add>
        </gds-button>
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid?this.validationMessage:void 0}
      ></gds-form-control-footer>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${u(this,ut)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{var a;((a=t.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <gds-flex
          align-items="center"
          justify-content="space-between"
          gap="s"
          padding="m m 0 m"
        >
          <gds-button
            @click=${u(this,pt)}
            aria-label=${p("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${u(this,ht)}
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
            @change=${u(this,dt)}
            .maxHeight=${300}
            label="${p("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${ne(u(this,g,At),t=>t,t=>E`<gds-option value=${t}>${t}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${u(this,ct)}
            aria-label=${p("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </gds-flex>

        <gds-calendar
          id="calendar"
          @change=${u(this,lt)}
          @gds-date-focused=${u(this,K)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <gds-flex
          align-items="center"
          justify-content="space-between"
          padding="0 m m m"
        >
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,m(this,g,N).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${he(m(this,g,Et).call(this),Ct)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),m(this,g,q).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </gds-flex>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){U(this,F,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),a=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");U(this,F,{year:e,month:a,day:i})}_handleOpenChange(){this.open&&(U(this,T,this.value),this._elCalendar.then(t=>t.focus()))}};T=new WeakMap;g=new WeakSet;Et=async function(){const t=await this.getFocusedDate();let e="",a;return t&&t>this.max?(e=p("Last available date"),a=i=>{i.stopPropagation(),m(this,g,q).call(this,this.max)}):t&&t<this.min&&(e=p("First available date"),a=i=>{i.stopPropagation(),m(this,g,q).call(this,this.min)}),E`${Zt(e.length>0,()=>E`<gds-button rank="tertiary" size="small" @click=${a}>
          ${e}
        </gds-button>`,()=>Ct)}`};q=function(t){const e=new Date(t);this._elCalendar.then(a=>a.focusedDate=e).then(u(this,K))};It=function(t){return{year:p("Year"),month:p("Month"),day:p("Day")}[t]};Nt=function(t){return{year:1900,month:1,day:1}[t]};st=function(t){return{year:9999,month:12,day:31}[t]};N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};G=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};Pt=new WeakMap;it=new WeakMap;nt=new WeakMap;rt=new WeakMap;ot=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ct=new WeakMap;pt=new WeakMap;K=new WeakMap;ut=new WeakMap;gt=new WeakMap;ft=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],a=t.split(e),i=a.findIndex(r=>r==="y"),s=a.findIndex(r=>r==="m"),n=a.findIndex(r=>r==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[i,s,n].sort((r,k)=>r-k).map(r=>a[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:c}};mt=new WeakMap;F=new WeakMap;At=function(){var s;const t=this.min.getFullYear(),e=this.max.getFullYear(),a=u(this,g,Lt),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=t;n<=e;n++)yield n}}};Lt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[Jt,de];h.shadowRootOptions={mode:"open",delegatesFocus:!0};d([_({converter:_t})],h.prototype,"value",2);d([_({converter:_t})],h.prototype,"min",2);d([_({converter:_t})],h.prototype,"max",2);d([_({type:Boolean})],h.prototype,"open",2);d([_()],h.prototype,"label",2);d([_({attribute:"supporting-text"})],h.prototype,"supportingText",2);d([_({type:String})],h.prototype,"size",2);d([_({attribute:"disabled",type:Boolean,reflect:!0})],h.prototype,"disabled",2);d([_({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);d([_({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);d([_()],h.prototype,"dateformat",1);d([_({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);d([_({converter:jt,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);d([H("#calendar-button")],h.prototype,"test_calendarButton",2);d([X()],h.prototype,"_focusedMonth",2);d([X()],h.prototype,"_focusedYear",2);d([X()],h.prototype,"_dateFormatLayout",2);d([H("#calendar")],h.prototype,"_elCalendar",2);d([H("#calendar-button")],h.prototype,"_elTrigger",2);d([H("#date-picker")],h.prototype,"_elField",2);d([ae("[role=spinbutton]")],h.prototype,"_elSpinners",2);d([Rt(".input")],h.prototype,"_elInput",2);d([vt("value")],h.prototype,"_handleValueChange",1);d([vt("open")],h.prototype,"_handleOpenChange",1);h=d([Mt("gds-datepicker"),Tt()],h);
