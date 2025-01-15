import{m as c}from"./runtime-CMQcyTl6.js";import{l as zt}from"./localized-decorator-iufJoRiP.js";import{T as j,i as Ot,a as Vt,E as Mt}from"./lit-element-C_s9q329.js";import{n as b,r as X,g as Dt,h as W}from"./custom-element-scoping-b4lD3laR.js";import{e as Rt,a as Bt}from"./query-p8xgzTDt.js";import{r as H}from"./query-async-MEroNOeJ.js";import{o as Gt}from"./field-base-CiPR03RA.js";import{e as St,i as qt,t as Kt}from"./directive-CF8sV3Lr.js";import{p as Xt,v as E,r as I,M as J,m as Ht,i as Zt}from"./directive-helpers-C6DiESt7.js";import{f as Jt}from"./ref-D_ho-JAG.js";import{n as Q}from"./when-BR7zwNJC.js";import{t as Ut}from"./tokens.style-B6Zq2CtY.js";import{T as jt}from"./transitional-styles-Bnhy62cI.js";import{w as _t}from"./watch-tFciLXSI.js";import{d as yt,a as Qt}from"./attribute-converters-CdI0trPX.js";import{a as te}from"./button-TZWvD3KV.js";import"./flex-DnAdyWkx.js";import"./dropdown-DNtOaa4Z.js";import"./menu-heading-DHW_mlC-.js";import{i as ee}from"./calendar-snszPpRA.js";import"./calender-add-BZH2uut0.js";import"./chevron-right-BwEVIrUT.js";import"./popover-DRpidVSh.js";import"./backdrop-BGzK9qgd.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se;function ae(t){return(e,s)=>Rt(e,s,{get(){return(this.renderRoot??se??(se=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ie(t,e){const s=typeof e=="function";if(t!==void 0){let i=-1;for(const a of t)i>-1&&(yield s?e(i):e),i++,yield a}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},ne=St(class extends qt{constructor(t){if(super(t),t.type!==Kt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],n=[];let o=0;for(const d of t)a[o]=i?i(d,o):o,n[o]=s(d,o),o++;return{values:n,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Xt(t),{values:n,keys:o}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=o,n;const d=this.ut??(this.ut=[]),r=[];let k,C,l=0,$=a.length-1,f=0,x=n.length-1;for(;l<=$&&f<=x;)if(a[l]===null)l++;else if(a[$]===null)$--;else if(d[l]===o[f])r[f]=E(a[l],n[f]),l++,f++;else if(d[$]===o[x])r[x]=E(a[$],n[x]),$--,x--;else if(d[l]===o[x])r[x]=E(a[l],n[x]),I(t,r[x+1],a[l]),l++,x--;else if(d[$]===o[f])r[f]=E(a[$],n[f]),I(t,a[l],a[$]),$--,f++;else if(k===void 0&&(k=xt(o,f,x),C=xt(d,l,$)),k.has(d[l]))if(k.has(d[$])){const D=C.get(o[f]),Z=D!==void 0?a[D]:null;if(Z===null){const wt=I(t,a[l]);E(wt,n[f]),r[f]=wt}else r[f]=E(Z,n[f]),I(t,a[l],Z),a[D]=null;f++}else J(a[$]),$--;else J(a[l]),l++;for(;f<=x;){const D=I(t,r[x+1]);E(D,n[f]),r[f++]=D}for(;l<=$;){const D=a[l++];D!==null&&J(D)}return this.ut=o,Ht(t,r),j}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class oe{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=t=>!Zt(t)&&typeof t.then=="function",Ct=1073741823;class le extends Jt{constructor(){super(...arguments),this._$Cwt=Ct,this._$Cbt=[],this._$CK=new re(this),this._$CX=new oe}render(...e){return e.find(s=>!kt(s))??j}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<s.length&&!(d>this._$Cwt);d++){const r=s[d];if(!kt(r))return this._$Cwt=d,r;d<a&&r===i[d]||(this._$Cwt=Ct,a=0,Promise.resolve(r).then(async k=>{for(;o.get();)await o.get();const C=n.deref();if(C!==void 0){const l=C._$Cbt.indexOf(r);l>-1&&l<C._$Cwt&&(C._$Cwt=l,C.setValue(k))}}))}return j}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const he=St(le),de=Ot`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
      font-family: inherit;
      min-width: 200px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-width: 10ch;
      gap: var(--gds-space-2xs);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      border-radius: var(--gds-space-2xs);
      outline: none;
      padding-inline: var(--gds-space-2xs);
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l3-background-primary);
        color: var(--gds-color-l3-content-primary);
      }

      &[data-max-width='4'] {
        width: calc(4ch + (var(--gds-space-2xs) * 2));
      }

      &[data-max-width='2'] {
        width: calc(2ch + (var(--gds-space-2xs) * 2));
      }
    }
  }
`;var ce=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Ft=t=>{throw TypeError(t)},N=(t,e,s,i)=>{for(var a=i>1?void 0:i?pe(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ce(e,s,a),a},$t=(t,e,s)=>e.has(t)||Ft("Cannot "+s),_=(t,e,s)=>($t(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?Ft("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Yt=(t,e,s,i)=>($t(t,e,"write to private field"),e.set(t,s),s),w=(t,e,s)=>($t(t,e,"access private method"),s),Y,O,V,R,B,tt,et,st,y,Wt,P,at,T,G;let M=class extends Vt{constructor(){super(...arguments),S(this,y),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=w(this,y,at).call(this,this.value,this.length),S(this,Y,""),S(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,y,T).call(this,t+1),w(this,y,P).call(this)}),S(this,V,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,y,T).call(this,t-1),w(this,y,P).call(this)}),S(this,R,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),S(this,B,()=>{w(this,y,G).call(this)}),S(this,tt,()=>{_(this,Y)!==""&&(w(this,y,G).call(this),this.value=w(this,y,T).call(this,parseInt(this.value.toString())),w(this,y,P).call(this))}),S(this,et,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,V).call(this):_(this,O).call(this)}),S(this,st,t=>{let e=!1;if(t.key==="ArrowUp")_(this,O).call(this),e=!0;else if(t.key==="ArrowDown")_(this,V).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,Y).length<this.length&&(Yt(this,Y,_(this,Y)+s.toString()),this.value=parseInt(_(this,Y))),_(this,Y).length===this.length&&(this.value=w(this,y,T).call(this,this.value),w(this,y,G).call(this),w(this,y,Wt).call(this),w(this,y,P).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,et)),this.addEventListener("keydown",_(this,st)),this.addEventListener("blur",_(this,tt)),this.addEventListener("focus",_(this,B)),this.addEventListener("click",_(this,R)),this.addEventListener("mousedown",_(this,R))}focus(t){super.focus(t),_(this,B).call(this)}render(){return W`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,y,at).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap;O=new WeakMap;V=new WeakMap;R=new WeakMap;B=new WeakMap;tt=new WeakMap;et=new WeakMap;st=new WeakMap;y=new WeakSet;Wt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof M){t.focus();break}t=t.nextElementSibling}};P=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};at=function(t,e){return String(t).padStart(e,"0")};T=function(t){return Math.max(this.min,Math.min(this.max,t))};G=function(){Yt(this,Y,"")};M.formAssociated=!0;N([b({type:Number})],M.prototype,"value",2);N([b({type:Number})],M.prototype,"length",2);N([b({type:Number,attribute:"aria-valuemin"})],M.prototype,"min",2);N([b({type:Number,attribute:"aria-valuemax"})],M.prototype,"max",2);N([X()],M.prototype,"displayValue",2);N([_t("value")],M.prototype,"_refreshDisplayValue",1);M=N([Dt("gds-date-part-spinner")],M);var ue=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,Et=t=>{throw TypeError(t)},g=(t,e,s,i)=>{for(var a=i>1?void 0:i?ge(e,s):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ue(e,s,a),a},bt=(t,e,s)=>e.has(t)||Et("Cannot "+s),p=(t,e,s)=>(bt(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?Et("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),U=(t,e,s,i)=>(bt(t,e,"write to private field"),e.set(t,s),s),m=(t,e,s)=>(bt(t,e,"access private method"),s),L,u,Nt,q,At,It,it,A,z,Pt,nt,rt,ot,lt,ht,dt,ct,pt,ut,K,gt,ft,mt,vt,F,Tt,Lt;let h=class extends te{constructor(){super(...arguments),v(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.showWeekNumbers=!1,this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=m(this,u,mt).call(this,"y-m-d"),v(this,L),v(this,Pt,t=>{this._elTrigger.then(e=>{var i,a;((i=t.relatedTarget)==null?void 0:i.parentElement)!==t.target&&((a=document.getSelection())==null||a.removeAllRanges())})}),v(this,nt,t=>{this._elTrigger.then(e=>{var i,a;(i=document.getSelection())==null||i.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),(a=document.getSelection())==null||a.addRange(s)})}),v(this,rt,t=>{this._elFieldAsync.then(e=>{var s;t.currentTarget===e&&(t.preventDefault(),(s=t.clipboardData)==null||s.setData("text/plain",this.displayValue))})}),v(this,ot,t=>{this._elFieldAsync.then(e=>{var o;if(t.currentTarget!==e)return;t.preventDefault();const s=(o=t.clipboardData)==null?void 0:o.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const d=this._dateFormatLayout.layout,r=parseInt(n[d.findIndex(l=>l.token==="y")]),k=parseInt(n[d.findIndex(l=>l.token==="m")])-1,C=parseInt(n[d.findIndex(l=>l.token==="d")]);!isNaN(r)&&!isNaN(k)&&!isNaN(C)&&(i=new Date(`${r}-${k+1}-${C}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,m(this,u,A).call(this))})}),v(this,lt,t=>{var e;(e=this._elSpinners[0])==null||e.focus()}),v(this,ht,t=>{t.stopPropagation(),this.value=t.detail,this.open=!1,m(this,u,A).call(this),m(this,u,z).call(this)}),v(this,dt,t=>{var e;t.stopPropagation(),this._focusedMonth=(e=t.target)==null?void 0:e.value}),v(this,ct,t=>{var e;t.stopPropagation(),this._focusedYear=(e=t.target)==null?void 0:e.value}),v(this,pt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),v(this,ut,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),v(this,K,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),m(this,u,z).call(this)}),v(this,gt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;!ee(e||new Date(0),p(this,L)||new Date(0))&&(this.value=e,m(this,u,A).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=p(this,L),m(this,u,z).call(this))}}),v(this,ft,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),v(this,vt,(t,e)=>{p(this,F)[e]=t;const s=new Date;s.setFullYear(parseInt(p(this,F).year)),s.setMonth(parseInt(p(this,F).month)-1),s.setDate(parseInt(p(this,F).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,m(this,u,A).call(this),m(this,u,z).call(this))}),v(this,F,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=m(this,u,mt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),jt.instance.apply(this,"gds-datepicker")}render(){return W`
      <gds-form-control-header class="size-${this.size}">
        <label id="label" for="spinner-0" slot="label">${this.label}</label>
        ${Q(this.supportingText.length>0,()=>W`<span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>`)}
        <slot
          id="supporting-text-slot"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
        <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
        <slot
          id="sub-label-slot"
          name="sub-label"
          slot="supporting-text"
        ></slot>
      </gds-form-control-header>
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${p(this,lt)}
        @copy=${p(this,rt)}
        @paste=${p(this,ot)}
        id="field"
      >
        <div class="spinners">
          ${ie(Gt(this._dateFormatLayout.layout,(t,e)=>W`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${p(this,F)[t.name]}
                  aria-valuemin=${m(this,u,It).call(this,t.name)}
                  aria-valuemax=${m(this,u,it).call(this,t.name)}
                  aria-label=${m(this,u,At).call(this,t.name)}
                  aria-describedby="label supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${m(this,u,it).call(this,t.name).toString().length}
                  @keydown=${p(this,ft)}
                  @change=${s=>p(this,vt).call(this,s.detail.value,t.name)}
                  @focus=${p(this,nt)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),W`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          aria-label="${c("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          <gds-icon-calender-add></gds-icon-calender-add>
        </gds-button>
      </gds-field-base>

      <gds-form-control-footer class="size-${this.size}">
        ${Q(this.invalid,()=>W`
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                ?solid=${!this._isUsingTransitionalStyles}
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          `)}
      </gds-form-control-footer>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${p(this,gt)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{var s;((s=t.target)==null?void 0:s.id)==="calendar-popover"&&this._elCalendar.then(i=>i.focus())}}
      >
        <gds-flex
          align-items="center"
          justify-content="space-between"
          gap="s"
          padding="m m 0 m"
        >
          <gds-button
            @click=${p(this,ut)}
            aria-label=${c("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${p(this,dt)}
            .maxHeight=${300}
            label="${c("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${c("January")}</gds-option>
            <gds-option value="1">${c("February")}</gds-option>
            <gds-option value="2">${c("March")}</gds-option>
            <gds-option value="3">${c("April")}</gds-option>
            <gds-option value="4">${c("May")}</gds-option>
            <gds-option value="5">${c("June")}</gds-option>
            <gds-option value="6">${c("July")}</gds-option>
            <gds-option value="7">${c("August")}</gds-option>
            <gds-option value="8">${c("September")}</gds-option>
            <gds-option value="9">${c("October")}</gds-option>
            <gds-option value="10">${c("November")}</gds-option>
            <gds-option value="11">${c("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${p(this,ct)}
            .maxHeight=${300}
            label="${c("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${ne(p(this,u,Tt),t=>t,t=>W`<gds-option value=${t}>${t}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${p(this,pt)}
            aria-label=${c("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </gds-flex>

        <gds-calendar
          id="calendar"
          @change=${p(this,ht)}
          @gds-date-focused=${p(this,K)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <gds-flex
          align-items="center"
          justify-content="space-between"
          padding="0 m m m"
        >
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,m(this,u,A).call(this)}}
          >
            ${c("Clear")}
          </gds-button>
          ${he(m(this,u,Nt).call(this),Mt)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${t=>{t.stopPropagation(),m(this,u,q).call(this,new Date)}}
          >
            ${c("Today")}
          </gds-button>
        </gds-flex>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){U(this,F,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");U(this,F,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(U(this,L,this.value),this._elCalendar.then(t=>t.focus()))}};L=new WeakMap;u=new WeakSet;Nt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=c("Last available date"),s=i=>{i.stopPropagation(),m(this,u,q).call(this,this.max)}):t&&t<this.min&&(e=c("First available date"),s=i=>{i.stopPropagation(),m(this,u,q).call(this,this.min)}),W`${Q(e.length>0,()=>W`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Mt)}`};q=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(p(this,K))};At=function(t){return{year:c("Year"),month:c("Month"),day:c("Day")}[t]};It=function(t){return{year:1900,month:1,day:1}[t]};it=function(t){return{year:9999,month:12,day:31}[t]};A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};z=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};Pt=new WeakMap;nt=new WeakMap;rt=new WeakMap;ot=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ct=new WeakMap;pt=new WeakMap;ut=new WeakMap;K=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(r=>r==="y"),a=s.findIndex(r=>r==="m"),n=s.findIndex(r=>r==="d");if(i===-1||a===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const d=[i,a,n].sort((r,k)=>r-k).map(r=>s[r]).map(r=>({token:r,name:r==="y"?"year":r==="m"?"month":"day"}));return{delimiter:e,layout:d}};vt=new WeakMap;F=new WeakMap;Tt=function(){var a;const t=this.min.getFullYear(),e=this.max.getFullYear(),s=p(this,u,Lt),i=(a=this.value)==null?void 0:a.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=e;n++)yield n}}};Lt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};h.styles=[Ut,de];g([b({converter:yt})],h.prototype,"value",2);g([b({converter:yt})],h.prototype,"min",2);g([b({converter:yt})],h.prototype,"max",2);g([b({type:Boolean})],h.prototype,"open",2);g([b({attribute:"supporting-text"})],h.prototype,"supportingText",2);g([b({type:String})],h.prototype,"size",2);g([b({type:Boolean,attribute:"show-week-numbers"})],h.prototype,"showWeekNumbers",2);g([b({type:Boolean,attribute:"hide-label"})],h.prototype,"hideLabel",2);g([b()],h.prototype,"dateformat",1);g([b({type:Boolean,attribute:"disabled-weekends"})],h.prototype,"disabledWeekends",2);g([b({converter:Qt,attribute:"disabled-dates"})],h.prototype,"disabledDates",2);g([H("#calendar-button")],h.prototype,"test_calendarButton",2);g([X()],h.prototype,"_focusedMonth",2);g([X()],h.prototype,"_focusedYear",2);g([X()],h.prototype,"_dateFormatLayout",2);g([H("#calendar")],h.prototype,"_elCalendar",2);g([H("#calendar-button")],h.prototype,"_elTrigger",2);g([H("#field")],h.prototype,"_elFieldAsync",2);g([ae("[role=spinbutton]")],h.prototype,"_elSpinners",2);g([Bt("#field")],h.prototype,"_elField",2);g([_t("value")],h.prototype,"_handleValueChange",1);g([_t("open")],h.prototype,"_handleOpenChange",1);h=g([Dt("gds-datepicker"),zt()],h);
