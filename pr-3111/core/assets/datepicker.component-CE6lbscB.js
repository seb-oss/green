import{f as Gt,S as Ht,P as Ut,R as Jt,af as Kt,ag as I,ah as R,ai as et,a4 as qt,ac as Xt,n as g,E as L,$ as Q,D as jt,h as b,a as Wt,i as Qt,B as Zt,l as V,F as te,T as ee,C as ae,L as se,a0 as ie,V as ne,d as O,J as c,A as oe,K as re}from"./iframe-CNPadLMU.js";import{l as le}from"./localized-decorator-CPnzJVOl.js";import{r as Z}from"./query-async-CQ0p2qr7.js";import{G as de}from"./dropdown.component-CynBk8FL.js";import{G as he}from"./flex.component-CoRjFOls.js";import{f as ue}from"./form-control-host.style-DgONmNsL.js";import{d as vt,a as pe}from"./attribute-converters-CdI0trPX.js";import{i as N,l as ce,G as ge,s as fe}from"./calendar.component-BSBuiGdw.js";import{I as ye,a as me}from"./calender-add.component-BLl9VEZ5.js";import{I as ve}from"./chevron-left.component-BJfxvVOZ.js";import{I as _e}from"./chevron-right.component-B259J3Vv.js";import{G as be}from"./popover.component-ywb0PIrL.js";let $e;function xe(t){return(e,a)=>Gt(e,a,{get(){return(this.renderRoot??($e??=document.createDocumentFragment())).querySelectorAll(t)}})}function*we(t,e){const a=typeof e=="function";if(t!==void 0){let i=-1;for(const s of t)i>-1&&(yield a?e(i):e),i++,yield s}}function*ke(t,e){if(t!==void 0){let a=0;for(const i of t)yield e(i,a++)}}const St=(t,e,a)=>{const i=new Map;for(let s=e;s<=a;s++)i.set(t[s],s);return i},De=Ht(class extends Ut{constructor(t){if(super(t),t.type!==Jt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,a){let i;a===void 0?a=e:e!==void 0&&(i=e);const s=[],l=[];let d=0;for(const $ of t)s[d]=i?i($,d):d,l[d]=a($,d),d++;return{values:l,keys:s}}render(t,e,a){return this.dt(t,e,a).values}update(t,[e,a,i]){const s=Kt(t),{values:l,keys:d}=this.dt(e,a,i);if(!Array.isArray(s))return this.ut=d,l;const $=this.ut??=[],p=[];let C,Y,f=0,x=s.length-1,y=0,k=l.length-1;for(;f<=x&&y<=k;)if(s[f]===null)f++;else if(s[x]===null)x--;else if($[f]===d[y])p[y]=I(s[f],l[y]),f++,y++;else if($[x]===d[k])p[k]=I(s[x],l[k]),x--,k--;else if($[f]===d[k])p[k]=I(s[f],l[k]),R(t,p[k+1],s[f]),f++,k--;else if($[x]===d[y])p[y]=I(s[x],l[y]),R(t,s[f],s[x]),x--,y++;else if(C===void 0&&(C=St(d,y,k),Y=St($,f,x)),C.has($[f]))if(C.has($[x])){const S=Y.get(d[y]),tt=S!==void 0?s[S]:null;if(tt===null){const Ct=R(t,s[f]);I(Ct,l[y]),p[y]=Ct}else p[y]=I(tt,l[y]),R(t,s[f],tt),s[S]=null;y++}else et(s[x]),x--;else et(s[f]),f++;for(;y<=k;){const S=R(t,p[k+1]);I(S,l[y]),p[y++]=S}for(;f<=x;){const S=s[f++];S!==null&&et(S)}return this.ut=d,Xt(t,p),qt}});var Me=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Yt=t=>{throw TypeError(t)},A=(t,e,a,i)=>{for(var s=i>1?void 0:i?Ce(e,a):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(s=(i?d(e,a,s):d(s))||s);return i&&s&&Me(e,a,s),s},_t=(t,e,a)=>e.has(t)||Yt("Cannot "+a),v=(t,e,a)=>(_t(t,e,"read from private field"),a?a.call(t):e.get(t)),F=(t,e,a)=>e.has(t)?Yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),At=(t,e,a,i)=>(_t(t,e,"write to private field"),e.set(t,a),a),w=(t,e,a)=>(_t(t,e,"access private method"),a),W,H,U,J,K,at,st,it,_,It,P,nt,B,q;let D=class extends jt{constructor(){super(...arguments),F(this,_),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.readonly=!1,this.displayValue=w(this,_,nt).call(this,this.value,this.length),F(this,W,""),F(this,H,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=w(this,_,B).call(this,t+1),w(this,_,P).call(this)}),F(this,U,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=w(this,_,B).call(this,t-1),w(this,_,P).call(this)}),F(this,J,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,K,()=>{w(this,_,q).call(this)}),F(this,at,()=>{v(this,W)!==""&&(w(this,_,q).call(this),this.value=w(this,_,B).call(this,parseInt(this.value.toString())),w(this,_,P).call(this))}),F(this,st,t=>{t.stopPropagation(),t.preventDefault(),!this.readonly&&(t.deltaY>0?v(this,U).call(this):v(this,H).call(this))}),F(this,it,t=>{if(this.readonly)return;let e=!1;if(t.key==="ArrowUp")v(this,H).call(this),e=!0;else if(t.key==="ArrowDown")v(this,U).call(this),e=!0;else{const a=parseInt(t.key);isNaN(a)||(v(this,W).length<this.length&&(At(this,W,v(this,W)+a.toString()),this.value=parseInt(v(this,W))),v(this,W).length===this.length&&(this.value=w(this,_,B).call(this,this.value),w(this,_,q).call(this),w(this,_,It).call(this),w(this,_,P).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",v(this,st)),this.addEventListener("keydown",v(this,it)),this.addEventListener("blur",v(this,at)),this.addEventListener("focus",v(this,K)),this.addEventListener("click",v(this,J)),this.addEventListener("mousedown",v(this,J))}focus(t){super.focus(t),v(this,K).call(this)}render(){return b`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=w(this,_,nt).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;H=new WeakMap;U=new WeakMap;J=new WeakMap;K=new WeakMap;at=new WeakMap;st=new WeakMap;it=new WeakMap;_=new WeakSet;It=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};P=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};nt=function(t,e){return String(t).padStart(e,"0")};B=function(t){return Math.max(this.min,Math.min(this.max,t))};q=function(){At(this,W,"")};D.formAssociated=!0;A([g({type:Number})],D.prototype,"value",2);A([g({type:Number})],D.prototype,"length",2);A([g({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);A([g({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);A([g({type:Boolean,reflect:!0})],D.prototype,"readonly",2);A([L()],D.prototype,"displayValue",2);A([Q("value")],D.prototype,"_refreshDisplayValue",1);D=A([Wt("gds-date-part-spinner")],D);const Se=Qt`
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
`;var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Ot=t=>{throw TypeError(t)},o=(t,e,a,i)=>{for(var s=i>1?void 0:i?We(e,a):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(s=(i?d(e,a,s):d(s))||s);return i&&s&&Fe(e,a,s),s},bt=(t,e,a)=>e.has(t)||Ot("Cannot "+a),u=(t,e,a)=>(bt(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?Ot("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),G=(t,e,a,i)=>(bt(t,e,"write to private field"),e.set(t,a),a),h=(t,e,a)=>(bt(t,e,"access private method"),a),X,z,r,Et,Tt,Nt,Rt,Pt,$t,xt,ot,Bt,zt,rt,E,T,wt,lt,dt,ht,ut,pt,ct,gt,ft,j,kt,yt,Dt,mt,Mt,M,Lt,Vt;let n=class extends ie{constructor(){super(),m(this,r),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,m(this,X,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=h(this,r,mt).call(this,"y-m-d"),m(this,z),m(this,wt,t=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(e.firstChild,0),a.setEnd(e.lastChild,4),document.getSelection()?.addRange(a)})}),m(this,lt,t=>{this._elFieldAsync.then(e=>{t.currentTarget===e&&(t.preventDefault(),t.clipboardData?.setData("text/plain",this.displayValue))})}),m(this,dt,t=>{this._elFieldAsync.then(e=>{if(t.currentTarget!==e||(t.preventDefault(),this.readonly))return;const a=t.clipboardData?.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",l=a.split(this._dateFormatLayout.delimiter);if(l.length===3){const d=this._dateFormatLayout.layout,$=parseInt(l[d.findIndex(Y=>Y.token==="y")]),p=parseInt(l[d.findIndex(Y=>Y.token==="m")])-1,C=parseInt(l[d.findIndex(Y=>Y.token==="d")]);!isNaN($)&&!isNaN(p)&&!isNaN(C)&&(i=new Date(`${$}-${p+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,h(this,r,E).call(this))})}),m(this,ht,t=>{this._getValidityAnchor()?.focus()}),m(this,ut,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,h(this,r,E).call(this),h(this,r,T).call(this)}),m(this,pt,t=>{t.stopPropagation(),this._focusedMonth=t.target?.value}),m(this,ct,t=>{t.stopPropagation(),this._focusedYear=t.target?.value}),m(this,gt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),m(this,ft,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),m(this,j,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),h(this,r,T).call(this)}),m(this,yt,async t=>{if(t.target===t.currentTarget){if(this.readonly&&t.detail.open){t.preventDefault();return}if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,h(this,r,E).call(this);return}!N(e||new Date(0),u(this,z)||new Date(0))&&(this.value=new Date(e),h(this,r,E).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=u(this,z),h(this,r,T).call(this))}}),m(this,Dt,t=>{const e=Array.from(this._elSpinners).findIndex(a=>a===t.target);if(t.key==="ArrowRight"){const a=this._elSpinners[e+1];a&&a.focus()}if(t.key==="ArrowLeft"){const a=this._elSpinners[e-1];a&&a.focus()}}),m(this,Mt,(t,e)=>{u(this,M)[e]=t;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(u(this,M).year)),a.setUTCMonth(parseInt(u(this,M).month)-1);const i=ce(a).getDate(),s=i<parseInt(u(this,M).day)?i:parseInt(u(this,M).day);a.setUTCDate(isNaN(s)?1:s),a.toString()!=="Invalid Date"&&(this.value=a,h(this,r,E).call(this),h(this,r,T).call(this))}),m(this,M,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return u(this,X)}set utcHours(t){G(this,X,t),this._internalValue?.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=h(this,r,mt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return u(this,r,kt)}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ne.instance.apply(this,"gds-datepicker")}focus(t){this._getValidityAnchor()?.focus(t)}render(){return b`
      ${O(!this.plain,()=>b`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label
              id="label"
              for=${this.readonly?"datepicker-value":"spinner-0"}
              slot="label"
              >${this.label}</label
            >
            ${O(this.supportingText.length>0,()=>b`<span slot="supporting-text" id="supporting-text">
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
        .readonly=${this.readonly}
        .invalid=${this.invalid}
        @click=${u(this,ht)}
        @copy=${u(this,lt)}
        @paste=${u(this,dt)}
        id="field"
      >
        ${this.readonly?h(this,r,Tt).call(this):h(this,r,Nt).call(this)}
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${c("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled||this.readonly}
        >
          ${O(this.size==="small",()=>b`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>b`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${O(h(this,r,Et).call(this),()=>b`<gds-form-control-footer
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
        @gds-ui-state=${u(this,yt)}
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
              @click=${u(this,ft)}
              aria-label=${c("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${u(this,pt)}
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
              @change=${u(this,ct)}
              .maxHeight=${300}
              label="${c("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${De(u(this,r,Lt),t=>t,t=>b`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${u(this,gt)}
              aria-label=${c("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${u(this,ut)}
            @gds-date-focused=${u(this,j)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${O(this.clearable||h(this,r,ot).call(this)||!!this._outOfRangeAction,()=>b`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${O(this.clearable,()=>b` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,h(this,r,T).call(this),h(this,r,E).call(this)}}
                        aria-label=${c("Clear selected date")}
                      >
                        ${c("Clear")}
                      </gds-button>`)}
                  ${h(this,r,Rt).call(this)}
                </gds-flex>
                ${O(h(this,r,ot).call(this),()=>b` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),h(this,r,xt).call(this,new Date)}}
                      aria-label=${c("Select today's date")}
                    >
                      ${c("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this.readonly?this._elReadonlyValue||this._elField:this._elSpinners[0]}_handleOutOfRangeChange(){h(this,r,Pt).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){G(this,M,{year:"yyyy",month:"mm",day:"dd"});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),a=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");G(this,M,{year:e,month:a,day:i})}_handleOpenChange(){this.open&&(G(this,z,this.value),this._elCalendar.then(t=>t.focus()))}};X=new WeakMap;z=new WeakMap;r=new WeakSet;Et=function(){return!this.plain};Tt=function(){return b`<div
      id="datepicker-value"
      class="spinners readonly-value"
      aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
      aria-invalid="${this.invalid}"
      tabindex="0"
    >
      ${u(this,r,kt)}
    </div>`};Nt=function(){return b`<div class="spinners">
      ${we(ke(this._dateFormatLayout.layout,(t,e)=>b`<gds-date-part-spinner
              id="spinner-${e}"
              aria-invalid="${this.invalid}"
              class="spinner"
              .length=${t.token==="y"?4:2}
              .value=${u(this,M)[t.name]}
              aria-valuemin=${h(this,r,zt).call(this,t.name)}
              aria-valuemax=${h(this,r,rt).call(this,t.name)}
              aria-label=${h(this,r,Bt).call(this,t.name)}
              aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
              data-max-width=${h(this,r,rt).call(this,t.name).toString().length}
              @keydown=${u(this,Dt)}
              @change=${a=>u(this,Mt).call(this,a.detail.value,t.name)}
              @focus=${u(this,wt)}
              @touchend=${a=>{this.open=!0,a.preventDefault()}}
            ></gds-date-part-spinner>`),b`<span class="separator"
          >${this._dateFormatLayout.delimiter}</span
        >`)}
    </div>`};Rt=function(){if(!this._outOfRangeAction)return oe;const t=this._outOfRangeAction==="max";return b`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),h(this,r,xt).call(this,t?this.max:this.min)}}
    >
      ${t?c("Last available date"):c("First available date")}
    </gds-button>`};Pt=async function(){const t=await this.getFocusedDate();t?t>this.max&&!N(t,this.max)?this._outOfRangeAction="max":t<this.min&&!N(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};$t=function(t){const e=fe(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};xt=function(t){const e=h(this,r,$t).call(this,t);this._elCalendar.then(a=>a.focusedDate=e).then(u(this,j)).then(()=>this._elCalendar).then(a=>a.updateComplete.then(()=>a.focus()))};ot=function(){if(this.hideTodayButton)return!1;const t=h(this,r,$t).call(this,new Date);if((t<this.min||t>this.max)&&!N(t,this.min)&&!N(t,this.max))return!1;const a=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&a?!1:!this.disabledDates?.some(i=>N(i,t))};Bt=function(t){return`${{year:c("Year"),month:c("Month"),day:c("Day")}[t]} ${this.label}`};zt=function(t){return{year:1900,month:1,day:1}[t]};rt=function(t){return{year:9999,month:12,day:31}[t]};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};T=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};wt=new WeakMap;lt=new WeakMap;dt=new WeakMap;ht=new WeakMap;ut=new WeakMap;pt=new WeakMap;ct=new WeakMap;gt=new WeakMap;ft=new WeakMap;j=new WeakMap;kt=function(){return this._dateFormatLayout.layout.map(t=>u(this,M)[t.name]).join(this._dateFormatLayout.delimiter)};yt=new WeakMap;Dt=new WeakMap;mt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],a=t.split(e),i=a.findIndex(p=>p==="y"),s=a.findIndex(p=>p==="m"),l=a.findIndex(p=>p==="d");if(i===-1||s===-1||l===-1)throw new Error("Invalid date format for <gds-datepicker>");const $=[i,s,l].sort((p,C)=>p-C).map(p=>a[p]).map(p=>({token:p,name:p==="y"?"year":p==="m"?"month":"day"}));return{delimiter:e,layout:$}};Mt=new WeakMap;M=new WeakMap;Lt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),a=u(this,r,Vt),i=this.value?.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let s=t;s<=e;s++)yield s}}};Vt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};n.styles=[Zt,ue,Se];o([g({converter:vt})],n.prototype,"value",1);o([g({converter:vt})],n.prototype,"min",2);o([g({converter:vt})],n.prototype,"max",2);o([g({type:Boolean})],n.prototype,"open",2);o([g({attribute:"supporting-text"})],n.prototype,"supportingText",2);o([g({type:String})],n.prototype,"size",2);o([g({type:Boolean})],n.prototype,"plain",2);o([g({type:Boolean,attribute:"show-week-numbers"})],n.prototype,"showWeekNumbers",2);o([g({type:Boolean,attribute:"hide-label"})],n.prototype,"hideLabel",2);o([g({type:Boolean,attribute:"clearable"})],n.prototype,"clearable",2);o([g({type:Boolean,attribute:"hide-today-button"})],n.prototype,"hideTodayButton",2);o([g({type:Number,attribute:"utc-hours"})],n.prototype,"utcHours",1);o([g()],n.prototype,"dateformat",1);o([g({type:Boolean,attribute:"disabled-weekends"})],n.prototype,"disabledWeekends",2);o([g({converter:pe,attribute:"disabled-dates"})],n.prototype,"disabledDates",2);o([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],n.prototype,"showExtendedSupportingText",2);o([Z("#calendar-button")],n.prototype,"test_calendarButton",2);o([V("#clear-button")],n.prototype,"test_clearButton",2);o([V("#today-button")],n.prototype,"test_todayButton",2);o([V("#back-to-valid-range-button")],n.prototype,"test_backToValidRangeButton",2);o([L()],n.prototype,"_focusedMonth",2);o([L()],n.prototype,"_focusedYear",2);o([L()],n.prototype,"_dateFormatLayout",2);o([L()],n.prototype,"_outOfRangeAction",2);o([Z("#calendar")],n.prototype,"_elCalendar",2);o([Z("#calendar-button")],n.prototype,"_elTrigger",2);o([Z("#field")],n.prototype,"_elFieldAsync",2);o([xe("[role=spinbutton]")],n.prototype,"_elSpinners",2);o([V("#field")],n.prototype,"_elField",2);o([V("#datepicker-value")],n.prototype,"_elReadonlyValue",2);o([Q(["value","min","max","open","_focusedMonth","_focusedYear"])],n.prototype,"_handleOutOfRangeChange",1);o([Q("value")],n.prototype,"_handleValueChange",1);o([Q("open")],n.prototype,"_handleOpenChange",1);n=o([te({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),le()],n);let Ft=class extends ee(ae(se(n))){};Ft=o([Wt("gds-datepicker",{dependsOn:[he,re,de,ge,be,ye,me,ve,_e]})],Ft);export{Ft as G,De as c};
