import{j as st}from"./jsx-runtime-u17CrQMm.js";import{r as Z,e as Ft}from"./iframe-COaPcxW1.js";import{o as Tt}from"./create-component-CVDMTe9T.js";import{i as lt,x as F,t as dt,_ as i,n as p,r as q,g as Ve,G as ht,b as o,d as h,E as Yt,c as u,e as H,h as _,f as Ot,w as Nt,m as Rt,A as At,a as It}from"./declarative-layout-mixins-DhqEX2mO.js";import{l as ut,m as f}from"./runtime-Cgryh99k.js";import{b as ct,e as P,w as X,a as pt}from"./watch-rsnQmdjn.js";import{e as Bt,i as Et,t as zt}from"./icon.component-wyvAtrKF.js";import{M as Lt,u as A,v as G,h as ye,p as Vt}from"./ref-7fdD5ReA.js";import{n as C}from"./when-CI7b_ccM.js";import{b as at,a as Ht,G as qt}from"./button.component-ChZ9-uuI.js";import{f as Pt,b as Gt,G as jt}from"./dropdown.component-C_iqBxIX.js";import{d as He,a as Ut}from"./attribute-converters-CdI0trPX.js";import{e as nt}from"./class-map-DXpXMKKh.js";import{T as ft,r as Kt}from"./transitional-styles-Bjw8yNuW.js";import{I as Jt,a as Xt}from"./calender-add.component-DGERvVmb.js";import{I as Qt,a as Zt}from"./chevron-right.component-CJI4WZMt.js";import{G as es}from"./popover.component-DjtwsY7j.js";let ts;function ss(t){return(e,s)=>ct(e,s,{get(){return(this.renderRoot??(ts??=document.createDocumentFragment())).querySelectorAll(t)}})}function ge(t){return(e,s)=>ct(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}const as=6048e5,it=Symbol.for("constructDateFrom");function T(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&it in t?t[it](e):t instanceof Date?new t.constructor(e):new Date(e)}function W(t,e){return T(e||t,t)}function E(t,e,s){const a=W(t,s?.in);return isNaN(e)?T(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function gt(t,e,s){const a=W(t,s?.in);if(isNaN(e))return T(t,NaN);if(!e)return a;const n=a.getDate(),r=T(t,a.getTime());r.setMonth(a.getMonth()+e+1,0);const d=r.getDate();return n>=d?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let ns={};function qe(){return ns}function R(t,e){const s=qe(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,n=W(t,e?.in),r=n.getDay(),d=(r<a?7:0)+r-a;return n.setDate(n.getDate()-d),n.setHours(0,0,0,0),n}function Pe(t,...e){const s=T.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function rt(t,e){const s=W(t,e?.in);return s.setHours(0,0,0,0),s}function is(t,e,s){return E(t,e*7,s)}function x(t,e,s){const[a,n]=Pe(s?.in,t,e);return+rt(a)==+rt(n)}function rs(t,e){const s=W(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function mt(t,e){const[s,a]=Pe(t,e.start,e.end);return{start:s,end:a}}function os(t,e){const{start:s,end:a}=mt(e?.in,t);let n=+s>+a;const r=n?+s:+a,d=n?a:s;d.setHours(0,0,0,0);let m=1;const l=[];for(;+d<=r;)l.push(T(s,d)),d.setDate(d.getDate()+m),d.setHours(0,0,0,0);return n?l.reverse():l}function ls(t,e){const{start:s,end:a}=mt(e?.in,t);let n=+s>+a;const r=R(n?a:s,e),d=R(n?s:a,e);r.setHours(15),d.setHours(15);const m=+d.getTime();let l=r,y=e?.step??1;if(!y)return[];y<0&&(y=-y,n=!n);const D=[];for(;+l<=m;)l.setHours(0),D.push(T(s,l)),l=is(l,y),l.setHours(15);return n?D.reverse():D}function ds(t,e){const s=W(t,e?.in);return s.setDate(1),s.setHours(0,0,0,0),s}function hs(t,e){const s=W(t,e?.in),a=s.getFullYear(),n=qe(),r=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,d=T(t,0);d.setFullYear(a+1,0,r),d.setHours(0,0,0,0);const m=R(d,e),l=T(t,0);l.setFullYear(a,0,r),l.setHours(0,0,0,0);const y=R(l,e);return+s>=+m?a+1:+s>=+y?a:a-1}function us(t,e){const s=qe(),a=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,n=hs(t,e),r=T(t,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),R(r,e)}function cs(t,e){const s=W(t,e?.in),a=+R(s,e)-+us(s,e);return Math.round(a/as)+1}function yt(t,e){const s=W(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),W(s,e?.in)}function ps(t,e,s){const[a,n]=Pe(s?.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function bt(t,e,s){const a=W(t,s?.in);return a.setHours(e),a}function fs(t,e,s){return gt(t,-1,s)}const gs=lt`
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
`;var ms=gs;function ys(t,e){const s=ds(t),a=rs(t),n=ls({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(E(n[n.length-1],7));return F`${e(n.map(r=>({days:os({start:r,end:E(r,6)})})))}`}var de,Ge,be,vt;let b=class extends ht{constructor(){super(...arguments),o(this,de),o(this,be),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=yt(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),ft.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",h(this,be,vt)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return F`<table
      role="grid"
      aria-label="${at(this.label)}"
      class="${nt({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${C(!this.hideDayNames,()=>F`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>F`<th></th>`)}
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
        ${ys(this.focusedDate,e=>F`
            ${e.map(s=>F`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>F`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${cs(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(g=>x(g.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>x(g,a))),...n},d=!ps(this.focusedDate,a),m=(a<this.min||a>this.max)&&!x(a,this.min)&&!x(a,this.max),l=a.getDay()===0||a.getDay()===6,y=r.disabled||m||this.disabledWeekends&&l;return this.hideExtraneousDays&&d?F`<td inert></td>`:F`
                          <td
                            role="${at(y?void 0:"gridcell")}"
                            class="${nt({small:this.size==="small","custom-date":!!n,disabled:!!y,today:x(t,a),"outside-month":d})}"
                            ?disabled=${y}
                            tabindex="${x(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&x(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:h(this,de,Ge).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${C(r.indicator,()=>F`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};de=new WeakSet;Ge=function(t){const e=bt(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};be=new WeakSet;vt=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=E(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=E(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=E(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=E(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||h(this,de,Ge).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=fs(this.focusedDate),e=!0):t.key==="PageDown"&&(s=gt(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};b.styles=[dt,ms];b.shadowRootOptions={mode:"open",delegatesFocus:!0};i([p()],b.prototype,"value",2);i([p({type:Date})],b.prototype,"min",2);i([p({type:Date})],b.prototype,"max",2);i([p()],b.prototype,"focusedDate",2);i([p({type:Boolean,attribute:"disabled-weekends"})],b.prototype,"disabledWeekends",2);i([p({type:Array,attribute:"disabled-dates"})],b.prototype,"disabledDates",2);i([p({type:Number})],b.prototype,"focusedMonth",1);i([p({type:Number})],b.prototype,"focusedYear",1);i([p({reflect:!0})],b.prototype,"size",2);i([p({type:Boolean})],b.prototype,"showWeekNumbers",2);i([p({type:Boolean})],b.prototype,"hideExtraneousDays",2);i([p({type:Boolean})],b.prototype,"hideDayNames",2);i([p({attribute:!1})],b.prototype,"customizedDates",2);i([p()],b.prototype,"label",2);i([p({attribute:!1})],b.prototype,"dateLabelTemplate",2);i([q()],b.prototype,"_currentLocale",2);i([P('td[tabindex="0"]')],b.prototype,"_elFocusedCell",2);i([X("value")],b.prototype,"_valueChanged",1);b=i([Ve("gds-calendar"),pt({labelledBy:"table",describedBy:"table"}),ut()],b);function*bs(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}function*vs(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}const ot=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},ws=Bt(class extends Et{constructor(t){if(super(t),t.type!==zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],r=[];let d=0;for(const m of t)n[d]=a?a(m,d):d,r[d]=s(m,d),d++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=Lt(t),{values:r,keys:d}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=d,r;const m=this.ut??=[],l=[];let y,D,g=0,w=n.length-1,v=0,k=r.length-1;for(;g<=w&&v<=k;)if(n[g]===null)g++;else if(n[w]===null)w--;else if(m[g]===d[v])l[v]=A(n[g],r[v]),g++,v++;else if(m[w]===d[k])l[k]=A(n[w],r[k]),w--,k--;else if(m[g]===d[k])l[k]=A(n[g],r[k]),G(t,l[k+1],n[g]),g++,k--;else if(m[w]===d[v])l[v]=A(n[w],r[v]),G(t,n[g],n[w]),w--,v++;else if(y===void 0&&(y=ot(d,v,k),D=ot(m,g,w)),y.has(m[g]))if(y.has(m[w])){const S=D.get(d[v]),Y=S!==void 0?n[S]:null;if(Y===null){const Q=G(t,n[g]);A(Q,r[v]),l[v]=Q}else l[v]=A(Y,r[v]),G(t,n[g],Y),n[S]=null;v++}else ye(n[w]),w--;else ye(n[g]),g++;for(;v<=k;){const S=G(t,l[k+1]);A(S,r[v]),l[v++]=S}for(;g<=w;){const S=n[g++];S!==null&&ye(S)}return this.ut=d,Vt(t,l),Yt}});var O,ee,te,se,ae,ve,we,_e,ke,wt,z,j,ne,De,L,U,K,ie;let $=class extends ht{constructor(){super(...arguments),o(this,ke),o(this,z),o(this,ne),o(this,L),o(this,K),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.readonly=!1,this.displayValue=h(this,ne,De).call(this,this.value,this.length),o(this,O,""),o(this,ee,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=h(this,L,U).call(this,t+1),h(this,z,j).call(this)}),o(this,te,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=h(this,L,U).call(this,t-1),h(this,z,j).call(this)}),o(this,se,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),o(this,ae,()=>{h(this,K,ie).call(this)}),o(this,ve,()=>{u(this,O)!==""&&(h(this,K,ie).call(this),this.value=h(this,L,U).call(this,parseInt(this.value.toString())),h(this,z,j).call(this))}),o(this,we,t=>{t.stopPropagation(),t.preventDefault(),!this.readonly&&(t.deltaY>0?u(this,te).call(this):u(this,ee).call(this))}),o(this,_e,t=>{if(this.readonly)return;let e=!1;if(t.key==="ArrowUp")u(this,ee).call(this),e=!0;else if(t.key==="ArrowDown")u(this,te).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(u(this,O).length<this.length&&(H(this,O,u(this,O)+s.toString()),this.value=parseInt(u(this,O))),u(this,O).length===this.length&&(this.value=h(this,L,U).call(this,this.value),h(this,K,ie).call(this),h(this,ke,wt).call(this),h(this,z,j).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",u(this,we)),this.addEventListener("keydown",u(this,_e)),this.addEventListener("blur",u(this,ve)),this.addEventListener("focus",u(this,ae)),this.addEventListener("click",u(this,se)),this.addEventListener("mousedown",u(this,se))}focus(t){super.focus(t),u(this,ae).call(this)}render(){return _`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=h(this,ne,De).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};O=new WeakMap;ee=new WeakMap;te=new WeakMap;se=new WeakMap;ae=new WeakMap;ve=new WeakMap;we=new WeakMap;_e=new WeakMap;ke=new WeakSet;wt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof $){t.focus();break}t=t.nextElementSibling}};z=new WeakSet;j=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ne=new WeakSet;De=function(t,e){return String(t).padStart(e,"0")};L=new WeakSet;U=function(t){return Math.max(this.min,Math.min(this.max,t))};K=new WeakSet;ie=function(){H(this,O,"")};$.formAssociated=!0;i([p({type:Number})],$.prototype,"value",2);i([p({type:Number})],$.prototype,"length",2);i([p({type:Number,attribute:"aria-valuemin"})],$.prototype,"min",2);i([p({type:Number,attribute:"aria-valuemax"})],$.prototype,"max",2);i([p({type:Boolean,reflect:!0})],$.prototype,"readonly",2);i([q()],$.prototype,"displayValue",2);i([X("value")],$.prototype,"_refreshDisplayValue",1);$=i([Ve("gds-date-part-spinner")],$);const _s=lt`
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
`;var ks=_s,re,J,xe,_t,$e,kt,Se,Dt,Me,xt,Ce,$t,me,je,he,Ue,oe,We,Ke,St,Je,Mt,ue,Fe,N,I,B,V,Xe,Te,Ye,Oe,Ne,Re,Ae,Ie,Be,ce,pe,Qe,Ee,Ze,le,ze,et,M,Le,Ct,tt,Wt;let c=class extends Ht{constructor(){super(),o(this,xe),o(this,$e),o(this,Se),o(this,Me),o(this,Ce),o(this,me),o(this,he),o(this,oe),o(this,Ke),o(this,Je),o(this,ue),o(this,N),o(this,B),o(this,pe),o(this,le),o(this,Le),o(this,tt),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,o(this,re,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=h(this,le,ze).call(this,"y-m-d"),o(this,J,void 0),o(this,Xe,e=>{this._elTrigger.then(s=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),document.getSelection()?.addRange(a)})}),o(this,Te,e=>{this._elFieldAsync.then(s=>{e.currentTarget===s&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),o(this,Ye,e=>{this._elFieldAsync.then(s=>{if(e.currentTarget!==s||(e.preventDefault(),this.readonly))return;const a=e.clipboardData?.getData("text/plain");if(!a)return;let n=new Date("-");const r="Invalid Date",d=a.split(this._dateFormatLayout.delimiter);if(d.length===3){const m=this._dateFormatLayout.layout,l=parseInt(d[m.findIndex(g=>g.token==="y")]),y=parseInt(d[m.findIndex(g=>g.token==="m")])-1,D=parseInt(d[m.findIndex(g=>g.token==="d")]);!isNaN(l)&&!isNaN(y)&&!isNaN(D)&&(n=new Date(`${l}-${y+1}-${D}`))}n.toString()===r&&(n=new Date(a),n.toString()===r)||(this.value=n,h(this,N,I).call(this))})}),o(this,Oe,e=>{this._getValidityAnchor()?.focus()}),o(this,Ne,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,h(this,N,I).call(this),h(this,B,V).call(this)}),o(this,Re,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),o(this,Ae,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),o(this,Ie,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),o(this,Be,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),o(this,ce,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),h(this,B,V).call(this)}),o(this,Ee,async e=>{if(e.target===e.currentTarget){if(this.readonly&&e.detail.open){e.preventDefault();return}if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,h(this,N,I).call(this);return}!x(s||new Date(0),u(this,J)||new Date(0))&&(this.value=new Date(s),h(this,N,I).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=u(this,J),h(this,B,V).call(this))}}),o(this,Ze,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),o(this,et,(e,s)=>{u(this,M)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(u(this,M).year)),a.setUTCMonth(parseInt(u(this,M).month)-1);const n=yt(a).getDate(),r=n<parseInt(u(this,M).day)?n:parseInt(u(this,M).day);a.setUTCDate(isNaN(r)?1:r),a.toString()!=="Invalid Date"&&(this.value=a,h(this,N,I).call(this),h(this,B,V).call(this))}),o(this,M,{year:"yyyy",month:"mm",day:"dd"}),$.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return u(this,re)}set utcHours(e){H(this,re,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=h(this,le,ze).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return u(this,pe,Qe)}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),ft.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return _`
      ${C(!this.plain,()=>_`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label
              id="label"
              for=${this.readonly?"datepicker-value":"spinner-0"}
              slot="label"
              >${this.label}</label
            >
            ${C(this.supportingText.length>0,()=>_`<span slot="supporting-text" id="supporting-text">
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
        .readonly=${this.readonly}
        .invalid=${this.invalid}
        @click=${u(this,Oe)}
        @copy=${u(this,Te)}
        @paste=${u(this,Ye)}
        id="field"
      >
        ${this.readonly?h(this,$e,kt).call(this):h(this,Se,Dt).call(this)}
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
          .disabled=${this.disabled||this.readonly}
        >
          ${C(this.size==="small",()=>_`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>_`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${C(h(this,xe,_t).call(this),()=>_`<gds-form-control-footer
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
        @gds-ui-state=${u(this,Ee)}
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
              @click=${u(this,Be)}
              aria-label=${f("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${u(this,Re)}
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
              @change=${u(this,Ae)}
              .maxHeight=${300}
              label="${f("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${ws(u(this,Le,Ct),e=>e,e=>_`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${u(this,Ie)}
              aria-label=${f("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${u(this,Ne)}
            @gds-date-focused=${u(this,ce)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${C(this.clearable||h(this,oe,We).call(this)||!!this._outOfRangeAction,()=>_`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${C(this.clearable,()=>_` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,h(this,B,V).call(this),h(this,N,I).call(this)}}
                        aria-label=${f("Clear selected date")}
                      >
                        ${f("Clear")}
                      </gds-button>`)}
                  ${h(this,Me,xt).call(this)}
                </gds-flex>
                ${C(h(this,oe,We).call(this),()=>_` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),h(this,he,Ue).call(this,new Date)}}
                      aria-label=${f("Select today's date")}
                    >
                      ${f("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this.readonly?this._elReadonlyValue||this._elField:this._elSpinners[0]}_handleOutOfRangeChange(){h(this,Ce,$t).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){H(this,M,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");H(this,M,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(H(this,J,this.value),this._elCalendar.then(e=>e.focus()))}};re=new WeakMap;J=new WeakMap;xe=new WeakSet;_t=function(){return!this.plain};$e=new WeakSet;kt=function(){return _`<div
      id="datepicker-value"
      class="spinners readonly-value"
      aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
      aria-invalid="${this.invalid}"
      tabindex="0"
    >
      ${u(this,pe,Qe)}
    </div>`};Se=new WeakSet;Dt=function(){return _`<div class="spinners">
      ${bs(vs(this._dateFormatLayout.layout,(t,e)=>_`<gds-date-part-spinner
              id="spinner-${e}"
              aria-invalid="${this.invalid}"
              class="spinner"
              .length=${t.token==="y"?4:2}
              .value=${u(this,M)[t.name]}
              aria-valuemin=${h(this,Je,Mt).call(this,t.name)}
              aria-valuemax=${h(this,ue,Fe).call(this,t.name)}
              aria-label=${h(this,Ke,St).call(this,t.name)}
              aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
              data-max-width=${h(this,ue,Fe).call(this,t.name).toString().length}
              @keydown=${u(this,Ze)}
              @change=${s=>u(this,et).call(this,s.detail.value,t.name)}
              @focus=${u(this,Xe)}
              @touchend=${s=>{this.open=!0,s.preventDefault()}}
            ></gds-date-part-spinner>`),_`<span class="separator"
          >${this._dateFormatLayout.delimiter}</span
        >`)}
    </div>`};Me=new WeakSet;xt=function(){if(!this._outOfRangeAction)return At;const t=this._outOfRangeAction==="max";return _`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),h(this,he,Ue).call(this,t?this.max:this.min)}}
    >
      ${t?f("Last available date"):f("First available date")}
    </gds-button>`};Ce=new WeakSet;$t=async function(){const t=await this.getFocusedDate();t?t>this.max&&!x(t,this.max)?this._outOfRangeAction="max":t<this.min&&!x(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};me=new WeakSet;je=function(t){const e=bt(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};he=new WeakSet;Ue=function(t){const e=h(this,me,je).call(this,t);this._elCalendar.then(s=>s.focusedDate=e).then(u(this,ce)).then(()=>this._elCalendar).then(s=>s.updateComplete.then(()=>s.focus()))};oe=new WeakSet;We=function(){if(this.hideTodayButton)return!1;const t=h(this,me,je).call(this,new Date);if((t<this.min||t>this.max)&&!x(t,this.min)&&!x(t,this.max))return!1;const s=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&s?!1:!this.disabledDates?.some(a=>x(a,t))};Ke=new WeakSet;St=function(t){return`${{year:f("Year"),month:f("Month"),day:f("Day")}[t]} ${this.label}`};Je=new WeakSet;Mt=function(t){return{year:1900,month:1,day:1}[t]};ue=new WeakSet;Fe=function(t){return{year:9999,month:12,day:31}[t]};N=new WeakSet;I=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};B=new WeakSet;V=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Xe=new WeakMap;Te=new WeakMap;Ye=new WeakMap;Oe=new WeakMap;Ne=new WeakMap;Re=new WeakMap;Ae=new WeakMap;Ie=new WeakMap;Be=new WeakMap;ce=new WeakMap;pe=new WeakSet;Qe=function(){return this._dateFormatLayout.layout.map(t=>u(this,M)[t.name]).join(this._dateFormatLayout.delimiter)};Ee=new WeakMap;Ze=new WeakMap;le=new WeakSet;ze=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(l=>l==="y"),n=s.findIndex(l=>l==="m"),r=s.findIndex(l=>l==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const m=[a,n,r].sort((l,y)=>l-y).map(l=>s[l]).map(l=>({token:l,name:l==="y"?"year":l==="m"?"month":"day"}));return{delimiter:e,layout:m}};et=new WeakMap;M=new WeakMap;Le=new WeakSet;Ct=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=u(this,tt,Wt),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let n=t;n<=e;n++)yield n}}};tt=new WeakSet;Wt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};c.styles=[dt,Pt,ks];i([p({converter:He})],c.prototype,"value",1);i([p({converter:He})],c.prototype,"min",2);i([p({converter:He})],c.prototype,"max",2);i([p({type:Boolean})],c.prototype,"open",2);i([p({attribute:"supporting-text"})],c.prototype,"supportingText",2);i([p({type:String})],c.prototype,"size",2);i([p({type:Boolean})],c.prototype,"plain",2);i([p({type:Boolean,attribute:"show-week-numbers"})],c.prototype,"showWeekNumbers",2);i([p({type:Boolean,attribute:"hide-label"})],c.prototype,"hideLabel",2);i([p({type:Boolean,attribute:"clearable"})],c.prototype,"clearable",2);i([p({type:Boolean,attribute:"hide-today-button"})],c.prototype,"hideTodayButton",2);i([p({type:Number,attribute:"utc-hours"})],c.prototype,"utcHours",1);i([p()],c.prototype,"dateformat",1);i([p({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);i([p({converter:Ut,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);i([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);i([ge("#calendar-button")],c.prototype,"test_calendarButton",2);i([P("#clear-button")],c.prototype,"test_clearButton",2);i([P("#today-button")],c.prototype,"test_todayButton",2);i([P("#back-to-valid-range-button")],c.prototype,"test_backToValidRangeButton",2);i([q()],c.prototype,"_focusedMonth",2);i([q()],c.prototype,"_focusedYear",2);i([q()],c.prototype,"_dateFormatLayout",2);i([q()],c.prototype,"_outOfRangeAction",2);i([ge("#calendar")],c.prototype,"_elCalendar",2);i([ge("#calendar-button")],c.prototype,"_elTrigger",2);i([ge("#field")],c.prototype,"_elFieldAsync",2);i([ss("[role=spinbutton]")],c.prototype,"_elSpinners",2);i([P("#field")],c.prototype,"_elField",2);i([P("#datepicker-value")],c.prototype,"_elReadonlyValue",2);i([X(["value","min","max","open","_focusedMonth","_focusedYear"])],c.prototype,"_handleOutOfRangeChange",1);i([X("value")],c.prototype,"_handleValueChange",1);i([X("open")],c.prototype,"_handleOpenChange",1);c=i([pt({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),ut()],c);let fe=class extends Ot(Nt(Rt(c))){};fe=i([Ve("gds-datepicker",{dependsOn:[Gt,qt,jt,b,es,Jt,Xt,Qt,Zt]})],fe);fe.define();Kt();const Ds=Tt({tagName:It("gds-datepicker"),elementClass:fe,events:{onchange:"change"},react:Ft}),xs=Z.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:r,testId:d,validator:m,size:l,selectedDate:y,currentDate:D,...g},w)=>{D&&!n&&(n=D),y&&!n&&(n=y);const v=s||new Date(new Date().getFullYear()-10,0,1),k=a||new Date(new Date().getFullYear()+10,0,1),S=Q=>{e&&e(Q.target.value)},Y=Z.useRef(null);return Z.useImperativeHandle(w,()=>Y.current,[Y]),Z.useEffect(()=>{Y?.current&&(Y.current.validator=m)},[m]),st.jsx("div",{className:"form-group",children:st.jsx(Ds,{"data-testid":d,label:t,min:v,max:k,showWeekNumbers:r,onchange:S,value:n,ref:Y,size:l==="small"?"small":"large",...g})})});xs.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{xs as D};
