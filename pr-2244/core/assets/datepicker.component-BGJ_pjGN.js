import{m as c,l as Ot}from"./runtime-CNluP0A8.js";import{T as Q,i as Vt,E as St}from"./lit-element-Bx14lxc-.js";import{n as v,r as H}from"./Reflect-DJ7r0WLU.js";import{e as Rt,a as yt}from"./query-p8xgzTDt.js";import{r as Z}from"./query-async-MEroNOeJ.js";import{e as Ft,i as qt,t as Kt}from"./directive-CF8sV3Lr.js";import{p as Xt,v as I,r as N,M as U,m as Ht,i as Zt}from"./directive-helpers-BF33kFuJ.js";import{f as Jt}from"./ref-R0wBYijq.js";import{n as E}from"./when-BR7zwNJC.js";import{a as Ut,G as jt}from"./button.component-CRVl-pC1.js";import{G as Qt}from"./dropdown.component-BZHFxeeT.js";import{G as te}from"./flex.component-CHYyV8f-.js";import{G as ee,h as w,g as Yt}from"./gds-element-DJNCW3iR.js";import{f as se}from"./form-control-host.style-CXq97O9D.js";import{t as ae}from"./tokens.style-iX6aIK9m.js";import{T as ie}from"./transitional-styles-CqE0d3kx.js";import{w as _t}from"./watch-tFciLXSI.js";import{d as $t,a as ne}from"./attribute-converters-CdI0trPX.js";import{w as oe,b as re,d as le}from"./declarative-layout-mixins-CquYcIh8.js";import{G as he,i as de}from"./calendar.component-CDbJdFgY.js";import{I as pe,a as ue}from"./calender-add.component-DPB7W6y3.js";import{I as ce,a as ge}from"./chevron-right.component-DhYbfXgM.js";import{G as fe}from"./popover.component-BTSANQOm.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let me;function ve(t){return(e,s)=>Rt(e,s,{get(){return(this.renderRoot??me??(me=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ye(t,e){const s=typeof e=="function";if(t!==void 0){let i=-1;for(const a of t)i>-1&&(yield s?e(i):e),i++,yield a}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_e(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},$e=Ft(class extends qt{constructor(t){if(super(t),t.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let l=0;for(const u of t)a[l]=i?i(u,l):l,n[l]=s(u,l),l++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Xt(t),{values:n,keys:l}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=l,n;const u=this.ut??(this.ut=[]),o=[];let k,M,d=0,b=a.length-1,m=0,C=n.length-1;for(;d<=b&&m<=C;)if(a[d]===null)d++;else if(a[b]===null)b--;else if(u[d]===l[m])o[m]=I(a[d],n[m]),d++,m++;else if(u[b]===l[C])o[C]=I(a[b],n[C]),b--,C--;else if(u[d]===l[C])o[C]=I(a[d],n[C]),N(t,o[C+1],a[d]),d++,C--;else if(u[b]===l[m])o[m]=I(a[b],n[m]),N(t,a[d],a[b]),b--,m++;else if(k===void 0&&(k=Ct(l,m,C),M=Ct(u,d,b)),k.has(u[d]))if(k.has(u[b])){const S=M.get(l[m]),J=S!==void 0?a[S]:null;if(J===null){const xt=N(t,a[d]);I(xt,n[m]),o[m]=xt}else o[m]=I(J,n[m]),N(t,a[d],J),a[S]=null;m++}else U(a[b]),b--;else U(a[d]),d++;for(;m<=C;){const S=N(t,o[C+1]);I(S,n[m]),o[m++]=S}for(;d<=b;){const S=a[d++];S!==null&&U(S)}return this.ut=l,Ht(t,o),Q}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class we{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=t=>!Zt(t)&&typeof t.then=="function",Mt=1073741823;class xe extends Jt{constructor(){super(...arguments),this._$Cwt=Mt,this._$Cbt=[],this._$CK=new be(this),this._$CX=new we}render(...e){return e.find(s=>!kt(s))??Q}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let u=0;u<s.length&&!(u>this._$Cwt);u++){const o=s[u];if(!kt(o))return this._$Cwt=u,o;u<a&&o===i[u]||(this._$Cwt=Mt,a=0,Promise.resolve(o).then(async k=>{for(;l.get();)await l.get();const M=n.deref();if(M!==void 0){const d=M._$Cbt.indexOf(o);d>-1&&d<M._$Cwt&&(M._$Cwt=d,M.setValue(k))}}))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ce=Ft(xe);var ke=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Wt=t=>{throw TypeError(t)},T=(t,e,s,i)=>{for(var a=i>1?void 0:i?Me(e,s):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(a=(i?l(e,s,a):l(a))||a);return i&&a&&ke(e,s,a),a},bt=(t,e,s)=>e.has(t)||Wt("Cannot "+s),_=(t,e,s)=>(bt(t,e,"read from private field"),s?s.call(t):e.get(t)),F=(t,e,s)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Et=(t,e,s,i)=>(bt(t,e,"write to private field"),e.set(t,s),s),x=(t,e,s)=>(bt(t,e,"access private method"),s),W,G,O,V,R,tt,et,st,$,It,z,at,L,q;let D=class extends ee{constructor(){super(...arguments),F(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,$,at).call(this,this.value,this.length),F(this,W,""),F(this,G,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,$,L).call(this,t+1),x(this,$,z).call(this)}),F(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,$,L).call(this,t-1),x(this,$,z).call(this)}),F(this,V,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,R,()=>{x(this,$,q).call(this)}),F(this,tt,()=>{_(this,W)!==""&&(x(this,$,q).call(this),this.value=x(this,$,L).call(this,parseInt(this.value.toString())),x(this,$,z).call(this))}),F(this,et,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,O).call(this):_(this,G).call(this)}),F(this,st,t=>{let e=!1;if(t.key==="ArrowUp")_(this,G).call(this),e=!0;else if(t.key==="ArrowDown")_(this,O).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(Et(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=x(this,$,L).call(this,this.value),x(this,$,q).call(this),x(this,$,It).call(this),x(this,$,z).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,et)),this.addEventListener("keydown",_(this,st)),this.addEventListener("blur",_(this,tt)),this.addEventListener("focus",_(this,R)),this.addEventListener("click",_(this,V)),this.addEventListener("mousedown",_(this,V))}focus(t){super.focus(t),_(this,R).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,$,at).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;G=new WeakMap;O=new WeakMap;V=new WeakMap;R=new WeakMap;tt=new WeakMap;et=new WeakMap;st=new WeakMap;$=new WeakSet;It=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};z=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};at=function(t,e){return String(t).padStart(e,"0")};L=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){Et(this,W,"")};D.formAssociated=!0;T([v({type:Number})],D.prototype,"value",2);T([v({type:Number})],D.prototype,"length",2);T([v({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);T([v({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);T([H()],D.prototype,"displayValue",2);T([_t("value")],D.prototype,"_refreshDisplayValue",1);D=T([Yt("gds-date-part-spinner")],D);const De=Vt`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-4xs);
      font: var(--gds-sys-text-detail-regular-m);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-regular-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-3xs);
      margin: calc(-1 * var(--gds-sys-space-3xs));
      border-radius: var(--gds-sys-radius-2xs);

      &:focus-visible {
        background-color: var(--gds-sys-color-l3-neutral-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`;var Se=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Pt=t=>{throw TypeError(t)},h=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fe(e,s):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(a=(i?l(e,s,a):l(a))||a);return i&&a&&Se(e,s,a),a},wt=(t,e,s)=>e.has(t)||Pt("Cannot "+s),g=(t,e,s)=>(wt(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?Pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),j=(t,e,s,i)=>(wt(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(wt(t,e,"access private method"),s),B,p,Tt,At,K,Nt,zt,it,P,A,Lt,nt,ot,rt,lt,ht,dt,pt,ut,ct,X,gt,ft,mt,vt,Y,Bt,Gt;let r=class extends Ut{constructor(){super(),y(this,p),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,p,mt).call(this,"y-m-d"),y(this,B),y(this,Lt,t=>{this._elTrigger.then(e=>{var i,a;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((a=document.getSelection())==null||a.removeAllRanges())})}),y(this,nt,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),y(this,ot,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),y(this,rt,t=>{this._elFieldAsync.then(e=>{var l;if(t.currentTarget!==e)return;t.preventDefault();const s=(l=t.clipboardData)==null?void 0:l.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const u=this._dateFormatLayout.layout,o=parseInt(n[u.findIndex(d=>d.token==="y")]),k=parseInt(n[u.findIndex(d=>d.token==="m")])-1,M=parseInt(n[u.findIndex(d=>d.token==="d")]);!isNaN(o)&&!isNaN(k)&&!isNaN(M)&&(i=new Date(`${o}-${k+1}-${M}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,f(this,p,P).call(this))})}),y(this,lt,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),y(this,ht,t=>{t.stopPropagation(),this.value=new Date(t.detail),this.open=!1,f(this,p,P).call(this),f(this,p,A).call(this)}),y(this,dt,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),y(this,pt,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),y(this,ut,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,ct,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,X,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,p,A).call(this)}),y(this,gt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,f(this,p,P).call(this);return}!de(e||new Date(0),g(this,B)||new Date(0))&&(this.value=new Date(e),f(this,p,P).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=g(this,B),f(this,p,A).call(this))}}),y(this,ft,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),y(this,vt,(t,e)=>{g(this,Y)[e]=t;const s=new Date;s.setFullYear(parseInt(g(this,Y).year)),s.setMonth(parseInt(g(this,Y).month)-1),s.setDate(parseInt(g(this,Y).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,p,P).call(this),f(this,p,A).call(this))}),y(this,Y,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=f(this,p,mt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ie.instance.apply(this,"gds-datepicker")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return w`
      ${E(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${E(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${g(this,lt)}
        @copy=${g(this,ot)}
        @paste=${g(this,rt)}
        id="field"
      >
        <div class="spinners">
          ${ye(_e(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${g(this,Y)[t.name]}
                  aria-valuemin=${f(this,p,zt).call(this,t.name)}
                  aria-valuemax=${f(this,p,it).call(this,t.name)}
                  aria-label=${f(this,p,Nt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,p,it).call(this,t.name).toString().length}
                  @keydown=${g(this,ft)}
                  @change=${s=>g(this,vt).call(this,s.detail.value,t.name)}
                  @focus=${g(this,nt)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),w`<span class="separator"
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
          ${E(this.size==="small",()=>w`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${E(f(this,p,Tt).call(this),()=>w`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`)}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${g(this,gt)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{var s;((s=t.target)==null?void 0:s.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="s"
            padding="m m 0 m"
          >
            <gds-button
              @click=${g(this,ct)}
              aria-label=${c("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${g(this,dt)}
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
              @change=${g(this,pt)}
              .maxHeight=${300}
              label="${c("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${$e(g(this,p,Bt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${g(this,ut)}
              aria-label=${c("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${g(this,ht)}
            @gds-date-focused=${g(this,X)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${E(this.clearable||!this.hideTodayButton,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${E(this.clearable,()=>w` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,f(this,p,A).call(this),f(this,p,P).call(this)}}
                    >
                      ${c("Clear")}
                    </gds-button>`)}
                ${Ce(f(this,p,At).call(this),St)}
                ${E(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="primary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),f(this,p,K).call(this,new Date)}}
                    >
                      ${c("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){j(this,Y,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");j(this,Y,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(j(this,B,this.value),this._elCalendar.then(t=>t.focus()))}};B=new WeakMap;p=new WeakSet;Tt=function(){return!this.plain};At=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=c("Last available date"),s=i=>{i.stopPropagation(),f(this,p,K).call(this,this.max)}):t&&t<this.min&&(e=c("First available date"),s=i=>{i.stopPropagation(),f(this,p,K).call(this,this.min)}),w`${E(e.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>St)}`};K=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(g(this,X))};Nt=function(t){return`${{year:c("Year"),month:c("Month"),day:c("Day")}[t]} ${this.label}`};zt=function(t){return{year:1900,month:1,day:1}[t]};it=function(t){return{year:9999,month:12,day:31}[t]};P=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};A=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Lt=new WeakMap;nt=new WeakMap;ot=new WeakMap;rt=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;pt=new WeakMap;ut=new WeakMap;ct=new WeakMap;X=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(o=>o==="y"),a=s.findIndex(o=>o==="m"),n=s.findIndex(o=>o==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const u=[i,a,n].sort((o,k)=>o-k).map(o=>s[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:e,layout:u}};vt=new WeakMap;Y=new WeakMap;Bt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=g(this,p,Gt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Gt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};r.styles=[ae,se,De];h([v({converter:$t})],r.prototype,"value",1);h([v({converter:$t})],r.prototype,"min",2);h([v({converter:$t})],r.prototype,"max",2);h([v({type:Boolean})],r.prototype,"open",2);h([v({attribute:"supporting-text"})],r.prototype,"supportingText",2);h([v({type:String})],r.prototype,"size",2);h([v({type:Boolean})],r.prototype,"plain",2);h([v({type:Boolean,attribute:"show-week-numbers"})],r.prototype,"showWeekNumbers",2);h([v({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);h([v({type:Boolean,attribute:"clearable"})],r.prototype,"clearable",2);h([v({type:Boolean,attribute:"hide-today-button"})],r.prototype,"hideTodayButton",2);h([v()],r.prototype,"dateformat",1);h([v({type:Boolean,attribute:"disabled-weekends"})],r.prototype,"disabledWeekends",2);h([v({converter:ne,attribute:"disabled-dates"})],r.prototype,"disabledDates",2);h([v({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);h([Z("#calendar-button")],r.prototype,"test_calendarButton",2);h([yt("#clear-button")],r.prototype,"test_clearButton",2);h([yt("#today-button")],r.prototype,"test_todayButton",2);h([H()],r.prototype,"_focusedMonth",2);h([H()],r.prototype,"_focusedYear",2);h([H()],r.prototype,"_dateFormatLayout",2);h([Z("#calendar")],r.prototype,"_elCalendar",2);h([Z("#calendar-button")],r.prototype,"_elTrigger",2);h([Z("#field")],r.prototype,"_elFieldAsync",2);h([ve("[role=spinbutton]")],r.prototype,"_elSpinners",2);h([yt("#field")],r.prototype,"_elField",2);h([_t("value")],r.prototype,"_handleValueChange",1);h([_t("open")],r.prototype,"_handleOpenChange",1);r=h([Ot()],r);let Dt=class extends oe(re(le(r))){};Dt=h([Yt("gds-datepicker",{dependsOn:[te,jt,Qt,he,fe,pe,ue,ce,ge]})],Dt);export{Dt as G,Ce as m};
