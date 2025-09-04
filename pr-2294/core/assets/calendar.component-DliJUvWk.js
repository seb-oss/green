import{m as b,l as U}from"./runtime-CNluP0A8.js";import{i as j,x as m}from"./lit-element-Bx14lxc-.js";import{n as v,r as K}from"./Reflect-DJ7r0WLU.js";import{a as q}from"./query-p8xgzTDt.js";import{o as z,e as B}from"./if-defined-BAXgs-ZI.js";import{n as M}from"./when-BR7zwNJC.js";import{G as V,g as J}from"./gds-element-DTROifYq.js";import{t as Q}from"./tokens.style-BAmYQ5hh.js";import{T as X}from"./transitional-styles-DlCTkooe.js";import{w as Z}from"./watch-tFciLXSI.js";function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||N(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function w(t,e){g(2,arguments);var s=f(t),a=k(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function I(t,e){g(2,arguments);var s=f(t),a=k(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var o=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+a+1,0);var i=r.getDate();return o>=i?r:(s.setFullYear(r.getFullYear(),r.getMonth(),o),s)}var ee={};function H(){return ee}function _(t,e){var s,a,o,r,i,c,d,n;g(1,arguments);var y=H(),h=k((s=(a=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&o!==void 0?o:y.weekStartsOn)!==null&&a!==void 0?a:(d=y.locale)===null||d===void 0||(n=d.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=f(t),C=p.getDay(),$=(C<h?7:0)+C-h;return p.setDate(p.getDate()-$),p.setHours(0,0,0,0),p}function R(t){g(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}function te(t,e){g(2,arguments);var s=k(e),a=s*7;return w(t,a)}function D(t,e){g(2,arguments);var s=R(t),a=R(e);return s.getTime()===a.getTime()}function se(t){g(1,arguments);var e=f(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function ae(t,e){var s;g(1,arguments);var a=t||{},o=f(a.start),r=f(a.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var c=[],d=o;d.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;d.getTime()<=i;)c.push(f(d)),d.setDate(d.getDate()+n),d.setHours(0,0,0,0);return c}function re(t,e){g(1,arguments);var s=t||{},a=f(s.start),o=f(s.end),r=o.getTime();if(!(a.getTime()<=r))throw new RangeError("Invalid interval");var i=_(a,e),c=_(o,e);i.setHours(15),c.setHours(15),r=c.getTime();for(var d=[],n=i;n.getTime()<=r;)n.setHours(0),d.push(f(n)),n=te(n,1),n.setHours(15);return d}function oe(t){g(1,arguments);var e=f(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ne(t,e){var s,a,o,r,i,c;g(1,arguments);var d=f(t),n=d.getFullYear(),y=H(),h=k((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:y.firstWeekContainsDate)!==null&&a!==void 0?a:(i=y.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,h),p.setHours(0,0,0,0);var C=_(p,e),$=new Date(0);$.setFullYear(n,0,h),$.setHours(0,0,0,0);var P=_($,e);return d.getTime()>=C.getTime()?n+1:d.getTime()>=P.getTime()?n:n-1}function ie(t,e){var s,a,o,r,i,c;g(1,arguments);var d=H(),n=k((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:d.firstWeekContainsDate)!==null&&a!==void 0?a:(i=d.locale)===null||i===void 0||(c=i.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1),y=ne(t,e),h=new Date(0);h.setFullYear(y,0,n),h.setHours(0,0,0,0);var p=_(h,e);return p}var le=6048e5;function de(t,e){g(1,arguments);var s=f(t),a=_(s,e).getTime()-ie(s,e).getTime();return Math.round(a/le)+1}function ue(t){g(1,arguments);var e=f(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}function ce(t,e){g(2,arguments);var s=f(t),a=f(e);return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()}function he(t,e){g(2,arguments);var s=k(e);return I(t,-s)}const fe=j`
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
        border-radius: var(--gds-sys-radius-max);
        transition: background 0.2s;
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
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;function ge(t,e){const s=oe(t),a=se(t),o=re({start:s,end:a},{weekStartsOn:1});for(;o.length<6;)o.push(w(o[o.length-1],7));return m`${e(o.map(r=>({days:ae({start:r,end:w(r,6)})})))}`}var ve=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},u=(t,e,s,a)=>{for(var o=a>1?void 0:a?pe(e,s):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(a?i(e,s,o):i(o))||o);return a&&o&&ve(e,s,o),o},E=(t,e,s)=>e.has(t)||A("Cannot "+s),S=(t,e,s)=>(E(t,e,"read from private field"),s?s.call(t):e.get(t)),W=(t,e,s)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Y=(t,e,s,a)=>(E(t,e,"write to private field"),e.set(t,s),s),F=(t,e,s)=>(E(t,e,"access private method"),s),x,T,O,L,G;let l=class extends V{constructor(){super(...arguments),W(this,O),W(this,x),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),W(this,T,12),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get value(){return S(this,x)}set value(t){if(!t){Y(this,x,void 0);return}const e=new Date(t);e.setUTCHours(this.utcHours,0,0,0),Y(this,x,e)}get utcHours(){return S(this,T)}set utcHours(t){var e;(e=S(this,x))==null||e.setUTCHours(t),Y(this,T,t)}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=ue(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setUTCHours(this.utcHours,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),X.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",F(this,O,G)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table
      role="grid"
      aria-label="${z(this.label)}"
      class="${B({small:this.size==="small",indicators:!!this.customizedDates})}"
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
        ${ge(this.focusedDate,e=>m`
            ${e.map(s=>m`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${de(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const o=this.customizedDates&&this.customizedDates.find(h=>D(h.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>D(h,a))),...o},i=!ce(this.focusedDate,a),c=(a<this.min||a>this.max)&&!D(a,this.min)&&!D(a,this.max),d=a.getDay()===0||a.getDay()===6,n=r.disabled||i||c||this.disabledWeekends&&d;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${z(n?void 0:"gridcell")}"
                            class="${B({small:this.size==="small","custom-date":!!o,disabled:!!n,today:D(t,a)})}"
                            ?disabled=${n}
                            tabindex="${D(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&D(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:F(this,O,L).call(this,a)}
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};x=new WeakMap;T=new WeakMap;O=new WeakSet;L=function(t){t.setUTCHours(this.utcHours,0,0,0);const e=t;this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};G=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=w(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=w(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=w(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=w(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||F(this,O,L).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(Date.UTC(this.focusedYear,this.focusedMonth,1)),e=!0):t.key==="End"?(s=new Date(Date.UTC(this.focusedYear,this.focusedMonth+1,0)),e=!0):t.key==="PageUp"?(s=he(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=I(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};l.styles=[Q,fe];l.shadowRootOptions={mode:"open",delegatesFocus:!0};u([v()],l.prototype,"value",1);u([v({type:Date})],l.prototype,"min",2);u([v({type:Date})],l.prototype,"max",2);u([v({type:Number,attribute:"utc-hours"})],l.prototype,"utcHours",1);u([v()],l.prototype,"focusedDate",2);u([v({type:Boolean,attribute:"disabled-weekends"})],l.prototype,"disabledWeekends",2);u([v({type:Array,attribute:"disabled-dates"})],l.prototype,"disabledDates",2);u([v({type:Number})],l.prototype,"focusedMonth",1);u([v({type:Number})],l.prototype,"focusedYear",1);u([v({reflect:!0})],l.prototype,"size",2);u([v({type:Boolean})],l.prototype,"showWeekNumbers",2);u([v({type:Boolean})],l.prototype,"hideExtraneousDays",2);u([v({type:Boolean})],l.prototype,"hideDayNames",2);u([v({attribute:!1})],l.prototype,"customizedDates",2);u([v()],l.prototype,"label",2);u([v({attribute:!1})],l.prototype,"dateLabelTemplate",2);u([K()],l.prototype,"_currentLocale",2);u([q('td[tabindex="0"]')],l.prototype,"_elFocusedCell",2);u([Z("value")],l.prototype,"_valueChanged",1);l=u([J("gds-calendar"),U()],l);export{l as G,D as i};
