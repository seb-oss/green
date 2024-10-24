import{m as p}from"./runtime-CMQcyTl6.js";import{T as Pe,i as Ae,a as Le,E as $e}from"./lit-element-C_s9q329.js";import{n as w,r as J,g as xe,h as W}from"./custom-element-scoping-CpYtbs9r.js";import{e as Oe,a as Te}from"./query-p8xgzTDt.js";import{r as U}from"./query-async-MEroNOeJ.js";import{e as be}from"./class-map-Bz98xO8-.js";import{e as Ve,i as Re,t as Be}from"./directive-CF8sV3Lr.js";import{p as Ge,v as Y,r as z,M as K,m as He}from"./directive-helpers-C6DiESt7.js";import{m as Je}from"./until-DXcpnd_9.js";import{n as ke}from"./when-BR7zwNJC.js";import{t as Ue}from"./tokens.style-RalixZsd.js";import{T as qe}from"./transitional-styles-Cc5JwJ9o.js";import{w as fe}from"./watch-tFciLXSI.js";import{d as ve,a as Ke}from"./attribute-converters-CdI0trPX.js";import{a as Xe}from"./button-DhIk8LdE.js";import"./dropdown-DG57zfJL.js";import"./menu-heading-5KjiIomn.js";import{i as je}from"./calendar-DGd5FJQW.js";import"./calendar-BoLsT6e1.js";import"./chevron-right-DOKMgDMh.js";import"./popover-BsBF3LbE.js";import"./backdrop-DPrfqKFZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qe;function Ze(e){return(t,a)=>Oe(t,a,{get(){return(this.renderRoot??Qe??(Qe=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*et(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*tt(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},at=Ve(class extends Re{constructor(e){if(super(e),e.type!==Be.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let r=0;for(const v of e)s[r]=i?i(v,r):r,n[r]=a(v,r),r++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=Ge(e),{values:n,keys:r}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=r,n;const v=this.ut??(this.ut=[]),o=[];let D,N,d=0,_=s.length-1,u=0,x=n.length-1;for(;d<=_&&u<=x;)if(s[d]===null)d++;else if(s[_]===null)_--;else if(v[d]===r[u])o[u]=Y(s[d],n[u]),d++,u++;else if(v[_]===r[x])o[x]=Y(s[_],n[x]),_--,x--;else if(v[d]===r[x])o[x]=Y(s[d],n[x]),z(e,o[x+1],s[d]),d++,x--;else if(v[_]===r[u])o[u]=Y(s[_],n[u]),z(e,s[d],s[_]),_--,u++;else if(D===void 0&&(D=we(r,u,x),N=we(v,d,_)),D.has(v[d]))if(D.has(v[_])){const M=N.get(r[u]),q=M!==void 0?s[M]:null;if(q===null){const _e=z(e,s[d]);Y(_e,n[u]),o[u]=_e}else o[u]=Y(q,n[u]),z(e,s[d],q),s[M]=null;u++}else K(s[_]),_--;else K(s[d]),d++;for(;u<=x;){const M=z(e,o[x+1]);Y(M,n[u]),o[u++]=M}for(;d<=_;){const M=s[d++];M!==null&&K(M)}return this.ut=r,He(e,o),Pe}}),st=Ae`
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
`;var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,De=e=>{throw TypeError(e)},E=(e,t,a,i)=>{for(var s=i>1?void 0:i?nt(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&it(t,a,s),s},me=(e,t,a)=>t.has(e)||De("Cannot "+a),m=(e,t,a)=>(me(e,t,"read from private field"),a?a.call(e):t.get(e)),C=(e,t,a)=>t.has(e)?De("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),Me=(e,t,a,i)=>(me(e,t,"write to private field"),t.set(e,a),a),$=(e,t,a)=>(me(e,t,"access private method"),a),F,O,T,V,R,j,Q,Z,y,Ce,P,ee,A,B;let k=class extends Le{constructor(){super(...arguments),C(this,y),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=$(this,y,ee).call(this,this.value,this.length),C(this,F,""),C(this,O,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=$(this,y,A).call(this,e+1),$(this,y,P).call(this)}),C(this,T,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=$(this,y,A).call(this,e-1),$(this,y,P).call(this)}),C(this,V,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),C(this,R,()=>{$(this,y,B).call(this)}),C(this,j,()=>{m(this,F)!==""&&($(this,y,B).call(this),this.value=$(this,y,A).call(this,parseInt(this.value.toString())),$(this,y,P).call(this))}),C(this,Q,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,T).call(this):m(this,O).call(this)}),C(this,Z,e=>{let t=!1;if(e.key==="ArrowUp")m(this,O).call(this),t=!0;else if(e.key==="ArrowDown")m(this,T).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,F).length<this.length&&(Me(this,F,m(this,F)+a.toString()),this.value=parseInt(m(this,F))),m(this,F).length===this.length&&(this.value=$(this,y,A).call(this,this.value),$(this,y,B).call(this),$(this,y,Ce).call(this),$(this,y,P).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,Q)),this.addEventListener("keydown",m(this,Z)),this.addEventListener("blur",m(this,j)),this.addEventListener("focus",m(this,R)),this.addEventListener("click",m(this,V)),this.addEventListener("mousedown",m(this,V))}focus(e){super.focus(e),m(this,R).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=$(this,y,ee).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};F=new WeakMap;O=new WeakMap;T=new WeakMap;V=new WeakMap;R=new WeakMap;j=new WeakMap;Q=new WeakMap;Z=new WeakMap;y=new WeakSet;Ce=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof k){e.focus();break}e=e.nextElementSibling}};P=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};ee=function(e,t){return String(e).padStart(t,"0")};A=function(e){return Math.max(this.min,Math.min(this.max,e))};B=function(){Me(this,F,"")};k.formAssociated=!0;E([w({type:Number})],k.prototype,"value",2);E([w({type:Number})],k.prototype,"length",2);E([w({type:Number,attribute:"aria-valuemin"})],k.prototype,"min",2);E([w({type:Number,attribute:"aria-valuemax"})],k.prototype,"max",2);E([J()],k.prototype,"displayValue",2);E([fe("value")],k.prototype,"_refreshDisplayValue",1);k=E([xe("gds-date-part-spinner")],k);var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Se=e=>{throw TypeError(e)},c=(e,t,a,i)=>{for(var s=i>1?void 0:i?ot(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(i?r(t,a,s):r(s))||s);return i&&s&&rt(t,a,s),s},ye=(e,t,a)=>t.has(e)||Se("Cannot "+a),h=(e,t,a)=>(ye(e,t,"read from private field"),a?a.call(e):t.get(e)),f=(e,t,a)=>t.has(e)?Se("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),X=(e,t,a,i)=>(ye(e,t,"write to private field"),t.set(e,a),a),b=(e,t,a)=>(ye(e,t,"access private method"),a),L,g,Fe,G,We,Ye,Ee,I,Ie,te,ae,se,ie,ne,re,oe,le,de,he,H,pe,ce,ue,ge,S,Ne,ze;let l=class extends Xe{constructor(){super(...arguments),f(this,g),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=b(this,g,ue).call(this,"y-m-d"),f(this,L),f(this,te,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),f(this,ae,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),f(this,se,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),f(this,ie,e=>{this._elField.then(t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const a=(r=e.clipboardData)==null?void 0:r.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const v=this._dateFormatLayout.layout,o=parseInt(n[v.findIndex(d=>d.token==="y")]),D=parseInt(n[v.findIndex(d=>d.token==="m")])-1,N=parseInt(n[v.findIndex(d=>d.token==="d")]);!isNaN(o)&&!isNaN(D)&&!isNaN(N)&&(i=new Date(`${o}-${D+1}-${N}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,b(this,g,I).call(this))})}),f(this,ne,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),f(this,re,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,b(this,g,I).call(this)}),f(this,oe,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),f(this,le,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),f(this,de,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),f(this,he,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),f(this,H,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),b(this,g,Ie).call(this)}),f(this,pe,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!je(t||new Date(0),h(this,L)||new Date(0))&&(this.value=t,b(this,g,I).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=h(this,L))}}),f(this,ce,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),f(this,ge,(e,t)=>{h(this,S)[t]=e;const a=new Date;a.setFullYear(parseInt(h(this,S).year)),a.setMonth(parseInt(h(this,S).month)-1),a.setDate(parseInt(h(this,S).day)),a.setHours(12,0,0,0),a.toString()!=="Invalid Date"&&(this.value=a,b(this,g,I).call(this))}),f(this,S,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=b(this,g,ue).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),qe.instance.apply(this,"gds-datepicker")}render(){return W`${ke(this.label&&!this.hideLabel,()=>W`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${be({field:!0,small:this.size==="small"})}
        id="field"
        @click=${h(this,ne)}
        @copy=${h(this,se)}
        @paste=${h(this,ie)}
      >
        <div
          class=${be({input:!0,"is-placeholder":!this.value})}
          @focusout=${h(this,te)}
        >
          ${et(tt(this._dateFormatLayout.layout,(e,t)=>W`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${h(this,S)[e.name]}
                  aria-valuemin=${b(this,g,Ye).call(this,e.name)}
                  aria-valuemax=${b(this,g,Ee).call(this,e.name)}
                  aria-label=${b(this,g,We).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${h(this,ce)}
                  @change=${a=>h(this,ge).call(this,a.detail.value,e.name)}
                  @focus=${h(this,ae)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),W`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${p("Open calendar modal")}"
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
        @gds-ui-state=${h(this,pe)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${h(this,he)}
            aria-label=${p("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${h(this,oe)}
            .maxHeight=${300}
            label="${p("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${p("January")}</gds-option>
            <gds-option value="1">${p("February")}</gds-option>
            <gds-option value="2">${p("March")}</gds-option>
            <gds-option value="3">${p("April")}</gds-option>
            <gds-option value="4">${p("May")}</gds-option>
            <gds-option value="5">${p("June")}</gds-option>
            <gds-option value="6">${p("July")}</gds-option>
            <gds-option value="7">${p("August")}</gds-option>
            <gds-option value="8">${p("September")}</gds-option>
            <gds-option value="9">${p("October")}</gds-option>
            <gds-option value="10">${p("November")}</gds-option>
            <gds-option value="11">${p("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${h(this,le)}
            .maxHeight=${300}
            label="${p("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${at(h(this,g,Ne),e=>e,e=>W`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${h(this,de)}
            aria-label=${p("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${h(this,re)}
          @gds-date-focused=${h(this,H)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,b(this,g,I).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${Je(b(this,g,Fe).call(this),$e)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),b(this,g,G).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){X(this,S,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");X(this,S,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(X(this,L,this.value),this._elCalendar.then(e=>e.focus()))}};L=new WeakMap;g=new WeakSet;Fe=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=p("Last available date"),a=i=>{i.stopPropagation(),b(this,g,G).call(this,this.max)}):e&&e<this.min&&(t=p("First available date"),a=i=>{i.stopPropagation(),b(this,g,G).call(this,this.min)}),W`${ke(t.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>$e)}`};G=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(h(this,H))};We=function(e){return{year:p("Year"),month:p("Month"),day:p("Day")}[e]};Ye=function(e){return{year:1900,month:1,day:1}[e]};Ee=function(e){return{year:9999,month:12,day:31}[e]};I=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};Ie=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};te=new WeakMap;ae=new WeakMap;se=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakMap;oe=new WeakMap;le=new WeakMap;de=new WeakMap;he=new WeakMap;H=new WeakMap;pe=new WeakMap;ce=new WeakMap;ue=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(o=>o==="y"),s=a.findIndex(o=>o==="m"),n=a.findIndex(o=>o==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const v=[i,s,n].sort((o,D)=>o-D).map(o=>a[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:v}};ge=new WeakMap;S=new WeakMap;Ne=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=h(this,g,ze),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};ze=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};l.styles=[Ue,st];l.shadowRootOptions={mode:"open",delegatesFocus:!0};c([w({converter:ve})],l.prototype,"value",2);c([w({converter:ve})],l.prototype,"min",2);c([w({converter:ve})],l.prototype,"max",2);c([w({type:Boolean})],l.prototype,"open",2);c([w()],l.prototype,"label",2);c([w({type:Boolean,attribute:"show-week-numbers"})],l.prototype,"showWeekNumbers",2);c([w()],l.prototype,"size",2);c([w({type:Boolean,attribute:"hide-label"})],l.prototype,"hideLabel",2);c([w()],l.prototype,"dateformat",1);c([w({type:Boolean,attribute:"disabled-weekends"})],l.prototype,"disabledWeekends",2);c([w({converter:Ke,attribute:"disabled-dates"})],l.prototype,"disabledDates",2);c([U("#calendar-button")],l.prototype,"test_calendarButton",2);c([J()],l.prototype,"_focusedMonth",2);c([J()],l.prototype,"_focusedYear",2);c([J()],l.prototype,"_dateFormatLayout",2);c([U("#calendar")],l.prototype,"_elCalendar",2);c([U("#calendar-button")],l.prototype,"_elTrigger",2);c([U("#field")],l.prototype,"_elField",2);c([Ze("[role=spinbutton]")],l.prototype,"_elSpinners",2);c([Te(".input")],l.prototype,"_elInput",2);c([fe("value")],l.prototype,"_handleValueChange",1);c([fe("open")],l.prototype,"_handleOpenChange",1);l=c([xe("gds-datepicker")],l);
