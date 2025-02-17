import{m as c}from"./runtime-CMQcyTl6.js";import{l as Vt}from"./localized-decorator-iufJoRiP.js";import{T as Q,i as Ot,a as Rt,E as Dt}from"./lit-element-C_s9q329.js";import{n as b,r as H,g as St,h as M}from"./custom-element-scoping-BEGY3AqQ.js";import{e as Bt,a as Gt}from"./query-p8xgzTDt.js";import{r as Z}from"./query-async-MEroNOeJ.js";import{o as qt}from"./field-base-BWFMK9oI.js";import{e as Ft,i as Kt,t as Xt}from"./directive-CF8sV3Lr.js";import{p as Ht,v as E,r as A,M as U,m as Zt,i as Jt}from"./directive-helpers-C6DiESt7.js";import{f as Ut}from"./ref-D_ho-JAG.js";import{n as V}from"./when-BR7zwNJC.js";import{t as jt}from"./tokens.style-CFvqdzpw.js";import{T as Qt}from"./transitional-styles-gKBkOdeg.js";import{w as _t}from"./watch-tFciLXSI.js";import{d as yt,a as te}from"./attribute-converters-CdI0trPX.js";import{w as ee,b as se,d as ae}from"./declarative-layout-mixins-DZOZCYEp.js";import{a as ie}from"./button-D2kPj2EJ.js";import"./flex-BISTsYvd.js";import"./dropdown-WuUK4Wjr.js";import"./menu-heading-CRd3Rn1p.js";import{i as ne}from"./calendar-D8kcp-Qw.js";import"./calender-add-CE9vLacF.js";import"./chevron-right-CuFgXs1t.js";import"./popover-Vhl5uRI3.js";import"./backdrop-DObgcszK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let re;function oe(t){return(e,s)=>Bt(e,s,{get(){return(this.renderRoot??re??(re=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*le(t,e){const s=typeof e=="function";if(t!==void 0){let i=-1;for(const a of t)i>-1&&(yield s?e(i):e),i++,yield a}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},he=Ft(class extends Kt{constructor(t){if(super(t),t.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let o=0;for(const d of t)a[o]=i?i(d,o):o,n[o]=s(d,o),o++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Ht(t),{values:n,keys:o}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=o,n;const d=this.ut??(this.ut=[]),r=[];let k,C,l=0,$=a.length-1,f=0,x=n.length-1;for(;l<=$&&f<=x;)if(a[l]===null)l++;else if(a[$]===null)$--;else if(d[l]===o[f])r[f]=E(a[l],n[f]),l++,f++;else if(d[$]===o[x])r[x]=E(a[$],n[x]),$--,x--;else if(d[l]===o[x])r[x]=E(a[l],n[x]),A(t,r[x+1],a[l]),l++,x--;else if(d[$]===o[f])r[f]=E(a[$],n[f]),A(t,a[l],a[$]),$--,f++;else if(k===void 0&&(k=xt(o,f,x),C=xt(d,l,$)),k.has(d[l]))if(k.has(d[$])){const S=C.get(o[f]),J=S!==void 0?a[S]:null;if(J===null){const wt=A(t,a[l]);E(wt,n[f]),r[f]=wt}else r[f]=E(J,n[f]),A(t,a[l],J),a[S]=null;f++}else U(a[$]),$--;else U(a[l]),l++;for(;f<=x;){const S=A(t,r[x+1]);E(S,n[f]),r[f++]=S}for(;l<=$;){const S=a[l++];S!==null&&U(S)}return this.ut=o,Zt(t,r),Q}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class ce{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=t=>!Jt(t)&&typeof t.then=="function",Ct=1073741823;class pe extends Ut{constructor(){super(...arguments),this._$Cwt=Ct,this._$Cbt=[],this._$CK=new de(this),this._$CX=new ce}render(...e){return e.find(s=>!kt(s))??Q}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<s.length&&!(d>this._$Cwt);d++){const r=s[d];if(!kt(r))return this._$Cwt=d,r;d<a&&r===i[d]||(this._$Cwt=Ct,a=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const C=n.deref();if(C!==void 0){const l=C._$Cbt.indexOf(r);l>-1&&l<C._$Cwt&&(C._$Cwt=l,C.setValue(k))}}))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ue=Ft(pe),ge=Ot`
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

    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-space-4xs);
      font-size: var(--gds-text-size-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-space-2xs); */
      outline: none;
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l3-background-primary);
        color: var(--gds-color-l3-content-primary);
      }
    }
  }
`;var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,Yt=t=>{throw TypeError(t)},P=(t,e,s,i)=>{for(var a=i>1?void 0:i?me(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fe(e,s,a),a},$t=(t,e,s)=>e.has(t)||Yt("Cannot "+s),_=(t,e,s)=>($t(t,e,"read from private field"),s?s.call(t):e.get(t)),F=(t,e,s)=>e.has(t)?Yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Wt=(t,e,s,i)=>($t(t,e,"write to private field"),e.set(t,s),s),w=(t,e,s)=>($t(t,e,"access private method"),s),W,O,R,B,G,tt,et,st,y,Et,I,at,z,q;let D=class extends Rt{constructor(){super(...arguments),F(this,y),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,y,at).call(this,this.value,this.length),F(this,W,""),F(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,y,z).call(this,t+1),w(this,y,I).call(this)}),F(this,R,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,y,z).call(this,t-1),w(this,y,I).call(this)}),F(this,B,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,G,()=>{w(this,y,q).call(this)}),F(this,tt,()=>{_(this,W)!==""&&(w(this,y,q).call(this),this.value=w(this,y,z).call(this,parseInt(this.value.toString())),w(this,y,I).call(this))}),F(this,et,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,R).call(this):_(this,O).call(this)}),F(this,st,t=>{let e=!1;if(t.key==="ArrowUp")_(this,O).call(this),e=!0;else if(t.key==="ArrowDown")_(this,R).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(Wt(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=w(this,y,z).call(this,this.value),w(this,y,q).call(this),w(this,y,Et).call(this),w(this,y,I).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,et)),this.addEventListener("keydown",_(this,st)),this.addEventListener("blur",_(this,tt)),this.addEventListener("focus",_(this,G)),this.addEventListener("click",_(this,B)),this.addEventListener("mousedown",_(this,B))}focus(t){super.focus(t),_(this,G).call(this)}render(){return M`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,y,at).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;O=new WeakMap;R=new WeakMap;B=new WeakMap;G=new WeakMap;tt=new WeakMap;et=new WeakMap;st=new WeakMap;y=new WeakSet;Et=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};I=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};at=function(t,e){return String(t).padStart(e,"0")};z=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){Wt(this,W,"")};D.formAssociated=!0;P([b({type:Number})],D.prototype,"value",2);P([b({type:Number})],D.prototype,"length",2);P([b({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);P([b({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);P([H()],D.prototype,"displayValue",2);P([_t("value")],D.prototype,"_refreshDisplayValue",1);D=P([St("gds-date-part-spinner")],D);var ve=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Pt=t=>{throw TypeError(t)},p=(t,e,s,i)=>{for(var a=i>1?void 0:i?_e(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ve(e,s,a),a},bt=(t,e,s)=>e.has(t)||Pt("Cannot "+s),u=(t,e,s)=>(bt(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?Pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),j=(t,e,s,i)=>(bt(t,e,"write to private field"),e.set(t,s),s),m=(t,e,s)=>(bt(t,e,"access private method"),s),L,g,Nt,K,At,It,it,N,T,zt,nt,rt,ot,lt,ht,dt,ct,pt,ut,X,gt,ft,mt,vt,Y,Lt,Tt;let h=class extends ie{constructor(){super(...arguments),v(this,g),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.showWeekNumbers=!1,this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=m(this,g,mt).call(this,"y-m-d"),v(this,L),v(this,zt,t=>{this._elTrigger.then(e=>{var i,a;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((a=document.getSelection())==null||a.removeAllRanges())})}),v(this,nt,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),v(this,rt,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),v(this,ot,t=>{this._elFieldAsync.then(e=>{var o;if(t.currentTarget!==e)return;t.preventDefault();const s=(o=t.clipboardData)==null?void 0:o.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const d=this._dateFormatLayout.layout,r=parseInt(n[d.findIndex(l=>l.token==="y")]),k=parseInt(n[d.findIndex(l=>l.token==="m")])-1,C=parseInt(n[d.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(C)&&(i=new Date(`${r}-${k+1}-${C}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,m(this,g,N).call(this))})}),v(this,lt,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),v(this,ht,t=>{t.stopPropagation(),this.value=t.detail,this.open=!1,m(this,g,N).call(this),m(this,g,T).call(this)}),v(this,dt,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),v(this,ct,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),v(this,pt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),v(this,ut,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),v(this,X,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),m(this,g,T).call(this)}),v(this,gt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;!ne(e||new Date(0),u(this,L)||new Date(0))&&(this.value=e,m(this,g,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=u(this,L),m(this,g,T).call(this))}}),v(this,ft,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),v(this,vt,(t,e)=>{u(this,Y)[e]=t;const s=new Date;s.setFullYear(parseInt(u(this,Y).year)),s.setMonth(parseInt(u(this,Y).month)-1),s.setDate(parseInt(u(this,Y).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,m(this,g,N).call(this),m(this,g,T).call(this))}),v(this,Y,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get value(){return this._internalValue}set value(t){this._internalValue=t}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=m(this,g,mt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),Qt.instance.apply(this,"gds-datepicker")}render(){return M`
      <gds-form-control-header class="size-${this.size}">
        <label id="label" for="spinner-0" slot="label">${this.label}</label>
        ${V(this.supportingText.length>0,()=>M`<span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>`)}
        <slot
          id="supporting-text-slot"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
        <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
        <slot
          id="sub-label-slot"
          name="sub-label"
          slot="supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${u(this,lt)}
        @copy=${u(this,rt)}
        @paste=${u(this,ot)}
        id="field"
      >
        <div class="spinners">
          ${le(qt(this._dateFormatLayout.layout,(t,e)=>M`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${u(this,Y)[t.name]}
                  aria-valuemin=${m(this,g,It).call(this,t.name)}
                  aria-valuemax=${m(this,g,it).call(this,t.name)}
                  aria-label=${m(this,g,At).call(this,t.name)}
                  aria-describedby="label supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${m(this,g,it).call(this,t.name).toString().length}
                  @keydown=${u(this,ft)}
                  @change=${s=>u(this,vt).call(this,s.detail.value,t.name)}
                  @focus=${u(this,nt)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),M`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${c("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${V(this.size==="small",()=>M`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>M`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      <gds-form-control-footer class="size-${this.size}">
        ${V(this.invalid,()=>M`
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          `)}
      </gds-form-control-footer>

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${u(this,gt)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{var s;((s=t.target)==null?void 0:s.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <gds-flex
          align-items="center"
          justify-content="space-between"
          gap="s"
          padding="m m 0 m"
        >
          <gds-button
            @click=${u(this,ut)}
            aria-label=${c("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${u(this,dt)}
            .maxHeight=${300}
            label="${c("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${c("January")}</gds-option>
            <gds-option value="1">${c("February")}</gds-option>
            <gds-option value="2">${c("March")}</gds-option>
            <gds-option value="3">${c("April")}</gds-option>
            <gds-option value="4">${c("May")}</gds-option>
            <gds-option value="5">${c("June")}</gds-option>
            <gds-option value="6">${c("July")}</gds-option>
            <gds-option value="7">${c("August")}</gds-option>
            <gds-option value="8">${c("September")}</gds-option>
            <gds-option value="9">${c("October")}</gds-option>
            <gds-option value="10">${c("November")}</gds-option>
            <gds-option value="11">${c("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${u(this,ct)}
            .maxHeight=${300}
            label="${c("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${he(u(this,g,Lt),t=>t,t=>M`<gds-option value=${t}>${t}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${u(this,pt)}
            aria-label=${c("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </gds-flex>

        <gds-calendar
          id="calendar"
          @change=${u(this,ht)}
          @gds-date-focused=${u(this,X)}
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
            ${c("Clear")}
          </gds-button>
          ${ue(m(this,g,Nt).call(this),Dt)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),m(this,g,K).call(this,new Date)}}
          >
            ${c("Today")}
          </gds-button>
        </gds-flex>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){j(this,Y,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");j(this,Y,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(j(this,L,this.value),this._elCalendar.then(t=>t.focus()))}};L=new WeakMap;g=new WeakSet;Nt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=c("Last available date"),s=i=>{i.stopPropagation(),m(this,g,K).call(this,this.max)}):t&&t<this.min&&(e=c("First available date"),s=i=>{i.stopPropagation(),m(this,g,K).call(this,this.min)}),M`${V(e.length>0,()=>M`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Dt)}`};K=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(u(this,X))};At=function(t){return{year:c("Year"),month:c("Month"),day:c("Day")}[t]};It=function(t){return{year:1900,month:1,day:1}[t]};it=function(t){return{year:9999,month:12,day:31}[t]};N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};T=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};zt=new WeakMap;nt=new WeakMap;rt=new WeakMap;ot=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ct=new WeakMap;pt=new WeakMap;ut=new WeakMap;X=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(r=>r==="y"),a=s.findIndex(r=>r==="m"),n=s.findIndex(r=>r==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const d=[i,a,n].sort((r,k)=>r-k).map(r=>s[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:d}};vt=new WeakMap;Y=new WeakMap;Lt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=u(this,g,Tt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Tt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[jt,ge];p([b({converter:yt})],h.prototype,"value",1);p([b({converter:yt})],h.prototype,"min",2);p([b({converter:yt})],h.prototype,"max",2);p([b({type:Boolean})],h.prototype,"open",2);p([b({attribute:"supporting-text"})],h.prototype,"supportingText",2);p([b({type:String})],h.prototype,"size",2);p([b({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);p([b({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);p([b()],h.prototype,"dateformat",1);p([b({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);p([b({converter:te,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);p([Z("#calendar-button")],h.prototype,"test_calendarButton",2);p([H()],h.prototype,"_focusedMonth",2);p([H()],h.prototype,"_focusedYear",2);p([H()],h.prototype,"_dateFormatLayout",2);p([Z("#calendar")],h.prototype,"_elCalendar",2);p([Z("#calendar-button")],h.prototype,"_elTrigger",2);p([Z("#field")],h.prototype,"_elFieldAsync",2);p([oe("[role=spinbutton]")],h.prototype,"_elSpinners",2);p([Gt("#field")],h.prototype,"_elField",2);p([_t("value")],h.prototype,"_handleValueChange",1);p([_t("open")],h.prototype,"_handleOpenChange",1);h=p([Vt()],h);let Mt=class extends ee(se(ae(h))){};Mt=p([St("gds-datepicker")],Mt);
