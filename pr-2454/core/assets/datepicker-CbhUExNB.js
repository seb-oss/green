import{m as p,l as Ot}from"./runtime-CNluP0A8.js";import{T as tt,i as Rt,E as Ft}from"./lit-element-Bx14lxc-.js";import{n as m,r as Z}from"./Reflect-DJ7r0WLU.js";import{e as Ht,a as $t}from"./query-p8xgzTDt.js";import{r as J}from"./query-async-MEroNOeJ.js";import{e as Yt,i as qt,t as Kt}from"./directive-CF8sV3Lr.js";import{p as Xt,v as I,r as N,M as Q,m as Ut,i as Zt}from"./directive-helpers-BF33kFuJ.js";import{f as Jt}from"./ref-R0wBYijq.js";import{n as E}from"./when-BR7zwNJC.js";import{a as jt,G as Qt}from"./button.component-qvVtjlow.js";import{G as te}from"./dropdown.component-da5TuDpU.js";import{G as ee}from"./flex.component-Epeze9ko.js";import{G as se,h as w,g as Wt}from"./gds-element-DTROifYq.js";import{f as ae}from"./form-control-host.style-BAeDnTMc.js";import{t as ie}from"./tokens.style-CJKwYBen.js";import{T as ne}from"./transitional-styles-BfqUw7Aj.js";import{w as bt}from"./watch-tFciLXSI.js";import{d as wt,a as re}from"./attribute-converters-CdI0trPX.js";import{w as oe,b as le,d as he}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as de,i as ue}from"./calendar.component-pkJnw3zS.js";import{I as pe,a as ce}from"./calender-add.component-1JUcZ9gO.js";import{I as ge,a as fe}from"./chevron-right.component-Cs1IvQXA.js";import{G as me}from"./popover.component-CJKfdbo4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ve;function ye(t){return(e,s)=>Ht(e,s,{get(){return(this.renderRoot??ve??(ve=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_e(t,e){const s=typeof e=="function";if(t!==void 0){let i=-1;for(const a of t)i>-1&&(yield s?e(i):e),i++,yield a}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$e(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},be=Yt(class extends qt{constructor(t){if(super(t),t.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let h=0;for(const c of t)a[h]=i?i(c,h):h,n[h]=s(c,h),h++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Xt(t),{values:n,keys:h}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=h,n;const c=this.ut??(this.ut=[]),r=[];let k,M,d=0,b=a.length-1,v=0,C=n.length-1;for(;d<=b&&v<=C;)if(a[d]===null)d++;else if(a[b]===null)b--;else if(c[d]===h[v])r[v]=I(a[d],n[v]),d++,v++;else if(c[b]===h[C])r[C]=I(a[b],n[C]),b--,C--;else if(c[d]===h[C])r[C]=I(a[d],n[C]),N(t,r[C+1],a[d]),d++,C--;else if(c[b]===h[v])r[v]=I(a[b],n[v]),N(t,a[d],a[b]),b--,v++;else if(k===void 0&&(k=Mt(h,v,C),M=Mt(c,d,b)),k.has(c[d]))if(k.has(c[b])){const S=M.get(h[v]),j=S!==void 0?a[S]:null;if(j===null){const kt=N(t,a[d]);I(kt,n[v]),r[v]=kt}else r[v]=I(j,n[v]),N(t,a[d],j),a[S]=null;v++}else Q(a[b]),b--;else Q(a[d]),d++;for(;v<=C;){const S=N(t,r[C+1]);I(S,n[v]),r[v++]=S}for(;d<=b;){const S=a[d++];S!==null&&Q(S)}return this.ut=h,Ut(t,r),tt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class we{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class xe{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=t=>!Zt(t)&&typeof t.then=="function",St=1073741823;class Ce extends Jt{constructor(){super(...arguments),this._$Cwt=St,this._$Cbt=[],this._$CK=new we(this),this._$CX=new xe}render(...e){return e.find(s=>!Dt(s))??tt}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,h=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const r=s[c];if(!Dt(r))return this._$Cwt=c,r;c<a&&r===i[c]||(this._$Cwt=St,a=0,Promise.resolve(r).then(async k=>{for(;h.get();)await h.get();const M=n.deref();if(M!==void 0){const d=M._$Cbt.indexOf(r);d>-1&&d<M._$Cwt&&(M._$Cwt=d,M.setValue(k))}}))}return tt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ke=Yt(Ce);var Me=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Et=t=>{throw TypeError(t)},P=(t,e,s,i)=>{for(var a=i>1?void 0:i?De(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Me(e,s,a),a},xt=(t,e,s)=>e.has(t)||Et("Cannot "+s),_=(t,e,s)=>(xt(t,e,"read from private field"),s?s.call(t):e.get(t)),F=(t,e,s)=>e.has(t)?Et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),It=(t,e,s,i)=>(xt(t,e,"write to private field"),e.set(t,s),s),x=(t,e,s)=>(xt(t,e,"access private method"),s),W,G,O,R,H,et,st,at,$,Tt,z,it,L,q;let D=class extends se{constructor(){super(...arguments),F(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,$,it).call(this,this.value,this.length),F(this,W,""),F(this,G,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,$,L).call(this,t+1),x(this,$,z).call(this)}),F(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,$,L).call(this,t-1),x(this,$,z).call(this)}),F(this,R,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,H,()=>{x(this,$,q).call(this)}),F(this,et,()=>{_(this,W)!==""&&(x(this,$,q).call(this),this.value=x(this,$,L).call(this,parseInt(this.value.toString())),x(this,$,z).call(this))}),F(this,st,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,O).call(this):_(this,G).call(this)}),F(this,at,t=>{let e=!1;if(t.key==="ArrowUp")_(this,G).call(this),e=!0;else if(t.key==="ArrowDown")_(this,O).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(It(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=x(this,$,L).call(this,this.value),x(this,$,q).call(this),x(this,$,Tt).call(this),x(this,$,z).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,st)),this.addEventListener("keydown",_(this,at)),this.addEventListener("blur",_(this,et)),this.addEventListener("focus",_(this,H)),this.addEventListener("click",_(this,R)),this.addEventListener("mousedown",_(this,R))}focus(t){super.focus(t),_(this,H).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,$,it).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;G=new WeakMap;O=new WeakMap;R=new WeakMap;H=new WeakMap;et=new WeakMap;st=new WeakMap;at=new WeakMap;$=new WeakSet;Tt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};z=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};it=function(t,e){return String(t).padStart(e,"0")};L=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){It(this,W,"")};D.formAssociated=!0;P([m({type:Number})],D.prototype,"value",2);P([m({type:Number})],D.prototype,"length",2);P([m({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);P([m({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);P([Z()],D.prototype,"displayValue",2);P([bt("value")],D.prototype,"_refreshDisplayValue",1);D=P([Wt("gds-date-part-spinner")],D);const Se=Rt`
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
      gap: var(--gds-sys-space-5xs);
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
      padding-block: var(--gds-sys-space-4xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-4xs);
      margin: calc(-1 * var(--gds-sys-space-4xs));
      border-radius: var(--gds-sys-radius-3xs);

      &:focus-visible {
        background-color: var(--gds-sys-color-l3-neutral-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`;var Fe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Pt=t=>{throw TypeError(t)},l=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ye(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Fe(e,s,a),a},Ct=(t,e,s)=>e.has(t)||Pt("Cannot "+s),g=(t,e,s)=>(Ct(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?Pt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),V=(t,e,s,i)=>(Ct(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(Ct(t,e,"access private method"),s),K,B,u,At,Nt,X,zt,Lt,nt,T,A,Bt,rt,ot,lt,ht,dt,ut,pt,ct,gt,U,ft,mt,vt,yt,Y,Vt,Gt;let o=class extends jt{constructor(){super(),y(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,y(this,K,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,u,vt).call(this,"y-m-d"),y(this,B),y(this,Bt,t=>{this._elTrigger.then(e=>{var i,a;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((a=document.getSelection())==null||a.removeAllRanges())})}),y(this,rt,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),y(this,ot,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),y(this,lt,t=>{this._elFieldAsync.then(e=>{var h;if(t.currentTarget!==e)return;t.preventDefault();const s=(h=t.clipboardData)==null?void 0:h.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const c=this._dateFormatLayout.layout,r=parseInt(n[c.findIndex(d=>d.token==="y")]),k=parseInt(n[c.findIndex(d=>d.token==="m")])-1,M=parseInt(n[c.findIndex(d=>d.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(M)&&(i=new Date(`${r}-${k+1}-${M}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,f(this,u,T).call(this))})}),y(this,ht,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),y(this,dt,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,f(this,u,T).call(this),f(this,u,A).call(this)}),y(this,ut,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),y(this,pt,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),y(this,ct,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,gt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,U,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,u,A).call(this)}),y(this,ft,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,f(this,u,T).call(this);return}!ue(e||new Date(0),g(this,B)||new Date(0))&&(this.value=new Date(e),f(this,u,T).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=g(this,B),f(this,u,A).call(this))}}),y(this,mt,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),y(this,yt,(t,e)=>{g(this,Y)[e]=t;const s=new Date;s.setFullYear(parseInt(g(this,Y).year)),s.setMonth(parseInt(g(this,Y).month)-1),s.setDate(parseInt(g(this,Y).day)),s.setUTCHours(this.utcHours,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,u,T).call(this),f(this,u,A).call(this))}),y(this,Y,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return g(this,K)}set utcHours(t){var e;V(this,K,t),(e=this._internalValue)==null||e.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=f(this,u,vt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ne.instance.apply(this,"gds-datepicker")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return w`
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
        @click=${g(this,ht)}
        @copy=${g(this,ot)}
        @paste=${g(this,lt)}
        id="field"
      >
        <div class="spinners">
          ${_e($e(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${g(this,Y)[t.name]}
                  aria-valuemin=${f(this,u,Lt).call(this,t.name)}
                  aria-valuemax=${f(this,u,nt).call(this,t.name)}
                  aria-label=${f(this,u,zt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,u,nt).call(this,t.name).toString().length}
                  @keydown=${g(this,mt)}
                  @change=${s=>g(this,yt).call(this,s.detail.value,t.name)}
                  @focus=${g(this,rt)}
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
          aria-label="${p("Open calendar modal")}"
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

      ${E(f(this,u,At).call(this),()=>w`<gds-form-control-footer
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
        @gds-ui-state=${g(this,ft)}
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
              @click=${g(this,gt)}
              aria-label=${p("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${g(this,ut)}
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
              @change=${g(this,pt)}
              .maxHeight=${300}
              label="${p("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${be(g(this,u,Vt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${g(this,ct)}
              aria-label=${p("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${g(this,dt)}
            @gds-date-focused=${g(this,U)}
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
                      @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,f(this,u,A).call(this),f(this,u,T).call(this)}}
                      aria-label=${p("Clear selected date")}
                    >
                      ${p("Clear")}
                    </gds-button>`)}
                ${ke(f(this,u,Nt).call(this),Ft)}
                ${E(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="primary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),f(this,u,X).call(this,new Date)}}
                      aria-label=${p("Select today's date")}
                    >
                      ${p("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,Y,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");V(this,Y,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(V(this,B,this.value),this._elCalendar.then(t=>t.focus()))}};K=new WeakMap;B=new WeakMap;u=new WeakSet;At=function(){return!this.plain};Nt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=p("Last available date"),s=i=>{i.stopPropagation(),f(this,u,X).call(this,this.max)}):t&&t<this.min&&(e=p("First available date"),s=i=>{i.stopPropagation(),f(this,u,X).call(this,this.min)}),w`${E(e.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Ft)}`};X=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(g(this,U))};zt=function(t){return`${{year:p("Year"),month:p("Month"),day:p("Day")}[t]} ${this.label}`};Lt=function(t){return{year:1900,month:1,day:1}[t]};nt=function(t){return{year:9999,month:12,day:31}[t]};T=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};A=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Bt=new WeakMap;rt=new WeakMap;ot=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ut=new WeakMap;pt=new WeakMap;ct=new WeakMap;gt=new WeakMap;U=new WeakMap;ft=new WeakMap;mt=new WeakMap;vt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(r=>r==="y"),a=s.findIndex(r=>r==="m"),n=s.findIndex(r=>r==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[i,a,n].sort((r,k)=>r-k).map(r=>s[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:c}};yt=new WeakMap;Y=new WeakMap;Vt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=g(this,u,Gt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Gt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};o.styles=[ie,ae,Se];l([m({converter:wt})],o.prototype,"value",1);l([m({converter:wt})],o.prototype,"min",2);l([m({converter:wt})],o.prototype,"max",2);l([m({type:Boolean})],o.prototype,"open",2);l([m({attribute:"supporting-text"})],o.prototype,"supportingText",2);l([m({type:String})],o.prototype,"size",2);l([m({type:Boolean})],o.prototype,"plain",2);l([m({type:Boolean,attribute:"show-week-numbers"})],o.prototype,"showWeekNumbers",2);l([m({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);l([m({type:Boolean,attribute:"clearable"})],o.prototype,"clearable",2);l([m({type:Boolean,attribute:"hide-today-button"})],o.prototype,"hideTodayButton",2);l([m({type:Number,attribute:"utc-hours"})],o.prototype,"utcHours",1);l([m()],o.prototype,"dateformat",1);l([m({type:Boolean,attribute:"disabled-weekends"})],o.prototype,"disabledWeekends",2);l([m({converter:re,attribute:"disabled-dates"})],o.prototype,"disabledDates",2);l([m({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);l([J("#calendar-button")],o.prototype,"test_calendarButton",2);l([$t("#clear-button")],o.prototype,"test_clearButton",2);l([$t("#today-button")],o.prototype,"test_todayButton",2);l([Z()],o.prototype,"_focusedMonth",2);l([Z()],o.prototype,"_focusedYear",2);l([Z()],o.prototype,"_dateFormatLayout",2);l([J("#calendar")],o.prototype,"_elCalendar",2);l([J("#calendar-button")],o.prototype,"_elTrigger",2);l([J("#field")],o.prototype,"_elFieldAsync",2);l([ye("[role=spinbutton]")],o.prototype,"_elSpinners",2);l([$t("#field")],o.prototype,"_elField",2);l([bt("value")],o.prototype,"_handleValueChange",1);l([bt("open")],o.prototype,"_handleOpenChange",1);o=l([Ot()],o);let _t=class extends oe(le(he(o))){};_t=l([Wt("gds-datepicker",{dependsOn:[ee,Qt,te,de,me,pe,ce,ge,fe]})],_t);_t.define();export{ke as m};
