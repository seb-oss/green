import{x as w,i as P}from"./lit-element-71e04f06.js";import{e as L}from"./class-map-4ef1884f.js";import{n as S}from"./when-cf7256a5.js";import{n as g,g as j,G as B}from"./gds-element-54cd6e2a.js";import{a as G}from"./query-b9d3c2af.js";import{m as y}from"./lit-localize-87611c26.js";import{T as z}from"./transitional-styles-3cdfb2b1.js";import{w as K}from"./watch-c4961afe.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _(t,e){f(2,arguments);var a=d(t),r=k(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function x(t,e){f(2,arguments);var a=d(t),r=k(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var n=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var i=s.getDate();return n>=i?s:(a.setFullYear(s.getFullYear(),s.getMonth(),n),a)}var U={};function T(){return U}function $(t,e){var a,r,n,s,i,u,l,o;f(1,arguments);var p=T(),v=k((a=(r=(n=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:p.weekStartsOn)!==null&&r!==void 0?r:(l=p.locale)===null||l===void 0||(o=l.options)===null||o===void 0?void 0:o.weekStartsOn)!==null&&a!==void 0?a:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=d(t),D=m.getDay(),b=(D<v?7:0)+D-v;return m.setDate(m.getDate()-b),m.setHours(0,0,0,0),m}function E(t){f(1,arguments);var e=d(t);return e.setHours(0,0,0,0),e}function q(t,e){f(2,arguments);var a=k(e),r=a*7;return _(t,r)}function O(t,e){f(2,arguments);var a=E(t),r=E(e);return a.getTime()===r.getTime()}function V(t){f(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function J(t,e){var a;f(1,arguments);var r=t||{},n=d(r.start),s=d(r.end),i=s.getTime();if(!(n.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=n;l.setHours(0,0,0,0);var o=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(o<1||isNaN(o))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(d(l)),l.setDate(l.getDate()+o),l.setHours(0,0,0,0);return u}function Q(t,e){f(1,arguments);var a=t||{},r=d(a.start),n=d(a.end),s=n.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var i=$(r,e),u=$(n,e);i.setHours(15),u.setHours(15),s=u.getTime();for(var l=[],o=i;o.getTime()<=s;)o.setHours(0),l.push(d(o)),o=q(o,1),o.setHours(15);return l}function X(t){f(1,arguments);var e=d(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Z(t,e){var a,r,n,s,i,u,l,o;f(1,arguments);var p=d(t),v=p.getFullYear(),m=T(),D=k((a=(r=(n=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(o=l.options)===null||o===void 0?void 0:o.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setFullYear(v+1,0,D),b.setHours(0,0,0,0);var R=$(b,e),C=new Date(0);C.setFullYear(v,0,D),C.setHours(0,0,0,0);var A=$(C,e);return p.getTime()>=R.getTime()?v+1:p.getTime()>=A.getTime()?v:v-1}function ee(t,e){var a,r,n,s,i,u,l,o;f(1,arguments);var p=T(),v=k((a=(r=(n=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:p.firstWeekContainsDate)!==null&&r!==void 0?r:(l=p.locale)===null||l===void 0||(o=l.options)===null||o===void 0?void 0:o.firstWeekContainsDate)!==null&&a!==void 0?a:1),m=Z(t,e),D=new Date(0);D.setFullYear(m,0,v),D.setHours(0,0,0,0);var b=$(D,e);return b}var te=6048e5;function ae(t,e){f(1,arguments);var a=d(t),r=$(a,e).getTime()-ee(a,e).getTime();return Math.round(r/te)+1}function re(t){f(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function se(t,e){f(2,arguments);var a=d(t),r=d(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ne(t,e){f(2,arguments);var a=k(e);return x(t,-a)}function oe(t,e){const a=X(t),r=V(t),n=Q({start:a,end:r},{weekStartsOn:1});return w`${e(n.map(s=>({days:J({start:s,end:_(s,6)})})))}`}const ie=P`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;var le=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var n=r>1?void 0:r?ue(e,a):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(n=(r?i(e,a,n):i(n))||n);return r&&n&&le(e,a,n),n},de=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},H=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},Y=(t,e,a)=>(de(t,e,"access private method"),a),W,N,F,I;let c=class extends B{constructor(){super(...arguments),H(this,W),H(this,F),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),z.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",Y(this,F,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return w`<table>
      <thead>
        <tr>
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
      <tbody>
        ${oe(this.focusedDate,e=>w`
            ${e.map(a=>w`
                <tr>
                  ${S(this.showWeekNumbers,()=>w`<td class="week-number">
                        ${ae(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const n=this.customizedDates&&this.customizedDates.find(o=>O(o.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(o=>O(o,r))),...n},i=!se(this.focusedDate,r)||r<this.min||r>this.max,u=r.getDay()===0||r.getDay()===6,l=s.disabled||i||this.disabledWeekends&&u;return w`
                      <td
                        class="${L({"custom-date":!!n,disabled:!!l,today:O(t,r)})}"
                        ?disabled=${l}
                        tabindex="${O(this.focusedDate,r)?0:-1}"
                        aria-selected="${this.value&&O(this.value,r)}"
                        aria-label="${r.toDateString()}"
                        @click=${()=>l?null:Y(this,W,N).call(this,r)}
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};W=new WeakSet;N=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};F=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=_(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=_(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=_(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=_(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||Y(this,W,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=x(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))};c.styles=[ie];c.shadowRootOptions={mode:"open",delegatesFocus:!0};h([g()],c.prototype,"value",2);h([g({type:Date})],c.prototype,"min",2);h([g({type:Date})],c.prototype,"max",2);h([g()],c.prototype,"focusedDate",2);h([g({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);h([g({type:Array,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);h([g({type:Number})],c.prototype,"focusedMonth",1);h([g({type:Number})],c.prototype,"focusedYear",1);h([g({type:Boolean})],c.prototype,"showWeekNumbers",2);h([g({attribute:!1})],c.prototype,"customizedDates",2);h([G('td[tabindex="0"]')],c.prototype,"_elFocusedCell",2);h([K("value")],c.prototype,"_valueChanged",1);c=h([j("gds-calendar")],c);export{O as i};
