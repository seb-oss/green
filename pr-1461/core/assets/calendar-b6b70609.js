import{x as w,i as B}from"./lit-element-71e04f06.js";import{e as L}from"./class-map-4ef1884f.js";import{o as E}from"./if-defined-e4b5fcf9.js";import{n as S}from"./when-cf7256a5.js";import{n as D,g as j,G}from"./gds-element-54cd6e2a.js";import{a as z}from"./query-b9d3c2af.js";import{m as y}from"./lit-localize-87611c26.js";import{T as K}from"./transitional-styles-3cdfb2b1.js";import{w as U}from"./watch-c4961afe.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _(t,e){c(2,arguments);var a=d(t),r=k(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function I(t,e){c(2,arguments);var a=d(t),r=k(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var l=s.getDate();return o>=l?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}var q={};function T(){return q}function $(t,e){var a,r,o,s,l,u,n,i;c(1,arguments);var p=T(),v=k((a=(r=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(l=e.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&o!==void 0?o:p.weekStartsOn)!==null&&r!==void 0?r:(n=p.locale)===null||n===void 0||(i=n.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&a!==void 0?a:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(t),m=g.getDay(),b=(m<v?7:0)+m-v;return g.setDate(g.getDate()-b),g.setHours(0,0,0,0),g}function H(t){c(1,arguments);var e=d(t);return e.setHours(0,0,0,0),e}function V(t,e){c(2,arguments);var a=k(e),r=a*7;return _(t,r)}function O(t,e){c(2,arguments);var a=H(t),r=H(e);return a.getTime()===r.getTime()}function J(t){c(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var a;c(1,arguments);var r=t||{},o=d(r.start),s=d(r.end),l=s.getTime();if(!(o.getTime()<=l))throw new RangeError("Invalid interval");var u=[],n=o;n.setHours(0,0,0,0);var i=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(i<1||isNaN(i))throw new RangeError("`options.step` must be a number greater than 1");for(;n.getTime()<=l;)u.push(d(n)),n.setDate(n.getDate()+i),n.setHours(0,0,0,0);return u}function X(t,e){c(1,arguments);var a=t||{},r=d(a.start),o=d(a.end),s=o.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var l=$(r,e),u=$(o,e);l.setHours(15),u.setHours(15),s=u.getTime();for(var n=[],i=l;i.getTime()<=s;)i.setHours(0),n.push(d(i)),i=V(i,1),i.setHours(15);return n}function Z(t){c(1,arguments);var e=d(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var a,r,o,s,l,u,n,i;c(1,arguments);var p=d(t),v=p.getFullYear(),g=T(),m=k((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(l=e.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&o!==void 0?o:g.firstWeekContainsDate)!==null&&r!==void 0?r:(n=g.locale)===null||n===void 0||(i=n.options)===null||i===void 0?void 0:i.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setFullYear(v+1,0,m),b.setHours(0,0,0,0);var A=$(b,e),C=new Date(0);C.setFullYear(v,0,m),C.setHours(0,0,0,0);var P=$(C,e);return p.getTime()>=A.getTime()?v+1:p.getTime()>=P.getTime()?v:v-1}function te(t,e){var a,r,o,s,l,u,n,i;c(1,arguments);var p=T(),v=k((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(l=e.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&o!==void 0?o:p.firstWeekContainsDate)!==null&&r!==void 0?r:(n=p.locale)===null||n===void 0||(i=n.options)===null||i===void 0?void 0:i.firstWeekContainsDate)!==null&&a!==void 0?a:1),g=ee(t,e),m=new Date(0);m.setFullYear(g,0,v),m.setHours(0,0,0,0);var b=$(m,e);return b}var ae=6048e5;function re(t,e){c(1,arguments);var a=d(t),r=$(a,e).getTime()-te(a,e).getTime();return Math.round(r/ae)+1}function se(t){c(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function oe(t,e){c(2,arguments);var a=d(t),r=d(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ne(t,e){c(2,arguments);var a=k(e);return I(t,-a)}function ie(t,e){const a=Z(t),r=J(t),o=X({start:a,end:r},{weekStartsOn:1});return w`${e(o.map(s=>({days:Q({start:s,end:_(s,6)})})))}`}const le=B`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #555;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var o=r>1?void 0:r?de(e,a):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(o=(r?l(e,a,o):l(o))||o);return r&&o&&ue(e,a,o),o},fe=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},x=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},Y=(t,e,a)=>(fe(t,e,"access private method"),a),W,N,F,R;let f=class extends G{constructor(){super(...arguments),x(this,W),x(this,F),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=se(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",Y(this,F,R))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return w`<table role="grid" aria-label="${E(this.label)}">
      <thead role="rowgroup">
        <tr role="row">
          ${S(this.showWeekNumbers,()=>w`<th></th>`)}
          <th>${y("Mon")}</th>
          <th>${y("Tue")}</th>
          <th>${y("Wed")}</th>
          <th>${y("Thu")}</th>
          <th>${y("Fri")}</th>
          <th>${y("Sat")}</th>
          <th>${y("Sun")}</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        ${ie(this.focusedDate,e=>w`
            ${e.map(a=>w`
                <tr role="row">
                  ${S(this.showWeekNumbers,()=>w`<td class="week-number" scope="row">
                        ${re(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(i=>O(i.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(i=>O(i,r))),...o},l=!oe(this.focusedDate,r)||r<this.min||r>this.max,u=r.getDay()===0||r.getDay()===6,n=s.disabled||l||this.disabledWeekends&&u;return w`
                      <td
                        role="${E(n?void 0:"gridcell")}"
                        class="${L({"custom-date":!!o,disabled:!!n,today:O(t,r)})}"
                        ?disabled=${n}
                        tabindex="${O(this.focusedDate,r)?0:-1}"
                        aria-selected="${this.value&&O(this.value,r)?"true":"false"}"
                        aria-label="${r.toDateString()}"
                        @click=${()=>n?null:Y(this,W,N).call(this,r)}
                        id="dateCell-${r.getDate()}"
                      >
                        <span
                          class="number"
                          style="--_color: ${s?s==null?void 0:s.color:""}"
                          >${r.getDate()}</span
                        >

                        ${S(s.indicator,()=>w`<span
                              class="indicator-${s==null?void 0:s.indicator}"
                              style="--_color: ${s==null?void 0:s.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};W=new WeakSet;N=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};F=new WeakSet;R=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=_(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=_(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=_(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=_(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||Y(this,W,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=I(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))};f.styles=[le];f.shadowRootOptions={mode:"open",delegatesFocus:!0};h([D()],f.prototype,"value",2);h([D({type:Date})],f.prototype,"min",2);h([D({type:Date})],f.prototype,"max",2);h([D()],f.prototype,"focusedDate",2);h([D({type:Boolean,attribute:"disabled-weekends"})],f.prototype,"disabledWeekends",2);h([D({type:Array,attribute:"disabled-dates"})],f.prototype,"disabledDates",2);h([D({type:Number})],f.prototype,"focusedMonth",1);h([D({type:Number})],f.prototype,"focusedYear",1);h([D({type:Boolean})],f.prototype,"showWeekNumbers",2);h([D({attribute:!1})],f.prototype,"customizedDates",2);h([D()],f.prototype,"label",2);h([z('td[tabindex="0"]')],f.prototype,"_elFocusedCell",2);h([U("value")],f.prototype,"_valueChanged",1);f=h([j("gds-calendar")],f);export{O as i};
