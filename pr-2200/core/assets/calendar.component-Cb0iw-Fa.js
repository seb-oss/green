import{m as y}from"./runtime-BL31MtW8.js";import{l as L}from"./localized-decorator-DtmrKsyB.js";import{i as R,x as m}from"./lit-element-Bx14lxc-.js";import{n as v,r as B,G as z,g as A}from"./custom-element-scoping-CNGU1oQ0.js";import{a as I}from"./query-p8xgzTDt.js";import{e as P}from"./class-map-CXsQwv0r.js";import{o as M}from"./if-defined-CVqwUuaf.js";import{n as C}from"./when-BR7zwNJC.js";import{t as G}from"./tokens.style-DQsNuKSy.js";import{T as q}from"./transitional-styles-lz-XxrEG.js";import{w as K}from"./watch-tFciLXSI.js";import{r as p,t as f,b as k,a as S,l as U,i as j}from"./index-D0DAbj6e.js";function w(t,e){p(2,arguments);var a=f(t),s=k(e);return isNaN(s)?new Date(NaN):(s&&a.setDate(a.getDate()+s),a)}var V={};function T(){return V}function _(t,e){var a,s,r,o,i,u,l,n;p(1,arguments);var D=T(),h=k((a=(s=(r=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:D.weekStartsOn)!==null&&s!==void 0?s:(l=D.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=f(t),O=g.getDay(),$=(O<h?7:0)+O-h;return g.setDate(g.getDate()-$),g.setHours(0,0,0,0),g}function E(t){p(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}function J(t,e){p(2,arguments);var a=k(e),s=a*7;return w(t,s)}function b(t,e){p(2,arguments);var a=E(t),s=E(e);return a.getTime()===s.getTime()}function Q(t){p(1,arguments);var e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function X(t,e){var a;p(1,arguments);var s=t||{},r=f(s.start),o=f(s.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=r;l.setHours(0,0,0,0);var n=Number((a=void 0)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(f(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function Z(t,e){p(1,arguments);var a=t||{},s=f(a.start),r=f(a.end),o=r.getTime();if(!(s.getTime()<=o))throw new RangeError("Invalid interval");var i=_(s,e),u=_(r,e);i.setHours(15),u.setHours(15),o=u.getTime();for(var l=[],n=i;n.getTime()<=o;)n.setHours(0),l.push(f(n)),n=J(n,1),n.setHours(15);return l}function ee(t){p(1,arguments);var e=f(t);return e.setDate(1),e.setHours(0,0,0,0),e}function te(t,e){var a,s,r,o,i,u;p(1,arguments);var l=f(t),n=l.getFullYear(),D=T(),h=k((a=(s=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:D.firstWeekContainsDate)!==null&&s!==void 0?s:(i=D.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setFullYear(n+1,0,h),g.setHours(0,0,0,0);var O=_(g,e),$=new Date(0);$.setFullYear(n,0,h),$.setHours(0,0,0,0);var H=_($,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=H.getTime()?n:n-1}function ae(t,e){var a,s,r,o,i,u;p(1,arguments);var l=T(),n=k((a=(s=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:l.firstWeekContainsDate)!==null&&s!==void 0?s:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1),D=te(t,e),h=new Date(0);h.setFullYear(D,0,n),h.setHours(0,0,0,0);var g=_(h,e);return g}var se=6048e5;function re(t,e){p(1,arguments);var a=f(t),s=_(a,e).getTime()-ae(a,e).getTime();return Math.round(s/se)+1}function oe(t,e){p(2,arguments);var a=f(t),s=k(e);return a.setHours(s),a}function ne(t,e){p(2,arguments);var a=k(e);return S(t,-a)}const ie=R`
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
`;function le(t,e){const a=ee(t),s=Q(t),r=Z({start:a,end:s},{weekStartsOn:1});for(;r.length<6;)r.push(w(r[r.length-1],7));return m`${e(r.map(o=>({days:X({start:o,end:w(o,6)})})))}`}var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,F=t=>{throw TypeError(t)},c=(t,e,a,s)=>{for(var r=s>1?void 0:s?ue(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(s?i(e,a,r):i(r))||r);return s&&r&&de(e,a,r),r},ce=(t,e,a)=>e.has(t)||F("Cannot "+a),he=(t,e,a)=>e.has(t)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),W=(t,e,a)=>(ce(t,e,"access private method"),a),x,Y,N;let d=class extends z{constructor(){super(...arguments),he(this,x),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=U(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),q.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",W(this,x,N)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table role="grid" aria-label="${M(this.label)}">
      ${C(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>m`<th></th>`)}
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
        ${le(this.focusedDate,e=>m`
            ${e.map(a=>m`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>m`<td class="week-number" scope="row">
                        ${re(a.days[0])}
                      </td>`)}
                  ${a.days.map(s=>{const r=this.customizedDates&&this.customizedDates.find(h=>b(h.date,s)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>b(h,s))),...r},i=!j(this.focusedDate,s),u=(s<this.min||s>this.max)&&!b(s,this.min)&&!b(s,this.max),l=s.getDay()===0||s.getDay()===6,n=o.disabled||i||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${M(n?void 0:"gridcell")}"
                            class="${P({"custom-date":!!r,disabled:!!n,today:b(t,s)})}"
                            ?disabled=${n}
                            tabindex="${b(this.focusedDate,s)?0:-1}"
                            aria-selected="${this.value&&b(this.value,s)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(s)}"
                            @click=${()=>n?null:W(this,x,Y).call(this,s)}
                            id="dateCell-${s.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o==null?void 0:o.color:""}"
                              >${s.getDate()}</span
                            >

                            ${C(o.indicator,()=>m`<span
                                  class="indicator-${o==null?void 0:o.indicator}"
                                  style="--_color: ${o==null?void 0:o.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};x=new WeakSet;Y=function(t){const e=oe(t,12);this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))};N=function(t){var s;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=w(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=w(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=w(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=w(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||W(this,x,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=S(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var r;(r=this._elFocusedCell)==null||r.focus()}))};d.styles=[G,ie];d.shadowRootOptions={mode:"open",delegatesFocus:!0};c([v()],d.prototype,"value",2);c([v({type:Date})],d.prototype,"min",2);c([v({type:Date})],d.prototype,"max",2);c([v()],d.prototype,"focusedDate",2);c([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);c([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);c([v({type:Number})],d.prototype,"focusedMonth",1);c([v({type:Number})],d.prototype,"focusedYear",1);c([v({type:Boolean})],d.prototype,"showWeekNumbers",2);c([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);c([v({type:Boolean})],d.prototype,"hideDayNames",2);c([v({attribute:!1})],d.prototype,"customizedDates",2);c([v()],d.prototype,"label",2);c([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);c([B()],d.prototype,"_currentLocale",2);c([I('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);c([K("value")],d.prototype,"_valueChanged",1);d=c([A("gds-calendar"),L()],d);export{d as G,b as i};
