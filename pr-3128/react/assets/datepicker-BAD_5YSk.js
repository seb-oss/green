import{j as tt}from"./jsx-runtime-u17CrQMm.js";import{r as te,e as Mt}from"./iframe-CdTl3ghx.js";import{o as Ct}from"./create-component-CVDMTe9T.js";import{i as rt,x as F,t as ot,_ as i,n as f,r as V,g as je,G as lt,b as l,d as o,E as Wt,c as u,e as L,h as k,f as Ft,w as Tt,m as Yt,A as Ot,a as Nt}from"./declarative-layout-mixins-DOEZtFa8.js";import{l as dt,m as p}from"./runtime-Cgryh99k.js";import{b as ht,e as Q,w as Z,a as ut}from"./watch-rsnQmdjn.js";import{e as At,i as Rt,t as It}from"./icon.component-C8cxi9Go.js";import{M as zt,u as z,v as j,h as be,p as Bt}from"./ref-B3nhnQkq.js";import{n as M}from"./when-CI7b_ccM.js";import{b as Et,a as Lt,G as Ht}from"./button.component-Bnt03Ny_.js";import{f as Vt,b as qt,G as Pt}from"./dropdown.component-DRPVFKrC.js";import{d as Ue,a as Gt}from"./attribute-converters-CdI0trPX.js";import{e as st}from"./class-map-ZYeFlC0n.js";import{T as ct,r as jt}from"./transitional-styles-D1Y3HSID.js";import{I as Ut,a as Kt}from"./calender-add.component-CDcHP1d-.js";import{I as Jt,a as Xt}from"./chevron-right.component-DTMnzizF.js";import{G as Qt}from"./popover.component-B3ExOA_x.js";let Zt;function es(t){return(e,s)=>ht(e,s,{get(){return(this.renderRoot??(Zt??=document.createDocumentFragment())).querySelectorAll(t)}})}function me(t){return(e,s)=>ht(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const ts=6048e5,at=Symbol.for("constructDateFrom");function T(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&at in t?t[at](e):t instanceof Date?new t.constructor(e):new Date(e)}function C(t,e){return T(e||t,t)}function H(t,e,s){const a=C(t,s?.in);return isNaN(e)?T(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function pt(t,e,s){const a=C(t,s?.in);if(isNaN(e))return T(t,NaN);if(!e)return a;const n=a.getDate(),r=T(t,a.getTime());r.setMonth(a.getMonth()+e+1,0);const h=r.getDate();return n>=h?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let ss={};function Ke(){return ss}function I(t,e){const s=Ke(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,n=C(t,e?.in),r=n.getDay(),h=(r<a?7:0)+r-a;return n.setDate(n.getDate()-h),n.setHours(0,0,0,0),n}function Je(t,...e){const s=T.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function nt(t,e){const s=C(t,e?.in);return s.setHours(0,0,0,0),s}function as(t,e,s){return H(t,e*7,s)}function x(t,e,s){const[a,n]=Je(s?.in,t,e);return+nt(a)==+nt(n)}function ns(t,e){const s=C(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function ft(t,e){const[s,a]=Je(t,e.start,e.end);return{start:s,end:a}}function is(t,e){const{start:s,end:a}=ft(e?.in,t);let n=+s>+a;const r=n?+s:+a,h=n?a:s;h.setHours(0,0,0,0);let m=1;const d=[];for(;+h<=r;)d.push(T(s,h)),h.setDate(h.getDate()+m),h.setHours(0,0,0,0);return n?d.reverse():d}function rs(t,e){const{start:s,end:a}=ft(e?.in,t);let n=+s>+a;const r=I(n?a:s,e),h=I(n?s:a,e);r.setHours(15),h.setHours(15);const m=+h.getTime();let d=r,y=e?.step??1;if(!y)return[];y<0&&(y=-y,n=!n);const D=[];for(;+d<=m;)d.setHours(0),D.push(T(s,d)),d=as(d,y),d.setHours(15);return n?D.reverse():D}function os(t,e){const s=C(t,e?.in);return s.setDate(1),s.setHours(0,0,0,0),s}function ls(t,e){const s=C(t,e?.in),a=s.getFullYear(),n=Ke(),r=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,h=T(t,0);h.setFullYear(a+1,0,r),h.setHours(0,0,0,0);const m=I(h,e),d=T(t,0);d.setFullYear(a,0,r),d.setHours(0,0,0,0);const y=I(d,e);return+s>=+m?a+1:+s>=+y?a:a-1}function ds(t,e){const s=Ke(),a=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,n=ls(t,e),r=T(t,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),I(r,e)}function hs(t,e){const s=C(t,e?.in),a=+I(s,e)-+ds(s,e);return Math.round(a/ts)+1}function gt(t,e){const s=C(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),C(s,e?.in)}function us(t,e,s){const[a,n]=Je(s?.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function mt(t,e,s){const a=C(t,s?.in);return a.setHours(e),a}function cs(t,e,s){return pt(t,-1,s)}const ps=rt`
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
`;var fs=ps;function gs(t,e){const s=os(t),a=ns(t),n=rs({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(H(n[n.length-1],7));return F`${e(n.map(r=>({days:is({start:r,end:H(r,6)})})))}`}var ce,Xe,ve,yt;let b=class extends lt{constructor(){super(...arguments),l(this,ce),l(this,ve),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=gt(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),ct.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",o(this,ve,yt)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return F`<table
      role="grid"
      aria-label="${Et(this.label)}"
      class="${st({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${M(!this.hideDayNames,()=>F`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>F`<th></th>`)}
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
        ${gs(this.focusedDate,e=>F`
            ${e.map(s=>F`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>F`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${hs(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(g=>x(g.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>x(g,a))),...n},h=!us(this.focusedDate,a),m=(a<this.min||a>this.max)&&!x(a,this.min)&&!x(a,this.max),d=a.getDay()===0||a.getDay()===6,y=r.disabled||m||this.disabledWeekends&&d;return this.hideExtraneousDays&&h?F`<td inert></td>`:F`
                          <td
                            role="gridcell"
                            class="${st({small:this.size==="small","custom-date":!!n,disabled:!!y,today:x(t,a),"outside-month":h})}"
                            ?disabled=${y}
                            aria-disabled="${y?"true":"false"}"
                            tabindex="${x(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&x(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:o(this,ce,Xe).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${M(r.indicator,()=>F`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};ce=new WeakSet;Xe=function(t){const e=mt(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};ve=new WeakSet;yt=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=H(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=H(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=H(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=H(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||o(this,ce,Xe).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=cs(this.focusedDate),e=!0):t.key==="PageDown"&&(s=pt(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};b.styles=[ot,fs];b.shadowRootOptions={mode:"open",delegatesFocus:!0};i([f()],b.prototype,"value",2);i([f({type:Date})],b.prototype,"min",2);i([f({type:Date})],b.prototype,"max",2);i([f()],b.prototype,"focusedDate",2);i([f({type:Boolean,attribute:"disabled-weekends"})],b.prototype,"disabledWeekends",2);i([f({type:Array,attribute:"disabled-dates"})],b.prototype,"disabledDates",2);i([f({type:Number})],b.prototype,"focusedMonth",1);i([f({type:Number})],b.prototype,"focusedYear",1);i([f({reflect:!0})],b.prototype,"size",2);i([f({type:Boolean})],b.prototype,"showWeekNumbers",2);i([f({type:Boolean})],b.prototype,"hideExtraneousDays",2);i([f({type:Boolean})],b.prototype,"hideDayNames",2);i([f({attribute:!1})],b.prototype,"customizedDates",2);i([f()],b.prototype,"label",2);i([f({attribute:!1})],b.prototype,"dateLabelTemplate",2);i([V()],b.prototype,"_currentLocale",2);i([Q('td[tabindex="0"]')],b.prototype,"_elFocusedCell",2);i([Z("value")],b.prototype,"_valueChanged",1);b=i([je("gds-calendar"),ut({labelledBy:"table",describedBy:"table"}),dt()],b);function*ms(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}function*ys(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}const it=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},bs=At(class extends Rt{constructor(t){if(super(t),t.type!==It.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],r=[];let h=0;for(const m of t)n[h]=a?a(m,h):h,r[h]=s(m,h),h++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=zt(t),{values:r,keys:h}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=h,r;const m=this.ut??=[],d=[];let y,D,g=0,w=n.length-1,v=0,_=r.length-1;for(;g<=w&&v<=_;)if(n[g]===null)g++;else if(n[w]===null)w--;else if(m[g]===h[v])d[v]=z(n[g],r[v]),g++,v++;else if(m[w]===h[_])d[_]=z(n[w],r[_]),w--,_--;else if(m[g]===h[_])d[_]=z(n[g],r[_]),j(t,d[_+1],n[g]),g++,_--;else if(m[w]===h[v])d[v]=z(n[w],r[v]),j(t,n[g],n[w]),w--,v++;else if(y===void 0&&(y=it(h,v,_),D=it(m,g,w)),y.has(m[g]))if(y.has(m[w])){const $=D.get(h[v]),Y=$!==void 0?n[$]:null;if(Y===null){const ee=j(t,n[g]);z(ee,r[v]),d[v]=ee}else d[v]=z(Y,r[v]),j(t,n[g],Y),n[$]=null;v++}else be(n[w]),w--;else be(n[g]),g++;for(;v<=_;){const $=j(t,d[_+1]);z($,r[v]),d[v++]=$}for(;g<=w;){const $=n[g++];$!==null&&be($)}return this.ut=h,Bt(t,d),Wt}});var O,se,ae,ne,ie,we,_e,ke,De,bt,q,U,re,xe,P,K,J,oe;let W=class extends lt{constructor(){super(...arguments),l(this,De),l(this,q),l(this,re),l(this,P),l(this,J),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=o(this,re,xe).call(this,this.value,this.length),l(this,O,""),l(this,se,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=o(this,P,K).call(this,t+1),o(this,q,U).call(this)}),l(this,ae,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=o(this,P,K).call(this,t-1),o(this,q,U).call(this)}),l(this,ne,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),l(this,ie,()=>{o(this,J,oe).call(this)}),l(this,we,()=>{u(this,O)!==""&&(o(this,J,oe).call(this),this.value=o(this,P,K).call(this,parseInt(this.value.toString())),o(this,q,U).call(this))}),l(this,_e,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?u(this,ae).call(this):u(this,se).call(this)}),l(this,ke,t=>{let e=!1;if(t.key==="ArrowUp")u(this,se).call(this),e=!0;else if(t.key==="ArrowDown")u(this,ae).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(u(this,O).length<this.length&&(L(this,O,u(this,O)+s.toString()),this.value=parseInt(u(this,O))),u(this,O).length===this.length&&(this.value=o(this,P,K).call(this,this.value),o(this,J,oe).call(this),o(this,De,bt).call(this),o(this,q,U).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",u(this,_e)),this.addEventListener("keydown",u(this,ke)),this.addEventListener("blur",u(this,we)),this.addEventListener("focus",u(this,ie)),this.addEventListener("click",u(this,ne)),this.addEventListener("mousedown",u(this,ne))}focus(t){super.focus(t),u(this,ie).call(this)}render(){return k`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=o(this,re,xe).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};O=new WeakMap;se=new WeakMap;ae=new WeakMap;ne=new WeakMap;ie=new WeakMap;we=new WeakMap;_e=new WeakMap;ke=new WeakMap;De=new WeakSet;bt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof W){t.focus();break}t=t.nextElementSibling}};q=new WeakSet;U=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};re=new WeakSet;xe=function(t,e){return String(t).padStart(e,"0")};P=new WeakSet;K=function(t){return Math.max(this.min,Math.min(this.max,t))};J=new WeakSet;oe=function(){L(this,O,"")};W.formAssociated=!0;i([f({type:Number})],W.prototype,"value",2);i([f({type:Number})],W.prototype,"length",2);i([f({type:Number,attribute:"aria-valuemin"})],W.prototype,"min",2);i([f({type:Number,attribute:"aria-valuemax"})],W.prototype,"max",2);i([V()],W.prototype,"displayValue",2);i([Z("value")],W.prototype,"_refreshDisplayValue",1);W=i([je("gds-date-part-spinner")],W);const vs=rt`
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
`;var ws=vs,le,X,$e,vt,Se,wt,Me,_t,ye,Qe,pe,Ze,de,Ce,We,kt,Fe,Dt,he,Te,N,R,Ye,xt,A,B,E,G,Oe,Ne,Ae,Re,Ie,ze,Be,Ee,Le,fe,He,Ve,ue,qe,Pe,S,Ge,$t,et,St;let c=class extends Lt{constructor(){super(),l(this,$e),l(this,Se),l(this,Me),l(this,ye),l(this,pe),l(this,de),l(this,We),l(this,Fe),l(this,he),l(this,N),l(this,Ye),l(this,A),l(this,E),l(this,ue),l(this,Ge),l(this,et),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,l(this,le,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=o(this,ue,qe).call(this,"y-m-d"),this._currentLocale=navigator.language,l(this,X,void 0),l(this,Oe,e=>{this._elTrigger.then(s=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),document.getSelection()?.addRange(a)})}),l(this,Ne,e=>{this._elFieldAsync.then(s=>{e.currentTarget===s&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),l(this,Ae,e=>{this._elFieldAsync.then(s=>{if(e.currentTarget!==s)return;e.preventDefault();const a=e.clipboardData?.getData("text/plain");if(!a)return;let n=new Date("-");const r="Invalid Date",h=a.split(this._dateFormatLayout.delimiter);if(h.length===3){const m=this._dateFormatLayout.layout,d=parseInt(h[m.findIndex(g=>g.token==="y")]),y=parseInt(h[m.findIndex(g=>g.token==="m")])-1,D=parseInt(h[m.findIndex(g=>g.token==="d")]);!isNaN(d)&&!isNaN(y)&&!isNaN(D)&&(n=new Date(`${d}-${y+1}-${D}`))}n.toString()===r&&(n=new Date(a),n.toString()===r)||(this.value=n,o(this,A,B).call(this))})}),l(this,Re,e=>{this._elSpinners[0]?.focus()}),l(this,Ie,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,o(this,A,B).call(this),o(this,E,G).call(this)}),l(this,ze,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),l(this,Be,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),l(this,Ee,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),l(this,Le,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),l(this,fe,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),o(this,E,G).call(this)}),l(this,He,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,o(this,A,B).call(this);return}!x(s||new Date(0),u(this,X)||new Date(0))&&(this.value=new Date(s),o(this,A,B).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=u(this,X),o(this,E,G).call(this))}}),l(this,Ve,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),l(this,Pe,(e,s)=>{u(this,S)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(u(this,S).year)),a.setUTCMonth(parseInt(u(this,S).month)-1);const n=gt(a).getDate(),r=n<parseInt(u(this,S).day)?n:parseInt(u(this,S).day);a.setUTCDate(isNaN(r)?1:r),a.toString()!=="Invalid Date"&&(this.value=a,o(this,A,B).call(this),o(this,E,G).call(this))}),l(this,S,{year:"yyyy",month:"mm",day:"dd"}),W.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return u(this,le)}set utcHours(e){L(this,le,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=o(this,ue,qe).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),ct.instance.apply(this,"gds-datepicker"),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale,this.value||L(this,S,{year:o(this,N,R).call(this,"year"),month:o(this,N,R).call(this,"month"),day:o(this,N,R).call(this,"day")}),this.requestUpdate())})}focus(e){this._getValidityAnchor()?.focus(e)}render(){return k`
      ${M(!this.plain,()=>k`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${M(this.supportingText.length>0,()=>k`<span slot="supporting-text" id="supporting-text">
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
        @click=${u(this,Re)}
        @copy=${u(this,Ne)}
        @paste=${u(this,Ae)}
        id="field"
      >
        <div class="spinners">
          ${ms(ys(this._dateFormatLayout.layout,(e,s)=>k`<gds-date-part-spinner
                  id="spinner-${s}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${o(this,Ye,xt).call(this,e.name)}
                  aria-valuemin=${o(this,Fe,Dt).call(this,e.name)}
                  aria-valuemax=${o(this,he,Te).call(this,e.name)}
                  aria-label=${o(this,We,kt).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${o(this,he,Te).call(this,e.name).toString().length}
                  @keydown=${u(this,Ve)}
                  @change=${a=>u(this,Pe).call(this,a.detail.value,e.name)}
                  @focus=${u(this,Oe)}
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
          ${M(this.size==="small",()=>k`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>k`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${M(o(this,$e,vt).call(this),()=>k`<gds-form-control-footer
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
        @gds-ui-state=${u(this,He)}
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
              @click=${u(this,Le)}
              aria-label=${p("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${u(this,ze)}
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
              @change=${u(this,Be)}
              .maxHeight=${300}
              label="${p("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${bs(u(this,Ge,$t),e=>e,e=>k`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${u(this,Ee)}
              aria-label=${p("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${u(this,Ie)}
            @gds-date-focused=${u(this,fe)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${M(this.clearable||o(this,de,Ce).call(this)||!!this._outOfRangeAction,()=>k`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${M(this.clearable,()=>k` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,o(this,E,G).call(this),o(this,A,B).call(this)}}
                        aria-label=${p("Clear selected date")}
                      >
                        ${p("Clear")}
                      </gds-button>`)}
                  ${o(this,Se,wt).call(this)}
                </gds-flex>
                ${M(o(this,de,Ce).call(this),()=>k` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),o(this,pe,Ze).call(this,new Date)}}
                      aria-label=${p("Select today's date")}
                    >
                      ${p("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleOutOfRangeChange(){o(this,Me,_t).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){L(this,S,{year:o(this,N,R).call(this,"year"),month:o(this,N,R).call(this,"month"),day:o(this,N,R).call(this,"day")});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");L(this,S,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(L(this,X,this.value),this._elCalendar.then(e=>e.focus()))}};le=new WeakMap;X=new WeakMap;$e=new WeakSet;vt=function(){return!this.plain};Se=new WeakSet;wt=function(){if(!this._outOfRangeAction)return Ot;const t=this._outOfRangeAction==="max";return k`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),o(this,pe,Ze).call(this,t?this.max:this.min)}}
    >
      ${t?p("Last available date"):p("First available date")}
    </gds-button>`};Me=new WeakSet;_t=async function(){const t=await this.getFocusedDate();t?t>this.max&&!x(t,this.max)?this._outOfRangeAction="max":t<this.min&&!x(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};ye=new WeakSet;Qe=function(t){const e=mt(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};pe=new WeakSet;Ze=function(t){const e=o(this,ye,Qe).call(this,t);this._elCalendar.then(s=>s.focusedDate=e).then(u(this,fe)).then(()=>this._elCalendar).then(s=>s.updateComplete.then(()=>s.focus()))};de=new WeakSet;Ce=function(){if(this.hideTodayButton)return!1;const t=o(this,ye,Qe).call(this,new Date);if((t<this.min||t>this.max)&&!x(t,this.min)&&!x(t,this.max))return!1;const s=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&s?!1:!this.disabledDates?.some(a=>x(a,t))};We=new WeakSet;kt=function(t){return`${{year:p("Year"),month:p("Month"),day:p("Day")}[t]} ${this.label}`};Fe=new WeakSet;Dt=function(t){return{year:1900,month:1,day:1}[t]};he=new WeakSet;Te=function(t){return{year:9999,month:12,day:31}[t]};N=new WeakSet;R=function(t){return{year:p("yyyy"),month:p("mm"),day:p("dd")}[t]};Ye=new WeakSet;xt=function(t){return this.value?u(this,S)[t]:o(this,N,R).call(this,t)};A=new WeakSet;B=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};E=new WeakSet;G=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Oe=new WeakMap;Ne=new WeakMap;Ae=new WeakMap;Re=new WeakMap;Ie=new WeakMap;ze=new WeakMap;Be=new WeakMap;Ee=new WeakMap;Le=new WeakMap;fe=new WeakMap;He=new WeakMap;Ve=new WeakMap;ue=new WeakSet;qe=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(d=>d==="y"),n=s.findIndex(d=>d==="m"),r=s.findIndex(d=>d==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const m=[a,n,r].sort((d,y)=>d-y).map(d=>s[d]).map(d=>({token:d,name:d==="y"?"year":d==="m"?"month":"day"}));return{delimiter:e,layout:m}};Pe=new WeakMap;S=new WeakMap;Ge=new WeakSet;$t=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=u(this,et,St),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let n=t;n<=e;n++)yield n}}};et=new WeakSet;St=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};c.styles=[ot,Vt,ws];i([f({converter:Ue})],c.prototype,"value",1);i([f({converter:Ue})],c.prototype,"min",2);i([f({converter:Ue})],c.prototype,"max",2);i([f({type:Boolean})],c.prototype,"open",2);i([f({attribute:"supporting-text"})],c.prototype,"supportingText",2);i([f({type:String})],c.prototype,"size",2);i([f({type:Boolean})],c.prototype,"plain",2);i([f({type:Boolean,attribute:"show-week-numbers"})],c.prototype,"showWeekNumbers",2);i([f({type:Boolean,attribute:"hide-label"})],c.prototype,"hideLabel",2);i([f({type:Boolean,attribute:"clearable"})],c.prototype,"clearable",2);i([f({type:Boolean,attribute:"hide-today-button"})],c.prototype,"hideTodayButton",2);i([f({type:Number,attribute:"utc-hours"})],c.prototype,"utcHours",1);i([f()],c.prototype,"dateformat",1);i([f({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);i([f({converter:Gt,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);i([f({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);i([me("#calendar-button")],c.prototype,"test_calendarButton",2);i([Q("#clear-button")],c.prototype,"test_clearButton",2);i([Q("#today-button")],c.prototype,"test_todayButton",2);i([Q("#back-to-valid-range-button")],c.prototype,"test_backToValidRangeButton",2);i([V()],c.prototype,"_focusedMonth",2);i([V()],c.prototype,"_focusedYear",2);i([V()],c.prototype,"_dateFormatLayout",2);i([V()],c.prototype,"_outOfRangeAction",2);i([V()],c.prototype,"_currentLocale",2);i([me("#calendar")],c.prototype,"_elCalendar",2);i([me("#calendar-button")],c.prototype,"_elTrigger",2);i([me("#field")],c.prototype,"_elFieldAsync",2);i([es("[role=spinbutton]")],c.prototype,"_elSpinners",2);i([Q("#field")],c.prototype,"_elField",2);i([Z(["value","min","max","open","_focusedMonth","_focusedYear"])],c.prototype,"_handleOutOfRangeChange",1);i([Z("value")],c.prototype,"_handleValueChange",1);i([Z("open")],c.prototype,"_handleOpenChange",1);c=i([ut({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),dt()],c);let ge=class extends Ft(Tt(Yt(c))){};ge=i([je("gds-datepicker",{dependsOn:[qt,Ht,Pt,b,Qt,Ut,Kt,Jt,Xt]})],ge);ge.define();jt();const _s=Ct({tagName:Nt("gds-datepicker"),elementClass:ge,events:{onchange:"change"},react:Mt}),ks=te.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:r,testId:h,validator:m,size:d,selectedDate:y,currentDate:D,...g},w)=>{D&&!n&&(n=D),y&&!n&&(n=y);const v=s||new Date(new Date().getFullYear()-10,0,1),_=a||new Date(new Date().getFullYear()+10,0,1),$=ee=>{e&&e(ee.target.value)},Y=te.useRef(null);return te.useImperativeHandle(w,()=>Y.current,[Y]),te.useEffect(()=>{Y?.current&&(Y.current.validator=m)},[m]),tt.jsx("div",{className:"form-group",children:tt.jsx(_s,{"data-testid":h,label:t,min:v,max:_,showWeekNumbers:r,onchange:$,value:n,ref:Y,size:d==="small"?"small":"large",...g})})});ks.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{ks as D};
