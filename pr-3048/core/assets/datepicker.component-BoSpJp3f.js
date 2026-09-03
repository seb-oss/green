import{f as Bt,Q as Lt,N as Vt,P as Gt,af as Ht,ag as A,ah as P,ai as et,a4 as Ut,ac as Jt,n as g,C as L,$ as Q,B as qt,h as w,a as Ft,i as Kt,y as Xt,l as j,D as Qt,R as jt,z as Zt,J as te,a0 as ee,T as ae,d as I,H as p,A as se,I as ie}from"./iframe-CrCFIEgk.js";import{l as ne}from"./localized-decorator-BeH7Pw7b.js";import{r as Z}from"./query-async-B8yIX9qS.js";import{a as oe}from"./dropdown.component-Hz-UgMb1.js";import{G as re}from"./flex.component-DPNA_hsn.js";import{f as le}from"./form-control-host.style-D1aqlTsP.js";import{d as $t,a as he}from"./attribute-converters-CdI0trPX.js";import{i as N,l as de,G as ue,s as pe}from"./calendar.component-Droyn3TK.js";import{I as ce,a as ge}from"./calender-add.component-Dxul6KJH.js";import{I as fe}from"./chevron-left.component-DDNNy6D_.js";import{I as me}from"./chevron-right.component-C_xfnKts.js";import{G as ye}from"./popover.component-F8NAHuGJ.js";let ve;function _e(t){return(e,a)=>Bt(e,a,{get(){return(this.renderRoot??(ve??=document.createDocumentFragment())).querySelectorAll(t)}})}function*be(t,e){const a=typeof e=="function";if(t!==void 0){let i=-1;for(const s of t)i>-1&&(yield a?e(i):e),i++,yield s}}function*$e(t,e){if(t!==void 0){let a=0;for(const i of t)yield e(i,a++)}}const Ct=(t,e,a)=>{const i=new Map;for(let s=e;s<=a;s++)i.set(t[s],s);return i},xe=Lt(class extends Vt{constructor(t){if(super(t),t.type!==Gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,a){let i;a===void 0?a=e:e!==void 0&&(i=e);const s=[],l=[];let h=0;for(const b of t)s[h]=i?i(b,h):h,l[h]=a(b,h),h++;return{values:l,keys:s}}render(t,e,a){return this.dt(t,e,a).values}update(t,[e,a,i]){const s=Ht(t),{values:l,keys:h}=this.dt(e,a,i);if(!Array.isArray(s))return this.ut=h,l;const b=this.ut??=[],d=[];let C,Y,f=0,$=s.length-1,m=0,k=l.length-1;for(;f<=$&&m<=k;)if(s[f]===null)f++;else if(s[$]===null)$--;else if(b[f]===h[m])d[m]=A(s[f],l[m]),f++,m++;else if(b[$]===h[k])d[k]=A(s[$],l[k]),$--,k--;else if(b[f]===h[k])d[k]=A(s[f],l[k]),P(t,d[k+1],s[f]),f++,k--;else if(b[$]===h[m])d[m]=A(s[$],l[m]),P(t,s[f],s[$]),$--,m++;else if(C===void 0&&(C=Ct(h,m,k),Y=Ct(b,f,$)),C.has(b[f]))if(C.has(b[$])){const S=Y.get(h[m]),tt=S!==void 0?s[S]:null;if(tt===null){const Dt=P(t,s[f]);A(Dt,l[m]),d[m]=Dt}else d[m]=A(tt,l[m]),P(t,s[f],tt),s[S]=null;m++}else et(s[$]),$--;else et(s[f]),f++;for(;m<=k;){const S=P(t,d[k+1]);A(S,l[m]),d[m++]=S}for(;f<=$;){const S=s[f++];S!==null&&et(S)}return this.ut=h,Jt(t,d),Ut}});var we=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Wt=t=>{throw TypeError(t)},T=(t,e,a,i)=>{for(var s=i>1?void 0:i?ke(e,a):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(s=(i?h(e,a,s):h(s))||s);return i&&s&&we(e,a,s),s},xt=(t,e,a)=>e.has(t)||Wt("Cannot "+a),v=(t,e,a)=>(xt(t,e,"read from private field"),a?a.call(t):e.get(t)),F=(t,e,a)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),Yt=(t,e,a,i)=>(xt(t,e,"write to private field"),e.set(t,a),a),x=(t,e,a)=>(xt(t,e,"access private method"),a),W,G,H,U,J,at,st,it,_,At,R,nt,z,q;let M=class extends qt{constructor(){super(...arguments),F(this,_),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,_,nt).call(this,this.value,this.length),F(this,W,""),F(this,G,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,_,z).call(this,t+1),x(this,_,R).call(this)}),F(this,H,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,_,z).call(this,t-1),x(this,_,R).call(this)}),F(this,U,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,J,()=>{x(this,_,q).call(this)}),F(this,at,()=>{v(this,W)!==""&&(x(this,_,q).call(this),this.value=x(this,_,z).call(this,parseInt(this.value.toString())),x(this,_,R).call(this))}),F(this,st,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?v(this,H).call(this):v(this,G).call(this)}),F(this,it,t=>{let e=!1;if(t.key==="ArrowUp")v(this,G).call(this),e=!0;else if(t.key==="ArrowDown")v(this,H).call(this),e=!0;else{const a=parseInt(t.key);isNaN(a)||(v(this,W).length<this.length&&(Yt(this,W,v(this,W)+a.toString()),this.value=parseInt(v(this,W))),v(this,W).length===this.length&&(this.value=x(this,_,z).call(this,this.value),x(this,_,q).call(this),x(this,_,At).call(this),x(this,_,R).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",v(this,st)),this.addEventListener("keydown",v(this,it)),this.addEventListener("blur",v(this,at)),this.addEventListener("focus",v(this,J)),this.addEventListener("click",v(this,U)),this.addEventListener("mousedown",v(this,U))}focus(t){super.focus(t),v(this,J).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,_,nt).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;G=new WeakMap;H=new WeakMap;U=new WeakMap;J=new WeakMap;at=new WeakMap;st=new WeakMap;it=new WeakMap;_=new WeakSet;At=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof M){t.focus();break}t=t.nextElementSibling}};R=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};nt=function(t,e){return String(t).padStart(e,"0")};z=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){Yt(this,W,"")};M.formAssociated=!0;T([g({type:Number})],M.prototype,"value",2);T([g({type:Number})],M.prototype,"length",2);T([g({type:Number,attribute:"aria-valuemin"})],M.prototype,"min",2);T([g({type:Number,attribute:"aria-valuemax"})],M.prototype,"max",2);T([L()],M.prototype,"displayValue",2);T([Q("value")],M.prototype,"_refreshDisplayValue",1);M=T([Ft("gds-date-part-spinner")],M);const Me=Kt`
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
`;var De=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,It=t=>{throw TypeError(t)},o=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ce(e,a):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(s=(i?h(e,a,s):h(s))||s);return i&&s&&De(e,a,s),s},wt=(t,e,a)=>e.has(t)||It("Cannot "+a),c=(t,e,a)=>(wt(t,e,"read from private field"),a?a.call(t):e.get(t)),y=(t,e,a)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),V=(t,e,a,i)=>(wt(t,e,"write to private field"),e.set(t,a),a),u=(t,e,a)=>(wt(t,e,"access private method"),a),K,B,r,Ot,Tt,Et,kt,Mt,ot,Nt,Pt,rt,O,E,lt,ht,dt,ut,pt,ct,gt,ft,mt,X,yt,vt,_t,bt,D,Rt,zt;let n=class extends ee{constructor(){super(),y(this,r),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,y(this,K,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=u(this,r,_t).call(this,"y-m-d"),y(this,B),y(this,lt,t=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(e.firstChild,0),a.setEnd(e.lastChild,4),document.getSelection()?.addRange(a)})}),y(this,ht,t=>{this._elFieldAsync.then(e=>{t.currentTarget===e&&(t.preventDefault(),t.clipboardData?.setData("text/plain",this.displayValue))})}),y(this,dt,t=>{this._elFieldAsync.then(e=>{if(t.currentTarget!==e)return;t.preventDefault();const a=t.clipboardData?.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",l=a.split(this._dateFormatLayout.delimiter);if(l.length===3){const h=this._dateFormatLayout.layout,b=parseInt(l[h.findIndex(Y=>Y.token==="y")]),d=parseInt(l[h.findIndex(Y=>Y.token==="m")])-1,C=parseInt(l[h.findIndex(Y=>Y.token==="d")]);!isNaN(b)&&!isNaN(d)&&!isNaN(C)&&(i=new Date(`${b}-${d+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,u(this,r,O).call(this))})}),y(this,ut,t=>{this._elSpinners[0]?.focus()}),y(this,pt,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,u(this,r,O).call(this),u(this,r,E).call(this)}),y(this,ct,t=>{t.stopPropagation(),this._focusedMonth=t.target?.value}),y(this,gt,t=>{t.stopPropagation(),this._focusedYear=t.target?.value}),y(this,ft,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,mt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,X,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),u(this,r,E).call(this)}),y(this,yt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,u(this,r,O).call(this);return}!N(e||new Date(0),c(this,B)||new Date(0))&&(this.value=new Date(e),u(this,r,O).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=c(this,B),u(this,r,E).call(this))}}),y(this,vt,t=>{const e=Array.from(this._elSpinners).findIndex(a=>a===t.target);if(t.key==="ArrowRight"){const a=this._elSpinners[e+1];a&&a.focus()}if(t.key==="ArrowLeft"){const a=this._elSpinners[e-1];a&&a.focus()}}),y(this,bt,(t,e)=>{c(this,D)[e]=t;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(c(this,D).year)),a.setUTCMonth(parseInt(c(this,D).month)-1);const i=de(a).getDate(),s=i<parseInt(c(this,D).day)?i:parseInt(c(this,D).day);a.setUTCDate(isNaN(s)?1:s),a.toString()!=="Invalid Date"&&(this.value=a,u(this,r,O).call(this),u(this,r,E).call(this))}),y(this,D,{year:"yyyy",month:"mm",day:"dd"}),M.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return c(this,K)}set utcHours(t){V(this,K,t),this._internalValue?.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=u(this,r,_t).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-datepicker")}focus(t){this._getValidityAnchor()?.focus(t)}render(){return w`
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
        @click=${c(this,ut)}
        @copy=${c(this,ht)}
        @paste=${c(this,dt)}
        id="field"
      >
        <div class="spinners">
          ${be($e(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${c(this,D)[t.name]}
                  aria-valuemin=${u(this,r,Pt).call(this,t.name)}
                  aria-valuemax=${u(this,r,rt).call(this,t.name)}
                  aria-label=${u(this,r,Nt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${u(this,r,rt).call(this,t.name).toString().length}
                  @keydown=${c(this,vt)}
                  @change=${a=>c(this,bt).call(this,a.detail.value,t.name)}
                  @focus=${c(this,lt)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
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
          aria-label="${p("Open calendar modal")}"
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

      ${I(u(this,r,Ot).call(this),()=>w`<gds-form-control-footer
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
        @gds-ui-state=${c(this,yt)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async t=>{t.target?.id==="calendar-popover"&&this._elCalendar.then(a=>a.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${c(this,mt)}
              aria-label=${p("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${c(this,ct)}
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
              @change=${c(this,gt)}
              .maxHeight=${300}
              label="${p("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${xe(c(this,r,Rt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${c(this,ft)}
              aria-label=${p("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${c(this,pt)}
            @gds-date-focused=${c(this,X)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${I(this.clearable||u(this,r,ot).call(this)||!!this._outOfRangeAction,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${I(this.clearable,()=>w` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,u(this,r,E).call(this),u(this,r,O).call(this)}}
                        aria-label=${p("Clear selected date")}
                      >
                        ${p("Clear")}
                      </gds-button>`)}
                  ${u(this,r,Tt).call(this)}
                </gds-flex>
                ${I(u(this,r,ot).call(this),()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),u(this,r,Mt).call(this,new Date)}}
                      aria-label=${p("Select today's date")}
                    >
                      ${p("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleOutOfRangeChange(){u(this,r,Et).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,D,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),a=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");V(this,D,{year:e,month:a,day:i})}_handleOpenChange(){this.open&&(V(this,B,this.value),this._elCalendar.then(t=>t.focus()))}};K=new WeakMap;B=new WeakMap;r=new WeakSet;Ot=function(){return!this.plain};Tt=function(){if(!this._outOfRangeAction)return se;const t=this._outOfRangeAction==="max";return w`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),u(this,r,Mt).call(this,t?this.max:this.min)}}
    >
      ${t?p("Last available date"):p("First available date")}
    </gds-button>`};Et=async function(){const t=await this.getFocusedDate();t?t>this.max&&!N(t,this.max)?this._outOfRangeAction="max":t<this.min&&!N(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};kt=function(t){const e=pe(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};Mt=function(t){const e=u(this,r,kt).call(this,t);this._elCalendar.then(a=>a.focusedDate=e).then(c(this,X)).then(()=>this._elCalendar).then(a=>a.updateComplete.then(()=>a.focus()))};ot=function(){if(this.hideTodayButton)return!1;const t=u(this,r,kt).call(this,new Date);if((t<this.min||t>this.max)&&!N(t,this.min)&&!N(t,this.max))return!1;const a=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&a?!1:!this.disabledDates?.some(i=>N(i,t))};Nt=function(t){return`${{year:p("Year"),month:p("Month"),day:p("Day")}[t]} ${this.label}`};Pt=function(t){return{year:1900,month:1,day:1}[t]};rt=function(t){return{year:9999,month:12,day:31}[t]};O=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};lt=new WeakMap;ht=new WeakMap;dt=new WeakMap;ut=new WeakMap;pt=new WeakMap;ct=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=new WeakMap;X=new WeakMap;yt=new WeakMap;vt=new WeakMap;_t=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],a=t.split(e),i=a.findIndex(d=>d==="y"),s=a.findIndex(d=>d==="m"),l=a.findIndex(d=>d==="d");if(i===-1||s===-1||l===-1)throw new Error("Invalid date format for <gds-datepicker>");const b=[i,s,l].sort((d,C)=>d-C).map(d=>a[d]).map(d=>({token:d,name:d==="y"?"year":d==="m"?"month":"day"}));return{delimiter:e,layout:b}};bt=new WeakMap;D=new WeakMap;Rt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),a=c(this,r,zt),i=this.value?.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let s=t;s<=e;s++)yield s}}};zt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};n.styles=[Xt,le,Me];o([g({converter:$t})],n.prototype,"value",1);o([g({converter:$t})],n.prototype,"min",2);o([g({converter:$t})],n.prototype,"max",2);o([g({type:Boolean})],n.prototype,"open",2);o([g({attribute:"supporting-text"})],n.prototype,"supportingText",2);o([g({type:String})],n.prototype,"size",2);o([g({type:Boolean})],n.prototype,"plain",2);o([g({type:Boolean,attribute:"show-week-numbers"})],n.prototype,"showWeekNumbers",2);o([g({type:Boolean,attribute:"hide-label"})],n.prototype,"hideLabel",2);o([g({type:Boolean,attribute:"clearable"})],n.prototype,"clearable",2);o([g({type:Boolean,attribute:"hide-today-button"})],n.prototype,"hideTodayButton",2);o([g({type:Number,attribute:"utc-hours"})],n.prototype,"utcHours",1);o([g()],n.prototype,"dateformat",1);o([g({type:Boolean,attribute:"disabled-weekends"})],n.prototype,"disabledWeekends",2);o([g({converter:he,attribute:"disabled-dates"})],n.prototype,"disabledDates",2);o([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);o([Z("#calendar-button")],n.prototype,"test_calendarButton",2);o([j("#clear-button")],n.prototype,"test_clearButton",2);o([j("#today-button")],n.prototype,"test_todayButton",2);o([j("#back-to-valid-range-button")],n.prototype,"test_backToValidRangeButton",2);o([L()],n.prototype,"_focusedMonth",2);o([L()],n.prototype,"_focusedYear",2);o([L()],n.prototype,"_dateFormatLayout",2);o([L()],n.prototype,"_outOfRangeAction",2);o([Z("#calendar")],n.prototype,"_elCalendar",2);o([Z("#calendar-button")],n.prototype,"_elTrigger",2);o([Z("#field")],n.prototype,"_elFieldAsync",2);o([_e("[role=spinbutton]")],n.prototype,"_elSpinners",2);o([j("#field")],n.prototype,"_elField",2);o([Q(["value","min","max","open","_focusedMonth","_focusedYear"])],n.prototype,"_handleOutOfRangeChange",1);o([Q("value")],n.prototype,"_handleValueChange",1);o([Q("open")],n.prototype,"_handleOpenChange",1);n=o([Qt({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),ne()],n);let St=class extends jt(Zt(te(n))){};St=o([Ft("gds-datepicker",{dependsOn:[re,ie,oe,ue,ye,ce,ge,fe,me]})],St);export{St as G,xe as c};
