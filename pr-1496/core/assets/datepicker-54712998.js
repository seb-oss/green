import{n as y,r as U,g as Ve,h as W}from"./gds-element-54cd6e2a.js";import{e as Ue,a as Qe}from"./query-b9d3c2af.js";import{r as Q}from"./query-async-1ff18261.js";import{n as Te}from"./when-cf7256a5.js";import{w as ae,s as je,i as et,T as Oe}from"./lit-element-71e04f06.js";import{i as tt,p as at,v as F,r as A,h as ee,m as st}from"./directive-helpers-9aabd8ef.js";import{f as it}from"./menu-heading-3b3c7fe9.js";import{e as Re,i as nt,t as rt}from"./directive-12249aa5.js";import{e as Ne}from"./class-map-4ef1884f.js";import{m as p}from"./lit-localize-87611c26.js";import{G as ot}from"./form-control-bddb9eb4.js";import{T as lt}from"./transitional-styles-c1ac9719.js";import{w as xe}from"./watch-c4961afe.js";import{d as We,a as ht}from"./attribute-converters-ae269b4b.js";import"./popover-3ff8a5f8.js";import"./backdrop-24fc6001.js";import{i as dt}from"./calendar-694ea588.js";import"./dropdown-beb11c31.js";import"./button-4a574065.js";import"./calendar-afca666d.js";import"./chevron-right-1a9f7b07.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ut;function ct(e){return(t,a)=>Ue(t,a,{get(){return(this.renderRoot??ut??(ut=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*pt(e,t){const a=typeof t=="function";if(e!==void 0){let i=-1;for(const s of e)i>-1&&(yield a?t(i):t),i++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class gt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=e=>!tt(e)&&typeof e.then=="function",Ae=1073741823;let mt=class extends it{constructor(){super(...arguments),this._$Cwt=Ae,this._$Cbt=[],this._$CK=new ft(this),this._$CX=new gt}render(...t){return t.find(a=>!Pe(a))??ae}update(t,a){const i=this._$Cbt;let s=i.length;this._$Cbt=a;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let u=0;u<a.length&&!(u>this._$Cwt);u++){const r=a[u];if(!Pe(r))return this._$Cwt=u,r;u<s&&r===i[u]||(this._$Cwt=Ae,s=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const C=n.deref();if(C!==void 0){const l=C._$Cbt.indexOf(r);l>-1&&l<C._$Cwt&&(C._$Cwt=l,C.setValue(k))}}))}return ae}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const vt=Re(mt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_t(e,t){if(e!==void 0){let a=0;for(const i of e)yield t(i,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(e,t,a)=>{const i=new Map;for(let s=t;s<=a;s++)i.set(e[s],s);return i},yt=Re(class extends nt{constructor(e){if(super(e),e.type!==rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let i;a===void 0?a=t:t!==void 0&&(i=t);const s=[],n=[];let o=0;for(const u of e)s[o]=i?i(u,o):o,n[o]=a(u,o),o++;return{values:n,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,i]){const s=at(e),{values:n,keys:o}=this.dt(t,a,i);if(!Array.isArray(s))return this.ut=o,n;const u=this.ut??(this.ut=[]),r=[];let k,C,l=0,v=s.length-1,g=0,w=n.length-1;for(;l<=v&&g<=w;)if(s[l]===null)l++;else if(s[v]===null)v--;else if(u[l]===o[g])r[g]=F(s[l],n[g]),l++,g++;else if(u[v]===o[w])r[w]=F(s[v],n[w]),v--,w--;else if(u[l]===o[w])r[w]=F(s[l],n[w]),A(e,r[w+1],s[l]),l++,w--;else if(u[v]===o[g])r[g]=F(s[v],n[g]),A(e,s[l],s[v]),v--,g++;else if(k===void 0&&(k=Le(o,g,w),C=Le(u,l,v)),k.has(u[l]))if(k.has(u[v])){const M=C.get(o[g]),j=M!==void 0?s[M]:null;if(j===null){const Ie=A(e,s[l]);F(Ie,n[g]),r[g]=Ie}else r[g]=F(j,n[g]),A(e,s[l],j),s[M]=null;g++}else ee(s[v]),v--;else ee(s[l]),l++;for(;g<=w;){const M=A(e,r[w+1]);F(M,n[g]),r[g++]=M}for(;l<=v;){const M=s[l++];M!==null&&ee(M)}return this.ut=o,st(e,r),ae}});var $t=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,E=(e,t,a,i)=>{for(var s=i>1?void 0:i?wt(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&$t(t,a,s),s},Fe=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},m=(e,t,a)=>(Fe(e,t,"read from private field"),a?a.call(e):t.get(e)),b=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Be=(e,t,a,i)=>(Fe(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),$=(e,t,a)=>(Fe(e,t,"access private method"),a),x,B,z,G,q,se,ie,ne,re,ze,I,L,K,oe,N,V,T,X;let S=class extends je{constructor(){super(...arguments),b(this,re),b(this,I),b(this,K),b(this,N),b(this,T),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=$(this,K,oe).call(this,this.value,this.length),b(this,x,""),b(this,B,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=$(this,N,V).call(this,e+1),$(this,I,L).call(this)}),b(this,z,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=$(this,N,V).call(this,e-1),$(this,I,L).call(this)}),b(this,G,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),b(this,q,()=>{$(this,T,X).call(this)}),b(this,se,()=>{m(this,x)!==""&&($(this,T,X).call(this),this.value=$(this,N,V).call(this,parseInt(this.value.toString())),$(this,I,L).call(this))}),b(this,ie,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?m(this,z).call(this):m(this,B).call(this)}),b(this,ne,e=>{let t=!1;if(e.key==="ArrowUp")m(this,B).call(this),t=!0;else if(e.key==="ArrowDown")m(this,z).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(m(this,x).length<this.length&&(Be(this,x,m(this,x)+a.toString()),this.value=parseInt(m(this,x))),m(this,x).length===this.length&&(this.value=$(this,N,V).call(this,this.value),$(this,T,X).call(this),$(this,re,ze).call(this),$(this,I,L).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",m(this,ie)),this.addEventListener("keydown",m(this,ne)),this.addEventListener("blur",m(this,se)),this.addEventListener("focus",m(this,q)),this.addEventListener("click",m(this,G)),this.addEventListener("mousedown",m(this,G))}focus(e){super.focus(e),m(this,q).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=$(this,K,oe).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};x=new WeakMap;B=new WeakMap;z=new WeakMap;G=new WeakMap;q=new WeakMap;se=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakSet;ze=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof S){e.focus();break}e=e.nextElementSibling}};I=new WeakSet;L=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};K=new WeakSet;oe=function(e,t){return String(e).padStart(t,"0")};N=new WeakSet;V=function(e){return Math.max(this.min,Math.min(this.max,e))};T=new WeakSet;X=function(){Be(this,x,"")};S.formAssociated=!0;E([y({type:Number})],S.prototype,"value",2);E([y({type:Number})],S.prototype,"length",2);E([y({type:Number,attribute:"aria-valuemin"})],S.prototype,"min",2);E([y({type:Number,attribute:"aria-valuemax"})],S.prototype,"max",2);E([U()],S.prototype,"displayValue",2);E([xe("value")],S.prototype,"_refreshDisplayValue",1);S=E([Ve("gds-date-part-spinner")],S);const bt=et`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`;var kt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,f=(e,t,a,i)=>{for(var s=i>1?void 0:i?Ct(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(i?o(t,a,s):o(s))||s);return i&&s&&kt(t,a,s),s},Ye=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},c=(e,t,a)=>(Ye(e,t,"read from private field"),a?a.call(e):t.get(e)),h=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},te=(e,t,a,i)=>(Ye(e,t,"write to private field"),i?i.call(e,a):t.set(e,a),a),_=(e,t,a)=>(Ye(e,t,"access private method"),a),O,le,Ge,R,H,he,qe,de,Ke,ue,Xe,Y,P,ce,Ze,pe,fe,ge,me,ve,_e,ye,$e,we,be,J,ke,Ce,Z,Se,Me,D,De,He,Ee,Je;let d=class extends ot{constructor(){super(...arguments),h(this,le),h(this,R),h(this,he),h(this,de),h(this,ue),h(this,Y),h(this,ce),h(this,Z),h(this,De),h(this,Ee),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=_(this,Z,Se).call(this,"y-m-d"),h(this,O,void 0),h(this,pe,e=>{this._elTrigger.then(t=>{var i,s;((i=e.relatedTarget)==null?void 0:i.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),h(this,fe,e=>{this._elTrigger.then(t=>{var i,s;(i=document.getSelection())==null||i.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),h(this,ge,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),h(this,me,e=>{this._elField.then(t=>{var o;if(e.currentTarget!==t)return;e.preventDefault();const a=(o=e.clipboardData)==null?void 0:o.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",n=a.split(this._dateFormatLayout.delimiter);if(n.length===3){const u=this._dateFormatLayout.layout,r=parseInt(n[u.findIndex(l=>l.token==="y")]),k=parseInt(n[u.findIndex(l=>l.token==="m")])-1,C=parseInt(n[u.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(C)&&(i=new Date(`${r}-${k+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,_(this,Y,P).call(this))})}),h(this,ve,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),h(this,_e,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,_(this,Y,P).call(this)}),h(this,ye,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),h(this,$e,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),h(this,we,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),h(this,be,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),h(this,J,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),_(this,ce,Ze).call(this)}),h(this,ke,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!dt(t||new Date(0),c(this,O)||new Date(0))&&(this.value=t,_(this,Y,P).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=c(this,O))}}),h(this,Ce,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),h(this,Me,(e,t)=>{c(this,D)[t]=e;const a=new Date;a.setFullYear(parseInt(c(this,D).year)),a.setMonth(parseInt(c(this,D).month)-1),a.setDate(parseInt(c(this,D).day)),a.toString()!=="Invalid Date"&&(this.value=a,_(this,Y,P).call(this))}),h(this,D,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=_(this,Z,Se).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),lt.instance.apply(this,"gds-datepicker")}render(){return W`${Te(this.label&&!this.hideLabel,()=>W`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${Ne({field:!0,small:this.size==="small"})}
        id="field"
        @click=${c(this,ve)}
        @copy=${c(this,ge)}
        @paste=${c(this,me)}
      >
        <div
          class=${Ne({input:!0,"is-placeholder":!this.value})}
          @focusout=${c(this,pe)}
        >
          ${pt(_t(this._dateFormatLayout.layout,(e,t)=>W`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${e.token==="y"?4:2}
                  .value=${c(this,D)[e.name]}
                  aria-valuemin=${_(this,de,Ke).call(this,e.name)}
                  aria-valuemax=${_(this,ue,Xe).call(this,e.name)}
                  aria-label=${_(this,he,qe).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${c(this,Ce)}
                  @change=${a=>c(this,Me).call(this,a.detail.value,e.name)}
                  @focus=${c(this,fe)}
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
        @gds-ui-state=${c(this,ke)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <div class="header">
          <button
            @click=${c(this,be)}
            aria-label=${p("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${c(this,ye)}
            .maxHeight=${300}
            label="${p("Month")}"
            style="width:120px"
            size="small"
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
            @change=${c(this,$e)}
            .maxHeight=${300}
            label="${p("Year")}"
            size="small"
            hide-label
          >
            ${yt(c(this,De,He),e=>e,e=>W`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${c(this,we)}
            aria-label=${p("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${c(this,_e)}
          @gds-date-focused=${c(this,J)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,_(this,Y,P).call(this)}}
          >
            ${p("Clear")}
          </gds-button>
          ${vt(_(this,le,Ge).call(this),Oe)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),_(this,R,H).call(this,new Date)}}
          >
            ${p("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){te(this,D,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");te(this,D,{year:t,month:a,day:i})}_handleOpenChange(){this.open&&(te(this,O,this.value),this._elCalendar.then(e=>e.focus()))}};O=new WeakMap;le=new WeakSet;Ge=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=p("Last available date"),a=i=>{i.stopPropagation(),_(this,R,H).call(this,this.max)}):e&&e<this.min&&(t=p("First available date"),a=i=>{i.stopPropagation(),_(this,R,H).call(this,this.min)}),W`${Te(t.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Oe)}`};R=new WeakSet;H=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(c(this,J))};he=new WeakSet;qe=function(e){return{year:p("Year"),month:p("Month"),day:p("Day")}[e]};de=new WeakSet;Ke=function(e){return{year:1900,month:1,day:1}[e]};ue=new WeakSet;Xe=function(e){return{year:9999,month:12,day:31}[e]};Y=new WeakSet;P=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};ce=new WeakSet;Ze=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};pe=new WeakMap;fe=new WeakMap;ge=new WeakMap;me=new WeakMap;ve=new WeakMap;_e=new WeakMap;ye=new WeakMap;$e=new WeakMap;we=new WeakMap;be=new WeakMap;J=new WeakMap;ke=new WeakMap;Ce=new WeakMap;Z=new WeakSet;Se=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),i=a.findIndex(r=>r==="y"),s=a.findIndex(r=>r==="m"),n=a.findIndex(r=>r==="d");if(i===-1||s===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const u=[i,s,n].sort((r,k)=>r-k).map(r=>a[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:t,layout:u}};Me=new WeakMap;D=new WeakMap;De=new WeakSet;He=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=c(this,Ee,Je),i=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let n=e;n<=t;n++)yield n}}};Ee=new WeakSet;Je=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};d.styles=[bt];d.shadowRootOptions={mode:"open",delegatesFocus:!0};f([y({converter:We})],d.prototype,"value",2);f([y({converter:We})],d.prototype,"min",2);f([y({converter:We})],d.prototype,"max",2);f([y({type:Boolean})],d.prototype,"open",2);f([y()],d.prototype,"label",2);f([y({type:Boolean,attribute:"show-week-numbers"})],d.prototype,"showWeekNumbers",2);f([y()],d.prototype,"size",2);f([y({type:Boolean,attribute:"hide-label"})],d.prototype,"hideLabel",2);f([y()],d.prototype,"dateformat",1);f([y({type:Boolean,attribute:"disabled-weekends"})],d.prototype,"disabledWeekends",2);f([y({converter:ht,attribute:"disabled-dates"})],d.prototype,"disabledDates",2);f([Q("#calendar-button")],d.prototype,"test_calendarButton",2);f([U()],d.prototype,"_focusedMonth",2);f([U()],d.prototype,"_focusedYear",2);f([U()],d.prototype,"_dateFormatLayout",2);f([Q("#calendar")],d.prototype,"_elCalendar",2);f([Q("#calendar-button")],d.prototype,"_elTrigger",2);f([Q("#field")],d.prototype,"_elField",2);f([ct("[role=spinbutton]")],d.prototype,"_elSpinners",2);f([Qe(".input")],d.prototype,"_elInput",2);f([xe("value")],d.prototype,"_handleValueChange",1);f([xe("open")],d.prototype,"_handleOpenChange",1);d=f([Ve("gds-datepicker")],d);
