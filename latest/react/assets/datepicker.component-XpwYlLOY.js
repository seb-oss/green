import{i as et,x as M,G as tt,b as d,c as u,t as st,_ as r,n as g,r as X,g as Oe,T as pe,d as h,e as V,h as $,E as at}from"./tokens.style-DdV6ipms.js";import{m as f,l as nt}from"./runtime-nRyYmvPb.js";import{a as bt,e as le,w as de}from"./watch-Bh1rs_BK.js";import{f as vt,r as he,c as wt,G as _t}from"./dropdown.component-CKQoTkn1.js";import{e as it,i as $t,t as xt,w as kt,b as Dt,a as Ct}from"./icon.component-CPDtKq9S.js";import{p as Mt,v as I,s as P,M as ce,m as St,f as Ft,i as Wt}from"./unwrap-slots-Bc9cWLw4.js";import{n as k}from"./when-BR7zwNJC.js";import{b as je,G as Yt,a as Nt}from"./button.component-dABcb4XE.js";import{d as Ae,a as Tt}from"./attribute-converters-CdI0trPX.js";import{e as Ue}from"./class-map-DX7GvrIr.js";import{T as rt}from"./transitional-styles-R5Ln4I92.js";import{I as Et,a as It}from"./calender-add.component-2QetwC73.js";import{I as zt,a as Bt}from"./chevron-right.component-CyRFLqmj.js";import{G as Lt}from"./popover.component-BOmsK-AM.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ot;function At(e){return(t,s)=>bt(t,s,{get(){return(this.renderRoot??Ot??(Ot=document.createDocumentFragment())).querySelectorAll(e)}})}const Ht=6048e5,Ke=Symbol.for("constructDateFrom");function F(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Ke in e?e[Ke](t):e instanceof Date?new e.constructor(t):new Date(t)}function D(e,t){return F(t||e,e)}function L(e,t,s){const a=D(e,s==null?void 0:s.in);return isNaN(t)?F(e,NaN):(t&&a.setDate(a.getDate()+t),a)}function ot(e,t,s){const a=D(e,s==null?void 0:s.in);if(isNaN(t))return F(e,NaN);if(!t)return a;const n=a.getDate(),i=F(e,a.getTime());i.setMonth(a.getMonth()+t+1,0);const l=i.getDate();return n>=l?i:(a.setFullYear(i.getFullYear(),i.getMonth(),n),a)}let Vt={};function He(){return Vt}function E(e,t){var c,o,m,v;const s=He(),a=(t==null?void 0:t.weekStartsOn)??((o=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:o.weekStartsOn)??s.weekStartsOn??((v=(m=s.locale)==null?void 0:m.options)==null?void 0:v.weekStartsOn)??0,n=D(e,t==null?void 0:t.in),i=n.getDay(),l=(i<a?7:0)+i-a;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function Ve(e,...t){const s=F.bind(null,e||t.find(a=>typeof a=="object"));return t.map(s)}function Xe(e,t){const s=D(e,t==null?void 0:t.in);return s.setHours(0,0,0,0),s}function Pt(e,t,s){return L(e,t*7,s)}function N(e,t,s){const[a,n]=Ve(s==null?void 0:s.in,e,t);return+Xe(a)==+Xe(n)}function Rt(e,t){const s=D(e,t==null?void 0:t.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function lt(e,t){const[s,a]=Ve(e,t.start,t.end);return{start:s,end:a}}function Gt(e,t){const{start:s,end:a}=lt(t==null?void 0:t.in,e);let n=+s>+a;const i=n?+s:+a,l=n?a:s;l.setHours(0,0,0,0);let c=1;const o=[];for(;+l<=i;)o.push(F(s,l)),l.setDate(l.getDate()+c),l.setHours(0,0,0,0);return n?o.reverse():o}function jt(e,t){const{start:s,end:a}=lt(t==null?void 0:t.in,e);let n=+s>+a;const i=E(n?a:s,t),l=E(n?s:a,t);i.setHours(15),l.setHours(15);const c=+l.getTime();let o=i,m=(t==null?void 0:t.step)??1;if(!m)return[];m<0&&(m=-m,n=!n);const v=[];for(;+o<=c;)o.setHours(0),v.push(F(s,o)),o=Pt(o,m),o.setHours(15);return n?v.reverse():v}function Ut(e,t){const s=D(e,t==null?void 0:t.in);return s.setDate(1),s.setHours(0,0,0,0),s}function Kt(e,t){var v,p;const s=D(e,t==null?void 0:t.in),a=s.getFullYear(),n=He(),i=n.firstWeekContainsDate??((p=(v=n.locale)==null?void 0:v.options)==null?void 0:p.firstWeekContainsDate)??1,l=F(e,0);l.setFullYear(a+1,0,i),l.setHours(0,0,0,0);const c=E(l,t),o=F(e,0);o.setFullYear(a,0,i),o.setHours(0,0,0,0);const m=E(o,t);return+s>=+c?a+1:+s>=+m?a:a-1}function Xt(e,t){var c,o;const s=He(),a=s.firstWeekContainsDate??((o=(c=s.locale)==null?void 0:c.options)==null?void 0:o.firstWeekContainsDate)??1,n=Kt(e,t),i=F(e,0);return i.setFullYear(n,0,a),i.setHours(0,0,0,0),E(i,t)}function Zt(e,t){const s=D(e,t==null?void 0:t.in),a=+E(s,t)-+Xt(s,t);return Math.round(a/Ht)+1}function dt(e,t){const s=D(e,t==null?void 0:t.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),D(s,t==null?void 0:t.in)}function qt(e,t,s){const[a,n]=Ve(s==null?void 0:s.in,e,t);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function Jt(e,t,s){const a=D(e,s==null?void 0:s.in);return a.setHours(t),a}function Qt(e,t,s){return ot(e,-1,s)}const es=et`
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

      &.outside-month:not(.disabled) {
        color: var(--gds-sys-color-content-neutral-02);
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
`;var ts=es;function ss(e,t){const s=Ut(e),a=Rt(e),n=jt({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(L(n[n.length-1],7));return M`${t(n.map(i=>({days:Gt({start:i,end:L(i,6)})})))}`}var ie,Pe,ge,ht;let b=class extends tt{constructor(){super(...arguments),d(this,ie),d(this,ge),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=dt(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),rt.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",u(this,ge,ht)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return M`<table
      role="grid"
      aria-label="${je(this.label)}"
      class="${Ue({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${k(!this.hideDayNames,()=>M`<thead role="rowgroup">
            <tr role="row">
              ${k(this.showWeekNumbers,()=>M`<th></th>`)}
              <th>${f("Mon").substring(0,1)}</th>
              <th>${f("Tue").substring(0,1)}</th>
              <th>${f("Wed").substring(0,1)}</th>
              <th>${f("Thu").substring(0,1)}</th>
              <th>${f("Fri").substring(0,1)}</th>
              <th>${f("Sat").substring(0,1)}</th>
              <th>${f("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ss(this.focusedDate,t=>M`
            ${t.map(s=>M`
                <tr role="row">
                  ${k(this.showWeekNumbers,()=>M`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${Zt(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(p=>N(p.date,a)),i={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>N(p,a))),...n},l=!qt(this.focusedDate,a),c=(a<this.min||a>this.max)&&!N(a,this.min)&&!N(a,this.max),o=a.getDay()===0||a.getDay()===6,m=i.disabled||c||this.disabledWeekends&&o;return this.hideExtraneousDays&&l?M`<td inert></td>`:M`
                          <td
                            role="${je(m?void 0:"gridcell")}"
                            class="${Ue({small:this.size==="small","custom-date":!!n,disabled:!!m,today:N(e,a),"outside-month":l})}"
                            ?disabled=${m}
                            tabindex="${N(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&N(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>m?null:u(this,ie,Pe).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${i?i==null?void 0:i.color:""}"
                              >${a.getDate()}</span
                            >

                            ${k(i.indicator,()=>M`<span
                                  class="indicator-${i==null?void 0:i.indicator}"
                                  style="--_color: ${i==null?void 0:i.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};ie=new WeakSet;Pe=function(e){const t=Jt(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};ge=new WeakSet;ht=function(e){var a;let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=L(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=L(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=L(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=L(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||u(this,ie,Pe).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=Qt(this.focusedDate),t=!0):e.key==="PageDown"&&(s=ot(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()}))};b.styles=[st,ts];b.shadowRootOptions={mode:"open",delegatesFocus:!0};r([g()],b.prototype,"value",2);r([g({type:Date})],b.prototype,"min",2);r([g({type:Date})],b.prototype,"max",2);r([g()],b.prototype,"focusedDate",2);r([g({type:Boolean,attribute:"disabled-weekends"})],b.prototype,"disabledWeekends",2);r([g({type:Array,attribute:"disabled-dates"})],b.prototype,"disabledDates",2);r([g({type:Number})],b.prototype,"focusedMonth",1);r([g({type:Number})],b.prototype,"focusedYear",1);r([g({reflect:!0})],b.prototype,"size",2);r([g({type:Boolean})],b.prototype,"showWeekNumbers",2);r([g({type:Boolean})],b.prototype,"hideExtraneousDays",2);r([g({type:Boolean})],b.prototype,"hideDayNames",2);r([g({attribute:!1})],b.prototype,"customizedDates",2);r([g()],b.prototype,"label",2);r([g({attribute:!1})],b.prototype,"dateLabelTemplate",2);r([X()],b.prototype,"_currentLocale",2);r([le('td[tabindex="0"]')],b.prototype,"_elFocusedCell",2);r([de("value")],b.prototype,"_valueChanged",1);b=r([Oe("gds-calendar"),nt()],b);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*as(e,t){const s=typeof t=="function";if(e!==void 0){let a=-1;for(const n of e)a>-1&&(yield s?t(a):t),a++,yield n}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ns(e,t){if(e!==void 0){let s=0;for(const a of e)yield t(a,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=(e,t,s)=>{const a=new Map;for(let n=t;n<=s;n++)a.set(e[n],n);return a},is=it(class extends $t{constructor(e){if(super(e),e.type!==xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let a;s===void 0?s=t:t!==void 0&&(a=t);const n=[],i=[];let l=0;for(const c of e)n[l]=a?a(c,l):l,i[l]=s(c,l),l++;return{values:i,keys:n}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,a]){const n=Mt(e),{values:i,keys:l}=this.dt(t,s,a);if(!Array.isArray(n))return this.ut=l,i;const c=this.ut??(this.ut=[]),o=[];let m,v,p=0,_=n.length-1,w=0,x=i.length-1;for(;p<=_&&w<=x;)if(n[p]===null)p++;else if(n[_]===null)_--;else if(c[p]===l[w])o[w]=I(n[p],i[w]),p++,w++;else if(c[_]===l[x])o[x]=I(n[_],i[x]),_--,x--;else if(c[p]===l[x])o[x]=I(n[p],i[x]),P(e,o[x+1],n[p]),p++,x--;else if(c[_]===l[w])o[w]=I(n[_],i[w]),P(e,n[p],n[_]),_--,w++;else if(m===void 0&&(m=Ze(l,w,x),v=Ze(c,p,_)),m.has(c[p]))if(m.has(c[_])){const W=v.get(l[w]),ue=W!==void 0?n[W]:null;if(ue===null){const Ge=P(e,n[p]);I(Ge,i[w]),o[w]=Ge}else o[w]=I(ue,i[w]),P(e,n[p],ue),n[W]=null;w++}else ce(n[_]),_--;else ce(n[p]),p++;for(;w<=x;){const W=P(e,o[x+1]);I(W,i[w]),o[w++]=W}for(;p<=_;){const W=n[p++];W!==null&&ce(W)}return this.ut=l,St(e,o),pe}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rs{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class os{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=e=>!Wt(e)&&typeof e.then=="function",Je=1073741823;class ls extends Ft{constructor(){super(...arguments),this._$Cwt=Je,this._$Cbt=[],this._$CK=new rs(this),this._$CX=new os}render(...t){return t.find((s=>!qe(s)))??pe}update(t,s){const a=this._$Cbt;let n=a.length;this._$Cbt=s;const i=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const o=s[c];if(!qe(o))return this._$Cwt=c,o;c<n&&o===a[c]||(this._$Cwt=Je,n=0,Promise.resolve(o).then((async m=>{for(;l.get();)await l.get();const v=i.deref();if(v!==void 0){const p=v._$Cbt.indexOf(o);p>-1&&p<v._$Cwt&&(v._$Cwt=p,v.setValue(m))}})))}return pe}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ds=it(ls);var Y,Z,q,J,Q,fe,ye,me,be,ut,O,R,ee,ve,A,G,j,te;let C=class extends tt{constructor(){super(...arguments),d(this,be),d(this,O),d(this,ee),d(this,A),d(this,j),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=u(this,ee,ve).call(this,this.value,this.length),d(this,Y,""),d(this,Z,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=u(this,A,G).call(this,e+1),u(this,O,R).call(this)}),d(this,q,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=u(this,A,G).call(this,e-1),u(this,O,R).call(this)}),d(this,J,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),d(this,Q,()=>{u(this,j,te).call(this)}),d(this,fe,()=>{h(this,Y)!==""&&(u(this,j,te).call(this),this.value=u(this,A,G).call(this,parseInt(this.value.toString())),u(this,O,R).call(this))}),d(this,ye,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?h(this,q).call(this):h(this,Z).call(this)}),d(this,me,e=>{let t=!1;if(e.key==="ArrowUp")h(this,Z).call(this),t=!0;else if(e.key==="ArrowDown")h(this,q).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(h(this,Y).length<this.length&&(V(this,Y,h(this,Y)+s.toString()),this.value=parseInt(h(this,Y))),h(this,Y).length===this.length&&(this.value=u(this,A,G).call(this,this.value),u(this,j,te).call(this),u(this,be,ut).call(this),u(this,O,R).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",h(this,ye)),this.addEventListener("keydown",h(this,me)),this.addEventListener("blur",h(this,fe)),this.addEventListener("focus",h(this,Q)),this.addEventListener("click",h(this,J)),this.addEventListener("mousedown",h(this,J))}focus(e){super.focus(e),h(this,Q).call(this)}render(){return $`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=u(this,ee,ve).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap;Z=new WeakMap;q=new WeakMap;J=new WeakMap;Q=new WeakMap;fe=new WeakMap;ye=new WeakMap;me=new WeakMap;be=new WeakSet;ut=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof C){e.focus();break}e=e.nextElementSibling}};O=new WeakSet;R=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ee=new WeakSet;ve=function(e,t){return String(e).padStart(t,"0")};A=new WeakSet;G=function(e){return Math.max(this.min,Math.min(this.max,e))};j=new WeakSet;te=function(){V(this,Y,"")};C.formAssociated=!0;r([g({type:Number})],C.prototype,"value",2);r([g({type:Number})],C.prototype,"length",2);r([g({type:Number,attribute:"aria-valuemin"})],C.prototype,"min",2);r([g({type:Number,attribute:"aria-valuemax"})],C.prototype,"max",2);r([X()],C.prototype,"displayValue",2);r([de("value")],C.prototype,"_refreshDisplayValue",1);C=r([Oe("gds-date-part-spinner")],C);const hs=et`
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
`;var us=hs,se,U,we,ct,_e,pt,K,re,$e,gt,xe,ft,ae,ke,T,z,B,H,De,Ce,Me,Se,Fe,We,Ye,Ne,Te,oe,Ee,Ie,ne,ze,Be,S,Le,yt,Re,mt;let y=class extends Nt{constructor(){super(),d(this,we),d(this,_e),d(this,K),d(this,$e),d(this,xe),d(this,ae),d(this,T),d(this,B),d(this,ne),d(this,Le),d(this,Re),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,d(this,se,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=u(this,ne,ze).call(this,"y-m-d"),d(this,U,void 0),d(this,De,e=>{this._elTrigger.then(t=>{var a,n;(a=document.getSelection())==null||a.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),(n=document.getSelection())==null||n.addRange(s)})}),d(this,Ce,e=>{this._elFieldAsync.then(t=>{var s;e.currentTarget===t&&(e.preventDefault(),(s=e.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),d(this,Me,e=>{this._elFieldAsync.then(t=>{var l;if(e.currentTarget!==t)return;e.preventDefault();const s=(l=e.clipboardData)==null?void 0:l.getData("text/plain");if(!s)return;let a=new Date("-");const n="Invalid Date",i=s.split(this._dateFormatLayout.delimiter);if(i.length===3){const c=this._dateFormatLayout.layout,o=parseInt(i[c.findIndex(p=>p.token==="y")]),m=parseInt(i[c.findIndex(p=>p.token==="m")])-1,v=parseInt(i[c.findIndex(p=>p.token==="d")]);!isNaN(o)&&!isNaN(m)&&!isNaN(v)&&(a=new Date(`${o}-${m+1}-${v}`))}a.toString()===n&&(a=new Date(s),a.toString()===n)||(this.value=a,u(this,T,z).call(this))})}),d(this,Se,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),d(this,Fe,e=>{e.stopPropagation();const t=new Date(e.detail);t.setUTCHours(this.utcHours,0,0,0),this.value=t,this.open=!1,u(this,T,z).call(this),u(this,B,H).call(this)}),d(this,We,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),d(this,Ye,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),d(this,Ne,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),d(this,Te,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),d(this,oe,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),u(this,B,H).call(this)}),d(this,Ee,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,u(this,T,z).call(this);return}!N(t||new Date(0),h(this,U)||new Date(0))&&(this.value=new Date(t),u(this,T,z).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=h(this,U),u(this,B,H).call(this))}}),d(this,Ie,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),d(this,Be,(e,t)=>{h(this,S)[t]=e;const s=new Date("0000-01-01");s.setUTCHours(this.utcHours,0,0,0),s.setUTCFullYear(parseInt(h(this,S).year)),s.setUTCMonth(parseInt(h(this,S).month)-1);const a=dt(s).getDate(),n=a<parseInt(h(this,S).day)?a:parseInt(h(this,S).day);s.setUTCDate(isNaN(n)?1:n),s.toString()!=="Invalid Date"&&(this.value=s,u(this,T,z).call(this),u(this,B,H).call(this))}),d(this,S,{year:"yyyy",month:"mm",day:"dd"}),C.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return h(this,se)}set utcHours(e){var t;V(this,se,e),(t=this._internalValue)==null||t.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=u(this,ne,ze).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),rt.instance.apply(this,"gds-datepicker")}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){return $`
      ${k(!this.plain,()=>$`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${k(this.supportingText.length>0,()=>$`<span slot="supporting-text" id="supporting-text">
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
        @click=${h(this,Se)}
        @copy=${h(this,Ce)}
        @paste=${h(this,Me)}
        id="field"
      >
        <div class="spinners">
          ${as(ns(this._dateFormatLayout.layout,(e,t)=>$`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${h(this,S)[e.name]}
                  aria-valuemin=${u(this,xe,ft).call(this,e.name)}
                  aria-valuemax=${u(this,ae,ke).call(this,e.name)}
                  aria-label=${u(this,$e,gt).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${u(this,ae,ke).call(this,e.name).toString().length}
                  @keydown=${h(this,Ie)}
                  @change=${s=>h(this,Be).call(this,s.detail.value,e.name)}
                  @focus=${h(this,De)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),$`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${f("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${k(this.size==="small",()=>$`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>$`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${k(u(this,we,ct).call(this),()=>$`<gds-form-control-footer
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
        @gds-ui-state=${h(this,Ee)}
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
              @click=${h(this,Te)}
              aria-label=${f("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${h(this,We)}
              .maxHeight=${300}
              label="${f("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${f("January")}</gds-option>
              <gds-option value="1">${f("February")}</gds-option>
              <gds-option value="2">${f("March")}</gds-option>
              <gds-option value="3">${f("April")}</gds-option>
              <gds-option value="4">${f("May")}</gds-option>
              <gds-option value="5">${f("June")}</gds-option>
              <gds-option value="6">${f("July")}</gds-option>
              <gds-option value="7">${f("August")}</gds-option>
              <gds-option value="8">${f("September")}</gds-option>
              <gds-option value="9">${f("October")}</gds-option>
              <gds-option value="10">${f("November")}</gds-option>
              <gds-option value="11">${f("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${h(this,Ye)}
              .maxHeight=${300}
              label="${f("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${is(h(this,Le,yt),e=>e,e=>$`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${h(this,Ne)}
              aria-label=${f("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${h(this,Fe)}
            @gds-date-focused=${h(this,oe)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${k(this.clearable||!this.hideTodayButton,()=>$`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${k(this.clearable,()=>$` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,u(this,B,H).call(this),u(this,T,z).call(this)}}
                      aria-label=${f("Clear selected date")}
                    >
                      ${f("Clear")}
                    </gds-button>`)}
                ${ds(u(this,_e,pt).call(this),at)}
                ${k(!this.hideTodayButton,()=>$` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),u(this,K,re).call(this,new Date)}}
                      aria-label=${f("Select today's date")}
                    >
                      ${f("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,S,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");V(this,S,{year:t,month:s,day:a})}_handleOpenChange(){this.open&&(V(this,U,this.value),this._elCalendar.then(e=>e.focus()))}};se=new WeakMap;U=new WeakMap;we=new WeakSet;ct=function(){return!this.plain};_e=new WeakSet;pt=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=f("Last available date"),s=a=>{a.stopPropagation(),u(this,K,re).call(this,this.max)}):e&&e<this.min&&(t=f("First available date"),s=a=>{a.stopPropagation(),u(this,K,re).call(this,this.min)}),$`${k(t.length>0,()=>$`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>at)}`};K=new WeakSet;re=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(h(this,oe))};$e=new WeakSet;gt=function(e){return`${{year:f("Year"),month:f("Month"),day:f("Day")}[e]} ${this.label}`};xe=new WeakSet;ft=function(e){return{year:1900,month:1,day:1}[e]};ae=new WeakSet;ke=function(e){return{year:9999,month:12,day:31}[e]};T=new WeakSet;z=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};B=new WeakSet;H=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};De=new WeakMap;Ce=new WeakMap;Me=new WeakMap;Se=new WeakMap;Fe=new WeakMap;We=new WeakMap;Ye=new WeakMap;Ne=new WeakMap;Te=new WeakMap;oe=new WeakMap;Ee=new WeakMap;Ie=new WeakMap;ne=new WeakSet;ze=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),a=s.findIndex(o=>o==="y"),n=s.findIndex(o=>o==="m"),i=s.findIndex(o=>o==="d");if(a===-1||n===-1||i===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[a,n,i].sort((o,m)=>o-m).map(o=>s[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:c}};Be=new WeakMap;S=new WeakMap;Le=new WeakSet;yt=function(){var n;const e=this.min.getFullYear(),t=this.max.getFullYear(),s=h(this,Re,mt),a=(n=this.value)==null?void 0:n.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let i=e;i<=t;i++)yield i}}};Re=new WeakSet;mt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};y.styles=[st,vt,us];r([g({converter:Ae})],y.prototype,"value",1);r([g({converter:Ae})],y.prototype,"min",2);r([g({converter:Ae})],y.prototype,"max",2);r([g({type:Boolean})],y.prototype,"open",2);r([g({attribute:"supporting-text"})],y.prototype,"supportingText",2);r([g({type:String})],y.prototype,"size",2);r([g({type:Boolean})],y.prototype,"plain",2);r([g({type:Boolean,attribute:"show-week-numbers"})],y.prototype,"showWeekNumbers",2);r([g({type:Boolean,attribute:"hide-label"})],y.prototype,"hideLabel",2);r([g({type:Boolean,attribute:"clearable"})],y.prototype,"clearable",2);r([g({type:Boolean,attribute:"hide-today-button"})],y.prototype,"hideTodayButton",2);r([g({type:Number,attribute:"utc-hours"})],y.prototype,"utcHours",1);r([g()],y.prototype,"dateformat",1);r([g({type:Boolean,attribute:"disabled-weekends"})],y.prototype,"disabledWeekends",2);r([g({converter:Tt,attribute:"disabled-dates"})],y.prototype,"disabledDates",2);r([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],y.prototype,"showExtendedSupportingText",2);r([he("#calendar-button")],y.prototype,"test_calendarButton",2);r([le("#clear-button")],y.prototype,"test_clearButton",2);r([le("#today-button")],y.prototype,"test_todayButton",2);r([X()],y.prototype,"_focusedMonth",2);r([X()],y.prototype,"_focusedYear",2);r([X()],y.prototype,"_dateFormatLayout",2);r([he("#calendar")],y.prototype,"_elCalendar",2);r([he("#calendar-button")],y.prototype,"_elTrigger",2);r([he("#field")],y.prototype,"_elFieldAsync",2);r([At("[role=spinbutton]")],y.prototype,"_elSpinners",2);r([le("#field")],y.prototype,"_elField",2);r([de("value")],y.prototype,"_handleValueChange",1);r([de("open")],y.prototype,"_handleOpenChange",1);y=r([nt()],y);let Qe=class extends kt(Dt(Ct(y))){};Qe=r([Oe("gds-datepicker",{dependsOn:[wt,Yt,_t,b,Lt,Et,It,zt,Bt]})],Qe);export{Qe as G,b as a,ds as m};
