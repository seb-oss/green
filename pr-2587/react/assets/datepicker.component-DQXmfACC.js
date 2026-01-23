import{i as Be,x as S,t as Ae,_ as i,n as p,r as j,g as ke,G as He,b as m,c as h,T as ie,d,e as A,h as D,E as Pe}from"./tokens.style-B0vrhvW7.js";import{l as Ge,m as g}from"./runtime-nRyYmvPb.js";import{a as at,e as te,w as se}from"./watch-Bh1rs_BK.js";import{f as nt,r as ae,c as rt,G as it}from"./dropdown.component-CjLXfH2z.js";import{e as Re,i as ot,t as lt,w as dt,b as ht,a as ut}from"./icon.component-DDMHL4dL.js";import{p as ct,v as E,s as H,M as re,m as pt,f as gt,i as ft}from"./unwrap-slots-2bXPvwpO.js";import{n as C}from"./when-BR7zwNJC.js";import{b as We,G as yt,a as mt}from"./button.component-BeDIx5JJ.js";import{d as Ce,a as bt}from"./attribute-converters-CdI0trPX.js";import{e as Ne}from"./class-map-raVkJvW4.js";import{T as Ve}from"./transitional-styles-BB9KcDhD.js";import{I as vt,a as _t}from"./calender-add.component-ilHamFA_.js";import{I as wt,a as $t}from"./chevron-right.component-C-7pe0Sk.js";import{G as xt}from"./popover.component-CkuNmVhf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dt;function kt(e){return(t,s)=>at(t,s,{get(){return(this.renderRoot??Dt??(Dt=document.createDocumentFragment())).querySelectorAll(e)}})}const Ct=6048e5,Te=Symbol.for("constructDateFrom");function W(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Te in e?e[Te](t):e instanceof Date?new e.constructor(t):new Date(t)}function M(e,t){return W(t||e,e)}function O(e,t,s){const a=M(e,s==null?void 0:s.in);return isNaN(t)?W(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function je(e,t,s){const a=M(e,s==null?void 0:s.in);if(isNaN(t))return W(e,NaN);if(!t)return a;const n=a.getDate(),r=W(e,a.getTime());r.setMonth(a.getMonth()+t+1,0);const l=r.getDate();return n>=l?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let Mt={};function Me(){return Mt}function z(e,t){var u,o,y,_;const s=Me(),a=(t==null?void 0:t.weekStartsOn)??((o=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:o.weekStartsOn)??s.weekStartsOn??((_=(y=s.locale)==null?void 0:y.options)==null?void 0:_.weekStartsOn)??0,n=M(e,t==null?void 0:t.in),r=n.getDay(),l=(r<a?7:0)+r-a;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function Fe(e,...t){const s=W.bind(null,e||t.find(a=>typeof a=="object"));return t.map(s)}function Ie(e,t){const s=M(e,t==null?void 0:t.in);return s.setHours(0,0,0,0),s}function Ft(e,t,s){return O(e,t*7,s)}function I(e,t,s){const[a,n]=Fe(s==null?void 0:s.in,e,t);return+Ie(a)==+Ie(n)}function St(e,t){const s=M(e,t==null?void 0:t.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function Ue(e,t){const[s,a]=Fe(e,t.start,t.end);return{start:s,end:a}}function Yt(e,t){const{start:s,end:a}=Ue(t==null?void 0:t.in,e);let n=+s>+a;const r=n?+s:+a,l=n?a:s;l.setHours(0,0,0,0);let u=1;const o=[];for(;+l<=r;)o.push(W(s,l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return n?o.reverse():o}function Wt(e,t){const{start:s,end:a}=Ue(t==null?void 0:t.in,e);let n=+s>+a;const r=z(n?a:s,t),l=z(n?s:a,t);r.setHours(15),l.setHours(15);const u=+l.getTime();let o=r,y=(t==null?void 0:t.step)??1;if(!y)return[];y<0&&(y=-y,n=!n);const _=[];for(;+o<=u;)o.setHours(0),_.push(W(s,o)),o=Ft(o,y),o.setHours(15);return n?_.reverse():_}function Nt(e,t){const s=M(e,t==null?void 0:t.in);return s.setDate(1),s.setHours(0,0,0,0),s}function Tt(e,t){var _,c;const s=M(e,t==null?void 0:t.in),a=s.getFullYear(),n=Me(),r=n.firstWeekContainsDate??((c=(_=n.locale)==null?void 0:_.options)==null?void 0:c.firstWeekContainsDate)??1,l=W(e,0);l.setFullYear(a+1,0,r),l.setHours(0,0,0,0);const u=z(l,t),o=W(e,0);o.setFullYear(a,0,r),o.setHours(0,0,0,0);const y=z(o,t);return+s>=+u?a+1:+s>=+y?a:a-1}function It(e,t){var u,o;const s=Me(),a=s.firstWeekContainsDate??((o=(u=s.locale)==null?void 0:u.options)==null?void 0:o.firstWeekContainsDate)??1,n=Tt(e,t),r=W(e,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),z(r,t)}function zt(e,t){const s=M(e,t==null?void 0:t.in),a=+z(s,t)-+It(s,t);return Math.round(a/Ct)+1}function Ke(e,t){const s=M(e,t==null?void 0:t.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),M(s,t==null?void 0:t.in)}function Et(e,t,s){const[a,n]=Fe(s==null?void 0:s.in,e,t);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function Lt(e,t,s){const a=M(e,s==null?void 0:s.in);return a.setHours(t),a}function Ot(e,t,s){return je(e,-1,s)}const Bt=Be`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
      --columns: 7;
    }

    table {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: var(--gds-sys-space-xs);
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-3xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }

      &.show-week-numbers {
        --columns: 8;
      }
    }

    tr,
    thead,
    tbody {
      display: contents;
    }

    th,
    td {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--gds-sys-space-2xl);
      width: var(--gds-sys-space-2xl);
      box-sizing: border-box;
      user-select: none;
    }

    th {
      font-weight: normal;
    }

    td {
      position: relative;
      border-width: var(--gds-sys-space-4xs);
      border-style: solid;
      border-color: transparent;
      border-radius: var(--gds-sys-radius-max);
      transition: background 0.2s;
      outline-style: solid;
      outline-color: transparent;
      outline-width: 0px;
      outline-offset: var(--gds-sys-space-4xs);

      &.short {
        width: var(--gds-sys-space-4xl);
      }

      &.wide {
        width: var(--gds-sys-space-5xl);
      }

      &.long {
        width: var(--gds-sys-space-7xl);
      }

      &:not(.disabled):hover,
      &[aria-selected='true'] {
        cursor: pointer;
      }

      &[aria-selected='true'] {
        color: var(--gds-sys-color-content-neutral-03);
        background: var(--gds-sys-color-l3-neutral-01);
      }

      &:not(.disabled):hover {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
      }

      &[aria-selected='true']:not(.disabled):hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-strong);
      }

      &.disabled:not(.week-number) {
        background: var(--gds-sys-color-l3-disabled-01);
        color: var(--gds-sys-color-content-disabled-01);
        cursor: not-allowed;
      }

      &.disabled.week-number {
        color: var(--gds-sys-color-content-neutral-02);
        cursor: default;
      }

      &[aria-selected='false']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }

      &[aria-selected='true']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:focus-visible {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-width: var(--gds-sys-space-4xs);
      }

      &.small {
        width: var(--gds-sys-space-xl);
        height: var(--gds-sys-space-xl);
        font: var(--gds-sys-text-body-book-s);
        line-height: var(--gds-sys-text-line-height-detail-s);

        &.short {
          width: var(--gds-sys-space-2xl);
        }

        &.wide {
          width: var(--gds-sys-space-3xl);
        }

        &.long {
          width: var(--gds-sys-space-6xl);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;var At=Bt;function Ht(e,t){const s=Nt(e),a=St(e),n=Wt({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(O(n[n.length-1],7));return S`${t(n.map(r=>({days:Yt({start:r,end:O(r,6)})})))}`}var V,Se,Xe;let v=class extends He{constructor(){super(...arguments),m(this,V),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Ke(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),Ve.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",h(this,V,Xe)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return S`<table
      role="grid"
      aria-label="${We(this.label)}"
      class="${Ne({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${C(!this.hideDayNames,()=>S`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>S`<th></th>`)}
              <th>${g("Mon").substring(0,1)}</th>
              <th>${g("Tue").substring(0,1)}</th>
              <th>${g("Wed").substring(0,1)}</th>
              <th>${g("Thu").substring(0,1)}</th>
              <th>${g("Fri").substring(0,1)}</th>
              <th>${g("Sat").substring(0,1)}</th>
              <th>${g("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${Ht(this.focusedDate,t=>S`
            ${t.map(s=>S`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>S`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${zt(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(c=>I(c.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(c=>I(c,a))),...n},l=!Et(this.focusedDate,a),u=(a<this.min||a>this.max)&&!I(a,this.min)&&!I(a,this.max),o=a.getDay()===0||a.getDay()===6,y=r.disabled||l||u||this.disabledWeekends&&o;return this.hideExtraneousDays&&l?S`<td inert></td>`:S`
                          <td
                            role="${We(y?void 0:"gridcell")}"
                            class="${Ne({small:this.size==="small","custom-date":!!n,disabled:!!y,today:I(e,a)})}"
                            ?disabled=${y}
                            tabindex="${I(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&I(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:h(this,V,Se).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${a.getDate()}</span
                            >

                            ${C(r.indicator,()=>S`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};V=new WeakSet;Se=function(e){const t=Lt(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};Xe=function(e){var a;let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=O(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=O(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=O(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=O(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||h(this,V,Se).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=Ot(this.focusedDate),t=!0):e.key==="PageDown"&&(s=je(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()}))};v.styles=[Ae,At];v.shadowRootOptions={mode:"open",delegatesFocus:!0};i([p()],v.prototype,"value",2);i([p({type:Date})],v.prototype,"min",2);i([p({type:Date})],v.prototype,"max",2);i([p()],v.prototype,"focusedDate",2);i([p({type:Boolean,attribute:"disabled-weekends"})],v.prototype,"disabledWeekends",2);i([p({type:Array,attribute:"disabled-dates"})],v.prototype,"disabledDates",2);i([p({type:Number})],v.prototype,"focusedMonth",1);i([p({type:Number})],v.prototype,"focusedYear",1);i([p({reflect:!0})],v.prototype,"size",2);i([p({type:Boolean})],v.prototype,"showWeekNumbers",2);i([p({type:Boolean})],v.prototype,"hideExtraneousDays",2);i([p({type:Boolean})],v.prototype,"hideDayNames",2);i([p({attribute:!1})],v.prototype,"customizedDates",2);i([p()],v.prototype,"label",2);i([p({attribute:!1})],v.prototype,"dateLabelTemplate",2);i([j()],v.prototype,"_currentLocale",2);i([te('td[tabindex="0"]')],v.prototype,"_elFocusedCell",2);i([se("value")],v.prototype,"_valueChanged",1);v=i([ke("gds-calendar"),Ge()],v);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Pt(e,t){const s=typeof t=="function";if(e!==void 0){let a=-1;for(const n of e)a>-1&&(yield s?t(a):t),a++,yield n}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Gt(e,t){if(e!==void 0){let s=0;for(const a of e)yield t(a,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(e,t,s)=>{const a=new Map;for(let n=t;n<=s;n++)a.set(e[n],n);return a},Rt=Re(class extends ot{constructor(e){if(super(e),e.type!==lt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let a;s===void 0?s=t:t!==void 0&&(a=t);const n=[],r=[];let l=0;for(const u of e)n[l]=a?a(u,l):l,r[l]=s(u,l),l++;return{values:r,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,a]){const n=ct(e),{values:r,keys:l}=this.dt(t,s,a);if(!Array.isArray(n))return this.ut=l,r;const u=this.ut??(this.ut=[]),o=[];let y,_,c=0,x=n.length-1,w=0,k=r.length-1;for(;c<=x&&w<=k;)if(n[c]===null)c++;else if(n[x]===null)x--;else if(u[c]===l[w])o[w]=E(n[c],r[w]),c++,w++;else if(u[x]===l[k])o[k]=E(n[x],r[k]),x--,k--;else if(u[c]===l[k])o[k]=E(n[c],r[k]),H(e,o[k+1],n[c]),c++,k--;else if(u[x]===l[w])o[w]=E(n[x],r[w]),H(e,n[c],n[x]),x--,w++;else if(y===void 0&&(y=ze(l,w,k),_=ze(u,c,x)),y.has(u[c]))if(y.has(u[x])){const N=_.get(l[w]),ne=N!==void 0?n[N]:null;if(ne===null){const Ye=H(e,n[c]);E(Ye,r[w]),o[w]=Ye}else o[w]=E(ne,r[w]),H(e,n[c],ne),n[N]=null;w++}else re(n[x]),x--;else re(n[c]),c++;for(;w<=k;){const N=H(e,o[k+1]);E(N,r[w]),o[w++]=N}for(;c<=x;){const N=n[c++];N!==null&&re(N)}return this.ut=l,pt(e,o),ie}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class jt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=e=>!ft(e)&&typeof e.then=="function",Le=1073741823;class Ut extends gt{constructor(){super(...arguments),this._$Cwt=Le,this._$Cbt=[],this._$CK=new Vt(this),this._$CX=new jt}render(...t){return t.find((s=>!Ee(s)))??ie}update(t,s){const a=this._$Cbt;let n=a.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let u=0;u<s.length&&!(u>this._$Cwt);u++){const o=s[u];if(!Ee(o))return this._$Cwt=u,o;u<n&&o===a[u]||(this._$Cwt=Le,n=0,Promise.resolve(o).then((async y=>{for(;l.get();)await l.get();const _=r.deref();if(_!==void 0){const c=_._$Cbt.indexOf(o);c>-1&&c<_._$Cwt&&(_._$Cwt=c,_.setValue(y))}})))}return ie}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Kt=Re(Ut);var T,U,K,X,Z,oe,le,de,$,Ze,P,he,G,q;let F=class extends He{constructor(){super(...arguments),m(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=h(this,$,he).call(this,this.value,this.length),m(this,T,""),m(this,U,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=h(this,$,G).call(this,e+1),h(this,$,P).call(this)}),m(this,K,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=h(this,$,G).call(this,e-1),h(this,$,P).call(this)}),m(this,X,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),m(this,Z,()=>{h(this,$,q).call(this)}),m(this,oe,()=>{d(this,T)!==""&&(h(this,$,q).call(this),this.value=h(this,$,G).call(this,parseInt(this.value.toString())),h(this,$,P).call(this))}),m(this,le,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?d(this,K).call(this):d(this,U).call(this)}),m(this,de,e=>{let t=!1;if(e.key==="ArrowUp")d(this,U).call(this),t=!0;else if(e.key==="ArrowDown")d(this,K).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(d(this,T).length<this.length&&(A(this,T,d(this,T)+s.toString()),this.value=parseInt(d(this,T))),d(this,T).length===this.length&&(this.value=h(this,$,G).call(this,this.value),h(this,$,q).call(this),h(this,$,Ze).call(this),h(this,$,P).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",d(this,le)),this.addEventListener("keydown",d(this,de)),this.addEventListener("blur",d(this,oe)),this.addEventListener("focus",d(this,Z)),this.addEventListener("click",d(this,X)),this.addEventListener("mousedown",d(this,X))}focus(e){super.focus(e),d(this,Z).call(this)}render(){return D`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=h(this,$,he).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};T=new WeakMap;U=new WeakMap;K=new WeakMap;X=new WeakMap;Z=new WeakMap;oe=new WeakMap;le=new WeakMap;de=new WeakMap;$=new WeakSet;Ze=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof F){e.focus();break}e=e.nextElementSibling}};P=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};he=function(e,t){return String(e).padStart(t,"0")};G=function(e){return Math.max(this.min,Math.min(this.max,e))};q=function(){A(this,T,"")};F.formAssociated=!0;i([p({type:Number})],F.prototype,"value",2);i([p({type:Number})],F.prototype,"length",2);i([p({type:Number,attribute:"aria-valuemin"})],F.prototype,"min",2);i([p({type:Number,attribute:"aria-valuemax"})],F.prototype,"max",2);i([j()],F.prototype,"displayValue",2);i([se("value")],F.prototype,"_refreshDisplayValue",1);F=i([ke("gds-date-part-spinner")],F);const Xt=Be`
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
`;var Zt=Xt,J,R,b,qe,Je,Q,Qe,et,ue,L,B,ce,pe,ge,fe,ye,me,be,ve,_e,ee,we,$e,xe,De,Y,tt,st;let f=class extends mt{constructor(){super(),m(this,b),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,m(this,J,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=h(this,b,xe).call(this,"y-m-d"),m(this,R),m(this,ce,e=>{this._elTrigger.then(t=>{var a,n;(a=document.getSelection())==null||a.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),(n=document.getSelection())==null||n.addRange(s)})}),m(this,pe,e=>{this._elFieldAsync.then(t=>{var s;e.currentTarget===t&&(e.preventDefault(),(s=e.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),m(this,ge,e=>{this._elFieldAsync.then(t=>{var l;if(e.currentTarget!==t)return;e.preventDefault();const s=(l=e.clipboardData)==null?void 0:l.getData("text/plain");if(!s)return;let a=new Date("-");const n="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const u=this._dateFormatLayout.layout,o=parseInt(r[u.findIndex(c=>c.token==="y")]),y=parseInt(r[u.findIndex(c=>c.token==="m")])-1,_=parseInt(r[u.findIndex(c=>c.token==="d")]);!isNaN(o)&&!isNaN(y)&&!isNaN(_)&&(a=new Date(`${o}-${y+1}-${_}`))}a.toString()===n&&(a=new Date(s),a.toString()===n)||(this.value=a,h(this,b,L).call(this))})}),m(this,fe,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),m(this,ye,e=>{e.stopPropagation();const t=new Date(e.detail);t.setUTCHours(this.utcHours,0,0,0),this.value=t,this.open=!1,h(this,b,L).call(this),h(this,b,B).call(this)}),m(this,me,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),m(this,be,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),m(this,ve,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),m(this,_e,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),m(this,ee,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),h(this,b,B).call(this)}),m(this,we,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,h(this,b,L).call(this);return}!I(t||new Date(0),d(this,R)||new Date(0))&&(this.value=new Date(t),h(this,b,L).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=d(this,R),h(this,b,B).call(this))}}),m(this,$e,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),m(this,De,(e,t)=>{d(this,Y)[t]=e;const s=new Date("0000-01-01");s.setUTCHours(this.utcHours,0,0,0),s.setUTCFullYear(parseInt(d(this,Y).year)),s.setUTCMonth(parseInt(d(this,Y).month)-1);const a=Ke(s).getDate(),n=a<parseInt(d(this,Y).day)?a:parseInt(d(this,Y).day);s.setUTCDate(isNaN(n)?1:n),s.toString()!=="Invalid Date"&&(this.value=s,h(this,b,L).call(this),h(this,b,B).call(this))}),m(this,Y,{year:"yyyy",month:"mm",day:"dd"}),F.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return d(this,J)}set utcHours(e){var t;A(this,J,e),(t=this._internalValue)==null||t.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=h(this,b,xe).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),Ve.instance.apply(this,"gds-datepicker")}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){return D`
      ${C(!this.plain,()=>D`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${C(this.supportingText.length>0,()=>D`<span slot="supporting-text" id="supporting-text">
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
        @click=${d(this,fe)}
        @copy=${d(this,pe)}
        @paste=${d(this,ge)}
        id="field"
      >
        <div class="spinners">
          ${Pt(Gt(this._dateFormatLayout.layout,(e,t)=>D`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${d(this,Y)[e.name]}
                  aria-valuemin=${h(this,b,et).call(this,e.name)}
                  aria-valuemax=${h(this,b,ue).call(this,e.name)}
                  aria-label=${h(this,b,Qe).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${h(this,b,ue).call(this,e.name).toString().length}
                  @keydown=${d(this,$e)}
                  @change=${s=>d(this,De).call(this,s.detail.value,e.name)}
                  @focus=${d(this,ce)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),D`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${g("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${C(this.size==="small",()=>D`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>D`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${C(h(this,b,qe).call(this),()=>D`<gds-form-control-footer
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
        @gds-ui-state=${d(this,we)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var s;((s=e.target)==null?void 0:s.id)==="calendar-popover"&&this._elCalendar.then(a=>a.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${d(this,_e)}
              aria-label=${g("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${d(this,me)}
              .maxHeight=${300}
              label="${g("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${g("January")}</gds-option>
              <gds-option value="1">${g("February")}</gds-option>
              <gds-option value="2">${g("March")}</gds-option>
              <gds-option value="3">${g("April")}</gds-option>
              <gds-option value="4">${g("May")}</gds-option>
              <gds-option value="5">${g("June")}</gds-option>
              <gds-option value="6">${g("July")}</gds-option>
              <gds-option value="7">${g("August")}</gds-option>
              <gds-option value="8">${g("September")}</gds-option>
              <gds-option value="9">${g("October")}</gds-option>
              <gds-option value="10">${g("November")}</gds-option>
              <gds-option value="11">${g("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${d(this,be)}
              .maxHeight=${300}
              label="${g("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${Rt(d(this,b,tt),e=>e,e=>D`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${d(this,ve)}
              aria-label=${g("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${d(this,ye)}
            @gds-date-focused=${d(this,ee)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${C(this.clearable||!this.hideTodayButton,()=>D`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${C(this.clearable,()=>D` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,h(this,b,B).call(this),h(this,b,L).call(this)}}
                      aria-label=${g("Clear selected date")}
                    >
                      ${g("Clear")}
                    </gds-button>`)}
                ${Kt(h(this,b,Je).call(this),Pe)}
                ${C(!this.hideTodayButton,()=>D` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),h(this,b,Q).call(this,new Date)}}
                      aria-label=${g("Select today's date")}
                    >
                      ${g("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){A(this,Y,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");A(this,Y,{year:t,month:s,day:a})}_handleOpenChange(){this.open&&(A(this,R,this.value),this._elCalendar.then(e=>e.focus()))}};J=new WeakMap;R=new WeakMap;b=new WeakSet;qe=function(){return!this.plain};Je=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=g("Last available date"),s=a=>{a.stopPropagation(),h(this,b,Q).call(this,this.max)}):e&&e<this.min&&(t=g("First available date"),s=a=>{a.stopPropagation(),h(this,b,Q).call(this,this.min)}),D`${C(t.length>0,()=>D`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>Pe)}`};Q=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(d(this,ee))};Qe=function(e){return`${{year:g("Year"),month:g("Month"),day:g("Day")}[e]} ${this.label}`};et=function(e){return{year:1900,month:1,day:1}[e]};ue=function(e){return{year:9999,month:12,day:31}[e]};L=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};B=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ce=new WeakMap;pe=new WeakMap;ge=new WeakMap;fe=new WeakMap;ye=new WeakMap;me=new WeakMap;be=new WeakMap;ve=new WeakMap;_e=new WeakMap;ee=new WeakMap;we=new WeakMap;$e=new WeakMap;xe=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),a=s.findIndex(o=>o==="y"),n=s.findIndex(o=>o==="m"),r=s.findIndex(o=>o==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const u=[a,n,r].sort((o,y)=>o-y).map(o=>s[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:u}};De=new WeakMap;Y=new WeakMap;tt=function(){var n;const e=this.min.getFullYear(),t=this.max.getFullYear(),s=d(this,b,st),a=(n=this.value)==null?void 0:n.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let r=e;r<=t;r++)yield r}}};st=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};f.styles=[Ae,nt,Zt];i([p({converter:Ce})],f.prototype,"value",1);i([p({converter:Ce})],f.prototype,"min",2);i([p({converter:Ce})],f.prototype,"max",2);i([p({type:Boolean})],f.prototype,"open",2);i([p({attribute:"supporting-text"})],f.prototype,"supportingText",2);i([p({type:String})],f.prototype,"size",2);i([p({type:Boolean})],f.prototype,"plain",2);i([p({type:Boolean,attribute:"show-week-numbers"})],f.prototype,"showWeekNumbers",2);i([p({type:Boolean,attribute:"hide-label"})],f.prototype,"hideLabel",2);i([p({type:Boolean,attribute:"clearable"})],f.prototype,"clearable",2);i([p({type:Boolean,attribute:"hide-today-button"})],f.prototype,"hideTodayButton",2);i([p({type:Number,attribute:"utc-hours"})],f.prototype,"utcHours",1);i([p()],f.prototype,"dateformat",1);i([p({type:Boolean,attribute:"disabled-weekends"})],f.prototype,"disabledWeekends",2);i([p({converter:bt,attribute:"disabled-dates"})],f.prototype,"disabledDates",2);i([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],f.prototype,"showExtendedSupportingText",2);i([ae("#calendar-button")],f.prototype,"test_calendarButton",2);i([te("#clear-button")],f.prototype,"test_clearButton",2);i([te("#today-button")],f.prototype,"test_todayButton",2);i([j()],f.prototype,"_focusedMonth",2);i([j()],f.prototype,"_focusedYear",2);i([j()],f.prototype,"_dateFormatLayout",2);i([ae("#calendar")],f.prototype,"_elCalendar",2);i([ae("#calendar-button")],f.prototype,"_elTrigger",2);i([ae("#field")],f.prototype,"_elFieldAsync",2);i([kt("[role=spinbutton]")],f.prototype,"_elSpinners",2);i([te("#field")],f.prototype,"_elField",2);i([se("value")],f.prototype,"_handleValueChange",1);i([se("open")],f.prototype,"_handleOpenChange",1);f=i([Ge()],f);let Oe=class extends dt(ht(ut(f))){};Oe=i([ke("gds-datepicker",{dependsOn:[rt,yt,it,v,xt,vt,_t,wt,$t]})],Oe);export{Oe as G,v as a,Kt as m};
