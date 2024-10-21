import{x as m,i as I}from"./lit-element-C_s9q329.js";import{e as B}from"./class-map-Bz98xO8-.js";import{o as T}from"./if-defined-Ct9lF4W9.js";import{n as M}from"./when-BR7zwNJC.js";import{n as p,g as L,G as A}from"./gds-element-DjAhZX8m.js";import{a as P}from"./query-p8xgzTDt.js";import{m as w}from"./runtime-CMQcyTl6.js";import{T as j}from"./transitional-styles-xlKQ3pQf.js";import{w as z}from"./watch-tFciLXSI.js";import{t as G}from"./tokens.style-Cgca3mhl.js";function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function b(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||C(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var a=c(t),r=b(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function F(t,e){f(2,arguments);var a=c(t),r=b(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var i=s.getDate();return o>=i?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}var K={};function W(){return K}function _(t,e){var a,r,o,s,i,d,l,n;f(1,arguments);var D=W(),h=b((a=(r=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&o!==void 0?o:D.weekStartsOn)!==null&&r!==void 0?r:(l=D.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=c(t),O=g.getDay(),$=(O<h?7:0)+O-h;return g.setDate(g.getDate()-$),g.setHours(0,0,0,0),g}function N(t){f(1,arguments);var e=c(t);return e.setHours(0,0,0,0),e}function U(t,e){f(2,arguments);var a=b(e),r=a*7;return k(t,r)}function y(t,e){f(2,arguments);var a=N(t),r=N(e);return a.getTime()===r.getTime()}function q(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function V(t,e){var a;f(1,arguments);var r=t||{},o=c(r.start),s=c(r.end),i=s.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var d=[],l=o;l.setHours(0,0,0,0);var n=Number((a=void 0)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)d.push(c(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return d}function J(t,e){f(1,arguments);var a=t||{},r=c(a.start),o=c(a.end),s=o.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var i=_(r,e),d=_(o,e);i.setHours(15),d.setHours(15),s=d.getTime();for(var l=[],n=i;n.getTime()<=s;)n.setHours(0),l.push(c(n)),n=U(n,1),n.setHours(15);return l}function Q(t){f(1,arguments);var e=c(t);return e.setDate(1),e.setHours(0,0,0,0),e}function X(t,e){var a,r,o,s,i,d;f(1,arguments);var l=c(t),n=l.getFullYear(),D=W(),h=b((a=(r=(o=(s=void 0)!==null&&s!==void 0?s:void 0)!==null&&o!==void 0?o:D.firstWeekContainsDate)!==null&&r!==void 0?r:(i=D.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setFullYear(n+1,0,h),g.setHours(0,0,0,0);var O=_(g,e),$=new Date(0);$.setFullYear(n,0,h),$.setHours(0,0,0,0);var R=_($,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=R.getTime()?n:n-1}function Z(t,e){var a,r,o,s,i,d;f(1,arguments);var l=W(),n=b((a=(r=(o=(s=void 0)!==null&&s!==void 0?s:void 0)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&r!==void 0?r:(i=l.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=X(t,e),h=new Date(0);h.setFullYear(D,0,n),h.setHours(0,0,0,0);var g=_(h,e);return g}var ee=6048e5;function te(t,e){f(1,arguments);var a=c(t),r=_(a,e).getTime()-Z(a,e).getTime();return Math.round(r/ee)+1}function ae(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function re(t,e){f(2,arguments);var a=c(t),r=c(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function se(t,e){f(2,arguments);var a=c(t),r=b(e);return a.setHours(r),a}function oe(t,e){f(2,arguments);var a=b(e);return F(t,-a)}function ne(t,e){const a=Q(t),r=q(t),o=J({start:a,end:r},{weekStartsOn:1});for(;o.length<6;)o.push(k(o[o.length-1],7));return m`${e(o.map(s=>({days:V({start:s,end:k(s,6)})})))}`}const ie=I`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`;var le=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,E=t=>{throw TypeError(t)},v=(t,e,a,r)=>{for(var o=r>1?void 0:r?ue(e,a):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(r?i(e,a,o):i(o))||o);return r&&o&&le(e,a,o),o},de=(t,e,a)=>e.has(t)||E("Cannot "+a),ce=(t,e,a)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),S=(t,e,a)=>(de(t,e,"access private method"),a),x,Y,H;let u=class extends A{constructor(){super(...arguments),ce(this,x),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=ae(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),j.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",S(this,x,H))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table role="grid" aria-label="${T(this.label)}">
      ${M(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${w("Mon")}</th>
              <th>${w("Tue")}</th>
              <th>${w("Wed")}</th>
              <th>${w("Thu")}</th>
              <th>${w("Fri")}</th>
              <th>${w("Sat")}</th>
              <th>${w("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ne(this.focusedDate,e=>m`
            ${e.map(a=>m`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>m`<td class="week-number" scope="row">
                        ${te(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(h=>y(h.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>y(h,r))),...o},i=!re(this.focusedDate,r),d=(r<this.min||r>this.max)&&!y(r,this.min)&&!y(r,this.max),l=r.getDay()===0||r.getDay()===6,n=s.disabled||i||d||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${T(n?void 0:"gridcell")}"
                            class="${B({"custom-date":!!o,disabled:!!n,today:y(t,r)})}"
                            ?disabled=${n}
                            tabindex="${y(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&y(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>n?null:S(this,x,Y).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${s?s==null?void 0:s.color:""}"
                              >${r.getDate()}</span
                            >

                            ${M(s.indicator,()=>m`<span
                                  class="indicator-${s==null?void 0:s.indicator}"
                                  style="--_color: ${s==null?void 0:s.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};x=new WeakSet;Y=function(t){const e=se(t,12);this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))};H=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||S(this,x,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=oe(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=F(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};u.styles=[G,ie];u.shadowRootOptions={mode:"open",delegatesFocus:!0};v([p()],u.prototype,"value",2);v([p({type:Date})],u.prototype,"min",2);v([p({type:Date})],u.prototype,"max",2);v([p()],u.prototype,"focusedDate",2);v([p({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);v([p({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);v([p({type:Number})],u.prototype,"focusedMonth",1);v([p({type:Number})],u.prototype,"focusedYear",1);v([p({type:Boolean})],u.prototype,"showWeekNumbers",2);v([p({type:Boolean})],u.prototype,"hideExtraneousDays",2);v([p({type:Boolean})],u.prototype,"hideDayNames",2);v([p({attribute:!1})],u.prototype,"customizedDates",2);v([p()],u.prototype,"label",2);v([p({attribute:!1})],u.prototype,"dateLabelTemplate",2);v([P('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);v([z("value")],u.prototype,"_valueChanged",1);u=v([L("gds-calendar")],u);export{y as i};
