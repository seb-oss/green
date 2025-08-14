import{m as b,l as R}from"./runtime-CNluP0A8.js";import{i as I,x as m}from"./lit-element-Bx14lxc-.js";import{n as g,r as B,G as z,g as A}from"./gds-element-DKcDvDP5.js";import{a as P}from"./query-p8xgzTDt.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as T}from"./if-defined-CVqwUuaf.js";import{n as M}from"./when-BR7zwNJC.js";import{t as j}from"./tokens.style-Bfj-148u.js";import{T as K}from"./transitional-styles-Be9e-Il_.js";import{w as U}from"./watch-tFciLXSI.js";function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function y(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||C(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var a=c(t),s=y(e);return isNaN(s)?new Date(NaN):(s&&a.setDate(a.getDate()+s),a)}function F(t,e){f(2,arguments);var a=c(t),s=y(e);if(isNaN(s))return new Date(NaN);if(!s)return a;var o=a.getDate(),r=new Date(a.getTime());r.setMonth(a.getMonth()+s+1,0);var i=r.getDate();return o>=i?r:(a.setFullYear(r.getFullYear(),r.getMonth(),o),a)}var q={};function W(){return q}function _(t,e){var a,s,o,r,i,u,l,n;f(1,arguments);var D=W(),v=y((a=(s=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&o!==void 0?o:D.weekStartsOn)!==null&&s!==void 0?s:(l=D.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=c(t),O=p.getDay(),$=(O<v?7:0)+O-v;return p.setDate(p.getDate()-$),p.setHours(0,0,0,0),p}function N(t){f(1,arguments);var e=c(t);return e.setHours(0,0,0,0),e}function V(t,e){f(2,arguments);var a=y(e),s=a*7;return k(t,s)}function w(t,e){f(2,arguments);var a=N(t),s=N(e);return a.getTime()===s.getTime()}function J(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var a;f(1,arguments);var s=t||{},o=c(s.start),r=c(s.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=o;l.setHours(0,0,0,0);var n=Number((a=void 0)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(c(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function X(t,e){f(1,arguments);var a=t||{},s=c(a.start),o=c(a.end),r=o.getTime();if(!(s.getTime()<=r))throw new RangeError("Invalid interval");var i=_(s,e),u=_(o,e);i.setHours(15),u.setHours(15),r=u.getTime();for(var l=[],n=i;n.getTime()<=r;)n.setHours(0),l.push(c(n)),n=V(n,1),n.setHours(15);return l}function Z(t){f(1,arguments);var e=c(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var a,s,o,r,i,u;f(1,arguments);var l=c(t),n=l.getFullYear(),D=W(),v=y((a=(s=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:D.firstWeekContainsDate)!==null&&s!==void 0?s:(i=D.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,v),p.setHours(0,0,0,0);var O=_(p,e),$=new Date(0);$.setFullYear(n,0,v),$.setHours(0,0,0,0);var L=_($,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=L.getTime()?n:n-1}function te(t,e){var a,s,o,r,i,u;f(1,arguments);var l=W(),n=y((a=(s=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&s!==void 0?s:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=ee(t,e),v=new Date(0);v.setFullYear(D,0,n),v.setHours(0,0,0,0);var p=_(v,e);return p}var ae=6048e5;function se(t,e){f(1,arguments);var a=c(t),s=_(a,e).getTime()-te(a,e).getTime();return Math.round(s/ae)+1}function re(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function oe(t,e){f(2,arguments);var a=c(t),s=c(e);return a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()}function ne(t,e){f(2,arguments);var a=c(t),s=y(e);return a.setHours(s),a}function ie(t,e){f(2,arguments);var a=y(e);return F(t,-a)}const le=I`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-border-subtle-01);
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
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);
        --_background: transparent;

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          --_background: var(--gds-sys-color-l3-01);
          background: color-mix(
            in srgb,
            var(--_background),
            var(--gds-sys-color-state-neutral-01)
          );
          cursor: pointer;
          color: var(--gds-sys-color-content-inversed);
        }

        &.today {
          border-color: var(--gds-sys-color-border-strong);
        }

        &.disabled {
          color: var(--gds-sys-color-content-disabled-01);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-content-01);
          outline-width: var(--gds-sys-space-3xs);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`;function de(t,e){const a=Z(t),s=J(t),o=X({start:a,end:s},{weekStartsOn:1});for(;o.length<6;)o.push(k(o[o.length-1],7));return m`${e(o.map(r=>({days:Q({start:r,end:k(r,6)})})))}`}var ue=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,E=t=>{throw TypeError(t)},h=(t,e,a,s)=>{for(var o=s>1?void 0:s?ce(e,a):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(s?i(e,a,o):i(o))||o);return s&&o&&ue(e,a,o),o},fe=(t,e,a)=>e.has(t)||E("Cannot "+a),he=(t,e,a)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),S=(t,e,a)=>(fe(t,e,"access private method"),a),x,Y,H;let d=class extends z{constructor(){super(...arguments),he(this,x),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",S(this,x,H)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table role="grid" aria-label="${T(this.label)}">
      ${M(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${b("Mon")}</th>
              <th>${b("Tue")}</th>
              <th>${b("Wed")}</th>
              <th>${b("Thu")}</th>
              <th>${b("Fri")}</th>
              <th>${b("Sat")}</th>
              <th>${b("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${de(this.focusedDate,e=>m`
            ${e.map(a=>m`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${se(a.days[0])}
                      </td>`)}
                  ${a.days.map(s=>{const o=this.customizedDates&&this.customizedDates.find(v=>w(v.date,s)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(v=>w(v,s))),...o},i=!oe(this.focusedDate,s),u=(s<this.min||s>this.max)&&!w(s,this.min)&&!w(s,this.max),l=s.getDay()===0||s.getDay()===6,n=r.disabled||i||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${T(n?void 0:"gridcell")}"
                            class="${G({"custom-date":!!o,disabled:!!n,today:w(t,s)})}"
                            ?disabled=${n}
                            tabindex="${w(this.focusedDate,s)?0:-1}"
                            aria-selected="${this.value&&w(this.value,s)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(s)}"
                            @click=${()=>n?null:S(this,x,Y).call(this,s)}
                            id="dateCell-${s.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${s.getDate()}</span
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};x=new WeakSet;Y=function(t){const e=ne(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};H=function(t){var s;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||S(this,x,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ie(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=F(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1})&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};d.styles=[j,le];d.shadowRootOptions={mode:"open",delegatesFocus:!0};h([g()],d.prototype,"value",2);h([g({type:Date})],d.prototype,"min",2);h([g({type:Date})],d.prototype,"max",2);h([g()],d.prototype,"focusedDate",2);h([g({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);h([g({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);h([g({type:Number})],d.prototype,"focusedMonth",1);h([g({type:Number})],d.prototype,"focusedYear",1);h([g({type:Boolean})],d.prototype,"showWeekNumbers",2);h([g({type:Boolean})],d.prototype,"hideExtraneousDays",2);h([g({type:Boolean})],d.prototype,"hideDayNames",2);h([g({attribute:!1})],d.prototype,"customizedDates",2);h([g()],d.prototype,"label",2);h([g({attribute:!1})],d.prototype,"dateLabelTemplate",2);h([B()],d.prototype,"_currentLocale",2);h([P('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);h([U("value")],d.prototype,"_valueChanged",1);d=h([A("gds-calendar"),R()],d);export{d as G,w as i};
