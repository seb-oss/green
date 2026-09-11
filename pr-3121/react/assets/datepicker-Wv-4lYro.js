import{j as Ae}from"./jsx-runtime-u17CrQMm.js";import{r as Q,e as lt}from"./iframe-DgcT_93K.js";import{o as dt}from"./create-component-CVDMTe9T.js";import{i as Be,x as Y,t as He,_ as i,n as f,r as H,g as Se,G as qe,b as y,d as o,E as ht,c as h,e as E,h as k,f as ut,w as ct,m as pt,A as ft,a as gt}from"./declarative-layout-mixins-CHDou_T4.js";import{l as Ve,m as p}from"./runtime-Cgryh99k.js";import{b as Pe,e as J,w as K,a as Ge}from"./watch-rsnQmdjn.js";import{e as mt,i as yt,t as bt}from"./icon.component-_Kz4mpNg.js";import{M as vt,u as z,v as V,h as le,p as wt}from"./ref-BSOYByFX.js";import{n as F}from"./when-CI7b_ccM.js";import{b as Ie,a as _t,G as Dt}from"./button.component-D3nBf-cc.js";import{f as xt,b as kt,G as $t}from"./dropdown.component-BU48Xoar.js";import{d as Fe,a as Mt}from"./attribute-converters-CdI0trPX.js";import{e as Re}from"./class-map-DrnG97Ac.js";import{T as je,r as Ct}from"./transitional-styles-Db_YHGZO.js";import{I as St,a as Ft}from"./calender-add.component-CUR-VXk7.js";import{I as Tt,a as Wt}from"./chevron-right.component-Dn2aq1mL.js";import{G as Yt}from"./popover.component-BAHnLQHD.js";let Nt;function Ot(t){return(e,s)=>Pe(e,s,{get(){return(this.renderRoot??(Nt??=document.createDocumentFragment())).querySelectorAll(t)}})}function oe(t){return(e,s)=>Pe(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const At=6048e5,ze=Symbol.for("constructDateFrom");function N(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&ze in t?t[ze](e):t instanceof Date?new t.constructor(e):new Date(e)}function T(t,e){return N(e||t,t)}function B(t,e,s){const a=T(t,s?.in);return isNaN(e)?N(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function Ue(t,e,s){const a=T(t,s?.in);if(isNaN(e))return N(t,NaN);if(!e)return a;const n=a.getDate(),r=N(t,a.getTime());r.setMonth(a.getMonth()+e+1,0);const d=r.getDate();return n>=d?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let It={};function Te(){return It}function R(t,e){const s=Te(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,n=T(t,e?.in),r=n.getDay(),d=(r<a?7:0)+r-a;return n.setDate(n.getDate()-d),n.setHours(0,0,0,0),n}function We(t,...e){const s=N.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function Le(t,e){const s=T(t,e?.in);return s.setHours(0,0,0,0),s}function Rt(t,e,s){return B(t,e*7,s)}function M(t,e,s){const[a,n]=We(s?.in,t,e);return+Le(a)==+Le(n)}function zt(t,e){const s=T(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function Je(t,e){const[s,a]=We(t,e.start,e.end);return{start:s,end:a}}function Lt(t,e){const{start:s,end:a}=Je(e?.in,t);let n=+s>+a;const r=n?+s:+a,d=n?a:s;d.setHours(0,0,0,0);let m=1;const l=[];for(;+d<=r;)l.push(N(s,d)),d.setDate(d.getDate()+m),d.setHours(0,0,0,0);return n?l.reverse():l}function Et(t,e){const{start:s,end:a}=Je(e?.in,t);let n=+s>+a;const r=R(n?a:s,e),d=R(n?s:a,e);r.setHours(15),d.setHours(15);const m=+d.getTime();let l=r,b=e?.step??1;if(!b)return[];b<0&&(b=-b,n=!n);const $=[];for(;+l<=m;)l.setHours(0),$.push(N(s,l)),l=Rt(l,b),l.setHours(15);return n?$.reverse():$}function Bt(t,e){const s=T(t,e?.in);return s.setDate(1),s.setHours(0,0,0,0),s}function Ht(t,e){const s=T(t,e?.in),a=s.getFullYear(),n=Te(),r=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,d=N(t,0);d.setFullYear(a+1,0,r),d.setHours(0,0,0,0);const m=R(d,e),l=N(t,0);l.setFullYear(a,0,r),l.setHours(0,0,0,0);const b=R(l,e);return+s>=+m?a+1:+s>=+b?a:a-1}function qt(t,e){const s=Te(),a=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,n=Ht(t,e),r=N(t,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),R(r,e)}function Vt(t,e){const s=T(t,e?.in),a=+R(s,e)-+qt(s,e);return Math.round(a/At)+1}function Ke(t,e){const s=T(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),T(s,e?.in)}function Pt(t,e,s){const[a,n]=We(s?.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function Xe(t,e,s){const a=T(t,s?.in);return a.setHours(e),a}function Gt(t,e,s){return Ue(t,-1,s)}const jt=Be`
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
`;var Ut=jt;function Jt(t,e){const s=Bt(t),a=zt(t),n=Et({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(B(n[n.length-1],7));return Y`${e(n.map(r=>({days:Lt({start:r,end:B(r,6)})})))}`}var U,Ye,Qe;let v=class extends qe{constructor(){super(...arguments),y(this,U),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=Ke(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),je.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",o(this,U,Qe)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return Y`<table
      role="grid"
      aria-label="${Ie(this.label)}"
      class="${Re({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${F(!this.hideDayNames,()=>Y`<thead role="rowgroup">
            <tr role="row">
              ${F(this.showWeekNumbers,()=>Y`<th></th>`)}
              <th>${p("Mon").substring(0,1)}</th>
              <th>${p("Tue").substring(0,1)}</th>
              <th>${p("Wed").substring(0,1)}</th>
              <th>${p("Thu").substring(0,1)}</th>
              <th>${p("Fri").substring(0,1)}</th>
              <th>${p("Sat").substring(0,1)}</th>
              <th>${p("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${Jt(this.focusedDate,e=>Y`
            ${e.map(s=>Y`
                <tr role="row">
                  ${F(this.showWeekNumbers,()=>Y`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${Vt(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(g=>M(g.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>M(g,a))),...n},d=!Pt(this.focusedDate,a),m=(a<this.min||a>this.max)&&!M(a,this.min)&&!M(a,this.max),l=a.getDay()===0||a.getDay()===6,b=r.disabled||m||this.disabledWeekends&&l;return this.hideExtraneousDays&&d?Y`<td inert></td>`:Y`
                          <td
                            role="${Ie(b?void 0:"gridcell")}"
                            class="${Re({small:this.size==="small","custom-date":!!n,disabled:!!b,today:M(t,a),"outside-month":d})}"
                            ?disabled=${b}
                            tabindex="${M(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&M(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>b?null:o(this,U,Ye).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${F(r.indicator,()=>Y`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};U=new WeakSet;Ye=function(t){const e=Xe(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};Qe=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=B(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=B(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=B(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=B(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||o(this,U,Ye).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=Gt(this.focusedDate),e=!0):t.key==="PageDown"&&(s=Ue(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};v.styles=[He,Ut];v.shadowRootOptions={mode:"open",delegatesFocus:!0};i([f()],v.prototype,"value",2);i([f({type:Date})],v.prototype,"min",2);i([f({type:Date})],v.prototype,"max",2);i([f()],v.prototype,"focusedDate",2);i([f({type:Boolean,attribute:"disabled-weekends"})],v.prototype,"disabledWeekends",2);i([f({type:Array,attribute:"disabled-dates"})],v.prototype,"disabledDates",2);i([f({type:Number})],v.prototype,"focusedMonth",1);i([f({type:Number})],v.prototype,"focusedYear",1);i([f({reflect:!0})],v.prototype,"size",2);i([f({type:Boolean})],v.prototype,"showWeekNumbers",2);i([f({type:Boolean})],v.prototype,"hideExtraneousDays",2);i([f({type:Boolean})],v.prototype,"hideDayNames",2);i([f({attribute:!1})],v.prototype,"customizedDates",2);i([f()],v.prototype,"label",2);i([f({attribute:!1})],v.prototype,"dateLabelTemplate",2);i([H()],v.prototype,"_currentLocale",2);i([J('td[tabindex="0"]')],v.prototype,"_elFocusedCell",2);i([K("value")],v.prototype,"_valueChanged",1);v=i([Se("gds-calendar"),Ge({labelledBy:"table",describedBy:"table"}),Ve()],v);function*Kt(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}function*Xt(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}const Ee=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},Qt=mt(class extends yt{constructor(t){if(super(t),t.type!==bt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],r=[];let d=0;for(const m of t)n[d]=a?a(m,d):d,r[d]=s(m,d),d++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=vt(t),{values:r,keys:d}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=d,r;const m=this.ut??=[],l=[];let b,$,g=0,_=n.length-1,w=0,x=r.length-1;for(;g<=_&&w<=x;)if(n[g]===null)g++;else if(n[_]===null)_--;else if(m[g]===d[w])l[w]=z(n[g],r[w]),g++,w++;else if(m[_]===d[x])l[x]=z(n[_],r[x]),_--,x--;else if(m[g]===d[x])l[x]=z(n[g],r[x]),V(t,l[x+1],n[g]),g++,x--;else if(m[_]===d[w])l[w]=z(n[_],r[w]),V(t,n[g],n[_]),_--,w++;else if(b===void 0&&(b=Ee(d,w,x),$=Ee(m,g,_)),b.has(m[g]))if(b.has(m[_])){const C=$.get(d[w]),O=C!==void 0?n[C]:null;if(O===null){const X=V(t,n[g]);z(X,r[w]),l[w]=X}else l[w]=z(O,r[w]),V(t,n[g],O),n[C]=null;w++}else le(n[_]),_--;else le(n[g]),g++;for(;w<=x;){const C=V(t,l[x+1]);z(C,r[w]),l[w++]=C}for(;g<=_;){const C=n[g++];C!==null&&le(C)}return this.ut=d,wt(t,l),ht}});var A,Z,ee,te,se,de,he,ue,D,Ze,P,ce,G,ae;let W=class extends qe{constructor(){super(...arguments),y(this,D),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=o(this,D,ce).call(this,this.value,this.length),y(this,A,""),y(this,Z,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=o(this,D,G).call(this,t+1),o(this,D,P).call(this)}),y(this,ee,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=o(this,D,G).call(this,t-1),o(this,D,P).call(this)}),y(this,te,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),y(this,se,()=>{o(this,D,ae).call(this)}),y(this,de,()=>{h(this,A)!==""&&(o(this,D,ae).call(this),this.value=o(this,D,G).call(this,parseInt(this.value.toString())),o(this,D,P).call(this))}),y(this,he,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?h(this,ee).call(this):h(this,Z).call(this)}),y(this,ue,t=>{let e=!1;if(t.key==="ArrowUp")h(this,Z).call(this),e=!0;else if(t.key==="ArrowDown")h(this,ee).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(h(this,A).length<this.length&&(E(this,A,h(this,A)+s.toString()),this.value=parseInt(h(this,A))),h(this,A).length===this.length&&(this.value=o(this,D,G).call(this,this.value),o(this,D,ae).call(this),o(this,D,Ze).call(this),o(this,D,P).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",h(this,he)),this.addEventListener("keydown",h(this,ue)),this.addEventListener("blur",h(this,de)),this.addEventListener("focus",h(this,se)),this.addEventListener("click",h(this,te)),this.addEventListener("mousedown",h(this,te))}focus(t){super.focus(t),h(this,se).call(this)}render(){return k`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=o(this,D,ce).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};A=new WeakMap;Z=new WeakMap;ee=new WeakMap;te=new WeakMap;se=new WeakMap;de=new WeakMap;he=new WeakMap;ue=new WeakMap;D=new WeakSet;Ze=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof W){t.focus();break}t=t.nextElementSibling}};P=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ce=function(t,e){return String(t).padStart(e,"0")};G=function(t){return Math.max(this.min,Math.min(this.max,t))};ae=function(){E(this,A,"")};W.formAssociated=!0;i([f({type:Number})],W.prototype,"value",2);i([f({type:Number})],W.prototype,"length",2);i([f({type:Number,attribute:"aria-valuemin"})],W.prototype,"min",2);i([f({type:Number,attribute:"aria-valuemax"})],W.prototype,"max",2);i([H()],W.prototype,"displayValue",2);i([K("value")],W.prototype,"_refreshDisplayValue",1);W=i([Se("gds-date-part-spinner")],W);const Zt=Be`
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
`;var es=Zt,ne,j,u,et,tt,st,Ne,Oe,pe,at,nt,fe,I,it,L,q,ge,me,ye,be,ve,we,_e,De,xe,ie,ke,$e,Me,Ce,S,rt,ot;let c=class extends _t{constructor(){super(),y(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,y(this,ne,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=o(this,u,Me).call(this,"y-m-d"),this._currentLocale=navigator.language,y(this,j),y(this,ge,e=>{this._elTrigger.then(s=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),document.getSelection()?.addRange(a)})}),y(this,me,e=>{this._elFieldAsync.then(s=>{e.currentTarget===s&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),y(this,ye,e=>{this._elFieldAsync.then(s=>{if(e.currentTarget!==s)return;e.preventDefault();const a=e.clipboardData?.getData("text/plain");if(!a)return;let n=new Date("-");const r="Invalid Date",d=a.split(this._dateFormatLayout.delimiter);if(d.length===3){const m=this._dateFormatLayout.layout,l=parseInt(d[m.findIndex(g=>g.token==="y")]),b=parseInt(d[m.findIndex(g=>g.token==="m")])-1,$=parseInt(d[m.findIndex(g=>g.token==="d")]);!isNaN(l)&&!isNaN(b)&&!isNaN($)&&(n=new Date(`${l}-${b+1}-${$}`))}n.toString()===r&&(n=new Date(a),n.toString()===r)||(this.value=n,o(this,u,L).call(this))})}),y(this,be,e=>{this._elSpinners[0]?.focus()}),y(this,ve,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,o(this,u,L).call(this),o(this,u,q).call(this)}),y(this,we,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),y(this,_e,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),y(this,De,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,xe,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,ie,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),o(this,u,q).call(this)}),y(this,ke,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,o(this,u,L).call(this);return}!M(s||new Date(0),h(this,j)||new Date(0))&&(this.value=new Date(s),o(this,u,L).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=h(this,j),o(this,u,q).call(this))}}),y(this,$e,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),y(this,Ce,(e,s)=>{h(this,S)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(h(this,S).year)),a.setUTCMonth(parseInt(h(this,S).month)-1);const n=Ke(a).getDate(),r=n<parseInt(h(this,S).day)?n:parseInt(h(this,S).day);a.setUTCDate(isNaN(r)?1:r),a.toString()!=="Invalid Date"&&(this.value=a,o(this,u,L).call(this),o(this,u,q).call(this))}),y(this,S,{year:"yyyy",month:"mm",day:"dd"}),W.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return h(this,ne)}set utcHours(e){E(this,ne,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=o(this,u,Me).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),je.instance.apply(this,"gds-datepicker"),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale,this.value||E(this,S,{year:o(this,u,I).call(this,"year"),month:o(this,u,I).call(this,"month"),day:o(this,u,I).call(this,"day")}),this.requestUpdate())})}focus(e){this._getValidityAnchor()?.focus(e)}render(){return k`
      ${F(!this.plain,()=>k`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${F(this.supportingText.length>0,()=>k`<span slot="supporting-text" id="supporting-text">
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
        @click=${h(this,be)}
        @copy=${h(this,me)}
        @paste=${h(this,ye)}
        id="field"
      >
        <div class="spinners">
          ${Kt(Xt(this._dateFormatLayout.layout,(e,s)=>k`<gds-date-part-spinner
                  id="spinner-${s}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${o(this,u,it).call(this,e.name)}
                  aria-valuemin=${o(this,u,nt).call(this,e.name)}
                  aria-valuemax=${o(this,u,fe).call(this,e.name)}
                  aria-label=${o(this,u,at).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${o(this,u,fe).call(this,e.name).toString().length}
                  @keydown=${h(this,$e)}
                  @change=${a=>h(this,Ce).call(this,a.detail.value,e.name)}
                  @focus=${h(this,ge)}
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
          aria-label="${p("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${F(this.size==="small",()=>k`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>k`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${F(o(this,u,et).call(this),()=>k`<gds-form-control-footer
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
        @gds-ui-state=${h(this,ke)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id==="calendar-popover"&&this._elCalendar.then(a=>a.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${h(this,xe)}
              aria-label=${p("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${h(this,we)}
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
              @change=${h(this,_e)}
              .maxHeight=${300}
              label="${p("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${Qt(h(this,u,rt),e=>e,e=>k`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${h(this,De)}
              aria-label=${p("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${h(this,ve)}
            @gds-date-focused=${h(this,ie)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${F(this.clearable||o(this,u,pe).call(this)||!!this._outOfRangeAction,()=>k`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${F(this.clearable,()=>k` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,o(this,u,q).call(this),o(this,u,L).call(this)}}
                        aria-label=${p("Clear selected date")}
                      >
                        ${p("Clear")}
                      </gds-button>`)}
                  ${o(this,u,tt).call(this)}
                </gds-flex>
                ${F(o(this,u,pe).call(this),()=>k` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),o(this,u,Oe).call(this,new Date)}}
                      aria-label=${p("Select today's date")}
                    >
                      ${p("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleOutOfRangeChange(){o(this,u,st).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){E(this,S,{year:o(this,u,I).call(this,"year"),month:o(this,u,I).call(this,"month"),day:o(this,u,I).call(this,"day")});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");E(this,S,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(E(this,j,this.value),this._elCalendar.then(e=>e.focus()))}};ne=new WeakMap;j=new WeakMap;u=new WeakSet;et=function(){return!this.plain};tt=function(){if(!this._outOfRangeAction)return ft;const t=this._outOfRangeAction==="max";return k`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),o(this,u,Oe).call(this,t?this.max:this.min)}}
    >
      ${t?p("Last available date"):p("First available date")}
    </gds-button>`};st=async function(){const t=await this.getFocusedDate();t?t>this.max&&!M(t,this.max)?this._outOfRangeAction="max":t<this.min&&!M(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};Ne=function(t){const e=Xe(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};Oe=function(t){const e=o(this,u,Ne).call(this,t);this._elCalendar.then(s=>s.focusedDate=e).then(h(this,ie)).then(()=>this._elCalendar).then(s=>s.updateComplete.then(()=>s.focus()))};pe=function(){if(this.hideTodayButton)return!1;const t=o(this,u,Ne).call(this,new Date);if((t<this.min||t>this.max)&&!M(t,this.min)&&!M(t,this.max))return!1;const s=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&s?!1:!this.disabledDates?.some(a=>M(a,t))};at=function(t){return`${{year:p("Year"),month:p("Month"),day:p("Day")}[t]} ${this.label}`};nt=function(t){return{year:1900,month:1,day:1}[t]};fe=function(t){return{year:9999,month:12,day:31}[t]};I=function(t){return{year:p("yyyy"),month:p("mm"),day:p("dd")}[t]};it=function(t){return this.value?h(this,S)[t]:o(this,u,I).call(this,t)};L=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};q=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ge=new WeakMap;me=new WeakMap;ye=new WeakMap;be=new WeakMap;ve=new WeakMap;we=new WeakMap;_e=new WeakMap;De=new WeakMap;xe=new WeakMap;ie=new WeakMap;ke=new WeakMap;$e=new WeakMap;Me=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(l=>l==="y"),n=s.findIndex(l=>l==="m"),r=s.findIndex(l=>l==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const m=[a,n,r].sort((l,b)=>l-b).map(l=>s[l]).map(l=>({token:l,name:l==="y"?"year":l==="m"?"month":"day"}));return{delimiter:e,layout:m}};Ce=new WeakMap;S=new WeakMap;rt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=h(this,u,ot),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let n=t;n<=e;n++)yield n}}};ot=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};c.styles=[He,xt,es];i([f({converter:Fe})],c.prototype,"value",1);i([f({converter:Fe})],c.prototype,"min",2);i([f({converter:Fe})],c.prototype,"max",2);i([f({type:Boolean})],c.prototype,"open",2);i([f({attribute:"supporting-text"})],c.prototype,"supportingText",2);i([f({type:String})],c.prototype,"size",2);i([f({type:Boolean})],c.prototype,"plain",2);i([f({type:Boolean,attribute:"show-week-numbers"})],c.prototype,"showWeekNumbers",2);i([f({type:Boolean,attribute:"hide-label"})],c.prototype,"hideLabel",2);i([f({type:Boolean,attribute:"clearable"})],c.prototype,"clearable",2);i([f({type:Boolean,attribute:"hide-today-button"})],c.prototype,"hideTodayButton",2);i([f({type:Number,attribute:"utc-hours"})],c.prototype,"utcHours",1);i([f()],c.prototype,"dateformat",1);i([f({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);i([f({converter:Mt,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);i([f({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);i([oe("#calendar-button")],c.prototype,"test_calendarButton",2);i([J("#clear-button")],c.prototype,"test_clearButton",2);i([J("#today-button")],c.prototype,"test_todayButton",2);i([J("#back-to-valid-range-button")],c.prototype,"test_backToValidRangeButton",2);i([H()],c.prototype,"_focusedMonth",2);i([H()],c.prototype,"_focusedYear",2);i([H()],c.prototype,"_dateFormatLayout",2);i([H()],c.prototype,"_outOfRangeAction",2);i([H()],c.prototype,"_currentLocale",2);i([oe("#calendar")],c.prototype,"_elCalendar",2);i([oe("#calendar-button")],c.prototype,"_elTrigger",2);i([oe("#field")],c.prototype,"_elFieldAsync",2);i([Ot("[role=spinbutton]")],c.prototype,"_elSpinners",2);i([J("#field")],c.prototype,"_elField",2);i([K(["value","min","max","open","_focusedMonth","_focusedYear"])],c.prototype,"_handleOutOfRangeChange",1);i([K("value")],c.prototype,"_handleValueChange",1);i([K("open")],c.prototype,"_handleOpenChange",1);c=i([Ge({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),Ve()],c);let re=class extends ut(ct(pt(c))){};re=i([Se("gds-datepicker",{dependsOn:[kt,Dt,$t,v,Yt,St,Ft,Tt,Wt]})],re);re.define();Ct();const ts=dt({tagName:gt("gds-datepicker"),elementClass:re,events:{onchange:"change"},react:lt}),ss=Q.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:r,testId:d,validator:m,size:l,selectedDate:b,currentDate:$,...g},_)=>{$&&!n&&(n=$),b&&!n&&(n=b);const w=s||new Date(new Date().getFullYear()-10,0,1),x=a||new Date(new Date().getFullYear()+10,0,1),C=X=>{e&&e(X.target.value)},O=Q.useRef(null);return Q.useImperativeHandle(_,()=>O.current,[O]),Q.useEffect(()=>{O?.current&&(O.current.validator=m)},[m]),Ae.jsx("div",{className:"form-group",children:Ae.jsx(ts,{"data-testid":d,label:t,min:w,max:x,showWeekNumbers:r,onchange:C,value:n,ref:O,size:l==="small"?"small":"large",...g})})});ss.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{ss as D};
