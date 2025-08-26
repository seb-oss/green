import{m as b,l as B}from"./runtime-CNluP0A8.js";import{i as R,x as m}from"./lit-element-Bx14lxc-.js";import{n as v,r as I}from"./Reflect-DJ7r0WLU.js";import{a as A}from"./query-p8xgzTDt.js";import{o as Y,e as N}from"./if-defined-BAXgs-ZI.js";import{n as M}from"./when-BR7zwNJC.js";import{G as P,g as G}from"./gds-element-DJNCW3iR.js";import{t as j}from"./tokens.style-iX6aIK9m.js";import{T as U}from"./transitional-styles-DRTvhbpp.js";import{w as K}from"./watch-tFciLXSI.js";function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||C(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function w(t,e){g(2,arguments);var s=f(t),a=k(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function E(t,e){g(2,arguments);var s=f(t),a=k(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var o=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+a+1,0);var i=r.getDate();return o>=i?r:(s.setFullYear(r.getFullYear(),r.getMonth(),o),s)}var q={};function W(){return q}function x(t,e){var s,a,o,r,i,c,d,n;g(1,arguments);var y=W(),h=k((s=(a=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&o!==void 0?o:y.weekStartsOn)!==null&&a!==void 0?a:(d=y.locale)===null||d===void 0||(n=d.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=f(t),O=p.getDay(),_=(O<h?7:0)+O-h;return p.setDate(p.getDate()-_),p.setHours(0,0,0,0),p}function F(t){g(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}function V(t,e){g(2,arguments);var s=k(e),a=s*7;return w(t,a)}function D(t,e){g(2,arguments);var s=F(t),a=F(e);return s.getTime()===a.getTime()}function J(t){g(1,arguments);var e=f(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var s;g(1,arguments);var a=t||{},o=f(a.start),r=f(a.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var c=[],d=o;d.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=i;)c.push(f(d)),d.setDate(d.getDate()+n),d.setHours(0,0,0,0);return c}function X(t,e){g(1,arguments);var s=t||{},a=f(s.start),o=f(s.end),r=o.getTime();if(!(a.getTime()<=r))throw new RangeError("Invalid interval");var i=x(a,e),c=x(o,e);i.setHours(15),c.setHours(15),r=c.getTime();for(var d=[],n=i;n.getTime()<=r;)n.setHours(0),d.push(f(n)),n=V(n,1),n.setHours(15);return d}function Z(t){g(1,arguments);var e=f(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var s,a,o,r,i,c;g(1,arguments);var d=f(t),n=d.getFullYear(),y=W(),h=k((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:y.firstWeekContainsDate)!==null&&a!==void 0?a:(i=y.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,h),p.setHours(0,0,0,0);var O=x(p,e),_=new Date(0);_.setFullYear(n,0,h),_.setHours(0,0,0,0);var z=x(_,e);return d.getTime()>=O.getTime()?n+1:d.getTime()>=z.getTime()?n:n-1}function te(t,e){var s,a,o,r,i,c;g(1,arguments);var d=W(),n=k((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:d.firstWeekContainsDate)!==null&&a!==void 0?a:(i=d.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1),y=ee(t,e),h=new Date(0);h.setFullYear(y,0,n),h.setHours(0,0,0,0);var p=x(h,e);return p}var se=6048e5;function ae(t,e){g(1,arguments);var s=f(t),a=x(s,e).getTime()-te(s,e).getTime();return Math.round(a/se)+1}function re(t){g(1,arguments);var e=f(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}function oe(t,e){g(2,arguments);var s=f(t),a=f(e);return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()}function ne(t,e){g(2,arguments);var s=k(e);return E(t,-s)}const ie=R`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.indicators {
        border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      }

      &.small {
        border-spacing: var(--gds-sys-space-2xs);

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
    }

    thead {
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-max);
        transition: background 0.2s; //might be removed
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);
        //--_background: transparent;

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
          background: var(--gds-sys-color-l3-neutral-01);
          color: var(--gds-sys-color-content-neutral-03);
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
          outline-width: var(--gds-sys-space-3xs);
          outline-offset: 3.75px;
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
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-space-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;function le(t,e){const s=Z(t),a=J(t),o=X({start:s,end:a},{weekStartsOn:1});for(;o.length<6;)o.push(w(o[o.length-1],7));return m`${e(o.map(r=>({days:Q({start:r,end:w(r,6)})})))}`}var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},u=(t,e,s,a)=>{for(var o=a>1?void 0:a?ue(e,s):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(a?i(e,s,o):i(o))||o);return a&&o&&de(e,s,o),o},ce=(t,e,s)=>e.has(t)||H("Cannot "+s),he=(t,e,s)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),S=(t,e,s)=>(ce(t,e,"access private method"),s),$,T,L;let l=class extends P{constructor(){super(...arguments),he(this,$),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.utcHours=12,this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setUTCHours(this.utcHours,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",S(this,$,L)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table
      role="grid"
      aria-label="${Y(this.label)}"
      class="${N({small:this.size==="small",indicators:!!this.customizedDates})}"
    >
      ${M(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${b("Mon").substring(0,1)}</th>
              <th>${b("Tue").substring(0,1)}</th>
              <th>${b("Wed").substring(0,1)}</th>
              <th>${b("Thu").substring(0,1)}</th>
              <th>${b("Fri").substring(0,1)}</th>
              <th>${b("Sat").substring(0,1)}</th>
              <th>${b("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${le(this.focusedDate,e=>m`
            ${e.map(s=>m`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${ae(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const o=this.customizedDates&&this.customizedDates.find(h=>D(h.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>D(h,a))),...o},i=!oe(this.focusedDate,a),c=(a<this.min||a>this.max)&&!D(a,this.min)&&!D(a,this.max),d=a.getDay()===0||a.getDay()===6,n=r.disabled||i||c||this.disabledWeekends&&d;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${Y(n?void 0:"gridcell")}"
                            class="${N({small:this.size==="small","custom-date":!!o,disabled:!!n,today:D(t,a)})}"
                            ?disabled=${n}
                            tabindex="${D(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&D(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:S(this,$,T).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${a.getDate()}</span
                            >

                            ${M(r.indicator,()=>m`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};$=new WeakSet;T=function(t){t.setUTCHours(this.utcHours,0,0,0);const e=t;this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};L=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=w(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=w(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=w(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=w(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||S(this,$,T).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=E(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};l.styles=[j,ie];l.shadowRootOptions={mode:"open",delegatesFocus:!0};u([v()],l.prototype,"value",2);u([v({type:Date})],l.prototype,"min",2);u([v({type:Date})],l.prototype,"max",2);u([v({type:Number,attribute:"utc-hours"})],l.prototype,"utcHours",2);u([v()],l.prototype,"focusedDate",2);u([v({type:Boolean,attribute:"disabled-weekends"})],l.prototype,"disabledWeekends",2);u([v({type:Array,attribute:"disabled-dates"})],l.prototype,"disabledDates",2);u([v({type:Number})],l.prototype,"focusedMonth",1);u([v({type:Number})],l.prototype,"focusedYear",1);u([v({reflect:!0})],l.prototype,"size",2);u([v({type:Boolean})],l.prototype,"showWeekNumbers",2);u([v({type:Boolean})],l.prototype,"hideExtraneousDays",2);u([v({type:Boolean})],l.prototype,"hideDayNames",2);u([v({attribute:!1})],l.prototype,"customizedDates",2);u([v()],l.prototype,"label",2);u([v({attribute:!1})],l.prototype,"dateLabelTemplate",2);u([I()],l.prototype,"_currentLocale",2);u([A('td[tabindex="0"]')],l.prototype,"_elFocusedCell",2);u([K("value")],l.prototype,"_valueChanged",1);l=u([G("gds-calendar"),B()],l);export{l as G,D as i};
