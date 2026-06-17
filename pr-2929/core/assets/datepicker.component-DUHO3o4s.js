import{e as Ot,P as Ft,K as Vt,O as Rt,ae as Ht,af as E,ag as A,ah as j,a6 as tt,aa as Ut,ai as Kt,n as m,w as J,$ as _t,z as Xt,h as w,g as Yt,i as Zt,v as Jt,f as $t,y as qt,Q as Qt,I as jt,H as te,a0 as ee,T as se,d as I,E as u,A as Wt,F as ae}from"./iframe-D3YvZi8A.js";import{l as ie}from"./localized-decorator-C72_JSzS.js";import{r as q}from"./query-async-CEiMUA1f.js";import{f as ne}from"./ref-ChUsVXln.js";import{a as oe}from"./dropdown.component-CV9pomWi.js";import{G as re}from"./flex.component-BjS_6d1L.js";import{f as le}from"./form-control-host.style-DcIzr-WU.js";import{d as bt,a as he}from"./attribute-converters-CdI0trPX.js";import{i as de,l as ue,G as ce}from"./calendar.component-CGFT4lwF.js";import{I as pe,a as ge}from"./calender-add.component-C5cCZvvs.js";import{I as fe}from"./chevron-left.component-C18b9k4-.js";import{I as me}from"./chevron-right.component-DeDslTMK.js";import{G as ye}from"./popover.component-Di8qURBH.js";let ve;function _e(t){return(e,s)=>Ot(e,s,{get(){return(this.renderRoot??(ve??=document.createDocumentFragment())).querySelectorAll(t)}})}function*$e(t,e){const s=typeof e=="function";if(t!==void 0){let i=-1;for(const a of t)i>-1&&(yield s?e(i):e),i++,yield a}}function*be(t,e){if(t!==void 0){let s=0;for(const i of t)yield e(i,s++)}}const kt=(t,e,s)=>{const i=new Map;for(let a=e;a<=s;a++)i.set(t[a],a);return i},we=Ft(class extends Vt{constructor(t){if(super(t),t.type!==Rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let i;s===void 0?s=e:e!==void 0&&(i=e);const a=[],h=[];let r=0;for(const p of t)a[r]=i?i(p,r):r,h[r]=s(p,r),r++;return{values:h,keys:a}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,i]){const a=Ht(t),{values:h,keys:r}=this.dt(e,s,i);if(!Array.isArray(a))return this.ut=r,h;const p=this.ut??=[],n=[];let M,x,g=0,b=a.length-1,y=0,k=h.length-1;for(;g<=b&&y<=k;)if(a[g]===null)g++;else if(a[b]===null)b--;else if(p[g]===r[y])n[y]=E(a[g],h[y]),g++,y++;else if(p[b]===r[k])n[k]=E(a[b],h[k]),b--,k--;else if(p[g]===r[k])n[k]=E(a[g],h[k]),A(t,n[k+1],a[g]),g++,k--;else if(p[b]===r[y])n[y]=E(a[b],h[y]),A(t,a[g],a[b]),b--,y++;else if(M===void 0&&(M=kt(r,y,k),x=kt(p,g,b)),M.has(p[g]))if(M.has(p[b])){const F=x.get(r[y]),Q=F!==void 0?a[F]:null;if(Q===null){const Ct=A(t,a[g]);E(Ct,h[y]),n[y]=Ct}else n[y]=E(Q,h[y]),A(t,a[g],Q),a[F]=null;y++}else j(a[b]),b--;else j(a[g]),g++;for(;y<=k;){const F=A(t,n[k+1]);E(F,h[y]),n[y++]=F}for(;g<=b;){const F=a[g++];F!==null&&j(F)}return this.ut=r,Ut(t,n),tt}});class xe{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Ce{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Mt=t=>!Kt(t)&&typeof t.then=="function",Dt=1073741823;class ke extends ne{constructor(){super(...arguments),this._$Cwt=Dt,this._$Cbt=[],this._$CK=new xe(this),this._$CX=new Ce}render(...e){return e.find(s=>!Mt(s))??tt}update(e,s){const i=this._$Cbt;let a=i.length;this._$Cbt=s;const h=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let p=0;p<s.length&&!(p>this._$Cwt);p++){const n=s[p];if(!Mt(n))return this._$Cwt=p,n;p<a&&n===i[p]||(this._$Cwt=Dt,a=0,Promise.resolve(n).then(async M=>{for(;r.get();)await r.get();const x=h.deref();if(x!==void 0){const g=x._$Cbt.indexOf(n);g>-1&&g<x._$Cwt&&(x._$Cwt=g,x.setValue(M))}}))}return tt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Me=Ft(ke);var De=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,It=t=>{throw TypeError(t)},N=(t,e,s,i)=>{for(var a=i>1?void 0:i?Se(e,s):e,h=t.length-1,r;h>=0;h--)(r=t[h])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&De(e,s,a),a},wt=(t,e,s)=>e.has(t)||It("Cannot "+s),_=(t,e,s)=>(wt(t,e,"read from private field"),s?s.call(t):e.get(t)),Y=(t,e,s)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Et=(t,e,s,i)=>(wt(t,e,"write to private field"),e.set(t,s),s),C=(t,e,s)=>(wt(t,e,"access private method"),s),W,O,V,R,H,et,st,at,$,Tt,z,it,B,U;let D=class extends Xt{constructor(){super(...arguments),Y(this,$),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=C(this,$,it).call(this,this.value,this.length),Y(this,W,""),Y(this,O,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=C(this,$,B).call(this,t+1),C(this,$,z).call(this)}),Y(this,V,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=C(this,$,B).call(this,t-1),C(this,$,z).call(this)}),Y(this,R,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),Y(this,H,()=>{C(this,$,U).call(this)}),Y(this,et,()=>{_(this,W)!==""&&(C(this,$,U).call(this),this.value=C(this,$,B).call(this,parseInt(this.value.toString())),C(this,$,z).call(this))}),Y(this,st,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?_(this,V).call(this):_(this,O).call(this)}),Y(this,at,t=>{let e=!1;if(t.key==="ArrowUp")_(this,O).call(this),e=!0;else if(t.key==="ArrowDown")_(this,V).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(_(this,W).length<this.length&&(Et(this,W,_(this,W)+s.toString()),this.value=parseInt(_(this,W))),_(this,W).length===this.length&&(this.value=C(this,$,B).call(this,this.value),C(this,$,U).call(this),C(this,$,Tt).call(this),C(this,$,z).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",_(this,st)),this.addEventListener("keydown",_(this,at)),this.addEventListener("blur",_(this,et)),this.addEventListener("focus",_(this,H)),this.addEventListener("click",_(this,R)),this.addEventListener("mousedown",_(this,R))}focus(t){super.focus(t),_(this,H).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=C(this,$,it).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;O=new WeakMap;V=new WeakMap;R=new WeakMap;H=new WeakMap;et=new WeakMap;st=new WeakMap;at=new WeakMap;$=new WeakSet;Tt=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};z=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};it=function(t,e){return String(t).padStart(e,"0")};B=function(t){return Math.max(this.min,Math.min(this.max,t))};U=function(){Et(this,W,"")};D.formAssociated=!0;N([m({type:Number})],D.prototype,"value",2);N([m({type:Number})],D.prototype,"length",2);N([m({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);N([m({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);N([J()],D.prototype,"displayValue",2);N([_t("value")],D.prototype,"_refreshDisplayValue",1);D=N([Yt("gds-date-part-spinner")],D);const Fe=Zt`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-5xs);
      font: var(--gds-sys-text-detail-m-regular);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-s-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-4xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-4xs);
      margin: calc(-1 * var(--gds-sys-space-4xs));
      border-radius: var(--gds-sys-radius-3xs);

      &:focus {
        background-color: var(--gds-sys-color-l3-neutral-03);
        color: var(--gds-sys-color-content-neutral-05);
      }
    }
  }
`;var Ye=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Nt=t=>{throw TypeError(t)},l=(t,e,s,i)=>{for(var a=i>1?void 0:i?We(e,s):e,h=t.length-1,r;h>=0;h--)(r=t[h])&&(a=(i?r(e,s,a):r(a))||a);return i&&a&&Ye(e,s,a),a},xt=(t,e,s)=>e.has(t)||Nt("Cannot "+s),c=(t,e,s)=>(xt(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?Nt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),G=(t,e,s,i)=>(xt(t,e,"write to private field"),e.set(t,s),s),f=(t,e,s)=>(xt(t,e,"access private method"),s),K,L,d,Pt,At,X,zt,Bt,nt,T,P,ot,rt,lt,ht,dt,ut,ct,pt,gt,Z,ft,mt,yt,vt,S,Lt,Gt;let o=class extends ee{constructor(){super(),v(this,d),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,v(this,K,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,d,yt).call(this,"y-m-d"),v(this,L),v(this,ot,t=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(e.firstChild,0),s.setEnd(e.lastChild,4),document.getSelection()?.addRange(s)})}),v(this,rt,t=>{this._elFieldAsync.then(e=>{t.currentTarget===e&&(t.preventDefault(),t.clipboardData?.setData("text/plain",this.displayValue))})}),v(this,lt,t=>{this._elFieldAsync.then(e=>{if(t.currentTarget!==e)return;t.preventDefault();const s=t.clipboardData?.getData("text/plain");if(!s)return;let i=new Date("-");const a="Invalid Date",h=s.split(this._dateFormatLayout.delimiter);if(h.length===3){const r=this._dateFormatLayout.layout,p=parseInt(h[r.findIndex(x=>x.token==="y")]),n=parseInt(h[r.findIndex(x=>x.token==="m")])-1,M=parseInt(h[r.findIndex(x=>x.token==="d")]);!isNaN(p)&&!isNaN(n)&&!isNaN(M)&&(i=new Date(`${p}-${n+1}-${M}`))}i.toString()===a&&(i=new Date(s),i.toString()===a)||(this.value=i,f(this,d,T).call(this))})}),v(this,ht,t=>{this._elSpinners[0]?.focus()}),v(this,dt,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,f(this,d,T).call(this),f(this,d,P).call(this)}),v(this,ut,t=>{t.stopPropagation(),this._focusedMonth=t.target?.value}),v(this,ct,t=>{t.stopPropagation(),this._focusedYear=t.target?.value}),v(this,pt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),v(this,gt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),v(this,Z,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,d,P).call(this)}),v(this,ft,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,f(this,d,T).call(this);return}!de(e||new Date(0),c(this,L)||new Date(0))&&(this.value=new Date(e),f(this,d,T).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=c(this,L),f(this,d,P).call(this))}}),v(this,mt,t=>{const e=Array.from(this._elSpinners).findIndex(s=>s===t.target);if(t.key==="ArrowRight"){const s=this._elSpinners[e+1];s&&s.focus()}if(t.key==="ArrowLeft"){const s=this._elSpinners[e-1];s&&s.focus()}}),v(this,vt,(t,e)=>{c(this,S)[e]=t;const s=new Date("0000-01-01");s.setUTCHours(this.utcHours,0,0,0),s.setUTCFullYear(parseInt(c(this,S).year)),s.setUTCMonth(parseInt(c(this,S).month)-1);const i=ue(s).getDate(),a=i<parseInt(c(this,S).day)?i:parseInt(c(this,S).day);s.setUTCDate(isNaN(a)?1:a),s.toString()!=="Invalid Date"&&(this.value=s,f(this,d,T).call(this),f(this,d,P).call(this))}),v(this,S,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return c(this,K)}set utcHours(t){G(this,K,t),this._internalValue?.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=f(this,d,yt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),se.instance.apply(this,"gds-datepicker")}focus(t){this._getValidityAnchor()?.focus(t)}render(){return w`
      ${I(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${I(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${c(this,ht)}
        @copy=${c(this,rt)}
        @paste=${c(this,lt)}
        id="field"
      >
        <div class="spinners">
          ${$e(be(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${c(this,S)[t.name]}
                  aria-valuemin=${f(this,d,Bt).call(this,t.name)}
                  aria-valuemax=${f(this,d,nt).call(this,t.name)}
                  aria-label=${f(this,d,zt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,d,nt).call(this,t.name).toString().length}
                  @keydown=${c(this,mt)}
                  @change=${s=>c(this,vt).call(this,s.detail.value,t.name)}
                  @focus=${c(this,ot)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),w`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${u("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${I(this.size==="small",()=>w`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${I(f(this,d,Pt).call(this),()=>w`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`)}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${c(this,ft)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{t.target?.id==="calendar-popover"&&this._elCalendar.then(s=>s.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${c(this,gt)}
              aria-label=${u("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${c(this,ut)}
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
              @change=${c(this,ct)}
              .maxHeight=${300}
              label="${u("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${we(c(this,d,Lt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${c(this,pt)}
              aria-label=${u("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${c(this,dt)}
            @gds-date-focused=${c(this,Z)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${I(this.clearable||!this.hideTodayButton,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${I(this.clearable,()=>w` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,f(this,d,P).call(this),f(this,d,T).call(this)}}
                      aria-label=${u("Clear selected date")}
                    >
                      ${u("Clear")}
                    </gds-button>`)}
                ${Me(f(this,d,At).call(this),Wt)}
                ${I(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),f(this,d,X).call(this,new Date)}}
                      aria-label=${u("Select today's date")}
                    >
                      ${u("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){G(this,S,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),s=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");G(this,S,{year:e,month:s,day:i})}_handleOpenChange(){this.open&&(G(this,L,this.value),this._elCalendar.then(t=>t.focus()))}};K=new WeakMap;L=new WeakMap;d=new WeakSet;Pt=function(){return!this.plain};At=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=u("Last available date"),s=i=>{i.stopPropagation(),f(this,d,X).call(this,this.max)}):t&&t<this.min&&(e=u("First available date"),s=i=>{i.stopPropagation(),f(this,d,X).call(this,this.min)}),w`${I(e.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>Wt)}`};X=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(c(this,Z))};zt=function(t){return`${{year:u("Year"),month:u("Month"),day:u("Day")}[t]} ${this.label}`};Bt=function(t){return{year:1900,month:1,day:1}[t]};nt=function(t){return{year:9999,month:12,day:31}[t]};T=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};P=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ot=new WeakMap;rt=new WeakMap;lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ut=new WeakMap;ct=new WeakMap;pt=new WeakMap;gt=new WeakMap;Z=new WeakMap;ft=new WeakMap;mt=new WeakMap;yt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),i=s.findIndex(n=>n==="y"),a=s.findIndex(n=>n==="m"),h=s.findIndex(n=>n==="d");if(i===-1||a===-1||h===-1)throw new Error("Invalid date format for <gds-datepicker>");const p=[i,a,h].sort((n,M)=>n-M).map(n=>s[n]).map(n=>({token:n,name:n==="y"?"year":n==="m"?"month":"day"}));return{delimiter:e,layout:p}};vt=new WeakMap;S=new WeakMap;Lt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=c(this,d,Gt),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let a=t;a<=e;a++)yield a}}};Gt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};o.styles=[Jt,le,Fe];l([m({converter:bt})],o.prototype,"value",1);l([m({converter:bt})],o.prototype,"min",2);l([m({converter:bt})],o.prototype,"max",2);l([m({type:Boolean})],o.prototype,"open",2);l([m({attribute:"supporting-text"})],o.prototype,"supportingText",2);l([m({type:String})],o.prototype,"size",2);l([m({type:Boolean})],o.prototype,"plain",2);l([m({type:Boolean,attribute:"show-week-numbers"})],o.prototype,"showWeekNumbers",2);l([m({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);l([m({type:Boolean,attribute:"clearable"})],o.prototype,"clearable",2);l([m({type:Boolean,attribute:"hide-today-button"})],o.prototype,"hideTodayButton",2);l([m({type:Number,attribute:"utc-hours"})],o.prototype,"utcHours",1);l([m()],o.prototype,"dateformat",1);l([m({type:Boolean,attribute:"disabled-weekends"})],o.prototype,"disabledWeekends",2);l([m({converter:he,attribute:"disabled-dates"})],o.prototype,"disabledDates",2);l([m({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);l([q("#calendar-button")],o.prototype,"test_calendarButton",2);l([$t("#clear-button")],o.prototype,"test_clearButton",2);l([$t("#today-button")],o.prototype,"test_todayButton",2);l([J()],o.prototype,"_focusedMonth",2);l([J()],o.prototype,"_focusedYear",2);l([J()],o.prototype,"_dateFormatLayout",2);l([q("#calendar")],o.prototype,"_elCalendar",2);l([q("#calendar-button")],o.prototype,"_elTrigger",2);l([q("#field")],o.prototype,"_elFieldAsync",2);l([_e("[role=spinbutton]")],o.prototype,"_elSpinners",2);l([$t("#field")],o.prototype,"_elField",2);l([_t("value")],o.prototype,"_handleValueChange",1);l([_t("open")],o.prototype,"_handleOpenChange",1);o=l([qt({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),ie()],o);let St=class extends Qt(jt(te(o))){};St=l([Yt("gds-datepicker",{dependsOn:[re,ae,oe,ce,ye,pe,ge,fe,me]})],St);export{St as G,Me as m};
