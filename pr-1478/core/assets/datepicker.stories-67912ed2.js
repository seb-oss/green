import{w as he,s as Et,i as Pt,T as _t,x as J}from"./lit-element-71e04f06.js";import{n as y,r as ie,g as wt,h as W}from"./gds-element-54cd6e2a.js";import{e as Nt,a as Tt}from"./query-b9d3c2af.js";import{r as re}from"./query-async-1ff18261.js";import{n as kt}from"./when-cf7256a5.js";import{i as At,p as Lt,v as F,r as A,h as le,m as Ot}from"./directive-helpers-9aabd8ef.js";import{f as Vt}from"./menu-heading-3b3c7fe9.js";import{e as $t,i as Rt,t as zt}from"./directive-12249aa5.js";import{e as ze}from"./class-map-4ef1884f.js";import{m as u}from"./lit-localize-87611c26.js";import{G as Bt}from"./form-control-5f945716.js";import{T as Ut,r as Gt}from"./transitional-styles-c1ac9719.js";import{w as Te}from"./watch-c4961afe.js";import{d as Ae,a as qt}from"./attribute-converters-ae269b4b.js";import"./popover-3ff8a5f8.js";import"./backdrop-24fc6001.js";import{i as Kt}from"./calendar-aa6deaed.js";import"./dropdown-1f2a6605.js";import"./button-9d6e4766.js";import"./calendar-afca666d.js";import"./chevron-right-1a9f7b07.js";import"./_commonjsHelpers-725317a4.js";import"./cross-small-edc2ae06.js";import"./icon-35869773.js";import"./if-defined-e4b5fcf9.js";import"./constrain-slots-08d8606c.js";import"./static-c6782857.js";import"./tokens.style-880811e7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Jt;function Xt(e){return(t,a)=>Nt(t,a,{get(){return(this.renderRoot??Jt??(Jt=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Zt(e,t){const a=typeof t=="function";if(e!==void 0){let n=-1;for(const s of e)n>-1&&(yield a?t(n):t),n++,yield s}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Qt{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=e=>!At(e)&&typeof e.then=="function",Ue=1073741823;let jt=class extends Vt{constructor(){super(...arguments),this._$Cwt=Ue,this._$Cbt=[],this._$CK=new Ht(this),this._$CX=new Qt}render(...t){return t.find(a=>!Be(a))??he}update(t,a){const n=this._$Cbt;let s=n.length;this._$Cbt=a;const i=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<a.length&&!(c>this._$Cwt);c++){const r=a[c];if(!Be(r))return this._$Cwt=c,r;c<s&&r===n[c]||(this._$Cwt=Ue,s=0,Promise.resolve(r).then(async $=>{for(;o.get();)await o.get();const D=i.deref();if(D!==void 0){const l=D._$Cbt.indexOf(r);l>-1&&l<D._$Cwt&&(D._$Cwt=l,D.setValue($))}}))}return he}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ea=$t(jt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ta(e,t){if(e!==void 0){let a=0;for(const n of e)yield t(n,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(e,t,a)=>{const n=new Map;for(let s=t;s<=a;s++)n.set(e[s],s);return n},aa=$t(class extends Rt{constructor(e){if(super(e),e.type!==zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let n;a===void 0?a=t:t!==void 0&&(n=t);const s=[],i=[];let o=0;for(const c of e)s[o]=n?n(c,o):o,i[o]=a(c,o),o++;return{values:i,keys:s}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,n]){const s=Lt(e),{values:i,keys:o}=this.dt(t,a,n);if(!Array.isArray(s))return this.ut=o,i;const c=this.ut??(this.ut=[]),r=[];let $,D,l=0,v=s.length-1,g=0,w=i.length-1;for(;l<=v&&g<=w;)if(s[l]===null)l++;else if(s[v]===null)v--;else if(c[l]===o[g])r[g]=F(s[l],i[g]),l++,g++;else if(c[v]===o[w])r[w]=F(s[v],i[w]),v--,w--;else if(c[l]===o[w])r[w]=F(s[l],i[w]),A(e,r[w+1],s[l]),l++,w--;else if(c[v]===o[g])r[g]=F(s[v],i[g]),A(e,s[l],s[v]),v--,g++;else if($===void 0&&($=Ge(o,g,w),D=Ge(c,l,v)),$.has(c[l]))if($.has(c[v])){const S=D.get(o[g]),oe=S!==void 0?s[S]:null;if(oe===null){const Re=A(e,s[l]);F(Re,i[g]),r[g]=Re}else r[g]=F(oe,i[g]),A(e,s[l],oe),s[S]=null;g++}else le(s[v]),v--;else le(s[l]),l++;for(;g<=w;){const S=A(e,r[w+1]);F(S,i[g]),r[g++]=S}for(;l<=v;){const S=s[l++];S!==null&&le(S)}return this.ut=o,Ot(e,r),he}});var sa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,I=(e,t,a,n)=>{for(var s=n>1?void 0:n?na(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,a,s):o(s))||s);return n&&s&&sa(t,a,s),s},Le=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},f=(e,t,a)=>(Le(e,t,"read from private field"),a?a.call(e):t.get(e)),k=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Dt=(e,t,a,n)=>(Le(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a),_=(e,t,a)=>(Le(e,t,"access private method"),a),x,Z,H,Q,j,ce,pe,ue,me,Ct,E,B,ee,ge,P,U,G,te;let C=class extends Et{constructor(){super(...arguments),k(this,me),k(this,E),k(this,ee),k(this,P),k(this,G),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=_(this,ee,ge).call(this,this.value,this.length),k(this,x,""),k(this,Z,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=_(this,P,U).call(this,e+1),_(this,E,B).call(this)}),k(this,H,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=_(this,P,U).call(this,e-1),_(this,E,B).call(this)}),k(this,Q,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),k(this,j,()=>{_(this,G,te).call(this)}),k(this,ce,()=>{f(this,x)!==""&&(_(this,G,te).call(this),this.value=_(this,P,U).call(this,parseInt(this.value.toString())),_(this,E,B).call(this))}),k(this,pe,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?f(this,H).call(this):f(this,Z).call(this)}),k(this,ue,e=>{let t=!1;if(e.key==="ArrowUp")f(this,Z).call(this),t=!0;else if(e.key==="ArrowDown")f(this,H).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(f(this,x).length<this.length&&(Dt(this,x,f(this,x)+a.toString()),this.value=parseInt(f(this,x))),f(this,x).length===this.length&&(this.value=_(this,P,U).call(this,this.value),_(this,G,te).call(this),_(this,me,Ct).call(this),_(this,E,B).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",f(this,pe)),this.addEventListener("keydown",f(this,ue)),this.addEventListener("blur",f(this,ce)),this.addEventListener("focus",f(this,j)),this.addEventListener("click",f(this,Q)),this.addEventListener("mousedown",f(this,Q))}focus(e){super.focus(e),f(this,j).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=_(this,ee,ge).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};x=new WeakMap;Z=new WeakMap;H=new WeakMap;Q=new WeakMap;j=new WeakMap;ce=new WeakMap;pe=new WeakMap;ue=new WeakMap;me=new WeakSet;Ct=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof C){e.focus();break}e=e.nextElementSibling}};E=new WeakSet;B=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};ee=new WeakSet;ge=function(e,t){return String(e).padStart(t,"0")};P=new WeakSet;U=function(e){return Math.max(this.min,Math.min(this.max,e))};G=new WeakSet;te=function(){Dt(this,x,"")};C.formAssociated=!0;I([y({type:Number})],C.prototype,"value",2);I([y({type:Number})],C.prototype,"length",2);I([y({type:Number,attribute:"aria-valuemin"})],C.prototype,"min",2);I([y({type:Number,attribute:"aria-valuemax"})],C.prototype,"max",2);I([ie()],C.prototype,"displayValue",2);I([Te("value")],C.prototype,"_refreshDisplayValue",1);C=I([wt("gds-date-part-spinner")],C);const ia=Pt`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`;var ra=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,m=(e,t,a,n)=>{for(var s=n>1?void 0:n?oa(t,a):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,a,s):o(s))||s);return n&&s&&ra(t,a,s),s},Oe=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},p=(e,t,a)=>(Oe(e,t,"read from private field"),a?a.call(e):t.get(e)),d=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},de=(e,t,a,n)=>(Oe(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a),b=(e,t,a)=>(Oe(e,t,"access private method"),a),q,fe,St,K,se,ve,Mt,be,xt,ye,Wt,Y,N,_e,Ft,we,ke,$e,De,Ce,Se,Me,xe,We,Fe,ne,Ye,Ie,ae,Ee,Pe,M,Ne,Yt,Ve,It;let h=class extends Bt{constructor(){super(...arguments),d(this,fe),d(this,K),d(this,ve),d(this,be),d(this,ye),d(this,Y),d(this,_e),d(this,ae),d(this,Ne),d(this,Ve),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=b(this,ae,Ee).call(this,"y-m-d"),d(this,q,void 0),d(this,we,e=>{this._elTrigger.then(t=>{var n,s;((n=e.relatedTarget)==null?void 0:n.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),d(this,ke,e=>{this._elTrigger.then(t=>{var n,s;(n=document.getSelection())==null||n.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(a)})}),d(this,$e,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),d(this,De,e=>{this._elField.then(t=>{var o;if(e.currentTarget!==t)return;e.preventDefault();const a=(o=e.clipboardData)==null?void 0:o.getData("text/plain");if(!a)return;let n=new Date("-");const s="Invalid Date",i=a.split(this._dateFormatLayout.delimiter);if(i.length===3){const c=this._dateFormatLayout.layout,r=parseInt(i[c.findIndex(l=>l.token==="y")]),$=parseInt(i[c.findIndex(l=>l.token==="m")])-1,D=parseInt(i[c.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN($)&&!isNaN(D)&&(n=new Date(`${r}-${$+1}-${D}`))}n.toString()===s&&(n=new Date(a),n.toString()===s)||(this.value=n,b(this,Y,N).call(this))})}),d(this,Ce,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),d(this,Se,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,b(this,Y,N).call(this)}),d(this,Me,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),d(this,xe,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),d(this,We,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),d(this,Fe,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),d(this,ne,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),b(this,_e,Ft).call(this)}),d(this,Ye,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!Kt(t||new Date(0),p(this,q)||new Date(0))&&(this.value=t,b(this,Y,N).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=p(this,q))}}),d(this,Ie,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),d(this,Pe,(e,t)=>{p(this,M)[t]=e;const a=new Date;a.setFullYear(parseInt(p(this,M).year)),a.setMonth(parseInt(p(this,M).month)-1),a.setDate(parseInt(p(this,M).day)),a.toString()!=="Invalid Date"&&(this.value=a,b(this,Y,N).call(this))}),d(this,M,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=b(this,ae,Ee).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),Ut.instance.apply(this,"gds-datepicker")}render(){return W`${kt(this.label&&!this.hideLabel,()=>W`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${ze({field:!0,small:this.size==="small"})}
        id="field"
        @click=${p(this,Ce)}
        @copy=${p(this,$e)}
        @paste=${p(this,De)}
      >
        <div
          class=${ze({input:!0,"is-placeholder":!this.value})}
          @focusout=${p(this,we)}
        >
          ${Zt(ta(this._dateFormatLayout.layout,(e,t)=>W`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${e.token==="y"?4:2}
                  .value=${p(this,M)[e.name]}
                  aria-valuemin=${b(this,be,xt).call(this,e.name)}
                  aria-valuemax=${b(this,ye,Wt).call(this,e.name)}
                  aria-label=${b(this,ve,Mt).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${p(this,Ie)}
                  @change=${a=>p(this,Pe).call(this,a.detail.value,e.name)}
                  @focus=${p(this,ke)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),W`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${u("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${p(this,Ye)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(n=>n.focus())}}
      >
        <div class="header">
          <button
            @click=${p(this,Fe)}
            aria-label=${u("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${p(this,Me)}
            .maxHeight=${300}
            label="${u("Month")}"
            style="width:120px"
            size="small"
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
            @change=${p(this,xe)}
            .maxHeight=${300}
            label="${u("Year")}"
            size="small"
            hide-label
          >
            ${aa(p(this,Ne,Yt),e=>e,e=>W`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${p(this,We)}
            aria-label=${u("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${p(this,Se)}
          @gds-date-focused=${p(this,ne)}
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
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,b(this,Y,N).call(this)}}
          >
            ${u("Clear")}
          </gds-button>
          ${ea(b(this,fe,St).call(this),_t)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),b(this,K,se).call(this,new Date)}}
          >
            ${u("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){de(this,M,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");de(this,M,{year:t,month:a,day:n})}_handleOpenChange(){this.open&&(de(this,q,this.value),this._elCalendar.then(e=>e.focus()))}};q=new WeakMap;fe=new WeakSet;St=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=u("Last available date"),a=n=>{n.stopPropagation(),b(this,K,se).call(this,this.max)}):e&&e<this.min&&(t=u("First available date"),a=n=>{n.stopPropagation(),b(this,K,se).call(this,this.min)}),W`${kt(t.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>_t)}`};K=new WeakSet;se=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(p(this,ne))};ve=new WeakSet;Mt=function(e){return{year:u("Year"),month:u("Month"),day:u("Day")}[e]};be=new WeakSet;xt=function(e){return{year:1900,month:1,day:1}[e]};ye=new WeakSet;Wt=function(e){return{year:9999,month:12,day:31}[e]};Y=new WeakSet;N=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};_e=new WeakSet;Ft=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};we=new WeakMap;ke=new WeakMap;$e=new WeakMap;De=new WeakMap;Ce=new WeakMap;Se=new WeakMap;Me=new WeakMap;xe=new WeakMap;We=new WeakMap;Fe=new WeakMap;ne=new WeakMap;Ye=new WeakMap;Ie=new WeakMap;ae=new WeakSet;Ee=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),n=a.findIndex(r=>r==="y"),s=a.findIndex(r=>r==="m"),i=a.findIndex(r=>r==="d");if(n===-1||s===-1||i===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[n,s,i].sort((r,$)=>r-$).map(r=>a[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:t,layout:c}};Pe=new WeakMap;M=new WeakMap;Ne=new WeakSet;Yt=function(){var s;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=p(this,Ve,It),n=(s=this.value)==null?void 0:s.getFullYear();return{*[Symbol.iterator](){a&&(yield n);for(let i=e;i<=t;i++)yield i}}};Ve=new WeakSet;It=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[ia];h.shadowRootOptions={mode:"open",delegatesFocus:!0};m([y({converter:Ae})],h.prototype,"value",2);m([y({converter:Ae})],h.prototype,"min",2);m([y({converter:Ae})],h.prototype,"max",2);m([y({type:Boolean})],h.prototype,"open",2);m([y()],h.prototype,"label",2);m([y({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);m([y()],h.prototype,"size",2);m([y({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);m([y()],h.prototype,"dateformat",1);m([y({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);m([y({converter:qt,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);m([re("#calendar-button")],h.prototype,"test_calendarButton",2);m([ie()],h.prototype,"_focusedMonth",2);m([ie()],h.prototype,"_focusedYear",2);m([ie()],h.prototype,"_dateFormatLayout",2);m([re("#calendar")],h.prototype,"_elCalendar",2);m([re("#calendar-button")],h.prototype,"_elTrigger",2);m([re("#field")],h.prototype,"_elField",2);m([Xt("[role=spinbutton]")],h.prototype,"_elSpinners",2);m([Tt(".input")],h.prototype,"_elInput",2);m([Te("value")],h.prototype,"_handleValueChange",1);m([Te("open")],h.prototype,"_handleOpenChange",1);h=m([wt("gds-datepicker")],h);Gt();const Aa={title:"Docs/Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

Date pickers simplify the task of selecting a date in a visual representation of a calendar.
The date picker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"]},T={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date"}},X={...T},L={...T,render:e=>J`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  `},O={...T,render:e=>J`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `},V={...T,name:"Min and max dates",render:e=>J`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},R={...T,render:e=>J`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},z={...T,render:e=>J`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `};var qe,Ke,Je;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(Je=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Je.source}}};var Xe,Ze,He,Qe,je;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  \`
}`,...(He=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:He.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and has two slots for adding\nadditional information.\n\nThe `sub-label` slot sits between the label and the input, and the `message` slot sits below the\ninput. The `message` slot is used to display instructions and/or validation errors.\n\nWhen the value is changed by a user, a `change` event is fired.",...(je=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:je.description}}};var et,tt,at,st,nt;O.parameters={...O.parameters,docs:{...(et=O.parameters)==null?void 0:et.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(at=(tt=O.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(nt=(st=O.parameters)==null?void 0:st.docs)==null?void 0:nt.description}}};var it,rt,ot,lt,dt;V.parameters={...V.parameters,docs:{...(it=V.parameters)==null?void 0:it.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(ot=(rt=V.parameters)==null?void 0:rt.docs)==null?void 0:ot.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(dt=(lt=V.parameters)==null?void 0:lt.docs)==null?void 0:dt.description}}};var ht,ct,pt,ut,mt;R.parameters={...R.parameters,docs:{...(ht=R.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(pt=(ct=R.parameters)==null?void 0:ct.docs)==null?void 0:pt.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(mt=(ut=R.parameters)==null?void 0:ut.docs)==null?void 0:mt.description}}};var gt,ft,vt,bt,yt;z.parameters={...z.parameters,docs:{...(gt=z.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(vt=(ft=z.parameters)==null?void 0:ft.docs)==null?void 0:vt.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(yt=(bt=z.parameters)==null?void 0:bt.docs)==null?void 0:yt.description}}};const La=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize"];export{X as Basic,R as Disabled,z as InputFieldSize,V as MinMaxDates,L as Usage,O as WeekNumbers,La as __namedExportsOrder,Aa as default};
