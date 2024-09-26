import{k as b,i as A}from"./lit-element-1d72f0ce.js";import{R as P}from"./class-map-f04c1558.js";import{t as F}from"./if-defined-5f576255.js";import{n as x}from"./when-748fcf30.js";import{n as v,g as j,G as z}from"./gds-element-86064462.js";import{a as G}from"./query-b9d3c2af.js";import{m as y}from"./runtime-c06dc943.js";import{T as K}from"./transitional-styles-8ea9588a.js";import{w as U}from"./watch-c4961afe.js";import{t as q}from"./tokens.style-01187a75.js";function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function _(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||S(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var a=c(t),r=_(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function R(t,e){f(2,arguments);var a=c(t),r=_(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var n=s.getDate();return o>=n?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}var V={};function T(){return V}function $(t,e){var a,r,o,s,n,u,i,l;f(1,arguments);var g=T(),p=_((a=(r=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(u=n.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&o!==void 0?o:g.weekStartsOn)!==null&&r!==void 0?r:(i=g.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var D=c(t),m=D.getDay(),w=(m<p?7:0)+m-p;return D.setDate(D.getDate()-w),D.setHours(0,0,0,0),D}function E(t){f(1,arguments);var e=c(t);return e.setHours(0,0,0,0),e}function J(t,e){f(2,arguments);var a=_(e),r=a*7;return k(t,r)}function O(t,e){f(2,arguments);var a=E(t),r=E(e);return a.getTime()===r.getTime()}function Q(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function X(t,e){var a;f(1,arguments);var r=t||{},o=c(r.start),s=c(r.end),n=s.getTime();if(!(o.getTime()<=n))throw new RangeError("Invalid interval");var u=[],i=o;i.setHours(0,0,0,0);var l=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=n;)u.push(c(i)),i.setDate(i.getDate()+l),i.setHours(0,0,0,0);return u}function Z(t,e){f(1,arguments);var a=t||{},r=c(a.start),o=c(a.end),s=o.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var n=$(r,e),u=$(o,e);n.setHours(15),u.setHours(15),s=u.getTime();for(var i=[],l=n;l.getTime()<=s;)l.setHours(0),i.push(c(l)),l=J(l,1),l.setHours(15);return i}function ee(t){f(1,arguments);var e=c(t);return e.setDate(1),e.setHours(0,0,0,0),e}function te(t,e){var a,r,o,s,n,u,i,l;f(1,arguments);var g=c(t),p=g.getFullYear(),D=T(),m=_((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(u=n.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&o!==void 0?o:D.firstWeekContainsDate)!==null&&r!==void 0?r:(i=D.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setFullYear(p+1,0,m),w.setHours(0,0,0,0);var B=$(w,e),W=new Date(0);W.setFullYear(p,0,m),W.setHours(0,0,0,0);var L=$(W,e);return g.getTime()>=B.getTime()?p+1:g.getTime()>=L.getTime()?p:p-1}function ae(t,e){var a,r,o,s,n,u,i,l;f(1,arguments);var g=T(),p=_((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(u=n.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&o!==void 0?o:g.firstWeekContainsDate)!==null&&r!==void 0?r:(i=g.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=te(t,e),m=new Date(0);m.setFullYear(D,0,p),m.setHours(0,0,0,0);var w=$(m,e);return w}var re=6048e5;function se(t,e){f(1,arguments);var a=c(t),r=$(a,e).getTime()-ae(a,e).getTime();return Math.round(r/re)+1}function oe(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function ne(t,e){f(2,arguments);var a=c(t),r=c(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ie(t,e){f(2,arguments);var a=_(e);return R(t,-a)}function le(t,e){const a=ee(t),r=Q(t),o=Z({start:a,end:r},{weekStartsOn:1});for(;o.length<6;)o.push(k(o[o.length-1],7));return b`${e(o.map(s=>({days:X({start:s,end:k(s,6)})})))}`}const de=A`
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
`;var ue=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var o=r>1?void 0:r?ce(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,a,o):n(o))||o);return r&&o&&ue(e,a,o),o},fe=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},H=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},M=(t,e,a)=>(fe(t,e,"access private method"),a),C,N,Y,I;let d=class extends z{constructor(){super(...arguments),H(this,C),H(this,Y),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=oe(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",M(this,Y,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return b`<table role="grid" aria-label="${F(this.label)}">
      ${x(!this.hideDayNames,()=>b`<thead role="rowgroup">
            <tr role="row">
              ${x(this.showWeekNumbers,()=>b`<th></th>`)}
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
                  ${x(this.showWeekNumbers,()=>b`<td class="week-number" scope="row">${se(a.days[0])}</td>`)}
                  ${a.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(g=>O(g.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>O(g,r))),...o},n=!ne(this.focusedDate,r)||r<this.min||r>this.max,u=r.getDay()===0||r.getDay()===6,i=s.disabled||n||this.disabledWeekends&&u;return this.hideExtraneousDays&&n?b`<td inert></td>`:b`
                          <td
                            role="${F(i?void 0:"gridcell")}"
                            class="${P({"custom-date":!!o,disabled:!!i,today:O(t,r)})}"
                            ?disabled=${i}
                            tabindex="${O(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&O(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>i?null:M(this,C,N).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span class="number" style="--_color: ${s?s==null?void 0:s.color:""}"
                              >${r.getDate()}</span
                            >

                            ${x(s.indicator,()=>b`<span
                                  class="indicator-${s==null?void 0:s.indicator}"
                                  style="--_color: ${s==null?void 0:s.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};C=new WeakSet;N=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};Y=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||M(this,C,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ie(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=R(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};d.styles=[q,de];d.shadowRootOptions={mode:"open",delegatesFocus:!0};h([v()],d.prototype,"value",2);h([v({type:Date})],d.prototype,"min",2);h([v({type:Date})],d.prototype,"max",2);h([v()],d.prototype,"focusedDate",2);h([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);h([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);h([v({type:Number})],d.prototype,"focusedMonth",1);h([v({type:Number})],d.prototype,"focusedYear",1);h([v({type:Boolean})],d.prototype,"showWeekNumbers",2);h([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);h([v({type:Boolean})],d.prototype,"hideDayNames",2);h([v({attribute:!1})],d.prototype,"customizedDates",2);h([v()],d.prototype,"label",2);h([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);h([G('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);h([U("value")],d.prototype,"_valueChanged",1);d=h([j("gds-calendar")],d);export{O as i};
