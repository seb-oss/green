import{m as p,l as R}from"./runtime-CNluP0A8.js";import{i as z,x as m}from"./lit-element-Bx14lxc-.js";import{n as v,r as B,G as I,g as A}from"./gds-element-DKcDvDP5.js";import{a as P}from"./query-p8xgzTDt.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as T}from"./if-defined-CVqwUuaf.js";import{n as $}from"./when-BR7zwNJC.js";import{t as j}from"./tokens.style-Cct4pBht.js";import{T as K}from"./transitional-styles-unlae3Cp.js";import{w as U}from"./watch-tFciLXSI.js";function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function D(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||S(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var s=h(t),a=D(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function F(t,e){f(2,arguments);var s=h(t),a=D(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var o=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+a+1,0);var i=r.getDate();return o>=i?r:(s.setFullYear(r.getFullYear(),r.getMonth(),o),s)}var q={};function W(){return q}function x(t,e){var s,a,o,r,i,u,l,n;f(1,arguments);var b=W(),g=D((s=(a=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&o!==void 0?o:b.weekStartsOn)!==null&&a!==void 0?a:(l=b.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=h(t),M=y.getDay(),_=(M<g?7:0)+M-g;return y.setDate(y.getDate()-_),y.setHours(0,0,0,0),y}function Y(t){f(1,arguments);var e=h(t);return e.setHours(0,0,0,0),e}function V(t,e){f(2,arguments);var s=D(e),a=s*7;return k(t,a)}function w(t,e){f(2,arguments);var s=Y(t),a=Y(e);return s.getTime()===a.getTime()}function J(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var s;f(1,arguments);var a=t||{},o=h(a.start),r=h(a.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=o;l.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(h(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function X(t,e){f(1,arguments);var s=t||{},a=h(s.start),o=h(s.end),r=o.getTime();if(!(a.getTime()<=r))throw new RangeError("Invalid interval");var i=x(a,e),u=x(o,e);i.setHours(15),u.setHours(15),r=u.getTime();for(var l=[],n=i;n.getTime()<=r;)n.setHours(0),l.push(h(n)),n=V(n,1),n.setHours(15);return l}function Z(t){f(1,arguments);var e=h(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var s,a,o,r,i,u;f(1,arguments);var l=h(t),n=l.getFullYear(),b=W(),g=D((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:b.firstWeekContainsDate)!==null&&a!==void 0?a:(i=b.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setFullYear(n+1,0,g),y.setHours(0,0,0,0);var M=x(y,e),_=new Date(0);_.setFullYear(n,0,g),_.setHours(0,0,0,0);var L=x(_,e);return l.getTime()>=M.getTime()?n+1:l.getTime()>=L.getTime()?n:n-1}function te(t,e){var s,a,o,r,i,u;f(1,arguments);var l=W(),n=D((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&a!==void 0?a:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1),b=ee(t,e),g=new Date(0);g.setFullYear(b,0,n),g.setHours(0,0,0,0);var y=x(g,e);return y}var se=6048e5;function ae(t,e){f(1,arguments);var s=h(t),a=x(s,e).getTime()-te(s,e).getTime();return Math.round(a/se)+1}function re(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}function oe(t,e){f(2,arguments);var s=h(t),a=h(e);return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()}function ne(t,e){f(2,arguments);var s=h(t),a=D(e);return s.setHours(a),s}function ie(t,e){f(2,arguments);var s=D(e);return F(t,-s)}const le=z`
  @layer base, reset;

  @layer base {
    .controls {
      //box-shadow: 0 var(--gds-sys-space-4xs) 0 0 var(--gds-sys-color-l2-border-primary);
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-2xs) var(--gds-sys-space-m);
      }
    }

    thead {
      //box-shadow: 0 var(--gds-sys-space-4xs) 0 0 var(--gds-sys-color-l2-border-primary);
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
        //width: var(--gds-sys-space-5xl);
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-max);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &.short {
          width: var(--gds-sys-space-4xl);
        }

        &.long {
          width: var(--gds-sys-space-7xl);
        }

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          cursor: pointer;
        }

        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &:not(.disabled):hover {
          background: var(--gds-sys-color-l2-background-primary);
        }

        &[aria-selected='true']:not(.disabled):hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-background-tertiary),
            var(--gds-sys-color-l3-states-dark-hover)
          );
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &[aria-selected='false']:active:not(.disabled) {
          background: #dbdbdb; //-14%
        }

        &[aria-selected='true']:active:not(.disabled) {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-background-tertiary),
            var(--gds-sys-color-l3-states-dark-pressed)
          );
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          width: var(--gds-sys-space-3xl);
          height: var(--gds-sys-space-xl);
          font-size: var(--gds-sys-text-size-detail-s);
          line-height: var(--gds-sys-text-line-height-detail-s);

          &.short {
            width: var(--gds-sys-space-2xl);
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
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }

      .indicator-icon {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-l);
        height: var(--gds-sys-space-m);
        border-radius: var(--gds-sys-space-max);
        background-color: #e6f3ff; /*L3/notice-02*/
        inset: calc(100% + var(--gds-sys-space-2xs))
          calc(50% - var(--gds-sys-space-l) / 2) auto auto;
      }
    }
  }
`;function de(t,e){const s=Z(t),a=J(t),o=X({start:s,end:a},{weekStartsOn:1});for(;o.length<6;)o.push(k(o[o.length-1],7));return m`${e(o.map(r=>({days:Q({start:r,end:k(r,6)})})))}`}var ue=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,E=t=>{throw TypeError(t)},c=(t,e,s,a)=>{for(var o=a>1?void 0:a?ce(e,s):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(a?i(e,s,o):i(o))||o);return a&&o&&ue(e,s,o),o},he=(t,e,s)=>e.has(t)||E("Cannot "+s),fe=(t,e,s)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),C=(t,e,s)=>(he(t,e,"access private method"),s),O,N,H;let d=class extends I{constructor(){super(...arguments),fe(this,O),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.longDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",C(this,O,H)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table role="grid" aria-label="${T(this.label)}">
      ${$(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${$(this.showWeekNumbers,()=>m`<th></th>`)}
              ${$(this.longDayNames,()=>m`<th>${p("Mon")}</th>
                    <th>${p("Tue")}</th>
                    <th>${p("Wed")}</th>
                    <th>${p("Thu")}</th>
                    <th>${p("Fri")}</th>
                    <th>${p("Sat")}</th>
                    <th>${p("Sun")}</th>`,()=>m`<th>${p("Mon").substring(0,1)}</th>
                    <th>${p("Tue").substring(0,1)}</th>
                    <th>${p("Wed").substring(0,1)}</th>
                    <th>${p("Thu").substring(0,1)}</th>
                    <th>${p("Fri").substring(0,1)}</th>
                    <th>${p("Sat").substring(0,1)}</th>
                    <th>${p("Sun").substring(0,1)}</th>`)}
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${de(this.focusedDate,e=>m`
            ${e.map(s=>m`
                <tr role="row">
                  ${$(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${ae(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const o=this.customizedDates&&this.customizedDates.find(g=>w(g.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>w(g,a))),...o},i=!oe(this.focusedDate,a),u=(a<this.min||a>this.max)&&!w(a,this.min)&&!w(a,this.max),l=a.getDay()===0||a.getDay()===6,n=r.disabled||i||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${T(n?void 0:"gridcell")}"
                            class="${G({"custom-date":!!o,disabled:!!n,today:w(t,a)})}"
                            ?disabled=${n}
                            tabindex="${w(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&w(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:C(this,O,N).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${a.getDate()}</span
                            >

                            ${$(r.indicator,()=>m`<span
                                  class="indicator-${r==null?void 0:r.indicator}"
                                  style="--_color: ${r==null?void 0:r.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};O=new WeakSet;N=function(t){const e=ne(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};H=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||C(this,O,N).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=ie(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=F(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};d.styles=[j,le];d.shadowRootOptions={mode:"open",delegatesFocus:!0};c([v()],d.prototype,"value",2);c([v({type:Date})],d.prototype,"min",2);c([v({type:Date})],d.prototype,"max",2);c([v()],d.prototype,"focusedDate",2);c([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);c([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);c([v({type:Number})],d.prototype,"focusedMonth",1);c([v({type:Number})],d.prototype,"focusedYear",1);c([v({type:Boolean})],d.prototype,"showWeekNumbers",2);c([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);c([v({type:Boolean})],d.prototype,"hideDayNames",2);c([v({type:Boolean})],d.prototype,"longDayNames",2);c([v({attribute:!1})],d.prototype,"customizedDates",2);c([v()],d.prototype,"label",2);c([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);c([B()],d.prototype,"_currentLocale",2);c([P('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);c([U("value")],d.prototype,"_valueChanged",1);d=c([A("gds-calendar"),R()],d);export{d as G,w as i};
