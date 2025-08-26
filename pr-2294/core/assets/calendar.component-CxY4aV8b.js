import{m as D,l as R}from"./runtime-CNluP0A8.js";import{i as I,x as m}from"./lit-element-Bx14lxc-.js";import{n as p,r as B,G as z,g as A}from"./gds-element-DKcDvDP5.js";import{a as P}from"./query-p8xgzTDt.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as Y}from"./if-defined-CVqwUuaf.js";import{n as C}from"./when-BR7zwNJC.js";import{t as j}from"./tokens.style-Cct4pBht.js";import{T as U}from"./transitional-styles-UMX2EhVn.js";import{w as K}from"./watch-tFciLXSI.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){v(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function w(t,e){v(2,arguments);var a=h(t),s=k(e);return isNaN(s)?new Date(NaN):(s&&a.setDate(a.getDate()+s),a)}function F(t,e){v(2,arguments);var a=h(t),s=k(e);if(isNaN(s))return new Date(NaN);if(!s)return a;var o=a.getDate(),r=new Date(a.getTime());r.setMonth(a.getMonth()+s+1,0);var i=r.getDate();return o>=i?r:(a.setFullYear(r.getFullYear(),r.getMonth(),o),a)}var q={};function W(){return q}function _(t,e){var a,s,o,r,i,d,l,n;v(1,arguments);var y=W(),f=k((a=(s=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&o!==void 0?o:y.weekStartsOn)!==null&&s!==void 0?s:(l=y.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=h(t),O=g.getDay(),$=(O<f?7:0)+O-f;return g.setDate(g.getDate()-$),g.setHours(0,0,0,0),g}function N(t){v(1,arguments);var e=h(t);return e.setHours(0,0,0,0),e}function V(t,e){v(2,arguments);var a=k(e),s=a*7;return w(t,s)}function b(t,e){v(2,arguments);var a=N(t),s=N(e);return a.getTime()===s.getTime()}function J(t){v(1,arguments);var e=h(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var a;v(1,arguments);var s=t||{},o=h(s.start),r=h(s.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var d=[],l=o;l.setHours(0,0,0,0);var n=Number((a=void 0)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)d.push(h(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return d}function X(t,e){v(1,arguments);var a=t||{},s=h(a.start),o=h(a.end),r=o.getTime();if(!(s.getTime()<=r))throw new RangeError("Invalid interval");var i=_(s,e),d=_(o,e);i.setHours(15),d.setHours(15),r=d.getTime();for(var l=[],n=i;n.getTime()<=r;)n.setHours(0),l.push(h(n)),n=V(n,1),n.setHours(15);return l}function Z(t){v(1,arguments);var e=h(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var a,s,o,r,i,d;v(1,arguments);var l=h(t),n=l.getFullYear(),y=W(),f=k((a=(s=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:y.firstWeekContainsDate)!==null&&s!==void 0?s:(i=y.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setFullYear(n+1,0,f),g.setHours(0,0,0,0);var O=_(g,e),$=new Date(0);$.setFullYear(n,0,f),$.setHours(0,0,0,0);var L=_($,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=L.getTime()?n:n-1}function te(t,e){var a,s,o,r,i,d;v(1,arguments);var l=W(),n=k((a=(s=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&s!==void 0?s:(i=l.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1),y=ee(t,e),f=new Date(0);f.setFullYear(y,0,n),f.setHours(0,0,0,0);var g=_(f,e);return g}var ae=6048e5;function se(t,e){v(1,arguments);var a=h(t),s=_(a,e).getTime()-te(a,e).getTime();return Math.round(s/ae)+1}function re(t){v(1,arguments);var e=h(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function oe(t,e){v(2,arguments);var a=h(t),s=h(e);return a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()}function ne(t,e){v(2,arguments);var a=k(e);return F(t,-a)}const ie=I`
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
        var(--gds-sys-color-l2-border-primary);
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
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
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
`;function le(t,e){const a=Z(t),s=J(t),o=X({start:a,end:s},{weekStartsOn:1});for(;o.length<6;)o.push(w(o[o.length-1],7));return m`${e(o.map(r=>({days:Q({start:r,end:w(r,6)})})))}`}var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,E=t=>{throw TypeError(t)},c=(t,e,a,s)=>{for(var o=s>1?void 0:s?de(e,a):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(s?i(e,a,o):i(o))||o);return s&&o&&ue(e,a,o),o},ce=(t,e,a)=>e.has(t)||E("Cannot "+a),fe=(t,e,a)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),S=(t,e,a)=>(ce(t,e,"access private method"),a),x,T,H;let u=class extends z{constructor(){super(...arguments),fe(this,x),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.utcHours=12,this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setUTCHours(this.utcHours,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",S(this,x,H)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table role="grid" aria-label="${Y(this.label)}">
      ${C(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${D("Mon")}</th>
              <th>${D("Tue")}</th>
              <th>${D("Wed")}</th>
              <th>${D("Thu")}</th>
              <th>${D("Fri")}</th>
              <th>${D("Sat")}</th>
              <th>${D("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${le(this.focusedDate,e=>m`
            ${e.map(a=>m`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${se(a.days[0])}
                      </td>`)}
                  ${a.days.map(s=>{const o=this.customizedDates&&this.customizedDates.find(f=>b(f.date,s)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(f=>b(f,s))),...o},i=!oe(this.focusedDate,s),d=(s<this.min||s>this.max)&&!b(s,this.min)&&!b(s,this.max),l=s.getDay()===0||s.getDay()===6,n=r.disabled||i||d||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${Y(n?void 0:"gridcell")}"
                            class="${G({"custom-date":!!o,disabled:!!n,today:b(t,s)})}"
                            ?disabled=${n}
                            tabindex="${b(this.focusedDate,s)?0:-1}"
                            aria-selected="${this.value&&b(this.value,s)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(s)}"
                            @click=${()=>n?null:S(this,x,T).call(this,s)}
                            id="dateCell-${s.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${s.getDate()}</span
                            >

                            ${C(r.indicator,()=>m`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};x=new WeakSet;T=function(t){t.setUTCHours(this.utcHours,0,0,0);const e=t;this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};H=function(t){var s;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=w(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=w(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=w(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=w(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||S(this,x,T).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=F(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1})&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};u.styles=[j,ie];u.shadowRootOptions={mode:"open",delegatesFocus:!0};c([p()],u.prototype,"value",2);c([p({type:Date})],u.prototype,"min",2);c([p({type:Date})],u.prototype,"max",2);c([p({type:Number,attribute:"utc-hours"})],u.prototype,"utcHours",2);c([p()],u.prototype,"focusedDate",2);c([p({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);c([p({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);c([p({type:Number})],u.prototype,"focusedMonth",1);c([p({type:Number})],u.prototype,"focusedYear",1);c([p({type:Boolean})],u.prototype,"showWeekNumbers",2);c([p({type:Boolean})],u.prototype,"hideExtraneousDays",2);c([p({type:Boolean})],u.prototype,"hideDayNames",2);c([p({attribute:!1})],u.prototype,"customizedDates",2);c([p()],u.prototype,"label",2);c([p({attribute:!1})],u.prototype,"dateLabelTemplate",2);c([B()],u.prototype,"_currentLocale",2);c([P('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);c([K("value")],u.prototype,"_valueChanged",1);u=c([A("gds-calendar"),R()],u);export{u as G,b as i};
