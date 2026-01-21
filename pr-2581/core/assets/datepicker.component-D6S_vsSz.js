import{e as Ot,$ as Ft,X as Vt,Z as Rt,aj as Ht,ak as T,al as A,am as Q,ae as tt,an as Ut,ao as Xt,n as m,I as J,a8 as _t,J as Kt,h as w,g as Yt,i as Zt,t as Jt,d as $t,a0 as qt,S as jt,Q as Qt,a9 as te,a3 as ee,b as I,O as c,E as Wt,P as se}from"./iframe-BvJ9qi3m.js";import{l as ae}from"./localized-decorator-yX1kdmUL.js";import{r as q}from"./query-async-BHcjGrBE.js";import{f as ie}from"./ref-BSgoetkx.js";import{a as ne}from"./dropdown.component-Bew90JJJ.js";import{G as oe}from"./flex.component-D0FPoO6_.js";import{f as re}from"./form-control-host.style-D_HUnaog.js";import{d as bt,a as le}from"./attribute-converters-CdI0trPX.js";import{i as he,l as de,G as ue}from"./calendar.component-CiaVTgLS.js";import{I as ce,a as pe}from"./calender-add.component-CI6LCA38.js";import{I as ge}from"./chevron-left.component-D30cojE4.js";import{I as fe}from"./chevron-right.component-DJex8r26.js";import{G as me}from"./popover.component-DaoLQkhy.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ve;function ye(t){return(e,s)=>Ot(e,s,{get(){return(this.renderRoot??ve??(ve=document.createDocumentFragment())).querySelectorAll(t)}})}/**
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
 */const kt=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},be=Ft(class extends Vt{constructor(t){if(super(t),t.type!==Rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let h=0;for(const g of t)a[h]=i?i(g,h):h,n[h]=s(g,h),h++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Ht(t),{values:n,keys:h}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=h,n;const g=this.ut??(this.ut=[]),o=[];let k,D,d=0,b=a.length-1,v=0,C=n.length-1;for(;d<=b&&v<=C;)if(a[d]===null)d++;else if(a[b]===null)b--;else if(g[d]===h[v])o[v]=T(a[d],n[v]),d++,v++;else if(g[b]===h[C])o[C]=T(a[b],n[C]),b--,C--;else if(g[d]===h[C])o[C]=T(a[d],n[C]),A(t,o[C+1],a[d]),d++,C--;else if(g[b]===h[v])o[v]=T(a[b],n[v]),A(t,a[d],a[b]),b--,v++;else if(k===void 0&&(k=kt(h,v,C),D=kt(g,d,b)),k.has(g[d]))if(k.has(g[b])){const F=D.get(h[v]),j=F!==void 0?a[F]:null;if(j===null){const Ct=A(t,a[d]);T(Ct,n[v]),o[v]=Ct}else o[v]=T(j,n[v]),A(t,a[d],j),a[F]=null;v++}else Q(a[b]),b--;else Q(a[d]),d++;for(;v<=C;){const F=A(t,o[C+1]);T(F,n[v]),o[v++]=F}for(;d<=b;){const F=a[d++];F!==null&&Q(F)}return this.ut=h,Ut(t,o),tt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class we{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class xe{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=t=>!Xt(t)&&typeof t.then=="function",Mt=1073741823;class Ce extends ie{constructor(){super(...arguments),this._$Cwt=Mt,this._$Cbt=[],this._$CK=new we(this),this._$CX=new xe}render(...e){return e.find((s=>!Dt(s)))??tt}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,h=this._$CX;this.isConnected||this.disconnected();for(let g=0;g<s.length&&!(g>this._$Cwt);g++){const o=s[g];if(!Dt(o))return this._$Cwt=g,o;g<a&&o===i[g]||(this._$Cwt=Mt,a=0,Promise.resolve(o).then((async k=>{for(;h.get();)await h.get();const D=n.deref();if(D!==void 0){const d=D._$Cbt.indexOf(o);d>-1&&d<D._$Cwt&&(D._$Cwt=d,D.setValue(k))}})))}return tt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ke=Ft(Ce);var De=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,It=t=>{throw TypeError(t)},N=(t,e,s,i)=>{for(var a=i>1?void 0:i?Me(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&De(e,s,a),a},wt=(t,e,s)=>e.has(t)||It("Cannot "+s),_=(t,e,s)=>(wt(t,e,"read from private field"),s?s.call(t):e.get(t)),Y=(t,e,s)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Tt=(t,e,s,i)=>(wt(t,e,"write to private field"),e.set(t,s),s),x=(t,e,s)=>(wt(t,e,"access private method"),s),W,O,V,R,H,et,st,at,$,Et,z,it,L,U;let M=class extends Kt{constructor(){super(...arguments),Y(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,$,it).call(this,this.value,this.length),Y(this,W,""),Y(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,$,L).call(this,t+1),x(this,$,z).call(this)}),Y(this,V,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,$,L).call(this,t-1),x(this,$,z).call(this)}),Y(this,R,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),Y(this,H,()=>{x(this,$,U).call(this)}),Y(this,et,()=>{_(this,W)!==""&&(x(this,$,U).call(this),this.value=x(this,$,L).call(this,parseInt(this.value.toString())),x(this,$,z).call(this))}),Y(this,st,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,V).call(this):_(this,O).call(this)}),Y(this,at,t=>{let e=!1;if(t.key==="ArrowUp")_(this,O).call(this),e=!0;else if(t.key==="ArrowDown")_(this,V).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(Tt(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=x(this,$,L).call(this,this.value),x(this,$,U).call(this),x(this,$,Et).call(this),x(this,$,z).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,st)),this.addEventListener("keydown",_(this,at)),this.addEventListener("blur",_(this,et)),this.addEventListener("focus",_(this,H)),this.addEventListener("click",_(this,R)),this.addEventListener("mousedown",_(this,R))}focus(t){super.focus(t),_(this,H).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,$,it).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;O=new WeakMap;V=new WeakMap;R=new WeakMap;H=new WeakMap;et=new WeakMap;st=new WeakMap;at=new WeakMap;$=new WeakSet;Et=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof M){t.focus();break}t=t.nextElementSibling}};z=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};it=function(t,e){return String(t).padStart(e,"0")};L=function(t){return Math.max(this.min,Math.min(this.max,t))};U=function(){Tt(this,W,"")};M.formAssociated=!0;N([m({type:Number})],M.prototype,"value",2);N([m({type:Number})],M.prototype,"length",2);N([m({type:Number,attribute:"aria-valuemin"})],M.prototype,"min",2);N([m({type:Number,attribute:"aria-valuemax"})],M.prototype,"max",2);N([J()],M.prototype,"displayValue",2);N([_t("value")],M.prototype,"_refreshDisplayValue",1);M=N([Yt("gds-date-part-spinner")],M);const Se=Zt`
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

      &:focus {
        background-color: var(--gds-sys-color-l3-neutral-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`;var Fe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Nt=t=>{throw TypeError(t)},l=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ye(e,s):e,n=t.length-1,h;n>=0;n--)(h=t[n])&&(a=(i?h(e,s,a):h(a))||a);return i&&a&&Fe(e,s,a),a},xt=(t,e,s)=>e.has(t)||Nt("Cannot "+s),p=(t,e,s)=>(xt(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?Nt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),G=(t,e,s,i)=>(xt(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(xt(t,e,"access private method"),s),X,B,u,Pt,At,K,zt,Lt,nt,E,P,ot,rt,lt,ht,dt,ut,ct,pt,gt,Z,ft,mt,vt,yt,S,Bt,Gt;let r=class extends te{constructor(){super(),y(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,y(this,X,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,u,vt).call(this,"y-m-d"),y(this,B),y(this,ot,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),y(this,rt,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),y(this,lt,t=>{this._elFieldAsync.then(e=>{var h;if(t.currentTarget!==e)return;t.preventDefault();const s=(h=t.clipboardData)==null?void 0:h.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const g=this._dateFormatLayout.layout,o=parseInt(n[g.findIndex(d=>d.token==="y")]),k=parseInt(n[g.findIndex(d=>d.token==="m")])-1,D=parseInt(n[g.findIndex(d=>d.token==="d")]);!isNaN(o)&&!isNaN(k)&&!isNaN(D)&&(i=new Date(`${o}-${k+1}-${D}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,f(this,u,E).call(this))})}),y(this,ht,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),y(this,dt,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,f(this,u,E).call(this),f(this,u,P).call(this)}),y(this,ut,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),y(this,ct,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),y(this,pt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,gt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,Z,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,u,P).call(this)}),y(this,ft,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,f(this,u,E).call(this);return}!he(e||new Date(0),p(this,B)||new Date(0))&&(this.value=new Date(e),f(this,u,E).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=p(this,B),f(this,u,P).call(this))}}),y(this,mt,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),y(this,yt,(t,e)=>{p(this,S)[e]=t;const s=new Date("0000-01-01");s.setUTCHours(this.utcHours,0,0,0),s.setUTCFullYear(parseInt(p(this,S).year)),s.setUTCMonth(parseInt(p(this,S).month)-1);const i=de(s).getDate(),a=i<parseInt(p(this,S).day)?i:parseInt(p(this,S).day);s.setUTCDate(isNaN(a)?1:a),s.toString()!=="Invalid Date"&&(this.value=s,f(this,u,E).call(this),f(this,u,P).call(this))}),y(this,S,{year:"yyyy",month:"mm",day:"dd"}),M.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return p(this,X)}set utcHours(t){var e;G(this,X,t),(e=this._internalValue)==null||e.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=f(this,u,vt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ee.instance.apply(this,"gds-datepicker")}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}render(){return w`
      ${I(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${I(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
        @click=${p(this,ht)}
        @copy=${p(this,rt)}
        @paste=${p(this,lt)}
        id="field"
      >
        <div class="spinners">
          ${_e($e(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${p(this,S)[t.name]}
                  aria-valuemin=${f(this,u,Lt).call(this,t.name)}
                  aria-valuemax=${f(this,u,nt).call(this,t.name)}
                  aria-label=${f(this,u,zt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,u,nt).call(this,t.name).toString().length}
                  @keydown=${p(this,mt)}
                  @change=${s=>p(this,yt).call(this,s.detail.value,t.name)}
                  @focus=${p(this,ot)}
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
          ${I(this.size==="small",()=>w`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${I(f(this,u,Pt).call(this),()=>w`<gds-form-control-footer
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
        @gds-ui-state=${p(this,ft)}
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
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${p(this,gt)}
              aria-label=${c("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${p(this,ut)}
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
              @change=${p(this,ct)}
              .maxHeight=${300}
              label="${c("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${be(p(this,u,Bt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${p(this,pt)}
              aria-label=${c("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${p(this,dt)}
            @gds-date-focused=${p(this,Z)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${I(this.clearable||!this.hideTodayButton,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${I(this.clearable,()=>w` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,f(this,u,P).call(this),f(this,u,E).call(this)}}
                      aria-label=${c("Clear selected date")}
                    >
                      ${c("Clear")}
                    </gds-button>`)}
                ${ke(f(this,u,At).call(this),Wt)}
                ${I(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),f(this,u,K).call(this,new Date)}}
                      aria-label=${c("Select today's date")}
                    >
                      ${c("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){G(this,S,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");G(this,S,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(G(this,B,this.value),this._elCalendar.then(t=>t.focus()))}};X=new WeakMap;B=new WeakMap;u=new WeakSet;Pt=function(){return!this.plain};At=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=c("Last available date"),s=i=>{i.stopPropagation(),f(this,u,K).call(this,this.max)}):t&&t<this.min&&(e=c("First available date"),s=i=>{i.stopPropagation(),f(this,u,K).call(this,this.min)}),w`${I(e.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Wt)}`};K=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(p(this,Z))};zt=function(t){return`${{year:c("Year"),month:c("Month"),day:c("Day")}[t]} ${this.label}`};Lt=function(t){return{year:1900,month:1,day:1}[t]};nt=function(t){return{year:9999,month:12,day:31}[t]};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};P=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ot=new WeakMap;rt=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ut=new WeakMap;ct=new WeakMap;pt=new WeakMap;gt=new WeakMap;Z=new WeakMap;ft=new WeakMap;mt=new WeakMap;vt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(o=>o==="y"),a=s.findIndex(o=>o==="m"),n=s.findIndex(o=>o==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const g=[i,a,n].sort((o,k)=>o-k).map(o=>s[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:e,layout:g}};yt=new WeakMap;S=new WeakMap;Bt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=p(this,u,Gt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Gt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};r.styles=[Jt,re,Se];l([m({converter:bt})],r.prototype,"value",1);l([m({converter:bt})],r.prototype,"min",2);l([m({converter:bt})],r.prototype,"max",2);l([m({type:Boolean})],r.prototype,"open",2);l([m({attribute:"supporting-text"})],r.prototype,"supportingText",2);l([m({type:String})],r.prototype,"size",2);l([m({type:Boolean})],r.prototype,"plain",2);l([m({type:Boolean,attribute:"show-week-numbers"})],r.prototype,"showWeekNumbers",2);l([m({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);l([m({type:Boolean,attribute:"clearable"})],r.prototype,"clearable",2);l([m({type:Boolean,attribute:"hide-today-button"})],r.prototype,"hideTodayButton",2);l([m({type:Number,attribute:"utc-hours"})],r.prototype,"utcHours",1);l([m()],r.prototype,"dateformat",1);l([m({type:Boolean,attribute:"disabled-weekends"})],r.prototype,"disabledWeekends",2);l([m({converter:le,attribute:"disabled-dates"})],r.prototype,"disabledDates",2);l([m({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);l([q("#calendar-button")],r.prototype,"test_calendarButton",2);l([$t("#clear-button")],r.prototype,"test_clearButton",2);l([$t("#today-button")],r.prototype,"test_todayButton",2);l([J()],r.prototype,"_focusedMonth",2);l([J()],r.prototype,"_focusedYear",2);l([J()],r.prototype,"_dateFormatLayout",2);l([q("#calendar")],r.prototype,"_elCalendar",2);l([q("#calendar-button")],r.prototype,"_elTrigger",2);l([q("#field")],r.prototype,"_elFieldAsync",2);l([ye("[role=spinbutton]")],r.prototype,"_elSpinners",2);l([$t("#field")],r.prototype,"_elField",2);l([_t("value")],r.prototype,"_handleValueChange",1);l([_t("open")],r.prototype,"_handleOpenChange",1);r=l([ae()],r);let St=class extends qt(jt(Qt(r))){};St=l([Yt("gds-datepicker",{dependsOn:[oe,se,ne,ue,me,ce,pe,ge,fe]})],St);export{St as G,ke as m};
