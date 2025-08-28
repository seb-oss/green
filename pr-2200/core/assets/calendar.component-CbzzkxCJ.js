import{m as w,l as L}from"./runtime-CNluP0A8.js";import{x as D}from"./lit-element-Bx14lxc-.js";import{n as f,r as B}from"./Reflect-DJ7r0WLU.js";import{a as z}from"./query-p8xgzTDt.js";import{o as S,e as E}from"./if-defined-BAXgs-ZI.js";import{n as W}from"./when-BR7zwNJC.js";import{G as R,g as A}from"./gds-element-DJNCW3iR.js";import{s as I}from"./gridpicker.styles-DYXe28lO.js";import{t as P}from"./tokens.style-iX6aIK9m.js";import{T as G}from"./transitional-styles-DRTvhbpp.js";import{w as q}from"./watch-tFciLXSI.js";import{r as m,t as v,b as _,l as K,i as U,s as V,a as j}from"./index-C4WLrI9v.js";function y(t,e){m(2,arguments);var a=v(t),s=_(e);return isNaN(s)?new Date(NaN):(s&&a.setDate(a.getDate()+s),a)}var J={};function Y(){return J}function k(t,e){var a,s,r,o,i,d,l,n;m(1,arguments);var g=Y(),h=_((a=(s=(r=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&r!==void 0?r:g.weekStartsOn)!==null&&s!==void 0?s:(l=g.locale)===null||l===void 0||(n=l.options)===null||n===void 0?void 0:n.weekStartsOn)!==null&&a!==void 0?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=v(t),C=p.getDay(),$=(C<h?7:0)+C-h;return p.setDate(p.getDate()-$),p.setHours(0,0,0,0),p}function F(t){m(1,arguments);var e=v(t);return e.setHours(0,0,0,0),e}function Q(t,e){m(2,arguments);var a=_(e),s=a*7;return y(t,s)}function b(t,e){m(2,arguments);var a=F(t),s=F(e);return a.getTime()===s.getTime()}function X(t){m(1,arguments);var e=v(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Z(t,e){var a;m(1,arguments);var s=t||{},r=v(s.start),o=v(s.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var d=[],l=r;l.setHours(0,0,0,0);var n=Number((a=void 0)!==null&&a!==void 0?a:1);if(n<1||isNaN(n))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=i;)d.push(v(l)),l.setDate(l.getDate()+n),l.setHours(0,0,0,0);return d}function ee(t,e){m(1,arguments);var a=t||{},s=v(a.start),r=v(a.end),o=r.getTime();if(!(s.getTime()<=o))throw new RangeError("Invalid interval");var i=k(s,e),d=k(r,e);i.setHours(15),d.setHours(15),o=d.getTime();for(var l=[],n=i;n.getTime()<=o;)n.setHours(0),l.push(v(n)),n=Q(n,1),n.setHours(15);return l}function te(t){m(1,arguments);var e=v(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ae(t,e){var a,s,r,o,i,d;m(1,arguments);var l=v(t),n=l.getFullYear(),g=Y(),h=_((a=(s=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:g.firstWeekContainsDate)!==null&&s!==void 0?s:(i=g.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(n+1,0,h),p.setHours(0,0,0,0);var C=k(p,e),$=new Date(0);$.setFullYear(n,0,h),$.setHours(0,0,0,0);var x=k($,e);return l.getTime()>=C.getTime()?n+1:l.getTime()>=x.getTime()?n:n-1}function se(t,e){var a,s,r,o,i,d;m(1,arguments);var l=Y(),n=_((a=(s=(r=(o=void 0)!==null&&o!==void 0?o:void 0)!==null&&r!==void 0?r:l.firstWeekContainsDate)!==null&&s!==void 0?s:(i=l.locale)===null||i===void 0||(d=i.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&a!==void 0?a:1),g=ae(t,e),h=new Date(0);h.setFullYear(g,0,n),h.setHours(0,0,0,0);var p=k(h,e);return p}var re=6048e5;function oe(t,e){m(1,arguments);var a=v(t),s=k(a,e).getTime()-se(a,e).getTime();return Math.round(s/re)+1}function ne(t,e){m(2,arguments);var a=v(t),s=_(e);return a.setHours(s),a}function ie(t,e){const a=te(t),s=X(t),r=ee({start:a,end:s},{weekStartsOn:1});for(;r.length<6;)r.push(y(r[r.length-1],7));return D`${e(r.map(o=>({days:Z({start:o,end:y(o,6)})})))}`}var le=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,N=t=>{throw TypeError(t)},c=(t,e,a,s)=>{for(var r=s>1?void 0:s?ue(e,a):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(r=(s?i(e,a,r):i(r))||r);return s&&r&&le(e,a,r),r},de=(t,e,a)=>e.has(t)||N("Cannot "+a),ce=(t,e,a)=>e.has(t)?N("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),T=(t,e,a)=>(de(t,e,"access private method"),a),O,M,H;let u=class extends R{constructor(){super(...arguments),ce(this,O),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=K(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),G.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",T(this,O,H)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return D`<table
      role="grid"
      aria-label="${S(this.label)}"
      class="${E({small:this.size==="small",indicators:!!this.customizedDates})}"
    >
      ${W(!this.hideDayNames,()=>D`<thead role="rowgroup">
            <tr role="row">
              ${W(this.showWeekNumbers,()=>D`<th></th>`)}
              <th>${w("Mon").substring(0,1)}</th>
              <th>${w("Tue").substring(0,1)}</th>
              <th>${w("Wed").substring(0,1)}</th>
              <th>${w("Thu").substring(0,1)}</th>
              <th>${w("Fri").substring(0,1)}</th>
              <th>${w("Sat").substring(0,1)}</th>
              <th>${w("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ie(this.focusedDate,e=>D`
            ${e.map(a=>D`
                <tr role="row">
                  ${W(this.showWeekNumbers,()=>D`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${oe(a.days[0])}
                      </td>`)}
                  ${a.days.map(s=>{const r=this.customizedDates&&this.customizedDates.find(h=>b(h.date,s)),o={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(h=>b(h,s))),...r},i=!U(this.focusedDate,s),d=(s<this.min||s>this.max)&&!b(s,this.min)&&!b(s,this.max),l=s.getDay()===0||s.getDay()===6,n=o.disabled||i||d||this.disabledWeekends&&l;return this.hideExtraneousDays&&i?D`<td inert></td>`:D`
                          <td
                            role="${S(n?void 0:"gridcell")}"
                            class="${E({small:this.size==="small","custom-date":!!r,disabled:!!n,today:b(t,s)})}"
                            ?disabled=${n}
                            tabindex="${b(this.focusedDate,s)?0:-1}"
                            aria-selected="${this.value&&b(this.value,s)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(s)}"
                            @click=${()=>n?null:T(this,O,M).call(this,s)}
                            id="dateCell-${s.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o==null?void 0:o.color:""}"
                              >${s.getDate()}</span
                            >

                            ${W(o.indicator,()=>D`<span
                                  class="indicator-${o==null?void 0:o.indicator}"
                                  style="--_color: ${o==null?void 0:o.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};O=new WeakSet;M=function(t){const e=ne(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};H=function(t){var s;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=y(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=y(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=y(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=y(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||T(this,O,M).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=V(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=j(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1})&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var r;(r=this._elFocusedCell)==null||r.focus()}))};u.styles=[P,I];u.shadowRootOptions={mode:"open",delegatesFocus:!0};c([f()],u.prototype,"value",2);c([f({type:Date})],u.prototype,"min",2);c([f({type:Date})],u.prototype,"max",2);c([f()],u.prototype,"focusedDate",2);c([f({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);c([f({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);c([f({type:Number})],u.prototype,"focusedMonth",1);c([f({type:Number})],u.prototype,"focusedYear",1);c([f({reflect:!0})],u.prototype,"size",2);c([f({type:Boolean})],u.prototype,"showWeekNumbers",2);c([f({type:Boolean})],u.prototype,"hideExtraneousDays",2);c([f({type:Boolean})],u.prototype,"hideDayNames",2);c([f({attribute:!1})],u.prototype,"customizedDates",2);c([f()],u.prototype,"label",2);c([f({attribute:!1})],u.prototype,"dateLabelTemplate",2);c([B()],u.prototype,"_currentLocale",2);c([z('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);c([q("value")],u.prototype,"_valueChanged",1);u=c([A("gds-calendar"),L()],u);export{u as G,b as i};
