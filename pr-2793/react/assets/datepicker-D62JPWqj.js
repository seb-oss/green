import{j as Ue}from"./jsx-runtime-D_zvdyIk.js";import{r as J,R as wt}from"./iframe-a5gIpdK3.js";import{o as _t}from"./create-component-CPRSibq9.js";import{i as st,l as W,t as at,_ as o,n as f,r as X,g as He,G as nt,b as d,c as u,E as me,d as h,e as V,h as k,A as rt,a as Dt}from"./tokens.style-DYFavAxZ.js";import{l as it,m as g}from"./runtime-nRyYmvPb.js";import{a as kt,e as ue,w as pe}from"./watch-Bh1rs_BK.js";import{f as xt,r as fe,b as $t,G as Ct}from"./dropdown.component-BTlxmNri.js";import{e as ot,i as Mt,t as St,w as Wt,b as Ft,d as Tt}from"./icon.component-uKh1n_99.js";import{M as Yt,u as z,v as q,h as ge,p as Nt,f as It,a as Et}from"./ref-DrcaRVN9.js";import{n as x}from"./when-BR7zwNJC.js";import{b as Ke,a as zt,G as At}from"./button.component-DRMI87ny.js";import{d as Ve,a as Bt}from"./attribute-converters-CdI0trPX.js";import{e as Xe}from"./class-map-BrQoAMV7.js";import{T as lt,r as Lt}from"./transitional-styles-CtoEuUBX.js";import{I as Ot,a as Rt}from"./calender-add.component-PrUs7iug.js";import{I as Ht,a as Vt}from"./chevron-right.component-ZTCG9kl0.js";import{G as qt}from"./popover.component-DYdjg0Bm.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt;function Gt(t){return(e,s)=>kt(e,s,{get(){return(this.renderRoot??Pt??(Pt=document.createDocumentFragment())).querySelectorAll(t)}})}const jt=6048e5,Ze=Symbol.for("constructDateFrom");function T(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Ze in t?t[Ze](e):t instanceof Date?new t.constructor(e):new Date(e)}function M(t,e){return T(e||t,t)}function L(t,e,s){const a=M(t,s==null?void 0:s.in);return isNaN(e)?T(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function dt(t,e,s){const a=M(t,s==null?void 0:s.in);if(isNaN(e))return T(t,NaN);if(!e)return a;const n=a.getDate(),r=T(t,a.getTime());r.setMonth(a.getMonth()+e+1,0);const l=r.getDate();return n>=l?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let Ut={};function qe(){return Ut}function E(t,e){var c,i,y,b;const s=qe(),a=(e==null?void 0:e.weekStartsOn)??((i=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:i.weekStartsOn)??s.weekStartsOn??((b=(y=s.locale)==null?void 0:y.options)==null?void 0:b.weekStartsOn)??0,n=M(t,e==null?void 0:e.in),r=n.getDay(),l=(r<a?7:0)+r-a;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function Pe(t,...e){const s=T.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function Je(t,e){const s=M(t,e==null?void 0:e.in);return s.setHours(0,0,0,0),s}function Kt(t,e,s){return L(t,e*7,s)}function N(t,e,s){const[a,n]=Pe(s==null?void 0:s.in,t,e);return+Je(a)==+Je(n)}function Xt(t,e){const s=M(t,e==null?void 0:e.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function ht(t,e){const[s,a]=Pe(t,e.start,e.end);return{start:s,end:a}}function Zt(t,e){const{start:s,end:a}=ht(e==null?void 0:e.in,t);let n=+s>+a;const r=n?+s:+a,l=n?a:s;l.setHours(0,0,0,0);let c=1;const i=[];for(;+l<=r;)i.push(T(s,l)),l.setDate(l.getDate()+c),l.setHours(0,0,0,0);return n?i.reverse():i}function Jt(t,e){const{start:s,end:a}=ht(e==null?void 0:e.in,t);let n=+s>+a;const r=E(n?a:s,e),l=E(n?s:a,e);r.setHours(15),l.setHours(15);const c=+l.getTime();let i=r,y=(e==null?void 0:e.step)??1;if(!y)return[];y<0&&(y=-y,n=!n);const b=[];for(;+i<=c;)i.setHours(0),b.push(T(s,i)),i=Kt(i,y),i.setHours(15);return n?b.reverse():b}function Qt(t,e){const s=M(t,e==null?void 0:e.in);return s.setDate(1),s.setHours(0,0,0,0),s}function es(t,e){var b,p;const s=M(t,e==null?void 0:e.in),a=s.getFullYear(),n=qe(),r=n.firstWeekContainsDate??((p=(b=n.locale)==null?void 0:b.options)==null?void 0:p.firstWeekContainsDate)??1,l=T(t,0);l.setFullYear(a+1,0,r),l.setHours(0,0,0,0);const c=E(l,e),i=T(t,0);i.setFullYear(a,0,r),i.setHours(0,0,0,0);const y=E(i,e);return+s>=+c?a+1:+s>=+y?a:a-1}function ts(t,e){var c,i;const s=qe(),a=s.firstWeekContainsDate??((i=(c=s.locale)==null?void 0:c.options)==null?void 0:i.firstWeekContainsDate)??1,n=es(t,e),r=T(t,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),E(r,e)}function ss(t,e){const s=M(t,e==null?void 0:e.in),a=+E(s,e)-+ts(s,e);return Math.round(a/jt)+1}function ct(t,e){const s=M(t,e==null?void 0:e.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),M(s,e==null?void 0:e.in)}function as(t,e,s){const[a,n]=Pe(s==null?void 0:s.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function ns(t,e,s){const a=M(t,s==null?void 0:s.in);return a.setHours(e),a}function rs(t,e,s){return dt(t,-1,s)}const is=st`
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
          font: var(--gds-sys-text-body-s-book);
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
        background: var(--gds-sys-color-l3-neutral-03);
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
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-neutral-04);
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
          var(--gds-sys-color-l3-neutral-03),
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
        font: var(--gds-sys-text-body-s-book);
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
        background: var(--gds-sys-color-l3-neutral-03);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;var os=is;function ls(t,e){const s=Qt(t),a=Xt(t),n=Jt({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(L(n[n.length-1],7));return W`${e(n.map(r=>({days:Zt({start:r,end:L(r,6)})})))}`}var le,Ge,ye,ut;let w=class extends nt{constructor(){super(...arguments),d(this,le),d(this,ye),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=ct(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),lt.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",u(this,ye,ut)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return W`<table
      role="grid"
      aria-label="${Ke(this.label)}"
      class="${Xe({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${x(!this.hideDayNames,()=>W`<thead role="rowgroup">
            <tr role="row">
              ${x(this.showWeekNumbers,()=>W`<th></th>`)}
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
        ${ls(this.focusedDate,e=>W`
            ${e.map(s=>W`
                <tr role="row">
                  ${x(this.showWeekNumbers,()=>W`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${ss(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(p=>N(p.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>N(p,a))),...n},l=!as(this.focusedDate,a),c=(a<this.min||a>this.max)&&!N(a,this.min)&&!N(a,this.max),i=a.getDay()===0||a.getDay()===6,y=r.disabled||c||this.disabledWeekends&&i;return this.hideExtraneousDays&&l?W`<td inert></td>`:W`
                          <td
                            role="${Ke(y?void 0:"gridcell")}"
                            class="${Xe({small:this.size==="small","custom-date":!!n,disabled:!!y,today:N(t,a),"outside-month":l})}"
                            ?disabled=${y}
                            tabindex="${N(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&N(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:u(this,le,Ge).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${a.getDate()}</span
                            >

                            ${x(r.indicator,()=>W`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};le=new WeakSet;Ge=function(t){const e=ns(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};ye=new WeakSet;ut=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=L(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=L(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=L(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=L(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||u(this,le,Ge).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=rs(this.focusedDate),e=!0):t.key==="PageDown"&&(s=dt(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()}))};w.styles=[at,os];w.shadowRootOptions={mode:"open",delegatesFocus:!0};o([f()],w.prototype,"value",2);o([f({type:Date})],w.prototype,"min",2);o([f({type:Date})],w.prototype,"max",2);o([f()],w.prototype,"focusedDate",2);o([f({type:Boolean,attribute:"disabled-weekends"})],w.prototype,"disabledWeekends",2);o([f({type:Array,attribute:"disabled-dates"})],w.prototype,"disabledDates",2);o([f({type:Number})],w.prototype,"focusedMonth",1);o([f({type:Number})],w.prototype,"focusedYear",1);o([f({reflect:!0})],w.prototype,"size",2);o([f({type:Boolean})],w.prototype,"showWeekNumbers",2);o([f({type:Boolean})],w.prototype,"hideExtraneousDays",2);o([f({type:Boolean})],w.prototype,"hideDayNames",2);o([f({attribute:!1})],w.prototype,"customizedDates",2);o([f()],w.prototype,"label",2);o([f({attribute:!1})],w.prototype,"dateLabelTemplate",2);o([X()],w.prototype,"_currentLocale",2);o([ue('td[tabindex="0"]')],w.prototype,"_elFocusedCell",2);o([pe("value")],w.prototype,"_valueChanged",1);w=o([He("gds-calendar"),it()],w);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ds(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*hs(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},cs=ot(class extends Mt{constructor(t){if(super(t),t.type!==St.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],r=[];let l=0;for(const c of t)n[l]=a?a(c,l):l,r[l]=s(c,l),l++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=Yt(t),{values:r,keys:l}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=l,r;const c=this.ut??(this.ut=[]),i=[];let y,b,p=0,v=n.length-1,_=0,D=r.length-1;for(;p<=v&&_<=D;)if(n[p]===null)p++;else if(n[v]===null)v--;else if(c[p]===l[_])i[_]=z(n[p],r[_]),p++,_++;else if(c[v]===l[D])i[D]=z(n[v],r[D]),v--,D--;else if(c[p]===l[D])i[D]=z(n[p],r[D]),q(t,i[D+1],n[p]),p++,D--;else if(c[v]===l[_])i[_]=z(n[v],r[_]),q(t,n[p],n[v]),v--,_++;else if(y===void 0&&(y=Qe(l,_,D),b=Qe(c,p,v)),y.has(c[p]))if(y.has(c[v])){const $=b.get(l[_]),C=$!==void 0?n[$]:null;if(C===null){const Z=q(t,n[p]);z(Z,r[_]),i[_]=Z}else i[_]=z(C,r[_]),q(t,n[p],C),n[$]=null;_++}else ge(n[v]),v--;else ge(n[p]),p++;for(;_<=D;){const $=q(t,i[D+1]);z($,r[_]),i[_++]=$}for(;p<=v;){const $=n[p++];$!==null&&ge($)}return this.ut=l,Nt(t,i),me}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class us{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ps{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=t=>!Et(t)&&typeof t.then=="function",tt=1073741823;class fs extends It{constructor(){super(...arguments),this._$Cwt=tt,this._$Cbt=[],this._$CK=new us(this),this._$CX=new ps}render(...e){return e.find(s=>!et(s))??me}update(e,s){const a=this._$Cbt;let n=a.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const i=s[c];if(!et(i))return this._$Cwt=c,i;c<n&&i===a[c]||(this._$Cwt=tt,n=0,Promise.resolve(i).then(async y=>{for(;l.get();)await l.get();const b=r.deref();if(b!==void 0){const p=b._$Cbt.indexOf(i);p>-1&&p<b._$Cwt&&(b._$Cwt=p,b.setValue(y))}}))}return me}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const gs=ot(fs);var Y,Q,ee,te,se,be,ve,we,_e,pt,O,P,ae,De,R,G,j,ne;let S=class extends nt{constructor(){super(...arguments),d(this,_e),d(this,O),d(this,ae),d(this,R),d(this,j),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=u(this,ae,De).call(this,this.value,this.length),d(this,Y,""),d(this,Q,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=u(this,R,G).call(this,t+1),u(this,O,P).call(this)}),d(this,ee,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=u(this,R,G).call(this,t-1),u(this,O,P).call(this)}),d(this,te,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),d(this,se,()=>{u(this,j,ne).call(this)}),d(this,be,()=>{h(this,Y)!==""&&(u(this,j,ne).call(this),this.value=u(this,R,G).call(this,parseInt(this.value.toString())),u(this,O,P).call(this))}),d(this,ve,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?h(this,ee).call(this):h(this,Q).call(this)}),d(this,we,t=>{let e=!1;if(t.key==="ArrowUp")h(this,Q).call(this),e=!0;else if(t.key==="ArrowDown")h(this,ee).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(h(this,Y).length<this.length&&(V(this,Y,h(this,Y)+s.toString()),this.value=parseInt(h(this,Y))),h(this,Y).length===this.length&&(this.value=u(this,R,G).call(this,this.value),u(this,j,ne).call(this),u(this,_e,pt).call(this),u(this,O,P).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",h(this,ve)),this.addEventListener("keydown",h(this,we)),this.addEventListener("blur",h(this,be)),this.addEventListener("focus",h(this,se)),this.addEventListener("click",h(this,te)),this.addEventListener("mousedown",h(this,te))}focus(t){super.focus(t),h(this,se).call(this)}render(){return k`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=u(this,ae,De).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap;Q=new WeakMap;ee=new WeakMap;te=new WeakMap;se=new WeakMap;be=new WeakMap;ve=new WeakMap;we=new WeakMap;_e=new WeakSet;pt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof S){t.focus();break}t=t.nextElementSibling}};O=new WeakSet;P=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ae=new WeakSet;De=function(t,e){return String(t).padStart(e,"0")};R=new WeakSet;G=function(t){return Math.max(this.min,Math.min(this.max,t))};j=new WeakSet;ne=function(){V(this,Y,"")};S.formAssociated=!0;o([f({type:Number})],S.prototype,"value",2);o([f({type:Number})],S.prototype,"length",2);o([f({type:Number,attribute:"aria-valuemin"})],S.prototype,"min",2);o([f({type:Number,attribute:"aria-valuemax"})],S.prototype,"max",2);o([X()],S.prototype,"displayValue",2);o([pe("value")],S.prototype,"_refreshDisplayValue",1);S=o([He("gds-date-part-spinner")],S);const ms=st`
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
      font: var(--gds-sys-text-detail-m-regular);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-s-regular);
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
        background-color: var(--gds-sys-color-l3-neutral-03);
        color: var(--gds-sys-color-content-neutral-05);
      }
    }
  }
`;var ys=ms,re,U,ke,ft,xe,gt,K,de,$e,mt,Ce,yt,ie,Me,I,A,B,H,Se,We,Fe,Te,Ye,Ne,Ie,Ee,ze,he,Ae,Be,oe,Le,Oe,F,Re,bt,je,vt;let m=class extends zt{constructor(){super(),d(this,ke),d(this,xe),d(this,K),d(this,$e),d(this,Ce),d(this,ie),d(this,I),d(this,B),d(this,oe),d(this,Re),d(this,je),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,d(this,re,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=u(this,oe,Le).call(this,"y-m-d"),d(this,U,void 0),d(this,Se,e=>{this._elTrigger.then(s=>{var n,r;(n=document.getSelection())==null||n.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),(r=document.getSelection())==null||r.addRange(a)})}),d(this,We,e=>{this._elFieldAsync.then(s=>{var a;e.currentTarget===s&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),d(this,Fe,e=>{this._elFieldAsync.then(s=>{var c;if(e.currentTarget!==s)return;e.preventDefault();const a=(c=e.clipboardData)==null?void 0:c.getData("text/plain");if(!a)return;let n=new Date("-");const r="Invalid Date",l=a.split(this._dateFormatLayout.delimiter);if(l.length===3){const i=this._dateFormatLayout.layout,y=parseInt(l[i.findIndex(v=>v.token==="y")]),b=parseInt(l[i.findIndex(v=>v.token==="m")])-1,p=parseInt(l[i.findIndex(v=>v.token==="d")]);!isNaN(y)&&!isNaN(b)&&!isNaN(p)&&(n=new Date(`${y}-${b+1}-${p}`))}n.toString()===r&&(n=new Date(a),n.toString()===r)||(this.value=n,u(this,I,A).call(this))})}),d(this,Te,e=>{var s;(s=this._elSpinners[0])==null||s.focus()}),d(this,Ye,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,u(this,I,A).call(this),u(this,B,H).call(this)}),d(this,Ne,e=>{var s;e.stopPropagation(),this._focusedMonth=(s=e.target)==null?void 0:s.value}),d(this,Ie,e=>{var s;e.stopPropagation(),this._focusedYear=(s=e.target)==null?void 0:s.value}),d(this,Ee,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),d(this,ze,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),d(this,he,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),u(this,B,H).call(this)}),d(this,Ae,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,u(this,I,A).call(this);return}!N(s||new Date(0),h(this,U)||new Date(0))&&(this.value=new Date(s),u(this,I,A).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=h(this,U),u(this,B,H).call(this))}}),d(this,Be,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),d(this,Oe,(e,s)=>{h(this,F)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(h(this,F).year)),a.setUTCMonth(parseInt(h(this,F).month)-1);const n=ct(a).getDate(),r=n<parseInt(h(this,F).day)?n:parseInt(h(this,F).day);a.setUTCDate(isNaN(r)?1:r),a.toString()!=="Invalid Date"&&(this.value=a,u(this,I,A).call(this),u(this,B,H).call(this))}),d(this,F,{year:"yyyy",month:"mm",day:"dd"}),S.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return h(this,re)}set utcHours(e){var s;V(this,re,e),(s=this._internalValue)==null||s.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=u(this,oe,Le).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),lt.instance.apply(this,"gds-datepicker")}focus(e){var s;(s=this._getValidityAnchor())==null||s.focus(e)}render(){return k`
      ${x(!this.plain,()=>k`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${x(this.supportingText.length>0,()=>k`<span slot="supporting-text" id="supporting-text">
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
        @click=${h(this,Te)}
        @copy=${h(this,We)}
        @paste=${h(this,Fe)}
        id="field"
      >
        <div class="spinners">
          ${ds(hs(this._dateFormatLayout.layout,(e,s)=>k`<gds-date-part-spinner
                  id="spinner-${s}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${h(this,F)[e.name]}
                  aria-valuemin=${u(this,Ce,yt).call(this,e.name)}
                  aria-valuemax=${u(this,ie,Me).call(this,e.name)}
                  aria-label=${u(this,$e,mt).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${u(this,ie,Me).call(this,e.name).toString().length}
                  @keydown=${h(this,Be)}
                  @change=${a=>h(this,Oe).call(this,a.detail.value,e.name)}
                  @focus=${h(this,Se)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),k`<span class="separator"
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
          ${x(this.size==="small",()=>k`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>k`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${x(u(this,ke,ft).call(this),()=>k`<gds-form-control-footer
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
        @gds-ui-state=${h(this,Ae)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(n=>n.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${h(this,ze)}
              aria-label=${g("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${h(this,Ne)}
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
              @change=${h(this,Ie)}
              .maxHeight=${300}
              label="${g("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${cs(h(this,Re,bt),e=>e,e=>k`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${h(this,Ee)}
              aria-label=${g("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${h(this,Ye)}
            @gds-date-focused=${h(this,he)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${x(this.clearable||!this.hideTodayButton,()=>k`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${x(this.clearable,()=>k` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,u(this,B,H).call(this),u(this,I,A).call(this)}}
                      aria-label=${g("Clear selected date")}
                    >
                      ${g("Clear")}
                    </gds-button>`)}
                ${gs(u(this,xe,gt).call(this),rt)}
                ${x(!this.hideTodayButton,()=>k` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),u(this,K,de).call(this,new Date)}}
                      aria-label=${g("Select today's date")}
                    >
                      ${g("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,F,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");V(this,F,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(V(this,U,this.value),this._elCalendar.then(e=>e.focus()))}};re=new WeakMap;U=new WeakMap;ke=new WeakSet;ft=function(){return!this.plain};xe=new WeakSet;gt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=g("Last available date"),s=a=>{a.stopPropagation(),u(this,K,de).call(this,this.max)}):t&&t<this.min&&(e=g("First available date"),s=a=>{a.stopPropagation(),u(this,K,de).call(this,this.min)}),k`${x(e.length>0,()=>k`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>rt)}`};K=new WeakSet;de=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(h(this,he))};$e=new WeakSet;mt=function(t){return`${{year:g("Year"),month:g("Month"),day:g("Day")}[t]} ${this.label}`};Ce=new WeakSet;yt=function(t){return{year:1900,month:1,day:1}[t]};ie=new WeakSet;Me=function(t){return{year:9999,month:12,day:31}[t]};I=new WeakSet;A=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};B=new WeakSet;H=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Se=new WeakMap;We=new WeakMap;Fe=new WeakMap;Te=new WeakMap;Ye=new WeakMap;Ne=new WeakMap;Ie=new WeakMap;Ee=new WeakMap;ze=new WeakMap;he=new WeakMap;Ae=new WeakMap;Be=new WeakMap;oe=new WeakSet;Le=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(i=>i==="y"),n=s.findIndex(i=>i==="m"),r=s.findIndex(i=>i==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[a,n,r].sort((i,y)=>i-y).map(i=>s[i]).map(i=>({token:i,name:i==="y"?"year":i==="m"?"month":"day"}));return{delimiter:e,layout:c}};Oe=new WeakMap;F=new WeakMap;Re=new WeakSet;bt=function(){var n;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=h(this,je,vt),a=(n=this.value)==null?void 0:n.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let r=t;r<=e;r++)yield r}}};je=new WeakSet;vt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};m.styles=[at,xt,ys];o([f({converter:Ve})],m.prototype,"value",1);o([f({converter:Ve})],m.prototype,"min",2);o([f({converter:Ve})],m.prototype,"max",2);o([f({type:Boolean})],m.prototype,"open",2);o([f({attribute:"supporting-text"})],m.prototype,"supportingText",2);o([f({type:String})],m.prototype,"size",2);o([f({type:Boolean})],m.prototype,"plain",2);o([f({type:Boolean,attribute:"show-week-numbers"})],m.prototype,"showWeekNumbers",2);o([f({type:Boolean,attribute:"hide-label"})],m.prototype,"hideLabel",2);o([f({type:Boolean,attribute:"clearable"})],m.prototype,"clearable",2);o([f({type:Boolean,attribute:"hide-today-button"})],m.prototype,"hideTodayButton",2);o([f({type:Number,attribute:"utc-hours"})],m.prototype,"utcHours",1);o([f()],m.prototype,"dateformat",1);o([f({type:Boolean,attribute:"disabled-weekends"})],m.prototype,"disabledWeekends",2);o([f({converter:Bt,attribute:"disabled-dates"})],m.prototype,"disabledDates",2);o([f({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],m.prototype,"showExtendedSupportingText",2);o([fe("#calendar-button")],m.prototype,"test_calendarButton",2);o([ue("#clear-button")],m.prototype,"test_clearButton",2);o([ue("#today-button")],m.prototype,"test_todayButton",2);o([X()],m.prototype,"_focusedMonth",2);o([X()],m.prototype,"_focusedYear",2);o([X()],m.prototype,"_dateFormatLayout",2);o([fe("#calendar")],m.prototype,"_elCalendar",2);o([fe("#calendar-button")],m.prototype,"_elTrigger",2);o([fe("#field")],m.prototype,"_elFieldAsync",2);o([Gt("[role=spinbutton]")],m.prototype,"_elSpinners",2);o([ue("#field")],m.prototype,"_elField",2);o([pe("value")],m.prototype,"_handleValueChange",1);o([pe("open")],m.prototype,"_handleOpenChange",1);m=o([it()],m);let ce=class extends Wt(Ft(Tt(m))){};ce=o([He("gds-datepicker",{dependsOn:[$t,At,Ct,w,qt,Ot,Rt,Ht,Vt]})],ce);ce.define();Lt();const bs=_t({tagName:Dt("gds-datepicker"),elementClass:ce,events:{onchange:"change"},react:wt}),vs=J.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:r,testId:l,validator:c,size:i,selectedDate:y,currentDate:b,...p},v)=>{b&&!n&&(n=b),y&&!n&&(n=y);const _=s||new Date(new Date().getFullYear()-10,0,1),D=a||new Date(new Date().getFullYear()+10,0,1),$=Z=>{e&&e(Z.target.value)},C=J.useRef(null);return J.useImperativeHandle(v,()=>C.current,[C]),J.useEffect(()=>{C!=null&&C.current&&(C.current.validator=c)},[c]),Ue.jsx("div",{className:"form-group",children:Ue.jsx(bs,{"data-testid":l,label:t,min:_,max:D,showWeekNumbers:r,onchange:$,value:n,ref:C,size:i==="small"?"small":"large",...p})})});vs.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{vs as D};
