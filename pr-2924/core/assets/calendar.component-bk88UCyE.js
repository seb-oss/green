import{i as z,b as y,v as R,n as v,w as I,f as j,$ as A,g as P,y as G,z as K,T as U,o as N,a as T,d as M,E as D}from"./iframe-D2OkY6_k.js";import{l as q}from"./localized-decorator-D9myHbBt.js";function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function b(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function h(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||S(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function k(t,e){f(2,arguments);var s=h(t),a=b(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function E(t,e){f(2,arguments);var s=h(t),a=b(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var r=s.getDate(),o=new Date(s.getTime());o.setMonth(s.getMonth()+a+1,0);var i=o.getDate();return r>=i?o:(s.setFullYear(o.getFullYear(),o.getMonth(),r),s)}var V={};function C(){return V}function x(t,e){var s,a,r,o,i,u,l,n;f(1,arguments);var m=C(),g=b((s=(a=(r=(o=e?.weekStartsOn)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:m.weekStartsOn)!==null&&a!==void 0?a:(l=m.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=h(t),$=p.getDay(),_=($<g?7:0)+$-g;return p.setDate(p.getDate()-_),p.setHours(0,0,0,0),p}function F(t){f(1,arguments);var e=h(t);return e.setHours(0,0,0,0),e}function J(t,e){f(2,arguments);var s=b(e),a=s*7;return k(t,a)}function w(t,e){f(2,arguments);var s=F(t),a=F(e);return s.getTime()===a.getTime()}function Q(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function X(t,e){var s;f(1,arguments);var a=t||{},r=h(a.start),o=h(a.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=r;l.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(h(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function Z(t,e){f(1,arguments);var s=t||{},a=h(s.start),r=h(s.end),o=r.getTime();if(!(a.getTime()<=o))throw new RangeError("Invalid interval");var i=x(a,e),u=x(r,e);i.setHours(15),u.setHours(15),o=u.getTime();for(var l=[],n=i;n.getTime()<=o;)n.setHours(0),l.push(h(n)),n=J(n,1),n.setHours(15);return l}function ee(t){f(1,arguments);var e=h(t);return e.setDate(1),e.setHours(0,0,0,0),e}function te(t,e){var s,a,r,o,i,u;f(1,arguments);var l=h(t),n=l.getFullYear(),m=C(),g=b((s=(a=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:m.firstWeekContainsDate)!==null&&a!==void 0?a:(i=m.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,g),p.setHours(0,0,0,0);var $=x(p,e),_=new Date(0);_.setFullYear(n,0,g),_.setHours(0,0,0,0);var B=x(_,e);return l.getTime()>=$.getTime()?n+1:l.getTime()>=B.getTime()?n:n-1}function se(t,e){var s,a,r,o,i,u;f(1,arguments);var l=C(),n=b((s=(a=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:l.firstWeekContainsDate)!==null&&a!==void 0?a:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1),m=te(t,e),g=new Date(0);g.setFullYear(m,0,n),g.setHours(0,0,0,0);var p=x(g,e);return p}var ae=6048e5;function re(t,e){f(1,arguments);var s=h(t),a=x(s,e).getTime()-se(s,e).getTime();return Math.round(a/ae)+1}function oe(t){f(1,arguments);var e=h(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(0,0,0,0),e}function ne(t,e){f(2,arguments);var s=h(t),a=h(e);return s.getFullYear()===a.getFullYear()&&s.getMonth()===a.getMonth()}function ie(t,e){f(2,arguments);var s=h(t),a=b(e);return s.setHours(a),s}function le(t,e){f(2,arguments);var s=b(e);return E(t,-s)}const de=z`
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
          font: var(--gds-sys-text-body-s-book);
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
        background: var(--gds-sys-color-l3-neutral-03);
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
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-neutral-04);
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

      &.outside-month:not(.disabled) {
        color: var(--gds-sys-color-content-neutral-02);
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
          var(--gds-sys-color-l3-neutral-03),
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
        font: var(--gds-sys-text-body-s-book);
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
        background: var(--gds-sys-color-l3-neutral-03);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;function ue(t,e){const s=ee(t),a=Q(t),r=Z({start:s,end:a},{weekStartsOn:1});for(;r.length<6;)r.push(k(r[r.length-1],7));return y`${e(r.map(o=>({days:X({start:o,end:k(o,6)})})))}`}var ce=Object.defineProperty,he=Object.getOwnPropertyDescriptor,H=t=>{throw TypeError(t)},c=(t,e,s,a)=>{for(var r=a>1?void 0:a?he(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(a?i(e,s,r):i(r))||r);return a&&r&&ce(e,s,r),r},fe=(t,e,s)=>e.has(t)||H("Cannot "+s),ge=(t,e,s)=>e.has(t)?H("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),W=(t,e,s)=>(fe(t,e,"access private method"),s),O,Y,L;let d=class extends K{constructor(){super(...arguments),ge(this,O),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=oe(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),U.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",W(this,O,L)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return y`<table
      role="grid"
      aria-label="${N(this.label)}"
      class="${T({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${M(!this.hideDayNames,()=>y`<thead role="rowgroup">
            <tr role="row">
              ${M(this.showWeekNumbers,()=>y`<th></th>`)}
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
        ${ue(this.focusedDate,e=>y`
            ${e.map(s=>y`
                <tr role="row">
                  ${M(this.showWeekNumbers,()=>y`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${re(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const r=this.customizedDates&&this.customizedDates.find(g=>w(g.date,a)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(g=>w(g,a))),...r},i=!ne(this.focusedDate,a),u=(a<this.min||a>this.max)&&!w(a,this.min)&&!w(a,this.max),l=a.getDay()===0||a.getDay()===6,n=o.disabled||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?y`<td inert></td>`:y`
                          <td
                            role="${N(n?void 0:"gridcell")}"
                            class="${T({small:this.size==="small","custom-date":!!r,disabled:!!n,today:w(t,a),"outside-month":i})}"
                            ?disabled=${n}
                            tabindex="${w(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&w(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:W(this,O,Y).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${M(o.indicator,()=>y`<span
                                  class="indicator-${o?.indicator}"
                                  style="--_color: ${o?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};O=new WeakSet;Y=function(t){const e=ie(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};L=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=k(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=k(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=k(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=k(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||W(this,O,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=le(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=E(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};d.styles=[R,de];d.shadowRootOptions={mode:"open",delegatesFocus:!0};c([v()],d.prototype,"value",2);c([v({type:Date})],d.prototype,"min",2);c([v({type:Date})],d.prototype,"max",2);c([v()],d.prototype,"focusedDate",2);c([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);c([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);c([v({type:Number})],d.prototype,"focusedMonth",1);c([v({type:Number})],d.prototype,"focusedYear",1);c([v({reflect:!0})],d.prototype,"size",2);c([v({type:Boolean})],d.prototype,"showWeekNumbers",2);c([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);c([v({type:Boolean})],d.prototype,"hideDayNames",2);c([v({attribute:!1})],d.prototype,"customizedDates",2);c([v()],d.prototype,"label",2);c([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);c([I()],d.prototype,"_currentLocale",2);c([j('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);c([A("value")],d.prototype,"_valueChanged",1);d=c([P("gds-calendar"),G({labelledBy:"table",describedBy:"table"}),q()],d);export{d as G,w as i,oe as l};
