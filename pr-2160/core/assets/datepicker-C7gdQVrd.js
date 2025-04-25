import{m as u}from"./runtime-BL31MtW8.js";import{l as Gt}from"./localized-decorator-DtmrKsyB.js";import{T as Q,i as Ot,E as Dt}from"./lit-element-Bx14lxc-.js";import{n as y,r as H,G as Rt,h as C,g as St}from"./custom-element-scoping-b4c89-hi.js";import{e as Bt,a as qt}from"./query-p8xgzTDt.js";import{r as Z}from"./query-async-MEroNOeJ.js";import{e as Ft,i as Kt,t as Xt}from"./directive-CF8sV3Lr.js";import{p as Ht,v as E,r as N,M as U,m as Zt,i as Jt}from"./directive-helpers-BF33kFuJ.js";import{f as Ut}from"./ref-R0wBYijq.js";import{n as z}from"./when-BR7zwNJC.js";import{a as jt,G as Qt}from"./button.component-DxfU86xO.js";import{G as te}from"./dropdown.component-D7ogdPVz.js";import{G as ee}from"./flex.component-CYboTd6A.js";import{f as se}from"./form-control-host.style-GwSQv2RY.js";import{t as ae}from"./tokens.style-OWC-W9l-.js";import{T as ie}from"./transitional-styles-Ckr_5-pT.js";import{w as _t}from"./watch-tFciLXSI.js";import{d as $t,a as ne}from"./attribute-converters-CdI0trPX.js";import{w as re,b as oe,d as le}from"./declarative-layout-mixins-BgWwoHZ-.js";import{G as he,i as de}from"./calendar.component-Drn5DnlM.js";import{I as pe,a as ce}from"./calender-add.component-B3Mn4oIb.js";import{a as ue,I as ge}from"./chevron-right.component-B3rpjwFs.js";import{G as fe}from"./popover.component-Dm8mNWll.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let me;function ve(t){return(e,s)=>Bt(e,s,{get(){return(this.renderRoot??me??(me=document.createDocumentFragment())).querySelectorAll(t)}})}/**
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
 */const Ct=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},$e=Ft(class extends Kt{constructor(t){if(super(t),t.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let o=0;for(const p of t)a[o]=i?i(p,o):o,n[o]=s(p,o),o++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Ht(t),{values:n,keys:o}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=o,n;const p=this.ut??(this.ut=[]),r=[];let k,M,l=0,b=a.length-1,m=0,x=n.length-1;for(;l<=b&&m<=x;)if(a[l]===null)l++;else if(a[b]===null)b--;else if(p[l]===o[m])r[m]=E(a[l],n[m]),l++,m++;else if(p[b]===o[x])r[x]=E(a[b],n[x]),b--,x--;else if(p[l]===o[x])r[x]=E(a[l],n[x]),N(t,r[x+1],a[l]),l++,x--;else if(p[b]===o[m])r[m]=E(a[b],n[m]),N(t,a[l],a[b]),b--,m++;else if(k===void 0&&(k=Ct(o,m,x),M=Ct(p,l,b)),k.has(p[l]))if(k.has(p[b])){const S=M.get(o[m]),J=S!==void 0?a[S]:null;if(J===null){const xt=N(t,a[l]);E(xt,n[m]),r[m]=xt}else r[m]=E(J,n[m]),N(t,a[l],J),a[S]=null;m++}else U(a[b]),b--;else U(a[l]),l++;for(;m<=x;){const S=N(t,r[x+1]);E(S,n[m]),r[m++]=S}for(;l<=b;){const S=a[l++];S!==null&&U(S)}return this.ut=o,Zt(t,r),Q}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class we{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=t=>!Jt(t)&&typeof t.then=="function",Mt=1073741823;class xe extends Ut{constructor(){super(...arguments),this._$Cwt=Mt,this._$Cbt=[],this._$CK=new be(this),this._$CX=new we}render(...e){return e.find(s=>!kt(s))??Q}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let p=0;p<s.length&&!(p>this._$Cwt);p++){const r=s[p];if(!kt(r))return this._$Cwt=p,r;p<a&&r===i[p]||(this._$Cwt=Mt,a=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const M=n.deref();if(M!==void 0){const l=M._$Cbt.indexOf(r);l>-1&&l<M._$Cwt&&(M._$Cwt=l,M.setValue(k))}}))}return Q}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ce=Ft(xe);var ke=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Yt=t=>{throw TypeError(t)},I=(t,e,s,i)=>{for(var a=i>1?void 0:i?Me(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ke(e,s,a),a},bt=(t,e,s)=>e.has(t)||Yt("Cannot "+s),_=(t,e,s)=>(bt(t,e,"read from private field"),s?s.call(t):e.get(t)),F=(t,e,s)=>e.has(t)?Yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Wt=(t,e,s,i)=>(bt(t,e,"write to private field"),e.set(t,s),s),w=(t,e,s)=>(bt(t,e,"access private method"),s),W,G,O,R,B,tt,et,st,$,Et,A,at,T,q;let D=class extends Rt{constructor(){super(...arguments),F(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,$,at).call(this,this.value,this.length),F(this,W,""),F(this,G,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,$,T).call(this,t+1),w(this,$,A).call(this)}),F(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,$,T).call(this,t-1),w(this,$,A).call(this)}),F(this,R,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,B,()=>{w(this,$,q).call(this)}),F(this,tt,()=>{_(this,W)!==""&&(w(this,$,q).call(this),this.value=w(this,$,T).call(this,parseInt(this.value.toString())),w(this,$,A).call(this))}),F(this,et,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,O).call(this):_(this,G).call(this)}),F(this,st,t=>{let e=!1;if(t.key==="ArrowUp")_(this,G).call(this),e=!0;else if(t.key==="ArrowDown")_(this,O).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(Wt(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=w(this,$,T).call(this,this.value),w(this,$,q).call(this),w(this,$,Et).call(this),w(this,$,A).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,et)),this.addEventListener("keydown",_(this,st)),this.addEventListener("blur",_(this,tt)),this.addEventListener("focus",_(this,B)),this.addEventListener("click",_(this,R)),this.addEventListener("mousedown",_(this,R))}focus(t){super.focus(t),_(this,B).call(this)}render(){return C`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,$,at).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;G=new WeakMap;O=new WeakMap;R=new WeakMap;B=new WeakMap;tt=new WeakMap;et=new WeakMap;st=new WeakMap;$=new WeakSet;Et=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};at=function(t,e){return String(t).padStart(e,"0")};T=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){Wt(this,W,"")};D.formAssociated=!0;I([y({type:Number})],D.prototype,"value",2);I([y({type:Number})],D.prototype,"length",2);I([y({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);I([y({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);I([H()],D.prototype,"displayValue",2);I([_t("value")],D.prototype,"_refreshDisplayValue",1);D=I([St("gds-date-part-spinner")],D);const De=Ot`
  @layer base, reset;

  @layer base {
    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-sys-space-4xs);
      font-size: var(--gds-sys-text-size-detail-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    :host([size='small']) .spinners {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-sys-space-2xs); */
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l2-background-tertiary);
        color: var(--gds-color-l2-content-tertiary);
      }
    }
  }
`;var Se=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,It=t=>{throw TypeError(t)},d=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fe(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Se(e,s,a),a},wt=(t,e,s)=>e.has(t)||It("Cannot "+s),g=(t,e,s)=>(wt(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),j=(t,e,s,i)=>(wt(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(wt(t,e,"access private method"),s),L,c,Pt,Nt,K,zt,At,it,P,V,Tt,nt,rt,ot,lt,ht,dt,pt,ct,ut,X,gt,ft,mt,vt,Y,Lt,Vt;let h=class extends jt{constructor(){super(),v(this,c),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,c,mt).call(this,"y-m-d"),v(this,L),v(this,Tt,t=>{this._elTrigger.then(e=>{var i,a;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((a=document.getSelection())==null||a.removeAllRanges())})}),v(this,nt,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),v(this,rt,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),v(this,ot,t=>{this._elFieldAsync.then(e=>{var o;if(t.currentTarget!==e)return;t.preventDefault();const s=(o=t.clipboardData)==null?void 0:o.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const p=this._dateFormatLayout.layout,r=parseInt(n[p.findIndex(l=>l.token==="y")]),k=parseInt(n[p.findIndex(l=>l.token==="m")])-1,M=parseInt(n[p.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(M)&&(i=new Date(`${r}-${k+1}-${M}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,f(this,c,P).call(this))})}),v(this,lt,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),v(this,ht,t=>{t.stopPropagation(),this.value=t.detail,this.open=!1,f(this,c,P).call(this),f(this,c,V).call(this)}),v(this,dt,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),v(this,pt,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),v(this,ct,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),v(this,ut,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),v(this,X,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),f(this,c,V).call(this)}),v(this,gt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;!de(e||new Date(0),g(this,L)||new Date(0))&&(this.value=e,f(this,c,P).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=g(this,L),f(this,c,V).call(this))}}),v(this,ft,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),v(this,vt,(t,e)=>{g(this,Y)[e]=t;const s=new Date;s.setFullYear(parseInt(g(this,Y).year)),s.setMonth(parseInt(g(this,Y).month)-1),s.setDate(parseInt(g(this,Y).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,c,P).call(this),f(this,c,V).call(this))}),v(this,Y,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return this._internalValue}set value(t){this._internalValue=t}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=f(this,c,mt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ie.instance.apply(this,"gds-datepicker")}render(){return C`
      ${z(!this.plain,()=>C`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${z(this.supportingText.length>0,()=>C`<span slot="supporting-text" id="supporting-text">
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
        @copy=${g(this,rt)}
        @paste=${g(this,ot)}
        id="field"
      >
        <div class="spinners">
          ${ye(_e(this._dateFormatLayout.layout,(t,e)=>C`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${g(this,Y)[t.name]}
                  aria-valuemin=${f(this,c,At).call(this,t.name)}
                  aria-valuemax=${f(this,c,it).call(this,t.name)}
                  aria-label=${f(this,c,zt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,c,it).call(this,t.name).toString().length}
                  @keydown=${g(this,ft)}
                  @change=${s=>g(this,vt).call(this,s.detail.value,t.name)}
                  @focus=${g(this,nt)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),C`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${u("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${z(this.size==="small",()=>C`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>C`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${z(f(this,c,Pt).call(this),()=>C`<gds-form-control-footer class="size-${this.size}">
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
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
              @click=${g(this,ut)}
              aria-label=${u("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${g(this,dt)}
              .maxHeight=${300}
              label="${u("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${u("January")}</gds-option>
              <gds-option value="1">${u("February")}</gds-option>
              <gds-option value="2">${u("March")}</gds-option>
              <gds-option value="3">${u("April")}</gds-option>
              <gds-option value="4">${u("May")}</gds-option>
              <gds-option value="5">${u("June")}</gds-option>
              <gds-option value="6">${u("July")}</gds-option>
              <gds-option value="7">${u("August")}</gds-option>
              <gds-option value="8">${u("September")}</gds-option>
              <gds-option value="9">${u("October")}</gds-option>
              <gds-option value="10">${u("November")}</gds-option>
              <gds-option value="11">${u("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${g(this,pt)}
              .maxHeight=${300}
              label="${u("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${$e(g(this,c,Lt),t=>t,t=>C`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${g(this,ct)}
              aria-label=${u("Next month")}
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

          <gds-flex
            align-items="center"
            justify-content="space-between"
            padding="0 m m m"
          >
            <gds-button
              rank="tertiary"
              size="small"
              @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,f(this,c,P).call(this)}}
            >
              ${u("Clear")}
            </gds-button>
            ${Ce(f(this,c,Nt).call(this),Dt)}
            <gds-button
              rank="tertiary"
              size="small"
              @click=${t=>{t.stopPropagation(),f(this,c,K).call(this,new Date)}}
            >
              ${u("Today")}
            </gds-button>
          </gds-flex>
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){j(this,Y,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");j(this,Y,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(j(this,L,this.value),this._elCalendar.then(t=>t.focus()))}};L=new WeakMap;c=new WeakSet;Pt=function(){return!this.plain&&this.invalid};Nt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=u("Last available date"),s=i=>{i.stopPropagation(),f(this,c,K).call(this,this.max)}):t&&t<this.min&&(e=u("First available date"),s=i=>{i.stopPropagation(),f(this,c,K).call(this,this.min)}),C`${z(e.length>0,()=>C`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Dt)}`};K=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(g(this,X))};zt=function(t){return`${{year:u("Year"),month:u("Month"),day:u("Day")}[t]} ${this.label}`};At=function(t){return{year:1900,month:1,day:1}[t]};it=function(t){return{year:9999,month:12,day:31}[t]};P=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};V=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};Tt=new WeakMap;nt=new WeakMap;rt=new WeakMap;ot=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;pt=new WeakMap;ct=new WeakMap;ut=new WeakMap;X=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(r=>r==="y"),a=s.findIndex(r=>r==="m"),n=s.findIndex(r=>r==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const p=[i,a,n].sort((r,k)=>r-k).map(r=>s[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:p}};vt=new WeakMap;Y=new WeakMap;Lt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=g(this,c,Vt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Vt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[ae,se,De];d([y({converter:$t})],h.prototype,"value",1);d([y({converter:$t})],h.prototype,"min",2);d([y({converter:$t})],h.prototype,"max",2);d([y({type:Boolean})],h.prototype,"open",2);d([y({attribute:"supporting-text"})],h.prototype,"supportingText",2);d([y({type:String})],h.prototype,"size",2);d([y({type:Boolean})],h.prototype,"plain",2);d([y({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);d([y({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);d([y()],h.prototype,"dateformat",1);d([y({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);d([y({converter:ne,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);d([y({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);d([Z("#calendar-button")],h.prototype,"test_calendarButton",2);d([H()],h.prototype,"_focusedMonth",2);d([H()],h.prototype,"_focusedYear",2);d([H()],h.prototype,"_dateFormatLayout",2);d([Z("#calendar")],h.prototype,"_elCalendar",2);d([Z("#calendar-button")],h.prototype,"_elTrigger",2);d([Z("#field")],h.prototype,"_elFieldAsync",2);d([ve("[role=spinbutton]")],h.prototype,"_elSpinners",2);d([qt("#field")],h.prototype,"_elField",2);d([_t("value")],h.prototype,"_handleValueChange",1);d([_t("open")],h.prototype,"_handleOpenChange",1);h=d([Gt()],h);let yt=class extends re(oe(le(h))){};yt=d([St("gds-datepicker",{dependsOn:[ee,Qt,te,he,fe,pe,ce,ue,ge]})],yt);yt.define();
