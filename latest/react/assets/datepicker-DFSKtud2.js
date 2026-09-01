import{j as Qe}from"./jsx-runtime-u17CrQMm.js";import{r as Z,e as Dt}from"./iframe-CRuJT8C-.js";import{o as xt}from"./create-component-CVDMTe9T.js";import{i as nt,x as W,t as it,_ as i,n as p,r as q,g as qe,G as ot,b as d,d as h,E as $t,c as u,e as V,h as k,f as Mt,w as St,m as Ct,A as Wt,a as Ft}from"./declarative-layout-mixins-tJCrN6Ff.js";import{l as rt,m as f}from"./runtime-Cgryh99k.js";import{b as Tt,e as J,w as X,a as lt}from"./watch-rsnQmdjn.js";import{f as Yt,r as fe,b as Ot,G as Nt}from"./dropdown.component-Crfb3Kh7.js";import{e as At,i as It,t as Rt}from"./icon.component-Cz0Dxn4-.js";import{M as Bt,u as I,v as P,h as me,p as Et}from"./ref-OQBBMjDz.js";import{n as M}from"./when-CI7b_ccM.js";import{b as Ze,a as zt,G as Lt}from"./button.component-CG8-JDpP.js";import{d as Pe,a as Ht}from"./attribute-converters-CdI0trPX.js";import{e as et}from"./class-map-BTW3ghZw.js";import{T as dt,r as Vt}from"./transitional-styles-0S0P6Ycw.js";import{I as qt,a as Pt}from"./calender-add.component-v4RCsIFK.js";import{I as Gt,a as jt}from"./chevron-right.component-C-WySFjd.js";import{G as Ut}from"./popover.component-B0rMGnYq.js";let Kt;function Jt(t){return(e,s)=>Tt(e,s,{get(){return(this.renderRoot??(Kt??=document.createDocumentFragment())).querySelectorAll(t)}})}const Xt=6048e5,tt=Symbol.for("constructDateFrom");function T(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&tt in t?t[tt](e):t instanceof Date?new t.constructor(e):new Date(e)}function S(t,e){return T(e||t,t)}function E(t,e,s){const a=S(t,s?.in);return isNaN(e)?T(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function ht(t,e,s){const a=S(t,s?.in);if(isNaN(e))return T(t,NaN);if(!e)return a;const n=a.getDate(),o=T(t,a.getTime());o.setMonth(a.getMonth()+e+1,0);const l=o.getDate();return n>=l?o:(a.setFullYear(o.getFullYear(),o.getMonth(),n),a)}let Qt={};function Ge(){return Qt}function A(t,e){const s=Ge(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,n=S(t,e?.in),o=n.getDay(),l=(o<a?7:0)+o-a;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function je(t,...e){const s=T.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function st(t,e){const s=S(t,e?.in);return s.setHours(0,0,0,0),s}function Zt(t,e,s){return E(t,e*7,s)}function x(t,e,s){const[a,n]=je(s?.in,t,e);return+st(a)==+st(n)}function es(t,e){const s=S(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function ut(t,e){const[s,a]=je(t,e.start,e.end);return{start:s,end:a}}function ts(t,e){const{start:s,end:a}=ut(e?.in,t);let n=+s>+a;const o=n?+s:+a,l=n?a:s;l.setHours(0,0,0,0);let m=1;const r=[];for(;+l<=o;)r.push(T(s,l)),l.setDate(l.getDate()+m),l.setHours(0,0,0,0);return n?r.reverse():r}function ss(t,e){const{start:s,end:a}=ut(e?.in,t);let n=+s>+a;const o=A(n?a:s,e),l=A(n?s:a,e);o.setHours(15),l.setHours(15);const m=+l.getTime();let r=o,y=e?.step??1;if(!y)return[];y<0&&(y=-y,n=!n);const D=[];for(;+r<=m;)r.setHours(0),D.push(T(s,r)),r=Zt(r,y),r.setHours(15);return n?D.reverse():D}function as(t,e){const s=S(t,e?.in);return s.setDate(1),s.setHours(0,0,0,0),s}function ns(t,e){const s=S(t,e?.in),a=s.getFullYear(),n=Ge(),o=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,l=T(t,0);l.setFullYear(a+1,0,o),l.setHours(0,0,0,0);const m=A(l,e),r=T(t,0);r.setFullYear(a,0,o),r.setHours(0,0,0,0);const y=A(r,e);return+s>=+m?a+1:+s>=+y?a:a-1}function is(t,e){const s=Ge(),a=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,n=ns(t,e),o=T(t,0);return o.setFullYear(n,0,a),o.setHours(0,0,0,0),A(o,e)}function os(t,e){const s=S(t,e?.in),a=+A(s,e)-+is(s,e);return Math.round(a/Xt)+1}function ct(t,e){const s=S(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),S(s,e?.in)}function rs(t,e,s){const[a,n]=je(s?.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function pt(t,e,s){const a=S(t,s?.in);return a.setHours(e),a}function ls(t,e,s){return ht(t,-1,s)}const ds=nt`
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
`;var hs=ds;function us(t,e){const s=as(t),a=es(t),n=ss({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(E(n[n.length-1],7));return W`${e(n.map(o=>({days:ts({start:o,end:E(o,6)})})))}`}var he,Ue,ye,ft;let b=class extends ot{constructor(){super(...arguments),d(this,he),d(this,ye),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=ct(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),dt.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",h(this,ye,ft)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return W`<table
      role="grid"
      aria-label="${Ze(this.label)}"
      class="${et({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${M(!this.hideDayNames,()=>W`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>W`<th></th>`)}
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
        ${us(this.focusedDate,e=>W`
            ${e.map(s=>W`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>W`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${os(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(g=>x(g.date,a)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>x(g,a))),...n},l=!rs(this.focusedDate,a),m=(a<this.min||a>this.max)&&!x(a,this.min)&&!x(a,this.max),r=a.getDay()===0||a.getDay()===6,y=o.disabled||m||this.disabledWeekends&&r;return this.hideExtraneousDays&&l?W`<td inert></td>`:W`
                          <td
                            role="${Ze(y?void 0:"gridcell")}"
                            class="${et({small:this.size==="small","custom-date":!!n,disabled:!!y,today:x(t,a),"outside-month":l})}"
                            ?disabled=${y}
                            tabindex="${x(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&x(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:h(this,he,Ue).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${M(o.indicator,()=>W`<span
                                  class="indicator-${o?.indicator}"
                                  style="--_color: ${o?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};he=new WeakSet;Ue=function(t){const e=pt(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};ye=new WeakSet;ft=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=E(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=E(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=E(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=E(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||h(this,he,Ue).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=ls(this.focusedDate),e=!0):t.key==="PageDown"&&(s=ht(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};b.styles=[it,hs];b.shadowRootOptions={mode:"open",delegatesFocus:!0};i([p()],b.prototype,"value",2);i([p({type:Date})],b.prototype,"min",2);i([p({type:Date})],b.prototype,"max",2);i([p()],b.prototype,"focusedDate",2);i([p({type:Boolean,attribute:"disabled-weekends"})],b.prototype,"disabledWeekends",2);i([p({type:Array,attribute:"disabled-dates"})],b.prototype,"disabledDates",2);i([p({type:Number})],b.prototype,"focusedMonth",1);i([p({type:Number})],b.prototype,"focusedYear",1);i([p({reflect:!0})],b.prototype,"size",2);i([p({type:Boolean})],b.prototype,"showWeekNumbers",2);i([p({type:Boolean})],b.prototype,"hideExtraneousDays",2);i([p({type:Boolean})],b.prototype,"hideDayNames",2);i([p({attribute:!1})],b.prototype,"customizedDates",2);i([p()],b.prototype,"label",2);i([p({attribute:!1})],b.prototype,"dateLabelTemplate",2);i([q()],b.prototype,"_currentLocale",2);i([J('td[tabindex="0"]')],b.prototype,"_elFocusedCell",2);i([X("value")],b.prototype,"_valueChanged",1);b=i([qe("gds-calendar"),lt({labelledBy:"table",describedBy:"table"}),rt()],b);function*cs(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}function*ps(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}const at=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},fs=At(class extends It{constructor(t){if(super(t),t.type!==Rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],o=[];let l=0;for(const m of t)n[l]=a?a(m,l):l,o[l]=s(m,l),l++;return{values:o,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=Bt(t),{values:o,keys:l}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=l,o;const m=this.ut??=[],r=[];let y,D,g=0,w=n.length-1,v=0,_=o.length-1;for(;g<=w&&v<=_;)if(n[g]===null)g++;else if(n[w]===null)w--;else if(m[g]===l[v])r[v]=I(n[g],o[v]),g++,v++;else if(m[w]===l[_])r[_]=I(n[w],o[_]),w--,_--;else if(m[g]===l[_])r[_]=I(n[g],o[_]),P(t,r[_+1],n[g]),g++,_--;else if(m[w]===l[v])r[v]=I(n[w],o[v]),P(t,n[g],n[w]),w--,v++;else if(y===void 0&&(y=at(l,v,_),D=at(m,g,w)),y.has(m[g]))if(y.has(m[w])){const $=D.get(l[v]),Y=$!==void 0?n[$]:null;if(Y===null){const Q=P(t,n[g]);I(Q,o[v]),r[v]=Q}else r[v]=I(Y,o[v]),P(t,n[g],Y),n[$]=null;v++}else me(n[w]),w--;else me(n[g]),g++;for(;v<=_;){const $=P(t,r[_+1]);I($,o[v]),r[v++]=$}for(;g<=w;){const $=n[g++];$!==null&&me($)}return this.ut=l,Et(t,r),$t}});var O,ee,te,se,ae,be,ve,we,_e,gt,z,G,ne,ke,L,j,U,ie;let C=class extends ot{constructor(){super(...arguments),d(this,_e),d(this,z),d(this,ne),d(this,L),d(this,U),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=h(this,ne,ke).call(this,this.value,this.length),d(this,O,""),d(this,ee,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=h(this,L,j).call(this,t+1),h(this,z,G).call(this)}),d(this,te,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=h(this,L,j).call(this,t-1),h(this,z,G).call(this)}),d(this,se,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),d(this,ae,()=>{h(this,U,ie).call(this)}),d(this,be,()=>{u(this,O)!==""&&(h(this,U,ie).call(this),this.value=h(this,L,j).call(this,parseInt(this.value.toString())),h(this,z,G).call(this))}),d(this,ve,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?u(this,te).call(this):u(this,ee).call(this)}),d(this,we,t=>{let e=!1;if(t.key==="ArrowUp")u(this,ee).call(this),e=!0;else if(t.key==="ArrowDown")u(this,te).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(u(this,O).length<this.length&&(V(this,O,u(this,O)+s.toString()),this.value=parseInt(u(this,O))),u(this,O).length===this.length&&(this.value=h(this,L,j).call(this,this.value),h(this,U,ie).call(this),h(this,_e,gt).call(this),h(this,z,G).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",u(this,ve)),this.addEventListener("keydown",u(this,we)),this.addEventListener("blur",u(this,be)),this.addEventListener("focus",u(this,ae)),this.addEventListener("click",u(this,se)),this.addEventListener("mousedown",u(this,se))}focus(t){super.focus(t),u(this,ae).call(this)}render(){return k`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=h(this,ne,ke).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};O=new WeakMap;ee=new WeakMap;te=new WeakMap;se=new WeakMap;ae=new WeakMap;be=new WeakMap;ve=new WeakMap;we=new WeakMap;_e=new WeakSet;gt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof C){t.focus();break}t=t.nextElementSibling}};z=new WeakSet;G=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ne=new WeakSet;ke=function(t,e){return String(t).padStart(e,"0")};L=new WeakSet;j=function(t){return Math.max(this.min,Math.min(this.max,t))};U=new WeakSet;ie=function(){V(this,O,"")};C.formAssociated=!0;i([p({type:Number})],C.prototype,"value",2);i([p({type:Number})],C.prototype,"length",2);i([p({type:Number,attribute:"aria-valuemin"})],C.prototype,"min",2);i([p({type:Number,attribute:"aria-valuemax"})],C.prototype,"max",2);i([q()],C.prototype,"displayValue",2);i([X("value")],C.prototype,"_refreshDisplayValue",1);C=i([qe("gds-date-part-spinner")],C);const gs=nt`
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
`;var ms=gs,oe,K,De,mt,xe,yt,$e,bt,ge,Ke,ue,Je,re,Me,Se,vt,Ce,wt,le,We,N,R,B,H,Fe,Te,Ye,Oe,Ne,Ae,Ie,Re,Be,ce,Ee,ze,de,Le,He,F,Ve,_t,Xe,kt;let c=class extends zt{constructor(){super(),d(this,De),d(this,xe),d(this,$e),d(this,ge),d(this,ue),d(this,re),d(this,Se),d(this,Ce),d(this,le),d(this,N),d(this,B),d(this,de),d(this,Ve),d(this,Xe),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,d(this,oe,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=h(this,de,Le).call(this,"y-m-d"),d(this,K,void 0),d(this,Fe,e=>{this._elTrigger.then(s=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),document.getSelection()?.addRange(a)})}),d(this,Te,e=>{this._elFieldAsync.then(s=>{e.currentTarget===s&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),d(this,Ye,e=>{this._elFieldAsync.then(s=>{if(e.currentTarget!==s)return;e.preventDefault();const a=e.clipboardData?.getData("text/plain");if(!a)return;let n=new Date("-");const o="Invalid Date",l=a.split(this._dateFormatLayout.delimiter);if(l.length===3){const m=this._dateFormatLayout.layout,r=parseInt(l[m.findIndex(g=>g.token==="y")]),y=parseInt(l[m.findIndex(g=>g.token==="m")])-1,D=parseInt(l[m.findIndex(g=>g.token==="d")]);!isNaN(r)&&!isNaN(y)&&!isNaN(D)&&(n=new Date(`${r}-${y+1}-${D}`))}n.toString()===o&&(n=new Date(a),n.toString()===o)||(this.value=n,h(this,N,R).call(this))})}),d(this,Oe,e=>{this._elSpinners[0]?.focus()}),d(this,Ne,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,h(this,N,R).call(this),h(this,B,H).call(this)}),d(this,Ae,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),d(this,Ie,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),d(this,Re,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),d(this,Be,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),d(this,ce,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),h(this,B,H).call(this)}),d(this,Ee,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,h(this,N,R).call(this);return}!x(s||new Date(0),u(this,K)||new Date(0))&&(this.value=new Date(s),h(this,N,R).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=u(this,K),h(this,B,H).call(this))}}),d(this,ze,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),d(this,He,(e,s)=>{u(this,F)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(u(this,F).year)),a.setUTCMonth(parseInt(u(this,F).month)-1);const n=ct(a).getDate(),o=n<parseInt(u(this,F).day)?n:parseInt(u(this,F).day);a.setUTCDate(isNaN(o)?1:o),a.toString()!=="Invalid Date"&&(this.value=a,h(this,N,R).call(this),h(this,B,H).call(this))}),d(this,F,{year:"yyyy",month:"mm",day:"dd"}),C.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return u(this,oe)}set utcHours(e){V(this,oe,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=h(this,de,Le).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),dt.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return k`
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
        @click=${u(this,Oe)}
        @copy=${u(this,Te)}
        @paste=${u(this,Ye)}
        id="field"
      >
        <div class="spinners">
          ${cs(ps(this._dateFormatLayout.layout,(e,s)=>k`<gds-date-part-spinner
                  id="spinner-${s}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${u(this,F)[e.name]}
                  aria-valuemin=${h(this,Ce,wt).call(this,e.name)}
                  aria-valuemax=${h(this,le,We).call(this,e.name)}
                  aria-label=${h(this,Se,vt).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${h(this,le,We).call(this,e.name).toString().length}
                  @keydown=${u(this,ze)}
                  @change=${a=>u(this,He).call(this,a.detail.value,e.name)}
                  @focus=${u(this,Fe)}
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
          aria-label="${f("Open calendar modal")}"
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

      ${M(h(this,De,mt).call(this),()=>k`<gds-form-control-footer
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
              @change=${u(this,Ae)}
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
              @change=${u(this,Ie)}
              .maxHeight=${300}
              label="${f("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${fs(u(this,Ve,_t),e=>e,e=>k`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${u(this,Re)}
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

          ${M(this.clearable||h(this,re,Me).call(this)||!!this._outOfRangeAction,()=>k`
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
                        @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,h(this,B,H).call(this),h(this,N,R).call(this)}}
                        aria-label=${f("Clear selected date")}
                      >
                        ${f("Clear")}
                      </gds-button>`)}
                  ${h(this,xe,yt).call(this)}
                </gds-flex>
                ${M(h(this,re,Me).call(this),()=>k` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),h(this,ue,Je).call(this,new Date)}}
                      aria-label=${f("Select today's date")}
                    >
                      ${f("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleOutOfRangeChange(){h(this,$e,bt).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,F,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");V(this,F,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(V(this,K,this.value),this._elCalendar.then(e=>e.focus()))}};oe=new WeakMap;K=new WeakMap;De=new WeakSet;mt=function(){return!this.plain};xe=new WeakSet;yt=function(){if(!this._outOfRangeAction)return Wt;const t=this._outOfRangeAction==="max";return k`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),h(this,ue,Je).call(this,t?this.max:this.min)}}
    >
      ${t?f("Last available date"):f("First available date")}
    </gds-button>`};$e=new WeakSet;bt=async function(){const t=await this.getFocusedDate();t?t>this.max&&!x(t,this.max)?this._outOfRangeAction="max":t<this.min&&!x(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};ge=new WeakSet;Ke=function(t){const e=pt(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};ue=new WeakSet;Je=function(t){const e=h(this,ge,Ke).call(this,t);this._elCalendar.then(s=>s.focusedDate=e).then(u(this,ce)).then(()=>this._elCalendar).then(s=>s.updateComplete.then(()=>s.focus()))};re=new WeakSet;Me=function(){if(this.hideTodayButton)return!1;const t=h(this,ge,Ke).call(this,new Date);if((t<this.min||t>this.max)&&!x(t,this.min)&&!x(t,this.max))return!1;const s=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&s?!1:!this.disabledDates?.some(a=>x(a,t))};Se=new WeakSet;vt=function(t){return`${{year:f("Year"),month:f("Month"),day:f("Day")}[t]} ${this.label}`};Ce=new WeakSet;wt=function(t){return{year:1900,month:1,day:1}[t]};le=new WeakSet;We=function(t){return{year:9999,month:12,day:31}[t]};N=new WeakSet;R=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};B=new WeakSet;H=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Fe=new WeakMap;Te=new WeakMap;Ye=new WeakMap;Oe=new WeakMap;Ne=new WeakMap;Ae=new WeakMap;Ie=new WeakMap;Re=new WeakMap;Be=new WeakMap;ce=new WeakMap;Ee=new WeakMap;ze=new WeakMap;de=new WeakSet;Le=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(r=>r==="y"),n=s.findIndex(r=>r==="m"),o=s.findIndex(r=>r==="d");if(a===-1||n===-1||o===-1)throw new Error("Invalid date format for <gds-datepicker>");const m=[a,n,o].sort((r,y)=>r-y).map(r=>s[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:m}};He=new WeakMap;F=new WeakMap;Ve=new WeakSet;_t=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=u(this,Xe,kt),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let n=t;n<=e;n++)yield n}}};Xe=new WeakSet;kt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};c.styles=[it,Yt,ms];i([p({converter:Pe})],c.prototype,"value",1);i([p({converter:Pe})],c.prototype,"min",2);i([p({converter:Pe})],c.prototype,"max",2);i([p({type:Boolean})],c.prototype,"open",2);i([p({attribute:"supporting-text"})],c.prototype,"supportingText",2);i([p({type:String})],c.prototype,"size",2);i([p({type:Boolean})],c.prototype,"plain",2);i([p({type:Boolean,attribute:"show-week-numbers"})],c.prototype,"showWeekNumbers",2);i([p({type:Boolean,attribute:"hide-label"})],c.prototype,"hideLabel",2);i([p({type:Boolean,attribute:"clearable"})],c.prototype,"clearable",2);i([p({type:Boolean,attribute:"hide-today-button"})],c.prototype,"hideTodayButton",2);i([p({type:Number,attribute:"utc-hours"})],c.prototype,"utcHours",1);i([p()],c.prototype,"dateformat",1);i([p({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);i([p({converter:Ht,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);i([p({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);i([fe("#calendar-button")],c.prototype,"test_calendarButton",2);i([J("#clear-button")],c.prototype,"test_clearButton",2);i([J("#today-button")],c.prototype,"test_todayButton",2);i([J("#back-to-valid-range-button")],c.prototype,"test_backToValidRangeButton",2);i([q()],c.prototype,"_focusedMonth",2);i([q()],c.prototype,"_focusedYear",2);i([q()],c.prototype,"_dateFormatLayout",2);i([q()],c.prototype,"_outOfRangeAction",2);i([fe("#calendar")],c.prototype,"_elCalendar",2);i([fe("#calendar-button")],c.prototype,"_elTrigger",2);i([fe("#field")],c.prototype,"_elFieldAsync",2);i([Jt("[role=spinbutton]")],c.prototype,"_elSpinners",2);i([J("#field")],c.prototype,"_elField",2);i([X(["value","min","max","open","_focusedMonth","_focusedYear"])],c.prototype,"_handleOutOfRangeChange",1);i([X("value")],c.prototype,"_handleValueChange",1);i([X("open")],c.prototype,"_handleOpenChange",1);c=i([lt({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),rt()],c);let pe=class extends Mt(St(Ct(c))){};pe=i([qe("gds-datepicker",{dependsOn:[Ot,Lt,Nt,b,Ut,qt,Pt,Gt,jt]})],pe);pe.define();Vt();const ys=xt({tagName:Ft("gds-datepicker"),elementClass:pe,events:{onchange:"change"},react:Dt}),bs=Z.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:o,testId:l,validator:m,size:r,selectedDate:y,currentDate:D,...g},w)=>{D&&!n&&(n=D),y&&!n&&(n=y);const v=s||new Date(new Date().getFullYear()-10,0,1),_=a||new Date(new Date().getFullYear()+10,0,1),$=Q=>{e&&e(Q.target.value)},Y=Z.useRef(null);return Z.useImperativeHandle(w,()=>Y.current,[Y]),Z.useEffect(()=>{Y?.current&&(Y.current.validator=m)},[m]),Qe.jsx("div",{className:"form-group",children:Qe.jsx(ys,{"data-testid":l,label:t,min:v,max:_,showWeekNumbers:o,onchange:$,value:n,ref:Y,size:r==="small"?"small":"large",...g})})});bs.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{bs as D};
