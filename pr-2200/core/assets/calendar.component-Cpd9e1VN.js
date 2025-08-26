import{m as b,l as L}from"./runtime-CNluP0A8.js";import{i as z,x as m}from"./lit-element-Bx14lxc-.js";import{n as v,r as B}from"./Reflect-DJ7r0WLU.js";import{a as R}from"./query-p8xgzTDt.js";import{o as M,e as S}from"./if-defined-BAXgs-ZI.js";import{n as C}from"./when-BR7zwNJC.js";import{G as A,g as I}from"./gds-element-DJNCW3iR.js";import{t as P}from"./tokens.style-iX6aIK9m.js";import{T as G}from"./transitional-styles-DRTvhbpp.js";import{w as q}from"./watch-tFciLXSI.js";import{r as f,t as g,b as x,l as K,i as U,s as j,a as V}from"./index-C4WLrI9v.js";function w(t,e){f(2,arguments);var s=g(t),a=x(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}var J={};function T(){return J}function k(t,e){var s,a,r,o,i,u,l,n;f(1,arguments);var y=T(),h=x((s=(a=(r=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:y.weekStartsOn)!==null&&a!==void 0?a:(l=y.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&s!==void 0?s:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=g(t),O=p.getDay(),_=(O<h?7:0)+O-h;return p.setDate(p.getDate()-_),p.setHours(0,0,0,0),p}function E(t){f(1,arguments);var e=g(t);return e.setHours(0,0,0,0),e}function Q(t,e){f(2,arguments);var s=x(e),a=s*7;return w(t,a)}function D(t,e){f(2,arguments);var s=E(t),a=E(e);return s.getTime()===a.getTime()}function X(t){f(1,arguments);var e=g(t),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function Z(t,e){var s;f(1,arguments);var a=t||{},r=g(a.start),o=g(a.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var u=[],l=r;l.setHours(0,0,0,0);var n=Number((s=void 0)!==null&&s!==void 0?s:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)u.push(g(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return u}function ee(t,e){f(1,arguments);var s=t||{},a=g(s.start),r=g(s.end),o=r.getTime();if(!(a.getTime()<=o))throw new RangeError("Invalid interval");var i=k(a,e),u=k(r,e);i.setHours(15),u.setHours(15),o=u.getTime();for(var l=[],n=i;n.getTime()<=o;)n.setHours(0),l.push(g(n)),n=Q(n,1),n.setHours(15);return l}function te(t){f(1,arguments);var e=g(t);return e.setDate(1),e.setHours(0,0,0,0),e}function se(t,e){var s,a,r,o,i,u;f(1,arguments);var l=g(t),n=l.getFullYear(),y=T(),h=x((s=(a=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:y.firstWeekContainsDate)!==null&&a!==void 0?a:(i=y.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,h),p.setHours(0,0,0,0);var O=k(p,e),_=new Date(0);_.setFullYear(n,0,h),_.setHours(0,0,0,0);var H=k(_,e);return l.getTime()>=O.getTime()?n+1:l.getTime()>=H.getTime()?n:n-1}function ae(t,e){var s,a,r,o,i,u;f(1,arguments);var l=T(),n=x((s=(a=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:l.firstWeekContainsDate)!==null&&a!==void 0?a:(i=l.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1),y=se(t,e),h=new Date(0);h.setFullYear(y,0,n),h.setHours(0,0,0,0);var p=k(h,e);return p}var re=6048e5;function oe(t,e){f(1,arguments);var s=g(t),a=k(s,e).getTime()-ae(s,e).getTime();return Math.round(a/re)+1}function ne(t,e){f(2,arguments);var s=g(t),a=x(e);return s.setHours(a),s}const ie=z`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.indicators {
        border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      }

      &.small {
        border-spacing: var(--gds-sys-space-2xs);

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
    }

    thead {
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
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-max);
        transition: background 0.2s; //might be removed
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);
        //--_background: transparent;

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
          background: var(--gds-sys-color-l3-neutral-01);
          color: var(--gds-sys-color-content-neutral-03);
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
          outline-width: var(--gds-sys-space-3xs);
          outline-offset: 3.75px;
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
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-space-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;function le(t,e){const s=te(t),a=X(t),r=ee({start:s,end:a},{weekStartsOn:1});for(;r.length<6;)r.push(w(r[r.length-1],7));return m`${e(r.map(o=>({days:Z({start:o,end:w(o,6)})})))}`}var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,F=t=>{throw TypeError(t)},c=(t,e,s,a)=>{for(var r=a>1?void 0:a?ue(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(a?i(e,s,r):i(r))||r);return a&&r&&de(e,s,r),r},ce=(t,e,s)=>e.has(t)||F("Cannot "+s),he=(t,e,s)=>e.has(t)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),W=(t,e,s)=>(ce(t,e,"access private method"),s),$,Y,N;let d=class extends A{constructor(){super(...arguments),he(this,$),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=K(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",W(this,$,N)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return m`<table
      role="grid"
      aria-label="${M(this.label)}"
      class="${S({small:this.size==="small",indicators:!!this.customizedDates})}"
    >
      ${C(!this.hideDayNames,()=>m`<thead role="rowgroup">
            <tr role="row">
              ${C(this.showWeekNumbers,()=>m`<th></th>`)}
              <th>${b("Mon").substring(0,1)}</th>
              <th>${b("Tue").substring(0,1)}</th>
              <th>${b("Wed").substring(0,1)}</th>
              <th>${b("Thu").substring(0,1)}</th>
              <th>${b("Fri").substring(0,1)}</th>
              <th>${b("Sat").substring(0,1)}</th>
              <th>${b("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${le(this.focusedDate,e=>m`
            ${e.map(s=>m`
                <tr role="row">
                  ${C(this.showWeekNumbers,()=>m`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${oe(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const r=this.customizedDates&&this.customizedDates.find(h=>D(h.date,a)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>D(h,a))),...r},i=!U(this.focusedDate,a),u=(a<this.min||a>this.max)&&!D(a,this.min)&&!D(a,this.max),l=a.getDay()===0||a.getDay()===6,n=o.disabled||i||u||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?m`<td inert></td>`:m`
                          <td
                            role="${M(n?void 0:"gridcell")}"
                            class="${S({small:this.size==="small","custom-date":!!r,disabled:!!n,today:D(t,a)})}"
                            ?disabled=${n}
                            tabindex="${D(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&D(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>n?null:W(this,$,Y).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o==null?void 0:o.color:""}"
                              >${a.getDate()}</span
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
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};$=new WeakSet;Y=function(t){const e=ne(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};N=function(t){var a;let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=w(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=w(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=w(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=w(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((a=this._elFocusedCell)!=null&&a.hasAttribute("disabled")||W(this,$,Y).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=j(this.focusedDate,1),e=!0):t.key==="PageDown"&&(s=V(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var r;(r=this._elFocusedCell)==null||r.focus()}))};d.styles=[P,ie];d.shadowRootOptions={mode:"open",delegatesFocus:!0};c([v()],d.prototype,"value",2);c([v({type:Date})],d.prototype,"min",2);c([v({type:Date})],d.prototype,"max",2);c([v()],d.prototype,"focusedDate",2);c([v({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);c([v({type:Array,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);c([v({type:Number})],d.prototype,"focusedMonth",1);c([v({type:Number})],d.prototype,"focusedYear",1);c([v({reflect:!0})],d.prototype,"size",2);c([v({type:Boolean})],d.prototype,"showWeekNumbers",2);c([v({type:Boolean})],d.prototype,"hideExtraneousDays",2);c([v({type:Boolean})],d.prototype,"hideDayNames",2);c([v({attribute:!1})],d.prototype,"customizedDates",2);c([v()],d.prototype,"label",2);c([v({attribute:!1})],d.prototype,"dateLabelTemplate",2);c([B()],d.prototype,"_currentLocale",2);c([R('td[tabindex="0"]')],d.prototype,"_elFocusedCell",2);c([q("value")],d.prototype,"_valueChanged",1);d=c([I("gds-calendar"),L()],d);export{d as G,D as i};
