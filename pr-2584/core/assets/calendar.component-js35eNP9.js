import{i as z,x as m,t as R,n as v,I,d as j,a8 as A,J as P,a3 as G,o as N,a as T,b as M,O as D,g as K}from"./iframe-BEPLVs1y.js";import{l as U}from"./localized-decorator-BmLDxFUn.js";function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function b(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||S(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var s=h(t),a=b(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function E(t,e){f(2,arguments);var s=h(t),a=b(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var o=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+a+1,0);var i=r.getDate();return o>=i?r:(s.setFullYear(r.getFullYear(),r.getMonth(),o),s)}var q={};function C(){return q}function x(t,e){var s,a,o,r,i,u,l,n;f(1,arguments);var y=C(),g=b((s=(a=(o=(r=e==null?void 0:e.weekStartsOn)!==null&&r!==void 0?r:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&o!==void 0?o:y.weekStartsOn)!==null&&a!==void 0?a:(l=y.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=h(t),O=p.getDay(),_=(O<g?7:0)+O-g;return p.setDate(p.getDate()-_),p.setHours(0,0,0,0),p}function F(t){f(1,arguments);var e=h(t);return e.setHours(0,0,0,0),e}function J(t,e){f(2,arguments);var s=b(e),a=s*7;return k(t,a)}function w(t,e){f(2,arguments);var s=F(t),a=F(e);return s.getTime()===a.getTime()}function V(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var s;f(1,arguments);var a=t||{},o=h(a.start),r=h(a.end),i=r.getTime();if(!(o.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=o;l.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(h(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function X(t,e){f(1,arguments);var s=t||{},a=h(s.start),o=h(s.end),r=o.getTime();if(!(a.getTime()<=r))throw new RangeError("Invalid interval");var i=x(a,e),u=x(o,e);i.setHours(15),u.setHours(15),r=u.getTime();for(var l=[],n=i;n.getTime()<=r;)n.setHours(0),l.push(h(n)),n=J(n,1),n.setHours(15);return l}function Z(t){f(1,arguments);var e=h(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var s,a,o,r,i,u;f(1,arguments);var l=h(t),n=l.getFullYear(),y=C(),g=b((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:y.firstWeekContainsDate)!==null&&a!==void 0?a:(i=y.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,g),p.setHours(0,0,0,0);var O=x(p,e),_=new Date(0);_.setFullYear(n,0,g),_.setHours(0,0,0,0);var B=x(_,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=B.getTime()?n:n-1}function te(t,e){var s,a,o,r,i,u;f(1,arguments);var l=C(),n=b((s=(a=(o=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&o!==void 0?o:l.firstWeekContainsDate)!==null&&a!==void 0?a:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1),y=ee(t,e),g=new Date(0);g.setFullYear(y,0,n),g.setHours(0,0,0,0);var p=x(g,e);return p}var se=6048e5;function ae(t,e){f(1,arguments);var s=h(t),a=x(s,e).getTime()-te(s,e).getTime();return Math.round(a/se)+1}function re(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}function oe(t,e){f(2,arguments);var s=h(t),a=h(e);return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()}function ne(t,e){f(2,arguments);var s=h(t),a=b(e);return s.setHours(a),s}function ie(t,e){f(2,arguments);var s=b(e);return E(t,-s)}const le=z`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
      --columns: 7;
    }

    table {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: var(--gds-sys-space-xs);
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-3xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }

      &.show-week-numbers {
        --columns: 8;
      }
    }

    tr,
    thead,
    tbody {
      display: contents;
    }

    th,
    td {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--gds-sys-space-2xl);
      width: var(--gds-sys-space-2xl);
      box-sizing: border-box;
      user-select: none;
    }

    th {
      font-weight: normal;
    }

    td {
      position: relative;
      border-width: var(--gds-sys-space-4xs);
      border-style: solid;
      border-color: transparent;
      border-radius: var(--gds-sys-radius-max);
      transition: background 0.2s;
      outline-style: solid;
      outline-color: transparent;
      outline-width: 0px;
      outline-offset: var(--gds-sys-space-4xs);

      &.short {
        width: var(--gds-sys-space-4xl);
      }

      &.wide {
        width: var(--gds-sys-space-5xl);
      }

      &.long {
        width: var(--gds-sys-space-7xl);
      }

      &:not(.disabled):hover,
      &[aria-selected='true'] {
        cursor: pointer;
      }

      &[aria-selected='true'] {
        color: var(--gds-sys-color-content-neutral-03);
        background: var(--gds-sys-color-l3-neutral-01);
      }

      &:not(.disabled):hover {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
      }

      &[aria-selected='true']:not(.disabled):hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-strong);
      }

      &.disabled:not(.week-number) {
        background: var(--gds-sys-color-l3-disabled-01);
        color: var(--gds-sys-color-content-disabled-01);
        cursor: not-allowed;
      }

      &.disabled.week-number {
        color: var(--gds-sys-color-content-neutral-02);
        cursor: default;
      }

      &[aria-selected='false']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }

      &[aria-selected='true']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:focus-visible {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-width: var(--gds-sys-space-4xs);
      }

      &.small {
        width: var(--gds-sys-space-xl);
        height: var(--gds-sys-space-xl);
        font: var(--gds-sys-text-body-book-s);
        line-height: var(--gds-sys-text-line-height-detail-s);

        &.short {
          width: var(--gds-sys-space-2xl);
        }

        &.wide {
          width: var(--gds-sys-space-3xl);
        }

        &.long {
          width: var(--gds-sys-space-6xl);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;function de(t,e){const s=Z(t),a=V(t),o=X({start:s,end:a},{weekStartsOn:1});for(;o.length<6;)o.push(k(o[o.length-1],7));return m`${e(o.map(r=>({days:Q({start:r,end:k(r,6)})})))}`}var ue=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},c=(t,e,s,a)=>{for(var o=a>1?void 0:a?ce(e,s):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(o=(a?i(e,s,o):i(o))||o);return a&&o&&ue(e,s,o),o},he=(t,e,s)=>e.has(t)||H("Cannot "+s),fe=(t,e,s)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),W=(t,e,s)=>(he(t,e,"access private method"),s),$,Y,L;let d=class extends P{constructor(){super(...arguments),fe(this,$),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=re(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",W(this,$,L)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table
      role="grid"
      aria-label="${N(this.label)}"
      class="${T({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${M(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${D("Mon").substring(0,1)}</th>
              <th>${D("Tue").substring(0,1)}</th>
              <th>${D("Wed").substring(0,1)}</th>
              <th>${D("Thu").substring(0,1)}</th>
              <th>${D("Fri").substring(0,1)}</th>
              <th>${D("Sat").substring(0,1)}</th>
              <th>${D("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${de(this.focusedDate,e=>m`
            ${e.map(s=>m`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${ae(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const o=this.customizedDates&&this.customizedDates.find(g=>w(g.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>w(g,a))),...o},i=!oe(this.focusedDate,a),u=(a<this.min||a>this.max)&&!w(a,this.min)&&!w(a,this.max),l=a.getDay()===0||a.getDay()===6,n=r.disabled||i||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${N(n?void 0:"gridcell")}"
                            class="${T({small:this.size==="small","custom-date":!!o,disabled:!!n,today:w(t,a)})}"
                            ?disabled=${n}
                            tabindex="${w(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&w(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:W(this,$,Y).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r==null?void 0:r.color:""}"
                              >${a.getDate()}</span
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};$=new WeakSet;Y=function(t){const e=ne(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};L=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||W(this,$,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=ie(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=E(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};d.styles=[R,le];d.shadowRootOptions={mode:"open",delegatesFocus:!0};c([v()],d.prototype,"value",2);c([v({type:Date})],d.prototype,"min",2);c([v({type:Date})],d.prototype,"max",2);c([v()],d.prototype,"focusedDate",2);c([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);c([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);c([v({type:Number})],d.prototype,"focusedMonth",1);c([v({type:Number})],d.prototype,"focusedYear",1);c([v({reflect:!0})],d.prototype,"size",2);c([v({type:Boolean})],d.prototype,"showWeekNumbers",2);c([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);c([v({type:Boolean})],d.prototype,"hideDayNames",2);c([v({attribute:!1})],d.prototype,"customizedDates",2);c([v()],d.prototype,"label",2);c([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);c([I()],d.prototype,"_currentLocale",2);c([j('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);c([A("value")],d.prototype,"_valueChanged",1);d=c([K("gds-calendar"),U()],d);export{d as G,w as i,re as l};
