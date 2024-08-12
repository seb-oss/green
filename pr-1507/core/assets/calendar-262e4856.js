import{x as b,i as A}from"./lit-element-71e04f06.js";import{e as P}from"./class-map-4ef1884f.js";import{o as F}from"./if-defined-e4b5fcf9.js";import{n as C}from"./when-cf7256a5.js";import{n as v,g as j,G as z}from"./gds-element-54cd6e2a.js";import{a as G}from"./query-b9d3c2af.js";import{m as y}from"./lit-localize-87611c26.js";import{T as K}from"./transitional-styles-73ecf23d.js";import{w as U}from"./watch-c4961afe.js";import{t as q}from"./tokens.style-880811e7.js";function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||x(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _(t,e){c(2,arguments);var a=f(t),r=k(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function R(t,e){c(2,arguments);var a=f(t),r=k(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var s=a.getDate(),o=new Date(a.getTime());o.setMonth(a.getMonth()+r+1,0);var n=o.getDate();return s>=n?o:(a.setFullYear(o.getFullYear(),o.getMonth(),s),a)}var V={};function T(){return V}function $(t,e){var a,r,s,o,n,d,i,l;c(1,arguments);var p=T(),g=k((a=(r=(s=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&s!==void 0?s:p.weekStartsOn)!==null&&r!==void 0?r:(i=p.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var D=f(t),m=D.getDay(),w=(m<g?7:0)+m-g;return D.setDate(D.getDate()-w),D.setHours(0,0,0,0),D}function E(t){c(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}function J(t,e){c(2,arguments);var a=k(e),r=a*7;return _(t,r)}function O(t,e){c(2,arguments);var a=E(t),r=E(e);return a.getTime()===r.getTime()}function Q(t){c(1,arguments);var e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function X(t,e){var a;c(1,arguments);var r=t||{},s=f(r.start),o=f(r.end),n=o.getTime();if(!(s.getTime()<=n))throw new RangeError("Invalid interval");var d=[],i=s;i.setHours(0,0,0,0);var l=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=n;)d.push(f(i)),i.setDate(i.getDate()+l),i.setHours(0,0,0,0);return d}function Z(t,e){c(1,arguments);var a=t||{},r=f(a.start),s=f(a.end),o=s.getTime();if(!(r.getTime()<=o))throw new RangeError("Invalid interval");var n=$(r,e),d=$(s,e);n.setHours(15),d.setHours(15),o=d.getTime();for(var i=[],l=n;l.getTime()<=o;)l.setHours(0),i.push(f(l)),l=J(l,1),l.setHours(15);return i}function ee(t){c(1,arguments);var e=f(t);return e.setDate(1),e.setHours(0,0,0,0),e}function te(t,e){var a,r,s,o,n,d,i,l;c(1,arguments);var p=f(t),g=p.getFullYear(),D=T(),m=k((a=(r=(s=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:D.firstWeekContainsDate)!==null&&r!==void 0?r:(i=D.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setFullYear(g+1,0,m),w.setHours(0,0,0,0);var B=$(w,e),S=new Date(0);S.setFullYear(g,0,m),S.setHours(0,0,0,0);var L=$(S,e);return p.getTime()>=B.getTime()?g+1:p.getTime()>=L.getTime()?g:g-1}function ae(t,e){var a,r,s,o,n,d,i,l;c(1,arguments);var p=T(),g=k((a=(r=(s=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&s!==void 0?s:p.firstWeekContainsDate)!==null&&r!==void 0?r:(i=p.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=te(t,e),m=new Date(0);m.setFullYear(D,0,g),m.setHours(0,0,0,0);var w=$(m,e);return w}var re=6048e5;function oe(t,e){c(1,arguments);var a=f(t),r=$(a,e).getTime()-ae(a,e).getTime();return Math.round(r/re)+1}function se(t){c(1,arguments);var e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function ne(t,e){c(2,arguments);var a=f(t),r=f(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ie(t,e){c(2,arguments);var a=k(e);return R(t,-a)}function le(t,e){const a=ee(t),r=Q(t),s=Z({start:a,end:r},{weekStartsOn:1});return b`${e(s.map(o=>({days:X({start:o,end:_(o,6)})})))}`}const ue=A`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: 4px;
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 1px 0 0 var(--gds-sys-color-base300);
      th {
        height: 44px;
        width: 44px;
        box-sizing: border-box;
        text-align: center;
        background: var(--gds-sys-color-container-container-bright);
        font-weight: normal;
      }
    }

    tbody {
      td {
        height: 44px;
        width: 44px;
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
        border-radius: 4px;
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: 2px;

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: #333;
          cursor: pointer;
          color: #fff;
        }

        &.today:not(:hover) {
          border-color: currentColor;
        }

        &.disabled {
          background-color: #f8f8f8;
          color: #adadad;
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }
    }
  }
`;var de=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var s=r>1?void 0:r?fe(e,a):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(r?n(e,a,s):n(s))||s);return r&&s&&de(e,a,s),s},ce=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},H=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},M=(t,e,a)=>(ce(t,e,"access private method"),a),W,N,Y,I;let u=class extends z{constructor(){super(...arguments),H(this,W),H(this,Y),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=se(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",M(this,Y,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return b`<table role="grid" aria-label="${F(this.label)}">
      ${C(!this.hideDayNames,()=>b`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>b`<th></th>`)}
              <th>${y("Mon")}</th>
              <th>${y("Tue")}</th>
              <th>${y("Wed")}</th>
              <th>${y("Thu")}</th>
              <th>${y("Fri")}</th>
              <th>${y("Sat")}</th>
              <th>${y("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${le(this.focusedDate,e=>b`
            ${e.map(a=>b`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>b`<td class="week-number" scope="row">
                        ${oe(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const s=this.customizedDates&&this.customizedDates.find(p=>O(p.date,r)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>O(p,r))),...s},n=!ne(this.focusedDate,r)||r<this.min||r>this.max,d=r.getDay()===0||r.getDay()===6,i=o.disabled||n||this.disabledWeekends&&d;return this.hideExtraneousDays&&n?b`<td inert></td>`:b`
                          <td
                            role="${F(i?void 0:"gridcell")}"
                            class="${P({"custom-date":!!s,disabled:!!i,today:O(t,r)})}"
                            ?disabled=${i}
                            tabindex="${O(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&O(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>i?null:M(this,W,N).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o==null?void 0:o.color:""}"
                              >${r.getDate()}</span
                            >

                            ${C(o.indicator,()=>b`<span
                                  class="indicator-${o==null?void 0:o.indicator}"
                                  style="--_color: ${o==null?void 0:o.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};W=new WeakSet;N=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};Y=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=_(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=_(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=_(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=_(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||M(this,W,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ie(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=R(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var s;(s=this._elFocusedCell)==null||s.focus()}))};u.styles=[q,ue];u.shadowRootOptions={mode:"open",delegatesFocus:!0};h([v()],u.prototype,"value",2);h([v({type:Date})],u.prototype,"min",2);h([v({type:Date})],u.prototype,"max",2);h([v()],u.prototype,"focusedDate",2);h([v({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);h([v({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);h([v({type:Number})],u.prototype,"focusedMonth",1);h([v({type:Number})],u.prototype,"focusedYear",1);h([v({type:Boolean})],u.prototype,"showWeekNumbers",2);h([v({type:Boolean})],u.prototype,"hideExtraneousDays",2);h([v({type:Boolean})],u.prototype,"hideDayNames",2);h([v({attribute:!1})],u.prototype,"customizedDates",2);h([v()],u.prototype,"label",2);h([v({attribute:!1})],u.prototype,"dateLabelTemplate",2);h([G('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);h([U("value")],u.prototype,"_valueChanged",1);u=h([j("gds-calendar")],u);export{O as i};
