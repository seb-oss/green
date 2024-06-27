import{x as w,i as P}from"./lit-element-71e04f06.js";import{e as L}from"./class-map-4ef1884f.js";import{n as S}from"./when-cf7256a5.js";import{n as g,g as j,G as B}from"./gds-element-54cd6e2a.js";import{a as G}from"./query-b9d3c2af.js";import{m as b}from"./lit-localize-87611c26.js";import{T as K}from"./transitional-styles-3cdfb2b1.js";import{w as U}from"./watch-c4961afe.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _(t,e){f(2,arguments);var a=d(t),r=k(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function x(t,e){f(2,arguments);var a=d(t),r=k(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var s=a.getDate(),n=new Date(a.getTime());n.setMonth(a.getMonth()+r+1,0);var o=n.getDate();return s>=o?n:(a.setFullYear(n.getFullYear(),n.getMonth(),s),a)}var q={};function T(){return q}function $(t,e){var a,r,s,n,o,u,i,l;f(1,arguments);var m=T(),v=k((a=(r=(s=(n=e==null?void 0:e.weekStartsOn)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:m.weekStartsOn)!==null&&r!==void 0?r:(i=m.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=d(t),D=p.getDay(),y=(D<v?7:0)+D-v;return p.setDate(p.getDate()-y),p.setHours(0,0,0,0),p}function E(t){f(1,arguments);var e=d(t);return e.setHours(0,0,0,0),e}function V(t,e){f(2,arguments);var a=k(e),r=a*7;return _(t,r)}function O(t,e){f(2,arguments);var a=E(t),r=E(e);return a.getTime()===r.getTime()}function J(t){f(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var a;f(1,arguments);var r=t||{},s=d(r.start),n=d(r.end),o=n.getTime();if(!(s.getTime()<=o))throw new RangeError("Invalid interval");var u=[],i=s;i.setHours(0,0,0,0);var l=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=o;)u.push(d(i)),i.setDate(i.getDate()+l),i.setHours(0,0,0,0);return u}function X(t,e){f(1,arguments);var a=t||{},r=d(a.start),s=d(a.end),n=s.getTime();if(!(r.getTime()<=n))throw new RangeError("Invalid interval");var o=$(r,e),u=$(s,e);o.setHours(15),u.setHours(15),n=u.getTime();for(var i=[],l=o;l.getTime()<=n;)l.setHours(0),i.push(d(l)),l=V(l,1),l.setHours(15);return i}function Z(t){f(1,arguments);var e=d(t);return e.setDate(1),e.setHours(0,0,0,0),e}function z(t,e){var a,r,s,n,o,u,i,l;f(1,arguments);var m=d(t),v=m.getFullYear(),p=T(),D=k((a=(r=(s=(n=e==null?void 0:e.firstWeekContainsDate)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:p.firstWeekContainsDate)!==null&&r!==void 0?r:(i=p.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setFullYear(v+1,0,D),y.setHours(0,0,0,0);var R=$(y,e),C=new Date(0);C.setFullYear(v,0,D),C.setHours(0,0,0,0);var A=$(C,e);return m.getTime()>=R.getTime()?v+1:m.getTime()>=A.getTime()?v:v-1}function ee(t,e){var a,r,s,n,o,u,i,l;f(1,arguments);var m=T(),v=k((a=(r=(s=(n=e==null?void 0:e.firstWeekContainsDate)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:m.firstWeekContainsDate)!==null&&r!==void 0?r:(i=m.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1),p=z(t,e),D=new Date(0);D.setFullYear(p,0,v),D.setHours(0,0,0,0);var y=$(D,e);return y}var te=6048e5;function ae(t,e){f(1,arguments);var a=d(t),r=$(a,e).getTime()-ee(a,e).getTime();return Math.round(r/te)+1}function re(t){f(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function se(t,e){f(2,arguments);var a=d(t),r=d(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ne(t,e){f(2,arguments);var a=k(e);return x(t,-a)}function oe(t,e){const a=Z(t),r=J(t),s=X({start:a,end:r},{weekStartsOn:1});return w`${e(s.map(n=>({days:Q({start:n,end:_(n,6)})})))}`}const ie=P`
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
`;var le=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var s=r>1?void 0:r?ue(e,a):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(r?o(e,a,s):o(s))||s);return r&&s&&le(e,a,s),s},de=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},H=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},Y=(t,e,a)=>(de(t,e,"access private method"),a),W,N,F,I;let c=class extends B{constructor(){super(...arguments),H(this,W),H(this,F),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",Y(this,F,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return w`<table>
      <thead>
        <tr>
          ${S(this.showWeekNumbers,()=>w`<th></th>`)}
          <th>${b("Mon")}</th>
          <th>${b("Tue")}</th>
          <th>${b("Wed")}</th>
          <th>${b("Thu")}</th>
          <th>${b("Fri")}</th>
          <th>${b("Sat")}</th>
          <th>${b("Sun")}</th>
        </tr>
      </thead>
      <tbody>
        ${oe(this.focusedDate,e=>w`
            ${e.map(a=>w`
                <tr>
                  ${S(this.showWeekNumbers,()=>w`<td class="week-number">
                        ${ae(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(i=>O(i,r))),...this.customizedDates&&this.customizedDates.find(i=>O(i.date,r))},n=!se(this.focusedDate,r)||r<this.min||r>this.max,o=r.getDay()===0||r.getDay()===6,u=s.disabled||n||this.disabledWeekends&&o;return w`
                      <td
                        class="${L({"custom-date":!!s,disabled:!!u,today:O(t,r)})}"
                        ?disabled=${u}
                        tabindex="${O(this.focusedDate,r)?0:-1}"
                        aria-selected="${this.value&&O(this.value,r)}"
                        aria-label="${r.toDateString()}"
                        @click=${()=>u?null:Y(this,W,N).call(this,r)}
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};W=new WeakSet;N=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};F=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=_(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=_(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=_(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=_(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||Y(this,W,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=x(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var s;(s=this._elFocusedCell)==null||s.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))};c.styles=[ie];c.shadowRootOptions={mode:"open",delegatesFocus:!0};h([g()],c.prototype,"value",2);h([g({type:Date})],c.prototype,"min",2);h([g({type:Date})],c.prototype,"max",2);h([g()],c.prototype,"focusedDate",2);h([g({type:Boolean,attribute:"disabled-weekends"})],c.prototype,"disabledWeekends",2);h([g({type:Array,attribute:"disabled-dates"})],c.prototype,"disabledDates",2);h([g({type:Number})],c.prototype,"focusedMonth",1);h([g({type:Number})],c.prototype,"focusedYear",1);h([g({type:Boolean})],c.prototype,"showWeekNumbers",2);h([g({attribute:!1})],c.prototype,"customizedDates",2);h([G('td[tabindex="0"]')],c.prototype,"_elFocusedCell",2);h([U("value")],c.prototype,"_valueChanged",1);c=h([j("gds-calendar")],c);export{O as i};
