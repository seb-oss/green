import{n as _,r as X,g as ze,h as C}from"./gds-element-d791ed3d.js";import{e as Ue,a as qe}from"./query-b9d3c2af.js";import{r as Z}from"./query-async-1ff18261.js";import{n as Pe}from"./when-748fcf30.js";import{b as Ke}from"./until-27bb1490.js";import{R as Qe,h as Xe,i as Ze,D as Ae}from"./lit-element-1d72f0ce.js";import{e as je,i as et,t as tt}from"./directive-dd518ee3.js";import{u as at,c as W,a as P,p as ee,d as st}from"./directive-helpers-8f06cd33.js";import{R as Ie}from"./class-map-f04c1558.js";import{m as u}from"./runtime-c06dc943.js";import{G as it}from"./form-control-c8d4aaee.js";import{T as nt}from"./transitional-styles-c75c0fd2.js";import{w as Me}from"./watch-c4961afe.js";import{d as Ce,a as rt}from"./attribute-converters-ae269b4b.js";import"./popover-e94a7434.js";import"./backdrop-c8192df5.js";import{i as ot}from"./calendar-9c9cb0e3.js";import"./dropdown-6f128d1d.js";import"./menu-heading-86615c64.js";import"./button-597f9ed1.js";import"./calendar-fabb0a8a.js";import"./chevron-right-59e84500.js";import{t as lt}from"./tokens.style-b5b8efd2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht;function dt(e){return(t,a)=>Ue(t,a,{get(){return(this.renderRoot??ht??(ht=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*pt(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ut(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},ct=je(class extends et{constructor(e){if(super(e),e.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let r=0;for(const f of e)s[r]=i?i(f,r):r,n[r]=a(f,r),r++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=at(e),{values:n,keys:r}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=r,n;const f=this.ut??(this.ut=[]),o=[];let k,z,d=0,v=s.length-1,g=0,w=n.length-1;for(;d<=v&&g<=w;)if(s[d]===null)d++;else if(s[v]===null)v--;else if(f[d]===r[g])o[g]=W(s[d],n[g]),d++,g++;else if(f[v]===r[w])o[w]=W(s[v],n[w]),v--,w--;else if(f[d]===r[w])o[w]=W(s[d],n[w]),P(e,o[w+1],s[d]),d++,w--;else if(f[v]===r[g])o[g]=W(s[v],n[g]),P(e,s[d],s[v]),v--,g++;else if(k===void 0&&(k=Ne(r,g,w),z=Ne(f,d,v)),k.has(f[d]))if(k.has(f[v])){const S=z.get(r[g]),j=S!==void 0?s[S]:null;if(j===null){const Ee=P(e,s[d]);W(Ee,n[g]),o[g]=Ee}else o[g]=W(j,n[g]),P(e,s[d],j),s[S]=null;g++}else ee(s[v]),v--;else ee(s[d]),d++;for(;g<=w;){const S=P(e,o[w+1]);W(S,n[g]),o[g++]=S}for(;d<=v;){const S=s[d++];S!==null&&ee(S)}return this.ut=r,st(e,o),Qe}});var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Y=(e,t,a,i)=>{for(var s=i>1?void 0:i?ft(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&gt(t,a,s),s},We=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},m=(e,t,a)=>(We(e,t,"read from private field"),a?a.call(e):t.get(e)),x=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Le=(e,t,a,i)=>(We(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),b=(e,t,a)=>(We(e,t,"access private method"),a),M,R,B,G,J,ae,se,ie,ne,Oe,E,A,H,re,I,L,O,U;let $=class extends Xe{constructor(){super(...arguments),x(this,ne),x(this,E),x(this,H),x(this,I),x(this,O),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=b(this,H,re).call(this,this.value,this.length),x(this,M,""),x(this,R,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=b(this,I,L).call(this,e+1),b(this,E,A).call(this)}),x(this,B,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=b(this,I,L).call(this,e-1),b(this,E,A).call(this)}),x(this,G,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),x(this,J,()=>{b(this,O,U).call(this)}),x(this,ae,()=>{m(this,M)!==""&&(b(this,O,U).call(this),this.value=b(this,I,L).call(this,parseInt(this.value.toString())),b(this,E,A).call(this))}),x(this,se,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,B).call(this):m(this,R).call(this)}),x(this,ie,e=>{let t=!1;if(e.key==="ArrowUp")m(this,R).call(this),t=!0;else if(e.key==="ArrowDown")m(this,B).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,M).length<this.length&&(Le(this,M,m(this,M)+a.toString()),this.value=parseInt(m(this,M))),m(this,M).length===this.length&&(this.value=b(this,I,L).call(this,this.value),b(this,O,U).call(this),b(this,ne,Oe).call(this),b(this,E,A).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,se)),this.addEventListener("keydown",m(this,ie)),this.addEventListener("blur",m(this,ae)),this.addEventListener("focus",m(this,J)),this.addEventListener("click",m(this,G)),this.addEventListener("mousedown",m(this,G))}focus(e){super.focus(e),m(this,J).call(this)}render(){return C`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=b(this,H,re).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};M=new WeakMap;R=new WeakMap;B=new WeakMap;G=new WeakMap;J=new WeakMap;ae=new WeakMap;se=new WeakMap;ie=new WeakMap;ne=new WeakSet;Oe=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof $){e.focus();break}e=e.nextElementSibling}};E=new WeakSet;A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};H=new WeakSet;re=function(e,t){return String(e).padStart(t,"0")};I=new WeakSet;L=function(e){return Math.max(this.min,Math.min(this.max,e))};O=new WeakSet;U=function(){Le(this,M,"")};$.formAssociated=!0;Y([_({type:Number})],$.prototype,"value",2);Y([_({type:Number})],$.prototype,"length",2);Y([_({type:Number,attribute:"aria-valuemin"})],$.prototype,"min",2);Y([_({type:Number,attribute:"aria-valuemax"})],$.prototype,"max",2);Y([X()],$.prototype,"displayValue",2);Y([Me("value")],$.prototype,"_refreshDisplayValue",1);$=Y([ze("gds-date-part-spinner")],$);const mt=Ze`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`;var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,c=(e,t,a,i)=>{for(var s=i>1?void 0:i?yt(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&vt(t,a,s),s},Fe=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},p=(e,t,a)=>(Fe(e,t,"read from private field"),a?a.call(e):t.get(e)),l=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},te=(e,t,a,i)=>(Fe(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),y=(e,t,a)=>(Fe(e,t,"access private method"),a),T,oe,Te,V,K,le,Ve,he,Re,de,Be,F,N,pe,Ge,ue,ce,ge,fe,me,ve,ye,_e,be,we,Q,xe,$e,q,ke,Se,D,De,Je,Ye,He;let h=class extends it{constructor(){super(...arguments),l(this,oe),l(this,V),l(this,le),l(this,he),l(this,de),l(this,F),l(this,pe),l(this,q),l(this,De),l(this,Ye),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=y(this,q,ke).call(this,"y-m-d"),l(this,T,void 0),l(this,ue,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),l(this,ce,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),l(this,ge,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),l(this,fe,e=>{this._elField.then(t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const a=(r=e.clipboardData)==null?void 0:r.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const f=this._dateFormatLayout.layout,o=parseInt(n[f.findIndex(d=>d.token==="y")]),k=parseInt(n[f.findIndex(d=>d.token==="m")])-1,z=parseInt(n[f.findIndex(d=>d.token==="d")]);!isNaN(o)&&!isNaN(k)&&!isNaN(z)&&(i=new Date(`${o}-${k+1}-${z}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,y(this,F,N).call(this))})}),l(this,me,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),l(this,ve,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,y(this,F,N).call(this)}),l(this,ye,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),l(this,_e,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),l(this,be,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),l(this,we,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),l(this,Q,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),y(this,pe,Ge).call(this)}),l(this,xe,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!ot(t||new Date(0),p(this,T)||new Date(0))&&(this.value=t,y(this,F,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=p(this,T))}}),l(this,$e,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),l(this,Se,(e,t)=>{p(this,D)[t]=e;const a=new Date;a.setFullYear(parseInt(p(this,D).year)),a.setMonth(parseInt(p(this,D).month)-1),a.setDate(parseInt(p(this,D).day)),a.toString()!=="Invalid Date"&&(this.value=a,y(this,F,N).call(this))}),l(this,D,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=y(this,q,ke).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),nt.instance.apply(this,"gds-datepicker")}render(){return C`${Pe(this.label&&!this.hideLabel,()=>C`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${Ie({field:!0,small:this.size==="small"})}
        id="field"
        @click=${p(this,me)}
        @copy=${p(this,ge)}
        @paste=${p(this,fe)}
      >
        <div
          class=${Ie({input:!0,"is-placeholder":!this.value})}
          @focusout=${p(this,ue)}
        >
          ${pt(ut(this._dateFormatLayout.layout,(e,t)=>C`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${p(this,D)[e.name]}
                  aria-valuemin=${y(this,he,Re).call(this,e.name)}
                  aria-valuemax=${y(this,de,Be).call(this,e.name)}
                  aria-label=${y(this,le,Ve).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${p(this,$e)}
                  @change=${a=>p(this,Se).call(this,a.detail.value,e.name)}
                  @focus=${p(this,ce)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),C`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${u("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${p(this,xe)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${p(this,we)}
            aria-label=${u("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${p(this,ye)}
            .maxHeight=${300}
            label="${u("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${u("January")}</gds-option>
            <gds-option value="1">${u("February")}</gds-option>
            <gds-option value="2">${u("March")}</gds-option>
            <gds-option value="3">${u("April")}</gds-option>
            <gds-option value="4">${u("May")}</gds-option>
            <gds-option value="5">${u("June")}</gds-option>
            <gds-option value="6">${u("July")}</gds-option>
            <gds-option value="7">${u("August")}</gds-option>
            <gds-option value="8">${u("September")}</gds-option>
            <gds-option value="9">${u("October")}</gds-option>
            <gds-option value="10">${u("November")}</gds-option>
            <gds-option value="11">${u("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${p(this,_e)}
            .maxHeight=${300}
            label="${u("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${ct(p(this,De,Je),e=>e,e=>C`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${p(this,be)}
            aria-label=${u("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${p(this,ve)}
          @gds-date-focused=${p(this,Q)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,y(this,F,N).call(this)}}
          >
            ${u("Clear")}
          </gds-button>
          ${Ke(y(this,oe,Te).call(this),Ae)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),y(this,V,K).call(this,new Date)}}
          >
            ${u("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){te(this,D,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");te(this,D,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(te(this,T,this.value),this._elCalendar.then(e=>e.focus()))}};T=new WeakMap;oe=new WeakSet;Te=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=u("Last available date"),a=i=>{i.stopPropagation(),y(this,V,K).call(this,this.max)}):e&&e<this.min&&(t=u("First available date"),a=i=>{i.stopPropagation(),y(this,V,K).call(this,this.min)}),C`${Pe(t.length>0,()=>C`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Ae)}`};V=new WeakSet;K=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(p(this,Q))};le=new WeakSet;Ve=function(e){return{year:u("Year"),month:u("Month"),day:u("Day")}[e]};he=new WeakSet;Re=function(e){return{year:1900,month:1,day:1}[e]};de=new WeakSet;Be=function(e){return{year:9999,month:12,day:31}[e]};F=new WeakSet;N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};pe=new WeakSet;Ge=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};ue=new WeakMap;ce=new WeakMap;ge=new WeakMap;fe=new WeakMap;me=new WeakMap;ve=new WeakMap;ye=new WeakMap;_e=new WeakMap;be=new WeakMap;we=new WeakMap;Q=new WeakMap;xe=new WeakMap;$e=new WeakMap;q=new WeakSet;ke=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(o=>o==="y"),s=a.findIndex(o=>o==="m"),n=a.findIndex(o=>o==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const f=[i,s,n].sort((o,k)=>o-k).map(o=>a[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:f}};Se=new WeakMap;D=new WeakMap;De=new WeakSet;Je=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=p(this,Ye,He),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};Ye=new WeakSet;He=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[lt,mt];h.shadowRootOptions={mode:"open",delegatesFocus:!0};c([_({converter:Ce})],h.prototype,"value",2);c([_({converter:Ce})],h.prototype,"min",2);c([_({converter:Ce})],h.prototype,"max",2);c([_({type:Boolean})],h.prototype,"open",2);c([_()],h.prototype,"label",2);c([_({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);c([_()],h.prototype,"size",2);c([_({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);c([_()],h.prototype,"dateformat",1);c([_({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);c([_({converter:rt,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);c([Z("#calendar-button")],h.prototype,"test_calendarButton",2);c([X()],h.prototype,"_focusedMonth",2);c([X()],h.prototype,"_focusedYear",2);c([X()],h.prototype,"_dateFormatLayout",2);c([Z("#calendar")],h.prototype,"_elCalendar",2);c([Z("#calendar-button")],h.prototype,"_elTrigger",2);c([Z("#field")],h.prototype,"_elField",2);c([dt("[role=spinbutton]")],h.prototype,"_elSpinners",2);c([qe(".input")],h.prototype,"_elInput",2);c([Me("value")],h.prototype,"_handleValueChange",1);c([Me("open")],h.prototype,"_handleOpenChange",1);h=c([ze("gds-datepicker")],h);
