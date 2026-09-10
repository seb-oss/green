import{f as Vt,S as Gt,P as Ht,R as Ut,af as Jt,ag as I,ah as z,ai as at,a4 as qt,ac as Kt,n as g,E as P,$ as Q,D as Xt,h as w,a as Wt,i as jt,B as Qt,l as Z,F as Zt,T as te,C as ee,L as ae,a0 as se,V as ie,d as O,J as h,A as ne,K as oe}from"./iframe-C0qG-sy5.js";import{l as re}from"./localized-decorator-CjJ0RL6f.js";import{r as tt}from"./query-async-CgqXnQCM.js";import{a as le}from"./dropdown.component-DZrubyBQ.js";import{G as he}from"./flex.component-DpUqvnMY.js";import{f as de}from"./form-control-host.style-DAB8Nbgd.js";import{d as xt,a as ue}from"./attribute-converters-CdI0trPX.js";import{i as L,l as ce,G as pe,s as ge}from"./calendar.component-OvqxDKxG.js";import{I as fe,a as me}from"./calender-add.component-BqqIRY_7.js";import{I as ye}from"./chevron-left.component-DsQf4cmP.js";import{I as ve}from"./chevron-right.component-upZFisip.js";import{G as _e}from"./popover.component-BZtvvPH-.js";let be;function $e(t){return(e,a)=>Vt(e,a,{get(){return(this.renderRoot??(be??=document.createDocumentFragment())).querySelectorAll(t)}})}function*xe(t,e){const a=typeof e=="function";if(t!==void 0){let i=-1;for(const s of t)i>-1&&(yield a?e(i):e),i++,yield s}}function*we(t,e){if(t!==void 0){let a=0;for(const i of t)yield e(i,a++)}}const St=(t,e,a)=>{const i=new Map;for(let s=e;s<=a;s++)i.set(t[s],s);return i},ke=Gt(class extends Ht{constructor(t){if(super(t),t.type!==Ut.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,a){let i;a===void 0?a=e:e!==void 0&&(i=e);const s=[],d=[];let u=0;for(const b of t)s[u]=i?i(b,u):u,d[u]=a(b,u),u++;return{values:d,keys:s}}render(t,e,a){return this.dt(t,e,a).values}update(t,[e,a,i]){const s=Jt(t),{values:d,keys:u}=this.dt(e,a,i);if(!Array.isArray(s))return this.ut=u,d;const b=this.ut??=[],c=[];let C,Y,f=0,$=s.length-1,m=0,k=d.length-1;for(;f<=$&&m<=k;)if(s[f]===null)f++;else if(s[$]===null)$--;else if(b[f]===u[m])c[m]=I(s[f],d[m]),f++,m++;else if(b[$]===u[k])c[k]=I(s[$],d[k]),$--,k--;else if(b[f]===u[k])c[k]=I(s[f],d[k]),z(t,c[k+1],s[f]),f++,k--;else if(b[$]===u[m])c[m]=I(s[$],d[m]),z(t,s[f],s[$]),$--,m++;else if(C===void 0&&(C=St(u,m,k),Y=St(b,f,$)),C.has(b[f]))if(C.has(b[$])){const S=Y.get(u[m]),et=S!==void 0?s[S]:null;if(et===null){const Ct=z(t,s[f]);I(Ct,d[m]),c[m]=Ct}else c[m]=I(et,d[m]),z(t,s[f],et),s[S]=null;m++}else at(s[$]),$--;else at(s[f]),f++;for(;m<=k;){const S=z(t,c[k+1]);I(S,d[m]),c[m++]=S}for(;f<=$;){const S=s[f++];S!==null&&at(S)}return this.ut=u,Kt(t,c),qt}});var Me=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Yt=t=>{throw TypeError(t)},T=(t,e,a,i)=>{for(var s=i>1?void 0:i?De(e,a):e,d=t.length-1,u;d>=0;d--)(u=t[d])&&(s=(i?u(e,a,s):u(s))||s);return i&&s&&Me(e,a,s),s},wt=(t,e,a)=>e.has(t)||Yt("Cannot "+a),v=(t,e,a)=>(wt(t,e,"read from private field"),a?a.call(t):e.get(t)),F=(t,e,a)=>e.has(t)?Yt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),At=(t,e,a,i)=>(wt(t,e,"write to private field"),e.set(t,a),a),x=(t,e,a)=>(wt(t,e,"access private method"),a),W,H,U,J,q,st,it,nt,_,It,B,ot,V,K;let D=class extends Xt{constructor(){super(...arguments),F(this,_),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,_,ot).call(this,this.value,this.length),F(this,W,""),F(this,H,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,_,V).call(this,t+1),x(this,_,B).call(this)}),F(this,U,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,_,V).call(this,t-1),x(this,_,B).call(this)}),F(this,J,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),F(this,q,()=>{x(this,_,K).call(this)}),F(this,st,()=>{v(this,W)!==""&&(x(this,_,K).call(this),this.value=x(this,_,V).call(this,parseInt(this.value.toString())),x(this,_,B).call(this))}),F(this,it,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?v(this,U).call(this):v(this,H).call(this)}),F(this,nt,t=>{let e=!1;if(t.key==="ArrowUp")v(this,H).call(this),e=!0;else if(t.key==="ArrowDown")v(this,U).call(this),e=!0;else{const a=parseInt(t.key);isNaN(a)||(v(this,W).length<this.length&&(At(this,W,v(this,W)+a.toString()),this.value=parseInt(v(this,W))),v(this,W).length===this.length&&(this.value=x(this,_,V).call(this,this.value),x(this,_,K).call(this),x(this,_,It).call(this),x(this,_,B).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",v(this,it)),this.addEventListener("keydown",v(this,nt)),this.addEventListener("blur",v(this,st)),this.addEventListener("focus",v(this,q)),this.addEventListener("click",v(this,J)),this.addEventListener("mousedown",v(this,J))}focus(t){super.focus(t),v(this,q).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,_,ot).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};W=new WeakMap;H=new WeakMap;U=new WeakMap;J=new WeakMap;q=new WeakMap;st=new WeakMap;it=new WeakMap;nt=new WeakMap;_=new WeakSet;It=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof D){t.focus();break}t=t.nextElementSibling}};B=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ot=function(t,e){return String(t).padStart(e,"0")};V=function(t){return Math.max(this.min,Math.min(this.max,t))};K=function(){At(this,W,"")};D.formAssociated=!0;T([g({type:Number})],D.prototype,"value",2);T([g({type:Number})],D.prototype,"length",2);T([g({type:Number,attribute:"aria-valuemin"})],D.prototype,"min",2);T([g({type:Number,attribute:"aria-valuemax"})],D.prototype,"max",2);T([P()],D.prototype,"displayValue",2);T([Q("value")],D.prototype,"_refreshDisplayValue",1);D=T([Wt("gds-date-part-spinner")],D);const Ce=jt`
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
`;var Se=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ot=t=>{throw TypeError(t)},r=(t,e,a,i)=>{for(var s=i>1?void 0:i?Fe(e,a):e,d=t.length-1,u;d>=0;d--)(u=t[d])&&(s=(i?u(e,a,s):u(s))||s);return i&&s&&Se(e,a,s),s},kt=(t,e,a)=>e.has(t)||Ot("Cannot "+a),p=(t,e,a)=>(kt(t,e,"read from private field"),a?a.call(t):e.get(t)),y=(t,e,a)=>e.has(t)?Ot("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),R=(t,e,a,i)=>(kt(t,e,"write to private field"),e.set(t,a),a),l=(t,e,a)=>(kt(t,e,"access private method"),a),X,G,n,Et,Tt,Nt,Mt,Dt,rt,Lt,Pt,lt,A,zt,E,N,ht,dt,ut,ct,pt,gt,ft,mt,yt,j,vt,_t,bt,$t,M,Rt,Bt;let o=class extends se{constructor(){super(),y(this,n),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,11,31),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,y(this,X,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=l(this,n,bt).call(this,"y-m-d"),this._currentLocale=navigator.language,y(this,G),y(this,ht,t=>{this._elTrigger.then(e=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(e.firstChild,0),a.setEnd(e.lastChild,4),document.getSelection()?.addRange(a)})}),y(this,dt,t=>{this._elFieldAsync.then(e=>{t.currentTarget===e&&(t.preventDefault(),t.clipboardData?.setData("text/plain",this.displayValue))})}),y(this,ut,t=>{this._elFieldAsync.then(e=>{if(t.currentTarget!==e)return;t.preventDefault();const a=t.clipboardData?.getData("text/plain");if(!a)return;let i=new Date("-");const s="Invalid Date",d=a.split(this._dateFormatLayout.delimiter);if(d.length===3){const u=this._dateFormatLayout.layout,b=parseInt(d[u.findIndex(Y=>Y.token==="y")]),c=parseInt(d[u.findIndex(Y=>Y.token==="m")])-1,C=parseInt(d[u.findIndex(Y=>Y.token==="d")]);!isNaN(b)&&!isNaN(c)&&!isNaN(C)&&(i=new Date(`${b}-${c+1}-${C}`))}i.toString()===s&&(i=new Date(a),i.toString()===s)||(this.value=i,l(this,n,E).call(this))})}),y(this,ct,t=>{this._elSpinners[0]?.focus()}),y(this,pt,t=>{t.stopPropagation();const e=new Date(t.detail);e.setUTCHours(this.utcHours,0,0,0),this.value=e,this.open=!1,l(this,n,E).call(this),l(this,n,N).call(this)}),y(this,gt,t=>{t.stopPropagation(),this._focusedMonth=t.target?.value}),y(this,ft,t=>{t.stopPropagation(),this._focusedYear=t.target?.value}),y(this,mt,t=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),y(this,yt,t=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),y(this,j,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),l(this,n,N).call(this)}),y(this,vt,async t=>{if(t.target===t.currentTarget){if(this.open=t.detail.open,t.detail.reason==="close"){const e=(await this._elCalendar).value;if(!e){this.value=void 0,l(this,n,E).call(this);return}!L(e||new Date(0),p(this,G)||new Date(0))&&(this.value=new Date(e),l(this,n,E).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}t.detail.reason==="cancel"&&(this.value=p(this,G),l(this,n,N).call(this))}}),y(this,_t,t=>{const e=Array.from(this._elSpinners).findIndex(a=>a===t.target);if(t.key==="ArrowRight"){const a=this._elSpinners[e+1];a&&a.focus()}if(t.key==="ArrowLeft"){const a=this._elSpinners[e-1];a&&a.focus()}}),y(this,$t,(t,e)=>{p(this,M)[e]=t;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(p(this,M).year)),a.setUTCMonth(parseInt(p(this,M).month)-1);const i=ce(a).getDate(),s=i<parseInt(p(this,M).day)?i:parseInt(p(this,M).day);a.setUTCDate(isNaN(s)?1:s),a.toString()!=="Invalid Date"&&(this.value=a,l(this,n,E).call(this),l(this,n,N).call(this))}),y(this,M,{year:"yyyy",month:"mm",day:"dd"}),D.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(t){super.value=t}get utcHours(){return p(this,X)}set utcHours(t){R(this,X,t),this._internalValue?.setUTCHours(t,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(t=>t.token).join(this._dateFormatLayout.delimiter)}set dateformat(t){this._dateFormatLayout=l(this,n,bt).call(this,t)}async getFocusedDate(){if(this.open)return this._elCalendar.then(t=>t.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(t){return this._elCalendar.then(e=>e.getDateCell(t))}connectedCallback(){super.connectedCallback(),ie.instance.apply(this,"gds-datepicker"),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale,this.value||R(this,M,{year:l(this,n,A).call(this,"year"),month:l(this,n,A).call(this,"month"),day:l(this,n,A).call(this,"day")}),this.requestUpdate())})}focus(t){this._getValidityAnchor()?.focus(t)}render(){return w`
      ${O(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${O(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
        @click=${p(this,ct)}
        @copy=${p(this,dt)}
        @paste=${p(this,ut)}
        id="field"
      >
        <div class="spinners">
          ${xe(we(this._dateFormatLayout.layout,(t,e)=>w`<gds-date-part-spinner
                  id="spinner-${e}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${t.token==="y"?4:2}
                  .value=${l(this,n,zt).call(this,t.name)}
                  aria-valuemin=${l(this,n,Pt).call(this,t.name)}
                  aria-valuemax=${l(this,n,lt).call(this,t.name)}
                  aria-label=${l(this,n,Lt).call(this,t.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${l(this,n,lt).call(this,t.name).toString().length}
                  @keydown=${p(this,_t)}
                  @change=${a=>p(this,$t).call(this,a.detail.value,t.name)}
                  @focus=${p(this,ht)}
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
          aria-label="${h("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${O(this.size==="small",()=>w`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${O(l(this,n,Et).call(this),()=>w`<gds-form-control-footer
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
        @gds-ui-state=${p(this,vt)}
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
              @click=${p(this,yt)}
              aria-label=${h("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${p(this,gt)}
              .maxHeight=${300}
              label="${h("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${h("January")}</gds-option>
              <gds-option value="1">${h("February")}</gds-option>
              <gds-option value="2">${h("March")}</gds-option>
              <gds-option value="3">${h("April")}</gds-option>
              <gds-option value="4">${h("May")}</gds-option>
              <gds-option value="5">${h("June")}</gds-option>
              <gds-option value="6">${h("July")}</gds-option>
              <gds-option value="7">${h("August")}</gds-option>
              <gds-option value="8">${h("September")}</gds-option>
              <gds-option value="9">${h("October")}</gds-option>
              <gds-option value="10">${h("November")}</gds-option>
              <gds-option value="11">${h("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${p(this,ft)}
              .maxHeight=${300}
              label="${h("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${ke(p(this,n,Rt),t=>t,t=>w`<gds-option value=${t}>${t}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${p(this,mt)}
              aria-label=${h("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${p(this,pt)}
            @gds-date-focused=${p(this,j)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${O(this.clearable||l(this,n,rt).call(this)||!!this._outOfRangeAction,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                <gds-flex align-items="center" gap="xs">
                  ${O(this.clearable,()=>w` <gds-button
                        id="clear-button"
                        rank="tertiary"
                        size="small"
                        @click=${t=>{t.stopPropagation(),this.value=void 0,this.open=!1,l(this,n,N).call(this),l(this,n,E).call(this)}}
                        aria-label=${h("Clear selected date")}
                      >
                        ${h("Clear")}
                      </gds-button>`)}
                  ${l(this,n,Tt).call(this)}
                </gds-flex>
                ${O(l(this,n,rt).call(this),()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${t=>{t.stopPropagation(),l(this,n,Dt).call(this,new Date)}}
                      aria-label=${h("Select today's date")}
                    >
                      ${h("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleOutOfRangeChange(){l(this,n,Nt).call(this)}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){R(this,M,{year:l(this,n,A).call(this,"year"),month:l(this,n,A).call(this,"month"),day:l(this,n,A).call(this,"day")});return}const t=this.value;this._focusedMonth=t.getMonth(),this._focusedYear=t.getFullYear();const e=t.getFullYear().toString(),a=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0");R(this,M,{year:e,month:a,day:i})}_handleOpenChange(){this.open&&(R(this,G,this.value),this._elCalendar.then(t=>t.focus()))}};X=new WeakMap;G=new WeakMap;n=new WeakSet;Et=function(){return!this.plain};Tt=function(){if(!this._outOfRangeAction)return ne;const t=this._outOfRangeAction==="max";return w`<gds-button
      id="back-to-valid-range-button"
      rank="tertiary"
      size="small"
      @click=${e=>{e.stopPropagation(),l(this,n,Dt).call(this,t?this.max:this.min)}}
    >
      ${t?h("Last available date"):h("First available date")}
    </gds-button>`};Nt=async function(){const t=await this.getFocusedDate();t?t>this.max&&!L(t,this.max)?this._outOfRangeAction="max":t<this.min&&!L(t,this.min)?this._outOfRangeAction="min":this._outOfRangeAction=void 0:this._outOfRangeAction=void 0};Mt=function(t){const e=ge(t,12);return e.setUTCHours(this.utcHours,0,0,0),e};Dt=function(t){const e=l(this,n,Mt).call(this,t);this._elCalendar.then(a=>a.focusedDate=e).then(p(this,j)).then(()=>this._elCalendar).then(a=>a.updateComplete.then(()=>a.focus()))};rt=function(){if(this.hideTodayButton)return!1;const t=l(this,n,Mt).call(this,new Date);if((t<this.min||t>this.max)&&!L(t,this.min)&&!L(t,this.max))return!1;const a=t.getDay()===0||t.getDay()===6;return this.disabledWeekends&&a?!1:!this.disabledDates?.some(i=>L(i,t))};Lt=function(t){return`${{year:h("Year"),month:h("Month"),day:h("Day")}[t]} ${this.label}`};Pt=function(t){return{year:1900,month:1,day:1}[t]};lt=function(t){return{year:9999,month:12,day:31}[t]};A=function(t){return{year:h("yyyy"),month:h("mm"),day:h("dd")}[t]};zt=function(t){return this.value?p(this,M)[t]:l(this,n,A).call(this,t)};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};N=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ht=new WeakMap;dt=new WeakMap;ut=new WeakMap;ct=new WeakMap;pt=new WeakMap;gt=new WeakMap;ft=new WeakMap;mt=new WeakMap;yt=new WeakMap;j=new WeakMap;vt=new WeakMap;_t=new WeakMap;bt=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],a=t.split(e),i=a.findIndex(c=>c==="y"),s=a.findIndex(c=>c==="m"),d=a.findIndex(c=>c==="d");if(i===-1||s===-1||d===-1)throw new Error("Invalid date format for <gds-datepicker>");const b=[i,s,d].sort((c,C)=>c-C).map(c=>a[c]).map(c=>({token:c,name:c==="y"?"year":c==="m"?"month":"day"}));return{delimiter:e,layout:b}};$t=new WeakMap;M=new WeakMap;Rt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),a=p(this,n,Bt),i=this.value?.getFullYear();return{*[Symbol.iterator](){a&&(yield i);for(let s=t;s<=e;s++)yield s}}};Bt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};o.styles=[Qt,de,Ce];r([g({converter:xt})],o.prototype,"value",1);r([g({converter:xt})],o.prototype,"min",2);r([g({converter:xt})],o.prototype,"max",2);r([g({type:Boolean})],o.prototype,"open",2);r([g({attribute:"supporting-text"})],o.prototype,"supportingText",2);r([g({type:String})],o.prototype,"size",2);r([g({type:Boolean})],o.prototype,"plain",2);r([g({type:Boolean,attribute:"show-week-numbers"})],o.prototype,"showWeekNumbers",2);r([g({type:Boolean,attribute:"hide-label"})],o.prototype,"hideLabel",2);r([g({type:Boolean,attribute:"clearable"})],o.prototype,"clearable",2);r([g({type:Boolean,attribute:"hide-today-button"})],o.prototype,"hideTodayButton",2);r([g({type:Number,attribute:"utc-hours"})],o.prototype,"utcHours",1);r([g()],o.prototype,"dateformat",1);r([g({type:Boolean,attribute:"disabled-weekends"})],o.prototype,"disabledWeekends",2);r([g({converter:ue,attribute:"disabled-dates"})],o.prototype,"disabledDates",2);r([g({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],o.prototype,"showExtendedSupportingText",2);r([tt("#calendar-button")],o.prototype,"test_calendarButton",2);r([Z("#clear-button")],o.prototype,"test_clearButton",2);r([Z("#today-button")],o.prototype,"test_todayButton",2);r([Z("#back-to-valid-range-button")],o.prototype,"test_backToValidRangeButton",2);r([P()],o.prototype,"_focusedMonth",2);r([P()],o.prototype,"_focusedYear",2);r([P()],o.prototype,"_dateFormatLayout",2);r([P()],o.prototype,"_outOfRangeAction",2);r([P()],o.prototype,"_currentLocale",2);r([tt("#calendar")],o.prototype,"_elCalendar",2);r([tt("#calendar-button")],o.prototype,"_elTrigger",2);r([tt("#field")],o.prototype,"_elFieldAsync",2);r([$e("[role=spinbutton]")],o.prototype,"_elSpinners",2);r([Z("#field")],o.prototype,"_elField",2);r([Q(["value","min","max","open","_focusedMonth","_focusedYear"])],o.prototype,"_handleOutOfRangeChange",1);r([Q("value")],o.prototype,"_handleValueChange",1);r([Q("open")],o.prototype,"_handleOpenChange",1);o=r([Zt({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),re()],o);let Ft=class extends te(ee(ae(o))){};Ft=r([Wt("gds-datepicker",{dependsOn:[he,oe,le,pe,_e,fe,me,ye,ve]})],Ft);export{Ft as G,ke as c};
