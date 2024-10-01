import{k as b,i as A}from"./lit-element-1d72f0ce.js";import{R as P}from"./class-map-f04c1558.js";import{t as F}from"./if-defined-5f576255.js";import{n as x}from"./when-748fcf30.js";import{n as g,g as j,G as z}from"./gds-element-86064462.js";import{a as G}from"./query-b9d3c2af.js";import{m as k}from"./runtime-c06dc943.js";import{T as K}from"./transitional-styles-8ea9588a.js";import{w as U}from"./watch-c4961afe.js";import{t as q}from"./tokens.style-01187a75.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function w(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function $(t,e){f(2,arguments);var a=c(t),r=w(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function R(t,e){f(2,arguments);var a=c(t),r=w(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var i=s.getDate();return o>=i?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}var V={};function T(){return V}function O(t,e){var a,r,o,s,i,d,l,n;f(1,arguments);var m=T(),v=w((a=(r=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&o!==void 0?o:m.weekStartsOn)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var D=c(t),p=D.getDay(),y=(p<v?7:0)+p-v;return D.setDate(D.getDate()-y),D.setHours(0,0,0,0),D}function E(t){f(1,arguments);var e=c(t);return e.setHours(0,0,0,0),e}function J(t,e){f(2,arguments);var a=w(e),r=a*7;return $(t,r)}function _(t,e){f(2,arguments);var a=E(t),r=E(e);return a.getTime()===r.getTime()}function Q(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function X(t,e){var a;f(1,arguments);var r=t||{},o=c(r.start),s=c(r.end),i=s.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var d=[],l=o;l.setHours(0,0,0,0);var n=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)d.push(c(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return d}function Z(t,e){f(1,arguments);var a=t||{},r=c(a.start),o=c(a.end),s=o.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var i=O(r,e),d=O(o,e);i.setHours(15),d.setHours(15),s=d.getTime();for(var l=[],n=i;n.getTime()<=s;)n.setHours(0),l.push(c(n)),n=J(n,1),n.setHours(15);return l}function ee(t){f(1,arguments);var e=c(t);return e.setDate(1),e.setHours(0,0,0,0),e}function te(t,e){var a,r,o,s,i,d,l,n;f(1,arguments);var m=c(t),v=m.getFullYear(),D=T(),p=w((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:D.firstWeekContainsDate)!==null&&r!==void 0?r:(l=D.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setFullYear(v+1,0,p),y.setHours(0,0,0,0);var B=O(y,e),W=new Date(0);W.setFullYear(v,0,p),W.setHours(0,0,0,0);var L=O(W,e);return m.getTime()>=B.getTime()?v+1:m.getTime()>=L.getTime()?v:v-1}function ae(t,e){var a,r,o,s,i,d,l,n;f(1,arguments);var m=T(),v=w((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=te(t,e),p=new Date(0);p.setFullYear(D,0,v),p.setHours(0,0,0,0);var y=O(p,e);return y}var re=6048e5;function se(t,e){f(1,arguments);var a=c(t),r=O(a,e).getTime()-ae(a,e).getTime();return Math.round(r/re)+1}function oe(t){f(1,arguments);var e=c(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function ne(t,e){f(2,arguments);var a=c(t),r=c(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ie(t,e){f(2,arguments);var a=c(t),r=w(e);return a.setHours(r),a}function le(t,e){f(2,arguments);var a=w(e);return R(t,-a)}function ue(t,e){const a=ee(t),r=Q(t),o=Z({start:a,end:r},{weekStartsOn:1});for(;o.length<6;)o.push($(o[o.length-1],7));return b`${e(o.map(s=>({days:X({start:s,end:$(s,6)})})))}`}const de=A`
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
`;var ce=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var o=r>1?void 0:r?fe(e,a):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(r?i(e,a,o):i(o))||o);return r&&o&&ce(e,a,o),o},he=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},H=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},S=(t,e,a)=>(he(t,e,"access private method"),a),C,N,Y,I;let u=class extends z{constructor(){super(...arguments),H(this,C),H(this,Y),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=oe(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",S(this,Y,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return b`<table role="grid" aria-label="${F(this.label)}">
      ${x(!this.hideDayNames,()=>b`<thead role="rowgroup">
            <tr role="row">
              ${x(this.showWeekNumbers,()=>b`<th></th>`)}
              <th>${k("Mon")}</th>
              <th>${k("Tue")}</th>
              <th>${k("Wed")}</th>
              <th>${k("Thu")}</th>
              <th>${k("Fri")}</th>
              <th>${k("Sat")}</th>
              <th>${k("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ue(this.focusedDate,e=>b`
            ${e.map(a=>b`
                <tr role="row">
                  ${x(this.showWeekNumbers,()=>b`<td class="week-number" scope="row">
                        ${se(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(v=>_(v.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(v=>_(v,r))),...o},i=!ne(this.focusedDate,r),d=(r<this.min||r>this.max)&&!_(r,this.min)&&!_(r,this.max),l=r.getDay()===0||r.getDay()===6,n=s.disabled||i||d||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?b`<td inert></td>`:b`
                          <td
                            role="${F(n?void 0:"gridcell")}"
                            class="${P({"custom-date":!!o,disabled:!!n,today:_(t,r)})}"
                            ?disabled=${n}
                            tabindex="${_(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&_(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>n?null:S(this,C,N).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${s?s==null?void 0:s.color:""}"
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};C=new WeakSet;N=function(t){const e=ie(t,12);this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))};Y=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=$(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=$(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=$(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=$(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||S(this,C,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=le(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=R(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};u.styles=[q,de];u.shadowRootOptions={mode:"open",delegatesFocus:!0};h([g()],u.prototype,"value",2);h([g({type:Date})],u.prototype,"min",2);h([g({type:Date})],u.prototype,"max",2);h([g()],u.prototype,"focusedDate",2);h([g({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);h([g({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);h([g({type:Number})],u.prototype,"focusedMonth",1);h([g({type:Number})],u.prototype,"focusedYear",1);h([g({type:Boolean})],u.prototype,"showWeekNumbers",2);h([g({type:Boolean})],u.prototype,"hideExtraneousDays",2);h([g({type:Boolean})],u.prototype,"hideDayNames",2);h([g({attribute:!1})],u.prototype,"customizedDates",2);h([g()],u.prototype,"label",2);h([g({attribute:!1})],u.prototype,"dateLabelTemplate",2);h([G('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);h([U("value")],u.prototype,"_valueChanged",1);u=h([j("gds-calendar")],u);export{_ as i};
