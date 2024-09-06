import{n as _,r as Q,g as ze,h as C}from"./gds-element-24e794df.js";import{e as Ue,a as qe}from"./query-b9d3c2af.js";import{r as Z}from"./query-async-1ff18261.js";import{n as Pe}from"./when-cf7256a5.js";import{m as Ke}from"./until-87c9e354.js";import{w as Xe,s as Qe,i as Ze,T as Ae}from"./lit-element-2a5e401f.js";import{e as je,i as et,t as tt}from"./directive-12249aa5.js";import{p as at,v as W,r as P,h as ee,m as it}from"./directive-helpers-5872e68c.js";import{e as Ie}from"./class-map-43969d56.js";import{m as u}from"./lit-localize-87611c26.js";import{G as st}from"./form-control-0ab31465.js";import{T as nt}from"./transitional-styles-719ccbd8.js";import{w as De}from"./watch-c4961afe.js";import{d as Ce,a as rt}from"./attribute-converters-ae269b4b.js";import"./popover-1635335d.js";import"./backdrop-3ac2ea4c.js";import{i as ot}from"./calendar-6f977820.js";import"./dropdown-1cf0b2e6.js";import"./menu-heading-de28466b.js";import"./button-611525c2.js";import"./calendar-c792254d.js";import"./chevron-right-0245b7b1.js";import{t as lt}from"./tokens.style-cc0690e8.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht;function dt(e){return(t,a)=>Ue(t,a,{get(){return(this.renderRoot??ht??(ht=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*pt(e,t){const a=typeof t=="function";if(e!==void 0){let s=-1;for(const i of e)s>-1&&(yield a?t(s):t),s++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ut(e,t){if(e!==void 0){let a=0;for(const s of e)yield t(s,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(e,t,a)=>{const s=new Map;for(let i=t;i<=a;i++)s.set(e[i],i);return s},ct=je(class extends et{constructor(e){if(super(e),e.type!==tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let s;a===void 0?a=t:t!==void 0&&(s=t);const i=[],n=[];let r=0;for(const f of e)i[r]=s?s(f,r):r,n[r]=a(f,r),r++;return{values:n,keys:i}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,s]){const i=at(e),{values:n,keys:r}=this.dt(t,a,s);if(!Array.isArray(i))return this.ut=r,n;const f=this.ut??(this.ut=[]),o=[];let k,z,d=0,v=i.length-1,g=0,w=n.length-1;for(;d<=v&&g<=w;)if(i[d]===null)d++;else if(i[v]===null)v--;else if(f[d]===r[g])o[g]=W(i[d],n[g]),d++,g++;else if(f[v]===r[w])o[w]=W(i[v],n[w]),v--,w--;else if(f[d]===r[w])o[w]=W(i[d],n[w]),P(e,o[w+1],i[d]),d++,w--;else if(f[v]===r[g])o[g]=W(i[v],n[g]),P(e,i[d],i[v]),v--,g++;else if(k===void 0&&(k=Ne(r,g,w),z=Ne(f,d,v)),k.has(f[d]))if(k.has(f[v])){const S=z.get(r[g]),j=S!==void 0?i[S]:null;if(j===null){const Ee=P(e,i[d]);W(Ee,n[g]),o[g]=Ee}else o[g]=W(j,n[g]),P(e,i[d],j),i[S]=null;g++}else ee(i[v]),v--;else ee(i[d]),d++;for(;g<=w;){const S=P(e,o[w+1]);W(S,n[g]),o[g++]=S}for(;d<=v;){const S=i[d++];S!==null&&ee(S)}return this.ut=r,it(e,o),Xe}});var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Y=(e,t,a,s)=>{for(var i=s>1?void 0:s?ft(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,a,i):r(i))||i);return s&&i&&gt(t,a,i),i},We=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},m=(e,t,a)=>(We(e,t,"read from private field"),a?a.call(e):t.get(e)),$=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Le=(e,t,a,s)=>(We(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),b=(e,t,a)=>(We(e,t,"access private method"),a),D,R,B,G,H,ae,ie,se,ne,Te,E,A,J,re,I,L,T,U;let x=class extends Qe{constructor(){super(...arguments),$(this,ne),$(this,E),$(this,J),$(this,I),$(this,T),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=b(this,J,re).call(this,this.value,this.length),$(this,D,""),$(this,R,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=b(this,I,L).call(this,e+1),b(this,E,A).call(this)}),$(this,B,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=b(this,I,L).call(this,e-1),b(this,E,A).call(this)}),$(this,G,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),$(this,H,()=>{b(this,T,U).call(this)}),$(this,ae,()=>{m(this,D)!==""&&(b(this,T,U).call(this),this.value=b(this,I,L).call(this,parseInt(this.value.toString())),b(this,E,A).call(this))}),$(this,ie,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,B).call(this):m(this,R).call(this)}),$(this,se,e=>{let t=!1;if(e.key==="ArrowUp")m(this,R).call(this),t=!0;else if(e.key==="ArrowDown")m(this,B).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,D).length<this.length&&(Le(this,D,m(this,D)+a.toString()),this.value=parseInt(m(this,D))),m(this,D).length===this.length&&(this.value=b(this,I,L).call(this,this.value),b(this,T,U).call(this),b(this,ne,Te).call(this),b(this,E,A).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,ie)),this.addEventListener("keydown",m(this,se)),this.addEventListener("blur",m(this,ae)),this.addEventListener("focus",m(this,H)),this.addEventListener("click",m(this,G)),this.addEventListener("mousedown",m(this,G))}focus(e){super.focus(e),m(this,H).call(this)}render(){return C`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=b(this,J,re).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};D=new WeakMap;R=new WeakMap;B=new WeakMap;G=new WeakMap;H=new WeakMap;ae=new WeakMap;ie=new WeakMap;se=new WeakMap;ne=new WeakSet;Te=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof x){e.focus();break}e=e.nextElementSibling}};E=new WeakSet;A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};J=new WeakSet;re=function(e,t){return String(e).padStart(t,"0")};I=new WeakSet;L=function(e){return Math.max(this.min,Math.min(this.max,e))};T=new WeakSet;U=function(){Le(this,D,"")};x.formAssociated=!0;Y([_({type:Number})],x.prototype,"value",2);Y([_({type:Number})],x.prototype,"length",2);Y([_({type:Number,attribute:"aria-valuemin"})],x.prototype,"min",2);Y([_({type:Number,attribute:"aria-valuemax"})],x.prototype,"max",2);Y([Q()],x.prototype,"displayValue",2);Y([De("value")],x.prototype,"_refreshDisplayValue",1);x=Y([ze("gds-date-part-spinner")],x);const mt=Ze`
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
`;var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,c=(e,t,a,s)=>{for(var i=s>1?void 0:s?yt(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,a,i):r(i))||i);return s&&i&&vt(t,a,i),i},Fe=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},p=(e,t,a)=>(Fe(e,t,"read from private field"),a?a.call(e):t.get(e)),l=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},te=(e,t,a,s)=>(Fe(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),y=(e,t,a)=>(Fe(e,t,"access private method"),a),O,oe,Oe,V,K,le,Ve,he,Re,de,Be,F,N,pe,Ge,ue,ce,ge,fe,me,ve,ye,_e,be,we,X,$e,xe,q,ke,Se,M,Me,He,Ye,Je;let h=class extends st{constructor(){super(...arguments),l(this,oe),l(this,V),l(this,le),l(this,he),l(this,de),l(this,F),l(this,pe),l(this,q),l(this,Me),l(this,Ye),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=y(this,q,ke).call(this,"y-m-d"),l(this,O,void 0),l(this,ue,e=>{this._elTrigger.then(t=>{var s,i;((s=e.relatedTarget)==null?void 0:s.parentElement)!==e.target&&((i=document.getSelection())==null||i.removeAllRanges())})}),l(this,ce,e=>{this._elTrigger.then(t=>{var s,i;(s=document.getSelection())==null||s.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(i=document.getSelection())==null||i.addRange(a)})}),l(this,ge,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),l(this,fe,e=>{this._elField.then(t=>{var r;if(e.currentTarget!==t)return;e.preventDefault();const a=(r=e.clipboardData)==null?void 0:r.getData("text/plain");if(!a)return;let s=new Date("-");const i="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const f=this._dateFormatLayout.layout,o=parseInt(n[f.findIndex(d=>d.token==="y")]),k=parseInt(n[f.findIndex(d=>d.token==="m")])-1,z=parseInt(n[f.findIndex(d=>d.token==="d")]);!isNaN(o)&&!isNaN(k)&&!isNaN(z)&&(s=new Date(`${o}-${k+1}-${z}`))}s.toString()===i&&(s=new Date(a),s.toString()===i)||(this.value=s,y(this,F,N).call(this))})}),l(this,me,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),l(this,ve,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,y(this,F,N).call(this)}),l(this,ye,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),l(this,_e,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),l(this,be,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),l(this,we,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),l(this,X,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),y(this,pe,Ge).call(this)}),l(this,$e,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!ot(t||new Date(0),p(this,O)||new Date(0))&&(this.value=t,y(this,F,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=p(this,O))}}),l(this,xe,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),l(this,Se,(e,t)=>{p(this,M)[t]=e;const a=new Date;a.setFullYear(parseInt(p(this,M).year)),a.setMonth(parseInt(p(this,M).month)-1),a.setDate(parseInt(p(this,M).day)),a.toString()!=="Invalid Date"&&(this.value=a,y(this,F,N).call(this))}),l(this,M,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=y(this,q,ke).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),nt.instance.apply(this,"gds-datepicker")}render(){return C`${Pe(this.label&&!this.hideLabel,()=>C`<label for="spinner-0" id="label">${this.label}</label>`)}

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
                  .value=${p(this,M)[e.name]}
                  aria-valuemin=${y(this,he,Re).call(this,e.name)}
                  aria-valuemax=${y(this,de,Be).call(this,e.name)}
                  aria-label=${y(this,le,Ve).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${p(this,xe)}
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
        @gds-ui-state=${p(this,$e)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(s=>s.focus())}}
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
            ${ct(p(this,Me,He),e=>e,e=>C`<gds-option value=${e}>${e}</gds-option>`)}
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
          @gds-date-focused=${p(this,X)}
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
          ${Ke(y(this,oe,Oe).call(this),Ae)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),y(this,V,K).call(this,new Date)}}
          >
            ${u("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){te(this,M,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");te(this,M,{year:t,month:a,day:s})}_handleOpenChange(){this.open&&(te(this,O,this.value),this._elCalendar.then(e=>e.focus()))}};O=new WeakMap;oe=new WeakSet;Oe=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=u("Last available date"),a=s=>{s.stopPropagation(),y(this,V,K).call(this,this.max)}):e&&e<this.min&&(t=u("First available date"),a=s=>{s.stopPropagation(),y(this,V,K).call(this,this.min)}),C`${Pe(t.length>0,()=>C`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Ae)}`};V=new WeakSet;K=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(p(this,X))};le=new WeakSet;Ve=function(e){return{year:u("Year"),month:u("Month"),day:u("Day")}[e]};he=new WeakSet;Re=function(e){return{year:1900,month:1,day:1}[e]};de=new WeakSet;Be=function(e){return{year:9999,month:12,day:31}[e]};F=new WeakSet;N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};pe=new WeakSet;Ge=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};ue=new WeakMap;ce=new WeakMap;ge=new WeakMap;fe=new WeakMap;me=new WeakMap;ve=new WeakMap;ye=new WeakMap;_e=new WeakMap;be=new WeakMap;we=new WeakMap;X=new WeakMap;$e=new WeakMap;xe=new WeakMap;q=new WeakSet;ke=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),s=a.findIndex(o=>o==="y"),i=a.findIndex(o=>o==="m"),n=a.findIndex(o=>o==="d");if(s===-1||i===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const f=[s,i,n].sort((o,k)=>o-k).map(o=>a[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:t,layout:f}};Se=new WeakMap;M=new WeakMap;Me=new WeakSet;He=function(){var i;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=p(this,Ye,Je),s=(i=this.value)==null?void 0:i.getFullYear();return{*[Symbol.iterator](){a&&(yield s);for(let n=e;n<=t;n++)yield n}}};Ye=new WeakSet;Je=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[lt,mt];h.shadowRootOptions={mode:"open",delegatesFocus:!0};c([_({converter:Ce})],h.prototype,"value",2);c([_({converter:Ce})],h.prototype,"min",2);c([_({converter:Ce})],h.prototype,"max",2);c([_({type:Boolean})],h.prototype,"open",2);c([_()],h.prototype,"label",2);c([_({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);c([_()],h.prototype,"size",2);c([_({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);c([_()],h.prototype,"dateformat",1);c([_({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);c([_({converter:rt,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);c([Z("#calendar-button")],h.prototype,"test_calendarButton",2);c([Q()],h.prototype,"_focusedMonth",2);c([Q()],h.prototype,"_focusedYear",2);c([Q()],h.prototype,"_dateFormatLayout",2);c([Z("#calendar")],h.prototype,"_elCalendar",2);c([Z("#calendar-button")],h.prototype,"_elTrigger",2);c([Z("#field")],h.prototype,"_elField",2);c([dt("[role=spinbutton]")],h.prototype,"_elSpinners",2);c([qe(".input")],h.prototype,"_elInput",2);c([De("value")],h.prototype,"_handleValueChange",1);c([De("open")],h.prototype,"_handleOpenChange",1);h=c([ze("gds-datepicker")],h);
